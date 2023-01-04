/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-absolute-path */
/* eslint-disable react/no-unescaped-entities */

export default function LacakPengiriman() {
  // const img = require('../../../public/img/bg-lacak.png');
  // const styling = {
  //   backgroundImage: `url('${img}')`,
  //   width: '100%',
  //   height: '100%'
  // }
  return (
    <section className="bg-lacak">
        <div className="container-lacak">
            <div className="row" data-aos="fade-up">
                <div className="col-lg-6 col-12 border border-start-0 border-top-0 border-bottom-0 px-10">
                    <div className="container-fluid">
                        <p className="text-white text-center fw-semibold fs-2 mb-3">Lacak Pengiriman anda</p>
                        <p className="text-white text-justify mb-4">A Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                        <form action="" className="d-flex">
                            <input type="email" className="form-control text-lg input-custom me-2 me-lg-4" id="email"
                                name="email" aria-describedby="email" placeholder="Enter your email address" />
                            <button className="btn btn-lacak">Lacak</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 col-12 px-10">
                    <div className="container-fluid">
                        <p className="text-white text-center fw-semibold fs-2 mb-3">Cek Tarif Pengirman Anda</p>
                        <form action="" className="d-flex">
                            <input type="email" className="form-control text-lg input-custom me-2 me-lg-4" id="email"
                                name="email" aria-describedby="email" placeholder="Enter your email address" />
                            <input type="email" className="form-control text-lg input-custom" id="email" name="email"
                                aria-describedby="email" placeholder="Enter your email address" />
                        </form>
                        <button className="btn btn-lacak mt-4 w-100">Check</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
