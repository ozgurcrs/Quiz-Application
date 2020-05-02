import Vue from 'vue'
import VueRouter from 'vue-router'
import gameStart from '../components/gameStart'
import Questions from '../components/Questions'

Vue.use(VueRouter);

const routes = [
    {path:'/',component:gameStart},
    {path:'/questions',component:Questions},
    {path:'*',direct:"/"}
];

export const router = new VueRouter({
    routes,
    mode:"history"
});