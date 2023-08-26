import React from 'react';
import { useDeleteReceiptMutation } from '../redux/receiptApi';
import { useDispatch, useSelector } from 'react-redux';
import { setReceipt } from '../redux/receiptSlice';
import { TbBrandQq, TbReceipt,Tb24Hours, TbSkull } from 'react-icons/tb';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch() 
    const navigate = useNavigate()
    const receipt = useSelector(store => store.receipt.currentReceipt)
    const [remove] = useDeleteReceiptMutation()

    const removeReceipt = async () => {
      remove({id: receipt?.id})
      dispatch(setReceipt(null))
    }

    return (
        <div className={box}>
            <nav className={container}>
              <NavLink exact  to='/'>
                <h1>MediaService</h1>
              </NavLink>
              
              <div className={buttons}>
                    <button className={black} onClick={()=>navigate(-1)}>назад</button>
                    <button className={red} onClick={removeReceipt} >видалити чек</button>
              </div>

              <nav className={menu}>
                <NavLink to='/' className='pr-2 text-xl text-pink-800'><TbBrandQq/></NavLink>
                <NavLink to='/receipts'  ><TbReceipt/></NavLink>
                <NavLink to='/end' ><Tb24Hours/></NavLink>
                <NavLink to='/end' ><TbSkull/></NavLink>
              </nav>
            </nav>
        </div>
    );
};

export default Header;


const container = 'flex w-[900px] px-2 pt-4 justify-between'
const buttons ='flex items-center space-x-2 pb-1'
const black ='px-2 py-1 rounded bg-gray-800 text-white text-bold text-xs'
const red ='px-2 py-1 rounded bg-red-500 text-white text-bold text-xs'
const menu ='flex text-black items-center space-x-2'
const box = 'flex w-screen justify-center items-center bg-white'
