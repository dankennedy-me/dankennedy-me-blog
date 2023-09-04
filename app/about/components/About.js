// app/about/components/About.js

'use client'

import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import { Prose } from "@nikolovlazar/chakra-ui-prose"

export default function About({...props}) {
  
  return (
    <Container maxW="container.sm">
        <Prose>
        <Box p={4}>
            <Text as={'h2'}>About</Text>
            <Box as={'div'} dangerouslySetInnerHTML={{__html: props.body}} />
        </Box>
        </Prose>
    </Container>
  )
}
