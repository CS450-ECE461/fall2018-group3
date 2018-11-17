module.exports = {
  tokens: {
    // This is the base options for all token generators.
    $: {
      issuer: 'rumi',
      expiresIn: '1h',
      algorithm: 'HS256',
      secret: 'ssshhh'
    }
  },
};