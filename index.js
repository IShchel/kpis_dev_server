require('dotenv').config()
const express = require ('express')
const routes = require ('./routes_and_ctl')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const app = express()

const cors = require('cors')
// const corsOptions ={
//     origin:`http://localhost:${PORT}`,
//     //credentials:true,
//     //optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

app.use(cors());
app.use(express.json())
app.use('/api', routes)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
console.log(`PORT: ${PORT}`)
start()

