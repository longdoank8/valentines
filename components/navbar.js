import Logo from './logo'
import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import ThemetoggleButton from './theme-toggle-button'




const Navbar = props => {
  const { } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#FEDBB9', '#FD7285')}
      css={{ backdropFilter: 'blur(40px)' }}
      zIndex={2}
      {...props}
    >

      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >

        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
        </Stack>

        <Box flex={1} align="right">
          <ThemetoggleButton />
        </Box>

      </Container>
    </Box>
  )
}

export default Navbar