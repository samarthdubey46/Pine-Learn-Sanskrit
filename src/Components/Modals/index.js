import React, { useContext, useEffect, useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Theme } from "../../state";
import { MaterialIcons } from "@expo/vector-icons";

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width
const Happy = 'https://i.ibb.co/Cv6jqd4/Happy.jpg'
const Sad = 'https://i.ibb.co/KsW4gKd/Sad.jpg'

const App = ({ modalVisible, setModalVisible, navigation, level }) => {
    const [image, changeImage] = useState(Happy)
    const [IsBadgeUnlocked, changeIsBadgeUnloocked] = useState(false)
    const [Themes, changeTheme, IsLogged, changeIsLogged, CurrentLevel, changeCurrentLevel, Triggers_Of_Badge] = useContext(Theme)
    useEffect(() => {
        let d = []
        Triggers_Of_Badge.forEach(item => {
            if (parseInt(item.level) === parseInt(CurrentLevel)) {
                changeImage(item.badge)
                changeIsBadgeUnloocked(true)
            }
        })
    }, [])
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                navigation.replace('hometabnavigator')
                setModalVisible(false)
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ flex: .1, backgroundColor: 'white', alignItems: 'flex-end', marginTop: 10, marginHorizontal: 10 }}>
                        <MaterialIcons onPress={() => {
                            navigation.replace('hometabnavigator')
                            setModalVisible(false)
                        }}  size={24} name="cancel" color="black" />
                    </View>
                    <View style={{ flex: .9, alignItems: 'center', marginHorizontal: 15 }}>
                        <Image resizeMode="contain" style={{ height: (HEIGHT / 4.2) - 30, width: WIDTH / 1.2, marginBottom: 30 }} source={{ uri: image === "" ? " " : image }} />
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{IsBadgeUnlocked ? 'Congratulations You Unlocked A New Avatar' : `You Have Completed Level ${CurrentLevel - 1}`}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: HEIGHT / 3,
        width: WIDTH / 1.5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default App;
