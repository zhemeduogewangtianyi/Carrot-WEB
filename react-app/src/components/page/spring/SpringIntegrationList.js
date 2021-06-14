import React,{Component} from 'react';
import axios from "axios";
import {Button, Card, List, Skeleton} from "antd";

const count = 5;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class SpringIntegrationList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            initLoading: true,
            loading: false,
            data: [],
            list: [],
        };
    }

    componentDidMount() {
        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res.data.results,
                list: res.data.results,
            });
        });
    }

    getData = callback => {
        axios.get(fakeDataUrl,{headers : {
                "contentType":"application/json"
            }}).then((res) => {
            callback(res);
        }).catch((err)=> {
            throw err;
        })
    };

    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data ? this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))) : this.state.data,
        });
        this.getData(res => {
            const data = this.state.data ? this.state.data.concat(res.data.results) : this.state.data;
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {
                    window.dispatchEvent(new Event('resize'));
                },
            );
        });
    };

    render() {
        const { initLoading, loading, list } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={this.onLoadMore}>loading more</Button>
                </div>
            ) : null;

        const gridStyle = {
            width: '25%',
            textAlign: 'center',
        };

        return (
            <List
                className="demo-loadmore-list"
                style={{marginLeft:"20%",marginRight:"20%",marginTop:"2%"}}
                grid={{ gutter: 16, column: 1 }}
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                size={"default"}
                renderItem={item => (

                    <List.Item
                        grid={{ gutter: 16, column: 1 }}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <div>
                                <Card title={item.gender}>
                                    <Card.Meta description={item.email} />

                                </Card>
                            </div>
                        </Skeleton>
                    </List.Item>

                )}
            />
        );
    }

}

export default SpringIntegrationList;