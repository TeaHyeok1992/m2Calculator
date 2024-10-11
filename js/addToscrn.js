var numeric = false ;
//비교할 전역변수 설정
function add(char){
    if(numeric== false){

        if(isNaN(char)==true){
            //연산자가 두번나올경우에는 입력하지 않습니다.
            //NaN= not a Number (숫자가 아님)
        }else{
            document.getElementById('addSubject').value += char;
        }
    }else{
        document.getElementById('addSubject').value += char;
    }

    if(isNaN(char) == true){
        numeric = false ;
    }else {
        numeric = true ;
    }
}




function calculation(){
    //일반적인 계산
    var values=document.getElementById('addSubject');
    var retur=eval(values.value);
    //eval은 계산하는 매서드
    var decimalfin=document.getElementById('toDecimal');//10진수 결과 창
    var binaryfin=document.getElementById('toBinary');//2진수 결과 창
    var octetfin=document.getElementById('toOctet');//8진수 결과 창
    var hexdecimalfin=document.getElementById('toHexdecimal');//16진수 결과 창
    if(retur == NaN){
        
    }else if(retur == undefined){

    }else{
        //일반 10진수 디스플레이에 값 입력
        decimalfin.value=retur;
        console.log("10진수 값:"+retur);

        //계산식을 2진수로 변환 -- 2진수 디스플레이에 입력
        var returnToBinary = retur.toString(2);
        
        console.log("2진수 값:"+returnToBinary);
        
        binaryfin.value= returnToBinary;

        //계산식을 8진수로 변환 -- 8진수 디스플레이에 입력
        var returnToOctet = retur.toString(8);
        
        console.log("8진수 값:"+returnToOctet);
        
        octetfin.value= returnToOctet;

        //계산식을 16진수로 변환 -- 16진수 디스플레이에 입력
        var returnToHexdecimal = retur.toString(16).toUpperCase();
        
        console.log("16진수 값:"+returnToHexdecimal);
        

        hexdecimalfin.value= returnToHexdecimal;
        
    }


}


function eradicate(){
    //백스페이스 기능
    var screen =document.getElementById('addSubject').value;
    console.log(screen);
    var y =screen.split('');
    console.log("현재 리스트: "+y)
    y.pop();
    console.log("삭제후 리스트: "+y)
    screen= y.join('');
    document.getElementById('addSubject').value=screen;
    
}

function reset(){
    //Clear 기능
    var values=document.getElementById('addSubject');
    //과정
    var decifin=document.getElementById('toDecimal');
    // 일반계산결과
    var bifin=document.getElementById('toBinary');
    // 2진수 결과
    var octfin = document.getElementById('toOctet');
    // 8진수 결과
    var hexfin = document.getElementById('toHexdecimal');
    // 16진수 결과
    values.value="";
    decifin.value="";
    bifin.value="";
    octfin.value="";
    hexfin.value="";
}
