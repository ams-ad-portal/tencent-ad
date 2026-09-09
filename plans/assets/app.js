/* ============================================================
 * 腾讯内容平台 · 公开资源站（独立版）
 * 权限：统一门禁（访问码 + 腾讯文档申请审批）
 * ============================================================ */
/* ===== 平台营销手册（各平台营销手册 · 数据与渲染，框架复用刊例站） ===== */
(function () {
const PLAN_STRUCTURE = [
  {
    category: "腾讯视频",
    key: "txvideo",
    items: [
      {
        title: "2026大剧营销手册",
        period: "26年",
        file: "files/txvideo/2026-daju-yingxiao-shouce.pdf",
        type: "PDF",
        size: "33.2 MB",
        dlName: "2026大剧营销手册.pdf"
      },
      {
        title: "2026腾讯视频 综艺 纪录片 商业共创营销手册",
        period: "26年",
        file: "files/txvideo/2026-zongyi-jilupian-gongchuang-shouce.pdf",
        type: "PDF",
        size: "34.4 MB",
        dlName: "2026腾讯视频 综艺 纪录片 商业共创营销手册.pdf"
      },
      {
        title: "剧场营销",
        period: "26年",
        file: "files/txvideo/juchang-yingxiao-20251104.pptx",
        type: "PPTX",
        size: "34.9 MB",
        dlName: "剧场营销.pptx"
      }
    ]
  },
  {
    category: "腾讯体育",
    key: "txsports",
    items: [
      {
        title: "体育26年通案（精简版）",
        file: "files/txsports/2026-tongan-jianyao.pdf",
        type: "PDF",
        size: "11.6 MB",
        period: "26年",
        dlName: "体育26年通案精简版.pdf"
      },
      {
        title: "26体育通案（1027版）",
        file: "files/txsports/2026-tongan-1027.pdf",
        type: "PDF",
        size: "11.3 MB",
        period: "26年",
        dlName: "26体育通案-1027版.pdf"
      }
    ]
  },
  {
    category: "腾讯新闻",
    key: "txnews",
    items: [
      {
        title: "【健康赛道】2026H1腾讯新闻招商资源手册",
        period: "26年H1",
        file: "files/txnews/2026h1-health-track.pdf",
        type: "PDF",
        size: "28.9 MB",
        dlName: "【健康赛道】2026H1腾讯新闻招商资源手册.pdf"
      },
      {
        title: "2026H2腾讯新闻招商方案",
        period: "26年H2",
        file: "files/txnews/2026h2-zhaoshang.pdf",
        type: "PDF",
        size: "10.1 MB",
        dlName: "2026H2腾讯新闻招商方案.pdf"
      }
    ]
  },
  {
    category: "微信",
    key: "wechat",
    items: []
  },
  {
    category: "TME",
    key: "tme",
    items: [
      {
        title: "【26年Q1更新】TME合约广告创新资源介绍",
        file: "files/tme/2026q1-tme-chuangxin.pdf",
        type: "PDF",
        size: "6.0 MB",
        period: "26年",
        dlName: "【26年Q1更新】TME合约广告创新资源介绍.pdf"
      }
    ]
  },
  {
    category: "QQ",
    key: "qq",
    items: []
  }
];
window.PLAN_STRUCTURE = PLAN_STRUCTURE;

const sectionsEl = document.getElementById("sections");
const filterBar = document.getElementById("filterBar");
const viewer = document.getElementById("viewer");
const viewerFrame = document.getElementById("viewerFrame");
const pdfPages = document.getElementById("pdfPages");
const viewerName = document.getElementById("viewerName");
const viewerCat = document.getElementById("viewerCat");
const viewerDownload = document.getElementById("viewerDownload");

if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = "assets/vendor/pdf.worker.min.js";
}

function folderIcon() {
  return '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z"/></svg>';
}


function rowHTML(item, category) {
  return `
  <tr class="rate-row" data-category="${category}">
    <td class="rate-name">
      <button class="rate-view" type="button" data-view="${item.file}" data-name="${item.title}" data-cat="${category}" data-dl="${item.dlName}">
        <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path fill="currentColor" d="M10 4a6 6 0 1 0 3.7 10.7l4.3 4.3 1.4-1.4-4.3-4.3A6 6 0 0 0 10 4Zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/></svg>
        ${item.title}
      </button>
    </td>
    <td class="rate-type">${item.type}</td>
    <td class="rate-size">${item.size}</td><td class="rate-period">${item.period || "—"}</td>
    <td class="rate-actions">
      <a class="btn btn-dl" href="${item.file}" download="${item.dlName}">下载</a>
    </td>
  </tr>`;
}

function render(filter = "all") {
  const html = PLAN_STRUCTURE.filter(cat => filter === "all" || cat.category === filter)
    .map(cat => {
      const items = cat.items;
      const body = items.length
        ? `<div class="table-wrap"><table class="rate-table">
            <thead><tr><th>方案名称</th><th>文件类型</th><th>文件大小</th><th>时间周期</th><th>下载</th></tr></thead>
            <tbody>${items.map(it => rowHTML(it, cat.category)).join("")}</tbody>
          </table></div>`
        : `<div class="plan-empty">这个板块的方案还在路上，先把文件发给我，我马上补上。</div>`;
      return `
      <section class="section">
        <div class="section-head">
          <h2>${cat.category}</h2>
          <span class="count">${items.length} 份</span>
        </div>
        ${body}
      </section>`;
    }).join("");
  sectionsEl.innerHTML = html;
}

function openViewer(file, name, cat, dl) {
  viewerName.textContent = name;
  viewerCat.textContent = cat;
  viewerDownload.href = file;
  viewerDownload.setAttribute("download", dl);
  viewerZoom = 1;
  viewer.classList.add("open");
  viewer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lockPageZoom();
  renderDoc(file);
}

/* 预览打开时锁定页面整页缩放（手机双击/捏合会把标题栏和浮层返回按钮一起放大跑掉）。
 * 多管齐下：① meta viewport 锁（Android/微信 webview 生效）② iOS gesturestart 拦截
 * ③ document 双指 touchmove 拦截（部分 webview 兜底）。关闭预览时恢复。
 */
const viewportMeta = document.querySelector('meta[name="viewport"]');
const BASE_VIEWPORT = viewportMeta ? viewportMeta.content : "width=device-width, initial-scale=1.0";
const LOCK_VIEWPORT = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
function lockGesture(e) { e.preventDefault(); }
function blockPinch(e) { if (e.touches && e.touches.length > 1) e.preventDefault(); }
function lockPageZoom() {
  if (viewportMeta) viewportMeta.setAttribute("content", LOCK_VIEWPORT);
  document.addEventListener("gesturestart", lockGesture, { passive: false });
  document.addEventListener("touchmove", blockPinch, { passive: false });
}
function unlockPageZoom() {
  if (viewportMeta) viewportMeta.setAttribute("content", BASE_VIEWPORT);
  document.removeEventListener("gesturestart", lockGesture);
  document.removeEventListener("touchmove", blockPinch);
}

let currentPdfTask = null;
let pdfDoc = null;
let pdfRenderers = [];
let pdfScrollHandler = null;

/* 预览缩放：只缩放 PDF 内容，标题栏保持不动（按钮缩放；预览区禁用捏合缩放） */
let viewerBaseWidth = 820;
let viewerZoom = 1;
const zoomPct = document.getElementById("zoomPct");
function applyZoom() {
  pdfPages.querySelectorAll("canvas.pdf-page").forEach(c => {
    c.style.width = (viewerBaseWidth * viewerZoom) + "px";
    c.style.height = "auto";
  });
  if (zoomPct) zoomPct.textContent = Math.round(viewerZoom * 100) + "%";
}
document.getElementById("zoomIn").addEventListener("click", () => { viewerZoom = Math.min(8, viewerZoom * 1.25); applyZoom(); });
document.getElementById("zoomOut").addEventListener("click", () => { viewerZoom = Math.max(0.5, viewerZoom / 1.25); applyZoom(); });
document.getElementById("zoomFit").addEventListener("click", () => { viewerZoom = 1; applyZoom(); });

/* 预览内触控板/ctrl+滚轮 = 缩放 PDF 内容，而不是缩放整个页面（避免浮层返回按钮被放大跑掉） */
viewer.addEventListener("wheel", e => {
  if (!e.ctrlKey) return;
  e.preventDefault();
  const factor = Math.exp(-e.deltaY * 0.005);
  viewerZoom = Math.min(8, Math.max(0.5, viewerZoom * factor));
  applyZoom();
}, { passive: false });

/* 移动端：在 PDF 内容区双指捏合 = 直接缩放 PDF 内容（标题栏与浮层返回按钮保持不动）。
 * 依赖 .viewer-frame 的 touch-action: pan-x pan-y（禁止整页缩放、保留平移），
 * JS 读取双指距离变化换算 viewerZoom，并 preventDefault 避免触发滚动。 */
const frameEl = document.getElementById("viewerFrame");
let pinchStartDist = 0;
let pinchStartZoom = 1;
function pinchDist(a, b) { return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY); }
frameEl.addEventListener("touchstart", e => {
  if (e.touches.length === 2) {
    pinchStartDist = pinchDist(e.touches[0], e.touches[1]);
    pinchStartZoom = viewerZoom;
  }
}, { passive: true });
frameEl.addEventListener("touchmove", e => {
  if (e.touches.length === 2) {
    e.preventDefault();
    const d = pinchDist(e.touches[0], e.touches[1]);
    if (pinchStartDist > 0) {
      viewerZoom = Math.min(8, Math.max(0.5, pinchStartZoom * (d / pinchStartDist)));
      applyZoom();
    }
  }
}, { passive: false });
frameEl.addEventListener("touchend", () => { pinchStartDist = 0; }, { passive: true });

