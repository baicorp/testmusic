var RO = {
  Qe: function (a) {
    a.reverse();
  },
  Qa: function (a, b) {
    var c = a[0];
    a[0] = a[b % a.length];
    a[b % a.length] = c;
  },
  WW: function (a, b) {
    a.splice(0, b);
  },
};

var zPa = function (a) {
  a = a.split("");
  RO.WW(a, 3);
  RO.Qe(a, 68);
  RO.Qa(a, 68);
  RO.WW(a, 3);
  RO.Qe(a, 32);
  RO.Qa(a, 42);
  RO.Qe(a, 70);
  RO.Qa(a, 34);
  RO.WW(a, 3);
  return a.join("");
};

const signature =
  "s=A3uA3uR2n6inCS00Xw4s9wJiQN8p9BdRXI51646rNM16ogICkg3jJgtJl2zm34GV470y-SJALQSLep-2cmUc41krbmagIARwsSdQfJAfJNfJK\u0026sp=sig\u0026url=https://rr3---sn-2uuxa3vh-habe.googlevideo.com/videoplayback%3Fexpire%3D1718455646%26ei%3D_jhtZtSpKaTq4t4P1-m68AM%26ip%3D2001%253A448a%253A50a0%253A52c7%253A6908%253A6265%253Afc59%253A7514%26id%3Do-AMkIu5LI_ALkO3PAbbxH_nrtGeY5PyDFN9mKs7pt0hH0%26itag%3D137%26aitags%3D133%252C134%252C135%252C136%252C137%252C160%252C242%252C243%252C244%252C247%252C248%252C278%252C394%252C395%252C396%252C397%252C398%252C399%26source%3Dyoutube%26requiressl%3Dyes%26xpc%3DEgVo2aDSNQ%253D%253D%26mh%3DHe%26mm%3D31%252C29%26mn%3Dsn-2uuxa3vh-habe%252Csn-npoldn7e%26ms%3Dau%252Crdu%26mv%3Dm%26mvi%3D3%26pcm2cms%3Dyes%26pl%3D48%26gcr%3Did%26initcwndbps%3D481250%26siu%3D1%26bui%3DAbKP-1NXDT1KYqtrQl7ZXDYjBX-mAC5x0F87DMG2gqEe6AFS6W92uiIzom_-zus1Pnn0htSpwg%26spc%3DUWF9f9dVi8TMpaGLVNLP8WASRFOLxUAxRlZVDwZcVxEZ1SCaM0AsQIlKEQgCFBZ8vEMH7EuTnw%26vprv%3D1%26svpuc%3D1%26mime%3Dvideo%252Fmp4%26ns%3DS9_Ybd532XTDPRESbLtpgv0Q%26rqh%3D1%26gir%3Dyes%26clen%3D23528197%26dur%3D218.509%26lmt%3D1706306794688765%26mt%3D1718433669%26fvip%3D5%26keepalive%3Dyes%26c%3DWEB%26sefc%3D1%26txp%3D4535434%26n%3DF0fTBVoQjt0LRQut%26sparams%3Dexpire%252Cei%252Cip%252Cid%252Caitags%252Csource%252Crequiressl%252Cxpc%252Cgcr%252Csiu%252Cbui%252Cspc%252Cvprv%252Csvpuc%252Cmime%252Cns%252Crqh%252Cgir%252Cclen%252Cdur%252Clmt%26lsparams%3Dmh%252Cmm%252Cmn%252Cms%252Cmv%252Cmvi%252Cpcm2cms%252Cpl%252Cinitcwndbps%26lsig%3DAHlkHjAwRQIhAPnvRDLIKHTP_xTe2L6Q-vCQXPQT32slnFeb2rozqDpuAiBf3T3TruWGIy0OLO-o3RyFYT_eFrEtxTAJkw5woihUxQ%253D%253D";

const url = decodeURIComponent(signature);

const urlParams = new URLSearchParams(url);

const s = urlParams.get("s");

console.log(s);

const sig = zPa(s);
console.log(sig);

console.log(`${urlParams.get("url")}+sig=${sig}`);
