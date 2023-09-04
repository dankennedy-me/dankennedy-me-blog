import { extendTheme } from '@chakra-ui/react'
import { withProse } from '@nikolovlazar/chakra-ui-prose'

const theme = extendTheme(
  {
    // your own theme
  },
  withProse(),
)

export default theme