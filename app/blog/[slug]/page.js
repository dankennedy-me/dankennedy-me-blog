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

  export const dynamicParams = false;

  export default async function Page({ params }) {
    const slug = await params
    const res = await GetBlogPost(slug)
    console.log(res)
    return (
        <main>
            <BlogPageData data={res} />
        </main>
    )
  }

  export async function generateMetadata({ params }) {
    const slug = await params
    const blogTitle = ': Dan\'s Blog'
    const res = await GetBlogPost(slug)

    return {
      title: res[0].title + blogTitle,
    }
  }