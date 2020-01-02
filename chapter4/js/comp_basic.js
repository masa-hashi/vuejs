Vue.component('my-hello', {
    template: `<div>こんにちわ、{{name}}!</div>`,
    data: function() {
        return {
            name: 'Vue,js'
        };
    }
});

new Vue({
    el: '#app'
});