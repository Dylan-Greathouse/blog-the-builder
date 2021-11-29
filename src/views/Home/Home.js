/* eslint-disable prettier/prettier */


import React from 'react'
import { useState } from 'react'

import Preview from '../../components/Preview/Preview'
import Editor from '../../components/Editor/Editor'

import './Home.css'

export default function Home() {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [font, setFont] = useState('')
  const [align, setAlign] = useState()
  const [text, setText] = useState()
  // add useState calls here for title, subtitle, font, align, and text
  
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title}
        font={font}
        subtitle={subtitle}
        align={align}
        text={text}
      />
      <Editor title={title}
        setTitle={setTitle}
        font={font}
        setFont={setFont}
        subtitle={subtitle}
        setSubtitle={setSubtitle}
        align={align}
        setAlign={setAlign}
        text={text}
        setText={setText}/>
    </main>
  )
}
