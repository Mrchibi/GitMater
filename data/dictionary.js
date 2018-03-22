//菜单及功能
var rightList = {
    menus: [
        {
            id: 'm_PersonInfoId', name: 'm_PersonInfo', label: '人员信息', childens: [
            { id: 'm_Person_Edit_Id', name: 'm_Person_Edit', label: '人员编辑', childens: [] },
            { id: 'm_Person_Query_Id', name: 'm_Person_Query', label: '人员查询', childens: [] },
            { id: 'm_Person_ADVQuery_Id', name: 'm_Person_ADVQuery', label: '高级查询', childens: [] },
            { id: 'm_Person_Relation_Id', name: 'm_Person_Relation', label: '人员关系', childens: [] }
        ]
        },
        {
            id: 'm_HouseInfoId', name: 'm_HouseInfo', label: '房屋信息', childens: [
            { id: 'm_House_Edit_Id', name: 'm_House_Edit', label: '房屋录入', childens: [] },
            { id: 'm_Build_Edit_Id', name: 'm_Build_Edit', label: '楼房录入', childens: [] },
            { id: 'm_House_Query_Id', name: 'm_House_Query', label: '房屋查询', childens: [] },
            { id: 'm_House_Show_Id', name: 'm_House_Show', label: '房屋显示', childens: [] }
        ]
        },
        {
            id: 'm_DrawId', name: 'm_HouseInfo', label: '标绘管理', childens: [
            { id: 'm_Draw_Tool_Id', name: 'm_Draw_Tool', label: '标绘工具', childens: [] },
            { id: 'm_Draw_Clear_Id', name: 'm_Draw_Clear', label: '清除', childens: [] },
        ]
        },
        {
            id: 'm_ZoneId', name: 'm_ZoneInfo', label: '电子围栏', childens: [
            { id: 'm_Zone_Edit_Id', name: 'm_Zone_Edit', label: '电子围栏', childens: [] },
            { id: 'm_Zone_Info_Id', name: 'm_Zone_Info', label: '告警记录', childens: [] },
        ]
        },
        {
            id: 'm_ControlInfoId', name: 'm_ControlInfo', label: '防控信息', childens: [
            { id: 'm_Event_Id', name: 'm_Event', label: '事件管理', childens: [] },
        ]
        },
        {
            id: 'm_AskId', name: 'm_AskInfo', label: '走访入户', childens: [
            { id: 'm_Ask_Record_Id', name: 'm_Ask_Record', label: '走访记录', childens: [] },
            { id: 'm_Ask_Manage_Id', name: 'm_Ask_Manage', label: '走访管理', childens: [] },
        ]
        },
        {
            id: 'm_SettingId', name: 'm_SettingInfo', label: '系统设置', childens: [
            { id: 'm_SPP_Manage_Id', name: 'm_SPP_Manage', label: '特殊人员信息管理', childens: [] },
            { id: 'm_Loc_Id', name: 'm_Loc', label: '位置配置', childens: [/*
             { id: 'm_Loc1_Id', name: 'm_Loc1', label: '位置配置1', childens: [] },
             { id: 'm_Loc2_Id', name: 'm_Loc2', label: '位置配置2', childens: [] }*/
            ]
            },
            { id: 'm_UPD_Id', name: 'm_UPD', label: '数据更新状态', childens: [] },
            { id: 'm_User_Id', name: 'm_User', label: '账户管理', childens: [] },
            { id: 'm_Address_Id', name: 'm_Address', label: '地址维护', childens: [] },
            { id: 'm_PWD_Id', name: 'm_PWD', label: '修改密码', childens: [] },
            { id: 'm_Data_Id', name: 'm_Data', label: '数据整理', childens: [] },
            { id: 'm_About_Id', name: 'm_About', label: '关于', childens: [] },
        ]
        }
    ],
    layers: [
        {
            id: 'l_BaseInfoId', name: 'l_BaseInfo', label: '基本情况', image: '\img.png', childens: [
            {
                id: 'l_KeyPoint_ID', name: 'l_KeyPoint', label: '重点目标', image: '\img.png', childens: [
                { id: 'l_XIANG_ID', name: 'l_XIANG', label: '乡政府', image: '\img.png', childens: [] },
                { id: 'l_CUN_ID', name: 'm_House_Query', label: '村委会', image: '\img.png', childens: [] },
                { id: 'l_ZHONGXUE_Id', name: 'm_House_Show', label: '中学', image: '\img.png', childens: [] }
            ]
            }

        ]


        },
        {
            id: 'l_LayerInfoId', name: 'l_BaseInfo', label: '图层数据', image: '\img.png', childens: [
            {
                id: 'l_Layer1_ID', name: 'l_Layer1', label: '图层1', image: '\img.png', childens: [
                {
                    id: 'l_Layer11_ID', name: 'l_Layer11', label: '图层11', image: '\img.png', childens: [

                    {
                        id: 'l_Layer111_ID', name: 'l_BaseInfo', label: '兴趣图层', image: '\img.png', childens: [
                        {
                            id: 'l_POIId10_ID', name: 'l_POI0Id', label: '重点目标', image: '\img.png', childens: [
                            { id: 'l_POIId11_Id', name: 'l_POIId11', label: 'POI目标11', image: '\img.png', childens: [] },
                            { id: 'l_POIId12_Id', name: 'l_POIId12', label: 'POI目标12', image: '\img.png', childens: [] },
                            { id: 'l_POIId13_Id', name: 'l_POIId13', label: 'POI目标13', image: '\img.png', childens: [] }
                        ]
                        }

                    ]


                    },
                    {
                        id: 'l_Layer112_ID', name: 'l_BaseInfo', label: '兴趣图层', image: '\img.png', childens: [
                        {
                            id: 'l_POIId20_ID', name: 'l_POIId', label: '重点目标', image: '\img.png', childens: [
                            { id: 'l_POIId21_Id', name: 'l_POIId21', label: 'POI目标21', image: '\img.png', childens: [] },
                            { id: 'l_POIId22_Id', name: 'l_POIId22', label: 'POI目标22', image: '\img.png', childens: [] },
                            { id: 'l_POIId23_Id', name: 'l_POIId23', label: 'POI目标23', image: '\img.png', childens: [] }
                        ]
                        }

                    ]


                    }

                ]
                },
                { id: 'l_Layer12_ID', name: 'l_Layer12', label: '图层12', image: '\img.png', childens: [] },
                { id: 'l_Layer13_ID', name: 'l_Layer13', label: '图层13', image: '\img.png', childens: [] }
            ]
            }

        ]


        },
        {
            id: 'l_POIId', name: 'l_BaseInfo', label: '兴趣图层', image: '\img.png', childens: [
            {
                id: 'l_POIId_ID', name: 'l_POIId', label: '重点目标', image: '\img.png', childens: [
                { id: 'l_POIId1_Id', name: 'l_POIId1', label: 'POI目标1', image: '\img.png', childens: [] },
                { id: 'l_POIId2_Id', name: 'l_POIId2', label: 'POI目标2', image: '\img.png', childens: [] },
                { id: 'l_POIId3_Id', name: 'l_POIId3', label: 'POI目标3', image: '\img.png', childens: [] }
            ]
            }

        ]


        }

    ],
    tools: [
        { id: 't_Measure_Lenght_ID', name: 't_Measure_Lenght', label: '测量长度', image: '\img.png', childens: [] },
        { id: 't_Measure_Area_ID', name: 't_Measure_Area', label: '测量面积', image: '\img.png', childens: [] },
        { id: 't_Measure_Clear_ID', name: 't_Measure_Clear', label: '清除测量结果', image: '\img.png', childens: [] },
        { id: 't_Editable_ID', name: 't_Editable', label: '编辑状态', image: '\img.png', childens: [] },
        { id: 't_Fullview_ID', name: 't_Fullview', label: '初始位置', image: '\img.png', childens: [] }
    ]
}

