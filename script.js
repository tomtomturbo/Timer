
//clock

interval1 = setInterval(
    function getCurrentTime(){
       
        //erstelle ein neues Datumobjekt (currentDate) und weise eine Variable (new Date()) zu
    
        let currentDate = new Date();
        //hole aus currentDate die Stunden heraus und zeige diese an
  
        //selektiere mit JavaScript das gewünschte HTML-Element
        /*um die Uhrzeit korrekt anzuzeigen (h:m), muss ein String angezeigt werden; es reicht aus, einen String zwischen die beiden Zahlen (numbers) 
        einzuschieben (":"), dass alles als String betrachtet wird*/
        
        document.getElementById("clock").innerHTML = 
            currentDate.getHours().toString().padStart(2,"0")+ // 0 muss ein String sein daher in ""
            ":"+
            currentDate.getMinutes().toString().padStart(2,"0")+ 
            ":"+
            currentDate.getSeconds().toString().padStart(2,"0")

        //setInterval benutzen, um Funktion getCurrentTime() jede Sekunde aufzurufen; danach Funktion getCurrentTime in setInterval hineinpacken
    }
    ,1000
)



//variablen werden definiert und initalisiert

// alarm preset

let dateTarget = Math.floor((new Date("2022-03-05T21:00:00")-new Date())/1000);
console.log(dateTarget);

interval2 = setInterval(
    function timerInterval(){
        let currentDate = new Date();
        timerHours = Math.floor((dateTarget/3600)) ;
        timerMinutes = Math.floor((dateTarget/60)) % 60;
        timerSeconds = dateTarget % 60;
     
            document.getElementById("timer").innerHTML = 
            currentDate.getHours().toString().padStart(2,"0")+ 
            ":"+
            currentDate.getMinutes().toString().padStart(2,"0")+ 
            ":"+
            currentDate.getSeconds().toString().padStart(2,"0")
        
            //console.log(timerSeconds)

            document.querySelector("#timer").innerText = `${timerHours}:${timerMinutes}:${timerSeconds}`;

            dateTarget--;

            if (dateTarget<=0){
                clearInterval(interval2)
                document.querySelector("#timer").innerText = "Hurra Countdown fertig";
            }

        },1000);

// select the button in your HTML
document.querySelector(".date-button").addEventListener("click", function(){
    let selectedDate = new Date(document.querySelector(".date-input").value);
    dateTarget = Math.floor((selectedDate-new Date())/1000);
});


