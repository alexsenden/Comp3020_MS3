import AirplaneCover from "./images/AirplaneCover.jpg";
import AlienCover from "./images/AlienCover.jpg";
import AvengersEndgameCover from "./images/AvengersEndgameCover.jpg";
import DieHardCover from "./images/DieHardCover.jpg";
import ForrestGumpCover from "./images/ForrestGumpCover.jpg";
import Furious7Cover from "./images/Furious7Cover.jpg";
import HappyGilmoreCover from "./images/HappyGilmoreCover.jpg";
import JurassicParkCover from "./images/JurassicParkCover.jpg";
import MinionsCover from "./images/MinionsCover.jpg";
import SkyfallCover from "./images/SkyfallCover.jpg";
import StarWarsLastJediCover from "./images/StarWarsLastJediCover.jpg";
import SpidermanNoWayHomeCover from "./images/SpidermanNoWayHomeCover.jpg";
import TheGodfatherCover from "./images/TheGodfatherCover.jpg";
import TheRidiculous6Cover from "./images/TheRidiculous6Cover.jpg";
import TheShawshankRedemptionCover from "./images/TheShawshankRedemptionCover.jpg";
import TitanicCover from "./images/TitanicCover.jpg";

import AirplaneTrailer from "./trailers/AirplaneTrailer.mp4";
import AlienTrailer from "./trailers/AlienTrailer.mp4";
import AvengersEndgameTrailer from "./trailers/AvengersEndgameTrailer.mp4";
import DieHardTrailer from "./trailers/DieHardTrailer.mp4";
import ForrestGumpTrailer from "./trailers/ForrestGumpTrailer.mp4";
import Furious7Trailer from "./trailers/Furious7Trailer.mp4";
import HappyGilmoreTrailer from "./trailers/HappyGilmoreTrailer.mp4";
import JurassicParkTrailer from "./trailers/JurassicParkTrailer.mp4";
import MinionsTrailer from "./trailers/MinionsTrailer.mp4";
import SkyfallTrailer from "./trailers/SkyfallTrailer.mp4";
import StarWarsLastJediTrailer from "./trailers/StarWarsLastJediTrailer.mp4";
import SpidermanNoWayHomeTrailer from "./trailers/SpidermanNoWayHomeTrailer.mp4";
import TheGodfatherTrailer from "./trailers/TheGodfatherTrailer.mp4";
import TheRidiculous6Trailer from "./trailers/TheRidiculous6Trailer.mp4";
import TheShawshankRedemptionTrailer from "./trailers/TheShawshankRedemptionTrailer.mp4";
import TitanicTrailer from "./trailers/TitanicTrailer.mp4";

import Rating_10 from "./images/10.png";
import Rating_9 from "./images/9.png";
import Rating_8 from "./images/8.png";
import Rating_7 from "./images/7.png";
import Rating_6 from "./images/6.png";
import Rating_5 from "./images/5.png";
import Rating_4 from "./images/4.png";
import Rating_3 from "./images/3.png";
import Rating_2 from "./images/2.png";
import Rating_1 from "./images/1.png";

