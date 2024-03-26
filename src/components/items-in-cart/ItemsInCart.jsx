import itemsCartClass from './ItemsInCart.module.scss'

const ItemsInCart = ({
      quantity=0
})=>{
      
      return quantity > 0 ? (
            <div className={itemsCartClass.cart}>
                  {quantity}
            </div>
      ):null
}
export default ItemsInCart;