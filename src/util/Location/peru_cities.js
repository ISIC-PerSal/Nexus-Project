const peru_cities = [
  {
    Estado: "Amazonas",
    Ciudades: [
      "Chachapoyas",
      "Bagua",
      "Bagua Grande",
      "Jumbilla",
      "La Peca",
      "Pedro Ruiz Gallo",
      "Cajaruro",
      "Nieva",
      "Santa María de Nieva",
      "Cumba",
      "Copallín",
      "Imaza",
    ],
  },
  {
    Estado: "Áncash",
    Ciudades: [
      "Huaraz",
      "Caraz",
      "Chimbote",
      "Casma",
      "Huarmey",
      "Recuay",
      "Yungay",
      "Pomabamba",
      "Sihuas",
      "Corongo",
      "Huaylas",
      "Aija",
      "Marcará",
      "Antonio Raymondi",
      "Bolognesi",
      "Carhuaz",
      "Ocros",
      "Pallasca",
    ],
  },
  {
    Estado: "Apurímac",
    Ciudades: [
      "Abancay",
      "Andahuaylas",
      "Chincheros",
      "Tambobamba",
      "Chalhuanca",
      "Antabamba",
      "Cotabambas",
      "Grau",
      "Curahuasi",
      "Talavera",
      "San Jerónimo",
      "Pacucha",
      "Santa María de Chicmo",
      "San Antonio de Cachi",
      "Kaquiabamba",
    ],
  },
  {
    Estado: "Arequipa",
    Ciudades: [
      "Arequipa",
      "Camaná",
      "Caravelí",
      "Aplao",
      "Chivay",
      "Mollendo",
      "Chuquibamba",
      "Cotahuasi",
      "Corire",
      "Llamellín",
      "Majes",
      "Acarí",
      "Atico",
      "Caylloma",
      "Yanque",
      "Yura",
      "Mollendo",
    ],
  },
  {
    Estado: "Ayacucho",
    Ciudades: [
      "Ayacucho",
      "Huanta",
      "Puquio",
      "Coracora",
      "Vilcashuamán",
      "Cangallo",
      "Huancapi",
      "Pauza",
      "San Miguel",
      "Huamanguilla",
      "Huancaraylla",
      "Sancos",
      "San Juan Bautista",
      "Carmen Alto",
    ],
  },
  {
    Estado: "Cajamarca",
    Ciudades: [
      "Cajamarca",
      "Jaén",
      "Cajabamba",
      "Celendín",
      "Chota",
      "Cutervo",
      "Santa Cruz",
      "San Miguel",
      "San Pablo",
      "Contumazá",
      "San Marcos",
      "Hualgayoc",
      "Bambamarca",
      "San Ignacio",
      "Magdalena",
    ],
  },
  {
    Estado: "Callao",
    Ciudades: [
      "Callao",
      "Bellavista",
      "La Perla",
      "Carmen de la Legua-Reynoso",
      "La Punta",
      "Ventanilla",
    ],
  },
  {
    Estado: "Cusco",
    Ciudades: [
      "Cusco",
      "Sicuani",
      "Espinar",
      "Quillabamba",
      "Urcos",
      "Anta",
      "Urubamba",
      "Calca",
      "Acomayo",
      "Paucartambo",
      "Yanaoca",
      "Tinta",
      "Ollantaytambo",
      "Pisac",
      "Chinchero",
      "Maras",
    ],
  },
  {
    Estado: "Huancavelica",
    Ciudades: [
      "Huancavelica",
      "Lircay",
      "Castrovirreyna",
      "Acobamba",
      "Pampas",
      "Tayacaja",
      "Angaraes",
      "Churcampa",
      "Salcabamba",
      "Salcahuasi",
      "Vilca",
      "Yauli",
      "Aurahua",
      "Chinchihuasi",
    ],
  },
  {
    Estado: "Huánuco",
    Ciudades: [
      "Huánuco",
      "Tingo María",
      "Aucayacu",
      "Ambo",
      "Panao",
      "La Unión",
      "Llata",
      "Puerto Inca",
      "Churubamba",
      "Chinchao",
      "Yarowilca",
      "Cholón",
      "Marías",
      "Huacrachuco",
      "Monzón",
      "Pucayacu",
    ],
  },
  {
    Estado: "Ica",
    Ciudades: [
      "Ica",
      "Chincha Alta",
      "Pisco",
      "Nazca",
      "Palpa",
      "Tupac Amaru Inca",
      "Paracas",
      "San Clemente",
      "Vista Alegre",
      "El Ingenio",
      "Ocucaje",
      "Yauca del Rosario",
      "Tate",
      "Pachacutec",
    ],
  },
  {
    Estado: "Junín",
    Ciudades: [
      "Huancayo",
      "Jauja",
      "La Oroya",
      "Satipo",
      "Chanchamayo",
      "Tarma",
      "Junín",
      "Concepción",
      "Chupaca",
      "Yauli",
      "Pichanaqui",
      "San Ramón",
      "Pangoa",
      "Mazamari",
      "San José de Quero",
      "San Jerónimo de Tunán",
    ],
  },
  {
    Estado: "La Libertad",
    Ciudades: [
      "Trujillo",
      "Chepén",
      "Pacasmayo",
      "Guadalupe",
      "Otuzco",
      "Viru",
      "Huamachuco",
      "Santiago de Chuco",
      "Ascope",
      "Chocope",
      "Paiján",
      "Chicama",
      "Cascas",
      "Pataz",
      "Parcoy",
      "Julcán",
      "Cajabamba",
    ],
  },
  {
    Estado: "Lambayeque",
    Ciudades: [
      "Chiclayo",
      "Lambayeque",
      "Ferreñafe",
      "Motupe",
      "Olmos",
      "Monsefú",
      "Túcume",
      "Jayanca",
      "Oyotún",
      "Picsi",
      "Salas",
      "Illimo",
      "Zaña",
      "Reque",
      "Pomalca",
      "José Leonardo Ortiz",
    ],
  },
  {
    Estado: "Lima",
    Ciudades: [
      "Huacho",
      "Huaral",
      "Barranca",
      "Cañete",
      "Chancay",
      "Huarochirí",
      "Yauyos",
      "Canta",
      "Chosica",
      "San Vicente de Cañete",
      "Imperial",
      "Mala",
      "Asia",
      "Lunahuaná",
      "Omas",
      "Sayán",
      "Pativilca",
      "Supe",
    ],
  },
  {
    Estado: "Loreto",
    Ciudades: [
      "Iquitos",
      "Nauta",
      "Requena",
      "Yurimaguas",
      "Caballococha",
      "Contamana",
      "Tamshiyacu",
      "Indiana",
      "Pebas",
      "San Pablo",
      "Punchana",
      "San Juan Bautista",
      "Belén",
    ],
  },
  {
    Estado: "Madre de Dios",
    Ciudades: [
      "Puerto Maldonado",
      "Iñapari",
      "Laberinto",
      "Huepetuhe",
      "Boca Colorado",
      "Inambari",
      "Las Piedras",
      "Fitzcarrald",
    ],
  },
  {
    Estado: "Moquegua",
    Ciudades: [
      "Moquegua",
      "Ilo",
      "Omate",
      "Torata",
      "Samegua",
      "Cuchumbaya",
      "Carumas",
      "Puquina",
      "Ubinas",
    ],
  },
  {
    Estado: "Pasco",
    Ciudades: [
      "Cerro de Pasco",
      "Oxapampa",
      "Yanahuanca",
      "Villa Rica",
      "Pozuzo",
      "Huariaca",
      "Chaupimarca",
      "Paucartambo",
      "Puerto Bermúdez",
      "Constitución",
    ],
  },
  {
    Estado: "Piura",
    Ciudades: [
      "Piura",
      "Sullana",
      "Paita",
      "Talara",
      "Sechura",
      "Chulucanas",
      "Catacaos",
      "Huancabamba",
      "La Unión",
      "Tambo Grande",
      "Pariñas",
      "Bellavista",
      "Chusis",
      "Querecotillo",
      "El Alto",
    ],
  },
  {
    Estado: "Puno",
    Ciudades: [
      "Puno",
      "Juliaca",
      "Azángaro",
      "Ayaviri",
      "Yunguyo",
      "Ilave",
      "Huancané",
      "Lampa",
      "Juli",
      "Putina",
      "Sandia",
      "Macusani",
      "Desaguadero",
      "Ananea",
      "Vilque",
      "Cabana",
    ],
  },
  {
    Estado: "San Martín",
    Ciudades: [
      "Moyobamba",
      "Tarapoto",
      "Juanjuí",
      "Bellavista",
      "Saposoa",
      "Lamas",
      "Tocache",
      "Rioja",
      "Yurimaguas",
      "Picota",
      "El Dorado",
      "San José de Sisa",
      "Nueva Cajamarca",
      "Soritor",
      "Awajún",
    ],
  },
  {
    Estado: "Tacna",
    Ciudades: [
      "Tacna",
      "Tarata",
      "Locumba",
      "Candarave",
      "Palca",
      "Sitajara",
      "Ilabaya",
      "Estique",
      "Susapaya",
      "Inclán",
      "Pachía",
    ],
  },
  {
    Estado: "Tumbes",
    Ciudades: [
      "Tumbes",
      "Zorritos",
      "Aguas Verdes",
      "Corrales",
      "Pampas de Hospital",
      "San Jacinto",
      "San Juan de la Virgen",
    ],
  },
  {
    Estado: "Ucayali",
    Ciudades: [
      "Pucallpa",
      "Atalaya",
      "Aguaytía",
      "Contamana",
      "Curimana",
      "Sepahua",
      "Iparía",
      "Tournavista",
      "Raymondi",
    ],
  },
  {
    Estado: "Prov. Lima",
    Ciudades: [
      "Lima",
      "San Isidro",
      "Miraflores",
      "Barranco",
      "San Borja",
      "Surco",
      "San Martín de Porres",
      "Los Olivos",
      "La Molina",
      "Jesús María",
      "Lince",
      "Rímac",
      "Pueblo Libre",
      "Chorrillos",
      "Magdalena del Mar",
      "San Miguel",
      "Surquillo",
      "Santa Anita",
      "El Agustino",
      "Cercado de Lima",
    ],
  },
];

export default peru_cities;
