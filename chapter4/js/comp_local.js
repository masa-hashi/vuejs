let = MyHello = {
    template: `<div>こんにちわ、 Vu.js</div>`
};

new Vue({
    el: '#app',
    components: {
        'my-hello': MyHello
    }
});