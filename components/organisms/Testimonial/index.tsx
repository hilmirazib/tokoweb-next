/* eslint-disable react/no-unescaped-entities */
export default function Testimonial() {
  return (
    <section className="feature pt-50 pb-50">
        <div className="container">
            <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">Testimonial</h2>
            <p className="mb-40 text-center">A Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                industry. Lorem Ipsum has been the industry's standard dummy text</p>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-center align-items-center gap-4">
                        <div className="item">
                            <div className="card testimonial-card border-1">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <img src="/img/user-1.png" alt="" />
                                    <div className="d-flex">
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                    </div>
                                </div>
                                <p className="fw-semibold text-2xl mb-2 color-palette-1">Floyd Miles</p>
                                <p className="text-lg color-palette-1 mb-0">A Lorem Ipsum is simply dummy <br />text of the printing
                                    and<br /> typesetting industry</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card testimonial-card border-1">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <img src="/img/user-2.png" alt="" />
                                    <div className="d-flex">
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                    </div>
                                </div>
                                <p className="fw-semibold text-2xl mb-2 color-palette-1">Ronald Richards</p>
                                <p className="text-lg color-palette-1 mb-0">A Lorem Ipsum is simply dummy <br />text of the printing
                                    and<br /> typesetting industry</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card testimonial-card border-1">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <img src="/img/user-3.png" alt="" />
                                    <div className="d-flex">
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                        <img src="/img/bintang.png" width="24" height="24" alt="" />
                                    </div>
                                </div>
                                <p className="fw-semibold text-2xl mb-2 color-palette-1">Jonas Smith</p>
                                <p className="text-lg color-palette-1 mb-0">A Lorem Ipsum is simply dummy <br />text of the printing
                                    and<br /> typesetting industry</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
