function start(){
    document.getElementById("coinform").style.display="block";
    document.getElementById("press").style.display="none";
    document.getElementById("tag").style.display="none";
    document.getElementById("second").style.display="block";
    document.body.style.backgroundImage="url(../image/donb2.jpg)";
}

function selecCoin(){
    var x=parseInt(Math.random()*8)+1;
    if(x==1){
        coinsrc="../image/sipwon.png";
    }
    if(x==2){
        coinsrc="../image/osipwon.jpg";
    }
    if(x==3){
        coinsrc="../image/beakwon.png";
    }
    if(x==4){
        coinsrc="../image/obeakwon.png";
    }
    if(x==5){
        coinsrc="../image/chunwon.png";
    }
    if(x==6){
        coinsrc="../image/ochunwon.png";
    }
    if(x==7){
        coinsrc="../image/manwon.png";
    }
    if(x==8){
        coinsrc="../image/omanwon.png";
    }
    document.coinform.coinbutton.value="....화폐를 선택 중입니다....";
    window.setTimeout("changeCoin()", 2000);
}
function changeCoin(){
    document['coin'].src=coinsrc;
    document.coinform.coinbutton.value="선택된 화폐입니다.";
}
function won(){
    var i=document.coin.src;
    input=document.getElementById("cointext").value;
    wonanswer(input, i);
}
function wonanswer(input, i){
    if(i="../image/sipwon.png" && input=="다보탑"){
        alert("정답");
        document.getElementById("cointext").value="";
        selecCoin();
    }
    else if(i="../image/osipwon.jpg" && input=="벼 이삭"){
        alert("정답");
        document.getElementById("cointext").value="";
        selecCoin();
    }
    else if(i="../image/beakwon.png" && input=="이순신"){
        alert("정답");
        document.getElementById("cointext").value="";
        selecCoin();
    }
    else if(i="../image/obeakwon.png" && input=="학"){
        alert("정답");
        document.getElementById("cointext").value="";
        selecCoin();
    }
    else if(i="../image/chunwon.png" && input=="퇴계 이황"){
        alert("정답");
        document.getElementById("cointext").value="";
        selecCoin();
    }
    else if(i="../image/ochunwon.png" && input=="율곡 이이"){
        alert("정답");
        document.getElementById("cointext").value="";
        selecCoin();
    }
    else if(i="../image/manwon.png" && input=="세종대왕"){
        alert("정답");
        document.getElementById("cointext").value="";
        selecCoin();
    }
    else if(i="../image/omanwon.png" && input=="신사임당"){
        alert("정답");
        document.getElementById("cointext").value="";
        selecCoin();
    }
    else{
        alert("실패");
        document.getElementById("cointext").value="";
        selecCoin();
    }
}
