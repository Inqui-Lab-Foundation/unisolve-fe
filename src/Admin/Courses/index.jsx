import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import { Link, withRouter } from "react-router-dom";
import "./style.scss";
// import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import {
// BsChevronRight,
// BsFilter,
// BsLayoutTextSidebarReverse,
} from "react-icons/bs";
// import { RiAwardFill } from "react-icons/ri";
import { ImageCardComp } from "../../stories/ImageCard/ImageCard";
// import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
import Layout from "../../Admin/Layout";
// import { Button } from "../../stories/Button";
// import { BsPlusLg } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { getAdminCoursesList } from "../../redux/actions";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
// import { ConsoleSqlOutlined } from "@ant-design/icons";
// import hello from "../../media/logo-rect.svg";
const Courses = (props) => {
    const history = useHistory();
    const [lists, setLists] = useState([]);
    const language = useSelector(state=>state?.admin?.adminLanguage);
    // const SearchProps = {
    //     placeholder: "Search Course",
    // };
    // const filterDropProps = {
    //     name: "Filter by",
    //     Icon: BsFilter,
    //     options: [
    //         { name: "Course - 1", path: "/playCourse" },
    //         { name: "Course - 2", path: "/playCourse" },
    //     ],
    // };
    // const ImageCardProps = {
    //     label: "ImageCardComp",
    //     imgUrl: "https://picsum.photos/318/180",
    //     title: "How can I improve self care with Ikigai?",
    //     count: "1,288 students",
    //     time: "5m",
    //     type: "Health",
    // };
    // const CoursesList = [
    //   {
    //     // text: "Courses to help you learn about",
    //     // title: "Inspiration",
    //     cardas: props.adminCoursesList && props.adminCoursesList.products,
    // const cards = [
    //     {
    //         label: "ImageCardComp",
    //         imgUrl:
    //     "https://www.bailinson-oleary.com/wp-content/uploads/2019/08/Child-Support.jpg",
    //         course_name: "Unisolve",
    //         description:
    //     "socially inclusive, economically vibrant, and environmentally sustainable, we need to nurture future leaders, changemakers, innovators, and entrepreneurs who can transform their communities and the world.",
    //     },
    //     {
    //         label: "ImageCardComp",
    //         imgUrl:
    //     "data:image/jpeg;base64,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",
    //         course_name: "Save Water",
    //         description:
    //     "Collect rain water during rainy season to use in toilet flush, watering plants, sprinkle in garden, etc. Using raw water like sea water or non-purified water in toilet is also good.",
    //     },
    //     {
    //         label: "ImageCardComp",
    //         imgUrl:
    //     "https://assets.thehansindia.com/h-upload/2020/03/02/950251-farmers.webp",
    //         course_name: "Farmers",
    //         description:
    //     "A farmer is a person who runs and works on a farm. Some farmers raise a variety of food crops, while others keep dairy cows and sell their milk.",
    //     },
    // ];
    //   },
    // ];
    const handleItem = (item) => {
        console.log("========00000000000000000000000000==", item);
        history.push({
            pathname: `/admin/playvideo/${item.course_id}`, 
            data: item,
        });

    // history.push({
    //   pathname: "/admin/add-course",
    //   item: item,
    // });
    };
    // console.log("adminCoursesList", props.adminCoursesList);
    useEffect(() => {
        props.getAdminCoursesListAction(language);
    }, [language]);
    useEffect(() => {
        let array = [];
        props.adminCoursesList && props.adminCoursesList.length &&
        props.adminCoursesList.map((item) => {
            let newVeriable = { label: "ImageCardComp" };
            let newArray = { ...item, ...newVeriable };
            array.push(newArray);
        });
        setLists(array);
    }, [props.adminCoursesList && props.adminCoursesList.length]);
    // console.log(props.adminCoursesList && props.adminCoursesList);
    console.log("============lists", lists);

    // course_id: 1;
    // created_at: null;
    // created_by: 1;
    // description: "";
    // label: "ImageCardComp";
    // status: "ACTIVE";
    // thumbnail: null;
    // title: "Unisolve";
    // updated_at: null;
    // updated_by: 1;

    return (
        <Layout>
            <Container>
                <Row className=" w-100 mt-5 pt-5   mb-50">
                    <Col md={12} lg={6}>
                        <h2 className="my-auto">Courses</h2>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="d-flex filter-drop w-100 pr-0">
                            <Row className="w-100">
                                {/* <Col md={5} lg={5}>
                  <InputWithSearchComp {...SearchProps} />
                </Col>
                <Col md={3} lg={3}>
                  <CommonDropDownComp {...filterDropProps} />
                </Col> */}
                                {/* <Col md={12} lg={12} className="text-right my-auto">
                  <Button
                    btnClass="primary"
                    size="small"
                    Icon={BsPlusLg}
                    label="Add New Course"
                    onClick={() => history.push("/admin/add-course")}
                  />
                </Col> */}
                            </Row>
                        </div>
                    </Col>
                </Row>
                {/* {props.adminCoursesList && props.adminCoursesList.products && ( */}
                <div className="courses-list ">
                    <div className="courses-list   pb-5">
                        {/* <p>{course.text}</p> */}
                        <div className="d-flex justify-content-between mb-3 mobile-view">
                            {/* <h2>{course.title}</h2> */}
                        </div>
                        <Row className=" mb-5 course-section">
                            {lists && lists.length
                                ? lists.map((item, index) => {
                                    // console.log(item);
                                    return (
                                        <ImageCardComp
                                            {...item}
                                            key={index}
                                            onClick={() => handleItem(item)}
                                            // onClick={() => history.push("/admin/playvideo")}
                                        />
                                    );
                                })
                                : "No Courses Found"}
                        </Row>
                        {/* <div>
              <img
                src={url + "/" + thumb}
                // className="card-img-top"
                // alt={item.course_name}
              />
            </div> */}
                    </div>
                </div>
                {/* </Col> */}
                {/* </Row> */}
            </Container>
        </Layout>
    );
};
// export default withRouter(Courses);
const mapStateToProps = ({ adminCourses }) => {
    const { adminCoursesList, loading, successDleteMessage } = adminCourses;
    return { adminCoursesList, loading, successDleteMessage };
};
export default connect(mapStateToProps, {
    getAdminCoursesListAction: getAdminCoursesList,
})(Courses);
