import cartBlockClass from './CartBlock.module.scss'
import { IoCartOutline } from "react-icons/io5";
const CartBlock = ()=>{
      return(
            <div className={cartBlockClass.block}>
                  <IoCartOutline size={25} calcMode={cartBlockClass.icon}/>
                  <span className={cartBlockClass.totalPrice}>1232сом</span>
            </div>
      )
}

export default CartBlock;