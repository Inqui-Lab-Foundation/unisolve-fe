import React from 'react';
import '../Pages/notification.scss';
import { Tabs } from 'antd';
import ListContent from '../components/ListContent';
import Layout from './Layout';
const { TabPane } = Tabs;

const Notification = (props) => {
    console.log(props);
    const callback = () => {};

    // const notify =
    //   props.location && props.location.state && props.location.state.item;
    // console.log("notifu", notify);
    const notify = {
        notifyArrays:
            props.location && props.location.state && props.location.state.item
    };

    return (
        <Layout>
            <div className="notification-page">
                <h2>Notifications</h2>
                <div className="notification-data">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab=" All Notifications" key="1">
                            <ListContent {...notify} />
                        </TabPane>
                        <TabPane tab="Unread" key="2">
                            <ListContent {...notify} />
                        </TabPane>
                        <TabPane tab="Comments & Mentions" key="3">
                            <ListContent {...notify} />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </Layout>
    );
};

export default Notification;
