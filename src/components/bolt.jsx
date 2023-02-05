
export default function BoltTemplate() {
    return (
        <>
            <section className='p-5'>
                <div className="container">
                    <div className="row ">
                        <div className="col-2">
                            <img src="/img/bolt.png" width="180" />
                        </div>
                        <div className="col-10 mt-6">
                            <h3 style={{ "color": "black" }} className="text-right fw-bold">
                                Invoice no. CNXLlAlgv2-vwVH6-wuIYM0
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p style={{ "marginTop": "-20px", "color": "black" }} className='text-right'>Date: 2021-01-01</p>
                        </div>
                    </div>
                    <div className="row">
                        <div style={{ "marginLeft": "25px" }} className="col-12">
                            <p style={{ "color": "black" }}>Recipient:</p>
                            <p style={{ "color": "black", "marginTop": "-15px" }} className='fw-bold'>Adolph</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p style={{ "color": "black" }} className='fw-bold text-right'>Adam Jehi</p>
                        </div>
                        <div className="col-12">
                            <p style={{ "color": "black", "marginTop": "-18px" }} className='text-right'>Dar es salaam</p>
                        </div>
                    </div>
                    <div className="row">
                        <div style={{ "marginLeft": "25px" }} className="col-12">
                            <p style={{ "color": "black" }}>Start: 20 Wakatibado Street (2023-01-12 22:09)</p>
                        </div>
                    </div>
                    <table style={{ "marginLeft": "25px" }} class="table table-bordered border-dark border-thick mt-2">
                        <thead>
                            <tr>
                                <th style={{ "color": "black" }} scope="col">Title</th>
                                <th style={{ "color": "black" }} scope="col">Sum (TZS)</th>
                                <th style={{ "color": "black" }}  scope="col">VAT 0%</th>
                                <th style={{ "color": "black" }} scope="col">Total sum (TZS)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ "color": "black" }}>Trip Fee</td>
                                <td style={{ "color": "black" }}>20200.99</td>
                                <td style={{ "color": "black" }}>0.00</td>
                                <td style={{ "color": "black" }}>20200.99</td>
                            </tr>
                            <tr>
                                <td style={{ "color": "black" }}>Booking Fee</td>
                                <td style={{ "color": "black" }}>299.01</td>
                                <td style={{ "color": "black" }}>0.00</td>
                                <td style={{ "color": "black" }}>299.01</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}