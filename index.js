function clock(){
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let meridian = document.getElementById("am-pm");
    
    let time = new Date();
    let a = time.getHours();
    let b = time.getMinutes();
    let c = time.getSeconds();

    if(a>12){
        a = a-12;
        meridian.innerHTML = "PM";
    }

    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;

}
setInterval(clock,1000);

function setTime(){
    let wakeUpTime = document.getElementById("wake-up-select-time").value;
    let lunchTime = document.getElementById("lunch-select-time").value;
    let eveningTea = document.getElementById("evening-tea").value;
    let napTime = document.getElementById("nap-time").value;
    let dinnerTime = document.getElementById("dinner-select-time").value;
    let currentTime = new Date().getHours();

    if(wakeUpTime == currentTime){
        document.getElementById('greeting-image').style.backgroundImage = "url(./Assets/morning.png)";
        document.getElementById('greeting-text').innerHTML = "Grab Some Healthy Breakfast.";
        }else if(lunchTime == currentTime){
        document.getElementById('greeting-image').style.backgroundImage = "url(./Assets/lunch.png)";
        document.getElementById('greeting-text').innerHTML = "Let's Have Some Lunch.";
    }else if(eveningTea == currentTime){
        document.getElementById('greeting-image').style.backgroundImage = "url(./Assets/lunch_image.png)";
        document.getElementById('greeting-text').innerHTML = "Good Evening! Have Some Tea.";
    }
    else if(napTime == currentTime){
        document.getElementById('greeting-image').style.backgroundImage = "url(./Assets/nap-image.png)";
        document.getElementById('greeting-text').innerHTML = "Relax and Take a Small Nap";
    }
    else if(dinnerTime == currentTime){
        document.getElementById('greeting-image').style.backgroundImage = "url(./Assets/dinner-image.png)";
        document.getElementById('greeting-text').innerHTML = "Have a Awesome Dinner with Family";
    }
};
