import App from "../../App";
import React,{Component} from "react";
import {Icon,Menu} from "antd";
import {HashRouter, Link} from "react-router-dom";
import {menus} from "./menu";

export default class CarrotMenu extends Component {

    render() {

        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['']}
                style={{ lineHeight: '64px' }}
            >
                {
                    menus.map((item,index) => {

                        if(!item.children){
                            return (
                                <HashRouter>
                                    <span style={{marginRight:"5px",marginLeft:"44px"}}><Icon type={item.icon} /></span>
                                    <Link style={{color:"#c2c1c1"}} key={index} to={item.path} >
                                        {item.breadcrumbName}
                                    </Link>
                                </HashRouter>
                            )
                        }

                        return (
                            <Menu.SubMenu
                                style={{marginRight:"15px",marginLeft:"20px"}}
                                theme="dark"
                                key={item.path}
                                title={
                                    <span>
                                        <Icon type={item.icon} />
                                        <span>{item.breadcrumbName}</span>
                                    </span>
                                }
                            >
                                {
                                    item.children
                                        ?
                                        item.children.map((item,index) => {
                                            return (
                                                <Menu.Item key={item.path}>
                                                    <HashRouter>
                                                        <Link key={index} to={item.path} >
                                                            <span>{item.breadcrumbName}</span>
                                                        </Link>
                                                    </HashRouter>
                                                </Menu.Item>
                                            )
                                        })
                                        :
                                        null
                                }
                            </Menu.SubMenu>
                        )
                    })
                }

            </Menu>
        )

    }

}