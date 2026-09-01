/* ============================================================
   站内智能助手（本地知识库版，无需后端 / 无外部请求）
   自动适配：时间轴站（VARIETY_ITEMS / TV_ITEMS）与刊例站（RATECARD_STRUCTURE）
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. 数据源探测 ----------
     主站 app.js 末尾会 window.X = X 暴露数据（顶层 const 不会自动挂 window）。 */
  function probe(name) {
    const v = window[name];
    return Array.isArray(v) && v.length ? v : null;
  }

  function getTimelineItems() {
    const v = probe("VARIETY_ITEMS");
    if (v) return { items: v, kind: "variety", noun: "综艺" };
    const t = probe("TV_ITEMS");
    if (t) return { items: t, kind: "tv", noun: "电视剧" };
    return null;
  }
  function getRatecard() {
    return probe("RATECARD_STRUCTURE");
  }

  // 延迟到 mount 时才确定数据源（避免与主脚本的执行时序冲突）
  let TL = null, RC = null, SITE = "内容";
  function resolveData() {
    TL = getTimelineItems();
    RC = getRatecard();
    SITE = TL ? TL.noun : "刊例";
    return !!(TL || RC);
  }

  /* ---------- 2. 工具函数 ---------- */
  const norm = s => String(s || "").toLowerCase().replace(/[\s·、,，。.!！?？:：;；"'“”‘’()（）《》【】\-_/]/g, "");
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- 2.1 反馈 / 纠错收集（可选） ----------
     把访客对助手回答的反馈发到你可读的地方。
     - 留空 ""：纠错内容改为「复制到剪贴板」，访客可微信转发给你，无需任何后端。
     - 填 Formspree 等表单地址：提交即发你邮箱、可看表格（免费、不用服务器）。 */
  const FEEDBACK_ENDPOINT = ""; // ← 如需自动收集，把表单地址填这里，例如 "https://formspree.io/f/abcdwxyz"

  function stripTags(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html || "";
    return (tmp.textContent || "").replace(/\s+/g, " ").trim();
  }

  function sendFeedback(payload) {
    const text =
      "【小助手纠错】\n页面：" + (payload.page || "") +
      "\n站点：" + (payload.site || "") +
      "\n问题：" + (payload.question || "") +
      "\n小助手回答：" + (payload.answer || "") +
      "\n纠正/补充：" + (payload.correction || "（未填写，仅标记为回答可能有误）") +
      "\n时间：" + (payload.time || "");
    function copyFallback() {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text);
        } else {
          const ta = document.createElement("textarea");
          ta.value = text; document.body.appendChild(ta); ta.select();
          document.execCommand("copy"); document.body.removeChild(ta);
        }
        return true;
      } catch (e) { return false; }
    }
    if (FEEDBACK_ENDPOINT) {
      try {
        fetch(FEEDBACK_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload)
        }).catch(() => copyFallback());
      } catch (e) { copyFallback(); }
    } else {
      copyFallback();
    }
    return text;
  }

  /* 给每条机器人回答挂一个 👍/👎 + 纠错 条 */
  function attachFeedback(msgEl, q, ansHtml) {
    if (!msgEl || msgEl.querySelector(".ai-fb")) return;
    const fb = document.createElement("div");
    fb.className = "ai-fb";
    fb.innerHTML =
      '<span class="ai-fb-tip">这个回答有帮助吗？</span>' +
      '<button class="ai-fb-yes" type="button">👍 有用</button>' +
      '<button class="ai-fb-no" type="button">👎 有误</button>' +
      '<button class="ai-fb-fix" type="button">纠错</button>' +
      '<div class="ai-fb-box" hidden>' +
        '<textarea class="ai-fb-ta" rows="3" placeholder="请告诉我们正确答案或补充信息（可留空，仅标记回答有误）"></textarea>' +
        '<button class="ai-fb-send" type="button">提交</button>' +
      '</div>' +
      '<span class="ai-fb-ok" hidden></span>';
    msgEl.appendChild(fb);

    const box = fb.querySelector(".ai-fb-box");
    const ta = fb.querySelector(".ai-fb-ta");
    const ok = fb.querySelector(".ai-fb-ok");
    const yes = fb.querySelector(".ai-fb-yes");
    const no = fb.querySelector(".ai-fb-no");
    const fix = fb.querySelector(".ai-fb-fix");
    const send = fb.querySelector(".ai-fb-send");
    let sent = false;

    function done(msg) { ok.textContent = msg; ok.hidden = false; }
    function reveal() { box.hidden = false; ta.focus(); }

    yes.addEventListener("click", () => {
      yes.disabled = no.disabled = fix.disabled = true;
      done("感谢反馈！");
    });
    no.addEventListener("click", () => {
      reveal();
      if (!sent) {
        sent = true;
        sendFeedback({ question: q, answer: stripTags(ansHtml), correction: "", page: location.href, site: SITE, time: new Date().toISOString() });
        done("已记录：这条回答可能有误");
      }
    });
    fix.addEventListener("click", reveal);
    send.addEventListener("click", () => {
      if (sent) { done("已收到，感谢纠正！"); box.hidden = true; return; }
      sent = true;
      sendFeedback({ question: q, answer: stripTags(ansHtml), correction: ta.value.trim(), page: location.href, site: SITE, time: new Date().toISOString() });
      done(FEEDBACK_ENDPOINT ? "已提交，感谢纠正！" : "已复制到剪贴板，请发给管理员纠正");
      box.hidden = true;
    });
  }

  function quarterOf(sortKey) {
    const m = /^(\d{4})-(\d{2})/.exec(sortKey || "");
    if (!m) return "";
    const y = m[1].slice(2), mo = parseInt(m[2], 10);
    return y + "年Q" + (mo <= 3 ? 1 : mo <= 6 ? 2 : mo <= 9 ? 3 : 4);
  }

  // 级别归一：超级S+/高阶S+/热门S+ → S+
  function levelOf(tag) {
    const t = String(tag || "");
    if (/S\+/.test(t)) return "S+";
    if (t === "S") return "S";
    return t || "—";
  }

  function itemLine(it) {
    const q = quarterOf(it.sortKey);
    const cats = (it.cats && it.cats.length) ? it.cats.join("/") + "·" : "";
    const bits = [it.dateText || q, it.tag, cats + (it.type || "")].filter(Boolean);
    return "· <b>" + esc(it.name) + "</b>（" + esc(bits.join(" | ")) + "）";
  }

  function listReply(title, arr, limit) {
    limit = limit || 12;
    if (!arr.length) return null;
    const shown = arr.slice(0, limit).map(itemLine).join("<br>");
    const more = arr.length > limit ? "<br>…… 共 " + arr.length + " 部，可用左上筛选器查看全部。" : "";
    return "<b>" + esc(title) + "</b>（共 " + arr.length + " 部）<br>" + shown + more;
  }

  /* ---------- 3. 知识库：站内固定问答 ---------- */
  function buildFAQ() {
    return [
    {
      k: ["访问码", "密码", "怎么进", "进不去", "登录", "验证码", "权限", "申请访问"],
      a: "本站需访问码进入：点击门禁页的「获取访问码」→ 用微信/企业微信登录腾讯文档申请访问（请填写公司名称）→ 管理员审批通过后即可在文档中看到访问码。每个站首次进入需输入一次，之后浏览器会记住。"
    },
    {
      k: ["下载", "怎么下", "保存", "拿到文件", "整包", "打包"],
      a: RC
        ? "刊例下载有两种方式：① 单份下载——展开季度后，在表格里点该行的「下载」；② 整包下载——每个季度上方有「下载整包」按钮，页面顶部还有「整包下载」可一次拿到全部刊例。"
        : "展开任意" + SITE + "详情后，方案区有「方案下载」按钮可直接下载 PDF；如有结案数据，还会有「结案下载」。"
    },
    {
      k: ["预览", "在线看", "在线查看", "怎么看方案", "打开方案", "看不了"],
      a: RC
        ? "展开季度后，点表格里的「在线查看」即可在网页内直接翻阅 PDF（高清渲染，无需下载）。弹层左上角有「返回」，右上角可「下载」。"
        : "展开" + SITE + "详情后，<b>直接点击海报</b>就会打开方案预览（网页内高清翻阅 PDF）。预览弹层左上角「返回」可关闭，右上角可下载。"
    },
    {
      k: ["首页", "门户", "其他页面", "别的站", "回到首页", "导航", "入口"],
      a: "点击页面<b>左上角「← 返回首页」</b>即可回到门户页，门户页有三个入口：📺 腾讯大剧、🎬 腾讯综艺、📄 腾讯刊例。"
    },
    {
      k: ["搜索", "怎么搜", "查找", "找不到"],
      a: TL
        ? "用筛选器上方的搜索框（蓝色放大镜处），支持按<b>" + SITE + "名称</b>或<b>嘉宾/主演姓名</b>搜索，输入即时过滤；也可以配合上方的季度、级别、类型筛选一起用。"
        : "用顶部的平台按钮（腾讯视频/腾讯体育/腾讯新闻/联投类/微信广告/TME/QQ浏览器）切换资源，再展开对应季度查看具体刊例。"
    },
    {
      k: ["筛选", "分类", "级别", "怎么过滤", "标签"],
      a: TL
        ? "筛选器有三档：<b>季度</b>（按上线时间）、<b>级别</b>（S+/S/A）、<b>类型</b>（大类，可多选）。点「全部」清空该档；多个筛选条件可叠加。"
        : "顶部平台按钮即为筛选，点击可切换不同资源方的刊例；每个资源下按季度分组，点「展开预览」查看该季度所有刊例明细。"
    },
    {
      k: ["更新", "多久更新", "最新", "什么时候更新", "新增"],
      a: "内容由业务同学不定期更新（新方案、新刊例、海报会随时补充）。页面数据以腾讯官方发布为准，如需确认最终信息请联系对接人员。"
    },
    {
      k: ["手机", "移动端", "手机看", "适配", "平板"],
      a: "支持手机访问，布局会自动适配（筛选器换行、表格可横向滑动）。PDF 预览在手机上也能翻阅，如需仔细看建议下载后用 PDF 阅读器打开。"
    },
    {
      k: ["能问什么", "帮助", "你能做什么", "怎么用你", "使用说明", "功能"],
      a: null // 动态生成
    }
    ];
  }

  /* ---------- 4. 时间轴站问答逻辑 ---------- */
  function answerTimeline(qRaw) {
    const q = norm(qRaw);
    const items = TL.items;

    // 4.1 按名称精确/包含匹配 → 返回详情
    const hitByName = items.filter(it => norm(it.name) && q.includes(norm(it.name)));
    if (hitByName.length) {
      return hitByName.slice(0, 3).map(it => {
        const rows = [
          ["上线时间", it.dateText || quarterOf(it.sortKey)],
          ["级别", it.tag],
          ["类型", (it.cats && it.cats.length ? it.cats.join("/") + "·" : "") + (it.type || "")],
          [TL.kind === "tv" ? "主演" : "嘉宾", it.cast],
          ["方案", it.file ? "有（展开后点海报可预览/下载）" : "暂未上传"],
          ["结案数据", it.report ? "有（展开后可预览/下载）" : "暂未更新"]
        ].filter(r => r[1]).map(r => "· " + r[0] + "：" + esc(r[1])).join("<br>");
        return "<b>" + esc(it.name) + "</b><br>" + rows;
      }).join("<hr class='ai-hr'>");
    }

    // 4.2 嘉宾/主演搜索
    const castHit = items.filter(it => {
      if (!it.cast) return false;
      return String(it.cast).split(/[、,，\/]/).some(p => {
        const n = norm(p);
        return n.length >= 2 && q.includes(n);
      });
    });
    if (castHit.length) {
      const who = (() => {
        for (const it of castHit) {
          for (const p of String(it.cast).split(/[、,，\/]/)) {
            if (norm(p).length >= 2 && q.includes(norm(p))) return p.trim();
          }
        }
        return "该演员";
      })();
      return listReply(who + " 参演的" + SITE, castHit);
    }

    // 4.3 级别筛选（S+ / S / A）
    let levelWant = null;
    if (/(s\+|splus|超级|高阶|热门)/.test(q)) levelWant = "S+";
    else if (/\bs\b|s级|s类/.test(q) && !/s\+/.test(q)) levelWant = "S";
    else if (/a级|a类/.test(q)) levelWant = "A";

    // 4.4 季度筛选
    let quarterWant = null;
    const qm = /(\d{2})年?q([1-4])|q([1-4])/.exec(q);
    if (qm) {
      if (qm[1]) quarterWant = qm[1] + "年Q" + qm[2];
      else {
        const only = "Q" + qm[3];
        quarterWant = only; // 模糊：匹配任意年份的该季度
      }
    }
    // 具体月份
    let monthWant = null;
    const mm = /(\d{1,2})月/.exec(qRaw);
    if (mm) monthWant = parseInt(mm[1], 10);

    // 4.5 类型/大类筛选
    const allCats = new Set();
    const allTypes = new Set();
    items.forEach(it => {
      (it.cats || []).forEach(c => allCats.add(c));
      if (it.type) allTypes.add(it.type);
    });
    let catWant = null, typeWant = null;
    for (const c of allCats) if (q.includes(norm(c))) { catWant = c; break; }
    for (const t of allTypes) if (norm(t).length >= 2 && q.includes(norm(t))) { typeWant = t; break; }

    // 4.6 方案/结案筛选
    const wantPlan = /(有方案|方案的|招商方案|有没有方案|哪些有方案)/.test(qRaw);
    const wantReport = /(结案|结案数据|案例数据)/.test(qRaw);

    if (levelWant || quarterWant || monthWant || catWant || typeWant || wantPlan || wantReport) {
      let arr = items.slice();
      const labels = [];
      if (levelWant) { arr = arr.filter(it => levelOf(it.tag) === levelWant); labels.push(levelWant); }
      if (quarterWant) {
        arr = arr.filter(it => {
          const qq = quarterOf(it.sortKey);
          return quarterWant.startsWith("Q") ? qq.endsWith(quarterWant) : qq === quarterWant;
        });
        labels.push(quarterWant);
      }
      if (monthWant) {
        arr = arr.filter(it => {
          const m = /^\d{4}-(\d{2})/.exec(it.sortKey || "");
          return m && parseInt(m[1], 10) === monthWant;
        });
        labels.push(monthWant + "月");
      }
      if (catWant) { arr = arr.filter(it => (it.cats || []).includes(catWant)); labels.push(catWant); }
      if (typeWant) { arr = arr.filter(it => it.type === typeWant); labels.push(typeWant); }
      if (wantPlan) { arr = arr.filter(it => it.file); labels.push("有方案"); }
      if (wantReport) { arr = arr.filter(it => it.report); labels.push("有结案数据"); }

      arr.sort((a, b) => String(b.sortKey).localeCompare(String(a.sortKey)));
      const title = labels.join(" · ") + " 的" + SITE;
      const r = listReply(title, arr);
      return r || ("没有找到符合「" + esc(labels.join(" · ")) + "」的" + SITE + "，可以换个条件问我，或用页面上方的筛选器试试。");
    }

    // 4.7 总数/概览
    if (/(多少|几部|几档|总共|一共|数量|统计|概览|列表|全部|都有哪些)/.test(qRaw)) {
      const byLevel = {};
      items.forEach(it => { const l = levelOf(it.tag); byLevel[l] = (byLevel[l] || 0) + 1; });
      const withPlan = items.filter(it => it.file).length;
      const quarters = {};
      items.forEach(it => { const qq = quarterOf(it.sortKey); if (qq) quarters[qq] = (quarters[qq] || 0) + 1; });
      const qStr = Object.keys(quarters).sort().reverse().map(k => k + "：" + quarters[k] + " 部").join("<br>· ");
      return "本站共收录 <b>" + items.length + "</b> 部" + SITE + "：<br>· 级别分布："
        + Object.keys(byLevel).map(k => k + " " + byLevel[k] + " 部").join("、")
        + "<br>· 已上传方案：" + withPlan + " 部<br>· 按季度：<br>· " + qStr;
    }

    // 4.8 最新上线
    if (/(最新|最近|快上线|即将|下一部|最早)/.test(qRaw)) {
      const sorted = items.slice().sort((a, b) => String(b.sortKey).localeCompare(String(a.sortKey)));
      const arr = /最早/.test(qRaw) ? sorted.slice(-8).reverse() : sorted.slice(0, 8);
      return listReply(/最早/.test(qRaw) ? "上线时间最早的" + SITE : "最新上线的" + SITE, arr, 8);
    }

    return null;
  }

  /* ---------- 5. 刊例站问答逻辑 ---------- */
  function answerRatecard(qRaw) {
    const q = norm(qRaw);

    // 5.1 平台匹配
    const catHit = RC.filter(c => q.includes(norm(c.category))
      || (c.category === "腾讯视频" && /视频|长视频/.test(qRaw))
      || (c.category === "TME" && /(音乐|qq音乐|酷狗|酷我|tme)/i.test(qRaw))
      || (c.category === "微信广告" && /(微信|朋友圈|公众号|视频号)/.test(qRaw))
      || (c.category === "腾讯体育" && /体育|赛事|nba/i.test(qRaw))
      || (c.category === "腾讯新闻" && /新闻|资讯/.test(qRaw))
      || (c.category === "QQ浏览器" && /(浏览器|qb)/i.test(qRaw))
      || (c.category === "联投类" && /(联投|联合投放|打包投)/.test(qRaw)));

    if (catHit.length) {
      return catHit.slice(0, 2).map(c => {
        const total = c.quarters.reduce((n, qt) => n + qt.items.length, 0);
        const qs = c.quarters.map(qt => "· <b>" + esc(qt.label) + "</b>：" + qt.items.length + " 份").join("<br>");
        const sample = c.quarters[0] && c.quarters[0].items.slice(0, 5)
          .map(it => "· " + esc(it.fileLabel || it.title || it.file)).join("<br>");
        return "<b>" + esc(c.category) + "</b> 共 " + total + " 份刊例：<br>" + qs
          + (sample ? "<br><br>最新季度包含：<br>" + sample : "")
          + "<br><br>点顶部「" + esc(c.category) + "」按钮 → 展开季度即可在线查看或下载。";
      }).join("<hr class='ai-hr'>");
    }

    // 5.2 具体刊例文件名搜索
    const fileHits = [];
    RC.forEach(c => c.quarters.forEach(qt => qt.items.forEach(it => {
      const label = it.fileLabel || it.title || "";
      const n = norm(label);
      // 提取问题中的关键词做包含匹配
      if (n && qRaw.length >= 2) {
        const kws = qRaw.replace(/[的了吗呢有哪些什么怎么在哪]/g, "").match(/[\u4e00-\u9fa5A-Za-z0-9]{2,}/g) || [];
        if (kws.some(k => n.includes(norm(k)) && norm(k).length >= 2)) {
          fileHits.push({ cat: c.category, q: qt.label, label: label });
        }
      }
    })));
    if (fileHits.length) {
      const shown = fileHits.slice(0, 10).map(h => "· <b>" + esc(h.label) + "</b><br>&nbsp;&nbsp;（" + esc(h.cat) + " · " + esc(h.q) + "）").join("<br>");
      return "找到 " + fileHits.length + " 份相关刊例：<br>" + shown
        + (fileHits.length > 10 ? "<br>…… 还有 " + (fileHits.length - 10) + " 份" : "")
        + "<br><br>点对应平台按钮 → 展开该季度即可查看/下载。";
    }

    // 5.3 概览
    if (/(多少|几份|总共|一共|数量|统计|概览|列表|全部|都有哪些|有什么|资源)/.test(qRaw)) {
      let total = 0;
      const lines = RC.map(c => {
        const n = c.quarters.reduce((s, qt) => s + qt.items.length, 0);
        total += n;
        return "· <b>" + esc(c.category) + "</b>：" + n + " 份（" + c.quarters.map(qt => qt.label).join("、") + "）";
      }).join("<br>");
      return "本站共 <b>" + total + "</b> 份刊例，覆盖 " + RC.length + " 个资源方：<br>" + lines
        + "<br><br>顶部「整包下载」可一次获取全部。";
    }

    // 5.4 最新季度
    if (/(最新|最近|新版|本季|当季)/.test(qRaw)) {
      const lines = RC.map(c => {
        const q0 = c.quarters[0];
        return q0 ? "· <b>" + esc(c.category) + "</b>：" + esc(q0.label) + "（" + q0.items.length + " 份）" : "";
      }).filter(Boolean).join("<br>");
      return "各资源方最新季度刊例：<br>" + lines;
    }

    return null;
  }

  /* ---------- 6. FAQ 与兜底 ---------- */
  function helpText() {
    if (TL) {
      return "你好 👋 我是站内小助手，可以帮你查" + SITE + "信息，试着这样问我：<br>"
        + "· <b>势均力敌的我们2</b>（直接问名字看详情）<br>"
        + "· <b>26年Q3有哪些" + SITE + "</b><br>"
        + "· <b>S+的" + SITE + "有哪些</b><br>"
        + "· <b>爱情类的有哪些</b> / <b>悬疑类有哪些</b><br>"
        + "· <b>白鹿参演了什么</b>（按嘉宾/主演查）<br>"
        + "· <b>哪些有方案</b> / <b>最新上线的是什么</b><br>"
        + "· <b>怎么下载方案</b> / <b>访问码怎么拿</b>";
    }
    return "你好 👋 我是站内小助手，可以帮你查刊例信息，试着这样问我：<br>"
      + "· <b>腾讯视频有哪些刊例</b><br>"
      + "· <b>微信广告的报价</b> / <b>TME 有什么</b><br>"
      + "· <b>一共有多少份刊例</b><br>"
      + "· <b>最新季度的刊例</b><br>"
      + "· <b>怎么下载</b> / <b>怎么在线查看</b> / <b>访问码怎么拿</b>";
  }

  function answerFAQ(qRaw) {
    const q = norm(qRaw);
    for (const f of buildFAQ()) {
      if (f.k.some(k => q.includes(norm(k)))) {
        return f.a === null ? helpText() : f.a;
      }
    }
    return null;
  }

  function reply(qRaw) {
    if (!TL && !RC) resolveData();
    const t = String(qRaw || "").trim();
    if (!t) return "你想了解什么？可以直接问我" + (TL ? SITE + "名称、季度、级别、类型或嘉宾" : "资源方、刊例名称") + "。";
    if (/^(你好|您好|hi|hello|嗨|在吗|哈喽)/i.test(t)) {
      return helpText();
    }
    if (/(谢谢|感谢|thanks|thx|好的|收到)/i.test(t)) return "不客气，还有想查的随时问我 🙂";

    // 优先：站内数据问答 → FAQ → 兜底
    let a = null;
    if (TL) a = answerTimeline(t);
    if (!a && RC) a = answerRatecard(t);
    if (!a) a = answerFAQ(t);
    if (a) return a;

    return "这个问题我暂时没有对应的资料 🤔<br><br>" + helpText();
  }

  /* ---------- 7. UI 注入 ---------- */
  window.__aiReply = reply; // 便于调试/自测
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
    return TL
      ? ["能问什么？", "最新上线的是什么", "S+的有哪些", "怎么下载方案", "访问码怎么拿"]
      : ["能问什么？", "一共有多少份刊例", "腾讯视频有哪些", "怎么下载", "访问码怎么拿"];
  }

  function mount() {
    if (document.getElementById("aiFab")) return;
    if (!resolveData()) return; // 数据还没就绪，交给重试逻辑
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
        const ansHtml = reply(q);
        t.querySelector(".ai-bub").innerHTML = ansHtml;
        attachFeedback(t, q, ansHtml);
        body.scrollTop = body.scrollHeight;
      }, 260 + Math.random() * 220);
    }

    buildQuicks().forEach(q => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "ai-chip";
      b.textContent = q;
      b.addEventListener("click", () => ask(q));
      quick.appendChild(b);
    });

    let opened = false;
    function open() {
      panel.hidden = false;
      fab.classList.add("ai-fab-on");
      if (!opened) {
        opened = true;
        bubble("bot", helpText());
      }
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
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && !panel.hidden) close();
    });
  }

  // 数据可能在主脚本里稍后才就绪：轮询重试挂载（最多 ~5s）
  function tryMount(left) {
    if (document.getElementById("aiFab")) return;
    mount();
    if (!document.getElementById("aiFab") && left > 0) {
      setTimeout(() => tryMount(left - 1), 200);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => tryMount(25));
  } else {
    tryMount(25);
  }
})();