import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout.component";
import AddProduct from "../pages/AddProduct/AddProduct.component";
import ProductList from "../pages/ProductList/ProductList.component";
import { myStore } from "../redux/store";
import { Provider } from "react-redux";

export const paths = {
  home: "/",
  addProduct: "/addproduct",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: paths.home,
        element: (
          <Provider store={myStore}>
            <ProductList />
          </Provider>
        ),
      },
      { path: paths.addProduct, element: <AddProduct /> },
    ],
  },
]);
