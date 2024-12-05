const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"儿童信息","menuJump":"列表","tableName":"ertongxinxi"}],"menu":"儿童信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论","接种"],"menu":"疫苗信息","menuJump":"列表","tableName":"yimiaoxinxi"}],"menu":"疫苗信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"儿童接种","menuJump":"列表","tableName":"ertongjiezhong"}],"menu":"儿童接种管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"儿童接种史","menuJump":"列表","tableName":"ertongjiezhongshi"}],"menu":"儿童接种史管理"},{"child":[{"buttons":["新增","查看","修改","删除","预约","取消"],"menu":"医疗机构","menuJump":"列表","tableName":"yiliaojigou"}],"menu":"医疗机构管理"},{"child":[{"buttons":["新增","查看","修改","删除","取消预约"],"menu":"预约接种","menuJump":"列表","tableName":"yuyuejiezhong"}],"menu":"预约接种管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"疫苗信息列表","menuJump":"列表","tableName":"yimiaoxinxi"}],"menu":"疫苗信息模块"},{"child":[{"buttons":["查看"],"menu":"儿童接种史列表","menuJump":"列表","tableName":"ertongjiezhongshi"}],"menu":"儿童接种史模块"},{"child":[{"buttons":["查看"],"menu":"预约接种列表","menuJump":"列表","tableName":"yuyuejiezhong"}],"menu":"预约接种模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["删除","绑定","新增"],"menu":"儿童信息","menuJump":"列表","tableName":"ertongxinxi"}],"menu":"儿童信息管理"},{"child":[{"buttons":["查看","预约","查看评论","接种"],"menu":"疫苗信息","menuJump":"列表","tableName":"yimiaoxinxi"}],"menu":"疫苗信息管理"},{"child":[{"buttons":["预约","查看"],"menu":"儿童接种","menuJump":"列表","tableName":"ertongjiezhong"}],"menu":"儿童接种管理"},{"child":[{"buttons":["查看"],"menu":"儿童接种史","menuJump":"列表","tableName":"ertongjiezhongshi"}],"menu":"儿童接种史管理"},{"child":[{"buttons":["取消","预约"],"menu":"医疗机构","menuJump":"列表","tableName":"yiliaojigou"}],"menu":"医疗机构管理"},{"child":[{"buttons":["查看","取消预约"],"menu":"预约接种","menuJump":"列表","tableName":"yuyuejiezhong"}],"menu":"预约接种管理"},{"child":[{"buttons":["查看"],"menu":"取消预约","menuJump":"列表","tableName":"quxiaoyuyue"}],"menu":"取消预约管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"疫苗信息列表","menuJump":"列表","tableName":"yimiaoxinxi"}],"menu":"疫苗信息模块"},{"child":[{"buttons":["查看"],"menu":"儿童接种史列表","menuJump":"列表","tableName":"ertongjiezhongshi"}],"menu":"儿童接种史模块"},{"child":[{"buttons":["查看"],"menu":"预约接种列表","menuJump":"列表","tableName":"yuyuejiezhong"}],"menu":"预约接种模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;