function renderDoc(url) {
  if (/\.pptx?$/i.test(url)) {
    // PPTX 用微软 Office 在线预览（文件已在公网可访问），失败时可点右上角下载
    const abs = new URL(url, location.href).href;
    pdfPages.innerHTML =
      '<iframe class="office-frame" src="https://view.officeapps.live.com/op/embed.aspx?src='
      + encodeURIComponent(abs) + '" allowfullscreen></iframe>'
      + '<div class="pdf-loading" style="padding:10px 0 18px;">PPT 正在通过在线组件加载（较大文件首次打开约需十几秒）；若长时间空白，请直接点右上角「下载」。</div>';
    return;
  }
  renderPDF(url);
}

async function renderPDF(url) {
  pdfPages.innerHTML = '<div class="pdf-loading">正在加载预览…</div>';
  if (!window.pdfjsLib) {
    pdfPages.innerHTML = '<div class="pdf-error">PDF 预览组件未能加载，请使用右上角「下载」获取文件。</div>';
    return;
  }
  try {
    const loadingTask = pdfjsLib.getDocument(url);
    currentPdfTask = loadingTask;
    const pdf = await loadingTask.promise;
    pdfDoc = pdf;
    const containerWidth = pdfPages.clientWidth || 820;
    viewerBaseWidth = containerWidth;
    const dpr = window.devicePixelRatio || 1;
    pdfPages.innerHTML = "";

    // 每页先放占位块，滚动到视口附近才按高分辩率渲染（懒加载），
    // 离开视口较远的页回收画布释放内存 —— 保证任何屏幕上文字都清晰且不卡死。
    pdfRenderers = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      const ph = document.createElement("div");
      ph.className = "pdf-ph";
      ph.dataset.page = String(i);
      ph.style.width = containerWidth + "px";
      ph.textContent = "第 " + i + " 页…";
      pdfPages.appendChild(ph);
      pdfRenderers.push({ num: i, ph, canvas: null, busy: false });
    }

    async function renderPage(item) {
      if (item.busy || item.canvas) return;
      item.busy = true;
      try {
        const page = await pdf.getPage(item.num);
        const base = page.getViewport({ scale: 1 });
        // 按「容器宽度 × 设备像素比」渲染高清画布：最低 2 倍、上限 6 倍，
        // 即使手机 webview 上报 dpr=1 也有 2 倍保底，缩放显示后依旧锐利。
        const scale = Math.min(6, Math.max(2, (containerWidth * dpr) / base.width));
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.className = "pdf-page";
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = (containerWidth * viewerZoom) + "px";
        canvas.style.height = "auto";
        canvas.dataset.page = String(item.num);
        const ctx = canvas.getContext("2d");
        await page.render({ canvasContext: ctx, viewport }).promise;
        item.busy = false;
        item.canvas = canvas;
        item.ph.replaceWith(canvas);
      } catch (err) {
        item.busy = false;
        item.ph.textContent = "第 " + item.num + " 页渲染失败";
      }
    }

    function reconcile() {
      const frame = document.getElementById("viewerFrame");
      if (!frame) return;
      const fr = frame.getBoundingClientRect();
      let visMin = Infinity, visMax = -Infinity;
      pdfRenderers.forEach(item => {
        const el = item.canvas || item.ph;
        const r = el.getBoundingClientRect();
        if (r.bottom > fr.top && r.top < fr.bottom) {
          visMin = Math.min(visMin, item.num);
          visMax = Math.max(visMax, item.num);
        }
      });
      if (visMin === Infinity) return;
      pdfRenderers.forEach(item => {
        if (item.canvas) {
          // 离开视口 ±3 页就回收画布，释放内存
          if (item.num < visMin - 3 || item.num > visMax + 3) {
            item.canvas.replaceWith(item.ph);
            item.canvas = null;
            item.busy = false;
          }
        } else if (item.num >= visMin - 1 && item.num <= visMax + 1) {
          renderPage(item);
        }
      });
    }

    pdfScrollHandler = reconcile;
    document.getElementById("viewerFrame").addEventListener("scroll", reconcile, { passive: true });
    reconcile();
  } catch (err) {
    console.error("PDF 渲染失败:", err);
    pdfPages.innerHTML = '<div class="pdf-error">预览加载失败，请使用右上角「下载」获取文件。</div>';
  }
}

