Vue.component('my-hello', {
    props: ['yourName'],
    template: `<div>こんにちわ、<slot>ゲスト</slot>さん</div>`,
})

new Vue({
    el: '#app'
});