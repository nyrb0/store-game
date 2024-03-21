import genreClass from './GameGenre.module.scss'

const GameGenre = ({genre})=>{

      return(
            <span className={genreClass.genres}>
                  {genre}
            </span>
      )
}

export default GameGenre