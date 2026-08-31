/* ============================================================
 * 腾讯内容平台 · 公开资源站（独立版）
 * 权限：统一门禁（访问码 + 腾讯文档申请审批）
 * ============================================================ */
const VARIETY_ITEMS = [
  {
    name: "势均力敌的我们2",
    tag: "S+",
    dateText: "2026年1月1日",
    sortKey: "2026-01-01",
    type: "情感恋综类",
    img: "",
    cast: "陈一家、黄嘉玮、刘佳仪、陆彦廷、宣呈、杨婷泓、叶家杰、伊小凡、湛佳明、张子政、赵恩达、朱慧妍、吴冠颉、吴怡涵、丁琬苧、杨天宇"
  },
  {
    name: "吐槽",
    tag: "S+",
    dateText: "2026年1月24日",
    sortKey: "2026-01-24",
    type: "喜剧脱口秀",
    img: "",
    cast: "张绍刚、范志毅、徐志胜、刘晓庆、向佐、张维伊、呼兰、何广智、张纪中、MC热狗、步惊云、管乐、谢依霖、武艺、孟川、赵晓卉、艾福杰尼、小奇、哈哈曹"
  },
  {
    name: "魔力歌先生",
    tag: "S+",
    dateText: "2026年3月13日",
    sortKey: "2026-03-13",
    type: "舞台竞技",
    img: "",
    cast: "大张伟、龚琳娜、吉克隽逸、李维嘉、杨迪、戴军、高进、黄龄、蒋敦豪、张小婉、张宇、黄子弘凡"
  },
  {
    name: "奋斗吧人生-演员篇",
    tag: "S",
    dateText: "2026年3月31日",
    sortKey: "2026-03-31",
    type: "真人秀",
    img: "",
    cast: "陈赫、邓超、秦海璐、五百、李木戈、李诞、吴彼"
  },
  {
    name: "哈哈哈哈哈6",
    tag: "S+",
    dateText: "2026年4月4日",
    sortKey: "2026-04-04",
    type: "大众游戏",
    img: "",
    cast: "邓超、陈赫、鹿晗、范志毅、王勉、任敏、徐梦洁、李乃文、陈乔恩、李小冉、马頔"
  },
  {
    name: "一饭开锅局",
    tag: "S+",
    dateText: "2026年4月8日",
    sortKey: "2026-04-08",
    type: "美食节目",
    img: "",
    cast: "谢霆锋、李诞、陈晓卿、张勇、郑永麒、谭国锋"
  },
  {
    name: "毛雪汪（春番）",
    tag: "S",
    dateText: "2026年4-6月",
    sortKey: "2026-04-01",
    type: "生活类",
    img: "images/maoxuewang.jpg",
    cast: "毛不易、李雪琴、小沈阳、沈佳润"
  },
  {
    name: "五十公里桃花坞6",
    tag: "S+",
    dateText: "2026年5月14日",
    sortKey: "2026-05-14",
    type: "生活类",
    img: "images/wushigongliutaohuawu6.png",
    file: "plans/wushigongliutaohuawu6.pdf",
    fileLabel: "五十公里桃花坞6 通发版.pdf",
    cast: "周涛、贺峻霖、袁咏仪、彭冠英、萧敬腾、方媛、阿如那、徐志胜、李雪琴、李嘉琦、王子奇、滕哲、徐若晗、陈鑫海、庾恩利"
  },
  {
    name: "开始推理吧4",
    tag: "S+",
    dateText: "2026年5月27日",
    sortKey: "2026-05-27",
    type: "游戏生活类",
    img: "images/kaishituiliba4.jpg",
    cast: "迪丽热巴、张凌赫、刘宇宁、金靖、周柯宇、丁程鑫、白宇"
  },
  {
    name: "半熟恋人5",
    tag: "S",
    dateText: "2026年6月1日",
    sortKey: "2026-06-01",
    type: "情感恋综类",
    img: "",
    cast: "张纯烨、夏之光、谢依霖、沈奕斐、董璇"
  },
  {
    name: "脱口秀和他的朋友们3",
    tag: "S+",
    dateText: "2026年6月26日",
    sortKey: "2026-06-26",
    type: "喜剧脱口秀",
    img: "images/tuokouxiuhetaodepengyou3.webp",
    cast: "陈鲁豫、大张伟、周深、张绍刚、鸟鸟、闫妮、黄子弘凡、瞿颖、何广智、哈哈曹、孟川"
  },
  {
    name: "地球超新鲜2",
    tag: "S+",
    dateText: "2026年6月27日",
    sortKey: "2026-06-27",
    type: "大众游戏",
    img: "images/diqiuchaoxinxian2.jpg",
    cast: "龚俊、刘宇宁、王玉雯、孙红雷、李乃文、郭京飞、陈星旭、林一、宋茜、杨超越、周也、陈赫"
  },
  {
    name: "一饭封神2",
    tag: "S+",
    dateText: "2026年7月29日",
    sortKey: "2026-07-29",
    type: "美食节目",
    img: "images/yifanfengshen2.webp",
    cast: "谢霆锋、李诞、张勇、郑永麒、陈晓卿、樊振东、屈雨瑜、杨艳彬、黎子安、蒋敦豪"
  },
  {
    name: "心动的信号9",
    tag: "S+",
    dateText: "2026年8月3日",
    sortKey: "2026-08-03",
    type: "情感恋综类",
    img: "",
    cast: "杜海涛、张纯烨、薛凯琪、代旭、杨超越、黄申申"
  },
  {
    name: "一路向海的少年",
    tag: "S",
    dateText: "2026年8月6日",
    sortKey: "2026-08-06",
    type: "真人秀",
    img: "images/yiluxianghaidehaonian.jpg",
    cast: "倪萍、TOP登陆少年、陆虎、阎鹤祥、刘旸、许昕、徐志胜、郑恺"
  },
  {
    name: "JUMP+PARK音乐大赏2026",
    tag: "S+",
    dateText: "2026年8月29-30日",
    sortKey: "2026-08-29",
    type: "嘉年华",
    img: "images/jumppark.jpg",
    file: "plans/jumppark2026.pdf",
    fileLabel: "JUMP+PARK音乐大赏2026方案-0519带艺人.pdf",
    cast: "谭松韵、丁禹兮、那英、小鬼王琳凯、单依纯、余佳运、周柯宇、孙浩、黄子弘凡、孔雪儿"
  },
  {
    name: "下一顺位是她 S2",
    tag: "A",
    dateText: "2026年9月9日",
    sortKey: "2026-09-09",
    type: "体育/生存竞技",
    img: "images/xiayishunweishita2.png",
    file: "plans/xiayishunweishita2.pdf",
    fileLabel: "0701《下一顺位是她》S2招商通案.pdf",
    cast: "郭碧婷、周震南、孟佳、李斯丹妮、美娜、敖心仪"
  },
  {
    name: "毛雪汪（秋番）",
    tag: "S",
    dateText: "2026年9-11月",
    sortKey: "2026-09-01",
    type: "生活类",
    img: "",
    cast: "毛不易、李雪琴、舒淇、陈都灵、孔雪儿、颜安、张踩铃、徐志胜、班宇"
  },
  {
    name: "自然学院林3",
    tag: "S",
    dateText: "2026年Q3",
    sortKey: "2026-09-30",
    type: "亲子垂类",
    img: "images/ziranxueyuanlin3.png",
    file: "plans/ziranxueyuanlin3.pdf",
    fileLabel: "【通用】自然学院林第三季260311.pdf",
    cast: "王昱珩、张雅琪、张祎祎（小喵）、柒柒、小虫草、小米"
  },
  {
    name: "令人心动的offer8-医生季",
    tag: "S+",
    dateText: "2026年10月",
    sortKey: "2026-10-01",
    type: "职场",
    img: "images/lingrendongdeoffer8.jpg",
    file: "plans/lingrendongdeoffer8.pdf",
    fileLabel: "令人心动的offer8·医生季0710.pdf",
    cast: "陈铭、张纯烨、贺峻霖、毛晓彤、徐志胜、徐晔、杨超越"
  },
  {
    name: "现在就出发4",
    tag: "S+",
    dateText: "2026年10月",
    sortKey: "2026-10-01",
    type: "大众游戏",
    img: "images/xianzaijiuchufa4.jpg",
    file: "plans/xianzaijiuchufa4.pdf",
    fileLabel: "现在就出发4+方案0327.pdf",
    cast: "沈腾、白敬亭、贾冰、范丞丞、王安宇、胡先煦、黄景瑜、王楚然"
  },
  {
    name: "花开不设限",
    tag: "S+",
    dateText: "2026年11月",
    sortKey: "2026-11-01",
    type: "真人秀",
    img: "images/huakaibushuxian.jpg",
    file: "plans/huakaibushuxian.pdf",
    fileLabel: "0512《花开不设限》.pdf",
    cast: "杨幂、闫妮、吴谨言、单依纯、吴艳妮、papi酱"
  },
  {
    name: "日落时分说爱你2",
    tag: "S",
    dateText: "2026年11月16日（暂定）",
    sortKey: "2026-11-16",
    type: "情感恋综类",
    img: "images/riluoshifenshuoaini2.png",
    file: "plans/riluoshifenshuoaini2.pdf",
    fileLabel: "626《日落时分说爱你》第二季合作方案.pdf",
    cast: "纯素人"
  },
  {
    name: "破晓之路",
    tag: "S",
    dateText: "2026年12月1日",
    sortKey: "2026-12-01",
    type: "电竞",
    img: "images/poxiaozhilu.png",
    file: "plans/poxiaozhilu.pdf",
    fileLabel: "《破晓之路》0507招商方案.pdf",
    cast: "拟邀华晨宇、田曦薇、吴磊等"
  },
  {
    name: "请原地结婚",
    tag: "S",
    dateText: "2026年12月1日",
    sortKey: "2026-12-01",
    type: "情感恋综类",
    img: "images/qingyuandijiehun.png",
    file: "plans/qingyuandijiehun.pdf",
    fileLabel: "请原地结婚0519+.pdf",
    cast: "陈汉典、郑合惠子、王紫璇、俞灏明、王晓晨、任宥纶、李鸿其、陈瑜、林子濠、孙乐言、奥斯卡"
  },
  {
    name: "今天好好吃",
    tag: "S",
    dateText: "2026年12月",
    sortKey: "2026-12-01",
    type: "美食节目",
    img: "images/jintianhaohaochi.png",
    file: "plans/jintianhaohaochi.pdf",
    fileLabel: "《今天好好吃》招商通案0417.pdf",
    cast: "刘涛、任嘉伦、孙千、樊振东、黎子安、徐志胜、林更新"
  },
  {
    name: "喜人奇妙夜3",
    tag: "S+",
    dateText: "2026年12月跨年",
    sortKey: "2026-12-31",
    type: "喜剧脱口秀",
    img: "images/xirenqimiaoyie3.png",
    file: "plans/xirenqimiaoyie3.pdf",
    fileLabel: "《喜人奇妙夜3》招商通案0521.pdf",
    cast: "马东、李诞、王安宇、李川、张维威、卜冠今、宋木子、史策"
  },
  {
    name: "毛雪汪（冬番）",
    tag: "S",
    dateText: "2026年12月-2月",
    sortKey: "2026-12-01",
    type: "生活类",
    img: "",
    cast: "毛不易、李雪琴、沈佳润、陈都灵"
  },
  {
    name: "星光大赏2026",
    tag: "S+",
    dateText: "2026年Q4",
    sortKey: "2026-12-31",
    type: "年度大事件",
    img: "",
    file: "plans/xingguangdashang2026.pdf",
    fileLabel: "2025腾讯视频星光大赏招商通案.pdf",
    cast: "白鹿、赵露思、倪妮、刘宇宁、檀健次、丁禹兮、龚俊、吴磊、王安宇、田曦薇、宋茜、韩红"
  },
  {
    name: "2025腾讯视频星光大赏",
    tag: "S+",
    dateText: "2025年12月",
    sortKey: "2025-12-31",
    type: "年度大事件",
    img: "",
    file: "plans/xingguangdashang2026.pdf",
    fileLabel: "2025腾讯视频星光大赏招商通案.pdf"
  },
  {
    name: "现在就出发3",
    tag: "S+",
    dateText: "2025年10月1日",
    sortKey: "2025-10-01",
    type: "大众游戏",
    img: "images/xianzaijiuchufa3.png",
    file: "plans/xianzaijiuchufa3.pdf",
    fileLabel: "《现在就出发3》方案0218.pdf",
    cast: "沈腾、白敬亭、金晨、贾冰、胡先煦、王安宇、范丞丞、黄景瑜"
  }
];
window.VARIETY_ITEMS = VARIETY_ITEMS;


