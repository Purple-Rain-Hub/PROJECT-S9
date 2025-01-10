import { Component } from "react";
import "../style.css";

class NetSettings extends Component {
  render() {
    return (
      <main className="w-75 m-auto py-5">
        <h1 className="h2">Account</h1>
        <hr className="border border-secondary my-3" />
        <div className="d-md-flex justify-content-between">
          <div>
            <h2 className="h4 text-secondary">MEMBERSHIP & BILLING</h2>
            <button
              type="button"
              className="bg-secondary-subtle fs-5 p-2 px-5 px-md-3 shadow border-0"
            >
              Cancel Membership
            </button>
          </div>
          <div className="accountInfo">
            <div className="mt-2">
              <div className="d-flex justify-content-between">
                <p className="text-black fw-bold">Epicoder1@gmail.com</p>
                <a href="javascript:void(0)">Change account email</a>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-secondary">Password:***</p>
                <a href="javascript:void(0)">Change password</a>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-secondary">Phone: 321 044 1279</p>
                <a href="javascript:void(0)">Change phone number</a>
              </div>
            </div>
            <hr className="border border-secondary my-3" />
            <div className="d-flex justify-content-between">
              <div>
                <img src="assets/media/paypal-conto.webp" width="80em" />
                <p className="text-black fw-bold">Epicoder1@gmail.com</p>
              </div>
              <div>
                <a href="javascript:void(0)" className="d-block text-end">
                  Update payment info
                </a>
                <a href="javascript:void(0)" className="d-block text-end">
                  Billing details
                </a>
                <a href="javascript:void(0)" className="d-block text-end">
                  Redeem giftcard or promo code
                </a>
                <a href="javascript:void(0)" className="d-block text-end">
                  Where to buy gift cards?
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-secondary my-3" />
        <div className="d-md-flex justify-content-md-between">
          <div className="d-md-flex justify-content-lg-between plan">
            <h2 className="h4 text-secondary">PLAN DETAILS</h2>
            <p className="fw-bold ms-3">
              Standard<i className="bi bi-badge-hd"></i>
            </p>
          </div>
          <a href="javscript:void(0)" className="text-end">
            Change plan
          </a>
        </div>
        <hr className="border border-secondary my-3" />
        <div className="d-md-flex justify-content-lg-between settings">
          <h2 className="h4 text-secondary me-md-5">SETTINGS</h2>
          <div>
            <a
              href="javscript:void(0)"
              className="d-block ms-md-3 mt-3 mt-md-0"
            >
              Parent Controls
            </a>
            <a href="javscript:void(0)" className="d-block mt-3 ms-md-3">
              Test Partecipation
            </a>
            <a href="javscript:void(0)" className="d-block mt-3 ms-md-3">
              Manage download devices
            </a>
            <a href="javscript:void(0)" className="d-block mt-3 ms-md-3">
              Activate a device
            </a>
            <a href="javscript:void(0)" className="d-block mt-3 ms-md-3">
              Recent device streaming acitivity
            </a>
            <a href="javscript:void(0)" className="d-block mt-3 ms-md-3">
              Signout all devices
            </a>
          </div>
        </div>
        <hr className="border border-secondary my-3" />
        <div className="d-md-flex justify-content-lg-between myProfile">
          <h2 className="h4 text-secondary">MY PROFILE</h2>
          <div className="ms-md-5">
            <div className="d-flex justify-content-between">
              <p className="fw-bold">
                <img src="assets/media/avatar.png" style={{ width: "35px" }} />
                &nbsp; Epicoder #1
              </p>
              <div className="ms-md-5">
                <a href="javascript:void(0)" className="d-block text-end">
                  Manage profiles
                </a>
                <a href="javascript:void(0)" className="d-block text-end">
                  Add profile email
                </a>
              </div>
            </div>
            <a href="javscript:void(0)" className="d-block mt-3">
              Language
            </a>
            <a href="javscript:void(0)" className="d-block mt-3">
              Playback settings
            </a>
            <a href="javscript:void(0)" className="d-block mt-3">
              Subtitle appearence
            </a>
            <a href="javscript:void(0)" className="d-block mt-3">
              Viewing activity
            </a>
            <a href="javscript:void(0)" className="d-block mt-3">
              Ratings
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default NetSettings;
