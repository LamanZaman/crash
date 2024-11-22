document.addEventListener("DOMContentLoaded", () => {
  const car = document.querySelector(".car");
  const person = document.querySelector(".person");
  const ambulance = document.querySelector(".ambulance");
  const carHitSound = document.getElementById("car-hit-sound");
  const ambulanceSound = document.getElementById("ambulance-sound");

  car.addEventListener("animationend", () => {
    car.style.display = "none"; 
    person.style.animation = "fallPerson 1s forwards"; 
    carHitSound.play(); 


    setTimeout(() => {
      ambulance.style.display = "block";
      ambulance.style.animation = "ambulanceArrive 5s linear forwards";
      ambulanceSound.play();

      setTimeout(() => {
        person.style.display = "none"; 
      }, 2900); 
    }, 1000);
  });
});
