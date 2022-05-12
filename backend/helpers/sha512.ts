import crypto from 'crypto';

function SHA512(senha: string, salt: string) {
  var hash = crypto.createHmac('sha512', salt)
  hash.update(senha);
  var hash2 = hash.digest('hex');
  return {
    salt, hash2
  }
}

export { SHA512 };
