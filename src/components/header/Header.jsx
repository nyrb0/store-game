import { Link } from 'react-router-dom';
import headerClass from './Header.module.scss'


const Header = ()=>{
      return(
            <div className={headerClass.header}>
                  <div className={headerClass.wrapper}>
                        <Link className={headerClass.title}>
                              Game Store
                        </Link>
                        <div className={headerClass.BtnWrapper}>
                              cart
                        </div>
                  </div>
            </div>
      )
}

export default Header;