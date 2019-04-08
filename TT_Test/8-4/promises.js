function getSum(n1,n2)
{
    varisAnyNegative = function()
    {
        return n1<0||n2<0;
    }
    var promise = new Promise(function(resolve,reject)
    {
        if (varisAnyNegative())
        {
            reject(Error("loi"));
        }
        resolve(n1+n2);
    });
    return promise;
}

getSum(5,5)
.then(function(result){
    console.log(result);
    return getSum(10,20);
},
function (error)
{
    console.log(error);
})
.then(function (result)
{
    console.log(result);
},
function(error){
    console.log(error)
});