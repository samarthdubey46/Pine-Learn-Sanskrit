import React, { useContext, useEffect, useState } from 'react'
import { View, Button, Text, FlatList, Dimensions, StyleSheet,Image } from 'react-native'
import Data from '../../Common/data'
import Icon from 'react-native-dynamic-vector-icons'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Theme } from '../../state'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Update } from '../../ApiCalls/More'


const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('log')
        console.log(res)
    } catch (e) {
        // error reading value
        console.log(e)
    }
}


const One_Item = ({ name, type, opa, Onpress, color, text, navigation, question, topic, CanGo, Level_No }) => {
    const [Themes, changeTheme, IsLogged, changeIsLogged, CurrentLevel, changeCurrentLevel, Triggers_Of_Badge] = useContext(Theme)
    const Lock = 'https://i.ibb.co/FBdh2BN/locker-icon-vector-padlock-symbol-600w-1086098825.jpg'
    const [ImageShown,changeImageShown] = useState(null)
    useEffect(() => {
        Triggers_Of_Badge.forEach(element => {
            if(parseInt(element.level) === parseInt(Level_No)){
                changeImageShown(element.badge)
            }
        });
    },[])

    return (
        <TouchableOpacity disabled={!CanGo} onPress={() => CanGo && navigation.navigate('Q_A', { topic: topic, question: question, level: Level_No })} style={{ alignItems: 'center', justifyContent: 'center', width: 100, marginHorizontal: 10, }}>
            <View style={{ flex: .9,height:90,justifyContent: 'center', alignItems: 'center', borderRadius: 90, borderWidth: 1, width: 90, borderColor: 'rgba(0,0,0,.2)', backgroundColor: 'white' }}>
                {ImageShown !== null ? (
                    <Image
                        source={{uri:ImageShown}}
                        style={{width:50,height:90}}
                        resizeMode="contain"
                    />
                ) : (<Icon name={name} type={type} color={color} size={60} style={{ padding: 10, opacity: opa }} />)}
            </View>
            <Text style={{ fontSize: 13, marginTop: 5, fontWeight: 'bold', }}>{text} </Text>
        </TouchableOpacity>
    )
}

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width
const Over_Color = '#00a99f'

