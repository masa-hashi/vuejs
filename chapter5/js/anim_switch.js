new Vue({
    el: '#app',
    data: {
        id: 0,
        panels: [
            'aaaaaaaaaaaaaaa',
            'bbbbbbbbbbbbbbb',
            'cccc cccc cccc'
        ],
    },
    methods: {
        onclick: function() {
            this.id = (this.id + 1) % this.panels.length;
        }
    },
});