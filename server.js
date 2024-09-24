const express = require('express')
const app = express()

//for at bruge view engine ejs. Husk at filerne der skal vises skal have fil extension .ejs og ikke .html
app.set('view engine', 'ejs')

app.use(express.static("public"))

/*
Hvis der ikke er en route, vil vi få fejlen "Cannot GET /" som basically siger den ikke kan finde en url
Vi laver en GET request for URLen med "/"
.get funktionen tager to parametre: path og en funktion (som tager 3 parametre: request, response og next)
req og res kan kaldes hvad som helst, men req og res er standard navngivning
*/
// app.get('/', (req, res) => {
//     console.log("konsol log :)")
//
//     //Send noget information til brugeren
//     //.send overskriver .render
//     //res.send("Body tekst!")
//     res.render('index')
// })

const userRouter = require('./routes/users')

//Hvor alle routes der starter med users, får userRouter
app.use('/users', userRouter)

//I tilfælde af der ikke skal køres en callback funktion når serveren starter.
app.listen(3000)

//I tilfælde af der SKAL køres en callback funktion når serveren starter.
/*
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
*/
