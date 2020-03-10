import React, { Component } from 'react'
import { Image, Animated, Easing, View, Text, FlatList, Dimensions, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import Button from 'react-native-button';
import { Icon } from '@ant-design/react-native';
import { MessageBarManager } from 'react-native-message-bar';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';

const { width } = Dimensions.get('window');

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default class Home extends Component {
    constructor() {
        super();
        let data = [];
        for (var i = 0; i < 10; i++) {
            data.push({ tit: i, key: i });
        }
        this.state = {
            data,
            width: new Animated.Value(20),
            imageUrl:''
        }
    }
    takephoto = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    imageUrl: source,
                });
            }
        });
    }
    zoom = () => {
        Animated.timing(this.state.width, {
            toValue: 200,
            // easing: Easing.elastic() 
        }).start()
    }
    render() {
        // horizontal：实现水平滚动
        // numColumns：实现分栏布局
        return (
            <View style={{flex:1}}>
                {/* <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    style={{ height: 300 }}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.slide}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>2</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>3</Text>
                    </View>
                </ScrollView> */}

                {/* <Icon color='blue' name='chevron-left' /> */}
                {/* <ActivityIndicator size="large" color="blue" /> */}
                <Image style={{width:100, height:100}} source={this.state.imageUrl}/>
                {/* <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Button
                        onPress={() => { Actions.mylist() }}
                        style={styles.btn}
                    >跳转Mylist</Button>
                </View> */}
                <Button
                    onPress={() => { this.takephoto() }}
                    style={styles.btn}
                >拍照</Button>
                <Button
                    onPress={() => { this.zoom() }}
                    style={styles.btn}
                >变大</Button>
                <Animated.View
                    style={{
                        width: this.state.width,
                        height: 200,
                        backgroundColor: '#62d'
                    }}
                ></Animated.View>
                <FlatList
                    ListHeaderComponent={<Button
                        onPress={() => {
                            MessageBarManager.showAlert({
                                title: '提示标题',
                                message: '具体信息',
                                alertType: 'info',
                                stylesheetInfo: { backgroundColor: 'red' }
                            })
                        }}
                        style={styles.btn}>头部按钮</Button>}
                    ListFooterComponent={<Text>尾部</Text>}
                    numColumns={2}
                    data={this.state.data}
                    renderItem={
                        ({ item }) => <View style={styles.flat}>
                            <Text>{item.tit}</Text>
                        </View>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        width: width,
        height: 300,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flat: {
        width: width * 0.4,
        height: 300,
        marginLeft: width * 0.07,
        marginTop: 10,
        backgroundColor: '#7e4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 200,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'pink',
        textAlignVertical: 'center',
        color: 'black'
    }
})