import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Theme } from '../state'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import Main_Bottom from './bottom'


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()



const Main_Stack = (props) => {
    const [Themes, changeTheme, IsLogged, changeIsLogged] = useContext(Theme)
    if (!IsLogged) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>          
            </Stack.Navigator>
        )
    }
    return (
        <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="hometabnavigator" component={Main_Bottom}/>            
        </Stack.Navigator>
    )
}
export default Main_Stack
