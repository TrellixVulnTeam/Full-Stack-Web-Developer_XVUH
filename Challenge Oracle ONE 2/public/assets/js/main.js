(()=>{var l={414:l=>{const e=document.querySelector("canvas").getContext("2d");e.beginPath(),e.fillStyle="black",e.moveTo(50,620),e.lineTo(125,570),e.lineTo(200,620),e.fill(),e.beginPath(),e.fillStyle="black",e.fillRect(120,180,10,400),e.fill(),e.beginPath(),e.fillStyle="black",e.fillRect(120,180,250,10),e.fill(),e.beginPath(),e.fillStyle="black",e.fillRect(370,180,10,130),e.fill(),l.exports={head:function(){e.beginPath(),e.fillStyle="blue",e.arc(375,310,30,0,2*Math.PI),e.stroke(),e.fill()},body:function(){e.beginPath(),e.fillStyle="blue",e.fillRect(370,340,10,100),e.fill()},leftArm:function(){e.beginPath(),e.fillStyle="blue",e.moveTo(360,340),e.lineTo(320,370),e.lineTo(335,370),e.lineTo(385,340),e.fill()},rightArm:function(){e.beginPath(),e.fillStyle="blue",e.moveTo(360,340),e.lineTo(420,370),e.lineTo(435,370),e.lineTo(390,340),e.fill()},leftLeg:function(){e.beginPath(),e.fillStyle="blue",e.moveTo(360,440),e.lineTo(320,470),e.lineTo(335,470),e.lineTo(385,440),e.fill()},rightLeg:function(){e.beginPath(),e.fillStyle="blue",e.moveTo(360,440),e.lineTo(420,470),e.lineTo(435,470),e.lineTo(390,440),e.fill()}}},950:()=>{const l=["alura","ramon","lopes","faustino","pereira","pinto"],e=l[Math.floor(Math.random()*(l.length-0)+0)],i=$("#palavraSecreta"),t=document.createElement("span");t.innerHTML="_ ",function(l){for(let e=0;e<l.length;e++)i.append(t)}(e),$("#letraEscolhida").css("color","red")},225:()=>{}},e={};function i(t){var n=e[t];if(void 0!==n)return n.exports;var o=e[t]={exports:{}};return l[t](o,o.exports,i),o.exports}i(225),i(950);i(414)})();