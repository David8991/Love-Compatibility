const herName = document.getElementById("herName");
const hisName = document.getElementById("hisName");
const send = document.getElementById("send");
const heart = document.getElementById("heart");
const modal = document.getElementById("modal");
const bgModal = document.getElementById("bgModal");
const closeModal = document.querySelector("#modal button");

send.onmouseover = () => {
    heart.classList.remove("hidden");
};

send.onmouseout = () => {
    heart.classList.add("hidden");
};

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3381eb6aa1msh9c4e9279f75378cp1a7f87jsn4120436fe2ea',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

send.addEventListener("click", () => {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${herName.value}&fname=${hisName.value}`, options)
	.then(response => response.json())
	.then(data => {
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let image = document.createElement("img")

        h2.innerText = `${data.percentage}%`;
        h2.style.fontSize = "30px";
        p.innerText = data.result;
        image.setAttribute("alt", "heart");

        if (+data.percentage < 50) {
            image.setAttribute("src", "images/noLove.webp");
        } else {
            image.setAttribute("src", "images/love.jpg");
        }

        modal.prepend(p);
        modal.prepend(h2);
        modal.prepend(image);
        bgModal.classList.remove("hidden");
        modal.classList.remove("hidden");
    }); 
})

function close() {
    bgModal.classList.add("hidden");
    modal.classList.add("hidden");
    modal.children[0].remove();
    modal.children[0].remove();
    modal.children[0].remove();
}

closeModal.addEventListener("click", () => {
    close();
})

document.onkeydown = function(e) {
    if (e.code === "Escape" && modal.classList.value === "") {
        close();
    }
}

window.onclick = function (event) {
    if (event.target == bgModal && modal.classList.value === "") {
        close();
    }
}