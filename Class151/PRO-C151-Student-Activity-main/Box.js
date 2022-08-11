// Registering component in box-component.js
AFRAME.registerComponent('move-box', {
    schema: {
      moveX: {type: 'number', default:1},
      moveY: {type: 'number', default:1}

    },
    init: function () {
        console.log("i am inside move box init");
      },
    tick:function(){

        //this.data.moveX=this.data.moveX+0.05
        //var pos=this.el.getAttribute("position") 
        //pos.x=this.data.moveX
        //this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})

        this.data.moveX=this.data.moveX+5
        this.data.moveY=this.data.moveY+8
        var rot=this.el.getAttribute("rotation") 
        rot.x=this.data.moveX,
        rot.y=this.data.moveY
        this.el.setAttribute("rotation",{x:rot.x,y:rot.y,z:rot.z})


        


      },


  });

