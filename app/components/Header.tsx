'use client'

import React, { useState } from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

type MenuLinkProps = {
  children: any
  asButton?: boolean
  isLast?: boolean
  to: string
}
const MenuLink = ({ children, asButton = false, isLast, to = "/", ...rest }: MenuLinkProps): React.JSX.Element => {
  if (asButton) {
    return (
      <Text
        mb={{ base: isLast ? 0 : 2, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 2 }}
        display="block"
        {...rest}
      >
        <ChakraLink
          as={Link}
          href={to}
          className='group'
        >
          <Button
            px={6}
            py={5}
            borderRadius={'5px'}
            color={'#F3B391'}
            fontSize={'18px'}
            fontWeight={'700'}
            textTransform={'uppercase'}
            letterSpacing={'0.075rem'}
            bg={'transparent'}
            border={'2px solid #F3B391'}
            _groupHover={{
              bg: '#3F612D',
              color: '#F3B391',
              borderColor: '#3F612D'
            }}
          >
            { children }
          </Button>
        </ChakraLink>
      </Text>
    )
  } else {
    return (
      <Text
        mb={{ base: isLast ? 0 : 2, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 2 }}
        display="block"
        {...rest}
      >
        <ChakraLink
          as={Link}
          href={to}
          color={'#F3B391'}
          fontSize={'18px'}
          fontWeight={'700'}
          textTransform={'uppercase'}
          letterSpacing={'0.075rem'}
          _hover={{
            textDecoration: 'none',
            color: '#3F612D'
          }}
        >
          { children }
        </ChakraLink>
      </Text>
    )
  }
}

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#F3B391" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#F3B391" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
)

export default function Header(): React.JSX.Element {
  const [show, setShow] = useState(false)

  return (
    <Flex
      as='nav'
      w={'100%'}
      position={'absolute'}
      zIndex={100}
      top={0}
      left={0}
      alignItems={'center'}
      justifyContent={'space-between'}
      wrap={'wrap'}
      h={'6rem'}
      px={'2rem'}
      bg={'transparent'}
      transition={'all 300ms ease-in-out'}
      _hover={{
        bgColor: '#F8F3EA'
      }}
    >
      <Flex align={'center'}>
        <ChakraLink as={Link} href='/' transition={'transform 300ms ease-in-out'} _hover={{ transform: 'scale(1.2)' }}>
          <Text
            bgGradient='linear(to-l, #3F612D, #F3B391)'
            bgClip='text'
            fontSize={'3xl'}
            letterSpacing={'0.075rem'}
            fontWeight={'600'}
          >A-SHOP.</Text>
        </ChakraLink>
      </Flex>

      <Box display={{ base: "block", md: "none" }} position={'relative'} zIndex={1} onClick={() => setShow(!show)}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        transform={{ base: show ? 'translateX(0)' : 'translateX(100%)', md: 'translateX(0)'}}
        position={{ base: 'absolute', md: 'relative'}}
        top={0}
        right={0}
        h={{ base: '100vh', md: 'auto'}}
        w={{ base: '100%', md: 'auto' }}
        bg={{ base: '#F8F3EA', md: 'transparent' }}
        flexBasis={{ base: "100%", md: "auto" }}
        transition={'transform 500ms ease-in-out'}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          columnGap={'3rem'}
          rowGap={'3rem'}
          pt={[4, 4, 0, 0]}
          mt={{ base: '6rem', md: 0 }}
        >
          <MenuLink to='/'>Shop</MenuLink>
          <MenuLink to='/'>About</MenuLink>
          <MenuLink to='/' asButton isLast>Contact</MenuLink>
        </Flex>
      </Box>
    </Flex>
  )
}