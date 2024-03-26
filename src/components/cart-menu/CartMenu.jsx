import Button from '../UI/buttons/Button';
import CartItem from '../cart-item/CartItem';
import { calcTotalPrice } from '../utils';
import cartMenuClass from './CartMenu.module.scss'
const CartMenu = ({items,onClick})=>{
      
      return(
            <div className={cartMenuClass.menu}>
                  <div className={cartMenuClass.gamesList}>
                        {
                              items.length ? items.map(game=>
                                    <CartItem 
                                    key={game.title}
                                    title={game.title}
                                    price={game.price}
                                    id={game.id}
                                    />)
                                    :'Корзина пуста'
                        }
                  </div>
                  {
                        items.length ? (
                              <div className={cartMenuClass.arrange}>
                                    <div className={cartMenuClass.totalPrice}>
                                          <span>Итого:</span>
                                          <span>{calcTotalPrice(items)} сом</span>
                                    </div>
                                    <Button type='primary' onClick={onClick}>
                                          Оформить заказ
                                    </Button>
                              </div>
                        ):null
                  }
            </div>
      )
}
export default CartMenu;