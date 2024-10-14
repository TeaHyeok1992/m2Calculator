function reCalculation(){
    let calBtn=document.getElementById('equal');
    calBtn.click;
    console.log("재연산 매서드를 실행하였습니다.");
}


function appearWord(){
    console.log("word 표기 함수입니다.")
    let decimal= document.getElementById('toDecimal');
    let decimalValue=decimal.value;
    if(decimalValue==0){
        alert("값이 존재하지 않습니다!");
    }
    let wordValue=decimalValue & 0xFFFF;
    //16비트 마스크 적용
    console.log("word 범위:"+wordValue);
}

function appearDword(){
    console.log("Dword 표기 함수입니다.")
    let decimal= document.getElementById('toDecimal');
    let decimalValue=decimal.value;
    if(decimalValue==0){
        alert("값이 존재하지 않습니다.");
    }
    let dWordValue= decimalValue >>> 0; //부호 없는 Dword로 변환
    console.log("Dword 범위:"+dWordValue);
    
}