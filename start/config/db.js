import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
        bufferCommands: false,
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   bufferMaxEntries: 0,
    //   useFindAndModify: false,
    //   useCreateIndex: true,
    };

        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/jayaru`, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;