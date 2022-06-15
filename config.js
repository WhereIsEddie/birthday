
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "To My Dear 文霞",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "面朝大海",
        "纵使泪别二十七",
        "童颜仍需过六一",
        "光阴需要有印记",
        "年龄背锅莫在意",
        "愿虽一直被你欺",
        "能换呲牙笑嘻嘻",
        "趴地堵门能吃鸡",
        "还能再修热水器",
        "入睡只需把眼咪",
        "让梦随风夜郎西",
        "缺个女主薛薛你",
        "不日生成婚礼纪",
        "啵了个啵",
        "Yours",
        "Always",
        "Old Eddie",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "面朝大海": "./imgs/ss.jpg",
        "童颜": "./imgs/sss.png",
        "真爱永恒": "./imgs/sss.png",
        "啵了个啵": "./imgs/sss.png",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "别点我",
        play: "辣个男银",
        bannar_coming: "Ta Lǎi Le",
        balloons_flying: "纯嘴吹的",
        cake_fadein: "芋泥夹心安排上",
        light_candle: "逐渐年轻的小火焰",
        wish_message: "生日快乐",
        story: "Love Letter FOR YOU",
    }
};
