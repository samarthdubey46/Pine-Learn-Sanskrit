import React from 'react'
import { View, Button, Text, FlatList, Dimensions, StyleSheet } from 'react-native'
import Data from '../../Common/data'
import Icon from 'react-native-dynamic-vector-icons'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const One_Item = ({ name, type, opa, Onpress, color, text,navigation,question,topic }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Q_A',{topic:topic,question:question})} style={{ alignItems: 'center', justifyContent: 'center', width: 100, marginHorizontal: 10 }}>
            <View style={{ flex: .9, justifyContent: 'center', alignItems: 'center', borderRadius: 90, borderWidth: 1, width: 90, borderColor: 'rgba(0,0,0,.2)', backgroundColor: 'white' }}>
                <Icon name={name} type={type} color={color} size={60} style={{ padding: 10, opacity: opa }} />
            </View>
            <Text style={{ fontSize: 13, marginTop: 5, fontWeight: 'bold', }}>{text} </Text>
        </TouchableOpacity>
    )
}

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width
const Over_Color = '#00a99f'

const One_Level = ({ item,navigation }) => {
    const Level = item.item
    return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,.2)' }}>
            <View style={styles.onLevelView}>
                <One_Item text={Level[0].Level} navigation={navigation} topic={Level[0].name} question={Level[0].Question} name="egg" opa={.8} color="black" type="MaterialCommunityIcons" />
            </View>
            <View style={styles.onLevelView}>
                <One_Item text={Level[1].Level} navigation={navigation} topic={Level[1].name} question={Level[1].Question} name="egg" opa={.8} color="black" type="MaterialCommunityIcons" />
                <One_Item text={Level[2].Level} navigation={navigation} topic={Level[2].name} question={Level[2].Question} name="egg" opa={.8} color="black" type="MaterialCommunityIcons" />
            </View>
            <View style={[styles.onLevelView, { paddingBottom: 10 }]}>
                <One_Item text={Level[3].Level} navigation={navigation} topic={Level[3].name} question={Level[3].Question} name="egg-easter" opa={.8} color="black" type="MaterialCommunityIcons" />
                <One_Item text={Level[4].Level} navigation={navigation} topic={Level[4].name} question={Level[4].Question} name="shield" opa={.8} color="black" type="FontAwesome" />
                <One_Item text={Level[5].Level} navigation={navigation} topic={Level[5].name} question={Level[5].Question} name="Trophy" opa={.8} color="black" type="AntDesign" />
            </View>
        </View>
    )
}


const Learn = ({navigation}) => {

    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <FlatList
                data={Data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => <One_Level navigation={navigation} item={item} />}
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