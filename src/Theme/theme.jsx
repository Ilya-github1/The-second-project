import React from 'react'
import { useState, useEffect } from 'react'
import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import { useDispatch } from 'react-redux'

export const Theme = () => {
  const dispatch = useDispatch()
  const [theme, setTheme] = useState('theme1')
  const Newtheme = () => {
    setTheme(theme === 'theme1' ? 'theme2' : 'theme1')
  }
  useEffect(() => {
    const button_bg_color = `var(--button-bg-color-${theme})`
    const background_color2 = `var(--background-color2-${theme})`
    const backgroundColor = `var(--background-color-${theme})`
    const fontColor = `var(--font-color-${theme})`
    const fontColors = `var(--font-colors-${theme})`

    document.body.style.setProperty('--button-bg', button_bg_color)
    document.body.style.setProperty('--font-colors', fontColors)
    document.body.style.setProperty('--font-color', fontColor)
    document.body.style.setProperty('--background-color', backgroundColor)
    document.body.style.setProperty('--background-color2', background_color2)
  }, [theme])
  return (
    <>
      <div className="theme-btn"><button className="theme-btnw"
        onClick={() => dispatch(Newtheme())}>
        {theme === 'theme1' ? <BsFillMoonFill className='No-moon' />
          : <BsMoon className='Moon' />}</button></div>
      <div className="made"><h3>made by <br />Ilya-github1</h3></div>
    </>
  )
}
