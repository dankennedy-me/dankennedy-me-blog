import React from 'react'

export default async function GetBlogPost({ slug }) {
  const res =  await fetch(`https://cms.dankennedy.me/items/blog?filter[slug]=${slug}`, {next:{revalidate: 0}}).then((res) => res.json())
  const json = res.data

  return json
}
