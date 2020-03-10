import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView } from 'react-native';
import { Icon } from '@ant-design/react-native';

const App = () => {
    let data = [1, 2, 3];
    return (
        <ScrollView>
            <View>
                {/* 头部 */}
                <View style={styles.top}>
                    <View style={{
                        flexDirection: 'row',
                        height: 40,
                        justifyContent: 'center',
                        marginTop: 7
                    }}>
                        <View style={{
                            width: '85%',
                            backgroundColor: 'rgb(238,238,238)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 3,
                            paddingLeft: 10,
                        }}>
                            <TextInput placeholder='请输入商品名称' />
                            <View style={styles.search} >
                                <Icon size='md' name="search" />
                            </View>
                        </View>
                    </View>
                    {/* 头部导航 */}
                    <View style={styles.topd}>
                        <Text style={styles.toptext1}>综合</Text>
                        <Text style={styles.toptext}>销量</Text>
                        <Text style={styles.toptext}>新品</Text>
                        <Text style={styles.toptext}>价格</Text>
                        <Text style={styles.toptext}>信用</Text>
                    </View>
                </View>
                {/* content*/}
                {data.map((item) => {
                    return (
                        <View style={styles.content}>
                            <View style={styles.every}>
                                <Image style={styles.oishi} source={require('./img/1.png')} />
                                <View style={styles.oishitext}>
                                    <Text style={styles.text1}>
                                        Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
                                    </Text>
                                    <Text style={styles.text2}>36.00</Text>
                                </View>
                            </View>
                            <View style={styles.every}>
                                <Image style={styles.oishi} source={require('./img/2.png')} />
                                <View style={styles.oishitext}>
                                    <Text style={styles.text1}>
                                        Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
                                    </Text>
                                    <Text style={styles.text2}>36.00</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    top: {
        backgroundColor: 'white'
    },
    topd: {
        flexDirection: 'row',
        marginTop: 10,
        paddingTop: 10,
        paddingLeft: 40,
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
        height: 40
    },
    toptext: {
        fontSize: 15,
        marginRight: 55,
    },
    toptext1: {
        marginRight: 55,
        color: 'red'
    },
    content: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    search: {
        marginLeft: 230,
        marginTop: 5
    },
    every: {
        width: '46%',
        height: 285,
        alignItems: 'center',
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
    },
    oishi: {
        marginTop: 40,
        marginBottom: 35
    },
    oishitext: {
        width: '97%',
        fontSize: 13,
        paddingLeft: 8
    },
    text1: {
        lineHeight: 18
    },
    text2: {
        color: 'red',
        marginTop: 10
    }
});
export default App;