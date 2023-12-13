import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export default function OrderSuccess(): React.JSX.Element {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      direction={'column'}
      minH={'100vh'}
      bg='#F8F3EA'
    >
      <VStack spacing={8} w={{ base: '80%', md: '40%'}} textAlign={'center'}>
        <Text fontSize={'lg'} color={'#3F612D'}>You Have Great Taste!</Text>
        <Heading as={'h1'} size={'4xl'} color='#F3B391'>Thank you for your order!</Heading>

        <Box bg={'#F3B391'} p={6}>
          <Text fontSize={'sm'}>Velit sint enim ex magna quis ipsum quis veniam est id culpa. Voluptate mollit et laborum veniam occaecat sit pariatur Lorem ex veniam. Sunt id eiusmod reprehenderit occaecat adipisicing deserunt voluptate sunt laborum nulla. Incididunt laborum nisi sint sit labore nostrud amet esse in. Exercitation magna labore tempor officia labore Lorem sunt excepteur veniam. Mollit ad ipsum aute fugiat nisi quis exercitation. Consequat reprehenderit irure consectetur elit enim qui nulla nulla anim commodo mollit duis.</Text>
        </Box>

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
          <Text>View Order Confirmation</Text>
        </Button>
      </VStack>
    </Flex>
  )
}