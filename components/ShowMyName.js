import React , { Component}from 'react';
import {View,Text,StatusBar,SafeAreaView} from 'react-native';
export default class ShowMyName extends Component{
    render() {
        return (
            <View>
                <Text>hello {this.props.name}</Text>
            </View>
        )
    }
}