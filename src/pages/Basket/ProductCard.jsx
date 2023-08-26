import React from 'react';
import { FiPlus, FiMinus, FiX } from 'react-icons/fi';
import { useDeleteReceiptProductMutation, useUpdateReceiptProductMutation } from '../../redux/receiptProductsApi';


const ProductCard = ({ item, index }) => {
    const [ remove ] = useDeleteReceiptProductMutation()
    const [ updateQantity ] = useUpdateReceiptProductMutation()

    const deleteProduct = async (data) => await remove({id: item.id})
    const updateProduct = async (data) => await updateQantity(data)

    
    return (
        <div className={box}>
            <div className={number}>{index + 1}</div>
            <h1 className={title}>{item.product.title}</h1>
            <div className={quantity}>

                <div 
                    className={qItem} 
                    onClick={()=>updateProduct({...item, quantity: item.quantity + 1})}
                ><FiPlus/></div>

                <span>{item.quantity}</span>

                <div 
                    className={qItem} 
                    onClick={async ()=>{
                        updateProduct({...item, quantity: item.quantity - 1})
                        if(item.quantity < 2 ) deleteProduct()
                    }}
                ><FiMinus/></div>

            </div>

            <div className={price}>
                {(item.price*item.quantity).toFixed(2)} Грн.
            </div>

            <div className={close} onClick={deleteProduct}>
                <FiX/>
            </div>
        </div>
    );
};

export default ProductCard;

//styles 
const qItem = 'cursor-pointer hover:text-gray-500'
const close = 'w-[10%] flex  justify-center cursor-pointer hover:text-gray-500'
const price = 'w-[20%] text-right'
const number= 'w-[20%]'
const title= 'w-[50%]'
const quantity= 'flex w-[20%] justify-around items-center'

const box = 'flex w-[100%] bg-gray-50 hover:bg-gray-100 justify-between items-center px-2 py-1 h-min'