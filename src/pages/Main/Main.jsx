import Basket from '../Basket/Basket';
import Products from '../Products/Products';

const Home = () => {

    return (
        <div className={box}>
            <Products/>
            <Basket/>
        </div>
    );
};

export default Home;

const box = 'flex flex-auto border-2 w-[900px] justify-center p-4 space-x-4 bg-gray-100'

