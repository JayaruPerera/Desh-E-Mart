'use client';

import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import type { Appearance } from '@stripe/stripe-js';
import CheckoutForm from '@/components/CheckoutForm';
import { formatCurrency } from '@/utils/currency';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const appearance: Appearance = {
  theme: 'night' as const,
  variables: {
    colorPrimary: '#dc2626',
    colorBackground: '#1f2937',
    colorText: '#ffffff',
    colorTextSecondary: '#9ca3af',
    colorTextPlaceholder: '#9ca3af',
    colorIconTab: '#ffffff',
    borderRadius: '0.5rem',
    fontFamily: 'inherit',
    spacingUnit: '4px',
    spacingGridRow: '16px',
  },
  rules: {
    '.Tab, .Input': {
      backgroundColor: '#374151',
      border: '1px solid #4B5563',
      borderRadius: '0.5rem',
      padding: '0.75rem 1rem',
    },
    '.Tab:hover': {
      backgroundColor: '#4B5563',
    },
    '.Tab--selected': {
      backgroundColor: '#4B5563',
      borderColor: '#dc2626',
    },
    '.Input--invalid': {
      borderColor: '#ef4444',
    },
    '.Input:focus': {
      borderColor: '#dc2626',
      boxShadow: '0 0 0 1px #dc2626, 0 0 0 4px rgba(220, 38, 38, 0.1)',
    },
    '.Label': {
      color: '#ffffff',
    },
    '.Error': {
      color: '#ef4444',
    }
  }
};

interface OrderTotal {
  subtotal: number;
  deliveryFee: number;
  total: number;
}

const orderTotal: OrderTotal = {
  subtotal: 36760000, // 367,600.00 in cents
  deliveryFee: 120000, // 1,200.00 in cents
  total: 36880000, // 368,800.00 in cents
};

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <button onClick={() => window.history.back()} className="text-gray-400 hover:text-white">
            ← Back
          </button>
          <h1 className="text-2xl font-semibold mt-4">Add delivery details</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-gray-800 p-6 rounded-lg">
            <Elements 
              stripe={stripePromise} 
              options={{ 
                appearance,
                mode: 'payment',
                currency: 'lkr',
                amount: orderTotal.total
              }}
            >
              <CheckoutForm setLoading={setLoading} orderTotal={orderTotal} />
            </Elements>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-700 rounded-lg">
                  <img
                    src="/samsung-s23-ultra.jpg"
                    alt="Samsung Galaxy S23 Ultra"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Samsung Galaxy S23 Ultra</h3>
                  <p className="text-gray-400">Original Samsung Galaxy S23 Ultra 5G</p>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>{formatCurrency(orderTotal.subtotal)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Delivery fee</span>
                  <span>{formatCurrency(orderTotal.deliveryFee)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-700">
                  <span>Total</span>
                  <span>{formatCurrency(orderTotal.total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 