import mongoose from "mongoose"

const cardSchema = new mongoose.Schema(
  { 
    caseID: {type: String, unique: true },
    date: Date,
    name:String,
    studentID:{ type: String, unique: true },
    college: String,
    department: String,
    pickupLocation: String,
    saveLocation: String,
    pickupContact: String,
    code: String,
    returned: Boolean
  },
  {
    collection: "card",
  }
)

export default mongoose.model("card", cardSchema)