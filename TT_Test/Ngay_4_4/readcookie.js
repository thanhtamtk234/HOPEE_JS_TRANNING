function readcookie(){
    var allcookie = document.cookie;
    document.write("All cookie:"+allcookie);
}
cookiearray= allcookie.split(';');
for(var i=0; i<cookiearray.length;i++)
{
    name=cookiearray[i].split('=')[0];
    value=cookiearray[i].split('=')[1];
    document.write("Key is:"+name+ "and value is:"+value);
}