import classes from "./Home.module.css";
import callof from "../image/callof.jpeg"
import dota from "../image/dota.jpg"
import protatype from "../image/prototype.jpg"
import { useState } from "react";

const Home = () => {
    return ( <div className={classes.Home}>
        
        <div className={classes.header}>
            <h1>PC Games</h1>
            <p>A PC game, also known as a computer game or personal computer game, is a type of video game played on a personal computer rather than a video game console or arcade machine. Its defining characteristics include: more diverse and user-determined gaming hardware and software; and generally greater capacity in input, processing, video and audio output.</p>
        </div>
        <div className={classes.container}>
            <div className={classes.backdrop} id="backdrop1">
                <h5>
                The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008), before releasing Black Ops (2010) and subsequently creating the Black Ops sub-series. Four other entries, Black Ops II (2012), III (2015), 4 (2018), and Cold War (2020) were made, the latter in conjunction with Raven Software. Sledgehammer Games, who were co-developers for Modern Warfare 3, have also developed two titles, Advanced Warfare (2014) and WWII (2017).
                </h5>
            </div>
            <div className={classes.cart}>
                <img src={callof} alt="jpeg"/>
                <h2>Call of Duty</h2>
                <p>Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space.</p>
            </div>
            <div className={classes.backdrop}>
                <h5>
                The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008), before releasing Black Ops (2010) and subsequently creating the Black Ops sub-series. Four other entries, Black Ops II (2012), III (2015), 4 (2018), and Cold War (2020) were made, the latter in conjunction with Raven Software. Sledgehammer Games, who were co-developers for Modern Warfare 3, have also developed two titles, Advanced Warfare (2014) and WWII (2017).
                </h5>
            </div>
            <div className={classes.cart}>
                <img src={protatype} alt="jpeg"/>
                <h2>Dota2</h2>
                <p>Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve. The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos.</p>
            </div>
            <div className={classes.backdrop}>
                <h5>
                The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008), before releasing Black Ops (2010) and subsequently creating the Black Ops sub-series. Four other entries, Black Ops II (2012), III (2015), 4 (2018), and Cold War (2020) were made, the latter in conjunction with Raven Software. Sledgehammer Games, who were co-developers for Modern Warfare 3, have also developed two titles, Advanced Warfare (2014) and WWII (2017).
                </h5>
            </div>
            <div className={classes.cart}>
                <img src={dota} alt="jpeg"/>
                <h2>Protatype</h2>
                <p>Prototype (stylized as [PROTOTYPE]) is an open-world action-adventure video game developed by Radical Entertainment and published by Activision. The game was released in North America on June 9, 2009. </p>
            </div>
        </div>
        

    </div> );
}
 
export default Home;