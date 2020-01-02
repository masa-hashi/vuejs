Vue.component('my-hello', {
    props: {
        yourName: {
            type: String,
            required: true
        }
    },
    template: `<div>こんにちわ、{{yourName}}さん！</div>`
})

new Vue({
    el: '#app'
});