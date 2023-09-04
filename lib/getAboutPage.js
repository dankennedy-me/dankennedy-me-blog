export default async function GetBlogPost() {
  const res =  await fetch('https://cms.dankennedy.me/items/About', {next:{revalidate:0}}).then((res) => res.json())
  const json = res.data

  return json
}
