<template>
  <div class="bag_box">
      <div class="login_box">
          <div class="box">
               <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
           <el-form-item label="账号">
              <el-input v-model="formLabelAlign.name"></el-input>
           </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="formLabelAlign.password"></el-input>
           </el-form-item>
           <div class="btn">
                <el-button type="primary" @click="login">登录</el-button>
             <el-button type="primary">重置</el-button>
           </div>
           
     </el-form>

          </div>
          
      </div>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
 data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          password:'',
          region: '',
          type: '',
          obj:[]
        }
      };
    },
    created(){

axios.get('https://www.liulongbin.top:8888/api/private/v1/login?username=admin&password=123456').then(res=>{
    console.log(res.data.data);
    this.token=res.data.data.token
})
    },
    methods:{
        login(){
            // var his = {"name":this.formLabelAlign.name,"pasword":this.formLabelAlign.password}
            // this.obj.push(his)
            localStorage.setItem('token',this.token)
            if(this.formLabelAlign.name=="admin"&&this.formLabelAlign.password=="123456"){
                this.$router.push({
                    path:'/home'
                })
            }
        }
    }
}
</script>

<style scoped>
.login_box{
    /* margin-left: 40%; */
    width: 500px;
    height: 300px;
    background: pink;
}
.box{
    width: 400px;
    margin-top: 100px;
}
.bag_box{
    margin-top: 100px;
    display: flex;
    justify-content: center;
}
.btn{
    display: flex;
    justify-content: center;
}
</style>