const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");
console.log(contactsPath);

// TODO: udokumentuj każdą funkcję
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
	// fs.appendFile(contactsPath, (err, data) => {
	// 	if (err) { console.log(err) } else {
	// 		const parsedData = JSON.parse(data);
	// 	}
	// })
	// ...twój kod
}
