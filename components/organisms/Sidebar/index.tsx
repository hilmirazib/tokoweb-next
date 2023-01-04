import { useRouter } from 'next/router';
import MenuItem from './MenuItem';
import Profile from './Profile';
import Cookies from 'js-cookie';
interface SidebarProps {
  active: 'product';
}
export default function Sidebar(props: SidebarProps) {
  const { active } = props;
  const router = useRouter();

  const onLogOut = () => {
    Cookies.remove('token');
    router.push('/login');
  };
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Product"
            icon="ic-product"
            altr="Icon product"
            active={active === 'product'}
            href="/member/product"
          />
          <MenuItem title="Log Out" icon="ic-log-out" onClick={onLogOut} />
        </div>
      </div>
    </section>
  );
}
