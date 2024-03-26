import cartItemClass from './CartItem.module.scss'


const CartItem = ({
      title,
      price,
      id
})=>{
      return(
            <div className={cartItemClass.item}>
                  <span>{title}</span>
                  <div className={cartItemClass.price}>
                        <span>{price} сом</span>
                  </div>
            </div>
      )
}

export default CartItem