/*
<template id="graph">
<svg v-attr="width: width, height : height, viewBox: viewBox">
<path stroke="black" width=1 fill="transparent" v-attr="d:paths"></path>
</svg>
</template>
*/
var Vue = require("vue")
var h = require('virtual-hyperscript')
var create = require("vdom/create-element")
// 更新部分にこそ真価があるのに初回レンダリングだけとか不毛。
var graphTree = h("svg", {
  "attributes" : {
    "v-attr" : "width: width, height: heigth, viewBox: viewBox"
  }
},[
  h("path", {
    "attributes" : {    
      stroke: "black",
      width : 1,
      fill : "transparent",
      "v-attr":"d:paths"
    }
  })
])
module.exports = function(){
  return {
    template : create(graphTree).outerHTML,  
    data : function(){
      return {
        width : 100,
        height : 100,
      }
    },
    computed: {
      viewBox : function(){
        return [0, -this.$data.height, this.$data.width, this.$data.height].join(" ")
      },
      paths : function(){
        var self = this
        var pts = this.points
        
        if(pts.length === 0){
          return ""
        }
        
        var paths = pts.map(function(m, i){
          var x = self.$data.width * m[0]
          var y = -self.$data.height * m[1]
          return x + "," + y
        }).join(" ")
        return "M" + paths
      }
    }
  }
}