const itemOptions = [
  { name: "7 Wonders segunda edicion", editorial: "Asmodee" },
  { name: "A las Chapas", editorial: "SuperNoob" },
  {
    name: "Alicia en el pais de las pesadillas",
    editorial: "El Dragón Azul",
  },
  { name: "Alquimistas - Juego base", editorial: "Devir" },
  { name: "Alta Tensión", editorial: "Asmodee" },
  { name: "Alubari - El Aroma del Te", editorial: "Buró" },
  { name: "Amigos de Mierda", editorial: "Buró" },
  { name: "Amigos de Mierda 2", editorial: "Buró" },
  { name: "Amnesia", editorial: "" },
  {
    name: "Android - Netrunner LCG - Caja Básica",
    editorial: "Asmodee",
  },
  {
    name: "Aprendamos juntos a leer",
    editorial: "Divermente",
  },
  {
    name: "Arkham Horror - El horror de Miskatonik",
    editorial: "Asmodee",
  },
  {
    name: "Arkham Horror - Hora Final",
    editorial: "Asmodee",
  },
  {
    name: "Asalto a la torre del mago en 10 minutos",
    editorial: "Buró",
  },
  { name: "Atenea", editorial: "Maldón" },
  {
    name: "Aventureros al Tren - Base",
    editorial: "Asmodee",
  },
  {
    name: "Aventureros al Tren - Europa",
    editorial: "Asmodee",
  },
  { name: "Azul", editorial: "Asmodee" },
  {
    name: "Balance Elemental",
    editorial: "La Pulga Escapista",
  },
  { name: "Bariesus", editorial: "Juegosdemesa.com.ar" },
  { name: "Bears vs Babies", editorial: "Asmodee" },
  { name: "Bienvenido al Dungeon", editorial: "Buró" },
  { name: "Bretón", editorial: "Tinkuy" },
  { name: "Cacao Diamante", editorial: "Devir" },
  { name: "Candy Shop", editorial: "Juegosdemesa.com.ar" },
  { name: "Caracoles", editorial: "Azteca" },
  { name: "Carcassone", editorial: "Devir" },
  { name: "Carcassone Plus", editorial: "Devir" },
  { name: "Cartógrafos", editorial: "Buró" },
  { name: "Catan", editorial: "Devir" },
  {
    name: "Catan Ampliacion 5-6 jugadores",
    editorial: "Devir",
  },
  {
    name: "Catan Ciudades y Caballeros ",
    editorial: "Devir",
  },
  { name: "Catan Mercaderes y Barbaros", editorial: "Devir" },
  { name: "Catan Plus", editorial: "Devir" },
  { name: "Catch the Moon", editorial: "Asmodee" },
  { name: "Century Un Nuevo Mundo", editorial: "Devir" },
  { name: "Cerca y Lejos", editorial: "Devir" },
  { name: "Chamuyo de una y a full !", editorial: "IdeasTo" },
  { name: "Chernobyl", editorial: "Yamat" },
  { name: "Claim 1", editorial: "Top Toys" },
  { name: "Claim 2", editorial: "Top Toys" },
  { name: "Clank: Tesoros Sumergidos", editorial: "Devir" },
  {
    name: "Clank: Una Aventura de Construcción de Mazos",
    editorial: "Devir",
  },
  { name: "Clash of Armies", editorial: "Poncho" },
  { name: "Con Eso no se Jode", editorial: "Poppular" },
  { name: "Contrast", editorial: "Top Toys" },
  { name: "Corona de Hierro", editorial: "El Dragón Azul" },
  { name: "Coup Urbis", editorial: "El Dragón Azul" },
  { name: "Cultivos Mutantes", editorial: "El Dragón Azul" },
  { name: "Código Secreto", editorial: "Devir" },
  { name: "Código Secreto Dúo", editorial: "Devir" },
  { name: "Dables", editorial: "Dables" },
  { name: "Dany", editorial: "Buró" },
  { name: "Dinosaur Island", editorial: "Devir" },
  { name: "Dixit", editorial: "Asmodee" },
  { name: "Dominion 2da edicion", editorial: "Devir" },
  { name: "Dr. Eureka", editorial: "Ruibal" },
  { name: "Draftosaurus", editorial: "Neptuno" },
  { name: "Dungeon & Drinks", editorial: "Buró" },
  { name: "Dígalo con Memes", editorial: "" },
  { name: "El Camarero", editorial: "Maldón" },
  { name: "El Erudito", editorial: "Maldón" },
  { name: "El Ilustrado", editorial: "Maldón" },
  { name: "El Señor Dix", editorial: "Maldón" },
  { name: "El Tiburón", editorial: "Maldón" },
  { name: "El Valle Secreto", editorial: "RunDos" },
  { name: "Eldritch Horror", editorial: "Asmodee" },
  { name: "Ensalada de Puntos", editorial: "Devir" },
  {
    name: "Escapa - El Destino de Londres",
    editorial: "Top Toys",
  },
  {
    name: "Escapa - El Misterio del Dorado",
    editorial: "Top Toys",
  },
  { name: "Escapa - La Prueba Final", editorial: "Top Toys" },
  {
    name: "Escape Tales - Sin Memoria",
    editorial: "Neptuno",
  },
  { name: "Ex Libris", editorial: "Devir" },
  {
    name: "Exit - El Laboratorio Secreto",
    editorial: "Devir",
  },
  { name: "Extincion", editorial: "Top Toys" },
  { name: "Fast Food !", editorial: "Juegosdemesa.com.ar" },
  { name: "Flamme Rouge", editorial: "Devir" },
  { name: "Fresco", editorial: "Devir" },
  { name: "Fumanyi", editorial: "Poppular" },
  { name: "Geek Out Masters", editorial: "El Dragón Azul" },
  { name: "Gloomhaven", editorial: "Asmodee" },
  { name: "Gualicho", editorial: "GG juegos de mesa" },
  { name: "HDP - Hasta Donde Puedas", editorial: "Buró" },
  { name: "Hadara", editorial: "Devir" },
  { name: "Haikus", editorial: "Tinkuy" },
  {
    name: "Hansa Teutónica Big Box - en español",
    editorial: "Masqueoca",
  },
  {
    name: "Hay ¡Pulguitas! ¡Huy huy huy!",
    editorial: "Top Toys",
  },
  { name: "Imaginarium", editorial: "Buró" },
  { name: "Indommus Boosters", editorial: "Indommus" },
  { name: "Invocacion Fronteras", editorial: "Hecate" },
  { name: "Ishtar Jardines de Babilonia", editorial: "Buró" },
  { name: "Juego de Cartas", editorial: "Descartes" },
  {
    name: "Juego de Tronos - La Mano del Rey",
    editorial: "Asmodee",
  },
  { name: "Jungle Speed", editorial: "Asmodee" },
  { name: "Just One ", editorial: "Asmodee" },
  { name: "Katamino", editorial: "Maldón" },
  { name: "Kemet", editorial: "Buró" },
  { name: "Key Forge - Caja Base", editorial: "Asmodee" },
  { name: "King of Tokyo Dark Edition", editorial: "Buró" },
  { name: "Kingdomino", editorial: "Buró" },
  { name: "Kinmo", editorial: "Ruibal" },
  { name: "La Dama y el Tigre", editorial: "Neptuno" },
  { name: "La Isla Perdida", editorial: "RunDos" },
  { name: "La Isla Prohibida", editorial: "Devir" },
  {
    name: "La Maldición: Héroes de Lorthar",
    editorial: "La Maldición",
  },
  { name: "La Resistencia", editorial: "Devir" },
  { name: "La Tripulación", editorial: "Devir" },
  { name: "La Vaca Loca", editorial: "Neptuno" },
  { name: "Lab. Rats", editorial: "RunDos" },
  {
    name: "Laboratorio de Palabras",
    editorial: "Divermente",
  },
  { name: "Las Leyendas de Andor", editorial: "Devir" },
  { name: "Listas las Listas", editorial: "Tinkuy" },
  { name: "Little Town", editorial: "Buró" },
  { name: "Loot sobre Ruedas", editorial: "Neptuno" },
  { name: "Los Odiosos 7", editorial: "Neptuno" },
  { name: "Los Viajes de Marco Polo ", editorial: "Devir" },
  { name: "Love Letter (en caja)", editorial: "Devir" },
  { name: "Love Letter Blister", editorial: "Asmodee" },
  { name: "Lunes + Recorte", editorial: "SuperNoob" },
  { name: "Luxor", editorial: "Devir" },
  {
    name: "Marco Polo II Al servicio del Khan",
    editorial: "Devir",
  },
  { name: "Marea Alta", editorial: "Neptuno" },
  { name: "Marvel Champions", editorial: "Asmodee" },
  {
    name: "Marvel Champions: Cráneo Rojo",
    editorial: "Asmodee",
  },
  { name: "Mazo Argento", editorial: "Poppular" },
  { name: "Medusa el Desafio", editorial: "Epica Juegos" },
  { name: "Meme vs 100Cia", editorial: "Neptuno" },
  { name: "Mochilas Jugonas", editorial: "Invictvs" },
  { name: "Montañas de la Locura", editorial: "Buró" },
  { name: "Munchkin", editorial: "Buró" },
  { name: "Musa", editorial: "El Dragón Azul" },
  { name: "Myriorama", editorial: "Tinkuy" },
  { name: "Mysterium", editorial: "Asmodee" },
  { name: "NLTNUP", editorial: "Buró" },
  { name: "Nessos", editorial: "Buró" },
  { name: "Opale", editorial: "Neptuno" },
  { name: "Optimus", editorial: "Devir" },
  { name: "Oriflamme", editorial: "Buró" },
  { name: "Palabrerío", editorial: "Tinkuy" },
  { name: "Pandemic", editorial: "Asmodee" },
  {
    name: "Pandemic - El Reino de Cthulhu",
    editorial: "Asmodee",
  },
  { name: "Patagomar", editorial: "Ludogonia" },
  { name: "Planeta", editorial: "Neptuno" },
  { name: "Plenus", editorial: "Devir" },
  { name: "Pulsar", editorial: "Devir" },
  { name: "Pulsar 2849", editorial: "Devir" },
  { name: "Pócimas y Brebajes", editorial: "Devir" },
  { name: "Quien fue?", editorial: "Neptuno" },
  {
    name: "Quien quiere ser Presidente?",
    editorial: "Quien quiere ser?",
  },
  { name: "Qwixx", editorial: "Maldón" },
  { name: "Raids", editorial: "Buró" },
  { name: "Raton Valiente", editorial: "Neptuno" },
  { name: "Ratzzia", editorial: "Devir" },
  { name: "Red 7", editorial: "Buró" },
  { name: "Reinas Durmientes", editorial: "Top Toys" },
  { name: "Robots", editorial: "Maldón" },
  { name: "Saboteur", editorial: "Buró" },
  { name: "Sagrada", editorial: "Devir" },
  { name: "Sandwich Wars", editorial: "RunDos" },
  { name: "Say my Name", editorial: "Buró" },
  { name: "Scrabble", editorial: "Asmodee" },
  { name: "Se Vende", editorial: "Top Toys" },
  { name: "Set", editorial: "Devir" },
  {
    name: "Sherlock - La Llamada Final",
    editorial: "Top Toys",
  },
  {
    name: "Sherlock - La Tumba del Arqueologo",
    editorial: "Top Toys",
  },
  {
    name: "Sherlock - Paradero Desconocido",
    editorial: "Top Toys",
  },
  { name: "Shiki", editorial: "Maldón" },
  { name: "Silk", editorial: "Devir" },
  { name: "Spaghetti Western", editorial: "" },
  { name: "Splendor", editorial: "Asmodee" },
  { name: "Stone Age Aniversario ", editorial: "Devir" },
  { name: "Story Cubes", editorial: "Rory's" },
  { name: "Sucesos Argentinos", editorial: "AALúdica" },
  { name: "Super Cats", editorial: "Buró" },
  { name: "Sushi Go", editorial: "Devir" },
  { name: "Takenoko", editorial: "Buró" },
  { name: "The Mind", editorial: "Maldón" },
  { name: "The Red Cathedral", editorial: "Devir" },
  {
    name: "Through the Ages - Una nueva historia de Civ",
    editorial: "Devir",
  },
  { name: "Toma 6", editorial: "Buró" },
  { name: "Tomalo Vos", editorial: "Buró" },
  { name: "Tribus", editorial: "Devir" },
  { name: "Va y viene", editorial: "Maldón" },
  { name: "Virus", editorial: "El Dragón Azul" },
  {
    name: "Virus 2 - Evolution",
    editorial: "El Dragón Azul",
  },
  { name: "Yokai", editorial: "Buró" },
  { name: "1812 Argentina", editorial: "Neptuno Games" },
  { name: "Catan: El Duelo", editorial: "Devir" },
  { name: "Catan: Viajero de las Estrellas", editorial: "Devir" },
  { name: "Here I Stand: Europa y La Reforma", editorial: "Devir" },
  { name: "Kitchen Rush", editorial: "Masqueoca" },
  { name: "Magos y Tabernas", editorial: "Ludocracia" },
  { name: "Patagoñam", editorial: "Ludogonia" },
  { name: "YuGiOh Mazos", editorial: "Devir" },
  { name: "Fantasma Blitz: Menudo susto", editorial: "Devir" },
  { name: "La Resistencia Ávalon", editorial: "Devir" },
  { name: "Fantasma Blitz", editorial: "Devir" },
  { name: "Paris: La Cité de la Lumière", editorial: "Devir" },
  { name: "Catan Navegantes", editorial: "Devir" },
];

export default itemOptions;
