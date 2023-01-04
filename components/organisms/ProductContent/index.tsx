import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { toast } from 'react-toastify';
import { ProductType } from '../../../serviceAPI/data-type';
import { deleteProductApi, getProduct, postProduct } from '../../../serviceAPI/member';
import TableRow from './TableRow';

export default function TransactionContent() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [transactions, setTransactions] = useState([]);
  const getProductList = useCallback(async () => {
    const response = await getProduct();
    if (response.data?.status) {
      setTransactions(response.data.data);
    } else {
      toast.error(response.data?.message);
    }
  }, []);
  const onDelete = async (event, id) => {
    event.preventDefault();
    await deleteProductApi(id);
    getProductList()
    toast.success('Data Deleted Successfully');
  }
  const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    if (name === '' || price === '') {
      toast.error('silahkan isi semua data!!!');
    } else {
      const data = {
        name,
        price,
      };
      const res = await postProduct(data);
      getProductList();
    }
  };
  useEffect(() => {
    getProductList();
  }, []);
  return (
    <div>
      <main className="edit-profile main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Product</h2>
                <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                    <form action="">
                        <div className="d-flex gap-4">
                            <div>
                                <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">
                                    Name</label>
                                <input type="text" className="form-control rounded-pill text-lg" id="name" name="name"
                                    aria-describedby="name" placeholder="Name Product" value={name}
                                    onChange={(event) => setName(event.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="price" className="form-label text-lg fw-medium color-palette-1 mb-10">Price</label>
                                <input type="text" className="form-control rounded-pill text-lg" id="price" name="price"
                                    aria-describedby="price" placeholder="Price Product" value={price}
                                    onChange={(event) => setPrice(event.target.value)} />
                            </div>
                        </div>
                        <div className="button-group d-flex flex-column mt-3">
                            <button className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                role="button" onClick={onSubmit}>Input</button>
                        </div>
                    </form>
                </div>
            </div>
      </main>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Product</h2>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              List Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* bisa mennggunakan table row terpisah ataupun digabung */}
                  {/* {transactions.map((transaction: ProductType) => (
                    <TableRow
                      key={transaction.id}
                      id={transaction.id}
                      name={transaction.name}
                      price={transaction.price}
                    />
                  ))} */}
                  {transactions.map((transaction: ProductType) => (
                    <tr data-category="pending" className="align-middle" key={transaction.id}>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">{transaction.name}</p>
                      </td>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">
                          <NumericFormat value={transaction.price} prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator="," />
                        </p>
                      </td>
                      <td>
                        <Link href={`/member/product/${transaction.id}`}>
                          <a className="btn btn-status rounded-pill text-sm">Details</a>
                        </Link>
                          <button className="btn btn-status rounded-pill text-sm" onClick={async (event) => onDelete(event, transaction.id)}>Delete</button>
                      </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