//人员基本信息
var personInfo = {
    baseInfo: {/*基本信息*/
        identitycard: '身份证号',
        usernumber: '户号',
        name: '姓名',
        relationhouseholder: '与户主关系',
        birthday: '生日',
        sex: '性别',
        nativeplace: '民族',
        politicaloutlook: '政治面貌',
        regilion: '宗教信仰',
        telephone: '',
        culturaldegree: '文化程度',
        occuption: '职业',
        position: '职务',
        specialoccuption: '特殊职业技能',
        houseAddress: '家庭住址',
        serveradd: '服务处所',
        zone: '所属区域'
    },
    floatingInfo: {/*流动人口信息*/
        inorout: "流动方式",
        livertype: "居住方式",
        floatarea: "流动区域",
        floattype: "流动原因",
        floattime: "流动时间"

    },
    registrationInfo: {/*户籍相关信息*/
        familytype: '家庭类别',
        maritalstatus: '婚姻状况',
        military: '兵役状况',
        bloodtye: '血型',
        height: '身高',
        residencewhether: '户口是否应注销',
        reasontype: '应销未销原因',
        notsetreason: '未落户原因',
        birthadd: '出生地',
        nativeplace: '籍贯'
    },
    unsafeInfo: {
        unsafeperson: {/*涉稳人员信息*/
            effectevaluation: '效果评估',
            performance: '现实表现',
            passport: '护照编号',
            outboundRecord: '出境记录',
            criminalRecord: '犯罪记录',
            personUnsafeType: '涉稳人员类别(AA,AB,AC...)'

        },
        unsafegoods: {/*涉稳物品信息*/
            dangerousexplosiveitem: '危爆物品',
            controlledknife: '管制刀具',
            fertilizer: '化肥',
            illegalpublication: '非法印刷品',
            electricwelding: '电焊机',
            cutterbar: '切割机',
            water: '用水',
            gascylinder: '液化气钢瓶',
            pesticide: '农药',
            matchstick: '火柴数量',
            secondhandphone: '二手手机',
            electricity: '用电量',
            sugar: '白砂糖',
            gascylindernumber: '液化气钢瓶是否有编号',
            secondhandcarwhether: '是否有二手 汽车',
            gasoilwhether: '是否有零散汽油，煤油，柴油',
            sportequipmentwhether: '是否有哑铃，拳击手套等',
            satellitewhether: '是否有卫星接收器',
            sellhousewhether: '是否出售耕地和房屋',
            knifenumber: '家用刀具是否有编号'
        }


    }


}
//民族
var nationality = ['维吾尔族', '汉族', '哈萨克族', '俄罗斯族', '回族', '壮族', '满族', '苗族', '土家族', '彝族', '蒙古族', '藏族', '布依族', '侗族', '瑶族', '朝鲜族', '白族', '哈尼族', '黎族', '傣族', '畲族', '傈僳族', '仡佬族', '东乡族', '高山族', '拉祜族', '佤族', '纳西族', '羌族', '土族', '仫佬族', '锡伯族', '柯尔克孜族', '达斡尔族', '景颇族', '毛南族', '撒拉族', '布朗族', '塔吉克族', '阿昌族', '普米族', '鄂温克族', '怒族', '京族', '基诺族', '德昂族', '保安族', '裕固族', '乌孜别克族', '门巴族', '鄂伦春族', '独龙族', '塔塔尔族', '赫哲族', '珞巴族'];
//宗教 信仰
var regilion = ['无宗教信仰', '伊斯兰教', '佛教', '基督教', '道教', '天主教'];
//管控类别
var evaluateclass = ['重点管控类', '日常管理类', '一般关注类'];
//未落户原因
var notsetreason = ['其他', '出生未报户', '违计生育', '超计生育', '非婚生育', '无收养手续', '在非医疗生育', '长期在外，户籍被注销', '持证或证件丢失未落户', '被宣告失踪或者宣告死亡后户口被注销人员', '农村地区因婚嫁被注销原籍户口人员', '我国公民与外国人，无户籍非婚生育的无户籍人员'];
//家庭类别
var familytype = ['一般户', '重点户', '放心户', '重点关注户', '重点管控户'];
//婚姻状况
var maritalstatus = ['未婚', '已婚', '离异', '丧偶'];
//服兵役状况
var military = ['未服兵役', '已服兵役'];
//血型
var bloodtye = ['A', 'B', 'AB', 'O'];
//户口是否应注销
var residencewhether = ['是', '否'];
//未销原因
var reasontype = ['死亡未注销', '迁出未注销', '参军未注销', '取得外囯国籍未注销', '其他原因未注销'];
//效果评估
var effectevaluation = ['好', '较好', '差', '较差'];
//现实表现
var realityexpression = ['好', '较好', '差', '较差'];
//政治面貌
var politicaloutlook = ['群众', '团员', '党员', '民主党派成员'];
//文化程度
var culturaldegree = ['文盲', '小学', '中学', '高职', '大专', '本科', '研究生', '博士', '学龄前儿童'];
//和户主 之间的关系
var relationhouseholder = ['户主', '配偶', '夫', '妻', '子', '独生子', '长子', '次子', '三子', '四子', '五子', '养子或继子', '女婿', '其他儿子', '女', '独生女', '长女', '二女', '三女', '四女', '五女', '养女', '儿媳', '其他女儿', '孙子', '孙女', '外孙子', '外孙女', '孙媳妇或外孙媳妇', '孙女婿或外孙女婿', '曾孙子或曾外孙子', '曾孙女或曾外孙女', '其他孙子或外孙子', '父亲', '母亲', '公公', '婆婆', '岳父', '岳母', '养母或继父', '继父或养母', '其他父母关系', '祖母', '外祖母', '祖父', '外祖父', '兄', '嫂', '弟媳', '迁出或死亡'];
//职业，工作
var occuption = ['农民', '学生', '国家干部', '村干部', '企业职工', '个体经营户', '外出务工经商人员', '驾驶员', '其他'];
//特殊技能
var spoccuption = ['驾车', '驾船', '驾机', '射击', '爆破', '枪械', '绘画', '书法', '摄影', '摄像', '表演', '雕刻', '通讯技术', '计箅机技术', '法律咨询', '心理咨询', '医疗救护', '武术', '维修', '外进', '民族进言', '手语', '其他'];
//是否
var YorN = ["是", "否"];
//流动方式
var inorout = ['流入', '流出'];
//居住方式
var livertype = ['单身租住', '家庭租住', '合伙租住', '集体租住', '合伙式租住'];
//流动区域
var floatarea = ['乡镇内', '区县内', '地市内', '省内', '跨省', '出国', '去向不明'];
//流动原因
var floatype = ['务农', '务工', '经商', '从事服务行业', '因公', '借读培训', '治疗养病', '家政', '投靠亲友', '探亲访友', '购房', '出嫁', '其他'];
//流动时间
var floattime = ['短期', '长期', '间歇'];
//所属区域
var zone = ['村，小区'];
//涉稳人员类别
var personUnsafeType = {
    AA: '普通人员',
    AB: '被打击处理人员',
    AC: '教育转化人员',
    AD: '重点人员',
    AE: '宗教人士',
    AF: '有宗教知识无宗教职务人员',
    AG: '“四老”人员',
    AH: '困难群众',
    AI: '基层干部',
    AJ: '信访群众',
    AK: '农民党员',
    AL: '刑满释放人员',
    AM: '特殊群体',
    AN: '严打在押人员',
    AO: '严打在押分流人员',
    AP: '历年来涉暴恐',
    AQ: '非法出境',
    AR: '持护照出境逾期未归',
    AS: '去向不明',
    AT: '境（疆）外回流人员',
    AU: '参加“IS、东伊运”组织',
    AV: '持宗教极端思想“瓦哈比观点”人员',
    AW: '阿·买合苏木弟子',
    AX: '野阿訇',
    AY: '变卖家产举家外出人员',
    AZ: '非正常理由辍学学生',
    BA: '“80、90、00”后群体中有极端倾向或异常表现人员',
    BB: '历年来被击毙、判处死刑、死缓、无期徒刑',
    BC: '历年来参加非法宗教活动被打击和宽大处理',
    BD: '玉石群体中一些所谓“名流、富人”的不法分子',
    BE: '掌握制枪制暴、焊接技术、易接触化工原料的可疑人员',
    BF: '涉“8.9”、“8.30”、“7.5”事件人员及亲属',
    BG: '经常沉迷于网络的青年群体',
    BH: '死亡人员'
};

