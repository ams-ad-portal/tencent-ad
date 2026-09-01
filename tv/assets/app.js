/* ============================================================
 * 腾讯内容平台 · 公开资源站（独立版）
 * 权限：统一门禁（访问码 + 腾讯文档申请审批）
 * ============================================================ */
const TV_ITEMS = [
  {
    name: "长河落日",
    tag: "S",
    dateText: "2026年1月1日",
    sortKey: "2026-01-01",
    type: "谍战",
    cast: "张鲁一、张钧甯、张晨光、张颂文、金士杰、木幡龙",
    img: "",
    cats: [
      "革命"
    ]
  },
  {
    name: "小城大事",
    tag: "超级S+",
    dateText: "2026年1月10日",
    sortKey: "2026-01-10",
    type: "当代剧情",
    cast: "赵丽颖、黄晓明、陈明昊、朱媛媛、秦俊杰、耿乐",
    img: "",
    cats: [
      "现实"
    ]
  },
  {
    name: "御赐小仵作2",
    tag: "热门S+",
    dateText: "2026年1月15日",
    sortKey: "2026-01-15",
    type: "古装悬疑",
    cast: "王子奇、苏晓彤、杨廷东、赵尧珂、张宸逍、王彦鑫",
    img: "",
    cats: [
      "古装",
      "悬疑"
    ]
  },
  {
    name: "突然的喜欢",
    tag: "热门S+",
    dateText: "2026年1月22日",
    sortKey: "2026-01-22",
    type: "奇幻爱情",
    cast: "陈星旭、王玉雯、马思超、曾梦雪、于翔",
    img: "",
    cats: [
      "奇幻",
      "爱情"
    ]
  },
  {
    name: "太平年",
    tag: "热门S+",
    dateText: "2026年1月23日",
    sortKey: "2026-01-23",
    type: "古装历史",
    cast: "白宇、周雨彤、朱亚文、俞灏明、董勇、倪大红",
    img: "",
    cats: [
      "古装",
      "历史"
    ]
  },
  {
    name: "夜色正浓",
    tag: "热门S+",
    dateText: "2026年1月28日",
    sortKey: "2026-01-28",
    type: "都市话题",
    cast: "江疏影、佟大为、张超、蓝盈莹、阚清子、袁文康",
    img: "",
    cats: [
      "都市"
    ]
  },
  {
    name: "年少有为",
    tag: "热门S+",
    dateText: "2026年1月31日",
    sortKey: "2026-01-31",
    type: "都市喜剧",
    cast: "彭昱畅、林允、刘冠麟、王天放、何瑞贤、叶祖新",
    img: "",
    cats: [
      "都市",
      "喜剧"
    ]
  },
  {
    name: "风过留痕",
    tag: "热门S+",
    dateText: "2026年2月3日",
    sortKey: "2026-02-03",
    type: "悬疑刑侦",
    cast: "龚俊、姜武、孙怡、王迅、贾冰、李建义",
    img: "",
    cats: [
      "悬疑",
      "刑侦"
    ]
  },
  {
    name: "重返青春",
    tag: "S",
    dateText: "2026年2月9日",
    sortKey: "2026-02-09",
    type: "都市话题",
    cast: "李诚儒、许娣、蔡明、范明、梁天、李琦",
    img: "",
    cats: [
      "都市"
    ]
  },
  {
    name: "我的妈妈是校花",
    tag: "S",
    dateText: "2026年2月13日",
    sortKey: "2026-02-13",
    type: "亲情喜剧",
    cast: "邓恩熙、蒋龙、刘琳、刘些宁、左林杰、许慧强",
    img: "",
    cats: [
      "家庭",
      "喜剧"
    ]
  },
  {
    name: "纯真年代的爱情",
    tag: "热门S+",
    dateText: "2026年2月21日",
    sortKey: "2026-02-21",
    type: "年代爱情",
    cast: "陈飞宇、孙千、刘敏涛、郭晓婷、王天辰、吴樾",
    img: "",
    cats: [
      "传奇",
      "爱情"
    ]
  },
  {
    name: "江湖夜雨十年灯",
    tag: "热门S+",
    dateText: "2026年2月22日",
    sortKey: "2026-02-22",
    type: "古风武侠爱情",
    cast: "周翊然、包上恩、余嘉诚、范静祎、边天扬、袁文康",
    img: "",
    cats: [
      "古装",
      "武侠",
      "爱情"
    ]
  },
  {
    name: "玫瑰丛生",
    tag: "热门S+",
    dateText: "2026年2月26日",
    sortKey: "2026-02-26",
    type: "都市爱情",
    cast: "王子文、刘宇宁、蒋欣、明道、高伟光、谷嘉诚",
    img: "",
    cats: [
      "都市",
      "爱情"
    ]
  },
  {
    name: "逐玉",
    tag: "高阶S+",
    dateText: "2026年3月6日",
    sortKey: "2026-03-06",
    type: "古装爱情",
    cast: "张凌赫、田曦薇、任豪、孔雪儿、邓凯、李卿",
    img: "",
    cats: [
      "古装",
      "爱情"
    ]
  },
  {
    name: "她的盛焰",
    tag: "热门S+",
    dateText: "2026年3月13日",
    sortKey: "2026-03-13",
    type: "都市女性励志",
    cast: "马思纯、宁理、袁姗姗、翟子路、章涛、郑则仕",
    img: "",
    cats: [
      "都市"
    ]
  },
  {
    name: "隐身的名字",
    tag: "高阶S+",
    dateText: "2026年3月18日",
    sortKey: "2026-03-18",
    type: "女性悬疑",
    cast: "倪妮、闫妮、刘雅瑟、刘敏涛、保剑锋、董洁",
    img: "",
    cats: [
      "悬疑"
    ]
  },
  {
    name: "家事法庭",
    tag: "热门S+",
    dateText: "2026年3月25日",
    sortKey: "2026-03-25",
    type: "都市刑侦",
    cast: "龚俊、任敏、黄璐、高鑫、韩云云、李诚儒",
    img: "",
    cats: [
      "都市",
      "刑侦"
    ]
  },
  {
    name: "白日提灯",
    tag: "超级S+",
    dateText: "2026年3月28日",
    sortKey: "2026-03-28",
    type: "古装奇幻爱情",
    cast: "迪丽热巴、陈飞宇、魏哲鸣、张俪、杨肸子、陈楚河",
    img: "",
    cats: [
      "奇幻",
      "爱情"
    ]
  },
  {
    name: "战旗如画",
    tag: "S",
    dateText: "2026年3月29日",
    sortKey: "2026-03-29",
    type: "战争传奇",
    cast: "张桐、苏青、李晨、马元、刘天佐、马苏",
    img: "",
    cats: [
      "传奇"
    ]
  },
  {
    name: "叵测",
    tag: "热门S+",
    dateText: "2026年4月1日",
    sortKey: "2026-04-01",
    type: "现实悬疑",
    cast: "刘烨、聂远、王佳佳、李健、冯兵、王梓薇",
    img: "",
    cats: [
      "现实",
      "悬疑"
    ]
  },
  {
    name: "冰湖重生",
    tag: "热门S+",
    dateText: "2026年4月8日",
    sortKey: "2026-04-08",
    type: "古装爱情",
    cast: "李昀锐、黄杨钿甜、张康乐、李孝谦、夏梦、李梦",
    img: "",
    cats: [
      "古装",
      "爱情"
    ]
  },
  {
    name: "蜜语纪",
    tag: "热门S+",
    dateText: "2026年4月13日",
    sortKey: "2026-04-13",
    type: "都市话题",
    cast: "钟汉良、朱珠、李梦、经超、任彬、徐海乔",
    img: "",
    cats: [
      "都市"
    ]
  },
  {
    name: "方圆八百米",
    tag: "热门S+",
    dateText: "2026年4月17日",
    sortKey: "2026-04-17",
    type: "犯罪悬疑情感",
    cast: "许凯、丁勇岱、邓恩熙、胡可、涂松岩",
    img: "",
    cats: [
      "悬疑",
      "刑侦"
    ]
  },
  {
    name: "佳偶天成",
    tag: "热门S+",
    dateText: "2026年4月25日",
    sortKey: "2026-04-25",
    type: "古装奇幻",
    cast: "任嘉伦、王鹤润、张凯莹、王以纶、黄羿、付伟伦",
    img: "",
    cats: [
      "古装",
      "奇幻"
    ]
  },
  {
    name: "爱情没有神话",
    tag: "超级S+",
    dateText: "2026年4月28日",
    sortKey: "2026-04-28",
    type: "都市话题",
    cast: "唐嫣、赵又廷、杨采钰、冯绍峰、何蓝逗、王菊",
    img: "",
    cats: [
      "都市"
    ]
  },
  {
    name: "主角",
    tag: "高阶S+",
    dateText: "2026年5月10日",
    sortKey: "2026-05-10",
    type: "当代剧情",
    cast: "张嘉益、刘浩存、秦海璐、窦骁、翟子路、王晓晨",
    img: "",
    cats: [
      "现实"
    ]
  },
  {
    name: "大唐迷雾 第一季",
    tag: "热门S+",
    dateText: "2026年5月23日",
    sortKey: "2026-05-23",
    type: "古装悬疑",
    cast: "冯绍峰、李彧、邵芸、单敬尧、邬君梅",
    img: "",
    cats: [
      "古装",
      "悬疑"
    ]
  },
  {
    name: "迷墙",
    tag: "热门S+",
    dateText: "2026年6月7日",
    sortKey: "2026-06-07",
    type: "荒诞悬疑",
    cast: "郭京飞、任素汐、谷嘉诚、漆昱辰、温峥嵘、刘天佐",
    img: "",
    cats: [
      "悬疑"
    ]
  },
  {
    name: "莫离",
    tag: "超级S+",
    dateText: "2026年6月9日",
    sortKey: "2026-06-09",
    type: "古装爱情",
    cast: "白鹿、丞磊、蔡正杰、杨舒伊、林沐然、董洁",
    img: "",
    cats: [
      "古装",
      "爱情"
    ]
  },
  {
    name: "爱情有烟火",
    tag: "热门S+",
    dateText: "2026年6月15日",
    sortKey: "2026-06-15",
    type: "都市情感",
    cast: "檀健次、王楚然、李乃文、姜珮瑶",
    img: "",
    cats: [
      "都市"
    ]
  },
  {
    name: "问心2",
    tag: "热门S+",
    dateText: "2026年6月18日",
    sortKey: "2026-06-18",
    type: "都市情感话题",
    cast: "赵又廷、毛晓彤、金世佳、张佳宁、陈冲、黄觉",
    img: "",
    cats: [
      "都市"
    ]
  },
  {
    name: "京城奇探",
    tag: "S",
    dateText: "2026年7月5日",
    sortKey: "2026-07-05",
    type: "民国悬疑",
    cast: "翟子路、马思超、春夏、陈意涵、孟鹤堂、周九良",
    img: "",
    cats: [
      "民国",
      "悬疑"
    ]
  },
  {
    name: "九个弹孔",
    tag: "S",
    dateText: "2026年7月8日",
    sortKey: "2026-07-08",
    type: "战争传奇",
    cast: "张桐、何雨虹、卫仑、徐百慧、齐奎、孙绍龙",
    img: "",
    cats: [
      "战争",
      "传奇"
    ]
  },
  {
    name: "百花杀",
    tag: "热门S+",
    dateText: "2026年7月9日",
    sortKey: "2026-07-09",
    type: "古装爱情",
    cast: "孟子义、何与、孔雪儿、叶祖新、何润东、张峻宁",
    img: "",
    cats: [
      "古装",
      "爱情"
    ]
  },
  {
    name: "小芳",
    tag: "热门S+",
    dateText: "2026年7月13日",
    sortKey: "2026-07-13",
    type: "家庭女性喜剧",
    cast: "颖儿、范明、王影璐、辛云来、王姬、林永健、吴彦姝、王勉",
    img: "",
    cats: [
      "家庭",
      "喜剧"
    ]
  },
  {
    name: "这一秒过火",
    tag: "高阶S+",
    dateText: "2026年7月19日",
    sortKey: "2026-07-19",
    type: "民国言情",
    cast: "张凌赫、王楚然、付辛博、胡杏儿、沙宝亮、吴莫愁、徐振轩、鹤秋",
    img: "",
    cats: [
      "民国",
      "爱情"
    ]
  },
  {
    name: "依然的喜事",
    tag: "S",
    dateText: "2026年7月21日",
    sortKey: "2026-07-21",
    type: "家庭轻喜剧",
    cast: "蒋依依、黄小蕾、王天辰、李依晓、吕昀峰、石杭鹭、彭雅琦、刘亚津",
    img: "",
    cats: [
      "家庭",
      "喜剧"
    ]
  },
  {
    name: "兵自风中来",
    tag: "S",
    dateText: "2026年7月23日",
    sortKey: "2026-07-23",
    type: "军旅",
    cast: "欧豪、蓝盈莹、刘奕君、黄景瑜、丁勇岱、史兰芽、阮巨、李幼斌、侯勇",
    img: "",
    cats: [
      "军旅"
    ]
  },
  {
    name: "人鱼",
    tag: "热门S+",
    dateText: "2026年8月4日",
    sortKey: "2026-08-04",
    type: "校园女性悬疑",
    cast: "黄杨钿甜、董勇、张开泰、刘孜、张帆、陈创、何思甜、罗海琼",
    img: "",
    cats: [
      "青春",
      "悬疑"
    ]
  },
  {
    name: "花开锦绣",
    tag: "高阶S+",
    dateText: "2026年8月9日",
    sortKey: "2026-08-09",
    type: "古装爱情",
    cast: "丁禹兮、邓恩熙、尤靖茹、白澍、吕晓霖、张萌、迟蓬、温峥嵘、谭凯",
    img: "",
    cats: [
      "古装",
      "爱情"
    ]
  },
  {
    name: "藏锋",
    tag: "热门S+",
    dateText: "2026年8月17日",
    sortKey: "2026-08-17",
    type: "缉毒刑侦",
    cast: "段奕宏、余男、阿如那、李纯、万鹏、刘欢、凌潇肃、邢佳栋、张国强",
    img: "",
    cats: [
      "刑侦"
    ]
  },
  {
    name: "蝉",
    tag: "S",
    dateText: "2026年8月20日",
    sortKey: "2026-08-20",
    type: "现实悬疑",
    cast: "钟楚曦、吴镇宇、郑云龙、郑宇承、吴幸键、易大千、周放、喻恩泰",
    img: "",
    cats: [
      "悬疑"
    ]
  },
  {
    name: "金色",
    tag: "热门S+",
    dateText: "2026年8月25日",
    sortKey: "2026-08-25",
    type: "古装悬疑武侠",
    cast: "辛芷蕾、尹昉、陈坤、高伟光、卜冠今、尹铸胜、吴汉坤、连奕名",
    img: "",
    cats: [
      "古装",
      "悬疑",
      "武侠"
    ]
  },
  {
    name: "五个失踪的少年",
    tag: "热门S+",
    dateText: "2026年8月",
    sortKey: "2026-08-01",
    type: "悬疑剧情",
    cast: "闫妮、秦海璐、刘琳、左小青、颖儿、李嘉琦、郭晓东、潘斌龙",
    img: "",
    cats: [
      "悬疑"
    ]
  },
  {
    name: "醉梦",
    tag: "热门S+",
    dateText: "2026年8月30日暂定",
    sortKey: "2026-08-30",
    type: "时代悬疑",
    cast: "刘诗诗、胡先煦、李乃文、李沁、黄小蕾、陈永胜、林家川、姜超、姚安濂",
    img: "",
    cats: [
      "悬疑"
    ]
  },
  {
    name: "美人余",
    tag: "热门S+",
    dateText: "2026年9月1日",
    sortKey: "2026-09-01",
    type: "都市女性",
    cast: "李一桐、王佳佳、常华森、曾梦雪、乔振宇、何润东、程泓鑫、周大为",
    img: "",
    cats: [
      "都市"
    ]
  },
  {
    name: "交锋",
    tag: "热门S+",
    dateText: "2026年9月6日",
    sortKey: "2026-09-06",
    type: "现实国安",
    cast: "王凯、彭昱畅、欧豪、周依然、邱天、成泰燊、齐欢、祖峰、吴启华",
    img: "",
    cats: [
      "现实",
      "革命"
    ]
  },
  {
    name: "古乐风华录",
    tag: "热门S+",
    dateText: "2026年9月",
    sortKey: "2026-09-01",
    type: "古装奇幻爱情",
    cast: "李一桐、陈鑫海、郭俊辰、何洛洛、肖燕、古子成、饶嘉迪、陈芷琰",
    img: "",
    cats: [
      "古装",
      "奇幻",
      "爱情"
    ]
  },
  {
    name: "士兵荣耀",
    tag: "热门S+",
    dateText: "2026年9月",
    sortKey: "2026-09-01",
    type: "军旅",
    cast: "李昀锐、陈永胜、周放、黄雯、周政杰、黑泽、周皓崎、鹿骐、冯满",
    img: "",
    cats: [
      "军旅"
    ]
  },
  {
    name: "兰香如故",
    tag: "高阶S+",
    dateText: "2026年9月11日暂定",
    sortKey: "2026-09-11",
    type: "古装爱情",
    cast: "谭松韵、刘学义、李梦、郑合惠子、郭柯宇、叶青、蒲萄、牛骏峰",
    img: "",
    cats: [
      "古装",
      "爱情"
    ]
  },
  {
    name: "人间清醒",
    tag: "热门S+",
    dateText: "2026年Q3",
    sortKey: "2026-09-30",
    type: "都市生活",
    cast: "廖凡、倪妮、周游、安沺、罗嘉良、徐飒、奇道、吴玉芳",
    img: "",
    cats: [
      "都市"
    ]
  },
  {
    name: "三线谜回",
    tag: "热门S+",
    dateText: "2026年Q3",
    sortKey: "2026-09-30",
    type: "奇幻爱情",
    cast: "孟子义、王弘毅、马思超、王乙、郭耘奇、丁燃、张宁江",
    img: "",
    cats: [
      "奇幻",
      "爱情"
    ]
  },
  {
    name: "兄友妹恭",
    tag: "S",
    dateText: "2026年Q3",
    sortKey: "2026-09-30",
    type: "都市爱情",
    cast: "陈鑫海、张淼怡、夏浩然、鹤秋、赵诗意、孔连顺、黄圣池",
    img: "",
    cats: [
      "都市",
      "爱情"
    ]
  },
  {
    name: "疯狂的黑鱼",
    tag: "热门S+",
    dateText: "2026年Q3",
    sortKey: "2026-09-30",
    type: "悬疑剧情",
    cast: "魏翔、沙溢、刘雅瑟、王彦霖、高伟光、娜然、王志飞",
    img: "",
    cats: [
      "悬疑"
    ]
  },
  {
    name: "囧徒之预演告别",
    tag: "热门S+",
    dateText: "2026年10月",
    sortKey: "2026-10-01",
    type: "黑色喜剧",
    cast: "贾冰、田嘉瑞、闫佩伦、孔令美、刘桦、黄小蕾、杨皓宇",
    img: "",
    cats: [
      "喜剧"
    ]
  },
  {
    name: "长风起",
    tag: "高阶S+",
    dateText: "2026年10月",
    sortKey: "2026-10-01",
    type: "悬疑剧情",
    cast: "李现、李一桐、刘冠麟、果靖霖、吴刚、海一天、梁天",
    img: "",
    cats: [
      "悬疑"
    ]
  },
  {
    name: "尚公主",
    tag: "超级S+",
    dateText: "2026年10月",
    sortKey: "2026-10-01",
    type: "古装爱情",
    cast: "李昀锐、孟子义、全伊伦、吴汉坤、李孝谦、沈佳钰、余皑磊、胡杏儿、唐晓天、徐海乔、晏紫东",
    img: "",
    cats: [
      "古装",
      "爱情"
    ]
  },
  {
    name: "多喜一家人",
    tag: "热门S+",
    dateText: "2026年10月",
    sortKey: "2026-10-01",
    type: "家庭情感",
    cast: "蒋欣、李光洁、梁冠华、杨采钰、冯嘉怡、任重、韩童生",
    img: "images/duoxiyijiaren.jpg",
    file: "plans/duoxiyijiaren.pdf",
    fileLabel: "现实主义家庭群像大剧《多喜一家人》招商方案",
    cats: [
      "家庭"
    ]
  },
  {
    name: "龙骨焚箱",
    tag: "高阶S+",
    dateText: "2026年10月",
    sortKey: "2026-10-01",
    type: "奇幻爱情",
    cast: "景甜、张彬彬、杨皓宇、余男、张萌、刘畅、李云霄",
    img: "",
    cats: [
      "奇幻",
      "爱情"
    ]
  },
  {
    name: "万古最强宗",
    tag: "热门S+",
    dateText: "2026年10月",
    sortKey: "2026-10-01",
    type: "古装奇幻喜剧",
    cast: "彭昱畅、万鹏、陈鹤一、韩昊霖、黄维德、李治良、徐浩翔、刘昊然",
    img: "",
    cats: [
      "喜剧",
      "古装",
      "奇幻"
    ]
  },
  {
    name: "表妹万福",
    tag: "热门S+",
    dateText: "2026年11月",
    sortKey: "2026-11-01",
    type: "古装爱情",
    cast: "宋祖儿、陈鑫海、陈若轩、陈钰琪、张慧雯、柯蓝、谢彬彬、谭凯",
    img: "",
    cats: [
      "古装",
      "爱情"
    ]
  },
  {
    name: "闪耀如她",
    tag: "热门S+",
    dateText: "2026年11月",
    sortKey: "2026-11-01",
    type: "都市爱情",
    cast: "秦岚、王阳、张萌、郑合惠子、经超、吴宇恒、潘之琳",
    img: "",
    cats: [
      "都市",
      "爱情"
    ]
  },
  {
    name: "此刻的生活",
    tag: "超级S+",
    dateText: "2026年12月",
    sortKey: "2026-12-01",
    type: "都市生活",
    cast: "唐嫣、俞飞鸿、朱珠、张歆艺、古力娜扎、彭冠英、刘芮麟、邬君梅",
    img: "",
    cats: [
      "都市"
    ]
  },
  {
    name: "待我醒来时",
    tag: "热门S+",
    dateText: "2026年Q4",
    sortKey: "2026-12-31",
    type: "悬疑爱情",
    cast: "景甜、张新成、刘畅、黄米依、秦晓轩、盛冠森、阿丽亚、柯蓝",
    img: "images/daiwoxinglaishi.jpg",
    cats: [
      "悬疑",
      "爱情"
    ]
  },
  {
    name: "玫瑰战争",
    tag: "热门S+",
    dateText: "2026年Q4",
    sortKey: "2026-12-31",
    type: "都市悬疑",
    cast: "杨茜尧、陈豪、林夏薇、马国明、陈展鹏、姚子羚、傅嘉莉、陈自瑶",
    img: "",
    cats: [
      "都市",
      "悬疑"
    ]
  },
  {
    name: "聊斋",
    tag: "高阶S+",
    dateText: "2026年Q4",
    sortKey: "2026-12-31",
    type: "志怪传说",
    cast: "张淼怡、常华森、林允、叶祖新、陈瑶、李嘉琦、陈若轩、宋祖儿",
    img: "",
    cats: [
      "古装",
      "奇幻"
    ]
  },
  {
    name: "来战",
    tag: "高阶S+",
    dateText: "2026年Q4",
    sortKey: "2026-12-31",
    type: "奇幻爱情",
    cast: "鞠婧祎、张云龙、肖燕、古子成、张峻宁、漆昱辰、海一天、林允",
    img: "",
    cats: [
      "古装",
      "奇幻"
    ]
  },
  {
    name: "梦花廷",
    tag: "热门S+",
    dateText: "2026年H2暂定",
    sortKey: "2026-12-31",
    type: "古装爱情",
    cast: "陈哲远、张婧仪、梁永棋、鹿骐、陈澄、鹤秋、王艳",
    img: "",
    cats: [
      "古装",
      "爱情"
    ]
  }
];
window.TV_ITEMS = TV_ITEMS;


let currentTab = "tv";
function getItems() { return TV_ITEMS; }

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
      <span class="tl-time">${it.dateText.replace(/(\d{4})年/g, (_, y) => y.slice(2) + "年")}</span>
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
      const CAT_ORDER = ["爱情", "都市", "青春", "奇幻", "武侠", "古装", "历史", "科幻", "猎奇", "竞技", "传奇", "逆袭", "战争", "军旅", "家庭", "喜剧", "悬疑", "权谋", "革命", "现实", "刑侦", "民国", "IP改编"];
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
  if (t) t.textContent = "电视剧上线时间轴";
  window.TimelineBoard.switchTo("tv");
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

