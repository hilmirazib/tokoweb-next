import Image from 'next/image';
import SignInForm from '../components/organisms/SignInForm';
import Link from 'next/link';
export default function signIn() {
  return (
    <section className="sign-in mx-auto">
      <div className="row">
        <div className="col-12 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
          <form action="">
            <div className="container mx-auto mt-5">
              <SignInForm />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (token) {
    return {
      redirect: {
        destination: '/member/product',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
