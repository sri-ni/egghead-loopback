'use strict';

// const mongodbUrl = process.env.MONGODB_URL;
// const mongodbUrl =
  // 'mongodb://admin:firebolt1!@cluster0-shard-00-00-fb1dn.mongodb.net:27017,cluster0-shard-00-01-fb1dn.mongodb.net:27017,cluster0-shard-00-02-fb1dn.mongodb.net:27017/egghead-loopback?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
const mongodbUrl = 'mongodb://localhost/egghead-loopback';

if (mongodbUrl) {
  console.log('Using MongoDB url:', mongodbUrl);

  const dataSources = {
    db: {
      name: 'db',
      connector: 'mongodb',
      url: mongodbUrl,
    },
  };

  module.exports = dataSources;
}
