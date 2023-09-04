// app/blog/[slug]/components/BlogPageData.js

'use client'

import React from 'react'
import Link from 'next/link'
import { Box, Container, Divider, Text } from '@chakra-ui/react'
import { Prose } from "@nikolovlazar/chakra-ui-prose";

export default async function BlogData({...props}) {
  
    return (
    <Container>
      
      {props.data.map((blog) => (
        <Prose>
        <Box mt={'2rem'} mb={'2rem'} as={'div'} key={blog.id}>
            <Text as={'h2'} fontSize={'4xl'}>
                {blog.title}
            </Text>
            <Box as={'div'} dangerouslySetInnerHTML={{ __html: blog.body }} />
            <Text fontSize={'sm'} float={'right'} opacity={'0.5'}>
                {new Date(blog.date_created).toLocaleDateString('en-us')}
            </Text>
            <Divider />
        </Box>
        </Prose>
        ))}
    </Container>
  )
}
