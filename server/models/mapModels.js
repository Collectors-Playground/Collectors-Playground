const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://dbUser:codesmith@cluster0.rnhbs.mongodb.net/WWN?';

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'worldwidenews',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) =>
    console.log(`Error found inside the mongoose.connect method: ${err}`)
  );

const { Schema } = mongoose;

// create a new schema to save the user name,password and the favourites of each user
const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  favorites: [{ title: String, link: String }],
});

// the below method runs right before the document is saved on the db.
userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  });
});

const Users = mongoose.model('users', userSchema);

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: '10m', default: Date.now },
});

const Session = mongoose.model('Session', sessionSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  Users,
  Session,
};
