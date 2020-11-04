import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Theme } from '../state';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Main_Bottom from './bottom';
import Question_A from '../Screens/Question_Ans';
import Icon from 'react-native-dynamic-vector-icons';
import {
    ActivityIndicator,
    View,
    Text,
    Button,
    ImageBackground,
    Image,
    Dimensions,
    Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Caption, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const getData_For_Each = async () => {
    try {
        const value = await AsyncStorage.getItem('First_Started');
        if (value === null || value === undefined) {
            return true;
        }
        return false;
    } catch (e) {
        // error reading value
        console.log(e);
    }
};
const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(String(key), value);
    } catch (e) {
        console.log(e);
    }
};

const Stack = createStackNavigator();
const Main_Stack = (props) => {
    const [
        Themes,
        changeTheme,
        IsLogged,
        changeIsLogged,
        CurrentLevel,
        changeCurrentLevel,
        Triggers_Of_Badge,
        Username,
        changeUsername,
        Email,
        changeEmail_Main,
        Streak,
        changeStreak,
        LatestBadge,
        changeLatestBadge,
        Loading,
    ] = useContext(Theme);
    const [FirstTimeStarted, changeFirstStarted] = useState(false);
    const [CurrentIndex, changeCurrentIndex] = useState(1);

    useEffect(() => {
        (async () => {
            const FS = await getData_For_Each();
            changeFirstStarted(FS);
        })();
    }, []);
    if (Loading) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator size="large" color="black" />
            </View>
        );
    }
    let carousel;
    const First_Image = require('../../Assets/First.jpg');
    const First_Image_Selected = require('../../Assets/Second.jpg');
    const Match_Image = require('../../Assets/Match.jpg');
    const New_Word = require('../../Assets/New-Word.jpg');
    const Avatar_Page = require('../../Assets/Avatar.jpg');
    const LeaderBoard_Page = 'https://i.ibb.co/N9dB5w5/Leader-Board.jpg';
    const Translate_Image = require('../../Assets/Translate.jpg');

    const data = [
        { type: 'f' },
        {
            image: First_Image,
            text: 'Answer These Types Of Question And Learn Sanskrit',
        },
        {
            image: First_Image_Selected,
            text: 'Select An Option And Check If you Are Correct',
        },
        { image: Translate_Image, text: 'Transle Sentences To Test Your Skillset' },
        {
            image: New_Word,
            text: 'Encountered A New Word Press It To Check Its Meaning',
        },
        { image: Match_Image, text: 'Solve Mathings' },
        {
            image: Avatar_Page,
            text: 'Complete Levels To Open New Avatars And Make Trees Grow',
        },
        // { image: LeaderBoard_Page, text: 'See The LeaderBoard, Search Players And See Your Open Avatars' },
    ];
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
        'window',
    );

    function wp(percentage) {
        const value = (percentage * viewportWidth) / 100;
        return Math.round(value);
    }

    let _carousel;
    const RenderItem = ({ item, index }) => {
        if (item.type === 'f') {
            return (
                <>
                    <View
                        style={{
                            height: 112,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}>
                        <Icon
                            onPress={() => console.log(_carousel)}
                            name="arrowright"
                            type="AntDesign"
                            size={40}
                            color="black"
                        />
                    </View>
                    <View
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon type="Feather" name="book-open" size={80} color="black" />
                        <Title style={{ marginTop: 15, marginBottom: 10, fontSize: 25 }}>
                            Learn Sanskrit
            </Title>
                        <Caption style={{ fontSize: 16, textAlign: 'center' }}>
                            Scroll Right to Know About App Till You See Continue{' '}
                        </Caption>
                    </View>
                </>
            );
        }
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <ImageBackground
                    resizeMode="contain"
                    style={{
                        width: Dimensions.get('screen').width,
                        height: Dimensions.get('screen').height - 40,
                    }}
                    source={item.image}>
                    {index === 0 && (
                        <View
                            style={{
                                height: 112,
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}>
                            <Icon
                                onPress={() => console.log(_carousel)}
                                name="arrowright"
                                type="AntDesign"
                                size={30}
                                color="black"
                            />
                        </View>
                    )}
                    <View
                        style={{
                            flex: 1,
                            justifyContent:
                                index === 4
                                    ? 'center'
                                    : index === 3
                                        ? 'flex-start'
                                        : 'flex-end',
                            alignItems: 'center',
                            marginHorizontal: 20,
                        }}>
                        <View
                            style={{
                                height: index === data.length - 1 ? 300 : 230,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Title style={{ fontSize: 20, top: index === 4 ? 15 : 0 }}>
                                {item.text}
                            </Title>
                            {index === data.length - 1 && (
                                <TouchableOpacity
                                    onPress={async () => {
                                        changeFirstStarted(false);
                                        await storeData('First_Started', 'true');
                                    }}
                                    style={{
                                        marginTop: 30,
                                        width: 140,
                                        height: 50,
                                        elevation: 6,
                                        backgroundColor: 'white',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 20,
                                    }}>
                                    <Title style={{ fontSize: 20 }}>Continue</Title>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    };
    const ImageTest = () => {
        return (
            <>
                <Carousel
                    ref={(c) => {
                        _carousel = c;
                    }}
                    data={data}
                    // initialScrollIndex={CurrentIndex}
                    renderItem={RenderItem}
                    sliderWidth={Dimensions.get('screen').width}
                    itemWidth={Dimensions.get('screen').width}
                // onBeforeSnapToItem={(i) => changeCurrentIndex(i)}
                />
            </>
        );
    };
    if (FirstTimeStarted) {
        return <ImageTest />;
    }
    if (!IsLogged) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        );
    }

    return (
        <Stack.Navigator>
            {/* <Stack.Screen  name="image" component={ImageTest} /> */}
            <Stack.Screen
                options={{ headerShown: false }}
                name="hometabnavigator"
                component={Main_Bottom}
            />
            <Stack.Screen
                name="Q_A"
                component={Question_A}
                options={({ route, navigation }) => ({
                    headerShown: true,
                    headerLeft: () => {
                        return (
                            <Icon
                                onPress={() => navigation.pop()}
                                type="MaterialIcons"
                                size={30}
                                style={{ marginLeft: 10, top: 2 }}
                                name="cancel"
                            />
                        );
                    },
                    title: IsLogged ? route.params.topic : ' ',
                })}
            />
        </Stack.Navigator>
    );
};
export default Main_Stack;
