# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)
# u1 = User.create(username: 'user1', password: 'password', email: '111@gmail.com',is_admin: 'true')
# u2 = User.create(username: 'user2', password: 'password', email: '222@gmail.com')
# u3 = User.create(username: 'user3', password: 'password', email: '333@gmail.com')
# u4 = User.create(username: 'user4', password: 'password', email: '444@gmail.com')
# u5 = User.create(username: 'user5', password: 'password', email: '555@gmail.com')

# Platform.create([
#     {
#         title:"PC"
#     },
#     {
#         title:"Xbox 360"
#     },
#     {
#         title:"Xbox One"
#     },
#     {
#         title:"PlayStation 5"
#     },
#     {
#         title:"PlayStation 4"
#     },
#     {
#         title:"Nintendo 3DS"
#     },
#     {
#         title:"Nintendo Switch"
#     },
#     {
#         title:"Xbox Series X/S"
#     }
# ])

# Category.create([
#     {
#         title: "Real-time strategy(RTS)"
#     },
#     {
#         title: "Shooters(FPS and TPS)"
#     },
#     {
#         title: "Multiplayer online battle arena(MOBA)"
#     },
#     {
#         title: "Role-playing(RPG, ARPG, and More)"
#     },
#     {
#         title: "sports"
#     },
#     {
#         title: "Strategy"
#     },
#     {
#         title: "Action-adventure"
#     },
#     {
#         title: "Survival and horror"
#     },
#     {
#         title: "racing"
#     },
#     {
#         title: "music"
#     }
# ])

# Product.create([
#     {
#         title: "Warcraft III: Reign of Chaos",
#         amount:100,
#         category_id: 1,
#         description: "Warcraft III takes place on a map of varying size, such as large plains and fields, with terrain features like rivers, mountains, seas, or cliffs. The map is initially hidden from view and only becomes visible through exploration. Areas no longer in sight range of an allied unit or building are covered with the fog of war, meaning that while the terrain remains visible, changes such as enemy troop movements and building construction are not. During a game, players must establish settlements to gain resources, defend against others, and train units to explore the map and fight computer controlled foes. There are three main resources that are managed in Warcraft III: gold, lumber, and food. The first two are required to construct units and buildings, while food restricts the maximum number of units that can be possessed at the same time. Additionally, a new upkeep system means that producing units over certain amounts will decrease the amount of gold one can earn, compelling players to focus on playing with a limited number of units to avoid penalties",
#         platform: "PC",
#         release_date: "2002-07-03",
#         price: 24.99,
#         msrp: 24.99,
#         feature:"Unlike other RTS games, Warcraft III has introduced a new element of game play, special units called heroes, they are super units that have special abilities that expand as the game progresses (as they gain experience). For example, an Archmage hero can acquire the ability to (temporarily) summon water-elementals, increase the mana regeneration rate of surrounding magic casting units, create a blizzard over enemy units, and teleport friendly units to other parts of the map. In the course of a game a maximum of up to three heroes can be built, but if they die, they can be revived at an altar."
#     },
#     {
#         title: "StarCraft",
#         amount:100,
#         category_id: 1,
#         description: "Blizzard Entertainment's use of three distinct races in StarCraft is widely credited with revolutionizing the real-time strategy genre. All units are unique to their respective races, and while rough comparisons can be drawn between certain types of units in the technology tree, every unit performs differently and requires different tactics for a player to succeed.",
#         platform: "PC",
#         release_date: "1998-03-31",
#         price: 28.99,
#         msrp: 28.99,
#         feature:"StarCraft is a real-time strategy video game that features three unique playable races (Terrans, Zerg, Protoss), resource management, base building, a technology tree, unit micro and macro management, multiplayer mode, and a strong esports community."
#     },
#     {
#         title: "Call of Duty 4: Modern Warfare",
#         amount:100,
#         category_id: 2,
#         description: "Call of Duty 4: Modern Warfare is a first-person shooter. A character can be positioned in one of three stances: standing, crouching, or prone, each affecting the character's rate of movement, accuracy, and stealth. Using cover helps the player avoid enemy fire or recover health after taking significant damage. As such, there are no armor or health power-ups. When the character has taken damage, the edges of the screen glow red and the character's heartbeat increases. If the character stays out of fire, the character can recover. When the character is within the blast radius of a live grenade, a marker indicates the direction of the grenade, helping the player to either flee or toss it back to the enemy.",
#         platform: "PC",
#         release_date: "2007-11-05",
#         price: 27.99,
#         msrp: 27.99,
#         feature:"Call of Duty 4: Modern Warfare features a single-player campaign that follows a fictional conflict in the Middle East and a popular multiplayer mode that allows players to compete against each other in various game modes and maps. Unlike previous Call of Duty games that were set in World War II, Modern Warfare is set in a modern-day conflict and features modern weapons, vehicles, and technology."
#     },
#     {
#         title: "Call of Duty 4: Modern Warfare",
#         amount:100,
#         category_id: 2,
#         description: "Call of Duty 4: Modern Warfare is a first-person shooter. A character can be positioned in one of three stances: standing, crouching, or prone, each affecting the character's rate of movement, accuracy, and stealth. Using cover helps the player avoid enemy fire or recover health after taking significant damage. As such, there are no armor or health power-ups. When the character has taken damage, the edges of the screen glow red and the character's heartbeat increases. If the character stays out of fire, the character can recover. When the character is within the blast radius of a live grenade, a marker indicates the direction of the grenade, helping the player to either flee or toss it back to the enemy.",
#         platform: "Xbox 360",
#         release_date: "2007-11-05",
#         price: 38.99,
#         msrp: 38.99,
#         feature:"Call of Duty 4: Modern Warfare features a single-player campaign that follows a fictional conflict in the Middle East and a popular multiplayer mode that allows players to compete against each other in various game modes and maps. Unlike previous Call of Duty games that were set in World War II, Modern Warfare is set in a modern-day conflict and features modern weapons, vehicles, and technology."
#     },
#     {
#         title: "WWE 2K23",
#         amount:100,
#         category_id: 5,
#         description: "Expanded features, gorgeous graphics, and the ultimate WWE experience. Hit the ring with a deep roster of WWE Superstars and Legends including Roman Reigns, “American Nightmare” Cody Rhodes, Ronda Rousey, Brock Lesnar, “Stone Cold” Steve Austin, and more!",
#         platform: "Xbox One",
#         release_date: "2023-03-17",
#         price: 149.75,
#         is_popular: true,
#         is_new_released: true,
#         msrp: 149.75,
#         feature:"WWE 2K23 features a wide range of wrestlers from the WWE roster, including both current and past wrestlers. They also typically include various game modes, such as career mode, online multiplayer, and exhibition matches. Additionally, players can create their own wrestlers, arenas, and championship belts, and the game may include updated graphics and gameplay mechanics."
#     },
#     {
#         title: "WWE 2K23",
#         amount:100,
#         category_id: 5,
#         description: "Expanded features, gorgeous graphics, and the ultimate WWE experience. Hit the ring with a deep roster of WWE Superstars and Legends including Roman Reigns, “American Nightmare” Cody Rhodes, Ronda Rousey, Brock Lesnar, “Stone Cold” Steve Austin, and more!",
#         platform: "PlayStation 5",
#         release_date: "2023-03-17",
#         price: 149.75,
#         is_popular: true,
#         is_new_released: true,
#         msrp: 149.75,
#         feature:"WWE 2K23 features a wide range of wrestlers from the WWE roster, including both current and past wrestlers. They also typically include various game modes, such as career mode, online multiplayer, and exhibition matches. Additionally, players can create their own wrestlers, arenas, and championship belts, and the game may include updated graphics and gameplay mechanics."
#     },
#     {
#         title: "Pokemon Y",
#         amount:100,
#         category_id: 4,
#         description: "The Pokemon games are a series of role-playing games where you assume the role of a hero and set off on an exciting adventure with mysterious creatures called Pokemon! Beyond the exciting story, the series contains many social features, such as trading and battling with friends!

#         Your grand adventure will take you to many amazing locations on your quest to become the Champion, the strongest Trainer of all. No matter where you go, you'll encounter many different wild Pokemon that you can befriend. You're also sure to meet lots of interesting people, as well as encounter Legendary Pokemon!
        
