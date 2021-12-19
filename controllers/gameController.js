let users = require('../data/users.json');

module.exports = {
    index: (req, res) => {
        res.render('index', {
            title: 'Landing Page'
        })
    },

    loginPage: (req, res) => {
        res.status(200).json(users);
    },

    loginProcess: (req, res) => {
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
    },

    suitGame: (req, res) => {
        res.render('suit-game', {
            title: 'Suit'
        })
    }
}