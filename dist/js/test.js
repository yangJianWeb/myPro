/**
 * Created by cyril on 2017/10/22.
 */
// (function(){
//     alert(123);
//     function testClick(){
//         console.log(123213);
//     }
//     //$('#test').click(testClick)
// })();


$('#test').click(test);

function test222() {
    var a = 213;
    return a + 20;
}

function test(){
    alert($(this).html());
}

function foo(num1, num2){
    var sum = num1 + num2;
    return sum;
}