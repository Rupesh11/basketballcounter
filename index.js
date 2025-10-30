
let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function homeone(){   
    homeScore += 1 
    homeScoreEl.innerText = homeScore
}

function hometwo(){   
    homeScore += 2 
    homeScoreEl.innerText = homeScore
}

function homethree(){   
    homeScore += 3 
    homeScoreEl.innerText = homeScore
}

function guestone(){   
    guestScore += 1 
    guestScoreEl.innerText = guestScore
}

function guesttwo(){   
    guestScore += 2 
    guestScoreEl.innerText = guestScore
}

function guestthree(){   
    guestScore += 3 
    guestScoreEl.innerText = guestScore
}

function restart(){
    homeScore = 0
    guestScore = 0
    guestScoreEl.innerText = homeScore
    homeScoreEl.innerText = homeScore
}