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
    intro: "1942年3月19日傍晚，一架载有笃信者的盟军飞机飞抵仰光机场，降落之时发现机场已被日军占领，奋起复飞，不料第二天最高当局却收到了飞机被击落的AAAA级电报，引起了当局...",
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
    intro: "当2025年的情感主播进入到一本古早言情小说中，遇到了1999年的白切黑霸总，套路与反套路的终极对决，最终谁能胜出？为了回到熟悉的现实世界，情感主播林欢儿开启了一系...",
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
    intro: "一场盛宴之下的狂欢，让隐藏已久的暗涌浮现，唤醒了所有装睡的人，也触发了GST酒业各层人士的生存危机。一切事关生存，每一步都需格外谨慎。七个深陷其中的主要人物，在...",
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
    intro: "大厂打工人裴谦（彭昱畅 饰）惨遭辞退之际，意外奇遇神秘大佬的邀请，创办了一家必须以亏损为目标的公司。于是他集齐各种不靠谱的虾兵蟹将，开启了他的“裴”钱计划，绞...",
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
    intro: "云汐市命案频出，每个案件背后似乎都隐藏着不为人知的人性纠葛。市刑警支队重案大队侦查员叶谦在队长冷启明的带领下，与刑事技术科的司元龙、焦磊、张子芜等骨干，运用...",
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
    intro: "海归心理医师常远方来到了一处新型养老社区“常青居”工作。为了践行让老人“重返青春”的理念，常远方为老人们创造了一个充满活力的生活体验。因其独特的经营方式，很...",
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
    intro: "该剧讲述了大学生孔小灿（蒋龙 饰）得知妈妈孔桂芳（刘琳 饰）身患绝症后，毅然决然与外星人做交易，通过“生命能量”互换，让45岁的母亲重拾20岁孔桂芳（邓恩熙 饰）的...",
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
    intro: "二十世纪七十年代，积极上进的制帽厂女工费霓一心想上大学靠知识改变命运。费霓的初中同学方穆扬因救人受伤成为了见义勇为的英雄，费霓主动提出照顾他，想要做好事评先...",
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
    intro: "改编自关心则乱小说《江湖夜雨十年灯》。 行事果决腹黑的双面少主慕清晏（周翊然 饰）与性情散漫通透的佛系女侠蔡昭（包上恩 饰），双强极致拉扯造就甜虐爱恋。在诡谲多...",
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
    intro: "对待爱情认真而小心的李晓兮与小贝邂逅，两人开始了一段浪漫的恋爱。小贝的忠诚和坚定给予李晓兮力量，让李晓兮逐渐克服心中对爱情的不安全感。小贝也在李晓兮的陪伴和...",
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
    intro: "该剧改编自晋江文学城团子来袭的小说《逐玉》。讲述了屠户女樊长玉（田曦薇 饰）与落难侯爷谢征（张凌赫 饰）于困境中相遇，一个父母双亡为了保住家产，一个死里逃生隐...",
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
    intro: "三年前，数学天才饶雨瓷被闺蜜兼创业合伙人白靓靓设计构陷，因‘药物成瘾’袭击母亲，被家人强制送进了心康治疗中心接受治疗，而白靓靓靠卖掉两人创办的公司，成为历森...",
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
    intro: "本剧改编自豆瓣阅读连载小说《隐身的名字》，作者易难。 该剧围绕任小名（倪妮 饰）青春时期的日记被丈夫刘潇然（保剑锋 饰）窃取后发表，引出了这本日记背后动人心魄的...",
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
    intro: "青年法官沈谢秩携手律师秦睿，与舒静、胡艾溪、陈向辉等法律同侪深入基层工作，为人民群众解决亲子矛盾、婚姻困境等纷繁的社会、家庭问题；在一桩桩案件中，秉持法律无...",
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
    intro: "改编自黎青燃小说《白日提灯》。 天赋卓然的鬼王贺思慕，在休沐觅食时意外遇见了小将军段胥。携带着她故人之物的这个小将军似乎并非真正的段胥？两人你来我往互相试探，...",
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
    intro: "魏正华（张桐 饰）为报美军轰炸家乡之仇，冒名顶替挚友郑雄才（刘天佐 饰）身份，随大哥魏正中所部入朝作战。初战炸坦克崭露头角，却因身份暴露与大哥激烈对峙。他率队...",
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
    intro: "许蜜语的“完美”婚姻在十周年纪念日被打破，她看清了自己在婚姻关系里的委曲求全和迷失自我，决绝离婚。酒店经理人纪封选择回到事业的起点——浦荣饭店，一切归零的许...",
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
    intro: "故事聚焦上世纪九十年代末的丰阳小镇矿区。一具无名女尸的出现，打破了表面的平静，小镇内的违禁药品贩卖网络随之浮出水面。警察陈红兵（丁勇岱 饰）紧跟线索，却步步逼...",
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
    intro: "该剧改编自十四郎的同名小说。 身负\"五不全\"诅咒降生的战鬼陆千乔，需要通过换皮、换肉、换血、换骨、换心，才能成为\"健全\"的普通人。陆千乔在换肉时为给自己留存一线生...",
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
    intro: "该剧改编自亦舒小说《独身女人》，讲述了以林展翘（唐嫣 饰）、何韩（赵又廷 饰）为代表的独身男女们，在事业与情感的交织浪潮中，彼此形成深厚羁绊，他们不断探寻自我...",
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
    intro: "投行精英李亦非（檀健次 饰）因投资失利，意外与身陷失恋失业双重困境的沪漂女孩钱菲（王楚然 饰）合租，并在职场再度相遇，两个落魄的灵魂在烟火相伴中磕磕碰碰，最终...",
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
    intro: "两年后，周筱风援黔归来与林逸、方筱然会合，三人小分队再度并肩作战，但也面对全新挑战。周筱风自身执着奋进且严守医疗原则，机缘之下被破格提拔为东立医院史上最年轻...",
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
    intro: "年少的李凤林在遭逢家破人亡巨变后投身革命武装，因作战有勇有谋，得到“小狼羔子”的绰号。凭着坚忍不拔的意志品质长期率部孤悬敌后，与日寇血拼、与土匪厮杀、与反动...",
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
    intro: "该剧讲述了在396旅与陆军步兵学院联合举办的小型军事演习中，郭子剑因不满演习流于形式，假传指令要求真打实抗，虽引发哗然，却获赏识调任396旅一营营长。他激发官兵血...",
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
    intro: "多年前，记者沈乐水用摄像机记录了老松江啤酒厂的厂工生活，这里的故事，像一杯久藏的啤酒, 酝酿着复杂的情感，也氤氲着一个名叫刘雪梅的女人的死亡之谜。啤酒厂曾是这...",
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
    intro: "方浩文（贾冰 饰）的笔是欢喜市最廉价的武器，写不出最畅销的书，却能刺穿最荒诞的现实。女企业家金芙蓉（孔令美 饰）的赏识让他一朝成名，又在拒绝求爱后跌落云端。一...",
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
    intro: "上官诚明全家惨遭天相派设局灭门，他化名潜伏，以牙还牙，以眼还眼，联手身陷泥淖却势要逆天改命的江飞燕，用连环骗局反噬仇敌，一路揭露骗术黑幕，最终瓦解天相派，解...",
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
    intro: "2008年中国经济腾飞的时代，生活在胶东半岛的赛多喜一家迎来了生活剧变，一笔不菲的拆迁款将赛家原本的沉疴旧疾放到了台面上：跋扈专制的父亲赛多喜为维护自己的家庭统...",
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

