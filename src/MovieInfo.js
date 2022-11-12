import HappyGilmoreCover from './images/HappyGilmoreCover.jpg'
import AlienCover from './images/AlienCover.jpg'
import MinionsCover from './images/MinionsCover.jpg'

import HappyGilmoreTrailer from './trailers/HappyGilmoreTrailer.mp4'

import Rating_10 from './images/10.png'
import Rating_9 from './images/9.png'
import Rating_8 from './images/8.png'
import Rating_7 from './images/7.png'
import Rating_6 from './images/6.png'
import Rating_5 from './images/5.png'
import Rating_4 from './images/4.png'
import Rating_3 from './images/3.png'
import Rating_2 from './images/2.png'
import Rating_1 from './images/1.png'

export const movieInfo = {
    Alien: {
        title: "Alien",
        coverRoute: AlienCover,
        genre: "Horror",
        trailer: null,
        rating: null,
        description: null,
    },
    HappyGilmore: {
        title: "Happy Gilmore",
        coverRoute: HappyGilmoreCover,
        genre: "Comedy",
        trailer: HappyGilmoreTrailer,
        rating: Rating_7,
        description: "All Happy Gilmore (Adam Sandler) has ever wanted is to be a professional hockey player. But he soon discovers he may actually have a talent for playing an entirely different sport: golf. When his grandmother (Frances Bay) learns she is about to lose her home, Happy joins a golf tournament to try and win enough money to buy it for her. With his powerful driving skills and foulmouthed attitude, Happy becomes an unlikely golf hero -- much to the chagrin of the well-mannered golf professionals.",
    },
    MinionsRiseOfGru: {
        title: "Minions: Rise of Gru",
        coverRoute: MinionsCover,
        genre: "Comedy",
        trailer: null,
        rating: null,
        description: null,
    }
};