import { useDispatch } from 'react-redux';
import GameBuy from '../game-buy/GameBuy';
import GameCover from '../game-cover/GameCover';
import GameGenre from '../game-genre/GameGenre';
import gameItemClass from './GameItem.module.scss'
import { useNavigate } from 'react-router-dom';
import { setCurrentGame } from '../../redux/games/reducer';


const GameItem = ({games})=>{
      const history = useNavigate();
      const dispatch = useDispatch()
      const handleClick =()=>{
            dispatch(setCurrentGame(games))
            history(`/app/${games.title}`)
      }
      return (
            <div className={gameItemClass.gameItem} onClick={handleClick}>
                  <GameCover image={games.image}/>
                  <div className={gameItemClass.details}>
                        <span className={gameItemClass.title}>{games.title}</span>
                        <div className={gameItemClass.genre}>
                              {games.genres.map(genre=><GameGenre genre={genre} key={genre}/>)}
                        </div>
                  </div>
                  <div className={gameItemClass.buy}>
                        <GameBuy game={games}/>
                  </div>
            </div>
      )
}

export default GameItem;