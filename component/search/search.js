//Component Object
Component({
    properties: {
        myProperty:{
            type:String,
            value:'',
            observer: function(){}
        },
    },
    data: {

    },
    methods: {
        goToSearch(){
            wx.navigateTo({
              url: '/pages/search/search',
            })
        }
    },
    created: function(){

    },
    attached: function(){

    },
    ready: function(){

    },
    moved: function(){

    },
    detached: function(){

    },
});