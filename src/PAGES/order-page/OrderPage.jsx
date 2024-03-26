import { useSelector } from 'react-redux';
import orderPageClass from './OrderPage.module.scss'
import { calcTotalPrice } from '../../components/utils';
import OrderItem from '../../components/order-item/OrderItem';

const OrderPage =()=>{
      const items = useSelector(state=>state.cart.itemsInCart)

      if(items.length < 1){
            return <h1>Ваша корзина пуста</h1>
      }
      return(
            <div className={orderPageClass.page}>
                  <div className={orderPageClass.left}>
                        {items.map(game=><OrderItem game={game} key={game.id}/>)}
                  </div>
                  <div className={orderPageClass.right}>
                        <div className={orderPageClass.totalPrice}>
                              <span>
                                    {items.length}товаров на сумму {calcTotalPrice(items)} сом
                              </span>
                        </div>
                  </div>
            </div>
      )
}
export default OrderPage;