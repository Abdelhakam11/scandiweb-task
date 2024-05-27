import axios from "axios";
export const apiUrl = {
  getProducts: "http://localhost/scandiweb-task/backend/products-getter",
  postProduct: "https://localhost/scandiweb-task/backend/add-Product",
  deleteProducts: "https://localhost/scandiweb-task/backend/delete-Product",
};

export const postData = async (url, postData, contentType) => {
  await axios.post(url, postData, {
    headers: {
      "Content-Type": contentType,
    },
  });
};
