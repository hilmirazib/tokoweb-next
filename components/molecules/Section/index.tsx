/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
export interface SectionProps {
  title1: string;
  title2: string;
  desc1: string;
  desc2: string;
  // thumbnail: '/img/Thumbnail-1.png' | '/img/Thumbnail-2.png' | '/img/Thumbnail-3.png' | '/img/Thumbnail-4.png' | '/img/Thumbnail-5.png';
  thumbnail: string;
  positionImage: string;
}
export default function Section(props: SectionProps) {
  const { title1, title2, desc1, desc2, thumbnail, positionImage } = props;
  const order = positionImage === 'img-fluid img-left' ? 'order-2' : ''
  return (
    <section className="header pt-lg-60 pb-50">
        <div className="container">
            <div className="row gap-lg-0 gap-5" data-aos="fade-up">
                <div className={`col-lg-6 col-12 pt-5 my-auto ${order}`}>
                    <h1 className="header-title color-palette-1 fw-bold">
                        {title1} <br className="d-md-block d-none" />{title2}
                    </h1>
                    <p className="mt-30 mb-40 text-lg color-palette-1">{desc1}<br className="d-md-block d-none" />{desc2}</p>
                </div>
                <div className="col-lg-6 col-12 d-lg-block d-none position-relative">
                    <img src={`/img/${thumbnail}.png`} className={positionImage} alt="" />
                </div>
            </div>
        </div>
    </section>
  );
}
