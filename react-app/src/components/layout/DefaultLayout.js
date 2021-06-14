import React,{Component} from "react";

import { Layout,Icon } from 'antd';
import CarrotMenu from "../menu/CarrotMenu";
import CarrotContent from "../content/CarrotContent";

const { Header, Content, Footer } = Layout;


class DefaultLayout extends Component {

    getUrl = () => {
        let url = window.location.href
        let len = url.indexOf('/#/')
        let source = url.substr(0,len)
        source += '/#/addUs';
        window.location.href=source;
    }

    render() {
        return (
            <div>

                <Layout>

                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

                        <div className="logo" />
                        <CarrotMenu />

                    </Header>

                    <Content style={{ padding: '0 50px', marginTop: 64 }}>

                        <CarrotContent style={{ background: '#fff', padding: 24, minHeight: 380 }} />

                    </Content>

                    <Footer style={{ textAlign: 'center' }}>

                        <p><Icon type="global" /><a onClick={this.getUrl}> 加入我们</a></p>
                        <Icon type="copyright" /> {new Date().getFullYear()} 萝卜头出品

                    </Footer>

                </Layout>

            </div>
        )
    }

}

export default DefaultLayout;