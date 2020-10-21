import React, { useContext } from 'react'
import { View, Button, Text } from 'react-native'
import { Theme } from '../../state'


const Login = ({navigation}) => {
    const [Themes, changeTheme,IsLogged,changeIsLogged] = useContext(Theme)
    return (
        <View style={{ flex: 1 }}>
            <Text>Login</Text>
            <Button title="asd" onPress={() => changeIsLogged(true)}/>
        </View>
    )
}
export default Login