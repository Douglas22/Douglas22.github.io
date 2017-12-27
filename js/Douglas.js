
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
        }
        
        
        
        age=20;
            
        function myFunction() {	
            
            if (age==20){
                document.body.style.backgroundImage = "url('images/white back ground image of tiny screws.jpg')";
                age=21
            }
            else if (age==21){
             
             document.body.style.backgroundImage = "url('images/white back ground image of wind.jpg')";
             age=22;
            }
            else if (age==22){
             
             document.body.style.backgroundImage = null;
             age=20;
            }
            }
        
        
