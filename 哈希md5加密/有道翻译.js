
const Crypto = require('crypto-js');


var t = 'asdjnjfenknafdfsdfsd'
var e= 'asdjnjfenknafdfsdfsd'
 function _(e) {
                return Crypto.MD5(e).toString()
            }
function S(e, t) {
                return _(`client=fanyideskweb&mysticTime=${e}&product="webfanyi"&key='asdjnjfenknafdfsdfsd'`)
            };
function k(e, t) {
                const a = (new Date).getTime();
                return {
                    sign: S(a, e),
                    mysticTime: a,

                }
            };

function get_sign(){
    return k(t, e)
}
a= get_sign()
console.log(a)