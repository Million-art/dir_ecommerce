import React, { useState } from 'react';
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
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleEdit = () => {
    dispatch(setProduct(product));
    setOpenPopup(true);
  };

  const handleDelete = async () => {
    setShowConfirmation(true); // Show confirmation popup
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(`/api/delete_product/${product._id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        setUpdateTable(prev => !prev);
        toast.success('Product deleted successfully');
      } else {
        const data = await response.json();
        console.error('Error deleting product:', data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Failed to delete product');
    } finally {
      setShowConfirmation(false); // Close confirmation popup
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false); // Close confirmation popup
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

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-96 p-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-800 font-medium text-lg mb-4">
              Are you sure you want to delete this product?
            </p>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"
                onClick={handleConfirmDelete}
              >
                Yes
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded"
                onClick={handleCancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
    </tr>
  );
};

export default ProductRows;
