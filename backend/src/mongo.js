import mongoose from "mongoose"
import { dataInit } from "./testData.js"

import "dotenv-defaults/config.js"
import dotenv from "dotenv-defaults"

async function connect() {
  dotenv.config()

  if(!process.env.MONGO_URL){
    console.error("Missing MONGO_URL")
    process.exit(1)
  }


  const mongo_config = {
    useNewUrlParser: true,
    useUnifiedTopology:true
  }

  mongoose.connect(process.env.MONGO_URL, mongo_config)

  const db = mongoose.connection

  db.on("error", (error) => {
    throw new Error("DB connection error: "+ error)
  })

  db.once("open", () => {
    console.log("MongoDB connected")
  })
  dataInit()
}

export default { connect }