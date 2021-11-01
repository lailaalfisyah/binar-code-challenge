const express = require('express');
const router = express.Router();
let users = require('./data/users.json');

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Landing Page'
    })
})

router.get('/login', (req, res) => {
    res.status(200).json(users);
})

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const name = users[0].name;
    const matchUser = users.find(data => data.username === username);
    const matchPass = users.find(data => data.password === password);

    if (!matchUser && !matchPass) {
        res.send('Hmm ... username dan password kamu salah nih')
    } else if (matchUser) {
        if (matchPass) {
            console.log(`Hai, ${name}! Kamu telah berhasil login.`)
            res.redirect('/suit-game')
        } else {
            res.send(`Ups! Salah password, silakan coba lagi ya.`);
            
        }
    } else {
        res.send('Ups! Username yang kamu masukkan salah.');
    }  
})

router.get('/suit-game', (req, res) => {
    res.render('suit-game', {
        title: 'Suit'
    })
})

module.exports = router;