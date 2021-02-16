const express = require('express'),
axios = require('axios'),
router = express.Router(),
PaisSchema = require('../models/paisSchema.js');

router.post('/todo', async function(req, res) {
	try {
		const pais = new PaisSchema({ ...req.body });
		await pais.save();
		res.send(pais);
	}
	catch (error) {
		res.status(400).send({ error: error.message });
	}
});

router.get('/todos', async function(req, res) {
	try {
		const pais = await PaisSchema.find({});
		res.send(pais);
	}
	catch (error) {
		res.status(400).send({ error: error.message });
	}
});

router.get('/todo/:id', async function(req, res) {
		try {
			const pais = await PaisSchema.findOne({ _id: req.params.id });
			res.send(pais);
		}
		catch (error) {
			res.status(400).send({ error: error.message });
		}
	}
);

router.delete('/todo/:id', async function(req, res) {
		try {
			const pais = await PaisSchema.findByIdAndRemove({ _id: req.params.id });
			res.send(pais);
		}
		catch (error) {
			res.status(400).send({ error: error.message });
		}
	}
);

module.exports = router;