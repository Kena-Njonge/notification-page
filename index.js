var unreadMsg =document.getElementsByClassName("notif-unread")
var readMsg = document.getElementsByClassName("notif")

function onLoad(){
    var i = 0;
    while(readMsg[i]!=null){
        readMsg[i].getElementsByClassName("notif-status")[0].style.display = "none";
        i++;
    }
}
function markAll(){
    var i = 0;
    document.getElementsByClassName("notif-unread-number")[0].innerText = "0";
    while(unreadMsg[i]!=null){
        unreadMsg[i].getElementsByClassName("notif-status")[0].style.display = "none";
        unreadMsg[i].className = "notif"
        i=0;
    }
}
function unread(id){
    document.getElementById(id).className = "notif";
    document.getElementById(id).getElementsByClassName("notif-status")[0].style.display = "none"
    initialNum= document.getElementsByClassName("notif-unread-number")[0].innerText;
    updatedNum = initialNum - 1;
    document.getElementsByClassName("notif-unread-number")[0].innerText = updatedNum;
}

onLoad();