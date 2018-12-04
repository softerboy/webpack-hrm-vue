import Vue from 'vue'
import AppComponent  from './components/app-component.vue'

new Vue({
    render: h => h(AppComponent)
}).$mount('#app')