/*
  Template
  {
    title: "",
    coverRoute: Cover,
    genres: [],
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
  drama: 19,
  historical: 20,
};

export const movieInfo = [
  {
    title: "Airplane!",
    coverRoute: AirplaneCover,
    genres: [
      genre.comedy,
      genre.parody,
      genre.disaster,
      genre.romance,
      genre.satire,
    ],
    trailer: AirplaneTrailer,
    rating: Rating_8,
    description:
      "This spoof comedy takes shots at the slew of disaster movies that were released in the 70s. When the passengers and crew of a jet are incapacitated due to food poisoning, a rogue pilot with a drinking problem must cooperate with his ex-girlfriend turned stewardess to bring the plane to a safe landing.",
  },
  {
    title: "Alien",
    coverRoute: AlienCover,
    genres: [
      genre.horror,
      genre.science_fiction,
      genre.adventure,
      genre.fantasy,
      genre.mystery,
    ],
    trailer: AlienTrailer,
    rating: Rating_9,
    description:
      "In deep space, the crew of the commercial starship Nostromo is awakened from their cryo-sleep capsules halfway through their journey home to investigate a distress call from an alien vessel. The terror begins when the crew encounters a nest of eggs inside the alien ship. An organism from inside an egg leaps out and attaches itself to one of the crew, causing him to fall into a coma.",
  },
  {
    title: "Avengers: Endgame",
    coverRoute: AvengersEndgameCover,
    genres: [
      genre.action,
      genre.adventure,
      genre.superhero,
      genre.science_fiction,
      genre.fantasy,
    ],
    trailer: AvengersEndgameTrailer,
    rating: Rating_9,
    description:
      "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
  },
  {
    title: "Die Hard",
    coverRoute: DieHardCover,
    genres: [genre.action, genre.adventure, genre.thriller, genre.mystery],
    trailer: DieHardTrailer,
    rating: Rating_8,
    description:
      "New York City policeman John McClane (Bruce Willis) is visiting his estranged wife (Bonnie Bedelia) and two daughters on Christmas Eve. He joins her at a holiday party in the headquarters of the Japanese-owned business she works for. But the festivities are interrupted by a group of terrorists who take over the exclusive high-rise, and everyone in it. Very soon McClane realizes that there's no one to save the hostages -- but him.",
  },
  {
    title: "Forrest Gump",
    coverRoute: ForrestGumpCover,
    genres: [genre.comedy, genre.romance, genre.drama],
    trailer: ForrestGumpTrailer,
    rating: Rating_9,
    description:
      "Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).",
  },
  {
    title: "Furious 7",
    coverRoute: Furious7Cover,
    genres: [genre.action, genre.crime, genre.thriller],
    trailer: Furious7Trailer,
    rating: Rating_7,
    description:
      "After defeating international terrorist Owen Shaw, Dominic Toretto (Vin Diesel), Brian O'Conner (Paul Walker) and the rest of the crew have separated to return to more normal lives. However, Deckard Shaw (Jason Statham), Owen's older brother, is thirsty for revenge. A slick government agent offers to help Dom and company take care of Shaw in exchange for their help in rescuing a kidnapped computer hacker who has developed a powerful surveillance program.",
  },
  {
    title: "Happy Gilmore",
    coverRoute: HappyGilmoreCover,
    genres: [genre.comedy, genre.romance, genre.sports],
    trailer: HappyGilmoreTrailer,
    rating: Rating_7,
    description:
      "All Happy Gilmore (Adam Sandler) has ever wanted is to be a professional hockey player. But he soon discovers he may actually have a talent for playing an entirely different sport: golf. When his grandmother (Frances Bay) learns she is about to lose her home, Happy joins a golf tournament to try and win enough money to buy it for her. With his powerful driving skills and foulmouthed attitude, Happy becomes an unlikely golf hero -- much to the chagrin of the well-mannered golf professionals.",
  },
  {
    title: "Jurassic Park",
    coverRoute: JurassicParkCover,
    genres: [
      genre.action,
      genre.science_fiction,
      genre.adventure,
      genre.fantasy,
      genre.thriller,
      genre.mystery,
    ],
    trailer: JurassicParkTrailer,
    rating: Rating_9,
    description:
      "In Steven Spielberg's massive blockbuster, paleontologists Alan Grant (Sam Neill) and Ellie Sattler (Laura Dern) and mathematician Ian Malcolm (Jeff Goldblum) are among a select group chosen to tour an island theme park populated by dinosaurs created from prehistoric DNA. While the park's mastermind, billionaire John Hammond (Richard Attenborough), assures everyone that the facility is safe, they find out otherwise when various ferocious predators break free and go on the hunt.",
  },
  {
    title: "Minions: Rise of Gru",
    coverRoute: MinionsCover,
    genres: [
      genre.comedy,
      genre.action,
      genre.adventure,
      genre.science_fiction,
      genre.family,
      genre.crime,
      genre.animation,
    ],
    trailer: MinionsTrailer,
    rating: Rating_7,
    description:
      "In the heart of the 1970s, amid a flurry of feathered hair and flared jeans, Gru (Oscar® nominee Steve Carell) is growing up in the suburbs. A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them. Luckily, he gets some mayhem-making backup from his loyal followers, the Minions. Together, Kevin, Stuart, Bob, and Otto--a new Minion sporting braces and a desperate need to please--deploy their skills as they and Gru build their first lair, experiment with their first weapons and pull off their first missions. When the Vicious 6 oust their leader, legendary fighter Wild Knuckles (Oscar® winner Alan Arkin), Gru interviews to become their newest member. It doesn't go well (to say the least), and only gets worse after Gru outsmarts them and suddenly finds himself the mortal enemy of the apex of evil. On the run, Gru will turn to an unlikely source for guidance, Wild Knuckles himself, and discover that even bad guys need a little help from their friends.",
  },
  {
    title: "Skyfall",
    coverRoute: SkyfallCover,
    genres: [
      genre.action,
      genre.adventure,
      genre.thriller,
      genre.mystery,
      genre.crime,
    ],
    trailer: SkyfallTrailer,
    rating: Rating_8,
    description:
      "When James Bond's (Daniel Craig) latest assignment goes terribly wrong, it leads to a calamitous turn of events: Undercover agents around the world are exposed, and MI6 is attacked, forcing M (Judi Dench) to relocate the agency. With MI6 now compromised inside and out, M turns to the one man she can trust: Bond. Aided only by a field agent (Naomie Harris), Bond takes to the shadows and follows a trail to Silva (Javier Bardem), a man from M's past who wants to settle an old score.",
  },
  {
    title: "Spider-Man: No Way Home",
    coverRoute: SpidermanNoWayHomeCover,
    genres: [
      genre.action,
      genre.comedy,
      genre.superhero,
      genre.science_fiction,
      genre.adventure,
      genre.fantasy,
    ],
    trailer: SpidermanNoWayHomeTrailer,
    rating: Rating_9,
    description:
      "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange's help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who've ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse.",
  },
  {
    title: "Star Wars: The Last Jedi",
    coverRoute: StarWarsLastJediCover,
    genres: [genre.action, genre.science_fiction, genre.space, genre.fantasy],
    trailer: StarWarsLastJediTrailer,
    rating: Rating_7,
    description:
      "Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.",
  },
  {
    title: "The Godfather",
    coverRoute: TheGodfatherCover,
    genres: [genre.crime, genre.drama],
    trailer: TheGodfatherTrailer,
    rating: Rating_10,
    description:
      "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business.",
  },
  {
    title: "The Ridiculous 6",
    coverRoute: TheRidiculous6Cover,
    genres: [genre.comedy, genre.action],
    trailer: TheRidiculous6Trailer,
    rating: Rating_5,
    description:
      "The Ridiculous 6 is a Comedy Western written by, produced by, and starring Adam Sandler, as well as Terry Crews, Jorge Garcia, Taylor Lautner, Rob Schneider and Luke Wilson, featuring Nick Nolte and Danny Trejo, and cameoing Vanilla Ice, David Spade, Blake Shelton, and others. It follows Tommy (Sandler), also known by his Apache name of White Knife, who reunites with his father, Frank Stockburn (Nolte) who claims that he is dying of consumption before he is kidnapped at gunpoint by Cicero for the $50,000 he claims to have buried from his prior ill-gotten gains. White Knife, an orphan raised by Native Americans, discovers that five outlaws are actually his half-brothers. Together, they set out to save their wayward father.",
  },
  {
    title: "The Shawshank Redemption",
    coverRoute: TheShawshankRedemptionCover,
    genres: [genre.drama, genre.mystery, genre.crime],
    trailer: TheShawshankRedemptionTrailer,
    rating: Rating_10,
    description:
      "Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years.",
  },
  {
    title: "Titanic",
    coverRoute: TitanicCover,
    genres: [genre.romance, genre.disaster, genre.drama, genre.historical],
    trailer: TitanicTrailer,
    rating: Rating_8,
    description:
      'James Cameron\'s "Titanic" is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the "ship of dreams" -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.',
  },
];
