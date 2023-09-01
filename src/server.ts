import mongoose from 'mongoose';
import app from './app';
const port: number = 5000;
async function run() {
  try {
    await mongoose.connect(
      'mongodb+srv://assignment-5:assignment-5@cluster0.xgycl9p.mongodb.net/Books?retryWrites=true&w=majority'
    );
    app.listen(port, () => {
      console.log(`database is connected on port ${port}`);
    });
  } catch (error) {
    console.log('database connection failed', port);
  }
}
run();
