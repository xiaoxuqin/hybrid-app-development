import React,{useState, useEffect} from 'react';
import {StyleSheet,	View, Text} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Msg from './components/Msg.js';
import Doc from './components/Doc.js';
import MsgDetail from './components/MsgDetail.js';
// yarn add react-native-router-flux@4.0.6

const App = () => {
	return (
		<Router>
			<Scene key='root'>
				{/* 默认显示第一个scene,如果没放在第一个，可以加initial属性 */}
				<Scene key='msg' title='消息' 
					component={Msg}
					titleStyle={{flex:1, textAlign:'center'}}
				/>
				<Scene key='msgdetail' title='消息详情' 
					backTitle='msg'
					backButtonImage={require('./assets/icon/user.png')}
					// 如果不加backButtonImage，backTitle就出不来
					component={MsgDetail}
					titleStyle={{flex:1, textAlign:'center'}}
					renderRightButton={<View></View>}
				/>
				<Scene key='doc' title='文档'  
					// initial
					component={Doc}
					titleStyle={{flex:1, textAlign:'center'}}
					renderRightButton={<View></View>}
				/>
			</Scene>
		</Router>
	);
};

export default App;