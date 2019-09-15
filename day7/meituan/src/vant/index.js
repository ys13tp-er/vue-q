import Vue from 'vue'
// 第三方组件
// 搜索
import {
    Search,
    // 宫格
    Grid,
    GridItem,
    // 分割线
    Divider,
    // 下拉菜单
    DropdownMenu,
    DropdownItem,
    // 标签栏
    Tabbar,
    TabbarItem,
    // 输入框组建
    Field,
    List,
    // 单元格 
    Cell,
    CellGroup,
    // 商品卡片
    Card
} from 'vant';

export default () => {
    Vue.use(Search);
    Vue.use(Grid).use(GridItem);
    Vue.use(Divider);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Field);
    Vue.use(List);
    Vue.use(Cell).use(CellGroup);
    Vue.use(Card);
}