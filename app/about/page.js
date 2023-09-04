// app/about/page.js

import React from 'react'
import getAboutPage from 'lib/getAboutPage'
import About
 from './components/About'

 export const metadata = {
  title: 'About: Dan\'s Blog',
}

export default async function Page() {
  const page = await getAboutPage()
 
  return (
        <About body={page.body} />
  )
}
