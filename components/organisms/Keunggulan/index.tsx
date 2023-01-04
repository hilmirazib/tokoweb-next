/* eslint-disable react/no-unescaped-entities */
import StepItem from '../../molecules/StepItem';

export default function Keunggulan() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">Keunggulan Kami</h2>
        <p className="mb-40 text-center">A Lorem Ipsum is simply dummy text of the printing and typesetting <br />
          industry. Lorem Ipsum has been the industry's standard dummy text <br />ever since the 1500s.</p>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem icon="step1" title="Kirim Ke Berbagai Negara" desc1="A Lorem Ipsum is simply dummy" desc2="text of the printing and typesetting industry" />
          <StepItem icon="step2" title="Mudah Di Gunakan" desc1="A Lorem Ipsum is simply dummy" desc2="text of the printing and typesetting industry" />
          <StepItem icon="step3" title="Pengiriman Aman" desc1="A Lorem Ipsum is simply dummy" desc2="text of the printing and typesetting industry" />
        </div>
      </div>
    </section>
  );
}
