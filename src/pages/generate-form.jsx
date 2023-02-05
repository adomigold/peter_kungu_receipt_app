import React, { useRef } from "react";
import Flatpickr from "react-flatpickr";
import ReactToPrint from 'react-to-print';
import BoltTemplate from '../components/bolt'

export default function GenerateForm() {
    var componentRef = useRef(null)
    return (
        <main>
            <section style={{ backgroundColor: "#414B57" }} className="py-6 py-lg-12">
                {/*-- container */}
                <div className="container">
                    <div className="row">
                        {/*-- cols */}
                        <div className="col-md-12 col-lg-5">
                            <div className="mb-12">
                                {/*-- title */}
                                <h1 className="display-4 mb-3 fw-bold text-light">Generate Transport Receipt</h1>
                                {/*-- text */}
                                <p className="mb-0 lead text-light">
                                    Just feel out the informations below to generate your receipt with
                                    Peter Kungu Receipt app.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*-- form */}
                    <form>
                        <div className="row">
                            {/*-- col */}
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="mb-4">
                                    <div className="mb-4">
                                        {/*-- icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-info-circle text-light" viewBox="0 0 16
                      16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0
                        8 0a8 8 0 0 0 0 16z"></path>
                                            <path d="m8.93
                          6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738
                          3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252
                          1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275
                          0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0
                          1 1 0 0 1 2 0z"></path>
                                        </svg>
                                    </div>
                                    {/*-- heading */}
                                    <h3 className="text-light">Transport receipt informations</h3>
                                    <p className="text-light">Please fill out all fields and Please
                                        do not misuse this tool. Enjoy :)
                                    </p>
                                </div>
                            </div>
                            <div className="offset-lg-1 col-lg-7 col-md-8 col-12">
                                <div>
                                    {/*-- row */}
                                    <div className="row">
                                        {/*-- col */}
                                        <div className="mb-3 col-12 col-md-6">
                                            {/*-- label */}
                                            <label className="form-label text-light" for="fname">Passenger Fullname<span className="text-danger">*</span></label>
                                            {/*-- input */}
                                            <input type="text" id="fname" className="form-control" placeholder="Passenger Fullname" required="" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-6">
                                            {/*-- label */}
                                            <label className="form-label text-light" for="lname">Driver Fullname<span className="text-danger">*</span></label>
                                            {/*-- input */}
                                            <input type="text" id="lname" className="form-control" placeholder="Driver Fullname" required="" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-6">
                                            {/*-- label */}
                                            <label className="form-label text-light" for="lname">Where To<span className="text-danger">*</span></label>
                                            {/*-- input */}
                                            <input type="text" id="lname" className="form-control" placeholder="Where To" required="" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-6">
                                            {/*-- label */}
                                            <label className="form-label text-light" for="lname">Region<span className="text-danger">*</span></label>
                                            {/*-- input */}
                                            <input type="text" id="lname" className="form-control" placeholder="Region" required="" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-12">
                                            {/*-- label */}
                                            <label className="form-label text-light" for="email">Amount<span className="text-danger">*</span></label>
                                            {/*-- input */}
                                            <input type="email" id="email" className="form-control" placeholder="Write amount to be spent" required="" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-12">
                                            <label className="form-label text-light" for="email">Boarding Date<span className="text-danger">*</span></label>
                                            <div className="input-group mb-2">
                                                <Flatpickr
                                                    className="form-control rbt-input-main rbt-input"
                                                    options={{
                                                        "dateFormat": "Y-m-d", "disableMobile": true
                                                    }}
                                                    placeholder="Boarding Date..."
                                                    name="date_from"
                                                />
                                                <select className="form-select" id="inputGroupSelect02" style={{ "maxWidth": "8rem" }}>
                                                    <option selected="1">Bolt</option>
                                                    <option value="2">Uber</option>
                                                </select>
                                            </div>
                                            {/*-- checkbox */}
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="formNumber" />
                                                <label className="form-check-label fs-6 text-light" for="formNumber">
                                                    Remember this information for future use.
                                                </label>
                                            </div>
                                        </div>
                                        <ReactToPrint
                                            content={() => componentRef}
                                            trigger={() => <button type="button" class="btn btn-light mb-2">Generate Receipt</button>}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="card mt-5">
                        <div className="card-header">
                            <h4 className="card-title">Receipt Preview</h4>
                        </div>
                        <div className="card-body">
                            <div ref={(response) => (componentRef = response)}>
                                <BoltTemplate />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}