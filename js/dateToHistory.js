let history = [];//배열
let historyIndex =-1;//인덱스

function saveHistory(){
    const ctext = document.getElementById('addSubject').value;
    if (ctext && (historyIndex === -1 || history[historyIndex] !== ctext)) {
        history.push(ctext);
        //히스토리 배열에 디스플레이된 문자열을 추가하는 방식
        historyIndex = history.length - 1; // 새로운 입력이므로 인덱스를 업데이트
        updateHistoryDisplay();
        document.getElementById('addSubject').value = ''; // 입력 필드 초기화
        console.log("입력필드가 초기화되었습니다.");
        
    }
    
}

function updateHistoryDisplay() {
    const hisd = document.getElementById('historyDisplay');
    hisd.innerHTML = 'History: ' + history.join('\n');
    //History Display 새로쓰기
    //매회차마다 새로씀
}

function viewHistory(){
    if (history.length > 0) {
        const blob = new Blob([history.join('\n')], { type: 'text/plain' });
        //바이너리데이터 저장을 (데이터 배열, 데이터 처리 타입) 에 맞춰서 할것입니다.
        //이진 데이터 저장가능한 객체 선언
        const url = URL.createObjectURL(blob);
        //파일 읽어오기 위한 임시URL을 생성(읽어올 객체)
        //URL 객체 선언
        const a = document.createElement('a');
        //a 태그 선언
        a.href = url;
        a.download = 'history.csv';
        //이름,확장자 변경가능, txt
        a.click();
        URL.revokeObjectURL(url); // URL 객체 해제
    } else {
        alert('다운로드할 이력이 없습니다.!!');
    }
}