/* ============================================================
   站内智能助手（本地知识库版，无需后端 / 无外部请求）
   适配：腾讯广告常见形式站（AD_FORMATS）
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. 数据源探测 ---------- */
  function probe(name) {
    const v = window[name];
    return Array.isArray(v) && v.length ? v : null;
  }
  function getFormats() {
    const v = probe("AD_FORMATS");
    if (!v) return null;
    // 拍平成 { category, key, item } 列表，方便搜索
    const flat = [];
    v.forEach(cat => (cat.groups || []).forEach(g => (g.items || []).forEach(it => {
      flat.push({ category: cat.category, key: cat.key, group: g.label || "", item: it });
    })));
    return flat;
  }

  let DATA = null, SITE = "投放形式";
  function resolveData() {
    DATA = getFormats();
    return !!DATA;
  }

  /* ---------- 2. 工具函数 ---------- */
  const norm = s => String(s || "").toLowerCase().replace(/[\s·、,，。.!！?？:：;；"'“”‘’()（）《》【】\-_/]/g, "");
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function itemLine(rec) {
    const it = rec.item;
    const bits = [rec.category, rec.group, it.position].filter(Boolean);
    const tail = (it.doc || it.docUrl ? "📄文档" : "") + (it.video || it.videoUrl ? " ▶Demo" : "");
    return "· <b>" + esc(it.name) + "</b>（" + esc(bits.join(" | ")) + "）" + (tail ? "  " + tail : "");
  }
  function listReply(title, arr, limit) {
    limit = limit || 15;
    if (!arr.length) return null;
    const shown = arr.slice(0, limit).map(itemLine).join("<br>");
    const more = arr.length > limit ? "<br>…… 共 " + arr.length + " 个形式，可在页面内按资源切换查看全部。" : "";
    return "<b>" + esc(title) + "</b>（" + arr.length + " 个）<br>" + shown + more;
  }

  /* ---------- 3. 知识库：站内固定问答 ---------- */
  function buildFAQ() {
    return [
      {
        k: ["访问码", "密码", "怎么进", "进不去", "登录", "验证码", "权限", "申请访问"],
        a: "本站需访问码进入：点击门禁页的「获取访问码」→ 用微信/企业微信登录腾讯文档申请访问（请填写公司名称）→ 管理员审批通过后即可在文档中看到访问码。首次进入需输入一次，之后浏览器会记住。"
      },
      {
        k: ["文档", "介绍文档", "说明", "资料", "pdf", "介绍"],
        a: "每个投放形式右侧有「📄 介绍文档」按钮：站内文档会在网页内直接翻阅 PDF（高清渲染，无需下载）；外链文档则在新窗口打开。文档暂未补充的会显示灰态「文档待补充」。"
      },
      {
        k: ["demo", "视频", "怎么看", "示例", "样片", "播放"],
        a: "每个投放形式右侧有「▶ Demo 视频」按钮：点开后会在网页内播放站内 mp4 视频，方便直观了解形式样式与玩法。视频暂未补充的显示灰态「Demo 待补充」。"
      },
      {
        k: ["首页", "门户", "其他页面", "别的站", "回到首页", "导航", "入口"],
        a: "点击页面<b>左上角「← 返回首页」</b>即可回到门户页，门户页有四个入口：📺 腾讯大剧、🎬 腾讯综艺、📄 腾讯刊例、🧩 腾讯广告常见形式。"
      },
      {
        k: ["搜索", "怎么搜", "查找", "找不到", "关键词"],
        a: "用页面上方的搜索框（蓝色放大镜处），支持按<b>形式名称</b>、<b>具体位置</b>、<b>规格</b>或<b>介绍</b>关键词搜索，输入即时过滤当前资源下的形式；也可点顶部资源页卡切换腾讯视频合约 / 招商 / TME / 朋友圈。"
      },
      {
        k: ["资源", "平台", "分类", "腾讯视频", "tme", "朋友圈", "招商", "合约"],
        a: "形式按四个资源分页卡组织：<b>腾讯视频合约</b>、<b>腾讯视频招商</b>、<b>TME</b>（音乐）、<b>朋友圈</b>。点顶部页卡即可切换，页卡上的数字表示该类下已收录的形式数量。"
      },
      {
        k: ["更新", "多久更新", "最新", "什么时候更新", "新增"],
        a: "内容由业务同学不定期更新（新形式、介绍文档、Demo 会随时补充）。页面数据以腾讯官方发布为准，如需确认最终信息请联系对接人员。"
      },
      {
        k: ["手机", "移动端", "手机看", "适配", "平板"],
        a: "支持手机访问，布局会自动适配；Demo 视频与文档预览在手机上也能正常播放/翻阅，如需仔细看建议下载后用对应阅读器打开。"
      },
      {
        k: ["能问什么", "帮助", "你能做什么", "怎么用你", "使用说明", "功能"],
        a: null
      }
    ];
  }

  /* ---------- 4. 投放形式问答逻辑 ---------- */
  function answerFormats(qRaw) {
    const q = norm(qRaw);

    // 4.1 按形式名称匹配 → 详情
    const hitByName = DATA.filter(r => norm(r.item.name) && q.includes(norm(r.item.name)));
    if (hitByName.length) {
      return hitByName.slice(0, 4).map(r => {
        const it = r.item;
        const rows = [
          ["所属资源", r.category + (r.group ? " · " + r.group : "")],
          ["具体位置", it.position],
          ["规格", it.spec],
          ["介绍", it.desc],
          ["介绍文档", it.doc || it.docUrl ? "有（右侧「📄 介绍文档」可查看）" : "待补充"],
          ["Demo 视频", it.video || it.videoUrl ? "有（右侧「▶ Demo 视频」可播放）" : "待补充"]
        ].filter(rr => rr[1]).map(rr => "· " + rr[0] + "：" + esc(rr[1])).join("<br>");
        return "<b>" + esc(it.name) + "</b><br>" + rows;
      }).join("<hr class='ai-hr'>");
    }

    // 4.2 资源页卡匹配
    const cats = window.AD_FORMATS || [];
    const catHit = cats.filter(c => q.includes(norm(c.category))
      || (c.category === "腾讯视频合约" && /(合约|硬广|前贴|开屏)/.test(qRaw))
      || (c.category === "腾讯视频招商" && /(招商|冠名|特约|植入)/.test(qRaw))
      || (c.category === "TME" && /(音乐|qq音乐|酷狗|酷我|tme|全民k歌|听歌)/i.test(qRaw))
      || (c.category === "朋友圈" && /(朋友圈|微信|社交)/.test(qRaw)));
    if (catHit.length) {
      return catHit.slice(0, 2).map(c => {
        const items = (c.groups || []).flatMap(g => g.items || []);
        const withDoc = items.filter(it => it.doc || it.docUrl).length;
        const withVideo = items.filter(it => it.video || it.videoUrl).length;
        const sample = items.slice(0, 6).map(it => "· " + esc(it.name)).join("<br>");
        return "<b>" + esc(c.category) + "</b> 共 " + items.length + " 个形式：<br>"
          + "· 已有介绍文档 " + withDoc + " 个 · Demo 视频 " + withVideo + " 个"
          + (sample ? "<br><br>包含：<br>" + sample : "")
          + "<br><br>点顶部「" + esc(c.category) + "」页卡即可查看全部。";
      }).join("<hr class='ai-hr'>");
    }

    // 4.3 按位置/规格/介绍关键词搜
    const kwHits = DATA.filter(r => {
      const it = r.item;
      return norm(it.position).includes(q) || norm(it.spec).includes(q) || norm(it.desc).includes(q);
    });
    if (kwHits.length && qRaw.replace(/[的了吗呢有哪些什么怎么在哪]/g, "").length >= 2) {
      return listReply("包含「" + esc(qRaw.replace(/[的了吗呢]/g, "")) + "」的形式", kwHits);
    }

    // 4.4 概览
    if (/(多少|几个|总共|一共|数量|统计|概览|列表|全部|都有哪些|有什么|资源)/.test(qRaw)) {
      const lines = cats.map(c => {
        const n = (c.groups || []).reduce((s, g) => s + (g.items || []).length, 0);
        return "· <b>" + esc(c.category) + "</b>：" + n + " 个形式";
      }).join("<br>");
      const total = cats.reduce((s, c) => s + (c.groups || []).reduce((x, g) => x + (g.items || []).length, 0), 0);
      return "本站共 <b>" + total + "</b> 个投放形式，覆盖 " + cats.length + " 个资源：<br>" + lines
        + "<br><br>点顶部页卡可分别查看，或直接在上方搜索框按名称/位置搜索。";
    }

    return null;
  }

  /* ---------- 5. FAQ 与兜底 ---------- */
  function helpText() {
    return "你好 👋 我是站内小助手，可以帮你查腾讯广告常见投放形式，试着这样问我：<br>"
      + "· <b>闪屏广告</b>（直接问形式名看详情）<br>"
      + "· <b>朋友圈有哪些形式</b> / <b>TME 有什么</b><br>"
      + "· <b>腾讯视频招商包含哪些</b><br>"
      + "· <b>前贴片有什么形式</b>（按位置搜）<br>"
      + "· <b>一共有多少个形式</b><br>"
      + "· <b>怎么看 Demo 视频</b> / <b>访问码怎么拿</b>";
  }
  function answerFAQ(qRaw) {
    const q = norm(qRaw);
    for (const f of buildFAQ()) {
      if (f.k.some(k => q.includes(norm(k)))) return f.a === null ? helpText() : f.a;
    }
    return null;
  }
  function reply(qRaw) {
    if (!DATA) resolveData();
    const t = String(qRaw || "").trim();
    if (!t) return "你想了解什么？可以直接问我<b>形式名称</b>、<b>所属资源</b>或<b>具体位置</b>。";
    if (/^(你好|您好|hi|hello|嗨|在吗|哈喽)/i.test(t)) return helpText();
    if (/(谢谢|感谢|thanks|thx|好的|收到)/i.test(t)) return "不客气，还有想查的随时问我 🙂";
    let a = answerFormats(t);
    if (!a) a = answerFAQ(t);
    if (a) return a;
    return "这个问题我暂时没有对应的资料 🤔<br><br>" + helpText();
  }

  /* ---------- 6. UI 注入 ---------- */
  window.__aiReply = reply;
  function buildHTML() {
    return ''
      + '<button class="ai-fab" id="aiFab" type="button" aria-label="打开小助理">'
      + '<svg class="ai-face" viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">'
      + '<circle cx="9" cy="9.5" r="1.5" fill="#fff"/><circle cx="15" cy="9.5" r="1.5" fill="#fff"/>'
      + '<path d="M7.5 14.6c1.6 2 7.4 2 9 0" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>'
      + '</button>'
      + '<div class="ai-fab-label">小助理</div>'
      + '<div class="ai-panel" id="aiPanel" hidden>'
      + '  <div class="ai-head">'
      + '    <div class="ai-head-l"><span class="ai-dot"></span><b>站内小助手</b><span class="ai-sub">' + esc(SITE) + '信息问答</span></div>'
      + '    <button class="ai-x" id="aiClose" type="button" aria-label="关闭">×</button>'
      + '  </div>'
      + '  <div class="ai-body" id="aiBody"></div>'
      + '  <div class="ai-quick" id="aiQuick"></div>'
      + '  <form class="ai-input" id="aiForm">'
      + '    <input type="text" id="aiText" placeholder="输入你的问题，回车发送…" autocomplete="off" />'
      + '    <button type="submit" aria-label="发送"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.996.996 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91Z"/></svg></button>'
      + '  </form>'
      + '</div>';
  }
  function buildQuicks() {
    return ["能问什么？", "一共有多少个形式", "朋友圈有哪些形式", "怎么看 Demo 视频", "访问码怎么拿"];
  }

  function mount() {
    if (document.getElementById("aiFab")) return;
    if (!resolveData()) return;
    const wrap = document.createElement("div");
    wrap.className = "ai-root";
    wrap.innerHTML = buildHTML();
    document.body.appendChild(wrap);

    const fab = document.getElementById("aiFab");
    const panel = document.getElementById("aiPanel");
    const body = document.getElementById("aiBody");
    const form = document.getElementById("aiForm");
    const text = document.getElementById("aiText");
    const quick = document.getElementById("aiQuick");

    function bubble(who, html) {
      const d = document.createElement("div");
      d.className = "ai-msg ai-" + who;
      d.innerHTML = '<div class="ai-bub">' + html + "</div>";
      body.appendChild(d);
      body.scrollTop = body.scrollHeight;
      return d;
    }
    function ask(q) {
      bubble("me", esc(q));
      const t = bubble("bot", '<span class="ai-typing"><i></i><i></i><i></i></span>');
      setTimeout(() => {
        t.querySelector(".ai-bub").innerHTML = reply(q);
        body.scrollTop = body.scrollHeight;
      }, 260 + Math.random() * 220);
    }
    buildQuicks().forEach(q => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "ai-chip"; b.textContent = q;
      b.addEventListener("click", () => ask(q));
      quick.appendChild(b);
    });

    let opened = false;
    function open() {
      panel.hidden = false;
      fab.classList.add("ai-fab-on");
      if (!opened) { opened = true; bubble("bot", helpText()); }
      setTimeout(() => text.focus(), 80);
    }
    function close() {
      panel.hidden = true;
      fab.classList.remove("ai-fab-on");
    }
    fab.addEventListener("click", () => (panel.hidden ? open() : close()));
    document.getElementById("aiClose").addEventListener("click", close);
    form.addEventListener("submit", e => {
      e.preventDefault();
      const v = text.value.trim();
      if (!v) return;
      text.value = "";
      ask(v);
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !panel.hidden) close(); });
  }

  function tryMount(left) {
    if (document.getElementById("aiFab")) return;
    mount();
    if (!document.getElementById("aiFab") && left > 0) setTimeout(() => tryMount(left - 1), 200);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => tryMount(25));
  else tryMount(25);
})();
