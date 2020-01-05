Vue.directive('highlight', function(el, binding) {
    if (binding.value === binding.oldValue) { 
        return;
    }
    console.log(binding.value);
    el.style.backgroundColor = binding.value;
});

new Vue({
    el: '#app',
    data: {
        name: 'nanashi',
        color: 'yellow'
    }
});