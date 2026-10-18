/* ล็อกอินด้วย LINE ทุกหน้าที่ใส่สคริปต์นี้ + จดสถิติการเข้าใช้
   ต้องมี window.KQ_LINE = {id: LINE Login Channel ID, api: URL Apps Script, cb: URL หน้า line.html} ก่อนโหลดไฟล์นี้
   จำเครื่อง 30 วัน (ตรงกับอายุ token ฝั่งเซิร์ฟเวอร์) แต่ส่ง "เข้าหน้านี้" ไปจดทุกครั้งที่เปิด */
(function () {
  var C = window.KQ_LINE; if (!C || !C.id || !C.api || !C.cb) return;
  var KEY = 'krupat_free_line_v1', SKEY = 'krupat_free_line_state';
  function load() { try { var v = JSON.parse(localStorage.getItem(KEY)); if (v && v.tok && v.exp > Date.now()) return v; } catch (e) {} return null; }
  function clear() { try { localStorage.removeItem(KEY); } catch (e) {} }
  function enc(s) { return encodeURIComponent(s); }
  function page() { return (location.pathname.split('/').pop() || 'index').slice(0, 60); }
  var s = load();
  if (s) {
    fetch(C.api + '?action=visit&token=' + enc(s.tok) + '&page=' + enc(page()))
      .then(function (r) { return r.json(); })
      .then(function (r) { if (r && r.ok === false && r.reason === 'token') { clear(); location.reload(); } })
      .catch(function () {});
    window.KQ_LINE_USER = s.name;
    window.KQ_LINE_RESULT = function (set, by) {   // ส่งคะแนนแยกหมวดไปติดแท็กจุดอ่อน (เรียกจากหน้าสรุปผลของชุดที่มีหลายหมวด)
      try {
        var arr = Object.keys(by).map(function (k) { return { s: k, r: by[k].r, t: by[k].t }; });
        fetch(C.api + '?action=result&token=' + enc(s.tok) + '&set=' + enc(set) + '&data=' + enc(JSON.stringify(arr))).catch(function () {});
      } catch (e) {}
    };
    window.KQ_LINE_ANS = function (set, list) {   // ส่งคำตอบรายข้อ [รหัสข้อ, ตัวเลือกที่เลือก, ถูก(1/0)] ไว้วิเคราะห์ความยากง่ายของข้อสอบ
      try {
        var body = JSON.stringify({ token: s.tok, set: set, ans: list.map(function (x) { return x[0] + ':' + x[1] + ':' + x[2]; }).join(',') });
        fetch(C.api, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: body }).catch(function () {});
      } catch (e) {}
    };
    return;
  }
  function loginUrl() {
    var nonce = Math.random().toString(36).slice(2) + Date.now().toString(36);
    try { localStorage.setItem(SKEY, nonce); } catch (e) {}
    var state = nonce + '.' + btoa(unescape(enc(location.href))).replace(/=+$/, '');
    return 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=' + enc(C.id) +
      '&redirect_uri=' + enc(C.cb) + '&state=' + enc(state) + '&scope=' + enc('profile openid') + '&bot_prompt=aggressive';
  }
  document.documentElement.style.overflow = 'hidden';
  var ov = document.createElement('div');
  ov.style.cssText = 'position:fixed;inset:0;z-index:99999;background:linear-gradient(135deg,#0b1f4b,#2b1b5a);display:flex;align-items:center;justify-content:center;padding:20px;font-family:Sarabun,system-ui,sans-serif';
  ov.innerHTML = '<div style="background:#15110a;border:2px solid #ffd740;border-radius:18px;max-width:380px;width:100%;padding:26px 22px;text-align:center;color:#fff6d6;box-shadow:0 10px 40px rgba(0,0,0,.5)">' +
    '<div style="font-size:42px">🐺</div><h2 style="margin:6px 0 4px;color:#ffd740;font-size:1.4rem">ลองทำข้อสอบฟรี</h2>' +
    '<p style="margin:0 0 16px;color:#d9c27a;font-size:.95rem">เข้าสู่ระบบด้วย LINE เพื่อลองทำข้อสอบฟรี 5 ชุด และรับข่าวสารจากครูพัด</p>' +
    '<a id="kqline" href="#" style="display:block;font:inherit;font-weight:700;font-size:1.1rem;padding:13px;border-radius:12px;background:#06c755;color:#fff;text-decoration:none">เข้าสู่ระบบด้วย LINE</a>' +
    '<p style="margin:12px 0 0;color:#a89350;font-size:.78rem;line-height:1.4">เราจะเก็บชื่อ รหัส LINE และผลการทำข้อสอบของคุณ เพื่อแนะนำเนื้อหา สินค้า และคอร์สที่ตรงกับจุดที่คุณต้องเสริม</p></div>';
  function mount() {
    if (!document.body || ov.parentNode) return; document.body.appendChild(ov);
    ov.querySelector('#kqline').onclick = function (e) { e.preventDefault(); location.href = loginUrl(); };
  }
  document.addEventListener('DOMContentLoaded', mount); mount();
})();
