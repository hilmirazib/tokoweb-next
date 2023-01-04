import Link from 'next/link';
import { ProductDetailType } from '../../../serviceAPI/data-type';
import Row from './Row';

interface ProductDetailProps {
  data: ProductDetailType;
}
export default function ProductDetail(props: ProductDetailProps) {
  const { data } = props;

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Details</h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Product Details</h2>
                <Row label="Product Name" value={data.name} />
                <Row label="Price" value={data.price} />
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <Link href="/member/product">
                <a className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg" href="/#" role="button">
                  Back
                </a>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
