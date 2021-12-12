let name, age, city, phone, email, company;

function text_age(ages) {
    let txt;
    let count = ages % 100;
    if (count >= 5 && count <= 20) {
        txt = 'лет';
    } else {
        count = count % 10;
        if (count === 1) {
            txt = 'год';
        } else if (count >= 2 && count <= 4) {
            txt = 'года';
        } else {
            txt = 'лет';
        }
    }
    return txt;
}

function value_check_empty(checked_value) {
    return (!checked_value || 0 === checked_value.length);
}

function task_item_1() {
    name = prompt('Введите Ваше имя:');
    while (value_check_empty(name)) {
        alert('Поле "Имя" не может быть пустым!');
        name = prompt('Введите Ваше имя:');
    }
    age = prompt('Введите Ваш возраст:');
    while (value_check_empty(age)) {
        alert('Поле "Возраст" не может быть пустым!');
        age = prompt('Введите Ваш возраст:');
        age = Number(age);
    }
    city = prompt('Введите Ваш город проживания:');
    while (value_check_empty(city)) {
        alert('Поле "Город" не может быть пустым!');
        city = prompt('Введите Ваш город проживания:');
    }
    phone = prompt('Введите Ваш номер телефона:');
    while (value_check_empty(phone)) {
        alert('Поле "Телефон" не может быть пустым!');
        phone = prompt('Введите Ваш номер телефона:');
    }
    email = prompt('Введите Ваш e-mail:');
    while (value_check_empty(email)) {
        alert('Поле "e-mail" не может быть пустым!');
        email = prompt('Введите Ваш e-mail:');
    }
    company = prompt('Введите название Вашей компании:');
    while (value_check_empty(company)) {
        alert('Поле "Компания" не может быть пустым!');
        company = prompt('Введите название Вашей компании:');
    }
    alert(
        'Меня зовут ' + name + '. Мне ' + age + ' ' + text_age(age) +
        '. Я проживаю в городе ' + city + ' и работаю в компании ' + company +
        '. Мои контактные данные: ' + phone + ', ' + email + '.');
}

function task_item_2() {
    let currentYear = new Date(),
        year_of_birth = (currentYear.getFullYear() - age);
    console.log(currentYear.getFullYear());
    console.log(age);
    alert(name + ' родился в ' + year_of_birth + ' году.');
}

function task_item_3() {
    let a, part1, part2, string;
    string = prompt('Введите последовательность из 6-ти цифр');
    while (string.length !== 6){
        alert('Научитесь считать до 6!');
        string = prompt('Введите последовательность из 6-ти цифр');
    }
    a = 0;
    part1 = 0;
    part2 = 0;
    while (a <= 2){
        part1 = part1 + Number(string[a]);
        a = a + 1;
    }
    a = 3;
    while (a <= 5){
        part2 = part2 + Number(string[a]);
        a = a + 1;
    }
    if (part1 === part2){
        alert('Да!');
    }
    else {
        alert('Нет!');
    }
}

function task_item_4() {
    let a = prompt('Введите значение переменной a:');
    let a_num = Number(a);
    if (a_num > 0){
        alert('Верно!');}
    else {
        alert('Неверно!');
    }
}

function task_item_5_6() {
    let a = 10,
        b = 2;
    alert('a = ' + a + ', b = ' + b + '\n'+ '\na + b = ' + (a + b) + '\na - b = ' + (a - b) + '\na * b = ' + (a * b) +
        '\na / b = ' + (a / b));
    if ((a + b) > 1){
        alert('a = ' + a + ', b = ' + b + '\n'+ '\nСумма чисел > 1, поэтому возвожу сумму (a + b) в квадрат и получаю '
            + Math.pow(a + b, 2) + '.');
    }
    if ((a > 2 && a < 11) || (b >= 6 && b < 14)){
        alert('a = ' + a + ', b = ' + b + '\n'+ '\nЕсли переменная a больше 2 и меньше 11, или переменная b больше ' +
            'или равна 6 и меньше 14, то выводим "Верно", в противном случае выводим "Неверно".\n\nРезультат: ВЕРНО!');}
    else {
        alert('a = ' + a + ', b = ' + b + '\n'+ '\nЕсли переменная a больше 2 и меньше 11, или переменная b больше ' +
            'или равна 6 и меньше 14, то выводим "Верно", в противном случае выводим "Неверно".\n\nРезультат: НЕВЕРНО!');
    }
}

