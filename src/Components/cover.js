import React, {Fragment} from 'react'

const cover = () => {
    return (
        <Fragment>
             {/* <!-- Full Page Intro --> */}
  <div class="view jarallax bg-cover1" data-jarallax='{"speed": 0.2}'>
    {/* <!-- Mask & flexbox options--> */}
    <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
      {/* <!-- Content --> */}
      <div class="container">
        {/* <!--Grid row--> */}
        <div class="row">
          {/* <!--Grid column--> */}
          <div class="col-md-12 mb-4 white-text text-center">
            <h1 class="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown"
              data-wow-delay="0.3s"><strong>Minimalist intro</strong></h1>
            <hr class="hr-light my-4 wow fadeInDown" data-wow-delay="0.4s"/>
            <h5 class="text-uppercase mb-4 white-text wow fadeInDown" data-wow-delay="0.4s"><strong>Photography
                & design</strong></h5>
            <a class="btn btn-outline-white wow fadeInDown" data-wow-delay="0.4s">portfolio</a>
            <a class="btn btn-outline-white wow fadeInDown" data-wow-delay="0.4s">About me</a>
          </div>
          {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}
      </div>
      {/* <!-- Content --> */}
    </div>
    {/* <!-- Mask & flexbox options--> */}
  </div>
  {/* <!-- Full Page Intro --> */}
            
        </Fragment>
    )
}

export default cover;
