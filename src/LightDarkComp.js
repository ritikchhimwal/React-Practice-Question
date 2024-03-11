import React from 'react';
import { useTheme } from './LightDarkThemeContext';
import './LightDark.css';

const LightDarkComp = () => {
    const {isDarkMode} = useTheme();

    const ThemeClass = isDarkMode ? 'dark-theme' : 'light-theme';
  return (
    <div className={`container ${ThemeClass}`}>
        <p>This component uses selected theme</p>
    </div>
  )
}

export default LightDarkComp
