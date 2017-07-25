module.exports = {
    createTravelers: function(req, res, next){
        const db = req.app.get('db')
        const email = req.body.email
        const password = req.body.password

        db.createTravelers([email, password]).then(results => {
            res.status(200).json(results)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }


    
}