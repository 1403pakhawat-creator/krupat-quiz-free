/* Lead magnet: แถบปลดล็อกติดล่างจอ + ป๊อปอัปเสนอขาย (ไม่มีเนื้อข้อสอบที่ล็อกอยู่ในไฟล์เว็บนี้) */
(function () {
  var LINK = 'https://m.me/61558005914260?ref=krupat_free&text=%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%84%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%AA%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B9%80%E0%B8%AB%E0%B9%88%E0%B8%B2', API = 'https://script.google.com/macros/s/AKfycbw_yFLXphu5ZPb6etyasx_vFBdmidqgque_nGFNe98xeO4m09-6CaDbBepDH2BPYAlCLg/exec', SITE = 'https://1403pakhawat-creator.github.io/krupat-quiz/';
  var BANK = { name: 'ธนาคารทหารไทยธนชาต (ttb)', holder: 'นาย ภควัต ดินันติ', acct: '__ACCT__', qr: 'qr_promptpay.jpg' };   // ตั้งค่าที่ build_free.py (pay_config.json)
  var KEY = 'krupat_gate_v2', DKEY = 'krupat_dev_v1';
  var css = document.createElement('style');
  css.textContent =
    'a.promo{position:relative;display:block;border-radius:16px;overflow:hidden;border:2px solid #e91e78;box-shadow:0 8px 24px rgba(233,30,120,.35);text-decoration:none;background:#0d0d10;transition:transform .2s}a.promo:hover{transform:translateY(-4px)}a.promo img{display:block;width:100%}a.promo .pt{position:absolute;top:10px;left:10px;z-index:2;background:linear-gradient(90deg,#ffd740,#ffb300);color:#3a2a00;font-weight:700;border-radius:99px;padding:4px 14px;font-size:.95rem}a.promo em{display:block;font-style:normal;font-weight:700;color:#fff;background:#e91e78;text-align:center;padding:13px 14px;font-size:1.05rem}' +
    '.lockfiles{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}@media(min-width:640px){.lockfiles{max-width:560px}}a.lockfile{position:relative;display:flex;flex-direction:column;gap:6px;background:var(--card);border:2px solid var(--line);border-radius:16px;padding:10px;text-decoration:none;color:inherit;transition:transform .2s,border-color .2s}a.lockfile:hover{transform:translateY(-5px);border-color:#e0a800}a.lockfile img{width:100%;border-radius:8px;filter:saturate(.85) brightness(.92)}a.lockfile b{color:var(--navy);font-size:1rem}a.lockfile em{font-style:normal;font-weight:700;color:#b8860b;font-size:.9rem}a.lockfile .lk{position:absolute;z-index:3;bottom:70px;right:18px;background:rgba(15,10,0,.85);border:1.5px solid #ffd740;border-radius:99px;width:38px;height:38px;display:flex;align-items:center;justify-content:center;font-size:20px}' +
    'a.freefile{display:flex;gap:16px;align-items:center;background:var(--card);border:2px solid #e0a800;border-radius:16px;padding:14px;text-decoration:none;color:inherit;box-shadow:0 6px 20px rgba(201,149,28,.25);transition:transform .2s}a.freefile:hover{transform:translateY(-4px)}a.freefile img{width:42%;max-width:220px;border-radius:10px;box-shadow:0 6px 16px rgba(0,0,0,.35)}.ffb{display:flex;flex-direction:column;gap:8px}.ffb b{font-size:1.2rem;color:var(--navy)}.ffb span{color:var(--mute);font-size:.95rem}.ffb em{font-style:normal;font-weight:700;color:#fff;background:#e91e78;border-radius:12px;padding:10px 14px;text-align:center}' +
    'a.set.tile.locked{position:relative;filter:saturate(.55);cursor:pointer}a.set.tile.locked .cv{opacity:.55}' +
    '.lockmask{position:absolute;z-index:3;top:8px;right:8px;background:rgba(15,10,0,.85);border:1.5px solid #ffd740;border-radius:99px;width:38px;height:38px;display:flex;align-items:center;justify-content:center;font-size:20px}' +
    'a.set.tile.locked .go{color:#b8860b}.freetag{display:inline-block;margin:2px 0 6px;background:linear-gradient(90deg,#ffd740,#ffb300);color:#3a2a00;font-weight:700;border-radius:99px;padding:3px 16px;font-size:.95rem}' +
    '#kqbar{position:fixed;left:0;right:0;bottom:0;z-index:9990;background:#15110a;border-top:2px solid #ffd740;padding:8px 12px;display:flex;gap:10px;align-items:center;justify-content:center;font-family:Sarabun,system-ui,sans-serif;color:#fff6d6;font-size:.92rem}' +
    '#kqbar b{color:#ffd740}#kqbar a{display:block;width:100%;max-width:560px;text-align:center;text-decoration:none;font:inherit;font-weight:700;border-radius:12px;background:#e91e78;color:#fff;padding:10px 14px;line-height:1.3}#kqbar button{font:inherit;font-weight:700;border:0;border-radius:99px;background:#e91e78;color:#fff;padding:8px 16px;cursor:pointer;white-space:nowrap}' +
    '#kqmodal{position:fixed;inset:0;z-index:99998;background:rgba(5,5,20,.78);display:none;align-items:center;justify-content:center;padding:18px;font-family:Sarabun,system-ui,sans-serif}' +
    '#kqmodal.on{display:flex}#kqmodal .bx{background:#15110a;border:2px solid #ffd740;border-radius:18px;max-width:420px;width:100%;max-height:92vh;overflow-y:auto;padding:24px 20px;text-align:center;color:#fff6d6;box-shadow:0 10px 40px rgba(0,0,0,.6);max-height:92vh;overflow:auto}' +
    '#kqmodal h2{margin:4px 0;color:#ffd740;font-size:1.35rem}#kqmodal .pr{font-size:2.4rem;font-weight:700;color:#fff;margin:6px 0 0}#kqmodal .pr small{font-size:1rem;color:#d9c27a;font-weight:400}' +
    '#kqmodal ul{list-style:none;padding:0;margin:12px 0;text-align:left;font-size:.98rem}#kqmodal li{padding:3px 0}' +
    '#kqmodal a.cta{display:block;background:#e91e78;color:#fff;font-weight:700;font-size:1.12rem;text-decoration:none;padding:13px;border-radius:12px;margin-top:8px}' +
    '#kqmodal .x{background:none;border:0;color:#a89350;font:inherit;margin-top:10px;cursor:pointer;text-decoration:underline}body{padding-bottom:64px}';
  document.head.appendChild(css);
  /* ===== ปลดล็อกในหน้านี้: ข้อมูลคอร์ส + วิธีโอน -> แจ้งสลิป -> รหัสขึ้นจอ -> เข้าคลังข้อสอบเต็ม (ใช้ระบบตรวจสลิปเดียวกับเว็บหลัก) ===== */
  function dev() { try { var d = localStorage.getItem(DKEY); if (!d) { d = 'd' + Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem(DKEY, d); } return d; } catch (e) { return 'tmp' + Math.random().toString(36).slice(2); } }
  function member() { try { var v = JSON.parse(localStorage.getItem(KEY)); return !!(v && v.t && Date.now() - v.t < 30 * 864e5); } catch (e) { return false; } }
  function shrink(file) {   // ย่อรูปสลิปเป็น JPEG ไม่เกิน 1400px
    return new Promise(function (res, rej) {
      var r = new FileReader(); r.onerror = rej;
      r.onload = function () { var im = new Image(); im.onerror = function () { rej(new Error('img')); };
        im.onload = function () { var k = Math.min(1, 1400 / Math.max(im.width, im.height)), c = document.createElement('canvas'); c.width = Math.round(im.width * k); c.height = Math.round(im.height * k); c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); res(c.toDataURL('image/jpeg', 0.85)); };
        im.src = r.result; };
      r.readAsDataURL(file);
    });
  }
  function post(action, d) { return fetch(API, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(Object.assign({ action: action }, d)) }).then(function (r) { return r.json(); }); }
  function loginCode(code) { return fetch(API + '?action=login&code=' + encodeURIComponent(code) + '&device=' + encodeURIComponent(dev())).then(function (r) { return r.json(); }); }
  function enter(code, r) { try { localStorage.setItem(KEY, JSON.stringify({ c: code, g: r.guest ? 1 : 0, t: Date.now() })); if (r.pid) localStorage.setItem('krupat_pid', r.pid); if (r.nick && !localStorage.getItem('krupat_name')) localStorage.setItem('krupat_name', String(r.nick).slice(0, 20)); } catch (e) {} location.href = SITE; }   // เว็บฟรีกับเว็บหลักอยู่โดเมนเดียวกัน ล็อกอินส่งต่อได้
  var FS = 'width:100%;box-sizing:border-box;font:inherit;font-size:1rem;padding:11px;border-radius:12px;border:2px solid #7a5a08;background:#fff;color:#111;margin-top:8px';
  var BTN = 'display:block;width:100%;font:inherit;font-weight:700;font-size:1.05rem;padding:12px;border:0;border-radius:12px;background:#e91e78;color:#fff;cursor:pointer;margin-top:10px;text-align:center;text-decoration:none;box-sizing:border-box';
  var LNK = 'background:none;border:0;color:#d9c27a;font:inherit;font-size:.88rem;text-decoration:underline;cursor:pointer;margin-top:8px;display:block;width:100%';
  function ui() {
    if (document.getElementById('kqbar')) return;
    var mem = member(), CTA = mem ? '✅ เป็นสมาชิกแล้ว — เข้าคลังข้อสอบเต็ม' : 'สมัครคอร์สหมาเห่า เพื่อปลดล็อคข้อสอบ ติวไลฟ์สด โค้งสุดท้าย ส่งเข้าห้องสอบ';
    var bar = document.createElement('div'); bar.id = 'kqbar';
    bar.innerHTML = '<a id="kqbtn" href="#unlock">' + (mem ? '' : '🔓 ') + CTA + ' →</a>';
    var m = document.createElement('div'); m.id = 'kqmodal'; m.innerHTML = '<div class="bx"><div id="kqv"></div></div>';
    document.body.appendChild(bar); document.body.appendChild(m);
    var v = document.getElementById('kqv');
    function open() { if (member()) { location.href = SITE; return; } m.classList.add('on'); offer(); }
    function close() { m.classList.remove('on'); }
    m.addEventListener('click', function (e) { if (e.target === m) close(); });
    document.addEventListener('click', function (e) { var a = e.target.closest && e.target.closest('a[href="#unlock"]'); if (a) { e.preventDefault(); open(); } });
    function el(html) { v.innerHTML = html; v.parentNode.scrollTop = 0; return v; }
    function msgIn(node, text, ok) { node.style.color = ok ? '#9be28f' : '#ff8a7a'; node.textContent = text; }
    function wire(id, fn) { var n = document.getElementById(id); if (n) n.onclick = fn; return n; }
    function copyBtn(id, text, doneId) { wire(id, function () { var done = function () { document.getElementById(doneId).textContent = 'คัดลอกแล้ว ✅'; }; try { navigator.clipboard.writeText(text).then(done, function () { document.getElementById(doneId).textContent = 'กดค้างที่ข้อความแล้วคัดลอกเอง'; }); } catch (e) { document.getElementById(doneId).textContent = 'กดค้างที่ข้อความแล้วคัดลอกเอง'; } }); }
    function offer() {
      var bankOk = BANK.acct && BANK.acct.indexOf('__') < 0;
      el('<div style="font-size:42px">🔓</div><h2>ปลดล็อกคลังข้อสอบเต็ม</h2>' +
        '<div style="background:#1f1a0c;border:1.5px solid #7a5a08;border-radius:14px;padding:12px 14px;margin:8px 0;text-align:left"><b style="color:#ffd740">คอร์สคืนหมาเห่า 69</b> <span style="color:#d9c27a;font-size:.85rem">• มูลค่ารวม 2,095 บาท</span>' +
        '<div class="pr" style="text-align:center">490 <small>บาท</small></div>' +
        '<ul><li>✅ ข้อสอบจริงฝึกทำ <b>2,000+ ข้อ</b> เฉลยพร้อมคำอธิบาย</li><li>✅ ไฟล์สรุปลัด Anatomy + ไฟล์ 30 วันพิชิตข้อสอบ</li><li>✅ คลิปติวคืนหมาเห่า ย้อนหลัง 9 คลิป + ไลฟ์สด 6 คลิป</li><li>✅ จำลองข้อสอบก่อนสอบจริง</li><li>✅ รับประกันคืนเงิน 100% (ตามเงื่อนไขหน้าคอร์ส)</li></ul><div style="text-align:right"><a href="https://www.sobkrupala.com/exam-course" target="_blank" rel="noopener" style="color:#d9c27a;font-size:.85rem">รายละเอียดเพิ่มเติม ›</a></div></div>' +
        '<div style="text-align:left;background:#101a0c;border:1.5px solid #3b7a3b;border-radius:14px;padding:12px 14px;margin:8px 0"><b style="color:#9be28f">① โอนเงิน 490 บาท</b><br>พร้อมเพย์ ชื่อบัญชี <b>' + BANK.holder + '</b><br>' +
        (bankOk ? 'เลขบัญชี <b id="kqacct" style="font-size:1.2rem;letter-spacing:1px;color:#ffd740">' + BANK.acct + '</b> <button id="kqcpa" style="background:#3b7a3b;color:#fff;border:0;border-radius:8px;padding:3px 10px;font:inherit;font-size:.85rem;cursor:pointer">คัดลอก</button> <span id="kqcpd" style="font-size:.8rem;color:#9be28f"></span>' : 'สแกน QR พร้อมเพย์ด้านล่าง (ยอด 490 บาท)') +
        (BANK.qr && BANK.qr.indexOf('__') < 0 ? '<div style="text-align:center;margin-top:8px"><img src="' + BANK.qr + '" alt="QR พร้อมเพย์" style="max-width:250px;width:100%;border-radius:10px;background:#fff;padding:6px"></div>' : '') +
        '<div style="margin-top:8px"><b style="color:#9be28f">② แนบสลิป ③ รับรหัสบนจอทันที</b></div></div>' +
        '<button id="kqgo" style="' + BTN + '">โอนแล้ว → แจ้งสลิปรับรหัส</button>' +
        '<button id="kqhave" style="' + LNK + '">มีรหัสอยู่แล้ว? เข้าสู่ระบบ</button><button id="kqforgot" style="' + LNK + '">ลืมรหัส? กู้รหัสด้วยอีเมล</button>' +
        '<a style="' + LNK + '" href="' + LINK + '" target="_blank" rel="noopener">สอบถามทางแชตเพจ</a><button class="x" id="kqclose">ไว้ก่อน ขอลองฟรีต่อ</button>');
      if (bankOk) copyBtn('kqcpa', BANK.acct.replace(/[^0-9]/g, ''), 'kqcpd');
      wire('kqgo', slipForm); wire('kqhave', haveCode); wire('kqforgot', recover); wire('kqclose', close);
    }
    function slipForm() {
      el('<div style="font-size:38px">🧾</div><h2>แจ้งสลิปรับรหัส</h2><p style="margin:0 0 6px;color:#d9c27a;font-size:.9rem">กรอกชื่อจริง-นามสกุล อีเมล และแนบสลิปโอน ระบบตรวจและแสดงรหัสให้ทันที</p>' +
        '<input id="kqnm" autocomplete="name" placeholder="ชื่อจริง-นามสกุล" style="' + FS + '"><input id="kqem" type="email" autocomplete="email" autocapitalize="none" placeholder="อีเมล (ไว้ติดต่อ/กู้รหัส)" style="' + FS + '">' +
        '<label style="display:block;margin-top:8px;color:#d9c27a;font-size:.85rem;text-align:left">รูปสลิปการโอน</label><input id="kqsl" type="file" accept="image/*" style="width:100%;color:#fff6d6;font-size:.9rem">' +
        '<button id="kqsend" style="' + BTN + '">ตรวจสลิปและรับรหัส</button><button id="kqrev" style="' + BTN + ';display:none;background:transparent;border:2px solid #ffd740;color:#ffd740">ส่งให้ทีมงานตรวจสลิป</button>' +
        '<p id="kqcm" style="min-height:1.4em;margin:10px 0 0;font-size:.9rem;white-space:pre-line"></p><button id="kqback" style="' + LNK + '">← กลับ</button>');
      var nm = document.getElementById('kqnm'), em = document.getElementById('kqem'), fl = document.getElementById('kqsl'), sd = document.getElementById('kqsend'), rv = document.getElementById('kqrev'), cm = document.getElementById('kqcm'), img = null;
      function after(r) { sd.disabled = false; rv.disabled = false; if (r.ok && r.status === 'issued' && r.code) { codeView(r.code, r.mailed); return; } msgIn(cm, r.message || 'เกิดข้อผิดพลาด ลองใหม่อีกครั้ง', !!r.ok); rv.style.display = r.canReview ? 'block' : 'none'; if (r.ok && (r.status === 'resent')) sd.style.display = 'none'; }
      function fail() { sd.disabled = false; rv.disabled = false; msgIn(cm, 'เชื่อมต่อไม่ได้ กรุณาตรวจอินเทอร์เน็ตแล้วลองใหม่', false); }
      sd.onclick = function () {
        if (nm.value.replace(/\s+/g, '').length < 3) return msgIn(cm, 'กรอกชื่อจริง (ชื่อ-นามสกุล) ก่อนนะคะ', false);
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em.value.trim())) return msgIn(cm, 'กรอกอีเมลให้ถูกต้องก่อนนะคะ', false);
        if (!fl.files[0]) return msgIn(cm, 'แนบรูปสลิปก่อนนะคะ', false);
        sd.disabled = true; msgIn(cm, 'กำลังตรวจสลิป... (ประมาณ 5-10 วินาที)', true);
        shrink(fl.files[0]).then(function (d) { img = d; return post('claim', { email: em.value.trim(), name: nm.value.trim(), image: d }); }).then(after).catch(fail);
      };
      rv.onclick = function () { if (!img) return msgIn(cm, 'แนบสลิปแล้วกดตรวจก่อนนะคะ', false); rv.disabled = true; msgIn(cm, 'กำลังส่ง...', true); post('claim_review', { email: em.value.trim(), name: nm.value.trim(), image: img }).then(after).catch(fail); };
      wire('kqback', offer);
    }
    function codeView(code, mailed, recovered) {
      el('<div style="font-size:44px">🎉</div><h2>' + (recovered ? 'พบรหัสของคุณแล้ว!' : 'ตรวจสลิปผ่านแล้ว!') + '</h2><p style="margin:0 0 8px;color:#d9c27a;font-size:.9rem">รหัสเข้าใช้งานของคุณ (จดหรือกดคัดลอกเก็บไว้นะคะ)</p>' +
        '<div style="background:#fff;color:#111;border-radius:12px;padding:12px;font-size:1.5rem;font-weight:800;letter-spacing:2px;border:3px solid #ffd740;user-select:all">' + code + '</div>' +
        '<button id="kqcp" style="' + BTN + ';background:transparent;border:2px solid #ffd740;color:#ffd740">📋 คัดลอกรหัส</button><button id="kqenter" style="' + BTN + '">เข้าคลังข้อสอบเต็ม ▶</button>' +
        '<p id="kqem2" style="min-height:1.3em;margin:8px 0 0;color:#9be28f;font-size:.85rem">' + (mailed ? 'ส่งสำเนาเข้าอีเมลแล้ว' : '') + '</p><p style="margin:2px 0 0;color:#a89350;font-size:.78rem">รหัสนี้ใช้ได้ 2 เครื่อง โปรดอย่าส่งต่อให้ผู้อื่น</p>');
      var m2 = document.getElementById('kqem2'); copyBtn('kqcp', code, 'kqem2');
      wire('kqenter', function (ev) { ev.target.disabled = true; msgIn(m2, 'กำลังเข้าสู่ระบบ...', true); loginCode(code).then(function (r) { if (r && r.ok) enter(code, r); else { ev.target.disabled = false; msgIn(m2, 'เข้าระบบไม่สำเร็จ ลองใหม่อีกครั้ง', false); } }).catch(function () { ev.target.disabled = false; msgIn(m2, 'เชื่อมต่อไม่ได้ ลองใหม่อีกครั้ง', false); }); });
    }
    function haveCode() {
      el('<div style="font-size:38px">🔑</div><h2>เข้าสู่ระบบด้วยรหัส</h2><input id="kqcd" autocomplete="off" autocapitalize="characters" placeholder="เช่น KP-AB12-CD34" style="' + FS + ';text-align:center;letter-spacing:1px;text-transform:uppercase">' +
        '<button id="kqin" style="' + BTN + '">เข้าสู่ระบบ</button><p id="kqcm" style="min-height:1.4em;margin:10px 0 0;font-size:.9rem"></p><button id="kqback" style="' + LNK + '">← กลับ</button>');
      var cd = document.getElementById('kqcd'), cm = document.getElementById('kqcm');
      wire('kqin', function () { var c = cd.value.trim().toUpperCase().replace(/\s+/g, ''); if (!c) return msgIn(cm, 'กรอกรหัสก่อนนะคะ', false); msgIn(cm, 'กำลังตรวจสอบ...', true);
        loginCode(c).then(function (r) { if (r && r.ok) return enter(c, r); var w = r && r.reason; msgIn(cm, w === 'limit' ? 'รหัสนี้ใช้ครบ ' + (r.max || 2) + ' เครื่องแล้ว ติดต่อทีมงานเพื่อรีเซ็ต' : w === 'revoked' ? 'รหัสนี้ถูกปิดการใช้งานแล้ว ติดต่อทีมงาน' : 'รหัสไม่ถูกต้อง ลองใหม่อีกครั้ง', false); }).catch(function () { msgIn(cm, 'เชื่อมต่อไม่ได้ ลองใหม่อีกครั้ง', false); }); });
      wire('kqback', offer); setTimeout(function () { cd.focus(); }, 50);
    }
    function recover() {
      el('<div style="font-size:38px">📧</div><h2>กู้รหัสด้วยอีเมล</h2><p style="margin:0 0 6px;color:#d9c27a;font-size:.9rem">กรอกอีเมลที่เคยใช้รับรหัส ระบบจะแสดงรหัสเดิมให้ทันที</p><input id="kqem" type="email" autocomplete="email" autocapitalize="none" placeholder="อีเมลที่เคยใช้รับรหัส" style="' + FS + '">' +
        '<button id="kqgo2" style="' + BTN + '">กู้รหัสของฉัน</button><p id="kqcm" style="min-height:1.4em;margin:10px 0 0;font-size:.9rem"></p><button id="kqback" style="' + LNK + '">← กลับ</button>');
      var em = document.getElementById('kqem'), cm = document.getElementById('kqcm');
      wire('kqgo2', function () { if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em.value.trim())) return msgIn(cm, 'กรอกอีเมลให้ถูกต้องก่อนนะคะ', false); msgIn(cm, 'กำลังค้นหารหัส...', true);
        post('recover', { email: em.value.trim() }).then(function (r) { if (r.ok && r.code) return codeView(r.code, false, true); msgIn(cm, r.message || 'ไม่พบรหัส', false); }).catch(function () { msgIn(cm, 'เชื่อมต่อไม่ได้ ลองใหม่อีกครั้ง', false); }); });
      wire('kqback', offer);
    }
    try { if (/[?&]pay=1(&|$)/.test(location.search)) open(); } catch (e) {}   // มาจากปุ่มสมัครหน้าขาย
  }
  if (document.body) ui(); else document.addEventListener('DOMContentLoaded', ui);
})();
