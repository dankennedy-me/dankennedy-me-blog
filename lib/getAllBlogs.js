// lib/getAllBlogs.js

export default async function GetAllBlogs() {
    const res = await fetch('https://cms.dankennedy.me/items/blog', {next:{revalidate:0}})
    const json = await res.json()
    return json
}
