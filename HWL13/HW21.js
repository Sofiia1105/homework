window.onload = function(){    
    
    timer = function(){
        let elem = document.querySelectorAll('input');
        let textarea = document.querySelector('.put');        
        let result = "";

        for (let i = 0; i < elem.length; i++){
    
            result += (result.length > 0 ? ',': '') + elem[i].value;
                 
        }   
        return textarea.value = result;
    }

    setInterval(timer, 0);
}
