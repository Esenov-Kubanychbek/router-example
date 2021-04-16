import classes from "./Home.module.css";
import callof from "../image/callof.jpeg"
import dota from "../image/dota.jpg"
import protatype from "../image/prototype.jpg"

const Home = () => {
    return ( <div className={classes.Home}>
        <h1>Games</h1>
        <div className={classes.container}>
            <div className={classes.callof}>
                <img alt="callof" src={callof}/>
            </div>
            <div className={classes.dota}>
                <img alt="dota" src={dota}/> 
            </div>
            <div className={classes.protatype}>
                <img alt="protatype" src={protatype}/>
            </div>
        </div>


        
        <p>
            A <strong>game</strong>  is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool.[1] Games are distinct from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements. However, the distinction is not clear-cut, and many games are also considered to be work (such as professional players of spectator sports or games) or art (such as jigsaw puzzles or games involving an artistic layout such as Mahjong, solitaire, or some video games).</p>
        <p>
            Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. The players may have an audience of non-players, such as when people are entertained by watching a chess championship. On the other hand, players in a game may constitute their own audience as they take their turn to play. Often, part of the entertainment for children playing a game is deciding who is part of their audience and who is a player.</p>
    </div> );
}
 
export default Home;