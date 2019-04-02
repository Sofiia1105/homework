window.onload = function () {

    let range = document.querySelector('#range');
    let number = document.querySelector('#number');
    let diagram = document.querySelector('#diagram');
    let diagramRed = document.querySelector('#red');
    let diagramGreen = document.querySelector('#green');


    let getRange = function (value) {      

        const const2 = 2 / 100;
        const const4 = 4 / 100;
        const const6 = 6 / 100;
        const const8 = 8 / 100;

       let interval = {
            '0-19': function() {
                return +value * const2;
           },
            '20-49': function () {
                return +value * const4;
            },
            '50-74': function () {
                return +value * const6;
            },
            '75-100': function () {
                return +value * const8;
            }
        }

       for (let key in interval) {
           let A = key.split('-');     
            if (value => +A[0] && value <= +A[1]) {               
                return interval[key]();
            } 
        }

    }

    let diagramChange = function (elem) {
        diagramGreen.style.height = elem.value;
        diagramRed.style.bottom = elem.value

        diagramRed.style.height = getRange(elem.value);   
    }


    number.oninput = function () {
        range.value = number.value;
        
        diagramChange(number);        
    }

    range.oninput = function () {
        number.value = range.value;

        diagramChange(range);        
    }
}
