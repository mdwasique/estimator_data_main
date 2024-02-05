import "./register.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import React from "react";
import {
  MDBContainer,
  MDBInput,
  // MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup-page" id="signup">
      <div className="form-section">
        <div className="form-container">
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50  form">
            <h2 className="form-header">Create an account</h2>
            <form
              onSubmit={{ handleSubmit }}
              style={{ width: "100% !important" }}
            >
              <MDBInput
                // wrapperClass="mb-4"
                label="Full name"
                id="name"
                type="text"
                className="nameInput"
                placeholder="Enter your full name"
                style={{ height: "40px" }}
              />
              {/* <div className="error-msg-container">
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#d93025"
                    width={"12px"}
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                  </svg>
                </>

                <strong className="error-msg mb-4">
                  &nbsp; please enter your name
                </strong>
              </div> */}
              <MDBInput
                // wrapperClass="mb-4"
                wrapperClass="mt-4"
                label="Email address"
                id="email"
                type="email"
                className="emailInput"
                placeholder="Enter your email"
                style={{ height: "40px" }}
              />
              <MDBInput
                // wrapperClass="mb-4"
                wrapperClass="mt-4"
                label="Password"
                id="form2"
                type="password"
                placeholder="Enter at least 6+ characters"
                style={{ height: "40px" }}
              />

              {/* <div className="d-flex justify-content-between mx-3 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div> */}

              <MDBBtn
                style={{
                  backgroundColor: " #00BDD6FF",
                  width: "100%",
                  marginTop: "24px",
                  marginBottom: "24px",
                }}
                // className="mb-4"
              >
                SIGN UP
              </MDBBtn>
            </form>

            <div className="text-center">
              {/* <p>
                Not a member? <a href="#!">Register</a>
              </p> */}
              <p>or sign up with:</p>

              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "90%" }}
              >
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{
                    // color: "#1266f1",
                    color: "#335CA6FF",
                    background: "#F3F6FBFF",
                    width: "81px",
                    height: "36px",
                    borderRadius: "18px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                {/* <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn> */}

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{
                    color: "#C71610FF",
                    background: "#FEF1F1FF",
                    width: "81px",
                    height: "36px",
                    borderRadius: "18px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fill: " #C71610FF",
                  }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{
                    color: "#565E6CFF",
                    background: "#F3F4F6FF",
                    width: "81px",
                    height: "36px",
                    borderRadius: "18px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MDBIcon fab icon="apple" size="sm" />
                </MDBBtn>

                {/* <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn> */}
              </div>
            </div>
          </MDBContainer>
        </div>

        <div className="form-img-container">
          <img src="ntt_register_image.png" alt="NTT" className="NTT-image" />
        </div>
      </div>
    </div>
  );
}

export default Register;
