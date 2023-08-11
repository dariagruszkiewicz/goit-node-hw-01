const fs = require("fs");
const path = require("path");
const { v1: uuidv1 } = require("uuid");

const contactsPath = path.join(__dirname, "/db/contacts.json");
console.log(contactsPath);

function listContacts() {
	fs.readFile(contactsPath, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			const parsedData = JSON.parse(data);
			console.table(parsedData);
		}
	});
}

function getContactById(contactId) {
	fs.readFile(contactsPath, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			const parsedData = JSON.parse(data);
			const contactById = parsedData.find(
				(item) => item.id === contactId
			);
			console.log(contactById);
		}
	});
}

function removeContact(contactId) {
	fs.readFile(contactsPath, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			const parsedData = JSON.parse(data);
			const contactToDelete = parsedData.filter(
				(item) => item.id !== contactId
			);
			console.table(contactToDelete);
		}
	});
}

function addContact(name, email, phone) {
	fs.readFile(contactsPath, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			const parsedData = JSON.parse(data);
			const newContact = {
				id: uuidv1(),
				name,
				email,
				phone,
			};
			parsedData.push(newContact);
			console.table(parsedData);
		}
	});
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};
