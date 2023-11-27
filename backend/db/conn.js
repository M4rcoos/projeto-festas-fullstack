const mongoose = require('mongoose')

async function main(){
  try{
    await mongoose.connect('mongodb+srv://marcos:n6uYfFjM5zOPwaMC@cluster0.rrk1fji.mongodb.net/?retryWrites=true&w=majority',{
})
  }catch(error){
    console.log(`erro:${error}` )
  }

}

module.exports = main