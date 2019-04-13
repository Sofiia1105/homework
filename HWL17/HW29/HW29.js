//По шаблону выбрать фильм, отобразить итоговую стоимость заказа.
//В консоль вывести названия заказанных фильмов и стоимость всех фильмов. 
//Если нету названия или цены => игнорировать этот фильм.
window.onload = function () {
    let list = document.querySelectorAll(".cinema__item");

    let children = new Array();

    list.forEach(item => {        
        children[children.length] = item.children;        
    })

    let childrenList = 
        children.filter(item => {
            if (item[0].innerHTML !== "" && item[1].innerHTML !== "") return true;
        })

    childrenList.forEach(item => {
        console.log('Film name: \"' + `${item[0].innerHTML}` + '\"; price =' + `${item[1].innerHTML}`)
    })

    let sum = childrenList.reduce(function (prev, item) {
            prev += parseInt(item[1].innerHTML);
            return prev
        }, 0)
   
    console.log('Films sum = '+sum)
}