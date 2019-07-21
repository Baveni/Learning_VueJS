new Vue({
    el: '#exercise',
    data: {
        MyName: 'Jernej',
        MyAge: 19,
        img_src: 'https://i.pinimg.com/736x/ce/2b/59/ce2b593b90429988881615f663539722--bengal-cats-cat-breeds.jpg',
        
    },
    /*
    functions syntay:
    name: func() {},
    name2: func() {},
    */
    methods: {

        outputAge: function(event) {
            return this.MyAge * 3
        },

        getRandomFloat: function() {
            return Math.random()
        },

}});

