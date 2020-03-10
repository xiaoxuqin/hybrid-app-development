import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Msg extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <View>
                <Button 
                    title='跳转到消息详情页' 
                    onPress={() => Actions.msgdetail({ id: 100, count:this.state.count})} 
                />
                {/* <Button 
                    title='跳转到文档页' 
                    onPress={() => Actions.doc()} 
                /> */}
                <Text>消息数：{this.state.count}</Text>
                <Button 
                    title='消息数+1' 
                    onPress={() => this.setState({ count: ++this.state.count })} 
                />
                <Button
                    title='打开Lightbox'
                    onPress={()=>Actions.light()}
                />
                <Button
                    title='ShowMyName'
                    onPress={()=>Actions.showmyname()}
                />
                <Button
                    title='登录'
                    onPress={()=>Actions.login()}
                />
            </View>
        )
    }
}