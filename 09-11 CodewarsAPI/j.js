const baseAPI = "https://www.codewars.com/api/v1/users/";
let users=[];
let inputElement=document.getElementById("input");
let content=document.getElementById("content");
let output="";
let searchedUser=null;

function ShowError(errorText){
    content.innerHTML=errorText
}

function CheckForDuplicate(data){
    for(let i=0; i<users.length; i++){
        if(data.id==users[i].id){
            return users[i];
        }
    }
    return null;
}

async function GetUserData(url){
    try{
        const response= await fetch(baseAPI+url)
        const data=await response.json();
        if (data){
            searchedUser=CheckForDuplicate(data)
            if (!searchedUser){
                users.push(data);
                searchedUser=users[users.length-1]
            }
        }
    }
    catch(error){
        content.innerHTML="Ilyen név/ID-vel ellátott felhasználó nem létezik\n"+error;
    }
}

function ShowLastUserStats(){
    output=""
    output+="<h2> Username: "+searchedUser.username+" (id:"+searchedUser.id+")</h2><ol>";
    let userLanguages=searchedUser.ranks.languages;
    for(let [key, value] of Object.entries(userLanguages)){
        output+="<li>Nyelv: "+key+" Pontszám: "+value.score+"</li>";
    }
    output+="</ol>"
    content.innerHTML=output;
}


function GetCodewarsUsers(){
    let input=inputElement.value;
    GetUserData(input)
    if(searchedUser){
        setTimeout(function(){
            ShowLastUserStats() 
        }, 250);
    }
}