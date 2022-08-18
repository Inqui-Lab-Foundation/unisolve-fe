import React from "react";

import Layout from "../../Admin/Layout";

// import { Dropdown } from "react-bootstrap";
// import { BsChevronRight, BsFilter, BsPlusLg } from "react-icons/bs";
// import { HiDotsHorizontal } from "react-icons/hi";
// import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
// import { BreadcrumbComp } from "../../stories/Breadcrumb/BreadcrumbComp";
import PageConstruction from "../../components/PageUnderConstrcution";
// const { TabPane } = Tabs;

const TicketsPage = () => {
    // const callback = (key) => {};
    
   
    

    // const typeProps1 = {
    //   name: "type: All",

    //   options: [
    //     { name: "type: All", path: "" },
    //     { name: "type: 1", path: "" },
    //     { name: "type: 2", path: "" },
    //   ],
    // };
    return (
        <Layout>
            <PageConstruction />
            {/* <Container className="ticket-page mb-50">
        <Row className="mt-5 pt-5">
          <h2>Manage Sessions</h2>
          <div className="ticket-data">
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="All" key="1">
                <TicketDataTable {...TableProps}   />
              </TabPane>
              <TabPane tab="Students" key="2">
                <TicketDataTable {...TableOpenProps} />
              </TabPane>
              <TabPane tab="Mentors" key="3">
                <TicketDataTable {...TableSolvedProps} />
              </TabPane>
              <TabPane tab="Evaluators" key="4">
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
