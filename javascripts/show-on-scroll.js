// Detect request animation frame
var scroll =
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	// IE Fallback, you can even fallback to onscroll
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};

//Target which elements will have reveal class added
let elementsToShow = document.querySelectorAll(".show-on-scroll");

//Loop through target elements
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

//Adapted from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
	var bounding = el.getBoundingClientRect();

	//Set how far the element 'peeks' into the viewport
	let offsetTop = 0; // Offset in pixels or bounding.height * 0.9 (fraction of elements height)
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
