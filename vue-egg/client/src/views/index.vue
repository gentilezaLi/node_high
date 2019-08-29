<template>
    <div class="in">
        <router-link to="/user/login">登录</router-link>
        <router-link to="/user/registry">注册</router-link>
        <router-link to="/user/list">列表</router-link>
        <router-link to="/user/detail">详情</router-link>
        <router-link to="/user/shop">购物车</router-link>
        
    <router-view/>

    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.in{
    width: 100%;
    height: 100%;
}
</style>