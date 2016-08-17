import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'

// 登陆页面
// import login from './components/login.vue';
import index from './components/app.vue';

Vue.use(VueRouter)

var app = Vue.extend({});
var router = new VueRouter();
router.map ({
	// 登陆页面
	// '/login': {
	// 	name: 'login',
	// 	component: login
	// },
	'/index': {
		name: 'index',
		component: index
	}
});
router.redirect({
	'*': '/index'
});

router.start({
	store,
	component: app
},'#index');