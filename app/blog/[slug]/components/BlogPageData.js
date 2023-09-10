// app/blog/[slug]/components/BlogPageData.js

'use client'

import React from 'react'
import { Box, Container, Divider, Text } from '@chakra-ui/react'
import { Prose } from "@nikolovlazar/chakra-ui-prose";

export default async function BlogData({...props}) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day:'numeric' }
    return (
    <Container>
      
      {props.data.map((blog) => (
        <Prose>
        <Box mt={'2rem'} mb={'2rem'} as={'div'} key={blog.id}>
            <Text as={'h2'} fontSize={'4xl'}>
                {blog.title} <br /> 
            </Text>
            <Box>{new Date(blog.date_created).toLocaleDateString('en-us', options)}</Box> 
            <Box as={'div'} dangerouslySetInnerHTML={{ __html: blog.body }} />
            <Divider />
        </Box>
        </Prose>
        ))}
    </Container>
  )
}
