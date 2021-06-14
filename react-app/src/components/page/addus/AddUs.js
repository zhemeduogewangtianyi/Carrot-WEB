import React,{Component} from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

class AddUs extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {


        return (
            <Typography>

                <Divider />

                <Title>介绍</Title>
                <Paragraph>
                    现如今技术发展速度飞快，各种<Text strong> 前端、后端、服务端 </Text>的新技术层出不穷，很多时候，遇到问题，
                </Paragraph>
                <Paragraph>
                    一份有效的资料和信息是非常宝贵且难得的。我们不是世界拯救者，也不是黑客大佬，更不是科学家。
                </Paragraph>
                <Paragraph>
                    <Text strong>我们只想用平时的点滴，来给大家提供方便。</Text>
                </Paragraph>
                <Paragraph>
                    如果你也怀揣着 <Text strong> 惠人达己 </Text>的想法，可以加入我们一起发现问题，解决问题！<Text strong> 期待你的到来！ </Text>
                </Paragraph>

                <Divider />

                <Title level={2}>加入方式</Title>
                <Divider />
                <Paragraph>
                    <Title level={3}>QQ群：601438374</Title>

                </Paragraph>

            </Typography>
        );
    }

}

export default AddUs;