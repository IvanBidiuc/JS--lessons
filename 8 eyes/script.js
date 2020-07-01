

////const a=10
////const b=5
//
////console.log( a + b)
////console.log(a - b)
////console.log(a * b)
////console.log(a / b)
//
//
//
//
//console.log(4/6);
////var x;
////var y;
////y = 4;
////x = 5 + y;
////x='Hello';
////x=9;
////x=x+1;
////x +=100;
////var x=9;
//
//
////console.log(x);
//
//
////const courseStatus = 'ready';
////if ( courseStatus === 'ready'){
////    console.log('Gata')
////} else if(courseStatus ==='pending'){
////    console.log('Este')
////}
//function calculateAge(year){
//    return 2020-year
//}
//console.log( calculateAge (year:1999))
//console.log( calculateAge (year:1989))
//console.log( calculateAge (year:1089))




document.onmousemove = function (event){
 let x = event.x - 50;
 let y = event.y - 50;
    console.log(x + ' ' + y);
    document.querySelector('.y-1').style.transform = 'rotate(' + 57.2958 * arcctg(x,y) + 'deg)';
     document.querySelector('.y-3').style.transform = 'rotate(' + 57.2958 * arcctg(x-116,y) + 'deg)';
        
    function arcctg(x, y) {
            
       if ( x > 0 &&  y > 0) return Math.PI / 2 - Math.atan(x / y);
       if ( x < 0 &&  y > 0) return Math.PI / 2 - Math.atan(x / y);
       if ( x < 0 &&  y < 0) return Math.PI + Math.atan(y / x);
       if ( x > 0 &&  y < 0) return 3*Math.PI / 2 + Math.abs(Math.atan(x / y));
    }
};
