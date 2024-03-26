import cartBlockClass from './CartBlock.module.scss'
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { calcTotalPrice } from '../../utils';
import CartMenu from '../../cart-menu/CartMenu';
import { useState } from 'react';
import ItemsInCart from '../../items-in-cart/ItemsInCart';
const CartBlock = ()=>{
      const [isCartMenuVisible, setIsCartMenuVisible]= useState(false)
      const items = useSelector(state=>state.cart.itemsInCart)
      const totalPrice = calcTotalPrice(items)
      return(
            <div className={cartBlockClass.block}>
                  <ItemsInCart quantity={items.length}/>
                  <IoCartOutline size={25} 
                  className={cartBlockClass.icon} 
                  onClick={()=>setIsCartMenuVisible(!isCartMenuVisible)}/>
                  {totalPrice !== 0 ?
                  <span className={cartBlockClass.totalPrice}>{totalPrice}сом</span>
                  : null}
                  {isCartMenuVisible &&
                  <CartMenu items={items} onClick={()=>null}/>}
            </div>
      )
}

export default CartBlock;