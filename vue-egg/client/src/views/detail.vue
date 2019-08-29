<template>
  <div class="detail">
    this is detail page
    <h1 @click="sh">{{dellist.title}}</h1>
    <div class="box" v-show="isshow">
      <div class="b-con">
       <h1>{{dellist.title}}</h1>
       <div class="bbb">
           <span v-if='numb'>
           <button @click="count('-',dellist.id)">-</button>
           <span>{{numb}}</span>
           </span>
           <button @click="count('+',dellist.id)">+</button>
       </div>
       <button @click="qu">取消</button>
       <button @click='que(dellist.id)'>确定</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import {jjjj} from "../api/index"
export default {
  props: {},
  components: {},
  data() {
    return {
      isshow: false,
      numb:0
    };
  },
  computed: {
    ...mapState({
      dellist: state => state.detlist
    })
  },
  methods: {
    ...mapActions(["detail"]),
    sh(){
        console.log(1)
        this.isshow=true
    },
    qu(){
        this.isshow=false
    },
    count(type,id){
        if(type=="+"){
            this.numb++
        }else{
            this.numb--
        }
    },
    que(id){
        let num=this.numb
        jjjj(num,id).then(res=>{
            console.log(res.data)
            this.$router.push("/user/shop")
        })
    }
  },
  created() {},
  mounted() {
    // console.log(this.$route.params.id);
    this.detail(this.$route.params.id);
  }
};
</script>
<style scoped lang="">
.detail {
  width: 100%;
  height: 100%;
  position: relative;
}
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  background: black;
  opacity: 0.5;
  top: 0;
  display: flex;
}
.box .b-con {
  width: 100%;
  height: 375px;
  background: white;
  position: relative;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%)
  
}
.bbb{
    display: flex;
}
.bbb button{
    padding: 0 20px;
}
.bbb h3{
    margin: 0 10px;
}
</style>