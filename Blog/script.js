

function addInput(button){
    const parent=button.closest("#b_con").querySelector('#cmt');
    const CheckFrInput=parent.querySelector('input');

    if(CheckFrInput){
        if(CheckFrInput.value===""){
            window.alert("Type a comment");
            return;
        }else{  
                const display_comment=document.createElement("div");
                display_comment.id="comments";
                display_comment.textContent=CheckFrInput.value;
                parent.appendChild(display_comment);
                CheckFrInput.value="";
                
        }
    }else{
        const inputBox=document.createElement("input");
        inputBox.type="text";
        inputBox.id="input";
        inputBox.placeholder="Enter Comment..";
        parent.appendChild(inputBox); 
    }
    

}

