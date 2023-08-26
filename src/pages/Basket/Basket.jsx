import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard';
import { useGetReceiptProductsQuery } from '../../redux/receiptProductsApi';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateReceiptMutation } from '../../redux/receiptApi';
import { setReceipt } from '../../redux/receiptSlice';


const Basket = () => {
    const dispatch = useDispatch()
    const receipt = useSelector(store => store.receipt.currentReceipt)
    const [close ] = useUpdateReceiptMutation()
    const { data } = useGetReceiptProductsQuery(receipt ? receipt.id :  0)

    const [isClosed, setIsClosed] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const totalPrice = data ? data.reduce((a,c) =>  a + (c.price*c.quantity), 0 ) : 0


    useEffect(()=>{
        setIsActive(false)
        if(receipt) setIsClosed(false)
        if(receipt && data?.length > 0) setIsActive(true)
    },[receipt, data?.length])


    const closeReceipt = async () => {
        if(data?.length < 1) return
        setIsClosed(true)
        await close({ id: receipt.id, total: totalPrice })
        dispatch(setReceipt(null))
    }


    return (
        <div className={box}>

            <ul className={header}>
                <li className={tag}>#</li>
                <li className={title}>Наіменування</li>
                <li className={quantity}>Кількість</li>
                <li className={price}>Вартість</li>
            </ul>

            
            <section className={list}>
                {isClosed && data?.length == 0 && <h1 className={loading}>Дякуємо що ви з нами</h1>}
                {!receipt?.id && !isClosed && <h1 className={loading}>Обирайте продукти</h1>}
                {(data?.length < 1) && receipt && <h1 className={loading}>Кошик порожній</h1>}
                {data && [...data].sort((a,b)=> a.product.title.localeCompare(b.product.title)).map((item, index) => (
                    <ProductCard item={item} index={index}  />
                ))}
            </section>
            

            <section className={payment}>
                <div className={total}>До сплати: {(totalPrice).toFixed(2)} грн.</div>

                <div className={buttons}>
                    <button className={isActive? payActive: pay} onClick={closeReceipt}>картою</button>
                    <button className={isActive? payActive2: pay} onClick={closeReceipt}>готівкою</button>
                </div>
            </section>
        </div>
    );
};

export default Basket;

//styles
const modal = 'flex items-center justify-center  absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25'
const content = 'bg-white px-5 py-3 shadow opacity-100 rounded text-xs'

const loading = 'w-[100%] flex justify-center pt-20'
const payment = 'flex px-4 py-2 text-xs justify-between w-[100%] border-t-[1px]'
const total = ''
const buttons = 'space-x-2'
const pay = 'px-2 py-1 bg-gray-600 text-white hover:bg-gray-500 rounded'
const payActive = 'px-2 py-1 bg-blue-900 hover:bg-blue-700 text-white hover:bg-gray-500 rounded'
const payActive2 = 'px-2 py-1 bg-pink-800 hover:bg-pink-600 text-white hover:bg-gray-500 rounded'

const list = 'flex flex-col flex-row grow '

const tag ='w-[10%]'
const title ='w-[50%]'
const quantity ='w-[20%]'
const price ='w-[20%]'
const header = ' h-min flex px-2 py-1 border-b-[1px] w-[100%] text-gray-700 '

const box = ' flex flex-col flex-auto shadow-md rounded w-[58%] bg-white max-h-[500px] relative'
