## 基础组件  
### 样式处理 
- 不在有.css文件  
- style属性， 驼峰命名法，  

```
  let style = {
    width:100,
    height:100,
    backgroundColor:'red'
  }
```  
```
  <View style={style}></View>
```

- StyleSheet.create集中定义组件的样式，create方法里可以传入一个大的对象  

```
	<View style={styles.box}>
          <Text style={styles.txt}>StyleSheet.create样式</Text>
	</View>
```  
```
const styles = StyleSheet.create({
  box:{
    width:100,
    height:100,
    backgroundColor:'green'
  },
  txt:{
    color:'white',
    fontSize:20
  }
})
```


### 基础组件 
- 要进行引入才可以使用  
- View  
- Text 
  - 在Text内部的元素不再使用flexbox布局，而是采用文本布局。   
- Image  
  - 属性：resizeMode  
  - cover；宽度和高度都大于等于容器视图的尺寸 
  - contain；宽度和高度都小于等于容器视图的尺寸 
  - stretch；宽高都刚好填满容器 
  - repeat；重复平铺图片直到填满容器 
  - center；居中不拉伸 
- ImageBackground
 


### 交互组件  


### 列表组件  


### Android 独有组件  
