// app/blog/[slug]/page.js

import GetBlogPost from "@/lib/getBlogPost"
import BlogPageData from "@/app/blog/[slug]/components/BlogPageData"

export async function generateStaticParams() {
    const res = await fetch('https://cms.dankennedy.me/items/blog').then((res) => res.json())
    const posts = res.data
   
    return posts.map((post) => ({
      slug: post.slug,
      body: post.body
    }))
  }
  
  // return 404 if page doesn't exist
  export const dynamicParams = true;

  export default async function Page({ params }) {
    const slug = await params
    const res = await GetBlogPost(slug)

    return (
        <main>
            <BlogPageData data={res} />
        </main>
    )
  }

  // the metadata
  export async function generateMetadata({ params }) {
    const slug = await params
    const blogTitle = ': Dan\'s Blog'
    const res = await GetBlogPost(slug)

    return {
      title: res[0].title + blogTitle,
      description: res[0].body.substring(0,154) + '...'
    }
  }