import AirplaneCover from './images/AirplaneCover.jpg'
import AlienCover from './images/AlienCover.jpg'
import AvengersEndgameCover from './images/AvengersEndgameCover.jpg'
import DieHardCover from './images/DieHardCover.jpg'
import HappyGilmoreCover from './images/HappyGilmoreCover.jpg'
import MinionsCover from './images/MinionsCover.jpg'
import StarWarsLastJediCover from './images/StarWarsLastJediCover.jpg'

import AirplaneTrailer from './trailers/AirplaneTrailer.mp4'
import AlienTrailer from './trailers/AlienTrailer.mp4'
import AvengersEndgameTrailer from './trailers/AvengersEndgameTrailer.mp4'
import DieHardTrailer from './trailers/DieHardTrailer.mp4'
import HappyGilmoreTrailer from './trailers/HappyGilmoreTrailer.mp4'
import MinionsTrailer from './trailers/MinionsTrailer.mp4'
import StarWarsLastJediTrailer from './trailers/StarWarsLastJediTrailer.mp4'

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

/*
    Template
    {
        title: "",
        coverRoute: Cover,
        genre: "",
        trailer: Trailer,
        rating: Rating_,
        description: "",
    },
*/

export const genre = {
    forYou: -2,
    trending: -1,
    comedy: 1,
    satire: 2,
    disaster: 3,
    romance: 4,
    parody: 5,
    horror: 6,
    science_fiction: 7,
    adventure: 8,
    fantasy: 9,
    mystery: 10,
    action: 11,
    thriller: 12,
    sports: 13,
    family: 14,
    crime: 15,
    animation: 16,
    superhero: 17,
    space: 18,
}

export const movieInfo = [
    {
        title: "Airplane",
        coverRoute: AirplaneCover,
        genres: [genre.comedy, genre.parody, genre.disaster, genre.romance, genre.satire],
        trailer: AirplaneTrailer,
        rating: Rating_8,
        description: "This spoof comedy takes shots at the slew of disaster movies that were released in the 70s. When the passengers and crew of a jet are incapacitated due to food poisoning, a rogue pilot with a drinking problem must cooperate with his ex-girlfriend turned stewardess to bring the plane to a safe landing.",
    },
    {
        title: "Alien",
        coverRoute: AlienCover,
        genres: [genre.horror, genre.science_fiction, genre.adventure, genre.fantasy, genre.mystery],
        trailer: AlienTrailer,
        rating: Rating_9,
        description: "In deep space, the crew of the commercial starship Nostromo is awakened from their cryo-sleep capsules halfway through their journey home to investigate a distress call from an alien vessel. The terror begins when the crew encounters a nest of eggs inside the alien ship. An organism from inside an egg leaps out and attaches itself to one of the crew, causing him to fall into a coma.",
    },
    {
        title: "Avengers: Endgame",
        coverRoute: AvengersEndgameCover,
        genres: [genre.action, genre.adventure, genre.superhero, genre.science_fiction, genre.fantasy],
        trailer: AvengersEndgameTrailer,
        rating: Rating_9,
        description: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
    },
    {
        title: "Die Hard",
        coverRoute: DieHardCover,
        genres: [genre.action, genre.adventure, genre.thriller, genre.mystery],
        trailer: DieHardTrailer,
        rating: Rating_8,
        description: "New York City policeman John McClane (Bruce Willis) is visiting his estranged wife (Bonnie Bedelia) and two daughters on Christmas Eve. He joins her at a holiday party in the headquarters of the Japanese-owned business she works for. But the festivities are interrupted by a group of terrorists who take over the exclusive high-rise, and everyone in it. Very soon McClane realizes that there's no one to save the hostages -- but him.",
    },
    {
        title: "Happy Gilmore",
        coverRoute: HappyGilmoreCover,
        genres: [genre.comedy, genre.romance, genre.sports],
        trailer: HappyGilmoreTrailer,
        rating: Rating_7,
        description: "All Happy Gilmore (Adam Sandler) has ever wanted is to be a professional hockey player. But he soon discovers he may actually have a talent for playing an entirely different sport: golf. When his grandmother (Frances Bay) learns she is about to lose her home, Happy joins a golf tournament to try and win enough money to buy it for her. With his powerful driving skills and foulmouthed attitude, Happy becomes an unlikely golf hero -- much to the chagrin of the well-mannered golf professionals.",
    },
    {
        title: "Minions: Rise of Gru",
        coverRoute: MinionsCover,
        genres: [genre.comedy, genre.action, genre.adventure, genre.science_fiction, genre.family, genre.crime, genre.animation],
        trailer: MinionsTrailer,
        rating: Rating_7,
        description: "In the heart of the 1970s, amid a flurry of feathered hair and flared jeans, Gru (Oscar® nominee Steve Carell) is growing up in the suburbs. A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them. Luckily, he gets some mayhem-making backup from his loyal followers, the Minions. Together, Kevin, Stuart, Bob, and Otto--a new Minion sporting braces and a desperate need to please--deploy their skills as they and Gru build their first lair, experiment with their first weapons and pull off their first missions. When the Vicious 6 oust their leader, legendary fighter Wild Knuckles (Oscar® winner Alan Arkin), Gru interviews to become their newest member. It doesn't go well (to say the least), and only gets worse after Gru outsmarts them and suddenly finds himself the mortal enemy of the apex of evil. On the run, Gru will turn to an unlikely source for guidance, Wild Knuckles himself, and discover that even bad guys need a little help from their friends."
    },
    {
        title: "Star Wars: The Last Jedi",
        coverRoute: StarWarsLastJediCover,
        genres: [genre.action, genre.science_fiction, genre.space, genre.fantasy],
        trailer: StarWarsLastJediTrailer,
        rating: Rating_7,
        description: "Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy."
    },
]