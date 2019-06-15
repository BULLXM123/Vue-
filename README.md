# Vue-
 ### 使用说明：
  * 1.安装nodejs并配置好环境变量
  * 2.在cms_project文件夹下打开cmd界面
  * 3.npm run dev
  * 4.打开 [http://localhost:8080](http://localhost:8080)
  ### [我的github](https://github.com/BULLXM123)  
    
    
### 第一次提交说明:  
__1.```/* eslint-disable no-new */```__   in __`router/index.js`__
  **：跳过eslint校验**  
__2.```/* eslint-disable no-new */```__ in __`src/App.vue`__
  **：跳过eslint校验**  
__3.```import router from './router'```__ in __`src/main.js`__
  **：正确路径**

### 第二次提交说明：
__1.```useEslint: false```__ in __`config/index.js`__
  **：禁止eslint校验**  
  __2.```Axios.defaults.baseURL = 'https://www.doutula.com/api/'```__ in __`src/main.js`__  **：axios接口base地址**    
  __3.```this.imgs = res.data.data.list```__ in __`Home.vue`__ **：保存图片数据**    
  **坑：**
  * res数据中有data属性，所以要写成res.data.data…… * 
  * 未实现轮播图自适应大小 *   
  
##### __感谢[斗图啦](https://www.doutula.com/)提供的api接口__
    
  ### 第三次提交说明：  
  __1.```:style="mystyle"  mystyle: {
        width:"320px"
      }  ```__ in __`Home.vue`__ **：定义轮播图宽度**  
      __2.自定义插件MyLi.vue MyUl.vue__  
      __3.使用自定义插件：__
      
           <my-ul>   
           
             <my-li v-for="(grid,index) in grids" :key="index">  
             
               <a href="">  
               
               <span :class="grid.className"></span>  
               
               <span>{{grid.title}}</span>  
               
               </a>  
               
             </my-li>  
             
           </my-ul>   
 __说明：v-for使用对象若是插件，则需要绑定key值(:key="xxx")__

  
