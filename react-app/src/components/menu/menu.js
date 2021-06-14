import Index from "../page/index";
import SpringIntegrationList from "../page/spring/SpringIntegrationList";
import PluginList from "../page/plugin/PluginList";
import BugsList from "../page/bugs/BugsList";
import ArticleList from "../page/article/ArticleList";
import ProjectList from "../page/project/ProjectList";
import WeChatList from "../page/weChat/WeChatList";
import AddUs from "../page/addus/AddUs";

export const menus = [
    {
        path : "/",
        breadcrumbName : "首页",
        component : Index,
        icon : "home"
    },
    {
        path : "/integration",
        breadcrumbName : "与 Spring 整合",
        icon: "cloud",
        component : SpringIntegrationList,
    },
    {
        path : "/plugin",
        breadcrumbName : "插件",
        icon: "pie-chart",
        component : PluginList,
    },
    {
        path : "/bugs",
        breadcrumbName : "BUG",
        icon: "pie-chart",
        component : BugsList,
    },
    {
        path : "/skill",
        breadcrumbName : "奇技淫巧",
        icon: "pie-chart",
        children : [
            {
                path : "/article",
                breadcrumbName: "文章",
                component : ArticleList
            },
            {
                path : "/project",
                breadcrumbName: "项目",
                component : ProjectList
            },
            {
                path : "/weChat",
                breadcrumbName: "大牛公众号",
                component : WeChatList
            },
        ]
    },
    {
        path : "/addUs",
        breadcrumbName : "加入我们",
        icon: "phone",
        component: AddUs
    }
]