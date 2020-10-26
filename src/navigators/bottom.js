import React, { useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Learn from "../Screens/Learn";
import Discover from "../Screens/Discover";
import Badges from "../Screens/Badges";
import Friends from "../Screens/Friends";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar, Searchbar } from 'react-native-paper'
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-dynamic-vector-icons'
const Bottom = createBottomTabNavigator()
const Stack = createStackNavigator()

const Learn_ = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Learn_" options={{
                title: "Learn Sanskrit ", headerLeft: (props) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Icon name="bars" size={25} style={{ marginLeft: 15 }} type="AntDesign" />
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
                title: "Badges", headerLeft: (props) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Icon name="bars" size={25} style={{ marginLeft: 15 }} type="AntDesign" />
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
                            <Icon name="bars" size={25} style={{ marginLeft: 15 }} type="AntDesign" />
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
                        <Icon name="book-open" color={props.color} size={props.size} type="Feather" />
                    )
                },
                // title:'Learn Sanskrit'
            }} name="Learn" component={Learn_} />
            <Bottom.Screen options={{
                tabBarIcon: (props) => {
                    return (
                        <Icon name="badge" color={props.color} size={props.size} type="SimpleLineIcons" />
                    )
                }
            }} name="Badges" component={Badges_} />
            <Bottom.Screen options={{
                tabBarIcon: (props) => {
                    return (
                        <Icon name="bar-chart-o" color={props.color} size={props.size} type="FontAwesome" />

                    )
                },
                title:"Statistics"
            }} name="Friends" component={Friends_} />

        </Bottom.Navigator>
    )
}
export default Main_Bottom