function closeViewer() {
  viewer.classList.remove("open");
  viewer.setAttribute("aria-hidden", "true");
  if (currentPdfTask) {
    try { currentPdfTask.destroy(); } catch (e) {}
    currentPdfTask = null;
  }
  if (pdfDoc) {
    try { pdfDoc.destroy(); } catch (e) {}
    pdfDoc = null;
  }
  pdfRenderers = [];
  const frame = document.getElementById("viewerFrame");
  if (frame && pdfScrollHandler) {
    frame.removeEventListener("scroll", pdfScrollHandler);
    pdfScrollHandler = null;
  }
  pdfPages.innerHTML = "";
  document.body.style.overflow = "";
  unlockPageZoom();
}

sectionsEl.addEventListener("click", e => {
  const toggle = e.target.closest("[data-toggle]");
  if (toggle) {
    const quarter = toggle.closest(".quarter");
    const body = quarter.querySelector(".quarter-body");
    const expanded = !body.hasAttribute("hidden");
    if (expanded) {
      body.setAttribute("hidden", "");
      toggle.setAttribute("aria-expanded", "false");
      toggle.querySelector(".expand-text").textContent = "展开预览";
    } else {
      body.removeAttribute("hidden");
      toggle.setAttribute("aria-expanded", "true");
      toggle.querySelector(".expand-text").textContent = "收起预览";
    }
    return;
  }
  const t = e.target.closest("[data-view]");
  if (!t) return;
  openViewer(t.dataset.view, t.dataset.name, t.dataset.cat, t.dataset.dl);
});

