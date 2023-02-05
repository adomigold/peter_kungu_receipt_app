import React from "react"
import Script from "next/script"

const scripts = () => {
    return (
        <React.Fragment>
            <Script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous" />
            <Script src="/libs/jquery/dist/jquery.min.js" />
            <Script src="/js/jquery.toast.min.js" />
            <Script src="/libs/bootstrap/dist/js/bootstrap.bundle.min.js" />
            <Script src="https://cdn.jsdelivr.net/gh/xcash/bootstrap-autocomplete@v2.3.7/dist/latest/bootstrap-autocomplete.min.js" />
            <Script src="/libs/odometer/odometer.min.js" />
            <Script src="/libs/jquery-slimscroll/jquery.slimscroll.min.js" />
            <Script src="/libs/magnific-popup/dist/jquery.magnific-popup.min.js" />
            <Script src="/libs/bootstrap-select/dist/js/bootstrap-select.min.js" />
            <Script src="/libs/flatpickr/dist/flatpickr.min.js" />
            <Script src="/libs/inputmask/dist/jquery.inputmask.min.js" />
            <Script src="/libs/apexcharts/dist/apexcharts.min.js" />
            <Script src="/libs/quill/dist/quill.min.js" />
            <Script src="/libs/file-upload-with-preview/dist/file-upload-with-preview.min.js" />
            <Script src="/libs/dragula/dist/dragula.min.js" />
            <Script src="/libs/bs-stepper/dist/js/bs-stepper.min.js" />

            <Script src="/libs/jQuery.print/jQuery.print.js" />
            <Script src="/libs/prismjs/prism.js" />
            <Script src="/libs/prismjs/components/prism-scss.min.js" />
            <Script src="/libs/@yaireo/tagify/dist/tagify.min.js" />
            <Script src="/libs/@popperjs/core/dist/umd/popper.min.js" />
            <Script src="/libs/tippy.js/dist/tippy-bundle.umd.min.js" />
            <Script src="/libs/typed.js/lib/typed.min.js" />
            <Script src="/libs/jsvectormap/dist/js/jsvectormap.min.js" />
            <Script src="/libs/jsvectormap/dist/maps/world.js" />

            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous" />

            <Script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js" />

            <Script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" />
            <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" />
            <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" />


            {/* <!-- clipboard --> */}
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.12/clipboard.min.js" />
            <Script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js" />

            {/* <!-- Theme JS --> */}
            <Script src="/js/app.js" />
        </React.Fragment>
    )
}
export default scripts