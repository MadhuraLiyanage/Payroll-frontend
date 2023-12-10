import CryptoJS from "crypto-js";

const securityKey = process.env.REACT_APP_SECRET_KEY
  ? process.env.REACT_APP_SECRET_KEY
  : "maddog@madhura.com";

const EncryptString = (vanillaString) => {
  const encryptedString = CryptoJS.AES.encrypt(
    vanillaString,
    securityKey
  ).toString();
  return encryptedString;
};

const DecryptString = (encryptedString) => {
  let decryptedString;
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedString, securityKey);
    decryptedString = bytes.toString(CryptoJS.enc.Utf8);
  } catch {
    decryptedString = "";
  }
  return decryptedString;
};

export { EncryptString, DecryptString };
