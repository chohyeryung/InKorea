var count=0;
function start(){
    document.getElementById("first").style.display="block";
    document.getElementById("press").style.display="none";
    document.getElementById("tag").style.display="none";
}
function input(){
    var input = document.getElementById("beak").value;
    if(input=="백두산"){
        count++;
        alert("정답입니다 !! 다음 문제로 넘어갑니다.")
        document.getElementById("two").style.display="block";
        document.getElementById("first").style.display="none";
    }
    else{
        alert("정답이 아닙니다 !!");
        document.getElementById("two").style.display="block";
        document.getElementById("first").style.display="none";
    }
}
function input2(){
    var input2 = document.getElementById("bohu").value;
    if(input2=="보우하사"){
        count++;
        alert("정답입니다 !! 다음 문제로 넘어갑니다.")
        document.getElementById("three").style.display="block";
        document.getElementById("two").style.display="none";
    }
    else{
        alert("정답이 아닙니다 !!");
        document.getElementById("three").style.display="block";
        document.getElementById("two").style.display="none";
    }
}
function input3(){
    var input3 = document.getElementById("bul").value;
    if(input3=="불변함"){
        count++;
        alert("정답입니다 !! 다음 문제로 넘어갑니다.")
        document.getElementById("four").style.display="block";
        document.getElementById("three").style.display="none";
    }
    else{
        alert("정답이 아닙니다 !!");
        document.getElementById("four").style.display="block";
        document.getElementById("three").style.display="none";
    }
}
function input4(){
    var input4 = document.getElementById("dal").value;
    if(input4=="달"){
        count++;
        alert("정답입니다 !! 다음 문제로 넘어갑니다.");
        document.getElementById("five").style.display="block";
        document.getElementById("four").style.display="none";
    }
    else{
        alert("정답이 아닙니다 !!");
        document.getElementById("five").style.display="block";
        document.getElementById("four").style.display="none";
    }
}
function input5(){
    var input5 = document.getElementById("nam").value;
    var inputt5 = document.getElementById("chull").value;
    if(input5=="남산" && inputt5=="철갑"){
        count++;
        alert("정답입니다 !! 다음 문제로 넘어갑니다.");
        document.getElementById("six").style.display="block";
        document.getElementById("five").style.display="none";
    }
    else{
        alert("정답이 아닙니다 !!");
        document.getElementById("six").style.display="block";
        document.getElementById("five").style.display="none";
    }
}
function input6(){
    var input6 = document.getElementById("ga").value;
    var inputt6 = document.getElementById("gurum").value;
    if(input6=="가을" && inputt6=="구름"){
        count++;
        alert("정답입니다 !! 다음 문제로 넘어갑니다.");
        document.getElementById("seven").style.display="block";
        document.getElementById("six").style.display="none";
    }
    else{
        alert("정답이 아닙니다 !!");
        document.getElementById("seven").style.display="block";
        document.getElementById("six").style.display="none";
    }
}
function input7(){
    var input7 = document.getElementById("chul").value;
    if(input7=="삼천리"){
        count++;
        alert("정답입니다 !! 다음 문제입니다.");
        document.getElementById("eight").style.display="block";
        document.getElementById("seven").style.display="none";
    }
    else{
        alert("정답이 아닙니다 !!");
        document.getElementById("eight").style.display="block";
        document.getElementById("seven").style.display="none";
    }
}
function input8(){
    var input8 = document.getElementById("chug").value;
    if(input8=="충성"){
        count++;
        alert("정답입니다 !! 다음 문제입니다.");
        document.getElementById("nine").style.display="block";
        document.getElementById("eight").style.display="none";
    }
    else{
        alert("정답이 아닙니다 !!");
        document.getElementById("nine").style.display="block";
        document.getElementById("eight").style.display="none";
    }
}
function input9(){
    var input9 = document.getElementById("nara").value;
    if(input9=="나라"){
        count++;
        alert("정답입니다 !!");
        document.getElementById("nine").style.display="none";
        result(count);
    }
    else{
        alert("정답이 아닙니다 !!");
        document.getElementById("nine").style.display="none";
        result(count);
    }
}
function result(count){
    if(count>=0 && count<=4){
        page('one.html');
    }
    else if(count>=5 && count<=8){
        page('two.html');
    }
    else if(count>=9 && count<=10){
        page('three.html');
    }
}
function page(url){
    location.href=url;
}