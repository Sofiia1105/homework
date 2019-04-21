window.onload= function(){
    let form = document.querySelector('form');

    let send = function(name, age){
        let xhr = new XMLHttpRequest();

        var body = 'name='+encodeURIComponent(name) + 
        ' ; age='+encodeURIComponent(age);
        console.log(body)

        xhr.open('POST', '/registration', false);

        xhr.send(body);
    }

    let validator = function(e){
        e.preventDefault();
        let name = form.querySelector('.name').value;
        let age = form.querySelector('.age').value;        

        let regName = /[0-9*()/@#$%^&+ ]/;
        let regAge = /['a-zA-Z ']/;

        if(name != "" && age != "" && !regName.test(name) && !regAge.test(age)){
            send(name, age);
        }else{
            regName.test(name) ? alert('invalid value '+name): alert('invalid value '+age);
        }
    }

    form.addEventListener('submit', validator)
}