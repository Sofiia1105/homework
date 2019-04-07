window.onload = function () {

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

    let playerMove = function () {
        let e = event.keyCode;
        
        let width = window.innerWidth - player.width;        

        if (e != null && e == 32) {//Jump    
            
            if (parseInt(bob.style.height) < player.height) {
                event.preventDefault();
            } else {
                bob.style.top = h - player.height + 'px';
            }
        }

        if (e != null && e == 37) { //Left              
            if (!isNaN(parseInt(bob.style.left)) && parseInt(bob.style.left) > 0 && parseInt(bob.style.left) != 5) {                
                step -= 3;
                bob.style.left = step + 'px';                 
            }
        }
        
        if (e != null && e == 39) {//Right     
            if (isNaN(parseInt(bob.style.left)) || parseInt(bob.style.left) < width - 20) {
                bob.style.left = (player.left || 0) + step + 'px';
                step += 3;
            }
        }

        if (e != null && e == 38) {//Up            
        
            if (isNaN(parseInt(bob.style.top)) || parseInt(bob.style.top) > 5) { 
                bob.style.top = player.top - step + 'px';
                step += 3;
            }
        }     

        if (e != null && e == 40) {//Down  

            if (!isNaN(parseInt(bob.style.top)) && parseInt(bob.style.top) < player.top) { 
                bob.style.top = player.top - step + 'px';
                step -= 3;
            }
        }  

        if (e != null && e == 17) {//Ctrl            
            bob.style.height = smallHeight + 'px';
            bob.style.width = smallWidth + 'px';
            bob.style.top = ((window.innerHeight - smallHeight) - 5) + 'px';
            bob.style.borderRadius = 10 + 'px';
        }  
    }


    let playerDown = function (){
        let e = event.keyCode;

        if (e == 32) {

            if (parseInt(bob.style.height) < player.height) {
                event.preventDefault();
            } else {
                bob.style.top = player.top;
                bob.style.bottom = player.bottom;  
            }
            
        }       

    }


    document.addEventListener('keydown', playerMove);
    document.addEventListener('keyup', playerDown)

}