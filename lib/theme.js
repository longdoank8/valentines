import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#FFCBA5', '#FD8B7E')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#FEDBB9',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        basestyle: props => ({
            color: modemode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
  }
  
  const colors = {
    grassTeal: '#88ccca'
  }
  
  const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
  
  const theme = extendTheme({ config, styles, components, fonts, colors })
  export default theme
  