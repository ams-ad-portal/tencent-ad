/* ============================================================
 * 腾讯广告常见形式（独立站）
 * 权限：统一门禁（访问码 + 腾讯文档申请审批）
 * ============================================================ */

/* ===== 数据结构说明（新增形式时按此格式补充即可） =====
 * AD_FORMATS = [
 *   {
 *     category: "腾讯视频合约",     // 页卡名称（顺序即页卡顺序）
 *     key: "txv-contract",          // 英文 key（用于 DOM/文件目录，保持 ASCII）
 *     groups: [                     // 可选：分组（如按位置/产品分组），无需分组时用一个组即可
 *       {
 *         label: "开屏与前贴",       // 分组名；只有一个组且不想显示分组标题时设为 ""
 *         items: [
 *           {
 *             name: "闪屏广告",                       // 形式名称（必填）
 *             position: "APP 冷启动首屏，全屏展示",     // 具体位置（必填）
 *             spec: "3s / 5s，竖版 1080×1920",        // 规格/时长等补充（可选，显示在位置下方）
 *             desc: "用户打开 APP 第一眼触达…",        // 简介（可选，展开后显示）
 *             doc: "docs/txv-contract/shanping.pdf",  // 介绍文档 PDF（可选）
 *             docLabel: "腾讯视频闪屏广告介绍.pdf",     // 文档展示/下载名（可选）
 *             docUrl: "",                              // 外部文档链接（可选，与 doc 二选一）
 *             video: "videos/txv-contract/shanping.mp4", // Demo 视频（可选）
 *             videoLabel: "闪屏广告 Demo.mp4",          // 视频展示/下载名（可选）
 *             videoUrl: ""                              // 外部视频链接（可选，与 video 二选一）
 *           }
 *         ]
 *       }
 *     ]
 *   }
 * ]
 * 说明：doc/video 为站内文件（放 docs/、videos/ 目录）；docUrl/videoUrl 为外链（新窗口打开）。
 *      两者都为空时，按钮显示为「待补充」灰态。
 */
const AD_FORMATS = [
  {
    category: "腾讯视频合约",
    key: "txv-contract",
    groups: [
      {
        label: "",
        items: [
          {
            name: "8秒合约标版",
            position: "电视剧片内",
            demoDesc: "飘柔洗发露",
            video: "videos/txv-contract/8s-heyuebiaoban-piaorou.mp4",
            videoLabel: "8秒合约标版-飘柔洗发露.mp4"
          },
          {
            name: "TV Max",
            position: "腾讯视频OTT端闪屏破框",
            demoDesc: "Lancome粉底",
            docUrl: "docs/txv-contract/ott-tvmax-intro.pptx",
            video: "videos/txv-contract/tv-max-lancome-wuyifan.mp4",
            videoLabel: "腾讯视频OTT-TV Max-Lancome 吴亦凡.mp4"
          },
          {
            name: "OTT Oneshot Plus",
            position: "腾讯视频OTT端闪屏+焦点图",
            demoDesc: "Tiffany",
            doc: "docs/txv-contract/oneshot-plus-intro-oct.pdf",
            docLabel: "OneshotPlus-自定义版 联动出框广告-产品手册-10月.pdf",
            video: "videos/txv-contract/ott-oneshot-plus-tiffany.mp4",
            videoLabel: "腾讯视频OTT-ONESHOT plus-Tiffany.mp4"
          },
          {
            name: "全屏暂停",
            position: "腾讯视频多端视频播放页",
            demoDesc: "美团",
            doc: "docs/txv-contract/fullscreen-pause-intro.pdf",
            docLabel: "腾讯视频-全屏暂停-产品介绍.pdf",
            video: "videos/txv-contract/fullscreen-pause-meituan.mp4",
            videoLabel: "腾讯视频-全屏暂停-美团.mp4"
          },
          {
            name: "Maxview",
            position: "腾讯视频-移动端视频播放页",
            demoDesc: "阿玛尼香水",
            doc: "docs/txv-contract/maxview-intro.pdf",
            docLabel: "Maxview 介绍横版.pdf",
            video: "videos/txv-contract/maxview-armani.mp4",
            videoLabel: "腾讯视频APP-Maxivew-阿玛尼.mp4"
          }
        ]
      }
    ]
  },
  {
    category: "腾讯视频招商",
    key: "txv-sponsor",
    groups: [
      {
        label: "",
        items: [
          {
            name: "8秒片中标板",
            demoDesc: "《九重紫》康师傅面",
            position: "电视剧片中",
            video: "videos/txv-sponsor/8s-pianzhongbiaoban-jiuchongzi-kangshifu.mp4",
            videoLabel: "8秒片中标版《九重紫》-康师傅面.mp4"
          },
          {
            name: "5秒片头标版",
            position: "电视剧片头",
            demoDesc: "奥利奥/优酸乳",
            video: "videos/txv-sponsor/5s-piantou-biaoban-aoliao-yousuanru.mp4",
            videoLabel: "5秒片头标版-奥利奥优酸乳.mp4"
          },
          {
            name: "如意贴",
            position: "电视剧片内",
            demoDesc: "《柳州记》复方阿胶",
            video: "videos/txv-sponsor/liuzhouji-ruyitie-fufangejiao.mp4",
            videoLabel: "《柳州记》如意贴-复方阿胶.mp4"
          }
        ]
      }
    ]
  },
  {
    category: "TME",
    key: "tme",
    groups: [
      {
        label: "",
        items: [
          {
            name: "Oneshot移动端",
            position: "TME移动端闪屏+焦点图",
            demoDesc: "Chanel唇膏",
            video: "videos/tme/tme-oneshot-mobile-chanel.mp4",
            videoLabel: "TME-Oneshot移动端-Chanel.mp4"
          }
        ]
      }
    ]
  },
  {
    category: "朋友圈",
    key: "moments",
    groups: [
      {
        label: "",
        items: [
          {
            name: "朋友圈轮播卡片",
            position: "朋友圈广告",
            demoDesc: "荣耀",
            video: "videos/moments/moments-lunbo-kapian-honor.mp4",
            videoLabel: "朋友圈轮播卡片-荣耀.mp4"
          }
        ]
      }
    ]
  }
];
window.AD_FORMATS = AD_FORMATS;

