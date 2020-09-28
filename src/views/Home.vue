<template>
  <div>
    <div class="top">
      <el-button type="info" class="tc" @click="tc">退出</el-button>
    </div>
    
     <el-input placeholder="请输入内容" v-model="value" class="input-with-select" @input="input">
    
    <el-button slot="append" icon="el-icon-search" @click="seach"></el-button>
  </el-input>
   
    <span class="del" v-show="isShow" @click="del">x</span>
      <div>
<el-container>
  <el-aside width="200px">
     <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
        
           <el-menu-item index="0">
        <i class="el-icon-menu"></i>
        <span slot="title">用户列表</span>
      </el-menu-item>
       <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">权限管理</span>
      </el-menu-item>
        <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
        <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
     </el-menu>
  </el-aside>
  <el-main>
 <a-table :columns="columns" :data-source="show" :pagination="{pageSize:1}">
   <template slot="action">
  <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
   </template>
  </a-table>
  </el-main>
</el-container>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      isShow:false,
      value:'',
      columns:[
        {title:"姓名",
        dataIndex:"username"
        },
         {title:"电话",
        dataIndex:"mobile"
        },
         {title:"邮箱",
        dataIndex:"email"
        },
        {
    title: '操作',
    dataIndex: 'action',
    scopedSlots: { customRender: "action" },

  }
       
      ],
      list:[],
      show:[]
    }
  },
created(){


axios.get('https://www.liulongbin.top:8888/api/private/v1/users',{
  params:{
    pagenum:1,
    pagesize:2
  }
}).then(res=>{
  console.log(res.data.data.users);
  this.list=res.data.data.users
   this.show=res.data.data.users
})



},
methods:{
  seach(){
this.show=[]
    this.list.forEach(item=>{
      if(item.username.includes(this.value)){
       
        this.show.push(item)
      }
    })
  },
  input(){
    console.log(1111);
    // this.isShow=true
    if(this.value==''){
      this.isShow=false
    }else{
      this.isShow=true
    }
  },
  del(){
    this.isShow=false
    this.show=this.list
    this.value=''
  },
  tc(){
    localStorage.clear('token')
    this.$router.push({
      path:'/'
    })
  }
}
}
</script>

<style scoped>
.top{
  width: 100%;
  height: 10vh;
  background: rgb(104, 101, 101);
}
.del{
  position: absolute;
  top: 80px;
  left: 772px;
  background: rgb(231, 227, 227);
  border-radius: 50px;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 15px;
  }
  .tc{
    float:right;
  
  }
</style>
