let userscore = 0;
let comscore = 0;
let msg = document.querySelector("#comment");
let reset = document.querySelector("#restart");

reset.onclick = ()=>{
    document.querySelector("#userpoint").innerText = "0";
    document.querySelector("#cmppoint").innerText = "0";
    userscore = 0;
    comscore = 0;
    msg.innerText = "Pick Your Move";
    msg.style.backgroundColor = "#232F3E";
}

const choice = document.querySelectorAll(".box");
const option = ["stone","paper","scissor"];

const setmsguser = (userchoice,comchoice)=>{
    msg.style.backgroundColor = "green";
    msg.innerText = `${userchoice} beats ${comchoice}`;
}

const setmsgcom = (userchoice,comchoice)=>{
    msg.style.backgroundColor = "red";
    msg.innerText = `${comchoice} beats ${userchoice}`;
}

const genComchoice = ()=>{
    return Math.floor(Math.random() * 3);
}

const playGame = (userchoice) =>{
    let idx = genComchoice();
    let comchoice = option[idx];

    if(userchoice === "stone" && comchoice === "paper"){
        setmsgcom(userchoice,comchoice);
        comscore++;
    }else if(userchoice === "stone" && comchoice === "scissor"){
        setmsguser(userchoice,comchoice);
        userscore++;
    }else if(userchoice === "paper" && comchoice === "stone"){
        setmsguser(userchoice,comchoice);
        userscore++;
    }else if(userchoice === "paper" && comchoice === "scissor"){
        setmsgcom(userchoice,comchoice);
        comscore++;
    }else if(userchoice === "scissor" && comchoice === "stone"){
        setmsgcom(userchoice,comchoice);
        comscore++;
    }else if(userchoice === "scissor" && comchoice === "paper"){
        setmsguser(userchoice,comchoice);
        userscore++;
    }else if(userchoice === comchoice){
        msg.style.backgroundColor = "#232F3E";
        msg.innerText = `Draw`;

    }

    document.querySelector("#userpoint").innerText = userscore;
    document.querySelector("#cmppoint").innerText = comscore;
}

choice.forEach( (choice) =>{

    choice.addEventListener("click" , ()=>{
        let userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});