const One_Level = ({ item, navigation, Themes, CurrentLevel }) => {
    const Level = item.item
    if (Level.length === 5) {
        return (
            <View style={{ borderBottomWidth: 0, borderBottomColor: 'rgba(0,0,0,.2)' }}>
                <View style={styles.onLevelView}>
                    <One_Item text={Level[0].Level} CanGo={CurrentLevel >= Level[0].level} navigation={navigation} topic={Level[0].name} question={Level[0].Question} Level_No={Level[0].level} name="egg" opa={CurrentLevel >= Level[0].level ? .8 : .2} color={CurrentLevel > Level[0].level ? '#37a354' : 'black'} type="MaterialCommunityIcons" />
                    <One_Item text={Level[1].Level} CanGo={CurrentLevel >= Level[1].level} navigation={navigation} topic={Level[1].name} question={Level[1].Question} Level_No={Level[1].level} name="egg" opa={CurrentLevel >= Level[1].level ? .8 : .2} color={CurrentLevel > Level[1].level ? '#37a354' : 'black'} type="MaterialCommunityIcons" />

                </View>
                <View style={styles.onLevelView}>
                </View>
                <View style={[styles.onLevelView, { paddingBottom: 10 }]}>
                    <One_Item text={Level[2].Level} CanGo={CurrentLevel >= Level[2].level} navigation={navigation} topic={Level[2].name} question={Level[2].Question} Level_No={Level[2].level} name="egg-easter" opa={CurrentLevel >= Level[2].level ? .8 : .2} color={CurrentLevel > Level[2].level ? '#37a354' : 'black'} type="MaterialCommunityIcons" />
                    <One_Item text={Level[3].Level} CanGo={CurrentLevel >= Level[3].level} navigation={navigation} topic={Level[3].name} question={Level[3].Question} Level_No={Level[3].level} name="shield" opa={CurrentLevel >= Level[3].level ? .8 : .2} color={CurrentLevel > Level[3].level ? '#26bf4f' : 'black'} type="FontAwesome" />
                    <One_Item text={Level[4].Level} CanGo={CurrentLevel >= Level[4].level} navigation={navigation} topic={Level[4].name} question={Level[4].Question} Level_No={Level[4].level} name="Trophy" opa={CurrentLevel >= Level[4].level ? .8 : .2} color={CurrentLevel > Level[4].level ? '#e50071' : 'black'} type="AntDesign" />
                </View>
            </View>
        )
    }
    else if (Level.length === 4) {
        return (
            <View style={{ borderBottomWidth: 0, borderBottomColor: 'rgba(0,0,0,.2)' }}>
                <View style={styles.onLevelView}>
                    <One_Item text={Level[0].Level} CanGo={CurrentLevel >= Level[0].level} navigation={navigation} topic={Level[0].name} question={Level[0].Question} Level_No={Level[0].level} name="egg" opa={CurrentLevel >= Level[0].level ? .8 : .2} color={CurrentLevel > Level[0].level ? '#37a354' : 'black'} type="MaterialCommunityIcons" />
                    <One_Item text={Level[1].Level} CanGo={CurrentLevel >= Level[1].level} navigation={navigation} topic={Level[1].name} question={Level[1].Question} Level_No={Level[1].level} name="egg" opa={CurrentLevel >= Level[1].level ? .8 : .2} color={CurrentLevel > Level[1].level ? '#37a354' : 'black'} type="MaterialCommunityIcons" />

                </View>
                <View style={styles.onLevelView}>
                </View>
                <View style={[styles.onLevelView, { paddingBottom: 10 }]}>
                    <One_Item text={Level[2].Level} CanGo={CurrentLevel >= Level[2].level} navigation={navigation} topic={Level[2].name} question={Level[2].Question} Level_No={Level[2].level} name="egg-easter" opa={CurrentLevel >= Level[2].level ? .8 : .2} color={CurrentLevel > Level[2].level ? '#37a354' : 'black'} type="MaterialCommunityIcons" />
                    <One_Item text={Level[3].Level} CanGo={CurrentLevel >= Level[3].level} navigation={navigation} topic={Level[3].name} question={Level[3].Question} Level_No={Level[3].level} name="shield" opa={CurrentLevel >= Level[3].level ? .8 : .2} color={CurrentLevel > Level[3].level ? '#26bf4f' : 'black'} type="FontAwesome" />
                    <One_Item text={Level[4].Level} CanGo={CurrentLevel >= Level[4].level} navigation={navigation} topic={Level[4].name} question={Level[4].Question} Level_No={Level[4].level} name="Trophy" opa={CurrentLevel >= Level[4].level ? .8 : .2} color={CurrentLevel > Level[4].level ? '#e50071' : 'black'} type="AntDesign" />
                </View>
            </View>
        )
    }

}


const Learn = ({ navigation, route }) => {
    const [Themes, changeTheme, IsLogged, changeIsLogged, CurrentLevel, changeCurrentLevel, Triggers_Of_Badge] = useContext(Theme)
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {/* <Button title="asds" onPress={async () => changeCurrentLevel(1)} /> */}
            <FlatList
                data={Data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => <One_Level Themes={Themes} CurrentLevel={CurrentLevel} navigation={navigation} item={item} />}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    onLevelView: {
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        flexDirection: 'row',
        marginVertical: 10
    },
    onLevelView_Seperator_Right: {
        // backgroundColor: 'red',
        alignItems: 'flex-end',
        height: 50,
        // backgroundColor:'red',
        marginHorizontal: 50,
    },
    onLevelView_Seperator_Left: {
        // backgroundColor: 'red',
        alignItems: 'flex-start',
        height: 50,
        marginHorizontal: 50,
    },
})
export default Learn

//#region Unused
// const GetTotal = (h) => {
//     let s = []
//     if (h) {
//         for (let i = 0; i < 2; i++) {
//             s.push(<Text style={{ marginVertical: 2.5, }}>⬤</Text>)
//         }
//         return s
//     } else {
//         for (let i = 0; i <= (WIDTH / 10) - 30; i++) {
//             let c = 'black'
//             if (i <= 5) {
//                 c = '#34abeb'
//             }
//             s.push(<Text style={{ marginHorizontal: 2.5, color: c }}>⬤</Text>)
//         }
//         return s
//     }
// }
//#endregion