//addEventListener(이벤트,함수)
document.addEventListener("DOMContentLoaded",(e)=>{
    //뭐가 바뀌는지 다 지정하고 시작해
    let nameEditButton = document.querySelector("#nameEditButton")
    let editName = document.querySelector("#editNameField")
    let newName = document.querySelector("#newName")
    let okButton = document.querySelector("#okButton")
    let nameHere = document.querySelector("#nameHere")
    
    //버튼 클릭시 뭐가 바뀌는가
    //수정버튼 클릭 -> 수정버튼 사라짐 -> 밑에 입력칸 + 확인칸 보임
    nameEditButton.addEventListener("click",(e)=>{
        editName.style.display="block";
        nameEditButton.style.display="none";
    })
    //확인버튼 클릭 -> 입력칸 + 확인칸 사라짐 -> 수정 버튼 재등장 -> 이름 수정됨
    okButton.addEventListener("click",(e)=>{
        nameHere.textContent = newName.value;
        editName.style.display="none";
        nameEditButton.style.display="inline";
    })
}
)