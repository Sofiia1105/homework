//Выведите столбец четных чисел 
//в промежутке от 0 до 100. (в document в виде таблицы)
document.write('<table>');
text = '';
for(i = 1; i<=100; i++){
    if(i % 2 == 0){
        document.write('<tr>'+'<td>'+i+'</td>'+'</tr>');
    }
}
document.write('</table>');