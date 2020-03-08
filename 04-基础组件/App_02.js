import React, { useState } from 'react';
import {
    View, Text, StatusBar, SafeAreaView,
    StyleSheet, ScrollView, FlatList,
    Image, TextInput, TouchableOpacity,
    Button,
    Dimensions,  //当前屏幕尺寸
    BackHandler,
    ToastAndroid,
    SectionList
} from 'react-native';

const styles = StyleSheet.create({
    box: {
        width: '40%',
        height: 100,
        backgroundColor: 'green',
        marginBottom: 10
    },
    txt: {
        color: 'purple',
        fontSize: 20
    },
    other: {
        // marginTop: 10,
        textAlign: 'center',
        fontSize: 20
    }
})

const Hello = () => {
    return (
        <Text>hello world 组件</Text>
    )
}
const App = () => {

    // 2s连续两次返回键进行返回
    /**
    let isExit = false;
    BackHandler.addEventListener('back',()=>{
      console.log('back');
      if(isExit){
        BackHandler.exitApp();
        return false;
      }    
      ToastAndroid.show('确定要退出么',ToastAndroid.SHORT);
      isExit = true;
      setTimeout(()=>{
        isExit = false;
      }, 2000)
      return true;  
    })
    */

    let isExit = false;
    let now = 0;
    BackHandler.addEventListener('back', () => {
        console.log(new Date().getTime());
        if (new Date().getTime() - now < 2000) {
            BackHandler.exitApp();
        } else {
            ToastAndroid.show('确定要退出么', 100);
            now = new Date().getTime();
            return true;
        }
        return true;
    })

    // BackHandler.removeEventListener();

    let style = {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
    let [val, setVal] = useState('55555');
    let [isFresh, setFresh] = useState(false);
    let data = [];
    for (var i = 0; i < 100; i++) {
        data.push({ key: i + '', title: i + 'abc' })
    }
    let [da, setDa] = useState(data);
    let addData = () => {
        console.log("end");
        for (var i = 100; i < 200; i++) {
            data.push({ key: i + '', title: i + 'abc' })
        }
        setDa(data);
    }
    let upDateData = () => {
        setFresh(true);
        setTimeout(() => {
            setFresh(false);
            console.log('2000');
        }, 2000)
    }
    const { width, height } = Dimensions.get('window');
    console.log(width, height);
    return (
        <>
            <StatusBar barStyle="dark_content" />
            <SafeAreaView>
                <ScrollView>
                    {/* 钉钉顶部搜索 */}
                    <Text style={styles.other}>钉钉顶部搜索</Text>
                    <View style={{
                        // flexDirection: 决定布局的主轴: row, column
                        flexDirection: 'row',
                        height: 40,
                        // justifyContent:决定其子元素沿着主轴的排列方式
                        // flex-start、center、flex-end、space-around以及space-between
                        justifyContent: 'center',
                        marginBottom: 20
                    }}>
                        <View style={{
                            width: '80%',
                            marginLeft: 10,
                            backgroundColor: '#ccc',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 20,
                            paddingLeft: 20,
                        }}>
                            <Image style={{ width: 20, height: 20 }} source={require('./assets/icon/user.png')} />
                            <TextInput placeholder='搜索' />
                        </View>
                        <TouchableOpacity style={{
                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            borderColor: '#ccc',
                            // alignItems:决定其子元素沿着次轴的排列方式
                            // flex-start、center、flex-end以及stretch。
                            alignItems: 'center',
                            borderRadius: 20,
                            backgroundColor: 'purple',

                        }}>
                            <Text style={{ color: '#ccc', fontSize: 20, marginTop: 3 }}>
                                +
              </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.other}>Button,TouchableOpacity</Text>
                    <View style={{ width: 34, height: 34, borderRadius: 17, overflow: 'hidden' }}>
                        <Button
                            onPress={() => { }}
                            title="+"
                        />
                    </View>
                    <TouchableOpacity style={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'blue',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        marginBottom: 50
                    }}>
                        <Text style={{ color: '#fff', fontSize: 20 }}>+</Text>
                    </TouchableOpacity>
                </ScrollView>

                {/* FlatList */}
                {/* onRefresh:下拉刷新
                    refreshing:下拉刷新时的图标
                    onEndReached:上拉加载
                    onEndReachedThreshold:（0-1之间的数）距离底部多少距离触发上拉加载函数
                    keyExtractor:为item指定key */}
                <Text style={styles.other}>FlatList</Text>
                {/* <FlatList
                    data={da}
                    onRefresh={upDateData}
                    refreshing={isFresh}
                    onEndReached={addData}
                    renderItem={({ item, index }) => (
                        <View><Text>{item.title}</Text></View>
                    )}
                /> */}
                {/* SectionList:实现分组列表 */}
                <SectionList
                    renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ fontWeight: "bold" }}>{title}</Text>
                    )}
                    sections={[
                        { title: "Title1", data: ["item1", "item2"] },
                        { title: "Title2", data: ["item3", "item4"] },
                        { title: "Title3", data: ["item5", "item6"] }
                    ]}
                    keyExtractor={(item, index) => item + index}
                />
            </SafeAreaView>
        </>
    );
};

export default App;