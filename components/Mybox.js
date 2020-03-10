import React, { Component } from 'react';
import {Animated, View, Text, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import {WebView} from 'react-native-webview';

export default class Mybox extends Component {
    constructor(){
        super();
        this.state={
            opacity:new Animated.Value(0)
        }
    }
    componentDidMount(){
        Animated.timing(this.state.opacity,{
            toValue:1,
            duration:1000
        }).start()
    }
    back = ()=>{
        Animated.timing(this.state.opacity,{
            toValue:0,
            duration:500
        }).start(Actions.pop)
    }
    render() {
        return (
            <View style={styles.contanier}>
                <Animated.View 
                    style={
                        [{opacity:this.state.opacity},styles.innerBox]
                    }>
                {/* <Text>mybox</Text> */}
                    <Button 
                        title='返回'
                        onPress={
                            this.back
                        }
                    />
                    {/* <WebView sourse = {{uri: 'https://www.baidu.com'}} /> */}
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contanier:{
        // backgroundColor:'pink',
        // 透明
        // backgroundColor:'transparent',
        backgroundColor:'rgba(50,50,50,0.3)',
        position:'absolute',
        // 四个方向都定位 0 会全屏
        left:0,
        top:0,
        right:0,
        bottom:0,
        justifyContent:'center',
        alignItems:'center'
    },
    innerBox:{
        width:'50%',
        height:'20%',
        backgroundColor:'pink',
        // justifyContent:'center',
        // alignItems:'center'
    }
})