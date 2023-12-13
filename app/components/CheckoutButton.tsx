'use client'; // all components in Next 13 by default are server components

import React from 'react'
import { Button } from '@chakra-ui/react'
import { createCheckoutsession } from '@actions';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
type CheckoutBtnProps = {
  text: string
}

export default function CheckoutButton({ text }: CheckoutBtnProps): React.JSX.Element {
  const handleCheckout = async (): Promise<void> => {
    try {
      createCheckoutsession()
    } catch (error) {
      console.log('Error in creating stripe checkout session')
    }
  }

  return (
    <Button
      onClick={handleCheckout}
      bg={'#3F612D'}
      transition={'all 300ms ease-in-out'}
      _hover={{
        bgGradient: 'linear(to-l, #3F612D, #F3B391)'
      }}
      color={'white'}
      fontSize={'1.25rem'}
      letterSpacing={'0.015rem'}
      textTransform={'uppercase'}
      borderRadius='8px'
      py='6'
      px='8'
      lineHeight={1}
      size={'md'}
    >
      { text }
    </Button>
  )
}