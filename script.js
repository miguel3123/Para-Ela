const hearts=document.getElementById('hearts');
function spawnHeart(){if(!hearts)return;const h=document.createElement('span');h.className='heart';h.textContent=Math.random()>0.5?'♥':'✦';h.style.left=Math.random()*100+'vw';h.style.bottom='-20px';h.style.animationDuration=(5+Math.random()*5)+'s';h.style.fontSize=(10+Math.random()*14)+'px';hearts.appendChild(h);setTimeout(()=>h.remove(),10000)}
setInterval(spawnHeart,650); for(let i=0;i<10;i++)setTimeout(spawnHeart,i*180);
const surpriseBtn=document.getElementById('surpriseBtn'); const surprise=document.getElementById('surprise');
if(surpriseBtn) surpriseBtn.addEventListener('click',()=>{surprise.classList.toggle('show');surprise.textContent=['Você desbloqueou +10 pontos de fofura.','Um gatinho aprovou esta página. 🐈‍⬛','Roxo + preto = ciência avançada.','Este botão era completamente inútil. Mas bonito.'][Math.floor(Math.random()*4)]});
const messages=['Você é uma parte bonita deste pequeno universo.','Seu cantinho continua aqui, brilhando baixinho.','Um pouco de roxo para deixar o dia menos cinza.','Até o caos pode ter um lugar fofinho.'];
const messageBtn=document.getElementById('messageBtn'); const message=document.getElementById('message');
if(messageBtn)messageBtn.addEventListener('click',()=>message.textContent=messages[Math.floor(Math.random()*messages.length)]);
const musicBtn=document.getElementById('musicBtn'); if(musicBtn)musicBtn.addEventListener('click',()=>{musicBtn.textContent=musicBtn.textContent.includes('Ativar')?'Clima ativado ♫':'Ativar clima ✦'; document.body.animate([{filter:'brightness(1)'},{filter:'brightness(1.13)'},{filter:'brightness(1)'}],{duration:700})});
const catBtn=document.getElementById('catBtn'); const cat=document.getElementById('cat'); if(catBtn&&cat){catBtn.addEventListener('click',()=>{cat.style.animation='none';cat.offsetHeight;cat.style.animation='walk 7s linear';setTimeout(()=>cat.style.animation='',7200)})}
document.querySelectorAll('.tilt').forEach(card=>{card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(700px) rotateX(${y*-4}deg) rotateY(${x*5}deg) translateY(-4px)`});card.addEventListener('mouseleave',()=>card.style.transform='')});


// Contador para o aniversário de 16 anos
const countdown = document.getElementById('countdown');
if (countdown) {
  const targetDate = new Date('2027-04-18T00:00:00-03:00');
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) {
      countdown.innerHTML = '<div style="grid-column:1/-1"><strong>16 anos! 🎉</strong><span>Chegou o aniversário!</span></div>';
      return;
    }
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    daysEl.textContent = String(days).padStart(3, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Estrelas em explosão
function burstStars(target=document.getElementById('sparkleBurst')){
  if(!target)return;
  for(let i=0;i<28;i++){
    const s=document.createElement('span'); s.className='burst-star'; s.textContent=Math.random()>0.35?'✦':'✧';
    s.style.left=(45+Math.random()*10)+'%'; s.style.top=(42+Math.random()*16)+'%';
    s.style.setProperty('--x',(Math.random()*520-260)+'px'); s.style.setProperty('--y',(Math.random()*420-210)+'px');
    target.appendChild(s); setTimeout(()=>s.remove(),1800);
  }
}
const starsBtn=document.getElementById('starsBtn'); if(starsBtn) starsBtn.addEventListener('click',burstStars);
const memSparkles=document.getElementById('memSparkles'); if(memSparkles) memSparkles.addEventListener('click',()=>burstStars(document.querySelector('.floating-hearts')));

const memoryMessage=document.getElementById('memoryMessage'); const memoryMsg=document.getElementById('memoryMsg');
if(memoryMessage&&memoryMsg){const list=['Que este cantinho sempre pareça um lugar seguro para sorrir.','Pequenos detalhes, grande efeito.','Roxo, preto e uma quantidade irresponsável de estrelinhas.','O gato segue trabalhando duro.'];memoryMessage.addEventListener('click',()=>memoryMsg.textContent=list[Math.floor(Math.random()*list.length)]);}
