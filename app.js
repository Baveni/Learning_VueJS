new Vue({
    el: '#exercise',
    data: {
        MyName: 'what is your name? ',
        MyAge: 33,
    },
    methods: {
        changeName: function(event) {
            this.MyName = event.target.value;
        },
    
     
        outputAge: function(event) {
            return this.MyAge * 3
        },
    
/*     methods: {
        ageMulti: function () {
            return this.MyAge * 3
        }
    },
    methods: {
        getRandomFloat: function () {
            var max = 3
            return Math.floor(Math.random(Math.round) * Math.floor(max) )
        }
    } */
}});

