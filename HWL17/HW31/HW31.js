window.onload= function(){
    let form = document.querySelector('form');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        let name = form.querySelector('.name').value;
        let age = form.querySelector('.age').value;

        let validate = function(){
            
        }

        var xhr = new XMLHttpRequest();
        var body = 'name='+encodeURIComponent(name) + 
        ' & age='+encodeURIComponent(age);
        console.log(body)
        xhr.open('POST', '/registration', false);

        xhr.send(body);
    })

}