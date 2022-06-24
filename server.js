const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient=require('mongodb').MongoClient

require('dotenv').config()
const PORT=8000
let db,
dbConnectionString=process.env.DB_STRING
dbName = 'Star_Wars_Fun'
let collection

MongoClient.connect(dbConnectionString)
.then(client =>{
    console.log('Connected to Databae')
    db=client.db(dbName)
    collection=db.collection('quote')
})

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port = ${PORT}`)
})