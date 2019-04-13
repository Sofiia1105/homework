let list = ["123hello", "hellohd", "5454545heuillo", "kehello966"]

let match = "hello"
let text = "";
list.forEach(item => {
    if (item.indexOf(match) != -1) {
        text += (text.length > 0 ? "," : "") + item.indexOf(match);        
    }
});

console.log(text)