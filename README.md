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
      __3.使用自定义插件(Home.vue)：__
      
           <my-ul>   
           
             <my-li v-for="(grid,index) in grids" :key="index">  
             
               <a href="">  
               
               <span :class="grid.className"></span>  
               
               <span>{{grid.title}}</span>  
               
               </a>  
               
             </my-li>  
             
           </my-ul>   
 __说明：v-for使用对象若是插件，则需要绑定key值(:key="xxx")__  

  ### 第四&五次提交说明：  
  __1.使用[esaymock](https://www.easy-mock.com)提供假数据__ 再也不用担心莫得数据啦!  

  __2.自定义插件NavBar.vue__  
  
                      props['title'] 然后{{title}}绑定到位置

                        this.$router.go(-1)  返回




  __3.重定向路由（一进/就跳转到/home）__  `router/index.js`  

  __4.定义moment全局日期过滤器(moment模块)__ `main.js`  

  __5.NewsList.vue__ 新闻列表页面  

  __6.App.vue中__  
                      setTimeout( () => {
                        this.$router.push({
                         name: this.selected
                           })
                             })  
                  
                    
                  setTimeout作用：等Vue渲染数据完成后才执行  
                  
  
  
  ### 第六次提交说明：  
  __1.新增新闻详情页面 NewsDetail.vue__  
  * NewsList.vue中 `<router-link>` 绑定，使用带参数`(id)`跳转  
  
            <router-link :to="{name:'news.detail',query:{id:news.id}}">……</router-link>  
            
            
  * 配置路由规则  
  
            {
              path: '/news/detail',
              name: 'news.detail',
              component: NewsDatail
            }  
              
              
   * created中请求数据
     
             created() {
              let id = this.$route.query.id;
              this.$axios.get('getnew/'+id)
              .then( res => {
               this.newsDetail = res.data.message[id-1]
              })
             .catch( err => console.log(err))
             }
                   
                   
  


  
