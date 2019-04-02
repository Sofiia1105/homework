window.onload = function (){

    function move() {

        let elems = document.querySelectorAll("div");

        let width = window.innerWidth;
        let height = window.innerHeight;

        function getRandColor() {

            r = Math.floor(Math.random() * 255);
            g = Math.floor(Math.random() * 255);
            b = Math.floor(Math.random() * 255);
            a = Math.round((Math.random() * 1) * 100) / 100;
            
            return r + ',' + g + ',' + b + ',' + a;;        
        }       

        for (let i = 0; i < elems.length; i++) {

            elems[i].style.backgroundColor = 'rgba(' + getRandColor() + ')';
            elems[i].style.left = (Math.floor(Math.random() * (width - elems[i].clientWidth))) + 'px';
            elems[i].style.top = (Math.floor(Math.random() * (height - elems[i].clientHeight))) + 'px';    
            
        }       
    }

    timer = setInterval(move, 700);
}
