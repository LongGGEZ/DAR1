import "./FormLogin.css"
function FormLogin() {
  return (
    <>
      <div className="login-title">LOGIN</div>
      <div className="form">
        <form>
          <div className="input-container">
            <label>Username: </label>
            <input type="text" name="username" required />
          </div>
          <div className="input-container">
            <label>Password: </label>
            <input type="password" name="pass" required />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
export default FormLogin;
