import Vue from 'vue';
import App from './App.vue';
import router from './router';
import moment from 'moment';
Vue.config.productionTip = false;
Vue.filter('humanize', function (date) {
    return moment(date).format('Do MMM YYYY');
});
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
//# sourceMappingURL=main.js.map