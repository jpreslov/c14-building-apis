const express = require('express');
const chirpStore = require('../../chirpstore');
const router = express.Router();

router.get('/:id?', (req, res) => {
  const id = req.params.id;

  if (id) {
    res.send(chirpStore.GetChirp(id));
  } else {
    res.send(chirpStore.GetChirps());
  }
});

router.post('/', (req, res) => {
  res.send(chirpStore.CreateChirp(req.body));
});

//mandatory id param to tell the server which chirp to update
router.put('/:id', (req, res) => {
    const id = req.params.id
    const chirp = req.body

    res.send(chirpStore.UpdateChirp(id, chirp))
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    
    res.send(chirpStore.DeleteChirp(id))
})

module.exports = router;
