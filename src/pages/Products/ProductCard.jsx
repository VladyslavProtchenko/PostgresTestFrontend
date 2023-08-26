import React, { useEffect, useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineCheck } from 'react-icons/ai';
import {  useSelector } from 'react-redux';
import { useCreateReceiptProductMutation } from '../../redux/receiptProductsApi';
import { useGetOpenReceiptQuery } from '../../redux/receiptApi';


const ProductCard = ({item}) => {
    const receipt = useSelector(store => store.receipt.currentReceipt)
    const [createProduct] = useCreateReceiptProductMutation()
    const [isAdded, setIsAdded] = useState(false)
    const {refetch} = useGetOpenReceiptQuery()
    
    useEffect(()=> setIsAdded(false), [receipt])
    
    const addProduct = async () => {
        if(isAdded) return
        const newProduct = {
            isFirst: Boolean(!receipt?.id),//пеервіряємо чи є відкритий чек 
            productId: item.id,
            receiptId: receipt?.id,
            price: item.price
        }
        await createProduct(newProduct)
        refetch()
        setIsAdded(true)
    }


    return (  
         <div className={box}>   
            <h1>{item.title}</h1>

            <div className={priceItem}>
                <span>{item.price} Грн.</span>
                <div className={icon} onClick={addProduct}>
                    {isAdded 
                        ? <AiOutlineCheck/>
                        : <AiOutlinePlusCircle />
                    }
                </div>
            </div>    
        </div>
    );
};

export default ProductCard;

//styles
const icon = 'cursor-pointer hover:text-green-500 text-gray-600'
const priceItem = 'flex items-center text-xs space-x-2'
const box = 'flex justify-between hover:bg-green-100 px-4  p-1 text-xs border-b-[1px] border-top-[1px] bg-green-50'