//#1 Порядковый номер дня недели
function dayNumber(NDay){
    switch(NDay){
        case 1:
            return "Понедельник";
        case 2:
            return "Вторник";
        case 3:
            return "Wednesday my dudes";
        case 4:
            return "Четверг";
        case 5:
            return "Пятница";
        case 6:
            return "Суббота";
        case 7:
            return "Воскресенье";
        default:
            return "Error, введите числа от 1 до 7";       
    }
}
let NDay = 3;
let day = dayNumber(NDay);
console.log(`#1 Сегодня - ${day}`);

//#2 Порядковый номер масти игральных карт
function cards(Nmast){
    switch(Nmast){
        case 1:
            return "Пики (не точёные)";
        case 2:
            return "Трефы";
        case 3:
            return "Бубны";
        case 4:
            return "Червы";
        default:
            return "Повторите попытку, в колоде всего 4 масти";
    }
}
let Nmast = 3;
let card = cards(Nmast);
console.log(`#2 Выбрана масть - ${card}`);

//#3 Масть и достоинство карты
function FullCardsName(Nds){
    if (Nds >= 6 && Nds <= 14) { //Задаём промежуток для выбора
        switch(Nds){
            case 6:
                return "Шестёрка";
            case 7:
                return "Семёрка";
            case 8:
                return "Восьмерка";
            case 9:
                return "Девятка";
            case 10:
                return "Десятка";
            case 11:
                return "Валет";
            case 12:
                return "Дама";
            case 13:
                return "Король";
            case 14:
                return "Туз";
        }
    }
    else{ //Если карта не входит в промежуток от 6 до 14
        console.log("Номер карты не был определён, введите числа от 6 до 14 соответственно номеры карт")
    }
}
Nmast = 1;
card = cards(Nmast); //Перезапись значения для масти, чтобы масть не повторялась во 2-ом и 3-ем примере
let Nds = 13;
let dcard = FullCardsName(Nds);
console.log(`#3 Выбрана карта ${dcard} масти ${card}`);