function task_item_7() {
    let n;
    n = prompt('Введите число от 1 до 59');
    n = Number(n);
    switch (true) {
        case (n >= 1) && (n <= 14):
            alert('1-я четверть');
            break;
        case (n >= 15) && (n <= 29):
            alert('2-я четверть');
            break;
        case (n >= 30) && (n <= 44):
            alert('3-я четверть');
            break;
        case (n >= 45) && (n <= 59):
            alert('4-я четверть');
            break;
        default:
            alert("Число вне диапазона от 1 до 59");
            break;
    }
}

function task_item_8() {
    let day;
    day = prompt('Введите число от 1 до 31');
    day = Number(day);
    if (day >= 1 && day <= 10) {
        alert('1-я декада');
    } else {
        if ((day >= 11 && day <= 20)) {
            alert('2-я декада');
        } else {
            if ((day >= 21 && day <= 31)) {
                alert('3-я декада');
            } else {
                alert('У Вас очень странное представление о количестве дней в месяце!');
            }
        }
    }
}

function task_item_9() {
    let year, month, week, day, hour, minute, second;

    day = prompt('Введите количество дней:');
    day = Number(day);
    switch (true) {
        case (day >= 1) && (day < 7):
            hour = day * 60;
            minute = hour * 60;
            second = minute * 60;
            alert('Меньше недели, ' + day + ' дн., ' + hour + ' час., '+ minute + ' мин., ' + second + ' сек. ');
            break;
        case (day >= 7) && (day < 31):
            week = (day / 7).toFixed(1);
            hour = day * 60;
            minute = hour * 60;
            second = minute * 60;
            alert('Меньше месяца, ' + week + ' нед., ' + day + ' дн., ' + hour + ' час., '+ minute + ' мин., ' + second + ' сек. ');
            break;
        case (day >= 31) && (day < 365):
            month = (day / 31).toFixed(1);
            week = (day / 7).toFixed(1);
            hour = day * 60;
            minute = hour * 60;
            second = minute * 60;
            alert('Меньше года, ' + month + ' мес., ' + week + ' нед., ' + day + ' дн., ' + hour + ' час., '+ minute + ' мин., ' + second + ' сек. ');
            break;
        case day >= 365:
            year = (day / 365).toFixed(1);
            month = (day / 31).toFixed(1);
            week = (day / 7).toFixed(1);
            hour = day * 60;
            minute = hour * 60;
            second = minute * 60;
            alert(year + ' г, ' + month + ' мес., ' + week + ' нед., ' + day + ' дн., ' + hour + ' час., '+ minute + ' мин., ' + second + ' сек. ');
            break;
        default:
            alert('Число вне допустимого диапазона!');
            break;
    }
}

