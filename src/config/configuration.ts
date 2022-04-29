/* eslint-disable prettier/prettier */
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    uri: process.env.DATABASE_URI,
  },
  keys: {
    PrivateKey: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n'),
    PublicKey: process.env.PUBLIC_KEY.replace(/\\n/gm, '\n'),
  },

});