
        
var AwesomeBGI = [null ,"url('images/fire.jpg')" 
, null , "url('images/jellyfish.jpg')" , null ] ;

var AwesomeBGC = ["#333333" , null , "#228822" , null , "darkblue" , null] ;
NBG = 0 ;
function myFunction() 
{   
    document.body.style.backgroundColor = AwesomeBGC[NBG];
    document.body.style.backgroundImage = AwesomeBGI[NBG];
    //p.style.color='red';
                     
    NBG++ ;	
    if (NBG >= 6){
        NBG = 0;
    }
    
}
            /* previose iterations keeped
            NBG++ ;	
            switch(NBG)
            { 
                case  1:
                document.body.style.backgroundImage = "url('images/white back ground image of tiny screws.jpg')";
                break;

                case  2:
                document.body.style.backgroundImage = null;
                document.body.style.backgroundColor = "darkblue";
                break;
                case 3:
                document.body.style.backgroundImage = null;
                document.body.style.backgroundColor = "#111111";
                NBG=0;
                //used for debuging alert(AwesomeBGI[NBG]);
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
        
        
