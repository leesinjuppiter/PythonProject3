



// function get_enviroment(proxy_array) {
//     for(var i=0; i<proxy_array.length; i++){
//         handler = '{\n' +
//             '    get: function(target, property, receiver) {\n' +
//             '        console.log("方法:", "get  ", "对象:", ' +
//             '"' + proxy_array[i] + '" ,' +
//             '"  属性:", property, ' +
//             '"  属性类型:", ' + 'typeof property, ' +
//             // '"  属性值:", ' + 'target[property], ' +
//             '"  属性值类型:", typeof target[property]);\n' +
//             '        return target[property];\n' +
//             '    },\n' +
//             '    set: function(target, property, value, receiver) {\n' +
//             '        console.log("方法:", "set  ", "对象:", ' +
//             '"' + proxy_array[i] + '" ,' +
//             '"  属性:", property, ' +
//             '"  属性类型:", ' + 'typeof property, ' +
//             // '"  属性值:", ' + 'target[property], ' +
//             '"  属性值类型:", typeof target[property]);\n' +
//             '        return Reflect.set(...arguments);\n' +
//             '    }\n' +
//             '}'
//         eval('try{\n' + proxy_array[i] + ';\n'
//         + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
//         + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
//     }
// }
// proxy_array = ['window', 'document', 'location', 'navigator', 'history','screen']
//-------------------------------------
window  = global;
window.addEventListener = function (args){
    // console.log('调用window中addEventListener接收的参数:', args)
};
window.CHAMELEON_LOADED = undefined;
window.location = {
hostname :'q.10jqka.com.cn'
}
document = {
    head:{
        meta:{charset:'gbk'}
    },
    createElement:function(args){
        // console.log('调用document中createElement接收的参数:', args)
        if(args == 'div'){
            return {}
        }
    },
    addEventListener:function(args){
        // console.log('调用document中addEventListener接收的参数:', args)
    },
     documentElement:{
        appendChild:function(args){
            // console.log('调用document.documentElement中appendChild接收的参数:', args)
        }
    },
};

