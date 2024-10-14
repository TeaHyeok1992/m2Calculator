function reCalculation(number){
    let calBtn=document.getElementById('equal');
    console.log("변경된 값:"+number);
    let calSubject=document.getElementById('addSubject');
    console.log(calSubject);
    calSubject.setAttribute('value',number);
    calBtn.click;
    
    console.log("재연산 매서드를 실행하였습니다.");
}


function appearWord(){
    console.log("word 표기 함수입니다.")
    let decimal= document.getElementById('toDecimal');
    let decimalValue=decimal.value;
    if(decimalValue==0){
        alert("값이 존재하지 않습니다, 먼저 계산식을 실행 해주세요.");
        
    }else{
        let wordValue=decimalValue & 0xFFFF;
        //16비트 마스크 적용
        if(wordValue==0){
            alert("word범위를 벗어났습니다!!");
        }else{
            console.log("word 범위:"+wordValue);
            let ptag=document.getElementById('dTitle');
            ptag.innerHTML='word';
            console.log("word변경처리 미구현");

        }

    }
}

function appearDword(){
    console.log("Dword 표기 함수입니다.")
    let decimal= document.getElementById('toDecimal');
    let decimalValue=decimal.value;
    if(decimalValue==0){
        alert("값이 존재하지 않습니다, 먼저 계산식을 실행 해주세요.");
    }else{
        let dWordValue= decimalValue & 0xFFFFFFFF;
         //32비트 마스크 적용
        if(dWordValue==0){
            alert("Dword 범위를 벗어났습니다!!");
        }else{
            console.log("Dword 범위:"+dWordValue);
            let ptag=document.getElementById('dTitle');
            ptag.innerHTML='Dword';
            console.log("Dword 변경식 미구현")
    
        }

    }
    
}