let currentTab = "variety";
function getItems() { return VARIETY_ITEMS; }

/* ===== 渲染逻辑 ===== */
(function () {
  const wrap = document.getElementById("tlWrap");
  const empty = document.getElementById("tlEmpty");
  const filtersEl = document.getElementById("filters");
  const quarterChipsEl = document.getElementById("quarterChips");
  const levelChipsEl = document.getElementById("levelChips");
  const typeChipsEl = document.getElementById("typeChips");
  const subTypeGroup = document.getElementById("subTypeGroup");
  const subTypeLabel = document.getElementById("subTypeLabel");
  const subTypeChipsEl = document.getElementById("subTypeChips");
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const state = { quarter: [], level: [], type: [], cat: [], subType: [] };
  // 语义：数组为空 = 显示全部（不过滤该维度）；数组为「已选中的值」，多选叠加（如 Q3+Q4）。

  function lvClass(tag) {
    if (tag === "超级S+") return "ssuper";
    if (tag === "高阶S+") return "shigh";
    if (tag === "热门S+") return "shot";
    if (/S\+/.test(tag || "")) return "splus";
    if (tag === "S") return "s";
    return "a";
  }

  function thumbHTML(it, big) {
    const cls = big ? "tl-img tl-big" : "tl-img tl-thumb";
    if (it.img) {
      return '<img class="' + cls + '" src="' + it.img + '" alt="' + it.name + '" loading="lazy" />';
    }
    return '<div class="' + cls + ' tl-img-ph">' + it.name + "</div>";
  }

  function itemHTML(it) {
    const level = it.tag ? '<span class="tl-badge tl-lv-' + lvClass(it.tag) + '">' + it.tag + "</span>" : "";
    // 电视剧显示「大类·小类」（复合类型可同时归属多个大类，用 / 连接），综艺保持小类
    const typeLabel = (it.cats && it.cats.length) ? it.cats.join("/") + "·" + it.type : it.type;
    const type = it.type ? '<span class="tl-badge tl-type">' + typeLabel + "</span>" : "";
    // 嘉宾/主演显示在行内（标签后面），长名单省略号截断
    const castText = it.cast ? '<span class="tl-cast" title="' + it.cast + '">' + it.cast + "</span>" : "";
    const planBtns = it.file
      ? '<div class="btns-block"><span class="btns-label">方案</span><div class="plan-btns">'
          + '<a class="btn-plan" href="' + it.file + '" download="' + (it.fileLabel || "") + '"><svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42l2.3 2.3V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z"/></svg>方案下载</a>'
        + '</div></div>'
      : '<div class="btns-block"><span class="btns-label">方案</span><div class="plan-btns"><button class="btn-plan btn-plan-off" type="button" disabled>方案待上传</button></div></div>';
    const reportBtns = it.report
      ? '<div class="btns-block"><span class="btns-label">结案</span><div class="plan-btns">'
          + '<button class="btn-plan btn-plan-green-o" type="button" data-report="' + it.report + '" data-name="' + it.name + '" data-label="' + (it.reportLabel || "") + '">📊 结案预览</button>'
          + '<a class="btn-plan btn-plan-green" href="' + it.report + '" download="' + (it.reportLabel || "") + '">📥 结案下载</a>'
        + '</div></div>'
      : '<div class="btns-block"><span class="btns-label">结案</span><div class="plan-btns"><button class="btn-plan btn-plan-off" type="button" disabled>结案待更新</button></div></div>';
    return `
    <article class="tl-row">
      <span class="tl-time">${it.dateText}</span>
      <span class="tl-dot" aria-hidden="true"></span>
      <div class="tl-main">
        ${level}
        <h3 class="tl-name">${it.name}</h3>
        ${type}
        ${castText}
      </div>
      <button class="tl-expand" type="button">
        <span class="tl-expand-text">展开</span>
        <span class="tl-arrow" aria-hidden="true">▾</span>
      </button>
    </article>
    <div class="tl-detail" hidden>
      <div class="tl-detail-body">
        ${it.file
          ? '<div class="tl-bigwrap tl-big-click" data-plan="' + it.file + '" data-name="' + it.name + '" data-label="' + (it.fileLabel || "") + '" title="点击查看方案"><span class="tl-big-hint">👁 点击查看方案</span>' + thumbHTML(it, true) + '</div>'
          : '<div class="tl-bigwrap">' + thumbHTML(it, true) + '</div>'}
        <div class="tl-detail-info">
          ${planBtns}
          ${reportBtns}
        </div>
      </div>
    </div>`;
  }

  function chipHTML(active, filter, value, label) {
    return '<button class="chip' + (active ? " chip-active" : "") + '" data-filter="' + filter + '" data-value="' + value + '">' + label + "</button>";
  }

  /* 按播出时间（sortKey）归季度：1-3月Q1 / 4-6月Q2 / 7-9月Q3 / 10-12月Q4，返回如 "26年Q1" */
  function quarterOf(it) {
    const m = /^(\d{4})-(\d{2})/.exec(it.sortKey || "");
    if (!m) return "待定";
    const y = m[1].slice(2);
    const q = Math.floor((+m[2] - 1) / 3) + 1;
    return y + "年Q" + q;
  }

  function buildFilters() {
    const LV_ORDER = { "超级S+": 0, "高阶S+": 1, "热门S+": 2, "S+": 3, "S": 4, "A": 5, "待定": 6 };
    const levels = [...new Set(getItems().map(it => it.tag))].sort((a, b) => (LV_ORDER[a] ?? 9) - (LV_ORDER[b] ?? 9));
    const quarters = [...new Set(getItems().map(quarterOf))].sort((a, b) => {
      const ra = /^(\d{2})年Q(\d)$/.exec(a), rb = /^(\d{2})年Q(\d)$/.exec(b);
      if (ra && rb) return (rb[1] - ra[1]) || (rb[2] - ra[2]);
      return a < b ? -1 : 1;
    });
    quarterChipsEl.innerHTML =
      chipHTML(!state.quarter.length, "quarter", "", "全部") +
      quarters.map(v => chipHTML(state.quarter.includes(v), "quarter", v, v)).join("");
    levelChipsEl.innerHTML =
      chipHTML(!state.level.length, "level", "", "全部") +
      levels.map(v => chipHTML(state.level.includes(v), "level", v, v)).join("");

    /* 类型：综艺=单级小类；电视剧=大类→小类两级（复合类型可属多个大类，均支持多选） */
    if (currentTab === "tv") {
      const CAT_ORDER = ["爱情", "都市", "青春", "奇幻", "武侠", "古装", "历史", "科幻", "猎奇", "竞技", "传奇", "逆袭", "军旅", "家庭", "喜剧", "悬疑", "权谋", "革命", "现实", "刑侦", "民国", "IP改编"];
      const cats = [...new Set(getItems().flatMap(it => it.cats || []))]
        .sort((a, b) => (CAT_ORDER.indexOf(a) - CAT_ORDER.indexOf(b)));
      typeChipsEl.innerHTML =
        chipHTML(!state.cat.length, "cat", "", "全部") +
        cats.map(v => chipHTML(state.cat.includes(v), "cat", v, v)).join("");
      const subs = state.cat.length ? [...new Set(getItems().filter(it => state.cat.some(c => (it.cats || []).includes(c))).map(it => it.type))].sort() : [];
      // 大类为「全部」（空）时不显示小类；仅在缩小大类范围后出现
      if (state.cat.length && state.cat.length < cats.length && subs.length > 1) {
        subTypeLabel.textContent = state.cat.join("/") + "·小类";
        subTypeChipsEl.innerHTML =
          chipHTML(!state.subType.length, "subType", "", "全部") +
          subs.map(v => chipHTML(state.subType.includes(v), "subType", v, v)).join("");
        subTypeGroup.hidden = false;
      } else {
        subTypeGroup.hidden = true;
      }
    } else {
      const types = [...new Set(getItems().map(it => it.type))];
      typeChipsEl.innerHTML =
        chipHTML(!state.type.length, "type", "", "全部") +
        types.map(v => chipHTML(state.type.includes(v), "type", v, v)).join("");
      subTypeGroup.hidden = true;
    }
  }

  function filteredList() {
    const q = (searchInput ? searchInput.value.trim() : "").toLowerCase();
    return getItems().filter(it =>
      (!state.level.length || state.level.includes(it.tag)) &&
      (currentTab === "tv"
        ? ((!state.cat.length || state.cat.some(c => (it.cats || []).includes(c)))
           && (subTypeGroup.hidden || !state.subType.length || state.subType.includes(it.type)))
        : (!state.type.length || state.type.includes(it.type))) &&
      (!state.quarter.length || state.quarter.includes(quarterOf(it))) &&
      (!q || it.name.toLowerCase().includes(q) || (it.cast || "").toLowerCase().includes(q))
    );
  }

  function render() {
    wrap.querySelectorAll(".tl-row, .tl-detail").forEach(el => el.remove());
    if (!getItems().length) {
      const kind = currentTab === "tv" ? "电视剧" : "综艺";
      empty.innerHTML = '<div class="tl-empty-icon">📺</div><p>' + kind + '时间轴待填充</p><span>把' + kind + '节目和上线时间发给我，我会按最新在上依次排进来。</span>';
      empty.style.display = "";
      return;
    }
    const list = filteredList();
    if (!list.length) {
      const q = (searchInput ? searchInput.value.trim() : "");
      if (q) {
        empty.innerHTML = '<div class="tl-empty-icon">🔍</div><p>没有找到匹配「' + q + '」的节目</p><span>换个关键词试试，或调整上面的筛选条件。</span>';
      } else {
        empty.innerHTML = '<div class="tl-empty-icon">🔍</div><p>没有符合筛选条件的节目</p><span>换个季度、级别或类型试试。</span>';
      }
      empty.style.display = "";
      return;
    }
    empty.style.display = "none";
    const sorted = list.slice().sort((a, b) => String(b.sortKey).localeCompare(String(a.sortKey)));
    wrap.insertAdjacentHTML("beforeend", sorted.map(itemHTML).join(""));
  }

  /* 板块切换由全局板块框架处理（TimelineBoard.switchTo） */

  /* 搜索栏：实时过滤（匹配名称 / 嘉宾·主演姓名） */
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      searchClear.hidden = !searchInput.value;
      render();
    });
    searchInput.addEventListener("keydown", e => {
      if (e.key === "Enter") { e.preventDefault(); render(); }
    });
  }
  if (searchClear) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      searchClear.hidden = true;
      searchInput.focus();
      render();
    });
  }

  /* 筛选器点击：多选叠加；点「全部」= 重置该组为显示全部 */
  filtersEl.addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    const f = chip.dataset.filter;
    const v = chip.dataset.value;
    const key = f === "quarter" ? "quarter" : f === "level" ? "level" : f === "type" ? "type" : f === "cat" ? "cat" : f === "subType" ? "subType" : null;
    if (!key) return;
    if (v === "") {
      // 「全部」按钮：清空该组已选 → 显示全部
      state[key] = [];
    } else {
      const i = state[key].indexOf(v);
      if (i > -1) state[key].splice(i, 1); else state[key].push(v);
    }
    if (key === "cat") state.subType = []; // 大类变化后小类重置为「全部」
    buildFilters();
    render();
  });

  /* 点击行/「点击展开」按钮展开收起大图 */
  wrap.addEventListener("click", e => {
    const row = e.target.closest(".tl-row");
    if (!row) return;
    const detail = row.nextElementSibling;
    if (detail && detail.classList.contains("tl-detail")) {
      const isOpen = !detail.hidden;
      detail.hidden = isOpen;
      row.classList.toggle("open", !isOpen);
      const txt = row.querySelector(".tl-expand-text");
      if (txt) txt.textContent = isOpen ? "展开" : "收起";
    }
  });

  window.TimelineBoard = {
    switchTo(key) {
      currentTab = key;
      state.quarter = []; state.level = []; state.type = []; state.cat = []; state.subType = [];
      subTypeGroup.hidden = true;
      if (searchInput) { searchInput.value = ""; searchClear.hidden = true; }
      buildFilters();
      render();
    }
  };
})();