function task_item_10() {
    let year, total_days_year = 0,  day, seasons;
    year = prompt('Введите год:');
    year = Number (year);
    let month1 = {
            name: 'Январь',
            count_day: new Date(year, 1, 0).getDate()
    },
        month2 = {
            name: 'Февраль',
            count_day: new Date(year, 2, 0).getDate()
        },
        month3 = {
            name: 'Март',
            count_day: new Date(year, 3, 0).getDate()
        },
        month4 = {
            name: 'Апрель',
            count_day: new Date(year, 4, 0).getDate()
        },
        month5 = {
            name: 'Май',
            count_day: new Date(year, 5, 0).getDate()
        },
        month6 = {
            name: 'Июнь',
            count_day: new Date(year, 6, 0).getDate()
        },
        month7 = {
            name: 'Июль',
            count_day: new Date(year, 7, 0).getDate()
        },
        month8 = {
            name: 'Август',
            count_day: new Date(year, 8, 0).getDate()
        },
        month9 = {
            name: 'Сентябрь',
            count_day: new Date(year, 9, 0).getDate()
        },
        month10 = {
            name: 'Октябрь',
            count_day: new Date(year, 10, 0).getDate()
        },
        month11 = {
            name: 'Ноябрь',
            count_day: new Date(year, 11, 0).getDate()
        },
        month12 = {
            name: 'Декабрь',
            count_day: new Date(year, 12, 0).getDate()
        };

    let choice1 = {
            begin: 1,
            finish: month1.count_day
        },
        choice2 = {
            begin: month1.count_day,
            finish: month1.count_day + month2.count_day
        },
        choice3 = {
            begin: month1.count_day + month2.count_day,
            finish: month1.count_day + month2.count_day + month3.count_day
        },
        choice4 = {
            begin: month1.count_day + month2.count_day + month3.count_day,
            finish: month1.count_day + month2.count_day + month3.count_day + month4.count_day
        },
        choice5 = {
            begin: month1.count_day + month2.count_day + month3.count_day + month3.count_day,
            finish: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day
        },
        choice6 = {
            begin: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day,
            finish: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day + month6.count_day
        },
        choice7 = {
            begin: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day + month6.count_day,
            finish: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day + month6.count_day + month7.count_day
        },
        choice8 = {
            begin: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day + month6.count_day + month7.count_day,
            finish: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day + month6.count_day + month7.count_day + month8.count_day
        },
        choice9 = {
            begin: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day + month6.count_day + month7.count_day + month8.count_day,
            finish: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day + month6.count_day + month7.count_day + month8.count_day + month9.count_day
        },
        choice10 = {
            begin: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day + month6.count_day + month7.count_day + month8.count_day + month9.count_day,
            finish: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day + month6.count_day + month7.count_day + month8.count_day + month9.count_day + month10.count_day
        },
        choice11 = {
            begin: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day + month6.count_day + month7.count_day + month8.count_day + month9.count_day + month10.count_day,
            finish: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day + month6.count_day + month7.count_day + month8.count_day + month9.count_day + month10.count_day + month11.count_day
        },
        choice12 = {
            begin: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day + month6.count_day + month7.count_day + month8.count_day + month9.count_day + month10.count_day + month11.count_day,
            finish: month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day + month6.count_day + month7.count_day + month8.count_day + month9.count_day + month10.count_day + month11.count_day + month12.count_day
        };

    total_days_year = month1.count_day + month2.count_day + month3.count_day + month4.count_day + month5.count_day
        + month6.count_day + month7.count_day + month8.count_day + month9.count_day + month10.count_day
        + month11.count_day + month12.count_day;

     day = prompt('Введите день года в диапазоне от 1 до ' + total_days_year + ':');
     day = Number(day);

    switch (true) {
        case day >= (choice1.begin) && (day <= choice1.finish):
             seasons = 'Зима';
             alert('Месяц - ' + month1.name + '\nПора года - ' + seasons);
             break;
        case day > (choice2.begin) && (day <= choice2.finish):
             seasons = 'Зима';
             alert('Месяц - ' + month2.name + '\nПора года - ' + seasons);
             break;
        case day > (choice3.begin) && (day <= choice3.finish):
             seasons = 'Весна';
             alert('Месяц - ' + month3.name + '\nПора года - ' + seasons);
             break;
        case day > (choice4.begin) && (day <= choice4.finish):
             seasons = 'Весна';
             alert('Месяц - ' + month4.name + '\nПора года - ' + seasons);
             break;
        case day > (choice5.begin) && (day <= choice5.finish):
             seasons = 'Весна';
             alert('Месяц - ' + month5.name + '\nПора года - ' + seasons);
             break;
        case day > (choice6.begin) && (day <= choice6.finish):
             seasons = 'Лето';
             alert('Месяц - ' + month6.name + '\nПора года - ' + seasons);
             break;
        case day > (choice7.begin) && (day <= choice7.finish):
             seasons = 'Лето';
             alert('Месяц - ' + month7.name + '\nПора года - ' + seasons);
             break;
        case day > (choice8.begin) && (day <= choice8.finish):
             seasons = 'Лето';
             alert('Месяц - ' + month8.name + '\nПора года - ' + seasons);
             break;
        case day > (choice9.begin) && (day <= choice9.finish):
             seasons = 'Осень';
             alert('Месяц - ' + month9.name + '\nПора года - ' + seasons);
             break;
        case day > (choice10.begin) && (day <= choice10.finish):
             seasons = 'Осень';
             alert('Месяц - ' + month10.name + '\nПора года - ' + seasons);
             break;
        case day > (choice11.begin) && (day <= choice11.finish):
             seasons = 'Осень';
             alert('Месяц - ' + month11.name + '\nПора года - ' + seasons);
             break;
        case day > (choice12.begin) && (day <= choice12.finish):
             seasons = 'Зима';
             alert('Месяц - ' + month12.name + '\nПора года - ' + seasons);
             break;
        default:
             alert('Число вне допустимого диапазона!');
             break;
     }
}



