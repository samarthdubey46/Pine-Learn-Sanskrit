"use strict";
import React, { useState, createContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Update } from './ApiCalls/More';
import { Login } from './ApiCalls/Auth';
import { Last } from './Screens/Badges/images';

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
    const [LatestBadge, changeLatestBadge] = useState({ data: { image: ' ' } })
    const [Loading, changeLoading] = useState(false)
    const [Profile_Pic, changeProfile_Pic] = useState(' ')
    const [Name_New,changeName_New] = useState(-1)

    const Triggers_Of_Badge = [
        { level: 0, badge: 'https://static.vecteezy.com/system/resources/previews/000/269/049/non_2x/funny-cartoon-tree-character-vector.jpg' },
        { level: 2, badge: 'https://i.ibb.co/zFyrXxB/First-Avatar.jpg' },
        { level: 3, badge: 'https://i.ibb.co/ZT0PTz8/Second-Ava.jpg' },
        { level: 5, badge: 'https://i.ibb.co/vYmbjV2/Third.jpg' },
        { level: 7, badge: 'https://i.ibb.co/2ZYjy90/Fourth.jpg' },
        { level: 9, badge: 'https://i.ibb.co/tMQq26s/Fifth.jpg' },
        { level: 11, badge: 'https://i.ibb.co/0ms7FHZ/Six.jpg' },
        { level: 13, badge: 'https://i.ibb.co/F49dPfh/Seven.jpg' },
        { level: 14, badge: 'https://image.shutterstock.com/image-vector/coconut-tree-cartoon-style-vector-600w-482832163.jpg' },
        // { level: 17, badge: 'https://i.ibb.co/3fXTbyw/Nine.jpg' },
        // { level: 19, badge: 'https://i.ibb.co/r61JYNb/Tenth.jpg' },
        // { level: 21, badge: 'https://i.ibb.co/pL4jV2X/Eight-Medal-removebg-preview.png' },
        // { level: 22, badge: 'https://image.shutterstock.com/image-vector/coconut-tree-cartoon-style-vector-600w-482832163.jpg' },

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
            changeLoading(true)
            // await getData()
            await getData_Login()
            //                                                                                                                                                                  Profile_Pic
            const Email = await getData_For_Each('email')
            const Username = await getData_For_Each('username')
            const password = await getData_For_Each('password')
            const pk = await getData_For_Each('pk')
            const Token = await getData_For_Each('token')
            // const streak = await getData_For_Each('streak')
            const res = await Login(Email, password,)
            console.log(res)
            changeCurrentLevel(parseInt(res.CurrentLevel))
            changeProfile_Pic(String(res.Profile_Pic))
            changeUsername(String(res.username))
            changeLatestBadge(GetLatestBadge_With_Other(CurrentLevel))
            changeLoading(false)
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
            if (parseInt(CurrentLevel) > 1 && String(Profile_Pic).length > 0) {
                const res = await Update(Email, Username, password, CurrentLevel, Token, pk, 0, Profile_Pic)
                console.log(res)
            }
            changeLatestBadge(GetLatestBadge_With_Other(CurrentLevel))
        })()
    }, [CurrentLevel])

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
            if (parseInt(CurrentLevel) > 1 && String(Profile_Pic).length > 0) {
                const res = await Update(Email, Username, password, CurrentLevel, Token, pk, 0, Profile_Pic)
                console.log(res)
            }
            changeLatestBadge(GetLatestBadge_With_Other(CurrentLevel))
        })()
    }, [Profile_Pic])


    return (
        <Theme.Provider value={[Themes, changeTheme, IsLogged, changeIsLogged, CurrentLevel, changeCurrentLevel, Triggers_Of_Badge, Username, changeUsername, Email, changeEmail_Main, Streak, changeStreak, LatestBadge, changeLatestBadge, Loading, Profile_Pic, changeProfile_Pic,Name_New,changeName_New]}>
            {props.children}
        </Theme.Provider>
    )
}
export default ThemeProvider

const Avatar = 'https://image.shutterstock.com/image-vector/flat-icon-tree-collection-isolated-600w-1673776393.jpg'
const Right_Wrong = 'https://static.vecteezy.com/system/resources/previews/001/233/768/non_2x/two-happy-and-sad-cartoon-tree-characters-vector.jpg'
const Main_Tree = 'https://static.vecteezy.com/system/resources/previews/000/269/049/non_2x/funny-cartoon-tree-character-vector.jpg'
const Happy = 'https://i.ibb.co/Cv6jqd4/Happy.jpg'
const Sad = 'https://i.ibb.co/KsW4gKd/Sad.jpg'