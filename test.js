 var script = document.createElement('script');
        script.src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
        script.type='text/javascript';
        document.getElementsByTagName('head')[0].appendChild(script);

var timer = setInterval(() => {
            if (typeof $ != "undefined") {
                clearInterval(timer);
                                         
$(document).ready(function(){  
    $("p").click(function(){  
        alert("This paragraph was clicked.");  
    });  
});  
            }
        }, 100);
                         

