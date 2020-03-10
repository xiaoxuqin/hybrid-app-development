import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal } from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import Doc from './components/Doc';
import Msg from './components/Msg';
import MsgDetail from './components/MsgDetail';
import Mybox from './components/Mybox';
import ShowMyName from './components/ShowMyName';
import Home from './components/Home';
import Login from './components/Login';
import Message from './components/Message'; 
import Mylist from './components/Mylist';
import LocalPage from './components/LocalPage';
import Work01R from './components/Work01R';

// yarn remove react-native-router-flux
// yarn add react-native-router-flux@4.0.6
/**
 * 每新装完一个包，服务会自动停止，
 * 重新卸载装
 * 删除包   yarn remove
 */
const styles = StyleSheet.create({

});
const App = () => {
    // 实现 Tabs
    return (
        <Router>
            <Overlay>
            <Modal key='modal' hideNavBar>
                <Lightbox key='lightbox'>
                    <Drawer
                        key='drawer'
                        contentComponent={() => <Text>drawer</Text>}
                        drawerIcon={() => <Icon name='menu' />}
                        drawerWidth={400}
                    >
                        <Scene key="root">
                            <Tabs
                                key='tabbar'
                                hideNavBar
                                activeTintColor="red"
                                inactiveTintColor="blue"
                                tabBarStyle={{ backgroundColor: '#ccc' }}
                            >
                                <Scene key='home'
                                    title='首页'
                                    icon={
                                        ({ focused }) => <Icon
                                            color={focused ? 'red' : 'blue'}
                                            name="home"
                                        />
                                    }
                                >
                                    <Scene key='home' component={LocalPage}/>
                                    {/* <Scene key='home' component={Home}/> */}
                                    <Scene 
                                        key='mylist' 
                                        hideTabBar
                                        hideDrawerButton
                                        component={Mylist}
                                    />
                                </Scene>
                                {/* 消息栏 */}
                                <Scene key='msg'
                                    title='消息'
                                    icon={
                                        ({ focused }) => <Icon
                                            color={focused ? 'red' : 'blue'}
                                            name="home"
                                        />
                                    }
                                >
                                    <Scene key="ms" component={Msg} />
                                    <Scene
                                        key="msgdetail"
                                        hideTabBar
                                        component={MsgDetail}
                                    />
                                </Scene>
                                {/* 文档栏 */}
                                <Scene key='doc'
                                    // hideNavBar   // 加在哪，就没有上面的三道杠了
                                    icon={({ focused }) => <Icon color={focused ? 'red' : 'blue'} name='home' />}
                                >
                                    {/* <Scene key="docs" title='文档' component={Doc} /> */}
                                    <Scene key="work" hideNavBar={true} component={Work01R} />
                                </Scene>
                            </Tabs>
                        </Scene>
                    </Drawer>
                    <Scene key='light' component={Mybox} />
                </Lightbox>
                <Scene key='showmyname' component={ShowMyName} />
                <Scene key='login' component={Login} />
            </Modal> 
            <Scene component={Message}/>
            </Overlay>
            
        </Router>
    );
};

export default App;