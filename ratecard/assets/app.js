/* ============================================================
 * 腾讯内容平台 · 公开资源站（独立版）
 * 权限：统一门禁（访问码 + 腾讯文档申请审批）
 * ============================================================ */
/* ===== 刊例板块（腾讯广告刊例 · 数据与渲染） ===== */
(function () {
const RATECARD_STRUCTURE = [
  {
    category: "腾讯视频",
    key: "txvideo",
    quarters: [
      {
        label: "26年 Q3",
        folder: "2026Q3",
        zip: "files/txvideo/2026Q3/pack.zip",
        zipName: "【26年Q3】腾讯视频广告刊例整包.zip",
        items: [
          {
            title: "【26年Q3】腾讯视频广告产品硬广资源报价单 — 移动端资源",
            file: "files/txvideo/2026Q3/01-txvideo-q3-mobile.pdf",
            thumb: "thumbs/01-txvideo-q3-mobile.jpg",
            size: "682 KB",
            dlName: "【26年Q3】腾讯视频广告产品硬广资源报价单-移动端资源.pdf"
          },
          {
            title: "【26年Q3】腾讯视频广告产品硬广资源报价单 — 框内资源",
            file: "files/txvideo/2026Q3/02-txvideo-q3-inframe.pdf",
            thumb: "thumbs/02-txvideo-q3-inframe.jpg",
            size: "532 KB",
            dlName: "sealdone_【26年Q3】腾讯视频广告产品硬广资源报价单-框内资源.pdf"
          },
          {
            title: "【26年Q3】腾讯视频广告产品硬广资源报价单 — OTT资源",
            file: "files/txvideo/2026Q3/03-txvideo-q3-ott.pdf",
            thumb: "thumbs/03-txvideo-q3-ott.jpg",
            size: "283 KB",
            dlName: "sealdone_【26年Q3】腾讯视频广告产品硬广资源报价单-OTT资源.pdf"
          },
          {
            title: "【26年Q3】腾讯视频广告产品硬广资源报价单 — PC页面硬广",
            file: "files/txvideo/2026Q3/04-txvideo-q3-pc.pdf",
            thumb: "thumbs/04-txvideo-q3-pc.jpg",
            size: "211 KB",
            dlName: "sealdone_【26年Q3】腾讯视频广告产品硬广资源报价单-PC页面硬广.pdf"
          }
        ]
      },
      {
        label: "26年 Q2",
        folder: "2026Q2",
        zip: "files/txvideo/2026Q2/pack.zip",
        zipName: "【26年Q2】腾讯视频广告刊例整包.zip",
        items: [
          {
            title: "【26年Q2】腾讯视频广告产品硬广资源报价单 — 框内资源",
            file: "files/txvideo/2026Q2/01-txvideo-inframe.pdf",
            thumb: "thumbs/01-txvideo-inframe.jpg",
            size: "396 KB",
            dlName: "【26年Q2】腾讯视频广告产品硬广资源报价单-框内资源.pdf"
          },
          {
            title: "【26年Q2】腾讯视频广告产品硬广资源报价单 — 移动端资源",
            file: "files/txvideo/2026Q2/02-txvideo-mobile.pdf",
            thumb: "thumbs/02-txvideo-mobile.jpg",
            size: "628 KB",
            dlName: "【26年Q2】腾讯视频广告产品硬广资源报价单-移动端资源.pdf"
          },
          {
            title: "【26年Q2】腾讯视频广告产品硬广资源报价单 — OTT页面硬广",
            file: "files/txvideo/2026Q2/03-txvideo-ott.pdf",
            thumb: "thumbs/03-txvideo-ott.jpg",
            size: "241 KB",
            dlName: "【26年Q2】腾讯视频广告产品硬广资源报价单-OTT页面硬广.pdf"
          },
          {
            title: "【26年Q2】腾讯视频广告产品硬广资源报价单 — PC页面硬广",
            file: "files/txvideo/2026Q2/04-txvideo-pc.pdf",
            thumb: "thumbs/04-txvideo-pc.jpg",
            size: "187 KB",
            dlName: "【26年Q2】腾讯视频广告产品硬广资源报价单-PC页面硬广.pdf"
          }
        ]
      },
      {
        label: "26年 Q1",
        folder: "2026Q1",
        zip: "files/txvideo/2026Q1/pack.zip",
        zipName: "【26年Q1】腾讯视频广告刊例整包.zip",
        items: [
          {
            title: "【26年Q1】腾讯视频广告产品新旧版广告位映射表",
            file: "files/txvideo/2026Q1/01-txvideo-q1-mapping.pdf",
            thumb: "thumbs/01-txvideo-q1-mapping.jpg",
            size: "532 KB",
            dlName: "sealdone_【26年新版】腾讯视频广告产品新旧版广告位映射表.pdf"
          },
          {
            title: "【26年Q1】腾讯视频广告产品硬广资源报价单 — 框内资源",
            file: "files/txvideo/2026Q1/02-txvideo-q1-inframe.pdf",
            thumb: "thumbs/02-txvideo-q1-inframe.jpg",
            size: "396 KB",
            dlName: "sealdone_【26年Q1】腾讯视频广告产品硬广资源报价单-框内资源.pdf"
          },
          {
            title: "【26年Q1】腾讯视频广告产品硬广资源报价单 — 移动端资源",
            file: "files/txvideo/2026Q1/03-txvideo-q1-mobile.pdf",
            thumb: "thumbs/03-txvideo-q1-mobile.jpg",
            size: "627 KB",
            dlName: "sealdone_【26年Q1】腾讯视频广告产品硬广资源报价单-移动端资源.pdf"
          },
          {
            title: "【26年Q1】腾讯视频广告产品硬广资源报价单 — OTT页面硬广",
            file: "files/txvideo/2026Q1/04-txvideo-q1-ott.pdf",
            thumb: "thumbs/04-txvideo-q1-ott.jpg",
            size: "241 KB",
            dlName: "sealdone_【26年Q1】腾讯视频广告产品硬广资源报价单-OTT页面硬广.pdf"
          },
          {
            title: "【26年Q1】腾讯视频广告产品硬广资源报价单 — PC页面硬广",
            file: "files/txvideo/2026Q1/05-txvideo-q1-pc.pdf",
            thumb: "thumbs/05-txvideo-q1-pc.jpg",
            size: "186 KB",
            dlName: "sealdone_【26年Q1】腾讯视频广告产品硬广资源报价单-PC页面硬广.pdf"
          }
        ]
      },
      {
        label: "25年 Q4",
        folder: "2025Q4",
        zip: "files/txvideo/2025Q4/pack.zip",
        zipName: "【25年Q4】腾讯视频广告刊例整包.zip",
        items: [
          {
            title: "【25年Q4】腾讯视频广告产品硬广资源报价单 — 框内资源",
            file: "files/txvideo/2025Q4/01-txvideo-q4-inframe.pdf",
            thumb: "thumbs/01-txvideo-q4-inframe.jpg",
            size: "464 KB",
            dlName: "sealdone_1-腾讯视频广告产品硬广资源2025年Q4报价单-框内资源.pdf"
          },
          {
            title: "【25年Q4】腾讯视频广告产品硬广资源报价单 — 移动端资源",
            file: "files/txvideo/2025Q4/02-txvideo-q4-mobile.pdf",
            thumb: "thumbs/02-txvideo-q4-mobile.jpg",
            size: "785 KB",
            dlName: "sealdone_2-腾讯视频广告产品硬广资源2025年Q4报价单-移动端资源.pdf"
          },
          {
            title: "【25年Q4】腾讯视频广告产品硬广资源报价单 — OTT页面硬广",
            file: "files/txvideo/2025Q4/03-txvideo-q4-ott.pdf",
            thumb: "thumbs/03-txvideo-q4-ott.jpg",
            size: "336 KB",
            dlName: "sealdone_3-腾讯视频广告产品硬广资源2025年Q4报价单-OTT页面硬广.pdf"
          },
          {
            title: "【25年Q4】腾讯视频广告产品硬广资源报价单 — PC端页面硬广",
            file: "files/txvideo/2025Q4/04-txvideo-q4-pc.pdf",
            thumb: "thumbs/04-txvideo-q4-pc.jpg",
            size: "167 KB",
            dlName: "sealdone_4-腾讯视频广告产品硬广资源2025年Q4报价单-PC端页面硬广.pdf"
          }
        ]
      }
    ]
  },
  {
    category: "腾讯体育",
    key: "txsports",
    quarters: [
      {
        label: "26年 Q2-Q3",
        folder: "2026Q2-Q3",
        zip: "files/txsports/2026Q2-Q3/pack.zip",
        zipName: "【26年Q2-Q3】腾讯体育广告刊例整包.zip",
        items: [
          {
            title: "【26年Q2-Q3】腾讯体育广告产品硬广资源报价单 — CPD资源",
            file: "files/txsports/2026Q2-Q3/01-txsports-q23-cpd.pdf",
            thumb: "thumbs/01-txsports-q23-cpd.jpg",
            size: "241 KB",
            dlName: "sealdone_【26年Q2-Q3】腾讯体育广告产品硬广资源报价单-CPD资源.pdf"
          },
          {
            title: "【26年Q2-Q3】腾讯体育广告产品硬广资源报价单 — CPM资源",
            file: "files/txsports/2026Q2-Q3/02-txsports-q23-cpm.pdf",
            thumb: "thumbs/02-txsports-q23-cpm.jpg",
            size: "269 KB",
            dlName: "sealdone_【26年Q2-Q3】腾讯体育广告产品硬广资源报价单-CPM资源.pdf"
          }
        ]
      },
      {
        label: "26年 Q2",
        folder: "2026Q2",
        zip: "files/txsports/2026Q2/pack.zip",
        zipName: "【26年Q2】腾讯体育广告刊例整包.zip",
        items: [
          {
            title: "【26年Q2】腾讯体育广告产品硬广资源报价单 — CPD资源",
            file: "files/txsports/2026Q2/05-txsports-cpd.pdf",
            thumb: "thumbs/05-txsports-cpd.jpg",
            size: "215 KB",
            dlName: "【26年Q2】腾讯体育广告产品硬广资源报价单-CPD资源.pdf"
          },
          {
            title: "【26年Q2】腾讯体育广告产品硬广资源报价单 — CPM资源",
            file: "files/txsports/2026Q2/06-txsports-cpm.pdf",
            thumb: "thumbs/06-txsports-cpm.jpg",
            size: "235 KB",
            dlName: "【26年Q2】腾讯体育广告产品硬广资源报价单-CPM资源.pdf"
          }
        ]
      },
      {
        label: "26年 Q1",
        folder: "2026Q1",
        zip: "files/txsports/2026Q1/pack.zip",
        zipName: "【26年Q1】腾讯体育广告刊例整包.zip",
        items: [
          {
            title: "【26年Q1】腾讯体育广告产品新旧版广告位映射表",
            file: "files/txsports/2026Q1/01-txsports-q1-mapping.pdf",
            thumb: "thumbs/01-txsports-q1-mapping.jpg",
            size: "130 KB",
            dlName: "sealdone_【26年新版】腾讯体育广告产品新旧版广告位映射表.pdf"
          },
          {
            title: "【26年Q1】腾讯体育广告产品硬广资源报价单 — CPD资源",
            file: "files/txsports/2026Q1/02-txsports-q1-cpd.pdf",
            thumb: "thumbs/02-txsports-q1-cpd.jpg",
            size: "214 KB",
            dlName: "sealdone_【26年Q1】腾讯体育广告产品硬广资源报价单-CPD资源.pdf"
          },
          {
            title: "【26年Q1】腾讯体育广告产品硬广资源报价单 — CPM资源",
            file: "files/txsports/2026Q1/03-txsports-q1-cpm.pdf",
            thumb: "thumbs/03-txsports-q1-cpm.jpg",
            size: "235 KB",
            dlName: "sealdone_【26年Q1】腾讯体育广告产品硬广资源报价单-CPM资源.pdf"
          }
        ]
      },
      {
        label: "25年 Q4",
        folder: "2025Q4",
        zip: "files/txsports/2025Q4/pack.zip",
        zipName: "【25年Q4】腾讯体育广告刊例整包.zip",
        items: [
          {
            title: "【25年Q4】腾讯体育广告产品硬广资源报价单 — CPD资源",
            file: "files/txsports/2025Q4/01-txsports-q4-cpd.pdf",
            thumb: "thumbs/01-txsports-q4-cpd.jpg",
            size: "230 KB",
            dlName: "sealdone_6-腾讯体育广告产品硬广资源2025年Q4报价单-CPD资源.pdf"
          },
          {
            title: "【25年Q4】腾讯体育广告产品硬广资源报价单 — CPM资源",
            file: "files/txsports/2025Q4/02-txsports-q4-cpm.pdf",
            thumb: "thumbs/02-txsports-q4-cpm.jpg",
            size: "228 KB",
            dlName: "sealdone_5-腾讯体育广告产品硬广资源2025年Q4报价单-CPM资源.pdf"
          }
        ]
      }
    ]
  },
  {
    category: "腾讯新闻",
    key: "txnews",
    quarters: [
      {
        label: "26年 Q3",
        folder: "2026Q3",
        zip: "files/txnews/2026Q3/pack.zip",
        zipName: "【26年Q3】腾讯新闻广告刊例整包.zip",
        items: [
          {
            title: "【26年Q3】腾讯新闻及腾讯网广告报价单",
            file: "files/txnews/2026Q3/01-txnews-q3.pdf",
            thumb: "thumbs/01-txnews-q3.jpg",
            size: "1.1 MB",
            dlName: "【盖章版】2026年Q3腾讯新闻及腾讯网广告报价单260611.pdf"
          }
        ]
      },
      {
        label: "26年 Q2",
        folder: "2026Q2",
        zip: "files/txnews/2026Q2/pack.zip",
        zipName: "【26年Q2】腾讯新闻广告刊例整包.zip",
        items: [
          {
            title: "【26年Q2】腾讯新闻及腾讯网广告报价单",
            file: "files/txnews/2026Q2/01-txnews-q2.pdf",
            thumb: "thumbs/01-txnews-q2.jpg",
            size: "959 KB",
            dlName: "【盖章版】2026年Q2腾讯新闻及腾讯网广告报价单260225.pdf"
          }
        ]
      },
      {
        label: "26年 Q1",
        folder: "2026Q1",
        zip: "files/txnews/2026Q1/pack.zip",
        zipName: "【26年Q1】腾讯新闻广告刊例整包.zip",
        items: [
          {
            title: "【26年Q1】腾讯新闻及腾讯网广告报价单",
            file: "files/txnews/2026Q1/01-txnews-q1.pdf",
            thumb: "thumbs/01-txnews-q1.jpg",
            size: "959 KB",
            dlName: "【盖章版】2026年Q1腾讯新闻及腾讯网广告报价单260120.pdf"
          }
        ]
      },
      {
        label: "25年 Q4",
        folder: "2025Q4",
        zip: "files/txnews/2025Q4/pack.zip",
        zipName: "【25年Q4】腾讯新闻广告刊例整包.zip",
        items: [
          {
            title: "【25年Q4】腾讯新闻及腾讯网广告报价单",
            file: "files/txnews/2025Q4/01-txnews-q4.pdf",
            thumb: "thumbs/01-txnews-2025q4.jpg",
            size: "1.1 MB",
            dlName: "【盖章版】2025年Q4腾讯新闻及腾讯网广告报价单.pdf"
          }
        ]
      }
    ]
  },
  {
    category: "联投类",
    key: "liantou",
    quarters: [
      {
        label: "26年 Q3",
        folder: "2026Q3",
        zip: "files/liantou/2026Q3/pack.zip",
        zipName: "【26年Q3】联投类广告刊例整包.zip",
        items: [
          {
            title: "【26年Q3】腾讯-闪屏联投&信息流联投资源报价单",
            file: "files/liantou/2026Q3/01-liantou-q3-quote.pdf",
            thumb: "thumbs/01-liantou-q3-quote.jpg",
            size: "406 KB",
            dlName: "sealdone_腾讯-闪屏联投&信息流联投资源报价单26年Q3-Q4.pdf"
          }
        ]
      },
      {
        label: "26年 Q2",
        folder: "2026Q2",
        zip: "files/liantou/2026Q2/pack.zip",
        zipName: "【26年Q2】联投类广告刊例整包.zip",
        items: [
          {
            title: "【26年Q2】腾讯-闪屏联投&信息流联投资源报价单",
            file: "files/liantou/2026Q2/01-liantou-q2-quote.pdf",
            thumb: "thumbs/01-liantou-q2-quote.jpg",
            size: "380 KB",
            dlName: "sealdone_腾讯-闪屏联投&信息流联投资源报价单26年Q2 -0402.pdf"
          }
        ]
      },
      {
        label: "26年 Q1",
        folder: "2026Q1",
        zip: "files/liantou/2026Q1/pack.zip",
        zipName: "【26年Q1】联投类广告刊例整包.zip",
        items: [
          {
            title: "【26年Q1】腾讯-闪屏联投&信息流联投资源 映射关系",
            file: "files/liantou/2026Q1/01-liantou-q1-mapping.pdf",
            thumb: "thumbs/01-liantou-q1-mapping.jpg",
            size: "269 KB",
            dlName: "sealdone_腾讯-闪屏联投&信息流联投资源 映射关系26年Q1.pdf"
          },
          {
            title: "【26年Q1】腾讯-闪屏联投&信息流联投资源报价单",
            file: "files/liantou/2026Q1/02-liantou-q1-quote.pdf",
            thumb: "thumbs/02-liantou-q1-quote.jpg",
            size: "362 KB",
            dlName: "sealdone_腾讯-闪屏联投&信息流联投资源报价单26年Q1.pdf"
          }
        ]
      },
      {
        label: "25年 Q4",
        folder: "2025Q4",
        zip: "files/liantou/2025Q4/pack.zip",
        zipName: "【25年Q4】联投类广告刊例整包.zip",
        items: [
          {
            title: "【25年Q4】腾讯-闪屏联投&信息流联投资源报价单",
            file: "files/liantou/2025Q4/01-liantou-2025q4-quote.pdf",
            thumb: "thumbs/01-liantou-2025q4-quote.jpg",
            size: "450 KB",
            dlName: "sealdone_腾讯-闪屏联投&信息流联投资源报价单25年Q4.pdf"
          }
        ]
      }
    ]
  },
  {
    category: "微信广告",
    key: "wechat",
    quarters: [
      {
        label: "26年 V2",
        folder: "v2",
        zip: "files/wechat/v2/pack.zip",
        zipName: "【26年V2】微信广告刊例整包.zip",
        items: [
          {
            title: "【26年V2】微信广告刊例",
            file: "files/wechat/v2/01-wechat-v2.pdf",
            thumb: "thumbs/01-wechat-v2.jpg",
            size: "165 KB",
            dlName: "sealdone_2026年微信广告刊例V2.pdf"
          }
        ]
      }
    ]
  },
  {
    category: "TME",
    key: "tme",
    quarters: [
      {
        label: "26年 Q3",
        folder: "2026Q3",
        zip: "files/tme/2026Q3/pack.zip",
        zipName: "【26年Q3】TME广告刊例整包.zip",
        items: [
          {
            title: "【26年Q3】TME广告报价单 — QQ音乐（标准）",
            file: "files/tme/2026Q3/14-tme-q3-qq-std.pdf",
            thumb: "thumbs/14-tme-q3-qq-std.jpg",
            size: "445 KB",
            dlName: "sealdone_【最终版】TME26Q3QQ音乐（标准）.pdf"
          },
          {
            title: "【26年Q3】TME广告报价单 — QQ音乐（特殊形式）",
            file: "files/tme/2026Q3/15-tme-q3-qq-sp.pdf",
            thumb: "thumbs/15-tme-q3-qq-sp.jpg",
            size: "439 KB",
            dlName: "sealdone_【最终版】TME26Q3QQ音乐（特殊形式）.pdf"
          },
          {
            title: "【26年Q3】TME广告报价单 — 腾讯音乐-闪屏联投",
            file: "files/tme/2026Q3/01-tme-q3-union.pdf",
            thumb: "thumbs/01-tme-q3-union.jpg",
            size: "327 KB",
            dlName: "sealdone_【最终版】TME26Q3腾讯音乐-闪屏联投.pdf"
          },
          {
            title: "【26年Q3】TME广告报价单 — 喜马拉雅（标准）",
            file: "files/tme/2026Q3/02-tme-q3-ximalaya-std.pdf",
            thumb: "thumbs/02-tme-q3-ximalaya-std.jpg",
            size: "324 KB",
            dlName: "sealdone_【最终版】TME26Q3喜马拉雅（标准）.pdf"
          },
          {
            title: "【26年Q3】TME广告报价单 — 喜马拉雅（特殊形式）",
            file: "files/tme/2026Q3/03-tme-q3-ximalaya-sp.pdf",
            thumb: "thumbs/03-tme-q3-ximalaya-sp.jpg",
            size: "377 KB",
            dlName: "sealdone_【最终版】TME26Q3喜马拉雅（特殊形式).pdf"
          },
          {
            title: "【26年Q3】TME广告报价单 — 波点音乐（标准）",
            file: "files/tme/2026Q3/04-tme-q3-bodian-std.pdf",
            thumb: "thumbs/04-tme-q3-bodian-std.jpg",
            size: "308 KB",
            dlName: "sealdone_【最终版】TME26Q3波点音乐（标准）.pdf"
          },
          {
            title: "【26年Q3】TME广告报价单 — 车载广告",
            file: "files/tme/2026Q3/05-tme-q3-car.pdf",
            thumb: "thumbs/05-tme-q3-car.jpg",
            size: "389 KB",
            dlName: "sealdone_【最终版】TME26Q3车载广告.pdf"
          },
          {
            title: "【26年Q3】TME广告报价单 — 酷狗概念版（标准）",
            file: "files/tme/2026Q3/06-tme-q3-kugou-concept-std.pdf",
            thumb: "thumbs/06-tme-q3-kugou-concept-std.jpg",
            size: "312 KB",
            dlName: "sealdone_【最终版】TME26Q3酷狗概念版（标准）.pdf"
          },
          {
            title: "【26年Q3】TME广告报价单 — 酷狗音乐（标准）",
            file: "files/tme/2026Q3/07-tme-q3-kugou-std.pdf",
            thumb: "thumbs/07-tme-q3-kugou-std.jpg",
            size: "332 KB",
            dlName: "sealdone_【最终版】TME26Q3酷狗音乐（标准）.pdf"
          },
          {
            title: "【26年Q3】TME广告报价单 — 酷我（特殊形式）",
            file: "files/tme/2026Q3/08-tme-q3-kuwo-sp.pdf",
            thumb: "thumbs/08-tme-q3-kuwo-sp.jpg",
            size: "310 KB",
            dlName: "sealdone_【最终版】TME26Q3酷我（特殊形式).pdf"
          },
          {
            title: "【26年Q3】TME广告报价单 — 酷我音乐（区域）",
            file: "files/tme/2026Q3/09-tme-q3-kuwo-std2.pdf",
            thumb: "thumbs/09-tme-q3-kuwo-std2.jpg",
            size: "426 KB",
            dlName: "sealdone_【最终版】TME26Q3酷我音乐（标准） (2).pdf"
          },
          {
            title: "【26年Q3】TME广告报价单 — 酷我音乐（标准）",
            file: "files/tme/2026Q3/10-tme-q3-kuwo-std.pdf",
            thumb: "thumbs/10-tme-q3-kuwo-std.jpg",
            size: "315 KB",
            dlName: "sealdone_【最终版】TME26Q3酷我音乐（标准）.pdf"
          },
          {
            title: "【26年Q3】TME广告报价单 — 懒人听书（标准）",
            file: "files/tme/2026Q3/11-tme-q3-lanren-std.pdf",
            thumb: "thumbs/11-tme-q3-lanren-std.jpg",
            size: "311 KB",
            dlName: "sealdone_【最终版】TME26Q3懒人听书（标准）.pdf"
          },
          {
            title: "【26年Q3】TME广告报价单 — 全民K歌（标准）",
            file: "files/tme/2026Q3/12-tme-q3-kge-std.pdf",
            thumb: "thumbs/12-tme-q3-kge-std.jpg",
            size: "356 KB",
            dlName: "sealdone_【最终版】TME26Q3全民K歌（标准）.pdf"
          },
          {
            title: "【26年Q3】TME广告报价单 — 音箱广告",
            file: "files/tme/2026Q3/13-tme-q3-speaker.pdf",
            thumb: "thumbs/13-tme-q3-speaker.jpg",
            size: "479 KB",
            dlName: "sealdone_【最终版】TME26Q3音箱广告.pdf"
          }
        ]
      },
      {
        label: "26年 Q1",
        folder: "2026Q1",
        zip: "files/tme/2026Q1/pack.zip",
        zipName: "【26年Q1】TME广告刊例整包.zip",
        items: [
          {
            title: "【26年Q1】TME广告报价单 — QQ音乐（标准）",
            file: "files/tme/2026Q1/02-tme-q1-qq-std.pdf",
            thumb: "thumbs/02-tme-q1-qq-std.jpg",
            size: "426 KB",
            dlName: "sealdone_【最终版】QQ音乐（标准）.pdf"
          },
          {
            title: "【26年Q1】TME广告报价单 — QQ音乐（特殊形式）",
            file: "files/tme/2026Q1/03-tme-q1-qq-sp.pdf",
            thumb: "thumbs/03-tme-q1-qq-sp.jpg",
            size: "409 KB",
            dlName: "sealdone_【最终版】QQ音乐（特殊形式）.pdf"
          },
          {
            title: "【26年Q1】TME广告报价单 — 腾讯音乐-闪屏联投",
            file: "files/tme/2026Q1/04-tme-q1-union.pdf",
            thumb: "thumbs/04-tme-q1-union.jpg",
            size: "350 KB",
            dlName: "sealdone_【最终版】TME26年Q1腾讯音乐-闪屏联投.pdf"
          },
          {
            title: "【26年Q1】TME广告报价单 — 波点音乐（标准）",
            file: "files/tme/2026Q1/05-tme-q1-bodian-std.pdf",
            thumb: "thumbs/05-tme-q1-bodian-std.jpg",
            size: "334 KB",
            dlName: "sealdone_【最终版】TME26年Q1波点音乐（标准）.pdf"
          },
          {
            title: "【26年Q1】TME广告报价单 — 车载广告",
            file: "files/tme/2026Q1/06-tme-q1-car.pdf",
            thumb: "thumbs/06-tme-q1-car.jpg",
            size: "427 KB",
            dlName: "sealdone_【最终版】TME26年Q1车载广告.pdf"
          },
          {
            title: "【26年Q1】TME广告报价单 — 酷狗音乐（标准）",
            file: "files/tme/2026Q1/07-tme-q1-kugou-std.pdf",
            thumb: "thumbs/07-tme-q1-kugou-std.jpg",
            size: "416 KB",
            dlName: "sealdone_【最终版】TME26年Q1酷狗音乐（标准）.pdf"
          },
          {
            title: "【26年Q1】TME广告报价单 — 酷我（特殊形式）",
            file: "files/tme/2026Q1/08-tme-q1-kuwo-sp.pdf",
            thumb: "thumbs/08-tme-q1-kuwo-sp.jpg",
            size: "345 KB",
            dlName: "sealdone_【最终版】TME26年Q1酷我（特殊形式).pdf"
          },
          {
            title: "【26年Q1】TME广告报价单 — 酷我音乐（区域）",
            file: "files/tme/2026Q1/09-tme-q1-kuwo-std2.pdf",
            thumb: "thumbs/09-tme-q1-kuwo-std2.jpg",
            size: "446 KB",
            dlName: "sealdone_【最终版】TME26年Q1酷我音乐（标准） (2).pdf"
          },
          {
            title: "【26年Q1】TME广告报价单 — 酷我音乐（标准）",
            file: "files/tme/2026Q1/10-tme-q1-kuwo-std.pdf",
            thumb: "thumbs/10-tme-q1-kuwo-std.jpg",
            size: "355 KB",
            dlName: "sealdone_【最终版】TME26年Q1酷我音乐（标准）.pdf"
          },
          {
            title: "【26年Q1】TME广告报价单 — 懒人听书（标准）",
            file: "files/tme/2026Q1/11-tme-q1-lanren-std.pdf",
            thumb: "thumbs/11-tme-q1-lanren-std.jpg",
            size: "343 KB",
            dlName: "sealdone_【最终版】TME26年Q1懒人听书（标准）.pdf"
          },
          {
            title: "【26年Q1】TME广告报价单 — 全民K歌（标准）",
            file: "files/tme/2026Q1/12-tme-q1-kge-std.pdf",
            thumb: "thumbs/12-tme-q1-kge-std.jpg",
            size: "465 KB",
            dlName: "sealdone_【最终版】TME26年Q1全民K歌（标准）.pdf"
          },
          {
            title: "【26年Q1】TME广告报价单 — 音箱广告",
            file: "files/tme/2026Q1/13-tme-q1-speaker.pdf",
            thumb: "thumbs/13-tme-q1-speaker.jpg",
            size: "298 KB",
            dlName: "sealdone_【最终版】TME26年Q1音箱广告.pdf"
          },
          {
            title: "【26年Q1】TME广告报价单（最终版合集）",
            file: "files/tme/2026Q1/01-tme-q1.pdf",
            thumb: "thumbs/01-tme-q1.jpg",
            size: "1.2 MB",
            dlName: "TME26年Q1报价单最终版.pdf"
          }
        ]
      }
    ]
  },
  {
    category: "QQ浏览器",
    key: "qqbrowser",
    quarters: [
      {
        label: "26年 Q1",
        folder: "2026Q1",
        zip: "files/qqbrowser/2026Q1/pack.zip",
        zipName: "【26年Q1】QQ浏览器广告刊例整包.zip",
        items: [
          {
            title: "【26年Q1】QQ浏览器、CSIG、阅文集团资源报价单（对外版）",
            file: "files/qqbrowser/2026Q1/01-qqbrowser-q1.pdf",
            thumb: "thumbs/01-qqbrowser-q1.jpg",
            size: "1.8 MB",
            dlName: "sealdone_QQ浏览器、CSIG、阅文集团-2026年Q1资源报价单（对外版）.pdf"
          }
        ]
      }
    ]
  }
];
window.RATECARD_STRUCTURE = RATECARD_STRUCTURE;

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
    <td class="rate-type">PDF</td>
    <td class="rate-size">${item.size}</td>
    <td class="rate-actions">
      <a class="btn btn-dl" href="${item.file}" download="${item.dlName}">下载</a>
    </td>
  </tr>`;
}

function render(filter = "all") {
  const html = RATECARD_STRUCTURE.filter(cat => filter === "all" || cat.category === filter)
    .map(cat => {
      const total = cat.quarters.reduce((n, q) => n + q.items.length, 0);
      const quartersHTML = cat.quarters.map(q => `
        <div class="quarter">
          <div class="quarter-head">
            ${folderIcon()}
            <span class="quarter-label">${q.label}</span>
            <button class="btn-expand" type="button" data-toggle aria-expanded="false">
              <svg class="search-ic" viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path fill="currentColor" d="M10 4a6 6 0 1 0 3.7 10.7l4.3 4.3 1.4-1.4-4.3-4.3A6 6 0 0 0 10 4Zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/></svg>
              <span class="expand-text">展开预览</span>
              <svg class="caret" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M8.3 6.7a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L12.6 12 8.3 7.7a1 1 0 0 1 0-1.4Z"/></svg>
            </button>
            ${q.zip ? `<a class="btn btn-pack quarter-pack" href="${q.zip}" download="${q.zipName}">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42l2.3 2.3V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z"/></svg>
              下载整包</a>` : ""}
            <span class="quarter-count">${q.items.length} 份</span>
          </div>
          <div class="quarter-body" hidden>
            <div class="table-wrap">
              <table class="rate-table">
                <thead>
                  <tr>
                    <th>文件名</th>
                    <th>文件类型</th>
                    <th>文件大小</th>
                    <th>下载</th>
                  </tr>
                </thead>
                <tbody>${q.items.map(it => rowHTML(it, cat.category)).join("")}</tbody>
              </table>
            </div>
          </div>
        </div>`).join("");
      return `
      <section class="section">
        <div class="section-head">
          <h2>${cat.category}</h2>
          <span class="count">${total} 份</span>
        </div>
        ${quartersHTML}
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
  renderPDF(file);
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
  if (t) t.textContent = "腾讯广告刊例";
  window.RatecardBoard.render("腾讯视频");
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

