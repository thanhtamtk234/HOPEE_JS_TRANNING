class shape
{
    constructor(a)
    {
        this.Area=a;
    }
    test()
    {
        console.log("aaaaa")
    }
    test1()
    {console.log("123")}
}
class circle extends shape{
    disp()
    {
        console.log("Area of the circle:"+this.Area)
    }
    test()
    {
        console.log("bbbbb")
    }
    test1()
    {
        super.test1();
        console.log("456")
    }

}
var obj = new circle(234)
obj.disp();
obj.test();
obj.test1();