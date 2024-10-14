// function reCalculation(number){
//     let calBtn=document.getElementById('equal');
//     console.log("변경된 값:"+number);
//     let calSubject=document.getElementById('addSubject');
//     console.log(calSubject);
//     calSubject.setAttribute('value',number);
    
//     calBtn.click;
    
//     console.log("재연산 매서드를 실행하였습니다.");
// }


function appearWord(){
    console.log("word 표기 함수입니다.")
    let decimal= document.getElementById('toDecimal');
    let decimalValue=decimal.value;
    if(decimalValue==0){
        alert("값이 존재하지 않습니다, 먼저 계산식을 실행 해주세요.");
        
    }else{
        decimalValue >>> 0;
        let mergedValue=decimalValue+2;
        if(mergedValue > 65535){
            decimalValue=0;
        }
        //오버플로우 방지처리
    
        
        
        
        //범위를 벗어날시 경고
        if(decimalValue==0){
            alert("word범위를 벗어났습니다!!");
        }else{
            console.log("word 범위:"+decimalValue);
            let ptag=document.getElementById('dTitle');
            ptag.innerHTML='word';
            
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
        decimalValue >>> 0;
        let mergedValue=decimalValue+2;
        if(mergedValue > 4294836225){
            decimalValue=0;
        }
        //오버플로우 방지처리
         //범위를 벗어날시 경고
        if(decimalValue==0){
            alert("Dword 범위를 벗어났습니다!!");
        }else{
            console.log("Dword 범위:"+decimalValue);
            let ptag=document.getElementById('dTitle');
            ptag.innerHTML='Dword';
            
    
        }

    }
    
}