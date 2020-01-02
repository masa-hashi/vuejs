Vue.component('my-hello', {
    inheritAttrs: false,
    template: `<div title="result" class="main">こんにちわ、Vue.js</div>`
});

new Vue({
    el: '#app'
});