#         Two newly discovered Legendary Pokemon arrive in Pokemon Y. Much mystery still surrounds the Legendary Xerneas and Yveltal, but their importance in your journey will surely be revealed!",
#         platform: "Nintendo 3DS",
#         release_date: "2013-10-12",
#         price: 60.99,
#         msrp:60.99,
#         feature:"It is set in the Kalos region, featuring new and classic Pokémon species, and introduces 3D graphics that enhance immersive gameplay and battles. The game features Mega Evolution, allowing certain Pokémon to temporarily evolve into more powerful forms during battles, and players can customize their character's appearance, including gender, skin tone, and clothing. Improved online multiplayer features allow players to battle and trade Pokémon with others around the world. Other features include the introduction of the Fairy type, Sky Battles that take place in the sky, and Horde Battles that pit players against multiple wild Pokémon at once. Pokémon-Amie lets players interact with their Pokémon by petting, feeding, and playing with them to increase their affection and performance in battle. Pokémon Y received critical acclaim for its new features, 3D graphics, and immersive gameplay, becoming one of the best-selling games on the Nintendo 3DS."
        
#     },
#     {
#         title: "Hogwarts Legacy",
#         amount:100,
#         category_id: 4,
#         description: "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations as you explore and discover fantastic beasts, customize your character and craft potions, master spell casting, upgrade talents and become the wizard you want to be.
        
#         Experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Discover the feeling of living at Hogwarts as you make allies, battle Dark wizards, and ultimately decide the fate of the wizarding world. Your legacy is what you make of it.",
#         platform: "PlayStation 5",
#         release_date: "2023-02-10",
#         price: 65.65,
#         is_popular: true,
#         is_new_released: true,
#         msrp: 65.65,
#         feature:"The game features an open-world environment where players can explore various locations, interact with characters, and engage in combat with magical creatures and enemies. Players can create their own character, attend classes, and learn spells and potions. The game promises to have a branching storyline that is affected by player choices, with a focus on moral decisions and consequences. Hogwarts Legacy aims to deliver an immersive and authentic Wizarding World experience that fans of the Harry Potter franchise will enjoy."
#     },
#     {
#         title: "The Legend of Zelda: Tears of the Kingdom",
#         amount:100,
#         category_id: 4,
#         description: "An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda™: Tears of the Kingdom for the Nintendo Switch system. The adventure is yours to create in a world fueled by your imagination.

#         In this sequel to The Legend of Zelda: Breath of the Wild, you will decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link’s new abilities to fight back against the malevolent forces that threaten the kingdom?",
#         platform: "Nintendo Switch",
#         release_date: "2023-05-12",
#         price: 89.95,
#         is_popular: true,
#         is_released:false,
#         msrp:89.95,
#         feature:"The games feature a combination of exploration, puzzle-solving, and combat, with a focus on discovery and adventure. The series is known for its iconic music, unique art style, and memorable characters. Each game introduces new gameplay mechanics, puzzles, and dungeons. Items and weapons, such as the boomerang and hookshot, are key to progressing through the game. The series also features a rich mythology, including recurring elements such as the Triforce and the Master Sword. The Legend of Zelda franchise has received critical acclaim and has become one of Nintendo's most beloved and enduring franchises, with a passionate fan base."
#     },
#     {
#         title: "Metroid Prime Remastered",
#         amount:100,
#         category_id: 7,
#         description: "Intergalactic bounty hunter Samus Aran receives a distress signal from a wrecked frigate in orbit around planet Tallon IV. Upon investigation, the frigate reveals itself to be a Space Pirate research vessel home to terrifying genetic experiments using the mysterious Phazon substance. There, Samus encounters her nemesis, Meta Ridley, whom she pursues to the surface of Tallon IV. It’s up to her alone to explore the planet’s interconnected regions, investigate its dark secrets, and end the intergalactic threat posed by Phazon.

#         Experience this critically acclaimed first-person adventure like never before with remastered visuals, audio, controls, and more.",
#         platform: "Nintendo Switch",
#         release_date: "2023-02-08",
#         price: 59.95,
        
#         is_new_released: true,
#         msrp:59.95,
#         feature:"Trained as a warrior and infused with Chozo DNA, the indomitable Samus Aran patrols the galaxy as a feared freelance bounty hunter. Explore some of the Chozo-created weapons and abilities Samus has at her fingertips on this adventure.

#         Power Suit - An advanced Chozo exoskeleton modified for use by Samus Aran, the Power Suit provides life-support functions and is well-shielded from attack. The modular nature of the Power Suit allows for the addition of weapons, Visors, climate resistance, and other gear as needed.
#         Visors - Signature abilities of the Metroid Prime series, the Power Suit's selectable user interfaces help Samus analyze and interact with the world around her. The Scan Visor allows Samus to investigate objects and enemies from an accumulated database. Upgrades like the Thermal Visor and X-ray Visor allow Samus to see her environment in new ways.
#         Arm Cannon - Samus' main weapon converts her bioenergy into a Beam, which can be fired rapidly or charged up for greater power. Upgrades like explosive Missiles, the electrified Wave Beam, and others can expand her arsenal in essential ways. Many doors can only be unlocked with specific Arm Cannon abilities.
#         Morph Ball - Samus can transform into Morph Ball form - approximately one meter in diameter - to roll through narrow passages and other hard-to-reach areas. Like the Power Suit, the Morph Ball is modular. There are several modifications that can be added to improve performance, including the Bomb attack and Boost Ball maneuver."
#     },
#     {
#         title: "Mario Kart 8 Deluxe",
#         amount:100,
#         category_id: 9,
#         description: "Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favourites, such as King Boo, Dry Bones, and Bowser Jr.!",
#         platform: "Nintendo Switch",
#         release_date: "2017-04-28",
#         price: 79.95,
#         is_popular: true,
#         msrp:79.95,
#         feature:"Race your friends in the definitive version of Mario Kart 8, only on Nintendo Switch!
#         Race as every character on every track from the Wii U version, including DLC characters and tracks.
#         Pop some balloons in the revamped Battle mode, complete with Balloon Battle and Bob-omb Blast.
#         Battle on new courses, like Urchin Underpass and Battle Stadium, or returning ones, such as GCN Luigi's Mansion and SNES Battle Course 1.
#         Inkling Girl & Inkling Boy from Splatoon, King Boo, Dry Bones, and Bowser Jr. join the roster!
#         Players can choose a new Smart Steering feature which makes driving and staying on the track easy for novice players and kids even at 200cc
#         Three new vehicles have been added, two are even inspired by Splatoon
#         Carry two items at the same time
#         Returning items include Boo, the item-stealing ghost, and the Feather, which gives you a high jump in battle mode.
#         Play your friends in local wireless multiplayer with up to 8 players.
#         Drive through in 1080p HD quality in TV mode
#         Play on the go with handheld mode and play anytime, anywhere."
        
#     },
#     {
#         title: "Red Dead Redemption 2",
#         amount:100,
#         category_id: 7,
#         description: "America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
#         platform: "PlayStation 4",
#         release_date: "2018-10-26",
#         price: 79.95,
#         msrp:79.95,
#         feature:''
#     },
#     {
#         title: "Diablo IV",
#         amount:100,
#         category_id: 4,
#         description: "Diablo IV's version of Sanctuary is vast, and it's rife with opportunity for adventure. Decades have passed since the events of Diablo III: Reaper of Souls, and Lilith, the Daughter of Hatred, is determined to rule over Sanctuary once more. The choices to play your way in the game are richer and more extensive than ever!",
#         platform: "PlayStation 5",
#         release_date: "2023-06-06",
#         price: 109.95,
#         is_popular: true,
#         is_released:false,
#         msrp:109.95,
#         feature:"Explore 140+ Dungeons and Side Quests throughout the campaign and beyond, earning rewards and deepening the story experience
#         Defeat World Bosses by teaming up with other players to reap bonus treasures
#         Local Events that will pop up throughout Sanctuary's lands and yield quick rewards
#         Liberate Strongholds that, once cleansed of corrupted demons and hostile beasts, become friendly outposts to forever alter the layout of the world
#         Character Development complete with class selection, a variety of skills to harness multiple powers, and a wide array of cosmetics."
#     },
#     {
#         title: "Star Wars Jedi: Survivor",
#         amount:100,
#         category_id: 7,
#         description: "The story of Cal Kestis continues in Star Wars Jedi: Survivor™, a third person galaxy-spanning action-adventure game from Respawn Entertainment, developed in collaboration with Lucasfilm Games. This narratively-driven, single player title picks up five years after the events of Star Wars Jedi: Fallen Order™ and follows Cal’s increasingly desperate fight as the galaxy descends further into darkness. Pushed to the edges of the galaxy by the Empire, Cal will find himself surrounded by threats new and familiar. As one of the last surviving Jedi Knights, Cal is driven to make a stand during the galaxy’s darkest times - but how far is he willing to go to protect himself, his crew, and the legacy of the Jedi Order?

#         To survive, players will build upon Cal’s training with an expanded list of iconic Force abilities, combat stances, and lightsaber customizations that can be combined in new and different ways to fight as a Jedi. While the Force is a powerful ally, it may not be enough. Cal will have to get creative and master new abilities, tactics and even leverage the environment around him to overcome the obstacles ahead.
        
