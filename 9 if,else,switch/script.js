//var a = 9;
//
//if ( a == 9 ){
//    console.log('True');
//}
//else {
//    console.log('False')
//}

const button = document.querySelector('button');
const input = document.querySelector('.age');


button.onclick = () => {
    let num = + input.value;
    if (num >= 18 && num < 60){
        console.log('Welcome!!!');
    }
    else if (num > 60){
        console.log('Realy?')
    }
    else {
        console.log('Go away!')
    }

switch (num){
    case 17:
        console.log('Another year');
        break;
    case 18:
        console.log('Uraaaaaa');
        break;
}
      }