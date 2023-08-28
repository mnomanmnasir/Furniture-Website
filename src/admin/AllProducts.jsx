import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { db } from '../firebase.config';
import { doc, deleteDoc } from 'firebase/firestore'
// import useGetData from '../custom-hooks/useGetData';
import { toast } from 'react-toastify';
import Footer from '../components/Footer/Footer'
import { FiCommand } from "react-icons/fi";



const AllProducts = () => {

    const { data: productsData, loading } = useGetData('products')

    const deleteProduct = async (id) => {
        await deleteDoc(doc(db, 'products', id))
        toast.success("Deleted!")
    }

    return (
        <>
            <section>
                <Container>
                    <Row>
                    <Col lg='12'>
                            <h4 className="fw-bold">
                                All Products
                            </h4>
                        </Col>
                        <Col lg="12" className='pt-5'>

                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {
                                        loading ? (<Col lg="12" className='text-center'>
                                            <h5 className='fw-bold'>
                                                <FiCommand className="loading-icon" style={{ marginLeft: '200%' }} />
                                            </h5>
                                        </Col>) :

                                            (productsData.map(item => (
                                                <tr key={item.id}>
                                                    <td><img src={item.imgUrl} alt="" /></td>
                                                    <td>{item.title}</td>
                                                    <td>{item.category}</td>
                                                    <td>{item.price}</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={() => { deleteProduct(item.id) }}>
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            )))
                                    }

                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default AllProducts;