const express = require('express');
const router = express.Router();

// GET /Lista dei post
router.get('/', (req, res) => {
    res.send('Lista dei post');
});

// GET /posts/:id → Mostra un post specifico
router.get('/:id', (req, res) => {
    res.send(`Dettaglio del post ${id}`);
});

// POST /posts → Crea un nuovo post
router.post('/', (req, res) => {
    res.send('Creazione di un nuovo post');
});

// PUT /posts/:id → Modifica un post esistente
router.put('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Modifica del post ${id}`);
});

// DELETE /posts/:id → Cancella un post
router.delete('/:id', (req, res) => {
    res.send(`Cancellazione del post ${id}`);
});

module.exports = router;
