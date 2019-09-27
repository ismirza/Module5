//connection (CRUD format)

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true} , (error, client) => {
  if (error) {
    return console.log('Sorry not able to connect to the database')
  }
  //console.log('COnnected succesfully')
  const db = client.db(database)

/*
  db.collection('users').insertMany({
    name: 'Ray Rice',
    age: 32
  }, (error, result) => {
    if (error){
      return console.log('cant add user')
    }
      console.log(result.ops)
  })
})
*/

db.collection('users').insertMany([
   {
       name: 'Jakes',
       age: 28
  }, {
       name: 'Samantha',
       age: 27
   }
], (error, result) => {
   if (error) {
      return console.log('Unable to insert documents!')
  }
  console.log(result.ops)
})
})
