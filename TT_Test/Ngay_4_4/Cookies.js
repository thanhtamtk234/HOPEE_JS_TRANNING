
        function WriteCookie(){
             if (document.myform.customer.value == ""){
                alert(" Enter some value ");
                return;
            }
            cookievalue = escape(documet.myformcustomer.value)+";";
            document.cookie="name= "+cookievalue;
            document.write("Setting Cookie:"+"name="+cookievalue);
            
        }
//readcookie
<html>
    <head>
        <script type="text/javascript">
        function readcookie(){
            var allcookie = document.cookie;
            document.write("All cookie:"+allcookie);
        }
        cookiearray=allcookie.split(";");
        for(var i=0;i<cookiearray.length; i++)
        {
            name= cookiearray[i].split('=')[0];
            value = cookiearray[i].split('=')[1];
            document.write("key is:"+name "and value is:"+value); }
        </script>
        <body>
            <form name="myform" action="">
            <p>click  the following button and see the result:</p>
            <input type="button" value="set cookie" onclick="readcookie()"/>
            </form>
        </body>

    </head>
</html>
//setting cookie Expiry date
<html>
<head>
    <script type="text/javascript">
    function writeCookie()
    {
        var now = new date();
        now.setMonth(now.getMont()+1);
        cookievalue=escape(document.myform.customer.value)+";"
        document.cookie="name"+cookievalue;
        documet.cookie ="expires"+ now.toUTCString()+";"
        document.write("Setting cookies:"+"name="+cookievalue)
    }
    </script>
</head>
<body>
    <form  name="myform" action="">
    Enter cookie name:<input type="text" name="customer"/>
    <input type="button" value="set cookie" onclick="writeCookie()"/>
    </form>
</body>
</html>
//deleting cookie
<html>
    <head>
        <script type="text/javascript">
        function writeCookie()
        {
            var now= new date();
            now.setMonth(now.getMont()-1);
            cookievalue= escape(document.myform.customer.value)+";"
            document.cookie="name="+cookievalue;
            document.cookie="expires="+now.toUTCString()+";"
            document.write("Set cookie:"+"name="+cookievalue);
        }
        </script>
    </head>
    <body>
        <form name="myname" action="">
        Enter Cookie name: <input type="text" name="customer"/>
        <input type="button" value="set cookie" onclick="writeCookie()"/>
        </form>
    </body>
</html>