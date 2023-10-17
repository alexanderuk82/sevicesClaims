// Accordion functionalities
document.addEventListener("DOMContentLoaded", function () {
	let accordionTitles = document.querySelectorAll(".accordion__title");

	accordionTitles.forEach(function (title) {
		title.addEventListener("click", function () {
			let parentItem = this.parentElement;

			// If the clicked element is already active, close it
			if (parentItem.classList.contains("active")) {
				parentItem.classList.remove("active");
				this.querySelector(".icon").setAttribute("src", "/img/Plus.svg");
			} else {
				// Close all other accordion items
				document.querySelectorAll(".item").forEach(function (item) {
					item.classList.remove("active");
					item.querySelector(".icon").setAttribute("src", "/img/Plus.svg");
				});

				// Open the clicked item
				parentItem.classList.add("active");
				this.querySelector(".icon").setAttribute("src", "/img/minus.svg");
			}
		});
	});
});
