import gameCoverClass from './GameCover.module.scss';

const GameCover = ({image=""}) => {
  return (
    <div className={gameCoverClass.cover} style={{background: `url(${image})`,backgroundSize: "cover"}}>

    </div>
  );
};

export default GameCover;
