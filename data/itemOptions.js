const itemOptions = [
  { name: "7 Wonders segunda edicion", editorial: "Asmodee", price: "C" },
  { name: "A las Chapas", editorial: "SuperNoob", price: "A" },
  {
    name: "Alicia en el pais de las pesadillas",
    editorial: "El Dragón Azul",
    price: "B",
  },
  { name: "Alquimistas - Juego base", editorial: "Devir", price: "C" },
  { name: "Alta Tensión", editorial: "Asmodee", price: "C" },
  { name: "Alubari - El Aroma del Te", editorial: "Buró", price: "C" },
  { name: "Amigos de Mierda", editorial: "Buró", price: "B" },
  { name: "Amigos de Mierda 2", editorial: "Buró", price: "B" },
  { name: "Amnesia", editorial: "", price: "B" },
  {
    name: "Android - Netrunner LCG - Caja Básica",
    editorial: "Asmodee",
    price: "C",
  },
  {
    name: "Aprendamos juntos a leer",
    editorial: "Divermente",
    price: "B",
  },
  {
    name: "Arkham Horror - El horror de Miskatonik",
    editorial: "Asmodee",
    price: "C",
  },
  {
    name: "Arkham Horror - Hora Final",
    editorial: "Asmodee",
    price: "C",
  },
  {
    name: "Asalto a la torre del mago en 10 minutos",
    editorial: "Buró",
    price: "B",
  },
  { name: "Atenea", editorial: "Maldón", price: "B" },
  {
    name: "Aventureros al Tren - Base",
    editorial: "Asmodee",
    price: "C",
  },
  {
    name: "Aventureros al Tren - Europa",
    editorial: "Asmodee",
    price: "C",
  },
  { name: "Azul", editorial: "Asmodee", price: "C" },
  {
    name: "Balance Elemental",
    editorial: "La Pulga Escapista",
    price: "B",
  },
  { name: "Bariesus", editorial: "Juegosdemesa.com.ar", price: "B" },
  { name: "Bears vs Babies", editorial: "Asmodee", price: "C" },
  { name: "Bienvenido al Dungeon", editorial: "Buró", price: "B" },
  { name: "Bretón", editorial: "Tinkuy", price: "A" },
  { name: "Cacao Diamante", editorial: "Devir", price: "B" },
  { name: "Candy Shop", editorial: "Juegosdemesa.com.ar", price: "B" },
  { name: "Caracoles", editorial: "Azteca", price: "B" },
  { name: "Carcassone", editorial: "Devir", price: "B" },
  { name: "Carcassone Plus", editorial: "Devir", price: "C" },
  { name: "Cartógrafos", editorial: "Buró", price: "B" },
  { name: "Catan", editorial: "Devir", price: "C" },
  {
    name: "Catan Ampliacion 5-6 jugadores",
    editorial: "Devir",
    price: "C",
  },
  {
    name: "Catan Ciudades y Caballeros ",
    editorial: "Devir",
    price: "C",
  },
  { name: "Catan Mercaderes y Barbaros", editorial: "Devir", price: "C" },
  { name: "Catan Plus", editorial: "Devir", price: "C" },
  { name: "Catch the Moon", editorial: "Asmodee", price: "C" },
  { name: "Century Un Nuevo Mundo", editorial: "Devir", price: "B" },
  { name: "Cerca y Lejos", editorial: "Devir", price: "C" },
  { name: "Chamuyo de una y a full !", editorial: "IdeasTo", price: "A" },
  { name: "Chernobyl", editorial: "Yamat", price: "B" },
  { name: "Claim 1", editorial: "Top Toys", price: "B" },
  { name: "Claim 2", editorial: "Top Toys", price: "B" },
  { name: "Clank: Tesoros Sumergidos", editorial: "Devir", price: "C" },
  {
    name: "Clank: Una Aventura de Construcción de Mazos",
    editorial: "Devir",
    price: "C",
  },
  { name: "Clash of Armies", editorial: "Poncho Games", price: "B" },
  { name: "Con Eso no se Jode", editorial: "Poppular", price: "A" },
  { name: "Contrast", editorial: "Top Toys", price: "B" },
  { name: "Corona de Hierro", editorial: "El Dragón Azul", price: "B" },
  { name: "Coup Urbis", editorial: "El Dragón Azul", price: "B" },
  { name: "Cultivos Mutantes", editorial: "El Dragón Azul", price: "B" },
  { name: "Código Secreto", editorial: "Devir", price: "B" },
  { name: "Código Secreto Dúo", editorial: "Devir", price: "B" },
  { name: "Dables", editorial: "Dables", price: "A" },
  { name: "Dany", editorial: "Buró", price: "B" },
  { name: "Dinosaur Island", editorial: "Devir", price: "C" },
  { name: "Dixit", editorial: "Asmodee", price: "C" },
  { name: "Dominion 2da edicion", editorial: "Devir", price: "C" },
  { name: "Dr. Eureka", editorial: "Ruibal", price: "B" },
  { name: "Draftosaurus", editorial: "Neptuno Games", price: "B" },
  { name: "Dungeon & Drinks", editorial: "Buró", price: "B" },
  { name: "Dígalo con Memes", editorial: "", price: "B" },
  { name: "El Camarero", editorial: "Maldón", price: "B" },
  { name: "El Erudito", editorial: "Maldón", price: "B" },
  { name: "El Ilustrado", editorial: "Maldón", price: "B" },
  { name: "El Señor Dix", editorial: "Maldón", price: "B" },
  { name: "El Tiburón", editorial: "Maldón", price: "B" },
  { name: "El Valle Secreto", editorial: "RunDos", price: "B" },
  { name: "Eldritch Horror", editorial: "Asmodee", price: "C" },
  { name: "Ensalada de Puntos", editorial: "Devir", price: "B" },
  {
    name: "Escapa - El Destino de Londres",
    editorial: "Top Toys",
    price: "B",
  },
  {
    name: "Escapa - El Misterio del Dorado",
    editorial: "Top Toys",
    price: "B",
  },
  { name: "Escapa - La Prueba Final", editorial: "Top Toys", price: "B" },
  {
    name: "Escape Tales - Sin Memoria",
    editorial: "Neptuno",
    price: "C",
  },
  { name: "Ex Libris", editorial: "Devir", price: "C" },
  {
    name: "Exit - El Laboratorio Secreto",
    editorial: "Devir",
    price: "B",
  },
  { name: "Extincion", editorial: "Top Toys", price: "B" },
  { name: "Fast Food !", editorial: "Juegosdemesa.com.ar", price: "B" },
  { name: "Flamme Rouge", editorial: "Devir", price: "C" },
  { name: "Fresco", editorial: "Devir", price: "C" },
  { name: "Fumanyi", editorial: "Poppular", price: "A" },
  { name: "Geek Out Masters", editorial: "El Dragón Azul", price: "B" },
  { name: "Gloomhaven", editorial: "Asmodee", price: "C" },
  { name: "Gualicho", editorial: "GG juegos de mesa", price: "B" },
  { name: "HDP - Hasta Donde Puedas", editorial: "Buró", price: "B" },
  { name: "Hadara", editorial: "Devir", price: "C" },
  { name: "Haikus", editorial: "Tinkuy", price: "A" },
  {
    name: "Hansa Teutónica Big Box - en español",
    editorial: "Masqueoca",
    price: "C",
  },
  {
    name: "Hay ¡Pulguitas! ¡Huy huy huy!",
    editorial: "Top Toys",
    price: "B",
  },
  { name: "Imaginarium", editorial: "Buró", price: "C" },
  { name: "Indommus Boosters", editorial: "Indommus", price: "A" },
  { name: "Invocacion Fronteras", editorial: "Hecate", price: "A" },
  { name: "Ishtar Jardines de Babilonia", editorial: "Buró", price: "C" },
  { name: "Juego de Cartas", editorial: "Descartes", price: "A" },
  {
    name: "Juego de Tronos - La Mano del Rey",
    editorial: "Asmodee",
    price: "C",
  },
  { name: "Jungle Speed", editorial: "Asmodee", price: "B" },
  { name: "Just One ", editorial: "Asmodee", price: "C" },
  { name: "Katamino", editorial: "Maldón", price: "C" },
  { name: "Kemet", editorial: "Buró", price: "C" },
  { name: "Key Forge - Caja Base", editorial: "Asmodee", price: "C" },
  { name: "King of Tokyo Dark Edition", editorial: "Buró", price: "C" },
  { name: "Kingdomino", editorial: "Buró", price: "B" },
  { name: "Kinmo", editorial: "Ruibal", price: "B" },
  { name: "La Dama y el Tigre", editorial: "Neptuno", price: "B" },
  { name: "La Isla Perdida", editorial: "RunDos", price: "B" },
  { name: "La Isla Prohibida", editorial: "Devir", price: "B" },
  {
    name: "La Maldición: Héroes de Lorthar",
    editorial: "La Maldición",
    price: "B",
  },
  { name: "La Resistencia", editorial: "Devir", price: "B" },
  { name: "La Tripulación", editorial: "Devir", price: "B" },
  { name: "La Vaca Loca", editorial: "Neptuno", price: "B" },
  { name: "Lab. Rats", editorial: "RunDos", price: "B" },
  {
    name: "Laboratorio de Palabras",
    editorial: "Divermente",
    price: "B",
  },
  { name: "Las Leyendas de Andor", editorial: "Devir", price: "B" },
  { name: "Listas las Listas", editorial: "Tinkuy", price: "A" },
  { name: "Little Town", editorial: "Buró", price: "B" },
  { name: "Loot sobre Ruedas", editorial: "Neptuno", price: "B" },
  { name: "Los Odiosos 7", editorial: "Neptuno", price: "B" },
  { name: "Los Viajes de Marco Polo ", editorial: "Devir", price: "C" },
  { name: "Love Letter (en caja)", editorial: "Devir", price: "B" },
  { name: "Love Letter Blister", editorial: "Asmodee", price: "B" },
  { name: "Lunes + Recorte", editorial: "SuperNoob", price: "B" },
  { name: "Luxor", editorial: "Devir", price: "B" },
  {
    name: "Marco Polo II Al servicio del Khan",
    editorial: "Devir",
    price: "C",
  },
  { name: "Marea Alta", editorial: "Neptuno", price: "B" },
  { name: "Marvel Champions", editorial: "Asmodee", price: "C" },
  {
    name: "Marvel Champions: Cráneo Rojo",
    editorial: "Asmodee",
    price: "C",
  },
  { name: "Mazo Argento", editorial: "Poppular", price: "A" },
  { name: "Medusa el Desafio", editorial: "Epica Juegos", price: "B" },
  { name: "Meme vs 100Cia", editorial: "Neptuno", price: "B" },
  { name: "Mochilas Jugonas", editorial: "Invictvs", price: "C" },
  { name: "Montañas de la Locura", editorial: "Buró", price: "C" },
  { name: "Munchkin", editorial: "Buró", price: "B" },
  { name: "Musa", editorial: "El Dragón Azul", price: "B" },
  { name: "Myriorama", editorial: "Tinkuy", price: "A" },
  { name: "Mysterium", editorial: "Asmodee", price: "C" },
  { name: "NLTNUP", editorial: "Buró", price: "B" },
  { name: "Nessos", editorial: "Buró", price: "B" },
  { name: "Opale", editorial: "Neptuno", price: "B" },
  { name: "Optimus", editorial: "Devir", price: "B" },
  { name: "Oriflamme", editorial: "Buró", price: "B" },
  { name: "Palabrerío", editorial: "Tinkuy", price: "B" },
  { name: "Pandemic", editorial: "Asmodee", price: "C" },
  {
    name: "Pandemic - El Reino de Cthulhu",
    editorial: "Asmodee",
    price: "C",
  },
  { name: "Patagomar", editorial: "Ludogonia", price: "B" },
  { name: "Planeta", editorial: "Neptuno", price: "C" },
  { name: "Plenus", editorial: "Devir", price: "B" },
  { name: "Pulsar 2849", editorial: "Devir", price: "C" },
  { name: "Pócimas y Brebajes", editorial: "Devir", price: "C" },
  { name: "Quien fue?", editorial: "Neptuno", price: "B" },
  {
    name: "Quien quiere ser Presidente?",
    editorial: "Quien quiere ser?",
    price: "B",
  },
  { name: "Qwixx", editorial: "Maldón", price: "B" },
  { name: "Raids", editorial: "Buró", price: "C" },
  { name: "Raton Valiente", editorial: "Neptuno", price: "B" },
  { name: "Ratzzia", editorial: "Devir", price: "B" },
  { name: "Red 7", editorial: "Buró", price: "B" },
  { name: "Reinas Durmientes", editorial: "Top Toys", price: "B" },
  { name: "Robots", editorial: "Maldón", price: "B" },
  { name: "Saboteur", editorial: "Buró", price: "B" },
  { name: "Sagrada", editorial: "Devir", price: "C" },
  { name: "Sandwich Wars", editorial: "RunDos", price: "B" },
  { name: "Say my Name", editorial: "Buró", price: "B" },
  { name: "Scrabble", editorial: "Asmodee", price: "B" },
  { name: "Se Vende", editorial: "Top Toys", price: "B" },
  { name: "Set", editorial: "Devir", price: "B" },
  {
    name: "Sherlock - La Llamada Final",
    editorial: "Top Toys",
    price: "B",
  },
  {
    name: "Sherlock - La Tumba del Arqueologo",
    editorial: "Top Toys",
    price: "B",
  },
  {
    name: "Sherlock - Paradero Desconocido",
    editorial: "Top Toys",
    price: "B",
  },
  { name: "Shiki", editorial: "Maldón", price: "B" },
  { name: "Silk", editorial: "Devir", price: "B" },
  { name: "Spaghetti Western", editorial: "", price: "B" },
  { name: "Splendor", editorial: "Asmodee", price: "B" },
  { name: "Stone Age Aniversario ", editorial: "Devir", price: "C" },
  { name: "Stone Age ", editorial: "Devir", price: "C" },
  { name: "Story Cubes", editorial: "Rory's", price: "B" },
  { name: "Sucesos Argentinos", editorial: "AALúdica", price: "B" },
  { name: "Super Cats", editorial: "Buró", price: "B" },
  { name: "Sushi Go", editorial: "Devir", price: "B" },
  { name: "Takenoko", editorial: "Buró", price: "C" },
  { name: "The Mind", editorial: "Maldón", price: "B" },
  { name: "The Red Cathedral", editorial: "Devir", price: "C" },
  {
    name: "Through the Ages - Una nueva historia de Civ",
    editorial: "Devir",
    price: "C",
  },
  { name: "Toma 6", editorial: "Buró", price: "B" },
  { name: "Tomalo Vos", editorial: "Buró", price: "B" },
  { name: "Tribus", editorial: "Devir", price: "C" },
  { name: "Va y viene", editorial: "Maldón", price: "B" },
  { name: "Virus", editorial: "El Dragón Azul", price: "B" },
  {
    name: "Virus 2 - Evolution",
    editorial: "El Dragón Azul",
    price: "B",
  },
  { name: "Yokai", editorial: "Buró", price: "B" },
  { name: "1812 Argentina", editorial: "Neptuno Games", price: "B" },
  { name: "Catan: El Duelo", editorial: "Devir", price: "C" },
  { name: "Catan: Viajero de las Estrellas", editorial: "Devir", price: "C" },
  { name: "Here I Stand: Europa y La Reforma", editorial: "Devir", price: "C" },
  { name: "Kitchen Rush", editorial: "Masqueoca", price: "C" },
  { name: "Magos y Tabernas", editorial: "Ludocracia", price: "B" },
  { name: "Patagoñam", editorial: "Ludogonia", price: "B" },
  { name: "YuGiOh Mazos", editorial: "Devir", price: "B" },
  { name: "Fantasma Blitz: Menudo susto", editorial: "Devir", price: "B" },
  { name: "La Resistencia Ávalon", editorial: "Devir", price: "B" },
  { name: "Fantasma Blitz", editorial: "Devir", price: "B" },
  { name: "Paris: La Cité de la Lumière", editorial: "Devir", price: "B" },
  { name: "Catan Navegantes", editorial: "Devir", price: "C" },
  { name: "Guau", editorial: "Juegos Nivel", price: "B" },
  { name: "Pequeños Grandes Mechs", editorial: "Devir", price: "B" },
  { name: "Roll'n Gol", editorial: "GG juegos de mesa", price: "B" },
  { name: "Miau", editorial: "Juegos Nivel", price: "B" },
  { name: "No lo testeamos ni un poco", editorial: "Buró", price: "B" },
  { name: "Dixit Oddyssey", editorial: "Asmodee", price: "C" },
];

export default itemOptions;
