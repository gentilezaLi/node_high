<template>
  <div>
    registry
    <ul>
      <li v-for="item in list" :key="item.id">
        <input type="checkbox" v-model="item.ischecked" @click="()=>changeitem(item.id)"/>
        {{item.title}}&nbsp;&nbsp;数量：{{item.num}}&nbsp;&nbsp;小计：{{item.num*item.price}}
      </li>
    </ul>
    <p>总数量：{{znum}}</p>
    <p>总价钱：{{zprice}}</p>全选
    <input type="checkbox" v-model="allchecked" @click="changeall"/>
  </div>
</template>
<script>
import { shop } from "../api/index";
export default {
  props: {},
  components: {},
  data() {
    return {
      list: [],
      znum: 0,
      zprice: 0,
      allchecked: false
    };
  },
  computed: {},
  methods: {
      changeitem(id){
          this.list.map(item=>{
              if(item.id==id){
                  item.ischecked=!item.ischecked
                  if( item.ischecked==true){
                      this.znum+=item.num
                      this.zprice+=item.price*item.num
                  }else{
                      this.znum-=item.num
                      this.zprice-=item.price*item.num
                  }
              }
          })
          let flag=this.list.every(item=>item.ischecked==true)
          this.allchecked=flag
      },
      changeall(){
          this.allchecked=!this.allchecked
          this.list.map(item=>item.ischecked=this.allchecked)
          if(this.allchecked==true){
              this.znum= this.list.reduce((prev,next)=>{
                  prev+=next.num
                  return prev
              },0)
               this.zprice= this.list.reduce((prev,next)=>{
                  prev+=next.price*next.num
                  return prev
              },0)
          }else{
              this.znum=0
              this.zprice=0
          }
      }
  },
  created() {
    shop().then(res => {
      console.log(res.data.result);
      this.list = res.data.result;
      this.list.map(item => (item.ischecked = false));
    });
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>