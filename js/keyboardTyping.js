var numeric = false ;
//비교할 전역변수 설정
function add(char){
    if(numeric== false){

        if(isNaN(char)==true){
            //연산자가 두번나올경우에는 입력하지 않습니다.
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


function onlyNumeric(event){
    
    // const choPattern = /[\u3131-\u314E]/g;  // 한글 초성의 유니코드 범위
    // const joongPattern = /[\u314F-\u3163]/g;  // 한글 중성의 유니코드 범위
    // const jongPattern = /[\u11A8-\u11C2]/g;  // 한글 종성의 유니코드 범위
    //const koreanPattern = /[\u1100-\u11FF\u3131-\u318E\uAC00-\uD7A3]/g;  // 자모 및 완성형 한글 포함
    // 특수문자 전체 \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=
    const input = event.target.value;
        // event.target.value = input.replace(/[가-힣a-zA-Z]/g, '');
        event.target.value = input.replace(/[A-Za-z\u1100-\u11FF\u3131-\u318E\uAC00-\uD7A3\\{\}\[\]?,;:|\)~`!^\_┼<>@\#$%&\'\"\\\(]/g,'');
        //사칙연산기호 및 소수점만 허용 하는 정규표현식
        //해당 정규표현식에 반하는 법칙이 입력되었을 경우 공백으로 바꿈
        //Map으로 구현을 만약에 한다면 String type으로 해야될것
        //A-Z 영문대문자
        //a-z 영문소문자
        console.log(event);
        console.log("사칙연산기호, 소수점, 숫자만 입력 가능합니다.")
        //제어문으로 사칙연산 조사
    let ptag = document.getElementById('dTitle'); //
    if(ptag.innerHTML == 'DEC'){

    }else if(ptag.innerHTML == 'word'){
        console.log("word계산기");
        console.log(typeof input);
    }else if(ptag.innerHTML == 'Dword'){
        console.log("Dword계산기");
        
    }    
        
        


        
};
    
    




   
    
