const { sign, verify } = require("jsonwebtoken");
const secretKey = require("secret-key");
const uuid = require("uuid").v4();

const secret = secretKey.create(uuid).secret;
// console.log('secret :>> ', secret);
const tokenKey = (payload) => {
  const createToke = sign(payload, secret);
  return createToke;
};
const decodedKey = (token) => {
  const verifyToken = verify(token, secret);
  return verifyToken;
};

module.exports = {
  tokenKey: tokenKey,
  decodedKey,
};
