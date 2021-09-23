const bitcore = require("bitcore-lib");
const Message = require('bitcore-message');

const ADDRESS_PREFIX = 'iz';

/**
 * Public key 2 address
 * @param pub
 * @return {*}
 */
function public2address(pub) {
    pub = pub.substr(1);
    pub = ADDRESS_PREFIX + pub;

    return pub;
}

/**
 * Sign data function
 * @param data
 * @param privateKeyData
 * @return {string}
 */
function sign(data, privateKeyData) {
    privateKeyData = String(privateKeyData);
    data = String(data);

    let privateKey = new bitcore.PrivateKey(privateKeyData);
    let message = new Message(data);

    return message.sign(privateKey).toString();
}

/**
 * Generate wallet from configured credentials
 * @param {object} config
 * @return {{keysPair: {private: {senderContainerName, certificateName}, public: *}}}
 */
function generateWallet() {
    let hash = bitcore.crypto.Hash.sha256(Buffer.from(String(Math.random()) + String(Math.random()) + String(Math.random())));
    let privateKey = bitcore.crypto.BN.fromBuffer(hash).toString('hex');

    let address = new bitcore.PrivateKey(privateKey).toAddress().toString();

    return {
        keysPair: {
            private: privateKey,
            public: public2address(address)
        }
    }
}