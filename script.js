const changeBtn = document.querySelector(".changer");
const adviceID = document.querySelector(".adv-id");
const advice = document.querySelector(".advice-text");

changeBtn.addEventListener('click', function adviceHandler () {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then((json) => {
        adviceID.innerText = `Advice #${json.slip.id}`;
        advice.innerText = `"${json.slip.advice}"`;
        console.log(json.slip)
    })
});

