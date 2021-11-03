/*Игра "Морской бой" заключается в уничтожении кораблей противника быстрее, чем он уничтожит твои! 
Имеем два поля боя (две карты). Компьютер в роли противника.*/

(function(w, h) {
//рисуем карту с рандомным расположением своих кораблей
    var a = ['s000000000', '000ss00000', '0s00000000', '0000sss000', '000000000s', '0ss0000000', '000000ss00', 'sss0000000', '00000000s0', '00ssss0000'];
    var b = ['00000ss000', '0s0000000s', '000000000s',  '000s00000s', '0s00000s00',  '0s00000s00', '0s00000s00', '0s0s00000s', '00000ss00s', 's000000000'];
    var c = ['00ssss0000', '00000000s0', 'sss0000000', '000000ss00', '0ss0000000', '000000000s', '0000sss000', '0s00000000', '000ss00000', 's000000000'];
    var d = ['000s0000ss', '0s0s000000', '000s000000', '000s000s00', '0000000s00', '0s00s00s00', '0s00000000', '0s0s000000', '00000ss000', 'ss000000s0'];
    
    var map1;
   
    if (new Date().getMinutes() % 2 == 0 & new Date().getSeconds() % 2 == 0){
        map1 = a;
       }
    if (new Date().getMinutes() % 2 == 0 & new Date().getSeconds() % 2 !== 0){
        map1 = b;
       }
    if (new Date().getMinutes() % 2 !== 0 & new Date().getSeconds() % 2 == 0){
        map1 = c;
       }
    if (new Date().getMinutes() % 2 !== 0 & new Date().getSeconds() % 2 !== 0){
        map1 = d;
       }
        
    //рисуем карту с рандомным расположением кораблей противника
    var map2;
   
    if (new Date().getMinutes() % 2 == 0 & new Date().getSeconds() % 2 == 0){
        map2 = d;
       }
    if (new Date().getMinutes() % 2 == 0 & new Date().getSeconds() % 2 !== 0){
        map2 = c;
       }
    if (new Date().getMinutes() % 2 !== 0 & new Date().getSeconds() % 2 == 0){
        map2 = b;
       }
    if (new Date().getMinutes() % 2 !== 0 & new Date().getSeconds() % 2 !== 0){
        map2 = a;
       }
    
    //создаем переменные
    var pb1 = document.querySelector('#pb1'); 
    var pb2 = document.querySelector('#pb2');
    
    //ввод имени пользователя
    var iAm = prompt('Ваше имя?', '');
    if (iAm == '') {
        alert('Вы не указали свое имя!');
        var iAm = prompt('Ваше имя?', '');
    }

    var name = document.getElementById("n");
    name.innerHTML = iAm;
    
    //ход игры
    for (i=0;i<w;i++) for (j=0;j<h;j++) {
        
        div1 = document.createElement('div');
        div1.id = i+'_'+j, div1.className = map1[i][j] == 's' ? 's' : 'w';
        pb1.appendChild(div1);
    
        div2 = document.createElement('div');
        div2.className = map2[i][j] == 's' ? 's' : 'w';
        div2.onclick = function () { 
                            if (fire(this)) backfire();
                       };
        pb2.appendChild(div2);
     }
    
    //если победил
    function fire(el) {
        if (el.className == 'd' || el.className == 'm') return false;
        el.className = el.className == 's' ? 'd' : 'm';
        if (document.querySelectorAll('#pb2 .s').length === 0) {
            document.getElementById("result").innerHTML='Победа!'; 
            return false;
        }
        if (el.className == 'm') return true; 
    }
        
    //если проиграл
    function backfire() {
        for (i=w*h;i>0;i--) {
                    var targets = document.querySelectorAll('#pb1 .s, #pb1 .w');
                    if (targets.length === 0 || fire(targets[Math.floor(Math.random() * targets.length)])) break; 
        }
        if (document.querySelectorAll('#pb1 .s').length === 0) 
            document.getElementById("result").innerHTML='Поражение!';
    }
    
})(10, 10);