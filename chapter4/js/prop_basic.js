Vue.component('my-hello', {
    props: ['yourName'],
    template: `<div>こんにちわ、{{yourName}}さん！</div>`
})

new Vue({
    el: '#app'
});