import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
export default function Home() {
  const router = useRouter()
  return (
    <main style={{ backgroundColor: "#414B57", height: "1000px"}}>
      <section className="py-lg-4 py-2 bg-cover">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div>
                <div className="text-center text-md-start text-light">
                  <h1 className=" display-2 fw-bold text-light  mb-3">Peter Kungu Transport Receipt</h1>
                  <p className="lead">Generate Transport Receipt every month here. You can
                    generate both Uber and Bolt monthly receipts here and download them as PDF file.</p>
                  <button type="button" onClick={() => router.push('/generate-form')} className="btn btn-light mb-2">Generate Receipt</button>
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5 col-12 text-center">
              <div className="position-relative ">
                <Image src="/img/kungu.png" width={451} alt="peter-kungu" height={676.2} className="img-fluid rounded-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
