let app = new Vue({
    el: '#app',
    data: {
        author: {
            name: 'Yamada'
        }
    },
    created: function(){
        let that = this;
        this.timer = setTimeout(function(){
            //that.author.name = 'aaa';
            //that.author.company = 'TEST PROJECT';
            Vue.set(that.author, 'company', 'TEST PROJECT2');
        }, 3000);
    },
    beforeDestroy: function(){
        clearInterval(this.timer);
    }
});