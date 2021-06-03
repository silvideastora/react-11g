import React from "react";

export default function Login() {
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
          <div className="col p-5">
            <h2 className="text-white">Log In</h2>
            <form className="mt-5">
              <div className="form-group col-12">
                <label className="text-white" htmlFor="exampleInputEmail1">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="exampleInputPassword1">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
