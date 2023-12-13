'use server'

import { redirect } from "next/navigation"
import { headers } from 'next/headers'
import type { Stripe } from "stripe"
import { stripe } from "../lib/stripe"

// https://stripe.com/docs/checkout/quickstart?client=next
export async function createCheckoutsession(): Promise<void> {
  const params: Stripe.Checkout.SessionCreateParams = {
    mode: 'payment', // one-time purchase
    line_items: [
      {
        // price_data: {}, // define product info on the fly
        price: process.env.STRIPE_PAYMENT_ID, // predefined price id for product created in stripe
        quantity: 1,
      },
    ],
    success_url: `${headers().get('origin')}/order/success?session_id={CHECKOUT_SESSION_ID}`, // success url for stripe to redirect to
    cancel_url: `${headers().get('origin')}/order/error`, // cancel url for stripe to redirect to
  }

  const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params)

  redirect(checkoutSession.url as string)
}

// https://stripe.com/docs/api/checkout/sessions/retrieve
export async function retrieveSession(session_id: string): Promise<Stripe.Checkout.Session> {
  return await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent'],
  })
}