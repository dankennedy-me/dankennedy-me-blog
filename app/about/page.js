// app/about/page.js

import React from 'react'
import getAboutPage from 'lib/getAboutPage'
import About
 from './components/About'

 export const metadata = {
  title: 'About: Dan\'s Blog',
  description:'Hi, and thanks for stopping by my little nook on the web. My name is Dan, and I am a web developer. Today I am considered a full stack developer...'
}

export default async function Page() {
  const page = await getAboutPage()
 
  return (
        <About body={page.body} />
  )
}
