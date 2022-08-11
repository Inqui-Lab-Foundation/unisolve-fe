import React, { useState } from "react";
import { Modal, ListGroup } from "react-bootstrap";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { Button } from "../../stories/Button";
import { Tag, Avatar } from "antd";
import BasicImg from "../../assets/img/avatar1.png";
import BasicImg2 from "../../assets/img/avatar2.png";
import { FileComp } from "../../stories/FileComp/FileComp";
import * as Yup from "yup";
import { Formik, FormikContext, useFormik } from "formik";
import { Form, FormGroup, Alert } from "reactstrap";

import { UploadOutlined } from "@ant-design/icons";
import { Button as AntdBtn, message, Upload } from "antd";
import IconCSV from "../../media/csv.png";
import successIcon from "../../media/upload-success-animated.gif";
import failureIcon from "../../media/upload-failure-animated.gif";

// import IconCSV from "../../media/csv-1.png";
import axios from "axios";
import { getNormalHeaders, getCurrentUser } from "../../helpers/Utils";
import { BsFilter } from "react-icons/bs";
import iconImport from "../../media/iconImport.png";
function SuccessMessage(props) {
  return (
    <>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='assign-evaluator exportModal'
        backdrop='static'
      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header>
          <Modal.Title
            id='contained-modal-title-vcenter'
            className='w-100 d-block'
          >
            Success!!!
          </Modal.Title>
          <p className='w-100 d-block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <FormGroup>
              <div className='row py-5'>
                <figure className='text-center'>
                  <img
                    className='img-fluid w-25'
                    src={successIcon}
                    alt='success'
                  />
                  <h3>Successfully Submitted</h3>
                </figure>
              </div>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer className='text-right  d-block form-group'>
            <Button
              label='Okay'
              btnClass='primary'
              size='small'
              type='cancel'
              // onClick={props.onHide}
            />
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default SuccessMessage;
