const baseAPI = "https://www.codewars.com/api/v1/users/";
let users=[];
let inputElement=document.getElementById("input");
let content=document.getElementById("content");
let output="";

function ShowError(){
    content.innerHTML="Ilyen név/ID-vel ellátott felhasználó nem létezik"
}

async function GetUserData(url){
    try{
        const response= await fetch(baseAPI+url)
        const data=await response.json();
        if (data){
            users.push(data);
        }
    }
    catch(error){
        ShowError()
    }
}

function ShowLastUserStats(){
    let lastUserInArray=users[users.length-1]
    output=""
    output+="<h2> Username: "+lastUserInArray.username+" (id:"+lastUserInArray.id+")</h2><ol>";
    let userLanguages=lastUserInArray.ranks.languages;
    for(let [key, value] of Object.entries(userLanguages)){
        output+="<li>Nyelv: "+key+" Pontszám: "+value.score+"</li>";
    }
    output+="</ol>"
    content.innerHTML=output;
}


function GetCodewarsUsers(){
    let input=inputElement.value;
    GetUserData(input)
    setTimeout(function(){
        ShowLastUserStats() 
    }, 250);
}