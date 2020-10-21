"use strict";
import React, { useState, createContext, useEffect } from 'react'

export const dark_style = {
    text_color: 'white',
    backgroundColor: 'black',
    borderColor: 'rgba(255,255,255,.5)',
    header: 'rgba(0,0,0,.9)',
    heading: '#184050',
    subHeading: '#F8A000',
    fontFamily: 'sans-serif',
}
export const light_style = {
    text_color: 'black',
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,.5)',
    header: 'white',
    heading: '#184050',
    subHeading: 'black',
    fontFamily: 'sans-serif',

}
export const Theme = createContext(light_style)


const ThemeProvider = (props) => {
    const [Themes, changeTheme] = useState(light_style)
    const [IsLogged,changeIsLogged] = useState(false)
    const [CurrentLevel,changeCurrentLevel] = useState(1)
    
    return (
        <Theme.Provider value={[Themes, changeTheme,IsLogged,changeIsLogged,CurrentLevel,changeCurrentLevel]}>
            {props.children}
        </Theme.Provider>
    )
}
export default ThemeProvider