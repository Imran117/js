// console.log(1);
// console.log('hello world!');
// console.log(true);

// var nikName = 'Imron';
// console.log(nikName);

// var age = 132;
// console.log(age);


// var boolean = true;
// console.log(boolean);

// var und;
// console.log(und);

// console.log('mening ismim ' + nikName +' mening yoshim ' + age + ' da');
// var allInfo = 'mening ismim ' + nikName +' mening yoshim ' + age + ' da';

// console.log(allInfo);

// console.log(6 + 3);
// console.log(6 - 3);
// console.log(6 * 3);
// console.log(6 / 3);
// console.log(6 % 4);


// console.log(true + true);

// var nick = prompt('ismingizni kiriting')

// console.log(nick);

// alert('salom '+ nick);

// var num = +prompt('yoshingizni kiriting')
// console.log(num);

// console.log(1 == 1);
// console.log(1 === '1');

// console.log(1 < 1);
// console.log(1 < 2);
// console.log(1 > 2);
// console.log(5 > 2);
// console.log(5 > 2);

// console.log(5 >= 5);
// console.log(5 >= 6);
// console.log(5 <= 6);
// console.log(5 <= 5);

// console.log(1 != 1);
// console.log(1 != 2);
// console.log(!true);

// if (1 == 1) {
//     console.log('if');
// }else{
//     console.log('else');
// }


// var a = prompt('salom so`zini kiriting!');

// if (a == 'salom') {
//     alert('hush kelibsiz')   
// }else{
//    alert('Noto`g`ri') 
// }

// var b = prompt('5 sonini kriting!!!')
// if (b == 5) {
//     console.log('to`g`ri');
// }else if (b < 5) {
//     console.log('5dan kichik');
// }else if (b > 5) {
//     console.log('5dan katta');
// }else{
//     console.log('bu son emas');
// }

// console.log(isNaN("sefsef"));

var number1 = +prompt('brinchi sonni kiriting')
var number2 = +prompt('ikkinchi sonni kiriting')

if (number1 == number2 && !isNaN(number1) && !isNaN(number2)) {
    console.log('sonlar teng');
} else if (number1 < number2 && !isNaN(number1) && !isNaN(number2)) {
    console.log('birinchi son kichkina' );
} else if (number1 > number2  && !isNaN(number1) && !isNaN(number2)) {
    console.log('ikkinchi son kichkina');
} else {
    if (isNaN(number1) && isNaN(number2)) {
        console.log('Sonlar noto`g`ri');
    } else if (isNaN(number1)) {
        console.log('Brinchi son noto`g`ri');
    } else if (isNaN(number)) {
        console.log('ikkinchi son notog`ri');
    }
}