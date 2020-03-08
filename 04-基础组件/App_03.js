import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	View,//相当于div
	StatusBar,
	Dimensions,
	PixelRatio,
} from 'react-native';

const styles = StyleSheet.create({
	box:{
		width:100,
		height:100,
		margin: 10,
		borderColor:'red',
		borderWidth:1,
	},
	box1:{
		width:100,
		height:100,
		margin: 10,
		borderColor:'red',
		borderWidth:1/1.5,
	},
	txt:{
		color:"red",
	},
	size:{
		fontSize:30
	}
});
const App = () => {
	const {width,height,scale} = Dimensions.get('window');
	console.log(width,height,scale);
	console.log(PixelRatio.get())
	// px:图片中最小的一格
	// dpi（dot per inch）:每英寸有多少小格（1px）
	// dp:在安卓开发中用的单位，1dp等于像素密度为160dpi时1px的大小。
	// dpi:     120 160 240 320 480
	// 密度比    0.75  1  1.5  2   3

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<View style={styles.box}></View>
				<View style={styles.box1}></View>
			</SafeAreaView>
		</>
	);
};

export default App;