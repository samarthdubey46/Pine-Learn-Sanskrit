import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, Button, Text, Dimensions, Image, Animated } from 'react-native'
import { Theme } from '../../state'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GetLeaderBoard, Search } from '../../ApiCalls/More'
import { ActivityIndicator, Caption, Title, Surface, Card, Searchbar, IconButton, Divider } from 'react-native-paper'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-dynamic-vector-icons'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
const RenderImage = ({ item, CurrentLevel, bottom }) => {
    const Lock = 'https://i.ibb.co/FBdh2BN/locker-icon-vector-padlock-symbol-600w-1086098825.jpg'
    return (
        <Surface style={{ elevation: 0, borderRightWidth: 0, borderRightColor: 'rgba(0,0,0,.1)', borderLeftWidth: 1, borderLeftColor: 'rgba(0,0,0,.1)', justifyContent: 'flex-end' }}>
            {/* <Button title="asd" onPress={() => console.log( item.Level_Open)}/> */}
            <Image resizeMode="contain" style={{ height: 90, width: WIDTH / 3.2, marginRight: 15 }} source={{ uri: item.badge }} />
        </Surface>
    )
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


const Friends = (props) => {
    const [Themes, changeTheme, IsLogged, changeIsLogged, CurrentLevel, changeCurrentLevel, Triggers_Of_Badge, Username, changeUsername, Email, changeEmail_Main, Streak, changeStreak] = useContext(Theme)
    const [Data, changeData] = useState([])
    const [Search_Str, changeSearch_Str] = useState('')
    const [SearchData, changeSearchData] = useState([])
    const [Email_Nested, changeEmail_Nested] = useState('')
    const [Username_Nested, changeUsername_Nested] = useState('')
    const [Loading, changeLoading] = useState(false)
    const [Search_Loading, changeSearch_Loading] = useState(false)

    const [name_level, changename_level] = useState('')
    const [TopOpen, changeTopOpen] = useState(true)
    const [ClosedProgramitically, changeClosedProgramitically] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [ForcefullyClosed, changeForceFullyClosed] = useState(false)
    const [MyStanding, changeMyStanding] = useState(-1)
    const [pk, changepk] = useState(0)
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 5000
        }).start();
    };


    useEffect(() => {
        if (ForcefullyClosed === true) {
            changeTopOpen(true)
        }
    }, [ForcefullyClosed])
    const LeaderBoard = async () => {
        const TOKEN = await getData_For_Each('token')
        const res = await GetLeaderBoard(TOKEN)
        const pk = await getData_For_Each('pk')
        let index = 0
        // console.log(res)
        res.data.forEach((item, indx) => {
            if (parseInt(item.pk) === parseInt(pk)) {
                index = indx
            }
        })
        changeMyStanding(index + 1)
        // const Temp = res.data.filter(item => parseInt(item.pk) !== parseInt(pk))
        res.status && changeData(res.data)
    }
    useEffect(() => {
        (async () => {
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
            changename_level(name)
            changeLoading(true)
            await LeaderBoard()
            const Email = await getData_For_Each('email')
            const Username = await getData_For_Each('username')
            await changeEmail_Nested(Email)
            await changeUsername_Nested(Username)
            const pk = await getData_For_Each('pk')
            changepk(parseInt(pk))
            changeLoading(false)
        })()
    }, [])

    const GetLatestBadge = () => {
        let lat = [];
        Triggers_Of_Badge.forEach(item => {
            if (CurrentLevel > item.level) {
                lat.push(item)
            }
            // lat.push(item)

        })
        return lat
    }
    const GetLatestBadge_With_Other = (level, index) => {
        let lat = { level: 2, badge: 'https://i.ibb.co/KsW4gKd/Sad.jpg' };
        // Triggers_Of_Badge.forEach(item => {
        //     if (parseInt(level) > item.level) {
        //         lat = item
        //     }
        //     // lat.push(item)
        // })
        if (index === 0) {
            lat = { level: 1, badge: 'https://image.shutterstock.com/image-vector/gold-medal-vector-golden-1st-260nw-694145683.jpg' }
        }
        if (index === 1) {
            lat = { level: 1, badge: 'https://image.shutterstock.com/image-vector/silver-medal-vector-2nd-place-600w-695553751.jpg' }
        }
        if (index === 2) {
            lat = { level: 1, badge: 'https://image.shutterstock.com/image-vector/bronze-medal-vector-copper-3rd-260nw-695794561.jpg' }

        }

        return lat
    }
    const ChangeText = async (t) => {
        changeSearch_Str(t)
        changeSearch_Loading(true)
        const TOKEN = await getData_For_Each('token')
        const pk = await getData_For_Each('pk')
        const res = await Search(TOKEN, t)
        changeSearchData(res.data)
        changeSearch_Loading(false)
    }
    if (Loading) {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="black" />
            </View>
        )
    }

    const RenderOne = ({ item, index, pk }) => {
        const CurrentLevel_Other = item.CurrentLevel
        const email_Other = item.email
        const pk_other = parseInt(item.pk)
        const username = item.username
        return (
            <View style={{ height: 90, marginHorizontal: 10, borderBottomColor: 'rgba(0,0,0,.1)', borderBottomWidth: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image resizeMode="contain" style={{ width: 60, height: 80, marginRight: 15 }} source={{ uri: GetLatestBadge_With_Other(CurrentLevel_Other, index).badge }} />
                    <View style={{ marginTop: 8 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, marginRight: 15 }}>{username}</Text>
                            {parseInt(pk_other) === parseInt(pk) && (<Icon color="green" type="MaterialIcons" size={18} name="verified-user" />)}
                        </View>
                        <Caption>CurrentLevel : {CurrentLevel_Other}</Caption>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <FlatList
            data={['s']}
            nestedScrollEnabled
            renderItem={(item) => (
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    {TopOpen && (<View style={{ flex: GetLatestBadge().length <= 0 ? .25 : .4, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,.1)', justifyContent: 'center', }}>
                        <View style={{ flex: GetLatestBadge().length <= 0 ? 1 : .55, paddingHorizontal: 20, paddingTop: 10, borderBottomWidth: GetLatestBadge().length <= 0 ? 0 : 1, borderBottomColor: 'rgba(0,0,0,.1)', }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Title style={{ fontSize: 25 }}>{Username_Nested}</Title>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16, color: '#e50071', fontWeight: 'bold', }}>EDIT</Text>
                                </TouchableOpacity>
                            </View>
                            <Caption style={{ marginLeft: 2, marginTop: 5, fontSize: 15 }}>My-Standing : {MyStanding}</Caption>
                            <Caption style={{ marginLeft: 2, marginTop: -0, fontSize: 15 }}>{name_level}</Caption>
                            <Caption style={{ marginLeft: 2, marginTop: -2, fontSize: 15 }}>{Email_Nested}</Caption>
                        </View>
                        {GetLatestBadge().length <= 0 && <Text style={{ alignSelf: 'center', marginBottom: 6 }}>You Dont Have Any Badges</Text>}
                        {/* <Button title="asd" onPress={() => console.log(Data)}/> */}
                        {GetLatestBadge().length > 0 && (<View style={{ flex: .45, marginTop: 5 }}>
                            {/* <Caption style={{ marginLeft: 2, top: -2, fontSize: 15, paddingHorizontal: 20 }}>Badges</Caption> */}
                            <FlatList
                                horizontal
                                data={GetLatestBadge()}
                                keyExtractor={(item, i) => i.toString()}
                                renderItem={(item) => <RenderImage CurrentLevel={CurrentLevel} item={item.item} />}
                            />
                        </View>)}
                    </View>)}
                    {!ClosedProgramitically && (<IconButton onPress={() => ClosedProgramitically ? 's' : changeTopOpen(prev => !prev)} style={{ alignSelf: 'center', top: -10, bottom: -20, }} icon={TopOpen ? 'arrow-up' : 'arrow-down'} />)}
                    <View style={{ flex: TopOpen ? .7 : 1, }}>
                        <Card style={{ flex: 1, marginTop: ClosedProgramitically ? 0 : -20, marginBottom: 0, }}>
                            <View style={{ height: 40, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', marginHorizontal: 15, fontSize: 16 }}>LeaderBoard</Text>
                            </View>
                            <Card.Content style={{ flex: 1, margin: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, padding: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, }}>
                                <Searchbar
                                    onFocus={() => {
                                        changeClosedProgramitically(true)
                                        changeForceFullyClosed(false)
                                        changeTopOpen(false)
                                    }}
                                    onBlur={() => {
                                        changeClosedProgramitically(false)
                                        changeForceFullyClosed(true)
                                    }}
                                    value={Search_Str}
                                    inputStyle={{ fontSize: 16 }}
                                    style={{ borderRadius: 15, marginBottom: 15, marginHorizontal: 10 }}
                                    onChangeText={(t) => ChangeText(t)}
                                />

                                {Search_Loading ? (
                                    <ActivityIndicator
                                        size="large"
                                    />
                                ) : Search_Str.length > 0 ? (
                                    <FlatList
                                        nestedScrollEnabled
                                        data={SearchData}
                                        keyExtractor={(item, index) => index.toString()}
                                        renderItem={(item) => {
                                            return <RenderOne pk={pk} item={item.item} index={item.index} />
                                        }}
                                    />
                                ) : (
                                            <FlatList
                                                nestedScrollEnabled
                                                data={Data}
                                                keyExtractor={(item, index) => index.toString()}
                                                renderItem={(item) => <RenderOne pk={pk} item={item.item} index={item.index} />}
                                            />
                                        )}
                            </Card.Content>
                        </Card>

                    </View>
                </View>
            )}
        />
    )
}
export default Friends