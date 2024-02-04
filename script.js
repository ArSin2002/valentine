
var count=-1
function increase(button){
    const lines=["plzzzzzzzzz","I'll cryyyyyyy","You have toooooooo","I am sad now","very sad","Last chance","pakka last","final vala pakka","dekhlo","I'll give up"]
    let btn1=document.querySelector('.yes');
    let cur_width=btn1.style.offsetWidth;
    let cur_height=btn1.offsetHeight;
    let cur_font_size=parseInt(window.getComputedStyle(btn1).fontSize);

    btn1.style.width = (cur_width*1.3)+'px';
    btn1.style.height = (cur_height*1.3)+'px';
    btn1.style.fontSize=(cur_font_size*1.3)+'px';
    count+=1;
    // let btn2=document.querySelector('.no');
    button.textContent=lines[count];
    if (count==lines.length){
        window.location.href="no.html";
    }
    // btn1.style.width='150px';
}

function loadpage(){
    window.location.href="yes.html";
}