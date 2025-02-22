import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia'
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const payment_intent = searchParams.get('payment_intent');

  if (!payment_intent) {
    return NextResponse.json(
      { error: 'Payment intent ID required' },
      { status: 400 }
    );
  }

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent);
    
    return NextResponse.json({
      status: paymentIntent.status,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
} 