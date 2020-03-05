# react-native 步骤
### 安装
* `react-native init ProjectName`
* `adb connect 127.0.0.1:62001`
* `react-native run-andriod`

### 路由（Router）
* `yarn add react-native-router-flux@4.0.6`

### 图标（Icon）
* `yarn add @ant-design/react-native`
* 编辑package.json，添加：  
![](./image/01.png)
* `react-native link @ant-design/icons-react-native`

### WebView
* `yarn add react-native-webview`
* `react-native link react-native-webview`
* 在 android/gradle.properties  中添加 :  

```
android.useAndroidX=true
android.enableJetifier=true
```

### react-native-image-picker
* `yarn add react-native-image-picker`
* `react-native link react-native-image-picker`
* 在 项目\android\app\src\main\AndroidManifest.xml 添加:  

```
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```
* 在 项目\android\app\src\main\java\com\项目名\MainActivity 中添加:  
开头添加：

```
import com.imagepicker.permissions.OnImagePickerPermissionsCallback; 
import com.facebook.react.modules.core.PermissionListener; 
```
MainActivity 中添加：`private PermissionListener listener;`

### react-native-image-crop-picker  
* `yarn add react-native-image-crop-picker`
* `react-native link react-native-image-crop-picker`