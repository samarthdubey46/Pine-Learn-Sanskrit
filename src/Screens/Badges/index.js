import React, { useContext } from 'react'
import { View, Button, Text, FlatList, Dimensions, Image, ToastAndroid, Pressable, ImageBackground } from 'react-native'
import { Caption, Portal, Provider, Surface } from 'react-native-paper'
import { Theme } from '../../state'


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




const Badges = (props) => {
    const [Themes, changeTheme, IsLogged, changeIsLogged, CurrentLevel, changeCurrentLevel, Triggers_Of_Badge, Username, changeUsername, Email, changeEmail_Main, Streak, changeStreak, LatestBadge, changeLatestBadge, Loading, Profile_Pic, changeProfile_Pic] = useContext(Theme)
    const RenderImage = ({ item, bottom, }) => {
        const Lock = 'https://i.ibb.co/jJX4fn6/main.jpg'
        return (
            <Surface style={{ elevation: 1, borderRightWidth: 1, borderRightColor: 'rgba(0,0,0,.1)', borderLeftWidth: 1, borderLeftColor: 'rgba(0,0,0,.1)', marginBottom: 15, borderWidth: item.badge === Profile_Pic ? 1 : 0, borderColor: item.badge === Profile_Pic ? '#00b7ff' : 'rgba(0,0,0,.1)' }}>
                {/* <Button title="asd" onPress={() => console.log( item.Level_Open)}/> */}
                <Pressable onPress={() => CurrentLevel > item.level ? changeProfile_Pic(item.badge) : showToastWithGravityAndOffset(`This Badge Will open in Level ${item.Level_Open} `)}>
                    <ImageBackground resizeMode="contain" style={{ height: 120, width: WIDTH / 3.2, marginHorizontal: 2.2 }} source={{ uri: CurrentLevel > item.level ? item.badge : Lock }}>
                        {CurrentLevel <= item.level && <Text style={{fontSize:10,alignSelf:'center'}}>Ready after  Level {item.level}</Text>}
                    </ImageBackground>
                </Pressable>
            </Surface>
        )
    }
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <FlatList
                numColumns={3}
                data={Triggers_Of_Badge}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => <RenderImage CurrentLevel={CurrentLevel} item={item.item} index={item.index} />}
            />
        </View>
    )
}
export default Badges
//https://i.ibb.co/zFyrXxB/First-Avatar.jpg
// resizeMode="contain" style={{ height: 120, width: WIDTH / 3.4, marginHorizontal: 7.4 }} source={{ uri: CurrentLevel > item.level ? item.badge : Lock }}
