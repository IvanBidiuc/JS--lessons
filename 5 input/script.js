document.querySelector('button').onclick=myclick;

function myclick(){
//    console.log('work');
//    get input
//    input-value
    var a=document.querySelector('.i-1').value;
    console.log(a);
    document.querySelector('.out').innerHTML = a;
}