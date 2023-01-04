import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;

export async function getProduct() {
  const url = `${ROOT_API}/api/product`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}
export async function postProduct(data: { name: string; price: string; }) {
  const url = `${ROOT_API}/api/product/store`;
  return callAPI({
    url,
    method: 'POST',
    token: true,
    data
  });
}
export async function deleteProductApi(id: any) {
  const url = `${ROOT_API}/api/product/${id}`;
  return callAPI({
    url,
    method: 'DELETE',
    token: true,
  });
}

export async function getProductDetail(id: string, token: string) {
  console.log(id)
  const url = `${ROOT_API}/api/product/show?product_id=${id}`;
  return callAPI({
    url,
    method: 'GET',
    serverToken: token,
  });
}