/* 浮层滚动保护：iOS 真正锁定底层滚动 + 滑动手势不触发关闭 */
let _viewerSwiping = false, _viewerSX = 0, _viewerSY = 0, _viewerLockY = 0;
document.addEventListener("touchstart", e => {
  if (!e.touches || !e.touches.length) return;
  _viewerSX = e.touches[0].clientX; _viewerSY = e.touches[0].clientY; _viewerSwiping = false;
}, { passive: true });
document.addEventListener("touchmove", e => {
  if (!e.touches || !e.touches.length) return;
  if (Math.abs(e.touches[0].clientX - _viewerSX) > 10 || Math.abs(e.touches[0].clientY - _viewerSY) > 10) _viewerSwiping = true;
}, { passive: true });
document.addEventListener("touchend", () => { setTimeout(() => { _viewerSwiping = false; }, 60); }, { passive: true });
function lockBodyScroll() {
  _viewerLockY = window.scrollY || window.pageYOffset || 0;
  document.body.style.position = "fixed";
  document.body.style.top = "-" + _viewerLockY + "px";
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";
}
function unlockBodyScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  document.body.style.overflow = "";
  window.scrollTo(0, _viewerLockY);
}

/* ===== 方案 PDF 预览浮层（PDF.js 懒加载高清渲染 + 悬浮返回） ===== */
(function () {
  const planViewer = document.getElementById("planViewer");
  const planName = document.getElementById("planName");
  const planDownload = document.getElementById("planDownload");
  const planFrame = document.getElementById("planFrame");
  const planPages = document.getElementById("planPages");
  let planPdfTask = null, planPdfDoc = null, planRenderers = [], planScrollHandler = null;
  const dpr = window.devicePixelRatio || 1;

  if (window.pdfjsLib) pdfjsLib.GlobalWorkerOptions.workerSrc = "assets/vendor/pdf.worker.min.js";

  async function renderPlan(url) {
    planPages.innerHTML = '<div class="pdf-loading">正在加载预览…</div>';
    if (!window.pdfjsLib) { planPages.innerHTML = '<div class="pdf-error">预览组件未能加载，请使用「下载」获取文件。</div>'; return; }
    try {
      const task = pdfjsLib.getDocument(url);
      planPdfTask = task;
      const pdf = await task.promise;
      planPdfDoc = pdf;
      const cw = planPages.clientWidth || 800;
      planPages.innerHTML = "";
      planRenderers = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const ph = document.createElement("div");
        ph.className = "pdf-ph"; ph.dataset.page = String(i);
        ph.style.width = cw + "px";
        ph.textContent = "第 " + i + " 页…";
        planPages.appendChild(ph);
        planRenderers.push({ num: i, ph, canvas: null, busy: false });
      }
      async function renderPage(item) {
        if (item.busy || item.canvas) return;
        item.busy = true;
        try {
          const page = await pdf.getPage(item.num);
          const base = page.getViewport({ scale: 1 });
          const scale = Math.min(6, Math.max(2, (cw * dpr) / base.width));
          const vp = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          canvas.className = "pdf-page";
          canvas.width = Math.floor(vp.width);
          canvas.height = Math.floor(vp.height);
          canvas.style.width = cw + "px";
          canvas.style.height = "auto";
          canvas.dataset.page = String(item.num);
          const ctx = canvas.getContext("2d");
          await page.render({ canvasContext: ctx, viewport: vp }).promise;
          item.busy = false; item.canvas = canvas; item.ph.replaceWith(canvas);
        } catch (err) {
          item.busy = false;
          item.ph.textContent = "第 " + item.num + " 页渲染失败";
        }
      }
      function inView(ph) {
        const r = ph.getBoundingClientRect();
        const f = planFrame.getBoundingClientRect();
        return r.bottom > f.top - 600 && r.top < f.bottom + 600;
      }
      function reconcile() { planRenderers.forEach(it => { if (!it.canvas && inView(it.ph)) renderPage(it); }); }
      reconcile();
      planScrollHandler = reconcile;
      planFrame.addEventListener("scroll", planScrollHandler, { passive: true });
    } catch (err) {
      console.error("方案预览失败:", err);
      planPages.innerHTML = '<div class="pdf-error">预览加载失败，请使用「下载」获取文件。</div>';
    }
  }

  function openPlanViewer(file, name, label) {
    planName.textContent = name;
    planDownload.href = file;
    planDownload.setAttribute("download", label || name + " 方案.pdf");
    planViewer.classList.add("open");
    planViewer.setAttribute("aria-hidden", "false");
    lockBodyScroll();
    renderPlan(file);
  }

  function closePlanViewer() {
    planViewer.classList.remove("open");
    planViewer.setAttribute("aria-hidden", "true");
    if (planPdfTask) { try { planPdfTask.destroy(); } catch (e) {} planPdfTask = null; }
    if (planPdfDoc) { try { planPdfDoc.destroy(); } catch (e) {} planPdfDoc = null; }
    planRenderers = [];
    if (planScrollHandler) { planFrame.removeEventListener("scroll", planScrollHandler); planScrollHandler = null; }
    planPages.innerHTML = "";
    unlockBodyScroll();
  }

  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-plan]");
    if (btn) {
      e.preventDefault();
      openPlanViewer(btn.dataset.plan, btn.dataset.name, btn.dataset.label);
      return;
    }
    if (!_viewerSwiping && e.target.closest("[data-plan-close]")) closePlanViewer();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && planViewer.classList.contains("open")) closePlanViewer();
  });
})();

