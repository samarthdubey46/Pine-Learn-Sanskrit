import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, Divider } from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer'
import Icon from 'react-native-dynamic-vector-icons'
import { Theme } from '../../state';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { object } from 'prop-types';


const removeFew = async (keys) => {
    try {
        console.log(keys)
        await AsyncStorage.multiRemove(keys)
    } catch (e) {
        console.log(e)
        // remove error
    }

    console.log('Done')
}

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



const App = (props) => {
    const [Themes, changeTheme, IsLogged, changeIsLogged, CurrentLevel, changeCurrentLevel, Triggers_Of_Badge, Username, changeUsername, Email, changeEmail_Main, Streak, changeStreak, LatestBadge, changeLatestBadge, Loading_, Profile_Pic, changeProfile_Pic,Name_New,changeName_New] = useContext(Theme)
    const AsyncKeys = [
        "email",
        "password",
        "pk",
        "token",
        "username",
        "log",
        "level"
    ]
    const [Username_Nested, changeUsername_Nested] = useState('')
    const [levelName, changelevelname] = useState('')
    const [Loading__Main, changeLoading] = useState(false)

    useEffect(() => {
        (async () => {
            changeLoading()
            let name;
            if (CurrentLevel <= 4) {
                name = 'Beginner'
            }
            else if (CurrentLevel >= 5 && CurrentLevel <= 8) {
                name = 'Intermidate'
            }
            else if (CurrentLevel >= 8 && CurrentLevel <= 14) {
                name = 'Advance'
            }
            else if (CurrentLevel >= 14 && CurrentLevel <= 20) {
                name = 'Pro'
            }
            changelevelname(name)
            const Email = await getData_For_Each('email')
            const Username = await getData_For_Each('username')
            changeUsername_Nested(Username)
        })()

    }, [])


    const middleSectionContents = (number, text) => (
        <View style={styles.middleSectionContent}>
            <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>{number}</Text>
            <Caption>{text}</Caption>
        </View>
    )
    const { navigation } = props
    const homeNavigate = (props) => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'hometabnavigator' }],
        })
        navigation.closeDrawer()
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={styles.topSection}>
                        <View style={{ flex: .3 }}>
                            <Image
                                resizeMode="contain"
                                source={{
                                    uri: Profile_Pic,
                                }}
                                style={{ height: 90, width: 100 }}
                            />
                        </View>
                        <View style={[styles.topRightSection, { marginTop: 5 }]}>
                            <Text style={{ alignSelf: 'center', fontSize: 26, fontWeight: 'bold' }}> {Username !== undefined && Username !== null ? Username : Name_New} </Text>
                            <Caption style={{ alignSelf: 'center' }}> {levelName} </Caption>
                        </View>
                    </View>
                    <View style={styles.middleSection}>
                        {middleSectionContents(String(CurrentLevel), 'Level')}
                        <Divider style={{ width: 1, height: 50 }} />
                        {middleSectionContents(String(LatestBadge.total), 'Avatars')}
                    </View>
                    <View style={styles.BottomContainer}>
                        <DrawerItem
                            style={{ paddingTop: 10 }}
                            icon={({ color, size }) => (
                                <Icon
                                    name="book-open"
                                    type="Feather"
                                    color='black'
                                    style={{ opacity: .7 }}
                                    size={size}
                                />
                            )}
                            label="Learn"
                            onPress={() => {
                                navigation.closeDrawer()
                                navigation.jumpTo('Learn')
                            }}
                            labelStyle={{ color: 'black', fontSize: 15, opacity: .7 }}

                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="badge"
                                    type="SimpleLineIcons"
                                    color='black'
                                    size={size}
                                    style={{ opacity: .7 }}
                                />
                            )}
                            label="Avatars"
                            onPress={() => {
                                navigation.closeDrawer()
                                navigation.jumpTo('Badges')
                            }}
                            labelStyle={{ color: 'black', fontSize: 15, opacity: .7 }}
                        />
                        {/*<DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="product-hunt" 
                                    type="FontAwesome"
                                    color='black'
                                    style={{opacity:.7}}
                                    size={size}
                                    />
                                )}
                                label="Shop By Products"
                                onPress={() => navigation.navigate('category',{came:true})}
                                labelStyle={{color:'black',fontSize:15,opacity:.7}}

                            />*/}
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bar-chart-o"
                                    type="FontAwesome"
                                    color='black'
                                    style={{ opacity: .7 }}
                                    size={size}
                                />
                            )}
                            style={{ paddingBottom: 10 }}
                            label="Statistics"
                            onPress={() => {
                                navigation.closeDrawer()
                                navigation.jumpTo('Friends')
                            }}
                            labelStyle={{ color: 'black', fontSize: 15, opacity: .7 }}

                        />

                        <Drawer.Section title="Profile">
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="power"
                                        type="Feather"
                                        color='black'
                                        size={size}
                                        style={{ opacity: .7 }}
                                    />
                                )}
                                label="Sign out"
                                onPress={() => {
                                    (async () => {
                                        await removeFew(AsyncKeys)
                                        changeIsLogged(false)
                                        navigation.closeDrawer()
                                    })()

                                }}
                                labelStyle={{ color: 'black', fontSize: 15, opacity: .7 }}
                            />
                        </Drawer.Section>
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    preference: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    BottomContainer: {
        flex: .1,
        // backgroundColor:'blue',
    },
    middleSectionContent: {
        flex: .5,
        // backgroundColor:'red',
        alignItems: 'center'
    },
    middleSection: {
        flex: 1,
        // backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,.1)',
        marginBottom: 5,
    },
    middleSectionContent1: {
        flex: .5,
        // backgroundColor:'black'
    },
    topSection: {
        flex: 1,
        // backgroundColor:'black',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 120,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,.2)'
    },
    topLeftSection: {
        flex: .3,
        backgroundColor: 'white'
    },
    topRightSection: {
        justifyContent: 'center',
        flex: .5,
    },

})
export default App