filterBar.addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  filterBar.querySelectorAll(".chip").forEach(c => c.classList.remove("chip-active"));
  chip.classList.add("chip-active");
  render(chip.dataset.filter);
});

viewer.addEventListener("click", e => {
  if (e.target.closest("[data-close]")) closeViewer();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && viewer.classList.contains("open")) closeViewer();
});
window.RatecardBoard = { render: render };
})();

/* ===== 板块初始化（授权后由门禁调用 window.mergeInit） ===== */
window.mergeInit = function () {
  var t = document.getElementById("pageTitle");
  if (t) t.textContent = "平台营销手册";
  window.RatecardBoard.render("all");
};

/* ===== 统一访问门禁（刊例权限：访问码 + 腾讯文档申请审批） =====
 * codes：访问码列表，可多个（建议一公司一码）。需要改码/加码时告诉我，我会改这里并重新部署。
 * codeDocUrl：访问码文档（腾讯文档）。申请人点「获取访问码」→ 微信登录腾讯文档 → 申请访问权限
 *             （填写公司名）→ 管理员在文档权限管理里审批 → 通过后即可看到文档内的访问码。
 *             管理员可定期在文档里更新访问码，但文档里的码必须与 codes 保持一致（改文档后告诉我同步）。
 * 注意：静态站前端校验仅作访问门槛，并非强安全防护。
 */
