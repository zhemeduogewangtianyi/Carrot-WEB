import React, {Component} from 'react';
import {Tooltip, List, Card} from 'antd';


const {Meta} = Card;
const len = 30;

class Index extends Component {

    linkUrl = (url) => {
        window.location.href = url
    }

    render() {

        const data = [
            {
                title: '阿里云 OSS',
                img: "https://img.alicdn.com/imgextra/i3/O1CN01spwVI21tPxTbg2C9L_!!6000000005895-1-tps-3840-740.gif",
                describe: "阿里云对象存储OSS（Object Storage Service）是一款海量、安全、低成本、高可靠的云存储服务。",
                link: "https://help.aliyun.com/document_detail/31883.html?spm=a2c4g.11186623.6.595.6b6b2768bm8REg"
            },
            {
                title: '阿里云 MaxCompute(ODPS)',
                img: "https://img.alicdn.com/imgextra/i3/O1CN01spwVI21tPxTbg2C9L_!!6000000005895-1-tps-3840-740.gif",
                describe: "MaxCompute 是面向分析的企业级 SaaS 模式云数据仓库。",
                link: "https://help.aliyun.com/product/27797.html?spm=5176.7944453.J_7614544130.1.29e86aac4wZ0Zg"
            },
            {
                title: 'Spring',
                img: "https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg",
                describe: "Spring 使 Java 简单的。现代的。富有成效。反应性。云就绪",
                link: "https://spring.io"
            },
            {
                title: 'Tomcat',
                img: "http://tomcat.apache.org/res/images/tomcat.png",
                describe: "Tomcat是一个开源而且免费的jsp服务器，属于轻量级应用服务器。它可以实现JavaWeb程序的装载，是配置JSP（Java Server Page）和JAVA系统必备的一款环境。",
                link: "http://tomcat.apache.org/index.html"
            },
            {
                title: 'Dubbo',
                img: "https://dubbo.apache.org/zh/featured-background_hu33a6f756004fe4be8370ce630d659fa2_146971_1920x1080_fill_q75_catmullrom_top.jpg",
                describe: "Apache Dubbo 是一款高性能、轻量级的开源 Java 服务框架。",
                link: "https://dubbo.apache.org/zh/docs/"
            },
            {
                title: 'RocketMQ',
                img: "http://rocketmq.apache.org/assets/images/bright/rmq-home-page.png",
                describe: "Apache RocketMQ™ 是一个统一消息引擎、轻量级数据处理平台。",
                link: "http://rocketmq.apache.org/"
            },
            {
                title: 'Mybatis',
                img: "https://mybatis.org/images/mybatis-logo.png",
                describe: "MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。",
                link: "https://mybatis.org/mybatis-3/zh/index.html"
            },
            {
                title: 'Maven',
                img: "https://maven.apache.org/images/maven-logo-black-on-white.png",
                describe: "Apache Maven 是一个软件项目管理和理解工具。",
                link: "https://maven.apache.org/"
            },
            {
                title: 'Git',
                img: "https://git-scm.com/images/logo@2x.png",
                describe: "Git 是一个免费的开源 分布式版本控制系统，旨在快速高效地处理从小到大的所有项目。",
                link: "https://git-scm.com/"
            },
            {
                title: 'Redis',
                img: "https://redis.io/images/redislabs.png",
                describe: "Redis 是一种开源（BSD 许可）、内存中数据结构存储，用作数据库、缓存和消息代理。",
                link: "https://redis.io/"
            },
            {
                title: 'MySQL',
                img: "https://labs.mysql.com/common/logos/mysql-logo.svg?v2",
                describe: "MySQL 是世界上最流行的开源数据库。",
                link: "https://www.mysqlzh.com/"
            },
            {
                title: 'ZooKeeper',
                img: "https://zookeeper.apache.org/images/zookeeper_small.gif",
                describe: "Apache ZooKeeper 致力于开发和维护一个开源服务器，该服务器支持高度可靠的分布式协调。",
                link: "https://zookeeper.apache.org/index.html"
            },
        ];

        return (
            <div style={{marginTop: "2%"}}>
                <header>
                    <p style={{fontSize : "48px",color : "#000000"}}><b>官方文档</b></p>
                </header>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                    }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                style={{margin:"20px"}}
                                onClick={(link) => this.linkUrl(item.link)}
                                hoverable
                                cover={
                                    <img align="middle" style={{width: "100%", height: "150px"}} alt="example"
                                         src={item.img}/>
                                }
                            >
                                <Meta title={item.title} description={

                                    <Tooltip title={item.describe}>
                                        {
                                            item.describe.length >= len
                                                ?
                                                item.describe.substr(0, len) + "..."

                                                :
                                                item.describe
                                        }

                                    </Tooltip>

                                }/>

                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        )
    }

}

export default Index;