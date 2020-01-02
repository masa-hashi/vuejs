Vue.component('my-input', {
    template: `<label><input type="text" /></label>`
});

new Vue({
    el: '#app',
    methods: {
        onfocus: function(e){
            console.log(e);
        }
    },
});