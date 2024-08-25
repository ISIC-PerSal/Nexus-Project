const venezuela_cities = [
  {
    Estado: "Amazonas",
    Ciudades: [
      "Puerto Ayacucho",
      "San Fernando de Atabapo",
      "Maroa",
      "San Carlos de Río Negro",
      "La Esmeralda",
    ],
  },
  {
    Estado: "Anzoátegui",
    Ciudades: [
      "Barcelona",
      "Puerto La Cruz",
      "El Tigre",
      "Anaco",
      "Lechería",
      "Cantaura",
      "Clarines",
      "Píritu",
      "Guanta",
      "Aragua de Barcelona",
      "Onoto",
      "San Mateo",
    ],
  },
  {
    Estado: "Apure",
    Ciudades: [
      "San Fernando de Apure",
      "Guasdualito",
      "Elorza",
      "Achaguas",
      "Biruaca",
      "Bruzual",
      "Mantecal",
      "Puerto Páez",
    ],
  },
  {
    Estado: "Aragua",
    Ciudades: [
      "Maracay",
      "Turmero",
      "La Victoria",
      "El Limón",
      "Cagua",
      "Santa Cruz de Aragua",
      "Villa de Cura",
      "San Mateo",
      "Palo Negro",
      "Las Tejerías",
      "Barbacoas",
      "San Casimiro",
    ],
  },
  {
    Estado: "Barinas",
    Ciudades: [
      "Barinas",
      "Sabaneta",
      "Socopó",
      "Ciudad Bolivia",
      "Barinitas",
      "Santa Bárbara",
      "Obispos",
      "El Cantón",
      "Santa Inés",
    ],
  },
  {
    Estado: "Bolívar",
    Ciudades: [
      "Ciudad Bolívar",
      "Ciudad Guayana",
      "Upata",
      "Caicara del Orinoco",
      "El Callao",
      "Tumeremo",
      "Guasipati",
      "Santa Elena de Uairén",
      "Maripa",
      "La Paragua",
      "El Dorado",
    ],
  },
  {
    Estado: "Carabobo",
    Ciudades: [
      "Valencia",
      "Puerto Cabello",
      "Guacara",
      "San Joaquín",
      "Mariara",
      "Tocuyito",
      "Bejuma",
      "Miranda",
      "Montalbán",
      "Guigue",
      "Los Guayos",
      "Morón",
      "Naguanagua",
    ],
  },
  {
    Estado: "Cojedes",
    Ciudades: [
      "San Carlos",
      "Tinaquillo",
      "Tinaco",
      "El Baúl",
      "Macapo",
      "Manrique",
      "El Pao",
      "Acarigua",
      "La Aguadita",
    ],
  },
  {
    Estado: "Delta Amacuro",
    Ciudades: ["Tucupita", "Curiapo", "Pedernales", "La Horqueta"],
  },
  {
    Estado: "Distrito Capital",
    Ciudades: ["Caracas"],
  },
  {
    Estado: "Falcón",
    Ciudades: [
      "Coro",
      "Punto Fijo",
      "La Vela de Coro",
      "Chichiriviche",
      "Tucacas",
      "Pueblo Nuevo",
      "Adícora",
      "Mirimire",
      "Judibana",
      "Santa Ana de Coro",
      "Santa Cruz de Bucaral",
      "Yaracal",
    ],
  },
  {
    Estado: "Guárico",
    Ciudades: [
      "San Juan de los Morros",
      "Calabozo",
      "Valle de la Pascua",
      "Zaraza",
      "Altagracia de Orituco",
      "El Socorro",
      "Tucupido",
      "Chaguaramas",
      "Camaguán",
      "Santa María de Ipire",
      "San Rafael de Laya",
    ],
  },
  {
    Estado: "Lara",
    Ciudades: [
      "Barquisimeto",
      "Cabudare",
      "Carora",
      "El Tocuyo",
      "Quíbor",
      "Duaca",
      "Sanare",
      "Aregue",
      "Curarigua",
      "Sarare",
      "Cubiro",
    ],
  },
  {
    Estado: "Mérida",
    Ciudades: [
      "Mérida",
      "El Vigía",
      "Tovar",
      "Ejido",
      "Santa Cruz de Mora",
      "Nueva Bolivia",
      "Bailadores",
      "La Azulita",
      "Lagunillas",
      "Chiguará",
      "Timotes",
    ],
  },
  {
    Estado: "Miranda",
    Ciudades: [
      "Los Teques",
      "Guarenas",
      "Guatire",
      "Charallave",
      "Ocumare del Tuy",
      "Higuerote",
      "San Antonio de los Altos",
      "Carrizal",
      "Santa Teresa del Tuy",
      "Caucagua",
      "Petare",
      "Barlovento",
    ],
  },
  {
    Estado: "Monagas",
    Ciudades: [
      "Maturín",
      "Caripito",
      "Punta de Mata",
      "Temblador",
      "Quiriquire",
      "Barrancas del Orinoco",
      "Caripe",
      "Caicara de Maturín",
      "Aragua de Maturín",
      "El Tejero",
    ],
  },
  {
    Estado: "Nueva Esparta",
    Ciudades: [
      "La Asunción",
      "Porlamar",
      "Pampatar",
      "Juan Griego",
      "Punta de Piedras",
      "El Valle del Espíritu Santo",
      "San Juan Bautista",
      "La Guardia",
      "Boca del Río",
      "El Tirano",
      "Juangriego",
      "Villa Rosa",
    ],
  },
  {
    Estado: "Portuguesa",
    Ciudades: [
      "Guanare",
      "Acarigua",
      "Araure",
      "Ospino",
      "Píritu",
      "Agua Blanca",
      "Biscucuy",
      "San Rafael de Onoto",
      "Guanarito",
      "Villa Bruzual",
    ],
  },
  {
    Estado: "Sucre",
    Ciudades: [
      "Cumaná",
      "Carúpano",
      "Güiria",
      "San Antonio del Golfo",
      "Cariaco",
      "Casanay",
      "Marigüitar",
      "El Morro de Puerto Santo",
      "Araya",
      "Río Caribe",
      "Yaguaraparo",
      "Santa Fe",
      "Tunapuy",
    ],
  },
  {
    Estado: "Táchira",
    Ciudades: [
      "San Cristóbal",
      "Rubio",
      "La Fría",
      "Táriba",
      "San Antonio del Táchira",
      "Colón",
      "El Piñal",
      "Santa Ana del Táchira",
      "Cordero",
      "Michelena",
      "Capacho",
      "Ureña",
    ],
  },
  {
    Estado: "Trujillo",
    Ciudades: [
      "Trujillo",
      "Valera",
      "Boconó",
      "Carvajal",
      "Betijoque",
      "Escuque",
      "La Puerta",
      "Monay",
      "Sabana de Mendoza",
      "Campo Elías",
      "Jajó",
      "Pampán",
      "Santa Ana",
      "Isnotú",
      "La Mesa de Esnujaque",
    ],
  },
  {
    Estado: "Vargas La Guaira",
    Ciudades: [
      "La Guaira",
      "Maiquetía",
      "Catia La Mar",
      "Carayaca",
      "Caraballeda",
      "Naiguatá",
      "Macuto",
    ],
  },
  {
    Estado: "Yaracuy",
    Ciudades: [
      "San Felipe",
      "Yaritagua",
      "Chivacoa",
      "Nirgua",
      "Cocorote",
      "Aroa",
      "Sabana de Parra",
      "San Pablo",
      "Boraure",
    ],
  },
  {
    Estado: "Zulia",
    Ciudades: [
      "Maracaibo",
      "Cabimas",
      "Ciudad Ojeda",
      "Santa Bárbara del Zulia",
      "Mara",
      "Machiques",
      "San Francisco",
      "La Cañada de Urdaneta",
      "Bachaquero",
      "Lagunillas",
      "La Concepción",
      "El Moján",
      "Los Puertos de Altagracia",
      "Sinamaica",
      "Paraguaipoa",
      "Encontrados",
    ],
  },
];

export default venezuela_cities;