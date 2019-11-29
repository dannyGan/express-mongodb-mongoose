const mongoose = require("mongoose");
const User = require("../../models/user");

module.exports = {
	addUser: (req, res) => {
		User.create(req.body).then(result =>
			res
				.send({
					message: "user created",
					result
				})
				.catch(error =>
					res.send({
						message: "user failed to add",
						error: error.stack
					})
				)
		);
	},
	deleteUser: (req, res) => {
		User.findOneAndDelete({ _id: req.params.id }, { rawResult: true })
			.then(result =>
				res.send({
					message: "user deleted",
					result
				})
			)
			.catch(error => res.send({ message: "detele user failed", error: error.stack }));
	},
	updateUser: (req, res) => {
		User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
			.then(result => res.send({ message: "user updated", result }))
			.catch(error => res.send({ message: "failed to update user", error: error.stack }));
	},

	getUser: (req, res) => {
		User.find()
			.then(result =>
				res.send({
					message: "all user",
					result
				})
			)
			.catch(error =>
				res.send({
					message: "error when get all user",
					error: error.stack
				})
			);
	},
	getUserById: (req, res) => {
		User.findById({ _id: req.params.id })
			.then(result =>
				res.send({
					message: "your user with ID",
					result
				})
			)
			.catch(error =>
				res.send({
					message: "error when trying to get user ID",
					error: error.stack
				})
			);
	}
};
