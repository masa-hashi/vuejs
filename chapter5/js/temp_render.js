Vue.component('my-loading', {
    props: [ 'type' ],
    render: function(h) {
        switch (this.type) {
            case 'text':
                return h('p', '...Now loading...');
            case 'image':
                return h('img', {
                    attrs: {
                        src: 'loading.gif',
                        alt: 'loading'
                    }
                });
            default:
                console.error('type属性はimage、text何かで設定してください');
                return null;
        }
    }
});

new Vue({
    el: '#app'
});