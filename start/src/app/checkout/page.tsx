"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // Import this to get query params
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import type { Appearance } from '@stripe/stripe-js';
import CheckoutForm from '@/components/CheckoutForm';
import { formatCurrency } from '@/utils/currency';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const [productPrice, setProductPrice] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [orderTotal, setOrderTotal] = useState({
    subtotal: 0,
    deliveryFee: 0, // 1,200.00 in cents
    total: 0,
  });

  // ✅ Add this here to extract price from URL
  const searchParams = useSearchParams();
  const productPriceQuery = searchParams ? searchParams.get('price') : null;

  useEffect(() => {
    if (productPriceQuery) {
      const price = parseInt(productPriceQuery, 10) * 100;
      setProductPrice(price);
      setOrderTotal({
        subtotal: price,
        deliveryFee: price*0.1, 
        total: price + price*0.1, 
      });
    }
  }, [productPriceQuery]);

  const appearance: Appearance = {
    theme: 'stripe',
  };

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
            {orderTotal.total > 0 ? (
              <Elements 
                stripe={stripePromise} 
                options={{ 
                  appearance,
                  mode: 'payment',
                  currency: 'lkr',
                  amount: orderTotal.total // ✅ Now dynamically updated
                }}
              >
                <CheckoutForm setLoading={setLoading} orderTotal={orderTotal} />
              </Elements>
            ) : (
              <p className="text-red-500">Invalid product price. Please check the URL and try again.</p>
            )}
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <div className="space-y-4">
              {/* <div className="flex items-center space-x-4">
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
              </div> */}

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
