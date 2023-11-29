const mongoose = require('mongoose')
require('dotenv').config();

async function main(){
  try{
    await mongoose.connect(process.env.MONGO_URI,{
})
  }catch(error){
    console.log(`erro:${error}` )
  }

}

module.exports = main