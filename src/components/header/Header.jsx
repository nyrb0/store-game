import { Link } from 'react-router-dom';
import headerClass from './Header.module.scss'
import CartBlock from './cart-block/CartBlock';


const Header = ()=>{
      return(
            <div className={headerClass.header}>
                  <div className={headerClass.wrapper}>
                        <Link to={'./home'} className={headerClass.title}>
                              Game Store
                        </Link>
                        <div className={headerClass.btnWrapper}>
                              <CartBlock/>
                        </div>
                  </div>
            </div>
      )
}
      
export default Header;