import React from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <main>
      <section style={{ backgroundColor: "#414B57" }} className="py-lg-4 py-2 bg-cover ">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div>
                <div className="text-center text-md-start text-light">
                  <h1 className=" display-2 fw-bold text-light  mb-3">Peter Kungu Transport Receipt</h1>
                  <p className="lead">Generate Transport Receipt every month here. You can
                  generate both Uber and Bolt monthly receipts here and download them as PDF file.</p>
                  <button type="button" onClick={() => router.push('/generate-form')} class="btn btn-light mb-2">Generate Receipt</button>
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5 col-12 text-center">
              <div className="position-relative ">
                <img src="https://www.shuledirect.org/uploads/5e2adbe99a833.png" className="img-fluid rounded-3"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}