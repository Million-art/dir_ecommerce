// ProductRows.jsx

import React from 'react';
import { useDispatch } from '@/redux/Hooks';
import { setProduct } from '@/redux/features/ProductSlice';
import { MyProduct } from '@/types/types';
import { FaTrash, FaEdit } from 'react-icons/fa';
import Image from 'next/image';
import { toast } from 'react-toastify';

interface ProductRowsProps {
  id: number;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateTable: React.Dispatch<React.SetStateAction<boolean>>;
  product: MyProduct;
}

const ProductRows: React.FC<ProductRowsProps> = ({
  product,
  id,
  setOpenPopup,
  setUpdateTable,
}) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(setProduct(product));
    setOpenPopup(true);
    console.log('open');
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/delete_product/${product._id} `, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);  
        setUpdateTable((prev) => !prev);
      } else {
        const data = await response.json();
        console.error('Error deleting product:', data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Failed to delete product');
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{product.name}</td>
      <td>
        {product.description.length > 100
          ? `${product.description.substring(0, 100)}...`
          : product.description}
      </td>
      <td>{product.price}</td>
      <td>
        <Image src={product.imgSrc} alt={product.name} width={40} height={40} />
      </td>
      <td>
        <div className="flex gap-2">
          <div onClick={handleEdit}>
            <FaEdit />
          </div>
          <div onClick={handleDelete}>
            <FaTrash />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ProductRows;