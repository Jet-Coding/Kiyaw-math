const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
	const { email, password: Npassword } = req.body;
	if (!email || !Npassword)
		return res.json({
			status: "error",
			error: "Please enter your email and password",
		});
	else {
		db.query(
			"SELECT email FROM users WHERE email = ?",
			[email],
			async (err, result) => {},
		);
	}
};

module.exports = register;