#         Fans of Star Wars™ will travel to new planets and familiar frontiers as Cal seeks to reunite the crew of the Stinger Mantis. New Force abilities, equipment and upgrades will enable players to search, explore, and re-traverse in new ways across multiple planets, each with their own unique challenges to face. The Galaxy is full of stories, secrets, and treasures to uncover for those willing to face the dangers that lay off the beaten path.",
#         platform: "PlayStation 5",
#         release_date: "2023-04-28",
#         price: 119.95,
#         is_popular: true,
#         is_released:false,
#         msrp:119.95,
#         feature:"Continue Cal’s Journey – No longer a Padawan, Cal has come into his own and grown into a powerful Jedi Knight. Carrying the memories and expectations of the Jedi Order with him, his crusade against the Empire has only become more perilous. The Dark Times are closing in - with enemies new and familiar surrounding him, Cal will need to decide how far he’s willing to go to save those closest to him.
#         Go Beyond Your Training – The cinematic combat system returns with additional Force abilities and new lightsaber fighting styles. Creatively leverage all these abilities and weapons to strategically take on an expanded host of enemies, sizing up strengths and weaknesses while cleverly utilizing your training to overcome your opponents and solve the mysteries that lay in your path.
#         Explore an Untamed Galaxy – Discover new planets and familiar frontiers in the Star Wars galaxy, each with unique biomes, challenges, and enemies. Master new skills, equipment, and abilities that will augment the ways you explore, fight, and roam. With larger areas to explore and more to discover off the beaten path, players who adventure beyond the horizon will find hidden rewards."
#     },
#     {
#         title: "Star Wars Jedi: Survivor",
#         category_id: 7,
#         description: "The story of Cal Kestis continues in Star Wars Jedi: Survivor™, a third person galaxy-spanning action-adventure game from Respawn Entertainment, developed in collaboration with Lucasfilm Games. This narratively-driven, single player title picks up five years after the events of Star Wars Jedi: Fallen Order™ and follows Cal’s increasingly desperate fight as the galaxy descends further into darkness. Pushed to the edges of the galaxy by the Empire, Cal will find himself surrounded by threats new and familiar. As one of the last surviving Jedi Knights, Cal is driven to make a stand during the galaxy’s darkest times - but how far is he willing to go to protect himself, his crew, and the legacy of the Jedi Order?

#         To survive, players will build upon Cal’s training with an expanded list of iconic Force abilities, combat stances, and lightsaber customizations that can be combined in new and different ways to fight as a Jedi. While the Force is a powerful ally, it may not be enough. Cal will have to get creative and master new abilities, tactics and even leverage the environment around him to overcome the obstacles ahead.
        
#         Fans of Star Wars™ will travel to new planets and familiar frontiers as Cal seeks to reunite the crew of the Stinger Mantis. New Force abilities, equipment and upgrades will enable players to search, explore, and re-traverse in new ways across multiple planets, each with their own unique challenges to face. The Galaxy is full of stories, secrets, and treasures to uncover for those willing to face the dangers that lay off the beaten path.",
#         platform: "Xbox Series X/S",
#         release_date: "2023-04-28",
#         price: 119.95,
#         is_popular: true,
#         is_released:false,
#         msrp:119.95,
#         feature:"Continue Cal’s Journey – No longer a Padawan, Cal has come into his own and grown into a powerful Jedi Knight. Carrying the memories and expectations of the Jedi Order with him, his crusade against the Empire has only become more perilous. The Dark Times are closing in - with enemies new and familiar surrounding him, Cal will need to decide how far he’s willing to go to save those closest to him.
#         Go Beyond Your Training – The cinematic combat system returns with additional Force abilities and new lightsaber fighting styles. Creatively leverage all these abilities and weapons to strategically take on an expanded host of enemies, sizing up strengths and weaknesses while cleverly utilizing your training to overcome your opponents and solve the mysteries that lay in your path.
#         Explore an Untamed Galaxy – Discover new planets and familiar frontiers in the Star Wars galaxy, each with unique biomes, challenges, and enemies. Master new skills, equipment, and abilities that will augment the ways you explore, fight, and roam. With larger areas to explore and more to discover off the beaten path, players who adventure beyond the horizon will find hidden rewards."
#     },
#     {
#         title: "Overwatch 2",
#         amount:100,
#         description: "A hero-focused first-person team shooter from Blizzard Entertainment.",
#         category_id: 2,
#         platform: "PC",
#         release_date: "2022-10-04",
#         price:44.65,
#         msrp:44.65,
#         feature:"One of the major additions is the introduction of a story campaign mode, where players can experience the game's lore and storylines through cooperative missions. The game also introduces new hero talents, allowing players to customize their hero's abilities and playstyles. The game's graphics have also been upgraded with new visual effects, including improved lighting and character models. The game features cross-play with Overwatch, allowing players to play with others on different platforms. The game is designed to build on the success of the first game while introducing new elements to keep the gameplay fresh and exciting."
#       },
#       {
#         title: "Warlander",
#         amount:100,
#         description: "A medieval-style combat game with a selection of modes and characters.",
#         category_id:3,
#         platform: "PC",
#         release_date: "2023-01-24",
#         price:60.99,
#         msrp:60.99,
#         feature:"The game features fast-paced combat that relies on the use of both melee and ranged attacks, as well as a unique limb-targeting system that allows players to strategically disable their enemies by targeting specific body parts. The game also features a progression system that allows players to unlock new skills and abilities as they level up. The game's dark fantasy setting is brought to life with detailed graphics and atmospheric music. The game is designed to provide an engaging and challenging combat experience for players who enjoy action-packed games with a unique twist."
        
#       },
#       {
#         title: "Omega Strikers",
        
#         description: "A 3v3 socccer-style game with knockouts.",
#         category_id:5,
#         platform: "PC",
#         release_date: "2022-09-16",
#         price:55.95,
#         msrp:55.95,
#         feature:"The game features fast-paced, side-scrolling action, with a focus on co-operative gameplay. Players can switch between characters on the fly, using each commando's unique abilities to overcome enemies and obstacles. The game also features a variety of power-ups and upgrades, allowing players to enhance their weapons and abilities. The game's graphics are colorful and cartoonish, with a retro-style aesthetic reminiscent of classic arcade games. The game is designed to be accessible to both casual and hardcore gamers, with adjustable difficulty levels and a high level of replayability."
#       },
#       {
#         title: "Grand Theft Auto V",
#         amount:100,
#         description: "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world. Composed of the San Andreas open countryside area, including the fictional Blaine County, and the fictional city of Los Santos, the world is much larger in area than earlier entries in the series.It may be fully explored after the game's beginning without restriction, although story progress unlocks more gameplay content.",
#         category_id:7,
#         platform: "Xbox One",
#         release_date: "2013-09-17",
#         price:35.65,
#         is_popular:true,
#         msrp:35.65,
#         feature:"The game is set in the fictional city of Los Santos, based on Los Angeles, and players can explore the city and surrounding countryside, completing missions and engaging in various activities, such as driving, shooting, and heists. The game also features a comprehensive online multiplayer mode, where players can team up with others to complete missions, engage in PvP battles, and participate in various activities. The game's graphics are detailed and immersive, with realistic character animations and environments. The game is known for its mature themes and adult-oriented content, including violence, drug use, and profanity. Grand Theft Auto V has received critical acclaim and has become one of the best-selling video games of all time."
#       },
#       {
#         title: "Marvel's Midnight Suns",
        
#         description: "You are the hunter, a legendary demon slayer with a mysterious past...and secrets you have yet to uncover.

#         When the demonic Lilith and her fearsome horde unite with the evil armies of Hydra, it’s time to unleash Marvel’s dark side. As The Hunter, your mission is to lead an unlikely team of seasoned Super Heroes and dangerous supernatural warriors to victory. Can legends such as Doctor Strange, Iron Man, and Blade put aside their differences in the face of a growing apocalyptic threat? If you’re going to save the world, you'll have to forge alliances and lead the team into battle as the legendary Midnight Suns.
        
#         With an array of upgradeable characters and skills allowing you to build your own unique version of The Hunter, you will choose how to send Lilith’s army back to the underworld.
        
#         Marvel's Midnight Suns is a tactical RPG set in the darker side of Marvel. As a new and customisable original Marvel character, lead a powerful team of supernatural Super Heroes facing growing unholy threats. Experience a Tactical Marvel game unlike any other. You must fight vigorously, strategise smartly, and lead an unexpected combination of Marvel Super Heroes to save the world from the rising darkness.
        
