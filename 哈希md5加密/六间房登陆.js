
const CryptoJS = require("crypto-js");


n = {
    encode: function (str){
        return CryptoJS.SHA1(str).toString()
    }

}


function get_pwd(pwd,servertime,nonce){
    return n.encode("" + n.encode(n.encode(pwd) + servertime) + nonce)
}