//人员查询，请求时发送的JSon，返回的结果为personInfo
var queryPerson = {
    unsafePerson:{label:'涉稳人员',values:'true|false'},//涉稳人员
    floatPerson: {label:'流动人口',values:'true|false'},//流动人口
    identitycard: '身份证号',
    name: '姓名',
    houseAddress: '房屋地址'

};
//性别
var sexs=['男','女'];

//人员基本信息
//var personUI = {
//    baseInfo: {/*基本信息*/
//        identitycard:{label:'身份证号'},length:18},
//        usernumber:{label:'户号'},
//        name:{label:'姓名'},
//        relationhouseholder:{label:'与户主关系',values:relationhouseholder},
//        birthday:{label:'生日'},
//        sex:{label:'性别',values:sexs},
//        nativeplace:{label:'民族',values:nationality},
//        politicaloutlook:{label:'政治面貌',values:politicaloutlook},
//        regilion:{label:'宗教信仰',values:regilion},
//        telephone:{label:'电话号码'},
//        culturaldegree:{label:'文化程度',values:culturaldegree},
//        occuption:{label:'职业',values:occuption},
//        position:{label:'职务'},
//        specialoccuption:{label:'特殊职业技能',values:spoccuption},
//        houseAddress:{label:'家庭住址'},
//        serveradd:{label:'服务处所'},
//        zone:{label:'所属区域'
//    },
//    floatingInfo: {/*流动人口信息*/
//        inorout:   {label:'流动方式'},
//        livertype: {label:'居住方式'},
//        floatarea: {label:'流动区域'},
//        floattype: {label:'流动原因'},
//        floattime: {label:'流动时间'}

