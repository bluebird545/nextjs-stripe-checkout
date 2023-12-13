'use client'

import React, { useState } from 'react'
import { Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import CheckoutButton from '@components/CheckoutButton'

type Attribute = {
  [key: string]: any
}

type ProductProps = {
  name: string
  price: number
  description: string
  attributes: Attribute[]
  images: string[]
}

export default function ProductHero({ name, price, description, attributes, images }: ProductProps): React.JSX.Element {
  const [mainImg, setMainImg] = useState<string>(images[0])

  const ImageGriditems = images.map((image, i) => (
    <GridItem shadow={'2xl'} overflow={'hidden'} className='group' key={i}>
      <Image
        onClick={() => setMainImg(image)}
        src={image}
        w='100%'
        h='100%'
        transition={'all 300ms ease-in-out'}
        opacity={0.5}
        _hover={{ cursor: 'pointer', transform: 'scale(1.2)', opacity: 0.75 }}
      />
    </GridItem>
  ))

  const AttributeDisplay = attributes.map((attr, i) => (
    <Flex columnGap='0.75rem' key={i}>
      <Text fontWeight='500' letterSpacing='1px' textTransform='uppercase'>
        { Object.keys(attr) }
      </Text>
      <Text color='#1F2937' opacity='0.5'>
        { Object.values(attr) }
      </Text>
    </Flex>
  ))

  return (
    <Flex
      alignItems="center"
      justifyContent={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="nowrap"
      h={'100vh'}
      bg='#F8F3EA'
    >
      <Stack
        spacing={4}
        w={{ base: '80%', md: '40%'}}
        align={['center', 'center', 'flex-start', 'flex-start']}
        mx={'auto'}
      >
        <Heading
          as='h1'
          size={'4xl'}
          fontWeight='600'
          color='#3F612D'
          textAlign={['center', 'center', 'left', 'left']}
        >{name}</Heading>

        <Text fontSize='4rem' fontWeight='normal' color='#F3B391'>${price.toFixed(2)}</Text>

        <Text
          color='#1F2937'
          opacity='0.5'
          fontWeight='normal'
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
          maxW={['52ch']}
        >{description}</Text>

        {AttributeDisplay}

        <CheckoutButton text='Buy Now'></CheckoutButton>
      </Stack>

      <Stack
        w={{ base: "100%", md: "50%" }}
        h='100%'
        mb={{ base: 12, md: 0 }}
        spacing={4}
        position={'relative'}
      >
        <Image
          src={`${mainImg}?w=1740`}
          w='100%'
          h='100%'
          objectFit='cover'
          objectPosition='center'
        />

        <Grid
          position={'absolute'}
          bottom={0}
          px={[8, 24, 10, 32]}
          pb={6}
          templateColumns={`repeat(${images.length}, 1fr)`}
          columnGap={'1rem'}
        >
          { ImageGriditems }
        </Grid>
      </Stack>
    </Flex>
  )
}