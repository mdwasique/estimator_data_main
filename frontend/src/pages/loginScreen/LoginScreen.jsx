import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCheckbox } from "mdb-react-ui-kit";
import styles from "./loginScreen.module.scss";

function LoginScreen() {
  return (
    <div className={styles.layout}>
      <div className={styles.navbar}>
        <div className={styles.nav_logo_container}>
          <img className={styles.logo} src="./ntt_register_image.png" alt="" />
        </div>
        <div className={styles.nav_menu_container}>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={20}
              width={20}
              viewBox="0 0 512 512"
            >
              <path
                fill="#323842FF"
                d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
              />
            </svg>
          </a>

          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={20}
              width={20}
              viewBox="0 0 512 512"
            >
              <path
                fill="#323842FF"
                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.login_container}>
        <div className={styles.login_illustration_container}>
          <img
            className={styles.login_icon}
            src="Login-amico.svg"
            alt="Login"
          />
        </div>
        <div className={styles.login_form_container}>
          <form className={styles.form_wrapper} action="">
            <div className={styles.form_text}>
              <h2
                className={styles.form_heading}
                style={{ color: "#171A1FFF" }}
              >
                Welcome back 👋
              </h2>
              <p className={styles.form_description}>Login your account</p>
            </div>
            <div className={styles.input_group}>
              <div className={styles.icon_wrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </div>
              <input
                type="email"
                name="signinmail"
                className={styles.input}
                placeholder="Enter your email"
                id="signinmail"
                autoComplete="off"
              />
            </div>
            <div className={styles.input_group}>
              <div className={styles.icon_wrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  height={20}
                  width={20}
                >
                  <path d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z" />
                </svg>
              </div>

              <input
                type="password"
                name="signinpass"
                className={styles.input}
                placeholder="Enter your password"
                id="signinpass"
                autoComplete="off"
              />
            </div>
            <div className={styles.checkbox_container}>
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
                style={{
                  fontSize: "14px !important",
                  fontWeight: "400",
                  lineHeight: "22px",
                }}
              />
              <a
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "22px",
                  color: "#00BDD6FF",
                }}
                href="!#"
              >
                Forgot password?
              </a>
            </div>
            <div className={styles.btn_container}>
              <button className={styles.submitBtn}>SIGN IN</button>
            </div>
            <div className={styles.signup_text_wrapper}>
              <p>
                Don&apos;t have an account?{" "}
                <a className={styles.link} href="#signup">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
