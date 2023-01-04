/* eslint-disable import/extensions */
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import LacakPengiriman from '../components/organisms/LacakPengiriman';
import Keunggulan from '../components/organisms/Keunggulan';
import Section from '../components/molecules/Section';
import Testimonial from '../components/organisms/Testimonial';
import SectionKurir from '../components/organisms/SectionKurir';
import Footer from '../components/organisms/Footer';
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <LacakPengiriman />
      <Keunggulan />
      <Section title1='Berbagai Metode' title2='Pengiriman' desc1='A Lorem Ipsum is simply dummy text of the printing and' desc2="typesetting industry. Lorem Ipsum has been the industry's" thumbnail={'section-1'} positionImage={'img-fluid img-right'} />
      <Section title1='Lacak Status' title2='Pengiriman' desc1='A Lorem Ipsum is simply dummy text of the printing and' desc2="typesetting industry. Lorem Ipsum has been the industry's" thumbnail={'section-2'} positionImage={'img-fluid img-left'} />
      <Section title1='Cek schedule' title2='Pengiriman Anda' desc1='A Lorem Ipsum is simply dummy text of the printing and' desc2="typesetting industry. Lorem Ipsum has been the industry's" thumbnail={'section-3'} positionImage={'img-fluid img-right'} />
      <Testimonial />
      <SectionKurir />
      <Footer />
    </>
  );
}
