let app = new Vue({
    el: '#app',
    beforeCreate: function(){
        console.log('beforeCreate...');
    },
    created: function(){
        console.log('create...');
    },
    beforeMount: function(){
        console.log('beforeMount');
    },
    mounted: function(){
        console.log('mounted...');
    },
    beforeUpdate: function(){
        console.log('beforeUpdate...');
    },
    updated: function(){
        console.log('updated...');
    },
    beforeDestroy: function(){
        console.log('beforeDestory...');
    },
    destroyed: function(){
        console.log('destroyed...');
    }
});

setTimeout(function() {
    app.$destroy();
}, 3000);