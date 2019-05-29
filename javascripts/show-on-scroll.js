// Detect request animation frame
var scroll =
	window.requestAnimationFrame ||
	// IE Fallback
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
	elementsToShow.forEach(function(element) {
		if (isElementInViewport(element)) {
			element.classList.add("is-visible");
		} else {
			element.classList.remove("is-visible");
		}
	});

	scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
	var bounding = el.getBoundingClientRect();
	let offsetTop = 50; // Offset in pixels or bounding.height * 0.9 (fraction of elements height)
	let offsetBottom = 50; // Offset in pixels or bounding.height * 0.9 (fraction of elements height)

	let offsetFirst = offsetTop - bounding.height;
	let offsetSecond = bounding.height - offsetBottom;
	return (
		bounding.top >= offsetFirst &&
		bounding.bottom <=
			(window.innerHeight + offsetSecond ||
				document.documentElement.clientHeight + offsetSecond)
	);
}

// Get the img heading
var img = document.querySelector("img");

// Get it's position in the viewport
var bounding = img.getBoundingClientRect();

// Log the results
console.log(bounding.height);
console.log(bounding.height - 50);