//    },
//    registrationInfo: {/*户籍相关信息*/
//        familytype:{label:'家庭类别',values:familytype},
//        maritalstatus:{label:'婚姻状况',values:maritalstatus},
//        military:{label:'兵役状况',values:military},
//        bloodtye:{label:'血型',values:bloodtye},
//        height:{label:'身高'},
//        residencewhether:{label:'户口是否应注销',values:residencewhether},
//        reasontype:{label:'应销未销原因'},
//        notsetreason:{label:'未落户原因'},
//        birthadd:{label:'出生地'},
//        nativeplace:{label:'籍贯'
//        },
//        unsafeInfo: {
//            unsafeperson: {/*涉稳人员信息*/
//                effectevaluation:{label:'效果评估'},
//                performance:{label:'现实表现'},
//                passport:{label:'护照编号'},
//                outboundRecord:{label:'出境记录'},
//                criminalRecord:{label:'犯罪记录'},
//                personUnsafeType:{label:'涉稳人员类别(AA,AB,AC...)'

//                },
//                unsafegoods: {/*涉稳物品信息*/
//                    dangerousexplosiveitem:{label:'危爆物品'},
//                    controlledknife:{label:'管制刀具'},
//                    fertilizer:{label:'化肥'},
//                    illegalpublication:{label:'非法印刷品'},
//                    electricwelding:{label:'电焊机'},
//                    cutterbar:{label:'切割机'},
//                    water:{label:'用水'},
//                    gascylinder:{label:'液化气钢瓶'},
//                    pesticide:{label:'农药'},
//                    matchstick:{label:'火柴数量'},
//                    secondhandphone:{label:'二手手机'},
//                    electricity:{label:'用电量'},
//                    sugar:{label:'白砂糖'},
//                    gascylindernumber:{label:'液化气钢瓶是否有编号'},
//                    secondhandcarwhether:{label:'是否有二手 汽车'},
//                    gasoilwhether:{label:'是否有零散汽油，煤油，柴油'},
//                    sportequipmentwhether:{label:'是否有哑铃，拳击手套等'},
//                    satellitewhether:{label:'是否有卫星接收器'},
//                    sellhousewhether:{label:'是否出售耕地和房屋'},
//                    knifenumber:{label:'家用刀具是否有编号'
//                    }


