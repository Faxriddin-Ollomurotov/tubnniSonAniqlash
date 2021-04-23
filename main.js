let son= prompt("1 dan 99999 gacha son kiriting undan katta sondi o'qiysan demagan menga ");
let birlar, unlar, yuzlar, minglar, unminglar, unminglar1;
unminglar1=Math.floor(son/1000)%10;
unminglar=Math.floor(son/10000);
minglar=Math.floor(son/1000)%10;
yuzlar=Math.floor(son/100)%10;
unlar=Math.floor(son/10)%10;
birlar=son%10;
if(unminglar1===0){
switch(unminglar){
    case 1:
        document.write("O'nming");break;
    case 2:
        document.write("Yegirmaming");break;
    case 3:
        document.write("O'ttizming");break;
    case 4:
        document.write("Qirqming");break;
    case 5:
        document.write("Ellikming");break;
    case 6:
        document.write("Oltmishming");break;
    case 7:
        document.write("Yetmishming");break;
    case 8:
        document.write("Saksonming");break;
    case 9:
        document.write("To'qsonming");break;
}
}
else{
switch(unminglar){
    case 1:
         document.write("o'n");break;
    case 2:
        document.write('yegirma');break;
    case 3:
        document.write('uttiz');break;
    case 4:
        document.write('qirq');break;
    case 5:
        document.write('ellik');break;
    case 6:
        document.write('oltmish');break;
    case 7:
        document.write('yettmish');break;
    case 8:
        document.write('sakson');break;
    case 9:
        document.write('tuqson');break;   
}
}
switch(minglar){
    case 1:
        document.write('Birming');break;
    case 2:
        document.write('Ikkiming');break;
    case 3:
        document.write('Uchming');break;
    case 4:
        document.write('Turtming');break;
    case 5:
        document.write('Beshming');break;
    case 6:
        document.write('Oltiming');break;
    case 7:
        document.write('Yettiming');break;
    case 8:
        document.write('Sakkizming');break;
    case 9:
        document.write('Tuqqizming');break;
}
switch(yuzlar){
    case 1:
        document.write('Biryuz');break;
    case 2:
        document.write('Ikkiyuz');break;
    case 3:
        document.write('Uchyuz');break;
    case 4:
        document.write('Turtyuz');break;
    case 5:
        document.write('Beshyuz');break;
    case 6:
        document.write('Oltiyuz');break;
    case 7:
        document.write('Yettiyuz');break;
    case 8:
        document.write('Sakkizyuz');break;
    case 9:
        document.write('Tuqqizyuz');break;
}
switch(unlar){
    case 1:
        document.write("O'n");break;
    case 2:
        document.write('Yegirma');break;
    case 3:
        document.write("O'ttiz");break;
    case 4:
        document.write('Qirq');break;
    case 5:
        document.write('Ellik');break;
    case 6:
        document.write('Oltmish');break;
    case 7:
       document.write('Yettmish');break;
    case 8:
        document.write('Sakson');break;
    case 9:
        document.write('Tuqson');break;   
}
switch(birlar){
    case 1:
        document.write('Bir');break;
    case 2:
       document.write('Ikki');break;
    case 3:
        document.write('Uch');break;
    case 4:
        document.write('Turt');break;
    case 5:
        document.write('Besh');break;
    case 6:
        document.write('Olti');break;
    case 7:
        document.write('Yetti');break;
    case 8:
        document.write('Sakkiz');break;
    case 9:
        document.write('Tuqqiz');break;
}