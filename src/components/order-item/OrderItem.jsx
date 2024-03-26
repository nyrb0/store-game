import { useDispatch } from 'react-redux';
import orderItemClass from './OrderItem.module.scss'
import GameCover from '../game-cover/GameCover'
import { AiOutlineCloseCircle } from "react-icons/ai";
import {delateItemFromCart} from '../../redux/cart/reducer'
const OrderItem = ({game})=>{

      const dispatch = useDispatch();
      // const handle

      const handlerClick =()=>{

            return(
                  dispatch(delateItemFromCart(game.id))
            )
      }
      return(
            <div className={orderItemClass.item}>
                  <div className={orderItemClass.cover}>
                        <GameCover image={game.image}/>
                  </div>
                  <div  className={orderItemClass.title}>
                        <span>{game.title}</span>
                  </div>
                  <div className={orderItemClass.price}>
                        <span>{game.price} сом</span>
                        <AiOutlineCloseCircle
                        size={25}
                        className={orderItemClass.delateIcon}
                        onClick={handlerClick}
                        />
                  </div>
            </div>
      )
}
export default OrderItem;