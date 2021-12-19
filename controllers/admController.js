let admin = require('../data/admin.json');
const { UserGame, UserGameBiodata } = require('../models')

module.exports = {
    loginPage: (req, res) => {
        res.render('admin/form-login', {
            title: 'Login Admin'
        })
    },

    loginProcess: (req, res) => {
        const { username, password } = req.body;
        const matchUserAdmin = admin.find(data => data.username === username);
        const matchPassAdmin = admin.find(data => data.password === password);
    
        if (!matchUserAdmin && !matchPassAdmin) {
            res.redirect('/admin-login')
            console.log('username dan password salah')
            console.log(req.body)
        } else if (matchUserAdmin) {
            if (matchPassAdmin) {
                res.redirect('/admin-dashboard')
                console.log('berhasil')
            } else {
                res.redirect('/admin-login')
                console.log('password salah')    
            }
        } else {
            res.redirect('/admin-login')
            console.log('username salah');
        }  
    },

    mainDashboard: (req, res) => {
        UserGame.findAll().then(usergames => {
            res.render('admin/dashboard', {
                title: 'Dashboard Admin',
                usergames
            })
        })  
    },

    biodata: (req, res) => {
        UserGame.findOne({
            where: {id: req.params.id}
        })
    
        UserGameBiodata.findOne({
            where: {id: req.params.id-6}
        })
        .then(usergame => {
            res.redirect('/detail-data')
        }) 
    },

    createForm: (req, res) => {
        res.render('admin/tambah-data', {
            title: 'Tambah Data'
        })
    },

    createProcess: (req, res) => {
        UserGame.create({
            username: req.body.username
        })
    
        UserGameBiodata.create({
            // userID: req.params.userID,
            fullName: req.body.fullName,
            gender: req.body.gender
        })
        .then(usergame => {
            res.redirect('/admin-dashboard')
        })
    },

    updateForm: (req, res) => {
        res.render('admin/edit-data')
    },

    updateItem: (req, res) => {
        UserGame.findOne({
            where: {id: req.params.id}
        })
    
        UserGameBiodata.findOne({
            where: {id: req.params.id-6}
        })
        .then(usergame => {
            res.redirect('/edit-data', {
                title: 'Edit Data User'
            })
        })
    },

    updateProcess: (req, res) => {
        UserGame.update({
            username: req.body.username
        }, {
            where: {id: req.params.id}
        })
    
        UserGameBiodata.update({
            fullName: req.body.fullName,
            gender: req.body.gender
        }, {
            where: {id: req.params.id-6}
        })
        .then(usergame => {
            res.redirect('admin-dashboard')
        })
    },

    delete: (req, res) => {
        UserGame.destroy({
            where: {id: req.params.id}
        })
    
        UserGameBiodata.destroy({
            where: {id: req.params.id-6}
        })
        .then(usergame => {
            res.redirect('/admin-dashboard')
        })
    }
}