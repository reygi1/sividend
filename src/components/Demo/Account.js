import React from "react";

const Account = () => {
  return (
    <div className="myaccount-container">
      <h1>My Account</h1>
      <div class="container">
        <div class="row my-2">
          <div class="col-lg-8 order-lg-2">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <div
                  data-target="#profile"
                  data-toggle="tab"
                  class="nav-link active"
                >
                  Profile
                </div>
              </li>
              <li class="nav-item">
                <div data-target="#messages" data-toggle="tab" class="nav-link">
                  Messages
                </div>
              </li>
              <li class="nav-item">
                <div data-target="#edit" data-toggle="tab" class="nav-link">
                  Edit
                </div>
              </li>
            </ul>
            <div class="tab-content py-4">
              <div class="tab-pane active" id="profile">
                <h5 class="mb-3">User Profile</h5>
                <div class="row">
                  <div class="col-md-6">
                    <h6>About</h6>
                    <p>Investor</p>
                    <h6>Account Created On:</h6>
                    <p>12 January 2019</p>
                  </div>
                  <div class="col-md-6">
                    <h6>Saved Tickers</h6>
                    <div class="badge badge-light badge-pill">MSFT</div>
                    <div class="badge badge-light badge-pill">AAPL</div>
                    <div class="badge badge-light badge-pill">TSLA</div>
                    <div class="badge badge-light badge-pill">BRB.K</div>
                    <div class="badge badge-light badge-pill">F</div>
                    <div class="badge badge-light badge-pill">BA</div>
                    <div class="badge badge-light badge-pill">G</div>
                    <div class="badge badge-light badge-pill">GOOGL</div>
                    <hr />
                    <span class="badge badge-primary">
                      <i class="fa fa-user"></i> New Investor Badge
                    </span>
                  </div>
                  <div class="col-md-12">
                    <h5 class="mt-2">
                      <span class="fa fa-clock-o ion-clock float-right"></span>{" "}
                      Recent Activity
                    </h5>
                    <table class="table table-sm table-hover table-striped">
                      <tbody>
                        <tr>
                          <td>
                            Searched for <strong>AAPL</strong> stock
                          </td>
                        </tr>
                        <tr>
                          <td>Logged in from London, United Kingdom</td>
                        </tr>
                        <tr>
                          <td>
                            Added <strong>TSLA</strong> to Saved Tickers
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Searched for <strong>MSFT</strong> stock
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Searched for <strong>F</strong> stock
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 order-lg-1 text-center">
            <img
              src="//placehold.it/150"
              class="mx-auto img-fluid img-circle d-block"
              alt="avatar"
            />
            <h6 class="mt-2">Upload div different photo</h6>
            <label class="custom-file">
              <input type="file" id="file" class="custom-file-input" />
              <span class="custom-file-control">Choose file</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
