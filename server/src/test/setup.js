const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

afterEach(async () => {
  await mongoose.connection.dropDatabase(() => {});
});

after(async () => {
  await mongoose.connection.dropDatabase(() => {});
  mongoose.connection.close(() => {
    console.log('Test database connection closed');
  });
});