/* ===== 渲染 ===== */
window.AdFormatBoard = (function () {
  const tabsEl = document.getElementById("afTabs");
  const listEl = document.getElementById("afList");
  const searchEl = document.getElementById("afSearch");
  const searchClearEl = document.getElementById("afSearchClear");
  let current = AD_FORMATS.length ? AD_FORMATS[0].category : "";

  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function countOf(cat) {
    return (cat.groups || []).reduce((n, g) => n + (g.items || []).length, 0);
  }

  function renderTabs() {
    tabsEl.innerHTML = AD_FORMATS.map(cat => {
      const n = countOf(cat);
      return '<button class="chip af-tab' + (cat.category === current ? " chip-active" : "") + '" type="button" data-cat="'
        + esc(cat.category) + '">' + esc(cat.category)
        + '<span class="af-tab-n">' + n + '</span></button>';
    }).join("");
  }

  /* 单个形式 = 一行（可点击展开详情） */
  function itemHTML(it) {
    const docBtn = it.doc
      ? '<button class="btn-af btn-af-doc" type="button" data-doc="' + esc(it.doc) + '" data-label="' + esc(it.docLabel || "") + '" data-name="' + esc(it.name) + '">📄 介绍文档</button>'
      : (it.docUrl
        ? '<button class="btn-af btn-af-doc" type="button" data-doc="' + esc(it.docUrl) + '" data-label="' + esc(it.docLabel || "") + '" data-name="' + esc(it.name) + '">📄 介绍文档</button>'
        : '<button class="btn-af btn-af-off" type="button" disabled>文档待补充</button>');
    const videoBtn = it.video
      ? '<button class="btn-af btn-af-video" type="button" data-video="' + esc(it.video) + '" data-label="' + esc(it.videoLabel || "") + '" data-name="' + esc(it.name) + '">▶ Demo 视频</button>'
      : (it.videoUrl
        ? '<a class="btn-af btn-af-video" href="' + esc(it.videoUrl) + '" target="_blank" rel="noopener">▶ Demo 视频</a>'
        : '<button class="btn-af btn-af-off" type="button" disabled>Demo 待补充</button>');
    const demoNote = '<div class="af-demo-note">' + esc(it.demoDesc || "—") + '</div>';
    const hasDetail = !!(it.desc || it.spec);
    return ''
      + '<div class="af-item">'
      + '  <div class="af-row' + (hasDetail ? " af-row-clickable" : "") + '">'
      + '    <div class="af-cell af-cell-name">'
      + (hasDetail ? '<span class="af-caret" aria-hidden="true">▸</span>' : '<span class="af-caret af-caret-none" aria-hidden="true"></span>')
      + '      <b>' + esc(it.name) + '</b>'
      + '    </div>'
      + '    <div class="af-cell af-cell-pos">' + esc(it.position || "—") + (it.spec ? '<span class="af-spec">' + esc(it.spec) + "</span>" : "") + '</div>'
      + '    <div class="af-cell af-cell-btns"><div class="af-btn-col af-btn-col-doc">' + docBtn + '</div><div class="af-btn-col af-btn-col-video">' + videoBtn + demoNote + '</div></div>'
      + '    <div class="af-cell af-cell-demo">' + esc(it.demoDesc || "—") + '</div>'
      + '  </div>'
      + (hasDetail
        ? '  <div class="af-detail" hidden><div class="af-detail-inner">'
          + (it.desc ? '<p class="af-desc">' + esc(it.desc) + "</p>" : "")
          + '</div></div>'
        : "")
      + '</div>';
  }

  function render(cat) {
    if (cat) current = cat;
    renderTabs();
    const catObj = AD_FORMATS.find(c => c.category === current);
    const kw = (searchEl ? searchEl.value.trim().toLowerCase() : "");
    searchClearEl.hidden = !kw;

    if (!catObj) { listEl.innerHTML = ""; return; }

    const groups = (catObj.groups || []).map(g => {
      const items = (g.items || []).filter(it => !kw
        || String(it.name || "").toLowerCase().includes(kw)
        || String(it.position || "").toLowerCase().includes(kw)
        || String(it.spec || "").toLowerCase().includes(kw)
        || String(it.desc || "").toLowerCase().includes(kw)
        || String(it.demoDesc || "").toLowerCase().includes(kw));
      return { label: g.label, items };
    }).filter(g => g.items.length);

    const total = groups.reduce((n, g) => n + g.items.length, 0);

    if (!total) {
      listEl.innerHTML = '<div class="af-empty">'
        + '<div class="af-empty-icon">🧩</div>'
        + '<p>' + (kw ? "没有匹配「" + esc(searchEl.value.trim()) + "」的投放形式" : esc(current) + " 的投放形式待补充")
        + "</p><span>" + (kw ? "换个关键词试试，或清空搜索查看全部。" : "把形式名称、具体位置、介绍文档、Demo 视频发给我，我会按资源整理进来。") + "</span>"
        + "</div>";
      return;
    }

    listEl.innerHTML = groups.map(g => ''
      + '<section class="af-group">'
      + (g.label ? '<h2 class="af-group-title">' + esc(g.label) + '<span class="af-group-n">' + g.items.length + " 个形式</span></h2>" : "")
      + '  <div class="af-table">'
      + '    <div class="af-row af-row-head">'
      + '      <div class="af-cell af-cell-name">投放形式</div>'
      + '      <div class="af-cell af-cell-pos">具体位置</div>'
      + '      <div class="af-cell af-cell-btns">介绍文档 / Demo</div>'
      + '      <div class="af-cell af-cell-demo">Demo描述</div>'
      + '    </div>'
      + g.items.map(itemHTML).join("")
      + '  </div>'
      + '</section>').join("");
  }

  /* 页卡切换 */
  tabsEl.addEventListener("click", e => {
    const btn = e.target.closest(".af-tab");
    if (!btn) return;
    render(btn.dataset.cat);
  });

  /* 展开/收起详情 */
  listEl.addEventListener("click", e => {
    if (e.target.closest(".btn-af")) return; // 点按钮不触发展开
    const row = e.target.closest(".af-row-clickable");
    if (!row) return;
    const detail = row.nextElementSibling;
    if (detail && detail.classList.contains("af-detail")) {
      const open = !detail.hidden;
      detail.hidden = open;
      row.classList.toggle("af-row-open", !open);
    }
  });

  /* 搜索 */
  if (searchEl) {
    searchEl.addEventListener("input", () => render());
    searchClearEl.addEventListener("click", () => { searchEl.value = ""; render(); searchEl.focus(); });
  }

  return { render: render };
})();

