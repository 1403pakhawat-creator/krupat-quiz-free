/* Lead magnet: แถบปลดล็อกติดล่างจอ + ป๊อปอัปเสนอขาย (ไม่มีเนื้อข้อสอบที่ล็อกอยู่ในไฟล์เว็บนี้) */
(function () {
  var LINK = 'https://m.me/61558005914260?ref=krupat_free&text=%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%84%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%AA%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B9%80%E0%B8%AB%E0%B9%88%E0%B8%B2';
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
    '#kqmodal.on{display:flex}#kqmodal .bx{background:#15110a;border:2px solid #ffd740;border-radius:18px;max-width:400px;width:100%;padding:24px 20px;text-align:center;color:#fff6d6;box-shadow:0 10px 40px rgba(0,0,0,.6);max-height:92vh;overflow:auto}' +
    '#kqmodal h2{margin:4px 0;color:#ffd740;font-size:1.35rem}#kqmodal .pr{font-size:2.4rem;font-weight:700;color:#fff;margin:6px 0 0}#kqmodal .pr small{font-size:1rem;color:#d9c27a;font-weight:400}' +
    '#kqmodal ul{list-style:none;padding:0;margin:12px 0;text-align:left;font-size:.98rem}#kqmodal li{padding:3px 0}' +
    '#kqmodal a.cta{display:block;background:#e91e78;color:#fff;font-weight:700;font-size:1.12rem;text-decoration:none;padding:13px;border-radius:12px;margin-top:8px}' +
    '#kqmodal .x{background:none;border:0;color:#a89350;font:inherit;margin-top:10px;cursor:pointer;text-decoration:underline}body{padding-bottom:64px}';
  document.head.appendChild(css);
  function ui() {
    if (document.getElementById('kqbar')) return;
    var bar = document.createElement('div'); bar.id = 'kqbar';
    var CTA = 'สมัครคอร์สหมาเห่า เพื่อปลดล็อคข้อสอบ ติวไลฟ์สด โค้งสุดท้าย ส่งเข้าห้องสอบ';
    bar.innerHTML = '<a id="kqbtn" href="' + LINK + '" target="_blank" rel="noopener">🔓 ' + CTA + ' →</a>';
    var m = document.createElement('div'); m.id = 'kqmodal';
    m.innerHTML = '<div class="bx"><div style="font-size:44px">🔒</div><h2>อ่านไม่ทันใช่ไหม?<br>มาลุยข้อสอบกับเรา</h2>' +
      '<p style="margin:6px 0 14px;color:#d9c27a">กดปุ่มด้านล่าง ระบบจะเปิดแชทเพจพร้อมข้อความ “สมัครคอร์สหมาเห่า” กดส่งได้เลยครับ</p>' +
      '<a class="cta" href="' + LINK + '" target="_blank" rel="noopener">' + CTA + ' →</a>' +
      '<button class="x" id="kqclose">ไว้ก่อน ขอลองฟรีต่อ</button></div>';
    document.body.appendChild(bar); document.body.appendChild(m);
    function open() { m.classList.add('on'); } function close() { m.classList.remove('on'); }
    document.getElementById('kqclose').onclick = close;
    m.addEventListener('click', function (e) { if (e.target === m) close(); });
    document.addEventListener('click', function (e) { var a = e.target.closest && e.target.closest('a[href="#unlock"]'); if (a) { e.preventDefault(); open(); } });
  }
  if (document.body) ui(); else document.addEventListener('DOMContentLoaded', ui);
})();
