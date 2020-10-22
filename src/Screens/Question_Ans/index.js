import React, { useEffect, useState } from 'react'
import { View, Button, Text, Dimensions, Image, StyleSheet, Pressable, ToastAndroid } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { ProgressBar, Colors, Headline, Surface, Title, Portal, Provider, Caption } from 'react-native-paper'
import Icon from 'react-native-dynamic-vector-icons'
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";


const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height


const RenderCard = ({ item, IsSelected, ind, changeSelectedOption }) => {
    if (parseInt(IsSelected) === parseInt(ind)) {
        return (
            <View style={[styles.oneCard,]}>
                <Image
                    source={{ uri: item.image }}
                    style={{ width: (WIDTH / 2) - 23, borderRadius: 10, height: 150, marginTop: 1 }}
                />
                <View style={{ width: (WIDTH / 2) - 23, }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <Headline style={{ marginBottom: 3, opacity: .8, fontSize: 20, }}>{item['name']}</Headline>
                    </View>
                    <Icon style={{ alignSelf: 'flex-end', marginRight: 5, marginBottom: 2 }} name="verified-user" size={20} color="green" type="MaterialIcons" />

                </View>
            </View>
        )
    }
    return (
        <Pressable onPress={() => changeSelectedOption(ind)} style={[styles.oneCard,]}>
            <Image
                source={{ uri: item.image }}
                style={{ width: (WIDTH / 2) - 23, borderRadius: 10, height: 150, marginTop: 1 }}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Headline style={{ marginBottom: 3, opacity: .8, fontSize: 20, }}>{item['name']}</Headline>
            </View>
        </Pressable>
    )
}


const Q_A = ({ navigation, route }) => {
    const Questions_ = route['params']['question']
    const [Questions, changeQuestion] = useState(Questions_)
    const [Attempted, changeAttempted] = useState(false)
    const [CurrentIndex, changeCurrentIndex] = useState(1)
    const [SelectedOption, changeSelectedOption] = useState(-1)
    const [CurrentQuestion, changeCurrentQuestion] = useState(Questions[CurrentIndex - 1])
    const [WrongAns, changeWrongAns] = useState(0)
    const [Total, changeTotal] = useState(Questions.length + 1)
    const [Intervals, changeInterval] = useState([])
    const [SelectedChoices, changeSelectedChoices] = useState([])
    useEffect(() => {
        changeCurrentQuestion(Questions[CurrentIndex - 1])
    }), [CurrentIndex]

    useEffect(() => {
        return () => {
            Intervals.forEach(item => {
                clearTimeout(item)
            })
        }
    })
    useEffect(() => {
        changeTotal(Questions.length + 1)
    }, [Questions])
    if (CurrentQuestion.type === 2) {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>
                <View style={{ flex: .03, backgroundColor: 'white', position: 'relative' }}>
                    <ProgressBar progress={((CurrentIndex)) / Total} color='#26c751' style={{ height: 6 }} />
                </View>

                <View style={{ flex: .93, alignItems: 'stretch', position: 'relative' }}>
                    <View style={{ flex: .6, alignItems: 'center' }}>
                        <Text style={{ fontSize: 26, opacity: 1, fontWeight: 'bold', textAlign: 'center', marginBottom: 0 }}>{CurrentQuestion.question}?</Text>
                        <Image style={{ width: WIDTH / 2, height: undefined, aspectRatio: 1 }} source={{ uri: CurrentQuestion.image }} />
                    </View>
                    <View style={{ flex: .95, position: 'relative', }}>
                        <View style={{ flex: .4, alignItems: 'stretch', justifyContent: 'space-around',marginHorizontal: 20 }}>
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 5 }}></View>
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}></View>
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}></View>

                        </View>
                        <View style={{ flexDirection: 'row', flex: .6, justifyContent: 'space-between',marginLeft:10 }}>
                            <FlatList
                                data={CurrentQuestion.options}
                                numColumns={3}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={(item) => (
                                    <Pressable style={{ width: (WIDTH / 3) - 15, height: 30, marginVertical: 5, marginHorizontal: 5, borderWidth: 1, borderColor: 'rgba(0,0,0,.2)', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text>{item.item.name}</Text>
                                    </Pressable>
                                )}
                            />
                        </View>
                    </View>
                </View>
                <Pressable onPress={() => { }} style={{ flex: .07, backgroundColor: SelectedOption !== -1 ? '#26c751' : 'rgba(156, 151, 151,1)', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <Title style={{ fontSize: 29, color: 'white', top: 2 }}>CHECK</Title>
                </Pressable>
                <FlashMessage position="bottom" />

            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>
            <View style={{ flex: .1, backgroundColor: 'white', position: 'relative' }}>
                <ProgressBar progress={((CurrentIndex)) / Total} color='#26c751' style={{ height: 6 }} />

            </View>

            <View style={{ flex: .83, alignItems: 'center', position: 'relative' }}>
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 26, opacity: 1, fontWeight: 'bold', textAlign: 'center' }}>{CurrentQuestion.question}?</Text>
                </View>
                <View style={{ flex: .95, position: 'relative' }}>
                    <FlatList
                        data={CurrentQuestion.options}
                        keyExtractor={(item, index) => String(index)}
                        numColumns={2}
                        renderItem={(item) => <RenderCard changeSelectedOption={changeSelectedOption} item={item.item} ind={item.index} IsSelected={SelectedOption} />}
                    />
                </View>
            </View>
            {/* <Button title="asd" onPress={() => console.log(Total)} /> */}
            <Pressable onPress={() => {
                if (SelectedOption !== -1) {
                    !(SelectedOption === CurrentQuestion.correct) ? (() => {
                        changeWrongAns(prev => prev + 1)
                        changeQuestion(prev => [...prev, {
                            ...CurrentQuestion,
                            id: String(prev.length + 1)
                        }])
                        ToastAndroid.showWithGravityAndOffset(
                            "Practice Makes A Man Perfect!",
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM,
                            25,
                            50
                        );
                    })() : ' '
                    showMessage({
                        message: SelectedOption === CurrentQuestion.correct ? 'Amazing! You Got That Right' : 'Wrong Answer',
                        description: 'Wait or Press This To Continue',
                        backgroundColor: SelectedOption === CurrentQuestion.correct ? '#26c751' : '',
                        onPress: () => {
                            changeSelectedOption(-1)
                            changeCurrentIndex(prev => prev + 1)
                        },
                        textStyle: { fontSize: 17, bottom: 10, marginTop: 1 },
                        titleStyle: { fontSize: 19, marginBottom: 5, paddingTop: 10, bottom: 10 },
                        type: SelectedOption === CurrentQuestion.correct ? "success" : 'danger',
                        animated: true,
                        duration: 5000
                    })
                    if (CurrentIndex === Questions.length) {
                        navigation.replace('hometabnavigator')
                    } else {
                        const s = setTimeout(() => {
                            changeSelectedOption(-1)
                            changeCurrentIndex(prev => prev + 1)
                        }, 5000);
                        changeInterval(prev => [...prev, s])
                    }
                }
            }} style={{ flex: .07, backgroundColor: SelectedOption !== -1 ? '#26c751' : 'rgba(156, 151, 151,1)', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <Title style={{ fontSize: 29, color: 'white', top: 2 }}>CHECK</Title>
            </Pressable>
            <FlashMessage position="bottom" />
            {/* <View style={{ position: 'absolute', width: WIDTH, height: HEIGHT - 95, alignItems: 'stretch', justifyContent: 'flex-end' }}>
                <View style={{ backgroundColor: 'rgba(65, 191, 99,1)', width: WIDTH, height: 150, }}>
                    <Title style={{ color: 'white', fontSize: 25, marginTop: 10,marginHorizontal:20 }}>Amazing</Title>
                    <Pressable style={styles.buttonS}>
                        <Title style={{ color: 'white', fontSize: 25, }}>Contiue</Title>
                    </Pressable>
                </View>
            </View> */}

        </View>
    )
}
const styles = StyleSheet.create({
    buttonS: {
        shadowColor: 'white',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,
        marginTop: 20,
        alignSelf: 'flex-end',
        width: WIDTH / 1,
        borderRadius: 10,
        backgroundColor: '#4ebd04',
        justifyContent: 'center',
        alignItems: 'center'
    },
    oneCard: {
        flexWrap: 'wrap',
        // elevation: 1,
        // backgroundColor: 'white',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,.1)',
        width: (WIDTH / 2) - 20,
        margin: 10, height: 200,
        justifyContent: 'space-between'
    }
})
export default Q_A