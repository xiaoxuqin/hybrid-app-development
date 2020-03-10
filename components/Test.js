import React, { Component } from 'react'
import { ScrollView, Image, View, Text, StyleSheet, AsyncStorage, Button } from 'react-native';

/**
 *      ( 直播11 )
 * 执行 npm run android 或者 react-native run-android,在模拟器或真机上装的
 * 是测试版本的安装包，装一次，以后只需 npm start 起服务
 * 然后点开 APP， 服务界面就会编译文件
 * 真机模拟：
 * adb reverse tcp:8081 tcp:8081
 * 手机调试：
 * 1. 打开开发者选项, 更多设置——关于手机——版本号——连续点7次
 *    更多设置——打开开发者选项、USB调试—
 * 2. adb devices
 * 3. npm run android 或者 react-native run-android
 * 
 * 执行 ./gralew 的时候，打包出一个签名好的、可用于发布的版本的安装包，
 * 不用于调试
 */

export default class Test extends Component {
    constructor() {
        super();
        this.state = {
            tits: []
        }
    }
    storeData = async () => {
        await AsyncStorage.setItem('userName', 'hello world',
            () => { console.log('store success') }
        )
    }
    getData = () => {
        AsyncStorage.getItem('userName')
            .then((res) => console.log(res));
    }
    getTitle = () => {
        fetch('https://cnodejs.org/api/v1/topics')
            .then(res => res.json()
            ).then(res => {
                console.log(res.data);
                this.setState(
                    this.state.tits = res.data
                )
            })
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <Button title='存储' onPress={this.storeData} />
                    <Button title='获取' onPress={this.getData} />
                    <Button title='请求title' onPress={this.getTitle} />
                    {
                        this.state.tits.map((item) => (
                            <Text style={{ fontSize: 15 }}>{item.title}</Text>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}
