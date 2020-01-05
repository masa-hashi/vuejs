new Vue({
    el: '#app',
    data: {
        todo: '',
        items: [
            'aaa',
            'bbb',
            'ccc',
            'ddd'
        ]
    },
    methods: {
        onadd: function() {
            this.items.unshift(this.todo);
            this.todo = '';
        },
        onremove: function() {
            let that = this;
            this.items = this.items.filter(function(value) {
                return value !== that.todo;
            });
            this.todo = '';
        },
    }
});