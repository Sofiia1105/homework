window.onload = function (){
    let main = document.querySelectorAll('.main');
    let list = document.querySelectorAll('.main > .list');
    let close = document.querySelectorAll('.main > .list > .close');

    // for (let i = 0; i < close.length; i++){
    //     close[i].addEventListener('click', function(){   

    //         main[i].removeEventListener ('click', function(){                         
    //             list[i].style.display = 'inline';
    //             list[i].style.transition = 1+'s ease';                 
    //         })                     
    //         //list[i].style.display = 'none';   
    //     })
    // }

    let openList = function(){
        for (let i = 0 ; i < this.length; i++){
            main[i].addEventListener('click', function(){                         
                list[i].style.display = 'inline';
                list[i].style.transition = 1+'s ease';                 
            })
           
        }  
    }

  
    
}