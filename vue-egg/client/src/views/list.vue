<template>
    <div>
        list
        <ul>
            <li v-for="item in list"
            :key='item.id'
            @click="eve(item.id)"
            :style="{background:code==item.id?'red':''}"
            >{{item.title}} &nbsp;&nbsp;&nbsp;&nbsp;价格:{{item.price}}

            </li>

        </ul>
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            code:1
        }
    },
    computed:{
        ...mapState({
            list:state=>state.list
        })
    },
    methods:{
        ...mapActions(['savelist','detail']),
        eve(id){
            // console.log(id)
            this.code=id
            this.$router.push({path:"/user/detail/"+id})
        }
    },
    created(){
        this.savelist()

    },
    mounted(){
    }
}
</script>
<style scoped lang="">
li{
    margin: 10px;
}
.box{
    display: flex;  
}
.box span{
    padding: 0 20px;
}
</style>