//                }
//            }

var   baseInfo={/*基本信息*/
    identitycard:{label:'身份证号',data_length:18},
    usernumber:{label:'户号'},
    name:{label:'姓名'},
    relationhouseholder:{label:'与户主关系',values:relationhouseholder},
    birthday: { label: '生日', type: 'date', class: 'datepicker' },
    sex:{label:'性别',values:sexs},
    nativeplace:{label:'民族',values:nationality},
    politicaloutlook:{label:'政治面貌',values:politicaloutlook},
    regilion:{label:'宗教信仰',values:regilion},
    telephone:{label:'电话号码'},
    culturaldegree:{label:'文化程度',values:culturaldegree},
    occuption:{label:'职业',values:occuption},
    position:{label:'职务'},
    specialoccuption:{label:'特殊职业技能',values:spoccuption},
    houseAddress:{label:'家庭住址'},
    serveradd:{label:'服务处所'},
    zone:{label:'所属区域'}
};
var floatInfo = {/*流动人口信息*/
    inorout: { label: '流动方式', values: inorout },
    livertype: { label: '居住方式', values: livertype },
    floatarea: { label: '流动区域', values: floatarea },
    floattype: { label: '流动原因', values: floatype },
    floattime: { label: '流动时间', values: floattime }

};
var   registrationInfo= {/*户籍相关信息*/
    familytype:{label:'家庭类别',values:familytype},
    maritalstatus:{label:'婚姻状况',values:maritalstatus},
    military:{label:'兵役状况',values:military},
    bloodtye:{label:'血型',values:bloodtye},
    height:{label:'身高'},
    residencewhether:{label:'户口是否应注销',values:residencewhether},
    reasontype: { label: '应销未销原因', values: reasontype },
    notsetreason: { label: '未落户原因', values: notsetreason },
    birthadd:{label:'出生地'},
    origin: { label: '籍贯' }
};
var unsafeInfo = {
    unsafeperson: {/*涉稳人员信息*/
        effectevaluation: { label: '效果评估', values: effectevaluation },
        performance: { label: '现实表现', values: realityexpression },
        passport: { label: '护照编号' },
        outboundRecord: { label: '出境记录' },
        criminalRecord: { label: '犯罪记录' },
        personUnsafeType: { label: '涉稳人员类别', lists: personUnsafeType }

    },
    unsafegoods: {/*涉稳物品信息*/
        dangerousexplosiveitem: { label: '危爆物品' },
        controlledknife: { label: '管制刀具' },
        fertilizer: { label: '化肥' },
        illegalpublication: { label: '非法印刷品' },
        electricwelding: { label: '电焊机' },
        cutterbar: { label: '切割机' },
        water: { label: '用水' },
        gascylinder: { label: '液化气钢瓶' },
        pesticide: { label: '农药' },
        matchstick: { label: '火柴数量' },
        secondhandphone: { label: '二手手机' },
        electricity: { label: '用电量' },
        sugar: { label: '白砂糖' },
        gascylindernumber: { label: '液化气钢瓶是否有编号', values: YorN },
        secondhandcarwhether: { label: '是否有二手 汽车', values: YorN },
        gasoilwhether: { label: '是否有零散汽油，煤油，柴油', values: YorN },
        sportequipmentwhether: { label: '是否有哑铃，拳击手套等', values: YorN },
        satellitewhether: { label: '是否有卫星接收器', values: YorN },
        sellhousewhether: { label: '是否出售耕地和房屋', values: YorN },
        knifenumber: { label: '家用刀具是否有编号', values: YorN }
    }


};



