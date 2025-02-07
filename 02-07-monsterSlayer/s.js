let playerHealth = 100;
let monsterHealth = 10;
let gameActive = true;
let victory = false;
let level=1;
let specAttackCooldown = 0;
let actions=[];
let monsterNames = ['Goblin','Orc','Troll', 'Witch','Vampire','Zombie','Skeleton','Ghost','Werewolf', "Kaiser Inshight"];
let monsterHealths = [10,20,35,55,75,100,125,160,200,1000000];

let monsterHealthBar = document.getElementById('monsterHP');
let playerHealthBar = document.getElementById('playerHP');
let battleLog = document.getElementById('battleLog');

const attack=() =>{
    let playerDmg = 5+Math.round(Math.random()*7);
    monsterHealth-= playerDmg;
    actions.push("Player hits monster for "+playerDmg+" damage");
    monsterAttack();
    updateview();
}

const specAttack=() =>{
    if(specAttackCooldown>0){
        return;
    }
    let playerDmg = 10+Math.round(Math.random()*15);
    monsterHealth-= playerDmg;
    actions.push("Player hits monster for "+playerDmg+" damage");
    specAttackCooldown = 3;
    monsterAttack();
    updateview();
}

const heal=() =>{
    let playerHeal= 8+Math.round(Math.random()*12);
    playerHealth+= playerHeal;
    actions.push("Player heals for "+playerHeal+" health");
    monsterAttack();
    updateview();
}

const surrender= () =>{
    actions.push("Player surrenders");
    gameActive=false;
    updateview();
}

const monsterAttack=() =>{
    let monserDmg = 8+Math.round(Math.random()*7);
    playerHealth-= monserDmg;
    actions.push("Monster hits player for "+monserDmg+" damage");
}

const updateview=() =>{
    specAttackCooldown--;
    if(playerHealth>0 && monsterHealth<=0){
        victory=true;
        monsterHealth=0;
    }
    else{
        if(playerHealth>100){
            playerHealth=100;
        }
        if(playerHealth<0){
            playerHealth=0;
        }
        if(monsterHealth<0){
            monsterHealth=0;
        }
    }
    monsterHealthBar.style.width = monsterHealth/monsterHealths[level-1]*100+'%';
    monsterHealthBar.innerHTML = monsterHealth+' / '+monsterHealths[level-1];
    playerHealthBar.innerHTML = playerHealth+' / 100';
    playerHealthBar.style.width = playerHealth+'%';
    if(gameActive){
        if(playerHealth<=0){
            actions.push("Player has died");
            gameActive=false;
        }
        if(monsterHealth<=0){
            actions.push("Monster has died");
            gameActive=false;
        }
    }
    let battleLogText="";
    for(let i=actions.length-1;i>=0;i--){
        battleLogText+="<li>"+actions[i]+"</li>";
    }
    battleLog.innerHTML=battleLogText;

    if(!gameActive || victory){
        document.getElementById('controls').innerHTML="<button onclick='newGame()'>New game</button>";
    }
    if(victory){
        document.getElementById('controls').innerHTML+="<button onclick='nextLevel()'>Next level</button>";
    }
}

const newGame=()=>{
    playerHealth = 100;
    level=1;
    document.getElementById("monsterName").innerHTML=monsterNames[level-1];
    monsterHealth = 10;
    gameActive = true;
    specAttackCooldown = 0;
    victory=false;
    actions=[];
    document.getElementById("controls").innerHTML=`        <button onclick="attack()">ATTACK</button>
        <button onclick="specAttack()">SPECIAL ATTACK</button>
        <button onclick="heal()">HEAL</button>
        <button onclick="surrender()">SURRENDER</button>`;
    updateview();
}

const nextLevel=()=>{
    level++;
    playerHealth = 100;
    document.getElementById("monsterName").innerHTML=monsterNames[level-1];
    monsterHealth = monsterHealths[level-1];
    gameActive = true;
    specAttackCooldown = 0;
    actions=[];
    victory=false;
    document.getElementById("controls").innerHTML=`        <button onclick="attack()">ATTACK</button>
        <button onclick="specAttack()">SPECIAL ATTACK</button>
        <button onclick="heal()">HEAL</button>
        <button onclick="surrender()">SURRENDER</button>`;
    if(level==10){
        document.getElementById("ost").innerHTML="<iframe width='300' height='50' src='https://www.youtube.com/embed/p_Yeswf7TAA?autoplay=1&loop=1&autopause=0&mute=1'  allow='autoplay'></iframe>";
    }
    updateview();
}