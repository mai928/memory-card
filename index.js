var cards = document.querySelectorAll(".card");
var imgs = document.querySelectorAll(".imge");
var covers = document.querySelectorAll(".cover");
var container = document.querySelector(".container");
var hintImags = document.querySelectorAll(".hintImg");
var numOfCards = cards.length;

// new Random Game
function randomCard() {
	cards.forEach((ele) => {
		var random = Math.ceil(Math.random() * numOfCards);
		var arr = [...Array(numOfCards).keys()];
		ele.style.order = arr[random];
	});

}



//Hint For 3 times
var count = 0;
document.getElementById("hint").addEventListener("click", function (eve) {
	if (count == 3) {
		eve.preventDefault();
	} else {
		count++;
		imgs.forEach((ele) => {
			ele.classList.add("hint");

			setTimeout(function () {
				ele.classList.remove("hint");
			}, 1000);
		});

		for (var i = 0; i < count; i++) {
			hintImags[i].style.display = "none";
		}
	}
});

function Click() {
	for (let i = 0; i < cards.length; i++) {
		cards[i].addEventListener("click", function () {
			imgs[i].classList.add("flip");
			var flippedItem = document.querySelectorAll(".flip");
			if (flippedItem.length == 2) {
				container.style.pointerEvents = "none";
				setInterval(function () {
					container.style.pointerEvents = "all";
				}, 1000);

				matches(flippedItem[0], flippedItem[1]);
			}
		});
	}
}

Click();

function matches(Fcard, Scard) {
	if (Fcard.dataset.index == Scard.dataset.index) {
		Fcard.classList.remove('flip')
        Scard.classList.remove('flip')


        Fcard.classList.add('match')
        Scard.classList.add('match')


    }else{

        setTimeout(() => {
            
            Fcard.classList.remove('flip')
            Scard.classList.remove('flip')


     }, 1000);

    }
}
