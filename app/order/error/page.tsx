import React from "react"
import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import Link from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

export default function OrderErrorPage(): React.JSX.Element {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      direction={'column'}
      minH={'100vh'}
      bg='#F8F3EA'
    >
      <VStack spacing={6}>
        <Heading as={'h1'} size={'4xl'} color='#F3B391'>Oops :(</Heading>
        
        <Text fontSize={'lg'}>Something went wrong when placing your order.</Text>

        <ChakraLink as={Link} href="/">
          <Button
            bg={'#3F612D'}
            color={'white'}
            _hover={{ bgImage: 'linear-gradient(90deg, rgba(243,179,145,1) 0%, rgba(63,97,45,1) 100%)' }}
            fontSize={'1.25rem'}
            letterSpacing={'0.015rem'}
            textTransform={'uppercase'}
            borderRadius='8px'
            py='6'
            px='8'
            lineHeight={1}
            size={'md'}
          >
            Back Home
          </Button>
        </ChakraLink>
      </VStack>
    </Flex>
  )
}