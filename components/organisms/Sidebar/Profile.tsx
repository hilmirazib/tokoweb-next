import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
export default function Profile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const dataUser = JSON.parse(atob(token));
      setUser(dataUser);
    }
  }, []);
  return (
    <div className="user text-center pb-50 pe-30">
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
