document.addEventListener("DOMContentLoaded",
    function(e){
        //브라우저에서 값을 입력하는 과장
        //키 눌림 -> 그게 어떤 값인지 계산 -> 그 값을 화면에 표시
        //따라서 우리가 a를 누른 타이밍에는 아직 브라우저의 input태그에 입력되지 않은 상태

        //한박자 늦는데 왜 ? 
        //사용자가 뭘 입력하는가 << 이걸 감지하는게 아님
        //입력 하고 있네 << 를 감지하는 장점이 있음 
        //웹 페이지의 단축키 기능 제공 가능
        let keydown = document.querySelector("#keydown");
            keydown.addEventListener("keydown",
                //e : 발생한 이벤트
                function(e){
                    //e.target.value:이벤트가 발생한 타겟 값
                    //e.key : 내가 누른 키 (한글 안됨 ㅋㅋ )
                    console.log(e.key);
                    if(e.key==='Enter'){
                        alert("This is Enter!")
                    }

            }
        )
    }
)