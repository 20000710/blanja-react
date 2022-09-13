import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/style/table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faEye, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import getProduct from '../../redux/action/getAllproductAction';
import { Link } from 'react-router-dom';
import ModalCreate from '../modal-create/modal-create';
import ModalUpdate from '../modal-update/modal-update';
import ModalDelete from '../modal-delete/modal-delete';


const TableProduct = () => {
  const dispatch = useDispatch()
  const { product } = useSelector((state) => state.product)
  useEffect(() => {
    dispatch(getProduct)
  }, [])
  console.log('product: ', product)

  const handleImageName = (image) => {
    const startWith = image.indexOf("photo")
    const endWith = image.indexOf(".png")
    return image.substr(startWith, endWith)
  }

  return (
    <div className="table-product">
      <Table>
        <thead>
          <tr className="table-title text-light text-center">
            <th>No</th>
            <th>Nama</th>
            <th>Brand</th>
            <th>Size</th>
            <th>Color</th>
            <th>Price</th>
            <th>Photo</th>
            <th>Description</th>
            <th>Action
              <ModalCreate>
                <FontAwesomeIcon icon={faSquarePlus} />
              </ModalCreate>
            </th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={item.id_product} className="text-center">
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.brand}</td>
              <td>{item.size}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td><a target="_blank" rel="noopener noreferrer" href={item.photo}>{handleImageName(item.photo)}</a></td>
              <td>{item.description}</td>
              <td className="text-center">
                <Link to={`/product/${item.id_product}`}>
                  <button className="btn btn-primary"><FontAwesomeIcon icon={faEye} /></button>
                </Link>
                <ModalUpdate 
                  id={item.id_product}
                  name={item.name}
                  brand={item.brand}
                  size={item.size}
                  color={item.color}
                  price={item.price}
                  photo={item.photo}
                  description={item.description}
                >
                  <FontAwesomeIcon icon={faPen}/>
                </ModalUpdate>
                <ModalDelete id={item.id_product} name={item.name}><FontAwesomeIcon icon={faTrash} /></ModalDelete>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default TableProduct