const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dtb = require('mysql2')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


const connection = dtb.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: '3306',
    database: 'newtable',    // DB name
    password: '9212',
    table: 'zis'
})

connection.connect(function (err) {
    if (err) {
        return console.error('Ошибка' + err.message)
    } else {
        console.log('Подключение успешно установлено')
    }
})


connection.query('SELECT * FROM name', (err, rows) => {
    if (err) throw err;
    rows.forEach((row) => {
        dataDB.push({id: row.id, date: row.date, name: row.name, count: row.count, distance: row.distance})
    })
});

let dataDB = []

app.get('/table', (req, res) => {
    res.send(dataDB)
})

app.listen(3012, function () {
    console.log('Apinode')
})