#         ",
#         category_id:4,
#         platform: "PlayStation 5",
#         release_date: "2022-12-02",
#         price:109.95,
#         is_popular:true,
#         msrp:109.95,
#         feature:"The game features turn-based combat, with players controlling a team of heroes with their own unique abilities and powers. The game also features a deck-building system that allows players to customize their heroes' abilities and attacks. The game's graphics are stunning, with highly detailed character models and environments. The game is designed to appeal to both fans of the Marvel Universe and RPG fans looking for a new and exciting gameplay experience."
#       },
#       {
#         title: "Age of Wonders: Planetfall",
#         amount:100,
#         description: "In Age of Wonders: Planetfall, players will explore the remnants of the Star Union, once a vast empire connecting thousands of worlds, but its people have been left isolated and stranded following the Collapse. Hundreds of years later, separation has turned siblings into divergent factions, out to rebuild the world as they see fit.

#         Emerge from the cosmic dark age of a fallen galactic empire to build a new future. Build an empire with one of six unique factions, ranging from the militant Vanguard to the dinosaur-riding Amazons and the cyborg-zombies of the Assembly. Progress through each faction's missions using wits, military strength and diplomacy, exploring planetary ruins and encountering other survivors as the history of a shattered civilization unravels. Fight, build, negotiate and technologically advance a path to utopia in a deep single-player campaign, on random skirmish maps, and against friends in multiplayer.",
#         category_id:6,
#         platform: "PlayStation 4",
#         release_date: "2019-08-06",
#         price:59.95,
#         msrp:59.95,
#         feature:"The game features six different factions, each with its own unique playstyle and abilities, and a variety of customizable units and commanders. The game also features a deep technology tree, allowing players to unlock new weapons, vehicles, and upgrades. The game's combat system is turn-based, with players using a variety of different tactics and strategies to defeat their enemies. The game also features a single-player campaign and a multiplayer mode, allowing players to compete against each other online. The game's graphics are highly detailed, with realistic character models and environments. The game is designed to appeal to both fans of the Age of Wonders series and newcomers to the genre."
        
#       },
#       {
#         title: "Resident Evil 4 Lenticular Edition",
#         amount:100,
#         description: "Resident Evil™ 4 joins Leon S. Kennedy six years after his hellish experiences in the biological disaster of Raccoon City. His unmatched resolve caused him to be recruited as an agent reporting directly to the president of the United States. With the experience of multiple missions on his back, Leon is dispatched to rescue the president’s recently kidnapped daughter. Leon tracks her to a secluded European village however, after making first contact he discovers a fervour beyond reason grips the local populace. As a title that set the standard for the later Resident Evil™ franchise, the original Resident Evil™ 4 introduced the Third-Person-Camera to the long-running series, which has shipped over 127 million units worldwide since the first title debuted in 1996.

#         Now, this reimagined tale of survival in the face of overwhelming terror returns to deliver a visually stunning modern gaming experience that is true to the promise of the original release. Many team members from the production of 2019’s top-selling and critically acclaimed Resident Evil™ 2 also make their return to delve deeper into the essence of Resident Evil 4. Fans and newcomers alike can revel in both the new and familiar, as RE Engine heightens the design and creative direction of the original game.",
#         category_id:8,
#         platform: "PlayStation 5",
#         release_date: "2023-03-24",
#         price:109.95,
#         is_released:false,
#         msrp:109.95,
#         feature:"The game features intense action and puzzle-solving elements, with players facing off against hordes of zombie-like enemies and other monsters. The Lenticular Edition also includes a unique 3D lenticular cover, which features Leon and a zombie in a dynamic pose that changes depending on the angle viewed. The game is designed to appeal to both fans of the original game and newcomers to the series."
#       },
#       {
#         title: "Monster Energy Supercross 6",
#         amount:100,
#         description: "First time on a dirt bike? No worries! New tools and riding aids will help you out, allowing you to customize your experience according to your riding style and build your path to glory regardless of your initial skill level. And now you can also take advantage of your own personal Coach, the King Jeremy McGrath, who'll teach you how to master the art of riding. Complete his challenges, learn the ropes in the Supercross Academy and find the champion in you!",
#         category_id:9,
#         platform: "PlayStation 4",
#         release_date: "2018-02-13",
#         price:99.95,
#         msrp:99.95,
#         feature:"Career - Your Path To Glory:

#         Futures - Start your Career from the bottom and show everyone your worth! Find a sponsor, defeat your opponents, and climb the ladder of the Championship to get what you deserve!
#         Rookie - Get right into the action and race in the Supercross 250 East or West division. Personalize your rider's abilities through the Skill Tree, complete the missions assigned by your Coach and keep your rider in good shape with dedicated training sessions. Succeed and you'll become a Pro!
#         Pro - Turn your passion into glory and compete at the highest level in the 450 Championship. Create rivalries, make critical choices, and realize your dream to be the next Supercross Champion.
#         The Coach - Jeremy McGrath:
        
#         The ""KING"" of Supercross will be your personal guide through the whole game. Listen to his advice and valuable tips, learn the basics in the Supercross Academy, and follow his lead to train and become a champion in the Career mode. You can also look for Jeremy in the Supercross Park, he'll always have a new challenge ready for you!
#         Free Roam in the Supercross Park:
        
#         Explore a new, massive free-roaming environment, the Supercross Park! Test your skills across 5 different areas: the peak, the airport, the stadium, the quarry, and the player pit. Race on both Motocross and Supercross tracks and have fun, alone or with your friends, with tons of different activities to complete. Never a dull moment in the Supercross Park!
#         1v1 Duels - Rhythm Attack:
        
#         No turns, no second chances. It's all about your skills and speed! Defeat your rivals one by one, besting them on straight flow sections with no room for mistakes. Push yourself and your friends to the limit and become the king of the couch, thanks to the return of the split screen mode. Let's keep the rhythm!
#         Customisations to Express Yourself:
        
#         Helmet and Sticker Customisation - Find your look and customize your bike and rider with 600+ accessories from the most iconic after-market brands. Unleash your creativity by designing your own helmets and stickers and then let the community use your creations CROSS-PLATFORM!
#         The Track Editor is Back! - And for a complete custom experience, the acclaimed Track Editor is back! Now you have access to a variety of new terrains to create unique tracks to share with riders all around the world, or race on tons of tracks created by other players CROSS-PLATFORM!
#         "
        
#       },
#       {
#         title: "Olympic Games Tokyo 2020 - The Official Video Game",
        
#         description: "The Olympic Games are finally here, and this time it's your chance for glory! Whether you play with friends, family, or shoot for the stars on the global leaderboards, Tokyo 2020 is a party game that anyone can pick up and enjoy together!
#         Get ready to unleash the competitor within as you create your athlete, train them up and join the fun. Why settle for standard sportswear when you can take centre stage as a pirate, astronaut or the blue blur himself, Sonic the Hedgehog! Going for gold has never been this much fun!",
#         category_id:5,
#         platform: "Xbox One",
#         release_date: "2021-06-22",
#         price:89.95,
#         msrp:89.95,
#         feature:"Choose Between Fun-Fueled 18 Arcade-Style Events:
#         100m
#         110m Hurdles
#         4x100m Relay
#         100m Freestyle (Swimming)
#         200m Individual Medley (Swimming)
#         Baseball
#         Basketball
#         Beach Volleyball
#         BMX
#         Boxing
#         Football
#         Hammer Throw
#         Judo
#         Long Jump
#         Rugby Sevens
#         Sport Climbing
#         Table Tennis
#         Tennis"
        
#       },
#       {
#         title: "Olympic Games Tokyo 2020 - The Official Video Game",
#         amount:100,
#         description: "The Olympic Games are finally here, and this time it's your chance for glory! Whether you play with friends, family, or shoot for the stars on the global leaderboards, Tokyo 2020 is a party game that anyone can pick up and enjoy together!
#         Get ready to unleash the competitor within as you create your athlete, train them up and join the fun. Why settle for standard sportswear when you can take centre stage as a pirate, astronaut or the blue blur himself, Sonic the Hedgehog! Going for gold has never been this much fun!",
#         category_id:5,
#         platform: "PlayStation 4",
#         release_date: "2021-06-22",
#         price:89.95,
#         msrp:89.95,
#         feature:"Choose Between Fun-Fueled 18 Arcade-Style Events:
#         100m
#         110m Hurdles
#         4x100m Relay
#         100m Freestyle (Swimming)
#         200m Individual Medley (Swimming)
#         Baseball
#         Basketball
#         Beach Volleyball
#         BMX
#         Boxing
#         Football
#         Hammer Throw
#         Judo
#         Long Jump
#         Rugby Sevens
#         Sport Climbing
#         Table Tennis
#         Tennis"
        
