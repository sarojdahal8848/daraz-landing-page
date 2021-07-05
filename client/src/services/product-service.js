import http from "../http-common";

const getAll = () => {
  return http.get("product");
};

const getSingle = (id) => {
  return http.get(`product/${id}`);
};

const ProductDataService = {
  getAll,
  getSingle,
};

export default ProductDataService;
