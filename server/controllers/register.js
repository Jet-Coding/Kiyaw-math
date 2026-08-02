const db = require("../routes/db-config");
const bcrypt = require("bcrypt.js");

const register = async (req, res) => {
	const { name, email, password, passwordConfirm } = req.body;
};
