import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { setSignIn } from '../../../serviceAPI/auth';
import Cookies from 'js-cookie';
export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const className = {
    label: cn('form-label text-lg fw-medium color-palette-1 mb-10'),
  };
  const onSubmit = async () => {
    const data = {
      email,
      password,
    };
    if (!email || !password) {
      toast.error('Email dan Password wajib diisi!!!');
    } else {
      const response = await setSignIn(data);
      if (response.data.status) {
        toast.success(response.data.message);
        const { token, name, email } = response.data.data;
        const dataUser = {
          token,
          name,
          email
        }
        const tokenBase64 = btoa(JSON.stringify(dataUser));
        Cookies.set('token', tokenBase64, { expires: 1 });
        router.push('/member/product');
      } else {
        toast.error(response.data.message);
      }
    }
  };
  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
      <div className="pt-50">
        <label htmlFor="email" className={className.label}>
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className={className.label}>
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button type="button" className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16" onClick={onSubmit}>
          Continue to Sign In
        </button>
      </div>
    </>
  );
}
