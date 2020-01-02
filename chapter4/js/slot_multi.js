Vue.component('my-slot', {
    template: `<div>
    <header>
        <slot name="header">DEFAULT HEADER</slot>
    </header>
    <div>
        <slot>DEFAULT MAIN</slot>
    </div>
    <div>
        <slot name="footer">DEFAULT FOOTER</slot>
    </div>`
});

new Vue({
    el: '#app'
});