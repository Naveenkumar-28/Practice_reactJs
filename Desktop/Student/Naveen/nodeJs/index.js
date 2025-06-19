const express = require('express')

const mongoose = require('mongoose')
const { router } = require('./User.auth')

const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/naveen').then(() => {
    console.log("MongoDb connected successfully")
}).catch(() => {
    console.log("MongoDB Connection failed");
})

app.use('/auth', router);


app.listen(5000, () => {
    console.log('Server listening on port 5000');

})
















// const createUser = (req, res,next) => {
//     try {
//         const { name } = req.body
//         const newName = name.trim().toLowerCase()
//         if (newName === 'naveen') {
//             req.user=newName
//            return next()
//         }
//         res.send({ message: 'User not created' })
    
//     } catch (error) {
//         return res.status(500).json({ error:error.message, message: 'User Created failed' })
//     }
// }

// app.post('/create-user',createUser, async (req, res) => {
//     try {
//         const user = req.user
//         console.log({ user });
        
//         res.send({message:'User created successfully!'})
        

//     } catch (error) { 
//         return res.status(500).json({ error:error.message, message: 'User Created failed' })
//     }
// })
