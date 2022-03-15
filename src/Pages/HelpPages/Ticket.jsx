import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Tabs } from "antd";
import TicketDataTable from "../HelpPages/TicketDataTable";
import Layout from "../../Layout";

const { TabPane } = Tabs;

const TicketsPage = () => {
  const callback = (key) => {};

  return (
    <Layout>
      <div className="ticket-page">
        <h2>Tickets</h2>
        <div className="ticket-data">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="All tickets" key="1">
              <TicketDataTable />
            </TabPane>
            <TabPane tab="Open" key="2">
              <TicketDataTable />
            </TabPane>
            <TabPane tab="Solved" key="3">
              <TicketDataTable />
            </TabPane>
            <TabPane tab="Draft" key="4">
              <TicketDataTable />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default TicketsPage;
