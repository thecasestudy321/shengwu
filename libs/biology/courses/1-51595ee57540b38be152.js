function getHtmlDocName() {
    var str = window.location.href;
    str = str.substring(str.lastIndexOf("/") + 1);
    str = str.substring(0, str.lastIndexOf("."));
    return "sourceid="+str;
}
!function(e) {
    function t(n) {
        if (i[n])
            return i[n].exports;
        var r = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, t),
        r.l = !0,
        r.exports
    }
    var n = window.webpackJsonp;
    window.webpackJsonp = function(t, i, a) {
        for (var o, s, c = 0, f = []; c < t.length; c++)
            s = t[c],
            r[s] && f.push(r[s][0]),
            r[s] = 0;
        for (o in i)
            Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
        for (n && n(t, i, a); f.length; )
            f.shift()()
    }
    ;
    var i = {}
      , r = {
        157: 0
    };
    t.e = function(e) {
        function n() {
            s.onerror = s.onload = null,
            clearTimeout(c);
            var t = r[e];
            0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")),
            r[e] = void 0)
        }
        var i = r[e];
        if (0 === i)
            return new Promise(function(e) {
                e()
            }
            );
        if (i)
            return i[2];
        var a = new Promise(function(t, n) {
            i = r[e] = [t, n]
        }
        );
        i[2] = a;
        var o = document.getElementsByTagName("head")[0]
          , s = document.createElement("script");
        s.type = "text/javascript",
        s.charset = "utf-8",
        s.async = !0,
        s.timeout = 12e4,
        t.nc && s.setAttribute("nonce", t.nc),
        s.src = t.p + "courses/" + e + "-" + {
            0: "49b1f8809e4e492872bd",
            1: "636f53ff0ad8652cfaeb",
            2: "87a238fed2e9c868b15b",
            3: "239a95e1372c0e8f97b4",
            4: "56a011b9fbb69d5cc717",
            5: "352032748f1ddfe1396b",
            6: "0c2dad227dcdcfa577d5",
            7: "7ff0338ada75eb4079e2",
            8: "a9a58ee9a032140d2403",
            9: "004b6089b40bf060d914",
            10: "28f6a95286d57223e4f8",
            11: "5e584206a95db09c260e",
            12: "0b94d567faa2ec5e2efc",
            13: "596ef7de38a9cfd0e66c",
            14: "361dafa8ae6a5998b92c",
            15: "5029778ad53de8f4996c",
            16: "6990104d9b3419198a6c",
            17: "2d813634f1f7ad849ad4",
            18: "1e5ac8eb2cc46cc0eba6",
            19: "2852043d053a50217d46",
            20: "e57f88f7f2b8fd6b7045",
            21: "40811e14f1661152822a",
            22: "d30f3ca8f872e93517c3",
            23: "f7c986f709bcdad752e8",
            24: "4a95c3926867b7ed9514",
            25: "8b4c2e74764801e9364d",
            26: "b7ffea40d02a3ac51afe",
            27: "fd15bab38779ee531707",
            28: "e06878c75e3d824f4789",
            29: "6a6313207264a49cd33a",
            30: "0d3e58140de2775ce12e",
            31: "92ab60e53b0b15d5d7a8",
            32: "51d94edf0eddcdf18731",
            33: "03d4856275a3d9b654b4",
            34: "60d10f45c6c0934b9723",
            35: "f099e7dfe00628cade0f",
            36: "a7958ce3ad1d717a7377",
            37: "2a6c732594159e8028ec",
            38: "888cc4565d0be1dcd263",
            39: "f250c8b7ebdfee33d46c",
            40: "5304a22cb359e8bc8c3b",
            41: "5fda060afc6e1df9915b",
            42: "205733683ff5714ba657",
            43: "08c5bb844fafa5d70ccb",
            44: "89b8d43b44fec44525a8",
            45: "eab3904ade5da6dd0c83",
            46: "afcaf7d3299a18703bad",
            47: "9912ffbb088e827ab5d3",
            48: "4895db69435d6ab79412",
            49: "ed448def0b84b76cd0a7",
            50: "ac947ef337d04656162f",
            51: "7519f05e09b043c9ebaf",
            52: "93df5a2b00403617df70",
            53: "685566b3a3dfbeb698bc",
            54: "45c71605dff8b6e16129",
            55: "70582c2793e5400a1291",
            56: "6fe3a2f9b15a4f1ebb30",
            57: "0c3d5ee4f241aa1fc740",
            58: "8d451a05a084f4161f30",
            59: "0af72dedc23b84b63a9c",
            60: "24d3fed244875eef9add",
            61: "fa57d4f6a467e5364cb1",
            62: "be00df02fce579ffed2a",
            63: "acd40411988828c4b168",
            64: "ae0d2cff824d68e80d48",
            65: "a85c988780e0bcee528f",
            66: "99356f87f750c2209b23",
            67: "bd6719ba1352f5878698",
            68: "908b24cfb02a8709a7f0",
            69: "0b2bfd5b4194e590b0ab",
            70: "66452bb2e8a3fb0d0d41",
            71: "bdf4a5452c8cef6715fb",
            72: "4943f525a04aae91d6e7",
            73: "a6968db9af34bdfbf175",
            74: "d274ddbbab5f83f80731",
            75: "6207406e7f7aaa90df75",
            76: "a32e201b9c42e7fa19c0",
            77: "8b2b6352524c89addb85",
            78: "40cd17b1ebdb9cb53fba",
            79: "5bcdadcfacc338749677",
            80: "a36ebb8bb66067268723",
            81: "270042029ed7486a815c",
            82: "93eb0fb4f7a57e122c4d",
            83: "0cb53fd8ac97668eba7f",
            84: "645747c16d21fee63914",
            85: "460fc74f040065ab41e4",
            86: "eadda2efd94457fb60f2",
            87: "f390d8e20eb043285bd1",
            88: "7715b7a91609c8e82e5d",
            89: "c54b37a6eba3730136fa",
            90: "bb96ad35b6e3c4e10090",
            91: "ad6572c0e0df45549b02",
            92: "3d49c7532294b75db367",
            93: "8dbad3797e03e5fbe72f",
            94: "ac2e4d5d15c61618b368",
            95: "028aa9a0663bfac9f320",
            96: "164f4ab6306daa879618",
            97: "88dd33e2a38d3dfcd8a4",
            98: "a6f83d48b5239547fa72",
            99: "be1d64233fa119291973",
            100: "2158013f9b855f181daa",
            101: "bee2b0e6e4f388b47f79",
            102: "72359d8182ac33729b4b",
            103: "6d415081408d30cb6d7a",
            104: "3778a54c45a4b938ff4d",
            105: "393d92c0495b06b7d3c4",
            106: "4fd8fc9e257016e17e55",
            107: "b1113a83027a4da02fdc",
            108: "bbd87942f933785615f0",
            109: "2d51c8671e3eb711bf94",
            110: "4127f8018252f05326aa",
            111: "f16e0d6508560c802a10",
            112: "e57528e1b0a3d5477bac",
            113: "bb26be455379abb71a70",
            114: "9fd6c4518e617f519452",
            115: "1a12e6314b4fbddaa402",
            116: "df710b1c3eb3abaefc02",
            117: "9b0b2225ccd302bcc272",
            118: "fc3c67b4a9a3c76998d8",
            119: "5bbada78d8eeec950f63",
            120: "7561be45a377bcf8043b",
            121: "d8f49f30d399f32f28ee",
            122: "a676ebe73c5cc8f38942",
            123: "00226f56594a8c6cd474",
            124: "b354ac7d3c4a557b62f8",
            125: "8db02b53b71d62548a82",
            126: "5d76b32f7d0536ad7be1",
            127: "12e167ef0cf2bd016264",
            128: "761d0287c441c72d1e55",
            129: "4b83dc1418e911aea828",
            130: "a612e0d34bffbd2d1660",
            131: "97e6eb582f5e3e8a5811",
            132: "3900ef4f6440f20f4e86",
            133: "afe259f119225d9c63db",
            134: "e322130ea002666c15d7",
            135: "f5d7cc39ab5b0fe529c9",
            136: "884801c9e5cf82051b2e",
            137: "4f50dc66a5600001738d",
            138: "fc957045469d7eabd6c3",
            139: "e9a71d1d7dde93876d8a",
            140: "fc0b14c8d705d00e9f5e",
            141: "2a3901c774ca39432f51",
            142: "28eec65327fc2e682190",
            143: "0409ba234f9d60dc4eae",
            144: "bba2f89824e8e6998829",
            145: "c3f611df0cb4295f89de",
            146: "19a9cb2235da7d990427",
            147: "ca7ec3698d8476ce89ff",
            148: "36d799205dcf247929f6",
            149: "25abd29357537464bb66",
            150: "2f53a16160e3e16e7b77",
            151: "c93067486c813cd1abda",
            152: "3bd1203acf39b0338901",
            153: "6d7e04f82bfc22051221",
            154: "78d31dd785e8075b73f8",
            155: "d5a992b113fc54e04498"
        }[e] + ".js";
        var c = setTimeout(n, 12e4);
        return s.onerror = s.onload = n,
        o.appendChild(s),
        a
    }
    ,
    t.m = e,
    t.c = i,
    t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "",
    t.oe = function(e) {
        throw console.error(e),
        e
    }
    ,
    t(t.s = 521)
}([, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        e.super_ = t,
        e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    }
    : e.exports = function(e, t) {
        e.super_ = t;
        var n = function() {};
        n.prototype = t.prototype,
        e.prototype = new n,
        e.prototype.constructor = e
    }
}
, function(e, t, n) {
    function i(e, t) {
        for (var n in e)
            t[n] = e[n]
    }
    function r(e, t, n) {
        return o(e, t, n)
    }
    var a = n(4)
      , o = a.Buffer;
    o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? e.exports = a : (i(a, t),
    t.Buffer = r),
    i(o, r),
    r.from = function(e, t, n) {
        if ("number" == typeof e)
            throw new TypeError("Argument must not be a number");
        return o(e, t, n)
    }
    ,
    r.alloc = function(e, t, n) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        var i = o(e);
        return void 0 !== t ? "string" == typeof n ? i.fill(t, n) : i.fill(t) : i.fill(0),
        i
    }
    ,
    r.allocUnsafe = function(e) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        return o(e)
    }
    ,
    r.allocUnsafeSlow = function(e) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        return a.SlowBuffer(e)
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i() {
            return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function r(e, t) {
            if (i() < t)
                throw new RangeError("Invalid typed array length");
            return a.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t),
            e.__proto__ = a.prototype) : (null === e && (e = new a(t)),
            e.length = t),
            e
        }
        function a(e, t, n) {
            if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a))
                return new a(e,t,n);
            if ("number" == typeof e) {
                if ("string" == typeof t)
                    throw new Error("If encoding is specified then the first argument must be a string");
                return f(this, e)
            }
            return o(this, e, t, n)
        }
        function o(e, t, n, i) {
            if ("number" == typeof t)
                throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? d(e, t, n, i) : "string" == typeof t ? h(e, t, n) : l(e, t)
        }
        function s(e) {
            if ("number" != typeof e)
                throw new TypeError('"size" argument must be a number');
            if (e < 0)
                throw new RangeError('"size" argument must not be negative')
        }
        function c(e, t, n, i) {
            return s(t),
            t <= 0 ? r(e, t) : void 0 !== n ? "string" == typeof i ? r(e, t).fill(n, i) : r(e, t).fill(n) : r(e, t)
        }
        function f(e, t) {
            if (s(t),
            e = r(e, t < 0 ? 0 : 0 | p(t)),
            !a.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < t; ++n)
                    e[n] = 0;
            return e
        }
        function h(e, t, n) {
            if ("string" == typeof n && "" !== n || (n = "utf8"),
            !a.isEncoding(n))
                throw new TypeError('"encoding" must be a valid string encoding');
            var i = 0 | v(t, n);
            e = r(e, i);
            var o = e.write(t, n);
            return o !== i && (e = e.slice(0, o)),
            e
        }
        function u(e, t) {
            var n = t.length < 0 ? 0 : 0 | p(t.length);
            e = r(e, n);
            for (var i = 0; i < n; i += 1)
                e[i] = 255 & t[i];
            return e
        }
        function d(e, t, n, i) {
            if (t.byteLength,
            n < 0 || t.byteLength < n)
                throw new RangeError("'offset' is out of bounds");
            if (t.byteLength < n + (i || 0))
                throw new RangeError("'length' is out of bounds");
            return t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t,n) : new Uint8Array(t,n,i),
            a.TYPED_ARRAY_SUPPORT ? (e = t,
            e.__proto__ = a.prototype) : e = u(e, t),
            e
        }
        function l(e, t) {
            if (a.isBuffer(t)) {
                var n = 0 | p(t.length);
                return e = r(e, n),
                0 === e.length ? e : (t.copy(e, 0, 0, n),
                e)
            }
            if (t) {
                if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                    return "number" != typeof t.length || W(t.length) ? r(e, 0) : u(e, t);
                if ("Buffer" === t.type && J(t.data))
                    return u(e, t.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }
        function p(e) {
            if (e >= i())
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
            return 0 | e
        }
        function b(e) {
            return +e != e && (e = 0),
            a.alloc(+e)
        }
        function v(e, t) {
            if (a.isBuffer(e))
                return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var n = e.length;
            if (0 === n)
                return 0;
            for (var i = !1; ; )
                switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return Z(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return H(e).length;
                default:
                    if (i)
                        return Z(e).length;
                    t = ("" + t).toLowerCase(),
                    i = !0
                }
        }
        function y(e, t, n) {
            var i = !1;
            if ((void 0 === t || t < 0) && (t = 0),
            t > this.length)
                return "";
            if ((void 0 === n || n > this.length) && (n = this.length),
            n <= 0)
                return "";
            if (n >>>= 0,
            t >>>= 0,
            n <= t)
                return "";
            for (e || (e = "utf8"); ; )
                switch (e) {
                case "hex":
                    return T(this, t, n);
                case "utf8":
                case "utf-8":
                    return B(this, t, n);
                case "ascii":
                    return P(this, t, n);
                case "latin1":
                case "binary":
                    return C(this, t, n);
                case "base64":
                    return k(this, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return I(this, t, n);
                default:
                    if (i)
                        throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(),
                    i = !0
                }
        }
        function m(e, t, n) {
            var i = e[t];
            e[t] = e[n],
            e[n] = i
        }
        function g(e, t, n, i, r) {
            if (0 === e.length)
                return -1;
            if ("string" == typeof n ? (i = n,
            n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
            n = +n,
            isNaN(n) && (n = r ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length) {
                if (r)
                    return -1;
                n = e.length - 1
            } else if (n < 0) {
                if (!r)
                    return -1;
                n = 0
            }
            if ("string" == typeof t && (t = a.from(t, i)),
            a.isBuffer(t))
                return 0 === t.length ? -1 : w(e, t, n, i, r);
            if ("number" == typeof t)
                return t &= 255,
                a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : w(e, [t], n, i, r);
            throw new TypeError("val must be string, number or Buffer")
        }
        function w(e, t, n, i, r) {
            function a(e, t) {
                return 1 === o ? e[t] : e.readUInt16BE(t * o)
            }
            var o = 1
              , s = e.length
              , c = t.length;
            if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                if (e.length < 2 || t.length < 2)
                    return -1;
                o = 2,
                s /= 2,
                c /= 2,
                n /= 2
            }
            var f;
            if (r) {
                var h = -1;
                for (f = n; f < s; f++)
                    if (a(e, f) === a(t, -1 === h ? 0 : f - h)) {
                        if (-1 === h && (h = f),
                        f - h + 1 === c)
                            return h * o
                    } else
                        -1 !== h && (f -= f - h),
                        h = -1
            } else
                for (n + c > s && (n = s - c),
                f = n; f >= 0; f--) {
                    for (var u = !0, d = 0; d < c; d++)
                        if (a(e, f + d) !== a(t, d)) {
                            u = !1;
                            break
                        }
                    if (u)
                        return f
                }
            return -1
        }
        function _(e, t, n, i) {
            n = Number(n) || 0;
            var r = e.length - n;
            i ? (i = Number(i)) > r && (i = r) : i = r;
            var a = t.length;
            if (a % 2 != 0)
                throw new TypeError("Invalid hex string");
            i > a / 2 && (i = a / 2);
            for (var o = 0; o < i; ++o) {
                var s = parseInt(t.substr(2 * o, 2), 16);
                if (isNaN(s))
                    return o;
                e[n + o] = s
            }
            return o
        }
        function A(e, t, n, i) {
            return K(Z(t, e.length - n), e, n, i)
        }
        function M(e, t, n, i) {
            return K(q(t), e, n, i)
        }
        function E(e, t, n, i) {
            return M(e, t, n, i)
        }
        function S(e, t, n, i) {
            return K(H(t), e, n, i)
        }
        function x(e, t, n, i) {
            return K(V(t, e.length - n), e, n, i)
        }
        function k(e, t, n) {
            return 0 === t && n === e.length ? G.fromByteArray(e) : G.fromByteArray(e.slice(t, n))
        }
        function B(e, t, n) {
            n = Math.min(e.length, n);
            for (var i = [], r = t; r < n; ) {
                var a = e[r]
                  , o = null
                  , s = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
                if (r + s <= n) {
                    var c, f, h, u;
                    switch (s) {
                    case 1:
                        a < 128 && (o = a);
                        break;
                    case 2:
                        c = e[r + 1],
                        128 == (192 & c) && (u = (31 & a) << 6 | 63 & c) > 127 && (o = u);
                        break;
                    case 3:
                        c = e[r + 1],
                        f = e[r + 2],
                        128 == (192 & c) && 128 == (192 & f) && (u = (15 & a) << 12 | (63 & c) << 6 | 63 & f) > 2047 && (u < 55296 || u > 57343) && (o = u);
                        break;
                    case 4:
                        c = e[r + 1],
                        f = e[r + 2],
                        h = e[r + 3],
                        128 == (192 & c) && 128 == (192 & f) && 128 == (192 & h) && (u = (15 & a) << 18 | (63 & c) << 12 | (63 & f) << 6 | 63 & h) > 65535 && u < 1114112 && (o = u)
                    }
                }
                null === o ? (o = 65533,
                s = 1) : o > 65535 && (o -= 65536,
                i.push(o >>> 10 & 1023 | 55296),
                o = 56320 | 1023 & o),
                i.push(o),
                r += s
            }
            return O(i)
        }
        function O(e) {
            var t = e.length;
            if (t <= Q)
                return String.fromCharCode.apply(String, e);
            for (var n = "", i = 0; i < t; )
                n += String.fromCharCode.apply(String, e.slice(i, i += Q));
            return n
        }
        function P(e, t, n) {
            var i = "";
            n = Math.min(e.length, n);
            for (var r = t; r < n; ++r)
                i += String.fromCharCode(127 & e[r]);
            return i
        }
        function C(e, t, n) {
            var i = "";
            n = Math.min(e.length, n);
            for (var r = t; r < n; ++r)
                i += String.fromCharCode(e[r]);
            return i
        }
        function T(e, t, n) {
            var i = e.length;
            (!t || t < 0) && (t = 0),
            (!n || n < 0 || n > i) && (n = i);
            for (var r = "", a = t; a < n; ++a)
                r += F(e[a]);
            return r
        }
        function I(e, t, n) {
            for (var i = e.slice(t, n), r = "", a = 0; a < i.length; a += 2)
                r += String.fromCharCode(i[a] + 256 * i[a + 1]);
            return r
        }
        function R(e, t, n) {
            if (e % 1 != 0 || e < 0)
                throw new RangeError("offset is not uint");
            if (e + t > n)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function L(e, t, n, i, r, o) {
            if (!a.isBuffer(e))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > r || t < o)
                throw new RangeError('"value" argument is out of bounds');
            if (n + i > e.length)
                throw new RangeError("Index out of range")
        }
        function N(e, t, n, i) {
            t < 0 && (t = 65535 + t + 1);
            for (var r = 0, a = Math.min(e.length - n, 2); r < a; ++r)
                e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
        }
        function j(e, t, n, i) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var r = 0, a = Math.min(e.length - n, 4); r < a; ++r)
                e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255
        }
        function Y(e, t, n, i, r, a) {
            if (n + i > e.length)
                throw new RangeError("Index out of range");
            if (n < 0)
                throw new RangeError("Index out of range")
        }
        function D(e, t, n, i, r) {
            return r || Y(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38),
            $.write(e, t, n, i, 23, 4),
            n + 4
        }
        function z(e, t, n, i, r) {
            return r || Y(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308),
            $.write(e, t, n, i, 52, 8),
            n + 8
        }
        function X(e) {
            if (e = U(e).replace(ee, ""),
            e.length < 2)
                return "";
            for (; e.length % 4 != 0; )
                e += "=";
            return e
        }
        function U(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
        }
        function F(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }
        function Z(e, t) {
            t = t || 1 / 0;
            for (var n, i = e.length, r = null, a = [], o = 0; o < i; ++o) {
                if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
                    if (!r) {
                        if (n > 56319) {
                            (t -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        }
                        if (o + 1 === i) {
                            (t -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        }
                        r = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && a.push(239, 191, 189),
                        r = n;
                        continue
                    }
                    n = 65536 + (r - 55296 << 10 | n - 56320)
                } else
                    r && (t -= 3) > -1 && a.push(239, 191, 189);
                if (r = null,
                n < 128) {
                    if ((t -= 1) < 0)
                        break;
                    a.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0)
                        break;
                    a.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0)
                        break;
                    a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112))
                        throw new Error("Invalid code point");
                    if ((t -= 4) < 0)
                        break;
                    a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return a
        }
        function q(e) {
            for (var t = [], n = 0; n < e.length; ++n)
                t.push(255 & e.charCodeAt(n));
            return t
        }
        function V(e, t) {
            for (var n, i, r, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o)
                n = e.charCodeAt(o),
                i = n >> 8,
                r = n % 256,
                a.push(r),
                a.push(i);
            return a
        }
        function H(e) {
            return G.toByteArray(X(e))
        }
        function K(e, t, n, i) {
            for (var r = 0; r < i && !(r + n >= t.length || r >= e.length); ++r)
                t[r + n] = e[r];
            return r
        }
        function W(e) {
            return e !== e
        }
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
        var G = n(77)
          , $ = n(78)
          , J = n(43);
        t.Buffer = a,
        t.SlowBuffer = b,
        t.INSPECT_MAX_BYTES = 50,
        a.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                },
                42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(),
        t.kMaxLength = i(),
        a.poolSize = 8192,
        a._augment = function(e) {
            return e.__proto__ = a.prototype,
            e
        }
        ,
        a.from = function(e, t, n) {
            return o(null, e, t, n)
        }
        ,
        a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype,
        a.__proto__ = Uint8Array,
        "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
            value: null,
            configurable: !0
        })),
        a.alloc = function(e, t, n) {
            return c(null, e, t, n)
        }
        ,
        a.allocUnsafe = function(e) {
            return f(null, e)
        }
        ,
        a.allocUnsafeSlow = function(e) {
            return f(null, e)
        }
        ,
        a.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }
        ,
        a.compare = function(e, t) {
            if (!a.isBuffer(e) || !a.isBuffer(t))
                throw new TypeError("Arguments must be Buffers");
            if (e === t)
                return 0;
            for (var n = e.length, i = t.length, r = 0, o = Math.min(n, i); r < o; ++r)
                if (e[r] !== t[r]) {
                    n = e[r],
                    i = t[r];
                    break
                }
            return n < i ? -1 : i < n ? 1 : 0
        }
        ,
        a.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        a.concat = function(e, t) {
            if (!J(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length)
                return a.alloc(0);
            var n;
            if (void 0 === t)
                for (t = 0,
                n = 0; n < e.length; ++n)
                    t += e[n].length;
            var i = a.allocUnsafe(t)
              , r = 0;
            for (n = 0; n < e.length; ++n) {
                var o = e[n];
                if (!a.isBuffer(o))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                o.copy(i, r),
                r += o.length
            }
            return i
        }
        ,
        a.byteLength = v,
        a.prototype._isBuffer = !0,
        a.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2)
                m(this, t, t + 1);
            return this
        }
        ,
        a.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
                m(this, t, t + 3),
                m(this, t + 1, t + 2);
            return this
        }
        ,
        a.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
                m(this, t, t + 7),
                m(this, t + 1, t + 6),
                m(this, t + 2, t + 5),
                m(this, t + 3, t + 4);
            return this
        }
        ,
        a.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? B(this, 0, e) : y.apply(this, arguments)
        }
        ,
        a.prototype.equals = function(e) {
            if (!a.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === a.compare(this, e)
        }
        ,
        a.prototype.inspect = function() {
            var e = ""
              , n = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
            this.length > n && (e += " ... ")),
            "<Buffer " + e + ">"
        }
        ,
        a.prototype.compare = function(e, t, n, i, r) {
            if (!a.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === i && (i = 0),
            void 0 === r && (r = this.length),
            t < 0 || n > e.length || i < 0 || r > this.length)
                throw new RangeError("out of range index");
            if (i >= r && t >= n)
                return 0;
            if (i >= r)
                return -1;
            if (t >= n)
                return 1;
            if (t >>>= 0,
            n >>>= 0,
            i >>>= 0,
            r >>>= 0,
            this === e)
                return 0;
            for (var o = r - i, s = n - t, c = Math.min(o, s), f = this.slice(i, r), h = e.slice(t, n), u = 0; u < c; ++u)
                if (f[u] !== h[u]) {
                    o = f[u],
                    s = h[u];
                    break
                }
            return o < s ? -1 : s < o ? 1 : 0
        }
        ,
        a.prototype.includes = function(e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }
        ,
        a.prototype.indexOf = function(e, t, n) {
            return g(this, e, t, n, !0)
        }
        ,
        a.prototype.lastIndexOf = function(e, t, n) {
            return g(this, e, t, n, !1)
        }
        ,
        a.prototype.write = function(e, t, n, i) {
            if (void 0 === t)
                i = "utf8",
                n = this.length,
                t = 0;
            else if (void 0 === n && "string" == typeof t)
                i = t,
                n = this.length,
                t = 0;
            else {
                if (!isFinite(t))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0,
                isFinite(n) ? (n |= 0,
                void 0 === i && (i = "utf8")) : (i = n,
                n = void 0)
            }
            var r = this.length - t;
            if ((void 0 === n || n > r) && (n = r),
            e.length > 0 && (n < 0 || t < 0) || t > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            i || (i = "utf8");
            for (var a = !1; ; )
                switch (i) {
                case "hex":
                    return _(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return A(this, e, t, n);
                case "ascii":
                    return M(this, e, t, n);
                case "latin1":
                case "binary":
                    return E(this, e, t, n);
                case "base64":
                    return S(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return x(this, e, t, n);
                default:
                    if (a)
                        throw new TypeError("Unknown encoding: " + i);
                    i = ("" + i).toLowerCase(),
                    a = !0
                }
        }
        ,
        a.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        var Q = 4096;
        a.prototype.slice = function(e, t) {
            var n = this.length;
            e = ~~e,
            t = void 0 === t ? n : ~~t,
            e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            t < e && (t = e);
            var i;
            if (a.TYPED_ARRAY_SUPPORT)
                i = this.subarray(e, t),
                i.__proto__ = a.prototype;
            else {
                var r = t - e;
                i = new a(r,void 0);
                for (var o = 0; o < r; ++o)
                    i[o] = this[o + e]
            }
            return i
        }
        ,
        a.prototype.readUIntLE = function(e, t, n) {
            e |= 0,
            t |= 0,
            n || R(e, t, this.length);
            for (var i = this[e], r = 1, a = 0; ++a < t && (r *= 256); )
                i += this[e + a] * r;
            return i
        }
        ,
        a.prototype.readUIntBE = function(e, t, n) {
            e |= 0,
            t |= 0,
            n || R(e, t, this.length);
            for (var i = this[e + --t], r = 1; t > 0 && (r *= 256); )
                i += this[e + --t] * r;
            return i
        }
        ,
        a.prototype.readUInt8 = function(e, t) {
            return t || R(e, 1, this.length),
            this[e]
        }
        ,
        a.prototype.readUInt16LE = function(e, t) {
            return t || R(e, 2, this.length),
            this[e] | this[e + 1] << 8
        }
        ,
        a.prototype.readUInt16BE = function(e, t) {
            return t || R(e, 2, this.length),
            this[e] << 8 | this[e + 1]
        }
        ,
        a.prototype.readUInt32LE = function(e, t) {
            return t || R(e, 4, this.length),
            (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }
        ,
        a.prototype.readUInt32BE = function(e, t) {
            return t || R(e, 4, this.length),
            16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ,
        a.prototype.readIntLE = function(e, t, n) {
            e |= 0,
            t |= 0,
            n || R(e, t, this.length);
            for (var i = this[e], r = 1, a = 0; ++a < t && (r *= 256); )
                i += this[e + a] * r;
            return r *= 128,
            i >= r && (i -= Math.pow(2, 8 * t)),
            i
        }
        ,
        a.prototype.readIntBE = function(e, t, n) {
            e |= 0,
            t |= 0,
            n || R(e, t, this.length);
            for (var i = t, r = 1, a = this[e + --i]; i > 0 && (r *= 256); )
                a += this[e + --i] * r;
            return r *= 128,
            a >= r && (a -= Math.pow(2, 8 * t)),
            a
        }
        ,
        a.prototype.readInt8 = function(e, t) {
            return t || R(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }
        ,
        a.prototype.readInt16LE = function(e, t) {
            t || R(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }
        ,
        a.prototype.readInt16BE = function(e, t) {
            t || R(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }
        ,
        a.prototype.readInt32LE = function(e, t) {
            return t || R(e, 4, this.length),
            this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ,
        a.prototype.readInt32BE = function(e, t) {
            return t || R(e, 4, this.length),
            this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ,
        a.prototype.readFloatLE = function(e, t) {
            return t || R(e, 4, this.length),
            $.read(this, e, !0, 23, 4)
        }
        ,
        a.prototype.readFloatBE = function(e, t) {
            return t || R(e, 4, this.length),
            $.read(this, e, !1, 23, 4)
        }
        ,
        a.prototype.readDoubleLE = function(e, t) {
            return t || R(e, 8, this.length),
            $.read(this, e, !0, 52, 8)
        }
        ,
        a.prototype.readDoubleBE = function(e, t) {
            return t || R(e, 8, this.length),
            $.read(this, e, !1, 52, 8)
        }
        ,
        a.prototype.writeUIntLE = function(e, t, n, i) {
            if (e = +e,
            t |= 0,
            n |= 0,
            !i) {
                L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
            }
            var r = 1
              , a = 0;
            for (this[t] = 255 & e; ++a < n && (r *= 256); )
                this[t + a] = e / r & 255;
            return t + n
        }
        ,
        a.prototype.writeUIntBE = function(e, t, n, i) {
            if (e = +e,
            t |= 0,
            n |= 0,
            !i) {
                L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
            }
            var r = n - 1
              , a = 1;
            for (this[t + r] = 255 & e; --r >= 0 && (a *= 256); )
                this[t + r] = e / a & 255;
            return t + n
        }
        ,
        a.prototype.writeUInt8 = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || L(this, e, t, 1, 255, 0),
            a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            this[t] = 255 & e,
            t + 1
        }
        ,
        a.prototype.writeUInt16LE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || L(this, e, t, 2, 65535, 0),
            a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : N(this, e, t, !0),
            t + 2
        }
        ,
        a.prototype.writeUInt16BE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || L(this, e, t, 2, 65535, 0),
            a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : N(this, e, t, !1),
            t + 2
        }
        ,
        a.prototype.writeUInt32LE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || L(this, e, t, 4, 4294967295, 0),
            a.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
            this[t + 2] = e >>> 16,
            this[t + 1] = e >>> 8,
            this[t] = 255 & e) : j(this, e, t, !0),
            t + 4
        }
        ,
        a.prototype.writeUInt32BE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || L(this, e, t, 4, 4294967295, 0),
            a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : j(this, e, t, !1),
            t + 4
        }
        ,
        a.prototype.writeIntLE = function(e, t, n, i) {
            if (e = +e,
            t |= 0,
            !i) {
                var r = Math.pow(2, 8 * n - 1);
                L(this, e, t, n, r - 1, -r)
            }
            var a = 0
              , o = 1
              , s = 0;
            for (this[t] = 255 & e; ++a < n && (o *= 256); )
                e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1),
                this[t + a] = (e / o >> 0) - s & 255;
            return t + n
        }
        ,
        a.prototype.writeIntBE = function(e, t, n, i) {
            if (e = +e,
            t |= 0,
            !i) {
                var r = Math.pow(2, 8 * n - 1);
                L(this, e, t, n, r - 1, -r)
            }
            var a = n - 1
              , o = 1
              , s = 0;
            for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); )
                e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1),
                this[t + a] = (e / o >> 0) - s & 255;
            return t + n
        }
        ,
        a.prototype.writeInt8 = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || L(this, e, t, 1, 127, -128),
            a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            this[t] = 255 & e,
            t + 1
        }
        ,
        a.prototype.writeInt16LE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || L(this, e, t, 2, 32767, -32768),
            a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : N(this, e, t, !0),
            t + 2
        }
        ,
        a.prototype.writeInt16BE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || L(this, e, t, 2, 32767, -32768),
            a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : N(this, e, t, !1),
            t + 2
        }
        ,
        a.prototype.writeInt32LE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || L(this, e, t, 4, 2147483647, -2147483648),
            a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            this[t + 2] = e >>> 16,
            this[t + 3] = e >>> 24) : j(this, e, t, !0),
            t + 4
        }
        ,
        a.prototype.writeInt32BE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || L(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : j(this, e, t, !1),
            t + 4
        }
        ,
        a.prototype.writeFloatLE = function(e, t, n) {
            return D(this, e, t, !0, n)
        }
        ,
        a.prototype.writeFloatBE = function(e, t, n) {
            return D(this, e, t, !1, n)
        }
        ,
        a.prototype.writeDoubleLE = function(e, t, n) {
            return z(this, e, t, !0, n)
        }
        ,
        a.prototype.writeDoubleBE = function(e, t, n) {
            return z(this, e, t, !1, n)
        }
        ,
        a.prototype.copy = function(e, t, n, i) {
            if (n || (n = 0),
            i || 0 === i || (i = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            i > 0 && i < n && (i = n),
            i === n)
                return 0;
            if (0 === e.length || 0 === this.length)
                return 0;
            if (t < 0)
                throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
                throw new RangeError("sourceStart out of bounds");
            if (i < 0)
                throw new RangeError("sourceEnd out of bounds");
            i > this.length && (i = this.length),
            e.length - t < i - n && (i = e.length - t + n);
            var r, o = i - n;
            if (this === e && n < t && t < i)
                for (r = o - 1; r >= 0; --r)
                    e[r + t] = this[r + n];
            else if (o < 1e3 || !a.TYPED_ARRAY_SUPPORT)
                for (r = 0; r < o; ++r)
                    e[r + t] = this[r + n];
            else
                Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
            return o
        }
        ,
        a.prototype.fill = function(e, t, n, i) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (i = t,
                t = 0,
                n = this.length) : "string" == typeof n && (i = n,
                n = this.length),
                1 === e.length) {
                    var r = e.charCodeAt(0);
                    r < 256 && (e = r)
                }
                if (void 0 !== i && "string" != typeof i)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof i && !a.isEncoding(i))
                    throw new TypeError("Unknown encoding: " + i)
            } else
                "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n)
                throw new RangeError("Out of range index");
            if (n <= t)
                return this;
            t >>>= 0,
            n = void 0 === n ? this.length : n >>> 0,
            e || (e = 0);
            var o;
            if ("number" == typeof e)
                for (o = t; o < n; ++o)
                    this[o] = e;
            else {
                var s = a.isBuffer(e) ? e : Z(new a(e,i).toString())
                  , c = s.length;
                for (o = 0; o < n - t; ++o)
                    this[o + t] = s[o % c]
            }
            return this
        }
        ;
        var ee = /[^+\/0-9A-Za-z-_]/g
    }
    ).call(t, n(1))
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        event: {
            SCENE_CREATION_COMPLETE: "creationComplete",
            annotation: {
                CLICK_TIP: "event.annotation.clickTip"
            }
        },
        sprite: {
            ANNOTATION: "annotation"
        },
        action: {
            ANNOTATION: "annotation",
            ANNOTATION_CLICK_TRIGGER: "annotationClickTrigger"
        },
        data: {
            ANNOTATION_SIZE: 50
        },
        TWEEN_TIMER: 1.2,
        camera: {
            FOV: .8,
            MIN_ZOOM_FOV: .6,
            ARC_CAMERA: "arcCamera",
            VR_ARC_CAMERA: "vrArcCamera",
            FREE_CAMERA: "freeCamera",
            VR_FREE_CAMERA: "vrFreeCamera",
            ANAGLYPH_CAMERA: "anaglyphCamera",
            STEREOSCOPIC_CAMERA: "stereoscopicCamera",
            ALPHA: 3.1,
            BETA: 1
        },
        render: {
            ORDINARY: "ordinary",
            WIREFRAME: "wireframe"
        },
        setting: {
            RENDER: "val-render",
            CAMERA: "val-camera",
            ANNOTATION: "val-annotation",
            SPEED: "val-speed"
        },
        commands: {
            UPDATE_ANNOTATION_DATA: "updateAnnotationData",
            PLAY_ANIMATION_COMMAND: "playAnimation",
            SET_ANNOTATION_VISIBLE: "setAnnotationVisible",
            UPDATE_SETTING_PANEL: "updateSettingPanel",
            CHECK_ENV: "checkEvn",
            CONFIGURE_MATERIAL: "configureMaterial",
            CONFIGURE_PIPELINE: "configurePipeline",
            SET_CAMERA_CONTROL: "setCameraControl",
            DISPOSE: "dispose",
            OBSERVE_MESH_BY_FRAME: "observeMeshByFrame",
            OBSERVE_MESH_BY_RORATE: "observeMeshByRotate",
            PIXI_PLUGIN: "pixiPlugin",
            SCENE_CAPTURE: "sceneCapture"
        },
        config: {
            URI_PREFIX: ""
        },
        isDebug: !1,
        UID: function() {
            return "id_" + Math.random().toString().substr(2, 10)
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        CommandManager: n(97),
        ICommand: n(52)
    }
}
, function(e, t, n) {
    (function(e) {
        !function(e, t) {
            "use strict";
            function i(e, t) {
                if (!e)
                    throw new Error(t || "Assertion failed")
            }
            function r(e, t) {
                e.super_ = t;
                var n = function() {};
                n.prototype = t.prototype,
                e.prototype = new n,
                e.prototype.constructor = e
            }
            function a(e, t, n) {
                if (a.isBN(e))
                    return e;
                this.negative = 0,
                this.words = null,
                this.length = 0,
                this.red = null,
                null !== e && ("le" !== t && "be" !== t || (n = t,
                t = 10),
                this._init(e || 0, t || 10, n || "be"))
            }
            function o(e, t, n) {
                for (var i = 0, r = Math.min(e.length, n), a = t; a < r; a++) {
                    var o = e.charCodeAt(a) - 48;
                    i <<= 4,
                    i |= o >= 49 && o <= 54 ? o - 49 + 10 : o >= 17 && o <= 22 ? o - 17 + 10 : 15 & o
                }
                return i
            }
            function s(e, t, n, i) {
                for (var r = 0, a = Math.min(e.length, n), o = t; o < a; o++) {
                    var s = e.charCodeAt(o) - 48;
                    r *= i,
                    r += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                }
                return r
            }
            function c(e) {
                for (var t = new Array(e.bitLength()), n = 0; n < t.length; n++) {
                    var i = n / 26 | 0
                      , r = n % 26;
                    t[n] = (e.words[i] & 1 << r) >>> r
                }
                return t
            }
            function f(e, t, n) {
                n.negative = t.negative ^ e.negative;
                var i = e.length + t.length | 0;
                n.length = i,
                i = i - 1 | 0;
                var r = 0 | e.words[0]
                  , a = 0 | t.words[0]
                  , o = r * a
                  , s = 67108863 & o
                  , c = o / 67108864 | 0;
                n.words[0] = s;
                for (var f = 1; f < i; f++) {
                    for (var h = c >>> 26, u = 67108863 & c, d = Math.min(f, t.length - 1), l = Math.max(0, f - e.length + 1); l <= d; l++) {
                        var p = f - l | 0;
                        r = 0 | e.words[p],
                        a = 0 | t.words[l],
                        o = r * a + u,
                        h += o / 67108864 | 0,
                        u = 67108863 & o
                    }
                    n.words[f] = 0 | u,
                    c = 0 | h
                }
                return 0 !== c ? n.words[f] = 0 | c : n.length--,
                n.strip()
            }
            function h(e, t, n) {
                n.negative = t.negative ^ e.negative,
                n.length = e.length + t.length;
                for (var i = 0, r = 0, a = 0; a < n.length - 1; a++) {
                    var o = r;
                    r = 0;
                    for (var s = 67108863 & i, c = Math.min(a, t.length - 1), f = Math.max(0, a - e.length + 1); f <= c; f++) {
                        var h = a - f
                          , u = 0 | e.words[h]
                          , d = 0 | t.words[f]
                          , l = u * d
                          , p = 67108863 & l;
                        o = o + (l / 67108864 | 0) | 0,
                        p = p + s | 0,
                        s = 67108863 & p,
                        o = o + (p >>> 26) | 0,
                        r += o >>> 26,
                        o &= 67108863
                    }
                    n.words[a] = s,
                    i = o,
                    o = r
                }
                return 0 !== i ? n.words[a] = i : n.length--,
                n.strip()
            }
            function u(e, t, n) {
                return (new d).mulp(e, t, n)
            }
            function d(e, t) {
                this.x = e,
                this.y = t
            }
            function l(e, t) {
                this.name = e,
                this.p = new a(t,16),
                this.n = this.p.bitLength(),
                this.k = new a(1).iushln(this.n).isub(this.p),
                this.tmp = this._tmp()
            }
            function p() {
                l.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            function b() {
                l.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            function v() {
                l.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            function y() {
                l.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            function m(e) {
                if ("string" == typeof e) {
                    var t = a._prime(e);
                    this.m = t.p,
                    this.prime = t
                } else
                    i(e.gtn(1), "modulus must be greater than 1"),
                    this.m = e,
                    this.prime = null
            }
            function g(e) {
                m.call(this, e),
                this.shift = this.m.bitLength(),
                this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26),
                this.r = new a(1).iushln(this.shift),
                this.r2 = this.imod(this.r.sqr()),
                this.rinv = this.r._invmp(this.m),
                this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                this.minv = this.minv.umod(this.r),
                this.minv = this.r.sub(this.minv)
            }
            "object" == typeof e ? e.exports = a : t.BN = a,
            a.BN = a,
            a.wordSize = 26;
            var w;
            try {
                w = n(558).Buffer
            } catch (e) {}
            a.isBN = function(e) {
                return e instanceof a || null !== e && "object" == typeof e && e.constructor.wordSize === a.wordSize && Array.isArray(e.words)
            }
            ,
            a.max = function(e, t) {
                return e.cmp(t) > 0 ? e : t
            }
            ,
            a.min = function(e, t) {
                return e.cmp(t) < 0 ? e : t
            }
            ,
            a.prototype._init = function(e, t, n) {
                if ("number" == typeof e)
                    return this._initNumber(e, t, n);
                if ("object" == typeof e)
                    return this._initArray(e, t, n);
                "hex" === t && (t = 16),
                i(t === (0 | t) && t >= 2 && t <= 36),
                e = e.toString().replace(/\s+/g, "");
                var r = 0;
                "-" === e[0] && r++,
                16 === t ? this._parseHex(e, r) : this._parseBase(e, t, r),
                "-" === e[0] && (this.negative = 1),
                this.strip(),
                "le" === n && this._initArray(this.toArray(), t, n)
            }
            ,
            a.prototype._initNumber = function(e, t, n) {
                e < 0 && (this.negative = 1,
                e = -e),
                e < 67108864 ? (this.words = [67108863 & e],
                this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863],
                this.length = 2) : (i(e < 9007199254740992),
                this.words = [67108863 & e, e / 67108864 & 67108863, 1],
                this.length = 3),
                "le" === n && this._initArray(this.toArray(), t, n)
            }
            ,
            a.prototype._initArray = function(e, t, n) {
                if (i("number" == typeof e.length),
                e.length <= 0)
                    return this.words = [0],
                    this.length = 1,
                    this;
                this.length = Math.ceil(e.length / 3),
                this.words = new Array(this.length);
                for (var r = 0; r < this.length; r++)
                    this.words[r] = 0;
                var a, o, s = 0;
                if ("be" === n)
                    for (r = e.length - 1,
                    a = 0; r >= 0; r -= 3)
                        o = e[r] | e[r - 1] << 8 | e[r - 2] << 16,
                        this.words[a] |= o << s & 67108863,
                        this.words[a + 1] = o >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        a++);
                else if ("le" === n)
                    for (r = 0,
                    a = 0; r < e.length; r += 3)
                        o = e[r] | e[r + 1] << 8 | e[r + 2] << 16,
                        this.words[a] |= o << s & 67108863,
                        this.words[a + 1] = o >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        a++);
                return this.strip()
            }
            ,
            a.prototype._parseHex = function(e, t) {
                this.length = Math.ceil((e.length - t) / 6),
                this.words = new Array(this.length);
                for (var n = 0; n < this.length; n++)
                    this.words[n] = 0;
                var i, r, a = 0;
                for (n = e.length - 6,
                i = 0; n >= t; n -= 6)
                    r = o(e, n, n + 6),
                    this.words[i] |= r << a & 67108863,
                    this.words[i + 1] |= r >>> 26 - a & 4194303,
                    (a += 24) >= 26 && (a -= 26,
                    i++);
                n + 6 !== t && (r = o(e, t, n + 6),
                this.words[i] |= r << a & 67108863,
                this.words[i + 1] |= r >>> 26 - a & 4194303),
                this.strip()
            }
            ,
            a.prototype._parseBase = function(e, t, n) {
                this.words = [0],
                this.length = 1;
                for (var i = 0, r = 1; r <= 67108863; r *= t)
                    i++;
                i--,
                r = r / t | 0;
                for (var a = e.length - n, o = a % i, c = Math.min(a, a - o) + n, f = 0, h = n; h < c; h += i)
                    f = s(e, h, h + i, t),
                    this.imuln(r),
                    this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                if (0 !== o) {
                    var u = 1;
                    for (f = s(e, h, e.length, t),
                    h = 0; h < o; h++)
                        u *= t;
                    this.imuln(u),
                    this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f)
                }
            }
            ,
            a.prototype.copy = function(e) {
                e.words = new Array(this.length);
                for (var t = 0; t < this.length; t++)
                    e.words[t] = this.words[t];
                e.length = this.length,
                e.negative = this.negative,
                e.red = this.red
            }
            ,
            a.prototype.clone = function() {
                var e = new a(null);
                return this.copy(e),
                e
            }
            ,
            a.prototype._expand = function(e) {
                for (; this.length < e; )
                    this.words[this.length++] = 0;
                return this
            }
            ,
            a.prototype.strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                    this.length--;
                return this._normSign()
            }
            ,
            a.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
            }
            ,
            a.prototype.inspect = function() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            ;
            var _ = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
              , A = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
              , M = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            a.prototype.toString = function(e, t) {
                e = e || 10,
                t = 0 | t || 1;
                var n;
                if (16 === e || "hex" === e) {
                    n = "";
                    for (var r = 0, a = 0, o = 0; o < this.length; o++) {
                        var s = this.words[o]
                          , c = (16777215 & (s << r | a)).toString(16);
                        a = s >>> 24 - r & 16777215,
                        n = 0 !== a || o !== this.length - 1 ? _[6 - c.length] + c + n : c + n,
                        r += 2,
                        r >= 26 && (r -= 26,
                        o--)
                    }
                    for (0 !== a && (n = a.toString(16) + n); n.length % t != 0; )
                        n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n),
                    n
                }
                if (e === (0 | e) && e >= 2 && e <= 36) {
                    var f = A[e]
                      , h = M[e];
                    n = "";
                    var u = this.clone();
                    for (u.negative = 0; !u.isZero(); ) {
                        var d = u.modn(h).toString(e);
                        u = u.idivn(h),
                        n = u.isZero() ? d + n : _[f - d.length] + d + n
                    }
                    for (this.isZero() && (n = "0" + n); n.length % t != 0; )
                        n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n),
                    n
                }
                i(!1, "Base should be between 2 and 36")
            }
            ,
            a.prototype.toNumber = function() {
                var e = this.words[0];
                return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -e : e
            }
            ,
            a.prototype.toJSON = function() {
                return this.toString(16)
            }
            ,
            a.prototype.toBuffer = function(e, t) {
                return i(void 0 !== w),
                this.toArrayLike(w, e, t)
            }
            ,
            a.prototype.toArray = function(e, t) {
                return this.toArrayLike(Array, e, t)
            }
            ,
            a.prototype.toArrayLike = function(e, t, n) {
                var r = this.byteLength()
                  , a = n || Math.max(1, r);
                i(r <= a, "byte array longer than desired length"),
                i(a > 0, "Requested array length <= 0"),
                this.strip();
                var o, s, c = "le" === t, f = new e(a), h = this.clone();
                if (c) {
                    for (s = 0; !h.isZero(); s++)
                        o = h.andln(255),
                        h.iushrn(8),
                        f[s] = o;
                    for (; s < a; s++)
                        f[s] = 0
                } else {
                    for (s = 0; s < a - r; s++)
                        f[s] = 0;
                    for (s = 0; !h.isZero(); s++)
                        o = h.andln(255),
                        h.iushrn(8),
                        f[a - s - 1] = o
                }
                return f
            }
            ,
            Math.clz32 ? a.prototype._countBits = function(e) {
                return 32 - Math.clz32(e)
            }
            : a.prototype._countBits = function(e) {
                var t = e
                  , n = 0;
                return t >= 4096 && (n += 13,
                t >>>= 13),
                t >= 64 && (n += 7,
                t >>>= 7),
                t >= 8 && (n += 4,
                t >>>= 4),
                t >= 2 && (n += 2,
                t >>>= 2),
                n + t
            }
            ,
            a.prototype._zeroBits = function(e) {
                if (0 === e)
                    return 26;
                var t = e
                  , n = 0;
                return 0 == (8191 & t) && (n += 13,
                t >>>= 13),
                0 == (127 & t) && (n += 7,
                t >>>= 7),
                0 == (15 & t) && (n += 4,
                t >>>= 4),
                0 == (3 & t) && (n += 2,
                t >>>= 2),
                0 == (1 & t) && n++,
                n
            }
            ,
            a.prototype.bitLength = function() {
                var e = this.words[this.length - 1]
                  , t = this._countBits(e);
                return 26 * (this.length - 1) + t
            }
            ,
            a.prototype.zeroBits = function() {
                if (this.isZero())
                    return 0;
                for (var e = 0, t = 0; t < this.length; t++) {
                    var n = this._zeroBits(this.words[t]);
                    if (e += n,
                    26 !== n)
                        break
                }
                return e
            }
            ,
            a.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }
            ,
            a.prototype.toTwos = function(e) {
                return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
            }
            ,
            a.prototype.fromTwos = function(e) {
                return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
            }
            ,
            a.prototype.isNeg = function() {
                return 0 !== this.negative
            }
            ,
            a.prototype.neg = function() {
                return this.clone().ineg()
            }
            ,
            a.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1),
                this
            }
            ,
            a.prototype.iuor = function(e) {
                for (; this.length < e.length; )
                    this.words[this.length++] = 0;
                for (var t = 0; t < e.length; t++)
                    this.words[t] = this.words[t] | e.words[t];
                return this.strip()
            }
            ,
            a.prototype.ior = function(e) {
                return i(0 == (this.negative | e.negative)),
                this.iuor(e)
            }
            ,
            a.prototype.or = function(e) {
                return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
            }
            ,
            a.prototype.uor = function(e) {
                return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
            }
            ,
            a.prototype.iuand = function(e) {
                var t;
                t = this.length > e.length ? e : this;
                for (var n = 0; n < t.length; n++)
                    this.words[n] = this.words[n] & e.words[n];
                return this.length = t.length,
                this.strip()
            }
            ,
            a.prototype.iand = function(e) {
                return i(0 == (this.negative | e.negative)),
                this.iuand(e)
            }
            ,
            a.prototype.and = function(e) {
                return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
            }
            ,
            a.prototype.uand = function(e) {
                return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
            }
            ,
            a.prototype.iuxor = function(e) {
                var t, n;
                this.length > e.length ? (t = this,
                n = e) : (t = e,
                n = this);
                for (var i = 0; i < n.length; i++)
                    this.words[i] = t.words[i] ^ n.words[i];
                if (this !== t)
                    for (; i < t.length; i++)
                        this.words[i] = t.words[i];
                return this.length = t.length,
                this.strip()
            }
            ,
            a.prototype.ixor = function(e) {
                return i(0 == (this.negative | e.negative)),
                this.iuxor(e)
            }
            ,
            a.prototype.xor = function(e) {
                return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
            }
            ,
            a.prototype.uxor = function(e) {
                return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
            }
            ,
            a.prototype.inotn = function(e) {
                i("number" == typeof e && e >= 0);
                var t = 0 | Math.ceil(e / 26)
                  , n = e % 26;
                this._expand(t),
                n > 0 && t--;
                for (var r = 0; r < t; r++)
                    this.words[r] = 67108863 & ~this.words[r];
                return n > 0 && (this.words[r] = ~this.words[r] & 67108863 >> 26 - n),
                this.strip()
            }
            ,
            a.prototype.notn = function(e) {
                return this.clone().inotn(e)
            }
            ,
            a.prototype.setn = function(e, t) {
                i("number" == typeof e && e >= 0);
                var n = e / 26 | 0
                  , r = e % 26;
                return this._expand(n + 1),
                this.words[n] = t ? this.words[n] | 1 << r : this.words[n] & ~(1 << r),
                this.strip()
            }
            ,
            a.prototype.iadd = function(e) {
                var t;
                if (0 !== this.negative && 0 === e.negative)
                    return this.negative = 0,
                    t = this.isub(e),
                    this.negative ^= 1,
                    this._normSign();
                if (0 === this.negative && 0 !== e.negative)
                    return e.negative = 0,
                    t = this.isub(e),
                    e.negative = 1,
                    t._normSign();
                var n, i;
                this.length > e.length ? (n = this,
                i = e) : (n = e,
                i = this);
                for (var r = 0, a = 0; a < i.length; a++)
                    t = (0 | n.words[a]) + (0 | i.words[a]) + r,
                    this.words[a] = 67108863 & t,
                    r = t >>> 26;
                for (; 0 !== r && a < n.length; a++)
                    t = (0 | n.words[a]) + r,
                    this.words[a] = 67108863 & t,
                    r = t >>> 26;
                if (this.length = n.length,
                0 !== r)
                    this.words[this.length] = r,
                    this.length++;
                else if (n !== this)
                    for (; a < n.length; a++)
                        this.words[a] = n.words[a];
                return this
            }
            ,
            a.prototype.add = function(e) {
                var t;
                return 0 !== e.negative && 0 === this.negative ? (e.negative = 0,
                t = this.sub(e),
                e.negative ^= 1,
                t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0,
                t = e.sub(this),
                this.negative = 1,
                t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
            }
            ,
            a.prototype.isub = function(e) {
                if (0 !== e.negative) {
                    e.negative = 0;
                    var t = this.iadd(e);
                    return e.negative = 1,
                    t._normSign()
                }
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iadd(e),
                    this.negative = 1,
                    this._normSign();
                var n = this.cmp(e);
                if (0 === n)
                    return this.negative = 0,
                    this.length = 1,
                    this.words[0] = 0,
                    this;
                var i, r;
                n > 0 ? (i = this,
                r = e) : (i = e,
                r = this);
                for (var a = 0, o = 0; o < r.length; o++)
                    t = (0 | i.words[o]) - (0 | r.words[o]) + a,
                    a = t >> 26,
                    this.words[o] = 67108863 & t;
                for (; 0 !== a && o < i.length; o++)
                    t = (0 | i.words[o]) + a,
                    a = t >> 26,
                    this.words[o] = 67108863 & t;
                if (0 === a && o < i.length && i !== this)
                    for (; o < i.length; o++)
                        this.words[o] = i.words[o];
                return this.length = Math.max(this.length, o),
                i !== this && (this.negative = 1),
                this.strip()
            }
            ,
            a.prototype.sub = function(e) {
                return this.clone().isub(e)
            }
            ;
            var E = function(e, t, n) {
                var i, r, a, o = e.words, s = t.words, c = n.words, f = 0, h = 0 | o[0], u = 8191 & h, d = h >>> 13, l = 0 | o[1], p = 8191 & l, b = l >>> 13, v = 0 | o[2], y = 8191 & v, m = v >>> 13, g = 0 | o[3], w = 8191 & g, _ = g >>> 13, A = 0 | o[4], M = 8191 & A, E = A >>> 13, S = 0 | o[5], x = 8191 & S, k = S >>> 13, B = 0 | o[6], O = 8191 & B, P = B >>> 13, C = 0 | o[7], T = 8191 & C, I = C >>> 13, R = 0 | o[8], L = 8191 & R, N = R >>> 13, j = 0 | o[9], Y = 8191 & j, D = j >>> 13, z = 0 | s[0], X = 8191 & z, U = z >>> 13, F = 0 | s[1], Z = 8191 & F, q = F >>> 13, V = 0 | s[2], H = 8191 & V, K = V >>> 13, W = 0 | s[3], G = 8191 & W, $ = W >>> 13, J = 0 | s[4], Q = 8191 & J, ee = J >>> 13, te = 0 | s[5], ne = 8191 & te, ie = te >>> 13, re = 0 | s[6], ae = 8191 & re, oe = re >>> 13, se = 0 | s[7], ce = 8191 & se, fe = se >>> 13, he = 0 | s[8], ue = 8191 & he, de = he >>> 13, le = 0 | s[9], pe = 8191 & le, be = le >>> 13;
                n.negative = e.negative ^ t.negative,
                n.length = 19,
                i = Math.imul(u, X),
                r = Math.imul(u, U),
                r = r + Math.imul(d, X) | 0,
                a = Math.imul(d, U);
                var ve = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (ve >>> 26) | 0,
                ve &= 67108863,
                i = Math.imul(p, X),
                r = Math.imul(p, U),
                r = r + Math.imul(b, X) | 0,
                a = Math.imul(b, U),
                i = i + Math.imul(u, Z) | 0,
                r = r + Math.imul(u, q) | 0,
                r = r + Math.imul(d, Z) | 0,
                a = a + Math.imul(d, q) | 0;
                var ye = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (ye >>> 26) | 0,
                ye &= 67108863,
                i = Math.imul(y, X),
                r = Math.imul(y, U),
                r = r + Math.imul(m, X) | 0,
                a = Math.imul(m, U),
                i = i + Math.imul(p, Z) | 0,
                r = r + Math.imul(p, q) | 0,
                r = r + Math.imul(b, Z) | 0,
                a = a + Math.imul(b, q) | 0,
                i = i + Math.imul(u, H) | 0,
                r = r + Math.imul(u, K) | 0,
                r = r + Math.imul(d, H) | 0,
                a = a + Math.imul(d, K) | 0;
                var me = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (me >>> 26) | 0,
                me &= 67108863,
                i = Math.imul(w, X),
                r = Math.imul(w, U),
                r = r + Math.imul(_, X) | 0,
                a = Math.imul(_, U),
                i = i + Math.imul(y, Z) | 0,
                r = r + Math.imul(y, q) | 0,
                r = r + Math.imul(m, Z) | 0,
                a = a + Math.imul(m, q) | 0,
                i = i + Math.imul(p, H) | 0,
                r = r + Math.imul(p, K) | 0,
                r = r + Math.imul(b, H) | 0,
                a = a + Math.imul(b, K) | 0,
                i = i + Math.imul(u, G) | 0,
                r = r + Math.imul(u, $) | 0,
                r = r + Math.imul(d, G) | 0,
                a = a + Math.imul(d, $) | 0;
                var ge = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (ge >>> 26) | 0,
                ge &= 67108863,
                i = Math.imul(M, X),
                r = Math.imul(M, U),
                r = r + Math.imul(E, X) | 0,
                a = Math.imul(E, U),
                i = i + Math.imul(w, Z) | 0,
                r = r + Math.imul(w, q) | 0,
                r = r + Math.imul(_, Z) | 0,
                a = a + Math.imul(_, q) | 0,
                i = i + Math.imul(y, H) | 0,
                r = r + Math.imul(y, K) | 0,
                r = r + Math.imul(m, H) | 0,
                a = a + Math.imul(m, K) | 0,
                i = i + Math.imul(p, G) | 0,
                r = r + Math.imul(p, $) | 0,
                r = r + Math.imul(b, G) | 0,
                a = a + Math.imul(b, $) | 0,
                i = i + Math.imul(u, Q) | 0,
                r = r + Math.imul(u, ee) | 0,
                r = r + Math.imul(d, Q) | 0,
                a = a + Math.imul(d, ee) | 0;
                var we = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (we >>> 26) | 0,
                we &= 67108863,
                i = Math.imul(x, X),
                r = Math.imul(x, U),
                r = r + Math.imul(k, X) | 0,
                a = Math.imul(k, U),
                i = i + Math.imul(M, Z) | 0,
                r = r + Math.imul(M, q) | 0,
                r = r + Math.imul(E, Z) | 0,
                a = a + Math.imul(E, q) | 0,
                i = i + Math.imul(w, H) | 0,
                r = r + Math.imul(w, K) | 0,
                r = r + Math.imul(_, H) | 0,
                a = a + Math.imul(_, K) | 0,
                i = i + Math.imul(y, G) | 0,
                r = r + Math.imul(y, $) | 0,
                r = r + Math.imul(m, G) | 0,
                a = a + Math.imul(m, $) | 0,
                i = i + Math.imul(p, Q) | 0,
                r = r + Math.imul(p, ee) | 0,
                r = r + Math.imul(b, Q) | 0,
                a = a + Math.imul(b, ee) | 0,
                i = i + Math.imul(u, ne) | 0,
                r = r + Math.imul(u, ie) | 0,
                r = r + Math.imul(d, ne) | 0,
                a = a + Math.imul(d, ie) | 0;
                var _e = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (_e >>> 26) | 0,
                _e &= 67108863,
                i = Math.imul(O, X),
                r = Math.imul(O, U),
                r = r + Math.imul(P, X) | 0,
                a = Math.imul(P, U),
                i = i + Math.imul(x, Z) | 0,
                r = r + Math.imul(x, q) | 0,
                r = r + Math.imul(k, Z) | 0,
                a = a + Math.imul(k, q) | 0,
                i = i + Math.imul(M, H) | 0,
                r = r + Math.imul(M, K) | 0,
                r = r + Math.imul(E, H) | 0,
                a = a + Math.imul(E, K) | 0,
                i = i + Math.imul(w, G) | 0,
                r = r + Math.imul(w, $) | 0,
                r = r + Math.imul(_, G) | 0,
                a = a + Math.imul(_, $) | 0,
                i = i + Math.imul(y, Q) | 0,
                r = r + Math.imul(y, ee) | 0,
                r = r + Math.imul(m, Q) | 0,
                a = a + Math.imul(m, ee) | 0,
                i = i + Math.imul(p, ne) | 0,
                r = r + Math.imul(p, ie) | 0,
                r = r + Math.imul(b, ne) | 0,
                a = a + Math.imul(b, ie) | 0,
                i = i + Math.imul(u, ae) | 0,
                r = r + Math.imul(u, oe) | 0,
                r = r + Math.imul(d, ae) | 0,
                a = a + Math.imul(d, oe) | 0;
                var Ae = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (Ae >>> 26) | 0,
                Ae &= 67108863,
                i = Math.imul(T, X),
                r = Math.imul(T, U),
                r = r + Math.imul(I, X) | 0,
                a = Math.imul(I, U),
                i = i + Math.imul(O, Z) | 0,
                r = r + Math.imul(O, q) | 0,
                r = r + Math.imul(P, Z) | 0,
                a = a + Math.imul(P, q) | 0,
                i = i + Math.imul(x, H) | 0,
                r = r + Math.imul(x, K) | 0,
                r = r + Math.imul(k, H) | 0,
                a = a + Math.imul(k, K) | 0,
                i = i + Math.imul(M, G) | 0,
                r = r + Math.imul(M, $) | 0,
                r = r + Math.imul(E, G) | 0,
                a = a + Math.imul(E, $) | 0,
                i = i + Math.imul(w, Q) | 0,
                r = r + Math.imul(w, ee) | 0,
                r = r + Math.imul(_, Q) | 0,
                a = a + Math.imul(_, ee) | 0,
                i = i + Math.imul(y, ne) | 0,
                r = r + Math.imul(y, ie) | 0,
                r = r + Math.imul(m, ne) | 0,
                a = a + Math.imul(m, ie) | 0,
                i = i + Math.imul(p, ae) | 0,
                r = r + Math.imul(p, oe) | 0,
                r = r + Math.imul(b, ae) | 0,
                a = a + Math.imul(b, oe) | 0,
                i = i + Math.imul(u, ce) | 0,
                r = r + Math.imul(u, fe) | 0,
                r = r + Math.imul(d, ce) | 0,
                a = a + Math.imul(d, fe) | 0;
                var Me = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (Me >>> 26) | 0,
                Me &= 67108863,
                i = Math.imul(L, X),
                r = Math.imul(L, U),
                r = r + Math.imul(N, X) | 0,
                a = Math.imul(N, U),
                i = i + Math.imul(T, Z) | 0,
                r = r + Math.imul(T, q) | 0,
                r = r + Math.imul(I, Z) | 0,
                a = a + Math.imul(I, q) | 0,
                i = i + Math.imul(O, H) | 0,
                r = r + Math.imul(O, K) | 0,
                r = r + Math.imul(P, H) | 0,
                a = a + Math.imul(P, K) | 0,
                i = i + Math.imul(x, G) | 0,
                r = r + Math.imul(x, $) | 0,
                r = r + Math.imul(k, G) | 0,
                a = a + Math.imul(k, $) | 0,
                i = i + Math.imul(M, Q) | 0,
                r = r + Math.imul(M, ee) | 0,
                r = r + Math.imul(E, Q) | 0,
                a = a + Math.imul(E, ee) | 0,
                i = i + Math.imul(w, ne) | 0,
                r = r + Math.imul(w, ie) | 0,
                r = r + Math.imul(_, ne) | 0,
                a = a + Math.imul(_, ie) | 0,
                i = i + Math.imul(y, ae) | 0,
                r = r + Math.imul(y, oe) | 0,
                r = r + Math.imul(m, ae) | 0,
                a = a + Math.imul(m, oe) | 0,
                i = i + Math.imul(p, ce) | 0,
                r = r + Math.imul(p, fe) | 0,
                r = r + Math.imul(b, ce) | 0,
                a = a + Math.imul(b, fe) | 0,
                i = i + Math.imul(u, ue) | 0,
                r = r + Math.imul(u, de) | 0,
                r = r + Math.imul(d, ue) | 0,
                a = a + Math.imul(d, de) | 0;
                var Ee = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (Ee >>> 26) | 0,
                Ee &= 67108863,
                i = Math.imul(Y, X),
                r = Math.imul(Y, U),
                r = r + Math.imul(D, X) | 0,
                a = Math.imul(D, U),
                i = i + Math.imul(L, Z) | 0,
                r = r + Math.imul(L, q) | 0,
                r = r + Math.imul(N, Z) | 0,
                a = a + Math.imul(N, q) | 0,
                i = i + Math.imul(T, H) | 0,
                r = r + Math.imul(T, K) | 0,
                r = r + Math.imul(I, H) | 0,
                a = a + Math.imul(I, K) | 0,
                i = i + Math.imul(O, G) | 0,
                r = r + Math.imul(O, $) | 0,
                r = r + Math.imul(P, G) | 0,
                a = a + Math.imul(P, $) | 0,
                i = i + Math.imul(x, Q) | 0,
                r = r + Math.imul(x, ee) | 0,
                r = r + Math.imul(k, Q) | 0,
                a = a + Math.imul(k, ee) | 0,
                i = i + Math.imul(M, ne) | 0,
                r = r + Math.imul(M, ie) | 0,
                r = r + Math.imul(E, ne) | 0,
                a = a + Math.imul(E, ie) | 0,
                i = i + Math.imul(w, ae) | 0,
                r = r + Math.imul(w, oe) | 0,
                r = r + Math.imul(_, ae) | 0,
                a = a + Math.imul(_, oe) | 0,
                i = i + Math.imul(y, ce) | 0,
                r = r + Math.imul(y, fe) | 0,
                r = r + Math.imul(m, ce) | 0,
                a = a + Math.imul(m, fe) | 0,
                i = i + Math.imul(p, ue) | 0,
                r = r + Math.imul(p, de) | 0,
                r = r + Math.imul(b, ue) | 0,
                a = a + Math.imul(b, de) | 0,
                i = i + Math.imul(u, pe) | 0,
                r = r + Math.imul(u, be) | 0,
                r = r + Math.imul(d, pe) | 0,
                a = a + Math.imul(d, be) | 0;
                var Se = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (Se >>> 26) | 0,
                Se &= 67108863,
                i = Math.imul(Y, Z),
                r = Math.imul(Y, q),
                r = r + Math.imul(D, Z) | 0,
                a = Math.imul(D, q),
                i = i + Math.imul(L, H) | 0,
                r = r + Math.imul(L, K) | 0,
                r = r + Math.imul(N, H) | 0,
                a = a + Math.imul(N, K) | 0,
                i = i + Math.imul(T, G) | 0,
                r = r + Math.imul(T, $) | 0,
                r = r + Math.imul(I, G) | 0,
                a = a + Math.imul(I, $) | 0,
                i = i + Math.imul(O, Q) | 0,
                r = r + Math.imul(O, ee) | 0,
                r = r + Math.imul(P, Q) | 0,
                a = a + Math.imul(P, ee) | 0,
                i = i + Math.imul(x, ne) | 0,
                r = r + Math.imul(x, ie) | 0,
                r = r + Math.imul(k, ne) | 0,
                a = a + Math.imul(k, ie) | 0,
                i = i + Math.imul(M, ae) | 0,
                r = r + Math.imul(M, oe) | 0,
                r = r + Math.imul(E, ae) | 0,
                a = a + Math.imul(E, oe) | 0,
                i = i + Math.imul(w, ce) | 0,
                r = r + Math.imul(w, fe) | 0,
                r = r + Math.imul(_, ce) | 0,
                a = a + Math.imul(_, fe) | 0,
                i = i + Math.imul(y, ue) | 0,
                r = r + Math.imul(y, de) | 0,
                r = r + Math.imul(m, ue) | 0,
                a = a + Math.imul(m, de) | 0,
                i = i + Math.imul(p, pe) | 0,
                r = r + Math.imul(p, be) | 0,
                r = r + Math.imul(b, pe) | 0,
                a = a + Math.imul(b, be) | 0;
                var xe = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (xe >>> 26) | 0,
                xe &= 67108863,
                i = Math.imul(Y, H),
                r = Math.imul(Y, K),
                r = r + Math.imul(D, H) | 0,
                a = Math.imul(D, K),
                i = i + Math.imul(L, G) | 0,
                r = r + Math.imul(L, $) | 0,
                r = r + Math.imul(N, G) | 0,
                a = a + Math.imul(N, $) | 0,
                i = i + Math.imul(T, Q) | 0,
                r = r + Math.imul(T, ee) | 0,
                r = r + Math.imul(I, Q) | 0,
                a = a + Math.imul(I, ee) | 0,
                i = i + Math.imul(O, ne) | 0,
                r = r + Math.imul(O, ie) | 0,
                r = r + Math.imul(P, ne) | 0,
                a = a + Math.imul(P, ie) | 0,
                i = i + Math.imul(x, ae) | 0,
                r = r + Math.imul(x, oe) | 0,
                r = r + Math.imul(k, ae) | 0,
                a = a + Math.imul(k, oe) | 0,
                i = i + Math.imul(M, ce) | 0,
                r = r + Math.imul(M, fe) | 0,
                r = r + Math.imul(E, ce) | 0,
                a = a + Math.imul(E, fe) | 0,
                i = i + Math.imul(w, ue) | 0,
                r = r + Math.imul(w, de) | 0,
                r = r + Math.imul(_, ue) | 0,
                a = a + Math.imul(_, de) | 0,
                i = i + Math.imul(y, pe) | 0,
                r = r + Math.imul(y, be) | 0,
                r = r + Math.imul(m, pe) | 0,
                a = a + Math.imul(m, be) | 0;
                var ke = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (ke >>> 26) | 0,
                ke &= 67108863,
                i = Math.imul(Y, G),
                r = Math.imul(Y, $),
                r = r + Math.imul(D, G) | 0,
                a = Math.imul(D, $),
                i = i + Math.imul(L, Q) | 0,
                r = r + Math.imul(L, ee) | 0,
                r = r + Math.imul(N, Q) | 0,
                a = a + Math.imul(N, ee) | 0,
                i = i + Math.imul(T, ne) | 0,
                r = r + Math.imul(T, ie) | 0,
                r = r + Math.imul(I, ne) | 0,
                a = a + Math.imul(I, ie) | 0,
                i = i + Math.imul(O, ae) | 0,
                r = r + Math.imul(O, oe) | 0,
                r = r + Math.imul(P, ae) | 0,
                a = a + Math.imul(P, oe) | 0,
                i = i + Math.imul(x, ce) | 0,
                r = r + Math.imul(x, fe) | 0,
                r = r + Math.imul(k, ce) | 0,
                a = a + Math.imul(k, fe) | 0,
                i = i + Math.imul(M, ue) | 0,
                r = r + Math.imul(M, de) | 0,
                r = r + Math.imul(E, ue) | 0,
                a = a + Math.imul(E, de) | 0,
                i = i + Math.imul(w, pe) | 0,
                r = r + Math.imul(w, be) | 0,
                r = r + Math.imul(_, pe) | 0,
                a = a + Math.imul(_, be) | 0;
                var Be = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (Be >>> 26) | 0,
                Be &= 67108863,
                i = Math.imul(Y, Q),
                r = Math.imul(Y, ee),
                r = r + Math.imul(D, Q) | 0,
                a = Math.imul(D, ee),
                i = i + Math.imul(L, ne) | 0,
                r = r + Math.imul(L, ie) | 0,
                r = r + Math.imul(N, ne) | 0,
                a = a + Math.imul(N, ie) | 0,
                i = i + Math.imul(T, ae) | 0,
                r = r + Math.imul(T, oe) | 0,
                r = r + Math.imul(I, ae) | 0,
                a = a + Math.imul(I, oe) | 0,
                i = i + Math.imul(O, ce) | 0,
                r = r + Math.imul(O, fe) | 0,
                r = r + Math.imul(P, ce) | 0,
                a = a + Math.imul(P, fe) | 0,
                i = i + Math.imul(x, ue) | 0,
                r = r + Math.imul(x, de) | 0,
                r = r + Math.imul(k, ue) | 0,
                a = a + Math.imul(k, de) | 0,
                i = i + Math.imul(M, pe) | 0,
                r = r + Math.imul(M, be) | 0,
                r = r + Math.imul(E, pe) | 0,
                a = a + Math.imul(E, be) | 0;
                var Oe = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (Oe >>> 26) | 0,
                Oe &= 67108863,
                i = Math.imul(Y, ne),
                r = Math.imul(Y, ie),
                r = r + Math.imul(D, ne) | 0,
                a = Math.imul(D, ie),
                i = i + Math.imul(L, ae) | 0,
                r = r + Math.imul(L, oe) | 0,
                r = r + Math.imul(N, ae) | 0,
                a = a + Math.imul(N, oe) | 0,
                i = i + Math.imul(T, ce) | 0,
                r = r + Math.imul(T, fe) | 0,
                r = r + Math.imul(I, ce) | 0,
                a = a + Math.imul(I, fe) | 0,
                i = i + Math.imul(O, ue) | 0,
                r = r + Math.imul(O, de) | 0,
                r = r + Math.imul(P, ue) | 0,
                a = a + Math.imul(P, de) | 0,
                i = i + Math.imul(x, pe) | 0,
                r = r + Math.imul(x, be) | 0,
                r = r + Math.imul(k, pe) | 0,
                a = a + Math.imul(k, be) | 0;
                var Pe = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (Pe >>> 26) | 0,
                Pe &= 67108863,
                i = Math.imul(Y, ae),
                r = Math.imul(Y, oe),
                r = r + Math.imul(D, ae) | 0,
                a = Math.imul(D, oe),
                i = i + Math.imul(L, ce) | 0,
                r = r + Math.imul(L, fe) | 0,
                r = r + Math.imul(N, ce) | 0,
                a = a + Math.imul(N, fe) | 0,
                i = i + Math.imul(T, ue) | 0,
                r = r + Math.imul(T, de) | 0,
                r = r + Math.imul(I, ue) | 0,
                a = a + Math.imul(I, de) | 0,
                i = i + Math.imul(O, pe) | 0,
                r = r + Math.imul(O, be) | 0,
                r = r + Math.imul(P, pe) | 0,
                a = a + Math.imul(P, be) | 0;
                var Ce = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (Ce >>> 26) | 0,
                Ce &= 67108863,
                i = Math.imul(Y, ce),
                r = Math.imul(Y, fe),
                r = r + Math.imul(D, ce) | 0,
                a = Math.imul(D, fe),
                i = i + Math.imul(L, ue) | 0,
                r = r + Math.imul(L, de) | 0,
                r = r + Math.imul(N, ue) | 0,
                a = a + Math.imul(N, de) | 0,
                i = i + Math.imul(T, pe) | 0,
                r = r + Math.imul(T, be) | 0,
                r = r + Math.imul(I, pe) | 0,
                a = a + Math.imul(I, be) | 0;
                var Te = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (Te >>> 26) | 0,
                Te &= 67108863,
                i = Math.imul(Y, ue),
                r = Math.imul(Y, de),
                r = r + Math.imul(D, ue) | 0,
                a = Math.imul(D, de),
                i = i + Math.imul(L, pe) | 0,
                r = r + Math.imul(L, be) | 0,
                r = r + Math.imul(N, pe) | 0,
                a = a + Math.imul(N, be) | 0;
                var Ie = (f + i | 0) + ((8191 & r) << 13) | 0;
                f = (a + (r >>> 13) | 0) + (Ie >>> 26) | 0,
                Ie &= 67108863,
                i = Math.imul(Y, pe),
                r = Math.imul(Y, be),
                r = r + Math.imul(D, pe) | 0,
                a = Math.imul(D, be);
                var Re = (f + i | 0) + ((8191 & r) << 13) | 0;
                return f = (a + (r >>> 13) | 0) + (Re >>> 26) | 0,
                Re &= 67108863,
                c[0] = ve,
                c[1] = ye,
                c[2] = me,
                c[3] = ge,
                c[4] = we,
                c[5] = _e,
                c[6] = Ae,
                c[7] = Me,
                c[8] = Ee,
                c[9] = Se,
                c[10] = xe,
                c[11] = ke,
                c[12] = Be,
                c[13] = Oe,
                c[14] = Pe,
                c[15] = Ce,
                c[16] = Te,
                c[17] = Ie,
                c[18] = Re,
                0 !== f && (c[19] = f,
                n.length++),
                n
            };
            Math.imul || (E = f),
            a.prototype.mulTo = function(e, t) {
                var n = this.length + e.length;
                return 10 === this.length && 10 === e.length ? E(this, e, t) : n < 63 ? f(this, e, t) : n < 1024 ? h(this, e, t) : u(this, e, t)
            }
            ,
            d.prototype.makeRBT = function(e) {
                for (var t = new Array(e), n = a.prototype._countBits(e) - 1, i = 0; i < e; i++)
                    t[i] = this.revBin(i, n, e);
                return t
            }
            ,
            d.prototype.revBin = function(e, t, n) {
                if (0 === e || e === n - 1)
                    return e;
                for (var i = 0, r = 0; r < t; r++)
                    i |= (1 & e) << t - r - 1,
                    e >>= 1;
                return i
            }
            ,
            d.prototype.permute = function(e, t, n, i, r, a) {
                for (var o = 0; o < a; o++)
                    i[o] = t[e[o]],
                    r[o] = n[e[o]]
            }
            ,
            d.prototype.transform = function(e, t, n, i, r, a) {
                this.permute(a, e, t, n, i, r);
                for (var o = 1; o < r; o <<= 1)
                    for (var s = o << 1, c = Math.cos(2 * Math.PI / s), f = Math.sin(2 * Math.PI / s), h = 0; h < r; h += s)
                        for (var u = c, d = f, l = 0; l < o; l++) {
                            var p = n[h + l]
                              , b = i[h + l]
                              , v = n[h + l + o]
                              , y = i[h + l + o]
                              , m = u * v - d * y;
                            y = u * y + d * v,
                            v = m,
                            n[h + l] = p + v,
                            i[h + l] = b + y,
                            n[h + l + o] = p - v,
                            i[h + l + o] = b - y,
                            l !== s && (m = c * u - f * d,
                            d = c * d + f * u,
                            u = m)
                        }
            }
            ,
            d.prototype.guessLen13b = function(e, t) {
                var n = 1 | Math.max(t, e)
                  , i = 1 & n
                  , r = 0;
                for (n = n / 2 | 0; n; n >>>= 1)
                    r++;
                return 1 << r + 1 + i
            }
            ,
            d.prototype.conjugate = function(e, t, n) {
                if (!(n <= 1))
                    for (var i = 0; i < n / 2; i++) {
                        var r = e[i];
                        e[i] = e[n - i - 1],
                        e[n - i - 1] = r,
                        r = t[i],
                        t[i] = -t[n - i - 1],
                        t[n - i - 1] = -r
                    }
            }
            ,
            d.prototype.normalize13b = function(e, t) {
                for (var n = 0, i = 0; i < t / 2; i++) {
                    var r = 8192 * Math.round(e[2 * i + 1] / t) + Math.round(e[2 * i] / t) + n;
                    e[i] = 67108863 & r,
                    n = r < 67108864 ? 0 : r / 67108864 | 0
                }
                return e
            }
            ,
            d.prototype.convert13b = function(e, t, n, r) {
                for (var a = 0, o = 0; o < t; o++)
                    a += 0 | e[o],
                    n[2 * o] = 8191 & a,
                    a >>>= 13,
                    n[2 * o + 1] = 8191 & a,
                    a >>>= 13;
                for (o = 2 * t; o < r; ++o)
                    n[o] = 0;
                i(0 === a),
                i(0 == (-8192 & a))
            }
            ,
            d.prototype.stub = function(e) {
                for (var t = new Array(e), n = 0; n < e; n++)
                    t[n] = 0;
                return t
            }
            ,
            d.prototype.mulp = function(e, t, n) {
                var i = 2 * this.guessLen13b(e.length, t.length)
                  , r = this.makeRBT(i)
                  , a = this.stub(i)
                  , o = new Array(i)
                  , s = new Array(i)
                  , c = new Array(i)
                  , f = new Array(i)
                  , h = new Array(i)
                  , u = new Array(i)
                  , d = n.words;
                d.length = i,
                this.convert13b(e.words, e.length, o, i),
                this.convert13b(t.words, t.length, f, i),
                this.transform(o, a, s, c, i, r),
                this.transform(f, a, h, u, i, r);
                for (var l = 0; l < i; l++) {
                    var p = s[l] * h[l] - c[l] * u[l];
                    c[l] = s[l] * u[l] + c[l] * h[l],
                    s[l] = p
                }
                return this.conjugate(s, c, i),
                this.transform(s, c, d, a, i, r),
                this.conjugate(d, a, i),
                this.normalize13b(d, i),
                n.negative = e.negative ^ t.negative,
                n.length = e.length + t.length,
                n.strip()
            }
            ,
            a.prototype.mul = function(e) {
                var t = new a(null);
                return t.words = new Array(this.length + e.length),
                this.mulTo(e, t)
            }
            ,
            a.prototype.mulf = function(e) {
                var t = new a(null);
                return t.words = new Array(this.length + e.length),
                u(this, e, t)
            }
            ,
            a.prototype.imul = function(e) {
                return this.clone().mulTo(e, this)
            }
            ,
            a.prototype.imuln = function(e) {
                i("number" == typeof e),
                i(e < 67108864);
                for (var t = 0, n = 0; n < this.length; n++) {
                    var r = (0 | this.words[n]) * e
                      , a = (67108863 & r) + (67108863 & t);
                    t >>= 26,
                    t += r / 67108864 | 0,
                    t += a >>> 26,
                    this.words[n] = 67108863 & a
                }
                return 0 !== t && (this.words[n] = t,
                this.length++),
                this
            }
            ,
            a.prototype.muln = function(e) {
                return this.clone().imuln(e)
            }
            ,
            a.prototype.sqr = function() {
                return this.mul(this)
            }
            ,
            a.prototype.isqr = function() {
                return this.imul(this.clone())
            }
            ,
            a.prototype.pow = function(e) {
                var t = c(e);
                if (0 === t.length)
                    return new a(1);
                for (var n = this, i = 0; i < t.length && 0 === t[i]; i++,
                n = n.sqr())
                    ;
                if (++i < t.length)
                    for (var r = n.sqr(); i < t.length; i++,
                    r = r.sqr())
                        0 !== t[i] && (n = n.mul(r));
                return n
            }
            ,
            a.prototype.iushln = function(e) {
                i("number" == typeof e && e >= 0);
                var t, n = e % 26, r = (e - n) / 26, a = 67108863 >>> 26 - n << 26 - n;
                if (0 !== n) {
                    var o = 0;
                    for (t = 0; t < this.length; t++) {
                        var s = this.words[t] & a
                          , c = (0 | this.words[t]) - s << n;
                        this.words[t] = c | o,
                        o = s >>> 26 - n
                    }
                    o && (this.words[t] = o,
                    this.length++)
                }
                if (0 !== r) {
                    for (t = this.length - 1; t >= 0; t--)
                        this.words[t + r] = this.words[t];
                    for (t = 0; t < r; t++)
                        this.words[t] = 0;
                    this.length += r
                }
                return this.strip()
            }
            ,
            a.prototype.ishln = function(e) {
                return i(0 === this.negative),
                this.iushln(e)
            }
            ,
            a.prototype.iushrn = function(e, t, n) {
                i("number" == typeof e && e >= 0);
                var r;
                r = t ? (t - t % 26) / 26 : 0;
                var a = e % 26
                  , o = Math.min((e - a) / 26, this.length)
                  , s = 67108863 ^ 67108863 >>> a << a
                  , c = n;
                if (r -= o,
                r = Math.max(0, r),
                c) {
                    for (var f = 0; f < o; f++)
                        c.words[f] = this.words[f];
                    c.length = o
                }
                if (0 === o)
                    ;
                else if (this.length > o)
                    for (this.length -= o,
                    f = 0; f < this.length; f++)
                        this.words[f] = this.words[f + o];
                else
                    this.words[0] = 0,
                    this.length = 1;
                var h = 0;
                for (f = this.length - 1; f >= 0 && (0 !== h || f >= r); f--) {
                    var u = 0 | this.words[f];
                    this.words[f] = h << 26 - a | u >>> a,
                    h = u & s
                }
                return c && 0 !== h && (c.words[c.length++] = h),
                0 === this.length && (this.words[0] = 0,
                this.length = 1),
                this.strip()
            }
            ,
            a.prototype.ishrn = function(e, t, n) {
                return i(0 === this.negative),
                this.iushrn(e, t, n)
            }
            ,
            a.prototype.shln = function(e) {
                return this.clone().ishln(e)
            }
            ,
            a.prototype.ushln = function(e) {
                return this.clone().iushln(e)
            }
            ,
            a.prototype.shrn = function(e) {
                return this.clone().ishrn(e)
            }
            ,
            a.prototype.ushrn = function(e) {
                return this.clone().iushrn(e)
            }
            ,
            a.prototype.testn = function(e) {
                i("number" == typeof e && e >= 0);
                var t = e % 26
                  , n = (e - t) / 26
                  , r = 1 << t;
                return !(this.length <= n) && !!(this.words[n] & r)
            }
            ,
            a.prototype.imaskn = function(e) {
                i("number" == typeof e && e >= 0);
                var t = e % 26
                  , n = (e - t) / 26;
                if (i(0 === this.negative, "imaskn works only with positive numbers"),
                this.length <= n)
                    return this;
                if (0 !== t && n++,
                this.length = Math.min(n, this.length),
                0 !== t) {
                    var r = 67108863 ^ 67108863 >>> t << t;
                    this.words[this.length - 1] &= r
                }
                return this.strip()
            }
            ,
            a.prototype.maskn = function(e) {
                return this.clone().imaskn(e)
            }
            ,
            a.prototype.iaddn = function(e) {
                return i("number" == typeof e),
                i(e < 67108864),
                e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]),
                this.negative = 0,
                this) : (this.negative = 0,
                this.isubn(e),
                this.negative = 1,
                this) : this._iaddn(e)
            }
            ,
            a.prototype._iaddn = function(e) {
                this.words[0] += e;
                for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                    this.words[t] -= 67108864,
                    t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                return this.length = Math.max(this.length, t + 1),
                this
            }
            ,
            a.prototype.isubn = function(e) {
                if (i("number" == typeof e),
                i(e < 67108864),
                e < 0)
                    return this.iaddn(-e);
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iaddn(e),
                    this.negative = 1,
                    this;
                if (this.words[0] -= e,
                1 === this.length && this.words[0] < 0)
                    this.words[0] = -this.words[0],
                    this.negative = 1;
                else
                    for (var t = 0; t < this.length && this.words[t] < 0; t++)
                        this.words[t] += 67108864,
                        this.words[t + 1] -= 1;
                return this.strip()
            }
            ,
            a.prototype.addn = function(e) {
                return this.clone().iaddn(e)
            }
            ,
            a.prototype.subn = function(e) {
                return this.clone().isubn(e)
            }
            ,
            a.prototype.iabs = function() {
                return this.negative = 0,
                this
            }
            ,
            a.prototype.abs = function() {
                return this.clone().iabs()
            }
            ,
            a.prototype._ishlnsubmul = function(e, t, n) {
                var r, a = e.length + n;
                this._expand(a);
                var o, s = 0;
                for (r = 0; r < e.length; r++) {
                    o = (0 | this.words[r + n]) + s;
                    var c = (0 | e.words[r]) * t;
                    o -= 67108863 & c,
                    s = (o >> 26) - (c / 67108864 | 0),
                    this.words[r + n] = 67108863 & o
                }
                for (; r < this.length - n; r++)
                    o = (0 | this.words[r + n]) + s,
                    s = o >> 26,
                    this.words[r + n] = 67108863 & o;
                if (0 === s)
                    return this.strip();
                for (i(-1 === s),
                s = 0,
                r = 0; r < this.length; r++)
                    o = -(0 | this.words[r]) + s,
                    s = o >> 26,
                    this.words[r] = 67108863 & o;
                return this.negative = 1,
                this.strip()
            }
            ,
            a.prototype._wordDiv = function(e, t) {
                var n = this.length - e.length
                  , i = this.clone()
                  , r = e
                  , o = 0 | r.words[r.length - 1];
                0 !== (n = 26 - this._countBits(o)) && (r = r.ushln(n),
                i.iushln(n),
                o = 0 | r.words[r.length - 1]);
                var s, c = i.length - r.length;
                if ("mod" !== t) {
                    s = new a(null),
                    s.length = c + 1,
                    s.words = new Array(s.length);
                    for (var f = 0; f < s.length; f++)
                        s.words[f] = 0
                }
                var h = i.clone()._ishlnsubmul(r, 1, c);
                0 === h.negative && (i = h,
                s && (s.words[c] = 1));
                for (var u = c - 1; u >= 0; u--) {
                    var d = 67108864 * (0 | i.words[r.length + u]) + (0 | i.words[r.length + u - 1]);
                    for (d = Math.min(d / o | 0, 67108863),
                    i._ishlnsubmul(r, d, u); 0 !== i.negative; )
                        d--,
                        i.negative = 0,
                        i._ishlnsubmul(r, 1, u),
                        i.isZero() || (i.negative ^= 1);
                    s && (s.words[u] = d)
                }
                return s && s.strip(),
                i.strip(),
                "div" !== t && 0 !== n && i.iushrn(n),
                {
                    div: s || null,
                    mod: i
                }
            }
            ,
            a.prototype.divmod = function(e, t, n) {
                if (i(!e.isZero()),
                this.isZero())
                    return {
                        div: new a(0),
                        mod: new a(0)
                    };
                var r, o, s;
                return 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t),
                "mod" !== t && (r = s.div.neg()),
                "div" !== t && (o = s.mod.neg(),
                n && 0 !== o.negative && o.iadd(e)),
                {
                    div: r,
                    mod: o
                }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t),
                "mod" !== t && (r = s.div.neg()),
                {
                    div: r,
                    mod: s.mod
                }) : 0 != (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t),
                "div" !== t && (o = s.mod.neg(),
                n && 0 !== o.negative && o.isub(e)),
                {
                    div: s.div,
                    mod: o
                }) : e.length > this.length || this.cmp(e) < 0 ? {
                    div: new a(0),
                    mod: this
                } : 1 === e.length ? "div" === t ? {
                    div: this.divn(e.words[0]),
                    mod: null
                } : "mod" === t ? {
                    div: null,
                    mod: new a(this.modn(e.words[0]))
                } : {
                    div: this.divn(e.words[0]),
                    mod: new a(this.modn(e.words[0]))
                } : this._wordDiv(e, t)
            }
            ,
            a.prototype.div = function(e) {
                return this.divmod(e, "div", !1).div
            }
            ,
            a.prototype.mod = function(e) {
                return this.divmod(e, "mod", !1).mod
            }
            ,
            a.prototype.umod = function(e) {
                return this.divmod(e, "mod", !0).mod
            }
            ,
            a.prototype.divRound = function(e) {
                var t = this.divmod(e);
                if (t.mod.isZero())
                    return t.div;
                var n = 0 !== t.div.negative ? t.mod.isub(e) : t.mod
                  , i = e.ushrn(1)
                  , r = e.andln(1)
                  , a = n.cmp(i);
                return a < 0 || 1 === r && 0 === a ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
            }
            ,
            a.prototype.modn = function(e) {
                i(e <= 67108863);
                for (var t = (1 << 26) % e, n = 0, r = this.length - 1; r >= 0; r--)
                    n = (t * n + (0 | this.words[r])) % e;
                return n
            }
            ,
            a.prototype.idivn = function(e) {
                i(e <= 67108863);
                for (var t = 0, n = this.length - 1; n >= 0; n--) {
                    var r = (0 | this.words[n]) + 67108864 * t;
                    this.words[n] = r / e | 0,
                    t = r % e
                }
                return this.strip()
            }
            ,
            a.prototype.divn = function(e) {
                return this.clone().idivn(e)
            }
            ,
            a.prototype.egcd = function(e) {
                i(0 === e.negative),
                i(!e.isZero());
                var t = this
                  , n = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (var r = new a(1), o = new a(0), s = new a(0), c = new a(1), f = 0; t.isEven() && n.isEven(); )
                    t.iushrn(1),
                    n.iushrn(1),
                    ++f;
                for (var h = n.clone(), u = t.clone(); !t.isZero(); ) {
                    for (var d = 0, l = 1; 0 == (t.words[0] & l) && d < 26; ++d,
                    l <<= 1)
                        ;
                    if (d > 0)
                        for (t.iushrn(d); d-- > 0; )
                            (r.isOdd() || o.isOdd()) && (r.iadd(h),
                            o.isub(u)),
                            r.iushrn(1),
                            o.iushrn(1);
                    for (var p = 0, b = 1; 0 == (n.words[0] & b) && p < 26; ++p,
                    b <<= 1)
                        ;
                    if (p > 0)
                        for (n.iushrn(p); p-- > 0; )
                            (s.isOdd() || c.isOdd()) && (s.iadd(h),
                            c.isub(u)),
                            s.iushrn(1),
                            c.iushrn(1);
                    t.cmp(n) >= 0 ? (t.isub(n),
                    r.isub(s),
                    o.isub(c)) : (n.isub(t),
                    s.isub(r),
                    c.isub(o))
                }
                return {
                    a: s,
                    b: c,
                    gcd: n.iushln(f)
                }
            }
            ,
            a.prototype._invmp = function(e) {
                i(0 === e.negative),
                i(!e.isZero());
                var t = this
                  , n = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (var r = new a(1), o = new a(0), s = n.clone(); t.cmpn(1) > 0 && n.cmpn(1) > 0; ) {
                    for (var c = 0, f = 1; 0 == (t.words[0] & f) && c < 26; ++c,
                    f <<= 1)
                        ;
                    if (c > 0)
                        for (t.iushrn(c); c-- > 0; )
                            r.isOdd() && r.iadd(s),
                            r.iushrn(1);
                    for (var h = 0, u = 1; 0 == (n.words[0] & u) && h < 26; ++h,
                    u <<= 1)
                        ;
                    if (h > 0)
                        for (n.iushrn(h); h-- > 0; )
                            o.isOdd() && o.iadd(s),
                            o.iushrn(1);
                    t.cmp(n) >= 0 ? (t.isub(n),
                    r.isub(o)) : (n.isub(t),
                    o.isub(r))
                }
                var d;
                return d = 0 === t.cmpn(1) ? r : o,
                d.cmpn(0) < 0 && d.iadd(e),
                d
            }
            ,
            a.prototype.gcd = function(e) {
                if (this.isZero())
                    return e.abs();
                if (e.isZero())
                    return this.abs();
                var t = this.clone()
                  , n = e.clone();
                t.negative = 0,
                n.negative = 0;
                for (var i = 0; t.isEven() && n.isEven(); i++)
                    t.iushrn(1),
                    n.iushrn(1);
                for (; ; ) {
                    for (; t.isEven(); )
                        t.iushrn(1);
                    for (; n.isEven(); )
                        n.iushrn(1);
                    var r = t.cmp(n);
                    if (r < 0) {
                        var a = t;
                        t = n,
                        n = a
                    } else if (0 === r || 0 === n.cmpn(1))
                        break;
                    t.isub(n)
                }
                return n.iushln(i)
            }
            ,
            a.prototype.invm = function(e) {
                return this.egcd(e).a.umod(e)
            }
            ,
            a.prototype.isEven = function() {
                return 0 == (1 & this.words[0])
            }
            ,
            a.prototype.isOdd = function() {
                return 1 == (1 & this.words[0])
            }
            ,
            a.prototype.andln = function(e) {
                return this.words[0] & e
            }
            ,
            a.prototype.bincn = function(e) {
                i("number" == typeof e);
                var t = e % 26
                  , n = (e - t) / 26
                  , r = 1 << t;
                if (this.length <= n)
                    return this._expand(n + 1),
                    this.words[n] |= r,
                    this;
                for (var a = r, o = n; 0 !== a && o < this.length; o++) {
                    var s = 0 | this.words[o];
                    s += a,
                    a = s >>> 26,
                    s &= 67108863,
                    this.words[o] = s
                }
                return 0 !== a && (this.words[o] = a,
                this.length++),
                this
            }
            ,
            a.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }
            ,
            a.prototype.cmpn = function(e) {
                var t = e < 0;
                if (0 !== this.negative && !t)
                    return -1;
                if (0 === this.negative && t)
                    return 1;
                this.strip();
                var n;
                if (this.length > 1)
                    n = 1;
                else {
                    t && (e = -e),
                    i(e <= 67108863, "Number is too big");
                    var r = 0 | this.words[0];
                    n = r === e ? 0 : r < e ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -n : n
            }
            ,
            a.prototype.cmp = function(e) {
                if (0 !== this.negative && 0 === e.negative)
                    return -1;
                if (0 === this.negative && 0 !== e.negative)
                    return 1;
                var t = this.ucmp(e);
                return 0 !== this.negative ? 0 | -t : t
            }
            ,
            a.prototype.ucmp = function(e) {
                if (this.length > e.length)
                    return 1;
                if (this.length < e.length)
                    return -1;
                for (var t = 0, n = this.length - 1; n >= 0; n--) {
                    var i = 0 | this.words[n]
                      , r = 0 | e.words[n];
                    if (i !== r) {
                        i < r ? t = -1 : i > r && (t = 1);
                        break
                    }
                }
                return t
            }
            ,
            a.prototype.gtn = function(e) {
                return 1 === this.cmpn(e)
            }
            ,
            a.prototype.gt = function(e) {
                return 1 === this.cmp(e)
            }
            ,
            a.prototype.gten = function(e) {
                return this.cmpn(e) >= 0
            }
            ,
            a.prototype.gte = function(e) {
                return this.cmp(e) >= 0
            }
            ,
            a.prototype.ltn = function(e) {
                return -1 === this.cmpn(e)
            }
            ,
            a.prototype.lt = function(e) {
                return -1 === this.cmp(e)
            }
            ,
            a.prototype.lten = function(e) {
                return this.cmpn(e) <= 0
            }
            ,
            a.prototype.lte = function(e) {
                return this.cmp(e) <= 0
            }
            ,
            a.prototype.eqn = function(e) {
                return 0 === this.cmpn(e)
            }
            ,
            a.prototype.eq = function(e) {
                return 0 === this.cmp(e)
            }
            ,
            a.red = function(e) {
                return new m(e)
            }
            ,
            a.prototype.toRed = function(e) {
                return i(!this.red, "Already a number in reduction context"),
                i(0 === this.negative, "red works only with positives"),
                e.convertTo(this)._forceRed(e)
            }
            ,
            a.prototype.fromRed = function() {
                return i(this.red, "fromRed works only with numbers in reduction context"),
                this.red.convertFrom(this)
            }
            ,
            a.prototype._forceRed = function(e) {
                return this.red = e,
                this
            }
            ,
            a.prototype.forceRed = function(e) {
                return i(!this.red, "Already a number in reduction context"),
                this._forceRed(e)
            }
            ,
            a.prototype.redAdd = function(e) {
                return i(this.red, "redAdd works only with red numbers"),
                this.red.add(this, e)
            }
            ,
            a.prototype.redIAdd = function(e) {
                return i(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, e)
            }
            ,
            a.prototype.redSub = function(e) {
                return i(this.red, "redSub works only with red numbers"),
                this.red.sub(this, e)
            }
            ,
            a.prototype.redISub = function(e) {
                return i(this.red, "redISub works only with red numbers"),
                this.red.isub(this, e)
            }
            ,
            a.prototype.redShl = function(e) {
                return i(this.red, "redShl works only with red numbers"),
                this.red.shl(this, e)
            }
            ,
            a.prototype.redMul = function(e) {
                return i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.mul(this, e)
            }
            ,
            a.prototype.redIMul = function(e) {
                return i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.imul(this, e)
            }
            ,
            a.prototype.redSqr = function() {
                return i(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
            }
            ,
            a.prototype.redISqr = function() {
                return i(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
            }
            ,
            a.prototype.redSqrt = function() {
                return i(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
            }
            ,
            a.prototype.redInvm = function() {
                return i(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
            }
            ,
            a.prototype.redNeg = function() {
                return i(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
            }
            ,
            a.prototype.redPow = function(e) {
                return i(this.red && !e.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, e)
            }
            ;
            var S = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            l.prototype._tmp = function() {
                var e = new a(null);
                return e.words = new Array(Math.ceil(this.n / 13)),
                e
            }
            ,
            l.prototype.ireduce = function(e) {
                var t, n = e;
                do {
                    this.split(n, this.tmp),
                    n = this.imulK(n),
                    n = n.iadd(this.tmp),
                    t = n.bitLength()
                } while (t > this.n);var i = t < this.n ? -1 : n.ucmp(this.p);
                return 0 === i ? (n.words[0] = 0,
                n.length = 1) : i > 0 ? n.isub(this.p) : n.strip(),
                n
            }
            ,
            l.prototype.split = function(e, t) {
                e.iushrn(this.n, 0, t)
            }
            ,
            l.prototype.imulK = function(e) {
                return e.imul(this.k)
            }
            ,
            r(p, l),
            p.prototype.split = function(e, t) {
                for (var n = Math.min(e.length, 9), i = 0; i < n; i++)
                    t.words[i] = e.words[i];
                if (t.length = n,
                e.length <= 9)
                    return e.words[0] = 0,
                    void (e.length = 1);
                var r = e.words[9];
                for (t.words[t.length++] = 4194303 & r,
                i = 10; i < e.length; i++) {
                    var a = 0 | e.words[i];
                    e.words[i - 10] = (4194303 & a) << 4 | r >>> 22,
                    r = a
                }
                r >>>= 22,
                e.words[i - 10] = r,
                0 === r && e.length > 10 ? e.length -= 10 : e.length -= 9
            }
            ,
            p.prototype.imulK = function(e) {
                e.words[e.length] = 0,
                e.words[e.length + 1] = 0,
                e.length += 2;
                for (var t = 0, n = 0; n < e.length; n++) {
                    var i = 0 | e.words[n];
                    t += 977 * i,
                    e.words[n] = 67108863 & t,
                    t = 64 * i + (t / 67108864 | 0)
                }
                return 0 === e.words[e.length - 1] && (e.length--,
                0 === e.words[e.length - 1] && e.length--),
                e
            }
            ,
            r(b, l),
            r(v, l),
            r(y, l),
            y.prototype.imulK = function(e) {
                for (var t = 0, n = 0; n < e.length; n++) {
                    var i = 19 * (0 | e.words[n]) + t
                      , r = 67108863 & i;
                    i >>>= 26,
                    e.words[n] = r,
                    t = i
                }
                return 0 !== t && (e.words[e.length++] = t),
                e
            }
            ,
            a._prime = function(e) {
                if (S[e])
                    return S[e];
                var t;
                if ("k256" === e)
                    t = new p;
                else if ("p224" === e)
                    t = new b;
                else if ("p192" === e)
                    t = new v;
                else {
                    if ("p25519" !== e)
                        throw new Error("Unknown prime " + e);
                    t = new y
                }
                return S[e] = t,
                t
            }
            ,
            m.prototype._verify1 = function(e) {
                i(0 === e.negative, "red works only with positives"),
                i(e.red, "red works only with red numbers")
            }
            ,
            m.prototype._verify2 = function(e, t) {
                i(0 == (e.negative | t.negative), "red works only with positives"),
                i(e.red && e.red === t.red, "red works only with red numbers")
            }
            ,
            m.prototype.imod = function(e) {
                return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
            }
            ,
            m.prototype.neg = function(e) {
                return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
            }
            ,
            m.prototype.add = function(e, t) {
                this._verify2(e, t);
                var n = e.add(t);
                return n.cmp(this.m) >= 0 && n.isub(this.m),
                n._forceRed(this)
            }
            ,
            m.prototype.iadd = function(e, t) {
                this._verify2(e, t);
                var n = e.iadd(t);
                return n.cmp(this.m) >= 0 && n.isub(this.m),
                n
            }
            ,
            m.prototype.sub = function(e, t) {
                this._verify2(e, t);
                var n = e.sub(t);
                return n.cmpn(0) < 0 && n.iadd(this.m),
                n._forceRed(this)
            }
            ,
            m.prototype.isub = function(e, t) {
                this._verify2(e, t);
                var n = e.isub(t);
                return n.cmpn(0) < 0 && n.iadd(this.m),
                n
            }
            ,
            m.prototype.shl = function(e, t) {
                return this._verify1(e),
                this.imod(e.ushln(t))
            }
            ,
            m.prototype.imul = function(e, t) {
                return this._verify2(e, t),
                this.imod(e.imul(t))
            }
            ,
            m.prototype.mul = function(e, t) {
                return this._verify2(e, t),
                this.imod(e.mul(t))
            }
            ,
            m.prototype.isqr = function(e) {
                return this.imul(e, e.clone())
            }
            ,
            m.prototype.sqr = function(e) {
                return this.mul(e, e)
            }
            ,
            m.prototype.sqrt = function(e) {
                if (e.isZero())
                    return e.clone();
                var t = this.m.andln(3);
                if (i(t % 2 == 1),
                3 === t) {
                    var n = this.m.add(new a(1)).iushrn(2);
                    return this.pow(e, n)
                }
                for (var r = this.m.subn(1), o = 0; !r.isZero() && 0 === r.andln(1); )
                    o++,
                    r.iushrn(1);
                i(!r.isZero());
                var s = new a(1).toRed(this)
                  , c = s.redNeg()
                  , f = this.m.subn(1).iushrn(1)
                  , h = this.m.bitLength();
                for (h = new a(2 * h * h).toRed(this); 0 !== this.pow(h, f).cmp(c); )
                    h.redIAdd(c);
                for (var u = this.pow(h, r), d = this.pow(e, r.addn(1).iushrn(1)), l = this.pow(e, r), p = o; 0 !== l.cmp(s); ) {
                    for (var b = l, v = 0; 0 !== b.cmp(s); v++)
                        b = b.redSqr();
                    i(v < p);
                    var y = this.pow(u, new a(1).iushln(p - v - 1));
                    d = d.redMul(y),
                    u = y.redSqr(),
                    l = l.redMul(u),
                    p = v
                }
                return d
            }
            ,
            m.prototype.invm = function(e) {
                var t = e._invmp(this.m);
                return 0 !== t.negative ? (t.negative = 0,
                this.imod(t).redNeg()) : this.imod(t)
            }
            ,
            m.prototype.pow = function(e, t) {
                if (t.isZero())
                    return new a(1).toRed(this);
                if (0 === t.cmpn(1))
                    return e.clone();
                var n = new Array(16);
                n[0] = new a(1).toRed(this),
                n[1] = e;
                for (var i = 2; i < n.length; i++)
                    n[i] = this.mul(n[i - 1], e);
                var r = n[0]
                  , o = 0
                  , s = 0
                  , c = t.bitLength() % 26;
                for (0 === c && (c = 26),
                i = t.length - 1; i >= 0; i--) {
                    for (var f = t.words[i], h = c - 1; h >= 0; h--) {
                        var u = f >> h & 1;
                        r !== n[0] && (r = this.sqr(r)),
                        0 !== u || 0 !== o ? (o <<= 1,
                        o |= u,
                        (4 === ++s || 0 === i && 0 === h) && (r = this.mul(r, n[o]),
                        s = 0,
                        o = 0)) : s = 0
                    }
                    c = 26
                }
                return r
            }
            ,
            m.prototype.convertTo = function(e) {
                var t = e.umod(this.m);
                return t === e ? t.clone() : t
            }
            ,
            m.prototype.convertFrom = function(e) {
                var t = e.clone();
                return t.red = null,
                t
            }
            ,
            a.mont = function(e) {
                return new g(e)
            }
            ,
            r(g, m),
            g.prototype.convertTo = function(e) {
                return this.imod(e.ushln(this.shift))
            }
            ,
            g.prototype.convertFrom = function(e) {
                var t = this.imod(e.mul(this.rinv));
                return t.red = null,
                t
            }
            ,
            g.prototype.imul = function(e, t) {
                if (e.isZero() || t.isZero())
                    return e.words[0] = 0,
                    e.length = 1,
                    e;
                var n = e.imul(t)
                  , i = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , r = n.isub(i).iushrn(this.shift)
                  , a = r;
                return r.cmp(this.m) >= 0 ? a = r.isub(this.m) : r.cmpn(0) < 0 && (a = r.iadd(this.m)),
                a._forceRed(this)
            }
            ,
            g.prototype.mul = function(e, t) {
                if (e.isZero() || t.isZero())
                    return new a(0)._forceRed(this);
                var n = e.mul(t)
                  , i = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , r = n.isub(i).iushrn(this.shift)
                  , o = r;
                return r.cmp(this.m) >= 0 ? o = r.isub(this.m) : r.cmpn(0) < 0 && (o = r.iadd(this.m)),
                o._forceRed(this)
            }
            ,
            g.prototype.invm = function(e) {
                return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        }(void 0 === e || e, this)
    }
    ).call(t, n(59)(e))
}
, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function i() {
        throw new Error("clearTimeout has not been defined")
    }
    function r(e) {
        if (h === setTimeout)
            return setTimeout(e, 0);
        if ((h === n || !h) && setTimeout)
            return h = setTimeout,
            setTimeout(e, 0);
        try {
            return h(e, 0)
        } catch (t) {
            try {
                return h.call(null, e, 0)
            } catch (t) {
                return h.call(this, e, 0)
            }
        }
    }
    function a(e) {
        if (u === clearTimeout)
            return clearTimeout(e);
        if ((u === i || !u) && clearTimeout)
            return u = clearTimeout,
            clearTimeout(e);
        try {
            return u(e)
        } catch (t) {
            try {
                return u.call(null, e)
            } catch (t) {
                return u.call(this, e)
            }
        }
    }
    function o() {
        b && l && (b = !1,
        l.length ? p = l.concat(p) : v = -1,
        p.length && s())
    }
    function s() {
        if (!b) {
            var e = r(o);
            b = !0;
            for (var t = p.length; t; ) {
                for (l = p,
                p = []; ++v < t; )
                    l && l[v].run();
                v = -1,
                t = p.length
            }
            l = null,
            b = !1,
            a(e)
        }
    }
    function c(e, t) {
        this.fun = e,
        this.array = t
    }
    function f() {}
    var h, u, d = e.exports = {};
    !function() {
        try {
            h = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            h = n
        }
        try {
            u = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            u = i
        }
    }();
    var l, p = [], b = !1, v = -1;
    d.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        p.push(new c(e,t)),
        1 !== p.length || b || r(s)
    }
    ,
    c.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    d.title = "browser",
    d.browser = !0,
    d.env = {},
    d.argv = [],
    d.version = "",
    d.versions = {},
    d.on = f,
    d.addListener = f,
    d.once = f,
    d.off = f,
    d.removeListener = f,
    d.removeAllListeners = f,
    d.emit = f,
    d.prependListener = f,
    d.prependOnceListener = f,
    d.listeners = function(e) {
        return []
    }
    ,
    d.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    d.cwd = function() {
        return "/"
    }
    ,
    d.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    d.umask = function() {
        return 0
    }
}
, , , function(e, t, n) {
    "use strict";
    function i(e) {
        if (!(this instanceof i))
            return new i(e);
        f.call(this, e),
        h.call(this, e),
        e && !1 === e.readable && (this.readable = !1),
        e && !1 === e.writable && (this.writable = !1),
        this.allowHalfOpen = !0,
        e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", r)
    }
    function r() {
        this.allowHalfOpen || this._writableState.ended || o(a, this)
    }
    function a(e) {
        e.end()
    }
    var o = n(24)
      , s = Object.keys || function(e) {
        var t = [];
        for (var n in e)
            t.push(n);
        return t
    }
    ;
    e.exports = i;
    var c = n(21);
    c.inherits = n(2);
    var f = n(44)
      , h = n(36);
    c.inherits(i, f);
    for (var u = s(h.prototype), d = 0; d < u.length; d++) {
        var l = u[d];
        i.prototype[l] || (i.prototype[l] = h.prototype[l])
    }
    Object.defineProperty(i.prototype, "destroyed", {
        get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
        },
        set: function(e) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
            this._writableState.destroyed = e)
        }
    }),
    i.prototype._destroy = function(e, t) {
        this.push(null),
        this.end(),
        o(t, e)
    }
}
, , , , function(e, t, n) {
    "use strict";
    var i = t;
    i.version = n(564).version,
    i.utils = n(565),
    i.rand = n(175),
    i.curve = n(73),
    i.curves = n(570),
    i.ec = n(578),
    i.eddsa = n(582)
}
, , , , , function(e, t) {
    function n(e, t) {
        if (!e)
            throw new Error(t || "Assertion failed")
    }
    e.exports = n,
    n.equal = function(e, t, n) {
        if (e != t)
            throw new Error(n || "Assertion failed: " + e + " != " + t)
    }
}
, function(e, t, n) {
    (function(e) {
        function n(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === v(e)
        }
        function i(e) {
            return "boolean" == typeof e
        }
        function r(e) {
            return null === e
        }
        function a(e) {
            return null == e
        }
        function o(e) {
            return "number" == typeof e
        }
        function s(e) {
            return "string" == typeof e
        }
        function c(e) {
            return "symbol" == typeof e
        }
        function f(e) {
            return void 0 === e
        }
        function h(e) {
            return "[object RegExp]" === v(e)
        }
        function u(e) {
            return "object" == typeof e && null !== e
        }
        function d(e) {
            return "[object Date]" === v(e)
        }
        function l(e) {
            return "[object Error]" === v(e) || e instanceof Error
        }
        function p(e) {
            return "function" == typeof e
        }
        function b(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
        }
        function v(e) {
            return Object.prototype.toString.call(e)
        }
        t.isArray = n,
        t.isBoolean = i,
        t.isNull = r,
        t.isNullOrUndefined = a,
        t.isNumber = o,
        t.isString = s,
        t.isSymbol = c,
        t.isUndefined = f,
        t.isRegExp = h,
        t.isObject = u,
        t.isDate = d,
        t.isError = l,
        t.isFunction = p,
        t.isPrimitive = b,
        t.isBuffer = e.isBuffer
    }
    ).call(t, n(4).Buffer)
}
, , function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (Array.isArray(e))
            return e.slice();
        if (!e)
            return [];
        var n = [];
        if ("string" == typeof e)
            if (t) {
                if ("hex" === t)
                    for (e = e.replace(/[^a-z0-9]+/gi, ""),
                    e.length % 2 != 0 && (e = "0" + e),
                    i = 0; i < e.length; i += 2)
                        n.push(parseInt(e[i] + e[i + 1], 16))
            } else
                for (var i = 0; i < e.length; i++) {
                    var r = e.charCodeAt(i)
                      , a = r >> 8
                      , o = 255 & r;
                    a ? n.push(a, o) : n.push(o)
                }
        else
            for (i = 0; i < e.length; i++)
                n[i] = 0 | e[i];
        return n
    }
    function r(e) {
        for (var t = "", n = 0; n < e.length; n++)
            t += s(e[n].toString(16));
        return t
    }
    function a(e) {
        return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
    }
    function o(e, t) {
        for (var n = "", i = 0; i < e.length; i++) {
            var r = e[i];
            "little" === t && (r = a(r)),
            n += c(r.toString(16))
        }
        return n
    }
    function s(e) {
        return 1 === e.length ? "0" + e : e
    }
    function c(e) {
        return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e
    }
    function f(e, t, n, i) {
        var r = n - t;
        B(r % 4 == 0);
        for (var a = new Array(r / 4), o = 0, s = t; o < a.length; o++,
        s += 4) {
            var c;
            c = "big" === i ? e[s] << 24 | e[s + 1] << 16 | e[s + 2] << 8 | e[s + 3] : e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s],
            a[o] = c >>> 0
        }
        return a
    }
    function h(e, t) {
        for (var n = new Array(4 * e.length), i = 0, r = 0; i < e.length; i++,
        r += 4) {
            var a = e[i];
            "big" === t ? (n[r] = a >>> 24,
            n[r + 1] = a >>> 16 & 255,
            n[r + 2] = a >>> 8 & 255,
            n[r + 3] = 255 & a) : (n[r + 3] = a >>> 24,
            n[r + 2] = a >>> 16 & 255,
            n[r + 1] = a >>> 8 & 255,
            n[r] = 255 & a)
        }
        return n
    }
    function u(e, t) {
        return e >>> t | e << 32 - t
    }
    function d(e, t) {
        return e << t | e >>> 32 - t
    }
    function l(e, t) {
        return e + t >>> 0
    }
    function p(e, t, n) {
        return e + t + n >>> 0
    }
    function b(e, t, n, i) {
        return e + t + n + i >>> 0
    }
    function v(e, t, n, i, r) {
        return e + t + n + i + r >>> 0
    }
    function y(e, t, n, i) {
        var r = e[t]
          , a = e[t + 1]
          , o = i + a >>> 0
          , s = (o < i ? 1 : 0) + n + r;
        e[t] = s >>> 0,
        e[t + 1] = o
    }
    function m(e, t, n, i) {
        return (t + i >>> 0 < t ? 1 : 0) + e + n >>> 0
    }
    function g(e, t, n, i) {
        return t + i >>> 0
    }
    function w(e, t, n, i, r, a, o, s) {
        var c = 0
          , f = t;
        return f = f + i >>> 0,
        c += f < t ? 1 : 0,
        f = f + a >>> 0,
        c += f < a ? 1 : 0,
        f = f + s >>> 0,
        c += f < s ? 1 : 0,
        e + n + r + o + c >>> 0
    }
    function _(e, t, n, i, r, a, o, s) {
        return t + i + a + s >>> 0
    }
    function A(e, t, n, i, r, a, o, s, c, f) {
        var h = 0
          , u = t;
        return u = u + i >>> 0,
        h += u < t ? 1 : 0,
        u = u + a >>> 0,
        h += u < a ? 1 : 0,
        u = u + s >>> 0,
        h += u < s ? 1 : 0,
        u = u + f >>> 0,
        h += u < f ? 1 : 0,
        e + n + r + o + c + h >>> 0
    }
    function M(e, t, n, i, r, a, o, s, c, f) {
        return t + i + a + s + f >>> 0
    }
    function E(e, t, n) {
        return (t << 32 - n | e >>> n) >>> 0
    }
    function S(e, t, n) {
        return (e << 32 - n | t >>> n) >>> 0
    }
    function x(e, t, n) {
        return e >>> n
    }
    function k(e, t, n) {
        return (e << 32 - n | t >>> n) >>> 0
    }
    var B = n(20)
      , O = n(2);
    t.inherits = O,
    t.toArray = i,
    t.toHex = r,
    t.htonl = a,
    t.toHex32 = o,
    t.zero2 = s,
    t.zero8 = c,
    t.join32 = f,
    t.split32 = h,
    t.rotr32 = u,
    t.rotl32 = d,
    t.sum32 = l,
    t.sum32_3 = p,
    t.sum32_4 = b,
    t.sum32_5 = v,
    t.sum64 = y,
    t.sum64_hi = m,
    t.sum64_lo = g,
    t.sum64_4_hi = w,
    t.sum64_4_lo = _,
    t.sum64_5_hi = A,
    t.sum64_5_lo = M,
    t.rotr64_hi = E,
    t.rotr64_lo = S,
    t.shr64_hi = x,
    t.shr64_lo = k
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        function n(e, n, i, r) {
            if ("function" != typeof e)
                throw new TypeError('"callback" argument must be a function');
            var a, o, s = arguments.length;
            switch (s) {
            case 0:
            case 1:
                return t.nextTick(e);
            case 2:
                return t.nextTick(function() {
                    e.call(null, n)
                });
            case 3:
                return t.nextTick(function() {
                    e.call(null, n, i)
                });
            case 4:
                return t.nextTick(function() {
                    e.call(null, n, i, r)
                });
            default:
                for (a = new Array(s - 1),
                o = 0; o < a.length; )
                    a[o++] = arguments[o];
                return t.nextTick(function() {
                    e.apply(null, a)
                })
            }
        }
        !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = n : e.exports = t.nextTick
    }
    ).call(t, n(8))
}
, , , , , , function(e, t, n) {
    function i(e) {
        a.call(this),
        this.hashMode = "string" == typeof e,
        this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest,
        this._final && (this.__final = this._final,
        this._final = null),
        this._decoder = null,
        this._encoding = null
    }
    var r = n(3).Buffer
      , a = n(104).Transform
      , o = n(37).StringDecoder;
    n(2)(i, a),
    i.prototype.update = function(e, t, n) {
        "string" == typeof e && (e = r.from(e, t));
        var i = this._update(e);
        return this.hashMode ? this : (n && (i = this._toString(i, n)),
        i)
    }
    ,
    i.prototype.setAutoPadding = function() {}
    ,
    i.prototype.getAuthTag = function() {
        throw new Error("trying to get auth tag in unsupported state")
    }
    ,
    i.prototype.setAuthTag = function() {
        throw new Error("trying to set auth tag in unsupported state")
    }
    ,
    i.prototype.setAAD = function() {
        throw new Error("trying to set aad in unsupported state")
    }
    ,
    i.prototype._transform = function(e, t, n) {
        var i;
        try {
            this.hashMode ? this._update(e) : this.push(this._update(e))
        } catch (e) {
            i = e
        } finally {
            n(i)
        }
    }
    ,
    i.prototype._flush = function(e) {
        var t;
        try {
            this.push(this.__final())
        } catch (e) {
            t = e
        }
        e(t)
    }
    ,
    i.prototype._finalOrDigest = function(e) {
        var t = this.__final() || r.alloc(0);
        return e && (t = this._toString(t, e, !0)),
        t
    }
    ,
    i.prototype._toString = function(e, t, n) {
        if (this._decoder || (this._decoder = new o(t),
        this._encoding = t),
        this._encoding !== t)
            throw new Error("can't switch encodings");
        var i = this._decoder.write(e);
        return n && (i += this._decoder.end()),
        i
    }
    ,
    e.exports = i
}
, , , , function(e, t, n) {
    t = e.exports = n(44),
    t.Stream = t,
    t.Readable = t,
    t.Writable = n(36),
    t.Duplex = n(11),
    t.Transform = n(47),
    t.PassThrough = n(82)
}
, function(e, t) {
    function n() {
        this._events = this._events || {},
        this._maxListeners = this._maxListeners || void 0
    }
    function i(e) {
        return "function" == typeof e
    }
    function r(e) {
        return "number" == typeof e
    }
    function a(e) {
        return "object" == typeof e && null !== e
    }
    function o(e) {
        return void 0 === e
    }
    e.exports = n,
    n.EventEmitter = n,
    n.prototype._events = void 0,
    n.prototype._maxListeners = void 0,
    n.defaultMaxListeners = 10,
    n.prototype.setMaxListeners = function(e) {
        if (!r(e) || e < 0 || isNaN(e))
            throw TypeError("n must be a positive number");
        return this._maxListeners = e,
        this
    }
    ,
    n.prototype.emit = function(e) {
        var t, n, r, s, c, f;
        if (this._events || (this._events = {}),
        "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
            if ((t = arguments[1])instanceof Error)
                throw t;
            var h = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw h.context = t,
            h
        }
        if (n = this._events[e],
        o(n))
            return !1;
        if (i(n))
            switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                s = Array.prototype.slice.call(arguments, 1),
                n.apply(this, s)
            }
        else if (a(n))
            for (s = Array.prototype.slice.call(arguments, 1),
            f = n.slice(),
            r = f.length,
            c = 0; c < r; c++)
                f[c].apply(this, s);
        return !0
    }
    ,
    n.prototype.addListener = function(e, t) {
        var r;
        if (!i(t))
            throw TypeError("listener must be a function");
        return this._events || (this._events = {}),
        this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t),
        this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
        a(this._events[e]) && !this._events[e].warned && (r = o(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && r > 0 && this._events[e].length > r && (this._events[e].warned = !0,
        console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length),
        "function" == typeof console.trace && console.trace()),
        this
    }
    ,
    n.prototype.on = n.prototype.addListener,
    n.prototype.once = function(e, t) {
        function n() {
            this.removeListener(e, n),
            r || (r = !0,
            t.apply(this, arguments))
        }
        if (!i(t))
            throw TypeError("listener must be a function");
        var r = !1;
        return n.listener = t,
        this.on(e, n),
        this
    }
    ,
    n.prototype.removeListener = function(e, t) {
        var n, r, o, s;
        if (!i(t))
            throw TypeError("listener must be a function");
        if (!this._events || !this._events[e])
            return this;
        if (n = this._events[e],
        o = n.length,
        r = -1,
        n === t || i(n.listener) && n.listener === t)
            delete this._events[e],
            this._events.removeListener && this.emit("removeListener", e, t);
        else if (a(n)) {
            for (s = o; s-- > 0; )
                if (n[s] === t || n[s].listener && n[s].listener === t) {
                    r = s;
                    break
                }
            if (r < 0)
                return this;
            1 === n.length ? (n.length = 0,
            delete this._events[e]) : n.splice(r, 1),
            this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }
    ,
    n.prototype.removeAllListeners = function(e) {
        var t, n;
        if (!this._events)
            return this;
        if (!this._events.removeListener)
            return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e],
            this;
        if (0 === arguments.length) {
            for (t in this._events)
                "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"),
            this._events = {},
            this
        }
        if (n = this._events[e],
        i(n))
            this.removeListener(e, n);
        else if (n)
            for (; n.length; )
                this.removeListener(e, n[n.length - 1]);
        return delete this._events[e],
        this
    }
    ,
    n.prototype.listeners = function(e) {
        return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }
    ,
    n.prototype.listenerCount = function(e) {
        if (this._events) {
            var t = this._events[e];
            if (i(t))
                return 1;
            if (t)
                return t.length
        }
        return 0
    }
    ,
    n.listenerCount = function(e, t) {
        return e.listenerCount(t)
    }
}
, function(e, t, n) {
    "use strict";
    (function(t, i, r) {
        function a(e) {
            var t = this;
            this.next = null,
            this.entry = null,
            this.finish = function() {
                k(t, e)
            }
        }
        function o(e) {
            return R.from(e)
        }
        function s(e) {
            return R.isBuffer(e) || e instanceof L
        }
        function c() {}
        function f(e, t) {
            O = O || n(11),
            e = e || {},
            this.objectMode = !!e.objectMode,
            t instanceof O && (this.objectMode = this.objectMode || !!e.writableObjectMode);
            var i = e.highWaterMark
              , r = this.objectMode ? 16 : 16384;
            this.highWaterMark = i || 0 === i ? i : r,
            this.highWaterMark = Math.floor(this.highWaterMark),
            this.finalCalled = !1,
            this.needDrain = !1,
            this.ending = !1,
            this.ended = !1,
            this.finished = !1,
            this.destroyed = !1;
            var o = !1 === e.decodeStrings;
            this.decodeStrings = !o,
            this.defaultEncoding = e.defaultEncoding || "utf8",
            this.length = 0,
            this.writing = !1,
            this.corked = 0,
            this.sync = !0,
            this.bufferProcessing = !1,
            this.onwrite = function(e) {
                m(t, e)
            }
            ,
            this.writecb = null,
            this.writelen = 0,
            this.bufferedRequest = null,
            this.lastBufferedRequest = null,
            this.pendingcb = 0,
            this.prefinished = !1,
            this.errorEmitted = !1,
            this.bufferedRequestCount = 0,
            this.corkedRequestsFree = new a(this)
        }
        function h(e) {
            if (O = O || n(11),
            !(j.call(h, this) || this instanceof O))
                return new h(e);
            this._writableState = new f(e,this),
            this.writable = !0,
            e && ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
            I.call(this)
        }
        function u(e, t) {
            var n = new Error("write after end");
            e.emit("error", n),
            B(t, n)
        }
        function d(e, t, n, i) {
            var r = !0
              , a = !1;
            return null === n ? a = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || t.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")),
            a && (e.emit("error", a),
            B(i, a),
            r = !1),
            r
        }
        function l(e, t, n) {
            return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = R.from(t, n)),
            t
        }
        function p(e, t, n, i, r, a) {
            if (!n) {
                var o = l(t, i, r);
                i !== o && (n = !0,
                r = "buffer",
                i = o)
            }
            var s = t.objectMode ? 1 : i.length;
            t.length += s;
            var c = t.length < t.highWaterMark;
            if (c || (t.needDrain = !0),
            t.writing || t.corked) {
                var f = t.lastBufferedRequest;
                t.lastBufferedRequest = {
                    chunk: i,
                    encoding: r,
                    isBuf: n,
                    callback: a,
                    next: null
                },
                f ? f.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                t.bufferedRequestCount += 1
            } else
                b(e, t, !1, s, i, r, a);
            return c
        }
        function b(e, t, n, i, r, a, o) {
            t.writelen = i,
            t.writecb = o,
            t.writing = !0,
            t.sync = !0,
            n ? e._writev(r, t.onwrite) : e._write(r, a, t.onwrite),
            t.sync = !1
        }
        function v(e, t, n, i, r) {
            --t.pendingcb,
            n ? (B(r, i),
            B(S, e, t),
            e._writableState.errorEmitted = !0,
            e.emit("error", i)) : (r(i),
            e._writableState.errorEmitted = !0,
            e.emit("error", i),
            S(e, t))
        }
        function y(e) {
            e.writing = !1,
            e.writecb = null,
            e.length -= e.writelen,
            e.writelen = 0
        }
        function m(e, t) {
            var n = e._writableState
              , i = n.sync
              , r = n.writecb;
            if (y(n),
            t)
                v(e, n, i, t, r);
            else {
                var a = A(n);
                a || n.corked || n.bufferProcessing || !n.bufferedRequest || _(e, n),
                i ? P(g, e, n, a, r) : g(e, n, a, r)
            }
        }
        function g(e, t, n, i) {
            n || w(e, t),
            t.pendingcb--,
            i(),
            S(e, t)
        }
        function w(e, t) {
            0 === t.length && t.needDrain && (t.needDrain = !1,
            e.emit("drain"))
        }
        function _(e, t) {
            t.bufferProcessing = !0;
            var n = t.bufferedRequest;
            if (e._writev && n && n.next) {
                var i = t.bufferedRequestCount
                  , r = new Array(i)
                  , o = t.corkedRequestsFree;
                o.entry = n;
                for (var s = 0, c = !0; n; )
                    r[s] = n,
                    n.isBuf || (c = !1),
                    n = n.next,
                    s += 1;
                r.allBuffers = c,
                b(e, t, !0, t.length, r, "", o.finish),
                t.pendingcb++,
                t.lastBufferedRequest = null,
                o.next ? (t.corkedRequestsFree = o.next,
                o.next = null) : t.corkedRequestsFree = new a(t)
            } else {
                for (; n; ) {
                    var f = n.chunk
                      , h = n.encoding
                      , u = n.callback;
                    if (b(e, t, !1, t.objectMode ? 1 : f.length, f, h, u),
                    n = n.next,
                    t.writing)
                        break
                }
                null === n && (t.lastBufferedRequest = null)
            }
            t.bufferedRequestCount = 0,
            t.bufferedRequest = n,
            t.bufferProcessing = !1
        }
        function A(e) {
            return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
        }
        function M(e, t) {
            e._final(function(n) {
                t.pendingcb--,
                n && e.emit("error", n),
                t.prefinished = !0,
                e.emit("prefinish"),
                S(e, t)
            })
        }
        function E(e, t) {
            t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++,
            t.finalCalled = !0,
            B(M, e, t)) : (t.prefinished = !0,
            e.emit("prefinish")))
        }
        function S(e, t) {
            var n = A(t);
            return n && (E(e, t),
            0 === t.pendingcb && (t.finished = !0,
            e.emit("finish"))),
            n
        }
        function x(e, t, n) {
            t.ending = !0,
            S(e, t),
            n && (t.finished ? B(n) : e.once("finish", n)),
            t.ended = !0,
            e.writable = !1
        }
        function k(e, t, n) {
            var i = e.entry;
            for (e.entry = null; i; ) {
                var r = i.callback;
                t.pendingcb--,
                r(n),
                i = i.next
            }
            t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
        }
        var B = n(24);
        e.exports = h;
        var O, P = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? i : B;
        h.WritableState = f;
        var C = n(21);
        C.inherits = n(2);
        var T = {
            deprecate: n(81)
        }
          , I = n(45)
          , R = n(3).Buffer
          , L = r.Uint8Array || function() {}
          , N = n(46);
        C.inherits(h, I),
        f.prototype.getBuffer = function() {
            for (var e = this.bufferedRequest, t = []; e; )
                t.push(e),
                e = e.next;
            return t
        }
        ,
        function() {
            try {
                Object.defineProperty(f.prototype, "buffer", {
                    get: T.deprecate(function() {
                        return this.getBuffer()
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch (e) {}
        }();
        var j;
        "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (j = Function.prototype[Symbol.hasInstance],
        Object.defineProperty(h, Symbol.hasInstance, {
            value: function(e) {
                return !!j.call(this, e) || e && e._writableState instanceof f
            }
        })) : j = function(e) {
            return e instanceof this
        }
        ,
        h.prototype.pipe = function() {
            this.emit("error", new Error("Cannot pipe, not readable"))
        }
        ,
        h.prototype.write = function(e, t, n) {
            var i = this._writableState
              , r = !1
              , a = s(e) && !i.objectMode;
            return a && !R.isBuffer(e) && (e = o(e)),
            "function" == typeof t && (n = t,
            t = null),
            a ? t = "buffer" : t || (t = i.defaultEncoding),
            "function" != typeof n && (n = c),
            i.ended ? u(this, n) : (a || d(this, i, e, n)) && (i.pendingcb++,
            r = p(this, i, a, e, t, n)),
            r
        }
        ,
        h.prototype.cork = function() {
            this._writableState.corked++
        }
        ,
        h.prototype.uncork = function() {
            var e = this._writableState;
            e.corked && (e.corked--,
            e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || _(this, e))
        }
        ,
        h.prototype.setDefaultEncoding = function(e) {
            if ("string" == typeof e && (e = e.toLowerCase()),
            !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                throw new TypeError("Unknown encoding: " + e);
            return this._writableState.defaultEncoding = e,
            this
        }
        ,
        h.prototype._write = function(e, t, n) {
            n(new Error("_write() is not implemented"))
        }
        ,
        h.prototype._writev = null,
        h.prototype.end = function(e, t, n) {
            var i = this._writableState;
            "function" == typeof e ? (n = e,
            e = null,
            t = null) : "function" == typeof t && (n = t,
            t = null),
            null !== e && void 0 !== e && this.write(e, t),
            i.corked && (i.corked = 1,
            this.uncork()),
            i.ending || i.finished || x(this, i, n)
        }
        ,
        Object.defineProperty(h.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._writableState && this._writableState.destroyed
            },
            set: function(e) {
                this._writableState && (this._writableState.destroyed = e)
            }
        }),
        h.prototype.destroy = N.destroy,
        h.prototype._undestroy = N.undestroy,
        h.prototype._destroy = function(e, t) {
            this.end(),
            t(e)
        }
    }
    ).call(t, n(8), n(42).setImmediate, n(1))
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        if (!e)
            return "utf8";
        for (var t; ; )
            switch (e) {
            case "utf8":
            case "utf-8":
                return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return "utf16le";
            case "latin1":
            case "binary":
                return "latin1";
            case "base64":
            case "ascii":
            case "hex":
                return e;
            default:
                if (t)
                    return;
                e = ("" + e).toLowerCase(),
                t = !0
            }
    }
    function r(e) {
        var t = i(e);
        if ("string" != typeof t && (m.isEncoding === g || !g(e)))
            throw new Error("Unknown encoding: " + e);
        return t || e
    }
    function a(e) {
        this.encoding = r(e);
        var t;
        switch (this.encoding) {
        case "utf16le":
            this.text = d,
            this.end = l,
            t = 4;
            break;
        case "utf8":
            this.fillLast = f,
            t = 4;
            break;
        case "base64":
            this.text = p,
            this.end = b,
            t = 3;
            break;
        default:
            return this.write = v,
            void (this.end = y)
        }
        this.lastNeed = 0,
        this.lastTotal = 0,
        this.lastChar = m.allocUnsafe(t)
    }
    function o(e) {
        return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : -1
    }
    function s(e, t, n) {
        var i = t.length - 1;
        if (i < n)
            return 0;
        var r = o(t[i]);
        return r >= 0 ? (r > 0 && (e.lastNeed = r - 1),
        r) : --i < n ? 0 : (r = o(t[i])) >= 0 ? (r > 0 && (e.lastNeed = r - 2),
        r) : --i < n ? 0 : (r = o(t[i]),
        r >= 0 ? (r > 0 && (2 === r ? r = 0 : e.lastNeed = r - 3),
        r) : 0)
    }
    function c(e, t, n) {
        if (128 != (192 & t[0]))
            return e.lastNeed = 0,
            "�".repeat(n);
        if (e.lastNeed > 1 && t.length > 1) {
            if (128 != (192 & t[1]))
                return e.lastNeed = 1,
                "�".repeat(n + 1);
            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                return e.lastNeed = 2,
                "�".repeat(n + 2)
        }
    }
    function f(e) {
        var t = this.lastTotal - this.lastNeed
          , n = c(this, e, t);
        return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
        this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
        void (this.lastNeed -= e.length))
    }
    function h(e, t) {
        var n = s(this, e, t);
        if (!this.lastNeed)
            return e.toString("utf8", t);
        this.lastTotal = n;
        var i = e.length - (n - this.lastNeed);
        return e.copy(this.lastChar, 0, i),
        e.toString("utf8", t, i)
    }
    function u(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�".repeat(this.lastTotal - this.lastNeed) : t
    }
    function d(e, t) {
        if ((e.length - t) % 2 == 0) {
            var n = e.toString("utf16le", t);
            if (n) {
                var i = n.charCodeAt(n.length - 1);
                if (i >= 55296 && i <= 56319)
                    return this.lastNeed = 2,
                    this.lastTotal = 4,
                    this.lastChar[0] = e[e.length - 2],
                    this.lastChar[1] = e[e.length - 1],
                    n.slice(0, -1)
            }
            return n
        }
        return this.lastNeed = 1,
        this.lastTotal = 2,
        this.lastChar[0] = e[e.length - 1],
        e.toString("utf16le", t, e.length - 1)
    }
    function l(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
            var n = this.lastTotal - this.lastNeed;
            return t + this.lastChar.toString("utf16le", 0, n)
        }
        return t
    }
    function p(e, t) {
        var n = (e.length - t) % 3;
        return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n,
        this.lastTotal = 3,
        1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
        this.lastChar[1] = e[e.length - 1]),
        e.toString("base64", t, e.length - n))
    }
    function b(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
    }
    function v(e) {
        return e.toString(this.encoding)
    }
    function y(e) {
        return e && e.length ? this.write(e) : ""
    }
    var m = n(3).Buffer
      , g = m.isEncoding || function(e) {
        switch ((e = "" + e) && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return !0;
        default:
            return !1
        }
    }
    ;
    t.StringDecoder = a,
    a.prototype.write = function(e) {
        if (0 === e.length)
            return "";
        var t, n;
        if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e)))
                return "";
            n = this.lastNeed,
            this.lastNeed = 0
        } else
            n = 0;
        return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
    }
    ,
    a.prototype.end = u,
    a.prototype.text = h,
    a.prototype.fillLast = function(e) {
        if (this.lastNeed <= e.length)
            return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal);
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
        this.lastNeed -= e.length
    }
}
, , , function(e, t, n) {
    "use strict";
    (function(t, i) {
        function r() {
            throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
        }
        function a(e, n) {
            if (e > 65536)
                throw new Error("requested too many random bytes");
            var r = new t.Uint8Array(e);
            e > 0 && s.getRandomValues(r);
            var a = o.from(r.buffer);
            return "function" == typeof n ? i.nextTick(function() {
                n(null, a)
            }) : a
        }
        var o = n(3).Buffer
          , s = t.crypto || t.msCrypto;
        s && s.getRandomValues ? e.exports = a : e.exports = r
    }
    ).call(t, n(1), n(8))
}
, function(e, t, n) {
    function i(e, t) {
        this._block = r.alloc(e),
        this._finalSize = t,
        this._blockSize = e,
        this._len = 0
    }
    var r = n(3).Buffer;
    i.prototype.update = function(e, t) {
        "string" == typeof e && (t = t || "utf8",
        e = r.from(e, t));
        for (var n = this._block, i = this._blockSize, a = e.length, o = this._len, s = 0; s < a; ) {
            for (var c = o % i, f = Math.min(a - s, i - c), h = 0; h < f; h++)
                n[c + h] = e[s + h];
            o += f,
            s += f,
            o % i == 0 && this._update(n)
        }
        return this._len += a,
        this
    }
    ,
    i.prototype.digest = function(e) {
        var t = this._len % this._blockSize;
        this._block[t] = 128,
        this._block.fill(0, t + 1),
        t >= this._finalSize && (this._update(this._block),
        this._block.fill(0));
        var n = 8 * this._len;
        if (n <= 4294967295)
            this._block.writeUInt32BE(n, this._blockSize - 4);
        else {
            var i = 4294967295 & n
              , r = (n - i) / 4294967296;
            this._block.writeUInt32BE(r, this._blockSize - 8),
            this._block.writeUInt32BE(i, this._blockSize - 4)
        }
        this._update(this._block);
        var a = this._hash();
        return e ? a.toString(e) : a
    }
    ,
    i.prototype._update = function() {
        throw new Error("_update must be implemented by subclass")
    }
    ,
    e.exports = i
}
, function(e, t, n) {
    (function(e) {
        function i(e, t) {
            this._id = e,
            this._clearFn = t
        }
        var r = Function.prototype.apply;
        t.setTimeout = function() {
            return new i(r.call(setTimeout, window, arguments),clearTimeout)
        }
        ,
        t.setInterval = function() {
            return new i(r.call(setInterval, window, arguments),clearInterval)
        }
        ,
        t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }
        ,
        i.prototype.unref = i.prototype.ref = function() {}
        ,
        i.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }
        ,
        t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = t
        }
        ,
        t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = -1
        }
        ,
        t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, t))
        }
        ,
        n(76),
        t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
        t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }
    ).call(t, n(1))
}
, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}
, function(e, t, n) {
    "use strict";
    (function(t, i) {
        function r(e) {
            return j.from(e)
        }
        function a(e) {
            return j.isBuffer(e) || e instanceof Y
        }
        function o(e, t, n) {
            if ("function" == typeof e.prependListener)
                return e.prependListener(t, n);
            e._events && e._events[t] ? R(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n)
        }
        function s(e, t) {
            I = I || n(11),
            e = e || {},
            this.objectMode = !!e.objectMode,
            t instanceof I && (this.objectMode = this.objectMode || !!e.readableObjectMode);
            var i = e.highWaterMark
              , r = this.objectMode ? 16 : 16384;
            this.highWaterMark = i || 0 === i ? i : r,
            this.highWaterMark = Math.floor(this.highWaterMark),
            this.buffer = new F,
            this.length = 0,
            this.pipes = null,
            this.pipesCount = 0,
            this.flowing = null,
            this.ended = !1,
            this.endEmitted = !1,
            this.reading = !1,
            this.sync = !0,
            this.needReadable = !1,
            this.emittedReadable = !1,
            this.readableListening = !1,
            this.resumeScheduled = !1,
            this.destroyed = !1,
            this.defaultEncoding = e.defaultEncoding || "utf8",
            this.awaitDrain = 0,
            this.readingMore = !1,
            this.decoder = null,
            this.encoding = null,
            e.encoding && (U || (U = n(37).StringDecoder),
            this.decoder = new U(e.encoding),
            this.encoding = e.encoding)
        }
        function c(e) {
            if (I = I || n(11),
            !(this instanceof c))
                return new c(e);
            this._readableState = new s(e,this),
            this.readable = !0,
            e && ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
            N.call(this)
        }
        function f(e, t, n, i, a) {
            var o = e._readableState;
            if (null === t)
                o.reading = !1,
                b(e, o);
            else {
                var s;
                a || (s = u(o, t)),
                s ? e.emit("error", s) : o.objectMode || t && t.length > 0 ? ("string" == typeof t || o.objectMode || Object.getPrototypeOf(t) === j.prototype || (t = r(t)),
                i ? o.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : h(e, o, t, !0) : o.ended ? e.emit("error", new Error("stream.push() after EOF")) : (o.reading = !1,
                o.decoder && !n ? (t = o.decoder.write(t),
                o.objectMode || 0 !== t.length ? h(e, o, t, !1) : m(e, o)) : h(e, o, t, !1))) : i || (o.reading = !1)
            }
            return d(o)
        }
        function h(e, t, n, i) {
            t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n),
            e.read(0)) : (t.length += t.objectMode ? 1 : n.length,
            i ? t.buffer.unshift(n) : t.buffer.push(n),
            t.needReadable && v(e)),
            m(e, t)
        }
        function u(e, t) {
            var n;
            return a(t) || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")),
            n
        }
        function d(e) {
            return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
        }
        function l(e) {
            return e >= V ? e = V : (e--,
            e |= e >>> 1,
            e |= e >>> 2,
            e |= e >>> 4,
            e |= e >>> 8,
            e |= e >>> 16,
            e++),
            e
        }
        function p(e, t) {
            return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = l(e)),
            e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
            0))
        }
        function b(e, t) {
            if (!t.ended) {
                if (t.decoder) {
                    var n = t.decoder.end();
                    n && n.length && (t.buffer.push(n),
                    t.length += t.objectMode ? 1 : n.length)
                }
                t.ended = !0,
                v(e)
            }
        }
        function v(e) {
            var t = e._readableState;
            t.needReadable = !1,
            t.emittedReadable || (X("emitReadable", t.flowing),
            t.emittedReadable = !0,
            t.sync ? T(y, e) : y(e))
        }
        function y(e) {
            X("emit readable"),
            e.emit("readable"),
            E(e)
        }
        function m(e, t) {
            t.readingMore || (t.readingMore = !0,
            T(g, e, t))
        }
        function g(e, t) {
            for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (X("maybeReadMore read 0"),
            e.read(0),
            n !== t.length); )
                n = t.length;
            t.readingMore = !1
        }
        function w(e) {
            return function() {
                var t = e._readableState;
                X("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && L(e, "data") && (t.flowing = !0,
                E(e))
            }
        }
        function _(e) {
            X("readable nexttick read 0"),
            e.read(0)
        }
        function A(e, t) {
            t.resumeScheduled || (t.resumeScheduled = !0,
            T(M, e, t))
        }
        function M(e, t) {
            t.reading || (X("resume read 0"),
            e.read(0)),
            t.resumeScheduled = !1,
            t.awaitDrain = 0,
            e.emit("resume"),
            E(e),
            t.flowing && !t.reading && e.read(0)
        }
        function E(e) {
            var t = e._readableState;
            for (X("flow", t.flowing); t.flowing && null !== e.read(); )
                ;
        }
        function S(e, t) {
            if (0 === t.length)
                return null;
            var n;
            return t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length),
            t.buffer.clear()) : n = x(e, t.buffer, t.decoder),
            n
        }
        function x(e, t, n) {
            var i;
            return e < t.head.data.length ? (i = t.head.data.slice(0, e),
            t.head.data = t.head.data.slice(e)) : i = e === t.head.data.length ? t.shift() : n ? k(e, t) : B(e, t),
            i
        }
        function k(e, t) {
            var n = t.head
              , i = 1
              , r = n.data;
            for (e -= r.length; n = n.next; ) {
                var a = n.data
                  , o = e > a.length ? a.length : e;
                if (o === a.length ? r += a : r += a.slice(0, e),
                0 === (e -= o)) {
                    o === a.length ? (++i,
                    n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n,
                    n.data = a.slice(o));
                    break
                }
                ++i
            }
            return t.length -= i,
            r
        }
        function B(e, t) {
            var n = j.allocUnsafe(e)
              , i = t.head
              , r = 1;
            for (i.data.copy(n),
            e -= i.data.length; i = i.next; ) {
                var a = i.data
                  , o = e > a.length ? a.length : e;
                if (a.copy(n, n.length - e, 0, o),
                0 === (e -= o)) {
                    o === a.length ? (++r,
                    i.next ? t.head = i.next : t.head = t.tail = null) : (t.head = i,
                    i.data = a.slice(o));
                    break
                }
                ++r
            }
            return t.length -= r,
            n
        }
        function O(e) {
            var t = e._readableState;
            if (t.length > 0)
                throw new Error('"endReadable()" called on non-empty stream');
            t.endEmitted || (t.ended = !0,
            T(P, t, e))
        }
        function P(e, t) {
            e.endEmitted || 0 !== e.length || (e.endEmitted = !0,
            t.readable = !1,
            t.emit("end"))
        }
        function C(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }
        var T = n(24);
        e.exports = c;
        var I, R = n(43);
        c.ReadableState = s;
        var L = (n(35).EventEmitter,
        function(e, t) {
            return e.listeners(t).length
        }
        )
          , N = n(45)
          , j = n(3).Buffer
          , Y = t.Uint8Array || function() {}
          , D = n(21);
        D.inherits = n(2);
        var z = n(79)
          , X = void 0;
        X = z && z.debuglog ? z.debuglog("stream") : function() {}
        ;
        var U, F = n(80), Z = n(46);
        D.inherits(c, N);
        var q = ["error", "close", "destroy", "pause", "resume"];
        Object.defineProperty(c.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && this._readableState.destroyed
            },
            set: function(e) {
                this._readableState && (this._readableState.destroyed = e)
            }
        }),
        c.prototype.destroy = Z.destroy,
        c.prototype._undestroy = Z.undestroy,
        c.prototype._destroy = function(e, t) {
            this.push(null),
            t(e)
        }
        ,
        c.prototype.push = function(e, t) {
            var n, i = this._readableState;
            return i.objectMode ? n = !0 : "string" == typeof e && (t = t || i.defaultEncoding,
            t !== i.encoding && (e = j.from(e, t),
            t = ""),
            n = !0),
            f(this, e, t, !1, n)
        }
        ,
        c.prototype.unshift = function(e) {
            return f(this, e, null, !0, !1)
        }
        ,
        c.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
        }
        ,
        c.prototype.setEncoding = function(e) {
            return U || (U = n(37).StringDecoder),
            this._readableState.decoder = new U(e),
            this._readableState.encoding = e,
            this
        }
        ;
        var V = 8388608;
        c.prototype.read = function(e) {
            X("read", e),
            e = parseInt(e, 10);
            var t = this._readableState
              , n = e;
            if (0 !== e && (t.emittedReadable = !1),
            0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
                return X("read: emitReadable", t.length, t.ended),
                0 === t.length && t.ended ? O(this) : v(this),
                null;
            if (0 === (e = p(e, t)) && t.ended)
                return 0 === t.length && O(this),
                null;
            var i = t.needReadable;
            X("need readable", i),
            (0 === t.length || t.length - e < t.highWaterMark) && (i = !0,
            X("length less than watermark", i)),
            t.ended || t.reading ? (i = !1,
            X("reading or ended", i)) : i && (X("do read"),
            t.reading = !0,
            t.sync = !0,
            0 === t.length && (t.needReadable = !0),
            this._read(t.highWaterMark),
            t.sync = !1,
            t.reading || (e = p(n, t)));
            var r;
            return r = e > 0 ? S(e, t) : null,
            null === r ? (t.needReadable = !0,
            e = 0) : t.length -= e,
            0 === t.length && (t.ended || (t.needReadable = !0),
            n !== e && t.ended && O(this)),
            null !== r && this.emit("data", r),
            r
        }
        ,
        c.prototype._read = function(e) {
            this.emit("error", new Error("_read() is not implemented"))
        }
        ,
        c.prototype.pipe = function(e, t) {
            function n(e, t) {
                X("onunpipe"),
                e === d && t && !1 === t.hasUnpiped && (t.hasUnpiped = !0,
                a())
            }
            function r() {
                X("onend"),
                e.end()
            }
            function a() {
                X("cleanup"),
                e.removeListener("close", f),
                e.removeListener("finish", h),
                e.removeListener("drain", v),
                e.removeListener("error", c),
                e.removeListener("unpipe", n),
                d.removeListener("end", r),
                d.removeListener("end", u),
                d.removeListener("data", s),
                y = !0,
                !l.awaitDrain || e._writableState && !e._writableState.needDrain || v()
            }
            function s(t) {
                X("ondata"),
                m = !1,
                !1 !== e.write(t) || m || ((1 === l.pipesCount && l.pipes === e || l.pipesCount > 1 && -1 !== C(l.pipes, e)) && !y && (X("false write response, pause", d._readableState.awaitDrain),
                d._readableState.awaitDrain++,
                m = !0),
                d.pause())
            }
            function c(t) {
                X("onerror", t),
                u(),
                e.removeListener("error", c),
                0 === L(e, "error") && e.emit("error", t)
            }
            function f() {
                e.removeListener("finish", h),
                u()
            }
            function h() {
                X("onfinish"),
                e.removeListener("close", f),
                u()
            }
            function u() {
                X("unpipe"),
                d.unpipe(e)
            }
            var d = this
              , l = this._readableState;
            switch (l.pipesCount) {
            case 0:
                l.pipes = e;
                break;
            case 1:
                l.pipes = [l.pipes, e];
                break;
            default:
                l.pipes.push(e)
            }
            l.pipesCount += 1,
            X("pipe count=%d opts=%j", l.pipesCount, t);
            var p = (!t || !1 !== t.end) && e !== i.stdout && e !== i.stderr
              , b = p ? r : u;
            l.endEmitted ? T(b) : d.once("end", b),
            e.on("unpipe", n);
            var v = w(d);
            e.on("drain", v);
            var y = !1
              , m = !1;
            return d.on("data", s),
            o(e, "error", c),
            e.once("close", f),
            e.once("finish", h),
            e.emit("pipe", d),
            l.flowing || (X("pipe resume"),
            d.resume()),
            e
        }
        ,
        c.prototype.unpipe = function(e) {
            var t = this._readableState
              , n = {
                hasUnpiped: !1
            };
            if (0 === t.pipesCount)
                return this;
            if (1 === t.pipesCount)
                return e && e !== t.pipes ? this : (e || (e = t.pipes),
                t.pipes = null,
                t.pipesCount = 0,
                t.flowing = !1,
                e && e.emit("unpipe", this, n),
                this);
            if (!e) {
                var i = t.pipes
                  , r = t.pipesCount;
                t.pipes = null,
                t.pipesCount = 0,
                t.flowing = !1;
                for (var a = 0; a < r; a++)
                    i[a].emit("unpipe", this, n);
                return this
            }
            var o = C(t.pipes, e);
            return -1 === o ? this : (t.pipes.splice(o, 1),
            t.pipesCount -= 1,
            1 === t.pipesCount && (t.pipes = t.pipes[0]),
            e.emit("unpipe", this, n),
            this)
        }
        ,
        c.prototype.on = function(e, t) {
            var n = N.prototype.on.call(this, e, t);
            if ("data" === e)
                !1 !== this._readableState.flowing && this.resume();
            else if ("readable" === e) {
                var i = this._readableState;
                i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0,
                i.emittedReadable = !1,
                i.reading ? i.length && v(this) : T(_, this))
            }
            return n
        }
        ,
        c.prototype.addListener = c.prototype.on,
        c.prototype.resume = function() {
            var e = this._readableState;
            return e.flowing || (X("resume"),
            e.flowing = !0,
            A(this, e)),
            this
        }
        ,
        c.prototype.pause = function() {
            return X("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing && (X("pause"),
            this._readableState.flowing = !1,
            this.emit("pause")),
            this
        }
        ,
        c.prototype.wrap = function(e) {
            var t = this._readableState
              , n = !1
              , i = this;
            e.on("end", function() {
                if (X("wrapped end"),
                t.decoder && !t.ended) {
                    var e = t.decoder.end();
                    e && e.length && i.push(e)
                }
                i.push(null)
            }),
            e.on("data", function(r) {
                if (X("wrapped data"),
                t.decoder && (r = t.decoder.write(r)),
                (!t.objectMode || null !== r && void 0 !== r) && (t.objectMode || r && r.length)) {
                    i.push(r) || (n = !0,
                    e.pause())
                }
            });
            for (var r in e)
                void 0 === this[r] && "function" == typeof e[r] && (this[r] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(r));
            for (var a = 0; a < q.length; a++)
                e.on(q[a], i.emit.bind(i, q[a]));
            return i._read = function(t) {
                X("wrapped _read", t),
                n && (n = !1,
                e.resume())
            }
            ,
            i
        }
        ,
        c._fromList = S
    }
    ).call(t, n(1), n(8))
}
, function(e, t, n) {
    e.exports = n(35).EventEmitter
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        var n = this
          , i = this._readableState && this._readableState.destroyed
          , r = this._writableState && this._writableState.destroyed;
        if (i || r)
            return void (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || o(a, this, e));
        this._readableState && (this._readableState.destroyed = !0),
        this._writableState && (this._writableState.destroyed = !0),
        this._destroy(e || null, function(e) {
            !t && e ? (o(a, n, e),
            n._writableState && (n._writableState.errorEmitted = !0)) : t && t(e)
        })
    }
    function r() {
        this._readableState && (this._readableState.destroyed = !1,
        this._readableState.reading = !1,
        this._readableState.ended = !1,
        this._readableState.endEmitted = !1),
        this._writableState && (this._writableState.destroyed = !1,
        this._writableState.ended = !1,
        this._writableState.ending = !1,
        this._writableState.finished = !1,
        this._writableState.errorEmitted = !1)
    }
    function a(e, t) {
        e.emit("error", t)
    }
    var o = n(24);
    e.exports = {
        destroy: i,
        undestroy: r
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        this.afterTransform = function(t, n) {
            return r(e, t, n)
        }
        ,
        this.needTransform = !1,
        this.transforming = !1,
        this.writecb = null,
        this.writechunk = null,
        this.writeencoding = null
    }
    function r(e, t, n) {
        var i = e._transformState;
        i.transforming = !1;
        var r = i.writecb;
        if (!r)
            return e.emit("error", new Error("write callback called multiple times"));
        i.writechunk = null,
        i.writecb = null,
        null !== n && void 0 !== n && e.push(n),
        r(t);
        var a = e._readableState;
        a.reading = !1,
        (a.needReadable || a.length < a.highWaterMark) && e._read(a.highWaterMark)
    }
    function a(e) {
        if (!(this instanceof a))
            return new a(e);
        s.call(this, e),
        this._transformState = new i(this);
        var t = this;
        this._readableState.needReadable = !0,
        this._readableState.sync = !1,
        e && ("function" == typeof e.transform && (this._transform = e.transform),
        "function" == typeof e.flush && (this._flush = e.flush)),
        this.once("prefinish", function() {
            "function" == typeof this._flush ? this._flush(function(e, n) {
                o(t, e, n)
            }) : o(t)
        })
    }
    function o(e, t, n) {
        if (t)
            return e.emit("error", t);
        null !== n && void 0 !== n && e.push(n);
        var i = e._writableState
          , r = e._transformState;
        if (i.length)
            throw new Error("Calling transform done when ws.length != 0");
        if (r.transforming)
            throw new Error("Calling transform done when still transforming");
        return e.push(null)
    }
    e.exports = a;
    var s = n(11)
      , c = n(21);
    c.inherits = n(2),
    c.inherits(a, s),
    a.prototype.push = function(e, t) {
        return this._transformState.needTransform = !1,
        s.prototype.push.call(this, e, t)
    }
    ,
    a.prototype._transform = function(e, t, n) {
        throw new Error("_transform() is not implemented")
    }
    ,
    a.prototype._write = function(e, t, n) {
        var i = this._transformState;
        if (i.writecb = n,
        i.writechunk = e,
        i.writeencoding = t,
        !i.transforming) {
            var r = this._readableState;
            (i.needTransform || r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark)
        }
    }
    ,
    a.prototype._read = function(e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0,
        this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
    }
    ,
    a.prototype._destroy = function(e, t) {
        var n = this;
        s.prototype._destroy.call(this, e, function(e) {
            t(e),
            n.emit("close")
        })
    }
}
, , , , , function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , a = function() {
        function e() {
            i(this, e)
        }
        return r(e, [{
            key: "execute",
            value: function() {
                throw "必须重写该方法"
            }
        }]),
        e
    }();
    e.exports = a
}
, , function(e, t, n) {
    "use strict";
    (function(t) {
        function i(e) {
            f.call(this, "digest"),
            this._hash = e,
            this.buffers = []
        }
        function r(e) {
            f.call(this, "digest"),
            this._hash = e
        }
        var a = n(2)
          , o = n(102)
          , s = n(103)
          , c = n(105)
          , f = n(30);
        a(i, f),
        i.prototype._update = function(e) {
            this.buffers.push(e)
        }
        ,
        i.prototype._final = function() {
            var e = t.concat(this.buffers)
              , n = this._hash(e);
            return this.buffers = null,
            n
        }
        ,
        a(r, f),
        r.prototype._update = function(e) {
            this._hash.update(e)
        }
        ,
        r.prototype._final = function() {
            return this._hash.digest()
        }
        ,
        e.exports = function(e) {
            return e = e.toLowerCase(),
            "md5" === e ? new i(o) : new r("rmd160" === e || "ripemd160" === e ? new s : c(e))
        }
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    (function(t) {
        e.exports = function(e, n) {
            for (var i = Math.min(e.length, n.length), r = new t(i), a = 0; a < i; ++a)
                r[a] = e[a] ^ n[a];
            return r
        }
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    "use strict";
    function i() {
        this.pending = null,
        this.pendingTotal = 0,
        this.blockSize = this.constructor.blockSize,
        this.outSize = this.constructor.outSize,
        this.hmacStrength = this.constructor.hmacStrength,
        this.padLength = this.constructor.padLength / 8,
        this.endian = "big",
        this._delta8 = this.blockSize / 8,
        this._delta32 = this.blockSize / 32
    }
    var r = n(23)
      , a = n(20);
    t.BlockHash = i,
    i.prototype.update = function(e, t) {
        if (e = r.toArray(e, t),
        this.pending ? this.pending = this.pending.concat(e) : this.pending = e,
        this.pendingTotal += e.length,
        this.pending.length >= this._delta8) {
            e = this.pending;
            var n = e.length % this._delta8;
            this.pending = e.slice(e.length - n, e.length),
            0 === this.pending.length && (this.pending = null),
            e = r.join32(e, 0, e.length - n, this.endian);
            for (var i = 0; i < e.length; i += this._delta32)
                this._update(e, i, i + this._delta32)
        }
        return this
    }
    ,
    i.prototype.digest = function(e) {
        return this.update(this._pad()),
        a(null === this.pending),
        this._digest(e)
    }
    ,
    i.prototype._pad = function() {
        var e = this.pendingTotal
          , t = this._delta8
          , n = t - (e + this.padLength) % t
          , i = new Array(n + this.padLength);
        i[0] = 128;
        for (var r = 1; r < n; r++)
            i[r] = 0;
        if (e <<= 3,
        "big" === this.endian) {
            for (var a = 8; a < this.padLength; a++)
                i[r++] = 0;
            i[r++] = 0,
            i[r++] = 0,
            i[r++] = 0,
            i[r++] = 0,
            i[r++] = e >>> 24 & 255,
            i[r++] = e >>> 16 & 255,
            i[r++] = e >>> 8 & 255,
            i[r++] = 255 & e
        } else
            for (i[r++] = 255 & e,
            i[r++] = e >>> 8 & 255,
            i[r++] = e >>> 16 & 255,
            i[r++] = e >>> 24 & 255,
            i[r++] = 0,
            i[r++] = 0,
            i[r++] = 0,
            i[r++] = 0,
            a = 8; a < this.padLength; a++)
                i[r++] = 0;
        return i
    }
}
, function(e, t, n) {
    var i = t;
    i.bignum = n(7),
    i.define = n(586).define,
    i.base = n(58),
    i.constants = n(181),
    i.decoders = n(592),
    i.encoders = n(594)
}
, function(e, t, n) {
    var i = t;
    i.Reporter = n(589).Reporter,
    i.DecoderBuffer = n(180).DecoderBuffer,
    i.EncoderBuffer = n(180).EncoderBuffer,
    i.Node = n(590)
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, , , , , , , , , , , , function(e, t, n) {
    function i(e, t, n, i) {
        if (r.isBuffer(e) || (e = r.from(e, "binary")),
        t && (r.isBuffer(t) || (t = r.from(t, "binary")),
        8 !== t.length))
            throw new RangeError("salt should be Buffer with 8 byte length");
        for (var o = n / 8, s = r.alloc(o), c = r.alloc(i || 0), f = r.alloc(0); o > 0 || i > 0; ) {
            var h = new a;
            h.update(f),
            h.update(e),
            t && h.update(t),
            f = h.digest();
            var u = 0;
            if (o > 0) {
                var d = s.length - o;
                u = Math.min(o, f.length),
                f.copy(s, d, 0, u),
                o -= u
            }
            if (u < f.length && i > 0) {
                var l = c.length - i
                  , p = Math.min(i, f.length - u);
                f.copy(c, l, u, u + p),
                i -= p
            }
        }
        return f.fill(0),
        {
            key: s,
            iv: c
        }
    }
    var r = n(3).Buffer
      , a = n(540);
    e.exports = i
}
, function(e, t, n) {
    function i(e) {
        s.isBuffer(e) || (e = s.from(e));
        for (var t = e.length / 4 | 0, n = new Array(t), i = 0; i < t; i++)
            n[i] = e.readUInt32BE(4 * i);
        return n
    }
    function r(e) {
        for (; 0 < e.length; e++)
            e[0] = 0
    }
    function a(e, t, n, i, r) {
        for (var a, o, s, c, f = n[0], h = n[1], u = n[2], d = n[3], l = e[0] ^ t[0], p = e[1] ^ t[1], b = e[2] ^ t[2], v = e[3] ^ t[3], y = 4, m = 1; m < r; m++)
            a = f[l >>> 24] ^ h[p >>> 16 & 255] ^ u[b >>> 8 & 255] ^ d[255 & v] ^ t[y++],
            o = f[p >>> 24] ^ h[b >>> 16 & 255] ^ u[v >>> 8 & 255] ^ d[255 & l] ^ t[y++],
            s = f[b >>> 24] ^ h[v >>> 16 & 255] ^ u[l >>> 8 & 255] ^ d[255 & p] ^ t[y++],
            c = f[v >>> 24] ^ h[l >>> 16 & 255] ^ u[p >>> 8 & 255] ^ d[255 & b] ^ t[y++],
            l = a,
            p = o,
            b = s,
            v = c;
        return a = (i[l >>> 24] << 24 | i[p >>> 16 & 255] << 16 | i[b >>> 8 & 255] << 8 | i[255 & v]) ^ t[y++],
        o = (i[p >>> 24] << 24 | i[b >>> 16 & 255] << 16 | i[v >>> 8 & 255] << 8 | i[255 & l]) ^ t[y++],
        s = (i[b >>> 24] << 24 | i[v >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & p]) ^ t[y++],
        c = (i[v >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[p >>> 8 & 255] << 8 | i[255 & b]) ^ t[y++],
        a >>>= 0,
        o >>>= 0,
        s >>>= 0,
        c >>>= 0,
        [a, o, s, c]
    }
    function o(e) {
        this._key = i(e),
        this._reset()
    }
    var s = n(3).Buffer
      , c = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
      , f = function() {
        for (var e = new Array(256), t = 0; t < 256; t++)
            e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
        for (var n = [], i = [], r = [[], [], [], []], a = [[], [], [], []], o = 0, s = 0, c = 0; c < 256; ++c) {
            var f = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
            f = f >>> 8 ^ 255 & f ^ 99,
            n[o] = f,
            i[f] = o;
            var h = e[o]
              , u = e[h]
              , d = e[u]
              , l = 257 * e[f] ^ 16843008 * f;
            r[0][o] = l << 24 | l >>> 8,
            r[1][o] = l << 16 | l >>> 16,
            r[2][o] = l << 8 | l >>> 24,
            r[3][o] = l,
            l = 16843009 * d ^ 65537 * u ^ 257 * h ^ 16843008 * o,
            a[0][f] = l << 24 | l >>> 8,
            a[1][f] = l << 16 | l >>> 16,
            a[2][f] = l << 8 | l >>> 24,
            a[3][f] = l,
            0 === o ? o = s = 1 : (o = h ^ e[e[e[d ^ h]]],
            s ^= e[e[s]])
        }
        return {
            SBOX: n,
            INV_SBOX: i,
            SUB_MIX: r,
            INV_SUB_MIX: a
        }
    }();
    o.blockSize = 16,
    o.keySize = 32,
    o.prototype.blockSize = o.blockSize,
    o.prototype.keySize = o.keySize,
    o.prototype._reset = function() {
        for (var e = this._key, t = e.length, n = t + 6, i = 4 * (n + 1), r = [], a = 0; a < t; a++)
            r[a] = e[a];
        for (a = t; a < i; a++) {
            var o = r[a - 1];
            a % t == 0 ? (o = o << 8 | o >>> 24,
            o = f.SBOX[o >>> 24] << 24 | f.SBOX[o >>> 16 & 255] << 16 | f.SBOX[o >>> 8 & 255] << 8 | f.SBOX[255 & o],
            o ^= c[a / t | 0] << 24) : t > 6 && a % t == 4 && (o = f.SBOX[o >>> 24] << 24 | f.SBOX[o >>> 16 & 255] << 16 | f.SBOX[o >>> 8 & 255] << 8 | f.SBOX[255 & o]),
            r[a] = r[a - t] ^ o
        }
        for (var s = [], h = 0; h < i; h++) {
            var u = i - h
              , d = r[u - (h % 4 ? 0 : 4)];
            s[h] = h < 4 || u <= 4 ? d : f.INV_SUB_MIX[0][f.SBOX[d >>> 24]] ^ f.INV_SUB_MIX[1][f.SBOX[d >>> 16 & 255]] ^ f.INV_SUB_MIX[2][f.SBOX[d >>> 8 & 255]] ^ f.INV_SUB_MIX[3][f.SBOX[255 & d]]
        }
        this._nRounds = n,
        this._keySchedule = r,
        this._invKeySchedule = s
    }
    ,
    o.prototype.encryptBlockRaw = function(e) {
        return e = i(e),
        a(e, this._keySchedule, f.SUB_MIX, f.SBOX, this._nRounds)
    }
    ,
    o.prototype.encryptBlock = function(e) {
        var t = this.encryptBlockRaw(e)
          , n = s.allocUnsafe(16);
        return n.writeUInt32BE(t[0], 0),
        n.writeUInt32BE(t[1], 4),
        n.writeUInt32BE(t[2], 8),
        n.writeUInt32BE(t[3], 12),
        n
    }
    ,
    o.prototype.decryptBlock = function(e) {
        e = i(e);
        var t = e[1];
        e[1] = e[3],
        e[3] = t;
        var n = a(e, this._invKeySchedule, f.INV_SUB_MIX, f.INV_SBOX, this._nRounds)
          , r = s.allocUnsafe(16);
        return r.writeUInt32BE(n[0], 0),
        r.writeUInt32BE(n[3], 4),
        r.writeUInt32BE(n[2], 8),
        r.writeUInt32BE(n[1], 12),
        r
    }
    ,
    o.prototype.scrub = function() {
        r(this._keySchedule),
        r(this._invKeySchedule),
        r(this._key)
    }
    ,
    e.exports.AES = o
}
, function(e, t, n) {
    "use strict";
    var i = t;
    i.base = n(566),
    i.short = n(567),
    i.mont = n(568),
    i.edwards = n(569)
}
, function(e, t, n) {
    (function(t) {
        function i(e) {
            var n;
            "object" != typeof e || t.isBuffer(e) || (n = e.passphrase,
            e = e.key),
            "string" == typeof e && (e = new t(e));
            var i, o, c = s(e, n), f = c.tag, h = c.data;
            switch (f) {
            case "CERTIFICATE":
                o = a.certificate.decode(h, "der").tbsCertificate.subjectPublicKeyInfo;
            case "PUBLIC KEY":
                switch (o || (o = a.PublicKey.decode(h, "der")),
                i = o.algorithm.algorithm.join(".")) {
                case "1.2.840.113549.1.1.1":
                    return a.RSAPublicKey.decode(o.subjectPublicKey.data, "der");
                case "1.2.840.10045.2.1":
                    return o.subjectPrivateKey = o.subjectPublicKey,
                    {
                        type: "ec",
                        data: o
                    };
                case "1.2.840.10040.4.1":
                    return o.algorithm.params.pub_key = a.DSAparam.decode(o.subjectPublicKey.data, "der"),
                    {
                        type: "dsa",
                        data: o.algorithm.params
                    };
                default:
                    throw new Error("unknown key id " + i)
                }
                throw new Error("unknown key type " + f);
            case "ENCRYPTED PRIVATE KEY":
                h = a.EncryptedPrivateKey.decode(h, "der"),
                h = r(h, n);
            case "PRIVATE KEY":
                switch (o = a.PrivateKey.decode(h, "der"),
                i = o.algorithm.algorithm.join(".")) {
                case "1.2.840.113549.1.1.1":
                    return a.RSAPrivateKey.decode(o.subjectPrivateKey, "der");
                case "1.2.840.10045.2.1":
                    return {
                        curve: o.algorithm.curve,
                        privateKey: a.ECPrivateKey.decode(o.subjectPrivateKey, "der").privateKey
                    };
                case "1.2.840.10040.4.1":
                    return o.algorithm.params.priv_key = a.DSAparam.decode(o.subjectPrivateKey, "der"),
                    {
                        type: "dsa",
                        params: o.algorithm.params
                    };
                default:
                    throw new Error("unknown key id " + i)
                }
                throw new Error("unknown key type " + f);
            case "RSA PUBLIC KEY":
                return a.RSAPublicKey.decode(h, "der");
            case "RSA PRIVATE KEY":
                return a.RSAPrivateKey.decode(h, "der");
            case "DSA PRIVATE KEY":
                return {
                    type: "dsa",
                    params: a.DSAPrivateKey.decode(h, "der")
                };
            case "EC PRIVATE KEY":
                return h = a.ECPrivateKey.decode(h, "der"),
                {
                    curve: h.parameters.value,
                    privateKey: h.privateKey
                };
            default:
                throw new Error("unknown key type " + f)
            }
        }
        function r(e, n) {
            var i = e.algorithm.decrypt.kde.kdeparams.salt
              , r = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10)
              , a = o[e.algorithm.decrypt.cipher.algo.join(".")]
              , s = e.algorithm.decrypt.cipher.iv
              , h = e.subjectPrivateKey
              , u = parseInt(a.split("-")[1], 10) / 8
              , d = f.pbkdf2Sync(n, i, r, u)
              , l = c.createDecipheriv(a, d, s)
              , p = [];
            return p.push(l.update(h)),
            p.push(l.final()),
            t.concat(p)
        }
        var a = n(585)
          , o = n(597)
          , s = n(598)
          , c = n(106)
          , f = n(164);
        e.exports = i,
        i.signature = a.signature
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , a = function() {
        function e() {
            i(this, e)
        }
        return r(e, null, [{
            key: "projectToScreen",
            value: function(e, t) {
                var n = t.getEngine()
                  , i = t.activeCamera.viewport.toGlobal(n.getRenderWidth(), n.getRenderHeight());
                return BABYLON.Vector3.Project(e, BABYLON.Matrix.Identity(), t.getTransformMatrix(), i)
            }
        }, {
            key: "projectToPixiSprite",
            value: function(t, n, i, r, a) {
                r = r || instance.W,
                a = a || instance.H;
                var o = e.projectToScreen(t, n);
                return e.canvasPointToPixiSprite(o, i, n.getEngine().getRenderingCanvas(), r, a)
            }
        }, {
            key: "canvasPointToPixiSprite",
            value: function(e, t, n, i, r) {
                i = i || instance.W,
                r = r || instance.H;
                var a = {
                    x: e.x / n.width * i,
                    y: e.y / n.height * r
                };
                return t.toLocal(a)
            }
        }, {
            key: "getShortRotation",
            value: function(e, t) {
                return e - t > Math.PI ? e - 2 * Math.PI : e - t < -Math.PI ? e + 2 * Math.PI : e
            }
        }, {
            key: "hasAnimation",
            value: function(e) {
                var t = e.Animatables;
                if (!t)
                    return !1;
                for (var n = 0; n < t.length; n++) {
                    if (t[n].getAnimations().length > 0)
                        return !0
                }
                return !1
            }
        }, {
            key: "convertTextToHTML",
            value: function(e) {
                return e.replace(/"/gi, "&quot;")
            }
        }, {
            key: "convertHTMLToText",
            value: function(e) {
                return e.replace(/&quot;/gi, '"')
            }
        }]),
        e
    }();
    e.exports = a
}
, function(e, t, n) {
    (function(e, t) {
        !function(e, n) {
            "use strict";
            function i(e) {
                "function" != typeof e && (e = new Function("" + e));
                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                    t[n] = arguments[n + 1];
                var i = {
                    callback: e,
                    args: t
                };
                return f[c] = i,
                s(c),
                c++
            }
            function r(e) {
                delete f[e]
            }
            function a(e) {
                var t = e.callback
                  , i = e.args;
                switch (i.length) {
                case 0:
                    t();
                    break;
                case 1:
                    t(i[0]);
                    break;
                case 2:
                    t(i[0], i[1]);
                    break;
                case 3:
                    t(i[0], i[1], i[2]);
                    break;
                default:
                    t.apply(n, i)
                }
            }
            function o(e) {
                if (h)
                    setTimeout(o, 0, e);
                else {
                    var t = f[e];
                    if (t) {
                        h = !0;
                        try {
                            a(t)
                        } finally {
                            r(e),
                            h = !1
                        }
                    }
                }
            }
            if (!e.setImmediate) {
                var s, c = 1, f = {}, h = !1, u = e.document, d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                d = d && d.setTimeout ? d : e,
                "[object process]" === {}.toString.call(e.process) ? function() {
                    s = function(e) {
                        t.nextTick(function() {
                            o(e)
                        })
                    }
                }() : function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0
                          , n = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }
                        ,
                        e.postMessage("", "*"),
                        e.onmessage = n,
                        t
                    }
                }() ? function() {
                    var t = "setImmediate$" + Math.random() + "$"
                      , n = function(n) {
                        n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o(+n.data.slice(t.length))
                    };
                    e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n),
                    s = function(n) {
                        e.postMessage(t + n, "*")
                    }
                }() : e.MessageChannel ? function() {
                    var e = new MessageChannel;
                    e.port1.onmessage = function(e) {
                        o(e.data)
                    }
                    ,
                    s = function(t) {
                        e.port2.postMessage(t)
                    }
                }() : u && "onreadystatechange"in u.createElement("script") ? function() {
                    var e = u.documentElement;
                    s = function(t) {
                        var n = u.createElement("script");
                        n.onreadystatechange = function() {
                            o(t),
                            n.onreadystatechange = null,
                            e.removeChild(n),
                            n = null
                        }
                        ,
                        e.appendChild(n)
                    }
                }() : function() {
                    s = function(e) {
                        setTimeout(o, 0, e)
                    }
                }(),
                d.setImmediate = i,
                d.clearImmediate = r
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }
    ).call(t, n(1), n(8))
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        var t = e.length;
        if (t % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
    }
    function r(e) {
        return 3 * e.length / 4 - i(e)
    }
    function a(e) {
        var t, n, r, a, o, s = e.length;
        a = i(e),
        o = new u(3 * s / 4 - a),
        n = a > 0 ? s - 4 : s;
        var c = 0;
        for (t = 0; t < n; t += 4)
            r = h[e.charCodeAt(t)] << 18 | h[e.charCodeAt(t + 1)] << 12 | h[e.charCodeAt(t + 2)] << 6 | h[e.charCodeAt(t + 3)],
            o[c++] = r >> 16 & 255,
            o[c++] = r >> 8 & 255,
            o[c++] = 255 & r;
        return 2 === a ? (r = h[e.charCodeAt(t)] << 2 | h[e.charCodeAt(t + 1)] >> 4,
        o[c++] = 255 & r) : 1 === a && (r = h[e.charCodeAt(t)] << 10 | h[e.charCodeAt(t + 1)] << 4 | h[e.charCodeAt(t + 2)] >> 2,
        o[c++] = r >> 8 & 255,
        o[c++] = 255 & r),
        o
    }
    function o(e) {
        return f[e >> 18 & 63] + f[e >> 12 & 63] + f[e >> 6 & 63] + f[63 & e]
    }
    function s(e, t, n) {
        for (var i, r = [], a = t; a < n; a += 3)
            i = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2],
            r.push(o(i));
        return r.join("")
    }
    function c(e) {
        for (var t, n = e.length, i = n % 3, r = "", a = [], o = 0, c = n - i; o < c; o += 16383)
            a.push(s(e, o, o + 16383 > c ? c : o + 16383));
        return 1 === i ? (t = e[n - 1],
        r += f[t >> 2],
        r += f[t << 4 & 63],
        r += "==") : 2 === i && (t = (e[n - 2] << 8) + e[n - 1],
        r += f[t >> 10],
        r += f[t >> 4 & 63],
        r += f[t << 2 & 63],
        r += "="),
        a.push(r),
        a.join("")
    }
    t.byteLength = r,
    t.toByteArray = a,
    t.fromByteArray = c;
    for (var f = [], h = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, p = d.length; l < p; ++l)
        f[l] = d[l],
        h[d.charCodeAt(l)] = l;
    h["-".charCodeAt(0)] = 62,
    h["_".charCodeAt(0)] = 63
}
, function(e, t) {
    t.read = function(e, t, n, i, r) {
        var a, o, s = 8 * r - i - 1, c = (1 << s) - 1, f = c >> 1, h = -7, u = n ? r - 1 : 0, d = n ? -1 : 1, l = e[t + u];
        for (u += d,
        a = l & (1 << -h) - 1,
        l >>= -h,
        h += s; h > 0; a = 256 * a + e[t + u],
        u += d,
        h -= 8)
            ;
        for (o = a & (1 << -h) - 1,
        a >>= -h,
        h += i; h > 0; o = 256 * o + e[t + u],
        u += d,
        h -= 8)
            ;
        if (0 === a)
            a = 1 - f;
        else {
            if (a === c)
                return o ? NaN : 1 / 0 * (l ? -1 : 1);
            o += Math.pow(2, i),
            a -= f
        }
        return (l ? -1 : 1) * o * Math.pow(2, a - i)
    }
    ,
    t.write = function(e, t, n, i, r, a) {
        var o, s, c, f = 8 * a - r - 1, h = (1 << f) - 1, u = h >> 1, d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = i ? 0 : a - 1, p = i ? 1 : -1, b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t),
        isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0,
        o = h) : (o = Math.floor(Math.log(t) / Math.LN2),
        t * (c = Math.pow(2, -o)) < 1 && (o--,
        c *= 2),
        t += o + u >= 1 ? d / c : d * Math.pow(2, 1 - u),
        t * c >= 2 && (o++,
        c /= 2),
        o + u >= h ? (s = 0,
        o = h) : o + u >= 1 ? (s = (t * c - 1) * Math.pow(2, r),
        o += u) : (s = t * Math.pow(2, u - 1) * Math.pow(2, r),
        o = 0)); r >= 8; e[n + l] = 255 & s,
        l += p,
        s /= 256,
        r -= 8)
            ;
        for (o = o << r | s,
        f += r; f > 0; e[n + l] = 255 & o,
        l += p,
        o /= 256,
        f -= 8)
            ;
        e[n + l - p] |= 128 * b
    }
}
, function(e, t) {}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t, n) {
        e.copy(t, n)
    }
    var a = n(3).Buffer;
    e.exports = function() {
        function e() {
            i(this, e),
            this.head = null,
            this.tail = null,
            this.length = 0
        }
        return e.prototype.push = function(e) {
            var t = {
                data: e,
                next: null
            };
            this.length > 0 ? this.tail.next = t : this.head = t,
            this.tail = t,
            ++this.length
        }
        ,
        e.prototype.unshift = function(e) {
            var t = {
                data: e,
                next: this.head
            };
            0 === this.length && (this.tail = t),
            this.head = t,
            ++this.length
        }
        ,
        e.prototype.shift = function() {
            if (0 !== this.length) {
                var e = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                --this.length,
                e
            }
        }
        ,
        e.prototype.clear = function() {
            this.head = this.tail = null,
            this.length = 0
        }
        ,
        e.prototype.join = function(e) {
            if (0 === this.length)
                return "";
            for (var t = this.head, n = "" + t.data; t = t.next; )
                n += e + t.data;
            return n
        }
        ,
        e.prototype.concat = function(e) {
            if (0 === this.length)
                return a.alloc(0);
            if (1 === this.length)
                return this.head.data;
            for (var t = a.allocUnsafe(e >>> 0), n = this.head, i = 0; n; )
                r(n.data, t, i),
                i += n.data.length,
                n = n.next;
            return t
        }
        ,
        e
    }()
}
, function(e, t, n) {
    (function(t) {
        function n(e, t) {
            function n() {
                if (!r) {
                    if (i("throwDeprecation"))
                        throw new Error(t);
                    i("traceDeprecation") ? console.trace(t) : console.warn(t),
                    r = !0
                }
                return e.apply(this, arguments)
            }
            if (i("noDeprecation"))
                return e;
            var r = !1;
            return n
        }
        function i(e) {
            try {
                if (!t.localStorage)
                    return !1
            } catch (e) {
                return !1
            }
            var n = t.localStorage[e];
            return null != n && "true" === String(n).toLowerCase()
        }
        e.exports = n
    }
    ).call(t, n(1))
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        if (!(this instanceof i))
            return new i(e);
        r.call(this, e)
    }
    e.exports = i;
    var r = n(47)
      , a = n(21);
    a.inherits = n(2),
    a.inherits(i, r),
    i.prototype._transform = function(e, t, n) {
        n(null, e)
    }
}
, , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , a = n(52)
      , o = function() {
        function e(t) {
            i(this, e),
            this.map = {},
            t.on && t.on("execute", function(e) {
                var t = e.type
                  , n = e.data;
                this.execute(t, n)
            }),
            this.root = t
        }
        return r(e, [{
            key: "clearAllCommand",
            value: function() {
                for (var e in this.map)
                    delete this.map[e]
            }
        }, {
            key: "registerCommand",
            value: function(e, t) {
                if (this.map[e])
                    throw e + "命令重复";
                this.map[e] = t
            }
        }, {
            key: "executeCommand",
            value: function(e, t) {
                if (!e || "" === e)
                    throw new Error("没有传入command");
                var n = this.map[e];
                if (n) {
                    var i = new n;
                    if (!(i instanceof a))
                        throw "commandClass必须继承ICommand";
                    return i.root = this.root,
                    i.manager = this,
                    i.execute(t)
                }
            }
        }, {
            key: "execute",
            value: function() {
                return this.executeCommand.apply(this, arguments)
            }
        }]),
        e
    }();
    e.exports = o
}
, , , , function(e, t, n) {
    "use strict";
    t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = n(40),
    t.createHash = t.Hash = n(54),
    t.createHmac = t.Hmac = n(162);
    var i = n(537)
      , r = Object.keys(i)
      , a = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(r);
    t.getHashes = function() {
        return a
    }
    ;
    var o = n(164);
    t.pbkdf2 = o.pbkdf2,
    t.pbkdf2Sync = o.pbkdf2Sync;
    var s = n(539);
    t.Cipher = s.Cipher,
    t.createCipher = s.createCipher,
    t.Cipheriv = s.Cipheriv,
    t.createCipheriv = s.createCipheriv,
    t.Decipher = s.Decipher,
    t.createDecipher = s.createDecipher,
    t.Decipheriv = s.Decipheriv,
    t.createDecipheriv = s.createDecipheriv,
    t.getCiphers = s.getCiphers,
    t.listCiphers = s.listCiphers;
    var c = n(557);
    t.DiffieHellmanGroup = c.DiffieHellmanGroup,
    t.createDiffieHellmanGroup = c.createDiffieHellmanGroup,
    t.getDiffieHellman = c.getDiffieHellman,
    t.createDiffieHellman = c.createDiffieHellman,
    t.DiffieHellman = c.DiffieHellman;
    var f = n(562);
    t.createSign = f.createSign,
    t.Sign = f.Sign,
    t.createVerify = f.createVerify,
    t.Verify = f.Verify,
    t.createECDH = n(600);
    var h = n(601);
    t.publicEncrypt = h.publicEncrypt,
    t.privateEncrypt = h.privateEncrypt,
    t.publicDecrypt = h.publicDecrypt,
    t.privateDecrypt = h.privateDecrypt;
    var u = n(604);
    t.randomFill = u.randomFill,
    t.randomFillSync = u.randomFillSync,
    t.createCredentials = function() {
        throw new Error(["sorry, createCredentials is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join("\n"))
    }
    ,
    t.constants = {
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_CHECK_P_NOT_PRIME: 1,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        DH_NOT_SUITABLE_GENERATOR: 8,
        NPN_ENABLED: 1,
        ALPN_ENABLED: 1,
        RSA_PKCS1_PADDING: 1,
        RSA_SSLV23_PADDING: 2,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_X931_PADDING: 5,
        RSA_PKCS1_PSS_PADDING: 6,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        POINT_CONVERSION_HYBRID: 6
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        e[t >> 5] |= 128 << t % 32,
        e[14 + (t + 64 >>> 9 << 4)] = t;
        for (var n = 1732584193, i = -271733879, r = -1732584194, h = 271733878, u = 0; u < e.length; u += 16) {
            var d = n
              , l = i
              , p = r
              , b = h;
            n = a(n, i, r, h, e[u + 0], 7, -680876936),
            h = a(h, n, i, r, e[u + 1], 12, -389564586),
            r = a(r, h, n, i, e[u + 2], 17, 606105819),
            i = a(i, r, h, n, e[u + 3], 22, -1044525330),
            n = a(n, i, r, h, e[u + 4], 7, -176418897),
            h = a(h, n, i, r, e[u + 5], 12, 1200080426),
            r = a(r, h, n, i, e[u + 6], 17, -1473231341),
            i = a(i, r, h, n, e[u + 7], 22, -45705983),
            n = a(n, i, r, h, e[u + 8], 7, 1770035416),
            h = a(h, n, i, r, e[u + 9], 12, -1958414417),
            r = a(r, h, n, i, e[u + 10], 17, -42063),
            i = a(i, r, h, n, e[u + 11], 22, -1990404162),
            n = a(n, i, r, h, e[u + 12], 7, 1804603682),
            h = a(h, n, i, r, e[u + 13], 12, -40341101),
            r = a(r, h, n, i, e[u + 14], 17, -1502002290),
            i = a(i, r, h, n, e[u + 15], 22, 1236535329),
            n = o(n, i, r, h, e[u + 1], 5, -165796510),
            h = o(h, n, i, r, e[u + 6], 9, -1069501632),
            r = o(r, h, n, i, e[u + 11], 14, 643717713),
            i = o(i, r, h, n, e[u + 0], 20, -373897302),
            n = o(n, i, r, h, e[u + 5], 5, -701558691),
            h = o(h, n, i, r, e[u + 10], 9, 38016083),
            r = o(r, h, n, i, e[u + 15], 14, -660478335),
            i = o(i, r, h, n, e[u + 4], 20, -405537848),
            n = o(n, i, r, h, e[u + 9], 5, 568446438),
            h = o(h, n, i, r, e[u + 14], 9, -1019803690),
            r = o(r, h, n, i, e[u + 3], 14, -187363961),
            i = o(i, r, h, n, e[u + 8], 20, 1163531501),
            n = o(n, i, r, h, e[u + 13], 5, -1444681467),
            h = o(h, n, i, r, e[u + 2], 9, -51403784),
            r = o(r, h, n, i, e[u + 7], 14, 1735328473),
            i = o(i, r, h, n, e[u + 12], 20, -1926607734),
            n = s(n, i, r, h, e[u + 5], 4, -378558),
            h = s(h, n, i, r, e[u + 8], 11, -2022574463),
            r = s(r, h, n, i, e[u + 11], 16, 1839030562),
            i = s(i, r, h, n, e[u + 14], 23, -35309556),
            n = s(n, i, r, h, e[u + 1], 4, -1530992060),
            h = s(h, n, i, r, e[u + 4], 11, 1272893353),
            r = s(r, h, n, i, e[u + 7], 16, -155497632),
            i = s(i, r, h, n, e[u + 10], 23, -1094730640),
            n = s(n, i, r, h, e[u + 13], 4, 681279174),
            h = s(h, n, i, r, e[u + 0], 11, -358537222),
            r = s(r, h, n, i, e[u + 3], 16, -722521979),
            i = s(i, r, h, n, e[u + 6], 23, 76029189),
            n = s(n, i, r, h, e[u + 9], 4, -640364487),
            h = s(h, n, i, r, e[u + 12], 11, -421815835),
            r = s(r, h, n, i, e[u + 15], 16, 530742520),
            i = s(i, r, h, n, e[u + 2], 23, -995338651),
            n = c(n, i, r, h, e[u + 0], 6, -198630844),
            h = c(h, n, i, r, e[u + 7], 10, 1126891415),
            r = c(r, h, n, i, e[u + 14], 15, -1416354905),
            i = c(i, r, h, n, e[u + 5], 21, -57434055),
            n = c(n, i, r, h, e[u + 12], 6, 1700485571),
            h = c(h, n, i, r, e[u + 3], 10, -1894986606),
            r = c(r, h, n, i, e[u + 10], 15, -1051523),
            i = c(i, r, h, n, e[u + 1], 21, -2054922799),
            n = c(n, i, r, h, e[u + 8], 6, 1873313359),
            h = c(h, n, i, r, e[u + 15], 10, -30611744),
            r = c(r, h, n, i, e[u + 6], 15, -1560198380),
            i = c(i, r, h, n, e[u + 13], 21, 1309151649),
            n = c(n, i, r, h, e[u + 4], 6, -145523070),
            h = c(h, n, i, r, e[u + 11], 10, -1120210379),
            r = c(r, h, n, i, e[u + 2], 15, 718787259),
            i = c(i, r, h, n, e[u + 9], 21, -343485551),
            n = f(n, d),
            i = f(i, l),
            r = f(r, p),
            h = f(h, b)
        }
        return [n, i, r, h]
    }
    function r(e, t, n, i, r, a) {
        return f(h(f(f(t, e), f(i, a)), r), n)
    }
    function a(e, t, n, i, a, o, s) {
        return r(t & n | ~t & i, e, t, a, o, s)
    }
    function o(e, t, n, i, a, o, s) {
        return r(t & i | n & ~i, e, t, a, o, s)
    }
    function s(e, t, n, i, a, o, s) {
        return r(t ^ n ^ i, e, t, a, o, s)
    }
    function c(e, t, n, i, a, o, s) {
        return r(n ^ (t | ~i), e, t, a, o, s)
    }
    function f(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }
    function h(e, t) {
        return e << t | e >>> 32 - t
    }
    var u = n(527);
    e.exports = function(e) {
        return u(e, i)
    }
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        function i() {
            u.call(this, 64),
            this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878,
            this._e = 3285377520
        }
        function r(e, t) {
            return e << t | e >>> 32 - t
        }
        function a(e, t, n, i, a, o, s, c) {
            return r(e + (t ^ n ^ i) + o + s | 0, c) + a | 0
        }
        function o(e, t, n, i, a, o, s, c) {
            return r(e + (t & n | ~t & i) + o + s | 0, c) + a | 0
        }
        function s(e, t, n, i, a, o, s, c) {
            return r(e + ((t | ~n) ^ i) + o + s | 0, c) + a | 0
        }
        function c(e, t, n, i, a, o, s, c) {
            return r(e + (t & i | n & ~i) + o + s | 0, c) + a | 0
        }
        function f(e, t, n, i, a, o, s, c) {
            return r(e + (t ^ (n | ~i)) + o + s | 0, c) + a | 0
        }
        var h = n(2)
          , u = n(159);
        h(i, u),
        i.prototype._update = function() {
            for (var e = new Array(16), t = 0; t < 16; ++t)
                e[t] = this._block.readInt32LE(4 * t);
            var n = this._a
              , i = this._b
              , h = this._c
              , u = this._d
              , d = this._e;
            n = a(n, i, h, u, d, e[0], 0, 11),
            h = r(h, 10),
            d = a(d, n, i, h, u, e[1], 0, 14),
            i = r(i, 10),
            u = a(u, d, n, i, h, e[2], 0, 15),
            n = r(n, 10),
            h = a(h, u, d, n, i, e[3], 0, 12),
            d = r(d, 10),
            i = a(i, h, u, d, n, e[4], 0, 5),
            u = r(u, 10),
            n = a(n, i, h, u, d, e[5], 0, 8),
            h = r(h, 10),
            d = a(d, n, i, h, u, e[6], 0, 7),
            i = r(i, 10),
            u = a(u, d, n, i, h, e[7], 0, 9),
            n = r(n, 10),
            h = a(h, u, d, n, i, e[8], 0, 11),
            d = r(d, 10),
            i = a(i, h, u, d, n, e[9], 0, 13),
            u = r(u, 10),
            n = a(n, i, h, u, d, e[10], 0, 14),
            h = r(h, 10),
            d = a(d, n, i, h, u, e[11], 0, 15),
            i = r(i, 10),
            u = a(u, d, n, i, h, e[12], 0, 6),
            n = r(n, 10),
            h = a(h, u, d, n, i, e[13], 0, 7),
            d = r(d, 10),
            i = a(i, h, u, d, n, e[14], 0, 9),
            u = r(u, 10),
            n = a(n, i, h, u, d, e[15], 0, 8),
            h = r(h, 10),
            d = o(d, n, i, h, u, e[7], 1518500249, 7),
            i = r(i, 10),
            u = o(u, d, n, i, h, e[4], 1518500249, 6),
            n = r(n, 10),
            h = o(h, u, d, n, i, e[13], 1518500249, 8),
            d = r(d, 10),
            i = o(i, h, u, d, n, e[1], 1518500249, 13),
            u = r(u, 10),
            n = o(n, i, h, u, d, e[10], 1518500249, 11),
            h = r(h, 10),
            d = o(d, n, i, h, u, e[6], 1518500249, 9),
            i = r(i, 10),
            u = o(u, d, n, i, h, e[15], 1518500249, 7),
            n = r(n, 10),
            h = o(h, u, d, n, i, e[3], 1518500249, 15),
            d = r(d, 10),
            i = o(i, h, u, d, n, e[12], 1518500249, 7),
            u = r(u, 10),
            n = o(n, i, h, u, d, e[0], 1518500249, 12),
            h = r(h, 10),
            d = o(d, n, i, h, u, e[9], 1518500249, 15),
            i = r(i, 10),
            u = o(u, d, n, i, h, e[5], 1518500249, 9),
            n = r(n, 10),
            h = o(h, u, d, n, i, e[2], 1518500249, 11),
            d = r(d, 10),
            i = o(i, h, u, d, n, e[14], 1518500249, 7),
            u = r(u, 10),
            n = o(n, i, h, u, d, e[11], 1518500249, 13),
            h = r(h, 10),
            d = o(d, n, i, h, u, e[8], 1518500249, 12),
            i = r(i, 10),
            u = s(u, d, n, i, h, e[3], 1859775393, 11),
            n = r(n, 10),
            h = s(h, u, d, n, i, e[10], 1859775393, 13),
            d = r(d, 10),
            i = s(i, h, u, d, n, e[14], 1859775393, 6),
            u = r(u, 10),
            n = s(n, i, h, u, d, e[4], 1859775393, 7),
            h = r(h, 10),
            d = s(d, n, i, h, u, e[9], 1859775393, 14),
            i = r(i, 10),
            u = s(u, d, n, i, h, e[15], 1859775393, 9),
            n = r(n, 10),
            h = s(h, u, d, n, i, e[8], 1859775393, 13),
            d = r(d, 10),
            i = s(i, h, u, d, n, e[1], 1859775393, 15),
            u = r(u, 10),
            n = s(n, i, h, u, d, e[2], 1859775393, 14),
            h = r(h, 10),
            d = s(d, n, i, h, u, e[7], 1859775393, 8),
            i = r(i, 10),
            u = s(u, d, n, i, h, e[0], 1859775393, 13),
            n = r(n, 10),
            h = s(h, u, d, n, i, e[6], 1859775393, 6),
            d = r(d, 10),
            i = s(i, h, u, d, n, e[13], 1859775393, 5),
            u = r(u, 10),
            n = s(n, i, h, u, d, e[11], 1859775393, 12),
            h = r(h, 10),
            d = s(d, n, i, h, u, e[5], 1859775393, 7),
            i = r(i, 10),
            u = s(u, d, n, i, h, e[12], 1859775393, 5),
            n = r(n, 10),
            h = c(h, u, d, n, i, e[1], 2400959708, 11),
            d = r(d, 10),
            i = c(i, h, u, d, n, e[9], 2400959708, 12),
            u = r(u, 10),
            n = c(n, i, h, u, d, e[11], 2400959708, 14),
            h = r(h, 10),
            d = c(d, n, i, h, u, e[10], 2400959708, 15),
            i = r(i, 10),
            u = c(u, d, n, i, h, e[0], 2400959708, 14),
            n = r(n, 10),
            h = c(h, u, d, n, i, e[8], 2400959708, 15),
            d = r(d, 10),
            i = c(i, h, u, d, n, e[12], 2400959708, 9),
            u = r(u, 10),
            n = c(n, i, h, u, d, e[4], 2400959708, 8),
            h = r(h, 10),
            d = c(d, n, i, h, u, e[13], 2400959708, 9),
            i = r(i, 10),
            u = c(u, d, n, i, h, e[3], 2400959708, 14),
            n = r(n, 10),
            h = c(h, u, d, n, i, e[7], 2400959708, 5),
            d = r(d, 10),
            i = c(i, h, u, d, n, e[15], 2400959708, 6),
            u = r(u, 10),
            n = c(n, i, h, u, d, e[14], 2400959708, 8),
            h = r(h, 10),
            d = c(d, n, i, h, u, e[5], 2400959708, 6),
            i = r(i, 10),
            u = c(u, d, n, i, h, e[6], 2400959708, 5),
            n = r(n, 10),
            h = c(h, u, d, n, i, e[2], 2400959708, 12),
            d = r(d, 10),
            i = f(i, h, u, d, n, e[4], 2840853838, 9),
            u = r(u, 10),
            n = f(n, i, h, u, d, e[0], 2840853838, 15),
            h = r(h, 10),
            d = f(d, n, i, h, u, e[5], 2840853838, 5),
            i = r(i, 10),
            u = f(u, d, n, i, h, e[9], 2840853838, 11),
            n = r(n, 10),
            h = f(h, u, d, n, i, e[7], 2840853838, 6),
            d = r(d, 10),
            i = f(i, h, u, d, n, e[12], 2840853838, 8),
            u = r(u, 10),
            n = f(n, i, h, u, d, e[2], 2840853838, 13),
            h = r(h, 10),
            d = f(d, n, i, h, u, e[10], 2840853838, 12),
            i = r(i, 10),
            u = f(u, d, n, i, h, e[14], 2840853838, 5),
            n = r(n, 10),
            h = f(h, u, d, n, i, e[1], 2840853838, 12),
            d = r(d, 10),
            i = f(i, h, u, d, n, e[3], 2840853838, 13),
            u = r(u, 10),
            n = f(n, i, h, u, d, e[8], 2840853838, 14),
            h = r(h, 10),
            d = f(d, n, i, h, u, e[11], 2840853838, 11),
            i = r(i, 10),
            u = f(u, d, n, i, h, e[6], 2840853838, 8),
            n = r(n, 10),
            h = f(h, u, d, n, i, e[15], 2840853838, 5),
            d = r(d, 10),
            i = f(i, h, u, d, n, e[13], 2840853838, 6),
            u = r(u, 10);
            var l = this._a
              , p = this._b
              , b = this._c
              , v = this._d
              , y = this._e;
            l = f(l, p, b, v, y, e[5], 1352829926, 8),
            b = r(b, 10),
            y = f(y, l, p, b, v, e[14], 1352829926, 9),
            p = r(p, 10),
            v = f(v, y, l, p, b, e[7], 1352829926, 9),
            l = r(l, 10),
            b = f(b, v, y, l, p, e[0], 1352829926, 11),
            y = r(y, 10),
            p = f(p, b, v, y, l, e[9], 1352829926, 13),
            v = r(v, 10),
            l = f(l, p, b, v, y, e[2], 1352829926, 15),
            b = r(b, 10),
            y = f(y, l, p, b, v, e[11], 1352829926, 15),
            p = r(p, 10),
            v = f(v, y, l, p, b, e[4], 1352829926, 5),
            l = r(l, 10),
            b = f(b, v, y, l, p, e[13], 1352829926, 7),
            y = r(y, 10),
            p = f(p, b, v, y, l, e[6], 1352829926, 7),
            v = r(v, 10),
            l = f(l, p, b, v, y, e[15], 1352829926, 8),
            b = r(b, 10),
            y = f(y, l, p, b, v, e[8], 1352829926, 11),
            p = r(p, 10),
            v = f(v, y, l, p, b, e[1], 1352829926, 14),
            l = r(l, 10),
            b = f(b, v, y, l, p, e[10], 1352829926, 14),
            y = r(y, 10),
            p = f(p, b, v, y, l, e[3], 1352829926, 12),
            v = r(v, 10),
            l = f(l, p, b, v, y, e[12], 1352829926, 6),
            b = r(b, 10),
            y = c(y, l, p, b, v, e[6], 1548603684, 9),
            p = r(p, 10),
            v = c(v, y, l, p, b, e[11], 1548603684, 13),
            l = r(l, 10),
            b = c(b, v, y, l, p, e[3], 1548603684, 15),
            y = r(y, 10),
            p = c(p, b, v, y, l, e[7], 1548603684, 7),
            v = r(v, 10),
            l = c(l, p, b, v, y, e[0], 1548603684, 12),
            b = r(b, 10),
            y = c(y, l, p, b, v, e[13], 1548603684, 8),
            p = r(p, 10),
            v = c(v, y, l, p, b, e[5], 1548603684, 9),
            l = r(l, 10),
            b = c(b, v, y, l, p, e[10], 1548603684, 11),
            y = r(y, 10),
            p = c(p, b, v, y, l, e[14], 1548603684, 7),
            v = r(v, 10),
            l = c(l, p, b, v, y, e[15], 1548603684, 7),
            b = r(b, 10),
            y = c(y, l, p, b, v, e[8], 1548603684, 12),
            p = r(p, 10),
            v = c(v, y, l, p, b, e[12], 1548603684, 7),
            l = r(l, 10),
            b = c(b, v, y, l, p, e[4], 1548603684, 6),
            y = r(y, 10),
            p = c(p, b, v, y, l, e[9], 1548603684, 15),
            v = r(v, 10),
            l = c(l, p, b, v, y, e[1], 1548603684, 13),
            b = r(b, 10),
            y = c(y, l, p, b, v, e[2], 1548603684, 11),
            p = r(p, 10),
            v = s(v, y, l, p, b, e[15], 1836072691, 9),
            l = r(l, 10),
            b = s(b, v, y, l, p, e[5], 1836072691, 7),
            y = r(y, 10),
            p = s(p, b, v, y, l, e[1], 1836072691, 15),
            v = r(v, 10),
            l = s(l, p, b, v, y, e[3], 1836072691, 11),
            b = r(b, 10),
            y = s(y, l, p, b, v, e[7], 1836072691, 8),
            p = r(p, 10),
            v = s(v, y, l, p, b, e[14], 1836072691, 6),
            l = r(l, 10),
            b = s(b, v, y, l, p, e[6], 1836072691, 6),
            y = r(y, 10),
            p = s(p, b, v, y, l, e[9], 1836072691, 14),
            v = r(v, 10),
            l = s(l, p, b, v, y, e[11], 1836072691, 12),
            b = r(b, 10),
            y = s(y, l, p, b, v, e[8], 1836072691, 13),
            p = r(p, 10),
            v = s(v, y, l, p, b, e[12], 1836072691, 5),
            l = r(l, 10),
            b = s(b, v, y, l, p, e[2], 1836072691, 14),
            y = r(y, 10),
            p = s(p, b, v, y, l, e[10], 1836072691, 13),
            v = r(v, 10),
            l = s(l, p, b, v, y, e[0], 1836072691, 13),
            b = r(b, 10),
            y = s(y, l, p, b, v, e[4], 1836072691, 7),
            p = r(p, 10),
            v = s(v, y, l, p, b, e[13], 1836072691, 5),
            l = r(l, 10),
            b = o(b, v, y, l, p, e[8], 2053994217, 15),
            y = r(y, 10),
            p = o(p, b, v, y, l, e[6], 2053994217, 5),
            v = r(v, 10),
            l = o(l, p, b, v, y, e[4], 2053994217, 8),
            b = r(b, 10),
            y = o(y, l, p, b, v, e[1], 2053994217, 11),
            p = r(p, 10),
            v = o(v, y, l, p, b, e[3], 2053994217, 14),
            l = r(l, 10),
            b = o(b, v, y, l, p, e[11], 2053994217, 14),
            y = r(y, 10),
            p = o(p, b, v, y, l, e[15], 2053994217, 6),
            v = r(v, 10),
            l = o(l, p, b, v, y, e[0], 2053994217, 14),
            b = r(b, 10),
            y = o(y, l, p, b, v, e[5], 2053994217, 6),
            p = r(p, 10),
            v = o(v, y, l, p, b, e[12], 2053994217, 9),
            l = r(l, 10),
            b = o(b, v, y, l, p, e[2], 2053994217, 12),
            y = r(y, 10),
            p = o(p, b, v, y, l, e[13], 2053994217, 9),
            v = r(v, 10),
            l = o(l, p, b, v, y, e[9], 2053994217, 12),
            b = r(b, 10),
            y = o(y, l, p, b, v, e[7], 2053994217, 5),
            p = r(p, 10),
            v = o(v, y, l, p, b, e[10], 2053994217, 15),
            l = r(l, 10),
            b = o(b, v, y, l, p, e[14], 2053994217, 8),
            y = r(y, 10),
            p = a(p, b, v, y, l, e[12], 0, 8),
            v = r(v, 10),
            l = a(l, p, b, v, y, e[15], 0, 5),
            b = r(b, 10),
            y = a(y, l, p, b, v, e[10], 0, 12),
            p = r(p, 10),
            v = a(v, y, l, p, b, e[4], 0, 9),
            l = r(l, 10),
            b = a(b, v, y, l, p, e[1], 0, 12),
            y = r(y, 10),
            p = a(p, b, v, y, l, e[5], 0, 5),
            v = r(v, 10),
            l = a(l, p, b, v, y, e[8], 0, 14),
            b = r(b, 10),
            y = a(y, l, p, b, v, e[7], 0, 6),
            p = r(p, 10),
            v = a(v, y, l, p, b, e[6], 0, 8),
            l = r(l, 10),
            b = a(b, v, y, l, p, e[2], 0, 13),
            y = r(y, 10),
            p = a(p, b, v, y, l, e[13], 0, 6),
            v = r(v, 10),
            l = a(l, p, b, v, y, e[14], 0, 5),
            b = r(b, 10),
            y = a(y, l, p, b, v, e[0], 0, 15),
            p = r(p, 10),
            v = a(v, y, l, p, b, e[3], 0, 13),
            l = r(l, 10),
            b = a(b, v, y, l, p, e[9], 0, 11),
            y = r(y, 10),
            p = a(p, b, v, y, l, e[11], 0, 11),
            v = r(v, 10);
            var m = this._b + h + v | 0;
            this._b = this._c + u + y | 0,
            this._c = this._d + d + l | 0,
            this._d = this._e + n + p | 0,
            this._e = this._a + i + b | 0,
            this._a = m
        }
        ,
        i.prototype._digest = function() {
            this._block[this._blockOffset++] = 128,
            this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            this._blockOffset = 0),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
            var e = new t(20);
            return e.writeInt32LE(this._a, 0),
            e.writeInt32LE(this._b, 4),
            e.writeInt32LE(this._c, 8),
            e.writeInt32LE(this._d, 12),
            e.writeInt32LE(this._e, 16),
            e
        }
        ,
        e.exports = i
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    function i() {
        r.call(this)
    }
    e.exports = i;
    var r = n(35).EventEmitter;
    n(2)(i, r),
    i.Readable = n(34),
    i.Writable = n(528),
    i.Duplex = n(529),
    i.Transform = n(530),
    i.PassThrough = n(531),
    i.Stream = i,
    i.prototype.pipe = function(e, t) {
        function n(t) {
            e.writable && !1 === e.write(t) && f.pause && f.pause()
        }
        function i() {
            f.readable && f.resume && f.resume()
        }
        function a() {
            h || (h = !0,
            e.end())
        }
        function o() {
            h || (h = !0,
            "function" == typeof e.destroy && e.destroy())
        }
        function s(e) {
            if (c(),
            0 === r.listenerCount(this, "error"))
                throw e
        }
        function c() {
            f.removeListener("data", n),
            e.removeListener("drain", i),
            f.removeListener("end", a),
            f.removeListener("close", o),
            f.removeListener("error", s),
            e.removeListener("error", s),
            f.removeListener("end", c),
            f.removeListener("close", c),
            e.removeListener("close", c)
        }
        var f = this;
        f.on("data", n),
        e.on("drain", i),
        e._isStdio || t && !1 === t.end || (f.on("end", a),
        f.on("close", o));
        var h = !1;
        return f.on("error", s),
        e.on("error", s),
        f.on("end", c),
        f.on("close", c),
        e.on("close", c),
        e.emit("pipe", f),
        e
    }
}
, function(e, t, n) {
    var t = e.exports = function(e) {
        e = e.toLowerCase();
        var n = t[e];
        if (!n)
            throw new Error(e + " is not supported (we accept pull requests)");
        return new n
    }
    ;
    t.sha = n(532),
    t.sha1 = n(533),
    t.sha224 = n(534),
    t.sha256 = n(160),
    t.sha384 = n(535),
    t.sha512 = n(161)
}
, function(e, t, n) {
    function i() {
        return Object.keys(o)
    }
    var r = n(541)
      , a = n(549)
      , o = n(170);
    t.createCipher = t.Cipher = r.createCipher,
    t.createCipheriv = t.Cipheriv = r.createCipheriv,
    t.createDecipher = t.Decipher = a.createDecipher,
    t.createDecipheriv = t.Decipheriv = a.createDecipheriv,
    t.listCiphers = t.getCiphers = i
}
, function(e, t, n) {
    var i = {
        ECB: n(542),
        CBC: n(543),
        CFB: n(544),
        CFB8: n(545),
        CFB1: n(546),
        OFB: n(547),
        CTR: n(168),
        GCM: n(168)
    }
      , r = n(170);
    for (var a in r)
        r[a].module = i[r[a].mode];
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    t.utils = n(551),
    t.Cipher = n(552),
    t.DES = n(553),
    t.CBC = n(554),
    t.EDE = n(555)
}
, function(e, t, n) {
    (function(t) {
        function i(e) {
            var t = a(e);
            return {
                blinder: t.toRed(o.mont(e.modulus)).redPow(new o(e.publicExponent)).fromRed(),
                unblinder: t.invm(e.modulus)
            }
        }
        function r(e, n) {
            var r = i(n)
              , a = n.modulus.byteLength()
              , s = (o.mont(n.modulus),
            new o(e).mul(r.blinder).umod(n.modulus))
              , c = s.toRed(o.mont(n.prime1))
              , f = s.toRed(o.mont(n.prime2))
              , h = n.coefficient
              , u = n.prime1
              , d = n.prime2
              , l = c.redPow(n.exponent1)
              , p = f.redPow(n.exponent2);
            l = l.fromRed(),
            p = p.fromRed();
            var b = l.isub(p).imul(h).umod(u);
            return b.imul(d),
            p.iadd(b),
            new t(p.imul(r.unblinder).umod(n.modulus).toArray(!1, a))
        }
        function a(e) {
            for (var t = e.modulus.byteLength(), n = new o(s(t)); n.cmp(e.modulus) >= 0 || !n.umod(e.prime1) || !n.umod(e.prime2); )
                n = new o(s(t));
            return n
        }
        var o = n(7)
          , s = n(40);
        e.exports = r,
        r.getr = a
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    var i = t;
    i.utils = n(23),
    i.common = n(56),
    i.sha = n(571),
    i.ripemd = n(575),
    i.hmac = n(576),
    i.sha1 = i.sha.sha1,
    i.sha256 = i.sha.sha256,
    i.sha224 = i.sha.sha224,
    i.sha384 = i.sha.sha384,
    i.sha512 = i.sha.sha512,
    i.ripemd160 = i.ripemd.ripemd160
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === r) {
            var a = Object.getPrototypeOf(t);
            return null === a ? void 0 : e(a, n, i)
        }
        if ("value"in r)
            return r.value;
        var o = r.get;
        if (void 0 !== o)
            return o.call(i)
    }
      , c = void 0
      , f = void 0
      , h = n(5)
      , u = n(75)
      , d = n(620)
      , l = void 0
      , p = 0
      , b = void 0
      , v = void 0
      , y = function(e) {
        function t(e) {
            i(this, t);
            var n = e.scene;
            if (console.log("--\x3e"),
            !c) {
                var a = e.data.annotation.spriteURL || "assets/textures/annotation.png";
                c = new BABYLON.SpriteManager(h.sprite.ANNOTATION,h.config.URI_PREFIX + a,20,64,n),
                c.isPickable = !0,
                c.renderingGroupId = 1,
                f = new BABYLON.SpriteManager(h.sprite.ANNOTATION,h.config.URI_PREFIX + a,20,64,n)
            }
            var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "annotation", c));
            o.babylonScene = e,
            o.isPickable = !0,
            o.color.a = .3,
            o.actionManager = e.getActionManagerByName(h.action.ANNOTATION),
            o.configData = e.data.annotation;
            var s = o.configData;
            if (o.bottomSprite = new BABYLON.Sprite("annotationTop",f),
            "threeDLine" === s.type) {
                b || (b = new BABYLON.StandardMaterial("lineMaterial",n),
                b.alpha = s.line.alpha,
                b.diffuseColor = BABYLON.Color3.FromHexString("#" + s.line.color.toString(16)),
                v = new BABYLON.StandardMaterial("lineMaterialTop",n),
                v.alpha = Math.min(s.line.alpha / 3, .1),
                v.diffuseColor = b.diffuseColor),
                o.lineMeshName = "line" + ++p;
                var u = [new BABYLON.Vector3(0,0,0), new BABYLON.Vector3(0,0,0)];
                o.lineMesh = BABYLON.Mesh.CreateTube("tube", u, .01, 6, null, null, n, !0),
                o.lineMesh.material = b,
                o.lineMeshTopRender = BABYLON.Mesh.CreateTube("tubeTopRender", u, .01, 6, null, null, n, !0),
                o.lineMeshTopRender.material = v,
                o.lineMeshTopRender.renderingGroupId = 1,
                o.pos3D = [new BABYLON.Vector3(0,0,0), new BABYLON.Vector3(0,0,0)],
                o.pos2D = [{
                    x: 0,
                    y: 0
                }, {
                    x: 0,
                    y: 0
                }],
                o.tip2D = new d(e),
                s.tipParent.addChild(o.tip2D)
            }
            return o
        }
        return a(t, e),
        o(t, [{
            key: "zoomIn",
            value: function(e) {
                var t = this.getSceneData()
                  , n = {
                    radius: t.camera.radius,
                    alpha: t.camera.alpha % (2 * Math.PI),
                    beta: t.camera.beta % (2 * Math.PI)
                };
                if (Object.assign(n, e),
                this.babylonScene.lookAtVector(t.camera.target, n),
                t.pickedMesh) {
                    var i = this.babylonScene.scene
                      , r = t.pickedMesh
                      , a = i.getMeshByID(r.id) || i.getMeshByName(r.name);
                    a && a.actionManager && a.actionManager.processTrigger(h.action.ANNOTATION_CLICK_TRIGGER, {
                        source: a
                    })
                }
                var o = t.aniProgress;
                this.babylonScene.animationManager.tweenToProgress(o, e),
                (this.babylonScene.data.annotation.showAnnotationPanel || h.isDebug) && this.showTip()
            }
        }, {
            key: "showTip",
            value: function() {
                if (l && l.hideTip(),
                this.tip)
                    this.tip.fadeIn();
                else {
                    var e = "标题"
                      , t = "请输入说明文字"
                      , n = '<div class="annotation visible" data-hotspot="1">\n\t\t\t\t\t        <div class="tooltip visible reverse-x">\n\t\t\t\t                <div class="tooltip-content padded">\n\t\t\t\t                    <div class="edition">\n\t\t\t                            <input class="title" placeholder="' + e + '" maxlength="64" required="">\n\t\t\t                            <textarea class="description" placeholder="' + t + '" maxlength="1024" rows="2"></textarea>\n\t\t\t\t                    </div>\n\t\t\t\t                </div>\n\t\t\t\t\t        </div>\n\t\t\t\t\t    </div>';
                    this.tip = $(n);
                    var i = $("body")
                      , r = $(".babylon-viewer");
                    0 === $(".babylon-viewer").length && (i.append('<div class="babylon-viewer"></div>'),
                    r = $(".babylon-viewer")),
                    r.append(this.tip),
                    this._sceneData && (e = this._sceneData.title,
                    t = this._sceneData.description,
                    e = u.convertHTMLToText(e),
                    this.tip.find(".title").val(e),
                    this.tip.find(".description").val(t))
                }
                l = this
            }
        }, {
            key: "getSceneData",
            value: function() {
                if (!this.tip)
                    return this._sceneData;
                var e = this.tip.find(".title").val()
                  , t = this.tip.find(".description").val();
                return "" !== e && (this._sceneData.title = e),
                "" !== t && (this._sceneData.description = t),
                this._sceneData
            }
        }, {
            key: "setSceneData",
            value: function(e) {
                this._sceneData = e,
                this.position.copyFrom(e.position),
                this.bottomSprite.position.copyFrom(e.position),
                this.tip2D && this.tip2D.updateText(e.title)
            }
        }, {
            key: "hideTip",
            value: function() {
                this.tip.fadeOut()
            }
        }, {
            key: "takeSceneSnapshot",
            value: function(e) {
                var t = this.actionManager.getScene().activeCamera
                  , n = t.getTarget()
                  , i = this.babylonScene.animationManager;
                this.setSceneData({
                    camera: {
                        radius: t.radius,
                        target: {
                            x: n.x,
                            y: n.y,
                            z: n.z
                        },
                        alpha: t.alpha,
                        beta: t.beta
                    },
                    title: "标题",
                    description: "请输入文字",
                    position: {
                        x: this.position.x,
                        y: this.position.y,
                        z: this.position.z
                    },
                    pickedMesh: e,
                    aniProgress: i.getProgress()
                })
            }
        }, {
            key: "updateTip",
            value: function() {
                if (this.bottomSprite.size = this.size,
                this.tip && "block" === this.tip.css("display")) {
                    var e = u.projectToScreen(this.position, this.actionManager.getScene());
                    this.tip.css("left", e.x + 240),
                    this.tip.css("top", e.y - 12)
                }
                if (this.lineMesh) {
                    var t = .001 * this.distanceOfCamera * this.configData.line.thickness
                      , n = [this.position, this.pos3D[0]];
                    this.lineMesh = BABYLON.MeshBuilder.CreateTube(null, {
                        path: n,
                        radius: t,
                        instance: this.lineMesh
                    }),
                    this.lineMeshTopRender = BABYLON.MeshBuilder.CreateTube(null, {
                        path: n,
                        radius: t,
                        instance: this.lineMeshTopRender
                    }),
                    this.tip2D.render(this.pos2D);
                    var i = this._sceneData.title
                      , r = i.split(":");
                    h.shiftDown ? this.tip2D.updateText(i) : this.tip2D.updateText(r[r.length - 1])
                }
            }
        }, {
            key: "dispose",
            value: function() {
                this.lineMesh && (s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this),
                this.bottomSprite.dispose(),
                this.tip && this.tip.remove(),
                this.tip2D && (this.tip2D.dispose(),
                this.lineMesh.material = null,
                this.lineMeshTopRender.material = null,
                this.lineMeshTopRender.dispose(),
                this.lineMesh.dispose(),
                delete this.lineMesh,
                delete this.lineMeshTopRender,
                delete this.tip2D))
            }
        }], [{
            key: "clearData",
            value: function() {
                b = null,
                c = null
            }
        }, {
            key: "UpdateSpriteRenderData",
            value: function(e) {
                if (0 !== e.length) {
                    var t = e[0].babylonScene;
                    if ("threeDLine" === t.data.annotation.type) {
                        var n = t.scene
                          , i = n.getEngine()
                          , r = n.activeCamera
                          , a = i.getRenderWidth() / 2
                          , o = i.getRenderHeight() / 2;
                        if (t.defaultTarget) {
                            var s = u.projectToScreen(t.defaultTarget, n);
                            a = s.x,
                            o = s.y
                        }
                        var c = [[], [], [], []];
                        e.forEach(function(e) {
                            var t = u.projectToScreen(e.position, n)
                              , i = t.x > a ? 1 : 0
                              , r = (t.y < o ? 1 : 0) << 1;
                            c[i | r].push(e),
                            t = u.canvasPointToPixiSprite(t, instance.stage, n.getEngine().getRenderingCanvas()),
                            e.pos2D[0] = t
                        });
                        var f = n.activeCamera.position;
                        c.forEach(function(e, t) {
                            for (var i = e.length, a = 0; a < e.length; a++) {
                                var o = e[a]
                                  , s = 0 == (1 & t) ? -1 : 1
                                  , c = t >> 1 == 0 ? -1 : 1
                                  , h = o.configData.line.type || "default"
                                  , d = void 0;
                                switch (h) {
                                case "default":
                                    d = Math.PI / 2 / (i + 1) * (a + 1);
                                    break;
                                case "random":
                                    d = Math.random() * Math.PI * 2;
                                    break;
                                case "horizontal":
                                    d = 0;
                                    break;
                                case "vertical":
                                    d = Math.PI / 2
                                }
                                var l = BABYLON.Vector3.Distance(o.position, r.position)
                                  , p = 2 * Math.cos(d) * s
                                  , b = 2 * Math.sin(d) * c
                                  , v = BABYLON.AbstractMesh._lookAtVectorCache;
                                f.subtractToRef(o.position, v);
                                var y = Math.sqrt(v.x * v.x + v.z * v.z)
                                  , m = -Math.atan2(v.z, v.x) - Math.PI / 2
                                  , g = Math.atan2(v.y, y)
                                  , w = BABYLON.Matrix.RotationYawPitchRoll(m, g, 0);
                                w.setTranslation(o.position);
                                var _ = new BABYLON.Vector3(0,0,0);
                                BABYLON.Vector3.TransformCoordinatesFromFloatsToRef(p, b, 0, w, _);
                                var A = new BABYLON.Vector3(0,0,0);
                                BABYLON.Vector3.TransformCoordinatesFromFloatsToRef(p + .4 * s, b, 0, w, A),
                                _ = BABYLON.Vector3.Lerp(o.position, _, .1 * l * o.configData.line.scale);
                                for (var M = [_, A], E = 0; E < o.pos3D.length; E++) {
                                    var S = M[E];
                                    o.pos3D[E] && (S.x = o.pos3D[E].x + (S.x - o.pos3D[E].x) / 7,
                                    S.y = o.pos3D[E].y + (S.y - o.pos3D[E].y) / 7,
                                    S.z = o.pos3D[E].z + (S.z - o.pos3D[E].z) / 7,
                                    o.pos3D[E] = S)
                                }
                                var x = u.projectToPixiSprite(o.pos3D[0], n, instance.stage);
                                o.pos2D[1] = x,
                                o.distanceOfCamera = l
                            }
                        })
                    }
                }
            }
        }, {
            key: "SetAnnotationVisible",
            value: function(e) {
                if (c) {
                    c.sprites && (e ? (c.tempSprites && (c.sprites = c.tempSprites,
                    delete c.tempSprites),
                    f.tempSprites && (f.sprites = f.tempSprites,
                    delete f.tempSprites)) : (c.tempSprites = c.sprites,
                    c.sprites = [],
                    f.tempSprites = f.sprites,
                    f.sprites = []))
                }
            }
        }, {
            key: "lastTip",
            get: function() {
                return l
            },
            set: function(e) {
                l = e
            }
        }]),
        t
    }(BABYLON.Sprite);
    e.exports = y
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    !function() {
        var t = n(525)
          , i = n(158).utf8
          , r = n(526)
          , a = n(158).bin
          , o = function(e, n) {
            e.constructor == String ? e = n && "binary" === n.encoding ? a.stringToBytes(e) : i.stringToBytes(e) : r(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
            for (var s = t.bytesToWords(e), c = 8 * e.length, f = 1732584193, h = -271733879, u = -1732584194, d = 271733878, l = 0; l < s.length; l++)
                s[l] = 16711935 & (s[l] << 8 | s[l] >>> 24) | 4278255360 & (s[l] << 24 | s[l] >>> 8);
            s[c >>> 5] |= 128 << c % 32,
            s[14 + (c + 64 >>> 9 << 4)] = c;
            for (var p = o._ff, b = o._gg, v = o._hh, y = o._ii, l = 0; l < s.length; l += 16) {
                var m = f
                  , g = h
                  , w = u
                  , _ = d;
                f = p(f, h, u, d, s[l + 0], 7, -680876936),
                d = p(d, f, h, u, s[l + 1], 12, -389564586),
                u = p(u, d, f, h, s[l + 2], 17, 606105819),
                h = p(h, u, d, f, s[l + 3], 22, -1044525330),
                f = p(f, h, u, d, s[l + 4], 7, -176418897),
                d = p(d, f, h, u, s[l + 5], 12, 1200080426),
                u = p(u, d, f, h, s[l + 6], 17, -1473231341),
                h = p(h, u, d, f, s[l + 7], 22, -45705983),
                f = p(f, h, u, d, s[l + 8], 7, 1770035416),
                d = p(d, f, h, u, s[l + 9], 12, -1958414417),
                u = p(u, d, f, h, s[l + 10], 17, -42063),
                h = p(h, u, d, f, s[l + 11], 22, -1990404162),
                f = p(f, h, u, d, s[l + 12], 7, 1804603682),
                d = p(d, f, h, u, s[l + 13], 12, -40341101),
                u = p(u, d, f, h, s[l + 14], 17, -1502002290),
                h = p(h, u, d, f, s[l + 15], 22, 1236535329),
                f = b(f, h, u, d, s[l + 1], 5, -165796510),
                d = b(d, f, h, u, s[l + 6], 9, -1069501632),
                u = b(u, d, f, h, s[l + 11], 14, 643717713),
                h = b(h, u, d, f, s[l + 0], 20, -373897302),
                f = b(f, h, u, d, s[l + 5], 5, -701558691),
                d = b(d, f, h, u, s[l + 10], 9, 38016083),
                u = b(u, d, f, h, s[l + 15], 14, -660478335),
                h = b(h, u, d, f, s[l + 4], 20, -405537848),
                f = b(f, h, u, d, s[l + 9], 5, 568446438),
                d = b(d, f, h, u, s[l + 14], 9, -1019803690),
                u = b(u, d, f, h, s[l + 3], 14, -187363961),
                h = b(h, u, d, f, s[l + 8], 20, 1163531501),
                f = b(f, h, u, d, s[l + 13], 5, -1444681467),
                d = b(d, f, h, u, s[l + 2], 9, -51403784),
                u = b(u, d, f, h, s[l + 7], 14, 1735328473),
                h = b(h, u, d, f, s[l + 12], 20, -1926607734),
                f = v(f, h, u, d, s[l + 5], 4, -378558),
                d = v(d, f, h, u, s[l + 8], 11, -2022574463),
                u = v(u, d, f, h, s[l + 11], 16, 1839030562),
                h = v(h, u, d, f, s[l + 14], 23, -35309556),
                f = v(f, h, u, d, s[l + 1], 4, -1530992060),
                d = v(d, f, h, u, s[l + 4], 11, 1272893353),
                u = v(u, d, f, h, s[l + 7], 16, -155497632),
                h = v(h, u, d, f, s[l + 10], 23, -1094730640),
                f = v(f, h, u, d, s[l + 13], 4, 681279174),
                d = v(d, f, h, u, s[l + 0], 11, -358537222),
                u = v(u, d, f, h, s[l + 3], 16, -722521979),
                h = v(h, u, d, f, s[l + 6], 23, 76029189),
                f = v(f, h, u, d, s[l + 9], 4, -640364487),
                d = v(d, f, h, u, s[l + 12], 11, -421815835),
                u = v(u, d, f, h, s[l + 15], 16, 530742520),
                h = v(h, u, d, f, s[l + 2], 23, -995338651),
                f = y(f, h, u, d, s[l + 0], 6, -198630844),
                d = y(d, f, h, u, s[l + 7], 10, 1126891415),
                u = y(u, d, f, h, s[l + 14], 15, -1416354905),
                h = y(h, u, d, f, s[l + 5], 21, -57434055),
                f = y(f, h, u, d, s[l + 12], 6, 1700485571),
                d = y(d, f, h, u, s[l + 3], 10, -1894986606),
                u = y(u, d, f, h, s[l + 10], 15, -1051523),
                h = y(h, u, d, f, s[l + 1], 21, -2054922799),
                f = y(f, h, u, d, s[l + 8], 6, 1873313359),
                d = y(d, f, h, u, s[l + 15], 10, -30611744),
                u = y(u, d, f, h, s[l + 6], 15, -1560198380),
                h = y(h, u, d, f, s[l + 13], 21, 1309151649),
                f = y(f, h, u, d, s[l + 4], 6, -145523070),
                d = y(d, f, h, u, s[l + 11], 10, -1120210379),
                u = y(u, d, f, h, s[l + 2], 15, 718787259),
                h = y(h, u, d, f, s[l + 9], 21, -343485551),
                f = f + m >>> 0,
                h = h + g >>> 0,
                u = u + w >>> 0,
                d = d + _ >>> 0
            }
            return t.endian([f, h, u, d])
        };
        o._ff = function(e, t, n, i, r, a, o) {
            var s = e + (t & n | ~t & i) + (r >>> 0) + o;
            return (s << a | s >>> 32 - a) + t
        }
        ,
        o._gg = function(e, t, n, i, r, a, o) {
            var s = e + (t & i | n & ~i) + (r >>> 0) + o;
            return (s << a | s >>> 32 - a) + t
        }
        ,
        o._hh = function(e, t, n, i, r, a, o) {
            var s = e + (t ^ n ^ i) + (r >>> 0) + o;
            return (s << a | s >>> 32 - a) + t
        }
        ,
        o._ii = function(e, t, n, i, r, a, o) {
            var s = e + (n ^ (t | ~i)) + (r >>> 0) + o;
            return (s << a | s >>> 32 - a) + t
        }
        ,
        o._blocksize = 16,
        o._digestsize = 16,
        e.exports = function(e, n) {
            if (void 0 === e || null === e)
                throw new Error("Illegal argument " + e);
            var i = t.wordsToBytes(o(e, n));
            return n && n.asBytes ? i : n && n.asString ? a.bytesToString(i) : t.bytesToHex(i)
        }
    }()
}
, function(e, t) {
    var n = {
        utf8: {
            stringToBytes: function(e) {
                return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
            },
            bytesToString: function(e) {
                return decodeURIComponent(escape(n.bin.bytesToString(e)))
            }
        },
        bin: {
            stringToBytes: function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    t.push(255 & e.charCodeAt(n));
                return t
            },
            bytesToString: function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    t.push(String.fromCharCode(e[n]));
                return t.join("")
            }
        }
    };
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        function i(e) {
            r.call(this),
            this._block = new t(e),
            this._blockSize = e,
            this._blockOffset = 0,
            this._length = [0, 0, 0, 0],
            this._finalized = !1
        }
        var r = n(104).Transform;
        n(2)(i, r),
        i.prototype._transform = function(e, n, i) {
            var r = null;
            try {
                "buffer" !== n && (e = new t(e,n)),
                this.update(e)
            } catch (e) {
                r = e
            }
            i(r)
        }
        ,
        i.prototype._flush = function(e) {
            var t = null;
            try {
                this.push(this._digest())
            } catch (e) {
                t = e
            }
            e(t)
        }
        ,
        i.prototype.update = function(e, n) {
            if (!t.isBuffer(e) && "string" != typeof e)
                throw new TypeError("Data must be a string or a buffer");
            if (this._finalized)
                throw new Error("Digest already called");
            t.isBuffer(e) || (e = new t(e,n || "binary"));
            for (var i = this._block, r = 0; this._blockOffset + e.length - r >= this._blockSize; ) {
                for (var a = this._blockOffset; a < this._blockSize; )
                    i[a++] = e[r++];
                this._update(),
                this._blockOffset = 0
            }
            for (; r < e.length; )
                i[this._blockOffset++] = e[r++];
            for (var o = 0, s = 8 * e.length; s > 0; ++o)
                this._length[o] += s,
                (s = this._length[o] / 4294967296 | 0) > 0 && (this._length[o] -= 4294967296 * s);
            return this
        }
        ,
        i.prototype._update = function(e) {
            throw new Error("_update is not implemented")
        }
        ,
        i.prototype.digest = function(e) {
            if (this._finalized)
                throw new Error("Digest already called");
            this._finalized = !0;
            var t = this._digest();
            return void 0 !== e && (t = t.toString(e)),
            t
        }
        ,
        i.prototype._digest = function() {
            throw new Error("_digest is not implemented")
        }
        ,
        e.exports = i
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    function i() {
        this.init(),
        this._w = p,
        u.call(this, 64, 56)
    }
    function r(e, t, n) {
        return n ^ e & (t ^ n)
    }
    function a(e, t, n) {
        return e & t | n & (e | t)
    }
    function o(e) {
        return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)
    }
    function s(e) {
        return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)
    }
    function c(e) {
        return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3
    }
    function f(e) {
        return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10
    }
    var h = n(2)
      , u = n(41)
      , d = n(3).Buffer
      , l = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
      , p = new Array(64);
    h(i, u),
    i.prototype.init = function() {
        return this._a = 1779033703,
        this._b = 3144134277,
        this._c = 1013904242,
        this._d = 2773480762,
        this._e = 1359893119,
        this._f = 2600822924,
        this._g = 528734635,
        this._h = 1541459225,
        this
    }
    ,
    i.prototype._update = function(e) {
        for (var t = this._w, n = 0 | this._a, i = 0 | this._b, h = 0 | this._c, u = 0 | this._d, d = 0 | this._e, p = 0 | this._f, b = 0 | this._g, v = 0 | this._h, y = 0; y < 16; ++y)
            t[y] = e.readInt32BE(4 * y);
        for (; y < 64; ++y)
            t[y] = f(t[y - 2]) + t[y - 7] + c(t[y - 15]) + t[y - 16] | 0;
        for (var m = 0; m < 64; ++m) {
            var g = v + s(d) + r(d, p, b) + l[m] + t[m] | 0
              , w = o(n) + a(n, i, h) | 0;
            v = b,
            b = p,
            p = d,
            d = u + g | 0,
            u = h,
            h = i,
            i = n,
            n = g + w | 0
        }
        this._a = n + this._a | 0,
        this._b = i + this._b | 0,
        this._c = h + this._c | 0,
        this._d = u + this._d | 0,
        this._e = d + this._e | 0,
        this._f = p + this._f | 0,
        this._g = b + this._g | 0,
        this._h = v + this._h | 0
    }
    ,
    i.prototype._hash = function() {
        var e = d.allocUnsafe(32);
        return e.writeInt32BE(this._a, 0),
        e.writeInt32BE(this._b, 4),
        e.writeInt32BE(this._c, 8),
        e.writeInt32BE(this._d, 12),
        e.writeInt32BE(this._e, 16),
        e.writeInt32BE(this._f, 20),
        e.writeInt32BE(this._g, 24),
        e.writeInt32BE(this._h, 28),
        e
    }
    ,
    e.exports = i
}
, function(e, t, n) {
    function i() {
        this.init(),
        this._w = y,
        p.call(this, 128, 112)
    }
    function r(e, t, n) {
        return n ^ e & (t ^ n)
    }
    function a(e, t, n) {
        return e & t | n & (e | t)
    }
    function o(e, t) {
        return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
    }
    function s(e, t) {
        return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
    }
    function c(e, t) {
        return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7
    }
    function f(e, t) {
        return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25)
    }
    function h(e, t) {
        return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6
    }
    function u(e, t) {
        return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26)
    }
    function d(e, t) {
        return e >>> 0 < t >>> 0 ? 1 : 0
    }
    var l = n(2)
      , p = n(41)
      , b = n(3).Buffer
      , v = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
      , y = new Array(160);
    l(i, p),
    i.prototype.init = function() {
        return this._ah = 1779033703,
        this._bh = 3144134277,
        this._ch = 1013904242,
        this._dh = 2773480762,
        this._eh = 1359893119,
        this._fh = 2600822924,
        this._gh = 528734635,
        this._hh = 1541459225,
        this._al = 4089235720,
        this._bl = 2227873595,
        this._cl = 4271175723,
        this._dl = 1595750129,
        this._el = 2917565137,
        this._fl = 725511199,
        this._gl = 4215389547,
        this._hl = 327033209,
        this
    }
    ,
    i.prototype._update = function(e) {
        for (var t = this._w, n = 0 | this._ah, i = 0 | this._bh, l = 0 | this._ch, p = 0 | this._dh, b = 0 | this._eh, y = 0 | this._fh, m = 0 | this._gh, g = 0 | this._hh, w = 0 | this._al, _ = 0 | this._bl, A = 0 | this._cl, M = 0 | this._dl, E = 0 | this._el, S = 0 | this._fl, x = 0 | this._gl, k = 0 | this._hl, B = 0; B < 32; B += 2)
            t[B] = e.readInt32BE(4 * B),
            t[B + 1] = e.readInt32BE(4 * B + 4);
        for (; B < 160; B += 2) {
            var O = t[B - 30]
              , P = t[B - 30 + 1]
              , C = c(O, P)
              , T = f(P, O);
            O = t[B - 4],
            P = t[B - 4 + 1];
            var I = h(O, P)
              , R = u(P, O)
              , L = t[B - 14]
              , N = t[B - 14 + 1]
              , j = t[B - 32]
              , Y = t[B - 32 + 1]
              , D = T + N | 0
              , z = C + L + d(D, T) | 0;
            D = D + R | 0,
            z = z + I + d(D, R) | 0,
            D = D + Y | 0,
            z = z + j + d(D, Y) | 0,
            t[B] = z,
            t[B + 1] = D
        }
        for (var X = 0; X < 160; X += 2) {
            z = t[X],
            D = t[X + 1];
            var U = a(n, i, l)
              , F = a(w, _, A)
              , Z = o(n, w)
              , q = o(w, n)
              , V = s(b, E)
              , H = s(E, b)
              , K = v[X]
              , W = v[X + 1]
              , G = r(b, y, m)
              , $ = r(E, S, x)
              , J = k + H | 0
              , Q = g + V + d(J, k) | 0;
            J = J + $ | 0,
            Q = Q + G + d(J, $) | 0,
            J = J + W | 0,
            Q = Q + K + d(J, W) | 0,
            J = J + D | 0,
            Q = Q + z + d(J, D) | 0;
            var ee = q + F | 0
              , te = Z + U + d(ee, q) | 0;
            g = m,
            k = x,
            m = y,
            x = S,
            y = b,
            S = E,
            E = M + J | 0,
            b = p + Q + d(E, M) | 0,
            p = l,
            M = A,
            l = i,
            A = _,
            i = n,
            _ = w,
            w = J + ee | 0,
            n = Q + te + d(w, J) | 0
        }
        this._al = this._al + w | 0,
        this._bl = this._bl + _ | 0,
        this._cl = this._cl + A | 0,
        this._dl = this._dl + M | 0,
        this._el = this._el + E | 0,
        this._fl = this._fl + S | 0,
        this._gl = this._gl + x | 0,
        this._hl = this._hl + k | 0,
        this._ah = this._ah + n + d(this._al, w) | 0,
        this._bh = this._bh + i + d(this._bl, _) | 0,
        this._ch = this._ch + l + d(this._cl, A) | 0,
        this._dh = this._dh + p + d(this._dl, M) | 0,
        this._eh = this._eh + b + d(this._el, E) | 0,
        this._fh = this._fh + y + d(this._fl, S) | 0,
        this._gh = this._gh + m + d(this._gl, x) | 0,
        this._hh = this._hh + g + d(this._hl, k) | 0
    }
    ,
    i.prototype._hash = function() {
        function e(e, n, i) {
            t.writeInt32BE(e, i),
            t.writeInt32BE(n, i + 4)
        }
        var t = b.allocUnsafe(64);
        return e(this._ah, this._al, 0),
        e(this._bh, this._bl, 8),
        e(this._ch, this._cl, 16),
        e(this._dh, this._dl, 24),
        e(this._eh, this._el, 32),
        e(this._fh, this._fl, 40),
        e(this._gh, this._gl, 48),
        e(this._hh, this._hl, 56),
        t
    }
    ,
    e.exports = i
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        o.call(this, "digest"),
        "string" == typeof t && (t = s.from(t));
        var n = "sha512" === e || "sha384" === e ? 128 : 64;
        if (this._alg = e,
        this._key = t,
        t.length > n) {
            t = ("rmd160" === e ? new f : h(e)).update(t).digest()
        } else
            t.length < n && (t = s.concat([t, u], n));
        for (var i = this._ipad = s.allocUnsafe(n), r = this._opad = s.allocUnsafe(n), a = 0; a < n; a++)
            i[a] = 54 ^ t[a],
            r[a] = 92 ^ t[a];
        this._hash = "rmd160" === e ? new f : h(e),
        this._hash.update(i)
    }
    var r = n(2)
      , a = n(536)
      , o = n(30)
      , s = n(3).Buffer
      , c = n(102)
      , f = n(103)
      , h = n(105)
      , u = s.alloc(128);
    r(i, o),
    i.prototype._update = function(e) {
        this._hash.update(e)
    }
    ,
    i.prototype._final = function() {
        var e = this._hash.digest();
        return ("rmd160" === this._alg ? new f : h(this._alg)).update(this._opad).update(e).digest()
    }
    ,
    e.exports = function(e, t) {
        return e = e.toLowerCase(),
        "rmd160" === e || "ripemd160" === e ? new i("rmd160",t) : "md5" === e ? new a(c,t) : new i(e,t)
    }
}
, function(e, t) {
    e.exports = {
        sha224WithRSAEncryption: {
            sign: "rsa",
            hash: "sha224",
            id: "302d300d06096086480165030402040500041c"
        },
        "RSA-SHA224": {
            sign: "ecdsa/rsa",
            hash: "sha224",
            id: "302d300d06096086480165030402040500041c"
        },
        sha256WithRSAEncryption: {
            sign: "rsa",
            hash: "sha256",
            id: "3031300d060960864801650304020105000420"
        },
        "RSA-SHA256": {
            sign: "ecdsa/rsa",
            hash: "sha256",
            id: "3031300d060960864801650304020105000420"
        },
        sha384WithRSAEncryption: {
            sign: "rsa",
            hash: "sha384",
            id: "3041300d060960864801650304020205000430"
        },
        "RSA-SHA384": {
            sign: "ecdsa/rsa",
            hash: "sha384",
            id: "3041300d060960864801650304020205000430"
        },
        sha512WithRSAEncryption: {
            sign: "rsa",
            hash: "sha512",
            id: "3051300d060960864801650304020305000440"
        },
        "RSA-SHA512": {
            sign: "ecdsa/rsa",
            hash: "sha512",
            id: "3051300d060960864801650304020305000440"
        },
        "RSA-SHA1": {
            sign: "rsa",
            hash: "sha1",
            id: "3021300906052b0e03021a05000414"
        },
        "ecdsa-with-SHA1": {
            sign: "ecdsa",
            hash: "sha1",
            id: ""
        },
        sha256: {
            sign: "ecdsa",
            hash: "sha256",
            id: ""
        },
        sha224: {
            sign: "ecdsa",
            hash: "sha224",
            id: ""
        },
        sha384: {
            sign: "ecdsa",
            hash: "sha384",
            id: ""
        },
        sha512: {
            sign: "ecdsa",
            hash: "sha512",
            id: ""
        },
        "DSA-SHA": {
            sign: "dsa",
            hash: "sha1",
            id: ""
        },
        "DSA-SHA1": {
            sign: "dsa",
            hash: "sha1",
            id: ""
        },
        DSA: {
            sign: "dsa",
            hash: "sha1",
            id: ""
        },
        "DSA-WITH-SHA224": {
            sign: "dsa",
            hash: "sha224",
            id: ""
        },
        "DSA-SHA224": {
            sign: "dsa",
            hash: "sha224",
            id: ""
        },
        "DSA-WITH-SHA256": {
            sign: "dsa",
            hash: "sha256",
            id: ""
        },
        "DSA-SHA256": {
            sign: "dsa",
            hash: "sha256",
            id: ""
        },
        "DSA-WITH-SHA384": {
            sign: "dsa",
            hash: "sha384",
            id: ""
        },
        "DSA-SHA384": {
            sign: "dsa",
            hash: "sha384",
            id: ""
        },
        "DSA-WITH-SHA512": {
            sign: "dsa",
            hash: "sha512",
            id: ""
        },
        "DSA-SHA512": {
            sign: "dsa",
            hash: "sha512",
            id: ""
        },
        "DSA-RIPEMD160": {
            sign: "dsa",
            hash: "rmd160",
            id: ""
        },
        ripemd160WithRSA: {
            sign: "rsa",
            hash: "rmd160",
            id: "3021300906052b2403020105000414"
        },
        "RSA-RIPEMD160": {
            sign: "rsa",
            hash: "rmd160",
            id: "3021300906052b2403020105000414"
        },
        md5WithRSAEncryption: {
            sign: "rsa",
            hash: "md5",
            id: "3020300c06082a864886f70d020505000410"
        },
        "RSA-MD5": {
            sign: "rsa",
            hash: "md5",
            id: "3020300c06082a864886f70d020505000410"
        }
    }
}
, function(e, t, n) {
    t.pbkdf2 = n(538),
    t.pbkdf2Sync = n(167)
}
, function(e, t) {
    var n = Math.pow(2, 30) - 1;
    e.exports = function(e, t) {
        if ("number" != typeof e)
            throw new TypeError("Iterations not a number");
        if (e < 0)
            throw new TypeError("Bad iterations");
        if ("number" != typeof t)
            throw new TypeError("Key length not a number");
        if (t < 0 || t > n || t !== t)
            throw new TypeError("Bad key length")
    }
}
, function(e, t, n) {
    (function(t) {
        var n;
        if (t.browser)
            n = "utf-8";
        else {
            n = parseInt(t.version.split(".")[0].slice(1), 10) >= 6 ? "utf-8" : "binary"
        }
        e.exports = n
    }
    ).call(t, n(8))
}
, function(e, t, n) {
    function i(e, t, n) {
        var i = r(e)
          , a = "sha512" === e || "sha384" === e ? 128 : 64;
        t.length > a ? t = i(t) : t.length < a && (t = u.concat([t, d], a));
        for (var o = u.allocUnsafe(a + l[e]), s = u.allocUnsafe(a + l[e]), c = 0; c < a; c++)
            o[c] = 54 ^ t[c],
            s[c] = 92 ^ t[c];
        var f = u.allocUnsafe(a + n + 4);
        o.copy(f, 0, 0, a),
        this.ipad1 = f,
        this.ipad2 = o,
        this.opad = s,
        this.alg = e,
        this.blocksize = a,
        this.hash = i,
        this.size = l[e]
    }
    function r(e) {
        function t(t) {
            return c(e).update(t).digest()
        }
        return "rmd160" === e || "ripemd160" === e ? s : "md5" === e ? o : t
    }
    function a(e, t, n, r, a) {
        u.isBuffer(e) || (e = u.from(e, h)),
        u.isBuffer(t) || (t = u.from(t, h)),
        f(n, r),
        a = a || "sha1";
        var o = new i(a,e,t.length)
          , s = u.allocUnsafe(r)
          , c = u.allocUnsafe(t.length + 4);
        t.copy(c, 0, 0, t.length);
        for (var d = 0, p = l[a], b = Math.ceil(r / p), v = 1; v <= b; v++) {
            c.writeUInt32BE(v, t.length);
            for (var y = o.run(c, o.ipad1), m = y, g = 1; g < n; g++) {
                m = o.run(m, o.ipad2);
                for (var w = 0; w < p; w++)
                    y[w] ^= m[w]
            }
            y.copy(s, d),
            d += p
        }
        return s
    }
    var o = n(102)
      , s = n(103)
      , c = n(105)
      , f = n(165)
      , h = n(166)
      , u = n(3).Buffer
      , d = u.alloc(128)
      , l = {
        md5: 16,
        sha1: 20,
        sha224: 28,
        sha256: 32,
        sha384: 48,
        sha512: 64,
        rmd160: 20,
        ripemd160: 20
    };
    i.prototype.run = function(e, t) {
        return e.copy(t, this.blocksize),
        this.hash(t).copy(this.opad, this.blocksize),
        this.hash(this.opad)
    }
    ,
    e.exports = a
}
, function(e, t, n) {
    function i(e) {
        var t = e._cipher.encryptBlockRaw(e._prev);
        return o(e._prev),
        t
    }
    var r = n(55)
      , a = n(3).Buffer
      , o = n(169);
    t.encrypt = function(e, t) {
        var n = Math.ceil(t.length / 16)
          , o = e._cache.length;
        e._cache = a.concat([e._cache, a.allocUnsafe(16 * n)]);
        for (var s = 0; s < n; s++) {
            var c = i(e)
              , f = o + 16 * s;
            e._cache.writeUInt32BE(c[0], f + 0),
            e._cache.writeUInt32BE(c[1], f + 4),
            e._cache.writeUInt32BE(c[2], f + 8),
            e._cache.writeUInt32BE(c[3], f + 12)
        }
        var h = e._cache.slice(0, t.length);
        return e._cache = e._cache.slice(t.length),
        r(t, h)
    }
}
, function(e, t) {
    function n(e) {
        for (var t, n = e.length; n--; ) {
            if (255 !== (t = e.readUInt8(n))) {
                t++,
                e.writeUInt8(t, n);
                break
            }
            e.writeUInt8(0, n)
        }
    }
    e.exports = n
}
, function(e, t) {
    e.exports = {
        "aes-128-ecb": {
            cipher: "AES",
            key: 128,
            iv: 0,
            mode: "ECB",
            type: "block"
        },
        "aes-192-ecb": {
            cipher: "AES",
            key: 192,
            iv: 0,
            mode: "ECB",
            type: "block"
        },
        "aes-256-ecb": {
            cipher: "AES",
            key: 256,
            iv: 0,
            mode: "ECB",
            type: "block"
        },
        "aes-128-cbc": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        "aes-192-cbc": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        "aes-256-cbc": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        aes128: {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        aes192: {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        aes256: {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        "aes-128-cfb": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CFB",
            type: "stream"
        },
        "aes-192-cfb": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CFB",
            type: "stream"
        },
        "aes-256-cfb": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CFB",
            type: "stream"
        },
        "aes-128-cfb8": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CFB8",
            type: "stream"
        },
        "aes-192-cfb8": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CFB8",
            type: "stream"
        },
        "aes-256-cfb8": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CFB8",
            type: "stream"
        },
        "aes-128-cfb1": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CFB1",
            type: "stream"
        },
        "aes-192-cfb1": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CFB1",
            type: "stream"
        },
        "aes-256-cfb1": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CFB1",
            type: "stream"
        },
        "aes-128-ofb": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "OFB",
            type: "stream"
        },
        "aes-192-ofb": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "OFB",
            type: "stream"
        },
        "aes-256-ofb": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "OFB",
            type: "stream"
        },
        "aes-128-ctr": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CTR",
            type: "stream"
        },
        "aes-192-ctr": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CTR",
            type: "stream"
        },
        "aes-256-ctr": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CTR",
            type: "stream"
        },
        "aes-128-gcm": {
            cipher: "AES",
            key: 128,
            iv: 12,
            mode: "GCM",
            type: "auth"
        },
        "aes-192-gcm": {
            cipher: "AES",
            key: 192,
            iv: 12,
            mode: "GCM",
            type: "auth"
        },
        "aes-256-gcm": {
            cipher: "AES",
            key: 256,
            iv: 12,
            mode: "GCM",
            type: "auth"
        }
    }
}
, function(e, t, n) {
    function i(e, t) {
        var n = 0;
        e.length !== t.length && n++;
        for (var i = Math.min(e.length, t.length), r = 0; r < i; ++r)
            n += e[r] ^ t[r];
        return n
    }
    function r(e, t, n) {
        if (12 === t.length)
            return e._finID = s.concat([t, s.from([0, 0, 0, 1])]),
            s.concat([t, s.from([0, 0, 0, 2])]);
        var i = new h(n)
          , r = t.length
          , a = r % 16;
        i.update(t),
        a && (a = 16 - a,
        i.update(s.alloc(a, 0))),
        i.update(s.alloc(8, 0));
        var o = 8 * r
          , c = s.alloc(8);
        c.writeUIntBE(o, 0, 8),
        i.update(c),
        e._finID = i.state;
        var f = s.from(e._finID);
        return d(f),
        f
    }
    function a(e, t, n, i) {
        c.call(this);
        var a = s.alloc(4, 0);
        this._cipher = new o.AES(t);
        var f = this._cipher.encryptBlock(a);
        this._ghash = new h(f),
        n = r(this, n, f),
        this._prev = s.from(n),
        this._cache = s.allocUnsafe(0),
        this._secCache = s.allocUnsafe(0),
        this._decrypt = i,
        this._alen = 0,
        this._len = 0,
        this._mode = e,
        this._authTag = null,
        this._called = !1
    }
    var o = n(72)
      , s = n(3).Buffer
      , c = n(30)
      , f = n(2)
      , h = n(548)
      , u = n(55)
      , d = n(169);
    f(a, c),
    a.prototype._update = function(e) {
        if (!this._called && this._alen) {
            var t = 16 - this._alen % 16;
            t < 16 && (t = s.alloc(t, 0),
            this._ghash.update(t))
        }
        this._called = !0;
        var n = this._mode.encrypt(this, e);
        return this._decrypt ? this._ghash.update(e) : this._ghash.update(n),
        this._len += e.length,
        n
    }
    ,
    a.prototype._final = function() {
        if (this._decrypt && !this._authTag)
            throw new Error("Unsupported state or unable to authenticate data");
        var e = u(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
        if (this._decrypt && i(e, this._authTag))
            throw new Error("Unsupported state or unable to authenticate data");
        this._authTag = e,
        this._cipher.scrub()
    }
    ,
    a.prototype.getAuthTag = function() {
        if (this._decrypt || !s.isBuffer(this._authTag))
            throw new Error("Attempting to get auth tag in unsupported state");
        return this._authTag
    }
    ,
    a.prototype.setAuthTag = function(e) {
        if (!this._decrypt)
            throw new Error("Attempting to set auth tag in unsupported state");
        this._authTag = e
    }
    ,
    a.prototype.setAAD = function(e) {
        if (this._called)
            throw new Error("Attempting to set AAD in unsupported state");
        this._ghash.update(e),
        this._alen += e.length
    }
    ,
    e.exports = a
}
, function(e, t, n) {
    function i(e, t, n, i) {
        o.call(this),
        this._cipher = new r.AES(t),
        this._prev = a.from(n),
        this._cache = a.allocUnsafe(0),
        this._secCache = a.allocUnsafe(0),
        this._decrypt = i,
        this._mode = e
    }
    var r = n(72)
      , a = n(3).Buffer
      , o = n(30);
    n(2)(i, o),
    i.prototype._update = function(e) {
        return this._mode.encrypt(this, e, this._decrypt)
    }
    ,
    i.prototype._final = function() {
        this._cipher.scrub()
    }
    ,
    e.exports = i
}
, function(e, t, n) {
    function i() {
        if (null !== g)
            return g;
        var e = [];
        e[0] = 2;
        for (var t = 1, n = 3; n < 1048576; n += 2) {
            for (var i = Math.ceil(Math.sqrt(n)), r = 0; r < t && e[r] <= i && n % e[r] != 0; r++)
                ;
            t !== r && e[r] <= i || (e[t++] = n)
        }
        return g = e,
        e
    }
    function r(e) {
        for (var t = i(), n = 0; n < t.length; n++)
            if (0 === e.modn(t[n]))
                return 0 === e.cmpn(t[n]);
        return !0
    }
    function a(e) {
        var t = c.mont(e);
        return 0 === l.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1)
    }
    function o(e, t) {
        if (e < 16)
            return new c(2 === t || 5 === t ? [140, 123] : [140, 39]);
        t = new c(t);
        for (var n, i; ; ) {
            for (n = new c(s(Math.ceil(e / 8))); n.bitLength() > e; )
                n.ishrn(1);
            if (n.isEven() && n.iadd(d),
            n.testn(1) || n.iadd(l),
            t.cmp(l)) {
                if (!t.cmp(p))
                    for (; n.mod(b).cmp(v); )
                        n.iadd(m)
            } else
                for (; n.mod(f).cmp(y); )
                    n.iadd(m);
            if (i = n.shrn(1),
            r(i) && r(n) && a(i) && a(n) && u.test(i) && u.test(n))
                return n
        }
    }
    var s = n(40);
    e.exports = o,
    o.simpleSieve = r,
    o.fermatTest = a;
    var c = n(7)
      , f = new c(24)
      , h = n(174)
      , u = new h
      , d = new c(1)
      , l = new c(2)
      , p = new c(5)
      , b = (new c(16),
    new c(8),
    new c(10))
      , v = new c(3)
      , y = (new c(7),
    new c(11))
      , m = new c(4)
      , g = (new c(12),
    null)
}
, function(e, t, n) {
    function i(e) {
        this.rand = e || new a.Rand
    }
    var r = n(7)
      , a = n(175);
    e.exports = i,
    i.create = function(e) {
        return new i(e)
    }
    ,
    i.prototype._randbelow = function(e) {
        var t = e.bitLength()
          , n = Math.ceil(t / 8);
        do {
            var i = new r(this.rand.generate(n))
        } while (i.cmp(e) >= 0);return i
    }
    ,
    i.prototype._randrange = function(e, t) {
        var n = t.sub(e);
        return e.add(this._randbelow(n))
    }
    ,
    i.prototype.test = function(e, t, n) {
        var i = e.bitLength()
          , a = r.mont(e)
          , o = new r(1).toRed(a);
        t || (t = Math.max(1, i / 48 | 0));
        for (var s = e.subn(1), c = 0; !s.testn(c); c++)
            ;
        for (var f = e.shrn(c), h = s.toRed(a); t > 0; t--) {
            var u = this._randrange(new r(2), s);
            n && n(u);
            var d = u.toRed(a).redPow(f);
            if (0 !== d.cmp(o) && 0 !== d.cmp(h)) {
                for (var l = 1; l < c; l++) {
                    if (d = d.redSqr(),
                    0 === d.cmp(o))
                        return !1;
                    if (0 === d.cmp(h))
                        break
                }
                if (l === c)
                    return !1
            }
        }
        return !0
    }
    ,
    i.prototype.getDivisor = function(e, t) {
        var n = e.bitLength()
          , i = r.mont(e)
          , a = new r(1).toRed(i);
        t || (t = Math.max(1, n / 48 | 0));
        for (var o = e.subn(1), s = 0; !o.testn(s); s++)
            ;
        for (var c = e.shrn(s), f = o.toRed(i); t > 0; t--) {
            var h = this._randrange(new r(2), o)
              , u = e.gcd(h);
            if (0 !== u.cmpn(1))
                return u;
            var d = h.toRed(i).redPow(c);
            if (0 !== d.cmp(a) && 0 !== d.cmp(f)) {
                for (var l = 1; l < s; l++) {
                    if (d = d.redSqr(),
                    0 === d.cmp(a))
                        return d.fromRed().subn(1).gcd(e);
                    if (0 === d.cmp(f))
                        break
                }
                if (l === s)
                    return d = d.redSqr(),
                    d.fromRed().subn(1).gcd(e)
            }
        }
        return !1
    }
}
, function(e, t, n) {
    function i(e) {
        this.rand = e
    }
    var r;
    if (e.exports = function(e) {
        return r || (r = new i(null)),
        r.generate(e)
    }
    ,
    e.exports.Rand = i,
    i.prototype.generate = function(e) {
        return this._rand(e)
    }
    ,
    i.prototype._rand = function(e) {
        if (this.rand.getBytes)
            return this.rand.getBytes(e);
        for (var t = new Uint8Array(e), n = 0; n < t.length; n++)
            t[n] = this.rand.getByte();
        return t
    }
    ,
    "object" == typeof self)
        self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function(e) {
            var t = new Uint8Array(e);
            return self.crypto.getRandomValues(t),
            t
        }
        : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function(e) {
            var t = new Uint8Array(e);
            return self.msCrypto.getRandomValues(t),
            t
        }
        : "object" == typeof window && (i.prototype._rand = function() {
            throw new Error("Not implemented yet")
        }
        );
    else
        try {
            var a = n(559);
            if ("function" != typeof a.randomBytes)
                throw new Error("Not supported");
            i.prototype._rand = function(e) {
                return a.randomBytes(e)
            }
        } catch (e) {}
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (Array.isArray(e))
            return e.slice();
        if (!e)
            return [];
        var n = [];
        if ("string" != typeof e) {
            for (var i = 0; i < e.length; i++)
                n[i] = 0 | e[i];
            return n
        }
        if ("hex" === t) {
            e = e.replace(/[^a-z0-9]+/gi, ""),
            e.length % 2 != 0 && (e = "0" + e);
            for (var i = 0; i < e.length; i += 2)
                n.push(parseInt(e[i] + e[i + 1], 16))
        } else
            for (var i = 0; i < e.length; i++) {
                var r = e.charCodeAt(i)
                  , a = r >> 8
                  , o = 255 & r;
                a ? n.push(a, o) : n.push(o)
            }
        return n
    }
    function r(e) {
        return 1 === e.length ? "0" + e : e
    }
    function a(e) {
        for (var t = "", n = 0; n < e.length; n++)
            t += r(e[n].toString(16));
        return t
    }
    var o = t;
    o.toArray = i,
    o.zero2 = r,
    o.toHex = a,
    o.encode = function(e, t) {
        return "hex" === t ? a(e) : e
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n, i) {
        return 0 === e ? r(t, n, i) : 1 === e || 3 === e ? o(t, n, i) : 2 === e ? a(t, n, i) : void 0
    }
    function r(e, t, n) {
        return e & t ^ ~e & n
    }
    function a(e, t, n) {
        return e & t ^ e & n ^ t & n
    }
    function o(e, t, n) {
        return e ^ t ^ n
    }
    function s(e) {
        return d(e, 2) ^ d(e, 13) ^ d(e, 22)
    }
    function c(e) {
        return d(e, 6) ^ d(e, 11) ^ d(e, 25)
    }
    function f(e) {
        return d(e, 7) ^ d(e, 18) ^ e >>> 3
    }
    function h(e) {
        return d(e, 17) ^ d(e, 19) ^ e >>> 10
    }
    var u = n(23)
      , d = u.rotr32;
    t.ft_1 = i,
    t.ch32 = r,
    t.maj32 = a,
    t.p32 = o,
    t.s0_256 = s,
    t.s1_256 = c,
    t.g0_256 = f,
    t.g1_256 = h
}
, function(e, t, n) {
    "use strict";
    function i() {
        if (!(this instanceof i))
            return new i;
        y.call(this),
        this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
        this.k = m,
        this.W = new Array(64)
    }
    var r = n(23)
      , a = n(56)
      , o = n(177)
      , s = n(20)
      , c = r.sum32
      , f = r.sum32_4
      , h = r.sum32_5
      , u = o.ch32
      , d = o.maj32
      , l = o.s0_256
      , p = o.s1_256
      , b = o.g0_256
      , v = o.g1_256
      , y = a.BlockHash
      , m = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    r.inherits(i, y),
    e.exports = i,
    i.blockSize = 512,
    i.outSize = 256,
    i.hmacStrength = 192,
    i.padLength = 64,
    i.prototype._update = function(e, t) {
        for (var n = this.W, i = 0; i < 16; i++)
            n[i] = e[t + i];
        for (; i < n.length; i++)
            n[i] = f(v(n[i - 2]), n[i - 7], b(n[i - 15]), n[i - 16]);
        var r = this.h[0]
          , a = this.h[1]
          , o = this.h[2]
          , y = this.h[3]
          , m = this.h[4]
          , g = this.h[5]
          , w = this.h[6]
          , _ = this.h[7];
        for (s(this.k.length === n.length),
        i = 0; i < n.length; i++) {
            var A = h(_, p(m), u(m, g, w), this.k[i], n[i])
              , M = c(l(r), d(r, a, o));
            _ = w,
            w = g,
            g = m,
            m = c(y, A),
            y = o,
            o = a,
            a = r,
            r = c(A, M)
        }
        this.h[0] = c(this.h[0], r),
        this.h[1] = c(this.h[1], a),
        this.h[2] = c(this.h[2], o),
        this.h[3] = c(this.h[3], y),
        this.h[4] = c(this.h[4], m),
        this.h[5] = c(this.h[5], g),
        this.h[6] = c(this.h[6], w),
        this.h[7] = c(this.h[7], _)
    }
    ,
    i.prototype._digest = function(e) {
        return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
    }
}
, function(e, t, n) {
    "use strict";
    function i() {
        if (!(this instanceof i))
            return new i;
        P.call(this),
        this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209],
        this.k = C,
        this.W = new Array(160)
    }
    function r(e, t, n, i, r) {
        var a = e & n ^ ~e & r;
        return a < 0 && (a += 4294967296),
        a
    }
    function a(e, t, n, i, r, a) {
        var o = t & i ^ ~t & a;
        return o < 0 && (o += 4294967296),
        o
    }
    function o(e, t, n, i, r) {
        var a = e & n ^ e & r ^ n & r;
        return a < 0 && (a += 4294967296),
        a
    }
    function s(e, t, n, i, r, a) {
        var o = t & i ^ t & a ^ i & a;
        return o < 0 && (o += 4294967296),
        o
    }
    function c(e, t) {
        var n = g(e, t, 28)
          , i = g(t, e, 2)
          , r = g(t, e, 7)
          , a = n ^ i ^ r;
        return a < 0 && (a += 4294967296),
        a
    }
    function f(e, t) {
        var n = w(e, t, 28)
          , i = w(t, e, 2)
          , r = w(t, e, 7)
          , a = n ^ i ^ r;
        return a < 0 && (a += 4294967296),
        a
    }
    function h(e, t) {
        var n = g(e, t, 14)
          , i = g(e, t, 18)
          , r = g(t, e, 9)
          , a = n ^ i ^ r;
        return a < 0 && (a += 4294967296),
        a
    }
    function u(e, t) {
        var n = w(e, t, 14)
          , i = w(e, t, 18)
          , r = w(t, e, 9)
          , a = n ^ i ^ r;
        return a < 0 && (a += 4294967296),
        a
    }
    function d(e, t) {
        var n = g(e, t, 1)
          , i = g(e, t, 8)
          , r = _(e, t, 7)
          , a = n ^ i ^ r;
        return a < 0 && (a += 4294967296),
        a
    }
    function l(e, t) {
        var n = w(e, t, 1)
          , i = w(e, t, 8)
          , r = A(e, t, 7)
          , a = n ^ i ^ r;
        return a < 0 && (a += 4294967296),
        a
    }
    function p(e, t) {
        var n = g(e, t, 19)
          , i = g(t, e, 29)
          , r = _(e, t, 6)
          , a = n ^ i ^ r;
        return a < 0 && (a += 4294967296),
        a
    }
    function b(e, t) {
        var n = w(e, t, 19)
          , i = w(t, e, 29)
          , r = A(e, t, 6)
          , a = n ^ i ^ r;
        return a < 0 && (a += 4294967296),
        a
    }
    var v = n(23)
      , y = n(56)
      , m = n(20)
      , g = v.rotr64_hi
      , w = v.rotr64_lo
      , _ = v.shr64_hi
      , A = v.shr64_lo
      , M = v.sum64
      , E = v.sum64_hi
      , S = v.sum64_lo
      , x = v.sum64_4_hi
      , k = v.sum64_4_lo
      , B = v.sum64_5_hi
      , O = v.sum64_5_lo
      , P = y.BlockHash
      , C = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
    v.inherits(i, P),
    e.exports = i,
    i.blockSize = 1024,
    i.outSize = 512,
    i.hmacStrength = 192,
    i.padLength = 128,
    i.prototype._prepareBlock = function(e, t) {
        for (var n = this.W, i = 0; i < 32; i++)
            n[i] = e[t + i];
        for (; i < n.length; i += 2) {
            var r = p(n[i - 4], n[i - 3])
              , a = b(n[i - 4], n[i - 3])
              , o = n[i - 14]
              , s = n[i - 13]
              , c = d(n[i - 30], n[i - 29])
              , f = l(n[i - 30], n[i - 29])
              , h = n[i - 32]
              , u = n[i - 31];
            n[i] = x(r, a, o, s, c, f, h, u),
            n[i + 1] = k(r, a, o, s, c, f, h, u)
        }
    }
    ,
    i.prototype._update = function(e, t) {
        this._prepareBlock(e, t);
        var n = this.W
          , i = this.h[0]
          , d = this.h[1]
          , l = this.h[2]
          , p = this.h[3]
          , b = this.h[4]
          , v = this.h[5]
          , y = this.h[6]
          , g = this.h[7]
          , w = this.h[8]
          , _ = this.h[9]
          , A = this.h[10]
          , x = this.h[11]
          , k = this.h[12]
          , P = this.h[13]
          , C = this.h[14]
          , T = this.h[15];
        m(this.k.length === n.length);
        for (var I = 0; I < n.length; I += 2) {
            var R = C
              , L = T
              , N = h(w, _)
              , j = u(w, _)
              , Y = r(w, _, A, x, k)
              , D = a(w, _, A, x, k, P)
              , z = this.k[I]
              , X = this.k[I + 1]
              , U = n[I]
              , F = n[I + 1]
              , Z = B(R, L, N, j, Y, D, z, X, U, F)
              , q = O(R, L, N, j, Y, D, z, X, U, F);
            R = c(i, d),
            L = f(i, d),
            N = o(i, d, l, p, b),
            j = s(i, d, l, p, b, v);
            var V = E(R, L, N, j)
              , H = S(R, L, N, j);
            C = k,
            T = P,
            k = A,
            P = x,
            A = w,
            x = _,
            w = E(y, g, Z, q),
            _ = S(g, g, Z, q),
            y = b,
            g = v,
            b = l,
            v = p,
            l = i,
            p = d,
            i = E(Z, q, V, H),
            d = S(Z, q, V, H)
        }
        M(this.h, 0, i, d),
        M(this.h, 2, l, p),
        M(this.h, 4, b, v),
        M(this.h, 6, y, g),
        M(this.h, 8, w, _),
        M(this.h, 10, A, x),
        M(this.h, 12, k, P),
        M(this.h, 14, C, T)
    }
    ,
    i.prototype._digest = function(e) {
        return "hex" === e ? v.toHex32(this.h, "big") : v.split32(this.h, "big")
    }
}
, function(e, t, n) {
    function i(e, t) {
        if (o.call(this, t),
        !s.isBuffer(e))
            return void this.error("Input not Buffer");
        this.base = e,
        this.offset = 0,
        this.length = e.length
    }
    function r(e, t) {
        if (Array.isArray(e))
            this.length = 0,
            this.value = e.map(function(e) {
                return e instanceof r || (e = new r(e,t)),
                this.length += e.length,
                e
            }, this);
        else if ("number" == typeof e) {
            if (!(0 <= e && e <= 255))
                return t.error("non-byte EncoderBuffer value");
            this.value = e,
            this.length = 1
        } else if ("string" == typeof e)
            this.value = e,
            this.length = s.byteLength(e);
        else {
            if (!s.isBuffer(e))
                return t.error("Unsupported type: " + typeof e);
            this.value = e,
            this.length = e.length
        }
    }
    var a = n(2)
      , o = n(58).Reporter
      , s = n(4).Buffer;
    a(i, o),
    t.DecoderBuffer = i,
    i.prototype.save = function() {
        return {
            offset: this.offset,
            reporter: o.prototype.save.call(this)
        }
    }
    ,
    i.prototype.restore = function(e) {
        var t = new i(this.base);
        return t.offset = e.offset,
        t.length = this.offset,
        this.offset = e.offset,
        o.prototype.restore.call(this, e.reporter),
        t
    }
    ,
    i.prototype.isEmpty = function() {
        return this.offset === this.length
    }
    ,
    i.prototype.readUInt8 = function(e) {
        return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun")
    }
    ,
    i.prototype.skip = function(e, t) {
        if (!(this.offset + e <= this.length))
            return this.error(t || "DecoderBuffer overrun");
        var n = new i(this.base);
        return n._reporterState = this._reporterState,
        n.offset = this.offset,
        n.length = this.offset + e,
        this.offset += e,
        n
    }
    ,
    i.prototype.raw = function(e) {
        return this.base.slice(e ? e.offset : this.offset, this.length)
    }
    ,
    t.EncoderBuffer = r,
    r.prototype.join = function(e, t) {
        return e || (e = new s(this.length)),
        t || (t = 0),
        0 === this.length ? e : (Array.isArray(this.value) ? this.value.forEach(function(n) {
            n.join(e, t),
            t += n.length
        }) : ("number" == typeof this.value ? e[t] = this.value : "string" == typeof this.value ? e.write(this.value, t) : s.isBuffer(this.value) && this.value.copy(e, t),
        t += this.length),
        e)
    }
}
, function(e, t, n) {
    var i = t;
    i._reverse = function(e) {
        var t = {};
        return Object.keys(e).forEach(function(n) {
            (0 | n) == n && (n |= 0);
            var i = e[n];
            t[i] = n
        }),
        t
    }
    ,
    i.der = n(591)
}
, function(e, t, n) {
    function i(e) {
        this.enc = "der",
        this.name = e.name,
        this.entity = e,
        this.tree = new r,
        this.tree._init(e.body)
    }
    function r(e) {
        f.Node.call(this, "der", e)
    }
    function a(e, t) {
        var n = e.readUInt8(t);
        if (e.isError(n))
            return n;
        var i = u.tagClass[n >> 6]
          , r = 0 == (32 & n);
        if (31 == (31 & n)) {
            var a = n;
            for (n = 0; 128 == (128 & a); ) {
                if (a = e.readUInt8(t),
                e.isError(a))
                    return a;
                n <<= 7,
                n |= 127 & a
            }
        } else
            n &= 31;
        return {
            cls: i,
            primitive: r,
            tag: n,
            tagStr: u.tag[n]
        }
    }
    function o(e, t, n) {
        var i = e.readUInt8(n);
        if (e.isError(i))
            return i;
        if (!t && 128 === i)
            return null;
        if (0 == (128 & i))
            return i;
        var r = 127 & i;
        if (r > 4)
            return e.error("length octect is too long");
        i = 0;
        for (var a = 0; a < r; a++) {
            i <<= 8;
            var o = e.readUInt8(n);
            if (e.isError(o))
                return o;
            i |= o
        }
        return i
    }
    var s = n(2)
      , c = n(57)
      , f = c.base
      , h = c.bignum
      , u = c.constants.der;
    e.exports = i,
    i.prototype.decode = function(e, t) {
        return e instanceof f.DecoderBuffer || (e = new f.DecoderBuffer(e,t)),
        this.tree._decode(e, t)
    }
    ,
    s(r, f.Node),
    r.prototype._peekTag = function(e, t, n) {
        if (e.isEmpty())
            return !1;
        var i = e.save()
          , r = a(e, 'Failed to peek tag: "' + t + '"');
        return e.isError(r) ? r : (e.restore(i),
        r.tag === t || r.tagStr === t || r.tagStr + "of" === t || n)
    }
    ,
    r.prototype._decodeTag = function(e, t, n) {
        var i = a(e, 'Failed to decode tag of "' + t + '"');
        if (e.isError(i))
            return i;
        var r = o(e, i.primitive, 'Failed to get length of "' + t + '"');
        if (e.isError(r))
            return r;
        if (!n && i.tag !== t && i.tagStr !== t && i.tagStr + "of" !== t)
            return e.error('Failed to match tag: "' + t + '"');
        if (i.primitive || null !== r)
            return e.skip(r, 'Failed to match body of: "' + t + '"');
        var s = e.save()
          , c = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
        return e.isError(c) ? c : (r = e.offset - s.offset,
        e.restore(s),
        e.skip(r, 'Failed to match body of: "' + t + '"'))
    }
    ,
    r.prototype._skipUntilEnd = function(e, t) {
        for (; ; ) {
            var n = a(e, t);
            if (e.isError(n))
                return n;
            var i = o(e, n.primitive, t);
            if (e.isError(i))
                return i;
            var r;
            if (r = n.primitive || null !== i ? e.skip(i) : this._skipUntilEnd(e, t),
            e.isError(r))
                return r;
            if ("end" === n.tagStr)
                break
        }
    }
    ,
    r.prototype._decodeList = function(e, t, n, i) {
        for (var r = []; !e.isEmpty(); ) {
            var a = this._peekTag(e, "end");
            if (e.isError(a))
                return a;
            var o = n.decode(e, "der", i);
            if (e.isError(o) && a)
                break;
            r.push(o)
        }
        return r
    }
    ,
    r.prototype._decodeStr = function(e, t) {
        if ("bitstr" === t) {
            var n = e.readUInt8();
            return e.isError(n) ? n : {
                unused: n,
                data: e.raw()
            }
        }
        if ("bmpstr" === t) {
            var i = e.raw();
            if (i.length % 2 == 1)
                return e.error("Decoding of string type: bmpstr length mismatch");
            for (var r = "", a = 0; a < i.length / 2; a++)
                r += String.fromCharCode(i.readUInt16BE(2 * a));
            return r
        }
        if ("numstr" === t) {
            var o = e.raw().toString("ascii");
            return this._isNumstr(o) ? o : e.error("Decoding of string type: numstr unsupported characters")
        }
        if ("octstr" === t)
            return e.raw();
        if ("objDesc" === t)
            return e.raw();
        if ("printstr" === t) {
            var s = e.raw().toString("ascii");
            return this._isPrintstr(s) ? s : e.error("Decoding of string type: printstr unsupported characters")
        }
        return /str$/.test(t) ? e.raw().toString() : e.error("Decoding of string type: " + t + " unsupported")
    }
    ,
    r.prototype._decodeObjid = function(e, t, n) {
        for (var i, r = [], a = 0; !e.isEmpty(); ) {
            var o = e.readUInt8();
            a <<= 7,
            a |= 127 & o,
            0 == (128 & o) && (r.push(a),
            a = 0)
        }
        128 & o && r.push(a);
        var s = r[0] / 40 | 0
          , c = r[0] % 40;
        if (i = n ? r : [s, c].concat(r.slice(1)),
        t) {
            var f = t[i.join(" ")];
            void 0 === f && (f = t[i.join(".")]),
            void 0 !== f && (i = f)
        }
        return i
    }
    ,
    r.prototype._decodeTime = function(e, t) {
        var n = e.raw().toString();
        if ("gentime" === t)
            var i = 0 | n.slice(0, 4)
              , r = 0 | n.slice(4, 6)
              , a = 0 | n.slice(6, 8)
              , o = 0 | n.slice(8, 10)
              , s = 0 | n.slice(10, 12)
              , c = 0 | n.slice(12, 14);
        else {
            if ("utctime" !== t)
                return e.error("Decoding " + t + " time is not supported yet");
            var i = 0 | n.slice(0, 2)
              , r = 0 | n.slice(2, 4)
              , a = 0 | n.slice(4, 6)
              , o = 0 | n.slice(6, 8)
              , s = 0 | n.slice(8, 10)
              , c = 0 | n.slice(10, 12);
            i = i < 70 ? 2e3 + i : 1900 + i
        }
        return Date.UTC(i, r - 1, a, o, s, c, 0)
    }
    ,
    r.prototype._decodeNull = function(e) {
        return null
    }
    ,
    r.prototype._decodeBool = function(e) {
        var t = e.readUInt8();
        return e.isError(t) ? t : 0 !== t
    }
    ,
    r.prototype._decodeInt = function(e, t) {
        var n = e.raw()
          , i = new h(n);
        return t && (i = t[i.toString(10)] || i),
        i
    }
    ,
    r.prototype._use = function(e, t) {
        return "function" == typeof e && (e = e(t)),
        e._getDecoder("der").tree
    }
}
, function(e, t, n) {
    function i(e) {
        this.enc = "der",
        this.name = e.name,
        this.entity = e,
        this.tree = new r,
        this.tree._init(e.body)
    }
    function r(e) {
        h.Node.call(this, "der", e)
    }
    function a(e) {
        return e < 10 ? "0" + e : e
    }
    function o(e, t, n, i) {
        var r;
        if ("seqof" === e ? e = "seq" : "setof" === e && (e = "set"),
        u.tagByName.hasOwnProperty(e))
            r = u.tagByName[e];
        else {
            if ("number" != typeof e || (0 | e) !== e)
                return i.error("Unknown tag: " + e);
            r = e
        }
        return r >= 31 ? i.error("Multi-octet tag encoding unsupported") : (t || (r |= 32),
        r |= u.tagClassByName[n || "universal"] << 6)
    }
    var s = n(2)
      , c = n(4).Buffer
      , f = n(57)
      , h = f.base
      , u = f.constants.der;
    e.exports = i,
    i.prototype.encode = function(e, t) {
        return this.tree._encode(e, t).join()
    }
    ,
    s(r, h.Node),
    r.prototype._encodeComposite = function(e, t, n, i) {
        var r = o(e, t, n, this.reporter);
        if (i.length < 128) {
            var a = new c(2);
            return a[0] = r,
            a[1] = i.length,
            this._createEncoderBuffer([a, i])
        }
        for (var s = 1, f = i.length; f >= 256; f >>= 8)
            s++;
        var a = new c(2 + s);
        a[0] = r,
        a[1] = 128 | s;
        for (var f = 1 + s, h = i.length; h > 0; f--,
        h >>= 8)
            a[f] = 255 & h;
        return this._createEncoderBuffer([a, i])
    }
    ,
    r.prototype._encodeStr = function(e, t) {
        if ("bitstr" === t)
            return this._createEncoderBuffer([0 | e.unused, e.data]);
        if ("bmpstr" === t) {
            for (var n = new c(2 * e.length), i = 0; i < e.length; i++)
                n.writeUInt16BE(e.charCodeAt(i), 2 * i);
            return this._createEncoderBuffer(n)
        }
        return "numstr" === t ? this._isNumstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === t ? this._isPrintstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(t) ? this._createEncoderBuffer(e) : "objDesc" === t ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: " + t + " unsupported")
    }
    ,
    r.prototype._encodeObjid = function(e, t, n) {
        if ("string" == typeof e) {
            if (!t)
                return this.reporter.error("string objid given, but no values map found");
            if (!t.hasOwnProperty(e))
                return this.reporter.error("objid not found in values map");
            e = t[e].split(/[\s\.]+/g);
            for (var i = 0; i < e.length; i++)
                e[i] |= 0
        } else if (Array.isArray(e)) {
            e = e.slice();
            for (var i = 0; i < e.length; i++)
                e[i] |= 0
        }
        if (!Array.isArray(e))
            return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e));
        if (!n) {
            if (e[1] >= 40)
                return this.reporter.error("Second objid identifier OOB");
            e.splice(0, 2, 40 * e[0] + e[1])
        }
        for (var r = 0, i = 0; i < e.length; i++) {
            var a = e[i];
            for (r++; a >= 128; a >>= 7)
                r++
        }
        for (var o = new c(r), s = o.length - 1, i = e.length - 1; i >= 0; i--) {
            var a = e[i];
            for (o[s--] = 127 & a; (a >>= 7) > 0; )
                o[s--] = 128 | 127 & a
        }
        return this._createEncoderBuffer(o)
    }
    ,
    r.prototype._encodeTime = function(e, t) {
        var n, i = new Date(e);
        return "gentime" === t ? n = [a(i.getFullYear()), a(i.getUTCMonth() + 1), a(i.getUTCDate()), a(i.getUTCHours()), a(i.getUTCMinutes()), a(i.getUTCSeconds()), "Z"].join("") : "utctime" === t ? n = [a(i.getFullYear() % 100), a(i.getUTCMonth() + 1), a(i.getUTCDate()), a(i.getUTCHours()), a(i.getUTCMinutes()), a(i.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + t + " time is not supported yet"),
        this._encodeStr(n, "octstr")
    }
    ,
    r.prototype._encodeNull = function() {
        return this._createEncoderBuffer("")
    }
    ,
    r.prototype._encodeInt = function(e, t) {
        if ("string" == typeof e) {
            if (!t)
                return this.reporter.error("String int or enum given, but no values map");
            if (!t.hasOwnProperty(e))
                return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
            e = t[e]
        }
        if ("number" != typeof e && !c.isBuffer(e)) {
            var n = e.toArray();
            !e.sign && 128 & n[0] && n.unshift(0),
            e = new c(n)
        }
        if (c.isBuffer(e)) {
            var i = e.length;
            0 === e.length && i++;
            var r = new c(i);
            return e.copy(r),
            0 === e.length && (r[0] = 0),
            this._createEncoderBuffer(r)
        }
        if (e < 128)
            return this._createEncoderBuffer(e);
        if (e < 256)
            return this._createEncoderBuffer([0, e]);
        for (var i = 1, a = e; a >= 256; a >>= 8)
            i++;
        for (var r = new Array(i), a = r.length - 1; a >= 0; a--)
            r[a] = 255 & e,
            e >>= 8;
        return 128 & r[0] && r.unshift(0),
        this._createEncoderBuffer(new c(r))
    }
    ,
    r.prototype._encodeBool = function(e) {
        return this._createEncoderBuffer(e ? 255 : 0)
    }
    ,
    r.prototype._use = function(e, t) {
        return "function" == typeof e && (e = e(t)),
        e._getEncoder("der").tree
    }
    ,
    r.prototype._skipDefault = function(e, t, n) {
        var i, r = this._baseState;
        if (null === r.default)
            return !1;
        var a = e.join();
        if (void 0 === r.defaultBuffer && (r.defaultBuffer = this._encodeValue(r.default, t, n).join()),
        a.length !== r.defaultBuffer.length)
            return !1;
        for (i = 0; i < a.length; i++)
            if (a[i] !== r.defaultBuffer[i])
                return !1;
        return !0
    }
}
, function(e, t) {
    e.exports = {
        "1.3.132.0.10": "secp256k1",
        "1.3.132.0.33": "p224",
        "1.2.840.10045.3.1.1": "p192",
        "1.2.840.10045.3.1.7": "p256",
        "1.3.132.0.34": "p384",
        "1.3.132.0.35": "p521"
    }
}
, function(e, t, n) {
    (function(t) {
        function i(e) {
            var n = new t(4);
            return n.writeUInt32BE(e, 0),
            n
        }
        var r = n(54);
        e.exports = function(e, n) {
            for (var a, o = new t(""), s = 0; o.length < n; )
                a = i(s++),
                o = t.concat([o, r("sha1").update(e).update(a).digest()]);
            return o.slice(0, n)
        }
    }
    ).call(t, n(4).Buffer)
}
, function(e, t) {
    e.exports = function(e, t) {
        for (var n = e.length, i = -1; ++i < n; )
            e[i] ^= t[i];
        return e
    }
}
, function(e, t, n) {
    (function(t) {
        function i(e, n) {
            return new t(e.toRed(r.mont(n.modulus)).redPow(new r(n.publicExponent)).fromRed().toArray())
        }
        var r = n(7);
        e.exports = i
    }
    ).call(t, n(4).Buffer)
}
, function(e, t) {
    e.exports = {
        k: "nobook-science!@#",
        a: "aes128"
    }
}
, function(e, t) {
    function n(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
    e.exports = n
}
, function(e, t, n) {
    var i = n(642)
      , r = "object" == typeof self && self && self.Object === Object && self
      , a = i || r || Function("return this")();
    e.exports = a
}
, function(e, t, n) {
    var i = n(190)
      , r = i.Symbol;
    e.exports = r
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n(522)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r() {
        if (/^http:\/\/127\.0\.0\.1/.test(window.location.href))
            try {
                if (window.top.require && window.top.require("nw.gui"))
                    return w = !0,
                    void o(!0)
            } catch (e) {}
        if (window.courseID.match(/^(3001|3002|3003|3004|3005|3007|3019|3061|3075|3087|3121|0169|0175|0140|0033|0034|0035|0050|0073|0074|0118|0132|0149|0159)$/))
            return console.log("Welcome! Please enjoy the free course!"),
            w = !0,
            void o(!0);
        v.loadConfig(v.TYPE.BIO_CZ).then(function(e) {
            function t(e, t) {
                e ? (console.log("当前是vip用户"),
                w = !0,
                o(!0)) : M ? console.log("您没有权限使用这个资源") : a(t.authAction.notVIP)
            }
            function n(e) {
                3018 === e.errcode ? (console.log("当前用户未登录，请先登录"),
                a(e.authAction.notLogin)) : 4 === e.readyState && 404 === e.status ? console.log("当前页面不存在") : 4 === e.readyState && 200 === e.status ? console.log("可能是参数传递错误，如pid错误") : console.log("其他情况根据学科需求进行处理!")
            }
            M ? (console.log("-------使用token进行登录验证"),
            e.tokenAuthCheck(M).then(t).catch(n)) : (console.log("-------使用session进行登录验证"),
            e.auth().then(t).catch(n))
        })
    }
    function a(e) {
        window.top.location.href = e
    }
    function o(e) {
        function t() {
            w && (0 === a && (0,
            h.default)(x).then(function(e) {
                new (0,
                e.default)("assets/" + (c("ah", S) || "") + ".json","assets/" + (c("rh", S) || "") + ".json"),
                BiologyMain.setLoading(!1),
                window && window.parent && (window.addEventListener("message", function(e) {
                    switch ((e.data || {}).type) {
                    case "NB_GO_SECOND":
                        $("#test-btn-id").click()
                    }
                }),
                window.parent.postMessage({
                    type: "onload",
                    prod: "biological" + ("E" == g.pid[0] ? "2" : "1"),
                    sourceid: c("sourceid", getHtmlDocName())
                }, "*"))
            }),
            a--)
        }
        if (w) {
            new m(e).openExperiment(g.pid);
            var i = c("ph", S)
              , r = c("td", S)
              , a = (c("tdo", S),
            0);
            i && (n.e(155).then(n.bind(null, 810)).then(function(e) {
                window.box2d = e.box2d
            }).then(t),
            a++),
            r && (n.e(60).then(n.bind(null, 811)).then(function(e) {
                window.BABYLON = e,
                BABYLON.Engine.isSupported() || (y.reLocation({
                    status: y.STATUS.LOW_VERSION
                }, window),
                w = !1);
                var t = n(611);
                window.BabylonScene = t.BabylonScene,
                window.ConstName = t.ConstName,
                (0,
                d.default)() && ($.getScript("libs/babylon.inspector.js"),
                $.getScript("libs/split.js"))
            }).then(t),
            a++),
            t()
        }
    }
    function s(e) {
        A ? $.getJSON("./course-list.json", function(t) {
            for (var n = t.labList, i = !1, r = 0; r < n.length; ++r)
                if (n[r].id == A) {
                    i = !0,
                    S = window.atob(n[r].url.slice(10));
                    break
                }
            i ? e() : console.log("当前实验列表中没有该bioID，请确认实验ID。")
        }) : e()
    }
    function c(e, t) {
        for (var n = null, i = [], r = t.split("&"), a = 0; a < r.length; a++)
            i = r[a].split("="),
            i[0] === e && (n = decodeURIComponent(i[1]));
        return n
    }
    var f = n(523)
      , h = i(f)
      , u = n(524)
      , d = i(u)
      , l = (n(157),
    n(101),
    n(188).k)
      , p = n(188).a
      , b = n(605).decrypt
      , v = n(606)
      , y = n(608)
      , m = n(609).NBAcquisitionService
      , g = n(610);
    BiologyMain.browser;
    BiologyMain.setLoading(!0),
    document.body.style.backgroundColor = "#999";
    var w = !1
      , _ = void 0
      , A = c("bioID", getHtmlDocName())
      , M = c("token", getHtmlDocName())
      , E = c("sourceid", getHtmlDocName())
      , S = void 0
      , x = void 0;

    /^\d{4}$/.test(E) ? (A = E,
    x = window.courseID = E) : (S = window.atob(E),
    x = function(e) {
        try {
            e = b(p, l, e),
            window.courseID = e
        } catch (e) {
            throw "参数传递错误"
        }
        return window.courseID
    }(c("course", S)))

    window.onload = function() {
        if (_ = window.top, A) {
            if (A != courseID)
                console.log("当前资源地址没有通过核验，请核实该地址。");
            s(r)
        } else
            r()
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e) {
        switch (e) {
        case "3033":
            return n.e(42).then(n.bind(null, 661));
        case "3097":
            return n.e(62).then(n.bind(null, 662));
        case "3098":
            return n.e(61).then(n.bind(null, 663));
        case "0001":
            return n.e(154).then(n.bind(null, 664));
        case "0002":
            return n.e(34).then(n.bind(null, 665));
        case "0003":
            return n.e(153).then(n.bind(null, 666));
        case "0005":
            return n.e(152).then(n.bind(null, 667));
        case "0007":
            return n.e(11).then(n.bind(null, 668));
        case "0008":
            return n.e(151).then(n.bind(null, 669));
        case "0009":
            return n.e(37).then(n.bind(null, 670));
        case "0010":
            return n.e(58).then(n.bind(null, 671));
        case "0013":
            return n.e(8).then(n.bind(null, 672));
        case "0014":
            return n.e(25).then(n.bind(null, 673));
        case "0016":
            return n.e(150).then(n.bind(null, 674));
        case "0017":
            return n.e(33).then(n.bind(null, 675));
        case "0018":
            return n.e(24).then(n.bind(null, 676));
        case "0020":
            return n.e(149).then(n.bind(null, 677));
        case "0021":
            return n.e(148).then(n.bind(null, 678));
        case "0022":
            return n.e(13).then(n.bind(null, 679));
        case "0023":
            return n.e(31).then(n.bind(null, 680));
        case "0026":
            return n.e(18).then(n.bind(null, 681));
        case "0027":
            return n.e(147).then(n.bind(null, 682));
        case "0028":
            return n.e(39).then(n.bind(null, 683));
        case "0030":
            return n.e(146).then(n.bind(null, 684));
        case "0031":
            return n.e(38).then(n.bind(null, 685));
        case "0032":
            return n.e(0).then(n.bind(null, 686));
        case "0033":
            return n.e(145).then(n.bind(null, 687));
        case "0034":
            return n.e(144).then(n.bind(null, 688));
        case "0035":
            return n.e(143).then(n.bind(null, 689));
        case "0037":
            return n.e(142).then(n.bind(null, 690));
        case "0038":
            return n.e(141).then(n.bind(null, 691));
        case "0039":
            return n.e(140).then(n.bind(null, 692));
        case "0040":
            return n.e(139).then(n.bind(null, 693));
        case "0041":
            return n.e(138).then(n.bind(null, 694));
        case "0042":
            return n.e(137).then(n.bind(null, 695));
        case "0043":
            return n.e(136).then(n.bind(null, 696));
        case "0044":
            return n.e(135).then(n.bind(null, 697));
        case "0045":
            return n.e(134).then(n.bind(null, 698));
        case "0046":
            return n.e(133).then(n.bind(null, 699));
        case "0047":
            return n.e(132).then(n.bind(null, 700));
        case "0048":
            return n.e(131).then(n.bind(null, 657));
        case "0049":
            return n.e(57).then(n.bind(null, 701));
        case "0050":
            return n.e(56).then(n.bind(null, 702));
        case "0051":
            return n.e(130).then(n.bind(null, 703));
        case "0052":
            return n.e(129).then(n.bind(null, 704));
        case "0053":
            return n.e(128).then(n.bind(null, 705));
        case "0054":
            return n.e(127).then(n.bind(null, 706));
        case "0055":
            return n.e(126).then(n.bind(null, 707));
        case "0056":
            return n.e(36).then(n.bind(null, 708));
        case "0057":
            return n.e(125).then(n.bind(null, 709));
        case "0058":
            return n.e(124).then(n.bind(null, 710));
        case "0059":
            return n.e(1).then(n.bind(null, 711));
        case "0060":
            return n.e(9).then(n.bind(null, 712));
        case "0061":
            return n.e(123).then(n.bind(null, 713));
        case "0063":
            return n.e(122).then(n.bind(null, 714));
        case "0064":
            return n.e(121).then(n.bind(null, 715));
        case "0065":
            return n.e(120).then(n.bind(null, 716));
        case "0066":
            return n.e(119).then(n.bind(null, 717));
        case "0067":
            return n.e(118).then(n.bind(null, 718));
        case "0068":
            return n.e(117).then(n.bind(null, 719));
        case "0069":
            return n.e(116).then(n.bind(null, 720));
        case "0070":
            return n.e(115).then(n.bind(null, 721));
        case "0071":
            return n.e(114).then(n.bind(null, 722));
        case "0072":
            return n.e(113).then(n.bind(null, 723));
        case "0073":
            return n.e(112).then(n.bind(null, 724));
        case "0074":
            return n.e(111).then(n.bind(null, 725));
        case "0075":
            return n.e(59).then(n.bind(null, 726));
        case "0076":
            return n.e(29).then(n.bind(null, 727));
        case "0077":
            return n.e(110).then(n.bind(null, 728));
        case "0078":
            return n.e(109).then(n.bind(null, 729));
        case "0079":
            return n.e(108).then(n.bind(null, 730));
        case "0080":
            return n.e(107).then(n.bind(null, 731));
        case "0081":
            return n.e(106).then(n.bind(null, 732));
        case "0082":
            return n.e(105).then(n.bind(null, 733));
        case "0084":
            return n.e(2).then(n.bind(null, 734));
        case "0085":
            return n.e(104).then(n.bind(null, 735));
        case "0087":
            return n.e(35).then(n.bind(null, 736));
        case "0088":
            return n.e(4).then(n.bind(null, 737));
        case "0090":
            return n.e(30).then(n.bind(null, 738));
        case "0091":
            return n.e(12).then(n.bind(null, 739));
        case "0094":
            return n.e(16).then(n.bind(null, 740));
        case "0095":
            return n.e(28).then(n.bind(null, 741));
        case "0096":
            return n.e(55).then(n.bind(null, 742));
        case "0097":
            return n.e(23).then(n.bind(null, 743));
        case "0098":
            return n.e(103).then(n.bind(null, 744));
        case "0102":
            return n.e(102).then(n.bind(null, 745));
        case "0104":
            return n.e(101).then(n.bind(null, 746));
        case "0105":
            return n.e(100).then(n.bind(null, 747));
        case "0107":
            return n.e(22).then(n.bind(null, 748));
        case "0109":
            return n.e(99).then(n.bind(null, 749));
        case "0111":
            return n.e(98).then(n.bind(null, 750));
        case "0112":
            return n.e(97).then(n.bind(null, 751));
        case "0118":
            return n.e(96).then(n.bind(null, 658));
        case "0121":
            return n.e(95).then(n.bind(null, 752));
        case "0123":
            return n.e(3).then(n.bind(null, 753));
        case "0124":
            return n.e(21).then(n.bind(null, 754));
        case "0125":
            return n.e(27).then(n.bind(null, 755));
        case "0131":
            return n.e(94).then(n.bind(null, 756));
        case "0132":
            return n.e(93).then(n.bind(null, 757));
        case "0135":
            return n.e(54).then(n.bind(null, 758));
        case "0137":
            return n.e(17).then(n.bind(null, 759));
        case "0139":
            return n.e(92).then(n.bind(null, 760));
        case "0140":
            return n.e(15).then(n.bind(null, 761));
        case "0141":
            return n.e(91).then(n.bind(null, 762));
        case "0142":
            return n.e(7).then(n.bind(null, 763));
        case "0144":
            return n.e(90).then(n.bind(null, 659));
        case "0145":
            return n.e(53).then(n.bind(null, 764));
        case "0147":
            return n.e(6).then(n.bind(null, 765));
        case "0149":
            return n.e(89).then(n.bind(null, 766));
        case "0150":
            return n.e(32).then(n.bind(null, 767));
        case "0151":
            return n.e(5).then(n.bind(null, 768));
        case "0152":
            return n.e(88).then(n.bind(null, 769));
        case "0153":
            return n.e(87).then(n.bind(null, 770));
        case "0154":
            return n.e(14).then(n.bind(null, 771));
        case "0155":
            return n.e(20).then(n.bind(null, 772));
        case "0157":
            return n.e(86).then(n.bind(null, 773));
        case "0158":
            return n.e(19).then(n.bind(null, 774));
        case "0159":
            return n.e(85).then(n.bind(null, 775));
        case "0160":
            return n.e(52).then(n.bind(null, 776));
        case "0161":
            return n.e(51).then(n.bind(null, 777));
        case "0163":
            return n.e(50).then(n.bind(null, 778));
        case "0164":
            return n.e(49).then(n.bind(null, 779));
        case "0165":
            return n.e(84).then(n.bind(null, 780));
        case "0166":
            return n.e(83).then(n.bind(null, 656));
        case "0167":
            return n.e(82).then(n.bind(null, 781));
        case "0168":
            return n.e(81).then(n.bind(null, 782));
        case "0169":
            return n.e(48).then(n.bind(null, 783));
        case "0170":
            return n.e(80).then(n.bind(null, 784));
        case "0171":
            return n.e(79).then(n.bind(null, 785));
        case "0172":
            return n.e(26).then(n.bind(null, 786));
        case "0175":
            return n.e(47).then(n.bind(null, 787));
        case "0176":
            return n.e(46).then(n.bind(null, 788));
        case "0177":
            return n.e(78).then(n.bind(null, 789));
        case "0178":
            return n.e(77).then(n.bind(null, 790));
        case "0179":
            return n.e(76).then(n.bind(null, 791));
        case "0180":
            return n.e(75).then(n.bind(null, 792));
        case "0181":
            return n.e(74).then(n.bind(null, 793));
        case "0182":
            return n.e(73).then(n.bind(null, 794));
        case "0183":
            return n.e(72).then(n.bind(null, 795));
        case "0184":
            return n.e(71).then(n.bind(null, 796));
        case "0185":
            return n.e(40).then(n.bind(null, 797));
        case "0186":
            return n.e(70).then(n.bind(null, 798));
        case "0187":
            return n.e(45).then(n.bind(null, 799));
        case "0188":
            return n.e(44).then(n.bind(null, 800));
        case "0190":
            return n.e(69).then(n.bind(null, 801));
        case "0191":
            return n.e(68).then(n.bind(null, 802));
        case "0192":
            return n.e(43).then(n.bind(null, 803));
        case "0193":
            return n.e(67).then(n.bind(null, 660));
        case "0194":
            return n.e(66).then(n.bind(null, 804));
        case "0195":
            return n.e(41).then(n.bind(null, 805));
        case "0196":
            return n.e(10).then(n.bind(null, 806));
        case "0197":
            return n.e(65).then(n.bind(null, 807));
        case "0198":
            return n.e(64).then(n.bind(null, 808));
        case "0201":
            return n.e(63).then(n.bind(null, 809))
        }
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i")
          , n = location.href.substring(location.href.indexOf("?") + 1);
        if (!n || !n.length)
            return null;
        var i = n.match(t);
        return null != i ? i[2] : null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        var e = i("DEBUG") || i("debug");
        return !!("true" === e || "1" === e || window.LAB_DEBUG || window.debug || window.isDebug)
    }
}
, function(e, t) {
    !function() {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          , n = {
            rotl: function(e, t) {
                return e << t | e >>> 32 - t
            },
            rotr: function(e, t) {
                return e << 32 - t | e >>> t
            },
            endian: function(e) {
                if (e.constructor == Number)
                    return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                for (var t = 0; t < e.length; t++)
                    e[t] = n.endian(e[t]);
                return e
            },
            randomBytes: function(e) {
                for (var t = []; e > 0; e--)
                    t.push(Math.floor(256 * Math.random()));
                return t
            },
            bytesToWords: function(e) {
                for (var t = [], n = 0, i = 0; n < e.length; n++,
                i += 8)
                    t[i >>> 5] |= e[n] << 24 - i % 32;
                return t
            },
            wordsToBytes: function(e) {
                for (var t = [], n = 0; n < 32 * e.length; n += 8)
                    t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                return t
            },
            bytesToHex: function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    t.push((e[n] >>> 4).toString(16)),
                    t.push((15 & e[n]).toString(16));
                return t.join("")
            },
            hexToBytes: function(e) {
                for (var t = [], n = 0; n < e.length; n += 2)
                    t.push(parseInt(e.substr(n, 2), 16));
                return t
            },
            bytesToBase64: function(e) {
                for (var n = [], i = 0; i < e.length; i += 3)
                    for (var r = e[i] << 16 | e[i + 1] << 8 | e[i + 2], a = 0; a < 4; a++)
                        8 * i + 6 * a <= 8 * e.length ? n.push(t.charAt(r >>> 6 * (3 - a) & 63)) : n.push("=");
                return n.join("")
            },
            base64ToBytes: function(e) {
                e = e.replace(/[^A-Z0-9+\/]/gi, "");
                for (var n = [], i = 0, r = 0; i < e.length; r = ++i % 4)
                    0 != r && n.push((t.indexOf(e.charAt(i - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | t.indexOf(e.charAt(i)) >>> 6 - 2 * r);
                return n
            }
        };
        e.exports = n
    }()
}
, function(e, t) {
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    function i(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
    }
    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    e.exports = function(e) {
        return null != e && (n(e) || i(e) || !!e._isBuffer)
    }
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        function n(e) {
            if (e.length % i != 0) {
                var n = e.length + (i - e.length % i);
                e = t.concat([e, r], n)
            }
            for (var a = new Array(e.length >>> 2), o = 0, s = 0; o < e.length; o += i,
            s++)
                a[s] = e.readInt32LE(o);
            return a
        }
        var i = 4
          , r = new t(i);
        r.fill(0);
        e.exports = function(e, i) {
            var r = i(n(e), 8 * e.length);
            e = new t(16);
            for (var a = 0; a < r.length; a++)
                e.writeInt32LE(r[a], a << 2, !0);
            return e
        }
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    e.exports = n(36)
}
, function(e, t, n) {
    e.exports = n(11)
}
, function(e, t, n) {
    e.exports = n(34).Transform
}
, function(e, t, n) {
    e.exports = n(34).PassThrough
}
, function(e, t, n) {
    function i() {
        this.init(),
        this._w = u,
        c.call(this, 64, 56)
    }
    function r(e) {
        return e << 5 | e >>> 27
    }
    function a(e) {
        return e << 30 | e >>> 2
    }
    function o(e, t, n, i) {
        return 0 === e ? t & n | ~t & i : 2 === e ? t & n | t & i | n & i : t ^ n ^ i
    }
    var s = n(2)
      , c = n(41)
      , f = n(3).Buffer
      , h = [1518500249, 1859775393, -1894007588, -899497514]
      , u = new Array(80);
    s(i, c),
    i.prototype.init = function() {
        return this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520,
        this
    }
    ,
    i.prototype._update = function(e) {
        for (var t = this._w, n = 0 | this._a, i = 0 | this._b, s = 0 | this._c, c = 0 | this._d, f = 0 | this._e, u = 0; u < 16; ++u)
            t[u] = e.readInt32BE(4 * u);
        for (; u < 80; ++u)
            t[u] = t[u - 3] ^ t[u - 8] ^ t[u - 14] ^ t[u - 16];
        for (var d = 0; d < 80; ++d) {
            var l = ~~(d / 20)
              , p = r(n) + o(l, i, s, c) + f + t[d] + h[l] | 0;
            f = c,
            c = s,
            s = a(i),
            i = n,
            n = p
        }
        this._a = n + this._a | 0,
        this._b = i + this._b | 0,
        this._c = s + this._c | 0,
        this._d = c + this._d | 0,
        this._e = f + this._e | 0
    }
    ,
    i.prototype._hash = function() {
        var e = f.allocUnsafe(20);
        return e.writeInt32BE(0 | this._a, 0),
        e.writeInt32BE(0 | this._b, 4),
        e.writeInt32BE(0 | this._c, 8),
        e.writeInt32BE(0 | this._d, 12),
        e.writeInt32BE(0 | this._e, 16),
        e
    }
    ,
    e.exports = i
}
, function(e, t, n) {
    function i() {
        this.init(),
        this._w = d,
        f.call(this, 64, 56)
    }
    function r(e) {
        return e << 1 | e >>> 31
    }
    function a(e) {
        return e << 5 | e >>> 27
    }
    function o(e) {
        return e << 30 | e >>> 2
    }
    function s(e, t, n, i) {
        return 0 === e ? t & n | ~t & i : 2 === e ? t & n | t & i | n & i : t ^ n ^ i
    }
    var c = n(2)
      , f = n(41)
      , h = n(3).Buffer
      , u = [1518500249, 1859775393, -1894007588, -899497514]
      , d = new Array(80);
    c(i, f),
    i.prototype.init = function() {
        return this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520,
        this
    }
    ,
    i.prototype._update = function(e) {
        for (var t = this._w, n = 0 | this._a, i = 0 | this._b, c = 0 | this._c, f = 0 | this._d, h = 0 | this._e, d = 0; d < 16; ++d)
            t[d] = e.readInt32BE(4 * d);
        for (; d < 80; ++d)
            t[d] = r(t[d - 3] ^ t[d - 8] ^ t[d - 14] ^ t[d - 16]);
        for (var l = 0; l < 80; ++l) {
            var p = ~~(l / 20)
              , b = a(n) + s(p, i, c, f) + h + t[l] + u[p] | 0;
            h = f,
            f = c,
            c = o(i),
            i = n,
            n = b
        }
        this._a = n + this._a | 0,
        this._b = i + this._b | 0,
        this._c = c + this._c | 0,
        this._d = f + this._d | 0,
        this._e = h + this._e | 0
    }
    ,
    i.prototype._hash = function() {
        var e = h.allocUnsafe(20);
        return e.writeInt32BE(0 | this._a, 0),
        e.writeInt32BE(0 | this._b, 4),
        e.writeInt32BE(0 | this._c, 8),
        e.writeInt32BE(0 | this._d, 12),
        e.writeInt32BE(0 | this._e, 16),
        e
    }
    ,
    e.exports = i
}
, function(e, t, n) {
    function i() {
        this.init(),
        this._w = c,
        o.call(this, 64, 56)
    }
    var r = n(2)
      , a = n(160)
      , o = n(41)
      , s = n(3).Buffer
      , c = new Array(64);
    r(i, a),
    i.prototype.init = function() {
        return this._a = 3238371032,
        this._b = 914150663,
        this._c = 812702999,
        this._d = 4144912697,
        this._e = 4290775857,
        this._f = 1750603025,
        this._g = 1694076839,
        this._h = 3204075428,
        this
    }
    ,
    i.prototype._hash = function() {
        var e = s.allocUnsafe(28);
        return e.writeInt32BE(this._a, 0),
        e.writeInt32BE(this._b, 4),
        e.writeInt32BE(this._c, 8),
        e.writeInt32BE(this._d, 12),
        e.writeInt32BE(this._e, 16),
        e.writeInt32BE(this._f, 20),
        e.writeInt32BE(this._g, 24),
        e
    }
    ,
    e.exports = i
}
, function(e, t, n) {
    function i() {
        this.init(),
        this._w = c,
        o.call(this, 128, 112)
    }
    var r = n(2)
      , a = n(161)
      , o = n(41)
      , s = n(3).Buffer
      , c = new Array(160);
    r(i, a),
    i.prototype.init = function() {
        return this._ah = 3418070365,
        this._bh = 1654270250,
        this._ch = 2438529370,
        this._dh = 355462360,
        this._eh = 1731405415,
        this._fh = 2394180231,
        this._gh = 3675008525,
        this._hh = 1203062813,
        this._al = 3238371032,
        this._bl = 914150663,
        this._cl = 812702999,
        this._dl = 4144912697,
        this._el = 4290775857,
        this._fl = 1750603025,
        this._gl = 1694076839,
        this._hl = 3204075428,
        this
    }
    ,
    i.prototype._hash = function() {
        function e(e, n, i) {
            t.writeInt32BE(e, i),
            t.writeInt32BE(n, i + 4)
        }
        var t = s.allocUnsafe(48);
        return e(this._ah, this._al, 0),
        e(this._bh, this._bl, 8),
        e(this._ch, this._cl, 16),
        e(this._dh, this._dl, 24),
        e(this._eh, this._el, 32),
        e(this._fh, this._fl, 40),
        t
    }
    ,
    e.exports = i
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        o.call(this, "digest"),
        "string" == typeof t && (t = a.from(t)),
        this._alg = e,
        this._key = t,
        t.length > c ? t = e(t) : t.length < c && (t = a.concat([t, s], c));
        for (var n = this._ipad = a.allocUnsafe(c), i = this._opad = a.allocUnsafe(c), r = 0; r < c; r++)
            n[r] = 54 ^ t[r],
            i[r] = 92 ^ t[r];
        this._hash = [n]
    }
    var r = n(2)
      , a = n(3).Buffer
      , o = n(30)
      , s = a.alloc(128)
      , c = 64;
    r(i, o),
    i.prototype._update = function(e) {
        this._hash.push(e)
    }
    ,
    i.prototype._final = function() {
        var e = this._alg(a.concat(this._hash));
        return this._alg(a.concat([this._opad, e]))
    }
    ,
    e.exports = i
}
, function(e, t, n) {
    e.exports = n(163)
}
, function(e, t, n) {
    (function(t, i) {
        function r(e) {
            if (t.process && !t.process.browser)
                return Promise.resolve(!1);
            if (!d || !d.importKey || !d.deriveBits)
                return Promise.resolve(!1);
            if (void 0 !== p[e])
                return p[e];
            s = s || u.alloc(8);
            var n = a(s, s, 10, 128, e).then(function() {
                return !0
            }).catch(function() {
                return !1
            });
            return p[e] = n,
            n
        }
        function a(e, t, n, i, r) {
            return d.importKey("raw", e, {
                name: "PBKDF2"
            }, !1, ["deriveBits"]).then(function(e) {
                return d.deriveBits({
                    name: "PBKDF2",
                    salt: t,
                    iterations: n,
                    hash: {
                        name: r
                    }
                }, e, i << 3)
            }).then(function(e) {
                return u.from(e)
            })
        }
        function o(e, t) {
            e.then(function(e) {
                i.nextTick(function() {
                    t(null, e)
                })
            }, function(e) {
                i.nextTick(function() {
                    t(e)
                })
            })
        }
        var s, c = n(165), f = n(166), h = n(167), u = n(3).Buffer, d = t.crypto && t.crypto.subtle, l = {
            sha: "SHA-1",
            "sha-1": "SHA-1",
            sha1: "SHA-1",
            sha256: "SHA-256",
            "sha-256": "SHA-256",
            sha384: "SHA-384",
            "sha-384": "SHA-384",
            "sha-512": "SHA-512",
            sha512: "SHA-512"
        }, p = [];
        e.exports = function(e, n, s, d, p, b) {
            if (u.isBuffer(e) || (e = u.from(e, f)),
            u.isBuffer(n) || (n = u.from(n, f)),
            c(s, d),
            "function" == typeof p && (b = p,
            p = void 0),
            "function" != typeof b)
                throw new Error("No callback provided to pbkdf2");
            p = p || "sha1";
            var v = l[p.toLowerCase()];
            if (!v || "function" != typeof t.Promise)
                return i.nextTick(function() {
                    var t;
                    try {
                        t = h(e, n, s, d, p)
                    } catch (e) {
                        return b(e)
                    }
                    b(null, t)
                });
            o(r(v).then(function(t) {
                return t ? a(e, n, s, d, v) : h(e, n, s, d, p)
            }), b)
        }
    }
    ).call(t, n(1), n(8))
}
, function(e, t, n) {
    function i(e, t) {
        var n, i;
        if (e = e.toLowerCase(),
        d[e])
            n = d[e].key,
            i = d[e].iv;
        else {
            if (!u[e])
                throw new TypeError("invalid suite type");
            n = 8 * u[e].key,
            i = u[e].iv
        }
        var r = c(t, !1, n, i);
        return a(e, r.key, r.iv)
    }
    function r(e, t) {
        var n, i;
        if (e = e.toLowerCase(),
        d[e])
            n = d[e].key,
            i = d[e].iv;
        else {
            if (!u[e])
                throw new TypeError("invalid suite type");
            n = 8 * u[e].key,
            i = u[e].iv
        }
        var r = c(t, !1, n, i);
        return o(e, r.key, r.iv)
    }
    function a(e, t, n) {
        if (e = e.toLowerCase(),
        d[e])
            return f.createCipheriv(e, t, n);
        if (u[e])
            return new h({
                key: t,
                iv: n,
                mode: e
            });
        throw new TypeError("invalid suite type")
    }
    function o(e, t, n) {
        if (e = e.toLowerCase(),
        d[e])
            return f.createDecipheriv(e, t, n);
        if (u[e])
            return new h({
                key: t,
                iv: n,
                mode: e,
                decrypt: !0
            });
        throw new TypeError("invalid suite type")
    }
    function s() {
        return Object.keys(u).concat(f.getCiphers())
    }
    var c = n(71)
      , f = n(106)
      , h = n(550)
      , u = n(556)
      , d = n(107);
    t.createCipher = t.Cipher = i,
    t.createCipheriv = t.Cipheriv = a,
    t.createDecipher = t.Decipher = r,
    t.createDecipheriv = t.Decipheriv = o,
    t.listCiphers = t.getCiphers = s
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        function i() {
            h.call(this, 64),
            this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878
        }
        function r(e, t) {
            return e << t | e >>> 32 - t
        }
        function a(e, t, n, i, a, o, s) {
            return r(e + (t & n | ~t & i) + a + o | 0, s) + t | 0
        }
        function o(e, t, n, i, a, o, s) {
            return r(e + (t & i | n & ~i) + a + o | 0, s) + t | 0
        }
        function s(e, t, n, i, a, o, s) {
            return r(e + (t ^ n ^ i) + a + o | 0, s) + t | 0
        }
        function c(e, t, n, i, a, o, s) {
            return r(e + (n ^ (t | ~i)) + a + o | 0, s) + t | 0
        }
        var f = n(2)
          , h = n(159)
          , u = new Array(16);
        f(i, h),
        i.prototype._update = function() {
            for (var e = u, t = 0; t < 16; ++t)
                e[t] = this._block.readInt32LE(4 * t);
            var n = this._a
              , i = this._b
              , r = this._c
              , f = this._d;
            n = a(n, i, r, f, e[0], 3614090360, 7),
            f = a(f, n, i, r, e[1], 3905402710, 12),
            r = a(r, f, n, i, e[2], 606105819, 17),
            i = a(i, r, f, n, e[3], 3250441966, 22),
            n = a(n, i, r, f, e[4], 4118548399, 7),
            f = a(f, n, i, r, e[5], 1200080426, 12),
            r = a(r, f, n, i, e[6], 2821735955, 17),
            i = a(i, r, f, n, e[7], 4249261313, 22),
            n = a(n, i, r, f, e[8], 1770035416, 7),
            f = a(f, n, i, r, e[9], 2336552879, 12),
            r = a(r, f, n, i, e[10], 4294925233, 17),
            i = a(i, r, f, n, e[11], 2304563134, 22),
            n = a(n, i, r, f, e[12], 1804603682, 7),
            f = a(f, n, i, r, e[13], 4254626195, 12),
            r = a(r, f, n, i, e[14], 2792965006, 17),
            i = a(i, r, f, n, e[15], 1236535329, 22),
            n = o(n, i, r, f, e[1], 4129170786, 5),
            f = o(f, n, i, r, e[6], 3225465664, 9),
            r = o(r, f, n, i, e[11], 643717713, 14),
            i = o(i, r, f, n, e[0], 3921069994, 20),
            n = o(n, i, r, f, e[5], 3593408605, 5),
            f = o(f, n, i, r, e[10], 38016083, 9),
            r = o(r, f, n, i, e[15], 3634488961, 14),
            i = o(i, r, f, n, e[4], 3889429448, 20),
            n = o(n, i, r, f, e[9], 568446438, 5),
            f = o(f, n, i, r, e[14], 3275163606, 9),
            r = o(r, f, n, i, e[3], 4107603335, 14),
            i = o(i, r, f, n, e[8], 1163531501, 20),
            n = o(n, i, r, f, e[13], 2850285829, 5),
            f = o(f, n, i, r, e[2], 4243563512, 9),
            r = o(r, f, n, i, e[7], 1735328473, 14),
            i = o(i, r, f, n, e[12], 2368359562, 20),
            n = s(n, i, r, f, e[5], 4294588738, 4),
            f = s(f, n, i, r, e[8], 2272392833, 11),
            r = s(r, f, n, i, e[11], 1839030562, 16),
            i = s(i, r, f, n, e[14], 4259657740, 23),
            n = s(n, i, r, f, e[1], 2763975236, 4),
            f = s(f, n, i, r, e[4], 1272893353, 11),
            r = s(r, f, n, i, e[7], 4139469664, 16),
            i = s(i, r, f, n, e[10], 3200236656, 23),
            n = s(n, i, r, f, e[13], 681279174, 4),
            f = s(f, n, i, r, e[0], 3936430074, 11),
            r = s(r, f, n, i, e[3], 3572445317, 16),
            i = s(i, r, f, n, e[6], 76029189, 23),
            n = s(n, i, r, f, e[9], 3654602809, 4),
            f = s(f, n, i, r, e[12], 3873151461, 11),
            r = s(r, f, n, i, e[15], 530742520, 16),
            i = s(i, r, f, n, e[2], 3299628645, 23),
            n = c(n, i, r, f, e[0], 4096336452, 6),
            f = c(f, n, i, r, e[7], 1126891415, 10),
            r = c(r, f, n, i, e[14], 2878612391, 15),
            i = c(i, r, f, n, e[5], 4237533241, 21),
            n = c(n, i, r, f, e[12], 1700485571, 6),
            f = c(f, n, i, r, e[3], 2399980690, 10),
            r = c(r, f, n, i, e[10], 4293915773, 15),
            i = c(i, r, f, n, e[1], 2240044497, 21),
            n = c(n, i, r, f, e[8], 1873313359, 6),
            f = c(f, n, i, r, e[15], 4264355552, 10),
            r = c(r, f, n, i, e[6], 2734768916, 15),
            i = c(i, r, f, n, e[13], 1309151649, 21),
            n = c(n, i, r, f, e[4], 4149444226, 6),
            f = c(f, n, i, r, e[11], 3174756917, 10),
            r = c(r, f, n, i, e[2], 718787259, 15),
            i = c(i, r, f, n, e[9], 3951481745, 21),
            this._a = this._a + n | 0,
            this._b = this._b + i | 0,
            this._c = this._c + r | 0,
            this._d = this._d + f | 0
        }
        ,
        i.prototype._digest = function() {
            this._block[this._blockOffset++] = 128,
            this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            this._blockOffset = 0),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
            var e = new t(16);
            return e.writeInt32LE(this._a, 0),
            e.writeInt32LE(this._b, 4),
            e.writeInt32LE(this._c, 8),
            e.writeInt32LE(this._d, 12),
            e
        }
        ,
        e.exports = i
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    function i(e, t, n) {
        u.call(this),
        this._cache = new r,
        this._cipher = new d.AES(t),
        this._prev = f.from(n),
        this._mode = e,
        this._autopadding = !0
    }
    function r() {
        this.cache = f.allocUnsafe(0)
    }
    function a(e, t, n) {
        var r = s[e.toLowerCase()];
        if (!r)
            throw new TypeError("invalid suite type");
        if ("string" == typeof t && (t = f.from(t)),
        t.length !== r.key / 8)
            throw new TypeError("invalid key length " + t.length);
        if ("string" == typeof n && (n = f.from(n)),
        "GCM" !== r.mode && n.length !== r.iv)
            throw new TypeError("invalid iv length " + n.length);
        return "stream" === r.type ? new h(r.module,t,n) : "auth" === r.type ? new c(r.module,t,n) : new i(r.module,t,n)
    }
    function o(e, t) {
        var n = s[e.toLowerCase()];
        if (!n)
            throw new TypeError("invalid suite type");
        var i = l(t, !1, n.key, n.iv);
        return a(e, i.key, i.iv)
    }
    var s = n(107)
      , c = n(171)
      , f = n(3).Buffer
      , h = n(172)
      , u = n(30)
      , d = n(72)
      , l = n(71);
    n(2)(i, u),
    i.prototype._update = function(e) {
        this._cache.add(e);
        for (var t, n, i = []; t = this._cache.get(); )
            n = this._mode.encrypt(this, t),
            i.push(n);
        return f.concat(i)
    }
    ;
    var p = f.alloc(16, 16);
    i.prototype._final = function() {
        var e = this._cache.flush();
        if (this._autopadding)
            return e = this._mode.encrypt(this, e),
            this._cipher.scrub(),
            e;
        if (!e.equals(p))
            throw this._cipher.scrub(),
            new Error("data not multiple of block length")
    }
    ,
    i.prototype.setAutoPadding = function(e) {
        return this._autopadding = !!e,
        this
    }
    ,
    r.prototype.add = function(e) {
        this.cache = f.concat([this.cache, e])
    }
    ,
    r.prototype.get = function() {
        if (this.cache.length > 15) {
            var e = this.cache.slice(0, 16);
            return this.cache = this.cache.slice(16),
            e
        }
        return null
    }
    ,
    r.prototype.flush = function() {
        for (var e = 16 - this.cache.length, t = f.allocUnsafe(e), n = -1; ++n < e; )
            t.writeUInt8(e, n);
        return f.concat([this.cache, t])
    }
    ,
    t.createCipheriv = a,
    t.createCipher = o
}
, function(e, t) {
    t.encrypt = function(e, t) {
        return e._cipher.encryptBlock(t)
    }
    ,
    t.decrypt = function(e, t) {
        return e._cipher.decryptBlock(t)
    }
}
, function(e, t, n) {
    var i = n(55);
    t.encrypt = function(e, t) {
        var n = i(t, e._prev);
        return e._prev = e._cipher.encryptBlock(n),
        e._prev
    }
    ,
    t.decrypt = function(e, t) {
        var n = e._prev;
        e._prev = t;
        var r = e._cipher.decryptBlock(t);
        return i(r, n)
    }
}
, function(e, t, n) {
    function i(e, t, n) {
        var i = t.length
          , o = a(t, e._cache);
        return e._cache = e._cache.slice(i),
        e._prev = r.concat([e._prev, n ? t : o]),
        o
    }
    var r = n(3).Buffer
      , a = n(55);
    t.encrypt = function(e, t, n) {
        for (var a, o = r.allocUnsafe(0); t.length; ) {
            if (0 === e._cache.length && (e._cache = e._cipher.encryptBlock(e._prev),
            e._prev = r.allocUnsafe(0)),
            !(e._cache.length <= t.length)) {
                o = r.concat([o, i(e, t, n)]);
                break
            }
            a = e._cache.length,
            o = r.concat([o, i(e, t.slice(0, a), n)]),
            t = t.slice(a)
        }
        return o
    }
}
, function(e, t, n) {
    function i(e, t, n) {
        var i = e._cipher.encryptBlock(e._prev)
          , a = i[0] ^ t;
        return e._prev = r.concat([e._prev.slice(1), r.from([n ? t : a])]),
        a
    }
    var r = n(3).Buffer;
    t.encrypt = function(e, t, n) {
        for (var a = t.length, o = r.allocUnsafe(a), s = -1; ++s < a; )
            o[s] = i(e, t[s], n);
        return o
    }
}
, function(e, t, n) {
    function i(e, t, n) {
        for (var i, a, o, s = -1, c = 0; ++s < 8; )
            i = e._cipher.encryptBlock(e._prev),
            a = t & 1 << 7 - s ? 128 : 0,
            o = i[0] ^ a,
            c += (128 & o) >> s % 8,
            e._prev = r(e._prev, n ? a : o);
        return c
    }
    function r(e, t) {
        var n = e.length
          , i = -1
          , r = a.allocUnsafe(e.length);
        for (e = a.concat([e, a.from([t])]); ++i < n; )
            r[i] = e[i] << 1 | e[i + 1] >> 7;
        return r
    }
    var a = n(3).Buffer;
    t.encrypt = function(e, t, n) {
        for (var r = t.length, o = a.allocUnsafe(r), s = -1; ++s < r; )
            o[s] = i(e, t[s], n);
        return o
    }
}
, function(e, t, n) {
    (function(e) {
        function i(e) {
            return e._prev = e._cipher.encryptBlock(e._prev),
            e._prev
        }
        var r = n(55);
        t.encrypt = function(t, n) {
            for (; t._cache.length < n.length; )
                t._cache = e.concat([t._cache, i(t)]);
            var a = t._cache.slice(0, n.length);
            return t._cache = t._cache.slice(n.length),
            r(n, a)
        }
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    function i(e) {
        return [e.readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)]
    }
    function r(e) {
        var t = o.allocUnsafe(16);
        return t.writeUInt32BE(e[0] >>> 0, 0),
        t.writeUInt32BE(e[1] >>> 0, 4),
        t.writeUInt32BE(e[2] >>> 0, 8),
        t.writeUInt32BE(e[3] >>> 0, 12),
        t
    }
    function a(e) {
        this.h = e,
        this.state = o.alloc(16, 0),
        this.cache = o.allocUnsafe(0)
    }
    var o = n(3).Buffer
      , s = o.alloc(16, 0);
    a.prototype.ghash = function(e) {
        for (var t = -1; ++t < e.length; )
            this.state[t] ^= e[t];
        this._multiply()
    }
    ,
    a.prototype._multiply = function() {
        for (var e, t, n, a = i(this.h), o = [0, 0, 0, 0], s = -1; ++s < 128; ) {
            for (t = 0 != (this.state[~~(s / 8)] & 1 << 7 - s % 8),
            t && (o[0] ^= a[0],
            o[1] ^= a[1],
            o[2] ^= a[2],
            o[3] ^= a[3]),
            n = 0 != (1 & a[3]),
            e = 3; e > 0; e--)
                a[e] = a[e] >>> 1 | (1 & a[e - 1]) << 31;
            a[0] = a[0] >>> 1,
            n && (a[0] = a[0] ^ 225 << 24)
        }
        this.state = r(o)
    }
    ,
    a.prototype.update = function(e) {
        this.cache = o.concat([this.cache, e]);
        for (var t; this.cache.length >= 16; )
            t = this.cache.slice(0, 16),
            this.cache = this.cache.slice(16),
            this.ghash(t)
    }
    ,
    a.prototype.final = function(e, t) {
        return this.cache.length && this.ghash(o.concat([this.cache, s], 16)),
        this.ghash(r([0, e, 0, t])),
        this.state
    }
    ,
    e.exports = a
}
, function(e, t, n) {
    function i(e, t, n) {
        d.call(this),
        this._cache = new r,
        this._last = void 0,
        this._cipher = new l.AES(t),
        this._prev = f.from(n),
        this._mode = e,
        this._autopadding = !0
    }
    function r() {
        this.cache = f.allocUnsafe(0)
    }
    function a(e) {
        for (var t = e[15], n = -1; ++n < t; )
            if (e[n + (16 - t)] !== t)
                throw new Error("unable to decrypt data");
        if (16 !== t)
            return e.slice(0, 16 - t)
    }
    function o(e, t, n) {
        var r = h[e.toLowerCase()];
        if (!r)
            throw new TypeError("invalid suite type");
        if ("string" == typeof n && (n = f.from(n)),
        "GCM" !== r.mode && n.length !== r.iv)
            throw new TypeError("invalid iv length " + n.length);
        if ("string" == typeof t && (t = f.from(t)),
        t.length !== r.key / 8)
            throw new TypeError("invalid key length " + t.length);
        return "stream" === r.type ? new u(r.module,t,n,!0) : "auth" === r.type ? new c(r.module,t,n,!0) : new i(r.module,t,n)
    }
    function s(e, t) {
        var n = h[e.toLowerCase()];
        if (!n)
            throw new TypeError("invalid suite type");
        var i = p(t, !1, n.key, n.iv);
        return o(e, i.key, i.iv)
    }
    var c = n(171)
      , f = n(3).Buffer
      , h = n(107)
      , u = n(172)
      , d = n(30)
      , l = n(72)
      , p = n(71);
    n(2)(i, d),
    i.prototype._update = function(e) {
        this._cache.add(e);
        for (var t, n, i = []; t = this._cache.get(this._autopadding); )
            n = this._mode.decrypt(this, t),
            i.push(n);
        return f.concat(i)
    }
    ,
    i.prototype._final = function() {
        var e = this._cache.flush();
        if (this._autopadding)
            return a(this._mode.decrypt(this, e));
        if (e)
            throw new Error("data not multiple of block length")
    }
    ,
    i.prototype.setAutoPadding = function(e) {
        return this._autopadding = !!e,
        this
    }
    ,
    r.prototype.add = function(e) {
        this.cache = f.concat([this.cache, e])
    }
    ,
    r.prototype.get = function(e) {
        var t;
        if (e) {
            if (this.cache.length > 16)
                return t = this.cache.slice(0, 16),
                this.cache = this.cache.slice(16),
                t
        } else if (this.cache.length >= 16)
            return t = this.cache.slice(0, 16),
            this.cache = this.cache.slice(16),
            t;
        return null
    }
    ,
    r.prototype.flush = function() {
        if (this.cache.length)
            return this.cache
    }
    ,
    t.createDecipher = s,
    t.createDecipheriv = o
}
, function(e, t, n) {
    (function(t) {
        function i(e) {
            r.call(this);
            var n, i = e.mode.toLowerCase(), a = s[i];
            n = e.decrypt ? "decrypt" : "encrypt";
            var o = e.key;
            "des-ede" !== i && "des-ede-cbc" !== i || (o = t.concat([o, o.slice(0, 8)]));
            var c = e.iv;
            this._des = a.create({
                key: o,
                iv: c,
                type: n
            })
        }
        var r = n(30)
          , a = n(108)
          , o = n(2)
          , s = {
            "des-ede3-cbc": a.CBC.instantiate(a.EDE),
            "des-ede3": a.EDE,
            "des-ede-cbc": a.CBC.instantiate(a.EDE),
            "des-ede": a.EDE,
            "des-cbc": a.CBC.instantiate(a.DES),
            "des-ecb": a.DES
        };
        s.des = s["des-cbc"],
        s.des3 = s["des-ede3-cbc"],
        e.exports = i,
        o(i, r),
        i.prototype._update = function(e) {
            return new t(this._des.update(e))
        }
        ,
        i.prototype._final = function() {
            return new t(this._des.final())
        }
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    "use strict";
    t.readUInt32BE = function(e, t) {
        return (e[0 + t] << 24 | e[1 + t] << 16 | e[2 + t] << 8 | e[3 + t]) >>> 0
    }
    ,
    t.writeUInt32BE = function(e, t, n) {
        e[0 + n] = t >>> 24,
        e[1 + n] = t >>> 16 & 255,
        e[2 + n] = t >>> 8 & 255,
        e[3 + n] = 255 & t
    }
    ,
    t.ip = function(e, t, n, i) {
        for (var r = 0, a = 0, o = 6; o >= 0; o -= 2) {
            for (var s = 0; s <= 24; s += 8)
                r <<= 1,
                r |= t >>> s + o & 1;
            for (var s = 0; s <= 24; s += 8)
                r <<= 1,
                r |= e >>> s + o & 1
        }
        for (var o = 6; o >= 0; o -= 2) {
            for (var s = 1; s <= 25; s += 8)
                a <<= 1,
                a |= t >>> s + o & 1;
            for (var s = 1; s <= 25; s += 8)
                a <<= 1,
                a |= e >>> s + o & 1
        }
        n[i + 0] = r >>> 0,
        n[i + 1] = a >>> 0
    }
    ,
    t.rip = function(e, t, n, i) {
        for (var r = 0, a = 0, o = 0; o < 4; o++)
            for (var s = 24; s >= 0; s -= 8)
                r <<= 1,
                r |= t >>> s + o & 1,
                r <<= 1,
                r |= e >>> s + o & 1;
        for (var o = 4; o < 8; o++)
            for (var s = 24; s >= 0; s -= 8)
                a <<= 1,
                a |= t >>> s + o & 1,
                a <<= 1,
                a |= e >>> s + o & 1;
        n[i + 0] = r >>> 0,
        n[i + 1] = a >>> 0
    }
    ,
    t.pc1 = function(e, t, n, i) {
        for (var r = 0, a = 0, o = 7; o >= 5; o--) {
            for (var s = 0; s <= 24; s += 8)
                r <<= 1,
                r |= t >> s + o & 1;
            for (var s = 0; s <= 24; s += 8)
                r <<= 1,
                r |= e >> s + o & 1
        }
        for (var s = 0; s <= 24; s += 8)
            r <<= 1,
            r |= t >> s + o & 1;
        for (var o = 1; o <= 3; o++) {
            for (var s = 0; s <= 24; s += 8)
                a <<= 1,
                a |= t >> s + o & 1;
            for (var s = 0; s <= 24; s += 8)
                a <<= 1,
                a |= e >> s + o & 1
        }
        for (var s = 0; s <= 24; s += 8)
            a <<= 1,
            a |= e >> s + o & 1;
        n[i + 0] = r >>> 0,
        n[i + 1] = a >>> 0
    }
    ,
    t.r28shl = function(e, t) {
        return e << t & 268435455 | e >>> 28 - t
    }
    ;
    var i = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
    t.pc2 = function(e, t, n, r) {
        for (var a = 0, o = 0, s = i.length >>> 1, c = 0; c < s; c++)
            a <<= 1,
            a |= e >>> i[c] & 1;
        for (var c = s; c < i.length; c++)
            o <<= 1,
            o |= t >>> i[c] & 1;
        n[r + 0] = a >>> 0,
        n[r + 1] = o >>> 0
    }
    ,
    t.expand = function(e, t, n) {
        var i = 0
          , r = 0;
        i = (1 & e) << 5 | e >>> 27;
        for (var a = 23; a >= 15; a -= 4)
            i <<= 6,
            i |= e >>> a & 63;
        for (var a = 11; a >= 3; a -= 4)
            r |= e >>> a & 63,
            r <<= 6;
        r |= (31 & e) << 1 | e >>> 31,
        t[n + 0] = i >>> 0,
        t[n + 1] = r >>> 0
    }
    ;
    var r = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
    t.substitute = function(e, t) {
        for (var n = 0, i = 0; i < 4; i++) {
            var a = e >>> 18 - 6 * i & 63
              , o = r[64 * i + a];
            n <<= 4,
            n |= o
        }
        for (var i = 0; i < 4; i++) {
            var a = t >>> 18 - 6 * i & 63
              , o = r[256 + 64 * i + a];
            n <<= 4,
            n |= o
        }
        return n >>> 0
    }
    ;
    var a = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
    t.permute = function(e) {
        for (var t = 0, n = 0; n < a.length; n++)
            t <<= 1,
            t |= e >>> a[n] & 1;
        return t >>> 0
    }
    ,
    t.padSplit = function(e, t, n) {
        for (var i = e.toString(2); i.length < t; )
            i = "0" + i;
        for (var r = [], a = 0; a < t; a += n)
            r.push(i.slice(a, a + n));
        return r.join(" ")
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        this.options = e,
        this.type = this.options.type,
        this.blockSize = 8,
        this._init(),
        this.buffer = new Array(this.blockSize),
        this.bufferOff = 0
    }
    var r = n(20);
    e.exports = i,
    i.prototype._init = function() {}
    ,
    i.prototype.update = function(e) {
        return 0 === e.length ? [] : "decrypt" === this.type ? this._updateDecrypt(e) : this._updateEncrypt(e)
    }
    ,
    i.prototype._buffer = function(e, t) {
        for (var n = Math.min(this.buffer.length - this.bufferOff, e.length - t), i = 0; i < n; i++)
            this.buffer[this.bufferOff + i] = e[t + i];
        return this.bufferOff += n,
        n
    }
    ,
    i.prototype._flushBuffer = function(e, t) {
        return this._update(this.buffer, 0, e, t),
        this.bufferOff = 0,
        this.blockSize
    }
    ,
    i.prototype._updateEncrypt = function(e) {
        var t = 0
          , n = 0
          , i = (this.bufferOff + e.length) / this.blockSize | 0
          , r = new Array(i * this.blockSize);
        0 !== this.bufferOff && (t += this._buffer(e, t),
        this.bufferOff === this.buffer.length && (n += this._flushBuffer(r, n)));
        for (var a = e.length - (e.length - t) % this.blockSize; t < a; t += this.blockSize)
            this._update(e, t, r, n),
            n += this.blockSize;
        for (; t < e.length; t++,
        this.bufferOff++)
            this.buffer[this.bufferOff] = e[t];
        return r
    }
    ,
    i.prototype._updateDecrypt = function(e) {
        for (var t = 0, n = 0, i = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, r = new Array(i * this.blockSize); i > 0; i--)
            t += this._buffer(e, t),
            n += this._flushBuffer(r, n);
        return t += this._buffer(e, t),
        r
    }
    ,
    i.prototype.final = function(e) {
        var t;
        e && (t = this.update(e));
        var n;
        return n = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(),
        t ? t.concat(n) : n
    }
    ,
    i.prototype._pad = function(e, t) {
        if (0 === t)
            return !1;
        for (; t < e.length; )
            e[t++] = 0;
        return !0
    }
    ,
    i.prototype._finalEncrypt = function() {
        if (!this._pad(this.buffer, this.bufferOff))
            return [];
        var e = new Array(this.blockSize);
        return this._update(this.buffer, 0, e, 0),
        e
    }
    ,
    i.prototype._unpad = function(e) {
        return e
    }
    ,
    i.prototype._finalDecrypt = function() {
        r.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
        var e = new Array(this.blockSize);
        return this._flushBuffer(e, 0),
        this._unpad(e)
    }
}
, function(e, t, n) {
    "use strict";
    function i() {
        this.tmp = new Array(2),
        this.keys = null
    }
    function r(e) {
        f.call(this, e);
        var t = new i;
        this._desState = t,
        this.deriveKeys(t, e.key)
    }
    var a = n(20)
      , o = n(2)
      , s = n(108)
      , c = s.utils
      , f = s.Cipher;
    o(r, f),
    e.exports = r,
    r.create = function(e) {
        return new r(e)
    }
    ;
    var h = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    r.prototype.deriveKeys = function(e, t) {
        e.keys = new Array(32),
        a.equal(t.length, this.blockSize, "Invalid key length");
        var n = c.readUInt32BE(t, 0)
          , i = c.readUInt32BE(t, 4);
        c.pc1(n, i, e.tmp, 0),
        n = e.tmp[0],
        i = e.tmp[1];
        for (var r = 0; r < e.keys.length; r += 2) {
            var o = h[r >>> 1];
            n = c.r28shl(n, o),
            i = c.r28shl(i, o),
            c.pc2(n, i, e.keys, r)
        }
    }
    ,
    r.prototype._update = function(e, t, n, i) {
        var r = this._desState
          , a = c.readUInt32BE(e, t)
          , o = c.readUInt32BE(e, t + 4);
        c.ip(a, o, r.tmp, 0),
        a = r.tmp[0],
        o = r.tmp[1],
        "encrypt" === this.type ? this._encrypt(r, a, o, r.tmp, 0) : this._decrypt(r, a, o, r.tmp, 0),
        a = r.tmp[0],
        o = r.tmp[1],
        c.writeUInt32BE(n, a, i),
        c.writeUInt32BE(n, o, i + 4)
    }
    ,
    r.prototype._pad = function(e, t) {
        for (var n = e.length - t, i = t; i < e.length; i++)
            e[i] = n;
        return !0
    }
    ,
    r.prototype._unpad = function(e) {
        for (var t = e[e.length - 1], n = e.length - t; n < e.length; n++)
            a.equal(e[n], t);
        return e.slice(0, e.length - t)
    }
    ,
    r.prototype._encrypt = function(e, t, n, i, r) {
        for (var a = t, o = n, s = 0; s < e.keys.length; s += 2) {
            var f = e.keys[s]
              , h = e.keys[s + 1];
            c.expand(o, e.tmp, 0),
            f ^= e.tmp[0],
            h ^= e.tmp[1];
            var u = c.substitute(f, h)
              , d = c.permute(u)
              , l = o;
            o = (a ^ d) >>> 0,
            a = l
        }
        c.rip(o, a, i, r)
    }
    ,
    r.prototype._decrypt = function(e, t, n, i, r) {
        for (var a = n, o = t, s = e.keys.length - 2; s >= 0; s -= 2) {
            var f = e.keys[s]
              , h = e.keys[s + 1];
            c.expand(a, e.tmp, 0),
            f ^= e.tmp[0],
            h ^= e.tmp[1];
            var u = c.substitute(f, h)
              , d = c.permute(u)
              , l = a;
            a = (o ^ d) >>> 0,
            o = l
        }
        c.rip(a, o, i, r)
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        a.equal(e.length, 8, "Invalid IV length"),
        this.iv = new Array(8);
        for (var t = 0; t < this.iv.length; t++)
            this.iv[t] = e[t]
    }
    function r(e) {
        function t(t) {
            e.call(this, t),
            this._cbcInit()
        }
        o(t, e);
        for (var n = Object.keys(s), i = 0; i < n.length; i++) {
            var r = n[i];
            t.prototype[r] = s[r]
        }
        return t.create = function(e) {
            return new t(e)
        }
        ,
        t
    }
    var a = n(20)
      , o = n(2)
      , s = {};
    t.instantiate = r,
    s._cbcInit = function() {
        var e = new i(this.options.iv);
        this._cbcState = e
    }
    ,
    s._update = function(e, t, n, i) {
        var r = this._cbcState
          , a = this.constructor.super_.prototype
          , o = r.iv;
        if ("encrypt" === this.type) {
            for (var s = 0; s < this.blockSize; s++)
                o[s] ^= e[t + s];
            a._update.call(this, o, 0, n, i);
            for (var s = 0; s < this.blockSize; s++)
                o[s] = n[i + s]
        } else {
            a._update.call(this, e, t, n, i);
            for (var s = 0; s < this.blockSize; s++)
                n[i + s] ^= o[s];
            for (var s = 0; s < this.blockSize; s++)
                o[s] = e[t + s]
        }
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        a.equal(t.length, 24, "Invalid key length");
        var n = t.slice(0, 8)
          , i = t.slice(8, 16)
          , r = t.slice(16, 24);
        this.ciphers = "encrypt" === e ? [f.create({
            type: "encrypt",
            key: n
        }), f.create({
            type: "decrypt",
            key: i
        }), f.create({
            type: "encrypt",
            key: r
        })] : [f.create({
            type: "decrypt",
            key: r
        }), f.create({
            type: "encrypt",
            key: i
        }), f.create({
            type: "decrypt",
            key: n
        })]
    }
    function r(e) {
        c.call(this, e);
        var t = new i(this.type,this.options.key);
        this._edeState = t
    }
    var a = n(20)
      , o = n(2)
      , s = n(108)
      , c = s.Cipher
      , f = s.DES;
    o(r, c),
    e.exports = r,
    r.create = function(e) {
        return new r(e)
    }
    ,
    r.prototype._update = function(e, t, n, i) {
        var r = this._edeState;
        r.ciphers[0]._update(e, t, n, i),
        r.ciphers[1]._update(n, i, n, i),
        r.ciphers[2]._update(n, i, n, i)
    }
    ,
    r.prototype._pad = f.prototype._pad,
    r.prototype._unpad = f.prototype._unpad
}
, function(e, t) {
    t["des-ecb"] = {
        key: 8,
        iv: 0
    },
    t["des-cbc"] = t.des = {
        key: 8,
        iv: 8
    },
    t["des-ede3-cbc"] = t.des3 = {
        key: 24,
        iv: 8
    },
    t["des-ede3"] = {
        key: 24,
        iv: 0
    },
    t["des-ede-cbc"] = {
        key: 16,
        iv: 8
    },
    t["des-ede"] = {
        key: 16,
        iv: 0
    }
}
, function(e, t, n) {
    (function(e) {
        function i(t) {
            var n = new e(o[t].prime,"hex")
              , i = new e(o[t].gen,"hex");
            return new s(n,i)
        }
        function r(t, n, i, o) {
            return e.isBuffer(n) || void 0 === c[n] ? r(t, "binary", n, i) : (n = n || "binary",
            o = o || "binary",
            i = i || new e([2]),
            e.isBuffer(i) || (i = new e(i,o)),
            "number" == typeof t ? new s(a(t, i),i,!0) : (e.isBuffer(t) || (t = new e(t,n)),
            new s(t,i,!0)))
        }
        var a = n(173)
          , o = n(560)
          , s = n(561)
          , c = {
            binary: !0,
            hex: !0,
            base64: !0
        };
        t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = i,
        t.createDiffieHellman = t.DiffieHellman = r
    }
    ).call(t, n(4).Buffer)
}
, function(e, t) {}
, function(e, t) {}
, function(e, t) {
    e.exports = {
        modp1: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
        },
        modp2: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
        },
        modp5: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
        },
        modp14: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
        },
        modp15: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
        },
        modp16: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
        },
        modp17: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
        },
        modp18: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
        }
    }
}
, function(e, t, n) {
    (function(t) {
        function i(e, n) {
            return n = n || "utf8",
            t.isBuffer(e) || (e = new t(e,n)),
            this._pub = new c(e),
            this
        }
        function r(e, n) {
            return n = n || "utf8",
            t.isBuffer(e) || (e = new t(e,n)),
            this._priv = new c(e),
            this
        }
        function a(e, t) {
            var n = t.toString("hex")
              , i = [n, e.toString(16)].join("_");
            if (i in m)
                return m[i];
            var r = 0;
            if (e.isEven() || !v.simpleSieve || !v.fermatTest(e) || !h.test(e))
                return r += 1,
                r += "02" === n || "05" === n ? 8 : 4,
                m[i] = r,
                r;
            h.test(e.shrn(1)) || (r += 2);
            var a;
            switch (n) {
            case "02":
                e.mod(u).cmp(d) && (r += 8);
                break;
            case "05":
                a = e.mod(l),
                a.cmp(p) && a.cmp(b) && (r += 8);
                break;
            default:
                r += 4
            }
            return m[i] = r,
            r
        }
        function o(e, t, n) {
            this.setGenerator(t),
            this.__prime = new c(e),
            this._prime = c.mont(this.__prime),
            this._primeLen = e.length,
            this._pub = void 0,
            this._priv = void 0,
            this._primeCode = void 0,
            n ? (this.setPublicKey = i,
            this.setPrivateKey = r) : this._primeCode = 8
        }
        function s(e, n) {
            var i = new t(e.toArray());
            return n ? i.toString(n) : i
        }
        var c = n(7)
          , f = n(174)
          , h = new f
          , u = new c(24)
          , d = new c(11)
          , l = new c(10)
          , p = new c(3)
          , b = new c(7)
          , v = n(173)
          , y = n(40);
        e.exports = o;
        var m = {};
        Object.defineProperty(o.prototype, "verifyError", {
            enumerable: !0,
            get: function() {
                return "number" != typeof this._primeCode && (this._primeCode = a(this.__prime, this.__gen)),
                this._primeCode
            }
        }),
        o.prototype.generateKeys = function() {
            return this._priv || (this._priv = new c(y(this._primeLen))),
            this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(),
            this.getPublicKey()
        }
        ,
        o.prototype.computeSecret = function(e) {
            e = new c(e),
            e = e.toRed(this._prime);
            var n = e.redPow(this._priv).fromRed()
              , i = new t(n.toArray())
              , r = this.getPrime();
            if (i.length < r.length) {
                var a = new t(r.length - i.length);
                a.fill(0),
                i = t.concat([a, i])
            }
            return i
        }
        ,
        o.prototype.getPublicKey = function(e) {
            return s(this._pub, e)
        }
        ,
        o.prototype.getPrivateKey = function(e) {
            return s(this._priv, e)
        }
        ,
        o.prototype.getPrime = function(e) {
            return s(this.__prime, e)
        }
        ,
        o.prototype.getGenerator = function(e) {
            return s(this._gen, e)
        }
        ,
        o.prototype.setGenerator = function(e, n) {
            return n = n || "utf8",
            t.isBuffer(e) || (e = new t(e,n)),
            this.__gen = e,
            this._gen = new c(e),
            this
        }
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    (function(t) {
        function i(e) {
            c.Writable.call(this);
            var t = d[e];
            if (!t)
                throw new Error("Unknown message digest");
            this._hashType = t.hash,
            this._hash = s(t.hash),
            this._tag = t.id,
            this._signType = t.sign
        }
        function r(e) {
            c.Writable.call(this);
            var t = d[e];
            if (!t)
                throw new Error("Unknown message digest");
            this._hash = s(t.hash),
            this._tag = t.id,
            this._signType = t.sign
        }
        function a(e) {
            return new i(e)
        }
        function o(e) {
            return new r(e)
        }
        var s = n(54)
          , c = n(104)
          , f = n(2)
          , h = n(563)
          , u = n(599)
          , d = n(163);
        Object.keys(d).forEach(function(e) {
            d[e].id = new t(d[e].id,"hex"),
            d[e.toLowerCase()] = d[e]
        }),
        f(i, c.Writable),
        i.prototype._write = function(e, t, n) {
            this._hash.update(e),
            n()
        }
        ,
        i.prototype.update = function(e, n) {
            return "string" == typeof e && (e = new t(e,n)),
            this._hash.update(e),
            this
        }
        ,
        i.prototype.sign = function(e, t) {
            this.end();
            var n = this._hash.digest()
              , i = h(n, e, this._hashType, this._signType, this._tag);
            return t ? i.toString(t) : i
        }
        ,
        f(r, c.Writable),
        r.prototype._write = function(e, t, n) {
            this._hash.update(e),
            n()
        }
        ,
        r.prototype.update = function(e, n) {
            return "string" == typeof e && (e = new t(e,n)),
            this._hash.update(e),
            this
        }
        ,
        r.prototype.verify = function(e, n, i) {
            "string" == typeof n && (n = new t(n,i)),
            this.end();
            var r = this._hash.digest();
            return u(n, r, e, this._signType, this._tag)
        }
        ,
        e.exports = {
            Sign: a,
            Verify: o,
            createSign: a,
            createVerify: o
        }
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    (function(t) {
        function i(e, n, i, o, s) {
            var c = v(n);
            if (c.curve) {
                if ("ecdsa" !== o && "ecdsa/rsa" !== o)
                    throw new Error("wrong private key type");
                return r(e, c)
            }
            if ("dsa" === c.type) {
                if ("dsa" !== o)
                    throw new Error("wrong private key type");
                return a(e, c, i)
            }
            if ("rsa" !== o && "ecdsa/rsa" !== o)
                throw new Error("wrong private key type");
            e = t.concat([s, e]);
            for (var f = c.modulus.byteLength(), h = [0, 1]; e.length + h.length + 1 < f; )
                h.push(255);
            h.push(0);
            for (var u = -1; ++u < e.length; )
                h.push(e[u]);
            return l(h, c)
        }
        function r(e, n) {
            var i = y[n.curve.join(".")];
            if (!i)
                throw new Error("unknown curve " + n.curve.join("."));
            var r = new p(i)
              , a = r.keyFromPrivate(n.privateKey)
              , o = a.sign(e);
            return new t(o.toDER())
        }
        function a(e, t, n) {
            for (var i, r = t.params.priv_key, a = t.params.p, f = t.params.q, d = t.params.g, l = new b(0), p = c(e, f).mod(f), v = !1, y = s(r, f, e, n); !1 === v; )
                i = h(f, y, n),
                l = u(d, i, a, f),
                v = i.invm(f).imul(p.add(r.mul(l))).mod(f),
                0 === v.cmpn(0) && (v = !1,
                l = new b(0));
            return o(l, v)
        }
        function o(e, n) {
            e = e.toArray(),
            n = n.toArray(),
            128 & e[0] && (e = [0].concat(e)),
            128 & n[0] && (n = [0].concat(n));
            var i = e.length + n.length + 4
              , r = [48, i, 2, e.length];
            return r = r.concat(e, [2, n.length], n),
            new t(r)
        }
        function s(e, n, i, r) {
            if (e = new t(e.toArray()),
            e.length < n.byteLength()) {
                var a = new t(n.byteLength() - e.length);
                a.fill(0),
                e = t.concat([a, e])
            }
            var o = i.length
              , s = f(i, n)
              , c = new t(o);
            c.fill(1);
            var h = new t(o);
            return h.fill(0),
            h = d(r, h).update(c).update(new t([0])).update(e).update(s).digest(),
            c = d(r, h).update(c).digest(),
            h = d(r, h).update(c).update(new t([1])).update(e).update(s).digest(),
            c = d(r, h).update(c).digest(),
            {
                k: h,
                v: c
            }
        }
        function c(e, t) {
            var n = new b(e)
              , i = (e.length << 3) - t.bitLength();
            return i > 0 && n.ishrn(i),
            n
        }
        function f(e, n) {
            e = c(e, n),
            e = e.mod(n);
            var i = new t(e.toArray());
            if (i.length < n.byteLength()) {
                var r = new t(n.byteLength() - i.length);
                r.fill(0),
                i = t.concat([r, i])
            }
            return i
        }
        function h(e, n, i) {
            var r, a;
            do {
                for (r = new t(0); 8 * r.length < e.bitLength(); )
                    n.v = d(i, n.k).update(n.v).digest(),
                    r = t.concat([r, n.v]);
                a = c(r, e),
                n.k = d(i, n.k).update(n.v).update(new t([0])).digest(),
                n.v = d(i, n.k).update(n.v).digest()
            } while (-1 !== a.cmp(e));return a
        }
        function u(e, t, n, i) {
            return e.toRed(b.mont(n)).redPow(t).fromRed().mod(i)
        }
        var d = n(162)
          , l = n(109)
          , p = n(15).ec
          , b = n(7)
          , v = n(74)
          , y = n(184);
        e.exports = i,
        e.exports.getKey = s,
        e.exports.makeKey = h
    }
    ).call(t, n(4).Buffer)
}
, function(e, t) {
    e.exports = {
        _args: [["elliptic@6.4.0", "/Users/shirleyyan/Documents/NOBOOK/BIOLOGY/out/haikoupublic/biologyH5"]],
        _from: "elliptic@6.4.0",
        _id: "elliptic@6.4.0",
        _inBundle: !1,
        _integrity: "sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=",
        _location: "/elliptic",
        _phantomChildren: {},
        _requested: {
            type: "version",
            registry: !0,
            raw: "elliptic@6.4.0",
            name: "elliptic",
            escapedName: "elliptic",
            rawSpec: "6.4.0",
            saveSpec: null,
            fetchSpec: "6.4.0"
        },
        _requiredBy: ["/browserify-sign", "/create-ecdh"],
        _resolved: "http://registry.npm.taobao.org/elliptic/download/elliptic-6.4.0.tgz",
        _spec: "6.4.0",
        _where: "/Users/shirleyyan/Documents/NOBOOK/BIOLOGY/out/haikoupublic/biologyH5",
        author: {
            name: "Fedor Indutny",
            email: "fedor@indutny.com"
        },
        bugs: {
            url: "https://github.com/indutny/elliptic/issues"
        },
        dependencies: {
            "bn.js": "^4.4.0",
            brorand: "^1.0.1",
            "hash.js": "^1.0.0",
            "hmac-drbg": "^1.0.0",
            inherits: "^2.0.1",
            "minimalistic-assert": "^1.0.0",
            "minimalistic-crypto-utils": "^1.0.0"
        },
        description: "EC cryptography",
        devDependencies: {
            brfs: "^1.4.3",
            coveralls: "^2.11.3",
            grunt: "^0.4.5",
            "grunt-browserify": "^5.0.0",
            "grunt-cli": "^1.2.0",
            "grunt-contrib-connect": "^1.0.0",
            "grunt-contrib-copy": "^1.0.0",
            "grunt-contrib-uglify": "^1.0.1",
            "grunt-mocha-istanbul": "^3.0.1",
            "grunt-saucelabs": "^8.6.2",
            istanbul: "^0.4.2",
            jscs: "^2.9.0",
            jshint: "^2.6.0",
            mocha: "^2.1.0"
        },
        files: ["lib"],
        homepage: "https://github.com/indutny/elliptic",
        keywords: ["EC", "Elliptic", "curve", "Cryptography"],
        license: "MIT",
        main: "lib/elliptic.js",
        name: "elliptic",
        repository: {
            type: "git",
            url: "git+ssh://git@github.com/indutny/elliptic.git"
        },
        scripts: {
            jscs: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
            jshint: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
            lint: "npm run jscs && npm run jshint",
            test: "npm run lint && npm run unit",
            unit: "istanbul test _mocha --reporter=spec test/index.js",
            version: "grunt dist && git add dist/"
        },
        version: "6.4.0"
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        for (var n = [], i = 1 << t + 1, r = e.clone(); r.cmpn(1) >= 0; ) {
            var a;
            if (r.isOdd()) {
                var o = r.andln(i - 1);
                a = o > (i >> 1) - 1 ? (i >> 1) - o : o,
                r.isubn(a)
            } else
                a = 0;
            n.push(a);
            for (var s = 0 !== r.cmpn(0) && 0 === r.andln(i - 1) ? t + 1 : 1, c = 1; c < s; c++)
                n.push(0);
            r.iushrn(s)
        }
        return n
    }
    function r(e, t) {
        var n = [[], []];
        e = e.clone(),
        t = t.clone();
        for (var i = 0, r = 0; e.cmpn(-i) > 0 || t.cmpn(-r) > 0; ) {
            var a = e.andln(3) + i & 3
              , o = t.andln(3) + r & 3;
            3 === a && (a = -1),
            3 === o && (o = -1);
            var s;
            if (0 == (1 & a))
                s = 0;
            else {
                var c = e.andln(7) + i & 7;
                s = 3 !== c && 5 !== c || 2 !== o ? a : -a
            }
            n[0].push(s);
            var f;
            if (0 == (1 & o))
                f = 0;
            else {
                var c = t.andln(7) + r & 7;
                f = 3 !== c && 5 !== c || 2 !== a ? o : -o
            }
            n[1].push(f),
            2 * i === s + 1 && (i = 1 - i),
            2 * r === f + 1 && (r = 1 - r),
            e.iushrn(1),
            t.iushrn(1)
        }
        return n
    }
    function a(e, t, n) {
        var i = "_" + t;
        e.prototype[t] = function() {
            return void 0 !== this[i] ? this[i] : this[i] = n.call(this)
        }
    }
    function o(e) {
        return "string" == typeof e ? c.toArray(e, "hex") : e
    }
    function s(e) {
        return new f(e,"hex","le")
    }
    var c = t
      , f = n(7)
      , h = n(20)
      , u = n(176);
    c.assert = h,
    c.toArray = u.toArray,
    c.zero2 = u.zero2,
    c.toHex = u.toHex,
    c.encode = u.encode,
    c.getNAF = i,
    c.getJSF = r,
    c.cachedProperty = a,
    c.parseBytes = o,
    c.intFromLE = s
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        this.type = e,
        this.p = new a(t.p,16),
        this.red = t.prime ? a.red(t.prime) : a.mont(this.p),
        this.zero = new a(0).toRed(this.red),
        this.one = new a(1).toRed(this.red),
        this.two = new a(2).toRed(this.red),
        this.n = t.n && new a(t.n,16),
        this.g = t.g && this.pointFromJSON(t.g, t.gRed),
        this._wnafT1 = new Array(4),
        this._wnafT2 = new Array(4),
        this._wnafT3 = new Array(4),
        this._wnafT4 = new Array(4);
        var n = this.n && this.p.div(this.n);
        !n || n.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0,
        this.redN = this.n.toRed(this.red))
    }
    function r(e, t) {
        this.curve = e,
        this.type = t,
        this.precomputed = null
    }
    var a = n(7)
      , o = n(15)
      , s = o.utils
      , c = s.getNAF
      , f = s.getJSF
      , h = s.assert;
    e.exports = i,
    i.prototype.point = function() {
        throw new Error("Not implemented")
    }
    ,
    i.prototype.validate = function() {
        throw new Error("Not implemented")
    }
    ,
    i.prototype._fixedNafMul = function(e, t) {
        h(e.precomputed);
        var n = e._getDoubles()
          , i = c(t, 1)
          , r = (1 << n.step + 1) - (n.step % 2 == 0 ? 2 : 1);
        r /= 3;
        for (var a = [], o = 0; o < i.length; o += n.step) {
            for (var s = 0, t = o + n.step - 1; t >= o; t--)
                s = (s << 1) + i[t];
            a.push(s)
        }
        for (var f = this.jpoint(null, null, null), u = this.jpoint(null, null, null), d = r; d > 0; d--) {
            for (var o = 0; o < a.length; o++) {
                var s = a[o];
                s === d ? u = u.mixedAdd(n.points[o]) : s === -d && (u = u.mixedAdd(n.points[o].neg()))
            }
            f = f.add(u)
        }
        return f.toP()
    }
    ,
    i.prototype._wnafMul = function(e, t) {
        var n = 4
          , i = e._getNAFPoints(n);
        n = i.wnd;
        for (var r = i.points, a = c(t, n), o = this.jpoint(null, null, null), s = a.length - 1; s >= 0; s--) {
            for (var t = 0; s >= 0 && 0 === a[s]; s--)
                t++;
            if (s >= 0 && t++,
            o = o.dblp(t),
            s < 0)
                break;
            var f = a[s];
            h(0 !== f),
            o = "affine" === e.type ? f > 0 ? o.mixedAdd(r[f - 1 >> 1]) : o.mixedAdd(r[-f - 1 >> 1].neg()) : f > 0 ? o.add(r[f - 1 >> 1]) : o.add(r[-f - 1 >> 1].neg())
        }
        return "affine" === e.type ? o.toP() : o
    }
    ,
    i.prototype._wnafMulAdd = function(e, t, n, i, r) {
        for (var a = this._wnafT1, o = this._wnafT2, s = this._wnafT3, h = 0, u = 0; u < i; u++) {
            var d = t[u]
              , l = d._getNAFPoints(e);
            a[u] = l.wnd,
            o[u] = l.points
        }
        for (var u = i - 1; u >= 1; u -= 2) {
            var p = u - 1
              , b = u;
            if (1 === a[p] && 1 === a[b]) {
                var v = [t[p], null, null, t[b]];
                0 === t[p].y.cmp(t[b].y) ? (v[1] = t[p].add(t[b]),
                v[2] = t[p].toJ().mixedAdd(t[b].neg())) : 0 === t[p].y.cmp(t[b].y.redNeg()) ? (v[1] = t[p].toJ().mixedAdd(t[b]),
                v[2] = t[p].add(t[b].neg())) : (v[1] = t[p].toJ().mixedAdd(t[b]),
                v[2] = t[p].toJ().mixedAdd(t[b].neg()));
                var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3]
                  , m = f(n[p], n[b]);
                h = Math.max(m[0].length, h),
                s[p] = new Array(h),
                s[b] = new Array(h);
                for (var g = 0; g < h; g++) {
                    var w = 0 | m[0][g]
                      , _ = 0 | m[1][g];
                    s[p][g] = y[3 * (w + 1) + (_ + 1)],
                    s[b][g] = 0,
                    o[p] = v
                }
            } else
                s[p] = c(n[p], a[p]),
                s[b] = c(n[b], a[b]),
                h = Math.max(s[p].length, h),
                h = Math.max(s[b].length, h)
        }
        for (var A = this.jpoint(null, null, null), M = this._wnafT4, u = h; u >= 0; u--) {
            for (var E = 0; u >= 0; ) {
                for (var S = !0, g = 0; g < i; g++)
                    M[g] = 0 | s[g][u],
                    0 !== M[g] && (S = !1);
                if (!S)
                    break;
                E++,
                u--
            }
            if (u >= 0 && E++,
            A = A.dblp(E),
            u < 0)
                break;
            for (var g = 0; g < i; g++) {
                var d, x = M[g];
                0 !== x && (x > 0 ? d = o[g][x - 1 >> 1] : x < 0 && (d = o[g][-x - 1 >> 1].neg()),
                A = "affine" === d.type ? A.mixedAdd(d) : A.add(d))
            }
        }
        for (var u = 0; u < i; u++)
            o[u] = null;
        return r ? A : A.toP()
    }
    ,
    i.BasePoint = r,
    r.prototype.eq = function() {
        throw new Error("Not implemented")
    }
    ,
    r.prototype.validate = function() {
        return this.curve.validate(this)
    }
    ,
    i.prototype.decodePoint = function(e, t) {
        e = s.toArray(e, t);
        var n = this.p.byteLength();
        if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * n) {
            6 === e[0] ? h(e[e.length - 1] % 2 == 0) : 7 === e[0] && h(e[e.length - 1] % 2 == 1);
            return this.point(e.slice(1, 1 + n), e.slice(1 + n, 1 + 2 * n))
        }
        if ((2 === e[0] || 3 === e[0]) && e.length - 1 === n)
            return this.pointFromX(e.slice(1, 1 + n), 3 === e[0]);
        throw new Error("Unknown point format")
    }
    ,
    r.prototype.encodeCompressed = function(e) {
        return this.encode(e, !0)
    }
    ,
    r.prototype._encode = function(e) {
        var t = this.curve.p.byteLength()
          , n = this.getX().toArray("be", t);
        return e ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray("be", t))
    }
    ,
    r.prototype.encode = function(e, t) {
        return s.encode(this._encode(t), e)
    }
    ,
    r.prototype.precompute = function(e) {
        if (this.precomputed)
            return this;
        var t = {
            doubles: null,
            naf: null,
            beta: null
        };
        return t.naf = this._getNAFPoints(8),
        t.doubles = this._getDoubles(4, e),
        t.beta = this._getBeta(),
        this.precomputed = t,
        this
    }
    ,
    r.prototype._hasDoubles = function(e) {
        if (!this.precomputed)
            return !1;
        var t = this.precomputed.doubles;
        return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
    }
    ,
    r.prototype._getDoubles = function(e, t) {
        if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
        for (var n = [this], i = this, r = 0; r < t; r += e) {
            for (var a = 0; a < e; a++)
                i = i.dbl();
            n.push(i)
        }
        return {
            step: e,
            points: n
        }
    }
    ,
    r.prototype._getNAFPoints = function(e) {
        if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
        for (var t = [this], n = (1 << e) - 1, i = 1 === n ? null : this.dbl(), r = 1; r < n; r++)
            t[r] = t[r - 1].add(i);
        return {
            wnd: e,
            points: t
        }
    }
    ,
    r.prototype._getBeta = function() {
        return null
    }
    ,
    r.prototype.dblp = function(e) {
        for (var t = this, n = 0; n < e; n++)
            t = t.dbl();
        return t
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        h.call(this, "short", e),
        this.a = new c(e.a,16).toRed(this.red),
        this.b = new c(e.b,16).toRed(this.red),
        this.tinv = this.two.redInvm(),
        this.zeroA = 0 === this.a.fromRed().cmpn(0),
        this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3),
        this.endo = this._getEndomorphism(e),
        this._endoWnafT1 = new Array(4),
        this._endoWnafT2 = new Array(4)
    }
    function r(e, t, n, i) {
        h.BasePoint.call(this, e, "affine"),
        null === t && null === n ? (this.x = null,
        this.y = null,
        this.inf = !0) : (this.x = new c(t,16),
        this.y = new c(n,16),
        i && (this.x.forceRed(this.curve.red),
        this.y.forceRed(this.curve.red)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        this.inf = !1)
    }
    function a(e, t, n, i) {
        h.BasePoint.call(this, e, "jacobian"),
        null === t && null === n && null === i ? (this.x = this.curve.one,
        this.y = this.curve.one,
        this.z = new c(0)) : (this.x = new c(t,16),
        this.y = new c(n,16),
        this.z = new c(i,16)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        this.z.red || (this.z = this.z.toRed(this.curve.red)),
        this.zOne = this.z === this.curve.one
    }
    var o = n(73)
      , s = n(15)
      , c = n(7)
      , f = n(2)
      , h = o.base
      , u = s.utils.assert;
    f(i, h),
    e.exports = i,
    i.prototype._getEndomorphism = function(e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var t, n;
            if (e.beta)
                t = new c(e.beta,16).toRed(this.red);
            else {
                var i = this._getEndoRoots(this.p);
                t = i[0].cmp(i[1]) < 0 ? i[0] : i[1],
                t = t.toRed(this.red)
            }
            if (e.lambda)
                n = new c(e.lambda,16);
            else {
                var r = this._getEndoRoots(this.n);
                0 === this.g.mul(r[0]).x.cmp(this.g.x.redMul(t)) ? n = r[0] : (n = r[1],
                u(0 === this.g.mul(n).x.cmp(this.g.x.redMul(t))))
            }
            var a;
            return a = e.basis ? e.basis.map(function(e) {
                return {
                    a: new c(e.a,16),
                    b: new c(e.b,16)
                }
            }) : this._getEndoBasis(n),
            {
                beta: t,
                lambda: n,
                basis: a
            }
        }
    }
    ,
    i.prototype._getEndoRoots = function(e) {
        var t = e === this.p ? this.red : c.mont(e)
          , n = new c(2).toRed(t).redInvm()
          , i = n.redNeg()
          , r = new c(3).toRed(t).redNeg().redSqrt().redMul(n);
        return [i.redAdd(r).fromRed(), i.redSub(r).fromRed()]
    }
    ,
    i.prototype._getEndoBasis = function(e) {
        for (var t, n, i, r, a, o, s, f, h, u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = e, l = this.n.clone(), p = new c(1), b = new c(0), v = new c(0), y = new c(1), m = 0; 0 !== d.cmpn(0); ) {
            var g = l.div(d);
            f = l.sub(g.mul(d)),
            h = v.sub(g.mul(p));
            var w = y.sub(g.mul(b));
            if (!i && f.cmp(u) < 0)
                t = s.neg(),
                n = p,
                i = f.neg(),
                r = h;
            else if (i && 2 == ++m)
                break;
            s = f,
            l = d,
            d = f,
            v = p,
            p = h,
            y = b,
            b = w
        }
        a = f.neg(),
        o = h;
        var _ = i.sqr().add(r.sqr());
        return a.sqr().add(o.sqr()).cmp(_) >= 0 && (a = t,
        o = n),
        i.negative && (i = i.neg(),
        r = r.neg()),
        a.negative && (a = a.neg(),
        o = o.neg()),
        [{
            a: i,
            b: r
        }, {
            a: a,
            b: o
        }]
    }
    ,
    i.prototype._endoSplit = function(e) {
        var t = this.endo.basis
          , n = t[0]
          , i = t[1]
          , r = i.b.mul(e).divRound(this.n)
          , a = n.b.neg().mul(e).divRound(this.n)
          , o = r.mul(n.a)
          , s = a.mul(i.a)
          , c = r.mul(n.b)
          , f = a.mul(i.b);
        return {
            k1: e.sub(o).sub(s),
            k2: c.add(f).neg()
        }
    }
    ,
    i.prototype.pointFromX = function(e, t) {
        e = new c(e,16),
        e.red || (e = e.toRed(this.red));
        var n = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b)
          , i = n.redSqrt();
        if (0 !== i.redSqr().redSub(n).cmp(this.zero))
            throw new Error("invalid point");
        var r = i.fromRed().isOdd();
        return (t && !r || !t && r) && (i = i.redNeg()),
        this.point(e, i)
    }
    ,
    i.prototype.validate = function(e) {
        if (e.inf)
            return !0;
        var t = e.x
          , n = e.y
          , i = this.a.redMul(t)
          , r = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
        return 0 === n.redSqr().redISub(r).cmpn(0)
    }
    ,
    i.prototype._endoWnafMulAdd = function(e, t, n) {
        for (var i = this._endoWnafT1, r = this._endoWnafT2, a = 0; a < e.length; a++) {
            var o = this._endoSplit(t[a])
              , s = e[a]
              , c = s._getBeta();
            o.k1.negative && (o.k1.ineg(),
            s = s.neg(!0)),
            o.k2.negative && (o.k2.ineg(),
            c = c.neg(!0)),
            i[2 * a] = s,
            i[2 * a + 1] = c,
            r[2 * a] = o.k1,
            r[2 * a + 1] = o.k2
        }
        for (var f = this._wnafMulAdd(1, i, r, 2 * a, n), h = 0; h < 2 * a; h++)
            i[h] = null,
            r[h] = null;
        return f
    }
    ,
    f(r, h.BasePoint),
    i.prototype.point = function(e, t, n) {
        return new r(this,e,t,n)
    }
    ,
    i.prototype.pointFromJSON = function(e, t) {
        return r.fromJSON(this, e, t)
    }
    ,
    r.prototype._getBeta = function() {
        if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta)
                return e.beta;
            var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (e) {
                var n = this.curve
                  , i = function(e) {
                    return n.point(e.x.redMul(n.endo.beta), e.y)
                };
                e.beta = t,
                t.precomputed = {
                    beta: null,
                    naf: e.naf && {
                        wnd: e.naf.wnd,
                        points: e.naf.points.map(i)
                    },
                    doubles: e.doubles && {
                        step: e.doubles.step,
                        points: e.doubles.points.map(i)
                    }
                }
            }
            return t
        }
    }
    ,
    r.prototype.toJSON = function() {
        return this.precomputed ? [this.x, this.y, this.precomputed && {
            doubles: this.precomputed.doubles && {
                step: this.precomputed.doubles.step,
                points: this.precomputed.doubles.points.slice(1)
            },
            naf: this.precomputed.naf && {
                wnd: this.precomputed.naf.wnd,
                points: this.precomputed.naf.points.slice(1)
            }
        }] : [this.x, this.y]
    }
    ,
    r.fromJSON = function(e, t, n) {
        function i(t) {
            return e.point(t[0], t[1], n)
        }
        "string" == typeof t && (t = JSON.parse(t));
        var r = e.point(t[0], t[1], n);
        if (!t[2])
            return r;
        var a = t[2];
        return r.precomputed = {
            beta: null,
            doubles: a.doubles && {
                step: a.doubles.step,
                points: [r].concat(a.doubles.points.map(i))
            },
            naf: a.naf && {
                wnd: a.naf.wnd,
                points: [r].concat(a.naf.points.map(i))
            }
        },
        r
    }
    ,
    r.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
    }
    ,
    r.prototype.isInfinity = function() {
        return this.inf
    }
    ,
    r.prototype.add = function(e) {
        if (this.inf)
            return e;
        if (e.inf)
            return this;
        if (this.eq(e))
            return this.dbl();
        if (this.neg().eq(e))
            return this.curve.point(null, null);
        if (0 === this.x.cmp(e.x))
            return this.curve.point(null, null);
        var t = this.y.redSub(e.y);
        0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
        var n = t.redSqr().redISub(this.x).redISub(e.x)
          , i = t.redMul(this.x.redSub(n)).redISub(this.y);
        return this.curve.point(n, i)
    }
    ,
    r.prototype.dbl = function() {
        if (this.inf)
            return this;
        var e = this.y.redAdd(this.y);
        if (0 === e.cmpn(0))
            return this.curve.point(null, null);
        var t = this.curve.a
          , n = this.x.redSqr()
          , i = e.redInvm()
          , r = n.redAdd(n).redIAdd(n).redIAdd(t).redMul(i)
          , a = r.redSqr().redISub(this.x.redAdd(this.x))
          , o = r.redMul(this.x.redSub(a)).redISub(this.y);
        return this.curve.point(a, o)
    }
    ,
    r.prototype.getX = function() {
        return this.x.fromRed()
    }
    ,
    r.prototype.getY = function() {
        return this.y.fromRed()
    }
    ,
    r.prototype.mul = function(e) {
        return e = new c(e,16),
        this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
    }
    ,
    r.prototype.mulAdd = function(e, t, n) {
        var i = [this, t]
          , r = [e, n];
        return this.curve.endo ? this.curve._endoWnafMulAdd(i, r) : this.curve._wnafMulAdd(1, i, r, 2)
    }
    ,
    r.prototype.jmulAdd = function(e, t, n) {
        var i = [this, t]
          , r = [e, n];
        return this.curve.endo ? this.curve._endoWnafMulAdd(i, r, !0) : this.curve._wnafMulAdd(1, i, r, 2, !0)
    }
    ,
    r.prototype.eq = function(e) {
        return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
    }
    ,
    r.prototype.neg = function(e) {
        if (this.inf)
            return this;
        var t = this.curve.point(this.x, this.y.redNeg());
        if (e && this.precomputed) {
            var n = this.precomputed
              , i = function(e) {
                return e.neg()
            };
            t.precomputed = {
                naf: n.naf && {
                    wnd: n.naf.wnd,
                    points: n.naf.points.map(i)
                },
                doubles: n.doubles && {
                    step: n.doubles.step,
                    points: n.doubles.points.map(i)
                }
            }
        }
        return t
    }
    ,
    r.prototype.toJ = function() {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
    }
    ,
    f(a, h.BasePoint),
    i.prototype.jpoint = function(e, t, n) {
        return new a(this,e,t,n)
    }
    ,
    a.prototype.toP = function() {
        if (this.isInfinity())
            return this.curve.point(null, null);
        var e = this.z.redInvm()
          , t = e.redSqr()
          , n = this.x.redMul(t)
          , i = this.y.redMul(t).redMul(e);
        return this.curve.point(n, i)
    }
    ,
    a.prototype.neg = function() {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
    }
    ,
    a.prototype.add = function(e) {
        if (this.isInfinity())
            return e;
        if (e.isInfinity())
            return this;
        var t = e.z.redSqr()
          , n = this.z.redSqr()
          , i = this.x.redMul(t)
          , r = e.x.redMul(n)
          , a = this.y.redMul(t.redMul(e.z))
          , o = e.y.redMul(n.redMul(this.z))
          , s = i.redSub(r)
          , c = a.redSub(o);
        if (0 === s.cmpn(0))
            return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var f = s.redSqr()
          , h = f.redMul(s)
          , u = i.redMul(f)
          , d = c.redSqr().redIAdd(h).redISub(u).redISub(u)
          , l = c.redMul(u.redISub(d)).redISub(a.redMul(h))
          , p = this.z.redMul(e.z).redMul(s);
        return this.curve.jpoint(d, l, p)
    }
    ,
    a.prototype.mixedAdd = function(e) {
        if (this.isInfinity())
            return e.toJ();
        if (e.isInfinity())
            return this;
        var t = this.z.redSqr()
          , n = this.x
          , i = e.x.redMul(t)
          , r = this.y
          , a = e.y.redMul(t).redMul(this.z)
          , o = n.redSub(i)
          , s = r.redSub(a);
        if (0 === o.cmpn(0))
            return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var c = o.redSqr()
          , f = c.redMul(o)
          , h = n.redMul(c)
          , u = s.redSqr().redIAdd(f).redISub(h).redISub(h)
          , d = s.redMul(h.redISub(u)).redISub(r.redMul(f))
          , l = this.z.redMul(o);
        return this.curve.jpoint(u, d, l)
    }
    ,
    a.prototype.dblp = function(e) {
        if (0 === e)
            return this;
        if (this.isInfinity())
            return this;
        if (!e)
            return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
            for (var t = this, n = 0; n < e; n++)
                t = t.dbl();
            return t
        }
        for (var i = this.curve.a, r = this.curve.tinv, a = this.x, o = this.y, s = this.z, c = s.redSqr().redSqr(), f = o.redAdd(o), n = 0; n < e; n++) {
            var h = a.redSqr()
              , u = f.redSqr()
              , d = u.redSqr()
              , l = h.redAdd(h).redIAdd(h).redIAdd(i.redMul(c))
              , p = a.redMul(u)
              , b = l.redSqr().redISub(p.redAdd(p))
              , v = p.redISub(b)
              , y = l.redMul(v);
            y = y.redIAdd(y).redISub(d);
            var m = f.redMul(s);
            n + 1 < e && (c = c.redMul(d)),
            a = b,
            s = m,
            f = y
        }
        return this.curve.jpoint(a, f.redMul(r), s)
    }
    ,
    a.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
    }
    ,
    a.prototype._zeroDbl = function() {
        var e, t, n;
        if (this.zOne) {
            var i = this.x.redSqr()
              , r = this.y.redSqr()
              , a = r.redSqr()
              , o = this.x.redAdd(r).redSqr().redISub(i).redISub(a);
            o = o.redIAdd(o);
            var s = i.redAdd(i).redIAdd(i)
              , c = s.redSqr().redISub(o).redISub(o)
              , f = a.redIAdd(a);
            f = f.redIAdd(f),
            f = f.redIAdd(f),
            e = c,
            t = s.redMul(o.redISub(c)).redISub(f),
            n = this.y.redAdd(this.y)
        } else {
            var h = this.x.redSqr()
              , u = this.y.redSqr()
              , d = u.redSqr()
              , l = this.x.redAdd(u).redSqr().redISub(h).redISub(d);
            l = l.redIAdd(l);
            var p = h.redAdd(h).redIAdd(h)
              , b = p.redSqr()
              , v = d.redIAdd(d);
            v = v.redIAdd(v),
            v = v.redIAdd(v),
            e = b.redISub(l).redISub(l),
            t = p.redMul(l.redISub(e)).redISub(v),
            n = this.y.redMul(this.z),
            n = n.redIAdd(n)
        }
        return this.curve.jpoint(e, t, n)
    }
    ,
    a.prototype._threeDbl = function() {
        var e, t, n;
        if (this.zOne) {
            var i = this.x.redSqr()
              , r = this.y.redSqr()
              , a = r.redSqr()
              , o = this.x.redAdd(r).redSqr().redISub(i).redISub(a);
            o = o.redIAdd(o);
            var s = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a)
              , c = s.redSqr().redISub(o).redISub(o);
            e = c;
            var f = a.redIAdd(a);
            f = f.redIAdd(f),
            f = f.redIAdd(f),
            t = s.redMul(o.redISub(c)).redISub(f),
            n = this.y.redAdd(this.y)
        } else {
            var h = this.z.redSqr()
              , u = this.y.redSqr()
              , d = this.x.redMul(u)
              , l = this.x.redSub(h).redMul(this.x.redAdd(h));
            l = l.redAdd(l).redIAdd(l);
            var p = d.redIAdd(d);
            p = p.redIAdd(p);
            var b = p.redAdd(p);
            e = l.redSqr().redISub(b),
            n = this.y.redAdd(this.z).redSqr().redISub(u).redISub(h);
            var v = u.redSqr();
            v = v.redIAdd(v),
            v = v.redIAdd(v),
            v = v.redIAdd(v),
            t = l.redMul(p.redISub(e)).redISub(v)
        }
        return this.curve.jpoint(e, t, n)
    }
    ,
    a.prototype._dbl = function() {
        var e = this.curve.a
          , t = this.x
          , n = this.y
          , i = this.z
          , r = i.redSqr().redSqr()
          , a = t.redSqr()
          , o = n.redSqr()
          , s = a.redAdd(a).redIAdd(a).redIAdd(e.redMul(r))
          , c = t.redAdd(t);
        c = c.redIAdd(c);
        var f = c.redMul(o)
          , h = s.redSqr().redISub(f.redAdd(f))
          , u = f.redISub(h)
          , d = o.redSqr();
        d = d.redIAdd(d),
        d = d.redIAdd(d),
        d = d.redIAdd(d);
        var l = s.redMul(u).redISub(d)
          , p = n.redAdd(n).redMul(i);
        return this.curve.jpoint(h, l, p)
    }
    ,
    a.prototype.trpl = function() {
        if (!this.curve.zeroA)
            return this.dbl().add(this);
        var e = this.x.redSqr()
          , t = this.y.redSqr()
          , n = this.z.redSqr()
          , i = t.redSqr()
          , r = e.redAdd(e).redIAdd(e)
          , a = r.redSqr()
          , o = this.x.redAdd(t).redSqr().redISub(e).redISub(i);
        o = o.redIAdd(o),
        o = o.redAdd(o).redIAdd(o),
        o = o.redISub(a);
        var s = o.redSqr()
          , c = i.redIAdd(i);
        c = c.redIAdd(c),
        c = c.redIAdd(c),
        c = c.redIAdd(c);
        var f = r.redIAdd(o).redSqr().redISub(a).redISub(s).redISub(c)
          , h = t.redMul(f);
        h = h.redIAdd(h),
        h = h.redIAdd(h);
        var u = this.x.redMul(s).redISub(h);
        u = u.redIAdd(u),
        u = u.redIAdd(u);
        var d = this.y.redMul(f.redMul(c.redISub(f)).redISub(o.redMul(s)));
        d = d.redIAdd(d),
        d = d.redIAdd(d),
        d = d.redIAdd(d);
        var l = this.z.redAdd(o).redSqr().redISub(n).redISub(s);
        return this.curve.jpoint(u, d, l)
    }
    ,
    a.prototype.mul = function(e, t) {
        return e = new c(e,t),
        this.curve._wnafMul(this, e)
    }
    ,
    a.prototype.eq = function(e) {
        if ("affine" === e.type)
            return this.eq(e.toJ());
        if (this === e)
            return !0;
        var t = this.z.redSqr()
          , n = e.z.redSqr();
        if (0 !== this.x.redMul(n).redISub(e.x.redMul(t)).cmpn(0))
            return !1;
        var i = t.redMul(this.z)
          , r = n.redMul(e.z);
        return 0 === this.y.redMul(r).redISub(e.y.redMul(i)).cmpn(0)
    }
    ,
    a.prototype.eqXToP = function(e) {
        var t = this.z.redSqr()
          , n = e.toRed(this.curve.red).redMul(t);
        if (0 === this.x.cmp(n))
            return !0;
        for (var i = e.clone(), r = this.curve.redN.redMul(t); ; ) {
            if (i.iadd(this.curve.n),
            i.cmp(this.curve.p) >= 0)
                return !1;
            if (n.redIAdd(r),
            0 === this.x.cmp(n))
                return !0
        }
        return !1
    }
    ,
    a.prototype.inspect = function() {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
    }
    ,
    a.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        c.call(this, "mont", e),
        this.a = new o(e.a,16).toRed(this.red),
        this.b = new o(e.b,16).toRed(this.red),
        this.i4 = new o(4).toRed(this.red).redInvm(),
        this.two = new o(2).toRed(this.red),
        this.a24 = this.i4.redMul(this.a.redAdd(this.two))
    }
    function r(e, t, n) {
        c.BasePoint.call(this, e, "projective"),
        null === t && null === n ? (this.x = this.curve.one,
        this.z = this.curve.zero) : (this.x = new o(t,16),
        this.z = new o(n,16),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.z.red || (this.z = this.z.toRed(this.curve.red)))
    }
    var a = n(73)
      , o = n(7)
      , s = n(2)
      , c = a.base
      , f = n(15)
      , h = f.utils;
    s(i, c),
    e.exports = i,
    i.prototype.validate = function(e) {
        var t = e.normalize().x
          , n = t.redSqr()
          , i = n.redMul(t).redAdd(n.redMul(this.a)).redAdd(t);
        return 0 === i.redSqrt().redSqr().cmp(i)
    }
    ,
    s(r, c.BasePoint),
    i.prototype.decodePoint = function(e, t) {
        return this.point(h.toArray(e, t), 1)
    }
    ,
    i.prototype.point = function(e, t) {
        return new r(this,e,t)
    }
    ,
    i.prototype.pointFromJSON = function(e) {
        return r.fromJSON(this, e)
    }
    ,
    r.prototype.precompute = function() {}
    ,
    r.prototype._encode = function() {
        return this.getX().toArray("be", this.curve.p.byteLength())
    }
    ,
    r.fromJSON = function(e, t) {
        return new r(e,t[0],t[1] || e.one)
    }
    ,
    r.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }
    ,
    r.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }
    ,
    r.prototype.dbl = function() {
        var e = this.x.redAdd(this.z)
          , t = e.redSqr()
          , n = this.x.redSub(this.z)
          , i = n.redSqr()
          , r = t.redSub(i)
          , a = t.redMul(i)
          , o = r.redMul(i.redAdd(this.curve.a24.redMul(r)));
        return this.curve.point(a, o)
    }
    ,
    r.prototype.add = function() {
        throw new Error("Not supported on Montgomery curve")
    }
    ,
    r.prototype.diffAdd = function(e, t) {
        var n = this.x.redAdd(this.z)
          , i = this.x.redSub(this.z)
          , r = e.x.redAdd(e.z)
          , a = e.x.redSub(e.z)
          , o = a.redMul(n)
          , s = r.redMul(i)
          , c = t.z.redMul(o.redAdd(s).redSqr())
          , f = t.x.redMul(o.redISub(s).redSqr());
        return this.curve.point(c, f)
    }
    ,
    r.prototype.mul = function(e) {
        for (var t = e.clone(), n = this, i = this.curve.point(null, null), r = this, a = []; 0 !== t.cmpn(0); t.iushrn(1))
            a.push(t.andln(1));
        for (var o = a.length - 1; o >= 0; o--)
            0 === a[o] ? (n = n.diffAdd(i, r),
            i = i.dbl()) : (i = n.diffAdd(i, r),
            n = n.dbl());
        return i
    }
    ,
    r.prototype.mulAdd = function() {
        throw new Error("Not supported on Montgomery curve")
    }
    ,
    r.prototype.jumlAdd = function() {
        throw new Error("Not supported on Montgomery curve")
    }
    ,
    r.prototype.eq = function(e) {
        return 0 === this.getX().cmp(e.getX())
    }
    ,
    r.prototype.normalize = function() {
        return this.x = this.x.redMul(this.z.redInvm()),
        this.z = this.curve.one,
        this
    }
    ,
    r.prototype.getX = function() {
        return this.normalize(),
        this.x.fromRed()
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        this.twisted = 1 != (0 | e.a),
        this.mOneA = this.twisted && -1 == (0 | e.a),
        this.extended = this.mOneA,
        f.call(this, "edwards", e),
        this.a = new s(e.a,16).umod(this.red.m),
        this.a = this.a.toRed(this.red),
        this.c = new s(e.c,16).toRed(this.red),
        this.c2 = this.c.redSqr(),
        this.d = new s(e.d,16).toRed(this.red),
        this.dd = this.d.redAdd(this.d),
        h(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
        this.oneC = 1 == (0 | e.c)
    }
    function r(e, t, n, i, r) {
        f.BasePoint.call(this, e, "projective"),
        null === t && null === n && null === i ? (this.x = this.curve.zero,
        this.y = this.curve.one,
        this.z = this.curve.one,
        this.t = this.curve.zero,
        this.zOne = !0) : (this.x = new s(t,16),
        this.y = new s(n,16),
        this.z = i ? new s(i,16) : this.curve.one,
        this.t = r && new s(r,16),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        this.z.red || (this.z = this.z.toRed(this.curve.red)),
        this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
        this.zOne = this.z === this.curve.one,
        this.curve.extended && !this.t && (this.t = this.x.redMul(this.y),
        this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
    }
    var a = n(73)
      , o = n(15)
      , s = n(7)
      , c = n(2)
      , f = a.base
      , h = o.utils.assert;
    c(i, f),
    e.exports = i,
    i.prototype._mulA = function(e) {
        return this.mOneA ? e.redNeg() : this.a.redMul(e)
    }
    ,
    i.prototype._mulC = function(e) {
        return this.oneC ? e : this.c.redMul(e)
    }
    ,
    i.prototype.jpoint = function(e, t, n, i) {
        return this.point(e, t, n, i)
    }
    ,
    i.prototype.pointFromX = function(e, t) {
        e = new s(e,16),
        e.red || (e = e.toRed(this.red));
        var n = e.redSqr()
          , i = this.c2.redSub(this.a.redMul(n))
          , r = this.one.redSub(this.c2.redMul(this.d).redMul(n))
          , a = i.redMul(r.redInvm())
          , o = a.redSqrt();
        if (0 !== o.redSqr().redSub(a).cmp(this.zero))
            throw new Error("invalid point");
        var c = o.fromRed().isOdd();
        return (t && !c || !t && c) && (o = o.redNeg()),
        this.point(e, o)
    }
    ,
    i.prototype.pointFromY = function(e, t) {
        e = new s(e,16),
        e.red || (e = e.toRed(this.red));
        var n = e.redSqr()
          , i = n.redSub(this.one)
          , r = n.redMul(this.d).redAdd(this.one)
          , a = i.redMul(r.redInvm());
        if (0 === a.cmp(this.zero)) {
            if (t)
                throw new Error("invalid point");
            return this.point(this.zero, e)
        }
        var o = a.redSqrt();
        if (0 !== o.redSqr().redSub(a).cmp(this.zero))
            throw new Error("invalid point");
        return o.isOdd() !== t && (o = o.redNeg()),
        this.point(o, e)
    }
    ,
    i.prototype.validate = function(e) {
        if (e.isInfinity())
            return !0;
        e.normalize();
        var t = e.x.redSqr()
          , n = e.y.redSqr()
          , i = t.redMul(this.a).redAdd(n)
          , r = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(n)));
        return 0 === i.cmp(r)
    }
    ,
    c(r, f.BasePoint),
    i.prototype.pointFromJSON = function(e) {
        return r.fromJSON(this, e)
    }
    ,
    i.prototype.point = function(e, t, n, i) {
        return new r(this,e,t,n,i)
    }
    ,
    r.fromJSON = function(e, t) {
        return new r(e,t[0],t[1],t[2])
    }
    ,
    r.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }
    ,
    r.prototype.isInfinity = function() {
        return 0 === this.x.cmpn(0) && 0 === this.y.cmp(this.z)
    }
    ,
    r.prototype._extDbl = function() {
        var e = this.x.redSqr()
          , t = this.y.redSqr()
          , n = this.z.redSqr();
        n = n.redIAdd(n);
        var i = this.curve._mulA(e)
          , r = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t)
          , a = i.redAdd(t)
          , o = a.redSub(n)
          , s = i.redSub(t)
          , c = r.redMul(o)
          , f = a.redMul(s)
          , h = r.redMul(s)
          , u = o.redMul(a);
        return this.curve.point(c, f, u, h)
    }
    ,
    r.prototype._projDbl = function() {
        var e, t, n, i = this.x.redAdd(this.y).redSqr(), r = this.x.redSqr(), a = this.y.redSqr();
        if (this.curve.twisted) {
            var o = this.curve._mulA(r)
              , s = o.redAdd(a);
            if (this.zOne)
                e = i.redSub(r).redSub(a).redMul(s.redSub(this.curve.two)),
                t = s.redMul(o.redSub(a)),
                n = s.redSqr().redSub(s).redSub(s);
            else {
                var c = this.z.redSqr()
                  , f = s.redSub(c).redISub(c);
                e = i.redSub(r).redISub(a).redMul(f),
                t = s.redMul(o.redSub(a)),
                n = s.redMul(f)
            }
        } else {
            var o = r.redAdd(a)
              , c = this.curve._mulC(this.c.redMul(this.z)).redSqr()
              , f = o.redSub(c).redSub(c);
            e = this.curve._mulC(i.redISub(o)).redMul(f),
            t = this.curve._mulC(o).redMul(r.redISub(a)),
            n = o.redMul(f)
        }
        return this.curve.point(e, t, n)
    }
    ,
    r.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
    }
    ,
    r.prototype._extAdd = function(e) {
        var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x))
          , n = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x))
          , i = this.t.redMul(this.curve.dd).redMul(e.t)
          , r = this.z.redMul(e.z.redAdd(e.z))
          , a = n.redSub(t)
          , o = r.redSub(i)
          , s = r.redAdd(i)
          , c = n.redAdd(t)
          , f = a.redMul(o)
          , h = s.redMul(c)
          , u = a.redMul(c)
          , d = o.redMul(s);
        return this.curve.point(f, h, d, u)
    }
    ,
    r.prototype._projAdd = function(e) {
        var t, n, i = this.z.redMul(e.z), r = i.redSqr(), a = this.x.redMul(e.x), o = this.y.redMul(e.y), s = this.curve.d.redMul(a).redMul(o), c = r.redSub(s), f = r.redAdd(s), h = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(a).redISub(o), u = i.redMul(c).redMul(h);
        return this.curve.twisted ? (t = i.redMul(f).redMul(o.redSub(this.curve._mulA(a))),
        n = c.redMul(f)) : (t = i.redMul(f).redMul(o.redSub(a)),
        n = this.curve._mulC(c).redMul(f)),
        this.curve.point(u, t, n)
    }
    ,
    r.prototype.add = function(e) {
        return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
    }
    ,
    r.prototype.mul = function(e) {
        return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
    }
    ,
    r.prototype.mulAdd = function(e, t, n) {
        return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !1)
    }
    ,
    r.prototype.jmulAdd = function(e, t, n) {
        return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !0)
    }
    ,
    r.prototype.normalize = function() {
        if (this.zOne)
            return this;
        var e = this.z.redInvm();
        return this.x = this.x.redMul(e),
        this.y = this.y.redMul(e),
        this.t && (this.t = this.t.redMul(e)),
        this.z = this.curve.one,
        this.zOne = !0,
        this
    }
    ,
    r.prototype.neg = function() {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
    }
    ,
    r.prototype.getX = function() {
        return this.normalize(),
        this.x.fromRed()
    }
    ,
    r.prototype.getY = function() {
        return this.normalize(),
        this.y.fromRed()
    }
    ,
    r.prototype.eq = function(e) {
        return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
    }
    ,
    r.prototype.eqXToP = function(e) {
        var t = e.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(t))
            return !0;
        for (var n = e.clone(), i = this.curve.redN.redMul(this.z); ; ) {
            if (n.iadd(this.curve.n),
            n.cmp(this.curve.p) >= 0)
                return !1;
            if (t.redIAdd(i),
            0 === this.x.cmp(t))
                return !0
        }
        return !1
    }
    ,
    r.prototype.toP = r.prototype.normalize,
    r.prototype.mixedAdd = r.prototype.add
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        "short" === e.type ? this.curve = new s.curve.short(e) : "edwards" === e.type ? this.curve = new s.curve.edwards(e) : this.curve = new s.curve.mont(e),
        this.g = this.curve.g,
        this.n = this.curve.n,
        this.hash = e.hash,
        c(this.g.validate(), "Invalid curve"),
        c(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
    }
    function r(e, t) {
        Object.defineProperty(a, e, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var n = new i(t);
                return Object.defineProperty(a, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                }),
                n
            }
        })
    }
    var a = t
      , o = n(110)
      , s = n(15)
      , c = s.utils.assert;
    a.PresetCurve = i,
    r("p192", {
        type: "short",
        prime: "p192",
        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
        hash: o.sha256,
        gRed: !1,
        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
    }),
    r("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: o.sha256,
        gRed: !1,
        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
    }),
    r("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: o.sha256,
        gRed: !1,
        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
    }),
    r("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: o.sha384,
        gRed: !1,
        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
    }),
    r("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: o.sha512,
        gRed: !1,
        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
    }),
    r("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: o.sha256,
        gRed: !1,
        g: ["9"]
    }),
    r("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: o.sha256,
        gRed: !1,
        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
    });
    var f;
    try {
        f = n(577)
    } catch (e) {
        f = void 0
    }
    r("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: o.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [{
            a: "3086d221a7d46bcde86c90e49284eb15",
            b: "-e4437ed6010e88286f547fa90abfe4c3"
        }, {
            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
            b: "3086d221a7d46bcde86c90e49284eb15"
        }],
        gRed: !1,
        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", f]
    })
}
, function(e, t, n) {
    "use strict";
    t.sha1 = n(572),
    t.sha224 = n(573),
    t.sha256 = n(178),
    t.sha384 = n(574),
    t.sha512 = n(179)
}
, function(e, t, n) {
    "use strict";
    function i() {
        if (!(this instanceof i))
            return new i;
        u.call(this),
        this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
        this.W = new Array(80)
    }
    var r = n(23)
      , a = n(56)
      , o = n(177)
      , s = r.rotl32
      , c = r.sum32
      , f = r.sum32_5
      , h = o.ft_1
      , u = a.BlockHash
      , d = [1518500249, 1859775393, 2400959708, 3395469782];
    r.inherits(i, u),
    e.exports = i,
    i.blockSize = 512,
    i.outSize = 160,
    i.hmacStrength = 80,
    i.padLength = 64,
    i.prototype._update = function(e, t) {
        for (var n = this.W, i = 0; i < 16; i++)
            n[i] = e[t + i];
        for (; i < n.length; i++)
            n[i] = s(n[i - 3] ^ n[i - 8] ^ n[i - 14] ^ n[i - 16], 1);
        var r = this.h[0]
          , a = this.h[1]
          , o = this.h[2]
          , u = this.h[3]
          , l = this.h[4];
        for (i = 0; i < n.length; i++) {
            var p = ~~(i / 20)
              , b = f(s(r, 5), h(p, a, o, u), l, n[i], d[p]);
            l = u,
            u = o,
            o = s(a, 30),
            a = r,
            r = b
        }
        this.h[0] = c(this.h[0], r),
        this.h[1] = c(this.h[1], a),
        this.h[2] = c(this.h[2], o),
        this.h[3] = c(this.h[3], u),
        this.h[4] = c(this.h[4], l)
    }
    ,
    i.prototype._digest = function(e) {
        return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
    }
}
, function(e, t, n) {
    "use strict";
    function i() {
        if (!(this instanceof i))
            return new i;
        a.call(this),
        this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
    }
    var r = n(23)
      , a = n(178);
    r.inherits(i, a),
    e.exports = i,
    i.blockSize = 512,
    i.outSize = 224,
    i.hmacStrength = 192,
    i.padLength = 64,
    i.prototype._digest = function(e) {
        return "hex" === e ? r.toHex32(this.h.slice(0, 7), "big") : r.split32(this.h.slice(0, 7), "big")
    }
}
, function(e, t, n) {
    "use strict";
    function i() {
        if (!(this instanceof i))
            return new i;
        a.call(this),
        this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
    }
    var r = n(23)
      , a = n(179);
    r.inherits(i, a),
    e.exports = i,
    i.blockSize = 1024,
    i.outSize = 384,
    i.hmacStrength = 192,
    i.padLength = 128,
    i.prototype._digest = function(e) {
        return "hex" === e ? r.toHex32(this.h.slice(0, 12), "big") : r.split32(this.h.slice(0, 12), "big")
    }
}
, function(e, t, n) {
    "use strict";
    function i() {
        if (!(this instanceof i))
            return new i;
        l.call(this),
        this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
        this.endian = "little"
    }
    function r(e, t, n, i) {
        return e <= 15 ? t ^ n ^ i : e <= 31 ? t & n | ~t & i : e <= 47 ? (t | ~n) ^ i : e <= 63 ? t & i | n & ~i : t ^ (n | ~i)
    }
    function a(e) {
        return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838
    }
    function o(e) {
        return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0
    }
    var s = n(23)
      , c = n(56)
      , f = s.rotl32
      , h = s.sum32
      , u = s.sum32_3
      , d = s.sum32_4
      , l = c.BlockHash;
    s.inherits(i, l),
    t.ripemd160 = i,
    i.blockSize = 512,
    i.outSize = 160,
    i.hmacStrength = 192,
    i.padLength = 64,
    i.prototype._update = function(e, t) {
        for (var n = this.h[0], i = this.h[1], s = this.h[2], c = this.h[3], l = this.h[4], m = n, g = i, w = s, _ = c, A = l, M = 0; M < 80; M++) {
            var E = h(f(d(n, r(M, i, s, c), e[p[M] + t], a(M)), v[M]), l);
            n = l,
            l = c,
            c = f(s, 10),
            s = i,
            i = E,
            E = h(f(d(m, r(79 - M, g, w, _), e[b[M] + t], o(M)), y[M]), A),
            m = A,
            A = _,
            _ = f(w, 10),
            w = g,
            g = E
        }
        E = u(this.h[1], s, _),
        this.h[1] = u(this.h[2], c, A),
        this.h[2] = u(this.h[3], l, m),
        this.h[3] = u(this.h[4], n, g),
        this.h[4] = u(this.h[0], i, w),
        this.h[0] = E
    }
    ,
    i.prototype._digest = function(e) {
        return "hex" === e ? s.toHex32(this.h, "little") : s.split32(this.h, "little")
    }
    ;
    var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
      , b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
      , v = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
      , y = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        if (!(this instanceof i))
            return new i(e,t,n);
        this.Hash = e,
        this.blockSize = e.blockSize / 8,
        this.outSize = e.outSize / 8,
        this.inner = null,
        this.outer = null,
        this._init(r.toArray(t, n))
    }
    var r = n(23)
      , a = n(20);
    e.exports = i,
    i.prototype._init = function(e) {
        e.length > this.blockSize && (e = (new this.Hash).update(e).digest()),
        a(e.length <= this.blockSize);
        for (var t = e.length; t < this.blockSize; t++)
            e.push(0);
        for (t = 0; t < e.length; t++)
            e[t] ^= 54;
        for (this.inner = (new this.Hash).update(e),
        t = 0; t < e.length; t++)
            e[t] ^= 106;
        this.outer = (new this.Hash).update(e)
    }
    ,
    i.prototype.update = function(e, t) {
        return this.inner.update(e, t),
        this
    }
    ,
    i.prototype.digest = function(e) {
        return this.outer.update(this.inner.digest()),
        this.outer.digest(e)
    }
}
, function(e, t) {
    e.exports = {
        doubles: {
            step: 4,
            points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
        },
        naf: {
            wnd: 7,
            points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
        }
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        if (!(this instanceof i))
            return new i(e);
        "string" == typeof e && (c(o.curves.hasOwnProperty(e), "Unknown curve " + e),
        e = o.curves[e]),
        e instanceof o.curves.PresetCurve && (e = {
            curve: e
        }),
        this.curve = e.curve.curve,
        this.n = this.curve.n,
        this.nh = this.n.ushrn(1),
        this.g = this.curve.g,
        this.g = e.curve.g,
        this.g.precompute(e.curve.n.bitLength() + 1),
        this.hash = e.hash || e.curve.hash
    }
    var r = n(7)
      , a = n(579)
      , o = n(15)
      , s = o.utils
      , c = s.assert
      , f = n(580)
      , h = n(581);
    e.exports = i,
    i.prototype.keyPair = function(e) {
        return new f(this,e)
    }
    ,
    i.prototype.keyFromPrivate = function(e, t) {
        return f.fromPrivate(this, e, t)
    }
    ,
    i.prototype.keyFromPublic = function(e, t) {
        return f.fromPublic(this, e, t)
    }
    ,
    i.prototype.genKeyPair = function(e) {
        e || (e = {});
        for (var t = new a({
            hash: this.hash,
            pers: e.pers,
            persEnc: e.persEnc || "utf8",
            entropy: e.entropy || o.rand(this.hash.hmacStrength),
            entropyEnc: e.entropy && e.entropyEnc || "utf8",
            nonce: this.n.toArray()
        }), n = this.n.byteLength(), i = this.n.sub(new r(2)); ; ) {
            var s = new r(t.generate(n));
            if (!(s.cmp(i) > 0))
                return s.iaddn(1),
                this.keyFromPrivate(s)
        }
    }
    ,
    i.prototype._truncateToN = function(e, t) {
        var n = 8 * e.byteLength() - this.n.bitLength();
        return n > 0 && (e = e.ushrn(n)),
        !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
    }
    ,
    i.prototype.sign = function(e, t, n, i) {
        "object" == typeof n && (i = n,
        n = null),
        i || (i = {}),
        t = this.keyFromPrivate(t, n),
        e = this._truncateToN(new r(e,16));
        for (var o = this.n.byteLength(), s = t.getPrivate().toArray("be", o), c = e.toArray("be", o), f = new a({
            hash: this.hash,
            entropy: s,
            nonce: c,
            pers: i.pers,
            persEnc: i.persEnc || "utf8"
        }), u = this.n.sub(new r(1)), d = 0; !0; d++) {
            var l = i.k ? i.k(d) : new r(f.generate(this.n.byteLength()));
            if (l = this._truncateToN(l, !0),
            !(l.cmpn(1) <= 0 || l.cmp(u) >= 0)) {
                var p = this.g.mul(l);
                if (!p.isInfinity()) {
                    var b = p.getX()
                      , v = b.umod(this.n);
                    if (0 !== v.cmpn(0)) {
                        var y = l.invm(this.n).mul(v.mul(t.getPrivate()).iadd(e));
                        if (y = y.umod(this.n),
                        0 !== y.cmpn(0)) {
                            var m = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(v) ? 2 : 0);
                            return i.canonical && y.cmp(this.nh) > 0 && (y = this.n.sub(y),
                            m ^= 1),
                            new h({
                                r: v,
                                s: y,
                                recoveryParam: m
                            })
                        }
                    }
                }
            }
        }
    }
    ,
    i.prototype.verify = function(e, t, n, i) {
        e = this._truncateToN(new r(e,16)),
        n = this.keyFromPublic(n, i),
        t = new h(t,"hex");
        var a = t.r
          , o = t.s;
        if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0)
            return !1;
        if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0)
            return !1;
        var s = o.invm(this.n)
          , c = s.mul(e).umod(this.n)
          , f = s.mul(a).umod(this.n);
        if (!this.curve._maxwellTrick) {
            var u = this.g.mulAdd(c, n.getPublic(), f);
            return !u.isInfinity() && 0 === u.getX().umod(this.n).cmp(a)
        }
        var u = this.g.jmulAdd(c, n.getPublic(), f);
        return !u.isInfinity() && u.eqXToP(a)
    }
    ,
    i.prototype.recoverPubKey = function(e, t, n, i) {
        c((3 & n) === n, "The recovery param is more than two bits"),
        t = new h(t,i);
        var a = this.n
          , o = new r(e)
          , s = t.r
          , f = t.s
          , u = 1 & n
          , d = n >> 1;
        if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d)
            throw new Error("Unable to find sencond key candinate");
        s = d ? this.curve.pointFromX(s.add(this.curve.n), u) : this.curve.pointFromX(s, u);
        var l = t.r.invm(a)
          , p = a.sub(o).mul(l).umod(a)
          , b = f.mul(l).umod(a);
        return this.g.mulAdd(p, s, b)
    }
    ,
    i.prototype.getKeyRecoveryParam = function(e, t, n, i) {
        if (t = new h(t,i),
        null !== t.recoveryParam)
            return t.recoveryParam;
        for (var r = 0; r < 4; r++) {
            var a;
            try {
                a = this.recoverPubKey(e, t, r)
            } catch (e) {
                continue
            }
            if (a.eq(n))
                return r
        }
        throw new Error("Unable to find valid recovery factor")
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        if (!(this instanceof i))
            return new i(e);
        this.hash = e.hash,
        this.predResist = !!e.predResist,
        this.outLen = this.hash.outSize,
        this.minEntropy = e.minEntropy || this.hash.hmacStrength,
        this._reseed = null,
        this.reseedInterval = null,
        this.K = null,
        this.V = null;
        var t = a.toArray(e.entropy, e.entropyEnc || "hex")
          , n = a.toArray(e.nonce, e.nonceEnc || "hex")
          , r = a.toArray(e.pers, e.persEnc || "hex");
        o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
        this._init(t, n, r)
    }
    var r = n(110)
      , a = n(176)
      , o = n(20);
    e.exports = i,
    i.prototype._init = function(e, t, n) {
        var i = e.concat(t).concat(n);
        this.K = new Array(this.outLen / 8),
        this.V = new Array(this.outLen / 8);
        for (var r = 0; r < this.V.length; r++)
            this.K[r] = 0,
            this.V[r] = 1;
        this._update(i),
        this._reseed = 1,
        this.reseedInterval = 281474976710656
    }
    ,
    i.prototype._hmac = function() {
        return new r.hmac(this.hash,this.K)
    }
    ,
    i.prototype._update = function(e) {
        var t = this._hmac().update(this.V).update([0]);
        e && (t = t.update(e)),
        this.K = t.digest(),
        this.V = this._hmac().update(this.V).digest(),
        e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(),
        this.V = this._hmac().update(this.V).digest())
    }
    ,
    i.prototype.reseed = function(e, t, n, i) {
        "string" != typeof t && (i = n,
        n = t,
        t = null),
        e = a.toArray(e, t),
        n = a.toArray(n, i),
        o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
        this._update(e.concat(n || [])),
        this._reseed = 1
    }
    ,
    i.prototype.generate = function(e, t, n, i) {
        if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required");
        "string" != typeof t && (i = n,
        n = t,
        t = null),
        n && (n = a.toArray(n, i || "hex"),
        this._update(n));
        for (var r = []; r.length < e; )
            this.V = this._hmac().update(this.V).digest(),
            r = r.concat(this.V);
        var o = r.slice(0, e);
        return this._update(n),
        this._reseed++,
        a.encode(o, t)
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        this.ec = e,
        this.priv = null,
        this.pub = null,
        t.priv && this._importPrivate(t.priv, t.privEnc),
        t.pub && this._importPublic(t.pub, t.pubEnc)
    }
    var r = n(7)
      , a = n(15)
      , o = a.utils
      , s = o.assert;
    e.exports = i,
    i.fromPublic = function(e, t, n) {
        return t instanceof i ? t : new i(e,{
            pub: t,
            pubEnc: n
        })
    }
    ,
    i.fromPrivate = function(e, t, n) {
        return t instanceof i ? t : new i(e,{
            priv: t,
            privEnc: n
        })
    }
    ,
    i.prototype.validate = function() {
        var e = this.getPublic();
        return e.isInfinity() ? {
            result: !1,
            reason: "Invalid public key"
        } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
            result: !0,
            reason: null
        } : {
            result: !1,
            reason: "Public key * N != O"
        } : {
            result: !1,
            reason: "Public key is not a point"
        }
    }
    ,
    i.prototype.getPublic = function(e, t) {
        return "string" == typeof e && (t = e,
        e = null),
        this.pub || (this.pub = this.ec.g.mul(this.priv)),
        t ? this.pub.encode(t, e) : this.pub
    }
    ,
    i.prototype.getPrivate = function(e) {
        return "hex" === e ? this.priv.toString(16, 2) : this.priv
    }
    ,
    i.prototype._importPrivate = function(e, t) {
        this.priv = new r(e,t || 16),
        this.priv = this.priv.umod(this.ec.curve.n)
    }
    ,
    i.prototype._importPublic = function(e, t) {
        if (e.x || e.y)
            return "mont" === this.ec.curve.type ? s(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || s(e.x && e.y, "Need both x and y coordinate"),
            void (this.pub = this.ec.curve.point(e.x, e.y));
        this.pub = this.ec.curve.decodePoint(e, t)
    }
    ,
    i.prototype.derive = function(e) {
        return e.mul(this.priv).getX()
    }
    ,
    i.prototype.sign = function(e, t, n) {
        return this.ec.sign(e, this, t, n)
    }
    ,
    i.prototype.verify = function(e, t) {
        return this.ec.verify(e, t, this)
    }
    ,
    i.prototype.inspect = function() {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (e instanceof i)
            return e;
        this._importDER(e, t) || (u(e.r && e.s, "Signature without r or s"),
        this.r = new c(e.r,16),
        this.s = new c(e.s,16),
        void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
    }
    function r() {
        this.place = 0
    }
    function a(e, t) {
        var n = e[t.place++];
        if (!(128 & n))
            return n;
        for (var i = 15 & n, r = 0, a = 0, o = t.place; a < i; a++,
        o++)
            r <<= 8,
            r |= e[o];
        return t.place = o,
        r
    }
    function o(e) {
        for (var t = 0, n = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < n; )
            t++;
        return 0 === t ? e : e.slice(t)
    }
    function s(e, t) {
        if (t < 128)
            return void e.push(t);
        var n = 1 + (Math.log(t) / Math.LN2 >>> 3);
        for (e.push(128 | n); --n; )
            e.push(t >>> (n << 3) & 255);
        e.push(t)
    }
    var c = n(7)
      , f = n(15)
      , h = f.utils
      , u = h.assert;
    e.exports = i,
    i.prototype._importDER = function(e, t) {
        e = h.toArray(e, t);
        var n = new r;
        if (48 !== e[n.place++])
            return !1;
        if (a(e, n) + n.place !== e.length)
            return !1;
        if (2 !== e[n.place++])
            return !1;
        var i = a(e, n)
          , o = e.slice(n.place, i + n.place);
        if (n.place += i,
        2 !== e[n.place++])
            return !1;
        var s = a(e, n);
        if (e.length !== s + n.place)
            return !1;
        var f = e.slice(n.place, s + n.place);
        return 0 === o[0] && 128 & o[1] && (o = o.slice(1)),
        0 === f[0] && 128 & f[1] && (f = f.slice(1)),
        this.r = new c(o),
        this.s = new c(f),
        this.recoveryParam = null,
        !0
    }
    ,
    i.prototype.toDER = function(e) {
        var t = this.r.toArray()
          , n = this.s.toArray();
        for (128 & t[0] && (t = [0].concat(t)),
        128 & n[0] && (n = [0].concat(n)),
        t = o(t),
        n = o(n); !(n[0] || 128 & n[1]); )
            n = n.slice(1);
        var i = [2];
        s(i, t.length),
        i = i.concat(t),
        i.push(2),
        s(i, n.length);
        var r = i.concat(n)
          , a = [48];
        return s(a, r.length),
        a = a.concat(r),
        h.encode(a, e)
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        if (s("ed25519" === e, "only tested with ed25519 so far"),
        !(this instanceof i))
            return new i(e);
        var e = a.curves[e].curve;
        this.curve = e,
        this.g = e.g,
        this.g.precompute(e.n.bitLength() + 1),
        this.pointClass = e.point().constructor,
        this.encodingLength = Math.ceil(e.n.bitLength() / 8),
        this.hash = r.sha512
    }
    var r = n(110)
      , a = n(15)
      , o = a.utils
      , s = o.assert
      , c = o.parseBytes
      , f = n(583)
      , h = n(584);
    e.exports = i,
    i.prototype.sign = function(e, t) {
        e = c(e);
        var n = this.keyFromSecret(t)
          , i = this.hashInt(n.messagePrefix(), e)
          , r = this.g.mul(i)
          , a = this.encodePoint(r)
          , o = this.hashInt(a, n.pubBytes(), e).mul(n.priv())
          , s = i.add(o).umod(this.curve.n);
        return this.makeSignature({
            R: r,
            S: s,
            Rencoded: a
        })
    }
    ,
    i.prototype.verify = function(e, t, n) {
        e = c(e),
        t = this.makeSignature(t);
        var i = this.keyFromPublic(n)
          , r = this.hashInt(t.Rencoded(), i.pubBytes(), e)
          , a = this.g.mul(t.S());
        return t.R().add(i.pub().mul(r)).eq(a)
    }
    ,
    i.prototype.hashInt = function() {
        for (var e = this.hash(), t = 0; t < arguments.length; t++)
            e.update(arguments[t]);
        return o.intFromLE(e.digest()).umod(this.curve.n)
    }
    ,
    i.prototype.keyFromPublic = function(e) {
        return f.fromPublic(this, e)
    }
    ,
    i.prototype.keyFromSecret = function(e) {
        return f.fromSecret(this, e)
    }
    ,
    i.prototype.makeSignature = function(e) {
        return e instanceof h ? e : new h(this,e)
    }
    ,
    i.prototype.encodePoint = function(e) {
        var t = e.getY().toArray("le", this.encodingLength);
        return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0,
        t
    }
    ,
    i.prototype.decodePoint = function(e) {
        e = o.parseBytes(e);
        var t = e.length - 1
          , n = e.slice(0, t).concat(-129 & e[t])
          , i = 0 != (128 & e[t])
          , r = o.intFromLE(n);
        return this.curve.pointFromY(r, i)
    }
    ,
    i.prototype.encodeInt = function(e) {
        return e.toArray("le", this.encodingLength)
    }
    ,
    i.prototype.decodeInt = function(e) {
        return o.intFromLE(e)
    }
    ,
    i.prototype.isPoint = function(e) {
        return e instanceof this.pointClass
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        this.eddsa = e,
        this._secret = s(t.secret),
        e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = s(t.pub)
    }
    var r = n(15)
      , a = r.utils
      , o = a.assert
      , s = a.parseBytes
      , c = a.cachedProperty;
    i.fromPublic = function(e, t) {
        return t instanceof i ? t : new i(e,{
            pub: t
        })
    }
    ,
    i.fromSecret = function(e, t) {
        return t instanceof i ? t : new i(e,{
            secret: t
        })
    }
    ,
    i.prototype.secret = function() {
        return this._secret
    }
    ,
    c(i, "pubBytes", function() {
        return this.eddsa.encodePoint(this.pub())
    }),
    c(i, "pub", function() {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
    }),
    c(i, "privBytes", function() {
        var e = this.eddsa
          , t = this.hash()
          , n = e.encodingLength - 1
          , i = t.slice(0, e.encodingLength);
        return i[0] &= 248,
        i[n] &= 127,
        i[n] |= 64,
        i
    }),
    c(i, "priv", function() {
        return this.eddsa.decodeInt(this.privBytes())
    }),
    c(i, "hash", function() {
        return this.eddsa.hash().update(this.secret()).digest()
    }),
    c(i, "messagePrefix", function() {
        return this.hash().slice(this.eddsa.encodingLength)
    }),
    i.prototype.sign = function(e) {
        return o(this._secret, "KeyPair can only verify"),
        this.eddsa.sign(e, this)
    }
    ,
    i.prototype.verify = function(e, t) {
        return this.eddsa.verify(e, t, this)
    }
    ,
    i.prototype.getSecret = function(e) {
        return o(this._secret, "KeyPair is public only"),
        a.encode(this.secret(), e)
    }
    ,
    i.prototype.getPublic = function(e) {
        return a.encode(this.pubBytes(), e)
    }
    ,
    e.exports = i
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        this.eddsa = e,
        "object" != typeof t && (t = f(t)),
        Array.isArray(t) && (t = {
            R: t.slice(0, e.encodingLength),
            S: t.slice(e.encodingLength)
        }),
        s(t.R && t.S, "Signature without R or S"),
        e.isPoint(t.R) && (this._R = t.R),
        t.S instanceof r && (this._S = t.S),
        this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded,
        this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
    }
    var r = n(7)
      , a = n(15)
      , o = a.utils
      , s = o.assert
      , c = o.cachedProperty
      , f = o.parseBytes;
    c(i, "S", function() {
        return this.eddsa.decodeInt(this.Sencoded())
    }),
    c(i, "R", function() {
        return this.eddsa.decodePoint(this.Rencoded())
    }),
    c(i, "Rencoded", function() {
        return this.eddsa.encodePoint(this.R())
    }),
    c(i, "Sencoded", function() {
        return this.eddsa.encodeInt(this.S())
    }),
    i.prototype.toBytes = function() {
        return this.Rencoded().concat(this.Sencoded())
    }
    ,
    i.prototype.toHex = function() {
        return o.encode(this.toBytes(), "hex").toUpperCase()
    }
    ,
    e.exports = i
}
, function(e, t, n) {
    "use strict";
    var i = n(57);
    t.certificate = n(596);
    var r = i.define("RSAPrivateKey", function() {
        this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int())
    });
    t.RSAPrivateKey = r;
    var a = i.define("RSAPublicKey", function() {
        this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int())
    });
    t.RSAPublicKey = a;
    var o = i.define("SubjectPublicKeyInfo", function() {
        this.seq().obj(this.key("algorithm").use(s), this.key("subjectPublicKey").bitstr())
    });
    t.PublicKey = o;
    var s = i.define("AlgorithmIdentifier", function() {
        this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional())
    })
      , c = i.define("PrivateKeyInfo", function() {
        this.seq().obj(this.key("version").int(), this.key("algorithm").use(s), this.key("subjectPrivateKey").octstr())
    });
    t.PrivateKey = c;
    var f = i.define("EncryptedPrivateKeyInfo", function() {
        this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
    });
    t.EncryptedPrivateKey = f;
    var h = i.define("DSAPrivateKey", function() {
        this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int())
    });
    t.DSAPrivateKey = h,
    t.DSAparam = i.define("DSAparam", function() {
        this.int()
    });
    var u = i.define("ECPrivateKey", function() {
        this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(d), this.key("publicKey").optional().explicit(1).bitstr())
    });
    t.ECPrivateKey = u;
    var d = i.define("ECParameters", function() {
        this.choice({
            namedCurve: this.objid()
        })
    });
    t.signature = i.define("signature", function() {
        this.seq().obj(this.key("r").int(), this.key("s").int())
    })
}
, function(e, t, n) {
    function i(e, t) {
        this.name = e,
        this.body = t,
        this.decoders = {},
        this.encoders = {}
    }
    var r = n(57)
      , a = n(2);
    t.define = function(e, t) {
        return new i(e,t)
    }
    ,
    i.prototype._createNamed = function(e) {
        var t;
        try {
            t = n(587).runInThisContext("(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})")
        } catch (e) {
            t = function(e) {
                this._initNamed(e)
            }
        }
        return a(t, e),
        t.prototype._initNamed = function(t) {
            e.call(this, t)
        }
        ,
        new t(this)
    }
    ,
    i.prototype._getDecoder = function(e) {
        return e = e || "der",
        this.decoders.hasOwnProperty(e) || (this.decoders[e] = this._createNamed(r.decoders[e])),
        this.decoders[e]
    }
    ,
    i.prototype.decode = function(e, t, n) {
        return this._getDecoder(t).decode(e, n)
    }
    ,
    i.prototype._getEncoder = function(e) {
        return e = e || "der",
        this.encoders.hasOwnProperty(e) || (this.encoders[e] = this._createNamed(r.encoders[e])),
        this.encoders[e]
    }
    ,
    i.prototype.encode = function(e, t, n) {
        return this._getEncoder(t).encode(e, n)
    }
}
, function(module, exports, __webpack_require__) {
    function Context() {}
    var indexOf = __webpack_require__(588)
      , Object_keys = function(e) {
        if (Object.keys)
            return Object.keys(e);
        var t = [];
        for (var n in e)
            t.push(n);
        return t
    }
      , forEach = function(e, t) {
        if (e.forEach)
            return e.forEach(t);
        for (var n = 0; n < e.length; n++)
            t(e[n], n, e)
    }
      , defineProp = function() {
        try {
            return Object.defineProperty({}, "_", {}),
            function(e, t, n) {
                Object.defineProperty(e, t, {
                    writable: !0,
                    enumerable: !1,
                    configurable: !0,
                    value: n
                })
            }
        } catch (e) {
            return function(e, t, n) {
                e[t] = n
            }
        }
    }()
      , globals = ["Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape"];
    Context.prototype = {};
    var Script = exports.Script = function(e) {
        if (!(this instanceof Script))
            return new Script(e);
        this.code = e
    }
    ;
    Script.prototype.runInContext = function(e) {
        if (!(e instanceof Context))
            throw new TypeError("needs a 'context' argument.");
        var t = document.createElement("iframe");
        t.style || (t.style = {}),
        t.style.display = "none",
        document.body.appendChild(t);
        var n = t.contentWindow
          , i = n.eval
          , r = n.execScript;
        !i && r && (r.call(n, "null"),
        i = n.eval),
        forEach(Object_keys(e), function(t) {
            n[t] = e[t]
        }),
        forEach(globals, function(t) {
            e[t] && (n[t] = e[t])
        });
        var a = Object_keys(n)
          , o = i.call(n, this.code);
        return forEach(Object_keys(n), function(t) {
            (t in e || -1 === indexOf(a, t)) && (e[t] = n[t])
        }),
        forEach(globals, function(t) {
            t in e || defineProp(e, t, n[t])
        }),
        document.body.removeChild(t),
        o
    }
    ,
    Script.prototype.runInThisContext = function() {
        return eval(this.code)
    }
    ,
    Script.prototype.runInNewContext = function(e) {
        var t = Script.createContext(e)
          , n = this.runInContext(t);
        return forEach(Object_keys(t), function(n) {
            e[n] = t[n]
        }),
        n
    }
    ,
    forEach(Object_keys(Script.prototype), function(e) {
        exports[e] = Script[e] = function(t) {
            var n = Script(t);
            return n[e].apply(n, [].slice.call(arguments, 1))
        }
    }),
    exports.createScript = function(e) {
        return exports.Script(e)
    }
    ,
    exports.createContext = Script.createContext = function(e) {
        var t = new Context;
        return "object" == typeof e && forEach(Object_keys(e), function(n) {
            t[n] = e[n]
        }),
        t
    }
}
, function(e, t) {
    var n = [].indexOf;
    e.exports = function(e, t) {
        if (n)
            return e.indexOf(t);
        for (var i = 0; i < e.length; ++i)
            if (e[i] === t)
                return i;
        return -1
    }
}
, function(e, t, n) {
    function i(e) {
        this._reporterState = {
            obj: null,
            path: [],
            options: e || {},
            errors: []
        }
    }
    function r(e, t) {
        this.path = e,
        this.rethrow(t)
    }
    var a = n(2);
    t.Reporter = i,
    i.prototype.isError = function(e) {
        return e instanceof r
    }
    ,
    i.prototype.save = function() {
        var e = this._reporterState;
        return {
            obj: e.obj,
            pathLen: e.path.length
        }
    }
    ,
    i.prototype.restore = function(e) {
        var t = this._reporterState;
        t.obj = e.obj,
        t.path = t.path.slice(0, e.pathLen)
    }
    ,
    i.prototype.enterKey = function(e) {
        return this._reporterState.path.push(e)
    }
    ,
    i.prototype.exitKey = function(e) {
        var t = this._reporterState;
        t.path = t.path.slice(0, e - 1)
    }
    ,
    i.prototype.leaveKey = function(e, t, n) {
        var i = this._reporterState;
        this.exitKey(e),
        null !== i.obj && (i.obj[t] = n)
    }
    ,
    i.prototype.path = function() {
        return this._reporterState.path.join("/")
    }
    ,
    i.prototype.enterObject = function() {
        var e = this._reporterState
          , t = e.obj;
        return e.obj = {},
        t
    }
    ,
    i.prototype.leaveObject = function(e) {
        var t = this._reporterState
          , n = t.obj;
        return t.obj = e,
        n
    }
    ,
    i.prototype.error = function(e) {
        var t, n = this._reporterState, i = e instanceof r;
        if (t = i ? e : new r(n.path.map(function(e) {
            return "[" + JSON.stringify(e) + "]"
        }).join(""),e.message || e,e.stack),
        !n.options.partial)
            throw t;
        return i || n.errors.push(t),
        t
    }
    ,
    i.prototype.wrapResult = function(e) {
        var t = this._reporterState;
        return t.options.partial ? {
            result: this.isError(e) ? null : e,
            errors: t.errors
        } : e
    }
    ,
    a(r, Error),
    r.prototype.rethrow = function(e) {
        if (this.message = e + " at: " + (this.path || "(shallow)"),
        Error.captureStackTrace && Error.captureStackTrace(this, r),
        !this.stack)
            try {
                throw new Error(this.message)
            } catch (e) {
                this.stack = e.stack
            }
        return this
    }
}
, function(e, t, n) {
    function i(e, t) {
        var n = {};
        this._baseState = n,
        n.enc = e,
        n.parent = t || null,
        n.children = null,
        n.tag = null,
        n.args = null,
        n.reverseArgs = null,
        n.choice = null,
        n.optional = !1,
        n.any = !1,
        n.obj = !1,
        n.use = null,
        n.useDecoder = null,
        n.key = null,
        n.default = null,
        n.explicit = null,
        n.implicit = null,
        n.contains = null,
        n.parent || (n.children = [],
        this._wrap())
    }
    var r = n(58).Reporter
      , a = n(58).EncoderBuffer
      , o = n(58).DecoderBuffer
      , s = n(20)
      , c = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"]
      , f = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(c)
      , h = ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"];
    e.exports = i;
    var u = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
    i.prototype.clone = function() {
        var e = this._baseState
          , t = {};
        u.forEach(function(n) {
            t[n] = e[n]
        });
        var n = new this.constructor(t.parent);
        return n._baseState = t,
        n
    }
    ,
    i.prototype._wrap = function() {
        var e = this._baseState;
        f.forEach(function(t) {
            this[t] = function() {
                var n = new this.constructor(this);
                return e.children.push(n),
                n[t].apply(n, arguments)
            }
        }, this)
    }
    ,
    i.prototype._init = function(e) {
        var t = this._baseState;
        s(null === t.parent),
        e.call(this),
        t.children = t.children.filter(function(e) {
            return e._baseState.parent === this
        }, this),
        s.equal(t.children.length, 1, "Root node can have only one child")
    }
    ,
    i.prototype._useArgs = function(e) {
        var t = this._baseState
          , n = e.filter(function(e) {
            return e instanceof this.constructor
        }, this);
        e = e.filter(function(e) {
            return !(e instanceof this.constructor)
        }, this),
        0 !== n.length && (s(null === t.children),
        t.children = n,
        n.forEach(function(e) {
            e._baseState.parent = this
        }, this)),
        0 !== e.length && (s(null === t.args),
        t.args = e,
        t.reverseArgs = e.map(function(e) {
            if ("object" != typeof e || e.constructor !== Object)
                return e;
            var t = {};
            return Object.keys(e).forEach(function(n) {
                n == (0 | n) && (n |= 0);
                var i = e[n];
                t[i] = n
            }),
            t
        }))
    }
    ,
    h.forEach(function(e) {
        i.prototype[e] = function() {
            var t = this._baseState;
            throw new Error(e + " not implemented for encoding: " + t.enc)
        }
    }),
    c.forEach(function(e) {
        i.prototype[e] = function() {
            var t = this._baseState
              , n = Array.prototype.slice.call(arguments);
            return s(null === t.tag),
            t.tag = e,
            this._useArgs(n),
            this
        }
    }),
    i.prototype.use = function(e) {
        s(e);
        var t = this._baseState;
        return s(null === t.use),
        t.use = e,
        this
    }
    ,
    i.prototype.optional = function() {
        return this._baseState.optional = !0,
        this
    }
    ,
    i.prototype.def = function(e) {
        var t = this._baseState;
        return s(null === t.default),
        t.default = e,
        t.optional = !0,
        this
    }
    ,
    i.prototype.explicit = function(e) {
        var t = this._baseState;
        return s(null === t.explicit && null === t.implicit),
        t.explicit = e,
        this
    }
    ,
    i.prototype.implicit = function(e) {
        var t = this._baseState;
        return s(null === t.explicit && null === t.implicit),
        t.implicit = e,
        this
    }
    ,
    i.prototype.obj = function() {
        var e = this._baseState
          , t = Array.prototype.slice.call(arguments);
        return e.obj = !0,
        0 !== t.length && this._useArgs(t),
        this
    }
    ,
    i.prototype.key = function(e) {
        var t = this._baseState;
        return s(null === t.key),
        t.key = e,
        this
    }
    ,
    i.prototype.any = function() {
        return this._baseState.any = !0,
        this
    }
    ,
    i.prototype.choice = function(e) {
        var t = this._baseState;
        return s(null === t.choice),
        t.choice = e,
        this._useArgs(Object.keys(e).map(function(t) {
            return e[t]
        })),
        this
    }
    ,
    i.prototype.contains = function(e) {
        var t = this._baseState;
        return s(null === t.use),
        t.contains = e,
        this
    }
    ,
    i.prototype._decode = function(e, t) {
        var n = this._baseState;
        if (null === n.parent)
            return e.wrapResult(n.children[0]._decode(e, t));
        var i = n.default
          , r = !0
          , a = null;
        if (null !== n.key && (a = e.enterKey(n.key)),
        n.optional) {
            var s = null;
            if (null !== n.explicit ? s = n.explicit : null !== n.implicit ? s = n.implicit : null !== n.tag && (s = n.tag),
            null !== s || n.any) {
                if (r = this._peekTag(e, s, n.any),
                e.isError(r))
                    return r
            } else {
                var c = e.save();
                try {
                    null === n.choice ? this._decodeGeneric(n.tag, e, t) : this._decodeChoice(e, t),
                    r = !0
                } catch (e) {
                    r = !1
                }
                e.restore(c)
            }
        }
        var f;
        if (n.obj && r && (f = e.enterObject()),
        r) {
            if (null !== n.explicit) {
                var h = this._decodeTag(e, n.explicit);
                if (e.isError(h))
                    return h;
                e = h
            }
            var u = e.offset;
            if (null === n.use && null === n.choice) {
                if (n.any)
                    var c = e.save();
                var d = this._decodeTag(e, null !== n.implicit ? n.implicit : n.tag, n.any);
                if (e.isError(d))
                    return d;
                n.any ? i = e.raw(c) : e = d
            }
            if (t && t.track && null !== n.tag && t.track(e.path(), u, e.length, "tagged"),
            t && t.track && null !== n.tag && t.track(e.path(), e.offset, e.length, "content"),
            i = n.any ? i : null === n.choice ? this._decodeGeneric(n.tag, e, t) : this._decodeChoice(e, t),
            e.isError(i))
                return i;
            if (n.any || null !== n.choice || null === n.children || n.children.forEach(function(n) {
                n._decode(e, t)
            }),
            n.contains && ("octstr" === n.tag || "bitstr" === n.tag)) {
                var l = new o(i);
                i = this._getUse(n.contains, e._reporterState.obj)._decode(l, t)
            }
        }
        return n.obj && r && (i = e.leaveObject(f)),
        null === n.key || null === i && !0 !== r ? null !== a && e.exitKey(a) : e.leaveKey(a, n.key, i),
        i
    }
    ,
    i.prototype._decodeGeneric = function(e, t, n) {
        var i = this._baseState;
        return "seq" === e || "set" === e ? null : "seqof" === e || "setof" === e ? this._decodeList(t, e, i.args[0], n) : /str$/.test(e) ? this._decodeStr(t, e, n) : "objid" === e && i.args ? this._decodeObjid(t, i.args[0], i.args[1], n) : "objid" === e ? this._decodeObjid(t, null, null, n) : "gentime" === e || "utctime" === e ? this._decodeTime(t, e, n) : "null_" === e ? this._decodeNull(t, n) : "bool" === e ? this._decodeBool(t, n) : "objDesc" === e ? this._decodeStr(t, e, n) : "int" === e || "enum" === e ? this._decodeInt(t, i.args && i.args[0], n) : null !== i.use ? this._getUse(i.use, t._reporterState.obj)._decode(t, n) : t.error("unknown tag: " + e)
    }
    ,
    i.prototype._getUse = function(e, t) {
        var n = this._baseState;
        return n.useDecoder = this._use(e, t),
        s(null === n.useDecoder._baseState.parent),
        n.useDecoder = n.useDecoder._baseState.children[0],
        n.implicit !== n.useDecoder._baseState.implicit && (n.useDecoder = n.useDecoder.clone(),
        n.useDecoder._baseState.implicit = n.implicit),
        n.useDecoder
    }
    ,
    i.prototype._decodeChoice = function(e, t) {
        var n = this._baseState
          , i = null
          , r = !1;
        return Object.keys(n.choice).some(function(a) {
            var o = e.save()
              , s = n.choice[a];
            try {
                var c = s._decode(e, t);
                if (e.isError(c))
                    return !1;
                i = {
                    type: a,
                    value: c
                },
                r = !0
            } catch (t) {
                return e.restore(o),
                !1
            }
            return !0
        }, this),
        r ? i : e.error("Choice not matched")
    }
    ,
    i.prototype._createEncoderBuffer = function(e) {
        return new a(e,this.reporter)
    }
    ,
    i.prototype._encode = function(e, t, n) {
        var i = this._baseState;
        if (null === i.default || i.default !== e) {
            var r = this._encodeValue(e, t, n);
            if (void 0 !== r && !this._skipDefault(r, t, n))
                return r
        }
    }
    ,
    i.prototype._encodeValue = function(e, t, n) {
        var i = this._baseState;
        if (null === i.parent)
            return i.children[0]._encode(e, t || new r);
        var a = null;
        if (this.reporter = t,
        i.optional && void 0 === e) {
            if (null === i.default)
                return;
            e = i.default
        }
        var o = null
          , s = !1;
        if (i.any)
            a = this._createEncoderBuffer(e);
        else if (i.choice)
            a = this._encodeChoice(e, t);
        else if (i.contains)
            o = this._getUse(i.contains, n)._encode(e, t),
            s = !0;
        else if (i.children)
            o = i.children.map(function(n) {
                if ("null_" === n._baseState.tag)
                    return n._encode(null, t, e);
                if (null === n._baseState.key)
                    return t.error("Child should have a key");
                var i = t.enterKey(n._baseState.key);
                if ("object" != typeof e)
                    return t.error("Child expected, but input is not object");
                var r = n._encode(e[n._baseState.key], t, e);
                return t.leaveKey(i),
                r
            }, this).filter(function(e) {
                return e
            }),
            o = this._createEncoderBuffer(o);
        else if ("seqof" === i.tag || "setof" === i.tag) {
            if (!i.args || 1 !== i.args.length)
                return t.error("Too many args for : " + i.tag);
            if (!Array.isArray(e))
                return t.error("seqof/setof, but data is not Array");
            var c = this.clone();
            c._baseState.implicit = null,
            o = this._createEncoderBuffer(e.map(function(n) {
                var i = this._baseState;
                return this._getUse(i.args[0], e)._encode(n, t)
            }, c))
        } else
            null !== i.use ? a = this._getUse(i.use, n)._encode(e, t) : (o = this._encodePrimitive(i.tag, e),
            s = !0);
        var a;
        if (!i.any && null === i.choice) {
            var f = null !== i.implicit ? i.implicit : i.tag
              , h = null === i.implicit ? "universal" : "context";
            null === f ? null === i.use && t.error("Tag could be omitted only for .use()") : null === i.use && (a = this._encodeComposite(f, s, h, o))
        }
        return null !== i.explicit && (a = this._encodeComposite(i.explicit, !1, "context", a)),
        a
    }
    ,
    i.prototype._encodeChoice = function(e, t) {
        var n = this._baseState
          , i = n.choice[e.type];
        return i || s(!1, e.type + " not found in " + JSON.stringify(Object.keys(n.choice))),
        i._encode(e.value, t)
    }
    ,
    i.prototype._encodePrimitive = function(e, t) {
        var n = this._baseState;
        if (/str$/.test(e))
            return this._encodeStr(t, e);
        if ("objid" === e && n.args)
            return this._encodeObjid(t, n.reverseArgs[0], n.args[1]);
        if ("objid" === e)
            return this._encodeObjid(t, null, null);
        if ("gentime" === e || "utctime" === e)
            return this._encodeTime(t, e);
        if ("null_" === e)
            return this._encodeNull();
        if ("int" === e || "enum" === e)
            return this._encodeInt(t, n.args && n.reverseArgs[0]);
        if ("bool" === e)
            return this._encodeBool(t);
        if ("objDesc" === e)
            return this._encodeStr(t, e);
        throw new Error("Unsupported tag: " + e)
    }
    ,
    i.prototype._isNumstr = function(e) {
        return /^[0-9 ]*$/.test(e)
    }
    ,
    i.prototype._isPrintstr = function(e) {
        return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e)
    }
}
, function(e, t, n) {
    var i = n(181);
    t.tagClass = {
        0: "universal",
        1: "application",
        2: "context",
        3: "private"
    },
    t.tagClassByName = i._reverse(t.tagClass),
    t.tag = {
        0: "end",
        1: "bool",
        2: "int",
        3: "bitstr",
        4: "octstr",
        5: "null_",
        6: "objid",
        7: "objDesc",
        8: "external",
        9: "real",
        10: "enum",
        11: "embed",
        12: "utf8str",
        13: "relativeOid",
        16: "seq",
        17: "set",
        18: "numstr",
        19: "printstr",
        20: "t61str",
        21: "videostr",
        22: "ia5str",
        23: "utctime",
        24: "gentime",
        25: "graphstr",
        26: "iso646str",
        27: "genstr",
        28: "unistr",
        29: "charstr",
        30: "bmpstr"
    },
    t.tagByName = i._reverse(t.tag)
}
, function(e, t, n) {
    var i = t;
    i.der = n(182),
    i.pem = n(593)
}
, function(e, t, n) {
    function i(e) {
        o.call(this, e),
        this.enc = "pem"
    }
    var r = n(2)
      , a = n(4).Buffer
      , o = n(182);
    r(i, o),
    e.exports = i,
    i.prototype.decode = function(e, t) {
        for (var n = e.toString().split(/[\r\n]+/g), i = t.label.toUpperCase(), r = /^-----(BEGIN|END) ([^-]+)-----$/, s = -1, c = -1, f = 0; f < n.length; f++) {
            var h = n[f].match(r);
            if (null !== h && h[2] === i) {
                if (-1 !== s) {
                    if ("END" !== h[1])
                        break;
                    c = f;
                    break
                }
                if ("BEGIN" !== h[1])
                    break;
                s = f
            }
        }
        if (-1 === s || -1 === c)
            throw new Error("PEM section not found for: " + i);
        var u = n.slice(s + 1, c).join("");
        u.replace(/[^a-z0-9\+\/=]+/gi, "");
        var d = new a(u,"base64");
        return o.prototype.decode.call(this, d, t)
    }
}
, function(e, t, n) {
    var i = t;
    i.der = n(183),
    i.pem = n(595)
}
, function(e, t, n) {
    function i(e) {
        a.call(this, e),
        this.enc = "pem"
    }
    var r = n(2)
      , a = n(183);
    r(i, a),
    e.exports = i,
    i.prototype.encode = function(e, t) {
        for (var n = a.prototype.encode.call(this, e), i = n.toString("base64"), r = ["-----BEGIN " + t.label + "-----"], o = 0; o < i.length; o += 64)
            r.push(i.slice(o, o + 64));
        return r.push("-----END " + t.label + "-----"),
        r.join("\n")
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(57)
      , r = i.define("Time", function() {
        this.choice({
            utcTime: this.utctime(),
            generalTime: this.gentime()
        })
    })
      , a = i.define("AttributeTypeValue", function() {
        this.seq().obj(this.key("type").objid(), this.key("value").any())
    })
      , o = i.define("AlgorithmIdentifier", function() {
        this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional())
    })
      , s = i.define("SubjectPublicKeyInfo", function() {
        this.seq().obj(this.key("algorithm").use(o), this.key("subjectPublicKey").bitstr())
    })
      , c = i.define("RelativeDistinguishedName", function() {
        this.setof(a)
    })
      , f = i.define("RDNSequence", function() {
        this.seqof(c)
    })
      , h = i.define("Name", function() {
        this.choice({
            rdnSequence: this.use(f)
        })
    })
      , u = i.define("Validity", function() {
        this.seq().obj(this.key("notBefore").use(r), this.key("notAfter").use(r))
    })
      , d = i.define("Extension", function() {
        this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
    })
      , l = i.define("TBSCertificate", function() {
        this.seq().obj(this.key("version").explicit(0).int(), this.key("serialNumber").int(), this.key("signature").use(o), this.key("issuer").use(h), this.key("validity").use(u), this.key("subject").use(h), this.key("subjectPublicKeyInfo").use(s), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(d).optional())
    })
      , p = i.define("X509Certificate", function() {
        this.seq().obj(this.key("tbsCertificate").use(l), this.key("signatureAlgorithm").use(o), this.key("signatureValue").bitstr())
    });
    e.exports = p
}
, function(e, t) {
    e.exports = {
        "2.16.840.1.101.3.4.1.1": "aes-128-ecb",
        "2.16.840.1.101.3.4.1.2": "aes-128-cbc",
        "2.16.840.1.101.3.4.1.3": "aes-128-ofb",
        "2.16.840.1.101.3.4.1.4": "aes-128-cfb",
        "2.16.840.1.101.3.4.1.21": "aes-192-ecb",
        "2.16.840.1.101.3.4.1.22": "aes-192-cbc",
        "2.16.840.1.101.3.4.1.23": "aes-192-ofb",
        "2.16.840.1.101.3.4.1.24": "aes-192-cfb",
        "2.16.840.1.101.3.4.1.41": "aes-256-ecb",
        "2.16.840.1.101.3.4.1.42": "aes-256-cbc",
        "2.16.840.1.101.3.4.1.43": "aes-256-ofb",
        "2.16.840.1.101.3.4.1.44": "aes-256-cfb"
    }
}
, function(e, t, n) {
    (function(t) {
        var i = /Proc-Type: 4,ENCRYPTED\n\r?DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)\n\r?\n\r?([0-9A-z\n\r\+\/\=]+)\n\r?/m
          , r = /^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----\n/m
          , a = /^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----\n\r?([0-9A-z\n\r\+\/\=]+)\n\r?-----END \1-----$/m
          , o = n(71)
          , s = n(106);
        e.exports = function(e, n) {
            var c, f = e.toString(), h = f.match(i);
            if (h) {
                var u = "aes" + h[1]
                  , d = new t(h[2],"hex")
                  , l = new t(h[3].replace(/\r?\n/g, ""),"base64")
                  , p = o(n, d.slice(0, 8), parseInt(h[1], 10)).key
                  , b = []
                  , v = s.createDecipheriv(u, p, d);
                b.push(v.update(l)),
                b.push(v.final()),
                c = t.concat(b)
            } else {
                var y = f.match(a);
                c = new t(y[2].replace(/\r?\n/g, ""),"base64")
            }
            return {
                tag: f.match(r)[1],
                data: c
            }
        }
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    (function(t) {
        function i(e, n, i, o, c) {
            var h = f(i);
            if ("ec" === h.type) {
                if ("ecdsa" !== o && "ecdsa/rsa" !== o)
                    throw new Error("wrong public key type");
                return r(e, n, h)
            }
            if ("dsa" === h.type) {
                if ("dsa" !== o)
                    throw new Error("wrong public key type");
                return a(e, n, h)
            }
            if ("rsa" !== o && "ecdsa/rsa" !== o)
                throw new Error("wrong public key type");
            n = t.concat([c, n]);
            for (var u = h.modulus.byteLength(), d = [1], l = 0; n.length + d.length + 2 < u; )
                d.push(255),
                l++;
            d.push(0);
            for (var p = -1; ++p < n.length; )
                d.push(n[p]);
            d = new t(d);
            var b = s.mont(h.modulus);
            e = new s(e).toRed(b),
            e = e.redPow(new s(h.publicExponent)),
            e = new t(e.fromRed().toArray());
            var v = l < 8 ? 1 : 0;
            for (u = Math.min(e.length, d.length),
            e.length !== d.length && (v = 1),
            p = -1; ++p < u; )
                v |= e[p] ^ d[p];
            return 0 === v
        }
        function r(e, t, n) {
            var i = h[n.data.algorithm.curve.join(".")];
            if (!i)
                throw new Error("unknown curve " + n.data.algorithm.curve.join("."));
            var r = new c(i)
              , a = n.data.subjectPrivateKey.data;
            return r.verify(t, e, a)
        }
        function a(e, t, n) {
            var i = n.data.p
              , r = n.data.q
              , a = n.data.g
              , c = n.data.pub_key
              , h = f.signature.decode(e, "der")
              , u = h.s
              , d = h.r;
            o(u, r),
            o(d, r);
            var l = s.mont(i)
              , p = u.invm(r);
            return 0 === a.toRed(l).redPow(new s(t).mul(p).mod(r)).fromRed().mul(c.toRed(l).redPow(d.mul(p).mod(r)).fromRed()).mod(i).mod(r).cmp(d)
        }
        function o(e, t) {
            if (e.cmpn(0) <= 0)
                throw new Error("invalid sig");
            if (e.cmp(t) >= t)
                throw new Error("invalid sig")
        }
        var s = n(7)
          , c = n(15).ec
          , f = n(74)
          , h = n(184);
        e.exports = i
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    (function(t) {
        function i(e) {
            this.curveType = s[e],
            this.curveType || (this.curveType = {
                name: e
            }),
            this.curve = new a.ec(this.curveType.name),
            this.keys = void 0
        }
        function r(e, n, i) {
            Array.isArray(e) || (e = e.toArray());
            var r = new t(e);
            if (i && r.length < i) {
                var a = new t(i - r.length);
                a.fill(0),
                r = t.concat([a, r])
            }
            return n ? r.toString(n) : r
        }
        var a = n(15)
          , o = n(7);
        e.exports = function(e) {
            return new i(e)
        }
        ;
        var s = {
            secp256k1: {
                name: "secp256k1",
                byteLength: 32
            },
            secp224r1: {
                name: "p224",
                byteLength: 28
            },
            prime256v1: {
                name: "p256",
                byteLength: 32
            },
            prime192v1: {
                name: "p192",
                byteLength: 24
            },
            ed25519: {
                name: "ed25519",
                byteLength: 32
            },
            secp384r1: {
                name: "p384",
                byteLength: 48
            },
            secp521r1: {
                name: "p521",
                byteLength: 66
            }
        };
        s.p224 = s.secp224r1,
        s.p256 = s.secp256r1 = s.prime256v1,
        s.p192 = s.secp192r1 = s.prime192v1,
        s.p384 = s.secp384r1,
        s.p521 = s.secp521r1,
        i.prototype.generateKeys = function(e, t) {
            return this.keys = this.curve.genKeyPair(),
            this.getPublicKey(e, t)
        }
        ,
        i.prototype.computeSecret = function(e, n, i) {
            return n = n || "utf8",
            t.isBuffer(e) || (e = new t(e,n)),
            r(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(), i, this.curveType.byteLength)
        }
        ,
        i.prototype.getPublicKey = function(e, t) {
            var n = this.keys.getPublic("compressed" === t, !0);
            return "hybrid" === t && (n[n.length - 1] % 2 ? n[0] = 7 : n[0] = 6),
            r(n, e)
        }
        ,
        i.prototype.getPrivateKey = function(e) {
            return r(this.keys.getPrivate(), e)
        }
        ,
        i.prototype.setPublicKey = function(e, n) {
            return n = n || "utf8",
            t.isBuffer(e) || (e = new t(e,n)),
            this.keys._importPublic(e),
            this
        }
        ,
        i.prototype.setPrivateKey = function(e, n) {
            n = n || "utf8",
            t.isBuffer(e) || (e = new t(e,n));
            var i = new o(e);
            return i = i.toString(16),
            this.keys._importPrivate(i),
            this
        }
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    t.publicEncrypt = n(602),
    t.privateDecrypt = n(603),
    t.privateEncrypt = function(e, n) {
        return t.publicEncrypt(e, n, !0)
    }
    ,
    t.publicDecrypt = function(e, n) {
        return t.privateDecrypt(e, n, !0)
    }
}
, function(e, t, n) {
    (function(t) {
        function i(e, n) {
            var i = e.modulus.byteLength()
              , r = n.length
              , a = c("sha1").update(new t("")).digest()
              , o = a.length
              , d = 2 * o;
            if (r > i - d - 2)
                throw new Error("message too long");
            var l = new t(i - r - d - 2);
            l.fill(0);
            var p = i - o - 1
              , b = s(o)
              , v = h(t.concat([a, l, new t([1]), n], p), f(b, p))
              , y = h(b, f(v, o));
            return new u(t.concat([new t([0]), y, v], i))
        }
        function r(e, n, i) {
            var r = n.length
              , o = e.modulus.byteLength();
            if (r > o - 11)
                throw new Error("message too long");
            var s;
            return i ? (s = new t(o - r - 3),
            s.fill(255)) : s = a(o - r - 3),
            new u(t.concat([new t([0, i ? 1 : 2]), s, new t([0]), n], o))
        }
        function a(e, n) {
            for (var i, r = new t(e), a = 0, o = s(2 * e), c = 0; a < e; )
                c === o.length && (o = s(2 * e),
                c = 0),
                (i = o[c++]) && (r[a++] = i);
            return r
        }
        var o = n(74)
          , s = n(40)
          , c = n(54)
          , f = n(185)
          , h = n(186)
          , u = n(7)
          , d = n(187)
          , l = n(109);
        e.exports = function(e, t, n) {
            var a;
            a = e.padding ? e.padding : n ? 1 : 4;
            var s, c = o(e);
            if (4 === a)
                s = i(c, t);
            else if (1 === a)
                s = r(c, t, n);
            else {
                if (3 !== a)
                    throw new Error("unknown padding");
                if (s = new u(t),
                s.cmp(c.modulus) >= 0)
                    throw new Error("data too long for modulus")
            }
            return n ? l(s, c) : d(s, c)
        }
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    (function(t) {
        function i(e, n) {
            var i = (e.modulus,
            e.modulus.byteLength())
              , r = (n.length,
            u("sha1").update(new t("")).digest())
              , o = r.length;
            if (0 !== n[0])
                throw new Error("decryption error");
            var f = n.slice(1, o + 1)
              , h = n.slice(o + 1)
              , d = c(f, s(h, o))
              , l = c(h, s(d, i - o - 1));
            if (a(r, l.slice(0, o)))
                throw new Error("decryption error");
            for (var p = o; 0 === l[p]; )
                p++;
            if (1 !== l[p++])
                throw new Error("decryption error");
            return l.slice(p)
        }
        function r(e, t, n) {
            for (var i = t.slice(0, 2), r = 2, a = 0; 0 !== t[r++]; )
                if (r >= t.length) {
                    a++;
                    break
                }
            var o = t.slice(2, r - 1);
            t.slice(r - 1, r);
            if (("0002" !== i.toString("hex") && !n || "0001" !== i.toString("hex") && n) && a++,
            o.length < 8 && a++,
            a)
                throw new Error("decryption error");
            return t.slice(r)
        }
        function a(e, n) {
            e = new t(e),
            n = new t(n);
            var i = 0
              , r = e.length;
            e.length !== n.length && (i++,
            r = Math.min(e.length, n.length));
            for (var a = -1; ++a < r; )
                i += e[a] ^ n[a];
            return i
        }
        var o = n(74)
          , s = n(185)
          , c = n(186)
          , f = n(7)
          , h = n(109)
          , u = n(54)
          , d = n(187);
        e.exports = function(e, n, a) {
            var s;
            s = e.padding ? e.padding : a ? 1 : 4;
            var c = o(e)
              , u = c.modulus.byteLength();
            if (n.length > u || new f(n).cmp(c.modulus) >= 0)
                throw new Error("decryption error");
            var l;
            l = a ? d(new f(n), c) : h(n, c);
            var p = new t(u - l.length);
            if (p.fill(0),
            l = t.concat([p, l], u),
            4 === s)
                return i(c, l);
            if (1 === s)
                return r(c, l, a);
            if (3 === s)
                return l;
            throw new Error("unknown padding")
        }
    }
    ).call(t, n(4).Buffer)
}
, function(e, t, n) {
    "use strict";
    (function(e, i) {
        function r() {
            throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
        }
        function a(e, t) {
            if ("number" != typeof e || e !== e)
                throw new TypeError("offset must be a number");
            if (e > b || e < 0)
                throw new TypeError("offset must be a uint32");
            if (e > l || e > t)
                throw new RangeError("offset out of range")
        }
        function o(e, t, n) {
            if ("number" != typeof e || e !== e)
                throw new TypeError("size must be a number");
            if (e > b || e < 0)
                throw new TypeError("size must be a uint32");
            if (e + t > n || e > l)
                throw new RangeError("buffer too small")
        }
        function s(t, n, i, r) {
            if (!(d.isBuffer(t) || t instanceof e.Uint8Array))
                throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
            if ("function" == typeof n)
                r = n,
                n = 0,
                i = t.length;
            else if ("function" == typeof i)
                r = i,
                i = t.length - n;
            else if ("function" != typeof r)
                throw new TypeError('"cb" argument must be a function');
            return a(n, t.length),
            o(i, n, t.length),
            c(t, n, i, r)
        }
        function c(e, t, n, r) {
            if (i.browser) {
                var a = e.buffer
                  , o = new Uint8Array(a,t,n);
                return p.getRandomValues(o),
                r ? void i.nextTick(function() {
                    r(null, e)
                }) : e
            }
            return r ? void u(n, function(n, i) {
                if (n)
                    return r(n);
                i.copy(e, t),
                r(null, e)
            }) : (u(n).copy(e, t),
            e)
        }
        function f(t, n, i) {
            if (void 0 === n && (n = 0),
            !(d.isBuffer(t) || t instanceof e.Uint8Array))
                throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
            return a(n, t.length),
            void 0 === i && (i = t.length - n),
            o(i, n, t.length),
            c(t, n, i)
        }
        var h = n(3)
          , u = n(40)
          , d = h.Buffer
          , l = h.kMaxLength
          , p = e.crypto || e.msCrypto
          , b = Math.pow(2, 32) - 1;
        p && p.getRandomValues || !i.browser ? (t.randomFill = s,
        t.randomFillSync = f) : (t.randomFill = r,
        t.randomFillSync = r)
    }
    ).call(t, n(1), n(8))
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        var i = ""
          , r = a.createCipher(e, t);
        return i += r.update(n, "binary", "hex"),
        i += r.final("hex")
    }
    function r(e, t, n) {
        var i = ""
          , r = a.createDecipher(e, t);
        return i += r.update(n, "hex", "binary"),
        i += r.final("binary")
    }
    var a = n(101);
    e.exports = {
        encrypt: i,
        decrypt: r
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        if (void 0 === e)
            throw "请传入type. 如: ConfigLoader.TYPE.PHY 代表物理";
        return s[e] ? new Promise(function(t, n) {
            t(s[e])
        }
        ) : new Promise(function(t, n) {
            var i = new XMLHttpRequest;
            i.onreadystatechange = function(i) {
                if (4 === this.readyState)
                    if (200 === this.status) {
                        var c = JSON.parse(i.target.responseText);
                        if (s[e] = c,
                        c.loginAuth || c.tokenAuth) {
                            try {
                                c.loginAuth = o("aes128", "17D2E2B6297FA", c.loginAuth)
                            } catch (i) {}
                            c.authAction = c.authAction || {},
                            c.auth = function(e) {
                                if (!(e = e || window.$))
                                    throw "请传入jquery, 调用方法 data.auth($)";
                                return new Promise(function(t, n) {
                                    e.ajax({
                                        url: c.loginAuth,
                                        jsonp: "jsoncallback",
                                        dataType: "jsonp",
                                        data: "pid=" + c.pid,
                                        success: function(e) {
                                            e.success ? t(1 !== e.obj.vip ? !1 : !0) : n(e)
                                        },
                                        error: function(e) {
                                            n({
                                                readyState: e.readyState,
                                                status: e.status
                                            })
                                        }
                                    })
                                }
                                )
                            }
                            ,
                            c.autoAuth = function() {
                                c.auth().then(function(e) {
                                    if (e)
                                        return e;
                                    var t;
                                    t = "object" === a(c.authAction.notVip) ? c.authAction.notVip.redirectURL : c.authAction.notVip,
                                    window.location.href = t || "http://www.nobook.com.cn/buy.html"
                                }).catch(function(e) {
                                    if (3018 === e.errcode) {
                                        var t;
                                        t = "object" === a(c.authAction.notLogin) ? c.authAction.notLogin.redirectURL : c.authAction.notLogin,
                                        window.location.href = (t || "http://"+window.location.href+"/?return_url=") + encodeURIComponent(window.location.href)
                                    }
                                    return e
                                })
                            }
                            ,
                            c.tokenAuthCheck = function(e, t) {
                                if (!(t = t || window.$))
                                    throw "请传入jquery, 调用方法 data.auth($)";
                                return new Promise(function(n, i) {
                                    t.ajax({
                                        url: c.tokenAuth,
                                        async: !1,
                                        data: {
                                            pidScope: c.pid,
                                            token: e
                                        },
                                        success: function(e) {
                                            "success" == e.msg ? n(0 === e.data[c.pid].vip ? !1 : !0) : i(e)
                                        },
                                        error: function(e) {
                                            i({
                                                readyState: e.readyState,
                                                status: e.status
                                            })
                                        }
                                    })
                                }
                                )
                            }
                        } else
                            c.autoAuth = c.auth = function() {
                                r("loginAuth")
                            }
                            ,
                            c.tokenAuthCheck = function() {
                                r("tokenAuth")
                            }
                            ;
                        t(c)
                    } else
                        n()
            }
            ,
            i.open("GET", "nbconfig/conf.json", !0),
            i.send()
        }
        )
    }
    function r(e, t) {
        var n = "err";
        switch (t) {
        case 0:
            n = "调用该方法之前需要在nbconfig/conf.json中加入" + e + "配置"
        }
        throw n
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , o = n(607).decrypt
      , s = {}
      , c = {
        PHY: 2,
        CHE: 3,
        BIO_CZ: 0,
        BIO_GZ: 1,
        SCI: 4,
        NB_PHY: 20
    };
    window.nb && (window.nb.ConfigLoader = {
        loadConfig: i,
        TYPE: c
    }),
    e.exports = {
        loadConfig: i,
        TYPE: c
    }
}
, function(e, t, n) {
    function i(e, t, n) {
        var i = ""
          , r = a.createCipher(e, t);
        return i += r.update(n, "binary", "hex"),
        i += r.final("hex")
    }
    function r(e, t, n) {
        var i = ""
          , r = a.createDecipher(e, t);
        return i += r.update(n, "hex", "binary"),
        i += r.final("binary")
    }
    const a = n(101);
    e.exports = {
        encrypt: i,
        decrypt: r
    }
}
, function(e, t, n) {
    "use strict";
    function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = arguments[1];
        switch (e.status) {
        case r.LOW_VERSION:
            t.document.title = "NOBOOK提示：您的浏览器需要更新",
            t.document.body.innerHTML = "\n                <div id='browser'>\n                    <div class='b-title'>\n                        <h2>温馨提示</h2>\n                        NOBOOK使用了先进的HTML5技术，请重新选择一款浏览器。\n                    </div>\n                    <p>您正在使用的浏览器内核版本过低，除了有可能遭受病毒与恶意软件的侵袭之外，也无法体验到优质的NOBOOK实验资源。为保证最佳的浏览效果，我们推荐您选择使用下列最新的优质浏览器：</p>\n                    <div class='downloading'>\n                        <a href='http://www.firefox.com.cn/download/' target='_blank'>\n                            <img src='assetwwws/browser/firefox.jpg' />\n                        </a>\n                        <a href='http://dlsw.baidu.com/sw-search-sp/soft/9d/14744/ChromeStandalone_46.0.2490.86_Setup.1447296650.exe' target='_blank'>\n                            <img src='assets/browser/chrome.jpg' />\n                        </a>\n                        <a href='http://windows.microsoft.com/zh-cn/internet-explorer/ie-11-worldwide-languages/' target='_blank'>\n                            <img src='assets/browser/ie.jpg' />\n                        </a>\n                        <a href='http://dlsw.baidu.com/sw-search-sp/soft/d3/12966/Safari_5.34.57.2.1417745549.exe' target='_blank'>\n                            <img src='assets/browser/safari.jpg' />\n                        </a>\n                    </div>\n                </div>\n            ";
            break;
        case r[404]:
            t.location.herf = "http:\\www.nobook.com.cn\\404"
        }
    }
    var r = {
        404: 1,
        LOW_VERSION: 2
    };
    e.exports = {
        reLocation: i,
        STATUS: r
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , a = void 0;
    t.NBAcquisitionService = function() {
        function e(t) {
            i(this, e),
            a = t ? "" : ""
        }
        return r(e, [{
            key: "getSign",
            value: function() {
                return new Promise(function(e, t) {
                    $.ajax({
                        type: "post",
                        url: a + "/user/sign",
                        dataType: "jsonp",
                        jsonp: "jsonCallback",
                        success: function(t) {
                            return e(t)
                        },
                        error: function(e) {
                            return t(e)
                        }
                    })
                }
                )
            }
        }, {
            key: "getMySign",
            value: function() {
                return new Promise(function(e, t) {
                    $.ajax({
                        type: "post",
                        url: a + "/user/mySign",
                        dataType: "jsonp",
                        jsonp: "jsonCallback",
                        success: function(t) {
                            return e(t)
                        },
                        error: function(e) {
                            return t(e)
                        }
                    })
                }
                )
            }
        }, {
            key: "openExperiment",
            value: function(e) {
                return this.mission("open-experiment", e)
            }
        }, {
            key: "duration",
            value: function(e) {
                return this.mission("experiment-duration", e)
            }
        }, {
            key: "mission",
            value: function(e, t) {
                return new Promise(function(n, i) {
                    $.ajax({
                        contentType: "application/x-www-form-urlencoded",
                        type: "post",
                        url: a + "/integral/mission/do",
                        data: {
                            missionName: e,
                            proid: t
                        },
                        dataType: "jsonp",
                        jsonp: "jsonCallback",
                        success: function(i) {
                            return console.log(i, {
                                missionName: e,
                                proid: t
                            }),
                            n(i)
                        },
                        error: function(e) {
                            return i(e)
                        }
                    })
                }
                )
            }
        }]),
        e
    }()
}
, function(e, t) {
    e.exports = {
        pid: "JuFhE84jRhEh",
        loginAuth: "http://"+window.location.href+"/web/v1/login/auto_check_login",
        authAction: {
            notLogin: {
                redirectURL: "http://"+window.location.href+"/?return_url="
            },
            notVip: {
                redirectURL: "http://www.nobook.com.cn/buy.html"
            }
        },
        tokenAuth: "https://resourceapi.nobook.com/api/v1/vip/info"
    }
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        if (t.BABYLON) {
            var i = n(5);
            BABYLON.DragUtil = n(612),
            BABYLON.RotateUtil = n(613),
            BABYLON.plugins = {
                ObserveWireframe: {
                    command: i.commands.OBSERVE_MESH_BY_FRAME,
                    data: {}
                },
                ObserveAround: {
                    command: i.commands.OBSERVE_MESH_BY_RORATE,
                    data: {}
                }
            },
            BABYLON.RotateHelperMesh = n(614),
            BABYLON.RotateControl = n(616),
            e.exports = {
                BabylonScene: n(618),
                ConstName: i
            }
        } else
            e.exports = {
                addExpressApp: n(653)
            }
    }
    ).call(t, n(1))
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , a = n(5)
      , o = function() {
        function e() {
            i(this, e)
        }
        return r(e, null, [{
            key: "dragOnVector",
            value: function(e, t, n) {}
        }, {
            key: "dragOnPlane",
            value: function(e, t) {
                function n(n) {
                    var i = {
                        x: n.event.clientX,
                        y: n.event.clientY
                    };
                    h = r.createPickingRay(i.x, i.y);
                    var a = h.intersectsMesh(t);
                    if (a.hit) {
                        var o = u.pickedPoint
                          , s = a.pickedPoint
                          , c = void 0;
                        c = e.parent ? e.parent.getWorldMatrix().clone().invert() : BABYLON.Matrix.Identity(),
                        o = BABYLON.Vector3.TransformCoordinates(o, c),
                        s = BABYLON.Vector3.TransformCoordinates(s, c);
                        var f = o.subtract(s);
                        e.position.subtractInPlace(f),
                        u = a
                    }
                }
                function i() {
                    r.onPointerObservable.remove(s),
                    r.onPointerObservable.remove(c),
                    s = c = null,
                    o.execute(a.commands.SET_CAMERA_CONTROL, {
                        enabled: !0
                    })
                }
                t.setEnabled(!1),
                t.isPickable = !1;
                var r = e.getScene()
                  , o = r.babylonScene
                  , s = void 0
                  , c = void 0
                  , f = void 0
                  , h = void 0
                  , u = void 0
                  , d = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger,function(e) {
                    s || (f = {
                        x: e.pointerX,
                        y: e.pointerY
                    },
                    h = r.createPickingRay(f.x, f.y),
                    u = h.intersectsMesh(t),
                    u.hit && (o.execute(a.commands.SET_CAMERA_CONTROL, {
                        enabled: !1
                    }),
                    s = r.onPointerObservable.add(n, BABYLON.PointerEventTypes.POINTERMOVE),
                    c = r.onPointerObservable.add(i, BABYLON.PointerEventTypes.POINTERUP)))
                }
                );
                e.actionManager.registerAction(d)
            }
        }]),
        e
    }();
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , a = n(5)
      , o = function() {
        function e() {
            i(this, e)
        }
        return r(e, null, [{
            key: "addRotate",
            value: function(e, t, n) {
                function i(n) {
                    var i = c.createPickingRay(n.event.clientX, n.event.clientY)
                      , r = i.intersectsMesh(t);
                    if (r.hit) {
                        var a = r.pickedPoint
                          , s = o(a)
                          , f = s - y;
                        f > Math.PI ? f = 2 * -Math.PI + f : f < -Math.PI && (f += 2 * Math.PI);
                        var h = e.rotation[p] - f;
                        void 0 !== b && void 0 !== v && (h < b && (h = b),
                        h > v && (h = v)),
                        e.rotation[p] = h,
                        y = s
                    }
                }
                function r() {
                    c.onPointerObservable.remove(h),
                    c.onPointerObservable.remove(u),
                    h = u = null,
                    f.execute(a.commands.SET_CAMERA_CONTROL, {
                        enabled: !0
                    })
                }
                function o(e) {
                    var n = t.getWorldMatrix().clone().invert()
                      , i = BABYLON.Vector3.TransformCoordinates(e, n);
                    return Math.atan2(i.y - l.y, i.x - l.x)
                }
                function s(n) {
                    var i = e.getWorldMatrix().clone()
                      , r = BABYLON.Vector3.TransformCoordinates(n, i)
                      , a = t.getWorldMatrix().clone().invert();
                    return r = BABYLON.Vector3.TransformCoordinates(r, a)
                }
                n = n || {};
                var c = e.getScene()
                  , f = c.babylonScene
                  , h = void 0
                  , u = void 0;
                n.pivot = n.pivot || new BABYLON.Vector3(0,0,0);
                var d = s(n.pivot);
                t.position.copyFrom(d);
                var l = s(n.pivot)
                  , p = n.rotateAxis || "y"
                  , b = n.startAngle
                  , v = n.endAngle;
                if (void 0 !== b && void 0 !== v && b > v)
                    throw "起始角度不能大于结束角度";
                t.setEnabled(!1),
                t.isPickable = !1;
                var y = void 0
                  , m = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger,function(e) {
                    var n = c.createPickingRay(e.pointerX, e.pointerY)
                      , s = n.intersectsMesh(t);
                    if (s.hit) {
                        f.execute(a.commands.SET_CAMERA_CONTROL, {
                            enabled: !1
                        }),
                        h = c.onPointerObservable.add(i, BABYLON.PointerEventTypes.POINTERMOVE),
                        u = c.onPointerObservable.add(r, BABYLON.PointerEventTypes.POINTERUP);
                        var d = s.pickedPoint;
                        y = o(d)
                    }
                }
                );
                e.actionManager.registerAction(m)
            }
        }]),
        e
    }();
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var r = n(615)
          , a = n(5)
          , o = {
            FREE: 0,
            ACTIVE: 1
        }
          , s = {
            startAxis: BABYLON.Vector3.Up(),
            startPosition: BABYLON.Vector3.Zero(),
            startAxisForDisc: BABYLON.Vector3.Forward()
        }
          , c = function e(n, c, f) {
            function h() {
                if (p.state === o.ACTIVE) {
                    p.lastPosition = p.currentPosition,
                    p.currentPosition = u(),
                    p.lastRotation = p.currentRotation;
                    var e = BABYLON.Vector3.Dot(p.currentPosition, p.startPosition) / p._config.diameter
                      , t = BABYLON.Vector3.Dot(p.currentPosition, p.nPosition) / p._config.diameter;
                    console.log(e, t);
                    var n = Math.acos(e) * t / Math.abs(t);
                    console.log(180 * n / Math.PI),
                    p.currentRotation = n;
                    var i = p.currentRotation - p.lastRotation
                      , r = p._state.meshRotation + i;
                    p._config.isFree ? p._state.rotation = r : p._state.rotation = Math.max(p._config.lowerAngle, Math.min(p._config.upperAngle, r)),
                    console.log(p.targetMesh.position),
                    p._config.callback && p._confog.callback(p._state)
                }
            }
            function u() {
                var e = void 0
                  , t = n.pointerX
                  , i = n.pointerY
                  , r = n.createPickingRay(t, i)
                  , a = r.origin
                  , o = r.direction;
                if (o.normalize() === a.subtract(p._config.pivot).normalize()) {
                    var s = BABYLON.Vector3.Dot(a.subtract(p._config.pivot), p._config.axis) / p._config.axis.lengthSquare();
                    e = a.subtract(p._config.axis.scale(s)).scale(.01)
                } else {
                    var c = BABYLON.Vector3.Dot(a.subtract(p._config.pivot), p._config.axis) / BABYLON.Vector3.Dot(o, p._config.axis);
                    e = a.add(o.scale(-c))
                }
                var f = e.subtract(p._config.pivot).normalize().scale(p._config.diameter);
                return BABYLON.MeshBuilder.CreateSphere("", {
                    diameter: .1
                }, n).position = e.clone(),
                f
            }
            function d() {
                n.babylonScene.execute(a.commands.SET_CAMERA_CONTROL, {
                    enabled: !0
                }),
                p.startPosition = null,
                p.currentPosition = null,
                p.startRotation = null,
                p.currentRadius = 0,
                p.state = o.FREE,
                n.unregisterBeforeRender(h)
            }
            var l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            i(this, e);
            var p = this;
            p.state = o.FREE,
            p.startPosition = null,
            p.currentPosition = null,
            p.lastPosition = null,
            p.currentRadius = 0,
            p.fromRotation = null,
            p.lastRotation = 0,
            p.nPosition = null,
            p.targetMesh = c,
            p.targetMesh.controller || (p.targetMesh.controller = []);
            var b = p.targetMesh.controller.length;
            p.targetMesh.controller.push(p),
            p.strtPointer = 0;
            var v = null
              , y = null;
            if (p._config = {
                pivot: BABYLON.Vector3.Zero(),
                axis: s.startAxis,
                isFree: !1,
                lowerAngle: 0,
                upperAngle: 0,
                diameter: 1,
                thickness: .08,
                tessellation: 100,
                callback: null
            },
            p._state = {
                meth: p.targetMesh,
                rotation: 0
            },
            Object.assign(p._config, l),
            p._config.axis.normalize(),
            p._discConfig = {
                radius: (p._config.diameter - p._config.thickness) / 2 - .001,
                arc: .001,
                tessellation: 30,
                sideOrientation: BABYLON.Mesh.DOUBLESIDE,
                updatable: !0
            },
            !p._config.axis.length)
                throw "Unable zero vector to rotate around!!";
            f && (p._state.currentRotation = f),
            n.babylonScene.helperMaterial ? v = n.babylonScene.helperMaterial : (v = new BABYLON.StandardMaterial("controllerMaterial",n),
            v.diffuseColor.set(.28235, .57647, .41176),
            v.alpha = .6,
            n.babylonScene.helperMaterial = v),
            n.babylonScene.drawPlaneMaterial ? y = n.babylonScene.drawPlaneMaterial : (y = new BABYLON.StandardMaterial("drawMaterial",n),
            y.diffuseColor.set(.6, .6, .6),
            y.alpha = .8,
            y.useLogarithmicDepth = !0,
            n.babylonScene.drawPlaneMaterial = y);
            p._config.diameter,
            Math.max(5 * p._config.thickness, .1);
            p.areaMesh = BABYLON.MeshBuilder.CreateCylinder(p.targetMesh.name + "Helper" + b + "Area", {
                height: 10 * p._config.thickness,
                diameterTop: p._config.diameter + 5 * p._config.thickness,
                diameterBottom: p._config.diameter + 5 * p._config.thickness,
                tessellation: 15
            }, n),
            p.areaMesh.isVisible = !0,
            p.areaMesh.visibility = .2;
            var m = {
                diameter: p._config.diameter,
                thickness: p._config.thickness,
                tessellation: p._config.tessellation
            };
            p.flagMesh = BABYLON.MeshBuilder.CreateTorus(p.targetMesh.name + "Helper" + b + "Flag", m, n),
            p.flagMesh.material = v,
            p.flagMesh.position = p.areaMesh.position,
            p.flagMesh.rotation = p.areaMesh.rotation,
            p.flagMesh.isVisible = !0,
            p.flagMesh.visibility = 0,
            p.planeMesh = BABYLON.MeshBuilder.CreatePlane(p.targetMesh.name + "Helper" + b + "Plane", {
                size: p._config.diameter / 2,
                sideOrientation: BABYLON.Mesh.DOUBLESIDE
            }, n),
            p.planeMesh.visibility = .1,
            p.discMesh = BABYLON.MeshBuilder.CreateDisc(p.targetMesh.Name + "Helper" + b + "Sector", p._discConfig, n),
            p.discMesh.material = v,
            p.discMesh.visibility = 0,
            p.dRotate = Math.acos(BABYLON.Vector3.Dot(s.startAxis, p._config.axis)),
            p.dRotate >= .001 && (p.tAxis = BABYLON.Vector3.Cross(s.startAxis, p._config.axis).normalize(),
            p.flagMesh.rotate(p.tAxis, p.dRotate),
            p.areaMesh.rotate(p.tAxis, p.dRotate),
            console.log("rAxis", p._config.axis)),
            p.discRotate = Math.acos(BABYLON.Vector3.Dot(s.startAxisForDisc, p._config.axis)),
            console.log("----\x3e rotation", p.discRotate),
            p.discRotate >= 1e-5 && (p.discAxis = BABYLON.Vector3.Cross(s.startAxisForDisc, p._config.axis).normalize(),
            p.discMesh.rotate(p.discAxis, p.discRotate),
            p.planeMesh.rotate(p.discAxis, p.discRotate),
            console.log("start: mesh, disc", s.startAxis, s.startAxisForDisc),
            console.log("axis, rotation", p.discAxis, p.discRotate)),
            p.flagMesh.position = p.areaMesh.position = p.planeMesh.position = p.discMesh.position = p._config.pivot;
            var g = function(e) {
                p.flagMesh.visibility = .8,
                p.discMesh.visibility = 0,
                p.state === o.ACTIVE && d()
            }
              , w = function(e) {
                p.flagMesh.visibility = 0,
                p.discMesh.visibility = 0,
                p.state === o.ACTIVE && d()
            }
              , _ = function(e) {
                (p.flagMesh.visibility = 1,
                p._discConfig.arc = .6,
                BABYLON.VertexData.CreateDisc(p._discConfig).applyToMesh(p.discMesh, p._discConfig.updatable),
                p.discMesh.visibility = 1,
                p.state === o.FREE) && (p.state = o.ACTIVE,
                n.babylonScene.execute(a.commands.SET_CAMERA_CONTROL, {
                    enabled: !1
                }),
                n.pointerX,
                n.pointerY,
                p.startPosition = u().normalize(),
                p.currentPosition = p.startPosition,
                p.currentRotation = 0,
                p.nPosition = BABYLON.Vector3.Cross(p._config.axis, p.startPosition).normalize(),
                n.registerBeforeRender(h))
            };
            p.areaMesh.actionManager = new r(n.babylonScene,{
                onHover: g,
                onOut: w,
                onPick: _
            });
            var A = new BABYLON.ActionManager(n);
            p.planeMesh.actionManager = A,
            l.isDebug && (p.planeMesh.visibility = p.flagMesh.visibility = 1),
            t.tm = p.targetMesh,
            t.gm = p.flagMesh,
            t.am = p.areaMesh,
            t.pm = p.planeMesh,
            t.dm = p.discMesh,
            t.mm = v
        };
        e.exports = c
    }
    ).call(t, n(1))
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = function(e) {
        function t(e, n) {
            i(this, t);
            var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.scene));
            return a.babylonScene = e,
            a.isOver = !1,
            a.isPick = !1,
            a.activities = n,
            a.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,a.onPointerOver.bind(a))),
            a.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,a.onPointerOut.bind(a))),
            a.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger,a.onPick.bind(a))),
            a.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger,a.onPickUp.bind(a))),
            a.babylonScene.scene.onPointerObservable.add(a.onPickUp.bind(a), BABYLON.PointerEventTypes.POINTERUP),
            a
        }
        return a(t, e),
        o(t, [{
            key: "onPointerOver",
            value: function(e) {
                var t = e.source;
                console.log("pointer over " + t.name),
                this.target = t,
                this.isOver = !0,
                this.check(t, e)
            }
        }, {
            key: "onPointerOut",
            value: function(e) {
                var t = e.source;
                console.log("pointer out " + t.name),
                this.isOver = !1,
                this.check(t, e)
            }
        }, {
            key: "onPick",
            value: function(e) {
                var t = e.source;
                console.log("pick " + t.name),
                this.isPick = !0,
                this.check(t, e)
            }
        }, {
            key: "onPickUp",
            value: function(e) {
                e.source;
                this.isPick = !1,
                this.check(this.target, e)
            }
        }, {
            key: "onLongPress",
            value: function(e) {
                var t = e.source;
                console.log("pointer long press " + t.name)
            }
        }, {
            key: "check",
            value: function(e, t) {
                e && (this.isPick ? this.activities.onPick(t) : this.isOver ? this.activities.onHover(t) : this.activities.onOut(t))
            }
        }]),
        t
    }(BABYLON.ActionManager);
    e.exports = s
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var r = n(617)
      , a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r)
      , o = function e(t, n, r, o, s) {
        i(this, e);
        var c = this;
        c.control = new a.default.EditControl(t,n.activeCamera,n.interactiveCanvas,r || .75,o || !1),
        c.control.enableRotation()
    };
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    var i;
    !function(e) {
        !function(e) {
            !function(e) {
                !function(e) {
                    var t, n = BABYLON.Axis, i = BABYLON.Color3, r = BABYLON.Mesh, a = BABYLON.MeshBuilder, o = BABYLON.Path2, s = BABYLON.Quaternion, c = BABYLON.Space, f = BABYLON.StandardMaterial, h = BABYLON.Vector3;
                    !function(e) {
                        e[e.TRANS = 0] = "TRANS",
                        e[e.ROT = 1] = "ROT",
                        e[e.SCALE = 2] = "SCALE"
                    }(t || (t = {}));
                    var u = function() {
                        function e(e, t, n, i, a) {
                            var o = this;
                            this.local = !0,
                            this.snapT = !1,
                            this.snapR = !1,
                            this.transSnap = 1,
                            this.rotSnap = Math.PI / 18,
                            this.axesLen = .4,
                            this.axesScale = 1,
                            this.visibility = .7,
                            this.distFromCamera = 2,
                            this.toParent = new h(0,0,0),
                            this.cameraNormal = new h(0,0,0),
                            this.actionListener = null,
                            this.actionStartListener = null,
                            this.actionEndListener = null,
                            this.pDown = !1,
                            this.pointerIsOver = !1,
                            this.editing = !1,
                            this.snapRX = 0,
                            this.snapRY = 0,
                            this.snapRZ = 0,
                            this.snapTV = new h(0,0,0),
                            this.transBy = new h(0,0,0),
                            this.snapS = !1,
                            this.snapSX = 0,
                            this.snapSY = 0,
                            this.snapSZ = 0,
                            this.snapSA = 0,
                            this.snapSV = new h(0,0,0),
                            this.scaleSnap = .25,
                            this.scale = new h(0,0,0),
                            this.eulerian = !1,
                            this.snapRA = 0,
                            this.cN = new h(0,0,0),
                            this.transEnabled = !1,
                            this.rotEnabled = !1,
                            this.scaleEnabled = !1,
                            this.localX = new h(0,0,0),
                            this.localY = new h(0,0,0),
                            this.localZ = new h(0,0,0),
                            this.mesh = e,
                            this.canvas = n,
                            this.axesScale = i,
                            this.eulerian = null !== a && a,
                            this.checkQuaternion(),
                            this.scene = e.getScene(),
                            this.mainCamera = t,
                            this.actHist = new d(e,10),
                            e.computeWorldMatrix(!0),
                            this.boundingDimesion = this.getBoundingDimension(e),
                            this.theParent = new r("EditControl",this.scene),
                            this.theParent.rotationQuaternion = s.Identity(),
                            this.theParent.visibility = 0,
                            this.theParent.isPickable = !1,
                            this.createMaterials(this.scene),
                            this.createGuideAxes(),
                            this.guideCtl.parent = this.theParent,
                            this.createPickPlanes(),
                            this.pickPlanes.parent = this.theParent,
                            this.pointerdown = function(e) {
                                return o.onPointerDown(e)
                            }
                            ,
                            this.pointerup = function(e) {
                                return o.onPointerUp(e)
                            }
                            ,
                            this.pointermove = function(e) {
                                return o.onPointerMove(e)
                            }
                            ,
                            n.addEventListener("pointerdown", this.pointerdown, !1),
                            n.addEventListener("pointerup", this.pointerup, !1),
                            n.addEventListener("pointermove", this.pointermove, !1),
                            this.setLocalAxes(e),
                            this.renderer = function() {
                                return o.renderLoopProcess()
                            }
                            ,
                            this.scene.registerBeforeRender(this.renderer)
                        }
                        return e.prototype.checkQuaternion = function() {
                            if (!this.eulerian && (null == this.mesh.rotationQuaternion || void 0 == this.mesh.rotationQuaternion))
                                throw "Error: Eulerian is set to false but the mesh's rotationQuaternion is not set."
                        }
                        ,
                        e.prototype.setAxesScale = function() {
                            this.theParent.position.subtractToRef(this.mainCamera.position, this.toParent),
                            h.FromFloatArrayToRef(this.mainCamera.getWorldMatrix().asArray(), 8, this.cameraNormal);
                            var e = h.Dot(this.toParent, this.cameraNormal) / this.cameraNormal.length()
                              , t = e / this.distFromCamera;
                            h.FromFloatsToRef(t, t, t, this.theParent.scaling),
                            h.FromFloatsToRef(t, t, t, this.pALL.scaling)
                        }
                        ,
                        e.prototype.setAxesRotation = function() {
                            if (this.local)
                                if (this.eulerian) {
                                    var e = this.mesh.rotation;
                                    this.theParent.rotationQuaternion.copyFrom(BABYLON.Quaternion.RotationYawPitchRoll(e.y, e.x, e.z))
                                } else
                                    this.theParent.rotationQuaternion = this.mesh.rotationQuaternion
                        }
                        ,
                        e.prototype.renderLoopProcess = function() {
                            this.theParent.position = this.mesh.getAbsolutePivotPoint(),
                            this.setAxesScale(),
                            this.setAxesRotation(),
                            this.onPointerOver()
                        }
                        ,
                        e.prototype.switchTo = function(e, t) {
                            e.computeWorldMatrix(!0),
                            this.mesh = e,
                            null != t && (this.eulerian = t),
                            this.checkQuaternion(),
                            this.setLocalAxes(e),
                            this.actHist = new d(e,10)
                        }
                        ,
                        e.prototype.setUndoCount = function(e) {
                            this.actHist.setCapacity(e)
                        }
                        ,
                        e.prototype.undo = function() {
                            var e = this.actHist.undo();
                            this.mesh.computeWorldMatrix(!0),
                            this.setLocalAxes(this.mesh),
                            this.callActionStartListener(e),
                            this.callActionListener(e),
                            this.callActionEndListener(e)
                        }
                        ,
                        e.prototype.redo = function() {
                            var e = this.actHist.redo();
                            this.mesh.computeWorldMatrix(!0),
                            this.setLocalAxes(this.mesh),
                            this.callActionStartListener(e),
                            this.callActionListener(e),
                            this.callActionEndListener(e)
                        }
                        ,
                        e.prototype.detach = function() {
                            this.canvas.removeEventListener("pointerdown", this.pointerdown, !1),
                            this.canvas.removeEventListener("pointerup", this.pointerup, !1),
                            this.canvas.removeEventListener("pointermove", this.pointermove, !1),
                            this.scene.unregisterBeforeRender(this.renderer),
                            this.removeAllActionListeners(),
                            this.disposeAll()
                        }
                        ,
                        e.prototype.disposeAll = function() {
                            this.theParent.dispose(),
                            this.disposeMaterials(),
                            this.actHist = null
                        }
                        ,
                        e.prototype.addActionListener = function(e) {
                            this.actionListener = e
                        }
                        ,
                        e.prototype.removeActionListener = function() {
                            this.actionListener = null
                        }
                        ,
                        e.prototype.addActionStartListener = function(e) {
                            this.actionStartListener = e
                        }
                        ,
                        e.prototype.removeActionStartListener = function() {
                            this.actionStartListener = null
                        }
                        ,
                        e.prototype.addActionEndListener = function(e) {
                            this.actionEndListener = e
                        }
                        ,
                        e.prototype.removeActionEndListener = function() {
                            this.actionEndListener = null
                        }
                        ,
                        e.prototype.removeAllActionListeners = function() {
                            this.actionListener = null,
                            this.actionStartListener = null,
                            this.actionEndListener = null
                        }
                        ,
                        e.prototype.onPointerDown = function(e) {
                            var t = this;
                            if (this.pDown = !0,
                            0 == e.button) {
                                var n = this.scene.pick(this.scene.pointerX, this.scene.pointerY, function(e) {
                                    if (t.transEnabled) {
                                        if (e == t.tX || e == t.tY || e == t.tZ || e == t.tXZ || e == t.tZY || e == t.tYX || e == t.tAll)
                                            return !0
                                    } else if (t.rotEnabled) {
                                        if (e == t.rX || e == t.rY || e == t.rZ || e == t.rAll)
                                            return !0
                                    } else if (t.scaleEnabled && (e == t.sX || e == t.sY || e == t.sZ || e == t.sXZ || e == t.sZY || e == t.sYX || e == t.sAll))
                                        return !0;
                                    return !1
                                }, null, this.mainCamera);
                                if (n.hit) {
                                    this.setAxesVisiblity(0),
                                    this.axisPicked = n.pickedMesh;
                                    var i = this.axisPicked.getChildren();
                                    i.length > 0 ? i[0].visibility = this.visibility : this.axisPicked.visibility = this.visibility;
                                    var r = this.axisPicked.name;
                                    "X" == r ? this.bXaxis.visibility = 1 : "Y" == r ? this.bYaxis.visibility = 1 : "Z" == r ? this.bZaxis.visibility = 1 : "XZ" == r ? (this.bXaxis.visibility = 1,
                                    this.bZaxis.visibility = 1) : "ZY" == r ? (this.bZaxis.visibility = 1,
                                    this.bYaxis.visibility = 1) : "YX" == r ? (this.bYaxis.visibility = 1,
                                    this.bXaxis.visibility = 1) : "ALL" == r && (this.bXaxis.visibility = 1,
                                    this.bYaxis.visibility = 1,
                                    this.bZaxis.visibility = 1),
                                    this.setEditing(!0),
                                    this.pickPlane = this.getPickPlane(this.axisPicked),
                                    this.prevPos = this.getPosOnPickPlane(),
                                    window.setTimeout(function(e, n) {
                                        return t.detachControl(e, n)
                                    }, 0, this.mainCamera, this.canvas)
                                }
                            }
                        }
                        ,
                        e.prototype.setEditing = function(e) {
                            this.editing = e,
                            e ? (this.setActionType(),
                            this.callActionStartListener(this.actionType)) : this.callActionEndListener(this.actionType)
                        }
                        ,
                        e.prototype.isEditing = function() {
                            return this.editing
                        }
                        ,
                        e.prototype.detachControl = function(e, t) {
                            var n = e
                              , i = t;
                            n.detachControl(i)
                        }
                        ,
                        e.prototype.isPointerOver = function() {
                            return this.pointerIsOver
                        }
                        ,
                        e.prototype.onPointerOver = function() {
                            var e = this;
                            if (!this.pDown) {
                                var t = this.scene.pick(this.scene.pointerX, this.scene.pointerY, function(t) {
                                    if (e.transEnabled) {
                                        if (t == e.tX || t == e.tY || t == e.tZ || t == e.tXZ || t == e.tZY || t == e.tYX || t == e.tAll)
                                            return !0
                                    } else if (e.rotEnabled) {
                                        if (t == e.rX || t == e.rY || t == e.rZ || t == e.rAll)
                                            return !0
                                    } else if (e.scaleEnabled && (t == e.sX || t == e.sY || t == e.sZ || t == e.sXZ || t == e.sZY || t == e.sYX || t == e.sAll))
                                        return !0;
                                    return !1
                                }, null, this.mainCamera);
                                if (t.hit) {
                                    if (t.pickedMesh != this.prevOverMesh) {
                                        if (this.pointerIsOver = !0,
                                        this.clearPrevOverMesh(),
                                        this.prevOverMesh = t.pickedMesh,
                                        this.rotEnabled)
                                            this.savedCol = this.prevOverMesh.getChildren()[0].color,
                                            this.prevOverMesh.getChildren()[0].color = i.White();
                                        else {
                                            var n = this.prevOverMesh.getChildren();
                                            n.length > 0 ? (this.savedMat = n[0].material,
                                            n[0].material = this.whiteMat) : (this.savedMat = this.prevOverMesh.material,
                                            this.prevOverMesh.material = this.whiteMat)
                                        }
                                        "X" == this.prevOverMesh.name ? this.xaxis.color = i.White() : "Y" == this.prevOverMesh.name ? this.yaxis.color = i.White() : "Z" == this.prevOverMesh.name && (this.zaxis.color = i.White())
                                    }
                                } else
                                    this.pointerIsOver = !1,
                                    null != this.prevOverMesh && (this.restoreColor(this.prevOverMesh),
                                    this.prevOverMesh = null)
                            }
                        }
                        ,
                        e.prototype.clearPrevOverMesh = function() {
                            null != this.prevOverMesh && (this.prevOverMesh.visibility = 0,
                            this.restoreColor(this.prevOverMesh))
                        }
                        ,
                        e.prototype.restoreColor = function(e) {
                            switch (e.name) {
                            case "X":
                                this.xaxis.color = i.Red();
                                break;
                            case "Y":
                                this.yaxis.color = i.Green();
                                break;
                            case "Z":
                                this.zaxis.color = i.Blue()
                            }
                            if (this.rotEnabled)
                                e.getChildren()[0].color = this.savedCol;
                            else {
                                var t = e.getChildren();
                                t.length > 0 ? t[0].material = this.savedMat : e.material = this.savedMat
                            }
                        }
                        ,
                        e.prototype.onPointerUp = function(e) {
                            this.pDown = !1,
                            this.editing && (this.mainCamera.attachControl(this.canvas),
                            this.setEditing(!1),
                            this.setAxesVisiblity(1),
                            this.hideBaxis(),
                            this.restoreColor(this.prevOverMesh),
                            this.prevOverMesh = null,
                            this.actHist.add(this.actionType))
                        }
                        ,
                        e.prototype.setActionType = function() {
                            this.transEnabled ? this.actionType = t.TRANS : this.rotEnabled ? this.actionType = t.ROT : this.scaleEnabled && (this.actionType = t.SCALE)
                        }
                        ,
                        e.prototype.callActionListener = function(e) {
                            null != this.actionListener && window.setTimeout(this.actionListener, 0, e)
                        }
                        ,
                        e.prototype.callActionStartListener = function(e) {
                            null != this.actionStartListener && window.setTimeout(this.actionStartListener, 0, e)
                        }
                        ,
                        e.prototype.callActionEndListener = function(e) {
                            null != this.actionEndListener && window.setTimeout(this.actionEndListener, 0, e)
                        }
                        ,
                        e.prototype.onPointerMove = function(e) {
                            if (this.pDown && this.editing && null != this.prevPos) {
                                this.pickPlane = this.getPickPlane(this.axisPicked);
                                var t = this.getPosOnPickPlane();
                                if (null != t) {
                                    if (this.rotEnabled)
                                        this.doRotation(this.mesh, this.axisPicked, t, this.prevPos);
                                    else {
                                        var n = t.subtract(this.prevPos);
                                        if (0 == n.x && 0 == n.y && 0 == n.z)
                                            return;
                                        this.transEnabled ? this.doTranslation(n) : this.scaleEnabled && this.local && this.doScaling(n)
                                    }
                                    this.prevPos = t,
                                    this.callActionListener(this.actionType)
                                }
                            }
                        }
                        ,
                        e.prototype.getPickPlane = function(e) {
                            var t = e.name;
                            if (this.transEnabled || this.scaleEnabled) {
                                if ("XZ" == t)
                                    return this.pXZ;
                                if ("ZY" == t)
                                    return this.pZY;
                                if ("YX" == t)
                                    return this.pYX;
                                if ("ALL" == t)
                                    return this.pALL;
                                var n = this.mesh.getWorldMatrix().clone().invert()
                                  , i = h.TransformCoordinates(this.mainCamera.position, n)
                                  , r = this.mesh.scaling;
                                if ("X" === t)
                                    return Math.abs(i.y * r.y) > Math.abs(i.z * r.z) ? this.pXZ : this.pYX;
                                if ("Z" === t)
                                    return Math.abs(i.y * r.y) > Math.abs(i.x * r.x) ? this.pXZ : this.pZY;
                                if ("Y" === t)
                                    return Math.abs(i.z * r.z) > Math.abs(i.x * r.x) ? this.pYX : this.pZY
                            } else {
                                if (!this.rotEnabled)
                                    return null;
                                switch (t) {
                                case "X":
                                    return this.pZY;
                                case "Y":
                                    return this.pXZ;
                                case "Z":
                                    return this.pYX;
                                default:
                                    return this.pALL
                                }
                            }
                        }
                        ,
                        e.prototype.doTranslation = function(e) {
                            this.transBy.x = 0,
                            this.transBy.y = 0,
                            this.transBy.z = 0;
                            var t = this.axisPicked.name;
                            "X" != t && "XZ" != t && "YX" != t && "ALL" != t || (this.local ? this.transBy.x = h.Dot(e, this.localX) / (this.localX.length() * this.mesh.scaling.x) : this.transBy.x = e.x),
                            "Y" != t && "ZY" != t && "YX" != t && "ALL" != t || (this.local ? this.transBy.y = h.Dot(e, this.localY) / (this.localY.length() * this.mesh.scaling.y) : this.transBy.y = e.y),
                            "Z" != t && "XZ" != t && "ZY" != t && "ALL" != t || (this.local ? this.transBy.z = h.Dot(e, this.localZ) / (this.localZ.length() * this.mesh.scaling.z) : this.transBy.z = e.z),
                            this.transWithSnap(this.mesh, this.transBy, this.local),
                            this.transBoundsMin && (this.mesh.position.x = Math.max(this.mesh.position.x, this.transBoundsMin.x),
                            this.mesh.position.y = Math.max(this.mesh.position.y, this.transBoundsMin.y),
                            this.mesh.position.z = Math.max(this.mesh.position.z, this.transBoundsMin.z)),
                            this.transBoundsMax && (this.mesh.position.x = Math.min(this.mesh.position.x, this.transBoundsMax.x),
                            this.mesh.position.y = Math.min(this.mesh.position.y, this.transBoundsMax.y),
                            this.mesh.position.z = Math.min(this.mesh.position.z, this.transBoundsMax.z)),
                            this.mesh.computeWorldMatrix(!0)
                        }
                        ,
                        e.prototype.transWithSnap = function(e, t, i) {
                            if (this.snapT) {
                                var r = !1;
                                if (this.snapTV.addInPlace(t),
                                Math.abs(this.snapTV.x) > this.tSnap.x / e.scaling.x && (this.snapTV.x > 0 ? t.x = this.tSnap.x : t.x = -this.tSnap.x,
                                t.x = t.x / e.scaling.x,
                                r = !0),
                                Math.abs(this.snapTV.y) > this.tSnap.y / e.scaling.y && (this.snapTV.y > 0 ? t.y = this.tSnap.y : t.y = -this.tSnap.y,
                                t.y = t.y / e.scaling.y,
                                r = !0),
                                Math.abs(this.snapTV.z) > this.tSnap.z / e.scaling.z && (this.snapTV.z > 0 ? t.z = this.tSnap.z : t.z = -this.tSnap.z,
                                t.z = t.z / e.scaling.z,
                                r = !0),
                                !r)
                                    return;
                                Math.abs(t.x) !== this.tSnap.x / e.scaling.x && (t.x = 0),
                                Math.abs(t.y) !== this.tSnap.y / e.scaling.y && (t.y = 0),
                                Math.abs(t.z) !== this.tSnap.z / e.scaling.z && (t.z = 0),
                                h.FromFloatsToRef(0, 0, 0, this.snapTV),
                                r = !1
                            }
                            i ? (this.mesh.translate(n.X, t.x, c.LOCAL),
                            this.mesh.translate(n.Y, t.y, c.LOCAL),
                            this.mesh.translate(n.Z, t.z, c.LOCAL)) : this.mesh.position.addInPlace(t)
                        }
                        ,
                        e.prototype.doScaling = function(e) {
                            this.scale.x = 0,
                            this.scale.y = 0,
                            this.scale.z = 0;
                            var t = this.axisPicked.name;
                            if ("X" != t && "XZ" != t && "YX" != t || (this.scale.x = h.Dot(e, this.localX) / this.localX.length()),
                            "Y" != t && "ZY" != t && "YX" != t || (this.scale.y = h.Dot(e, this.localY) / this.localY.length()),
                            "Z" != t && "XZ" != t && "ZY" != t || (this.scale.z = h.Dot(e, this.localZ) / this.localZ.length()),
                            "ALL" == t) {
                                var n = h.Dot(e, this.mainCamera.upVector);
                                this.scale.copyFromFloats(n, n, n)
                            } else
                                "XZ" == t ? Math.abs(this.scale.x) > Math.abs(this.scale.z) ? this.scale.z = this.scale.x : this.scale.x = this.scale.z : "ZY" == t ? Math.abs(this.scale.z) > Math.abs(this.scale.y) ? this.scale.y = this.scale.z : this.scale.z = this.scale.y : "YX" == t && (Math.abs(this.scale.y) > Math.abs(this.scale.x) ? this.scale.x = this.scale.y : this.scale.y = this.scale.x);
                            var i = this.boundingDimesion;
                            this.scale.x = this.scale.x / i.x,
                            this.scale.y = this.scale.y / i.y,
                            this.scale.z = this.scale.z / i.z,
                            this.scaleWithSnap(this.mesh, this.scale),
                            this.scaleBoundsMin && (this.mesh.scaling.x = Math.max(this.mesh.scaling.x, this.scaleBoundsMin.x),
                            this.mesh.scaling.y = Math.max(this.mesh.scaling.y, this.scaleBoundsMin.y),
                            this.mesh.scaling.z = Math.max(this.mesh.scaling.z, this.scaleBoundsMin.z)),
                            this.scaleBoundsMax && (this.mesh.scaling.x = Math.min(this.mesh.scaling.x, this.scaleBoundsMax.x),
                            this.mesh.scaling.y = Math.min(this.mesh.scaling.y, this.scaleBoundsMax.y),
                            this.mesh.scaling.z = Math.min(this.mesh.scaling.z, this.scaleBoundsMax.z))
                        }
                        ,
                        e.prototype.scaleWithSnap = function(e, t) {
                            if (this.snapS) {
                                var n = !1;
                                if (this.snapSV.addInPlace(t),
                                Math.abs(this.snapSV.x) > this.scaleSnap && (t.x > 0 ? t.x = this.scaleSnap : t.x = -this.scaleSnap,
                                n = !0),
                                Math.abs(this.snapSV.y) > this.scaleSnap && (t.y > 0 ? t.y = this.scaleSnap : t.y = -this.scaleSnap,
                                n = !0),
                                Math.abs(this.snapSV.z) > this.scaleSnap && (t.z > 0 ? t.z = this.scaleSnap : t.z = -this.scaleSnap,
                                n = !0),
                                !n)
                                    return;
                                Math.abs(t.x) !== this.scaleSnap && 0 !== t.x && (t.x = 0),
                                Math.abs(t.y) !== this.scaleSnap && 0 !== t.y && (t.y = 0),
                                Math.abs(t.z) !== this.scaleSnap && 0 !== t.z && (t.z = 0),
                                h.FromFloatsToRef(0, 0, 0, this.snapSV),
                                n = !1
                            }
                            e.scaling.addInPlace(t)
                        }
                        ,
                        e.prototype.getBoundingDimension = function(e) {
                            var t = this.mesh.getBoundingInfo().boundingBox;
                            return t.maximum.subtract(t.minimum)
                        }
                        ,
                        e.prototype.refreshBoundingInfo = function() {
                            this.boundingDimesion = this.getBoundingDimension(this.mesh)
                        }
                        ,
                        e.prototype.doRotation = function(t, i, r, a) {
                            var o = this.cN;
                            h.TransformNormalToRef(n.Z, this.mainCamera.getWorldMatrix(), o);
                            var s = e.getAngle(a, r, t.getAbsolutePivotPoint(), o);
                            i == this.rX ? (this.snapR && (this.snapRX += s,
                            s = 0,
                            Math.abs(this.snapRX) >= this.rotSnap && (s = this.snapRX > 0 ? this.rotSnap : -this.rotSnap,
                            this.snapRX = 0)),
                            0 !== s && (this.local ? (h.Dot(this.localX, o) < 0 && (s *= -1),
                            t.rotate(n.X, s, c.LOCAL)) : t.rotate(new h(o.x,0,0), s, c.WORLD))) : i == this.rY ? (this.snapR && (this.snapRY += s,
                            s = 0,
                            Math.abs(this.snapRY) >= this.rotSnap && (s = this.snapRY > 0 ? this.rotSnap : -this.rotSnap,
                            this.snapRY = 0)),
                            0 !== s && (this.local ? (h.Dot(this.localY, o) < 0 && (s *= -1),
                            t.rotate(n.Y, s, c.LOCAL)) : t.rotate(new h(0,o.y,0), s, c.WORLD))) : i == this.rZ ? (this.snapR && (this.snapRZ += s,
                            s = 0,
                            Math.abs(this.snapRZ) >= this.rotSnap && (s = this.snapRZ > 0 ? this.rotSnap : -this.rotSnap,
                            this.snapRZ = 0)),
                            0 !== s && (this.local ? (h.Dot(this.localZ, o) < 0 && (s *= -1),
                            t.rotate(n.Z, s, c.LOCAL)) : t.rotate(new h(0,0,o.z), s, c.WORLD))) : i == this.rAll && (this.snapR && (this.snapRA += s,
                            s = 0,
                            Math.abs(this.snapRA) >= this.rotSnap && (s = this.snapRA > 0 ? this.rotSnap : -this.rotSnap,
                            this.snapRA = 0)),
                            0 !== s && t.rotate(t.position.subtract(this.mainCamera.position), s, c.WORLD)),
                            this.setLocalAxes(this.mesh),
                            this.eulerian && 0 != s && (t.rotation = t.rotationQuaternion.toEulerAngles(),
                            t.rotationQuaternion = null)
                        }
                        ,
                        e.prototype.getPosOnPickPlane = function() {
                            var e = this
                              , t = this.scene.pick(this.scene.pointerX, this.scene.pointerY, function(t) {
                                return t == e.pickPlane
                            }, null, this.mainCamera);
                            return t.hit ? t.pickedPoint : null
                        }
                        ,
                        e.prototype.hideBaxis = function() {
                            this.bXaxis.visibility = 0,
                            this.bYaxis.visibility = 0,
                            this.bZaxis.visibility = 0
                        }
                        ,
                        e.prototype.setAxesVisiblity = function(e) {
                            this.transEnabled && (this.tEndX.visibility = e,
                            this.tEndY.visibility = e,
                            this.tEndZ.visibility = e,
                            this.tEndXZ.visibility = e,
                            this.tEndZY.visibility = e,
                            this.tEndYX.visibility = e,
                            this.tEndAll.visibility = e),
                            this.rotEnabled && (this.rEndX.visibility = e,
                            this.rEndY.visibility = e,
                            this.rEndZ.visibility = e,
                            this.rEndAll.visibility = e),
                            this.scaleEnabled && (this.sEndX.visibility = e,
                            this.sEndY.visibility = e,
                            this.sEndZ.visibility = e,
                            this.sEndXZ.visibility = e,
                            this.sEndZY.visibility = e,
                            this.sEndYX.visibility = e,
                            this.sEndAll.visibility = e)
                        }
                        ,
                        e.prototype.isTranslationEnabled = function() {
                            return this.transEnabled
                        }
                        ,
                        e.prototype.enableTranslation = function() {
                            null == this.tX && (this.createTransAxes(),
                            this.tCtl.parent = this.theParent),
                            this.clearPrevOverMesh(),
                            this.transEnabled || (this.tEndX.visibility = this.visibility,
                            this.tEndY.visibility = this.visibility,
                            this.tEndZ.visibility = this.visibility,
                            this.tEndXZ.visibility = this.visibility,
                            this.tEndZY.visibility = this.visibility,
                            this.tEndYX.visibility = this.visibility,
                            this.tEndAll.visibility = this.visibility,
                            this.transEnabled = !0,
                            this.disableRotation(),
                            this.disableScaling())
                        }
                        ,
                        e.prototype.disableTranslation = function() {
                            this.transEnabled && (this.tEndX.visibility = 0,
                            this.tEndY.visibility = 0,
                            this.tEndZ.visibility = 0,
                            this.tEndXZ.visibility = 0,
                            this.tEndZY.visibility = 0,
                            this.tEndYX.visibility = 0,
                            this.tEndAll.visibility = 0,
                            this.transEnabled = !1)
                        }
                        ,
                        e.prototype.isRotationEnabled = function() {
                            return this.rotEnabled
                        }
                        ,
                        e.prototype.returnEuler = function(e) {
                            this.eulerian = e
                        }
                        ,
                        e.prototype.enableRotation = function() {
                            null == this.rX && (this.createRotAxes(),
                            this.rCtl.parent = this.theParent),
                            this.clearPrevOverMesh(),
                            this.rotEnabled || (this.rEndX.visibility = this.visibility,
                            this.rEndY.visibility = this.visibility,
                            this.rEndZ.visibility = this.visibility,
                            this.rEndAll.visibility = this.visibility,
                            this.rotEnabled = !0,
                            this.disableTranslation(),
                            this.disableScaling())
                        }
                        ,
                        e.prototype.disableRotation = function() {
                            this.rotEnabled && (this.rEndX.visibility = 0,
                            this.rEndY.visibility = 0,
                            this.rEndZ.visibility = 0,
                            this.rEndAll.visibility = 0,
                            this.rotEnabled = !1)
                        }
                        ,
                        e.prototype.isScalingEnabled = function() {
                            return this.scaleEnabled
                        }
                        ,
                        e.prototype.enableScaling = function() {
                            null == this.sX && (this.createScaleAxes(),
                            this.sCtl.parent = this.theParent),
                            this.clearPrevOverMesh(),
                            this.scaleEnabled || (this.sEndX.visibility = this.visibility,
                            this.sEndY.visibility = this.visibility,
                            this.sEndZ.visibility = this.visibility,
                            this.sEndXZ.visibility = this.visibility,
                            this.sEndZY.visibility = this.visibility,
                            this.sEndYX.visibility = this.visibility,
                            this.sEndAll.visibility = this.visibility,
                            this.scaleEnabled = !0,
                            this.disableTranslation(),
                            this.disableRotation())
                        }
                        ,
                        e.prototype.disableScaling = function() {
                            this.scaleEnabled && (this.sEndX.visibility = 0,
                            this.sEndY.visibility = 0,
                            this.sEndZ.visibility = 0,
                            this.sEndXZ.visibility = 0,
                            this.sEndZY.visibility = 0,
                            this.sEndYX.visibility = 0,
                            this.sEndAll.visibility = 0,
                            this.scaleEnabled = !1)
                        }
                        ,
                        e.prototype.setScaleBounds = function(e, t) {
                            this.scaleBoundsMin = e || null,
                            this.scaleBoundsMax = t || null,
                            null != this.scaleBoundsMin && (0 == this.scaleBoundsMin.x && (this.scaleBoundsMin.x = 1e-8),
                            0 == this.scaleBoundsMin.y && (this.scaleBoundsMin.y = 1e-8),
                            0 == this.scaleBoundsMin.z && (this.scaleBoundsMin.z = 1e-8))
                        }
                        ,
                        e.prototype.removeScaleBounds = function() {
                            this.scaleBoundsMin = null,
                            this.scaleBoundsMax = null
                        }
                        ,
                        e.prototype.setTransBounds = function(e, t) {
                            this.transBoundsMin = e || null,
                            this.transBoundsMax = t || null
                        }
                        ,
                        e.prototype.removeTransBounds = function() {
                            this.transBoundsMin = null,
                            this.transBoundsMax = null
                        }
                        ,
                        e.prototype.setRotBounds = function(e, t) {
                            this.rotBoundsMin = e || null,
                            this.rotBoundsMax = t || null
                        }
                        ,
                        e.prototype.removeRotBounds = function() {
                            this.rotBoundsMin = null,
                            this.rotBoundsMax = null
                        }
                        ,
                        e.prototype.createGuideAxes = function() {
                            this.guideCtl = new r("guideCtl",this.scene),
                            this.bXaxis = r.CreateLines("bxAxis", [new h(-100,0,0), new h(100,0,0)], this.scene),
                            this.bYaxis = r.CreateLines("byAxis", [new h(0,-100,0), new h(0,100,0)], this.scene),
                            this.bZaxis = r.CreateLines("bzAxis", [new h(0,0,-100), new h(0,0,100)], this.scene),
                            this.bXaxis.isPickable = !1,
                            this.bYaxis.isPickable = !1,
                            this.bZaxis.isPickable = !1,
                            this.bXaxis.parent = this.guideCtl,
                            this.bYaxis.parent = this.guideCtl,
                            this.bZaxis.parent = this.guideCtl,
                            this.bXaxis.color = i.Red(),
                            this.bYaxis.color = i.Green(),
                            this.bZaxis.color = i.Blue(),
                            this.hideBaxis();
                            var e = this.axesLen * this.axesScale;
                            this.xaxis = r.CreateLines("xAxis", [new h(0,0,0), new h(e,0,0)], this.scene),
                            this.yaxis = r.CreateLines("yAxis", [new h(0,0,0), new h(0,e,0)], this.scene),
                            this.zaxis = r.CreateLines("zAxis", [new h(0,0,0), new h(0,0,e)], this.scene),
                            this.xaxis.isPickable = !1,
                            this.yaxis.isPickable = !1,
                            this.zaxis.isPickable = !1,
                            this.xaxis.parent = this.guideCtl,
                            this.yaxis.parent = this.guideCtl,
                            this.zaxis.parent = this.guideCtl,
                            this.xaxis.color = i.Red(),
                            this.yaxis.color = i.Green(),
                            this.zaxis.color = i.Blue()
                        }
                        ,
                        e.prototype.createPickPlanes = function() {
                            this.pALL = r.CreatePlane("pALL", 5, this.scene),
                            this.pXZ = r.CreatePlane("pXZ", 5, this.scene),
                            this.pZY = r.CreatePlane("pZY", 5, this.scene),
                            this.pYX = r.CreatePlane("pYX", 5, this.scene),
                            this.pALL.isPickable = !1,
                            this.pXZ.isPickable = !1,
                            this.pZY.isPickable = !1,
                            this.pYX.isPickable = !1,
                            this.pALL.visibility = 0,
                            this.pXZ.visibility = 0,
                            this.pZY.visibility = 0,
                            this.pYX.visibility = 0,
                            this.pALL.billboardMode = r.BILLBOARDMODE_ALL,
                            this.pXZ.rotate(n.X, 1.57),
                            this.pZY.rotate(n.Y, 1.57),
                            this.pickPlanes = new r("pickPlanes",this.scene),
                            this.pALL.parent = this.theParent,
                            this.pXZ.parent = this.pickPlanes,
                            this.pZY.parent = this.pickPlanes,
                            this.pYX.parent = this.pickPlanes
                        }
                        ,
                        e.prototype.createTransAxes = function() {
                            var e = .04 * this.axesScale
                              , t = this.axesLen * this.axesScale;
                            this.tCtl = new r("tarnsCtl",this.scene),
                            this.tX = this.extrudeBox(e / 2, t),
                            this.tX.name = "X",
                            this.tY = this.tX.clone("Y"),
                            this.tZ = this.tX.clone("Z"),
                            this.tXZ = a.CreatePlane("XZ", {
                                size: 2 * e
                            }, this.scene),
                            this.tZY = this.tXZ.clone("ZY"),
                            this.tYX = this.tXZ.clone("YX"),
                            this.tXZ.rotation.x = 1.57,
                            this.tZY.rotation.y = -1.57,
                            this.tXZ.position.x = e,
                            this.tXZ.position.z = e,
                            this.tZY.position.z = e,
                            this.tZY.position.y = e,
                            this.tYX.position.y = e,
                            this.tYX.position.x = e,
                            this.tAll = r.CreateBox("ALL", 2 * e, this.scene),
                            this.tX.parent = this.tCtl,
                            this.tY.parent = this.tCtl,
                            this.tZ.parent = this.tCtl,
                            this.tXZ.parent = this.tCtl,
                            this.tZY.parent = this.tCtl,
                            this.tYX.parent = this.tCtl,
                            this.tAll.parent = this.tCtl,
                            this.tX.rotation.y = 1.57,
                            this.tY.rotation.x -= 1.57,
                            this.tX.visibility = 0,
                            this.tY.visibility = 0,
                            this.tZ.visibility = 0,
                            this.tXZ.visibility = 0,
                            this.tZY.visibility = 0,
                            this.tYX.visibility = 0,
                            this.tAll.visibility = 0,
                            this.tX.isPickable = !1,
                            this.tY.isPickable = !1,
                            this.tZ.isPickable = !1,
                            this.tXZ.isPickable = !1,
                            this.tZY.isPickable = !1,
                            this.tYX.isPickable = !1,
                            this.tAll.isPickable = !1;
                            var n = t / 5
                              , i = e;
                            this.tEndX = r.CreateCylinder("tEndX", n, 0, i, 6, 1, this.scene),
                            this.tEndY = this.tEndX.clone("tEndY"),
                            this.tEndZ = this.tEndX.clone("tEndZ"),
                            this.tEndXZ = this.createTriangle("XZ", 1.75 * i, this.scene),
                            this.tEndZY = this.tEndXZ.clone("ZY"),
                            this.tEndYX = this.tEndXZ.clone("YX"),
                            this.tEndAll = a.CreatePolyhedron("tEndAll", {
                                type: 1,
                                size: i / 2
                            }, this.scene),
                            this.tEndX.rotation.x = 1.57,
                            this.tEndY.rotation.x = 1.57,
                            this.tEndZ.rotation.x = 1.57,
                            this.tEndXZ.rotation.x = -1.57,
                            this.tEndZY.rotation.x = -1.57,
                            this.tEndYX.rotation.x = -1.57,
                            this.tEndX.parent = this.tX,
                            this.tEndY.parent = this.tY,
                            this.tEndZ.parent = this.tZ,
                            this.tEndXZ.parent = this.tXZ,
                            this.tEndZY.parent = this.tZY,
                            this.tEndYX.parent = this.tYX,
                            this.tEndAll.parent = this.tAll,
                            this.tEndX.position.z = t - n / 2,
                            this.tEndY.position.z = t - n / 2,
                            this.tEndZ.position.z = t - n / 2,
                            this.tEndX.material = this.redMat,
                            this.tEndY.material = this.greenMat,
                            this.tEndZ.material = this.blueMat,
                            this.tEndXZ.material = this.redMat,
                            this.tEndZY.material = this.blueMat,
                            this.tEndYX.material = this.greenMat,
                            this.tEndAll.material = this.yellowMat,
                            this.tEndX.isPickable = !1,
                            this.tEndY.isPickable = !1,
                            this.tEndZ.isPickable = !1,
                            this.tEndXZ.isPickable = !1,
                            this.tEndZY.isPickable = !1,
                            this.tEndYX.isPickable = !1,
                            this.tEndAll.isPickable = !1
                        }
                        ,
                        e.prototype.createTriangle = function(e, t, n) {
                            var i = new o(t / 2,-t / 2).addLineTo(t / 2, t / 2).addLineTo(-t / 2, t / 2).addLineTo(t / 2, -t / 2);
                            return new BABYLON.PolygonMeshBuilder(e,i,n).build()
                        }
                        ,
                        e.prototype.createRotAxes = function() {
                            var e = this.axesLen * this.axesScale * 2;
                            this.rCtl = new r("rotCtl",this.scene),
                            this.rX = this.createTube(e / 2, 360),
                            this.rX.name = "X",
                            this.rY = this.rX.clone("Y"),
                            this.rZ = this.rX.clone("Z"),
                            this.rAll = this.createTube(e / 1.75, 360),
                            this.rAll.name = "ALL",
                            this.rX.parent = this.rCtl,
                            this.rY.parent = this.rCtl,
                            this.rZ.parent = this.rCtl,
                            this.rAll.parent = this.pALL,
                            this.rX.rotation.z = 1.57,
                            this.rZ.rotation.x = -1.57,
                            this.rAll.rotation.x = 1.57,
                            this.rX.visibility = 0,
                            this.rY.visibility = 0,
                            this.rZ.visibility = 0,
                            this.rAll.visibility = 0,
                            this.rX.isPickable = !1,
                            this.rY.isPickable = !1,
                            this.rZ.isPickable = !1,
                            this.rAll.isPickable = !1;
                            var t = e;
                            this.rEndX = this.createCircle(t / 2, 360, !1),
                            this.rEndY = this.rEndX.clone(""),
                            this.rEndZ = this.rEndX.clone(""),
                            this.rEndAll = this.createCircle(t / 1.75, 360, !1),
                            this.rEndX.parent = this.rX,
                            this.rEndY.parent = this.rY,
                            this.rEndZ.parent = this.rZ,
                            this.rEndAll.parent = this.rAll,
                            this.rEndX.color = i.Red(),
                            this.rEndY.color = i.Green(),
                            this.rEndZ.color = i.Blue(),
                            this.rEndAll.color = i.Yellow(),
                            this.rEndX.isPickable = !1,
                            this.rEndY.isPickable = !1,
                            this.rEndZ.isPickable = !1,
                            this.rEndAll.isPickable = !1
                        }
                        ,
                        e.prototype.extrudeBox = function(e, t) {
                            var n = [new h(e,e,0), new h(-e,e,0), new h(-e,-e,0), new h(e,-e,0), new h(e,e,0)]
                              , i = [new h(0,0,0), new h(0,0,t)];
                            return r.ExtrudeShape("", n, i, 1, 0, 2, this.scene)
                        }
                        ,
                        e.prototype.createCircle = function(e, t, n) {
                            null === t && (t = 360);
                            for (var i, a, o = [], s = 3.14 / 180, c = 0, f = 0; f <= t; f += 10)
                                i = e * Math.cos(f * s),
                                a = 90 == f ? e : 270 == f ? -e : e * Math.sin(f * s),
                                o[c] = new h(i,0,a),
                                c++;
                            if (n) {
                                e -= .04;
                                for (var f = 0; f <= t; f += 10)
                                    i = e * Math.cos(f * s),
                                    a = 90 == f ? e : 270 == f ? -e : e * Math.sin(f * s),
                                    o[c] = new h(i,0,a),
                                    c++
                            }
                            return r.CreateLines("", o, this.scene)
                        }
                        ,
                        e.prototype.createTube = function(e, t) {
                            null === t && (t = 360);
                            for (var n, i, a = [], o = 3.14 / 180, s = 0, c = 0; c <= t; c += 30)
                                n = e * Math.cos(c * o),
                                i = 90 == c ? e : 270 == c ? -e : e * Math.sin(c * o),
                                a[s] = new h(n,0,i),
                                s++;
                            return r.CreateTube("", a, .02, 3, null, BABYLON.Mesh.NO_CAP, this.scene)
                        }
                        ,
                        e.prototype.createScaleAxes = function() {
                            var e = .04 * this.axesScale
                              , t = this.axesLen * this.axesScale;
                            this.sCtl = new r("sCtl",this.scene),
                            this.sX = this.extrudeBox(e / 2, t),
                            this.sX.name = "X",
                            this.sY = this.sX.clone("Y"),
                            this.sZ = this.sX.clone("Z"),
                            this.sXZ = a.CreatePlane("XZ", {
                                size: 2 * e
                            }, this.scene),
                            this.sZY = this.sXZ.clone("ZY"),
                            this.sYX = this.sXZ.clone("YX"),
                            this.sXZ.rotation.x = 1.57,
                            this.sZY.rotation.y = -1.57,
                            this.sXZ.position.x = e,
                            this.sXZ.position.z = e,
                            this.sZY.position.z = e,
                            this.sZY.position.y = e,
                            this.sYX.position.y = e,
                            this.sYX.position.x = e,
                            this.sAll = r.CreateBox("ALL", 2 * e, this.scene),
                            this.sX.material = this.redMat,
                            this.sY.material = this.greenMat,
                            this.sZ.material = this.blueMat,
                            this.sAll.material = this.yellowMat,
                            this.sX.parent = this.sCtl,
                            this.sY.parent = this.sCtl,
                            this.sZ.parent = this.sCtl,
                            this.sAll.parent = this.sCtl,
                            this.sXZ.parent = this.sCtl,
                            this.sZY.parent = this.sCtl,
                            this.sYX.parent = this.sCtl,
                            this.sX.rotation.y = 1.57,
                            this.sY.rotation.x -= 1.57,
                            this.sX.visibility = 0,
                            this.sY.visibility = 0,
                            this.sZ.visibility = 0,
                            this.sXZ.visibility = 0,
                            this.sZY.visibility = 0,
                            this.sYX.visibility = 0,
                            this.sAll.visibility = 0,
                            this.sX.isPickable = !1,
                            this.sY.isPickable = !1,
                            this.sZ.isPickable = !1,
                            this.sXZ.isPickable = !1,
                            this.sZY.isPickable = !1,
                            this.sYX.isPickable = !1,
                            this.sAll.isPickable = !1;
                            var n = e;
                            this.sEndX = r.CreateBox("", n, this.scene),
                            this.sEndY = this.sEndX.clone(""),
                            this.sEndZ = this.sEndX.clone(""),
                            this.sEndAll = a.CreatePolyhedron("sEndAll", {
                                type: 1,
                                size: n / 2
                            }, this.scene),
                            this.sEndXZ = this.createTriangle("XZ", 1.75 * n, this.scene),
                            this.sEndZY = this.sEndXZ.clone("ZY"),
                            this.sEndYX = this.sEndXZ.clone("YX"),
                            this.sEndXZ.rotation.x = -1.57,
                            this.sEndZY.rotation.x = -1.57,
                            this.sEndYX.rotation.x = -1.57,
                            this.sEndX.parent = this.sX,
                            this.sEndY.parent = this.sY,
                            this.sEndZ.parent = this.sZ,
                            this.sEndXZ.parent = this.sXZ,
                            this.sEndZY.parent = this.sZY,
                            this.sEndYX.parent = this.sYX,
                            this.sEndAll.parent = this.sAll,
                            this.sEndX.position.z = t - n / 2,
                            this.sEndY.position.z = t - n / 2,
                            this.sEndZ.position.z = t - n / 2,
                            this.sEndX.material = this.redMat,
                            this.sEndY.material = this.greenMat,
                            this.sEndZ.material = this.blueMat,
                            this.sEndXZ.material = this.redMat,
                            this.sEndZY.material = this.blueMat,
                            this.sEndYX.material = this.greenMat,
                            this.sEndAll.material = this.yellowMat,
                            this.sEndX.isPickable = !1,
                            this.sEndY.isPickable = !1,
                            this.sEndZ.isPickable = !1,
                            this.sEndXZ.isPickable = !1,
                            this.sEndZY.isPickable = !1,
                            this.sEndYX.isPickable = !1,
                            this.sEndAll.isPickable = !1
                        }
                        ,
                        e.prototype.setLocalAxes = function(e) {
                            var t = e.getWorldMatrix();
                            h.FromFloatArrayToRef(t.asArray(), 0, this.localX),
                            h.FromFloatArrayToRef(t.asArray(), 4, this.localY),
                            h.FromFloatArrayToRef(t.asArray(), 8, this.localZ)
                        }
                        ,
                        e.prototype.setLocal = function(e) {
                            this.local != e && (this.local = e,
                            e || (this.theParent.rotationQuaternion = s.Identity()))
                        }
                        ,
                        e.prototype.isLocal = function() {
                            return this.local
                        }
                        ,
                        e.prototype.setTransSnap = function(e) {
                            this.snapT = e
                        }
                        ,
                        e.prototype.setRotSnap = function(e) {
                            this.snapR = e
                        }
                        ,
                        e.prototype.setScaleSnap = function(e) {
                            this.snapS = e
                        }
                        ,
                        e.prototype.setTransSnapValue = function(e) {
                            this.tSnap = new h(e,e,e),
                            this.transSnap = e
                        }
                        ,
                        e.prototype.setRotSnapValue = function(e) {
                            this.rotSnap = e
                        }
                        ,
                        e.prototype.setScaleSnapValue = function(e) {
                            this.scaleSnap = e
                        }
                        ,
                        e.getAngle = function(e, t, n, i) {
                            var r = e.subtract(n)
                              , a = t.subtract(n)
                              , o = h.Cross(r, a)
                              , s = Math.asin(o.length() / (r.length() * a.length()));
                            return h.Dot(o, i) < 0 && (s *= -1),
                            s
                        }
                        ,
                        e.prototype.createMaterials = function(t) {
                            this.redMat = e.getStandardMaterial("redMat", i.Red(), t),
                            this.greenMat = e.getStandardMaterial("greenMat", i.Green(), t),
                            this.blueMat = e.getStandardMaterial("blueMat", i.Blue(), t),
                            this.whiteMat = e.getStandardMaterial("whiteMat", i.White(), t),
                            this.yellowMat = e.getStandardMaterial("whiteMat", i.Yellow(), t)
                        }
                        ,
                        e.prototype.disposeMaterials = function() {
                            this.redMat.dispose(),
                            this.greenMat.dispose(),
                            this.blueMat.dispose(),
                            this.whiteMat.dispose(),
                            this.yellowMat.dispose()
                        }
                        ,
                        e.getStandardMaterial = function(e, t, n) {
                            var r = new f(e,n);
                            return r.emissiveColor = t,
                            r.diffuseColor = i.Black(),
                            r.specularColor = i.Black(),
                            r.backFaceCulling = !1,
                            r
                        }
                        ,
                        e
                    }();
                    e.EditControl = u;
                    var d = function() {
                        function e(e, t) {
                            this.lastMax = 10,
                            this.acts = new Array,
                            this.last = -1,
                            this.current = -1,
                            this.mesh = e,
                            this.lastMax = t - 1,
                            this.add()
                        }
                        return e.prototype.setCapacity = function(e) {
                            if (0 == e)
                                return void console.error("capacity should be more than zero");
                            this.lastMax = e - 1,
                            this.last = -1,
                            this.current = -1,
                            this.acts = new Array,
                            this.add()
                        }
                        ,
                        e.prototype.add = function(e) {
                            void 0 === e && (e = null);
                            var t = new l(this.mesh,e);
                            this.current < this.last && (this.acts.splice(this.current + 1),
                            this.last = this.current),
                            this.last == this.lastMax ? (this.acts.shift(),
                            this.acts.push(t)) : (this.acts.push(t),
                            this.last++,
                            this.current++)
                        }
                        ,
                        e.prototype.undo = function() {
                            if (this.current > 0) {
                                var e = this.acts[this.current].getActionType();
                                return this.current--,
                                this.acts[this.current].perform(this.mesh),
                                e
                            }
                        }
                        ,
                        e.prototype.redo = function() {
                            if (this.current < this.last)
                                return this.current++,
                                this.acts[this.current].perform(this.mesh),
                                this.acts[this.current].getActionType()
                        }
                        ,
                        e
                    }();
                    e.ActHist = d;
                    var l = function() {
                        function e(e, t) {
                            this.p = e.position.clone(),
                            null == e.rotationQuaternion ? (this.rQ = null,
                            this.rE = e.rotation.clone()) : (this.rQ = e.rotationQuaternion.clone(),
                            this.rE = null),
                            this.s = e.scaling.clone(),
                            this.at = t
                        }
                        return e.prototype.getActionType = function() {
                            return this.at
                        }
                        ,
                        e.prototype.perform = function(e) {
                            e.position.copyFrom(this.p),
                            null == e.rotationQuaternion ? null != this.rE ? e.rotation.copyFrom(this.rE) : e.rotation.copyFrom(this.rQ.toEulerAngles()) : null != this.rQ ? e.rotationQuaternion.copyFrom(this.rQ) : e.rotationQuaternion.copyFrom(s.RotationYawPitchRoll(this.rE.y, this.rE.x, this.rE.z)),
                            e.scaling.copyFrom(this.s)
                        }
                        ,
                        e
                    }();
                    e.Act = l
                }(e.component || (e.component = {}))
            }(e.babylonjs || (e.babylonjs = {}))
        }(e.ssatguru || (e.ssatguru = {}))
    }(i || (i = {})),
    e.exports = i.ssatguru.babylonjs.component
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , a = n(5)
      , o = a.TWEEN_TIMER
      , s = BABYLON.Vector3
      , c = BABYLON.Mesh
      , f = n(619)
      , h = n(621)
      , u = n(622)
      , d = n(623)
      , l = n(111)
      , p = n(624)
      , b = n(6).CommandManager
      , v = n(625)
      , y = (n(157),
    n(640))
      , m = n(75)
      , g = n(649)
      , w = n(650);
    BABYLON.Epsilon = 1e-5,
    BABYLON.SceneLoader.ShowLoadingScreen = !1;
    var _ = function() {
        function e(t) {
            i(this, e),
            this.setData(t),
            this.defaultTarget = new BABYLON.Vector3(0,0,0),
            this.isLoading = !1,
            this.renderAnnotation = !0;
            var n = this;
            if (this._httpLoadingSet = new Set,
            this._resize = y(function() {
                n.scene && n.scene.getEngine && n.scene.getEngine().resize()
            }, 300, {
                maxWait: 3e3
            }),
            window.addEventListener("resize", this._resize),
            this.scene = this.createScene(),
            this.scene instanceof w)
                return this.scene.loadMesh(t["model-url"]),
                void setTimeout(function() {
                    n.data.callback.sceneCreationComplete && n.data.callback.sceneCreationComplete.call()
                }, 0);
            "string" == typeof t.tipURL ? $.getJSON(t.config.URI_PREFIX + t.tipURL, function(e) {
                t.tips = e,
                n.initCore()
            }).fail(function() {
                t.tips = [],
                n.initCore()
            }) : setTimeout(function() {
                n.initCore()
            }, 0),
            window.b = this
        }
        return r(e, [{
            key: "setData",
            value: function(e) {
                if (this.data = e,
                e.config = Object.assign(a.config, e.config),
                e.func = e.func || {},
                e.camera = e.camera || {
                    isDefault: !0
                },
                void 0 === e.camera.alpha && (e.camera.alpha = a.camera.ALPHA),
                void 0 === e.camera.beta && (e.camera.beta = a.camera.BETA),
                this.renderingCanvas = e.canvas,
                e.tips)
                    throw "tips 已废弃，请使用tipURL代替";
                if (e.animation || (e.animation = {
                    autoPlay: !1
                }),
                e["write-tip-url"])
                    throw "write-tip-url 已废弃，请使用tipURL代替";
                void 0 === e.importScene && (e.importScene = !1),
                e.callback || (this.data.callback = {}),
                e.annotation || (e.annotation = {
                    visible: !0
                }),
                "threeDLine" === e.annotation.type && (e.annotation.line = Object.assign({
                    color: 16777215,
                    scale: 1,
                    alpha: 1,
                    thickness: 1
                }, e.annotation.line),
                e.annotation.visible = !0)
            }
        }, {
            key: "initCore",
            value: function() {
                if (this.data) {
                    var e = this.data.emitter;
                    this.updateEmitter(e),
                    this.commandManager = new b(this),
                    new v(this.commandManager),
                    this.animationManager = new p(this);
                    var t = n(651);
                    this.player = new t(this,this.data),
                    this.loadMesh(),
                    this.execute(a.commands.CHECK_ENV).then(function() {
                        _this.execute(a.commands.SET_ANNOTATION_VISIBLE, !0)
                    }).catch(function() {}),
                    this.execute(a.commands.PIXI_PLUGIN),
                    this.data.interactiveCanvas && this.updateInteractiveCanvas(this.data.interactiveCanvas),
                    e && e.emit(a.event.SCENE_CREATION_COMPLETE),
                    this.data.callback.sceneCreationComplete && this.data.callback.sceneCreationComplete.call()
                }
            }
        }, {
            key: "updateEmitter",
            value: function(e) {
                e && e.on && (this.renderFunc = this.render.bind(this),
                e.on(this.data.emitterTrigger || "update", this.renderFunc))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.scene;
                if (e) {
                    var t = e.getEngine();
                    t.beginFrame();
                    var n = e.activeCamera;
                    if (n) {
                        if (Math.abs(n.inertialRadiusOffset) > 15 && (n.inertialRadiusOffset = n.inertialRadiusOffset / Math.abs(n.inertialRadiusOffset) * 15),
                        n.target) {
                            var i = BABYLON.Vector3.Distance(n.position, n.target);
                            if (n.inertialRadiusOffset > 0 && i < 10) {
                                var r = (i - .1) / 9.9
                                  , o = n.inertialRadiusOffset;
                                n.inertialRadiusOffset *= Math.pow(r, .7),
                                isNaN(n.inertialRadiusOffset) && (n.inertialRadiusOffset = o)
                            }
                        }
                        void 0 !== n.targetRadius && (n.targetRadius = Math.min(Math.max(n.lowerRadiusLimit || 0, n.targetRadius), n.upperRadiusLimit || n.targetRadius),
                        Math.abs(n.targetRadius - n.radius) > .1 ? n.radius += .15 * (n.targetRadius - n.radius) : delete n.targetRadius);
                        var c = this.retrieveSprites(a.sprite.ANNOTATION);
                        c && (l.UpdateSpriteRenderData(c),
                        c.forEach(function(e) {
                            var t = s.Distance(e.position, n.position);
                            e.size = t / a.data.ANNOTATION_SIZE,
                            e.updateTip()
                        }));
                        var f = this.focusingManager;
                        f && f.tempSprites.forEach(function(e) {
                            var t = s.Distance(e.position, n.position);
                            e.size = t * e.tsize * .2
                        }),
                        this.scene.render(),
                        this.player.update(),
                        t.endFrame()
                    }
                }
            }
        }, {
            key: "disposeLoadingObjects",
            value: function() {
                return this._httpLoadingSet.forEach(function(e) {
                    e.abort()
                }),
                this._httpLoadingSet.size > 0 && (this._httpLoadingSet.clear(),
                !0)
            }
        }, {
            key: "disposeSceneObjects",
            value: function() {
                if (this.scene && !(this.scene instanceof w)) {
                    delete this.defaultRadius,
                    this.disposeLoadingObjects();
                    for (var e = this.scene.meshes; e.length; )
                        e[0].dispose(!0);
                    var t = this.scene.lights.concat();
                    for (var n in t) {
                        var i = t[n];
                        i.nbLight || i.dispose()
                    }
                    var r = this.scene.cameras.concat();
                    for (var a in r) {
                        var o = r[a];
                        o.nbCamera || o.dispose()
                    }
                    this.scene.sprite;
                    console.log("---\x3esprite"),
                    this.scene.spriteManagers.forEach(function(e) {
                        if (e.tempSprites) {
                            for (var t = 0; t < e.tempSprites.length; t++)
                                e.tempSprites[t].dispose();
                            e.tempSprites.length = 0
                        } else
                            for (; e.sprites[0]; )
                                e.sprites[0].dispose()
                    }),
                    l.clearData()
                }
            }
        }, {
            key: "loadMesh",
            value: function(e, t) {
                function n(e) {
                    var n = e;
                    if (e instanceof BABYLON.Scene) {
                        if (e.activeCamera) {
                            var i = e.activeCamera.position
                              , r = c.MinMax(e.meshes)
                              , f = h.defaultTarget = d ? BABYLON.Vector3.Center(r.min, r.max) : h.defaultTarget || BABYLON.Vector3.Zero()
                              , u = s.Distance(i, f)
                              , l = i.subtract(f);
                            if (!h.data.camera.alpha) {
                                var p = Math.atan2(l.z, l.x);
                                h.data.camera.alpha = p
                            }
                            if (!h.data.camera.beta) {
                                var b = Math.acos(l.y / u);
                                h.data.camera.beta = b
                            }
                        }
                        n = e.meshes
                    }
                    h.updateCamera(a.camera.ARC_CAMERA),
                    h.updateCameraVision(n),
                    n.forEach(function(e) {
                        e.isPickable = !0,
                        e.checkCollisions = !0,
                        e.isImported = !0,
                        e.actionManager = new g(h),
                        e.material && (e.material.backFaceCulling = !1,
                        e.material.subMaterials && e.material.subMaterials.forEach(function(e) {
                            e.backFaceCulling = !1
                        }))
                    }),
                    h.updateTips();
                    var v = h.data.annotation.visible;
                    if (a.isDebug && (v = !0),
                    h.execute(a.commands.SET_ANNOTATION_VISIBLE, v),
                    h.execute(a.commands.CONFIGURE_MATERIAL, h.data),
                    h.execute(a.commands.CONFIGURE_PIPELINE, h.data),
                    h.setLoading(!1),
                    h.animationManager.pause(),
                    h.animationManager.updateAnimatables(),
                    m.hasAnimation(h.scene) ? (h.player.showAnimationSetting(!0),
                    h.execute(a.commands.PLAY_ANIMATION_COMMAND, h.data.animation.autoPlay)) : h.player.showAnimationSetting(!1),
                    t["clear-color"] || h.data["clear-color"]) {
                        var y = t["clear-color"] ? t["clear-color"] : h.data["clear-color"];
                        h.scene.clearColor = BABYLON.Color4.FromHexString("#" + y.toString(16))
                    } else
                        h.scene.clearColor = new BABYLON.Color4(0,0,0,1);
                    if (h.scene.getEngine().resize(),
                    h.minMax) {
                        var w = h.scene.activeCamera
                          , _ = s.Distance(h.minMax.min, h.minMax.max);
                        w.defaultDistance = _;
                        var A = h.data.camera.lowerRadiusLimit
                          , M = h.data.camera.upperRadiusLimit;
                        w.lowerRadiusLimit = void 0 !== A ? A : _ / 4,
                        w.upperRadiusLimit = void 0 !== M ? M : 4 * _
                    }
                    o(),
                    t.loaded && t.loaded(e)
                }
                function i(e) {
                    var t = e.currentTarget;
                    h._httpLoadingSet.add(t);
                    var n = e.loaded / e.total;
                    h.setLoading(!0, n),
                    1 === n && h._httpLoadingSet.delete(t)
                }
                function r(e, t, n) {
                    console.error(t),
                    console.error(n)
                }
                function o() {
                    h.data.func.loaded && h.data.func.loaded(h.scene),
                    new f(h),
                    h.data.plugins && h.data.plugins.forEach(function(e) {
                        h.execute(e.command, e.data)
                    })
                }
                t = t || {};
                var h = this
                  , u = e || this.data["model-url"]
                  , d = e ? !!t.importScene : this.data.importScene;
                if (this.scene instanceof w)
                    return void this.scene.loadMesh(u);
                if (!u)
                    return console.warn("没有传入 model-url"),
                    void o();
                this.setLoading(!0);
                var l = u.lastIndexOf("/")
                  , p = u.substr(0, l + 1)
                  , b = u.substr(l + 1);
                d ? BABYLON.SceneLoader.Append(p, b, this.scene, n, i, r) : BABYLON.SceneLoader.ImportMesh("", p, b, this.scene, n, i, r)
            }
        }, {
            key: "createScene",
            value: function() {
                var e = void 0
                  , t = this.data.canvas;
                if (t || (t = document.createElement("canvas"),
                t.width = window.innerWidth,
                t.height = window.innerHeight,
                t.style.touchAction = "none",
                document.body.append(t)),
                !t.engine) {
                    try {
                        e = new BABYLON.Engine(t,!0)
                    } catch (e) {
                        if ("WebGL not supported" === e.message)
                            return new w(this)
                    }
                    t.engine = e
                }
                var n = new BABYLON.Scene(e);
                if (n.babylonScene = this,
                n.interactiveCanvas = t,
                this.scene = n,
                n.preventDefaultOnPointerDown = !1,
                this.updateInteractiveCanvas(this.data.interactiveCanvas),
                !this.data.importScene) {
                    new BABYLON.HemisphericLight("ambient",BABYLON.Vector3.Up(),n).nbLight = !0
                }
                if (this.data.light)
                    if ("default" === this.data.light.name)
                        new BABYLON.DirectionalLight("defaultDir0",new BABYLON.Vector3(0,-1,0),n),
                        new BABYLON.DirectionalLight("defaultDir1",new BABYLON.Vector3(0,1,0),n);
                    else if ("around" === this.data.light.name)
                        for (var i = 0; i < 3; i++) {
                            var r = Math.cos(i / 3 * Math.PI * 2)
                              , a = Math.sin(i / 3 * Math.PI * 2);
                            new BABYLON.DirectionalLight("around" + i,new BABYLON.Vector3(r,a,0),n)
                        }
                this.engine = e;
                var o = new u(this);
                n.actionManager = o;
                var s = this.data.skybox;
                if (s) {
                    var c = void 0;
                    c = /\.hdr$/.test(s.texture) ? new BABYLON.HDRCubeTexture(s.texture,n,256) : new BABYLON.CubeTexture(s.texture,n,null,!1,null,null,null,void 0,!0),
                    c.gammaSpace = !1;
                    n.createDefaultSkybox(c, s.pbr, s.scale || 1e3, void 0 === s.blur ? .3 : s.blur).isPickable = !1
                }
                n.activeCamera;
                return n
            }
        }, {
            key: "updateTips",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , i = this.retrieveSprites(a.sprite.ANNOTATION).concat();
                i && i.forEach(function(e) {
                    e.dispose()
                });
                var r = this.data.tips;
                r && r.forEach(function(i) {
                    var r = i.title
                      , a = r.split(":")
                      , o = void 0;
                    if (a.length > 1 && e && (o = a[0],
                    e.test(o))) {
                        return void new l(t,t.data.annotation).setSceneData(i)
                    }
                    if (!1 === n) {
                        new l(t,t.data.annotation).setSceneData(i)
                    }
                })
            }
        }, {
            key: "setTipsInteractive",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = this.retrieveSprites(a.sprite.ANNOTATION).concat();
                t && t.forEach(function(t) {
                    var n = t.tip2D
                      , i = n.text
                      , r = n.graphics;
                    i.interactive = r.interactive = e
                })
            }
        }, {
            key: "updateCameraVision",
            value: function(e) {
                e = e || this.scene.meshes;
                var t = c.MinMax(e)
                  , n = this.scene.activeCamera;
                this.minMax = t;
                var i = this.getCameraInitRadius(this.minMax);
                n.radius = this.defaultRadius = this.defaultRadius || i,
                n.wheelPrecision = 400 / n.radius,
                n.radius *= 6.18,
                this.defaultTarget = BABYLON.Vector3.Center(t.min, t.max),
                this.zoomOut()
            }
        }, {
            key: "getCameraInitRadius",
            value: function(e) {
                return 1.2 * s.Distance(e.min, e.max)
            }
        }, {
            key: "setLoading",
            value: function(e, t) {
                this.isLoading = e,
                this.data && this.data.func.loading && this.data.func.loading(e, t)
            }
        }, {
            key: "lookAtVector",
            value: function(e, t) {
                t = t || {};
                var n = this.scene
                  , i = e
                  , r = n.activeCamera
                  , s = this.getEaseFunc()
                  , c = r.target;
                if (TweenMax.to(this, t.duration || o, {
                    ease: this.getEaseFunc(),
                    onUpdate: function() {
                        var e = s.getRatio(this.progress());
                        if (c) {
                            var n = new BABYLON.Vector3(c.x + (i.x - c.x) * e,c.y + (i.y - c.y) * e,c.z + (i.z - c.z) * e);
                            r.setTarget(n)
                        }
                        t && void 0 !== t.alpha && (r.alpha = m.getShortRotation(r.alpha, t.alpha))
                    }
                }),
                t && void 0 !== t.alpha) {
                    r.alpha %= 2 * Math.PI,
                    r.beta %= 2 * Math.PI,
                    void 0 !== t.alpha && (r.alpha = m.getShortRotation(r.alpha, t.alpha));
                    var f = a.camera.FOV
                      , h = a.camera.MIN_ZOOM_FOV
                      , u = Math.abs(t.alpha - r.alpha)
                      , d = u / Math.PI
                      , l = (1 - d) * h
                      , p = {
                        ease: s,
                        onStart: function() {},
                        onUpdate: function() {
                            var e = this.progress()
                              , t = void 0;
                            t = e < .5 ? f + (l - f) * Sine.easeInOut.getRatio(2 * e) * d : f + (l - f) * Sine.easeInOut.getRatio(2 * (1 - e)) * d,
                            r.fov = t
                        }
                    };
                    Object.assign(p, t),
                    TweenMax.to(r, p.duration || o, p)
                }
            }
        }, {
            key: "setMeshesVisible",
            value: function(e, t) {
                var n = 2
                  , i = 0;
                t && (n = void 0 === t.timer ? 2 : t.timer,
                i = void 0 === t.display ? 0 : t.display);
                var r = this.scene.meshes
                  , a = void 0;
                a = e instanceof RegExp ? e : new RegExp(e);
                for (var o = [], s = 0; s < r.length; s++)
                    a.test(r[s].name) && o.push(r[s].name);
                for (var c = [], f = 0; f < o.length; f++)
                    c.push(this.scene.getMeshByName(o[f]));
                TweenMax.to(c, n, {
                    ease: Sine.easeInOut,
                    visibility: i
                })
            }
        }, {
            key: "retrieveSprites",
            value: function(e) {
                var t = this.getSpriteManagerByName(e);
                return t ? t.tempSprites || t.sprites : []
            }
        }, {
            key: "getSpriteManagerByName",
            value: function(e) {
                for (var t = this.scene.spriteManagers, n = 0; n < t.length; n++)
                    if (t[n].name === e)
                        return t[n]
            }
        }, {
            key: "lookAtSpriteByName",
            value: function(e, t) {
                for (var n = this.retrieveSprites(a.sprite.ANNOTATION), i = 0; i < n.length; i++) {
                    var r = n[i]
                      , o = r.getSceneData()
                      , s = o.title
                      , c = s.split(":");
                    if ((s = c[c.length - 1]) === e) {
                        r.zoomIn(t),
                        this.emitterEvent(a.event.annotation.CLICK_TIP, o);
                        break
                    }
                }
            }
        }, {
            key: "emitterEvent",
            value: function(e, t) {
                this.data.emitter && this.data.emitter.emit && this.data.emitter.emit(e, t)
            }
        }, {
            key: "zoomOut",
            value: function(e) {
                this.lookAtVector(this.defaultTarget);
                var t = this
                  , n = this.scene.activeCamera.alpha = this.scene.activeCamera.alpha % (2 * Math.PI)
                  , i = this.scene.activeCamera.beta = this.scene.activeCamera.beta % (2 * Math.PI)
                  , r = t.data.camera.alpha
                  , a = t.data.camera.beta;
                TweenMax.to(this.scene.activeCamera, o, {
                    radius: this.defaultRadius,
                    ease: this.getEaseFunc(),
                    onComplete: function() {
                        e && e()
                    },
                    alpha: m.getShortRotation(r, n),
                    beta: m.getShortRotation(a, i)
                })
            }
        }, {
            key: "getEaseFunc",
            value: function() {
                return Power2.easeInOut
            }
        }, {
            key: "getActionManagerByName",
            value: function(e) {
                if (void 0 === this.actionMap && (this.actionMap = {}),
                e === a.action.ANNOTATION)
                    return void 0 === this.actionMap[a.action.ANNOTATION] && (this.actionMap[a.action.ANNOTATION] = new h(this)),
                    this.actionMap[a.action.ANNOTATION]
            }
        }, {
            key: "setAnnotationVisible",
            value: function(e) {
                this.renderAnnotation = e,
                l.SetAnnotationVisible(e)
            }
        }, {
            key: "updateCamera",
            value: function(e) {
                this._cameraMap || (this._cameraMap = {});
                var t = this._cameraMap
                  , n = this.scene;
                if (!n.activeCamera || t[e] !== n.activeCamera) {
                    var i = new BABYLON.Vector3(0,0,0);
                    this.execute(a.commands.SET_CAMERA_CONTROL, {
                        enabled: !1
                    });
                    var r = void 0
                      , s = void 0
                      , f = void 0;
                    if (void 0 === this.minMax && n.meshes.length > 0) {
                        var h = c.MinMax(n.meshes);
                        this.minMax = h,
                        this.defaultTarget = BABYLON.Vector3.Center(h.min, h.max)
                    }
                    if (void 0 === t[e]) {
                        if (e === a.camera.ARC_CAMERA) {
                            var u = this.getCameraInitRadius(this.minMax);
                            r = new BABYLON.ArcRotateCamera("rotateCamera",1.4,3.1,6.18 * u,i,n),
                            r.inputs.attached.pointers.buttons = [0, 2],
                            r.lowerRadiusLimit = .1,
                            r.wheelPrecision = 40,
                            r.minZ = .05,
                            r.noRotationConstraint = !1,
                            r._useCtrlForPanning = !1
                        } else if (e === a.camera.VR_ARC_CAMERA) {
                            r = new BABYLON.VRDeviceOrientationArcRotateCamera("vrCamera",0,60 / 180 * Math.PI,1,i,n);
                            var d = BABYLON.Vector3.Distance(this.minMax.min, this.minMax.max);
                            s = this.defaultTarget.clone().add(new BABYLON.Vector3(.707 * d,0,.707 * d)),
                            f = this.defaultTarget
                        } else if (e === a.camera.FREE_CAMERA) {
                            r = new BABYLON.FreeCamera("freeCamera",i,n);
                            var l = r.inputs.attached.keyboard;
                            l.keysUp.push("W".charCodeAt(0)),
                            l.keysDown.push("S".charCodeAt(0)),
                            l.keysLeft.push("A".charCodeAt(0)),
                            l.keysRight.push("D".charCodeAt(0));
                            var p = BABYLON.Vector3.Distance(this.minMax.min, this.minMax.max);
                            s = this.defaultTarget.clone().add(new BABYLON.Vector3(.5 * p,0,.5 * p)),
                            f = this.defaultTarget
                        } else if (e === a.camera.VR_FREE_CAMERA) {
                            r = new BABYLON.VRDeviceOrientationFreeCamera("vrFreeCamera",i,n);
                            var b = r.inputs.attached.keyboard;
                            b.keysUp.push("W".charCodeAt(0)),
                            b.keysDown.push("S".charCodeAt(0)),
                            b.keysLeft.push("A".charCodeAt(0)),
                            b.keysRight.push("D".charCodeAt(0));
                            var v = BABYLON.Vector3.Distance(this.minMax.min, this.minMax.max);
                            s = this.defaultTarget.clone().add(new BABYLON.Vector3(.5 * v,0,.5 * v)),
                            f = this.defaultTarget
                        } else if (e === a.camera.ANAGLYPH_CAMERA) {
                            var y = n.activeCamera.alpha
                              , m = n.activeCamera.beta
                              , g = n.activeCamera.radius;
                            r = new BABYLON.AnaglyphArcRotateCamera("anaglyphCamera",y,m,g,BABYLON.Vector3.Zero(),0,n),
                            r.inputs.attached.pointers.buttons = [0, 2],
                            r.lowerRadiusLimit = .1,
                            r.wheelPrecision = 40,
                            r.minZ = .05
                        } else {
                            if (e !== a.camera.STEREOSCOPIC_CAMERA)
                                return;
                            var w = n.activeCamera.alpha
                              , _ = n.activeCamera.beta
                              , A = n.activeCamera.radius;
                            r = new BABYLON.StereoscopicArcRotateCamera("stereoscopicCamera",w,_,A,BABYLON.Vector3.Zero(),0,!1,n)
                        }
                        t[e] = {
                            camera: r,
                            position: s,
                            cameraTarget: f
                        },
                        r.nbCamera = !0
                    } else {
                        var M = t[e];
                        r = M.camera,
                        s = M.cameraPosition,
                        f = M.cameraTarget
                    }
                    i = new BABYLON.Vector3(0,0,0),
                    e === a.camera.ARC_CAMERA && (r._useCtrlForPanning = !1);
                    var E = this.scene.activeCamera;
                    if (E && "string" != typeof E.position.x && E.nbCamera) {
                        for (var S in t)
                            if (t[S].camera === n.activeCamera) {
                                t[S].cameraPosition = E.position.clone(),
                                t[S].cameraTarget = this.defaultTarget;
                                break
                            }
                        r.setPosition ? r.setPosition(E.position) : r.position.copyFrom(E.position)
                    } else
                        void 0 !== r.alpha && (r.alpha = Math.random() * Math.PI,
                        r.beta = Math.random() * Math.PI);
                    s && i.copyFrom(s);
                    r.target && r.target.clone();
                    TweenMax.to(r.position, o, {
                        x: i.x,
                        y: i.y,
                        z: i.z,
                        onUpdate: function() {
                            f && (e === a.camera.ARC_CAMERA || r.setTarget(f))
                        }
                    });
                    n.activeCamera = r,
                    this.execute(a.commands.SET_CAMERA_CONTROL, {
                        enabled: !0
                    })
                }
            }
        }, {
            key: "setRenderType",
            value: function(e) {
                this.scene.materials;
                switch (e) {
                case a.render.ORDINARY:
                    this.scene.forceWireframe = !1;
                    break;
                case a.render.WIREFRAME:
                    this.scene.forceWireframe = !0
                }
            }
        }, {
            key: "createSkyBox",
            value: function() {}
        }, {
            key: "updateSetting",
            value: function(e) {
                var t = /^camera:(.*)/
                  , n = /^anno:(.*)/
                  , i = /^render:(.*)/
                  , r = /^speed:(.*)/
                  , a = void 0;
                if (a = t.exec(e))
                    this.updateCamera(a[1]);
                else if (a = n.exec(e))
                    "hide" === a[1] ? this.setAnnotationVisible(!1) : this.setAnnotationVisible(!0);
                else if (a = i.exec(e))
                    this.setRenderType(a[1]);
                else if (a = r.exec(e)) {
                    var o = parseFloat(a[1].replace("x"));
                    this.scene.animationTimeScale = o
                }
            }
        }, {
            key: "focusingOn",
            value: function(e, t) {
                var n = new d(this,t);
                return Object.assign(n.position, e),
                n
            }
        }, {
            key: "dispose",
            value: function() {
                this.player && this.player.dispose();
                var e = this.data.emitter;
                window.removeEventListener("resize", this._resize),
                e && e.removeListener && e.removeListener("update", this.renderFunc),
                this.scene.dispose(),
                delete this.scene.babylonScene,
                delete this.scene,
                window.b === this && delete window.b,
                this.commandManager && this.commandManager.clearAllCommand(),
                delete this.data.canvas,
                delete this.data.emitter,
                delete this.data
            }
        }, {
            key: "updateInteractiveCanvas",
            value: function(e) {
                this.scene.detachControl(),
                this.scene.interactiveCanvas = e,
                this.scene.actionManager && this.scene.actionManager.register(),
                this.scene.attachControl()
            }
        }, {
            key: "execute",
            value: function(e, t) {
                return this.commandManager.execute(e, t)
            }
        }]),
        e
    }();
    e.exports = _
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var r = n(111)
      , a = n(5)
      , o = function e(t) {
        function n(e) {
            if (0 === e.sourceEvent.button && a.isDebug && e.sourceEvent.shiftKey) {
                var n = (e.source,
                new r(t));
                n.showTip();
                var i = o.pick(e.pointerX, e.pointerY)
                  , s = i.pickedPoint;
                i.getNormal(!0);
                n.position.copyFrom(s),
                e.sourceEvent.ctrlKey ? n.takeSceneSnapshot({
                    id: i.pickedMesh.id,
                    name: i.pickedMesh.name
                }) : n.takeSceneSnapshot()
            }
        }
        i(this, e);
        var o = t.scene
          , s = (o.actionManager,
        new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnLongPressTrigger,n));
        o.meshes.forEach(function(e) {
            e.actionManager && e.actionManager.registerAction(s)
        })
    };
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = (n(5),
    {
        fill: "#FFFFFF",
        font: 'normal 30px "Microsoft Yahei"'
    })
      , c = function(e) {
        function t(e) {
            i(this, t);
            var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return n.text = new PIXI.Text("",s),
            n.graphics = new PIXI.Graphics,
            n.addChild(n.graphics),
            n.addChild(n.text),
            n.updateText(""),
            n.babylonScene = e,
            window.NBGesture ? (NBGesture.addGesture(n.graphics, "gesture.tap", n.tipTap.bind(n)),
            NBGesture.addGesture(n.text, "gesture.tap", n.tipTap.bind(n))) : (n.interactive = !0,
            n.on("pointerdown", n.tipTap.bind(n))),
            n.buttonMode = !0,
            n
        }
        return a(t, e),
        o(t, [{
            key: "tipTap",
            value: function() {
                this.babylonScene.lookAtSpriteByName(this.text.text)
            }
        }, {
            key: "updateText",
            value: function(e) {
                this.text.text !== e && (this.text.text = e || "",
                this.w = Math.max(this.text.width, 100) + 40,
                this.h = 60)
            }
        }, {
            key: "render",
            value: function(e) {
                for (var t = void 0, n = 0; n < e.length; n++)
                    t = e[n],
                    t = this.toLocal(t),
                    0 === n && (this.graphics.clear(),
                    this.graphics.lineStyle(2, 4473924),
                    this.graphics.beginFill(0));
                var i = this.w
                  , r = this.h;
                this.graphics.drawRect(t.x - i / 2, t.y - r / 2, i, r),
                this.text.x = t.x - i / 2 + (i - this.text.width) / 2,
                this.text.y = t.y - r / 2 + (r - this.text.height) / 2
            }
        }, {
            key: "dispose",
            value: function() {
                this.babylonScene && (this.parent.removeChild(this),
                this.graphics.clear(),
                this.removeChild(this.graphics),
                this.removeChild(this.text),
                this.babylonScene = null)
            }
        }]),
        t
    }(PIXI.Container);
    e.exports = c
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(5)
      , c = function(e) {
        function t(e) {
            i(this, t);
            var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.scene));
            return n.babylonScene = e,
            n.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnLeftPickTrigger,n.onPickTrigger.bind(n))),
            s.isDebug && n.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnRightPickTrigger,n.onRightPickTrigger.bind(n))),
            n
        }
        return a(t, e),
        o(t, [{
            key: "onRightPickTrigger",
            value: function(e) {
                var t = e.source;
                e.sourceEvent.ctrlKey ? window.confirm("是否需要更新当快照数据?") && t.takeSceneSnapshot() : window.confirm("确定删除当前tip?") && (t.dispose(),
                this.babylonScene.execute(s.commands.UPDATE_ANNOTATION_DATA))
            }
        }, {
            key: "onPickTrigger",
            value: function(e) {
                e.source.zoomIn()
            }
        }]),
        t
    }(BABYLON.ActionManager);
    e.exports = c
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(5)
      , c = function(e) {
        function t(e) {
            i(this, t);
            var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.scene));
            return n.babylonScene = e,
            n.register(),
            n
        }
        return a(t, e),
        o(t, [{
            key: "register",
            value: function() {
                this.babylonScene.scene.onPointerObservable.add(this.sceneDBClick.bind(this), BABYLON.PointerEventTypes.POINTERDOUBLETAP),
                this.babylonScene.scene.onPointerObservable.add(this.sceneClick.bind(this), BABYLON.PointerEventTypes.POINTERTAP)
            }
        }, {
            key: "sceneClick",
            value: function(e, t) {
                if (!this.getScene().pickSprite(e.event.clientX, e.event.clientY).pickedSprite) {
                    var i = n(111);
                    i.lastTip && (i.lastTip.hideTip(),
                    i.lastTip = null,
                    this.babylonScene.execute(s.commands.UPDATE_ANNOTATION_DATA))
                }
            }
        }, {
            key: "sceneDBClick",
            value: function(e, t) {
                e.pickInfo.pickedMesh || this.babylonScene.zoomOut()
            }
        }]),
        t
    }(BABYLON.ActionManager);
    e.exports = c
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o, s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }(), c = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === r) {
            var a = Object.getPrototypeOf(t);
            return null === a ? void 0 : e(a, n, i)
        }
        if ("value"in r)
            return r.value;
        var o = r.get;
        if (void 0 !== o)
            return o.call(i)
    }, f = n(5), h = (n(75),
    function(e) {
        function t(e, n) {
            i(this, t);
            var a = e.scene;
            o || (o = new BABYLON.SpriteManager("focusing",n || f.config.URI_PREFIX + "assets/textures/focusing.png",10,64,a),
            o.isPickable = !0,
            o.tempSprites = [],
            o.renderingGroupId = 1,
            e.focusingManager = o);
            var s = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "focusing", o));
            return s.babylonScene = e,
            s.isPickable = !0,
            s.actionManager = new BABYLON.ActionManager(a),
            s.dSprite = new BABYLON.Sprite("double",o),
            s.dSprite.position = s.position,
            s.tsize = .2,
            TweenMax.to(s, .7, {
                tsize: .4,
                repeat: -1
            }),
            s.dSprite.tsize = .3,
            TweenMax.to(s.dSprite, .7, {
                tsize: .5,
                repeat: -1,
                delay: .1
            }),
            o.tempSprites.push(s, s.dSprite),
            s
        }
        return a(t, e),
        s(t, [{
            key: "dispose",
            value: function() {
                var e = this;
                TweenMax.killTweensOf(this),
                TweenMax.killTweensOf(this.dSprite),
                TweenMax.to([this, this.dSprite], .5, {
                    size: 0,
                    onComplete: function() {
                        e.dSprite.dispose(),
                        c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", e).call(e),
                        o = null
                    }
                })
            }
        }]),
        t
    }(BABYLON.Sprite));
    e.exports = h
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , a = n(5)
      , o = function() {
        function e(t) {
            i(this, e),
            this.babylonScene = t,
            this.scene = t.scene
        }
        return r(e, [{
            key: "updateAnimatables",
            value: function() {
                this.scene.Animatables && this.scene.Animatables.forEach(function(e) {
                    e.getAnimations().forEach(function(t) {
                        var n = t.getHighestFrame ? t.getHighestFrame() : t.animation.getHighestFrame();
                        e.toFrame = n
                    })
                })
            }
        }, {
            key: "pause",
            value: function() {
                this.scene.Animatables && this.scene.Animatables.forEach(function(e) {
                    e.pause()
                })
            }
        }, {
            key: "restart",
            value: function() {
                this.scene.Animatables && this.scene.Animatables.forEach(function(e) {
                    e.restart()
                })
            }
        }, {
            key: "reset",
            value: function() {
                this.scene.Animatables && this.scene.Animatables.forEach(function(e) {
                    e.reset()
                })
            }
        }, {
            key: "tweenToProgress",
            value: function(e, t) {
                if (this.scene.Animatables) {
                    t = t || {},
                    this.babylonScene.execute(a.commands.PLAY_ANIMATION_COMMAND, !1);
                    var n = this.getProgress()
                      , i = this
                      , r = TweenMax.to(this, t.duration || 1, {
                        onUpdate: function() {
                            var t = n + (e - n) * r.ratio;
                            i.setProgress(t)
                        },
                        onComplete: t.complete || null
                    })
                }
            }
        }, {
            key: "getTotalFrames",
            value: function() {
                if (!this.scene.Animatables)
                    return 0;
                if (!this._totalFrames) {
                    this._totalFrames = 0;
                    for (var e = this.scene.Animatables, t = 0; t < e.length; t++)
                        for (var n = e[t], i = n.getAnimations(), r = 0; r < i.length; r++) {
                            var a = i[r].animation || i[r];
                            this._totalFrames = Math.max(this._totalFrames, a.getHighestFrame())
                        }
                }
                return this._totalFrames
            }
        }, {
            key: "getProgress",
            value: function() {
                if (this.scene.Animatables) {
                    var e = this.scene.Animatables
                      , t = 0
                      , n = this.getTotalFrames()
                      , i = NaN;
                    e.forEach(function(e) {
                        if (t = Math.min(t, e.fromFrame),
                        n = Math.min(n, e.toFrame),
                        isNaN(i))
                            for (var r = e.getAnimations(), a = 0; a < r.length; a++) {
                                var o = r[a];
                                i = o.currentFrame
                            }
                    });
                    return (i - t) / (n - t)
                }
            }
        }, {
            key: "setProgress",
            value: function(e) {
                if (this.scene.Animatables)
                    for (var t = this.scene.Animatables, n = 0; n < t.length; n++) {
                        var i = t[n]
                          , r = i.fromFrame
                          , a = i.toFrame
                          , o = (a - r) * e;
                        i.goToFrame(o)
                    }
            }
        }, {
            key: "setPlaySegment",
            value: function(e, t) {
                this.scene.Animatables && this.scene.Animatables.forEach(function(n) {
                    n.getAnimations().forEach(function(i) {
                        n.toFrame = t,
                        n.fromFrame = e
                    })
                })
            }
        }]),
        e
    }();
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var r = n(5)
      , a = n(626)
      , o = n(627)
      , s = n(628)
      , c = n(629)
      , f = n(630)
      , h = n(631)
      , u = n(632)
      , d = n(633)
      , l = n(634)
      , p = n(635)
      , b = n(636)
      , v = n(638)
      , y = n(639)
      , m = function e(t) {
        i(this, e),
        t.registerCommand(r.commands.UPDATE_ANNOTATION_DATA, a),
        t.registerCommand(r.commands.PLAY_ANIMATION_COMMAND, o),
        t.registerCommand(r.commands.SET_ANNOTATION_VISIBLE, s),
        t.registerCommand(r.commands.UPDATE_SETTING_PANEL, c),
        t.registerCommand(r.commands.CHECK_ENV, f),
        t.registerCommand(r.commands.CONFIGURE_MATERIAL, h),
        t.registerCommand(r.commands.CONFIGURE_PIPELINE, u),
        t.registerCommand(r.commands.SET_CAMERA_CONTROL, d),
        t.registerCommand(r.commands.DISPOSE, l),
        t.registerCommand(r.commands.SCENE_CAPTURE, p),
        t.registerCommand(r.commands.OBSERVE_MESH_BY_FRAME, b),
        t.registerCommand(r.commands.PIXI_PLUGIN, v),
        t.registerCommand(r.commands.OBSERVE_MESH_BY_RORATE, y)
    };
    e.exports = m
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(6).ICommand
      , c = n(5)
      , f = function(e) {
        function t() {
            return i(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        o(t, [{
            key: "execute",
            value: function(e) {
                if (c.isDebug) {
                    var t = this.root.retrieveSprites(c.sprite.ANNOTATION)
                      , n = [];
                    t.forEach(function(e) {
                        var t = e.getSceneData();
                        t && n.push(t)
                    });
                    var i = /\/course\/(\d+)/.exec(location.href)
                      , r = void 0;
                    r = i ? i[1] : window.courseID || "";
                    var a = this.root.data.tipURL;
                    if (!a)
                        return void alert("没有指定tipURL");
                    var o = JSON.stringify({
                        data: n,
                        path: a
                    });
                    console.log(a),
                    $.ajax({
                        url: "/nb-web-3d/writeFile/" + r,
                        type: "POST",
                        contentType: "application/json",
                        data: o
                    })
                }
            }
        }]),
        t
    }(s);
    e.exports = f
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(6).ICommand
      , c = (n(5),
    function(e) {
        function t() {
            return i(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        o(t, [{
            key: "execute",
            value: function(e) {
                var t = this.root.animationManager
                  , n = $(".ani-play-button");
                this.root.player.enabledAni = e;
                var i = void 0
                  , r = void 0;
                "boolean" == typeof e ? i = e : (i = e.play,
                r = e.reset,
                isNaN(e.timeScale) || (this.root.scene.animationTimeScale = e.timeScale)),
                r && t.reset(),
                i ? (t.restart(),
                n.removeClass("glyphicon-play"),
                n.addClass("glyphicon-pause")) : (t.pause(),
                n.removeClass("glyphicon-pause"),
                n.addClass("glyphicon-play"))
            }
        }]),
        t
    }(s));
    e.exports = c
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(6).ICommand
      , c = n(5)
      , f = function(e) {
        function t() {
            return i(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        o(t, [{
            key: "execute",
            value: function(e) {
                this.root.setAnnotationVisible(e);
                var t = $("#setting-annotation")
                  , n = t[0].lastSelector;
                $(n).removeClass("select");
                var i = void 0;
                e ? (i = t.children()[0],
                $(i).addClass("select")) : (i = t.children()[1],
                $(i).addClass("select")),
                t[0].lastSelector = i,
                this.root.execute(c.commands.UPDATE_SETTING_PANEL)
            }
        }]),
        t
    }(s);
    e.exports = f
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(6).ICommand
      , c = (n(5),
    function(e) {
        function t() {
            return i(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        o(t, [{
            key: "execute",
            value: function(e) {
                $(".setting.menu-item").toArray().forEach(function(e) {
                    var t = $(e)
                      , n = t.attr("id").replace("setting", "val")
                      , i = t.find(".select")[0]
                      , r = i.parentElement;
                    r.lastSelector ? i = r.lastSelector : r.lastSelector = i;
                    var a = $(i)
                      , o = a.text();
                    $("#" + n).text(o)
                })
            }
        }]),
        t
    }(s));
    e.exports = c
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(6).ICommand
      , c = n(5)
      , f = function(e) {
        function t() {
            return i(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        o(t, [{
            key: "execute",
            value: function(e) {
                return new Promise(function(e, t) {
                    $.ajax({
                        url: "/nb-web-3d/check-env",
                        type: "GET",
                        contentType: "application/json"
                    }).done(function(t) {
                        "success" === t && (c.isDebug = !0,
                        window.addEventListener("keydown", function(e) {
                            16 === e.keyCode && (c.shiftDown = !0)
                        }),
                        window.addEventListener("keyup", function(e) {
                            16 === e.keyCode && (c.shiftDown = !1)
                        }),
                        e())
                    }).error(function(e) {
                        t()
                    })
                }
                )
            }
        }]),
        t
    }(s);
    e.exports = f
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(6).ICommand
      , c = (n(5),
    function(e) {
        function t() {
            return i(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        o(t, [{
            key: "execute",
            value: function(e) {
                if (e.globalMaterial) {
                    var t = this.root
                      , n = e.globalMaterial
                      , i = !1
                      , r = 0;
                    if (n.environmentReflection) {
                        var a = n.environmentReflection;
                        i = a.enabled,
                        r = a.level
                    }
                    var o = this.root.scene
                      , s = o.materials;
                    o.environmentTexture && (o.environmentTexture.level = r);
                    t.data.skybox && t.data.skybox.pbr ? o.getMaterialByName("skyBox").reflectionTexture : o.environmentTexture,
                    s.forEach(function(e) {
                        e instanceof BABYLON.StandardMaterial && (i ? (e.reflectionTexture = o.environmentTexture,
                        e.roughness = n.roughness || 0) : (e.reflectionTexture = null,
                        e.roughness = 0))
                    })
                }
            }
        }]),
        t
    }(s));
    e.exports = c
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(6).ICommand
      , c = (n(5),
    function(e) {
        function t() {
            return i(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        o(t, [{
            key: "execute",
            value: function(e) {
                var t = e.pipeline;
                if (t) {
                    var n = this.root.scene.activeCamera
                      , i = this.root.scene
                      , r = new BABYLON.StandardRenderingPipeline("standard",i,1,null,[n]);
                    r.BloomEnabled = !1;
                    var a = t.bloom;
                    a && (r.BloomEnabled = a.enabled);
                    var o = t.motionBlur;
                    o.enabled && (r.MotionBlurEnabled = o.enabled,
                    r.motionStrength = o.motionStrength || .05,
                    r.motionBlurSamples = o.motionBlurSamples || 32);
                    var s = t.depthOfField;
                    s && (r.DepthOfFieldEnabled = s.enabled,
                    r.depthOfFieldDistance = s.distance || 100,
                    r.depthOfFieldBlurWidth = s.blurWidth || 100);
                    if (t.fxaaEnabled || !1) {
                        new BABYLON.FxaaPostProcess("fxaa",1,n);
                        r.fxaaEnabled = !0
                    }
                }
            }
        }]),
        t
    }(s));
    e.exports = c
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(6).ICommand
      , c = (n(5),
    function(e) {
        function t() {
            return i(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        o(t, [{
            key: "execute",
            value: function(e) {
                var t = this.root.scene
                  , n = t.activeCamera;
                if (n && e) {
                    e.enabled ? (n.attachControl(window, !0),
                    n instanceof BABYLON.ArcRotateCamera && (n._useCtrlForPanning = !1)) : n.detachControl(window)
                }
            }
        }]),
        t
    }(s));
    e.exports = c
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(6).ICommand
      , c = (n(5),
    function(e) {
        function t() {
            return i(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        o(t, [{
            key: "execute",
            value: function(e) {
                this.root.dispose()
            }
        }]),
        t
    }(s));
    e.exports = c
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(6).ICommand
      , c = (n(5),
    15)
      , f = function(e) {
        function t() {
            return i(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        o(t, [{
            key: "execute",
            value: function(e) {
                function t() {
                    0 !== s && BABYLON.Tools.CreateScreenshotUsingRenderTarget(a, r, o, function(e) {
                        $.post({
                            url: "/nb-web-3d/writeCaptureImage/test",
                            data: {
                                data: e,
                                index: s
                            },
                            dataType: "json",
                            success: function() {
                                console.log("抓取图片第 " + (c - s) + " 张"),
                                s--,
                                t()
                            }
                        })
                    })
                }
                var n = this.root
                  , i = n.scene
                  , r = i.activeCamera
                  , a = i.getEngine()
                  , o = {
                    width: 800,
                    height: 600
                }
                  , s = c;
                t()
            }
        }]),
        t
    }(s);
    e.exports = f
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === r) {
            var a = Object.getPrototypeOf(t);
            return null === a ? void 0 : e(a, n, i)
        }
        if ("value"in r)
            return r.value;
        var o = r.get;
        if (void 0 !== o)
            return o.call(i)
    }
      , c = n(637)
      , f = n(5)
      , h = function(e) {
        function t() {
            return i(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        o(t, [{
            key: "execute",
            value: function(e) {
                this.wireframeColor = void 0 === e.color ? BABYLON.Color3.White() : BABYLON.Color3.FromHexString("#" + e.color.toString(16)),
                this.wireframeAlpha = e.wireframeAlpha || 1,
                s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "execute", this).call(this, e)
            }
        }, {
            key: "handleMesh",
            value: function(e) {
                var t = e.material.clone();
                t.alphaOrigin = e.material.alpha,
                e.material = new BABYLON.MultiMaterial(f.UID(),this.scene);
                var n = new BABYLON.StandardMaterial(f.UID(),this.scene);
                n.diffuseColor = this.wireframeColor,
                n.specularPower = 0,
                n.wireframe = !0,
                e.material.subMaterials.push(t, n)
            }
        }, {
            key: "setMeshObserve",
            value: function(e, t) {
                var n = e.material.subMaterials[0]
                  , i = e.material.subMaterials[1];
                if (TweenMax.killTweensOf(i),
                TweenMax.killTweensOf(n),
                t) {
                    if (!e.tempSubMesh) {
                        var r = e.getTotalVertices()
                          , a = e.getTotalIndices();
                        e.tempSubMesh = new BABYLON.SubMesh(1,0,r,0,a,e),
                        i.alpha = 0
                    }
                    TweenMax.to(i, .75, {
                        alpha: this.wireframeAlpha
                    }),
                    TweenMax.to(n, .75, {
                        delay: .75,
                        alpha: 0
                    })
                } else
                    e.tempSubMesh && (TweenMax.to(i, .75, {
                        delay: .75,
                        alpha: 0,
                        onComplete: function() {
                            e.tempSubMesh.dispose(),
                            delete e.tempSubMesh
                        }
                    }),
                    TweenMax.to(n, .75, {
                        alpha: n.alphaOrigin
                    }))
            }
        }]),
        t
    }(c);
    e.exports = h
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function o(e) {
        return !e.isImported || !e.material
    }
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , c = n(6).ICommand
      , f = n(5)
      , h = function(e) {
        function t() {
            return i(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        s(t, [{
            key: "execute",
            value: function(e) {
                var t = this;
                if (!e)
                    throw "必须要传入对象";
                var n = this.root.scene
                  , i = this;
                this.scene = n;
                var r = n.meshes
                  , a = this;
                this.nameFilter = e.nameFilter || /observe_/,
                this.otherthanFilter = e.otherthan || /!./,
                r.forEach(function(n) {
                    o(n) || (t.nameFilter.test(n.name) && (n.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnDoublePickTrigger,a.meshDoubleClick.bind(t))),
                    e.bindAnnotationToMesh && n.actionManager.registerAction(new BABYLON.ExecuteCodeAction(f.action.ANNOTATION_CLICK_TRIGGER,a.meshDoubleClick.bind(t)))),
                    a.handleMesh(n))
                }),
                i.root.resetSceneMesh = i.zoomOut.bind(this),
                n.onPointerObservable.add(this.sceneDBClick.bind(this), BABYLON.PointerEventTypes.POINTERDOUBLETAP)
            }
        }, {
            key: "meshDoubleClick",
            value: function(e) {
                var t = this
                  , n = this;
                this.observeMesh && this.observeMesh === e.source || (this.observeMesh = e.source,
                this.scene.meshes.forEach(function(e) {
                    o(e) || t.otherthanFilter.test(e.name) || (e === t.observeMesh || e.bindMesh && e.bindMesh === t.observeMesh ? n.setMeshObserve(e, !1) : n.setMeshObserve(e, !0))
                }))
            }
        }, {
            key: "handleMesh",
            value: function(e) {
                throw "子类需要重写"
            }
        }, {
            key: "setMeshObserve",
            value: function(e, t) {
                throw "子类需要重写"
            }
        }, {
            key: "sceneDBClick",
            value: function(e) {
                var t = this;
                if (!e.pickInfo.pickedMesh) {
                    if (!this.observeMesh)
                        return;
                    this.scene.meshes.forEach(function(e) {
                        o(e) || t.setMeshObserve(e, !1)
                    }),
                    this.observeMesh = null
                }
            }
        }, {
            key: "zoomOut",
            value: function() {
                var e = this;
                this.scene.meshes.forEach(function(t) {
                    o(t) || e.setMeshObserve(t, !1)
                }),
                this.observeMesh = null
            }
        }]),
        t
    }(c);
    e.exports = h
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(6).ICommand
      , c = n(5)
      , f = function(e) {
        function t() {
            return i(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        o(t, [{
            key: "execute",
            value: function(e) {
                function t(e) {
                    var t = {};
                    a.mapPositionToPoint(t, e.clientX, e.clientY),
                    a.processInteractive(t, instance.viewStack, function() {}, !0) && (r.addEventListener("pointerup", n),
                    i.execute(c.commands.SET_CAMERA_CONTROL, {
                        enabled: !1
                    }))
                }
                function n(e) {
                    r.removeEventListener("pointerup", n),
                    i.execute(c.commands.SET_CAMERA_CONTROL, {
                        enabled: !0
                    })
                }
                var i = this.manager;
                if (!window.PIXI || !window.instance)
                    return void console.log("没有指定instance 无法做3D与PIXI的兼容");
                var r = $("#bioCanvas")[0];
                if (!r)
                    return void console.log("没有指定canvas, 无法做3D与2D交互的兼容");
                var a = instance.renderer.plugins.interaction;
                r.addEventListener("pointerdown", t, !0)
            }
        }]),
        t
    }(s);
    e.exports = f
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(6).ICommand
      , c = (n(5),
    function(e) {
        function t() {
            return i(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        o(t, [{
            key: "execute",
            value: function(e) {
                function t() {
                    if (o) {
                        var e = i.pointerX
                          , t = e - s;
                        s = e,
                        o.rotation[o.useAxis] -= t / 200
                    }
                }
                function n() {
                    o = null
                }
                var i = this.root.scene;
                this.scene = i;
                var r = this.root;
                i.activeCamera.upperAlphaLimit = i.activeCamera.lowerAlphaLimit = r.data.camera.alpha,
                i.activeCamera.upperBetaLimit = i.activeCamera.lowerBetaLimit = r.data.camera.beta;
                var a = e.meshes
                  , o = null
                  , s = null;
                i.registerBeforeRender(t);
                var c = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger,n)
                  , f = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickOutTrigger,n)
                  , h = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnLeftPickTrigger,function(e) {
                    o = e.source,
                    s = e.pointerX
                }
                );
                a.forEach(function(e) {
                    try {
                        var t = i.getMeshByName(e.name + "_area");
                        t.visibility = 0;
                        var n = i.getMeshByName(e.name + "_model");
                        n.rotation = t.rotation;
                        var r = i.getMeshByName(e.name + "_base")
                          , a = t.getBoundingInfo()
                          , o = a.diagonalLength
                          , s = a.boundingSphere.center
                          , u = a.boundingBox.maximumWorld
                          , d = a.boundingBox.minimumWorld;
                        console.log(a, o, s, u, d);
                        var l = r.getBoundingInfo().boundingSphere.center
                          , p = s.clone();
                        console.log(t.name, p),
                        p.z = 0,
                        t.setPivotPoint(l),
                        n.setPivotPoint(l),
                        e.reposition && (t.position = p.clone(),
                        n.position = p.clone()),
                        t.useAxis = e.axis || "z",
                        t.actionManager || (t.actionManager = new BABYLON.ActionManager(i)),
                        t.actionManager.registerAction(h),
                        t.actionManager.registerAction(c),
                        t.actionManager.registerAction(f)
                    } catch (e) {
                        console.error(e)
                    }
                })
            }
        }]),
        t
    }(s));
    e.exports = c
}
, function(e, t, n) {
    function i(e, t, n) {
        function i(t) {
            var n = m
              , i = g;
            return m = g = void 0,
            E = t,
            _ = e.apply(i, n)
        }
        function h(e) {
            return E = e,
            A = setTimeout(l, t),
            S ? i(e) : _
        }
        function u(e) {
            var n = e - M
              , i = e - E
              , r = t - n;
            return x ? f(r, w - i) : r
        }
        function d(e) {
            var n = e - M
              , i = e - E;
            return void 0 === M || n >= t || n < 0 || x && i >= w
        }
        function l() {
            var e = a();
            if (d(e))
                return p(e);
            A = setTimeout(l, u(e))
        }
        function p(e) {
            return A = void 0,
            k && m ? i(e) : (m = g = void 0,
            _)
        }
        function b() {
            void 0 !== A && clearTimeout(A),
            E = 0,
            m = M = g = A = void 0
        }
        function v() {
            return void 0 === A ? _ : p(a())
        }
        function y() {
            var e = a()
              , n = d(e);
            if (m = arguments,
            g = this,
            M = e,
            n) {
                if (void 0 === A)
                    return h(M);
                if (x)
                    return A = setTimeout(l, t),
                    i(M)
            }
            return void 0 === A && (A = setTimeout(l, t)),
            _
        }
        var m, g, w, _, A, M, E = 0, S = !1, x = !1, k = !0;
        if ("function" != typeof e)
            throw new TypeError(s);
        return t = o(t) || 0,
        r(n) && (S = !!n.leading,
        x = "maxWait"in n,
        w = x ? c(o(n.maxWait) || 0, t) : w,
        k = "trailing"in n ? !!n.trailing : k),
        y.cancel = b,
        y.flush = v,
        y
    }
    var r = n(189)
      , a = n(641)
      , o = n(643)
      , s = "Expected a function"
      , c = Math.max
      , f = Math.min;
    e.exports = i
}
, function(e, t, n) {
    var i = n(190)
      , r = function() {
        return i.Date.now()
    };
    e.exports = r
}
, function(e, t, n) {
    (function(t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n
    }
    ).call(t, n(1))
}
, function(e, t, n) {
    function i(e) {
        if ("number" == typeof e)
            return e;
        if (a(e))
            return o;
        if (r(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = r(t) ? t + "" : t
        }
        if ("string" != typeof e)
            return 0 === e ? e : +e;
        e = e.replace(s, "");
        var n = f.test(e);
        return n || h.test(e) ? u(e.slice(2), n ? 2 : 8) : c.test(e) ? o : +e
    }
    var r = n(189)
      , a = n(644)
      , o = NaN
      , s = /^\s+|\s+$/g
      , c = /^[-+]0x[0-9a-f]+$/i
      , f = /^0b[01]+$/i
      , h = /^0o[0-7]+$/i
      , u = parseInt;
    e.exports = i
}
, function(e, t, n) {
    function i(e) {
        return "symbol" == typeof e || a(e) && r(e) == o
    }
    var r = n(645)
      , a = n(648)
      , o = "[object Symbol]";
    e.exports = i
}
, function(e, t, n) {
    function i(e) {
        return null == e ? void 0 === e ? c : s : f && f in Object(e) ? a(e) : o(e)
    }
    var r = n(191)
      , a = n(646)
      , o = n(647)
      , s = "[object Null]"
      , c = "[object Undefined]"
      , f = r ? r.toStringTag : void 0;
    e.exports = i
}
, function(e, t, n) {
    function i(e) {
        var t = o.call(e, c)
          , n = e[c];
        try {
            e[c] = void 0;
            var i = !0
        } catch (e) {}
        var r = s.call(e);
        return i && (t ? e[c] = n : delete e[c]),
        r
    }
    var r = n(191)
      , a = Object.prototype
      , o = a.hasOwnProperty
      , s = a.toString
      , c = r ? r.toStringTag : void 0;
    e.exports = i
}
, function(e, t) {
    function n(e) {
        return r.call(e)
    }
    var i = Object.prototype
      , r = i.toString;
    e.exports = n
}
, function(e, t) {
    function n(e) {
        return null != e && "object" == typeof e
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(5)
      , c = s.TWEEN_TIMER
      , f = function(e) {
        function t(e) {
            i(this, t);
            var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.scene));
            return n.babylonScene = e,
            n.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnDoublePickTrigger,n.doublePicker.bind(e))),
            n.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,n.pointerOver.bind(e))),
            n.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,n.pointerOut.bind(e))),
            n
        }
        return a(t, e),
        o(t, [{
            key: "doublePicker",
            value: function(e) {
                var t = this.scene
                  , n = t._currentPickResult
                  , i = e.pickedPoint || n.pickedPoint
                  , r = t.activeCamera
                  , a = this.getEaseFunc();
                this.lookAtVector(i);
                var o = BABYLON.Mesh.MinMax([e.source])
                  , s = 1.25 * BABYLON.Vector3.Distance(o.min, o.max);
                e.ignoreCameraDistance ? TweenMax.to(r, c, {
                    radius: s,
                    ease: a
                }) : s < r.radius && TweenMax.to(r, c, {
                    radius: s,
                    ease: a
                })
            }
        }, {
            key: "pointerOver",
            value: function(e) {
                e.source.meshData
            }
        }, {
            key: "pointerOut",
            value: function(e) {
                e.source
            }
        }]),
        t
    }(BABYLON.ActionManager);
    e.exports = f
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , a = 12
      , o = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "bioCanvas";
            i(this, e),
            window.addEventListener("resize", this.resize),
            this.originScene = t;
            var r = $("#" + n)[0];
            if (!r)
                throw "请指定监听事件的canvas对象";
            $(t.data.canvas).css("display", "none"),
            this.addListener(r),
            this.imageIndex = 0
        }
        return r(e, [{
            key: "addListener",
            value: function(e) {
                function t(e) {
                    var t = instance.renderer.plugins.interaction
                      , a = {};
                    t.mapPositionToPoint(a, e.clientX, e.clientY),
                    t.processInteractive(a, instance.viewStack, function() {}, !0) || (r = e.clientX,
                    window.addEventListener("pointermove", n),
                    window.addEventListener("pointerup", i))
                }
                function n(e) {
                    e.clientX - r > a ? (r = e.clientX,
                    o.nextImage()) : e.clientX - r < -a && (r = e.clientX,
                    o.prevImage())
                }
                function i() {
                    window.removeEventListener("pointermove", n),
                    window.removeEventListener("pointerup", i)
                }
                var r = 0
                  , o = this;
                e.addEventListener("pointerdown", t)
            }
        }, {
            key: "nextImage",
            value: function() {
                this.imageIndex--,
                this.updateImage()
            }
        }, {
            key: "prevImage",
            value: function() {
                this.imageIndex++,
                this.updateImage()
            }
        }, {
            key: "updateImage",
            value: function() {
                this.imageIndex %= 15,
                this.imageIndex < 0 ? this.imageIndex += 15 : this.imageIndex > 15 && (this.imageIndex -= 15);
                var e = 1e3 * this.imageIndex;
                console.log(e),
                $("#nb2dImg").css("transform", "translate(-" + e + "px, 0px)")
            }
        }, {
            key: "loadMesh",
            value: function(e) {
                if (e) {
                    var t = this
                      , n = e.replace(".babylon", "-2d.jpg")
                      , i = $("#nb2dImg");
                    if (0 === i.length) {
                        $(document.body).append('\n\t\t\t\t<div class="babylon-2d-wrapper">\n\t\t\t\t\t<div class="babylon-2d">\n\t\t\t\t\t\t<img id="nb2dImg"></img>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t'),
                        $("#nb2dImg")[0].addEventListener("load", function() {
                            t.originScene.setLoading(!1, 1)
                        })
                    }
                    i = $("#nb2dImg"),
                    i.attr("src", n),
                    this.resize()
                }
            }
        }, {
            key: "resize",
            value: function() {
                var e = $(".babylon-2d");
                if (e[0]) {
                    var t = e.width();
                    e.height();
                    e.css("left", -(t - window.innerWidth >> 1) + "px")
                }
            }
        }, {
            key: "disposeSceneObjects",
            value: function() {}
        }]),
        e
    }();
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , a = n(5)
      , o = n(75)
      , s = function() {
        function e(t, r) {
            function o(e) {
                0 === y && (y = $(".player-controls .timeline").position().left),
                d.pause(),
                window.addEventListener("pointermove", s),
                window.addEventListener("pointerup", c),
                s(e)
            }
            function s(e) {
                console.log("move");
                var t = e.x - y;
                t < 0 ? t = 0 : t > f.trackWidth && (t = f.trackWidth);
                var n = t / f.trackWidth;
                isNaN(n) || (d.setProgress(n),
                v = n)
            }
            function c() {
                f.enabledAni && d.restart(),
                window.removeEventListener("pointermove", s),
                window.removeEventListener("pointerup", c)
            }
            i(this, e),
            this.babylonScene = t,
            this.enabledAni = !0;
            var f = this;
            this.settingItemMap = {};
            var h = (t.scene,
            n(652))
              , u = $(h);
            this.element = u;
            var d = this.babylonScene.animationManager;
            $("body").append(u),
            r && !r.isShowPlaybar && $(".player-controls").css("display", "none"),
            r && this.setData(r),
            t.execute(a.commands.UPDATE_SETTING_PANEL);
            var l = $(".threed-player")
              , p = l.find(".menu-item.first-level");
            p.click(this.menuItemClick.bind(this)),
            p.toArray().forEach(function(e) {
                var t = $(e).find(".setting-value").attr("id");
                f.settingItemMap[t] = $(e)
            }),
            $(".setting-option .back").click(this.backBtnClick.bind(this)),
            this.playerSetting = $(".player-setting"),
            this.playerSetting.click(function(e) {
                e.stopPropagation()
            }),
            $("#setting-btn").click(this.clearStyle.bind(this)),
            $("#level2-setting .setting p").click(function(e) {
                console.log(f);
                var n = e.currentTarget.parentElement;
                if (n.lastSelector || (n.lastSelector = n.children[0]),
                n.lastSelector !== e.currentTarget) {
                    $(n.lastSelector).removeClass("select");
                    var i = $(e.currentTarget);
                    i.addClass("select");
                    var r = i.attr("type");
                    console.log(e),
                    n.lastSelector = e.currentTarget;
                    var a = i.text()
                      , o = i.parent().attr("id").split("-")[1]
                      , s = "val-" + o;
                    $("#" + s).text(a),
                    t.updateSetting(r)
                }
            });
            var b = $(".ani-play-button")
              , v = 0;
            b.click(function() {
                var e = t.animationManager;
                f.enabledAni = !f.enabledAni,
                t.execute(a.commands.PLAY_ANIMATION_COMMAND, f.enabledAni),
                f.enabledAni ? e.setProgress(v) : v = e.getProgress()
            }),
            this.trackBar = $(".track .bar"),
            this.trackWidth = this.trackBar.width(),
            this.trackKnob = $(".track .knob"),
            this.trackKnobWidth = this.trackKnob.width(),
            this.resize = function() {
                f.trackWidth = $(".track .bar").width()
            }
            ,
            window.addEventListener("resize", this.resize),
            $(".nb-timeline-wrapper")[0].addEventListener("pointerdown", o);
            var y = 0
        }
        return r(e, [{
            key: "update",
            value: function() {
                var e = this.babylonScene.scene
                  , t = e.Animatables;
                if (t) {
                    var n = (t[0],
                    this.babylonScene.animationManager)
                      , i = n.getProgress();
                    if (!isNaN(i)) {
                        0 === this.trackWidth && (this.trackWidth = $(".track .bar").width());
                        var r = this.trackWidth * i - this.trackKnobWidth;
                        this.trackKnob.css("transform", "translateX(" + r + "px)")
                    }
                }
            }
        }, {
            key: "menuItemClick",
            value: function(e) {
                var t = e.currentTarget.getAttribute("type");
                this.clearStyle(),
                this.playerSetting.addClass("inner-setting"),
                this.lastTypeEle = $("#setting-" + t),
                this.lastTypeEle.addClass("show")
            }
        }, {
            key: "backBtnClick",
            value: function() {
                this.clearStyle()
            }
        }, {
            key: "addData",
            value: function(e) {}
        }, {
            key: "clearStyle",
            value: function() {
                this.playerSetting.removeClass("inner-setting"),
                this.lastTypeEle && this.lastTypeEle.removeClass("show"),
                delete this.lastTypeEle
            }
        }, {
            key: "setData",
            value: function(e) {
                var t = e.tips;
                if (t) {
                    var n = $("#nb-threed-player-ul");
                    t.forEach(function(e) {
                        e.title = o.convertTextToHTML(e.title),
                        n.append('<li sprite="' + e.title + '"><a href="#">' + e.title + "</a></li>")
                    }),
                    n.find("li").click(this.tipClick(this))
                }
            }
        }, {
            key: "tipClick",
            value: function(e) {
                return function() {
                    var t = this.getAttribute("sprite");
                    t = o.convertTextToHTML(t),
                    e.babylonScene.lookAtSpriteByName(t)
                }
            }
        }, {
            key: "showAnimationSetting",
            value: function(e) {
                var t = $(".player-controls .timeline");
                e ? (this.addSettingItem([a.setting.SPEED]),
                t.css("display", "block")) : (this.removeSettingItem([a.setting.SPEED]),
                t.css("display", "none"))
            }
        }, {
            key: "addSettingItem",
            value: function(e) {
                var t = this;
                e.forEach(function(e) {
                    t.settingItemMap[e].show()
                })
            }
        }, {
            key: "removeSettingItem",
            value: function(e) {
                var t = this;
                e.forEach(function(e) {
                    t.settingItemMap[e].hide()
                })
            }
        }, {
            key: "dispose",
            value: function() {
                window.removeEventListener("resize", this.resize),
                delete this.babylonScene,
                $(this.element).remove()
            }
        }]),
        e
    }();
    e.exports = s
}
, function(e, t, n) {
    "use strict";
    e.exports = '\n<div class="player-controls">\n    <div class="threed-player">\n        <div class="btn-group cameraBtn">\n            <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle glyphicon glyphicon-animation"></span></button>\n            <ul id="nb-threed-player-ul" class="dropdown-menu bullet pull-center pull-top" style="margin-right: -85px;">\n                \x3c!--添加静态快照和(动画)--\x3e\n            </ul>\n        </div>\n        \n        <div class="btn-group">\n            <button id="setting-btn" data-toggle="dropdown" class="btn btn-primary dropdown-toggle glyphicon glyphicon-setting"></button>\n            <div class="dropdown-menu bullet pull-center pull-top menu-wrapper">\n                <ul id="nb-threed-player-ul" class="dropdown-menu bullet pull-center pull-top" style="margin-right: -85px;">\n                </ul>\n                <div class="setting-wrapper">\n                    <div class="player-setting">\n                        <div class="setting-option">\n                            <div class="menu-item first-level" type="render">\n                                <p class="setting-label">渲染</p>\n                                <p class="setting-value" id="val-render">lit</p>\n                            </div>\n                            <div class="menu-item first-level" type="camera">\n                                <p class="setting-label">摄像机</p>\n                                <p class="setting-value" id="val-camera">orbit</p>\n                            </div>\n                            <div class="menu-item first-level" type="annotation">\n                                <p class="setting-label">标注</p>\n                                <p class="setting-value" id="val-annotation">显示</p>\n                            </div>\n                            <div class="menu-item first-level" type="speed">\n                                <p class="setting-label">动画速度</p>\n                                <p class="setting-value" id="val-speed">1x</p>\n                            </div>\n                        </div>\n                        <div id="level2-setting" class="setting-option">\n                            <div class="back menu-item">\n                                <p>返回</p>\n                            </div>\n                            <div class="setting menu-item" id="setting-render">\n                                <p class="select" type="render:ordinary">普通</p>\n                                <p type="render:wireframe">线框</p>\n                            </div> \n                            <div class="setting menu-item" id="setting-camera">\n                                <p class="select" type="camera:arcCamera">轨道</p>\n                                <p type="camera:freeCamera">第一人称</p>\n                                <p type="camera:vrArcCamera">VR+轨道</p>\n                                <p type="camera:vrFreeCamera">VR+第一人称</p>\n                                <p type="camera:anaglyphCamera">立体(红蓝)</p>\n                                <p type="camera:stereoscopicCamera">立体(偏振)</p>\n                            </div> \n                            <div class="setting menu-item" id="setting-annotation">\n                                <p class="select" type="anno:show">显示</p>\n                                <p type="anno:hide">隐藏</p>\n                            </div> \n                            <div class="setting menu-item" id="setting-speed">\n                                <p type="speed:0.1x">0.1x</p>\n                                <p type="speed:0.25x">0.25x</p>\n                                <p type="speed:0.5x">0.5x</p>\n                                <p class="select" type="speed:1x">1x</p>\n                                <p type="speed:2x">2x</p>\n                            </div> \n                        </div>\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n\n    </div>\n\n    <div class="timeline">\n        <div class="nb-timeline-wrapper">\n            <div class="track">\n                <div class="bar"></div>\n                <div class="knob"></div>\n            </div>\n        </div>\n        \n        <span href="#" class="ani-play-button glyphicon glyphicon-pause">\n        </span>\n    </div>\n    \n\n</div>\n\n'
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        e.use(["/nb-web-3d/writeFile/:id", "/nb-web-3d/writeFile/"], function(e, t) {
            var n = e.body
              , i = n
              , o = i.path
              , c = e.params.id || "";
            o = o.replace("" + s.baseURL + c + "/", "");
            var f = "./" + s.baseURL + c + "/" + o
              , h = f.substr(0, f.lastIndexOf("/"));
            a.sync(h),
            r.writeFileSync(f, JSON.stringify(i.data))
        }),
        e.use("/nb-web-3d/check-env", function(e, t) {
            t.send("success")
        })
    }
    var r = void 0
      , a = void 0;
    try {
        r = n(654);
        var o = n(655);
        a = function(e, t) {
            e = o.resolve(e),
            r.exists(e, function(n) {
                n ? t && t(null) : a(o.dirname(e), function() {
                    r.mkdir(e, function(e) {
                        t && t(e)
                    })
                })
            })
        }
        ,
        a.sync = function(e) {
            e = o.resolve(e),
            r.existsSync(e) || (a.sync(o.dirname(e)),
            r.mkdirSync(e))
        }
    } catch (e) {
        console.warn("没有fs")
    }
    var s = {
        baseURL: "course/biology"
    };
    try {
        s = JSON.parse(r.readFileSync("./nb3d.config.json").toString())
    } catch (e) {
        console.log(e)
    }
    n(4).Buffer;
    e.exports = i
}
, function(e, t) {}
, function(e, t, n) {
    (function(e) {
        function n(e, t) {
            for (var n = 0, i = e.length - 1; i >= 0; i--) {
                var r = e[i];
                "." === r ? e.splice(i, 1) : ".." === r ? (e.splice(i, 1),
                n++) : n && (e.splice(i, 1),
                n--)
            }
            if (t)
                for (; n--; n)
                    e.unshift("..");
            return e
        }
        function i(e, t) {
            if (e.filter)
                return e.filter(t);
            for (var n = [], i = 0; i < e.length; i++)
                t(e[i], i, e) && n.push(e[i]);
            return n
        }
        var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
          , a = function(e) {
            return r.exec(e).slice(1)
        };
        t.resolve = function() {
            for (var t = "", r = !1, a = arguments.length - 1; a >= -1 && !r; a--) {
                var o = a >= 0 ? arguments[a] : e.cwd();
                if ("string" != typeof o)
                    throw new TypeError("Arguments to path.resolve must be strings");
                o && (t = o + "/" + t,
                r = "/" === o.charAt(0))
            }
            return t = n(i(t.split("/"), function(e) {
                return !!e
            }), !r).join("/"),
            (r ? "/" : "") + t || "."
        }
        ,
        t.normalize = function(e) {
            var r = t.isAbsolute(e)
              , a = "/" === o(e, -1);
            return e = n(i(e.split("/"), function(e) {
                return !!e
            }), !r).join("/"),
            e || r || (e = "."),
            e && a && (e += "/"),
            (r ? "/" : "") + e
        }
        ,
        t.isAbsolute = function(e) {
            return "/" === e.charAt(0)
        }
        ,
        t.join = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(i(e, function(e, t) {
                if ("string" != typeof e)
                    throw new TypeError("Arguments to path.join must be strings");
                return e
            }).join("/"))
        }
        ,
        t.relative = function(e, n) {
            function i(e) {
                for (var t = 0; t < e.length && "" === e[t]; t++)
                    ;
                for (var n = e.length - 1; n >= 0 && "" === e[n]; n--)
                    ;
                return t > n ? [] : e.slice(t, n - t + 1)
            }
            e = t.resolve(e).substr(1),
            n = t.resolve(n).substr(1);
            for (var r = i(e.split("/")), a = i(n.split("/")), o = Math.min(r.length, a.length), s = o, c = 0; c < o; c++)
                if (r[c] !== a[c]) {
                    s = c;
                    break
                }
            for (var f = [], c = s; c < r.length; c++)
                f.push("..");
            return f = f.concat(a.slice(s)),
            f.join("/")
        }
        ,
        t.sep = "/",
        t.delimiter = ":",
        t.dirname = function(e) {
            var t = a(e)
              , n = t[0]
              , i = t[1];
            return n || i ? (i && (i = i.substr(0, i.length - 1)),
            n + i) : "."
        }
        ,
        t.basename = function(e, t) {
            var n = a(e)[2];
            return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)),
            n
        }
        ,
        t.extname = function(e) {
            return a(e)[3]
        }
        ;
        var o = "b" === "ab".substr(-1) ? function(e, t, n) {
            return e.substr(t, n)
        }
        : function(e, t, n) {
            return t < 0 && (t = e.length + t),
            e.substr(t, n)
        }
    }
    ).call(t, n(8))
}
]);
