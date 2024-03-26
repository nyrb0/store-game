import { useDispatch } from 'react-redux';
import orderItemClass from './OrderItem.module.scss'
import GameCover from '../game-cover/GameCover'
const OrderItem = ({game})=>{

      const dispatch = useDispatch();
      // const handle

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
                  </div>
            </div>
      )
}
export default OrderItem;