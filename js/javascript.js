const hamburgerMenu = document.getElementById("hamburger-icon");
const navigation = document.getElementById("navigation");

// Open mobile nav menu on hamburger button click
hamburgerMenu.addEventListener("click", () => {
	navigation.style.paddingBottom = "100%";
});

/* If clicking outside of the nav menu, and if the nav menu is already open,
close the mobile nav menu */
document.addEventListener("click", () => {
	if (navigation.clientHeight != "0") {
		navigation.style.paddingBottom = "0%";
	}
});

/* If window grows larger than 700px wide, hide mobile nav dropdown menu */
function setBottomPaddingToZero() { 
	if (window.innerWidth > 700) {
		navigation.style.paddingBottom = "0%"; 
	}
}

window.onresize = setBottomPaddingToZero;


// Smoothly scroll to each anchor point when the corresponding link is clicked
document.addEventListener("click", (event) => {
	const link = event.target.closest('a[href^="#"]');

	if (!link) {
		return;
	}

	event.preventDefault();

	const offset = 100;
	const targettedAnchor = document.querySelector(link.getAttribute('href'));
	const targetPosition = targettedAnchor.getBoundingClientRect().top + window.scrollY - offset;
		
	window.scrollTo({
		top: targetPosition,
		behavior: 'smooth'
	});
});
