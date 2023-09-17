// lib/getAllBlogs.js

// blog posts for front page
export default async function GetAllBlogs() {
    const res = await fetch('https://cms.dankennedy.me/files?filter[folder]=0e3449c5-a8e8-41cb-bfdf-a162b02638f1')
    const json = await res.json()
    
    return json
}