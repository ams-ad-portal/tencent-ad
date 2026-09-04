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
    img: "images/changheluori.jpg",
    intro: "1942年3月19日傍晚，一架载有“笃信者”华裔军官陈东升（邵桐饰）的盟军飞机飞抵仰光机场，降落时发现机场已被日军占领，随即紧急复飞，不料次日最高当局便收到该飞机被击落的AAAA级电报，引发极大恐慌。笃信者此次的任务是向中国战区最高当局送达轰炸东京的全部绝密计划，以及与太平洋航母编队、执行轰炸任务的轰炸机编队的联络密码，这份文件直接关系到太平洋战场美军通讯安全及轰炸行动成败，一旦落入日军手中，不仅轰炸东京计划将落空，护送舰队也会沦为日军的囊中之物。在飞机被击落时，受伤的陈东升跳伞自救，降落在日军海军第六航空基地驻守的三灶岛，被当地岛民营救并藏匿，而日军已对该岛实施严密封锁，常规上岛营救几乎不可能实现。",
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
    img: "images/xiaochengdashi.jpg",
    intro: "20世纪80年代初，平川县为了加快发展，决定设立“月海镇”。李秋萍与郑德诚两名能力及个性突出的干部，秉着“人民城市人民建”的理念，借助改革开放政策和中央一号文件...",
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
    img: "images/yucixiaowuzuo2.jpg",
    intro: "该剧改编自清闲丫头所著同名小说。故事延续第一部的剧情，讲述三法司少年团联手“攘外”，将一个个看似毫无关联的案件抽丝剥茧、扎根串联，护百姓安宁，更守家国平安的...",
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
    img: "images/turandexihuan.jpg",
    intro: "《突然的喜欢》根据张小娴小说《再见野鼬鼠》改编。2025年的情感主播林欢儿（王玉雯饰）意外进入一本古早言情小说，邂逅了1999年白切黑霸总高海明（陈星旭饰），两人展开套路与反套路的终极较量，究竟谁能在这场对决中胜出。为回到熟悉的现实世界，林欢儿开启一系列攻略高海明的行动，却常常聪明反被聪明误。当她好不容易用尽办法通关，到了必须离开书中世界的时候，却惊觉自己早已深陷这段感情，难以割舍，最终在去留抉择中直面内心情感。",
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
    img: "images/taipingnian.jpg",
    intro: "剧集聚焦钱弘俶（白宇 饰）、赵匡胤（朱亚文 饰）、郭荣（俞灏明 饰）三人在国家板荡中的命运抉择。他们目睹离乱，深知唯有重建秩序方能终止苦难。钱弘俶秉持“保境安民...",
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
    intro: "《夜色正浓》以多视角展开，讲述不同圈层的奋斗人物在人性与现实的考验中拼搏进取的过程。一场盛宴之下的狂欢唤醒了所有装睡的人，也触发了各层人士的生存危机。七个深陷其中的主要人物，在事件中扮演了不同的角色，勾勒出人性的复杂和现实的残酷，从而呈现出一个共同的主题——如何在惶惶不安中乐观地活下去。",
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
    img: "images/nianshaoyouwei.jpg",
    intro: "万一帆（范丞丞饰）是一个游戏开发工程师，有些自卑，还有点社交恐惧症。上班途中，偶遇有人殴打公交车司机，他路见不平反被暴打，多亏了练跆拳道的周微雨（张婧仪饰）出手相救。万一帆和周微雨也因此相识相恋，他们情投意合，感情稳定。",
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
    img: "images/fengguoliuhen.jpg",
    intro: "云汐市公安局刑事技术科是当地要案、奇案的汇聚之地，由科长陈国贤领衔，司元龙、叶茜、冷启明、万金与实习生武丹青等人组建而成的调查小组，通过法医鉴定、心理分析等技术手段破解多起疑难案件，是一支年轻、专业的精英团队。他们或是精于推理、善析人性的法场心灵捕手，或是玩转柳叶刀、有绅士派头的海归技术控，也有人面桃花、行为强悍的卧底警花与玻璃心、乖乖女的实习女警。更有老谋深算，指点迷津的老派警察和让人忍俊不已的圆滑青年。秉承着“破解死亡密码，守护生命尊严”的宗旨，在一桩桩匪夷所思的案件中，见心见性、匡扶正义。",
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
    img: "images/chongfanqingchun.jpg",
    intro: "沈梦君（归亚蕾饰）与家庭其他成员之间的矛盾逐渐恶化，戏剧冲突加强，她的儿媳（李宜娟饰）被她气到心脏病复发，医生建议儿媳静养，不能有压力。束手无措之下，家人决定把沈孟君送到养老院。这让沈孟君特别伤心，她担心自己时日不多，所以想去拍摄一张遗照，可当她走出青春照相馆时，发现自己竟然变成了二十岁的少女。",
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
    intro: "孔小灿（蒋龙饰）为了拯救身患重病的妈妈孔桂芳（刘琳饰），以自己的寿命做交易。让妈妈变回20岁孔桂芳（邓恩熙饰）的模样，但孔小灿却随时可能遭遇事故，于是他决定在自己活着的时候帮妈妈完成梦想。",
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
    img: "images/chunzhenniandaideaiqing.jpg",
    intro: "七十年代末，一对睡上下铺的小夫妻方穆扬（陈飞宇饰）和费霓（孙千饰），表面先婚后爱，实则青梅竹马、情有独钟、天作之合。展现七十年代国人“实用却不失善良，浪漫却不失拼搏”的精神。",
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
    img: "images/jianghuyeyushiniandeng.jpg",
    intro: "本篇故事共分为5个单元，共36集，《白玉老鼠》（10集；1——10）《白玉堂当刀》（9集；10——18）《白玉堂有难》（6集；18——23）《情天》（8集；23——30）《归乡》（7集；30——36）",
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
    img: "images/meiguicongsheng.jpg",
    intro: "对待爱情认真而小心的李晓兮与小贝邂逅，两人开始了一段浪漫的恋爱。小贝的忠诚和坚定给予李晓兮力量，让李晓兮逐渐克服心中对爱情的不安全感。小贝也在李晓兮的陪伴和包容下，治愈了心中的旧伤痛，逐渐释怀，学会珍惜。呵护情感的过程中让李晓兮与小贝看到了爱情的更多面，共同经历了很多困难，最终得到了成长，收获了真挚的爱情。",
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
    img: "images/zhuyu.jpg",
    intro: "屠户女樊长玉（田曦薇饰）与落难侯爷谢征（张凌赫饰）于风雪中宿命相逢，一个父母双亡要做女户主，一个隐姓埋名报复十七年前血仇，二人“各有目的”地演出了一场假婚真爱。利用变成真爱，真爱却带来了血腥战事，相爱之人被迫分离。樊长玉拿着杀猪刀上战场，寻亲寻夫寻正义；谢征恢复铁血侯爷，护国护爱护真相。两人在战场重逢后，并肩作战，不惧生死；随后揭露真相，扳倒权倾朝野的魏严等奸佞，为谢家、樊家洗清冤屈；最终回归家园，始终坚守本心。",
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
    img: "images/tadeshengyan.jpg",
    intro: "饶雨瓷（马思纯饰）是一位数学天才，她的闺蜜兼创业合伙人白靓靓（袁姗姗饰）设计陷害她，饶雨瓷因“药物成瘾”袭击自己的母亲被家人强制送进了心康治疗中心接受治疗，白靓靓趁此机会卖掉与饶雨瓷创办的公司，她成为历森集团的高管。经此变故，饶雨瓷的亲情、友情、爱情、事业悉数从她的人生退场，这位天才就此坠落。三年后，饶雨瓷病愈出院，她精心计划，誓要揭下白靓靓的伪善面具，让她的恶行在阳光之下无所遁形。",
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
    img: "images/yinshendemingzi.jpg",
    intro: "《隐身的名字》改编自作者易难的同名小说，讲述了一桩悬案。一个随意的名字被偷走，从不曾被忘记的名字。任小名（倪妮饰演）对自己的名字存在抵触情绪。她曾与何宇穹相恋，但任小名的母亲任美艳从一开始便不认可何宇穹，认为何宇穹家境普通、学历不高，与任小名并不相配，因此强硬阻拦二人的恋情；此外，两人的成长轨迹逐渐偏离，且何宇穹出于自尊不愿拖累任小名，这些因素也共同促使这段感情无法维系。任小名有着重新夺回属于自己的名字的诉求。她要把被偷走的名字抢回来。这个名字不仅仅属于她自己，也属于很多人。那些隐身的名字，湮没在柴米油盐的烟火里，品头论足的批评里，漫长难熬的岁月里，失去身份痕迹，其背后或许还藏着户籍上的消失，以及精神、话语权或是存在意义上的被隐去。但总有人记得她们，也总有人沿着她们的脚步继续走下去，直到她们的名字被所有人看见。",
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
    img: "images/jiashifating.jpg",
    intro: "青年法官沈谢秩（龚俊饰）与律师秦睿（任敏饰）携手合作，深入基层工作，与舒静（黄璐饰）、胡艾溪（周杨洋饰）、陈向辉（王宇泽饰）等法律同侪为人民群众解决一系列人民法院家事审判案件，如亲子矛盾、婚姻困境等纷繁复杂的社会和家庭问题。在每一个案件中，沈谢秩等人都坚守着法律无情人有情的原则，始终践行初心使命，坚守法治信仰。",
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
    img: "images/bairitideng.jpg",
    intro: "《白日提灯》主要讲述归墟最强女灵主和身世成谜的少将军互通五感，命理相连，携手守护美好人间的故事。剧中，天赋卓然的鬼王贺思慕，在休沐觅食时意外遇见小将军段胥。携带故人之物的小将军似乎并非真正的段胥，两人你来我往互相试探，逐步揭开与灵界叛乱、朝堂阴谋以及三百年前贺思慕家族惨案相关的伏笔。贺思慕终于了解段胥黑暗过往以及心中志向，而段胥也发现贺思慕的坚守和孤独。最终寿命不过百年的凡人和四百岁仍是少女的恶鬼，一起以爱意抵抗时间洪流。",
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
    img: "images/zhanqiruhua.jpg",
    intro: "《战旗如画》围绕志愿军特战中心的袁冬梅、龙汉军、魏正才等展开，他们通过情报战、信息战和敌后特种战等多种方式参与了抗美援朝的首战和五大战役。此外，金载平、金载媛、金载曦三兄妹，以及韩三喜和韩三妹兄妹也加入了战斗，与特战队合作，完成了一系列关键任务，包括智取诸仁桥、炸毁水门桥、爆破武陵桥、穿越龙源里、击毙美军司令、夺取美军细菌战情报等。他们还协助防守松骨峰、飞虎山、铁原、三所里等地，最终在上甘岭战役中与黄继光、邱少云等一起战胜了美军，以血肉之躯谱写了抗美援朝的篇章。最后，他们参与了抗美援朝的最后一战，金城战反击战，与杨育才等人合作，化装突袭韩军白虎团，摧毁了敌军指挥中心，迫使美军在板门店签署停战协定。",
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
    img: "images/poce.jpg",
    intro: "被边缘化的老警察朱赫来（刘烨 饰）突然获得一桩尘封的抢劫案线索，抓捕民工出身的企业家孟广才（聂远 饰），孟广才联合当年的抢劫团伙拿出反复锤炼的谎言迷局，在审讯...",
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
    img: "images/binghuchongsheng.jpg",
    intro: "奴籍少女楚乔被燕北世子燕洵所救后两人结下深厚友谊，楚乔力助燕洵，但燕洵却以楚乔为饵，设伏诛杀大夏世家公子诸葛玥，诸葛玥与楚乔一起跌入冰湖。楚乔获救后，寻机刺...",
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
    img: "images/miyuji.jpg",
    intro: "许蜜语（朱珠饰）的“完美”婚姻在十周年纪念日被打破，她看清了自己在婚姻关系里的委曲求全和迷失自我，决绝离婚。酒店经理人纪封（钟汉良饰）选择回到事业的起点—斯威酒店，一切归零的许蜜语从斯威酒店客房保洁做起，纪封则作为斯威酒店新任总经理正式亮相。两人携手面对职场挑战，从同舟共济到爱意萌生，收获美满爱情的同时，也让斯威酒店成为了城市新地标。",
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
    img: "images/fangyuanbabaimi.jpg",
    intro: "《方圆八百米》这部网络剧融入了悬疑色彩，聚焦于当代公安领域，围绕一桩被重新挖掘的往昔谜案逐步展开，令人充满期待。该剧由腾讯视频精心打造，共20集，以刑事侦查为主线，深度探索犯罪与人性的交界。该剧主要讲述了九十年代末，丰阳小镇矿区中发现了一具未知身份的女尸，陈年旧事与新案线索逐渐浮出水面。错综复杂的家庭关系、警察父子陈红兵与陈辉的对抗与博弈、职责与亲情的纠结、爱情与法理及人性的交缠，让本来岁月静好的小镇暗流涌动的故事。",
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
    img: "images/jiaoutiancheng.jpg",
    intro: "故事讲述男主角竹协无我经常搭子弹火车返工，可是却经常遇上女主角栗原小卷。这是典型地铁奇缘的始祖。竹协无我与栗原小卷经常会面，包括在火车、午饭、返工和放工，虽然彼此都有眼神交流，但是始终未能交谈、结识。不过，竹协无我的弟弟(亦即是後期柔道龙虎榜续集柔道龙虎斗的主角)、却与栗原小卷的妹妹结识。同时在一次返工，男女主角被迫在一起，亦开始有交谈，期後都有交往。可是彼此都存在「矜持」，谁都不肯首先表露爱意。反而栗原小卷的妹妹便大胆地向竹协无我的弟弟表露爱意，在这一影响下，竹协无我和栗原小卷才放弃无谓的自尊，彼此道出爱意。",
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
    img: "images/aiqingmeiyoushenhua.jpg",
    intro: "林展翘（唐嫣饰）是一位经济独立、思想成熟的都市女性，身边追求者不断，但她一直过着单身独居的生活。其实她不是排斥婚姻，只是不愿将就，内心一直渴望着一份真正的爱情与纯粹的婚姻。林展翘与何韩（赵又廷饰）相识后，两人起初虽互有误解，但当他们在爱情、事业中一起经历成长与选择后，终于认清对方就是自己的理想爱人。在克服现实的阻碍后，两人准备踏入婚姻殿堂。林展翘的女性朋友们也在各自做出生活的抉择后，找到了完美的人生归宿。最终她们重新领悟了爱情与婚姻的真谛，过上了普通而幸福、平凡而不平庸的生活。",
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
    img: "images/zhujue.jpg",
    intro: "多年前，县剧团招学员，在团里任司鼓的胡三元（张嘉益 饰）替外甥女做主报名，将年少的她改名易青娥（刘浩存 饰）从家乡带出来学唱秦腔。却因胡三元缘故，易青娥学习秦...",
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
    img: "images/datangmiwudiyiji.jpg",
    intro: "大唐狄仁杰（冯绍峰 饰）巡查江南，与段十四（李彧 饰）、楚青岚（邵芸 饰）、林不言（单敬尧 饰）组成神探天团，破解东方志怪元素的奇诡案件，沉浸式体验探案。",
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
    img: "images/miqiang.jpg",
    intro: "倒霉透顶的小夫妻，盲打误撞住进了一幢大别墅，意外发现了一笔藏匿其中的巨款，风波袭来，让他们分不清，这到底是噩梦还是美梦。",
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
    img: "images/moli.jpg",
    intro: "叶府的长女叶璃（白鹿 饰），嫁去破败的定王府，和双腿残疾的定王墨修尧成亲，而在叶璃出嫁当日，黎王墨景黎与叶府次女叶莹也于同日成亲。叶璃作为离山后人，曾被封在山...",
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
    img: "images/aiqingyouyanhuo.jpg",
    intro: "《爱情有烟火》讲述了投行精英李亦非（檀健次饰）因投资失利，意外与身陷失恋失业双重困境的沪漂女孩钱菲（王楚然饰）合租，并在职场再度相遇，两个落魄的灵魂在烟火相伴中磕磕碰碰，最终甜蜜奔赴。剧集从生活磨合切入，细致描绘了这对“欢喜冤家”在同一屋檐下针锋相对的爆笑日常，以轻喜剧基调消解现实压力。在平淡的烟火日常中，傲娇的投行精英李亦非逐渐褪去浮华，感受最真实的人情冷暖；负债“沪漂”钱菲重拾职场信心，实现自我的成长。两人从最初的互不相让，到低谷中彼此支撑、相互治愈，生动诠释了成年人“势均力敌”的爱情真谛。",
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
    img: "images/wenxin2.jpg",
    intro: "《问心2》讲述了两年后周筱风援黔归来与林逸、方筱然会合，三人小分队再度并肩作战，但也面对全新挑战。周筱风自身执着奋进且严守医疗原则，机缘之下被破格提拔为东立医院史上最年轻的心内科执行主任。职位的晋升，让他看到了更多可能、面临更大考验，也颠覆了他与林逸方筱然间原本的关系，甚至医院内外的生态平衡也因此被打破。与此同时，他们还需要面对医生永远的对手——病魔。一个接一个的病人与他们身后的家庭期待医护联手拯救。理想与现实时时冲突，无奈和温暖往往共生，他们只有在奋斗中不断成长，继续保持着“问心无愧”的故事。",
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
    img: "images/jingchengqitan.jpg",
    intro: "京城纨绔赵少商为帮姐姐探查夫家怪事，结识了留洋归来的冷面警官元鸿。两人从针锋相对到默契搭档，一路追查迷案，也一步步揭开元鸿母亲离世之谜。随着调查深入，一桩危...",
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
    img: "images/jiugedankong.jpg",
    intro: "《九个弹孔》以李智信的成长经历为主线，全景展现革命先辈浴血奋战、矢志报国的历程。剧集汲取众多湖北籍开国将帅的真实经历并进行艺术化融合与重构，时间跨度近二十年，将四一二反革命政变、长征、抗日战争、解放战争等重大历史事件融入叙事，呈现出人民军队从红军游击队发展为新四军，再到人民解放军的脉络，以主人公跌宕起伏的个人命运具象化宏大的时代风云。",
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
    img: "images/baihuasha.jpg",
    intro: "昭宁郡主沈汐和（孟子义 饰）势要做云巅执棋之手，而非深庭落花，任人摘折，在势力交错的局势下与东宫储君萧华雍（何与 饰）相知携手，互相拨开对方身上的重重迷雾，从...",
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
    intro: "本剧改编自豆瓣阅读连载小说《小芳出嫁》，作者伊北。 春节前夕，远在深圳的杨凡雁接到哥哥凡虎电话，希望她早点回乡协助解决一件棘手难题：凡虎的女儿杨小芳与同村青年...",
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
    img: "images/zheyimiaoguohuo.jpg",
    intro: "民国南城，慕容世家幼子慕容清峄（张凌赫 饰）因被抱错而受尽养父虐待，少年出逃时被任素素（王楚然 饰）所救，却累及其家族遭灭顶之灾。经年重逢，二人暗生情愫，但任...",
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
    img: "images/yirandexishi.jpg",
    intro: "李依然再次回到乐沧这座西南小城，八年隔阂让母女关系渐行渐远。阴差阳错之下，母女二人包揽了小城的“人生大事”。面对一个个残酷又温情的故事，李依然对生命与遗憾有...",
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
    img: "images/bingzifengzhonglai.jpg",
    intro: "许凌军刚从集团军作训处长升任合成396旅旅长伊始，他的老营长——战区陆军副司令员梁北华就亲往加担子，要求他率全旅完成陆军转型的试点任务。梁北华回忆起自己亲身经历1985年大裁军时的老营长，而许凌军还记得1998年军队建设转型时，全师比武第一的老连长因不适应新装备退出现役。这次陆军转型试点，必须瞄准新时代需求打造一流标准的新质陆军作战力量，任务艰巨。396旅一营营长郭子剑因为一次演习事故受到处分，正在等待转业。许凌军认真查看事故过程，大胆起用郭子剑。在此后的转型建设中，郭子剑不负重望，在一次突发性的跨战区强强对抗突然降临396旅，对手蓝军旅从无败绩，对抗中，许凌军虽指挥高超，却依然损失惨重。然而他却完整地保留了郭子剑所在营。最后，郭子剑以合成营的新质兵力，妙招频出，对蓝军完成了决定战局的“斩首”。",
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
    img: "images/renyu.jpg",
    intro: "就读于职业中学培训部的花季女生苏琳（黄杨钿甜 饰），虽自小被父母忽视，在艰苦环境中长大，但她始终刻苦学习，憧憬未来。为此，苏琳苦练口语并争取到了英文朗诵剧中小...",
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
    img: "images/huakaijinxiu.jpg",
    intro: "豪爽重情、出身草莽却心怀壮志的私盐贩子赵凌，与被诬陷私通而被迫逃亡的世家名媛小姐傅庭芸相识相爱，两人历经家族权谋、朝廷纷争与生死考验，赵凌从江湖草莽成长为朝...",
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
    intro: "故事以红叶市公安局宣传处副处长谭彦的“职场危机”为切入点，从宣传民警转战特警支队担任政委，一直拿笔杆子的谭彦从宣传岗位投身实战前线，一时间陷入秀才遇到兵有理...",
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
    img: "images/chan.jpg",
    intro: "生父是绑架犯，继父是刑警的刑辩律师（钟楚曦 饰），多年前遭人报复痛失妻儿的大法官（吴镇宇 饰），善用人心，游走灰色地带的邪魅律政精英（郑云龙 饰），三个孤独的陌...",
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
    img: "images/jinse.jpg",
    intro: "三十万两黄金突现大漠，传言寻金之人皆成厉鬼，相互厮杀。横遭灭门的女子孤闯大漠，决心复仇！权欲之争暗涌，一群江湖侠客纷纷卷入这场恩怨情仇，共谱一段新武侠故事。",
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
    img: "images/wugeshizongdeshaonian.jpg",
    intro: "女刑警队长陈曦成功破获了一起令人匪夷所思的案件，案件中有五个少年离奇失踪。随着调查的深入，这起扑朔迷离的案件竟牵扯出五组家庭之间复杂的利益纠葛以及微妙的人物...",
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
    img: "images/zuimeng.jpg",
    intro: "《醉梦》以老松江啤酒厂为背景，讲述了品酒员刘雪梅、记者沈乐水（刘诗诗饰）、刑警高雪林（胡先煦饰）等人的故事。记者沈乐水回到故乡，不料卷进一起杀人案件，让她的生活方向产生了转变。沈乐水决定再次拿起摄像机，用镜头记录下这段历史。",
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
    img: "images/meirenyu.jpg",
    intro: "根据伊北同名小说改编，以当代都市为背景，两性关系作为切口，直戳现代社会“有性无爱，有爱无性”等真实情感和婚姻现状。",
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
    img: "images/jiaofeng.jpg",
    intro: "故事由一宗世纪之交的泄密大案而起，扣动两岸局势脉搏的同时，还掩藏着一场境外势力与我方在隐蔽战线上的针锋较量。上世纪九十年代末，闽州市国家安全局一对性格迥异的...",
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
    img: "images/gulefenghualu.jpg",
    intro: "混沌初开，乾坤始尊，羽商国培养了精于音律之法的乐师，孕育出化于乐器的乐灵。而有一群叛逆的乐灵出逃羽商国，建立了专属于乐灵的司幽国。双方围绕神谱风华录鏖战多年...",
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
    img: "images/shibingrongyao.jpg",
    intro: "2017年，坦克兵王韩甲亮与陆航飞行员陆一航在某国参加军事交流活动时遇到恐怖袭击，两人在战斗中相识，也因此产生了误会。回国后，两人奉命参与战场一体化指挥平台“孙...",
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
    img: "images/lanxiangrugu.jpg",
    intro: "该剧根据禾晏山小说《兰香缘》改编。 大学士府长孙女沈嘉兰与吏部尚书林家的长孙林锦楼订下婚约，然而朝堂风云突变，祖父沈大学士被判谋逆之罪，沈家惨遭灭门。林家为了...",
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
    img: "images/renjianqingxing.jpg",
    intro: "家，是人类社会最小的单位，本剧讲述的是一个家庭的故事。顾群（廖凡 饰）和曾姚（倪妮 饰）、邵小逸（周游 饰）和顾园园（安沺 饰）是在大城市生活的两对夫妻，顾群与...",
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
    img: "images/sanxianmihui.jpg",
    intro: "“黄河滩头百丈鼓，挂水湖底轮回钟，金汤水连来生路，渡口待发千万舟。”一次翻锅事件，让神秘的水魈家族承受着“变异”之苦。为解开谜底，男女主并肩作战，重启金汤，...",
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
    img: "images/xiongyoumeigong.jpg",
    intro: "该剧改编自破脑袋同名小说。 程乐乐与陈安因家庭变故分手后，多年后因经营困境在星辰影院重逢。二人携手解决影院危机过程中揭开昔日误会，最终重归于好，使影院焕发新生...",
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
    img: "images/fengkuangdeheiyu.jpg",
    intro: "省公安厅刑警袁莱与市刑侦队追查孩童绑架案。绑匪得知小孩是富商独子，负责刑警遇险命悬一线，案情逐渐升级面临失控。经验老道的袁莱成功地将这起绑架案真正的幕后黑手...",
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
    intro: "方浩文本是一名普通小编辑，曾被包装为畅销书作家，被流量推上直播风口，后在舆论裹挟中事业一夜跌落谷底。接连遭遇事业滑坡与舆论重创后，方浩文在经纪人怂恿下策划“假自杀”直播骗局，意图以此翻红。他此前写下的“成功学”鸡汤阴差阳错被厨师别凡奉为圭臬，别凡不仅从中获得生活动力，还意外展现出厨艺天赋，在一次机缘巧合下救下方浩文，闯入了方浩文的生活。作为方浩文的狂热书粉，别凡意外打乱了方浩文的直播策划，二人就此开启了一场荒诞冒险之旅。两人先后经历洗车房的狼狈相处、“他逃他追”的逃亡、山洞中的共同历险，在一连串或癫或喜的荒诞经历中笑料不断，逐渐完成彼此理解与自我和解，重新找到面对生活的勇气。随着剧情推进，方浩文逐渐放下对名利的执念，找回真实、自洽的生活方式。",
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
    intro: "江浙富少上官诚明自幼丧母，父亲上官严忙于打理生意，对他疏于管教，上官诚明沉迷于戏园听曲，并由此结识了戏班里新来的姑娘江飞燕。一次偶然的英雄救美拉近了二人关系。随着二人相处，上官诚明对江飞燕越发心生怜惜，两人决定私定终身。婚宴上，一位自称姓杜、双目失明的算命先生不请自来，他话说自己是江飞燕的恩人，并告诫上官诚明要远离江飞燕，否则会有灭门之祸。上官诚明不相信命理玄学，将杜瞎子从宴席上撵走。短短几日后，上官诚明突然得知父亲上官严病死家中。弟弟妹妹诚喧、诚晚也忽然失踪，继母刘氏因为一连串的打击昏迷不醒。算命先生的话——应验，上官诚明走投无路，为了救回弟弟妹妹，他答应散尽家财帮杜瞎子重修庙宇，只求对方能帮助自己寻回弟妹二人。",
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
    img: "images/shanggongzhu.jpg",
    intro: "该剧改编自伊人睽睽的同名小说。讲述了不甘命运的天家嫡女暮晚摇与智谋无双的寒门才俊言尚携手共筑清平天下的故事，在层层爽点中打造极致人设，看乱世惊涛中少年人们搅...",
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
    intro: "《多喜一家人》以2015年通州成为北京城市副中心为背景，在此背景下，住在北运河老码头巷子搞装修的赛多喜一家如约拿到了拆迁款，赛家五兄妹因为这笔拆迁款闹得不可开交。在这过程中，各自家庭隐藏的问题也先后暴露出来。赛多喜被查出身患绝症，面对一盘散沙般的子女，总是无法做到一碗水端平的他陷入了苦恼和反思。他最大愿望便是临终前能看到子女们和和睦睦，而这一希望最终只能寄托在大儿媳闻佳音身上。一向温柔和顺但内心主意坚定的大嫂闻佳音以家人之名开始收拾赛家这个“烂摊子”。在她的努力和感召下，五兄妹最终按照父亲的期望改正了缺点，团结一致，化险为夷，实现了父亲“家和万事兴”的夙愿。",
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
    img: "images/longgufenxiang.jpg",
    intro: "根据尾鱼同名小说改编，讲述了山鬼王座孟千姿与神秘男人江炼破解千年谜题的奇幻冒险旅程。",
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
    img: "images/wanguzuiqiangzong.jpg",
    intro: "故事讲述了现代人沈磊意外穿进星陨大陆高武世界，成为担起“铁骨铮铮派”光杆掌门君常笑，被迫接下将门派逆袭为大陆最强宗门的系统任务，利用现代知识带领弟子经营门派...",
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
    img: "images/biaomeiwanfu.jpg",
    intro: "改编自蓬莱客同名小说，该剧讲述了甄嘉芙在反抗婚姻交易中与大表哥裴右安逐渐生情，展开一场“芙狸表妹” 的勇敢追爱自救人生局！当敢爱敢恨的直球派遇上笨嘴拙舌的行动...",
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
    img: "images/shanyaoruta.jpg",
    intro: "一心以事业为重的沈真跳槽来到梦寐以求的TL，原本以为能大展拳脚，没想到来到TL的进阶之路屡屡不顺。面对左右夹击，沈真不慌不忙，她最擅长的就是借力打力，逆转局势。...",
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
    img: "images/cikedeshenghuo.jpg",
    intro: "根据王欣作品《不理想的妻子》改编。 陈岩和宋河是一对在北京工作生活的夫妻，二人决定贷款买下一套远高于收入的新房，提升全家的生活品质。陈岩坚信人生不能一劳永逸，...",
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
    intro: "改编自丁墨的作品《待我有罪时》。 来自江蓉市的女刑警尤明许深入川西追查连环杀人案，偶遇受伤失忆的犯罪心理学教授殷逢，两人组成一对探案搭档。失忆的殷逢心智回到了...",
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
    img: "images/meiguizhanzheng.jpg",
    intro: "一宗骇人的碎尸案，警察刘少杰发现自己太太夏无双是最大嫌疑犯，质疑她杀害富豪李耀天。随着刘少杰深入调查，偶像新星关子盈、金牌经理人苏嘉年、演员安安、名模富太梁...",
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
    img: "images/liaozhai.jpg",
    intro: "山野荒郊，月隐星稀。一宅昏黄的灯笼自远而今，冷寂的青灯下，几多诡异离奇的故事悄然上演。乐善好施的美丽狐女辛十四娘、笑声朗朗令人一见忘忧的婴宁、为求得美人阿宝...",
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
    img: "images/laizhan.jpg",
    intro: "天地初开，灵气滋养万物，人族修仙，妖族化形。蓬莱族却因特殊体质，只能夺他人修为来增长自身，被仙门封印。因蓬莱之乱流离失所的小乞丐阿黛拜入仙灵派，成了闲散仙人...",
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
    img: "images/menghuating.jpg",
    intro: "象南国公主缇兰（张婧仪 饰）明艳灵动、向往自由，从小生活在王室，在一次宫变后，原本平静的宫廷生活一夜之间崩塌，却意外觉醒了作为“盲歌者”预知未来的能力。与此同...",
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
        <div class="tl-intro">
          <span class="tl-intro-label">剧情介绍</span>
          ${it.intro
            ? '<p class="tl-intro-text">' + it.intro.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])) + '</p>'
            : '<p class="tl-intro-text tl-intro-empty">暂无简介</p>'}
        </div>
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

