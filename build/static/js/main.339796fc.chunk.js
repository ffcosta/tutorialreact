(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),l=a.n(s),c=(a(15),a(16),a(17),a(1)),o=a(2),i=a(4),u=a(3),m=a(5);function h(e){return r.a.createElement("button",{className:"square btn btn-light",onClick:e.onClick},e.value)}var d=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},r.a.createElement("span",{className:"num-row"},"1"),this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},r.a.createElement("span",{className:"num-row"},"2"),this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},r.a.createElement("span",{className:"num-row"},"3"),this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),r.a.createElement("div",{className:"board-row"},r.a.createElement("span",{className:"num-col"},"A"),r.a.createElement("span",{className:"num-col"},"B"),r.a.createElement("span",{className:"num-col"},"C")))}}]),t}(r.a.Component),v=a(8);function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(v.a)(t[a],3),r=n[0],s=n[1],l=n[2];if(e[r]&&e[r]===e[s]&&e[r]===e[l])return e[r]}}var p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null),jogadas:[],values:[]}],stepNumber:0,xIsNext:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1],n=a.squares.slice(),r=a.jogadas.slice(),s=a.values.slice();b(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",s.push(n[e]),r.push(function(e){return 0===e?" A-1":1===e?" B-1":2===e?" C-1":3===e?" A-2":4===e?" B-2":5===e?" C-2":6===e?" A-3":7===e?" B-3":" C-3"}(e)),this.setState({history:t.concat([{squares:n,jogadas:r,values:s}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],s=b(n.squares),l=a.map(function(e,a){var n=e.jogadas[e.jogadas.length-1],s=e.values[e.values.length-1],l=a?"Go to move #"+a+"- Jogada: Input ".concat(s," in ")+n:"Go to game start";return r.a.createElement("li",{key:a},r.a.createElement("button",{className:"btn btn-info btn-sm active btn-block",onClick:function(){return t.jumpTo(a)}},l))});return e=s?"Winner: "+s:"Next player: "+(this.state.xIsNext?"X":"O"),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(d,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,e),r.a.createElement("ol",null,l)))}}]),t}(r.a.Component);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.339796fc.chunk.js.map