module.exports = {
  connections: {
    $default: {
      uri: 'mongodb://localhost/rumi-apiserver_',
      seed: true,
      options: {
        readPreference: "primary",
        forceServerObjectId: false,
        w: 1,
        autoReconnect: true
      }
    }
  }
};