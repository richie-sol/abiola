const time = new Date().getHours()

const greeting = document.getElementById("time");

    if (time < 12) {
        greeting.textContent = "morning 🌅";
        greeting.style.color = "darkorange";
    } else if (time >= 12 && time < 16) {
        greeting.textContent = "afternoon 🌞";
        greeting.style.color = "orangered";
    } else {
        greeting.textContent = "evening 🌑";
        greeting.style.color = "darkblue"
    }
    