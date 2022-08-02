import React, { useEffect, useState, Fragment } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Card,
  CardBody,
} from "reactstrap";
import { InputBox } from "../../stories/InputBox/InputBox";

import { DropDownWithSearch } from "../../stories/DropdownWithSearch/DropdownWithSearch";

import { Button } from "../../stories/Button";

import { useFormik } from "formik";
import * as Yup from "yup";
import { BreadcrumbTwo } from "../../stories/BreadcrumbTwo/BreadcrumbTwo";
import { RichText } from "../../stories/RichText/RichText";

import { useTranslation } from "react-i18next";
import Layout from "../Layout";
import { URL, KEY } from "../../constants/defaultValues";
import {
  getNormalHeaders,
  openNotificationWithIcon,
} from "../../helpers/Utils";

import AddFaqCategoryModal from "./AddFaqCategoryModal";

import plusIcon from "../../assets/img/plus-icon.svg";
import axios from "axios";

import { EditorState } from "draft-js";
import { useHistory, useLocation } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.min.js";

const AddNewFaq = () => {
  const headingDetails = {
    title: "Create a new FAQ",

    options: [
      {
        title: "Help",
        path: "/",
      },

      {
        title: "Add New FAQ",
        path: "/",
      },
    ],
  };
  const { t, i18n } = useTranslation();
  const [categoriesList, setCategoriesList] = useState([]);
  const [faqData, setFaqData] = useState({});
  const [showFaqCatModal, setShowFaqCatModal] = useState(false);
  const [defaultCategory, setDefaultCategory] = useState();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const history = useHistory();
  let query = useQuery();
  const faqID = query.get("faqid");
  console.log("🚀 ~ file: AddNewFaq.js ~ line 78 ~ AddNewFaq ~ faqID", faqID);

  // A custom hook that builds on useLocation to parse
  // the query string for you.
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const handleEditorChange = (state) => {
    setEditorState(state);
    formik.setFieldValue("answer", state.getCurrentContent().getPlainText());
  };

  const formik = useFormik({
    initialValues: {
      faq_category_id: faqData?.faq_category_id,
      question: faqData?.question,
      answer: faqData?.answer,
    },

    validationSchema: Yup.object({
      faq_category_id: Yup.string().required("required"),
      question: Yup.string().required("required"),
      answer: Yup.string().required("required"),
    }),

    onSubmit: async (values) => {
      const axiosConfig = getNormalHeaders(KEY.User_API_Key);
      return await axios
        .post(`${URL.getFaqList}`, JSON.stringify(values, null, 2), axiosConfig)
        .then((faqsubmitRest) => {
          if (faqsubmitRest?.status == 201) {
            // alert("Faq Created Sucessfully");
            openNotificationWithIcon("success", "Faq Created Sucessfully", "");
            formik.resetForm();
          }
        })
        .catch((err) => {
          return err.response;
        });
    },
  });

  const selectCategory = {
    label: "Select FAQ category e.g. Getting started, Badges, etc",
    options: categoriesList,
    className: "defaultDropdown",
  };

  const update = {
    label: "Save changes",
    size: "small",
    // btnClass: "default",
  };

  const discard = {
    label: "Discard",
    size: "small",
    btnClass: "primary",
  };

  const getFaqCategoryList = async () => {
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    return await axios
      .get(`${URL.getFaqCategoryList}`, axiosConfig)
      .then((categoryListRes) => {
        if (categoryListRes?.status == 200) {
          let dataValue = categoryListRes?.data?.data[0]?.dataValues;
          console.log("Data value ", dataValue);
          if (dataValue) {
            let categoriesOptions = [];
            dataValue.map((item) => {
              let option = {
                label: item.category_name,
                value: item.faq_category_id,
              };
              categoriesOptions.push(option);
            });
            setCategoriesList(categoriesOptions);
          }
        }
      })
      .catch((err) => {
        return err.response;
      });
  };

  const getFaqList = async () => {
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    return await axios
      .get(
        faqID ? `${URL.getFaqList}/${faqID}` : `${URL.getFaqList}`,
        axiosConfig
      )
      .then((faqResData) => {
        if (faqResData?.status == 200) {
          let dataValue = faqResData?.data?.data[0];
          console.log("Data value ", dataValue);
          if (dataValue) {
            setFaqData(dataValue);
            formik.setFieldValue("question", dataValue?.question);
            formik.setFieldValue("answer", dataValue?.answer);
            formik.setFieldValue("faq_category_id", dataValue?.faq_category_id);
          }
        }
      })
      .catch((err) => {
        return err.response;
      });
  };

  const toggleFaqCatModal = () => {
    setShowFaqCatModal((showFaqCatModal) => !showFaqCatModal);
  };
  useEffect(() => {
    getFaqCategoryList();
    getFaqList();
  }, []);

  const updateFaqCatList = () => {
    getFaqCategoryList();
    toggleFaqCatModal();
  };

  useEffect(() => {
    console.log("formik.values ", formik.values, formik.errors);
  }, [formik.values, formik.errors]);

  useEffect(() => {
    console.log(
      "🚀 ~ file: AddNewFaq.js ~ line 209 ~ useEffect ~ Object.keys(faqData).length > 0 && categoriesList.length",
      Object.keys(faqData).length,
      " && ",
      categoriesList.length
    );
    if (Object.keys(faqData).length > 0 && categoriesList.length > 0) {
      let defaultCategoryValue = categoriesList.find(
        (eachFaqCat) => eachFaqCat.value == faqData.faq_category_id
      );
      console.log(
        "🚀 ~ file: AddNewFaq.js ~ line 213 ~ AddNewFaq ~ defaultCategory",
        defaultCategoryValue
      );
      setDefaultCategory(defaultCategoryValue);
    }
  }, [categoriesList, faqData]);

  useEffect(() => {
    console.log(
      "🚀 ~ file: AddNewFaq.js ~ line 220 ~ AddNewFaq ~ defaultCategory",
      defaultCategory
    );
  }, [defaultCategory]);

  return (
    <Layout>
      <Container className='EditPersonalDetails pt-3 pt-xl-5'>
        {/* <UsersPage /> */}
        <Row>
          <Col className='col-xl-10 offset-xl-1 offset-md-0'>
            <BreadcrumbTwo {...headingDetails} />
            <Row className=' article-header mb-50'>
              <Col
                md={12}
                className=' d-flex justify-content-center flex-column'
              >
                <div className='mb-24'>
                  <span className='main-title'>Create a new FAQ</span>
                </div>
                <Card className='aside p-4'>
                  <CardBody>
                    <FormGroup className='form-row row'>
                      <Col className='form-group mb-5  mb-md-0' md={12}>
                        <Label className='mb-2'>Select FAQ category</Label>

                        <Col className='form-group' md={12}>
                          <DropDownWithSearch
                            {...selectCategory}
                            onBlur={formik.handleBlur}
                            value={formik.values.faq_category_id}
                            defaultValue={defaultCategory}
                            onChange={(option) => {
                              console.log(
                                "🚀 ~ file: AddNewFaq.js ~ line 233 ~ AddNewFaq ~ option",
                                option
                              );

                              formik.setFieldValue(
                                "faq_category_id",
                                option[0].value
                              );
                            }}
                            name='faq_category_id'
                            id='selectCategory'
                          />

                          {formik.errors.faq_category_id ? (
                            <small className='error-cls'>
                              {formik.errors.faq_category_id}
                            </small>
                          ) : null}
                        </Col>

                        <Col className='form-group mt-5  mb-md-0' md={12}>
                          <div
                            className='add-category-container'
                            onClick={() => toggleFaqCatModal()}
                          >
                            <img src={plusIcon} className='mx-2 mb-2'></img>
                            <span className='mb-2'>Create New Category</span>
                          </div>
                        </Col>
                      </Col>
                    </FormGroup>
                  </CardBody>
                </Card>

                <div className='mb-24 mt-5'>
                  <span className='main-title'>FAQ Topic</span>
                </div>

                <Card className='aside p-4 mb-5'>
                  {/* <Collapse items={faqItemList} label="Collapses" /> */}
                  <>
                    <Col className='form-group mb-5  mb-md-0' md={12}>
                      <Label className='mb-2'>FAQ question</Label>
                      <Col className='form-group' md={12}>
                        <InputBox
                          className='defaultInput'
                          label='InputBox'
                          name='question'
                          placeholder='Enter FAQ question here...'
                          type='text'
                          value={formik.values.question}
                          onChange={(e) => {
                            return formik.setFieldValue(
                              "question",
                              e.target.value
                            );
                          }}
                        />

                        {formik.errors.question ? (
                          <small className='error-cls'>
                            {formik.errors.question}
                          </small>
                        ) : null}
                      </Col>
                    </Col>

                    <Col className='form-group mb-5  mb-md-0' md={12}>
                      <Label className='mb-2 mt-5'>FAQ answer</Label>
                      <Col className='form-group' md={12}>
                        <div style={{ height: "211px" }}>
                          <RichText
                            name='answer'
                            value={formik.values.answer}
                            handleEditorChange={handleEditorChange}
                            editorState={editorState}
                          />
                        </div>
                        {formik.errors.answer ? (
                          <small className='error-cls'>
                            {formik.errors.answer}
                          </small>
                        ) : null}
                      </Col>
                    </Col>
                  </>
                </Card>

                {/* <div className="col-4">
                  <Button
                    btnClass="primary"
                    label="Add Question"
                    onClick={() => onAddNewFaqCollapse()}
                    shape="btn-square"
                    size="small"
                    icon={blackPlusIcon}
                  />
                </div> */}

                {/* <div className="form-row row mb-4 aside"> */}
                <hr className='my-5 w-100 mb-4 clearfix' />
                <div className='row mb-4 justify-content-between'>
                  <div className='col-6'>
                    <Button
                      {...discard}
                      type='cancel'
                      onClick={() => history.goBack()}
                    />
                  </div>
                  <div className='col-6 text-right'>
                    <Button
                      {...update}
                      type='button'
                      btnClass={
                        !(formik.dirty && formik.isValid)
                          ? "default"
                          : "primary"
                      }
                      onClick={formik.handleSubmit}
                    />
                  </div>
                </div>
                {/* </div> */}
              </Col>
            </Row>
          </Col>

          <AddFaqCategoryModal
            show={showFaqCatModal}
            toggleFaqCatModal={toggleFaqCatModal}
            updateFaqCatList={updateFaqCatList}
          />
          {/* <Modal
            show={showFaqCatModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal-popup text-center quiz-modal"
            backdrop="static"
          >
            <Fragment>
              <Modal.Header
                closeButton
                onClick={() => toggleFaqCatModal()}
              ></Modal.Header>

              <Modal.Body>
                <Col className="form-group mb-5  mb-md-0" md={12}>
                  <Col className="form-group" md={12}>
                    <InputBox
                      className="defaultInput"
                      label="InputBox"
                      name=""
                      onClick={() => {}}
                      placeholder="Enter FAQ Category Name Here..."
                      type=""
                      value=""
                    />

                    {formik.touched.sessionTopic &&
                    formik.errors.sessionTopic ? (
                      <small className="error-cls">
                        {formik.errors.sessionTopic}
                      </small>
                    ) : null}
                  </Col>
                </Col>
                <Button
                  label="Create"
                  btnClass="primary mt-4"
                  size="small"
                  onClick={() => {}}
                />
              </Modal.Body>
            </Fragment>
          </Modal> */}
        </Row>
      </Container>
    </Layout>
  );
};

export default AddNewFaq;
