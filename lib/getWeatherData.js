// lib/getWeatherData.js

export default async function getWeatherData() {
  const res = await fetch(process.env.WX_UNDERGROUND, {next:{revalidate:900}}).then((res) => res.json())
  const json = await res.observations
  
  return json
}
