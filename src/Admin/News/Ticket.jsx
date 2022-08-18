import React from "react";
// import { Container, Row, Col } from "reactstrap";

// import TicketDataTable from "./TicketDataTable";
import Layout from "../../Admin/Layout";

// import { BreadcrumbComp } from "../../stories/Breadcrumb/BreadcrumbComp";
import PageConstruction from "../../components/PageUnderConstrcution";
// const { TabPane } = Tabs;

const TicketsPage = () => {
    // const callback = (key) => {};
   
   
    
    return (
        <Layout>
            <PageConstruction />
            {/* <Container className='ticket-page mb-50'>
        <Row className='mt-5 pt-5'>
          <h2>Manage News</h2>
          <div className='ticket-data'>
            <Tabs defaultActiveKey='1' onChange={callback}>
              <TabPane tab='All' key='1'>
                <TicketDataTable {...TableProps} />
              </TabPane>
              <TabPane tab='Students' key='2'>
                <TicketDataTable {...TableOpenProps} />
              </TabPane>
              <TabPane tab='Mentors' key='3'>
                <TicketDataTable {...TableSolvedProps} />
              </TabPane>
              <TabPane tab='Evaluators' key='4'>
                <TicketDataTable {...TableDraftProps} />
              </TabPane>
              <TabPane tab='New Categories' key='5'>
                <TicketDataTable {...NewCategoriesProps} />
              </TabPane>
            </Tabs>
          </div>
        </Row>
      </Container> */}
        </Layout>
    );
};

export default TicketsPage;
