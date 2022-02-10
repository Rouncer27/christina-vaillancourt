import React, { useState } from "react"
import styled from "styled-components"
import {
  B2White,
  Btn1Blue,
  colors,
  H2White,
  standardWrapper,
} from "../../../styles/helpers"

import submitToServer from "../../FormParts/functions/submitToServer"
import FormSuccess from "../../FormParts/formModals/FormSuccess"
import FormSubmit from "../../FormParts/formModals/FormSubmit"
import FormErrors from "../../FormParts/formModals/FormErrors"
import logo from "../../../images/background-logo.png"

const Inquiries = ({ data }) => {
  console.log("Inquiries", data)
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
  })

  const handleOnChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleOnSubmit = async event => {
    event.preventDefault()
    setFormStatus({
      ...formStatus,
      submitting: true,
    })
    const formDataArray = Object.entries(formData)
    const bodyFormData = new FormData()
    formDataArray.forEach(field => {
      bodyFormData.append(field[0], field[1])
    })

    const response = await submitToServer(data.bookingFormId, bodyFormData)

    if (!response.errors) {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: false,
        success: true,
        errors: [],
      })
    } else {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        errors: response.errorMessages,
      })
    }
  }

  const handleErrorModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
    })
  }

  const handleSuccessModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
      errors: [],
    })

    setFormData({
      firstName: "",
      email: "",
      phone: "",
      message: "",
    })
  }
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>{data.bookingFormTitle}</h2>
        </div>
        <div
          className="intro"
          dangerouslySetInnerHTML={{ __html: data.bookingFormIntro }}
        />

        <div className="contact-form">
          <form onSubmit={handleOnSubmit}>
            <div className="form-left">
              <InputField>
                <label htmlFor="firstName">
                  Name <span className="required">&#42;</span>
                  <span
                    className={`error-message ${
                      formStatus.errors.findIndex(
                        error => error.idref === "firstName"
                      ) !== -1 && " error-active"
                    }`}
                  >
                    You must input a name.
                  </span>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    id="firstName"
                    onChange={handleOnChange}
                    aria-required="true"
                    required
                  />
                </label>
              </InputField>
              <InputField>
                <label htmlFor="email">
                  Email <span className="required">&#42;</span>
                  <span
                    className={`error-message ${
                      formStatus.errors.findIndex(
                        error => error.idref === "email"
                      ) !== -1 && " error-active"
                    }`}
                  >
                    You must input a email.
                  </span>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    id="email"
                    onChange={handleOnChange}
                    aria-required="true"
                    required
                  />
                </label>
              </InputField>
              <InputField>
                <label htmlFor="phone">
                  phone number <span className="required">&#42;</span>
                  <span
                    className={`error-message ${
                      formStatus.errors.findIndex(
                        error => error.idref === "phone"
                      ) !== -1 && " error-active"
                    }`}
                  >
                    You must input a phone number.
                  </span>
                  <input
                    name="phone"
                    type="text"
                    value={formData.phone}
                    id="phone"
                    onChange={handleOnChange}
                    aria-required="true"
                    required
                  />
                </label>
              </InputField>
            </div>
            <div className="form-right">
              <InputField size="full">
                <label htmlFor="message">
                  Comments or Questions <span className="required">&#42;</span>
                  <span
                    className={`error-message${
                      formStatus.errors.findIndex(
                        error => error.idref === "message"
                      ) !== -1
                        ? " error-active"
                        : ""
                    }`}
                  >
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    id="message"
                    onChange={handleOnChange}
                    rows={12}
                    aria-required="true"
                    required
                  />
                </label>
              </InputField>
              <div className="btn-submit">
                <button type="submit">Submit</button>
              </div>
            </div>

            <div className="required-info">
              <p>&#42; required fields</p>
            </div>
          </form>
        </div>
        <div className="background-logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <FormSubmit isActive={formStatus.submitting} />
      <FormSuccess
        isActive={formStatus.success}
        handleClose={handleSuccessModalClose}
      />
      <FormErrors
        isActive={formStatus.errorWarnDisplay}
        handleClose={handleErrorModalClose}
      />
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding: 5rem 0;
  background-color: ${colors.colorSecondary};

  .wrapper {
    ${standardWrapper};
    position: relative;
    justify-content: flex-start;
  }

  .background-logo {
    position: absolute;
    top: 5rem;
    right: -2.5rem;
    width: 30rem;
    z-index: 1;
  }

  .title {
    width: 100%;

    h2 {
      ${H2White};
    }
  }

  .intro {
    position: relative;
    width: 100%;
    max-width: 51.7rem;
    margin: 0;
    z-index: 10;

    p {
      ${B2White};
    }
  }

  .contact-form {
    position: relative;
    width: 100%;
    z-index: 10;

    form {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      width: calc(100%);

      .form-right {
        width: calc(100%);

        @media (min-width: 768px) {
          width: calc(50%);
        }
      }

      .form-left {
        width: calc(100%);

        @media (min-width: 768px) {
          width: calc(50%);
        }
      }

      .required-info {
        position: absolute;
        right: 2rem;
        bottom: 0;

        p {
          ${B2White};
          margin: 0;
        }
      }

      .btn-submit {
        margin-top: 2.5rem;
        margin-left: 2rem;

        button {
          ${Btn1Blue};
          background-color: ${colors.white};
          color: ${colors.colorSecondary};
        }
      }
    }
  }
`

const InputField = styled.div`
  width: calc(100% - 4rem);
  margin: 1rem 2rem;
  padding: 1rem 0;

  @media (min-width: 768px) {
    width: calc(100% - 4rem);
    margin: 1rem 2rem;
  }

  label {
    ${B2White};
    display: block;
    width: 100%;
    font-weight: bold;
    line-height: 1.5;

    .error-message {
      display: none;
    }

    .error-active {
      display: inline-block;
      color: red;
      padding-left: 2rem;
    }

    input,
    textarea {
      display: block;
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
      padding: 0.9rem 1rem;
      border-radius: 0.2rem;
      color: #000;
      margin-left: 0;
      margin-right: 0;
      width: 100%;
      background-color: #fff;
      border: 0.1rem #00296a solid;
      border-radius: 1rem;
    }
  }
`

export default Inquiries