/* ===== 结案数据预览浮层（HTML 文档，iframe 展示 + 悬浮返回） ===== */
(function () {
  const reportViewer = document.getElementById("reportViewer");
  const reportName = document.getElementById("reportName");
  const reportDownload = document.getElementById("reportDownload");
  const reportIframe = document.getElementById("reportIframe");

  function openReportViewer(file, name, label) {
    reportName.textContent = name + " · 结案";
    reportDownload.href = file;
    reportDownload.setAttribute("download", label || name + " 结案.html");
    reportViewer.classList.add("open");
    reportViewer.setAttribute("aria-hidden", "false");
    lockBodyScroll();
    reportIframe.src = file;
  }

  function closeReportViewer() {
    reportViewer.classList.remove("open");
    reportViewer.setAttribute("aria-hidden", "true");
    reportIframe.src = "about:blank";
    unlockBodyScroll();
  }

  document.addEventListener("click", e => {
    const b = e.target.closest("[data-report]");
    if (b) {
      e.preventDefault();
      openReportViewer(b.dataset.report, b.dataset.name, b.dataset.label);
      return;
    }
    if (!_viewerSwiping && e.target.closest("[data-report-close]")) closeReportViewer();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && reportViewer.classList.contains("open")) closeReportViewer();
  });
})();

/* ===== 板块初始化（授权后由门禁调用 window.mergeInit） ===== */
window.mergeInit = function () {
  var t = document.getElementById("pageTitle");
  if (t) t.textContent = "综艺上线时间轴";
  window.TimelineBoard.switchTo("variety");
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

