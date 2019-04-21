let form = document.querySelector('form');

let rules = {
    name: function (el) {
        let reg = /[0-9*()/@#$%^&+]/;
        return reg.test(el.value);
    },
    age: function (el) {
        let reg = /['a-zA-Z']/;
        return reg.test(el.value);
    } 
}

let send = function(){
    let xhr = new XMLHttpRequest();
    let body = 'name = '+encodeURIComponent()
}

let validator = function (e) {     

    let inputs = this.children;   
    let error = [];

    for (let i = 0; i < inputs.length; i++) {               
        for (key in rules) {            
            if (inputs[i].className != "" && inputs[i].className == key) {                
                if (rules[key](inputs[i])) { 
                    error[error.length] = {
                        name: inputs[i].value,
                        element: inputs[i]
                    }                    
                }                
            }
       }        
    }
    
    if (error.length > 0) {
        e.preventDefault();        
        error.forEach(item => {
            console.log(item['element'])
            item['element'].style.borderColor = "red";
            alert('Invalid value ' + item['name']);
        })
    } else {
        error.forEach(item => {
            console.log(item['element'])
            item['element'].style.borderColor = "grey";
            send(item['name']);
        })
    }
}

// form.addEventListener('submit', validator)

// window.onload= function(){
//     let form = document.querySelector('form');

//     form.addEventListener('submit', function(e){
//         e.preventDefault();

//         let name = form.querySelector('.name').value;
//         let age = form.querySelector('.age').value;

//         let validate = function(){
            
//         }

//         var xhr = new XMLHttpRequest();
//         var body = 'name='+encodeURIComponent(name) + 
//         ' & age='+encodeURIComponent(age);
//         console.log(body)
//         xhr.open('POST', '/registration', false);

//         xhr.send(body);
//     })

// }