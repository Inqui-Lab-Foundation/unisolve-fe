import React from "react";
import PropTypes from "prop-types";
import "./imageCard.scss";
// import { FiEye } from "react-icons/fi";
// import { BsLayoutTextSidebarReverse } from "react-icons/bs";
// import { Avatar, Icon } from "antd";
import {
    // Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
} from "reactstrap";
export const ImageCardComp = ({
    // primary,
    // imgUrl,
    title,
    // text,
    // buttonName,
    // backgroundColor,
    // size,
    // label,
    // count,
    // time,
    // icon,
    // type,
    onClick,
    // course_name,
    description,
    // thumbnail,
    Thumbnail,
    // ...props
}) => {
    const url =
    "https://www.bailinson-oleary.com/wp-content/uploads/2019/08/Child-Support.jpg";
    const dec =
    "Health, according to the World Health Organization, is 'a state of complete physical, mental and social well-being and not merely the absence of disease and infirmity";
    return (
        <Col xs={12} sm={6} md={6} xl={3} className="mb-4">
            <Card className="cardComp h-100" onClick={onClick}>
                {Thumbnail != null ? (
                    <CardImg src={url + Thumbnail} className="card-img-top" alt={title} />
                ) : (
                    <CardImg src={url} className="card-img-top" alt={title} />
                )}
                <CardBody className="card-body">
                    <div className="card-counts">
                        {/* <p className="m-0">
              <FiEye className="my-auto" /> {count}
            </p>
            <p>{time}</p> */}
                    </div>
                    <CardTitle className="card-title">{title}</CardTitle>
                    <CardSubtitle className="courses-type">
                        {/* <Avatar icon={<BsLayoutTextSidebarReverse />} /> */}
                        {/* <Text numberOfLines={2}>{description}</Text> */}
                        {description != "" ? (
                            <p className="course-sub-overflow">
                                {/* {"".concat(...description).slice(0, 80)}... */}
                                {description}
                                <a
                                    className="read-more"
                                    // onClick={() => {
                                    //   this.handleLoansView(item);
                                    // }}
                                >
                                    {" "}
                                </a>
                            </p>
                        ) : (
                            <p>
                                {"".concat(...dec).slice(0, 50)}...
                                <a
                                    className="read-more"
                                    // onClick={() => {
                                    //   this.handleLoansView(item);
                                    // }}
                                >
                                    {" "}
                                </a>
                            </p>
                        )}
                    </CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    );
};
ImageCardComp.propTypes = {
    /**
   * Is this the principal call to action on the page?
   */
    primary: PropTypes.bool,
    /**
   * What background color to use
   */
    backgroundColor: PropTypes.string,
    /**
   * How large should the button be?
   */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
   * Button contents
   */
    label: PropTypes.string.isRequired,
    /**
   * Optional click handler
   */
    onClick: PropTypes.func,
};
ImageCardComp.defaultProps = {
    backgroundColor: null,
    imgUrl: "",
    primary: false,
    size: "medium",
    onClick: undefined,
    count: "1,288 students",
    time: "5m",
    icon: "",
    type: "",
};
