// deve ter jeitos melhores e mais otimizados, mas esse último projeto do evento não consegui juntar criatividade além de não ter conseguido achar um diferencial para este projeto, o que acabou resultando num código preguiçoso e longo

let players = [];

const tBody = document.querySelector("#player-table");
const addPlayerInput = document.querySelector("#add-name");
const removePlayerInput = document.querySelector("#remove-name");
let id = 0;

addPlayerInput.addEventListener("keyup", (e) => {
    if(e.keyCode == 13){
        if(addPlayerInput.value == ""){
            alert("Preencha o campo")
        } else if(alreadyExist(addPlayerInput.value)){
            alert("O nome já existe");
        } else {
            players.push({
                name: addPlayerInput.value,
                wins: 0,
                draws: 0,
                loses: 0,
                points: 0,
                id: id++
            });
            addPlayerInput.value = "";
            loadTable();
        }
    }
});

removePlayerInput.addEventListener("keyup", (e) => {
    if(e.keyCode == 13){
        for(let i = 0; i < players.length; i++){
            if(removePlayerInput.value == players[i].name){
                players = players.filter(player => player.name != removePlayerInput.value);
            }
        }
        removePlayerInput.value = "";
        loadTable();
    }
})

function loadTable() {
    const tr = document.querySelectorAll(".tr-body");
    tr.forEach(e => {e.remove()});

    for(let i = 0; i < players.length; i++){
        tBody.innerHTML += `<tr class="tr-body" id="${players[i].id}">
                            <td>${players[i].name}</td>
                            <td>${players[i].wins}</td>
                            <td>${players[i].draws}</td>
                            <td>${players[i].loses}</td>
                            <td>${players[i].points}</td>
                            <td class="td-btn"><button onclick="addWin(this)">Vitória</td>
                            <td class="td-btn"><button onclick="addDraw(this)">Empate</td>
                            <td class="td-btn"><button onclick="addLose(this)">Derrota</td>
                            <td class="td-btn"><button onclick="clean(this)">Limpar</td>
                            </tr>`;
    }
}

// a partir daqui houve bastante repetição de código
function addWin(e){
    if(players.length < 2){
        alert("Adicione mais um jogador");
    } else {
        let parentEl = e.closest("tr");
        let tdPlayer = parentEl.querySelector("tr :nth-child(1)");
        let promptInput = prompt("Contra quem você ganhou?");

        if(alreadyExist(promptInput) == false){
            alert("O jogador não existe");
        } else {
            if(tdPlayer.innerHTML == promptInput){
                alert("Não dá para ganhar de você mesmo");
                while(tdPlayer.innerHTML == promptInput){
                    promptInput = prompt("Contra quem você ganhou?");
                    if(promptInput == null){
                        break;
                    } else if(tdPlayer.innerHTML == promptInput){
                        alert("Não dá para ganhar de você mesmo");
                    }
                }
                
                if(alreadyExist(promptInput) == false){
                    alert("O jogador não existe");
                } else if(promptInput != null){
                    for(let i = 0; i < players.length; i++){
                        if(parentEl.id == players[i].id){
                            players[i].wins++;
                            players[i].points += 10;
                        }
                    }
            
                    for(let i = 0; i < players.length; i++){
                        if(promptInput == players[i].name){
                            players[i].loses++;
                            players[i].points -= 10;
                        }
                    }
                }
            } else {
                for(let i = 0; i < players.length; i++){
                    if(parentEl.id == players[i].id){
                        players[i].wins++;
                        players[i].points += 10;
                    }
                }
    
                for(let i = 0; i < players.length; i++){
                    if(promptInput == players[i].name){
                        players[i].loses++;
                        players[i].points -= 10;
                    }
                }
            }
    
            loadTable();
        }
    }
}

function addDraw(e){
    if(players.length < 2){
        alert("Adicione mais um jogador");
    } else {
        let parentEl = e.closest("tr");
        let tdPlayer = parentEl.querySelector("tr :nth-child(1)");
        let promptInput = prompt("Contra quem você empatou?");

        if(alreadyExist(promptInput) == false){
            alert("O jogador não existe");
        } else {
            if(tdPlayer.innerHTML == promptInput){
                alert("Não dá para empatar de você mesmo");
                while(tdPlayer.innerHTML == promptInput){
                    promptInput = prompt("Contra quem você empatou?");
                    if(promptInput == null){
                        break;
                    } else if(tdPlayer.innerHTML == promptInput){
                        alert("Não dá para empatar de você mesmo");
                    }
                }
                
                if(alreadyExist(promptInput) == false){
                    alert("O jogador não existe");
                } else if(promptInput != null){
                    for(let i = 0; i < players.length; i++){
                        if(parentEl.id == players[i].id){
                            players[i].draws++;
                            players[i].points += 5;
                        }
                    }
            
                    for(let i = 0; i < players.length; i++){
                        if(promptInput == players[i].name){
                            players[i].draws++;
                            players[i].points += 5;
                        }
                    }
                }
            } else {
                for(let i = 0; i < players.length; i++){
                    if(parentEl.id == players[i].id){
                        players[i].draws++;
                        players[i].points += 5;
                    }
                }
    
                for(let i = 0; i < players.length; i++){
                    if(promptInput == players[i].name){
                        players[i].draws++;
                        players[i].points += 5;
                    }
                }
            }
    
            loadTable();
        }
    }
}

function addLose(e){
    if(players.length < 2){
        alert("Adicione mais um jogador");
    } else {
        let parentEl = e.closest("tr");
        let tdPlayer = parentEl.querySelector("tr :nth-child(1)");
        let promptInput = prompt("Contra quem você perdeu?");

        if(alreadyExist(promptInput) == false){
            alert("O jogador não existe");
        } else {
            if(tdPlayer.innerHTML == promptInput){
                alert("Não dá para perder de você mesmo");
                while(tdPlayer.innerHTML == promptInput){
                    promptInput = prompt("Contra quem você perdeu?");
                    if(promptInput == null){
                        break;
                    } else if(tdPlayer.innerHTML == promptInput){
                        alert("Não dá para perder de você mesmo");
                    }
                }
                
                if(alreadyExist(promptInput) == false){
                    alert("O jogador não existe");
                } else if(promptInput != null){
                    for(let i = 0; i < players.length; i++){
                        if(parentEl.id == players[i].id){
                            players[i].loses++;
                            players[i].points -= 10;
                        }
                    }
            
                    for(let i = 0; i < players.length; i++){
                        if(promptInput == players[i].name){
                            players[i].wins++;
                            players[i].points += 10;
                        }
                    }
                }
            } else {
                for(let i = 0; i < players.length; i++){
                    if(parentEl.id == players[i].id){
                        players[i].loses++;
                        players[i].points -= 10;
                    }
                }
    
                for(let i = 0; i < players.length; i++){
                    if(promptInput == players[i].name){
                        players[i].wins++;
                        players[i].points += 10;
                    }
                }
            }
    
            loadTable();
        }
    }
}

function clean(e){
    let parentEl = e.closest("tr");

    for(let i = 0; i < players.length; i++){
        if(parentEl.id == players[i].id){
            players[i].wins = 0;
            players[i].draws = 0;
            players[i].loses = 0;
            players[i].points = 0;
        }
    }

    loadTable();
}

function alreadyExist(e){
    for(let i = 0; i < players.length; i++){
        if(e == players[i].name){
            return true
        }
    }
    return false;
}

loadTable();