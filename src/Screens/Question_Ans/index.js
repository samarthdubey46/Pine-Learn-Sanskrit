import React, { useContext, useEffect, useState } from 'react'
import { View, Button, Text, Dimensions, Image, StyleSheet, Pressable, ToastAndroid, ActivityIndicator, Animated } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { ProgressBar, Colors, Headline, Surface, Title, Portal, Provider, Caption } from 'react-native-paper'
import Icon from 'react-native-dynamic-vector-icons'
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import { Theme } from '../../state'
import MyComponent from '../../Components/Modals'


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



function shuffleArray(ara) {
    let array = [...ara]
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}


class Ha extends React.Component {
    state = {
        Questions: this.props.route.params.question,
        CurrentIndex: 1,
        CurrentQuestion: {},
        Total: 0,
        Intervals: [],
        Options1: [],
        Options2: [],
        SelectedOption: [],
        Load: false,
        CorrectIndex: -1,
        WrongIndex: [],
        Ignore1: [],
        Ignore2: [],
        fadeAnim: new Animated.Value(1),
        fadeAnim2: new Animated.Value(1),

    }
    fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(this.state.fadeAnim, {
            toValue: 0,
            duration: 450,
            useNativeDriver: true
        }).start();
    };
    fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 450,
            useNativeDriver: true
        }).start();
    };
    componentDidMount() {
        this.state.fadeAnim.setValue(1)
        this.setState({ Load: true })
        this.setState(prev => ({
            CurrentQuestion: prev.Questions[this.state.CurrentIndex - 1],
        }), () => {
            this.setState(prev => ({
                Total: prev.Questions.length + 1,
                Options1: prev.CurrentQuestion.options1,
                Options2: prev.CurrentQuestion.options2
            }), () => {
                let arr = shuffleArray(this.state.Options1)
                let arr2 = shuffleArray(this.state.Options2)
                // this.setState({Options1:arr,Options2:ar})
            })
        })
        this.setState({ Load: false })
    }
    AddToSelectedOption = (value, call) => { // Can Be Removed
        this.setState(prev => ({ SelectedOption: [...prev.SelectedOption, value] }), () => {
            call()
            console.log(this.state.SelectedOption)
        })

    }
    RemoveFromSelectedOption = (value, call = () => { }) => { // Can Be Removed
        this.setState(prev => ({ SelectedOption: prev.SelectedOption.filter(item => item !== value) }), () => {
            call()
            console.log(this.state.SelectedOption)
        })
    }
    RemoveFromOption1 = (correct, call) => {
        this.setState(prev => ({
            Options1: prev.Options1.filter(item => {
                return parseInt(item.correct) !== parseInt(correct)
            })
        }), () => {
            call()
        })
    }
    RemoveFromOption2 = (inde, call) => {
        this.setState(prev => ({
            Options2: prev.Options2.filter((item, index) => {
                return parseInt(index) !== parseInt(inde)
            })
        }), () => {
            call()
        })
    }
    render() {
        const WIDTH = Dimensions.get('screen').width
        const HEIGHT = Dimensions.get('screen').height
        const P1 = this.state.Options1
        const P2 = this.state.Options2
        if (this.state.Load) {
            return (
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            )
        }
        return (
            <View style={{ flex: 1, backgroundColor: 'white', position: 'relative', }}>
                <View style={{ flex: .07, backgroundColor: 'white', position: 'relative' }}>
                    <ProgressBar progress={((this.state.CurrentIndex)) / this.state.Total} color='#26c751' style={{ height: 6 }} />
                </View>

                <View style={{ flex: .86, alignItems: 'center', position: 'relative' }}>
                    <View style={{ backgroundColor: 'white', flex: .13 }}>
                        <Text style={{ fontSize: 26, opacity: 1, fontWeight: 'bold', textAlign: 'center' }}>{this.state.CurrentQuestion.question}?</Text>
                    </View>
                    <View style={{ flex: .87, marginVertical: 10, position: 'relative', flexDirection: 'row', justifyContent: 'space-around', width: WIDTH }}>
                        <View>
                            {this.state.Options1.map((item, index) => {
                                if (this.state.Ignore1.includes(index)) {
                                    return
                                }
                                return (
                                    <TouchableOpacity key={index.toString()} onPress={() => {
                                        if (this.state.SelectedOption.length === 1) {
                                            this.setState({ SelectedOption: [] }, () => {
                                                this.setState({ CorrectIndex: -1 })
                                            })
                                            return
                                        }
                                        if (this.state.SelectedOption.length <= 2) {
                                            this.AddToSelectedOption(index, () => {
                                                this.setState({ CorrectIndex: item.correct })
                                            })
                                        }
                                    }} style={{ backgroundColor: this.state.WrongIndex[0] === index ? '#eb1010' : this.state.SelectedOption[0] === index ? '#32a852' : 'white', width: (WIDTH / 3), height: 40, marginVertical: 15, marginHorizontal: 5, borderWidth: 1, borderColor: 'rgba(0,0,0,.2)', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                        <Animated.Text style={{ opacity: (this.state.SelectedOption.length === 2 && this.state.CorrectIndex === item.correct) ? this.state.fadeAnim : this.state.fadeAnim2, fontSize: 18, color: this.state.WrongIndex[0] === index ? 'white' : this.state.SelectedOption[0] === index ? 'white' : 'black' }}>{item['name']}</Animated.Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View>
                            {this.state.Options2.map((item, index) => {
                                if (this.state.Ignore2.includes(index)) {
                                    return
                                }
                                return (
                                    <Pressable onPress={() => {
                                        if (this.state.SelectedOption.length >= 1) {
                                            this.AddToSelectedOption(index, () => {
                                                let Left_Ind = -1
                                                this.state.Options1.forEach((item, index__) => {
                                                    if (parseInt(item.correct) === parseInt(this.state.CorrectIndex)) {
                                                        Left_Ind = index__
                                                    }
                                                })
                                                console.log(Left_Ind)
                                                if (parseInt(this.state.CorrectIndex) === parseInt(index)) {
                                                    this.fadeOut()
                                                    setTimeout(() => {
                                                        this.setState(prev => ({ Ignore1: [...prev.Ignore1, Left_Ind], Ignore2: [...prev.Ignore2, index] }), () => {
                                                            this.setState({ SelectedOption: [] })
                                                        })
                                                    }, 450)
                                                } else if (parseInt(this.state.CorrectIndex) !== parseInt(index)) {
                                                    ToastAndroid.showWithGravityAndOffset(
                                                        "Nobody's A Master At First! Try Again",
                                                        ToastAndroid.SHORT,
                                                        ToastAndroid.BOTTOM,
                                                        25,
                                                        50
                                                    );
                                                    this.setState({ WrongIndex: [Left_Ind, index] }, () => {
                                                        this.setState({ SelectedOption: [] })
                                                        const sdd = setTimeout(() => {
                                                            this.setState({ WrongIndex: [] })
                                                        }, 500)
                                                    })


                                                }
                                            })
                                        }
                                    }

                                    } style={{ backgroundColor: this.state.WrongIndex[1] === index ? '#eb1010' : this.state.SelectedOption[1] === index ? '#32a852' : 'white', width: (WIDTH / 3), height: 40, marginVertical: 15, marginHorizontal: 5, borderWidth: 1, borderColor: 'rgba(0,0,0,.2)', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                        <Animated.Text style={{ opacity: (this.state.SelectedOption.length === 2 && this.state.CorrectIndex === index) ? this.state.fadeAnim : this.state.fadeAnim2, fontSize: 18, color: this.state.WrongIndex[1] === index ? 'white' : this.state.SelectedOption[1] === index ? 'white' : 'black' }}>{item}</Animated.Text>
                                    </Pressable>
                                )
                            })}
                        </View>
                    </View>
                </View>
                {/* <Button title="asd" onPress={() => console.log(this.state.Options1, this.state.Options2)} /> */}
                <Pressable onPress={() => {
                    if (this.state.Ignore1.length === this.state.Options1.length) {
                        showMessage({
                            message: true ? 'Amazing! You Got That Right' : 'Wrong Answer',
                            description: 'Wait or Press This To Continue',
                            backgroundColor: true ? '#26c751' : '',
                            onPress: () => {
                                // changeSelectedOption(-1)
                                // changeSelectedChoices([])
                                this.props.changeIndex(prev => prev + 1)
                            },
                            textStyle: { fontSize: 17, bottom: 10, marginTop: 1 },
                            titleStyle: { fontSize: 19, marginBottom: 5, paddingTop: 10, bottom: 10 },
                            type: true ? "success" : 'danger',
                            animated: true,
                            duration: 5000
                        })
                        if (false) {
                            navigation.replace('hometabnavigator')
                        } else {
                            const s = setTimeout(() => {
                                // changeSelectedOption(-1)
                                this.props.changeIndex(prev => prev + 1)
                            }, 5000);
                            this.props.changeInterval(prev => [...prev, s])
                        }
                    }
                }} style={{ flex: .07, backgroundColor: this.state.Ignore1.length === this.state.Options1.length ? '#26c751' : 'rgba(156, 151, 151,1)', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <Title style={{ fontSize: 29, color: 'white', top: 2 }}>CHECK</Title>
                </Pressable>
                <FlashMessage position="bottom" />
            </View >
        )
    }
}



const Q_A = ({ navigation, route }) => {
    const [Themes, changeTheme, IsLogged, changeIsLogged, CurrentLevel, changeCurrentLevel, Triggers_Of_Badge] = useContext(Theme)
    const Questions_ = route['params']['question']
    const [Questions, changeQuestion] = useState(Questions_)
    const [CurrentIndex, changeCurrentIndex] = useState(1)
    const [SelectedOption, changeSelectedOption] = useState(-1)
    const [SelectedIndexes, changeSelectedIndex] = useState([])
    const [CurrentQuestion, changeCurrentQuestion] = useState(Questions[CurrentIndex - 1])
    const [Total, changeTotal] = useState(Questions.length + 1)
    const [Intervals, changeInterval] = useState([])
    const [IsOver, changeIsOver] = useState(false)
    const [SelectedChoices, changeSelectedChoices] = useState([])

    useEffect(() => {
        changeCurrentQuestion(Questions[CurrentIndex - 1])
    }), [CurrentIndex]
    useEffect(() => {
        let temp = []
        SelectedChoices.forEach(item => {
            temp.push(item['index'])
        })
    }, [SelectedChoices])

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





    const RenderOption = ({ item, st }) => {
        const [IsSelected, changeIsSelected] = useState(false)
        const [backgroundColor, changeBack] = useState('white')
        useEffect(() => {
            SelectedIndexes.forEach(item => {
                if (parseInt(item) === parseInt(item.index)) {
                    changeBack('green')
                }
            })
        }, [SelectedOption])
        return (
            <Pressable onPress={() => {
                if (st) {
                    changeSelectedChoices(prev => prev.filter(item__ => item__.name !== item.item.name))
                    changeIsSelected(false)
                    changeBack('white')
                    return
                }
                changeSelectedChoices(prev => {
                    let obbj = { name: item.item.name, index: item.index }
                    let isIncluded = false;
                    prev.forEach(item_ => {
                        if (item_.name === item.item.name) {
                            isIncluded = true
                        }
                    })
                    if (!isIncluded) {
                        return [...prev, obbj]
                    }
                    changeIsSelected(true)
                    return prev
                })
            }} style={{ backgroundColor: backgroundColor, width: !st ? (WIDTH / 3) - 10 : (WIDTH / 5), height: !st ? 35 : 30, marginVertical: !st ? 10 : 5, marginHorizontal: 5, borderWidth: 1, borderColor: 'rgba(0,0,0,.2)', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: st ? 15 : 18 }}>{item.item.name}</Text>
                {/* <Button title="asd"   onPress={() => console.log(IsSelected)} /> */}
            </Pressable>
        )
    }
    // if (IsOver) {
    //     const GameOverScreen = () => {
    //         const GameOver = () => {
    //             navigation.replace('hometabnavigator')
    //             changeCurrentLevel(prev => prev + 1)
    //         }
    //         return (
    //             <View style={{ backgroundColor: 'red' }}>

    //             </View>
    //         )
    //     }

    //     return (
    //         <GameOverScreen/>
    //     )
    // }
    if (CurrentQuestion.type === 2) {
        return (
            <>
                <MyComponent modalVisible={IsOver} setModalVisible={changeIsOver} level={route.params.level} navigation={navigation} />
                <View style={{ flex: 1, backgroundColor: 'white', position: 'relative', opacity: IsOver ? .5 : 1 }}>
                    <View style={{ flex: .03, backgroundColor: 'white', position: 'relative' }}>
                        <ProgressBar progress={((CurrentIndex)) / Total} color='#26c751' style={{ height: 6 }} />
                    </View>
                    <View style={{ flex: .93, alignItems: 'stretch', position: 'relative' }}>
                        <View style={{ flex: .6, alignItems: 'center' }}>
                            <Text style={{ fontSize: 26, opacity: 1, fontWeight: 'bold', textAlign: 'center', marginBottom: 0 }}>{CurrentQuestion.question}?</Text>
                            <Image style={{ width: WIDTH / 2, height: undefined, aspectRatio: 1 }} source={{ uri: CurrentQuestion.image }} />
                        </View>
                        <View style={{ flex: .95, position: 'relative', }}>
                            <View style={{ flex: .5, alignItems: 'stretch', justifyContent: 'space-around', marginHorizontal: 20 }}>
                                <View style={{ borderBottomColor: 'black', flexDirection: 'row', borderBottomWidth: 1, marginBottom: 0 }}>
                                    {SelectedChoices.map((item, index) => {
                                        if (index <= 4) {
                                            return (<RenderOption st item={{ item: item, index: index }} />)
                                        }

                                    })}
                                </View>
                                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }}>
                                    {SelectedChoices.map((item, index) => {
                                        if (index <= 5 && index >= 3) {
                                            return (<RenderOption st item={{ item: item, index: index }} />)
                                        }

                                    })}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', flex: .5, justifyContent: 'space-between', marginLeft: 0 }}>
                                <FlatList
                                    data={CurrentQuestion.options}
                                    numColumns={3}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={(item) => <RenderOption item={item} />}
                                />
                            </View>
                        </View>
                    </View>
                    <Pressable onPress={() => {
                        if (SelectedChoices.length > 0) {
                            let IsCorrect = false
                            if (CurrentQuestion.correctSeq.length === SelectedChoices.length) {
                                for (let i = 0; i < CurrentQuestion.correctSeq.length; i++) {
                                    if (parseInt(CurrentQuestion.correctSeq[i]) === parseInt(SelectedChoices[i].index)) {
                                        IsCorrect = true
                                    } else {
                                        IsCorrect = false
                                    }
                                }
                            }
                            console.log(IsCorrect)
                            if (!IsCorrect) {
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
                            }
                            showMessage({
                                message: IsCorrect ? 'Amazing! You Got That Right' : 'Wrong Answer',
                                description: 'Wait or Press This To Continue',
                                backgroundColor: IsCorrect ? '#26c751' : '',
                                onPress: () => {
                                    if (CurrentIndex === Questions.length) {
                                        if (CurrentLevel > route.params.level) {
                                            navigation.replace('hometabnavigator')
                                            changeIsOver(false)
                                            return
                                        } else {
                                            changeIsOver(true)
                                        }
                                    } else {
                                        changeSelectedOption(-1)
                                        changeSelectedChoices([])
                                        changeCurrentIndex(prev => prev + 1)
                                    }
                                },
                                textStyle: { fontSize: 17, bottom: 10, marginTop: 1 },
                                titleStyle: { fontSize: 19, marginBottom: 5, paddingTop: 10, bottom: 10 },
                                type: SelectedOption === CurrentQuestion.correct ? "success" : 'danger',
                                animated: true,
                                duration: 5000
                            })
                            if (CurrentIndex === Questions.length && false) {
                                navigation.replace('hometabnavigator')
                            } else {
                                const s = setTimeout(() => {
                                    if (CurrentIndex === Questions.length) {
                                        if (CurrentLevel > route.params.level) {
                                            navigation.replace('hometabnavigator')
                                            changeIsOver(false)
                                            return
                                        } else {
                                            changeIsOver(true)
                                        }
                                    } else {
                                        changeSelectedOption(-1)
                                        changeSelectedChoices([])
                                        changeCurrentIndex(prev => prev + 1)
                                    }
                                }, 5000);
                                changeInterval(prev => [...prev, s])
                            }
                        }
                    }} style={{ flex: .07, backgroundColor: SelectedChoices.length > 0 ? '#26c751' : 'rgba(156, 151, 151,1)', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <Title style={{ fontSize: 29, color: 'white', top: 2 }}>CHECK</Title>
                    </Pressable>
                    <FlashMessage position="bottom" />

                </View>
            </>
        )
    }

    if (CurrentQuestion.type === 3) {
        return (
            <Ha changeInterval={changeInterval} changeIndex={changeCurrentIndex} route={route} navigation={navigation} />
        )
    }

    return (
        <>
            <MyComponent modalVisible={IsOver} setModalVisible={changeIsOver} navigation={navigation} level={route.params.level} />
            <View style={{ flex: 1, backgroundColor: 'white', position: 'relative', opacity: IsOver ? .5 : 1 }}>
                <View style={{ flex: .1, backgroundColor: 'white', position: 'relative' }}>
                    <ProgressBar progress={((CurrentIndex)) / Total} color='#26c751' style={{ height: 6 }} />

                </View>
                {/* <Button title="asd" onPress={() => console.log(route.params.level)} /> */}
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
                                if (CurrentIndex === Questions.length) {
                                    if (CurrentLevel > route.params.level) {
                                        navigation.replace('hometabnavigator')
                                        changeIsOver(false)
                                        return
                                    } else {
                                        changeIsOver(true)
                                    }
                                } else {
                                    changeSelectedOption(-1)
                                    changeSelectedChoices([])
                                    changeCurrentIndex(prev => prev + 1)
                                }
                            },
                            textStyle: { fontSize: 17, bottom: 10, marginTop: 1 },
                            titleStyle: { fontSize: 19, marginBottom: 5, paddingTop: 10, bottom: 10 },
                            type: SelectedOption === CurrentQuestion.correct ? "success" : 'danger',
                            animated: true,
                            duration: 5000
                        })
                        if (CurrentIndex === Questions.length && false) {
                            if (CurrentLevel > props.route.level) {
                                navigation.replace('hometabnavigator')
                                changeIsOver(false)
                                return
                            }
                            changeIsOver(true)
                        } else {
                            const s = setTimeout(() => {
                                if (CurrentIndex === Questions.length) {
                                    if (CurrentLevel > route.params.level) {
                                        navigation.replace('hometabnavigator')
                                        changeIsOver(false)
                                        return
                                    } else {
                                        changeIsOver(true)
                                    }
                                } else {
                                    changeSelectedOption(-1)
                                    changeSelectedChoices([])
                                    changeCurrentIndex(prev => prev + 1)
                                }
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
        </>
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