#       },
#       {
#         title: "Olympic Games Tokyo 2020 - The Official Video Game",
#         amount:100,
#         description: "The Olympic Games are finally here, and this time it's your chance for glory! Whether you play with friends, family, or shoot for the stars on the global leaderboards, Tokyo 2020 is a party game that anyone can pick up and enjoy together!
#         Get ready to unleash the competitor within as you create your athlete, train them up and join the fun. Why settle for standard sportswear when you can take centre stage as a pirate, astronaut or the blue blur himself, Sonic the Hedgehog! Going for gold has never been this much fun!",
#         category_id:5,
#         platform: "Nintendo Switch",
#         release_date: "2021-06-22",
#         price:89.95,
#         msrp:89.95,
#         feature:"Choose Between Fun-Fueled 18 Arcade-Style Events:
#         100m
#         110m Hurdles
#         4x100m Relay
#         100m Freestyle (Swimming)
#         200m Individual Medley (Swimming)
#         Baseball
#         Basketball
#         Beach Volleyball
#         BMX
#         Boxing
#         Football
#         Hammer Throw
#         Judo
#         Long Jump
#         Rugby Sevens
#         Sport Climbing
#         Table Tennis
#         Tennis"
#       },
#       {
#         title: "LEGO Ninjago Movie Video Game",
#         amount:100,
#         description: "The LEGO® NINJAGO Movie Video Game will allow players to delve into the world of the new big-screen animated adventure The LEGO® NINJAGO Movie. In the game, players battle their way through waves of enemies with honour and skill as their favourite ninjas Lloyd, Nya, Jay, Kai, Cole, Zane and Master Wu to defend their home island of Ninjago from the evil Lord Garmadon and his Shark Army. To do so, they must master the art of Ninjagility which allows them to traverse Ninjago by wall-running, high-jumping and battling the foes of Ninjago to rank up and upgrade the ninja’s combat skills. Players can harness the power of Spinjitzu combat to defend Ninjago together.",
#         category_id:7,
#         platform: "Xbox One",
#         release_date: "2017-10-20",
#         price:89.95,
#         msrp:89.95,
#         feature:"The game features stunning graphics, with highly detailed environments and characters that faithfully capture the look and feel of the movie. The game also features a co-op mode, allowing players to team up with friends to take on the game's challenges together. The game is designed to appeal to both fans of the LEGO series and fans of the Ninjago franchise."
#       },
#       {
#         title: "F1 2021",
        
#         description: "Every story has a beginning in F1® 2021, the official videogame of the 2021 FIA FORMULA ONE WORLD CHAMPIONSHIP™. Enjoy the stunning new features of F1® 2021, including the thrilling story experience 'Braking Point', two-player Career, and get even closer to the grid with 'Real-Season Start'. Take your team to the top in the acclaimed ten-year 'My Team' Career mode, or race head-to-head in split-screen and multiplayer. Immerse yourself in the greatest racing spectacle on the planet and race with the authentic lineup of twenty heroic drivers and ten iconic teams from the 2021 season: 'Braking Point' - the thrilling new story experience
#         New ways to play: two-player Career and 'Real-Season Start'
#         Acclaimed 'My Team', split-screen and multiplayer",
#         category_id:9,
#         platform: "PlayStation 5",
#         release_date: "2021-07-16",
#         price:48.75,
#         msrp:48.75,
#         feature:"THE OFFICIAL VIDEOGAME OF THE 2021 FORMULA ONE WORLD CHAMPIONSHIP™
#         'Braking Point' - the thrilling new story experience.
#         New ways to play: two-player Career and 'Real-Season Start'.
#         My Team mode - create a driver, choose a sponsor, an engine supplier, hire a teammate and compete as the 11th team on the grid.
#         Expanded Driver Stats that now include 'Focus' and new team-critical Department Events to address.
#         Split-screen racing for two players.
#         Casual race options for more relaxed racing whilst new Expert options give experienced players even more control.
#         Acclaimed ten-year Career Mode, including updated Research and Development and Practice Programmes, and new Quick Practice.
#         Formula 2™, the ultimate training ground for F1®, is also included, with short, medium, or full season options and 2020 and 2021 season content *.
#         Esports - in-game area for the online qualification events, latest news and even watch the new F1® Esports Challenger and Pro Series races.
#         More ways to race: Time Trial, Shorter season length options, Grand Prix™ Mode and relive your glory with saveable automated highlights.
#         Compete online in Multiplayer: Social and Ranked races, new Quick Join format, Leagues, customisable liveries, and Weekly Events."
#       },
#       {
#         title: "F1 2021",
#         amount:100,
#         description: "Every story has a beginning in F1® 2021, the official videogame of the 2021 FIA FORMULA ONE WORLD CHAMPIONSHIP™. Enjoy the stunning new features of F1® 2021, including the thrilling story experience 'Braking Point', two-player Career, and get even closer to the grid with 'Real-Season Start'. Take your team to the top in the acclaimed ten-year 'My Team' Career mode, or race head-to-head in split-screen and multiplayer. Immerse yourself in the greatest racing spectacle on the planet and race with the authentic lineup of twenty heroic drivers and ten iconic teams from the 2021 season: 'Braking Point' - the thrilling new story experience
#         New ways to play: two-player Career and 'Real-Season Start'
#         Acclaimed 'My Team', split-screen and multiplayer",
#         category_id:9,
#         platform: "PlayStation 4",
#         release_date: "2021-07-16",
#         price:48.75,
#         msrp:48.75,
#         feature:"THE OFFICIAL VIDEOGAME OF THE 2021 FORMULA ONE WORLD CHAMPIONSHIP™
#         'Braking Point' - the thrilling new story experience.
#         New ways to play: two-player Career and 'Real-Season Start'.
#         My Team mode - create a driver, choose a sponsor, an engine supplier, hire a teammate and compete as the 11th team on the grid.
#         Expanded Driver Stats that now include 'Focus' and new team-critical Department Events to address.
#         Split-screen racing for two players.
#         Casual race options for more relaxed racing whilst new Expert options give experienced players even more control.
#         Acclaimed ten-year Career Mode, including updated Research and Development and Practice Programmes, and new Quick Practice.
#         Formula 2™, the ultimate training ground for F1®, is also included, with short, medium, or full season options and 2020 and 2021 season content *.
#         Esports - in-game area for the online qualification events, latest news and even watch the new F1® Esports Challenger and Pro Series races.
#         More ways to race: Time Trial, Shorter season length options, Grand Prix™ Mode and relive your glory with saveable automated highlights.
#         Compete online in Multiplayer: Social and Ranked races, new Quick Join format, Leagues, customisable liveries, and Weekly Events."
#       },
#       {
#         title: "Just Dance 2023 Edition",
        
#         description: "Welcome to a new era of dance with Just Dance 2023 Edition! Now with online multiplayer, personalization, 3D immersive worlds, and new songs and modes year-round*, you can experience a never-ending dance party all year long!",
#         category_id:10,
#         platform: "Nintendo Switch",
#         release_date: "2022-11-22",
#         price:79.95,
#         is_popular:true,
#         msrp:79.95,
#         feature:"Online Multiplayer - Play Just Dance with whoever you want, wherever they are, with this brand-new feature! Invite up to five players to dance with and find out who has the best moves.
#         New User Interface - Spend more time dancing and less time searching thanks to a new, more modern, and intuitive user interface. Everything is one click away: playlists, game modes and songs
#         Personalized Experiences - Unlock custom-made sessions and songs tailored to your preferences and playing habits. Plus, Just Dance will keep track of your progress and scores, so you can show off your dancing skills!"
#       },
#       {
#         title: "Just Dance 2023 Edition",
#         amount:100,
#         description: "Welcome to a new era of dance with Just Dance 2023 Edition! Now with online multiplayer, personalization, 3D immersive worlds, and new songs and modes year-round*, you can experience a never-ending dance party all year long!",
#         category_id:10,
#         platform: "PlayStation 5",
#         release_date: "2022-11-22",
#         price:79.95,
#         msrp:79.95,
#         feature:"Online Multiplayer - Play Just Dance with whoever you want, wherever they are, with this brand-new feature! Invite up to five players to dance with and find out who has the best moves.
#         New User Interface - Spend more time dancing and less time searching thanks to a new, more modern, and intuitive user interface. Everything is one click away: playlists, game modes and songs
#         Personalized Experiences - Unlock custom-made sessions and songs tailored to your preferences and playing habits. Plus, Just Dance will keep track of your progress and scores, so you can show off your dancing skills!"
#       },
#       {
#         title: "Just Dance 2023 Edition",
#         amount:100,
#         description: "Welcome to a new era of dance with Just Dance 2023 Edition! Now with online multiplayer, personalization, 3D immersive worlds, and new songs and modes year-round*, you can experience a never-ending dance party all year long!",
#         category_id:10,
#         platform: "Xbox Series X/S",
#         release_date: "2022-11-22",
#         price:79.95,
#         msrp:79.95,
#         feature:"Online Multiplayer - Play Just Dance with whoever you want, wherever they are, with this brand-new feature! Invite up to five players to dance with and find out who has the best moves.
#         New User Interface - Spend more time dancing and less time searching thanks to a new, more modern, and intuitive user interface. Everything is one click away: playlists, game modes and songs
#         Personalized Experiences - Unlock custom-made sessions and songs tailored to your preferences and playing habits. Plus, Just Dance will keep track of your progress and scores, so you can show off your dancing skills!"
#       }
# ])  

