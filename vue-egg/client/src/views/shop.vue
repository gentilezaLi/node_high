<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <input type="checkbox" @click="()=>changeCheck(item.id)"
         v-model="item.isChecked" />
        {{item.title}}&nbsp;&nbsp;&nbsp;&nbsp;
        数量：{{item.num}}&nbsp;&nbsp;&nbsp;&nbsp;
        价钱：{{item.price}}&nbsp;&nbsp;&nbsp;&nbsp;
        小计：{{item.num*item.price}}
      </li>
    </ul>
    <p>总数量：{{znum}}</p>
    <p>总计：{{zprice}}</p>
    <div>
      全选
      <input type="checkbox" @click="changeAll" v-model="allchange"  />
    </div>
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
      allchange: false
    };
  },
  computed: {},
  methods: {
    changeCheck(id) {
      this.list.map(item => {
        if (item.id == id) {
          item.isChecked = !item.isChecked;
          if (item.isChecked === true) {
            this.znum += item.num;
            this.zprice += item.num * item.price;
          } else {
            this.znum -= item.num;
            this.zprice -= item.num * item.price;
          }
        }
      });
      let flag = this.list.every(item => item.isChecked == true);
      this.allchange = flag;
    },
    changeAll() {
      this.allchange = !this.allchange;
      this.list.map(item => (item.isChecked = this.allchange));
      if (this.allchange == true) {
        this.znum = this.list.reduce((prev, next) => {
          prev += next.num;
          return prev;
        }, 0);
        this.zprice = this.list.reduce((prev, next) => {
          prev += next.num * next.price;
          return prev;
        }, 0);
      } else {
        this.znum = 0;
        this.zprice = 0;
      }
    }
  },
  created() {
    shop().then(res => {
      console.log(res.data.result);
      this.list = res.data.result;
      this.list.map(item => (item.isChecked = false));
      console.log(this.list);
    });
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>