
        
        
        
        NBG=1;
            
        function myFunction() {	
            
            if (NBG==1){
                document.body.style.backgroundImage = "url('images/white back ground image of tiny screws.jpg')";
                NBG+=1;
            }
            else if (NBG==2){
             
             document.body.style.backgroundImage = "url('images/white back ground image of wind.jpg')";
             NBG+=1;
            }
            else if (NBG==3){
             
             document.body.style.backgroundImage = null;
             NBG+=1;
            }
            else if (NBG==4){
             
             document.body.style.backgroundImage = null;
             NBG=1;
            }
            }
            /*
            switch(new myFunction())
            {
                case 1:
                document.body.style.backgroundImage = "url('images/white back ground image of tiny screws.jpg')";
                NBG+=1;
                break;

                case 2:
                document.body.style.backgroundImage = "url('images/white back ground image of wind.jpg')";
                NBG+=1;
                break;
            }
            
            
            */
            

//possible additions
            /* timer mabey?
             
        function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('txt').innerHTML =
            h + ":" + m + ":" + s;
            var t = setTimeout(startTime, 1000);
        }
        function checkTime(i) {
            if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
            return i;
        }*/
        
        
