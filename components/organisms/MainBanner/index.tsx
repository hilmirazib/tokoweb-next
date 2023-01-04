/* eslint-disable react/no-unescaped-entities */
import Illustration from './Illustration';
import Image from 'next/image';
export default function MainBanner() {
  return (
    <section className="header pt-lg-60 pb-50">
      <div className="container">
        <div className="row gap-lg-0 gap-5">
          <div className="col-lg-6 col-12 my-auto">
            <h1 className="header-title color-palette-1 fw-bold">
              Kirim berbagi jenis <br className="d-md-block d-none" />
              ikan dengan mudah
            </h1>
            <p className="mt-30 mb-40 text-lg color-palette-1">
              A Lorem Ipsum is simply dummy text of the printing and{' '}
              <br className="d-md-block d-none" /> typesetting industry. Lorem
              Ipsum has been the industry's
            </p>
            <div className="d-flex flex-md-row flex-column gap-4 mb-40">
              <a
                className="btn btn-google-play text-lg text-white"
                href="#feature"
                role="button"
              >
                <div className="d-flex gap-3 align-items-center">
                  <Image src="/img/goggle-play.png" width={28} height={28} />
                  <span className="text-start">
                    <span className="get-in-on">GET IN ON</span>
                    <br />
                    <span className="text-google-play">Google Play</span>
                  </span>
                </div>
              </a>
              <a
                className="btn btn-google-play text-lg text-white"
                href="#feature"
                role="button"
              >
                <div className="d-flex gap-3 align-items-center">
                  <Image src="/img/apple.png" width={28} height={28} />
                  <span className="text-start">
                    <span className="get-in-on">Download on the</span>
                    <br />
                    <span className="text-google-play">App Store</span>
                  </span>
                </div>
              </a>
            </div>
            <div className="d-flex gap-5">
              <div className="d-flex flex-column">
                <p className="text-number">1.9k+</p>
                <p className="text-desc-number">Active Users</p>
              </div>
              <div className="d-flex flex-column">
                <p className="text-number">20+</p>
                <p className="text-desc-number">New Features</p>
              </div>
            </div>
          </div>
          <Illustration />
        </div>
      </div>
    </section>
  );
}
