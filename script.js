let resultArr = [];
let curround = 1;
let rounds = 1;
let houseArray = [];
let infectedHouses;

function create () {  
    infectedHouses= 0;
    for (i = 0; i < 100; i++ ){
        let house = document.createElement('div');
        house.id = "house"+i;
        house.className = "house";
        document.querySelector(".main").appendChild(house);
        houseArray.push(house); 
    };
}
create();
/* ------------------------------------------------- */
function reset() {
    rounds = 1;
    infectedHouses = 1;
    infectedHouses = 1;
    let rand = Math.floor(Math.random() * 100);
    document.querySelector("#house"+rand).className = "Zhouse";

    for (i = 0; i < houseArray.length; i++ ) {
        houseArray[i].className = "house";
}
};
/* ------------------------------------------------ */
function infectHouse() {
    let rand = Math.floor(Math.random() * 100);
    document.querySelector("#house"+rand).className = "Zhouse";
    }
/* ------------------------------------------------------ */
function checkInfected() {

    for (i = 0; i < houseArray.length; i++ ) {

        if (houseArray[i].className == "house") {
            return false;
        }
    }
    return true;
}
/* ------------------------------------------------- */
function infect() { 
    if (infectedHouses >= 1){
        infectedHouses = 0;
    } 
    else {
        infectedHouses = 1;
    }
    houseArray.forEach (item => {
        if (item.className === "Zhouse") {
            infectedHouses++;
        }
    }); 
    for (i = 0; i < infectedHouses; i++) { {
            infectHouse();
        }
    }
};
/* --------------------------------------------------- */
function run() {  
    let speed = document.querySelector(".input").value;
    const inf = setInterval(function() {
        if(!checkInfected()) {
            rounds++;
            infect();
        }
        else if (curround >=11) {
            clearInterval(inf);
            let total = resultArr.reduce(tot);
            function tot(total, num) {
                return total + num;
            }
            document.querySelector(".resultAvg").innerHTML += Math.round(total / resultArr.length);
            console.log(resultArr.length);
        }
        else {
            resultArr.push(rounds);
            document.querySelector(".result").innerHTML += `Day ${curround}: ${rounds} </br>`;
            reset();
            curround++;;
      }
    }, speed);
};
/* ---------------------------------------------- */
function resetHouses() {
    for (y = 0; y < 100; y++) {
        document.querySelector("#house"+y).className = "house";
    }
}
/* ----------------------------------------------------- */
function resetPage() {
    window.location.reload();
}