#  Image.create([
#     {
#         product_id: 1,
#         title: "banner",
#         url: "https://c4.wallpaperflare.com/wallpaper/123/576/979/warcraft-warcraft-iii-reign-of-chaos-warcraft-iii-the-frozen-throne-wallpaper-preview.jpg"
#     },
#     {
#         product_id: 1,
#         title: "showcase",
#         url: "https://c4.wallpaperflare.com/wallpaper/982/419/771/warcraft-warcraft-iii-reign-of-chaos-warcraft-iii-wallpaper-preview.jpg"
#     },
#     {
#         product_id: 2,
#         title: "banner",
#         url: "https://c4.wallpaperflare.com/wallpaper/33/750/469/starcraft-ii-queen-of-blades-sarah-kerrigan-starcraft-wallpaper-preview.jpg"
#     },
#     {
#         product_id: 2,
#         title: "showcase",
#         url: "https://c4.wallpaperflare.com/wallpaper/439/719/810/starcraft-artanis-wallpaper-preview.jpg"
#     },
#     {
#         product_id: 3,
#         title: "banner",
#         url: "https://c4.wallpaperflare.com/wallpaper/656/869/201/call-of-duty-wallpaper-preview.jpg"
#     },
#     {
#         product_id: 3,
#         title: "showcase",
#         url: "https://c4.wallpaperflare.com/wallpaper/364/251/812/call-of-duty-4-modern-warfare-remastered-call-of-duty-4-modern-warfare-remastered-call-of-duty-wallpaper-preview.jpg"
#     },
#     {
#         product_id: 4,
#         title: "banner",
#         url: "https://cdn.cloudflare.steamstatic.com/steam/apps/393080/header.jpg?t=1678298772"
#     },
#     {
#         product_id: 4,
#         title: "showcase",
#         url: "https://upload.wikimedia.org/wikipedia/en/5/5f/Call_of_Duty_4_Modern_Warfare.jpg"
#     },
#     {
#         product_id: 5,
#         title: "banner",
#         url: "https://cdn.shopify.com/s/files/1/0069/6804/9721/articles/0_2.jpg?v=1679005192"
#     },
#     {
#         product_id: 5,
#         title: "showcase",
#         url: "https://preview.redd.it/k4gx188wdue91.jpg?auto=webp&s=2ab2177935748315da6dfe52d1eaafba4f85e274"
#     },
#     {
#         product_id: 6,
#         title: "showcase",
#         url: "https://preview.redd.it/k4gx188wdue91.jpg?auto=webp&s=2ab2177935748315da6dfe52d1eaafba4f85e274"
#     },
#     {
#         product_id: 6,
#         title: "banner",
#         url: "https://cdn.shopify.com/s/files/1/0069/6804/9721/articles/0_2.jpg?v=1679005192"
#     },
#     {
#         product_id: 7,
#         title: "banner",
#         url: "data:image/jpeg;base64,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"
#     },
#     {
#         product_id: 7,
#         title: "showcase",
#         url: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974725854/pokemon-adventures-x-y-vol-1-9781974725854_hr.jpg"
#     },
   
#     {
#         product_id: 9,
#         title: "banner",
#         url: "https://cdn.mos.cms.futurecdn.net/bzTTQtKXXypRm5xyYPGtqY.jpg"
#     },
#     {
#         product_id: 9,
#         title: "showcase",
#         url: "https://cdn.gamestatic.net/files/gameland/games/fd70a5cb-33f3-11ed-97e7-020908c419fc/pic_poster_m.jpg"
#     },
#     {
#         product_id: 10,
#         title: "banner",
#         url: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000063709/32b85837beea0eee31220a59e247219662de4011f7a8c18fce61cf99a4933eb7"
#     },
#     {
#         product_id: 10,
#         title: "showcase",
#         url: "https://s.pacn.ws/1/p/15h/metroid-prime-remastered-multilanguage-746531.11.jpg?v=rt90k3&quality=72&width=1024&crop=798,1308"
#     },
#     {
#         product_id: 11,
#         title: "showcase",
#         url: "https://c4.wallpaperflare.com/wallpaper/336/3/769/nintendo-mario-character-mario-kart-mario-kart-8-nintendo-switch-hd-wallpaper-preview.jpg"
#     },
#     {
#         product_id: 11,
#         title: "banner",
#         url: "https://images7.alphacoders.com/821/thumb-1920-821837.jpg"
#     },
#     {
#         product_id: 12,
#         title: "banner",
#         url: "https://store-images.s-microsoft.com/image/apps.21181.68337312437833304.5b641957-dc26-40ad-bfd7-ee9a1aed613f.0d82de15-a068-4306-bc62-419a349dfdd5?q=90&w=480&h=270"
#     },
#     {
#         product_id: 12,
#         title: "showcase",
#         url: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
#     },
#     {
#         product_id: 13,
#         title: "showcase",
#         url: "https://upload.wikimedia.org/wikipedia/en/1/1c/Diablo_IV_cover_art.png"
#     },
#     {
#         product_id: 13,
#         title: "banner",
#         url: "https://bnetcmsus-a.akamaihd.net/cms/page_media/xb/XBMMNKOZ8ILU1625080135362.jpg"
#     },
#     {
#         product_id: 14,
#         title: "banner",
#         url: "https://e1.pxfuel.com/desktop-wallpaper/419/181/desktop-wallpaper-first-star-wars-jedi-survivor-story-details-revealed-star-wars-jedi-survivor.jpg"
#     },
#     {
#         product_id: 14,
#         title: "showcase",
#         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo8_FLRphLIJ9hxLxakOnWSelrmxwRwIYrsg&usqp=CAU"
#     },
#     {
#         product_id: 15,
#         title: "banner",
#         url: "https://prod.assets.earlygamecdn.com/images/Jedi-Switch.jpg?mtime=1679929137"
#     },
#     {
#         product_id: 15,
#         title: "showcase",
#         url: "https://image.api.playstation.com/vulcan/ap/rnd/202212/2214/0wqNqxCpXvst4dEaEgz7njSD.png"
#     },
#     {
#         product_id: 8,
#         title: "banner",
#         url: "https://rare-gallery.com/mocahbig/1345970-Hogwarts-Legacy-HD-Wallpaper.jpg"
#     },
#     {
#         product_id: 8,
#         title: "showcase",
#         url: "https://static.posters.cz/image/750/postere/harry-potter-hogwarts-legacy-i154092.jpg"
#     },
#     {
#         product_id: 16,
#         title: "showcase",
#         url: "https://rare-gallery.com/uploads/posts/325678-Overwatch-2-Group-Characters-8K-iphone-wallpaper.jpg"
#     },
#     {
#         product_id: 16,
#         title: "banner",
#         url: "https://i.ytimg.com/vi/GKXS_YA9s7E/maxresdefault.jpg"
#     },
#     {
#         product_id: 17,
#         title: "banner",
#         url: "https://i.ytimg.com/vi/ey90reBmo7k/maxresdefault.jpg"
#     },
#     {
#         product_id: 17,
#         title: "showcase",
#         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9BUxIkfUWa__pcelFd4u52SNqvvmhrA4rA&usqp=CAU"
#     },
#     {
#         product_id: 18,
#         title: "banner",
#         url: "https://images.squarespace-cdn.com/content/v1/5f0ce7910aa5bf68e7ce8ccb/ce670af3-5ee0-4e19-a468-2685a2c40243/1600x900-splash.png"
#     },
#     {
#         product_id: 18,
#         title: "showcase",
#         url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Omega_Strikers_Game_Cover.jpg/220px-Omega_Strikers_Game_Cover.jpg"
#     },
#     {
#         product_id: 19,
#         title: "showcase",
#         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7f20KitOlU9gVqGYfgdSRaGeUupOmhkes1zFVNm-9-VFJuNING4wbxjZw74k5qjkFlw&usqp=CAU"
#     },
#     {
#         product_id: 19,
#         title: "banner",
#         url: "https://i.pinimg.com/originals/b3/41/0a/b3410a93baab7154a78187222b753f27.jpg"
#     },
#     {
#         product_id: 20,
#         title: "banner",
#         url: "https://w0.peakpx.com/wallpaper/575/272/HD-wallpaper-video-game-marvel-s-midnight-suns.jpg"
#     },
#     {
#         product_id: 20,
#         title: "showcase",
#         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOhPLBGFVHmT0QxePCqAQQ4YHxQSBVZXrukDLa4Gex632V72-bSkRUamLN8bKnCVpU-I&usqp=CAU"
#     },
#     {
#         product_id: 21,
#         title: "showcase",
#         url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Age_of_Wonders_Planetfall_cover_art.jpg/220px-Age_of_Wonders_Planetfall_cover_art.jpg"
#     },
#     {
#         product_id: 21,
#         title: "banner",
#         url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1078840/capsule_616x353.jpg?t=1590488317"
#     },
#     {
#         product_id: 22,
#         title: "banner",
#         url: "https://i.ytimg.com/vi/Id2EaldBaWw/0.jpg"
#     },
#     {
#         product_id: 22,
#         title: "showcase",
#         url: "https://m.media-amazon.com/images/M/MV5BOGVkNjEyN2EtMjRiYi00ZWY1LThkOWItZTNkNjA0MTE4YmRhXkEyXkFqcGdeQXVyNjUxNDQwMzA@._V1_.jpg"
#     },
#     {
#         product_id: 23,
#         title: "showcase",
#         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAxNA5dhthJjwe_MhK4Zczd_h55kPwUFya6MTlzbI62_3wtnjPXIj-o19-TDYix5dFWM&usqp=CAU"
#     },
#     {
#         product_id: 23,
#         title: "banner",
#         url: "https://cdn.cloudflare.steamstatic.com/steam/apps/2058750/capsule_616x353.jpg?t=1681459384"
#     },
#     {
#         product_id: 24,
#         title: "banner",
#         url: "https://i.ytimg.com/vi/4vvo4UkyXBk/maxresdefault.jpg"
#     },
#     {
#         product_id: 24,
#         title: "showcase",
#         url: "https://images.g2a.com/1024x768/1x1x0/olympic-games-tokyo-2020-the-official-video-game-pc-steam-gift-global-i10000256600004/c3f0806f0b9a4063a996d946"
#     },
#     {
#         product_id: 25,
#         title: "showcase",
#         url: "https://m.media-amazon.com/images/I/71XtOoUofkL.jpg"
#     },
#     {
#         product_id: 25,
#         title: "banner",
#         url: "https://cdn.cloudflare.steamstatic.com/steam/apps/981890/capsule_616x353.jpg?t=1628587562"
#     },
#     {
#         product_id: 26,
#         title: "banner",
#         url: "https://www.operationsports.com/wp-content/uploads/2021/07/OLYMPIC-GAMES-TOKYO-2020%E2%84%A2_20210706122405-scaled.jpg"
#     },
#     {
#         product_id: 26,
#         title: "showcase",
#         url: "https://m.media-amazon.com/images/I/61XDPZ47yZL.jpg"
#     },
#     {
#         product_id: 27,
#         title: "showcase",
#         url: "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/464160-Product-0-I.jpg?v=1572287272"
#     },
#     {
#         product_id: 27,
#         title: "banner",
#         url: "https://img-eshop.cdn.nintendo.net/i/be68b19214e1fa2d2445ebb50b9d1d1481ed05f9afc2fd49963c5caa06f5f312.jpg"
#     },
#     {
#         product_id: 28,
#         title: "banner",
#         url: "https://media.formula1.com/content/dam/fom-website/Upgrade/F12021game/Titled-Hero-Art_3840x2160%20copy.jpg"
#     },
#     {
#         product_id: 28,
#         title: "showcase",
#         url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/F1_2021_cover_art.jpg/220px-F1_2021_cover_art.jpg"
#     },
#     {
#         product_id: 29,
#         title: "showcase",
#         url: "https://m.media-amazon.com/images/I/71S3CPtsvES.jpg"
#     },
#     {
#         product_id: 29,
#         title: "banner",
#         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaW3YuBOgs0KRf0_Zn5x_ZehuXkVhyU7FnEKDetzOTEUf6U1vDPJNNkppokbcanc9z1g&usqp=CAU"
#     },
#     {
#         product_id: 30,
#         title: "banner",
#         url: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/63JzhYgJbTQC1yW74tmZLJ/3a226d878cf116e279e048a1d5d4e624/jd23-buy-keyart.jpg"
#     },
#     {
#         product_id: 30,
#         title: "showcase",
#         url: "https://cdn.eteknix.com/wp-content/uploads/2022/11/81dvONwHsL._AC_SL1500_.jpg"
#     },
#     {
#         product_id: 31,
#         title: "showcase",
#         url: "https://m.media-amazon.com/images/I/81t1Oz96ypL._AC_UF1000,1000_QL80_.jpg"
#     },
#     {
#         product_id: 31,
#         title: "banner",
#         url: "https://i.ytimg.com/vi/aWrzDi3K65s/maxresdefault.jpg"
#     },
#     {
#         product_id: 32,
#         title: "banner",
#         url: "https://i.ytimg.com/vi/KwGFNpQoVJ0/maxresdefault.jpg"
#     },
#     {
#         product_id: 32,
#         title: "showcase",
#         url: "https://m.media-amazon.com/images/I/819jG5Bgd4L._AC_UF894,1000_QL80_.jpg"
#     },
    
