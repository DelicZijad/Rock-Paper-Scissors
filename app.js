'use strict';

const signs=['✊','✋','✌️']
const options=[...document.getElementsByClassName('option')];
const playerCount=document.getElementById('playerCount');
const botCount=document.getElementById('botCount');
const player=document.getElementById('player');
const bot=document.getElementById('bot');
const reset=document.getElementById('reset');

options.forEach((opt,i)=>{
    opt.textContent=signs[i];
   opt.addEventListener('click',function(e){
    player.textContent=e.target.textContent;
    bot.textContent= signs[Math.floor(Math.random() * signs.length)]
    let x=player.textContent;
    let y=bot.textContent;
if(x==='✊'){
    if(y==='✋')botCount.textContent++
    if(y==='✌️')playerCount.textContent++;
}
if(x==='✋'){
    if(y==='✌️')botCount.textContent++
    if(y==='✊')playerCount.textContent++;
}
if(x==='✌️'){
    if(y==='✊')botCount.textContent++
    if(y==='✋')playerCount.textContent++;
}
   })

})
reset.addEventListener('click',function(){
    botCount.textContent=0;
    playerCount.textContent=0;
    player.textContent='';
    bot.textContent='';
})
