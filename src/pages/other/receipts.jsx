import { useGetReceiptsQuery } from "../../redux/receiptApi";

const Receipts = () => {
    const {data} = useGetReceiptsQuery()

    return (
        <div className={box}>
            {!data && <div> Немає чеків</div>}

            {data && data?.map(item=>(
                    <div className={card}>

                        <div className='flex justify-between items-center pb-2 px-2'>
                            <h1>Дата: {item.dataValues.date}</h1> 
                           <h1>Загальна сума: {item.dataValues.total} грн.</h1>
                        </div>
                        
                        {item?.products.map(prod=>(
                            <div className={product}>
                                <h2>Назва: "{prod.product.title}"</h2>
                                <h2> кількість: {prod.quantity}</h2>
                                <h2>Ціна: {prod.price} грн.</h2>
                            </div>
                        ))}
                    </div>
            ))}
        </div>
    );
};

export default Receipts;


//styles
const product = 'border-t-[1px] flex items-center justify-between py-2 bg-green-50  px-3 hover:opacity-50'
const card = 'flex  py-4 bg-white shadow flex-col'
const box = 'flex flex-auto flex-col border-2 w-[900px] justify-center space-y-1 p-4 bg-gray-100'

