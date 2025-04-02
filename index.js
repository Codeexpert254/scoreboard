let incrElHome = document.getElementById("home-score")
let incrElGuest = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function homebtn1() {
    homeScore +=1
    incrElHome.textContent = homeScore
    
}

function homebtn2() {
    homeScore +=2
    incrElHome.textContent = homeScore
    
}

function homebtn3() {
    homeScore +=3
    incrElHome.textContent = homeScore
    
}

function guestbtn1() {
    guestScore +=1
    incrElGuest.textContent = guestScore
}

function guestbtn2() {
    guestScore +=2
    incrElGuest.textContent = guestScore
}

function guestbtn3() {
   guestScore +=3
    incrElGuest.textContent = guestScore
}