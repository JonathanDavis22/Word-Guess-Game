    document.getElementById("button1").addEventListener("click", function(){

        document.getElementById("box").style.height = "250px";
        document.getElementById("box").style.width = "250px";

    });

    document.getElementById("button2").addEventListener("click", function(){

        document.getElementById("box").style = "height:150px; width:150px; background-color:blue; margin:25px";
    
    });

    document.getElementById("button3").addEventListener("click", function(){

        document.getElementById("box").style.opacity = ".50";

    });

    document.getElementById("button4").addEventListener("click", function(){

        document.getElementById("box").style = "height:150px; width:150px; background-color:orange; margin:25px";

    })