/* DOM = Document Object Model
The DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
In this example, we have a simple HTML page with a welcome message. We want to personalize the message by adding the user's name. If the username is empty, we will display "Guest" instead.
We will use JavaScript to achieve this by selecting the welcome message element and updating its text content based on the value of the username variable.
Here is the JavaScript code to accomplish this:*/

const previous = document.getElementById("previous");
const current = document.getElementById("current");
const sidebar = document.getElementById("sidebar");

//calculator
let expression = "";

document.querySelectorAll("button").forEach((btn) => {
	btn.onclick = () => {
		const value = btn.innerText;
		if (value === "AC") {
			expression = "";
			current.innerText = "0";
			previous.innerText = "";
		} else if (value === "DEL") {
			expression = expression.slice(0, -1);
			current.innerText = expression || "0";
		} else if (value === "=") {
			try {
				previous.innerText = expression;
				expression = eval(expression).toString();
				current.innerText = expression;
			} catch {
				current.innerText = "Error";
				expression = "";
			}
		} else {
			expression += value;
			current.innerText = expression;
		}
	};
});

//sidebar connection
function toggleSidebar() {
	sidebar.classList.toggle("show");
}
