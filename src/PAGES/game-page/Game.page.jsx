import { useDispatch, useSelector } from 'react-redux';
import gamePageClass from './GamePage.module.scss'
import GameCover from '../../components/game-cover/GameCover';
import GameGenre from '../../components/game-genre/GameGenre';
import GameBuy from '../../components/game-buy/GameBuy';

const GamePage = ()=>{
      const game =useSelector(state=>state.game.currentGame)
      if(!game)return null
      return(
            <div className={gamePageClass.page}>
                  <h1 className={gamePageClass.title}>
                        {game.title}    
                  </h1>
                  <div className={gamePageClass.content}>
                        <div className={gamePageClass.left}>
                              <iframe 
                              width='90%'
                              height='400px'
                              src={game.video}
                              title="YouTube Video Player"
                              frameBorder='none'
                              ></iframe>
                   </div>
                              <div className={gamePageClass.right}>
                                    <GameCover image={game.image}/>
                                    <p>{game.description}</p>
                                    <p className={gamePageClass.secondaryText}>Популярные метки этого продукта:</p>
                                    {game.genres.map(genre=><GameGenre genre={genre} key={genre}/>)}
                                    <div className={gamePageClass.buyGame}>
                                          <GameBuy game={game}/>
                                    </div>
                              </div> 
                        </div>      

            </div>
      )
}
export default GamePage;