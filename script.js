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
    
    document.getElementById('scroll-to-top').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });


      