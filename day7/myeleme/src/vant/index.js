import Vue from 'vue'
// 第三方组件


import {
    // 轮播图
    Swipe,
    SwipeItem,
    // 宫格
    Grid,
    GridItem,
    // 开关单元格
    SwitchCell,
    // 按钮
    Button,
    // 底部 
    Tabbar,
    TabbarItem,
    // 下拉菜单
    DropdownMenu,
    DropdownItem,
    // 选项卡
    Tab,
    Tabs,
    // 图标
    Icon,
    // 列表
    List,
    // 单元格
    Cell,
    CellGroup,
    // 粘性布局
    Sticky
} from 'vant';



export default () => {
    Vue.use(Grid).use(GridItem);
    Vue.use(SwitchCell);
    Vue.use(Button);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Tab).use(Tabs);
    Vue.use(Icon);
    Vue.use(List);
    Vue.use(Cell).use(CellGroup);
    Vue.use(Sticky);
}