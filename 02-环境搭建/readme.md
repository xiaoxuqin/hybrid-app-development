# 开发环境搭建

## 平台要求

- Windows  ---> android
- macOS ---> android or ios

## 安装依赖

- 安装 Node, Python2.x

- 安装 JDK

  1. 官网：http://www.oracle.com/technetwork/Java/javase/downloads/index.html

  ![点击下载](../images/02/download.png)

  2. 选择版本（Java SE 8 版本）。

  ![选择版本](../images/02/jdk.png)

  3. 双击-安装。

  4. 配置环境变量：计算机——属性——高级系统设置——环境变量。

  5. 新建一个系统环境变量，变量名为 JAVA_HOME，变量值为 JDK 的安装路径（bin文件夹所在目录）。

  6. 在系统变量中找到Path，将 %JAVA_HOME%\bin 添加进去

  7. 检查是否配置成功。打开命令行窗口，输入 javac –version，是否出现版本号（如果不成功，可以将第 5、6 步省去，换成直接将 JDK 的安装目录添加进 Path，例如将 C:\Program Files\Java\jdk1.8.0_161\bin 添加进 Path）。

- 安装 SDK

  1. 官网：http://www.androiddevtools.cn，往下滚动，找到SDK Tools下载下图中所示压缩包，无需安装，只需解压到一个目标路径，不能是中文。

     ![](../images/02/sdk.png)

  2. 然后双击“SDK Manager”，启动SDK Manager。

  3. 勾选红框标出的复选框，点击右下角 **install packages **按钮下载。

     > 注意：
     >
     > 1. Android SDK Build-tools必选28.0.3版，这是RN要求的版本，同时可多选几个其余版本一同下载；
     >
     > 2. SDK Platform ：28版本以下不用安装，29可一同安装上，
     >
     >    Intel x86 Atom_64 System Image 是官方模拟器镜像文件，使用非官方模拟器不需要安装此组件，本教程可不用
     >
     > 3. Extras 全部安装

     ![](../images/02/tools.png)

     ![](../images/02/an-api.png)

     ![](../images/02/extras.png)

     

  4. 创建环境变量：新建一个系统环境变量，变量名为ANDROID_SDK_ROOT，变量值为SDK的存放路径（即 SDK Manager.exe所在目录）。

     ![](../images/02/sdk-var.png)

  5. 将 tools 和 platform-tools 添加进 Path 环境变量里，可如下图直接添加，也可利用 步骤 4 中的 ANDROID_SDK_ROOT 变量。

     ![](../images/02/en-var.png)

  6. 检查是否配置成功，在命令行输入 adb，输出版本信息则为成功。

- 配置 gradle。RN 最后打包需要 gradle 。无需安装，只需解压到一个目标路径下，然后配置环境变量，直接将路径添加到 Path 系统环境变量后面，如： D:\Program Files\gradle-4.5\bin

## 安装模拟器

- 安装 Android 模拟器（夜神模拟器）    
- adb版本不一致的，将SDK中platform_tools里的 adb.exe复制出去一份，重命名为nox_adb.exe，替换掉模拟器bin目录下的nox_adb.exe  
- 执行adb connect 127.0.0.1:62001（不要在模拟器的bin目录下执行）  
- 测试，执行adb devices,如果显示连接的设备，就成功  

## 创建-运行项目

- 使用 React Native 内建的命令行工具来创建一个新项目。这个命令行工具不需要安装，可以直接用node自带的`npx`命令来使用

```
npx react-native init ProjectName
```

- 进入项目，运行项目（确保已打开模拟器或连接手机真机）

```
yarn react-native run-android  
```  
  
## 补充  
- 安装python2.x,查看版本：
     ![](../images/02/z-python.png)  
- 安装Java，配置环境变量后，查看版本：
     ![](../images/02/z-java.png)   
- 安装SDK，上面说的很清楚了，解压，勾选下载等等，图里的验证有问题的话，把当时配置JAVA_HOME环境变量里的 /bin 去掉
     ![](../images/02/z-SDK.png)  
     ![](../images/02/z-grade.png)  
- 设置淘宝镜像： 	
  `npm config set registry http://registry.npm.taobao.org`  
- 安装脚手架：  
  `npm i react-native-cli -g` 
- 创建新项目：  
  `react-native init projectName`  
- 运行项目，先启动模拟器，测试SDK的adb调试工具是否能够检测到模拟器。  
`adb devices`  
- `react-native run-android ` 运行




























