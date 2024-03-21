import Button from '../UI/buttons/Button';
import gameBuyClass from './GameBuy.module.scss'

const GameBuy =({game})=>{
      return(
            <div className={gameBuyClass.buy}>
                  <span>{game.price} сом</span>
                  <Button
                  type='primary'
                  onClick={()=>null}
                  >
                        В Корзину
                  </Button>
            </div>
      )
}
export default GameBuy;