# ])

# PlatformImage.create([
#     {
#         platform_id: 1,
#         title: "PC",
#         url: "data:image/png;base64,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"
#     },
#     {
#         platform_id: 2,
#         title: "Xbox 360",
#         url:"data:image/png;base64,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"
#     },
#     {
#         platform_id: 3,
#         title: "Xbox One",
#         url:"data:image/jpeg;base64,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"
#     },
#     {
#         platform_id: 4,
#         title: "PlayStation 5",
#         url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAADiCAMAAAD5w+JtAAAAtFBMVEX///8AAAD8/Pz///0DAQJLS0tBQUFdXV0BAALNycYFBQX+/f7g4OD6+vo9PDv7/fxkY2Pa2trDwcLNyclKSkorKyrR0dHw8PAyMjLk0tGioqH49fZQUFB4eHgAAwDq6uq3tbaKiYeUkpMmIyRta2zd09SvrK27ubmfmpzTysoPCgxxcHEgHyBeWFlWVVTExMQaCw2Ff38VExR/dngmGRw7NDYmJiRWTVDh2N01LTCBb3KQj5CF/qiPAAALP0lEQVR4nO2djX+iOBPHE6DqETG+tOKJFfuy6G7fru11n972//+/npkJKCCguIuIn/zu9rbiyubrJJOZZMIxpqWlpaWlpaWlpaWlpaWlpaWlpaWlpaWl1Tw5jBmh6m5KBTLY7HrYxZ+cc8QDvjvO+aw/Hp8lHmPfOLdtQOSTr4WLFwT2U4OdBa5psu88rq/ABzhHSnkOo9GM8dm2MiO/Xw4EMIq6G/cHZLKU/Wx7jr9drMZ1N+2PKMFnWbxD/5B+rMZq4qi7jb8jxTePW7DTUXZEh0NjsdGAwDfiFk8JGMPB+ID91DTMupt5sDL5EBEv4q/WAryQlHW381Dl8SlvY9nw3t3SAcCGdtNCPrIgjMeLLmuqBYmvkw+IVoRfS5goGxnR7MFHgCuvmVMF8mXwPOLgi12x+ZPTyCGYwQcwA+ZMuT1PXHs2JWveIMyyH3/BXPCL28mrr8wUjQtKM/nGTJjM5QnAuc0X7Hz4YLA9JA0IL3zp1N3esirge0mNSpv3mjcA8/ggje8mL6Ixhw0MRDP5UCk+nCRnZ83XwYmjcSphP5vf1NzYA5TB943eyOLr19zYA1SKj/s1t7a8yvG5Nbe2nHD95S/I1VMJxDdykyk+pdu6m1xK5fma5WAO4WtSCJPHR2/m8UnWmCg7m+9D2SiT71+v+XwTtdKSyfePZzSer8coDcrhEw3aecnjI+Xy1dvmMirP9+g1yYGW57tp1ErvIXxNWgY9hK853rM0n2VB/NkgPNJofz7balj+gCrDxx/dxu2ylOK7bpR7IZXg47xbb1sPURm++3qbepD25rM5H5y+80xskWD9Utb8kJEf2eA8V+z09x9CPIVZgg+dizBOnw9lGIaUGEcaOfP7mm8Oii7j1N4I52k4wMeYFwQsx370p9i0H7t4OUK4Ruw/GJChisXXf/yxkA9wxsHz1QR0NRuB7U49cdh8+eObHoJcFfExI5mpG6e7/U7NlOAcYNgxZ3RzF4IU86ETAlNLQziOE2V9dAlsaTgqjxcns2UNow6aMrid8KggeSefxLos1S09DyDBLzmOpzwv3O6UzEnfczfo81ih7k4+VLc7fn19vY+9fQevg+7pbLQYjCpz/MUFT5ZEFPAJB600Wj4/8zzNXoeYLMm6I26qq/KGr5xvFdLl8gkYckH/ju/Q29VqcALnQpzxzRtXEVYSscB+Ag03t+15qsiH86iAOTpVsKjpKAGMOHJ6g9UbtYan65HsAj6Tzbi1GaghVscCwddk015gdMfJAqbTYyOCG5eOI9xlO7trzbHt+fM78vHkVZtKYOYWfbhjr78tGytga+BD4wWP0CO3e1ik2zJ8Udd+/zfCCvnQyONjz4LSkd64j3R2sj4+0mN/KWCC24cvQum9Lj119/EsaViOhSPHMyGdH3In21B25BWehzR/Gbv4bCW4OJuqA1gGTvmC3afu2z6mk0GPHfDtrhn6i3s814AdyszL/yK+jm0puFUXLlHEAsMa3EnwlrrxESt/IFJx2JKMtZkNqI/iyytsqqlCq3w+BnydsGP3pi6E1lLQ+UATUkb3JklHfOMjGlDiob74TGd1lOUep/Q1o30x3xGFfOrnmxFASYhE0WEBgn97EesK6/551JU1hy1SXzD5iNnIVSm4gTkAWLm7i68fOGZ4eJXmUnc4e0tWZkd3P+rKGqTevIOK9R/+1aXBY6rTttDWaa8gfmGXvI3DFDIjk/gcjBQeOdFtH5joH3VhRmLtZjL04NDN6NAiGg6MSPFoPp8hlkId5Ay/MOYHVzycC1KCUdo/buoL7bqmLzlqN0SRm8Ijb/TSb5GzyedTi0+0lCEMk5mLdtjHOxmAPHDkEfddhAAn590lGgIzxeTjI1gslkHvbt1li+yH8atQycfL68/oE1l692s47QlOPJydqYMm3J0d9bLC/Bb7MfzrTWd8KzRff0N8EnjHD64ZdbBlL94Uiw6DWSopUD2tKH8wTbTIYNUustzkAeZSWUv+BxMW5H3vId083UTlXYv4mDkILrmKgbbCIDXdTF21Al6XHFxxUYEimG0+TzKS/fL2p6W5bGWazApT3otpt+bFM8pv0W1/v52EoXa6m/0s4GvR8N06WRY+CeA7zTbSZLUeaRHhOXbhvIxWrYtUQnHResqfHyh/z7Qg/9+Sbn56ZVreIKbPT6amuBE4nTSfabJZiir0wP3gdBYGN8IdlaSbc6j3Ypidub8pt/gUnEv9sjaOXBFd0o9TnG1m1Zdn87VWA7Wz1og9Mrb2fqNUrkP7f+v+GUYIP77CFRZBqrXdJYX2s3L5SNdLH2PyphgOJaL/mP60lVqoTvBdXWMmITyDRqtonP1wCnOXTx+xztijpxbRVPcxpcSuSUBZgvZ/oz0ijFLX+fuMPErT2Riu19DY8sNgDu1ntG59JJOU8TdbasmCUbS1aPcgLFUPJzLk1qTSSK0dhkkvhqMzYIpLiNhv+NAepxllPIdInu+T7OI6T76GTd3ZyjONYsubDE7GoDsbkje2hJrusu+3V0pU/WSyp2PI/mO5z1gCyzp79ttK+XCPh91fXsQELy43F+jHy/uhaWa0A003urlcfy78obeg6K13sVuXl8+VTizI52ak3VtqD/CJX3FfAj9L5mcumU3xYSl/73Nbzt+q5TOF9HY1waZlQp96aLLTObSBsrVZf0p8hvSe2/lSSdDcwu06BIzzCXeyrkx77G8+87yM8fXz702qeJtMOsXZjPfZHYVZ3pDR4lLIhv9+qTfuB343tRm04dvZgqqnkSL/SbWOcvSDFtgf4uegcSSK/+j6DJsonOiJg6bA47YbvuL2Vx3XicLVZFpBEexWNdVlLG4/ekwtt8Cu6um00ToEvlXCficgV62xpzckx/RMxceMDwgpTOSzgO8Elz7T8jf2i2tMBJnPP5FMRvZrEl9yrIzDySBTjeGDwTVW/dM/Sz7QM5UlPaRdXQEf+NLvagl4dIwG/pbcharPWaZd/Zh2PLP5pGBqrzs4RhOLJaXHWHeQ0OL9/df7A+j+gSp0bN6L0wn8VL79cBNR8YH/eXh4//UrGGzr08d1m+rTRMMR3eviKBHrUePmo/Li16LxF9ZD5lfKYlB36x6jksJgA9olt5TwW7corKQBFO4UjZORjimcsKAzj8/5DG8Ed1xXnaS/tIlf+boU/AXd+AmOTD1t1WpCFyzkA42u0kWRSTyqF3Ir52NOm1NRau9iuNYLaf1yO8gXsoBP0PhkpqtuFLtjeNuXYHaFZWj4+LeqFyjYQpXG90XRpo9IvSrkU/fFc1Usd/3J/4mVaZiWVCgBnpw9IB9/w6GejWhstVHs0z+ZOmiVxQedhrk/MHPm14e3frcgQXDYNY31ko8p24dvh1ZhxV6lMgzv7RA+9vt8LzR7TA7+/F4yhKcmgVLV0Og/fptvSParmo+F60ulyk3/EJ9Vtf3QmxzCBzOA9O6oXx/IR+ct0G2fKJ+h1hVtvsp8f+cOtcGMO+Kr1r+IPfkywqh+uGqRNT+bpjQSCzsiUfVJ702xe9oVJxj78qXDfKPbV0Wr19nxx47nlne7PkX0VtWnPIS5Fx+Y76bdj2kWlQemk/q1Pp/7uXoKw2vQqtoV0L37J0udelQpgT3OWT8VonB9HnIKiglh1q14/VPKw/iUBnn/Vy6x3/7DF6u6thD84KQFmhQXoRrsutdKqTf1cr59E763vz/Sf35LvZGoOn03jGj/ofAvystC8z+0X7uPsIetdgB27gNkFbgUfWiPipGzLyo5bzotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLa2T0P8BOPmwdABPDfcAAAAASUVORK5CYII="
#     },
#     {
#         platform_id: 5,
#         title: "PlayStation 4",
#         url: "data:image/png;base64,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"
#     },
#     {
#         platform_id: 6,
#         title: "Nintendo 3DS",
#         url: "data:image/png;base64,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"
#     },
#     {
#         platform_id: 7,
#         title: "Nintendo Switch",
#         url: "data:image/png;base64,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"
#     },
#     {
#         platform_id: 8,
#         title: "Xbox Series X/S",
#         url: "data:image/png;base64,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"
#     },

