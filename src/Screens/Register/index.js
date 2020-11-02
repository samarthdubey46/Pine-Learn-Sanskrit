
import React, { useState, useContext, useEffect } from 'react';
import { Text, View, Button, Dimensions, TextInput, TouchableOpacity, ActivityIndicator, Pressable, KeyboardAvoidingView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Register } from '../../ApiCalls/Auth';

import { Theme } from '../../state'

const App = ({ navigation }) => {
    const [Themes, changeTheme, IsLogged, changeIsLogged, CurrentLevel, changeCurrentLevel, Triggers_Of_Badge] = useState(Theme)
    const [email, changeEmail] = useState('')
    const [UserName, changeUserName] = useState('')
    const [password, changePassword] = useState('')
    const [password2, changePassword2] = useState('')
    const [message, changemessage] = useState('')
    const [Loading, changeLoading] = useState(false)
    const text_color = Themes.text_color
    const fontFamily = Themes.fontFamily

    const Register_User = async () => {
        changemessage('')
        changeLoading(true)
        if (password2 !== password) {
            changemessage("Please Enter Similar Password")
            changeLoading(false)
            return
        }
        if (email.length <= 0 || UserName.length <= 0 || password.length <= 0 || password2.length <= 0 ) {
            // console.log(UserName.length <= 0)
            changemessage("Please Enter All The Fields")
            changeLoading(false)
            return
        }
        if(UserName.length >= 12){
            changemessage("Please Use A Smaller Username")
            changeLoading(false)
            return
        }
        const res = await Register(email, UserName, password, password);
        console.log(res)
        changemessage(res.res)
        changeLoading(false)
    }
    useEffect(() => {
        changemessage('')
    }, [])
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <KeyboardAvoidingView style={{ flex: .9, justifyContent: 'center', height: (Dimensions.get('screen').height - 100), }}>
                <View style={{ height: 120, }}>
                    <Text style={{ fontFamily: fontFamily, marginLeft: 15, fontSize: 17, opacity: .6, marginBottom: 15, color: text_color }}>Username</Text>
                    <View style={{ marginHorizontal: 15, flexDirection: 'row', marginBottom: 0, borderRadius: 5, borderWidth: 1, alignItems: 'center', height: 60, borderColor: 'rgba(0,0,0,.2)' }}>
                        <Feather name="user" size={26} style={{ marginHorizontal: 10, marginRight: 15 }} color={text_color} />
                        <TextInput
                            value={UserName}
                            onChangeText={text => changeUserName(text)}
                            mode="outlined"
                            style={{ fontFamily: fontFamily, padding: 0, backgroundColor: 'rgba(0,0,0,0)', color: text_color, fontSize: 16, width: Dimensions.get('screen').width }}
                            placeholder="Username"
                            placeholderTextColor={text_color}
                        />
                    </View>
                </View>
                <View style={{ height: 120, }}>
                    <Text style={{ fontFamily: fontFamily, marginLeft: 15, fontSize: 17, opacity: .6, marginBottom: 15, color: text_color }}>Email</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15, borderRadius: 5, borderWidth: 1, alignItems: 'center', height: 60, borderColor: 'rgba(0,0,0,.2)' }}>
                        <MaterialIcons name="email" style={{ marginHorizontal: 12, marginRight: 20, opacity: .8 }} size={26} color={text_color} />
                        <TextInput
                            value={email}
                            onChangeText={text => changeEmail(text)}
                            mode="outlined"
                            style={{ padding: 0, backgroundColor: 'rgba(0,0,0,0)', fontSize: 16, width: Dimensions.get('screen').width }}
                            placeholder="Email"
                            placeholderTextColor={text_color}
                        />
                    </View>
                </View>
                <View style={{ height: 120, }}>
                    <Text style={{ fontFamily: fontFamily, marginLeft: 15, fontSize: 17, opacity: .6, marginBottom: 15, color: text_color }}>Password</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15, borderRadius: 5, borderWidth: 1, alignItems: 'center', height: 60, borderColor: 'rgba(0,0,0,.2)' }}>
                        <Ionicons name="md-key" style={{ marginHorizontal: 12, marginRight: 20, opacity: .8 }} size={26} color={text_color} />
                        <TextInput
                            secureTextEntry={true}
                            value={password}
                            onChangeText={text => changePassword(text)}
                            mode="outlined"
                            style={{ padding: 0, backgroundColor: 'rgba(0,0,0,0)', fontSize: 16, width: Dimensions.get('screen').width }}
                            placeholder="Password"
                            placeholderTextColor={text_color}
                        />
                    </View>
                </View>
                <View style={{ height: 120, marginBottom: 40 }}>
                    <Text style={{ fontFamily: fontFamily, marginLeft: 15, fontSize: 17, opacity: .6, marginBottom: 15, color: text_color }}>Password2</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15, borderRadius: 5, borderWidth: 1, alignItems: 'center', height: 60, borderColor: 'rgba(0,0,0,.2)' }}>
                        <Ionicons name="md-key" style={{ marginHorizontal: 12, marginRight: 20, opacity: .8 }} size={26} color={text_color} />
                        <TextInput
                            secureTextEntry={true}
                            value={password2}
                            onChangeText={text => changePassword2(text)}
                            mode="outlined"
                            style={{ padding: 0, backgroundColor: 'rgba(0,0,0,0)', fontSize: 16, width: Dimensions.get('screen').width }}
                            placeholder="Password2"
                            placeholderTextColor={text_color}
                        />
                    </View>
                    <Text style={{ fontFamily: fontFamily, marginHorizontal: 15, color: 'red', fontSize: 16, }}>{message}</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    {Loading ? (<ActivityIndicator style={{ paddingVertical: 3 }} color="black" size="large" />) : (
                        <TouchableOpacity onPress={async () => {
                            await Register_User()
                        }} style={{ backgroundColor: '#179acf', alignSelf: 'center', borderRadius: 10, width: 120, alignItems: 'center' }}>
                            <Title style={{ fontFamily: fontFamily, color: 'white', paddingVertical: 5, paddingHorizontal: 0 }}>Register</Title>
                        </TouchableOpacity>
                    )}
                    <Pressable onPress={() => navigation.navigate('Register')} style={{ marginVertical: 19 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', }}>Already Have A Account Login</Text>
                    </Pressable>
                </View>

            </KeyboardAvoidingView>
        </ScrollView>
    )
}
export default App
// 184050
