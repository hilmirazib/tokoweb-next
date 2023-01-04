import ProductDetail from '../../../components/organisms/ProductDetail';
import Sidebar from '../../../components/organisms/Sidebar';
import { ProductDetailType } from '../../../serviceAPI/data-type';
import { getProductDetail } from '../../../serviceAPI/member';
interface ProductDetailProps {
  productDetail: ProductDetailType;
}
export default function PrdouctDetail(props: ProductDetailProps) {
  const { productDetail } = props;
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar active="product" />
      <ProductDetail data={productDetail} />
    </section>
  );
}
interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idProduct: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idProduct } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  const jwtToken = JSON.parse(Buffer.from(token, 'base64').toString('ascii'));
  const response = await getProductDetail(idProduct, jwtToken.token);
  return {
    props: {
      productDetail: response.data.data,
    },
  };
}
