const express = require('express')
const router = express.Router()

router.use(logger)
/* FØR
app.get('/users', (req, res) => {
    res.send('user list')
})

app.get('/users/new', (req, res) => {
    res.send('user new form')
})
*/

//EFTER
//router har replaced app
//begge routes starter med users, så det kan rykkes ud i server. Hvor alle routes der starter med users, får userRouter
router.get('/', (req, res) => {
    res.send('user list')
})

router.get('/new', (req, res) => {
    res.send('user new form')
    res.render("users/new")
})


//De 3 nedenstående kan gøres korterer.
/*router.get('/:id', (req, res) => {
    let userId = req.params.id
    res.send(`get ${userId}`)
})

router.put('/:id', (req, res) => {
    let userId = req.params.id
    res.send(`updater ${userId}`)
})

router.delete('/:id', (req, res) => {
    let userId = req.params.id
    res.send(`slet ${userId}`)
})*/

//en anden metode at gøre ovenstående på. hvor de forskellige http metoder kan chains sammen.
router
    .route('/:id')
    .get((req, res) => {
    let userId = req.params.id
    res.send(`get ${userId}`)
})
    .put((req, res) => {
    let userId = req.params.id
    res.send(`updater ${userId}`)
})
    .delete((req, res) => {
    let userId = req.params.id
    res.send(`slet ${userId}`)
})

const users = [{name: "isa"}, {name:"bella"}]

//param er basically middleware. middleware er ting der kører router tingene bliver vist til brugeren.
//middleware kører mellem starten af et request og slutningen af et request
//der SKAL stå next() på middleware
router.param("id", (req,res,next,id) => {
    console.log(id)
    req.user = users[id]
    next()
})

function logger(req,res,next) {
    console.log(req.originalUrl)
    next()
}

//exporter router
module.exports = router
