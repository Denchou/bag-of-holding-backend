const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
}, {
  timestamps: true
  // toObject: {
  //   // remove `hashedPassword` field when we call `.toObject`
  //   transform: (owner, upload) => {
  //     upload.owner = owner.email
  //     return upload
    // }
  // }
})

module.exports = mongoose.model('Upload', uploadSchema)
