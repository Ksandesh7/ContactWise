import mongoose from "mongoose";

// import autoIncrement from 'mongoose-auto-increment'

const counterSchema = mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
  });
  
const Counter = mongoose.model('Counter', counterSchema);

const userSchema = mongoose.Schema({
    userId: { type: Number, unique: true },
    name: String,
    username:  String,
    email: String,
    phone: String,
    address: String,
    relationships: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Relationship', // Reference to the Relationship model
    }],
})

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');

userSchema.pre('save', function (next) {
    const doc = this;
    Counter.findByIdAndUpdate({ _id: 'userId' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
      .then(function (counter) {
        doc.userId = counter.seq;
        next();
      })
      .catch(function (error) {
        return next(error);
      });
  });
  


const user = mongoose.model('user', userSchema)


export default user;

