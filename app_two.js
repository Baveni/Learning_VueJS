new Vue({
        el: '#exercise',
        data: {
            value: ''
        },

        methods: {

            alertMe: function() {
                alert('this is alert');
            },

            storeValue: function(event) {
                this.value = event.target.value;
            }
        },
    });
