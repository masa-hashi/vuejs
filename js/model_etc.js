new Vue({
    el: '#app',
    data: {
        pet: 'dog',
        agree: true,
        os: [],
        oss: '',
        unit: {},
        val: '',
        message: ''
    },
    methods: {
        onchange: function() {
            this.val = this.unit.name + ': ' + this.unit.size;
            let fl = this.$refs.upfile.files[0];
            let data = new FormData();
            data.append('upfile', fl, fl.name);
            
            fetch('upload.php', {
                method: 'POST',
                body: data,
            })
            .then(function (response) {
                return response.text();
            })
            .then(function (text) {
                this.message = text;
            })
            .catch(function (error) {
                window.alert('Error:' + error.message);
            });
        }
    }
});