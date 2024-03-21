import GameBuy from '../game-buy/GameBuy';
import GameCover from '../game-cover/GameCover';
import GameGenre from '../game-genre/GameGenre';
import gameItemClass from './GameItem.module.scss'

const GameItem = ({games})=>{
      return (
            <div className={gameItemClass.gameItem}>
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