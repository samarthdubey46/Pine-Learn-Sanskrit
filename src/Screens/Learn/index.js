import React from 'react'
import { View, Button, Text, FlatList, Dimensions, StyleSheet } from 'react-native'
import Data from '../../Common/data'
import Icon from 'react-native-dynamic-vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

const One_Item = ({ name, type, opa, Onpress, color,text }) => {
    return (
        <View style={{  alignItems: 'center', justifyContent: 'center', width: 100, }}>
            <View style={{ flex: .9, justifyContent: 'center', alignItems: 'center', borderRadius: 90, borderWidth: 1,width:90, borderColor: 'rgba(0,0,0,.2)' }}>
                <Icon name={name} type={type} color={color} size={60} style={{ padding: 10, opacity: opa }} />
            </View>
            <Text style={{ fontSize: 13, marginTop: 5, fontWeight: 'bold', }}>{text} </Text>
        </View>
    )
}

const egg = ['egg', 'MaterialCommunityIcons']
const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width
const Learn = (props) => {
    const GetTotal = (h) => {
        let s = []
        if (h) {
            for (let i = 0; i < 2; i++) {
                s.push(<Text style={{ marginVertical: 2.5, }}>⬤</Text>)
            }
            return s
        } else {
            for (let i = 0; i <= (WIDTH / 10) - 30; i++) {
                let c = 'black'
                if(i <= 5){
                    c = '#34abeb'
                }
                s.push(<Text style={{ marginHorizontal: 2.5,color:c }}>⬤</Text>)
            }
            return s
        }
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.onLevelView}>
                <One_Item text='Beginner' name="egg" opa={.8} color="black" type="MaterialCommunityIcons" />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, justifyContent: 'center', width: (WIDTH - 220), marginRight: 0 }}>
                    {GetTotal(false)}
                </View>
                <One_Item text="Intermidate" name="egg-easter" color="#34abeb" opa={1} type="MaterialCommunityIcons" />
            </View>
            <View style={styles.onLevelView_Seperator_Right}>
                {GetTotal(true)}
            </View>
            <View style={styles.onLevelView}>
                <One_Item text='Beginner' name="egg" opa={.8} color="black" type="MaterialCommunityIcons" />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, justifyContent: 'center', width: (WIDTH - 220), marginRight: 0 }}>
                    {GetTotal(false)}
                </View>
                <One_Item text="Intermidate" name="egg-easter" color="black" opa={1} type="MaterialCommunityIcons" />
            </View>
            <View style={styles.onLevelView_Seperator_Left}>
                {GetTotal(true)}
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    onLevelView: {
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 120,
        marginHorizontal: 10,
        flexDirection: 'row'
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