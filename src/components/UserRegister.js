export function UserRegister() {
  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <div className="alert alert-success">User Added</div>
        <div className="mb-1">
          <input
            type="text"
            //value={firstName}
            // onChange={(e) => updateFirstName(e)}
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            //value={lastName}
            // onChange={(e) => updateLastName(e)}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            //value={userName}
            //onChange={(e) => updateUserName(e)}
            className="form-control"
            placeholder="Enter Mobile"
          />
        </div>
        <div className="mb-1">
          <input
            type="password"
            //value={password}
            //onChange={(e) => updatePassword(e)}
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            //value={email}
            //onChange={(e) => updateEmail(e)}
            className="form-control"
            placeholder="Enter User Type"
          />
        </div>
        <div className="mb-1">
          <input
            type="button"
            className="btn btn-success w-100"
            value="Register"
            //onClick={(e) => addEmployee(e)}
          />
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
