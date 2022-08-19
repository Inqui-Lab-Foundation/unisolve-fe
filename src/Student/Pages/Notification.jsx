import React from "react";
// import { Row, Col } from "react-bootstrap";
import "./notification.scss";
import { Tabs } from "antd";
import ListContent from "../../components/ListContent";
import Layout from "../Layout.jsx";
const { TabPane } = Tabs;

const Notification = () => {
    const callback = () => {};

    return (
        <Layout>
            <div className="notification-page">
                <h2>Notifications</h2>
                <div className="notification-data">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab=" All Notifications" key="1">
                            <ListContent />
                        </TabPane>
                        <TabPane tab="Unread" key="2">
                            <ListContent />
                        </TabPane>
                        <TabPane tab="Comments & Mentions" key="3">
                            <ListContent />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </Layout>
    );
};

export default Notification;
