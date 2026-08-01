form.addEventListener("submit", async (event) => {
	const register = {
		email: email.value,
		password: password.value,
	};
	fetch("/api/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(register),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.status == "error") {
				success.style.display = "none";
				error.style.display = "block";
				error.innerText = data.error;
			} else {
				error.style.display = "none";
				success.style.display = "block";
				success.innerText = data.success;
			}
		});
});
