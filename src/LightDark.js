//Build a context provider that allows users to switch between light and dark themes,and use the context in different parts of the app to apply the selected theme.
import React from 'react'
import { useTheme } from './LightDarkThemeContext'

const LightDark = () => {
    const {isDarkMode,toggleTheme} = useTheme();
  return (
    <div>
        <input type='checkbox' checked={isDarkMode} onChange={toggleTheme}/>
        darkMode
    </div>
  )
}

export default LightDark
