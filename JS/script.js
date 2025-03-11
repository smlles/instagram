

//document 객체 대상으로 이벤트 리스너 추가
//DOMContentLoaded : 문서의 콘텐츠 로딩이 완료 되었을 떄 이벤트발생
document.addEventListener("DOMContentLoaded",
    function(e){
        //input 태그 선택하기
        let button = document.querySelector("input");

        //input 태그에 표준 이벤트 처리
        //"input" -> <input>요소의 값이 변경될때마다 발생   
        button.addEventListener("input",
            function(e){
                console.log(e.target.value);
            }
        )
    }  
)

//<p>태그에서 인라인 이벤트 모델로 호출할 함수 정의
function hi(){
    alert("hi")
}
