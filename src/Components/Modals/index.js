import * as React from 'react';
import { Dimensions, Image, View } from 'react-native';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const MyComponent = ({ visible, setVisible, Topic }) => {
    const Five_Star = 'https://image.shutterstock.com/image-illustration/five-star-rating-3d-illustration-600w-415274200.jpg'
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const HEIGHT = Dimensions.get('screen').height
    const WIDTH = Dimensions.get('screen').width
    return (
        <Provider>
            <Portal>
                <Modal contentContainerStyle={{ height:HEIGHT / 2.5 , width:WIDTH / 2}} visible={visible} onDismiss={hideModal}>
                    <View style={{flex:1}}>
                        <View style={{flex:.4}}>
                            <Image source={{uri:Five_Star}} style={{width:(WIDTH / 2) - 40,height:undefined,aspectRatio:1}}/>
                        </View>
                    </View>
                </Modal>
            </Portal>
        </Provider>
    );
};

export default MyComponent;