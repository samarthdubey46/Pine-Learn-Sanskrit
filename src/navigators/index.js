import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Theme } from '../state'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import Main_Bottom from './bottom'
import Question_A from '../Screens/Question_Ans'
import Icon from 'react-native-dynamic-vector-icons'
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()



const Main_Stack = (props) => {
    const [Themes, changeTheme, IsLogged, changeIsLogged] = useContext(Theme)
    if (!IsLogged) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        )
    }
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="hometabnavigator" component={Main_Bottom} />
            <Stack.Screen name="Q_A" component={Question_A} options={({ route, navigation }) => ({ headerShown: true, headerLeft:() => {
                return(
                    <Icon onPress={() => navigation.pop()} type="MaterialIcons" size={30} style={{marginLeft:10,top:2}} name="cancel" />
                )
            },title: IsLogged ? route.params.topic : ' ' })}/>

        </Stack.Navigator>
    )
}
export default Main_Stack
