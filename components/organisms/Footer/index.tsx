/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
  return (
    <section className="footer">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-lg-start text-center">
                        <a href="" className="mb-30">
                            <img src="/img/footer.png" alt="" />
                        </a>
                        <p className="mt-30 text-lg color-palette-1 mb-30">A Lorem Ipsum is simply dummy text of the printing <br/> and typesetting industry. Lorem Ipsum has been the<br/> industry's  standard.</p>
                        <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-20">
                        <div className="row gap-sm-0">
                            <div className="col-md-6 col-6 mb-lg-0 mb-25">
                                <p className="text-lg fw-semibold color-palette-1 mb-12">Menu Bantuan</p>
                                <ul className="list-unstyled">
                                    <li className="mb-6">
                                        <a href="" className="text-lg color-palette-1 text-decoration-none">Keunggulan</a>
                                    </li>
                                    <li className="mb-6">
                                        <a href="" className="text-lg color-palette-1 text-decoration-none">Fitur Aplikasi</a>
                                    </li>
                                    <li className="mb-6">
                                        <a href="" className="text-lg color-palette-1 text-decoration-none">Testimoni</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-6 mb-lg-0 mb-25">
                                <p className="text-lg fw-semibold color-palette-1 mb-12">Informasi Kontak</p>
                                <ul className="list-unstyled">
                                    <li className="mb-6">
                                        <a href="" className="text-lg color-palette-1 text-decoration-none">0812-9797-1227
                                            </a>
                                    </li>
                                    <li className="mb-6">
                                        <a href="" className="text-lg color-palette-1 text-decoration-none">0812-9797-1227</a>
                                    </li>
                                    <li className="mb-6">
                                        <a href="" className="text-lg color-palette-1 text-decoration-none">Jbgtranshipping@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </section>
  );
}
