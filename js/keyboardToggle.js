 function keyboardToggle(){
    
    let toggleDisplay = document.getElementById('addSubject');
    
    console.log(toggleDisplay);
    console.log("읽기전용 존재여부: "+toggleDisplay.readOnly);
    if(toggleDisplay.readOnly){
        //화면의 속성에서 readOnly가 True일 경우에
        toggleDisplay.removeAttribute('readOnly');
        //readOnly(읽기전용)속성을 삭제
        let onoff= document.getElementById('onOff');
        onoff.innerHTML="Keyboard ON";
    }else{
        toggleDisplay.setAttribute('readOnly',true);
        //아닐경우 readOnly 기능을 추가
        let onoff= document.getElementById('onOff');
        onoff.innerHTML="Keyboard OFF";
    }
 }