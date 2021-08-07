import React, { useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Learn from "../Screens/Learn";
import Discover from "../Screens/Discover";
import Badges from "../Screens/Badges";
import Friends from "../Screens/Friends";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar, Searchbar } from 'react-native-paper'
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Feather, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
const Bottom = createBottomTabNavigator()
const Stack = createStackNavigator()

const Learn_ = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Learn_" options={{
                title: "Learn Sanskrit ", headerLeft: (props) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <AntDesign name="bars" size={25} style={{ marginLeft: 15 }}  />
                        </TouchableOpacity>
                    )
                }
            }} component={Learn} />
        </Stack.Navigator>
    )
}
const Badges_ = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Badges_" options={{
                title: "Avatars", headerLeft: (props) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <AntDesign name="bars" size={25} style={{ marginLeft: 15 }}  />
                        </TouchableOpacity>
                    )
                }
            }} component={Badges} />
        </Stack.Navigator>
    )
}
const Friends_ = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Friends_" options={{
                title: "Statistics", headerLeft: (props) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <AntDesign name="bars" size={25} style={{ marginLeft: 15 }}  />
                        </TouchableOpacity>
                    )
                }
            }} component={Friends} />
        </Stack.Navigator>
    )
}

const Main_Bottom = (props) => {
    useEffect(() => {
        return () => {
             console.log("Cancled")
        }
    })
    return (
        <Bottom.Navigator   tabBarOptions={{ labelStyle: { fontSize: 13, marginTop: 1 },activeTintColor:'#37a354',showLabel:true }} lazy >
            <Bottom.Screen options={{
                tabBarIcon: (props) => {
                    return (
                        <Feather name="book-open" color={props.color} size={props.size}  />
                    )
                },
                // title:'Learn Sanskrit'
            }} name="Learn" component={Learn_} />
            <Bottom.Screen options={{
                tabBarIcon: (props) => {
                    return (
                        <SimpleLineIcons name="badge" color={props.color} size={props.size}  />
                    )
                },
                title:"Avatars"
            }} name="Badges" component={Badges_} />
            <Bottom.Screen options={{
                tabBarIcon: (props) => {
                    return (
                        <FontAwesome name="bar-chart-o" color={props.color} size={props.size}  />

                    )
                },
                title:"Statistics"
            }} name="Friends" component={Friends_} />

        </Bottom.Navigator>
    )
}
export default Main_Bottom