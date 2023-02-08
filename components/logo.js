import { Text, useColorModeValue } from '@chakra-ui/react'


const Logo = () => {
 
  return (
    <a>      
        <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        fontFamily='M PLUS Rounded 1c'
        fontWeight="bold"
        ml={3}
        >
            Valentine&apos;s Day
        </Text>
    </a>
  )
}

export default Logo
