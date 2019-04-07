// Реализовать контекстное (event = contextmenu) меню. Список хранить в памяти. 
// // Почитать про event.preventDefault()
// Хранить в списке action - название функции которая будет
//  выполнятся при нажатии на пункт меню из задания №1.
///------------------------------------------------------
window.onload = function(){

    let bob = document.querySelector('.bob');
    let player = {
        top: bob.offsetTop,
        left: bob.offsetLeft,
        height: bob.clientHeight,
        width: bob.clientWidth
    }

    let h = 300;
    let step = 20;
    let smallHeight = player.height * 0.6;
    let smallWidth = player.width * 1.15;
    
    let action = {
        'Jump': function () {
            return alert('Jump');
        },
        'Remove': function () {
            return alert('Remove');
        },
        'ChangeColor': function () {
            return alert('ChangeColor');
        }
    };
    
    let list = ['Jump', 'Remove', 'ChangeColor'];
    
    let targetList = document.querySelector('.list ul');
    
    let showList = function(e){
    
    if (targetList.childElementCount == list.length) return;
    
    for(let i = 0; i < list.length; i++){
    
        let li = document.createElement('li');
        li.innerHTML = list[i];
        targetList.appendChild(li);
    
        li.addEventListener('mousedown', action[list[i]]);
    }
    }
    
    window.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    
        let checkLeft = window.innerWidth - e.clientX; 
        let checkTop =  window.innerHeight - e.clientY; 
    
        if(checkLeft > 100){
        targetList.style.left = e.clientX + 'px';
        }else{
            targetList.style.left = e.clientX - 100 + 'px';
        }
    
        if(checkTop > 100){
            targetList.style.top = e.clientY + 'px';
        }else{
             targetList.style.top = e.clientY - 100 + 'px';
        }        
    
        showList();
    });
}