# ])


# Address.create([
#     {
#         user_id: u1.id,
#         first_name:"jojo",
#         last_name: "hey",
#         phone_number:"0434234567",
#         address:"56 Queens Road, Hurstville",
#         postcode:"2020",
        
#     },
#     {
#         user_id: u1.id,
#         first_name:"jojo",
#         last_name: "hey",
#         phone_number:"0434234567",
#         address:"62 Church Street, Balmain",
#         postcode:"2010",
        
#     },
#     {
#         user_id: u2.id,
#         first_name:"sean",
#         last_name: "liang",
#         phone_number:"0434455356",
#         address:"29 Cottenham Avenue, Kensington",
#         postcode:"2019",
        
#     },
#     {
#         user_id: u2.id,
#         first_name:"sean",
#         last_name: "liang",
#         phone_number:"0434455356",
#         address:"8 The Parapet, Castlecrag",
#         postcode:"2019",
        
#     },
#     {
#         user_id: u2.id,
#         first_name:"sean",
#         last_name: "liang",
#         phone_number:"0434455356",
#         address:"1 Werona Street, Lindfield",
#         postcode:"2019",
        
#     },
#     {
#         user_id: u2.id,
#         first_name:"sean",
#         last_name: "liang",
#         phone_number:"0434455356",
#         address:"12 Onslow Road, Kings Cross",
#         postcode:"2019",
        
#     },
    
#     {
#         user_id: u3.id,
#         first_name:"peter",
#         last_name: "pan",
#         phone_number:"0434235777",
#         address:"120 Bent Street, Sydney",
#         postcode:"2000",
        
#     },
#     {
#         user_id: u3.id,
#         first_name:"peter",
#         last_name: "pan",
#         phone_number:"0434235777",
#         address:"9 Ruse Street, Parramatta",
#         postcode:"2119"
#     },
#     {
#         user_id: u4.id,
#         first_name:"jasmine",
#         last_name: "huang",
#         phone_number:"0342564333",
#         address:"185 Parramatta Road, Haberfield",
#         postcode:"2240"
#     }
# ])

