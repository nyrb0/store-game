import Button from '../UI/buttons/Button';
import {useSelector,useDispatch } from 'react-redux';
import gameBuyClass from './GameBuy.module.scss'
import { delateItemFromCart, setItemInCart } from '../../redux/cart/reducer';

const GameBuy =({game})=>{
      const dispatch = useDispatch();
      const items = useSelector(state=>state.cart.itemsInCart)
      const isItemInCart = items.some(item =>item.id===game.id)

      const handleClick = (e)=>{
            e.stopPropagation();
            if(isItemInCart){
                  dispatch(delateItemFromCart(game.id)) 
            }else{      
                  dispatch(setItemInCart(game)) 
            }
      }
      return(
            <div className={gameBuyClass.buy}>
                  <span>{game.price} сом</span>
                  <Button
                  type={isItemInCart ? 'secondary':'primary'}
                  onClick={handleClick}
                  >
                        {isItemInCart ? 'Убрать из корзины' : 'В Корзину'}
                  </Button>
            </div>
      )
}
export default GameBuy;