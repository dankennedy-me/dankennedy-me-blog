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
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <Container>
        {blogData.map((blog) => (
          <Prose>
            <Box mt={'2rem'} mb={'2rem'} as={'div'} key={blog.id}>
              <Text as={'h2'} fontSize={'4xl'}>
                <Link title='Click for full post' href={'blog/' + blog.slug}>{blog.title}</Link>
                <Text fontSize={'sm'} style={{ marginTop: '2rem' }}>
                  {new Date(blog.date_created).toLocaleDateString('en-us', options)}
                </Text>
              </Text>
              <Box as={'div'} dangerouslySetInnerHTML={{ __html: blog.body.substring(0,150)+ `<a href='/blog/${blog.slug}'>...[Continue]</a>` }} />
            </Box>
            <Divider />
          </Prose>
        ))}
    </Container>
  )
}
