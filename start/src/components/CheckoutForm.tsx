'use client';

import { useState, FormEvent } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { formatCurrency } from '@/utils/currency';

interface CheckoutFormProps {
  setLoading: (loading: boolean) => void;
  orderTotal: {
    subtotal: number;
    deliveryFee: number;
    total: number;
  };
}

// Add these constants at the top of the file, outside the component
const PROVINCES = [
  'Central',
  'Eastern',
  'North Central',
  'Northern',
  'North Western',
  'Sabaragamuwa',
  'Southern',
  'Uva',
  'Western'
] as const;

const DISTRICTS: { [key: string]: string[] } = {
  'Sabaragamuwa': ['Ratnapura', 'Kegalle'],
  'Western': ['Colombo', 'Gampaha', 'Kalutara'],
  'Central': ['Kandy', 'Matale', 'Nuwara Eliya'],
  'Southern': ['Galle', 'Matara', 'Hambantota'],
  'Eastern': ['Trincomalee', 'Batticaloa', 'Ampara'],
  'North Western': ['Kurunegala', 'Puttalam'],
  'North Central': ['Anuradhapura', 'Polonnaruwa'],
  'Uva': ['Badulla', 'Monaragala'],
  'Northern': ['Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya']
};

// Add these SVG components at the top of the file
const VisaIcon = () => (
  <svg className="h-8" viewBox="0 0 780 501" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M293.2 136.208L230.6 364.698H180.4L211.2 184.008C209.9 189.908 216.8 182.608 213.1 186.508C209.4 190.408 181.6 186.508 171.8 186.508L173.1 180.108L189.1 180.108C207.1 180.108 219.3 183.508 225.6 190.408C231.9 197.308 233.5 207.608 230.6 221.408L207.8 364.708H157.5L189.1 211.008C190.4 204.908 189.7 200.508 187.1 197.608C184.5 194.708 178.9 193.308 170.4 193.308L154.4 193.308L171.8 136.208H293.2Z" fill="#1434CB"/>
    <path d="M408.3 180.108C426.3 180.108 438.5 183.508 444.8 190.408C451.1 197.308 452.7 207.608 449.8 221.408L427 364.708H376.7L408.3 211.008C409.6 204.908 408.9 200.508 406.3 197.608C403.7 194.708 398.1 193.308 389.6 193.308L373.6 193.308L391 136.208H408.3V180.108Z" fill="#1434CB"/>
    <path d="M482.8 136.208L420.2 364.698H370L432.6 136.208H482.8Z" fill="#1434CB"/>
    <path d="M542.7 136.208L480.1 364.698H429.9L492.5 136.208H542.7Z" fill="#1434CB"/>
  </svg>
);

const MastercardIcon = () => (
  <svg className="h-8" viewBox="0 0 780 501" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M364.5 198.608C332.9 198.608 307.3 224.208 307.3 255.808C307.3 287.408 332.9 313.008 364.5 313.008C396.1 313.008 421.7 287.408 421.7 255.808C421.7 224.208 396.1 198.608 364.5 198.608Z" fill="#EA001B"/>
    <path d="M415.5 198.608C383.9 198.608 358.3 224.208 358.3 255.808C358.3 287.408 383.9 313.008 415.5 313.008C447.1 313.008 472.7 287.408 472.7 255.808C472.7 224.208 447.1 198.608 415.5 198.608Z" fill="#FFA200" fillOpacity="0.8"/>
  </svg>
);

