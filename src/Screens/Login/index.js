
import React, { useState, useContext } from 'react';
import { Text, View, Button, Dimensions, TextInput, TouchableOpacity, ActivityIndicator, Pressable } from 'react-native'
import { Title } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Login } from '../../ApiCalls/Auth';
import { Theme } from '../../state'
import AsyncStorage from '@react-native-async-storage/async-storage'
import data from '../../Common/data';

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(String(key), String(value))
    } catch (e) {
        console.log(e)
    }
}

const RemoveData = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        console.log(e)
    }
}


const App = ({ navigation }) => {
    // noufal369@live.com
    // 123456
    const [Themes, changeTheme, IsLogged, changeIsLogged, CurrentLevel, changeCurrentLevel, Triggers_Of_Badge, Username, changeUsername, Email, changeEmail_Main,Streak,changeStreak] = useContext(Theme)
    const [email, changeEmail] = useState('samarthdubey46@gmail.com')
    const [password, changePassword] = useState('password')
    const [message, changemessage] = useState('')
    const [Loading, changeLoading] = useState(false)
    const backgroundColor = Themes.backgroundColor
    const text_color = Themes.text_color
    const borderColor = Themes.borderColor
    const fontFamily = Themes.fontFamily

    const Login_User = async () => {
        changeLoading(true)
        const res = await Login(email, password)
        if (!res.status)
            return
        const obj = {
            email: res.email,
            password: res.password,
            pk: res.pk,
            token: res.token,
            username: res.username,
            streak:res.streak
        }
        changeUsername(obj.username)
        changeEmail_Main(obj.email)
        Object.keys(obj).forEach(item => {
            (async () => {
                await RemoveData(String(item))
                await storeData(String(item), String(obj[item]))
            })()

        })
        let d = Date.now()
        // console.log()
        // changeStreak(parseInt(res.streak))
        await storeData('log','yes')
        // await storeData('last_update',String(d))

        changeIsLogged(true)
        changeCurrentLevel(parseInt(res['CurrentLevel']) !== undefined && parseInt(res['CurrentLevel']) !== null ? parseInt(res['CurrentLevel']) : 1)
        changeLoading(false) 
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: .3, alignItems: 'center', justifyContent: 'center', }}>
                <Title style={{ fontFamily: fontFamily, fontSize: 38, paddingTop: 30, color: 'black', fontWeight: 'bold' }}>Welcome</Title>
            </View>
            <View style={{ flex: .7, }}>
                <View style={{ height: 70, marginBottom: 40 }}>
                    <Text style={{ fontFamily: fontFamily, marginLeft: 15, fontSize: 17, opacity: .6, marginBottom: 15, color: text_color }}>Email</Text>
                    <View style={{ marginHorizontal: 15, flexDirection: 'row', marginBottom: 0, borderRadius: 5, borderWidth: 1, alignItems: 'center', height: 60, borderColor: 'rgba(0,0,0,.2)' }}>
                        <MaterialIcons name="email" style={{ marginHorizontal: 12, marginRight: 20, opacity: .8 }} size={26} color={text_color} />
                        <TextInput
                            value={email}
                            onChangeText={text => changeEmail(text)}
                            mode="outlined"
                            style={{ fontFamily: fontFamily, padding: 0, backgroundColor: 'rgba(0,0,0,0)', color: text_color, fontSize: 16,width: Dimensions.get('screen').width }}
                            placeholder="Email"
                            placeholderTextColor={text_color}
                        />
                    </View>
                </View>
                <View style={{ height: 70 }}>
                    <Text style={{ fontFamily: fontFamily, marginLeft: 15, fontSize: 17, opacity: .6, marginBottom: 15, color: text_color }}>Password</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15, borderRadius: 5, borderWidth: 1, alignItems: 'center', height: 60, borderColor: 'rgba(0,0,0,.2)' }}>
                        <Ionicons name="md-key" style={{ marginHorizontal: 12, marginRight: 20, opacity: .8 }} size={26} color={text_color} />
                        <TextInput
                            secureTextEntry={true}
                            value={password}
                            onChangeText={text => changePassword(text)}
                            mode="outlined"
                            style={{ padding: 0, backgroundColor: 'rgba(0,0,0,0)', fontSize: 16,width: Dimensions.get('screen').width }}
                            placeholder="Password"
                            placeholderTextColor={text_color}
                        />
                    </View>
                </View>
                <Text style={{ fontFamily: fontFamily, marginHorizontal: 15, color: 'red', fontSize: 16, marginBottom: 20, marginTop: 30 }}>{message}</Text>
                <View style={{ alignItems: 'center' }}>
                    {Loading ? (<ActivityIndicator style={{ paddingVertical: 3 }} color="black" size="large" />) : (
                        <TouchableOpacity onPress={async () => {
                            await Login_User()
                        }} style={{ backgroundColor: '#179acf', alignSelf: 'center', borderRadius: 10, width: 120, alignItems: 'center' }}>
                            <Title style={{ fontFamily: fontFamily, color: 'white', paddingVertical: 5, paddingHorizontal: 0 }}>Log In</Title>
                        </TouchableOpacity>
                    )}
                    <Pressable onPress={() => navigation.navigate('Register')} style={{ marginVertical: 19 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', }}>Dont Have A Account Register</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
export default App
// 184050
