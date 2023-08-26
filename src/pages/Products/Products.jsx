import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import ProductCard from './ProductCard';
import { useGetProductsQuery } from '../../redux/productsApi';
import { useDispatch } from 'react-redux';
import { useGetOpenReceiptQuery } from '../../redux/receiptApi';
import { setReceipt } from '../../redux/receiptSlice';


const Products = () => {
    const dispatch = useDispatch()
    const { data = [], } = useGetProductsQuery()
    const { data: receipt = null,} = useGetOpenReceiptQuery()

    dispatch(setReceipt(receipt))


    return (
        <div className={box}>
            <section className={searching}>
                <input className={searchInput} type="text" placeholder="пошук за назвою, виробником або штрихкодом"/>
            </section>

            <section>
                <nav className={buttons}>
                    <button className={buttonGreen}>Майка</button>
                    <button className={buttonRed}>Вишиванка</button>
                </nav>
                
                <nav className={types}>
                    <div className={icon}><AiFillHome /></div> / 
                    <span className={linkItem}>Пельмені </span> 
                    <span>i</span> 
                    <span> хінкалі</span>  
                </nav>
            </section>

            <section>
                {data?.errors && <h1>{data.original.detail}</h1>}
                {data && data?.map(item =>(
                    <ProductCard item={item} key={item.title}/>
                ))}
            </section>
        </div>
    );
};

export default Products;

//styles
const linkItem = ''
const icon = 'flex pb-[2px] mr-1'
const types = 'flex items-center px-2 space-x-1 border-b-[1px] border-t-[1px] py-2 text-xs'

const buttonGreen = 'text-xs px-2 py-1 bg-green-400 rounded font-bold	'
const buttonRed = 'text-xs px-2 py-1 bg-red-400 rounded font-bold	'
const buttons = 'flex space-x-2 p-2'

const searchInput = 'border-[1px] rounded w-[100%] text-xs px-2 py-1'
const searching = 'p-2 w-[100%] border-b-[1px]'

const box = 'bg-white w-[38%] flex flex-col  flex-auto shadow-md rounded max-h-[500px]'



