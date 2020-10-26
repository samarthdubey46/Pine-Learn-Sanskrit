"use strict";
import React, { useState, createContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Update } from './ApiCalls/More';

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


const getData_For_Each = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return value
        }
    } catch (e) {
        // error reading value
        console.log(e)
    }
}

const ThemeProvider = (props) => {
    const [Themes, changeTheme] = useState(light_style)
    const [IsLogged, changeIsLogged] = useState(false)
    const [CurrentLevel, changeCurrentLevel] = useState(1)
    const [Username, changeUsername] = useState('')
    const [Email, changeEmail_Main] = useState('')
    const [Streak, changeStreak] = useState(0)
    const [LatestBadge, changeLatestBadge] = useState({})

    const Triggers_Of_Badge = [
        { level: 2, badge: 'https://i.ibb.co/1JCLWpb/First-Medal-removebg-preview.png' },
        { level: 3, badge: 'https://i.ibb.co/v11hPgf/sdasdasd.png' },
        { level: 5, badge: 'https://i.ibb.co/h7pzjCY/Third-Medal-removebg-preview.png' },
        { level: 7, badge: 'https://i.ibb.co/YTBS1nZ/Fourth-Medal-removebg-preview.png' },
        { level: 9, badge: 'https://i.ibb.co/PDh4wKc/Fifth-Medal-removebg-preview.png' },
        { level: 10, badge: 'https://i.ibb.co/mcN4M1J/Seventh-Medal-removebg-preview.png' },
        { level: 12, badge: 'https://i.ibb.co/mcN4M1J/Seventh-Medal-removebg-preview.png' },
        { level: 15, badge: 'https://i.ibb.co/pL4jV2X/Eight-Medal-removebg-preview.png' },
        { level: 17, badge: 'https://i.ibb.co/pL4jV2X/Eight-Medal-removebg-preview.png' },
        { level: 19, badge: 'https://i.ibb.co/pL4jV2X/Eight-Medal-removebg-preview.png' },
        { level: 20, badge: 'https://i.ibb.co/pL4jV2X/Eight-Medal-removebg-preview.png' },
        { level: 22, badge: 'https://i.ibb.co/pL4jV2X/Eight-Medal-removebg-preview.png' },

    ]
    const GetLatestBadge_With_Other = (level, index) => {
        let lat = { level: 2, badge: 'https://i.ibb.co/FBdh2BN/locker-icon-vector-padlock-symbol-600w-1086098825.jpg' };
        let total = 0
        Triggers_Of_Badge.forEach(item => {
            if (parseInt(level) > item.level) {
                lat = item
                total += 1
            }
        })
        return { data: lat, total: total }
    }

    const getData_Login = async () => {
        try {
            const value = await AsyncStorage.getItem('log')
            if (value !== null && value !== undefined) {
                changeIsLogged(true)
            }
        } catch (e) {
            // error reading value
            console.log(e)
        }
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('level')
            if (value !== null) {
                changeCurrentLevel(parseInt(value))
            }
        } catch (e) {
            // error reading value
            console.log(e)
        }
    }
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('level', value)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        (async () => {
            await getData()
            await getData_Login()
            const Email = await getData_For_Each('email')
            const Username = await getData_For_Each('username')
            const password = await getData_For_Each('password')
            const pk = await getData_For_Each('pk')
            const Token = await getData_For_Each('token')
            // const streak = await getData_For_Each('streak')
            if (parseInt(CurrentLevel) > 1) {
                const res = await Update(Email, Username, password, CurrentLevel, Token, pk, 0)
                console.log(res)
            }
            changeLatestBadge(GetLatestBadge_With_Other(CurrentLevel))
        })()
    }, [])
    useEffect(() => {
        (async () => {
            console.log("Level Updated")
            console.log(JSON.stringify(CurrentLevel))
            await storeData(JSON.stringify(CurrentLevel))
            const Email = await getData_For_Each('email')
            const Username = await getData_For_Each('username')
            const password = await getData_For_Each('password')
            const pk = await getData_For_Each('pk')
            const Token = await getData_For_Each('token')
            // const streak = await getData_For_Each('streak')
            if (parseInt(CurrentLevel) > 1) {
                const res = await Update(Email, Username, password, CurrentLevel, Token, pk, 0)
                console.log(res)
            }
            changeLatestBadge(GetLatestBadge_With_Other(CurrentLevel))
        })()
    }, [CurrentLevel])


    return (
        <Theme.Provider value={[Themes, changeTheme, IsLogged, changeIsLogged, CurrentLevel, changeCurrentLevel, Triggers_Of_Badge, Username, changeUsername, Email, changeEmail_Main, Streak, changeStreak,LatestBadge, changeLatestBadge]}>
            {props.children}
        </Theme.Provider>
    )
}
export default ThemeProvider