const hello="Hello Everybody"
const bye="Goodbye"
var sayHello = function(name)
{
    if (name)
    {
        console.log("Hello" +name)
    }
    else{
        console.log("hello!!!")
    }
}
export {hello,bye,sayHello}
export default {sayHello}