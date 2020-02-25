import React, { useState } from 'react';
import {
  View, Text, StatusBar, SafeAreaView,
  StyleSheet, Image, ImageBackground,
  TextInput, ScrollView, Button,
  TouchableOpacity
} from 'react-native';
import ShowMyName from './components/ShowMyName';
import Counter from './components/Counter';
import ImageBg from './components/ImageBg';
//view容器组件
//Text --显示文本
//JS创建一个组件，名为Hello,返回Helloworld,在App组件里调用

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
    marginTop: 10,
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
  let style = {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }

  let [val, setVal] = useState('55555');

  return (
    <>
      <StatusBar barStyle="dark_content" />
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.other}>React回顾</Text>
          <View>
            <Text>hello world dddd</Text>
            <Text>
              <Text>1111111111</Text>
              <Text>2222222222</Text>
            </Text>
            <ShowMyName name="qin" />
            <Hello />
            <Counter />
          </View>
          <View style={style}></View>
          <View style={styles.box}>
            <Text style={styles.txt}>StyleSheet.create样式</Text>
          </View>

          <Text style={styles.other}>图片、背景图</Text>
          {/* 直接显示默认图片大小 */}
          <Image
            source={require('./assets/kehugonghai.png')}
          />
          {/* 网络图片必须设置大小 */}
          <Image
            style={{ width: 30, height: 50, resizeMode: 'repeat' }}
            source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
          />
          <Image
            style={{ width: 66, height: 58 }}
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}
          />
          <ImageBackground
            source={require('./assets/kehugonghai.png')}
            style={{ width: 150, height: 150 }}
          >
            <View style={styles.box}></View>
            <Text style={styles.txt}>Inside</Text>
          </ImageBackground>


          {/* 自定义组件 ImageBg,实现背景图功能 */}
          <Text style={styles.other}>自定义组件 ImageBg,实现背景图功能</Text>
          <ImageBg
            source={require('./assets/kehugonghai.png')}
            style={{ width: 150, height: 150 }}
          >
            <View style={styles.box}></View>
            <Text style={styles.txt}>Inside</Text>
          </ImageBg>

          {/* 受控组件 */}
          <Text style={styles.other}>受控组件</Text>
          <View>
            <Text>{val}</Text>
            <TextInput
              placeholder="请输入内容"
              onChangeText={(val) => { setVal(val) }}
              style={{
                borderColor: 'red',
                height: 50,
                paddingLeft: 30,
                borderWidth: 1,
                borderRadius: 24
              }}
            />
          </View>

          {/* flex布局 */}
          {/* 在 rn 中，View 默认设置了 flex 属性，默认主轴是纵轴 */}
          {/* justifyContent：定义主轴对齐方式 */}
          {/* alignItems：定义交叉轴对齐方式 */}
          <Text style={styles.other}>flex布局</Text>
          <View style={{
            flexDirection: 'row',
            // justifyContent:'center',       // 居中
            // justifyContent:'space-around', // 均分
            // justifyContent:'space-evenly',    // 等分
            justifyContent: 'space-evenly',
            flexWrap: 'wrap'

          }}>
            <View style={styles.box}>
            </View>
            <View style={styles.box}>
            </View>
            <View style={styles.box}>
            </View>
            <View style={styles.box}>
            </View>
            <View style={styles.box}>
            </View>
            <View style={styles.box}>
            </View>
          </View>

          {/* <Text style={styles.other}>自定义组件 ImageBg,实现背景图功能</Text> */}
          {/* <View style={{
            flexDirection: 'row',
          }}>
            <Image />
            <TextInput
            placeholder="搜索"
              style={{
                width:100,
                borderColor: 'gray',
                height: 30,
                paddingLeft: 30,
                borderWidth: 1,
                borderRadius: 24
              }}
            />
            <Button>777</Button>
          </View> */}

        <Text style={styles.other}>Button,TouchableOpacity</Text>
        <View style={{width:34,height:34,borderRadius:17,overflow:'hidden'}}>
          <Button 
            onPress={()=>{}}
            title="+"
          />
        </View>
        <TouchableOpacity style={{
          width:40, 
          height:40,
          backgroundColor:'blue',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:20,
          
          }}>
         <Text style={{color:'#fff', fontSize:20}}>+</Text>
        </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};



export default App;