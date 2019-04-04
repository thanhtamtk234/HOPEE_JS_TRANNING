function writeCookie()
{
    var now= new date();
    now.setMonth(now.getMont()-1);
    cookievalue= escape(document.myform.customer.value)+";"
    document.cookie="name="+cookievalue;
    document.cookie="expires="+now.toUTCString()+";"
    document.write("Set cookie:"+"name="+cookievalue);
}