// 1. Grab all the HTML elements
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModalBtn");

const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const modalLink = document.getElementById("modalLink");

// 2. Event listener to FETCH JSON and OPEN the modal
document.querySelectorAll(".open-modal-btn").forEach((button) => {
	button.addEventListener("click", async (e) => {
		const cardId = e.target.getAttribute("data-id");

		try {
			const response = await fetch("../tutorial.json");
			if (!response.ok) throw new Error("Failed to fetch data");

			const data = await response.json();
			const targetData = data[cardId];

			if (targetData) {
				modalIcon.textContent = targetData.icon;
				modalTitle.textContent = targetData.title;
				modalDescription.textContent = targetData.description;
				modalTech.textContent = targetData.tech;
				modalLink.href = targetData.projectUrl;

				modal.showModal(); // Opens the modal
			}
		} catch (error) {
			console.error("Error loading JSON data:", error);
		}
	});
});

// 3. Event listener to CLOSE the modal via the "Close" button
closeModalBtn.addEventListener("click", () => {
	modal.close();
});

// 4. ADD IT HERE: Event listener to CLOSE the modal when clicking outside (the backdrop)
modal.addEventListener("click", (e) => {
	const dialogDimensions = modal.getBoundingClientRect();
	if (
		e.clientX < dialogDimensions.left ||
		e.clientX > dialogDimensions.right ||
		e.clientY < dialogDimensions.top ||
		e.clientY > dialogDimensions.bottom
	) {
		modal.close();
	}
});
