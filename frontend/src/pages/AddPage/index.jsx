import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../../redux/slices/productSlice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./addpage.scss";
function AddPage() {
  // const products = useSelector((state) => state.products.products);
  // console.log(products);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    description: Yup.string().required("Required"),
  });

  const [products, setProducts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    axios("http://localhost:5000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <>
      <button
        className="formFirstButton"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        Add Product
      </button>

      {isOpen ? (
        <>
          <h1 className="formHeader">Add New Product</h1>
          <Formik
            initialValues={{
              name: "",
              description: "",
              price: 0,
              imgUrl: "",
            }}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
              axios.post("http://localhost:5000/products", values).then(() => {
                console.log("posted");
                setProducts([...products, values]);
              });
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="formDiv">
                  <div className="fieldForForm">
                    <Field name="name" placeholder="Product name" />
                    {/* If this field has been touched, and it contains an error, display it
                     */}
                    {touched.name && errors.name && <div>{errors.name}</div>}
                  </div>
                  <div className="fieldForForm">
                    <Field
                      name="description"
                      placeholder="Product description"
                    />
                    {/* If this field has been touched, and it contains an error, display
           it */}
                    {touched.description && errors.description && (
                      <div>{errors.description}</div>
                    )}
                  </div>
                  <div className="fieldForForm">
                    <Field name="price" placeholder="Product price" />
                  </div>

                  <div className="fieldForForm">
                    <Field name="imgUrl" placeholder="Image url for product" />
                  </div>

                  <button type="submit">Submit</button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : null}
      <div className="formTable">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => {
                return (
                  <tr key={uuidv4()}>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.description}</td>
                    <td>

                      <img src={product.imgUrl} alt="" width={"60px"} />
                    </td>
                    <td>
                      <button
                        className="deleteBtnForForm"
                        onClick={() => {
                          axios.delete(
                            `http://localhost:5000/products/${product._id}`
                          );
                          setProducts(
                            products.filter((p) => p._id !== product._id)
                          );
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default AddPage;