/* ===== 介绍文档预览（PDF.js 懒加载渲染） ===== */
(function () {
  const viewer = document.getElementById("docViewer");
  const nameEl = document.getElementById("docName");
  const pagesEl = document.getElementById("docPages");
  const dlEl = document.getElementById("docDownload");
  let pdfDoc = null, io = null;

  function reset() {
    if (io) { io.disconnect(); io = null; }
    pagesEl.innerHTML = "";
    pdfDoc = null;
  }

  async function open(url, name, label) {
    if (typeof pdfjsLib === "undefined") { window.open(url, "_blank", "noopener"); return; }
    pdfjsLib.GlobalWorkerOptions.workerSrc = "assets/vendor/pdf.worker.min.js";
    reset();
    nameEl.textContent = label || name || "介绍文档";
    dlEl.href = url;
    dlEl.setAttribute("download", label || "");
    viewer.classList.add("open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    pagesEl.innerHTML = '<div class="pdf-loading">正在加载文档…</div>';
    try {
      pdfDoc = await pdfjsLib.getDocument(url).promise;
      pagesEl.innerHTML = "";
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      for (let i = 1; i <= pdfDoc.numPages; i++) {
        const cv = document.createElement("canvas");
        cv.className = "pdf-page";
        cv.dataset.page = String(i);
        pagesEl.appendChild(cv);
      }
      io = new IntersectionObserver(async entries => {
        for (const en of entries) {
          const cv = en.target;
          if (en.isIntersecting && !cv.dataset.rendered) {
            cv.dataset.rendered = "1";
            const page = await pdfDoc.getPage(+cv.dataset.page);
            const base = page.getViewport({ scale: 1 });
            const w = pagesEl.clientWidth - 24;
            const scale = Math.min(6, Math.max(1.6, (w * dpr) / base.width));
            const vp = page.getViewport({ scale: scale });
            cv.width = vp.width; cv.height = vp.height;
            cv.style.width = "100%";
            await page.render({ canvasContext: cv.getContext("2d"), viewport: vp }).promise;
          }
        }
      }, { root: pagesEl, rootMargin: "800px 0px" });
      pagesEl.querySelectorAll(".pdf-page").forEach(cv => io.observe(cv));
    } catch (err) {
      pagesEl.innerHTML = '<div class="pdf-error">文档加载失败，可点右上角「下载」后本地查看。</div>';
    }
  }

  function close() {
    viewer.classList.remove("open");
    viewer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    reset();
  }

  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-doc]");
    if (btn) {
      e.preventDefault();
      open(btn.dataset.doc, btn.dataset.name, btn.dataset.label);
      return;
    }
    if (e.target.closest("[data-doc-close]")) close();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && viewer.classList.contains("open")) close();
  });
})();

