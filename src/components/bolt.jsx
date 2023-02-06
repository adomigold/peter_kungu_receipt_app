
export default function BoltTemplate({data}) {
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
                                Invoice no. {data.InvoiceNo}
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p style={{ "marginTop": "-20px", "color": "black" }} className='text-right'>Date: {data.date}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div style={{ "marginLeft": "25px" }} className="col-12">
                            <p style={{ "color": "black" }}>Recipient:</p>
                            <p style={{ "color": "black", "marginTop": "-15px" }} className='fw-bold'>{data.passenger_name}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p style={{ "color": "black" }} className='fw-bold text-right'>{data.driver_name}</p>
                        </div>
                        <div className="col-12">
                            <p style={{ "color": "black", "marginTop": "-18px" }} className='text-right'>{data.region}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div style={{ "marginLeft": "25px" }} className="col-12">
                            <p style={{ "color": "black" }}>Start: {data.where_to} ({data.date} {data.time})</p>
                        </div>
                    </div>
                    <table class="table table-bordered border-dark border-thick mt-2">
                        <thead>
                            <tr>
                                <th style={{ "color": "black" }} scope="col">Title</th>
                                <th style={{ "color": "black" }} scope="col">Sum (TZS)</th>
                                <th style={{ "color": "black" }} scope="col">VAT 0%</th>
                                <th style={{ "color": "black" }} scope="col">Total sum (TZS)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ "color": "black" }}>Trip Fee</td>
                                <td style={{ "color": "black" }}>{data.amount - data.bookingFee}</td>
                                <td style={{ "color": "black" }}>0.00</td>
                                <td style={{ "color": "black" }}>{data.amount - data.bookingFee}</td>
                            </tr>
                            <tr>
                                <td style={{ "color": "black" }}>Booking Fee</td>
                                <td style={{ "color": "black" }}>{data.bookingFee}</td>
                                <td style={{ "color": "black" }}>0.00</td>
                                <td style={{ "color": "black" }}>{data.bookingFee}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="row mt-8">
                        <div className="col-12">
                            <p style={{ "marginTop": "-20px", "color": "black" }} className='text-right'>
                                Total (TZS): <span style={{"marginLeft": "70px"}}>{data.amount}</span>
                            </p>
                        </div>
                        <div className="col-12">
                            <p style={{ "marginTop": "-18px", "color": "black", "marginRight": "5px"}} className='text-right'>
                               VAT 0%: <span style={{"marginLeft": "90px"}}>0.00</span>
                            </p>
                        </div>
                        <div className="col-12">
                            <p style={{ "marginTop": "-18px", "color": "black" }} className='text-right fw-bold'>
                            Total including VAT (TZS): <span style={{"marginLeft": "70px"}}>{data.amount}</span>
                            </p>
                        </div>

                        <div className="col-12">
                            <p style={{"color": "black" }} className='text-right fw-bold'>
                            Charged <img style={{"marginTop": "-15px"}} src="/img/cash.png" width="35"/> Cash: <span style={{"marginLeft": "70px"}}>{data.amount}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}