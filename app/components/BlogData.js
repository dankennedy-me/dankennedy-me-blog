// app/components/BlogData.js

'use client'

import React from 'react'
import Link from 'next/link'
import GetAllBlogs from '@/lib/getAllBlogs'
import { Box, Container, Divider, Text } from '@chakra-ui/react'
import { Prose } from "@nikolovlazar/chakra-ui-prose";

export default async function BlogData() {
    const res = await GetAllBlogs()
    const blogData = res.data
  
    return (
    <Container>
      {blogData.map((blog) => (
        <Prose>
        <Box mt={'2rem'} mb={'2rem'} as={'div'} key={blog.id}>
            <Text as={'h2'} fontSize={'4xl'}>
              <Link title='Click for full post' href={'blog/'+blog.slug}>{blog.title}</Link>
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
