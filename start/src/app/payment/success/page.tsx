'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PaymentSuccess() {
  const [status, setStatus] = useState<'success' | 'processing' | 'error'>('processing');
  const searchParams = useSearchParams();
  const payment_intent = searchParams ? searchParams.get('payment_intent') : null;

  useEffect(() => {
    if (payment_intent) {
      // Verify payment status with your backend
      fetch(`/api/verify-payment?payment_intent=${payment_intent}`)
        .then(response => response.json())
        .then(data => {
          setStatus(data.status === 'succeeded' ? 'success' : 'error');
        })
        .catch(() => setStatus('error'));
    }
  }, [payment_intent]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-2xl mx-auto mt-20 text-center">
        {status === 'success' && (
          <>
            <h1 className="text-3xl font-bold text-green-500">Payment Successful!</h1>
            <p className="mt-4 text-gray-300">Your order has been placed successfully.</p>
          </>
        )}
        {status === 'processing' && (
          <>
            <h1 className="text-3xl font-bold text-yellow-500">Processing Payment...</h1>
            <p className="mt-4 text-gray-300">Please wait while we confirm your payment.</p>
          </>
        )}
        {status === 'error' && (
          <>
            <h1 className="text-3xl font-bold text-red-500">Payment Failed</h1>
            <p className="mt-4 text-gray-300">There was an error processing your payment.</p>
          </>
        )}
        <Link 
          href="/"
          className="mt-8 inline-block bg-red-600 text-white px-6 py-3 rounded-lg
                     hover:bg-red-700 transition duration-150 ease-in-out"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
} 