const ACCESS_CONFIG = {
  codes: ["TENCENT0666"],
  codeDocUrl: "https://docs.qq.com/doc/DZnF2d2VyVGRzSXBD"
};

const gate = document.getElementById("gate");
const gateCode = document.getElementById("gateCode");
const codeInput = document.getElementById("codeInput");
const codeErr = document.getElementById("codeErr");
const btnGetCode = document.getElementById("btnGetCode");
const btnHaveCode = document.getElementById("btnHaveCode");
const btnVerify = document.getElementById("btnVerify");
const btnLogout = document.getElementById("btnLogout");

/* 授权持久化：localStorage + Cookie 双保险（同浏览器/设备再次访问免输码，有效期 1 年） */
function getCookie(name) {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : "";
}
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 864e5);
  document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + d.toUTCString() + "; path=/";
}
function clearCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}
function grantedCode() { return localStorage.getItem("ratecard_code") || getCookie("ratecard_code") || ""; }
function grantCode(code) { localStorage.setItem("ratecard_code", code); setCookie("ratecard_code", code, 365); }
function revokeCode() { localStorage.removeItem("ratecard_code"); clearCookie("ratecard_code"); }
function isAuthorized() { return ACCESS_CONFIG.codes.indexOf(grantedCode()) > -1; }
function showGate() { gate.hidden = false; }
function hideGate() { gate.hidden = true; }

btnGetCode.addEventListener("click", () => window.open(ACCESS_CONFIG.codeDocUrl, "_blank", "noopener"));
btnHaveCode.addEventListener("click", () => { gateCode.hidden = !gateCode.hidden; codeInput.focus(); });
btnVerify.addEventListener("click", () => {
  const code = codeInput.value.trim();
  if (ACCESS_CONFIG.codes.indexOf(code) > -1) {
    grantCode(code);
    codeErr.hidden = true;
    hideGate();
    btnLogout.hidden = false;
    window.mergeInit && window.mergeInit();
  } else {
    codeErr.hidden = false;
  }
});
codeInput.addEventListener("keydown", e => { if (e.key === "Enter") btnVerify.click(); });

btnLogout.addEventListener("click", e => {
  e.preventDefault();
  revokeCode();
  codeInput.value = "";
  showGate();
  btnLogout.hidden = true;
});

if (isAuthorized()) {
  hideGate();
  btnLogout.hidden = false;
  window.mergeInit && window.mergeInit();
} else {
  showGate();
}