export default function CheckoutForm({ setLoading, orderTotal }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    district: '',
    postcode: '',
  });
  const [loading, setLoadingState] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === 'cod') {
      // Handle cash on delivery order
      try {
        // Make API call to your backend to create order
        const response = await fetch('/api/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            paymentMethod: 'cod',
            amount: orderTotal.total,
          }),
        });
        
        if (!response.ok) throw new Error('Order creation failed');
        
        // Redirect to success page
        window.location.href = '/order/success';
      } catch (err: any) {
        setError(err.message || 'Failed to create order');
      }
      return;
    }

    if (!stripe || !elements) {
      return;
    }

    setLoadingState(true);
    setError(null);

    try {
      // Validate the form
      const { error: submitError } = await elements.submit();
      if (submitError) {
        throw submitError;
      }

      // Create payment intent
      // const response = await fetch('/api/create-payment-intent', {
      const response = await fetch('/api/verify-payment/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: orderTotal.total,
          payment_method_types: ['card'],
        }),
      });

      if (!response.ok) {
        throw new Error('Payment intent creation failed');
      }

      const { clientSecret } = await response.json();

      // Confirm the payment
      const { error: confirmError } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success`,
          payment_method_data: {
            billing_details: {
              name: formData.name,
              phone: formData.phone,
              address: {
                line1: formData.address,
                city: formData.city,
                state: formData.province,
                postal_code: formData.postcode,
              },
            },
          },
        },
      });

      if (confirmError) {
        throw confirmError;
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during payment');
      setLoadingState(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-lg space-y-4">
        <h2 className="text-lg font-medium">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name (e.g., Jayaru Perera)"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 
                       text-white placeholder-gray-400 focus:outline-none focus:border-red-600 
                       focus:ring-1 focus:ring-red-600 focus:ring-opacity-50"
            required
          />
          <input
            type="tel"
            placeholder="Phone (e.g., 0765637843)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2 rounded bg-gray-700"
            required
          />
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg space-y-4">
        <h2 className="text-lg font-medium">Delivery Address</h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Home (e.g., Pambahinna)"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 
                      text-white placeholder-gray-400 focus:outline-none focus:border-red-600 
                      focus:ring-1 focus:ring-red-600 focus:ring-opacity-50"
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              value={formData.province}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  province: e.target.value,
                  district: ''
                });
              }}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 
                        text-white focus:outline-none focus:border-red-600 
                        focus:ring-1 focus:ring-red-600 focus:ring-opacity-50"
              required
            >
              <option value="" disabled selected>Select your province</option>
              {PROVINCES.map((province) => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>

            <select
              value={formData.district}
              onChange={(e) => setFormData({ ...formData, district: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 
                        text-white focus:outline-none focus:border-red-600 
                        focus:ring-1 focus:ring-red-600 focus:ring-opacity-50"
              required
              disabled={!formData.province}
            >
              <option value="" disabled selected>Select your district</option>
              {formData.province && DISTRICTS[formData.province].map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City (e.g., Balangoda)"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 
                        text-white placeholder-gray-400 focus:outline-none focus:border-red-600 
                        focus:ring-1 focus:ring-red-600 focus:ring-opacity-50"
              required
            />
            <input
              type="text"
              placeholder="Post code (e.g., 60074)"
              value={formData.postcode}
              onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 
                        text-white placeholder-gray-400 focus:outline-none focus:border-red-600 
                        focus:ring-1 focus:ring-red-600 focus:ring-opacity-50"
              required
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 space-y-6">
        <h2 className="text-lg font-medium text-white">Payment Methods</h2>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-6 rounded-lg bg-gray-700 border border-gray-600 hover:border-gray-500 transition-colors">
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={(e) => setPaymentMethod('card')}
              className="w-5 h-5 text-red-600 focus:ring-red-600 focus:ring-offset-gray-700"
            />
            <label htmlFor="card" className="flex items-center justify-between w-full">
              <span className="text-lg">Pay by card</span>
              <div className="flex space-x-2">
                <VisaIcon />
                <MastercardIcon />
              </div>
            </label>
          </div>

          <div className="flex items-center space-x-4 p-6 rounded-lg bg-gray-700 border border-gray-600 hover:border-gray-500 transition-colors">
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={(e) => setPaymentMethod('cod')}
              className="w-5 h-5 text-red-600 focus:ring-red-600 focus:ring-offset-gray-700"
            />
            <label htmlFor="cod" className="flex items-center justify-between w-full">
              <span className="text-lg">Cash on delivery</span>
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </label>
          </div>
        </div>

        {paymentMethod === 'card' && (
          <div className="space-y-6">
            <h3 className="text-lg text-gray-300">Card Information</h3>
            <div className="space-y-6">
              <PaymentElement 
                options={{
                  layout: {
                    type: 'tabs',
                    defaultCollapsed: false,
                  },
                }}
              />
              <div className="flex items-center space-x-2 text-sm text-green-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Your payment information is safe with us</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="bg-red-500 bg-opacity-10 border border-red-500 
                        text-red-500 p-4 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="flex space-x-4">
        <button
          type="submit"
          disabled={!stripe || loading}
          className={`flex-1 bg-red-600 text-white font-medium py-3 px-4 rounded-lg
            hover:bg-red-700 transition duration-150 ease-in-out
            disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`}
        >
          {loading ? 'Processing...' : paymentMethod === 'card' ? 'Pay Now' : 'Place Order'}
        </button>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-gray-700 text-white rounded-lg
                    hover:bg-gray-600 transition-colors duration-150
                    focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Cancel
        </button>
      </div>

      <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-700">
        <span>Total</span>
        <span>{formatCurrency(orderTotal.total)}</span>
      </div>
    </form>
  );
} 