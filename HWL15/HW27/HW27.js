window.onload = function(){

    let bob = document.querySelector('.bob');

    let player = {
        top: bob.offsetTop,
        height: bob.clientHeight,
    }
    let h = 300;
    
    let action = {
        'Jump': function () {  
            bob.style.top = h - player.height + 'px';

            setTimeout(function(){
                bob.style.top = player.top;
            }, 1000)
        },
        'Remove': function () {
            bob.style.display = 'none';         
        },
        'ChangeColor': function () {
            r = Math.floor(Math.random() * 255);
            g = Math.floor(Math.random() * 255);
            b = Math.floor(Math.random() * 255);
            a = Math.round((Math.random() * 1) * 100) / 100;
            
            return bob.style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';                    
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