// --------------------------------------
// get_enviroment(proxy_array)
var TOKEN_SERVER_TIME = 1747819000.628;
!function(n, t, r, e) {
    !function() {
        var a = r[0]
          , u = n[0]
          , c = n[1]
          , s = n[2]
          , f = e[0]
          , v = n[3]
          , l = t[0]
          , p = n[4]
          , d = r[1]
          , h = n[5]
          , g = n[6]
          , m = r[2]
          , w = n[7]
          , I = t[1]
          , _ = t[2]
          , y = Kn(t[3], e[1], n[8])
          , A = t[4]
          , E = e[2]
          , T = t[5]
          , C = e[3]
          , b = e[4]
          , R = Xn(e[5], e[6])
          , B = n[9]
          , k = t[6]
          , O = Vn(n[10], t[7])
          , S = t[8]
          , P = r[3]
          , M = e[7]
          , L = r[4]
          , x = t[9]
          , D = e[8]
          , N = Kn(t[10], r[5], r[6])
          , j = n[11]
          , X = e[9]
          , F = Hn(t[11], e[10], e[11])
          , W = t[12]
          , H = e[12]
          , V = n[12]
          , $ = t[13]
          , K = Hn(t[14], n[13])
          , U = e[13]
          , Q = r[7]
          , G = Vn(n[14])
          , J = t[15]
          , Y = n[15]
          , q = Xn(r[8], t[16])
          , z = Xn(n[16], e[14], r[9])
          , Z = Kn(t[17], e[15], r[10])
          , nn = t[18]
          , tn = r[11]
          , rn = r[12]
          , en = r[13]
          , an = t[19]
          , on = e[16]
          , un = n[17]
          , cn = Xn(r[14], r[15], r[16])
          , sn = t[20]
          , fn = t[21]
          , vn = r[17]
          , ln = r[18]
          , pn = r[19]
          , dn = e[17]
          , hn = Vn(e[18], n[18])
          , gn = e[19]
          , mn = e[20]
          , wn = t[22]
          , In = r[20]
          , _n = r[21]
          , yn = r[22]
          , An = t[23]
          , En = e[21]
          , Tn = Kn(n[19], e[6], t[24])
          , Cn = n[20]
          , bn = Vn(e[22])
          , Rn = n[21]
          , Bn = Xn(t[25], e[23], r[23])
          , kn = t[26]
          , On = t[27]
          , Sn = a + u + c + s
          , Pn = Kn(n[22], e[24], n[23])
          , Mn = e[25]
          , Ln = t[28]
          , xn = parseInt(t[29], e[26])
          , Dn = e[27]
          , Nn = [new r[24](r[25]), new e[28](f + v + l + p)]
          , jn = [new r[24](t[30]), new r[24](Xn(n[18], e[29]))];
        function Xn() {
            var a = arguments[t[31]];
            if (!a)
                return n[24];
            for (var o = r[26], i = n[25], u = e[27]; u < a.length; u++) {
                var c = a.charCodeAt(u)
                  , s = c ^ i;
                i = i * u % n[26] + r[27],
                o += n[27].fromCharCode(s)
            }
            return o
        }
        var Fn = t[32][n[28]] || r[28].getElementsByTagName(e[30])[n[29]], Wn;
        function Hn() {
            var r = arguments[e[31]];
            if (!r)
                return t[33];
            for (var a = e[32], o = e[33], i = t[34], u = t[35]; u < r.length; u++) {
                var c = r.charCodeAt(u);
                i = (i + n[30]) % o.length,
                c ^= o.charCodeAt(i),
                a += t[36].fromCharCode(c)
            }
            return a
        }
        !function(a) {
            var o = n[31]
              , i = r[29]
              , u = r[30]
              , c = e[34]
              , s = n[32]
              , f = t[37];
            a[o + d + i] = r[31];
            function v() {
                var t = Xn(n[33], e[35], sn);
                this.setCookie(t, r[31]),
                this.getCookie(t) || (a[Xn(n[34], e[36])] = n[35]),
                this.delCookie(t)
            }
            a[u + c] = v;
            function l(r, e, a) {
                var o = an;
                o = Q,
                this.setCookie(r, n[24], t[38], e, a)
            }
            a[h + s + g] = A;
            function p(a, o, i, u, c) {
                var s = r[32]
                  , v = r[33]
                  , l = e[37]
                  , p = n[36][e[38]][r[34]]
                  , d = e[39][t[39]][t[40]]
                  , h = d === Vn(r[35])
                  , g = p.indexOf(f + s + v + m) !== -e[31] || p.indexOf(r[36]) !== -r[37]
                  , _ = a + e[40] + o;
                u && (_ += w + I + l + u),
                c && (_ += r[38] + c),
                i && (_ += e[41] + i),
                h && g && (_ += Vn(t[41]),
                _ += t[42]),
                r[28][Hn(t[43], n[37])] = _
            }
            a[e[42]] = p;
            function A(a) {
                var o, i, u;
                o = i = u = e;
                var c, s, f;
                c = s = f = r;
                var v, l, p;
                v = l = p = n;
                var d, h, g;
                d = h = g = t;
                var m = d[44]
                  , w = d[45]
                  , I = Hn(Bn, p[38])
                  , A = (O,
                k,
                f[28][m + w + _])
                  , E = Kn(u[43], p[39], d[46]) + a + g[47]
                  , T = A.indexOf(E);
                if (T == -d[31]) {
                    if (E = a + c[39],
                    A.substr(o[27], E.length) != E)
                        return;
                    T = f[40]
                }
                var C = T + E[I + y]
                  , b = A.indexOf(i[44], C);
                return b == -d[31] && (b = A[s[41]]),
                A.substring(C, b)
            }
            a[t[48]] = l
        }(Wn || (Wn = {}));
        function Vn() {
            return arguments[r[40]].split(n[24]).reverse().join(t[33])
        }
        var $n;
        !function(a) {
            var o = t[49], i = n[40], u = r[31], s, f = e[39][r[42]], v, l;
            function p() {
                try {
                    return !!(i in r[43] && t[50][i])
                } catch (n) {
                    return void e[27]
                }
            }
            function d(n) {
                try {
                    return s.getItem(n)
                } catch (r) {
                    return t[51]
                }
            }
            function h(n) {
                return function() {
                    l.appendChild(s),
                    s.addBehavior(e[45]),
                    s.load(i);
                    var t = n();
                    return l.removeChild(s),
                    t
                }
            }
            function g(r) {
                var a = n[41]
                  , i = new t[3](Xn(t[52], t[53]),t[54]);
                return r.replace(new t[3](o + a), e[46]).replace(i, n[42])
            }
            a[Hn(c, e[47])] = w;
            function m(n, t) {
                if (void 0 === t)
                    return T(n);
                if (u)
                    I(n, t);
                else {
                    if (!s)
                        return void r[40];
                    A(n, t)
                }
            }
            a[Hn(Tn, t[55])] = m;
            function w() {
                if (u = p(),
                u)
                    s = t[50][i];
                else if (f[n[43]][n[44]])
                    try {
                        v = new ActiveXObject(t[56]),
                        v.open(),
                        v.write(n[45]),
                        v.close(),
                        l = v.w[n[46]][e[27]][t[57]],
                        s = l.createElement(e[48])
                    } catch (r) {
                        s = f.createElement(i),
                        l = f[e[49]] || f.getElementsByTagName(e[30])[t[35]] || f[e[50]]
                    }
            }
            function I(n, t) {
                try {
                    s.setItem(n, t)
                } catch (r) {}
            }
            function _(n) {
                try {
                    s.removeItem(n)
                } catch (t) {}
            }
            a[Kn(e[51], e[52])] = E;
            function y(n) {
                h(function() {
                    n = g(n),
                    s.removeAttribute(n),
                    s.save(i)
                })()
            }
            function A(n, t) {
                h(function() {
                    n = g(n),
                    s.setAttribute(n, t),
                    s.save(i)
                })()
            }
            function E(t) {
                return u ? d(t) : s ? C(t) : void n[29]
            }
            a[Vn(t[58], _n)] = T;
            function T(n) {
                if (u)
                    _(n);
                else {
                    if (!s)
                        return void e[27];
                    y(n)
                }
            }
            function C(n) {
                var t = An;
                t = W,
                h(function() {
                    return n = g(n),
                    s.getAttribute(n)
                })()
            }
        }($n || ($n = {}));
        function Kn() {
            var r = arguments[t[31]];
            if (!r)
                return t[33];
            for (var a = e[32], o = n[25], i = n[29]; i < r.length; i++) {
                var u = r.charCodeAt(i)
                  , c = u ^ o;
                o = u,
                a += n[27].fromCharCode(c)
            }
            return a
        }
        var Un = function() {
            var a = r[44]
              , o = r[45];
            function i(a) {
                this[e[53]] = a;
                for (var o = r[40], i = a[t[59]]; o < i; o++)
                    this[o] = n[29]
            }
            return i[r[46]][r[47]] = function() {
                for (var o = t[60], i = this[n[47]], u = [], c = -n[30], s = n[29], f = i[Kn(r[48], t[61])]; s < f; s++)
                    for (var v = this[s], l = i[s], p = c += l; u[p] = v & parseInt(a + o, t[62]),
                    --l != e[27]; )
                        --p,
                        v >>= t[62];
                return u
            }
            ,
            i[A + E][Xn(e[54], r[49], x)] = function(a) {
                for (var i = t[63], u = this[T + o + i], c = t[35], s = n[29], f = u[Xn(n[48], r[50])]; s < f; s++) {
                    var v = u[s]
                      , l = r[40];
                    do {
                        l = (l << r[51]) + a[c++]
                    } while (--v > n[29]);
                    this[s] = l >>> e[27]
                }
            }
            ,
            i
        }(), Qn;
        !function(a) {
            var o = e[55]
              , i = n[49]
              , u = n[50]
              , c = r[52];
            function s(a) {
                var o, i, u;
                o = i = u = t;
                var c, s, f;
                c = s = f = r;
                var v, p, d;
                v = p = d = e;
                var h, g, m;
                h = g = m = n;
                for (var w = g[29], I = (en,
                on,
                a[d[56]]), _ = []; w < I; ) {
                    var y = l[a.charAt(w++)] << parseInt(p[57], v[58]) | l[a.charAt(w++)] << d[59] | l[a.charAt(w++)] << v[60] | l[a.charAt(w++)];
                    _.push(y >> parseInt(Vn(f[53], Tn), d[61]), y >> c[51] & parseInt(Xn(X, p[62]), g[51]), y & parseInt(u[64], h[52]))
                }
                return _
            }
            function f(n, t, a, i, u) {
                for (var c = n[o + C]; t < c; )
                    a[i++] = n[t++] ^ u & parseInt(r[54], e[61]),
                    u = ~(u * parseInt(e[63], r[55]))
            }
            for (var v = e[64], l = {}, p = n[29]; p < parseInt(Vn(t[65], r[56]), r[51]); p++)
                l[v.charAt(p)] = p;
            function d(n) {
                for (var a = r[40], o = t[35], i = n[t[59]]; o < i; o++)
                    a = (a << r[57]) - a + n[o];
                return a & parseInt(Xn(q, t[66], In), e[61])
            }
            function h(r) {
                var e = d(r)
                  , a = [c, e];
                return f(r, +n[29], a, +t[67], e),
                g(a)
            }
            function g(a) {
                for (var o = r[40], u = (G,
                i,
                a[e[56]]), c = []; o < u; ) {
                    var s = a[o++] << parseInt(b + R, r[51]) | a[o++] << r[51] | a[o++];
                    c.push(v.charAt(s >> parseInt(e[65], n[53])), v.charAt(s >> parseInt(n[54], t[62]) & parseInt(Xn(e[66], r[58], S), e[61])), v.charAt(s >> r[59] & parseInt(B + i, t[46])), v.charAt(s & parseInt(n[55], r[55])))
                }
                return c.join(Vn(r[26], n[56]))
            }
            function m(n) {
                var t, a, o;
                t = a = o = r;
                var i, u, v;
                i = u = v = e;
                var l = s(n);
                if (l[u[27]] != c)
                    return error = i[67],
                    void 0;
                var p = l[t[37]]
                  , h = [];
                return f(l, +a[60], h, +i[27], p),
                d(h) == p ? h : void 0
            }
            a[Vn(r[61])] = g,
            a[Hn($n, n[57], t[68])] = s,
            a[k + u] = h,
            a[O + S] = m
        }(Qn || (Qn = {}));
        var Gn;
        !function(a) {
            var o, i, c;
            o = i = c = t;
            var f, v, l;
            f = v = l = n;
            var p, d, h;
            p = d = h = r;
            var g, I, _;
            g = I = _ = e;
            var y = b
              , A = Xn(g[68], d[62], Mn)
              , T = Kn(h[63], h[64])
              , C = v[58]
              , R = p[65]
              , B = c[69]
              , k = f[59]
              , S = f[60]
              , J = d[66]
              , Y = o[70]
              , q = _[69]
              , z = d[67]
              , Z = i[71]
              , nn = d[68]
              , tn = Kn(f[61], _[70], f[62]);
            function rn() {
                var n = sn;
                return n = G,
                Math.random() * parseInt(I[71], v[51]) >>> v[29]
            }
            function en(n) {
                var t, r, e;
                t = r = e = c;
                var a, o, i;
                a = o = i = g;
                var u, s, f;
                u = s = f = d;
                var v, p, h;
                v = p = h = l;
                var m = v[63]
                  , w = u[69]
                  , I = Kn(k, p[64], Ln)
                  , _ = v[65]
                  , y = s[70]
                  , A = {}
                  , E = function(n, c) {
                    var f = h[66], l = p[63], d = v[66], g, _, y, A;
                    for (c = c.replace(h[67], h[24]),
                    c = c.substring(p[30], c[o[56]] - i[31]),
                    g = c.split(Hn(t[72], i[72], s[71])),
                    y = h[29]; y < g[m + w + f]; y++)
                        if (_ = g[y].split(a[73]),
                        _ && !(_[o[56]] < parseInt(h[68], t[67]))) {
                            for (A = e[67]; A < _[l + I + d]; A++)
                                _[h[30]] = _[a[31]] + s[72] + _[A];
                            _[u[40]] = new h[69](p[70]).test(_[e[35]]) ? _[u[40]].substring(t[31], _[a[27]][r[59]] - r[31]) : _[i[27]],
                            _[r[31]] = new r[3](p[70]).test(_[p[30]]) ? _[u[37]].substring(r[31], _[e[31]][o[56]] - s[37]) : _[o[31]],
                            n[_[t[35]]] = _[t[31]]
                        }
                    return n
                };
                return new a[28](_ + P + y).test(n) && (A = E(A, n)),
                A
            }
            function an(n) {
                var t = f[60]
                  , r = Xn(h[73], l[71], w)
                  , e = v[72];
                if (!(n > I[74])) {
                    n = n || l[29];
                    var a = parseInt(f[73], I[58])
                      , u = (zn,
                    T,
                    c[32].createElement(f[74]));
                    u[f[75]] = location[d[74]] + c[73] + parseInt((new h[75]).getTime() / a) + Vn(v[76]),
                    u[c[74]] = function() {
                        Dn = _[31],
                        setTimeout(function() {
                            an(++n)
                        }, n * parseInt(Hn(_[60], d[76]), i[46]))
                    }
                    ,
                    u[I[75]] = u[d[77]] = function() {
                        var n = Hn(_[76], c[75], v[77])
                          , a = Hn(N, g[77], o[76])
                          , s = l[78];
                        this[l[79]] && this[M + n + a + t] !== r + s + A && this[Xn(f[80], l[81], v[82])] !== h[78] && this[e + L] !== Kn(m, i[77]) || (Dn = o[35],
                        u[c[78]] = u[p[77]] = h[79])
                    }
                    ,
                    v[83][I[49]].appendChild(u)
                }
            }
            y = X;
            function on() {
                var n = new l[84];
                try {
                    return time = d[75].now(),
                    time / parseInt(g[78], I[79]) >>> i[35]
                } catch (t) {
                    return time = n.getTime(),
                    time / parseInt(c[79], d[80]) >>> v[29]
                }
            }
            function un(n) {
                var t = new o[3](o[80]);
                if (dn(n))
                    return n;
                var r = t.test(n) ? -c[81] : -parseInt(o[82], p[60]);
                return n.split(d[81]).slice(r).join(l[4])
            }
            function cn() {
                var n = (s,
                u,
                new v[84]);
                return typeof TOKEN_SERVER_TIME == x + T + C ? I[27] : (time = parseInt(TOKEN_SERVER_TIME),
                time)
            }
            function sn(n) {
                var t, r, e;
                t = r = e = f;
                var a, i, u;
                a = i = u = o;
                var c, s, v;
                c = s = v = h;
                var l = s[82]
                  , p = i[83]
                  , d = new t[69](l + R + p + D,r[85]);
                if (n) {
                    return n.match(d)
                }
            }
            function fn(n, t) {
                var r = l[86]
                  , e = new p[24](Hn(f[87], c[84]),f[85])
                  , a = new p[24](r + B);
                if (n) {
                    var i = n.match(e);
                    if (i) {
                        var u = i[c[31]];
                        return t && a.test(u) && (u = u.split(v[88]).pop().split(o[85])[g[27]]),
                        u
                    }
                }
            }
            function vn(n) {
                var t, r, e;
                t = r = e = l;
                var a, o, u;
                a = o = u = _;
                var c, s, f;
                c = s = f = i;
                var v, p, h;
                v = p = h = d;
                var g = h[83]
                  , m = c[86]
                  , w = u[80];
                if (typeof n === r[89] && n[Vn(v[84], a[81])])
                    try {
                        switch (parseInt(n[e[90]])) {
                        case parseInt(h[85], h[55]):
                            break;
                        case parseInt(h[86], r[52]):
                            top[r[91]][f[87]] = n[f[88]];
                            break;
                        case parseInt(v[87], p[60]):
                            top[Hn(v[88], e[92], E)][g + k + S + J] = n[m + N + w];
                            break;
                        default:
                            break
                        }
                    } catch (I) {}
            }
            function ln(n) {
                var t, r, e;
                t = r = e = v;
                var a, o, i;
                a = o = i = h;
                var u, s, f;
                u = s = f = c;
                for (var l = s[35], p = a[40], d = n[r[93]]; p < d; p++)
                    l = (l << t[94]) - l + n.charCodeAt(p),
                    l >>>= s[35];
                return l
            }
            function pn(n, t, r) {
                gn ? n.addEventListener(t, r) : n.attachEvent(c[89] + t, r)
            }
            function dn(n) {
                var t = pn;
                return t = $,
                new f[69](h[89]).test(n)
            }
            function hn(n) {
                var t, r, e;
                t = r = e = d;
                var a, o, i;
                a = o = i = I;
                for (var u = i[27], c = n[r[41]] - i[31]; c >= e[40]; c--)
                    u = u << o[31] | +n[c];
                return u
            }
            a[c[90]] = en,
            a[o[91]] = an,
            a[Kn(i[92], i[93], p[90])] = vn,
            a[j + X + Y] = mn,
            a[Kn(l[95], l[96], O)] = ln,
            a[v[97]] = rn,
            a[i[94]] = dn,
            a[F + W] = un,
            a[_[82]] = fn,
            a[H + V + q + $] = sn,
            a[z + K + Z + U] = hn,
            a[Hn(p[91], l[98])] = on,
            a[nn + Q + tn + G] = cn;
            var gn = !!g[39][v[99]];
            function mn(n) {
                for (var t = [], r = f[29]; r < n[h[41]]; r++)
                    t.push(n.charCodeAt(r));
                return t
            }
            a[i[95]] = pn
        }(Gn || (Gn = {}));
        var Jn;
        !function(a) {
            var o = t[96]
              , i = Vn(t[97])
              , u = r[92]
              , c = Kn(t[98], t[99], z)
              , s = t[100]
              , f = Xn(r[93], e[83])
              , v = e[84]
              , l = t[101]
              , p = r[40]
              , d = r[40]
              , g = n[29]
              , m = e[27]
              , w = n[29]
              , I = t[35]
              , _ = n[100]
              , y = n[101]in e[85].createElement(r[94]) ? Hn(r[95], n[102]) : o + i + u in n[83] ? c + s + J + Y : q + z;
            Gn.eventBind(e[85], y, E),
            Gn.eventBind(t[32], r[96], B),
            Gn.eventBind(t[32], e[86], B),
            Gn.eventBind(e[85], e[87], A),
            Gn.eventBind(e[85], Kn(Ln, r[97]), b);
            function A(a) {
                g++,
                _ = void 0 == a[Hn(n[103], r[98], an)] || a[t[102]],
                w = a[t[103]],
                I = a[e[88]]
            }
            function E(n) {
                d++
            }
            function T() {
                return m
            }
            function C() {
                return {
                    x: w,
                    y: I,
                    trusted: _
                }
            }
            function b(n) {
                m++
            }
            function R() {
                return d
            }
            function B(n) {
                p++
            }
            function k() {
                return p
            }
            function O() {
                return g
            }
            a[t[104]] = k,
            a[f + v + l] = R,
            a[Hn(h, t[105])] = O,
            a[r[99]] = T,
            a[r[100]] = C
        }(Jn || (Jn = {}));
        var Yn;
        !function(a) {
            var u, c, s;
            u = c = s = t;
            var f, v, l;
            f = v = l = r;
            var d, h, g;
            d = h = g = e;
            var w, I, _;
            w = I = _ = n;
            var A = I[104]
              , E = d[89]
              , T = l[101]
              , C = u[106]
              , b = Vn(d[90], _[105])
              , R = g[91]
              , B = Kn(U, w[106])
              , k = Vn(h[92], l[102])
              , O = c[19]
              , S = w[63]
              , P = h[93]
              , M = s[107]
              , L = f[103]
              , x = I[107]
              , D = Xn(c[108], w[108], _[109])
              , N = c[109]
              , j = v[104]
              , X = w[110]
              , F = w[41]
              , H = Vn(f[105])
              , V = g[94]
              , $ = Kn(h[95], u[110], _[111]);
            BROWSER_LIST = {
                _1: function() {
                    return u[111]in I[36]
                },
                _2: function() {
                    return Xn(_[112], f[106], _[113])in s[50]
                },
                _3: function() {
                    return Hn(_[114], _[115], d[96]) + Z + nn in I[36]
                },
                _4: function() {
                    var n = Z;
                    return n = kn,
                    s[112]in f[43] && !(_[116]in c[32].getElementsByTagName(_[28])[h[27]])
                },
                _5: function() {
                    return u[20] + h[97] + d[98] + tn in u[50] && !(h[99]in g[39])
                },
                _6: function() {
                    return s[112]in w[36] && !i
                },
                _7: function() {
                    var n = l[107]
                      , t = (m,
                    bn,
                    h[100]);
                    return v[108]in c[50] && !_[36][n + t + A + E]
                },
                _8: function() {
                    return Hn(v[109], v[110]) + rn + en + an in u[50] && !d[39][on + un]
                },
                _9: function() {
                    return Kn(W, w[117], _[118])in u[50] && _[36][l[111]]
                },
                _10: function() {
                    return f[112] === navigator[s[113]]
                },
                _11: function() {
                    return l[113] === navigator[Xn(Y, h[101], y)]
                },
                _12: function() {
                    var n = w[119];
                    return T + n in I[36]
                },
                _13: function() {
                    return d[102]in f[43]
                },
                _14: function() {
                    return new l[24](f[114],s[114]).test(navigator.appVersion)
                },
                _15: function() {
                    return l[115]in navigator
                },
                _16: function() {
                    return new u[3](s[115],l[116]).test(navigator.vendor)
                },
                _17: function() {
                    return _[120]in c[50]
                },
                _18: function() {
                    var n, t, r;
                    n = t = r = g;
                    var e, a, i;
                    return e = a = i = s,
                    i[116]in a[50] && new a[3](t[103],a[114]).test(o)
                },
                _19: function() {
                    return h[102]in s[50] && new w[69](d[104],Hn(c[117], v[117], g[105])).test(o)
                },
                _20: function() {
                    return d[102]in l[43] && new w[69](w[121]).test(o)
                },
                _21: function() {
                    return Xn(p, g[106], qn)in l[43] && new I[69](Kn(u[118], c[119], I[122]),Hn(v[118], g[107], v[119])).test(o)
                },
                _22: function() {
                    return d[102]in u[50] && new _[69](f[120]).test(o)
                },
                _23: function() {
                    return Xn(d[108], _[123], c[120])in s[50] && new s[3](h[109]).test(o)
                },
                _24: function() {
                    return l[121]in h[39] && l[122]in s[50]
                },
                _25: function() {
                    var n = v[123]
                      , t = w[49];
                    return C + n + t in _[36]
                }
            };
            function K() {
                return f[124] == (navigator[s[121]] || navigator[v[125]])
            }
            function Q() {
                for (var n = [], t = s[35]; t < parseInt(s[122], h[79]); t++)
                    n[t] = Ln[t]();
                return Gn.booleanToDecimal(n)
            }
            var G = navigator[h[110]];
            function J() {
                var n = h[111], t = c[123], r;
                try {
                    r = w[83].createElement(n + cn + t).getContext(s[124])
                } catch (e) {}
                return !!r
            }
            function Y() {
                var n = ln;
                return n = rn,
                f[126]
            }
            function q() {
                var n, t, r;
                return n = t = r = s,
                t[51]
            }
            function z(n) {
                var t, r, e;
                t = r = e = d;
                var a, o, i;
                a = o = i = c;
                for (var u = o[35]; u < G[b + R + B]; u++) {
                    var s = G[u][i[125]];
                    if (n.test(s))
                        return !t[27]
                }
                return !r[31]
            }
            function In() {
                return h[112]in l[28]
            }
            function _n() {
                for (var n in BROWSER_LIST)
                    if (BROWSER_LIST.hasOwnProperty(n)) {
                        var t = BROWSER_LIST[n];
                        if (t())
                            return +n.substr(g[31])
                    }
                return u[35]
            }
            function yn() {
                return u[50][g[113]][Hn(sn, h[114], v[127])]
            }
            function An() {
                return w[124] === h[85][_[125]]
            }
            function En(n) {
                var t = c[126];
                if (!s[50][Xn(_[126], s[127])])
                    return !c[31];
                var r;
                try {
                    r = new d[39][sn + k + t + O](n)
                } catch (e) {
                    return !d[31]
                }
                return !!r
            }
            function Tn() {
                var n = w[127]
                  , t = navigator[l[128]];
                return t && t[S + n + fn] > d[27]
            }
            function Cn() {
                return new u[3](_[128],l[116]).test(navigator[_[129]] || navigator[Hn(wn, h[115], L)])
            }
            function bn() {
                for (var n = navigator[Vn(s[128])], t = u[35]; t < Dn[Hn(s[129], v[129])]; t++)
                    if (Dn[t].test(n))
                        return t + s[31];
                return l[40]
            }
            function Rn() {
                var n, t, r;
                n = t = r = v;
                var e, a, o;
                e = a = o = c;
                var i = Q;
                return i = K,
                z(new e[3](r[130],Vn(o[114])))
            }
            function Bn() {
                return navigator.javaEnabled()
            }
            function On() {
                return g[116]
            }
            function Sn() {
                return -parseInt(u[130], u[67]) === (new c[131]).getTimezoneOffset()
            }
            function Pn() {
                return z(new c[3](_[130]))
            }
            function Mn() {
                var n, t, r;
                n = t = r = f;
                var e, a, o;
                e = a = o = g;
                var i, u, c;
                return i = u = c = I,
                z(new u[69](vn + P,o[117])) || En(t[131])
            }
            var Ln = [Bn, Mn, Rn, Pn, yn, xn, K, Cn, In, Sn, J, Tn, An, On, q, Y];
            function xn() {
                try {
                    return g[118]in s[50]
                } catch (n) {
                    return l[126]
                }
            }
            var Dn = [new s[3](ln + pn + M), new u[3](Kn(an, c[132])), new f[24](L + x + D + dn), new u[3](I[131]), new w[69](Hn(s[133], s[134])), new u[3](N + j), new f[24](v[132]), new f[24](v[133]), new g[28](h[119]), new s[3](hn + X + F), new d[28](h[120])];
            function Nn() {
                return plugin_num = w[29],
                navigator[gn + mn] && (plugin_num = navigator[_[132]][I[93]]),
                plugin_num
            }
            a[Vn(I[133])] = bn,
            a[f[134]] = _n,
            a[H + V + wn + $] = Nn,
            a[v[135]] = Q
        }(Yn || (Yn = {}));
        var qn;
        !function(a) {
            var o = r[40], i = r[37], u = e[26], c = e[121], s = parseInt(Kn(n[80], e[122], t[135]), t[67]), f = n[94], v = r[59], l = e[74], p = n[53], d = parseInt(t[29], t[62]), h = parseInt(n[68], n[134]), g = n[135], m = parseInt(e[123], n[51]), w = parseInt(n[136], e[58]), I = parseInt(e[124], t[136]), _ = parseInt(e[125], e[79]), y = parseInt(n[137], n[134]), A = parseInt(e[126], t[67]), E;
            function C() {
                var r = Wn.getCookie(On) || $n.get(Pn);
                if (r && r[t[59]] == parseInt(n[138], t[62])) {
                    var e = Qn.decode(r);
                    if (e && (E.decodeBuffer(e),
                    E[o] != n[29]))
                        return
                }
                E[o] = Gn.random()
            }
            function b() {
                var t = e[31]
                  , a = parseInt(e[127], e[26])
                  , o = r[52]
                  , u = parseInt(e[128], e[26]);
                E = new Un([u, u, u, u, t, t, t, o, a, a, a, a, a, a, a, u, a, t]),
                E[i] = Gn.serverTimeNow(),
                C(),
                E[_] = Dn,
                E[A] = xn,
                E[y] = n[29],
                E[c] = Gn.strhash(navigator.userAgent),
                E[w] = Yn.getBrowserFeature(),
                E[s] = Yn.getPlatform(),
                E[f] = Yn.getBrowserIndex(),
                E[v] = Yn.getPluginNum()
            }
            function R() {
                var n = Y;
                E[y]++,
                E[i] = Gn.serverTimeNow(),
                E[u] = Gn.timeNow(),
                E[_] = Dn,
                E[l] = Jn.getMouseMove(),
                n = q,
                E[p] = Jn.getMouseClick(),
                E[d] = Jn.getMouseWhell(),
                E[h] = Jn.getKeyDown(),
                E[g] = Jn.getClickPos().x,
                E[m] = Jn.getClickPos().y;
                var t = E.toBuffer();
                return Qn.encode(t)
            }
            a[r[136]] = b;
            function B() {
                return R()
            }
            window.lsw = B;
            a[Hn(T, r[137])] = B
        }(qn || (qn = {}));
        var zn;
        !function(a) {
            var o = r[138], i = n[139], u = n[140], c = Kn(cn, n[141], L), s = Kn(r[139], r[140]), v = r[141], p = t[137], d = e[129], h = t[138], g = e[130], m = n[142], w = Hn(e[131], t[139], S), I = !!n[36][Vn(e[132])], _, A, E, T, C, b;
            function R(a) {
                var c;
                U(a, t[140], function(a) {
                    return function() {
                        var o = Hn(e[133], t[141]);
                        try {
                            K(arguments[r[37]]) && !$(arguments[r[37]]) ? arguments[n[30]] = x(arguments[n[30]]) : c = W(),
                            a.apply(this, arguments),
                            K(arguments[n[30]]) || (Wn[o + In] || (c = qn.update()),
                            this.setRequestHeader(Pn, c))
                        } catch (i) {
                            return n[143]
                        }
                    }
                }),
                U(a, t[142], function(e) {
                    var a, c, s;
                    a = c = s = n;
                    var f, v, l;
                    f = v = l = t;
                    var p, d, h;
                    p = d = h = r;
                    var m = g;
                    return m = Sn,
                    function() {
                        var n = d[142];
                        try {
                            if (parseInt(this.status) === parseInt(Vn(p[143]), f[136])) {
                                for (var t = e.apply(this, arguments), r = new d[24](n + o + i + u,p[144]), a, c, v = {}; a = r.exec(t); )
                                    v[a[s[30]].toLowerCase()] = a[f[67]];
                                Gn.analysisRst(Gn.parse(v[Ln.toLowerCase()]))
                            }
                        } catch (h) {
                            return l[143]
                        }
                        return e.apply(this, arguments)
                    }
                })
            }
            function B(t) {
                var a = Nn
                  , o = r[43][e[134]];
                o && (a = a.concat(o));
                for (var i = n[29]; i < a[r[41]]; i++)
                    if (a[i].test(t))
                        return n[100];
                return r[126]
            }
            function k() {
                var a = Vn(r[145]);
                X(t[144], function(o) {
                    var i = t[145];
                    return function(u, s) {
                        e[135][a + i][t[146]].call(u) === n[144] && (u = u[r[146]] || Hn(n[145], t[33]));
                        var v = (c,
                        f,
                        W());
                        return s = s || {},
                        Wn[n[146]] ? K(u) ? $ || (u = x(u)) : s[e[136]] ? s[r[147]][Pn] = v : (s[Vn(n[147], r[148])] = new Headers,
                        s[e[136]].append(Pn, v)) : (v = qn.update(),
                        s[t[147]] ? s[e[136]][Pn] = v : (s[r[147]] = new Headers,
                        s[n[148]].append(Pn, v))),
                        o.call(this, u, s)
                    }
                })
            }
            function P() {
                var a, o, i;
                a = o = i = e;
                var u, f, l;
                u = f = l = r;
                var p, d, h;
                p = d = h = n;
                var g, m, w;
                g = m = w = t;
                var y = Yn
                  , A = w[148]
                  , E = h[149]
                  , T = l[28].getElementsByTagName(a[137]);
                function C(n) {
                    var t = a[138]
                      , r = m[149];
                    if (!new h[69](Kn(Gn, w[150])).test(n.protocol))
                        return h[35];
                    var e = n[Kn(d[150], g[151], l[149])];
                    if (!e) {
                        var o = T[i[27]];
                        o && (e = o[a[139]])
                    }
                    if ((!e || new u[24](t + r + c + _n,p[85]).test(e)) && (n[Vn(a[140])].split(m[152])[a[27]] == _ && n[Hn(d[151], i[141], V)]))
                        return h[35];
                    return u[31]
                }
                y = I,
                Gn.eventBind(i[85], l[150], function(n) {
                    n = n || event;
                    var t = n[m[153]] || n[s + A];
                    do {
                        if (t[u[152]] == u[153]) {
                            C(t) && W();
                            break
                        }
                    } while (t = t[l[151]])
                }),
                Gn.eventBind(i[85], yn + v + E, W),
                kn || Gn.eventBind(i[39], o[142], W)
            }
            function M(t) {
                var e = Gn.getHostFromUrl(t, r[31]);
                return e ? b.test(e) : n[100]
            }
            function x(a) {
                var o = g
                  , i = qn.update()
                  , u = jn;
                o = l;
                for (var c = n[29]; c < u[Xn(t[92], t[154], jn)]; c++)
                    if (u[c].test(a))
                        return a;
                return a + (new r[24](r[154]).test(a) ? r[155] : r[156]) + Sn + e[40] + n[152](i)
            }
            function D() {
                function t(n) {
                    return function(t) {
                        try {
                            o(t)
                        } catch (r) {
                            return r
                        }
                        return j(this, n, arguments)
                    }
                }
                function a(n) {
                    I ? U(Element.prototype, n, t) : (U(Fn, n, t),
                    U(r[28].body, n, t))
                }
                function o(t) {
                    if (t && t[e[143]] == e[144]) {
                        var a = t[n[75]];
                        B(a) || ($(a) ? W() : t[r[157]] = x(t.src))
                    }
                }
                n[36][Mn] = Gn[r[158]],
                a(r[159]),
                a(Vn(e[145], n[153]))
            }
            function N() {
                var a = e[146]
                  , o = e[147];
                _ = location[Hn(r[160], n[154], y)].split(n[155])[r[40]],
                A = location[p + a + d],
                T = location[n[156]],
                C = location[Hn(n[157], t[155])],
                E = Gn.getRootDomain(A),
                b = new t[3](An + o + E.replace(new r[24](e[148],n[158]), e[148]) + Vn(e[149], z),n[85]),
                P(),
                F(),
                k(),
                D(),
                W()
            }
            function j(a, o, i) {
                var u = D;
                if (u = O,
                t[156]in o)
                    return o.apply(a, i);
                switch (i[n[93]]) {
                case e[27]:
                    return o();
                case t[31]:
                    return o(i[n[29]]);
                case parseInt(En + Tn, n[51]):
                    return o(i[r[40]], i[n[30]]);
                default:
                    return o(i[t[35]], i[t[67]], i[parseInt(e[150], n[51])])
                }
            }
            function X(r, a) {
                var o = n[159]
                  , i = e[151];
                if (r in t[50]) {
                    t[50].hasOwnProperty(r) && U(t[50], r, a);
                    var u = e[39][o + i + h];
                    if (u) {
                        var c = u[n[160]];
                        c.hasOwnProperty(r) && U(c, r, a)
                    }
                }
            }
            function F() {
                var t = r[161]
                  , e = n[36][t + Cn + g + bn];
                e && R(e.prototype),
                r[43][r[108]] && H()
            }
            function W() {
                var t = n[161]
                  , r = qn.update();
                return Wn.setCookie(On, r, m + Rn + w + t, E, n[162]),
                $n.set(Pn, r),
                r
            }
            function H() {
                var a, o, u;
                a = o = u = n;
                var c, s, f;
                c = s = f = t;
                var v, l, p;
                v = l = p = e;
                var d, h, g;
                d = h = g = r,
                U(h[43], Vn(l[152]), function(n) {
                    var t = (jn,
                    i,
                    s[157]);
                    return function(r) {
                        if (r && new a[69](Hn(c[158], u[163], o[164]),u[85]).test(r))
                            try {
                                W()
                            } catch (e) {
                                return Bn + t
                            }
                        return new n(r)
                    }
                })
            }
            function $(t) {
                var r, e, a;
                return r = e = a = n,
                M(t) && Wn[e[146]]
            }
            function K(t) {
                var a = Gn.getOriginFromUrl(t);
                return a ? !new n[69](n[165] + T).test(a[r[60]]) || !new n[69](C).test(a[e[31]]) : e[116]
            }
            function U(e, a, o) {
                if (!e)
                    return t[51];
                var i = e[a];
                if (!i)
                    return t[51];
                var u = o(i);
                return I || (u[r[162]] = i + n[24]),
                u[n[166]] = i,
                e[a] = u,
                r[31]
            }
            a[e[153]] = N
        }(zn || (zn = {}));
        var Zn;
        !function(r) {
            function a() {
                var n = parseInt(t[159], e[61]);
                setInterval(function() {
                    Gn.getServerTime()
                }, n)
            }
            function o() {
                Wn.Init(),
                $n.Init(),
                qn.Init(),
                zn.Init(),
                a()
            }
            function i() {
                var n = g;
                n = r;
                try {
                    o()
                } catch (t) {
                    return t
                }
            }
            n[36][n[167]] || (i(),
            n[36][t[160]] = t[26])
        }(Zn || (Zn = {}))
    }()
}(["xi", "n-", "v", "ai", ".", "get", "kie", "; d", "\x1c)Aw\x1b", "3", "ced", "strT", "rigi", "]V8a", "w", "l", Array, "Map", Function, 58, "ttpR", "Feb 2050", "fZ,\x19", "\x15\x18;", "", 9527, 256, String, "head", 0, 1, "al", "Coo", 92, 81, !1, window, "[X9^QR", "TR8", "\u250c\u252c", "localStorage", "d", "___", "documentElement", "addBehavior", '<script>document.w=window<\/script><iframe src="/favicon.icon"></iframe>', "frames", "base_fileds", "ZK\x1f", "f", "ode", 2, 16, 8, "14", "3f", 30, "ZV%P\x0e\x03\x12P[X2P", "ned", "r", "e", ")^]a", 86, "le", "\u2559\u253e", "^{", "th", / /g, "10", RegExp, '^".*"$', "\u255b\u0972", "ready", "1200000", "script", "src", "sj.", 56, "ad", "readyState", 14, "\u2545\u0978\u095b\u09f5\u09a9\u090e\u099a\u09d0\u0980\u09d8", "n*.z", document, Date, "i", "[@", 85, "@", "object", "status_code", "location", "TX5TL^9[", "length", 5, 32, "\u2544\u2530\u2542\u252a\u254b\u2538\u2550", "random", "L^;PvX!", "addEventListener", !0, "onwheel", "O_3PT", "*6?v", "rra", " gs\x19?", "\u2543\u252b", "x arm", "\u2541\u0961\u097b\u09ff\u09b4", "\x15t", "Po", "\x1a+FrJ", 22, 12, 34, "KV", "maxHeight", "\u2576\u2515\u2561\u2508\u257e\u251b\u2543\u250c\u256e\u2504\u2561\u2502\u2576", 7, "Object", "opr", "QQBrowser", "%TuD4", "\u2554\u0975\u0948\u09fe\u09bd\u0938", "iso-8859-1", "defaultCharset", 23, "ng", "zh-cn", "language", "Native Client", "^Android", "plugins", "mroftalPteg", 10, 11, "13", "16", "74", "[^\\r\\n]", "*)\\r?$", "\u255b\u253d", "Fri, 01 ", "error", "[object Request]", "^\x16FyT", "allow", "sredaeh", "headers", "it", 95, 60, encodeURIComponent, 46, "PE3S", "#", "host", "0\x1a)_", "g", "Wi", "prototype", "0 GMT", "/", "`z\x1a}lc\x06", 15, "^", "_raw", "CHAMELEON_LOADED"], ["du", "oma", "ie", RegExp, "proto", "base", "enc", 79, "ode", "und", 4, 28, "Domain", "mUrl", 40, "hee", "\u2573\u0952\u0977\u09dc\u09bf\u0928\u099d", 57, "ri", "t", "Acti", "th", "gin", "\\.", "\x18B", Array, !0, "v", "X-Antispider-Message", "11", "s.thsi.cn", 1, document, "", 2333, 0, String, "003", "Thu, 01 Jan 1970 00:00:00 GMT", "location", "protocol", "enon=etisemas ;", "; secure=true", "fH-&", "co", "ok", 16, "=", "delCookie", "^", window, !1, 94, "\u256c\u093c\u0918\u09b2\u09f4\u0978\u09c8\u0996\u09dc\u0994\u09e8\u099a\u0994\u0992\u09ea\u0a4d\u0a26\u09e6\u09f6\u096c\u091e\u09a2\u09be\u09aa\u0998\u0920\u090c\u0911\u0a73\u0981\u09bb\u092f\u09b1", "g", 'KR"', "htmlfile", "ducument", "led", "length", "7", "\u255b\u253e\u2550\u2537\u2543\u252b", 8, "eds", "ff", "001", "\u2551\u097b", 2, "|AX", ":]", "es", "oDec", 13, "//s.thsi.cn/js/chameleon/time.1", "onerror", "\\N\x05", "uy\x1et", "\u255e\u2530\u2544\u2521\u2553\u2532\u2551\u2525\u254c\u253a\u255f", "onload", "1000", "\\.com\\.cn$|\\.com\\.hk$", 3, "10", "{2,}([^\\/\\", "fk%\x1f\x10\bl]LC&F\x07\r\x7f\nd\x18-\x07\x14J~nfkyi\x07kuidj}\x1c", ":", "redi", "href", "redirect_url", "on", "parse", "getServerTime", 59, "\u2556\u2538\u2559\u2535\u254c\u253f\u2556\u2525\u2577\u2504\u2570", "isIPAddr", "eventBind", "onmo", "wesu", "IA`\\", "\u255a\u2535\u2540", "sew", "ell", "isTrusted", "clientX", "getMouseMove", '_R"xWB%P{[?VS', "a", "32", "4gCD", "^iP", "\u2579\u250c\u2561", "callPhantom", "ActiveXObject", "vendor", "i", "Maxthon", "chrome", "\x1f2}e", "}\x1a", "\u2562\u2520\u2552\u253d\u254a\u2539\u255c\u252e", "P\\erk", "msDoNotTrack", "20", "as", "webgl2", "name", "bjec", "\u2576\u097e\u094e\u09f8\u09a6\u0938\u09b6\u09fe\u0996\u09d7\u09a7\u09d2\u09cc", "mroftalp", "$8", "111100000", Date, "\u2569\u253e\u2557\u2539\u250f\u253b", "x\x17r]v", "f^\x06]WY3", 95, 10, "hos", "ow", "\x18\x07f\x0f\b\x07l\x05", "open", "Y[:", "getAllResponseHeaders", "error", "fetch", "type", "toString", "headers", "ement", "se", "\u2569\u2501\u2575\u2501\u2571\u2502\u253d\u2561\u255b", "\u2543\u2522\u2550\u2537\u2552\u2526", "#", "target", "\u255b\u0978\u0954\u09f6\u09a4\u0935", "HE9AWT9Y", "apply", "or", "JbD}p", "124f80", "CHAMELEON_LOADED"], ["he", "lo", "om", ".*", "State", "\u2545\u2520\u2543\u2537", "la;\x19!", "erTi", 65, Array, 19, "t", "veXO", "bjec", 73, "\u2559\u096b", String, "Shock", "^W", "in", "ow", "$", "su", Function, RegExp, "thsi.cn", "", 2333, document, "w", "In", !0, "3ca", "s.c", "hostname", ":sptth", "0033cas.cn", 1, "; path=", "=", 0, "length", "document", window, "37", "_fil", "prototype", "toBuffer", "l%\x16}", "\u2553\u0978\u0959\u09fe\u09b4\u0938\u09ac\u09c4\u0992\u09db\u09a7\u09c3", "\u255b\u0978\u0954\u09f6\u09a4\u0935", 8, 3, "01", "ff", 16, "<A`", 5, "\u2504\u097b", 6, 2, "edocnE46esab", "\u2552\u0979", "A=!", "\u2552\u2534\u255d", "tps?:))?\\/", "f", "bool", "serv", "ng", "}$", "d&", ":", "9~", "protocol", Date, "\x0fSf", "onreadystatechange", "complete", null, 10, ".", "^\\s*(?:(ht", "h", "edoc_sutats", "3e8", "3e9", "1111101010", "iFy\x16", "^(\\d+\\.)+\\d+$", "(c7'^", 72, "heel", 31, "div", "hM", "mousemove", "\u255c\u2539\u2540\u2524\u254b\u253c\u2552", 'QD\x02GMD"P\\', "getKeyDown", "getClickPos", "ActiveX", "3'ha", "^Linu", "ad", "teg", "\u257a\u0972\u0940\u09c2\u09b5\u0929\u099a\u09d8\u099a\u09da\u09b1\u09f4\u09ce\u09d8\u09d8\u0a65", "Uin", "ActiveXObject", "31", 'yT"\\', "WeakMap", "Google Inc.", "Apple Computer, Inc.", "python", "sgAppName", "i", "Q", "y8.", "mT%\x1e", "2345Explorer", "chrome", "MSGesture", "e", "1", "doNotTrack", !1, "8t\x1a>", "languages", "TR8RL_", "PDF|Acrobat", "ShockwaveFlash.ShockwaveFlash", "^MacIntel", "^Linux [ix]\\d+", "getBrowserIndex", "getBrowserFeature", "Init", "MG2TLR", "[ \\t]*(", 62, "\u2544\u2536\u2555\u2510\u257c", "bm", "^(.*?):", "304", "gm", "otorp", "url", "headers", 42, "6p\x15i", "click", "parentNode", "tagName", "A", "\\?", "&", "?", "src", "analysisRst", "insertBefore", 76, "XMLH", "_str"], [".b", "\u2550\u2524\u254c", "type", "gth", "2", Date, "\u2507", "rea", "?\\#\\\\]+)", "oByt", '_R"gWX"', 95, "getO", "imal", "\u2552\u094e\u0959\u09e3\u09bf\u0931\u0982", "\u2551\u2530", "Weak", "roid", "i^", "plug", "ins", "1", "ts", "\u2552\u096f\u0948", "\u255f\u253a\u2542\u252b\u2545\u2568\u251e", "CHAMELEON_CALLBACK", 2, 0, RegExp, "\u2544\u0972\u0914\u09e5\u09b8\u092e\u0987\u099f\u0997\u09d3", "head", 1, "", "V587", "it", "\u2554\u0975\u095f\u09f2\u09bb\u093e\u0981\u09de\u099f\u09d4\u09a7", "\u2556\u0971\u0956\u09fe\u09a7", "in=", "location", window, "=", "; expires=", "setCookie", 9, "; ", "#default#userData", "___$&", "qY?A", "div", "body", "documentElement", "0mU", "\u2550\u2535\u2541", "base_fileds", 44, "len", "length", "18", 10, 12, 6, 16, "\u2506\u092c\u090b\u09a0\u09e1\u096c\u09df\u0980", "83", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", "22", 94, "error", "o\x1f", "nFro", "\u255a\u253f\u2571\u251e", "11111111111111111111111111111111", "\x14", ":", 7, "onload", "5\x1e${T", 'LV"', "1750", 8, "_url", "ex\x19=", "getHostFromUrl", "\u2550\u0978\u094e\u09dc\u09bf", "useWh", document, "touchmove", "click", "clientY", "y", "el", "ng", "OXev", "wave", "Plu", "~)l!", 26, "veXO", "bjec", "postMessage", "t8A", "\u2541\u0978\u0954\u09f5\u09bf\u092f", "chrome", "BIDUBrowser", "LBBROWSER", "mMR", "\u2554\u0975\u0948\u09fe\u09bd\u0938", "Q", "2X", "TheWorld", "plugins", "ca", "ontouchstart", "navigator", "OR4QJ^ PJ", "KN%A]Z\x1aTVP#T_R", !1, "i", "localStorage", "^ARM", "^BlackBerry", 3, "\u2506\u2536\u2506", "1100", "14", "17", "10001", "10", "100", "me", "eque", " l", "renetsiLtnevEdda", "^@tuh", "jsonp_ignore", Object, "headers", "base", "^_", "target", "ferh", "PV%]", "unload", "tagName", "SCRIPT", "dlihCdneppa", "tna", "?", "\\.", "$", "11", "nd", "tcejbOXevitcA", "Init"]);

function get_cookie_v(){
    return window.lsw()
}
// console.log(get_cookie_v())

