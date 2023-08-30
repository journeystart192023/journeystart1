require('dotenv').config()
module.exports={
    mongodbstr:process.env.mongodb,
    PORT: process.env.PORT
}