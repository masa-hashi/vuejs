new Vue({
    el: '#app',
    data: {
        list: ['a', 'b', 'c']
    },
    methods: {
        onclick: function(){
            //this.list[1] = 'aa';
            //Vue.set(this.list, 1, 'aa');
            //this.list.splice(2, 3, 'bb');
            //this.list.push('add.');
            this.list.shift();
        }
    }
});