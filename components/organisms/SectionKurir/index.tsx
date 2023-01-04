/* eslint-disable react/no-unescaped-entities */
export default function SectionKurir() {
  return (
    <section className="bg-lacak mt-30">
    <div className="container-lacak">
        <div className="row position-relative" data-aos="fade-up">
            <div className="col-lg-6 col-12 px-20">
                <div className="container-fluid">
                    <h1 className="text-white fw-bold">Available and<br/> Download Anytime!</h1>
                    <p className="text-white text-justify mb-4">A Lorem Ipsum is simply dummy text of the printing and</p>
                    <div className="d-flex flex-lg-row flex-column gap-4 mb-40">
                        <a className="btn btn-google-play text-lg text-white" href="#feature" role="button">
                            <div className="d-flex gap-3 align-items-center">
                                <img src="/img/goggle-play.png" alt="" />
                                <span className="text-start">
                                    <span className="get-in-on">GET IN ON</span>
                                    <br/>
                                    <span className="text-google-play">Google Play</span>
                                </span>
                            </div>
                        </a>
                        <a className="btn btn-google-play text-lg text-white" href="#feature" role="button">
                            <div className="d-flex gap-3 align-items-center">
                                <img src="/img/apple.png" alt="" />
                                <span className="text-start">
                                    <span className="get-in-on">Download on the</span>
                                    <br/>
                                    <span className="text-google-play">App Store</span>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12 px-10 d-lg-block d-none">
                <img src="/img/kurir.png" className="img-kurir" alt="" />
            </div>
        </div>
    </div>
</section>
  );
}
