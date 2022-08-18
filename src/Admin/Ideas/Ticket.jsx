import React from "react";
// import { Container, Row } from "reactstrap";
// import { Tabs } from "antd";
// import TicketDataTable from "./TicketDataTable";
import Layout from "../../Admin/Layout";


import PageConstruction from "../../components/PageUnderConstrcution";

// const { TabPane } = Tabs;

const TicketsPage = () => {
    // const callback = (key) => {};

    
   
    return (
        <Layout>
            <PageConstruction />
            {/* <Container className='ticket-page mb-50'>
        <Row className='mt-5 pt-5'>
          <h2>Ideas</h2>
          <div className='ticket-data'>
            <Tabs defaultActiveKey='1' onChange={callback}>
              <TabPane tab='All Ideas' key='1'>
                <TicketDataTable {...TableProps} />
              </TabPane>
              <TabPane tab='Latest Ideas' key='2'>
                <TicketDataTable {...TableOpenProps} />
              </TabPane>
              <TabPane tab='Under Evaluation' key='3'>
                <TicketDataTable {...TableSolvedProps} />
              </TabPane>
              <TabPane tab='Evaluation Completed' key='4'>
                <TicketDataTable {...TableDraftProps} />
              </TabPane>
            </Tabs>
          </div>
        </Row>
      </Container> */}
        </Layout>
    );
};

export default TicketsPage;
