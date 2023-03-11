console.log(descendingOrder(895789));

function descendingOrder(num)
{
    let digits = String(num).split("");

    digits.sort(function(a,b) {
       return b - a; 
    });
    //
    let result = Number(digits.join(""));
    return result;
}