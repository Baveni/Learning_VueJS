new Vue({
    el: '#exercise',
    data: {
        MyName: 'what is your name? ',
        MyAge: 19,
        
    },
    /*
    functions syntay:
    name: func() {},
    name2: func() {},
    */
    methods: {
        changeName: function(event) {
            this.MyName = event.target.value;
        },

        outputAge: function(event) {
            return this.MyAge * 3
        },

        getRandomFloat: function() {
            /*return Math.floor(Math.random(Math.round(max_int)))*/
            return Math.random()
        },

}});

