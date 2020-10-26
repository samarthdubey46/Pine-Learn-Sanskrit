import React, { useContext } from 'react'
import { View, Button, Text, FlatList, Dimensions, Image, ToastAndroid, Pressable } from 'react-native'
import { Portal, Provider, Surface } from 'react-native-paper'
import { Theme } from '../../state'
import Badges_List from './images'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

const showToastWithGravityAndOffset = (message) => {
    ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
    );
};

const RenderImage = ({ item, CurrentLevel, bottom }) => {
    const Lock = 'https://i.ibb.co/FBdh2BN/locker-icon-vector-padlock-symbol-600w-1086098825.jpg'
    return (
        <Surface style={{ elevation: 3, borderRightWidth: 1, borderRightColor: 'rgba(0,0,0,.1)', borderLeftWidth: 1, borderLeftColor: 'rgba(0,0,0,.1)', marginBottom: 15 }}>
            {/* <Button title="asd" onPress={() => console.log( item.Level_Open)}/> */}
            <Pressable onPress={() => showToastWithGravityAndOffset(`This Badge Will open in Level ${item.Level_Open} `)}>
                <Image resizeMode="contain" style={{ height: 120, width: WIDTH / 3.2, marginRight: 15 }} source={{ uri: CurrentLevel > item.Level_Open ? item.image : Lock }} />
            </Pressable>
        </Surface>
    )
}



const Badges = (props) => {
    const [Themes, changeTheme, IsLogged, changeIsLogged, CurrentLevel, changeCurrentLevel] = useContext(Theme)
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <FlatList
                numColumns={3}
                data={Badges_List}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => <RenderImage CurrentLevel={CurrentLevel} item={item.item} index={item.index} />}
            />
        </View>
    )
}
export default Badges