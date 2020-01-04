Vue.component('banner-member', {
    template: 
        `<div class="banner">
            <h3>WINGSメンバー募集中</h3>
            <p>あなたも参加しませんか？</P>
        </div>`
});

Vue.component('banner-new', {
    template: 
        `<div class="banner">
            <h3>WINGSメンバー募集中new</h3>
            <p>あなたも参加しませんか？new</P>
        </div>`
});

Vue.component('banner-env', {
    template: 
        `<div class="banner">
            <h3>WINGSメンバー募集中env</h3>
            <p>あなたも参加しませんか？env</P>
        </div>`
});

new Vue({
    el: '#app',
    created: function() {
        let that = this;
        this.interval = setInterval(function(){
            that.current = (that.current + 1) % that.components.length;
        }, 3000);
    },
    beforeDestroy: function() {
        clearInterval(this.interval);
    },
    computed: {
        currentBanner: function() {
            return 'banner-' + this.components[this.current]; 
        }
    },
    data: {
        current: 0,
        components: ['member', 'new', 'env']
    }
});