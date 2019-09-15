import Vue from 'vue'
// 第三方组件
// 搜索
import {
    // 布局容器
    Container,
    Aside,
    Main,
    Header,
    // 头像
    Avatar,
    // 行列
    Row,
    Col,
    // 分割线
    Divider,
    //导航
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Collapse,
    CollapseItem
} from 'element-ui';

export default () => {
    Vue.use(Container).use(Aside).use(Main).use(Header)
        .use(Avatar)
        .use(Row).use(Col)
        .use(Divider)
        .use(Collapse).use(CollapseItem)
        .use(Menu).use(Submenu).use(MenuItemGroup).use(MenuItem)
        .use(Collapse).use(CollapseItem);
}