/* ===== Demo 视频播放浮层 ===== */
(function () {
  const viewer = document.getElementById("videoViewer");
  const nameEl = document.getElementById("videoName");
  const stageEl = document.getElementById("videoStage");
  const dlEl = document.getElementById("videoDownload");

  function open(url, name, label) {
    nameEl.textContent = label || name || "Demo 视频";
    dlEl.href = url;
    dlEl.setAttribute("download", label || "");
    stageEl.innerHTML = '<video class="af-video" src="' + url + '" controls autoplay playsinline preload="metadata"></video>';
    viewer.classList.add("open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    const v = stageEl.querySelector("video");
    if (v) { try { v.pause(); } catch (e) {} }
    stageEl.innerHTML = "";
    viewer.classList.remove("open");
    viewer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-video]");
    if (btn) {
      e.preventDefault();
      open(btn.dataset.video, btn.dataset.name, btn.dataset.label);
      return;
    }
    if (e.target.closest("[data-video-close]")) close();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && viewer.classList.contains("open")) close();
  });
})();

/* ===== 板块初始化（授权后由门禁调用） ===== */
window.mergeInit = function () {
  window.AdFormatBoard.render();
};

/* ===== 统一访问门禁（与其他内容站一致：访问码 + 腾讯文档申请审批） ===== */
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
function grantedCode() { return localStorage.getItem("adformat_code") || getCookie("adformat_code") || ""; }
function grantCode(code) { localStorage.setItem("adformat_code", code); setCookie("adformat_code", code, 365); }
function revokeCode() { localStorage.removeItem("adformat_code"); clearCookie("adformat_code"); }
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
