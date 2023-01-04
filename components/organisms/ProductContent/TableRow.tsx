import Link from 'next/link';
import cn from 'classnames';
import { NumericFormat } from 'react-number-format';
import { toast } from 'react-toastify';
import { deleteProductApi } from '../../../serviceAPI/member';
interface TableRowProps {
  name: string;
  price: string;
  id: number;
}
export default function TableRow(props: TableRowProps) {
  const { name, price, id } = props;
  async function onSubmit() {
    await deleteProductApi(id);
    toast.success('Data Deleted Successfully');
  }
  return (
    <tr data-category="pending" className="align-middle">
      <td>
        <p className="fw-medium color-palette-1 m-0">{name}</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          <NumericFormat value={price} prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator="," />
        </p>
      </td>
      <td>
        <Link href={`/member/product/${id}`}>
          <a className="btn btn-status rounded-pill text-sm">Details</a>
        </Link>
          <button className="btn btn-status rounded-pill text-sm" onClick={onSubmit}>Delete</button>
      </td>
    </tr>
  );
}
function onGetProduct() {
  throw new Error('Function not implemented.');
}
