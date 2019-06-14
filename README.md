# Vue-
 ### 使用说明：
  * 安装nodejs并配置好环境变量
  * 在cms_project文件夹下打开cmd界面
  * npm run dev
  * 打开 [http://localhost:8080](http://localhost:8080)
  ### [我的github](https://github.com/BULLXM123)  
    
    
### 第一次提交说明:  
__```/* eslint-disable no-new */```__   in __`router/index.js`__
  **：跳过eslint校验**  
__```/* eslint-disable no-new */```__ in __`src/App.vue`__
  **：跳过eslint校验**  
__```import router from './router'```__ in __`src/main.js`__
  **：正确路径**

### 第二次提交说明：
__```useEslint: false```*__ in __`config/index.js`__
  **：禁止eslint校验**  
  __```Axios.defaults.baseURL = 'https://www.doutula.com/api/'```__ in __`src/main.js`__  **：axios接口base地址**    
  __```this.imgs = res.data.data.list```__ in __`Home.vue`__ **：保存图片数据**    
  **坑：**
  * res数据中有data属性，所以要写成res.data.data…… * 
  * 未实现轮播图自适应大小 *

  
