// Agrega funcionalidad a la navegación
document.addEventListener("DOMContentLoaded", function() {
	const nav = document.querySelector("nav");
	const sections = document.querySelectorAll("section");
	nav.addEventListener("click", function(event) {
		event.preventDefault();
		const target = event.target;
		if (target.tagName === "A") {
			const sectionId = target.getAttribute("href").replace("#", "");
			const section = document.getElementById(sectionId);
			section.scrollIntoView({ behavior: "smooth" });
		}
	});
});

