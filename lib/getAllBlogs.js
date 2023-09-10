// lib/getAllBlogs.js

// blog posts for front page
export default async function GetAllBlogs() {
    const res = await fetch('https://cms.dankennedy.me/items/blog?sort=-id&limit=5', {next:{revalidate:0}})
    const json = await res.json()

    return json
}
