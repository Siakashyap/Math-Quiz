player1name=""
player2name=""
function nextpage(){
    player1name=document.getElementById("playername1").value 
    player2name=document.getElementById("playername2").value

    localStorage.setItem("playername1",player1name)
    localStorage.setItem("playername2",player2name)

    location.window="Final.html"
}