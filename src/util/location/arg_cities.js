const arg_cities = [
    {
        Estado: "Buenos Aires",
        Ciudades: ["Adolfo Alsina", "Adolfo González Chaves", "Alberti", "Almirante Brown",
            "Arrecifes", "Avellaneda", "Ayacucho", "Azul", "Bahía Blanca", "Balcarce", "Baradero", "Benito Juárez", "Berazategui", "Berisso", "Bolívar", "Bragado", "Brandsen", "Campana", "Capitán Sarmiento", "Carlos Casares", "Carlos Tejedor", "Carmen de Areco", "Carmen de Patagones", "Castelli", "Cañuelas", "Chacabuco", "Chascomús", "Chivilcoy", "Colón", "Coronel Dorrego", "Coronel Pringles", "Coronel Rosales", "Coronel Suárez", "Daireaux", "Dolores", "Ensenada", "Escobar", "Esteban Echeverría", "Exaltación de la Cruz", "Ezeiza", "Florencio Varela", "Florentino Ameghino", "General Alvarado", "General Alvear", "General Arenales", "General Belgrano", "General Guido", "General La Madrid", "General Las Heras", "General Lavalle", "General Madariaga", "General Paz",
            "General Pinto", "General Pueyrredón", "General Rodríguez","General San Martín","General Viamonte","General Villegas","Guaminí","Hipólito Yrigoyen","Hurlingham","Ituzaingó","José C. Paz","Junín","La Costa","La Matanza","La Plata","Lanús","Laprida","Las Flores","Leandro N. Alem","Lezama","Lincoln","Lobería","Lobos","Lomas de Zamora","Luján","Magdalena","Maipú","Malvinas Argentinas","Mar Chiquita","Marcos Paz","Mercedes","Merlo","Monte Hermoso","Moreno","Morón","Navarro","Necochea","Nueve de Julio","Olavarría", "Pehuajó","Pellegrini","Pergamino","Pila","Pilar","Pinamar","Presidente Perón","Puan","Punta Indio","Quilmes","Ramallo","Rauch","Rivadavia","Rojas","Roque Pérez","Saavedra","Saladillo","Salliqueló","Salto","San Andrés de Giles","San Antonio de Areco",
            "San Cayetano","San Fernando","San Isidro","San Miguel","San Miguel del Monte","San Nicolás","San Pedro","San Vicente","Suipacha","Tandil","Tapalqué","Tigre","Tordillo","Tornquist","Trenque Lauquen","Tres Arroyos","Tres de Febrero","Tres Lomas","Veinticinco de Mayo","Vicente López","Villa Gesell","Villarino","Zárate"
        ]
    },
    {
        Estado: "Catamarca",
        Ciudades: ["Aconquija","Ancasti", "Andalgalá","Antofagasta de la Sierra", "Belén","Capayán","Corral Quemado","El Alto","El Rodeo","Fiambalá", "Fray Mamerto Esquiú","Hualfín","Huillapima","Icaño","La Puerta","Las Juntas","Londres","Los Altos","Los Varela","Mutquín","Paclín","Pomán","Pozo de Piedra","Puerta de Corral Quemado","Puerta de San José", "Recreo","San Fernando","San Fernando del Valle de Catamarca","San José","Santa María","Santa Rosa","Saujil","Tapso","Tinogasta", "Valle Viejo","Villa Vil"]
    },
    {
        Estado: "Chaco",
        Ciudades: ["Aviá Teraí","Barranqueras","Basail","Campo Largo","Capitán Solari","Charadai","Charata","Chorotis","Ciervo Petiso","Colonia Aborigen","Colonia Benítez","Colonia Elisa","Colonia Popular","Colonias Unidas","Concepción del Bermejo","Coronel Du Graty","Corzuela","Cote Lai","El Espinillo","El Sauzalito","Enrique Urién","Fontana","Fuerte Esperanza","Gancedo","General Capdevila","General José de San Martín","General Pinedo","General Vedia","Hermoso Campo","Isla del Cerrito","Juan José Castelli","La Clotilde","La Eduvigis","La Escondida","La Leonesa","La Tigra","La Verde","Laguna Blanca","Laguna Limpia","Lapachito","Las Breñas","Las Garcitas","Las Palmas","Los Frentones","Machagai","Makallé","Margarita Belén","Miraflores","Misión Nueva Pompeya","Napenay","Pampa Almirón","Pampa del Indio","Pampa del Infierno","Presidencia de la Plaza","Presidencia Roca","Presidencia Roque Sáenz Peña","Puerto Bermejo","Puerto Eva Perón","Puerto Tirol","Puerto Vilelas","Quitilipi","Resistencia","Samuhú","San Bernardo","Santa Sylvina","Taco Pozo","Tres Isletas","Villa Berthet","Villa Río Bermejito","Villa Ángela"]
    },
    {
        Estado: "Chubut",
        Ciudades: ["28 de julio","Aldea Apeleg","Aldea Beleiro","Aldea Epulef","Alto Río Senguer","Buen Pasto","Camarones","Carrenleufú","Cerro Centinela","Cholila","Colan Conhué","","Comodoro Rivadavia","Corcovado","Cushamen","Dique Florentino Ameghino","Doctor Atilio Viglione","Doctor Ricardo Rojas","Dolavon","El Hoyo","El Maitén","Epuyén","Esquel","Facundo","Gaiman","Gan Gan","Gastre","Gobernador Costa","Gualjaina","José de San Martín","Lago Blanco","Lago Puelo","Lagunita Salada","Las Plumas","Los Altares","Paso de Indios","Paso del Sapo","","Puerto Madryn","Puerto Pirámides","Rada Tilly","Rawson","Río Mayo","Río Pico","Sarmiento","Tecka","Telsen","Trelew","Trevelín"]
    },
    {
        Estado: "Córdoba",
        Ciudades: ["Achiras","Adelia María","Agua de Oro","Alcira Gigena","Alejandro Roca","Alejo Ledesma","Alicia","Almafuerte","Alpa Corral","Alta Gracia","Alto Alegre","Altos de Chipión","Anisacate","Arias","Arroyito","Arroyo Algodón","Arroyo Cabral","Ausonia","Ballesteros","Ballesteros Sud","Balnearia","Bell Ville","Bengolea","Benjamín Gould","Berrotarán","Bialet Massé","Bouwer","Brinkmann","Buchardo","Bulnes","Calchín","Calchín Oeste","Camilo Aldao","Canals","Capilla del Carmen","Capilla del Carmen","Capitán General Bernardo O’Higgins","Carnerillo","Carrilobo","Cavanagh","Cañada de Luque","Chaján","Charras","Chazón","Chilibroste","Cintra","Colazo","Colonia Almada","Colonia Bismarck","Colonia Caroya","Colonia Italiana","Colonia Marina","Colonia Prosperidad","Colonia San Bartolomé","Colonia Tirolesa","Colonia Vignaud","Coronel Baigorria","Coronel Moldes","Corral de Bustos-Ifflinger","Corralito","Cosquín","Costa Sacate","Cruz Alta","Cruz del Eje","Córdoba","Dalmacio Vélez Sarfield","Del Campillo","Despeñaderos","Devoto","Deán Funes","El Arañado","El Brete","El Fortín","El Tío","Elena","Embalse","Estación General Paz","Estación Juárez Celman","Etruria","Freyre","General Baldissera","General Cabrera","General Deheza","General Levalle","General Roca","Guatimozín","Hernando","Huanchilla","Huerta Grande","Huinca Renancó","Idiazábal","Inriville","Isla Verde","Italó","James Craik","Jesús María","Jovita","Justiniano Posse","La Calera","La Carlota","La Cautiva","La Cesira","La Cruz","La Cumbre","La Falda","La Francia","La Granja","La Laguna","La Palestina","La Paquita","La Para","La Paz","La Playosa","La Puerta","La Tordilla","Laborde","Laboulaye","Laguna Larga","Las Acequias","Las Arrias","Las Higueras","Las Junturas","Las Perdices","Las Peñas","Las Tapias","Las Varas","Las Varillas","Las Vertientes","Leones","Los Cerrillos","Los Cisnes","Los Cocos","Los Cóndores","Los Surgentes","Los Zorros","Lozada","Luca","Lucio V. Mansilla","Luque","Malagueño","Malvinas Argentinas","Manfredi","Marcos Juárez","Marull","Matorrales","Mattaldi","Melo","Mendiolaza","Mi Granja","Mina Clavero","Miramar de Ansenuza","Monte Buey","Monte Cristo","Monte de los Gauchos","Monte Leña","Monte Maíz","Monte Ralo","Morrison","Morteros","Noetinger","Nono","Obispo Trejo","Olaeta","Oliva","Oncativo","Ordóñez","Pampayasta Sud","Pascanas","Pasco","Pilar","Piquillín",
                   "Porteña","Pozo del Molle","Pueblo Italiano","Quebracho Herrado","Quilino","Reducción","Rosales","Río Ceballos", "Río Cuarto","Río de los Sauces","Río Primero","Río Segundo", "Río Tercero","Sacanta","Saira","Saldán","Salsacate","Salsipuedes","Sampacho","San Agustín","San Antonio de Arredondo","San Antonio de Litín","San Basilio","San Carlos Minas","San Esteban","San Francisco","San Francisco del Chañar","San Javier y Yacanto","San José","San José de la Dormida","San José de las Salinas","San Marco Sierras","San Marcos Sud","San Pedro","San Pedro Norte","Santa Catalina / Holmberg","Santa Eufemia","Santa María de Punilla","Santa Rosa de Calamuchita","Santa Rosa de Río Primero","Santiago Temple","Sarmiento","Saturnino María Laspiur","Sebastián Elcano","Seeber","Serrano","Serrezuela","Silvio Pellico","Sinsacate","Tancacha","Tanti","Ticino","Toledo","Tosquita","Tránsito","Tío Pujio","Ucacha","Unquillo","Valle Hermoso","Viamonte","Vicuña Mackenna","Villa Allende","Villa Ascasubi","Villa Carlos Paz","Villa Concepción del Tío","Villa Cura Brochero","Villa de las Rosas","Villa de María de Río Seco","Villa de Soto","Villa del Dique","Villa del Rosario","Villa del Totoral","Villa Dolores","Villa Fontana","Villa Fontana","Villa Giardino","Villa Huidobro","Villa Icho Cruz", "Villa María","Villa Nueva","Villa Parque Santa Ana","Villa Rossi","Villa Rumipal","Villa Santa Cruz del Lago","Villa Sarmiento","Villa Tulumba","Villa Valeria","Villa Yacanto","Wenceslao Escalante"]
    },
    {
        Estado: "Corrientes",
        Ciudades: ["Bella Vista", "Berón de Astrada", "Bonpland","Cazadores Correntinos", "Caá Catí","Cecilio Echavarría","Chavarría","Colonia Carlos Pellegrini","Colonia Carolina","Colonia Libertad", "Colonia Liebig","Colonia Pando","Concepción del Yaguareté Corá", "Corrientes", "Cruz de los Milagros", "Curuzú Cuatiá","El Sombrero","Empedrado", "Esquina","Estación Torrent","Felipe Yofre", "Garruchos","General Alvear", "Gobernador Ingeniero Valentín Virasoro","Gobernador Martínez", "Goya","Guaviraví","Herlitzka", "Itatí", "Ituzaingó","Itá Ibaté","José Rafael Gómez","Juan Pujol","La Cruz", "Lavalle", "Lomas de Vallejos","Loreto","Mariano I. Loza","Mburucuyá", "Mercedes", "Mocoretá", "Monte Caseros", "Nueve de Julio","Pago de los Deseos","Palmar Grande","Parada Pucheta","Paso de la Patria", "Paso de los Libres","Pedro R. Fernández / Estación Mantilla","Perugorría","Pueblo Libertador","Ramada Paso","Riachuelo","Saladas","San Antonio de Apipé","San Carlos","San Cosme","San Isidro","San Lorenzo","San Luis del Palmar","San Miguel", "San Roque", "Santa Ana de los Guácaras", "Santa Lucía", "Santa Rosa", "Santo Tomé", "Sauce", "Tabay","Tapebicuá","Tatacuá","Tres de Abril", "Villa Olivari", "Yapeyú", "Yatay Tí Calle"]
    },
    {
        Estado: "Entre Ríos",
        Ciudades: ["Aldea Brasilera","Aldea María Luisa","Aldea San Antonio","Aranguren","Basavilbaso","Bovril","Caseros","Ceibas","Cerrito","Chajarí","Colonia Avellaneda","Colonia Ayuí","Colonia Elía","Colón","Concepción del Uruguay","Concordia","Conscripto Bernardi","Crespo","Diamante","El Pingo","Enrique Carbó","Estancia Grande","Federación","Federal","General Campos","General Galarza","General Ramírez","Gilbert","Gobernador Maciá","Gobernador Mansilla","Gualeguay","Gualeguaychú","Hasenkamp","Hernández","Herrera","Ibicuy","La Criolla","La Paz","Larroque","Libertador San Martín","Los Charrúas","Los Conquistadores","Lucas González","María Grande","Nogoyá","Oro Verde","Paraná","Piedras Blancas","Primero de Mayo","Pronunciamiento","Pueblo Brugo","Pueblo General Belgrano","Pueblo Liebig","Puerto Yeruá","Rosario del Tala","San Benito","San Gustavo","San Jaime de la Frontera","San José","San José de Feliciano","San Justo","San Salvador","Santa Ana","Santa Anita","Santa Elena","Sauce de Luna","Seguí","Tabossi","Ubajay","Urdinarrain","Valle María","Viale","Victoria","Villa Alcaraz","Villa Clara","Villa del Rosario","Villa Domínguez","Villa Elisa","Villa Hernandarias","Villa Mantero","Villa Paranacito","Villa Urquiza","Villaguay"]
    },
    {
        Estado: "Formosa",
        Ciudades: ["Clorinda","Comandante Fontana","El Colorado","El Espinillo","Estanislao del Campo","Formosa","General Enrique Mosconi","General Lucio Victorio Mansilla","General Manuel Belgrano","Herradura","Ibarreta","Ingeniero Guillermo Nicasio Juárez","Laguna Blanca","Laguna Naick Neck","Laguna Yema","Las Lomitas","Mayor Vicente Villafañe","Misión San Francisco de Laishí","Misión Tacaaglé","Palo Santo","Pirané","Pozo del Tigre","Riacho He-Hé","San Martín Dos","Villa Dos Trece","Villa Escolar","Villa General Güemes"]
    },
    {
        Estado: "Jujuy",
        Ciudades: ["Abra Pampa","Aguas Calientes","Caimancito","Calilegua","El Aguilar","El Carmen","El Talar","Fraile Pintado","Humahuaca","La Esperanza","La Mendieta","La Quiaca","Libertador General San Martín","Maimará","Monterrico","Palma Sola", "Palpalá","Pampa Blanca","Perico","Puesto Viejo","San Antonio", "San Pedro de Jujuy", "San Salvador de Jujuy","Santa Clara","Tilcara","Yala","Yuto"]
    },
    {
        Estado: "La Pampa",
        Ciudades: ["Abramo","Algarrobo del Águila","Alpachiri","Alta Italia","Anguil","Arata","Ataliva Roca","Bernardo Larroudé","Bernasconi","Caleufú","Carro Quemado","Catriló","Ceballos","Colonia 25 de Mayo","Colonia Barón","Colonia Santa Teresa","Conhello","Coronel Hilario Lagos","Doblas","Dorila","Eduardo Castex","Embajador Martini","General Acha","General Manuel Campos","General Pico","General San Martín","Gobernador Duval","Guatraché","Ingeniero Luiggi","Intendente Alvear","Jacinto Arauz","La Adela","La Humada","La Maruja","Lonquimay","Luan Toro","Macachín","Mauricio Mayer","Metileo","Miguel Cané","Miguel Riglos","Monte Nievas","Parera","Puelches","Puelén","Quehué","Quemú Quemú","Rancul","Realicó","Rolón","Santa Isabel","Santa Rosa","Telén","Toay","Tomás Manuel Anchorena","Trenel","Uriburu","Victorica","Villa Mirasol","Vértiz","Winifreda"]
    },
    {
        Estado: "La Rioja",
        Ciudades: ["Aimogasta /Arauco","Aminga /Castro Barros","Chamical","Chepes /R.Vera Peñaloza","Chilecito","Famatina","La Rioja","Los Sauces /San Blas","Malanzán /Gral. J.F.Quiroga","Olta /Gral. Belgrano","Patquía /Independencia","Tama /Gral. Peñaloza","Ulapes /San Martín","Villa Castelli","Villa San José de Vinchina","Villa Sanagasta","Villa Santa Rita de Catuna/ Gral Ocampo","Villa Unión /Cnel. F. Varela"]
    },
    {
        Estado: "Mendoza",
        Ciudades: []
    },
    {
        Estado: "Misiones",
        Ciudades: []
    },
    {
        Estado: "Neuquén",
        Ciudades: []
    },
    {
        Estado: "Río Negro",
        Ciudades: []
    },
    {
        Estado: "Salta",
        Ciudades: []
    },
    {
        Estado: "San Juan",
        Ciudades: []
    },
    {
        Estado: "San Luis",
        Ciudades: []
    },
    {
        Estado: "Santa Cruz",
        Ciudades: []
    },
    {
        Estado: "Santa Fe",
        Ciudades: []
    },
    {
        Estado: "Santiago del Estero",
        Ciudades: []
    },
    {
        Estado: "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
        Ciudades: []
    },
    {
        Estado: "Tucumán",
        Ciudades: []
    }
]
export default arg_cities;