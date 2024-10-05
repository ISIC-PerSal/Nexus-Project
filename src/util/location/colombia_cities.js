const colombia_cities = [
    {
        Estado: "Amazonas",
        Ciudades: ["Leticia"]
    },
    {
        Estado: "Antioquia",
        Ciudades: ["Abriaquí", "Alejandría", "Amagá", "Amalfi", "Andes", "Angelópolis", "Angostura", "Anorí", 
            "Anza", "Apartadó", "Arboletes", "Argelia", "Armenia", "Barbosa", "Belmira", "Bello", "Betania", 
            "Betulia", "Briceño", "Bucaramanga", "Cáceres", "Café de la Sierra", "Cañasgordas", "Caracolí", 
            "Caramanta", "Carepa", "Carolina del Príncipe", "Caucasia", "Chigorodó", "Cisneros", "Ciudad Bolívar", 
            "Cocorná", "Concepción", "Concordia", "Copacabana", "Dabeiba", "Donmatías", "Ebéjico", "El Bagre", 
            "El Carmen de Viboral", "El Cejo", "El Peñol", "El Retiro", "El Santuario", "Entrerríos", "Envigado", 
            "Fredonia", "Frontino", "Giraldo", "Girardota", "Guadalupe", "Guarne", "Guatapé", "Heliconia", "Higuerón", 
            "Itagüí", "Jardín", "Jericó", "La Ceja", "La Estrella", "La Pintada", "La Unión", "Maceo", "Marinilla", 
            "Medellín", "Mulegué", "Nariño", "Nechí", "Necoclí", "Olaya", "Peque", "Pueblo Rico", "Puerto Berrío", 
            "Puerto Nare", "Puerto Triunfo", "Remedios", "Rionegro", "Sabanalarga", "Sabaneta", "Salgar", 
            "San Andrés de Cuerquia", "San Carlos", "San Francisco", "San Jerónimo", "San José de la Montaña", 
            "San Luis", "San Pedro de Urabá", "San Rafael", "San Roque", "San Vicente Ferrer", "Santa Bárbara", 
            "Santa Fé de Antioquia", "Santa Rosa de Osos", "Santo Domingo", "Segovia", "Sonsón", "Támesis", "Tarazá", 
            "Tarso", "Titiribí", "Turbo", "Uramita", "Urrao", "Valdivia", "Valparaíso", "Vegachí", "Venecia", "Yalí", 
            "Yarumal", "Yolombó", "Yondó", "Zaragoza"]
    },
    {
        Estado: "Arauca",
        Ciudades: ["Arauca", "Arauquita", "Cravo Norte", "Fortul", "Puerto Rondón", "Saravena", "Tame"]
    },
    {
        Estado: "Atlántico",
        Ciudades: ["Baranoa", "Barranquilla", "Campo de la Cruz", "Candelaria", "Galapa", "Juan de Acosta", 
            "Luruaco", "Malambo", "Manatí", "Palmar de Varela", "Piohacha", "Polo Nuevo", "Repelón", 
            "Sabanagrande", "Sabanalarga", "Santa Lucía", "Santa Rosa de Lima", "Soledad", "Suan", "Tubará", 
            "Usiacurí", "Villanueva", "Zona Bananera"]
    },
    {
        Estado: "Bolívar",
        Ciudades: ["Achí", "Achi", "Altos del Rosario", "Arenal", "Arjona", "Arroyohondo", "Barahona", 
            "Barranco de Loba", "Bolu", "Carmen de Bolívar", "Cartagena", "Clemencia", "El Guamo", "El Peñón", 
            "Hatillo de Loba", "Magangué", "Mahates", "Margarita", "Mompós", "Montecristo", "Morales", "Morroa", 
            "San Basilio de Palenque", "San Bernardo del Viento", "San Juan Nepomuceno", "San Martín de Loba", 
            "San Pablo", "San Pedro", "Santa Catalina", "Santa Cruz de Mompós", "Santa Rosa", "Sergio", 
            "Talaigua Nuevo", "Turbana", "Turbaco", "Turu", "Villa de San Diego de Ubaté", "Villanueva", 
            "Zambrano", "Zaragoza"]
    },
    {
        Estado: "Boyacá",
        Ciudades: ["Aquitania", "Arcabuco", "Belén", "Berbeo", "Betéitiva", "Beteitiva", "Boya", "Boyacá", 
            "Briceño", "Bucaramanga", "Caldas", "Campohermoso", "Cerinza", "Chiquinquirá", "Chiscas", "Chita", 
            "Chitaraque", "Chivor", "Cicuto", "Ciénaga", "Ciénaga de Oro", "Colombia", "Cómbita", "Corrales", 
            "Cucaita", "Cuítiva", "Duitama", "El Cocuy", "El Espino", "El Peñón", "El Socorro", "El Uvito", 
            "Firavitoba", "Fómeque", "Gachalá", "Gachantivá", "Gámeza", "Garagoa", "Giratá", "Guacamayas", 
            "Guateque", "Guayatá", "Guio", "Iza", "Jenesano", "Jericó", "Jota", "Julián", "La Capilla", 
            "La Uvita", "Labranza", "Labranzón", "La Palmera", "La Victoria", "Lerida", "Málaga", "Moniquirá", 
            "Motavita", "Muzo", "Nobsa", "Nuevo Colón", "Oicatá", "Otanche", "Pachavita", "Paipa", "Páez", 
            "Pajonales", "Panqueba", "Pauna", "Paya", "Pesca", "Piedecuesta", "Pinto", "Pizarro", "Póngala", 
            "Potosí", "Puerto Boyacá", "Quevedo", "Ráquira", "Rondón", "Saboyá", "Sáchica", "Sáchica de San Juan", 
            "Sama", "San Eduardo", "San José de Pare", "San Luis de Gaceno", "San Pablo de Borbur", "San Simón", 
            "Santa María", "Santa Rosa de Viterbo", "Santa Sofía", "Santana", "Sativasur", "Siachoque", "Soatá", 
            "Socotá", "Sogamoso", "Somondoco", "Sotaquira", "Sutamarchán", "Sutatausa", "Tibasosa", "Toca", 
            "Tocancipá", "Tuta", "Tutazá", "Turmequé", "Turmequé", "Umbita", "Ushpa", "Ventaquemada", 
            "Villa de Leyva", "Villanueva", "Villarica", "Zetaquira"]
    },
    {
        Estado: "Caldas",
        Ciudades: ["Aguadas", "Anserma", "Aranzada", "Chinchiná", "Dosquebradas", "La Dorada", "La Merced", 
            "Manizales", "Marmato", "Marquetalia", "Marulanda", "Neira", "Palestina", "Páldoa", "Riosucio", 
            "Risaralda", "Salamina", "Salamina", "San Félix", "San José", "San Pedro", "Santa Rosa de Cabal", 
            "Samaná", "Samaná", "Viterbo"]
    },
    {
        Estado: "Caquetá",
        Ciudades: ["Albania", "Ballena", "Belén de los Andaquíes", "Cartagena del Chairá", "Curillo", 
            "El Doncello", "El Paujil", "El Valle", "Florencia", "La Montañita", "La Uribe", "Milán", "Morelia", 
            "San José del Fragua", "San Vicente del Caguán", "Solano", "Solita"]
    },
    {
        Estado: "Casanare",
        Ciudades: ["Aguilar", "Aurora", "Banadía", "Becerra", "Casanare", "Chámeza", "Hato Corozal", "La Salina", 
            "Maní", "Monterrey", "Nunchía", "Orocué", "Paz de Ariporo", "Recetor", "San Luis de Palenque", 
            "San Salvador", "Támara", "Trinidad", "Villanueva"]
    },
    {
        Estado: "Cauca",
        Ciudades: ["Almaguer", "Argelia", "Balboa", "Bolívar", "Cajibío", "Caldono", "Caloto", "Corinto", 
            "El Bordo", "El Tambo", "Florencia", "Guapi", "Inzá", "Jambaló", "La Sierra", "La Vega", "Ladera", 
            "Lopez", "Mercaderes", "Morales", "Padilla", "Páez", "Patía", "Piendamó", "Popayán", "Puerto Tejada", 
            "Puracé", "Ricaurte", "San Sebastián", "Santa Rosa", "Santander de Quilichao", "Silvia", "Sotará", 
            "Suárez", "Timbío", "Timbiquí", "Toribío", "Totoró", "Villa Rica", "Villa de Leyva"]
    },
    {
        Estado: "Cesar",
        Ciudades: ["Agua de Dios", "Bosconia", "Chimichagua", "Chiriguaná", "Codazzi", "La Gloria", 
            "La Jagua de Ibirico", "La Paz", "Manaure", "Pailitas", "Pelaya", "Pueblo Bello", "Río de Oro", 
            "San Alberto", "San Diego", "San Martín", "San Roque", "San Sebastián", "Valledupar", "Villanueva", 
            "Villanueva", "Zapatoca"]
    },
    {
        Estado: "Chocó",
        Ciudades: ["Acandí", "Alto Baudó", "Bagadó", "Bajo Baudó", "Belén de los Andaquíes", "Carmen del Darién", 
            "Cértegui", "Chocó", "Condoto", "El Carmen de Atrato", "El Litoral del San Juan", "El Palmar", 
            "Istmina", "Juradó", "Lloró", "Mato", "Nóvita", "Quibdó", "Riosucio", "San José del Palmar", 
            "San Juan de Urabá", "San Pedro de Urabá", "Santiago de Cali", "Sipi", "Tadó", "Tamarindo", 
            "Tamarindo", "Ungía", "Valparaíso", "Yuto"]
    },
    {
        Estado: "Córdoba",
        Ciudades: ["Ayapel", "Cereté", "Chimá", "Chinú", "Ciénaga de Oro", "Cotorra", "Crato", "La Apartada", 
            "La Ciénaga", "Lorica", "Montelíbano", "Montería", "Planeta Rica", "Puerto Escondido", 
            "Puerto Libertador", "Puerto Odio", "Sahagún", "San Andrés Sotavento", "San Antero", 
            "San Bernardo del Viento", "San Carlos", "San Pelayo", "San Pedro", "Santa Catalina", 
            "Santa Cruz de Lorica", "Santa Rosa", "Santo Tomás", "Tierralta", "Tuchín", "Valencia"]
    },
    {
        Estado: "Cundinamarca",
        Ciudades: ["Agua de Dios", "Albán", "Anapoima", "Apulo", "Arbeláez", "Beltrán", "Bituima", "Bogotá", 
            "Bojacá", "Cabrera", "Cajicá", "Caparrapí", "Cáqueza", "Chaguaní", "Chía", "Choachí", "Chocontá", 
            "Cogua", "Cota", "Cucunubá", "El Colegio", "El Peñón", "El Rosal", "Facatativá", "Fómeque", "Funza", 
            "Fúquene", "Gachancipá", "Gachalá", "Gachancipá", "Gachalá", "Guaduas", "Guasca", "Guatavita", 
            "Guayabal de Síquima", "Guayabetal", "Jerusalén", "Junín", "La Calera", "La Peña", "La Vega", 
            "Lima", "Machetá", "Madrid", "Manta", "Medina", "Mosquera", "Nemocón", "Nilo", "Nocaima", "Pacho", 
            "Paime", "Pandi", "Paratebueno", "Pasca", "Puerto Salgar", "Quebrada", "Ricaurte", 
            "San Antonio del Tequendama", "San Francisco", "San Juan de Río Seco", "San Pedro", "Sasaima", 
            "Sesquilé", "Sibaté", "Silvania", "Subachoque", "Sumapaz", "Tabio", "Tausa", "Tenjo", "Tocaima", 
            "Tocancipá", "Ubalá", "Ubaque", "Ubate", "Venecia", "Zipacón", "Zipaquirá",]
    },
    {
        Estado: "Guainía",
        Ciudades: ["Inírida", "Mapiripán", "Mitu", "Pana Pana", "Puerto Colombia", "San Felipe", "San José del Guaviare"]
    },
    {
        Estado: "Guaviare",
        Ciudades: ["Calamar", "El Retorno", "Miraflores", "San José del Guaviare"]
    },
    {
        Estado: "Huila",
        Ciudades: ["Acevedo", "Agrado", "Aipe", "Algeciras", "Altamira", "Baraya", "Campoalegre", "Colombia", 
            "El Agrado", "Elías", "El Pital", "Garzón", "Gigante", "González", "Hobo", "Iquira", "Isnos", 
            "La Argentina", "La Plata", "La Jagua", "La Vega", "Neiva", "Oporapa", "Paicol", "Palermo", 
            "Pitalito", "Rivera", "San Agustín", "San José de Isnos", "Santa María", "Suaza", "Tarqui", "Tello", 
            "Teruel", "Tesalia", "Timaná", "Villavieja", "Yaguará"]
    },
    {
        Estado: "La Guajira",
        Ciudades: ["Albania", "Barrancas", "Dibulla", "Distracción", "El Molino", "El Rosario", "Hatonuevo", 
            "La Jagua del Pilar", "La Paz", "Maicao", "Manaure", "Riohacha", "San Juan del Cesar", "Uribia", 
            "Urumita"]
    },
    {
        Estado: "Magdalena",
        Ciudades: ["Agua de Dios", "Aracataca", "Ariguaní", "Cerro de San Antonio", "Chivolo", "Ciénaga", 
            "Concordia", "El Banco", "El Cerro", "El Piñón", "El Retén", "Fundación", "Guamal", "Hatonuevo", 
            "Mágdalena", "Minca", "Pivijay", "Plato", "Puebloviejo", "Remolino", "Sabanas de San Ángel", 
            "Salamina", "San Sebastián de Buenavista", "Santa Ana", "Santa Bárbara de Pinto", "Santa Marta", 
            "Sitionuevo", "Tenerife", "Zapayo"]
    },
    {
        Estado: "Meta",
        Ciudades: ["Acacías", "Barranca de Upía", "Cabuyaro", "Castilla la Nueva", "Cubarral", "Cumaral", 
            "Cumaribo", "El Calvario", "El Castillo", "El Dorado", "El Meta", "El Peñón", "Granada", "Guamal", 
            "La Uribe", "Lejanías", "Mapiripán", "Mesetas", "La Vanguardia", "Piedrancha", "Puerto Gaitán", 
            "Puerto López", "Puerto Lleras", "Puerto Rico", "San Carlos de Guaroa", "San Juan de Arama", 
            "San Martín", "San Sebastián de Buenavista", "Villavicencio", "Villanueva"]
    },
    {
        Estado: "Nariño",
        Ciudades: ["Aldana", "Ancuya", "Arboleda", "Barbacoas", "Belén", "Buesaco", "Colón", "Consacá", 
            "Contadero", "Córdoba", "Cuaspud", "El Charco", "El Peñol", "El Rosario", "El Tambo", 
            "Francisco Pizarro", "Funes", "Guachucal", "Guaitarilla", "Gualmatán", "Iles", "Imués", 
            "Ipiales", "La Cruz", "La Florida", "La Llanada", "La Tola", "La Unión", "Leiva", "Linares", 
            "Los Andes", "Magüí Payán", "Mallama", "Mosquera", "Nariño", "Nariño", "Pasto", "Policarpa", 
            "Potosí", "Providencia", "Puerres", "Pupiales", "Ricaurte", "Roberto Payán", "Samaniego", 
            "San Bernardo", "San Juan de Pasto", "San Lorenzo", "San Pablo", "San Pedro", "San Rafael", 
            "San Vicente del Caguán", "Santo Domingo", "Sapuyes", "Tumaco", "Túquerres", "Yacuanquer"]
    },
    {
        Estado: "Norte de Santander",
        Ciudades: ["Ábrego", "Arboledas", "Bochalema", "Bucarasica", "Cúcuta", "Durania", "El Carmen", 
            "El Catatumbo", "El Tarra", "El Zulia", "Gramalote", "Hacarí", "Herrán", "La Esperanza", "La Playa", 
            "La Unión", "Los Patios", "Los Santos", "Ocaña", "Pamplona", "Pamplonita", "Ragonvalia", 
            "Río de Oro", "San Calixto", "San Cayetano", "San José de Cúcuta", "San Luis", "San Pablo", 
            "San Pedro", "Santiago", "Santo Domingo", "Santos", "Teorama", "Tibú", "Tima", "Villa de Rosario", 
            "Villa del Rosario", "Villas", "Zapatoca", "Zulia"]
    },
    {
        Estado: "Putumayo",
        Ciudades: ["Colón", "Mocoa", "Orito", "Puerto Asís", "Puerto Caicedo", "Puerto Guzmán", "Puerto Leguízamo", 
            "Santiago", "San Francisco", "San Miguel", "San Juan de los Morros", "San Pedro", "Valle del Guamuez"]
    },
    {
        Estado: "Quindío",
        Ciudades: ["Armenia", "Buenavista", "Calarcá", "Circasia", "Córdoba", "Filandia", "Génova", "La Tebaida", 
            "Montenegro", "Pijao", "Quimbaya", "Salento"]
    },
    {
        Estado: "Risaralda",
        Ciudades: ["Apía", "Balboa", "Belén de Umbría", "Dosquebradas", "Guática", "La Celia", "La Virginia", 
            "Marsella", "Mistrató", "Pereira", "Pueblo Rico", "Santa Rosa de Cabal", "Santuario", "San José de Risaralda"]
    },
    {
        Estado: "San Andrés, Providencia y Santa Catalina",
        Ciudades: ["San Andrés", "Providencia", "Santa Catalina"]
    },
    {
        Estado: "Santander",
        Ciudades: ["Barrancabermeja", "Barichara", "Barrancabermeja", "Bucaramanga", "Bucaramanga", "California", 
            "Capitanejo", "Carcasí", "Cepitá", "Charta", "Chima", "Chipatá", "Cimitarra", "Concepción", "Confines", 
            "Curití", "El Carmen de Chucurí", "El Guacamayo", "El Peñón", "El Playón", "Floridablanca", "Galán", 
            "Girón", "Guaca", "Guadalupe", "Guapotá", "Güepsa", "Hato", "La Belleza", "La Paz", "Landázuri", "Málaga", 
            "Matanza", "Mogotes", "Ocamonte", "Oiba", "Onzaga", "Palmar", "Pan de Azúcar", "Piedecuesta", "Pinchote", 
            "Puente Nacional", "Puerto Parra", "Puerto Wilches", "Rionegro", "San Andrés", "San Benito", "San Gil", 
            "San Joaquín", "San José de Miranda", "San Vicente de Chucurí", "Santa Bárbara", "Santa Helena del Opón", 
            "Santa Rosa", "Simacota", "Socorro", "Sucre", "Tona", "Torres", "Valle de San José", "Vélez", "Villanueva", 
            "Vélez", "Zapatoca", "Zapatoca"]
    },
    {
        Estado: "Sucre",
        Ciudades: ["Sincelejo", "San Benito Abad", "San Carlos", "San Jacinto", "San Juan de Betulia", 
            "San Onofre", "San Pedro", "San Sebastián", "Sampués", "Sincé", "Sucre", "Tolú", "Tolu Viejo", 
            "Corozal", "Coveñas", "El Roble", "La Unión", "Los Palmitos", "Morales", "Ovejas", "Palmito", 
            "San Marcos", "San José de los Caciques", "San Luis de Palenque", "San Juan de Urabá", 
            "San Vicente de Chucurí", "Santo Domingo"]
    },
    {
        Estado: "Tolima",
        Ciudades: ["Alpujarra", "Armero", "Ataco", "Cajamarca", "Carmen de Apicalá", "Chaparral", "Coello", 
            "Coyaima", "Dolores", "Espinal", "Falan", "Flandes", "Honda", "Ibagué", "Icononzo", "Lérida", 
            "Líbano", "Mariquita", "Melgar", "Murillo", "Natagaima", "Ortega", "Palocabildo", "Piedras", 
            "Planadas", "Prado", "Purificación", "Rioblanco", "Roncesvalles", "Saldaña", "San Antonio", 
            "San Luis", "San Sebastián de Mariquita", "Santa Isabel", "Suárez", "Valeria", "Villahermosa", 
            "Villarrica", "Venadillo", "Villarica", "Yaguara"]
    },
    {
        Estado: "Valle del Cauca",
        Ciudades: ["Ansermanuevo", "Buga", "Buenaventura", "Bugalagrande", "Caicedonia", "Candelaria", "Cartago", 
            "Dagua", "El Águila", "El Cerrito", "El Dovio", "El Viajano", "Ginebra", "Guadalajara de Buga", 
            "La Cumbre", "La Victoria", "La Unión", "Lago Calima", "Obando", "Palmira", "Pradera", "Roldanillo", 
            "San Pedro", "San Sebastián", "Toro", "Tuluá", "Ulloa", "Yumbo", "Yotoco", "Yotoco", "Zarzal"]
    },
    {
        Estado: "Vaupés",
        Ciudades: ["Mitú", "Papunaua", "Tucunaré"]
    },
    {
        Estado: "Vichada",
        Ciudades: ["Cumaribo", "La Primavera", "Puerto Carreño", "Santa Rosalía"]
    }
]
export default colombia_cities;
































