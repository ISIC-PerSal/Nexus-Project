const mex_cities = [
    {
        Estado:"Aguascalientes",
        Ciudades: ["Aguascalientes", "Asientos", "Calvillo", "Cosío", "Pabellón de Arteaga", "Rincón de Romos",
            "San José de Gracia", "Tepezalá", "El Llano", "San Francisco de los Romo"]
    },
    {
        Estado:"Baja California",
        Ciudades: ["Ensenada", "Mexicali", "Tecate", "Tijuana", "Playas de Rosarito", "San Quintín",
            "San Felipe"]
    },
    {
        Estado:"Baja California Sur",
        Ciudades: ["Comondú", "Mulegé", "La Paz", "Los Cabos", "Loreto"]
    },
    {
        Estado:"Campeche",
        Ciudades: ["Calkiní", "Campeche", "Carmen", "Champotón", "Hecelchakán", "Hopelchén", "Palizada", "Tenabo", "Escárcega", "Calakmul", "Candelaria", "Seibaplaya", "Dzitbalché"]
    },
    {
        Estado: "Coahuila de Zaragoza",
        Ciudades: ["Abasolo", "Acuña", "Allende", "Arteaga", "Candela", "Castaños",
            "Cuatro Ciénegas", "Escobedo", "Francisco I. Madero", "Frontera", "General ", "Cepeda",
            "Guerrero", "Hidalgo", "Jiménez", "Juárez", "Lamadrid", "Matamoros", "Monclova", "Morelos", "Múzquiz", "Nadadores", "Nava", "Ocampo", "Parras", "Piedras Negras", "Progreso", "Ramos Arizpe", "Sabinas", "Sacramento", "Saltillo", "San Buenaventura", "San Juan de Sabinas", "San Pedro", "Sierra Mojada", "Torreón", "Viesca", "Villa Unión", "Zaragoza"]
    },
    {
        Estado: "Colima",
        Ciudades: ["Armería", "Colima", "Comala", "Coquimatlán", "Cuauhtémoc", "Ixtlahuacán", "Manzanillo", 
            "Minatitlán", "Tecomán", "Villa de Álvarez"]
    },
    {
        Estado: "Chiapas",
        Ciudades: ["Acacoyagua", "Acala", "Acapetahua", "Aldama", "Altamirano", "Amatán",
            "Amatenango de la Frontera", "Amatenango del Valle", "Ángel Albino Corzo", "Arriaga",
            "Bejucal de Ocampo", "Bella Vista", "Benemérito de las Américas", "Berriozábal", "Bochil",
            "El Bosque", "Cacahoatán", "Capitán Luis Ángel Vidal", "Catazajá", "Chalchihuitán", "Chamula",
            "Chanal", "Chapultenango", "Chenalhó", "Chiapa de Corzo", "Chiapilla", "Chicoasén", "Chicomuselo",
            "Chilón", "Cintalapa", "Coapilla", "Comitán de Domínguez", "La Concordia", "Copainalá", "El Parral",
            "Escuintla", "Francisco León", "Frontera Comalapa", "Frontera Hidalgo", "La Grandeza", "Huehuetán",
            "Huixtán", "Huitiupán", "Huixtla", "Ixhuatán", "Ixtacomitán", "Ixtapa", "Ixtapangajoya", "Jiquipilas",
            "Jitotol", "Juárez", "Larráinzar", "La Libertad", "Mapastepec", "Las Margaritas", "Mazapa de Madero",
            "Mazatán", "Maravilla Tenejapa", "Marqués de Comillas", "Metapa", "Mitontic", "Montecristo de Guerrero",
            "Motozintla", "Mezcalapa", "Nicolás Ruíz", "Ocosingo", "Ocotepec", "Ocozocoautla de Espinosa", "Ostuacán",
            "Osumacinta", "Oxchuc", "Palenque", "Pantelhó", "Pantepec", "Pichucalco", "El Porvenir",
            "Pueblo Nuevo Solistahuacán", "Rayón", "Reforma", "Rincón Chamula San Pedro", "Las Rosas", "Sabanilla",
            "Salto de Agua", "San Andrés Duraznal", "San Cristóbal de las Casas", "San Fernando", "San Juan Cancuc",
            "San Lucas", "Santiago el Pinar", "Siltepec", "Simojovel", "Sitalá", "Socoltenango", "Solosuchiapa",
            "Soyaló", "Suchiapa", "Suchiate", "Sunuapa", "Tapachula", "Tapalapa", "Tapilula", "Tecpatán", "Tenejapa",
            "Teopisca", "Tila", "Tonalá", "Totolapa", "La Trinitaria", "Tumbalá", "Tuxtla Gutiérrez", "Tuxtla Chico",
            "Tuzantán", "Tzimol", "Unión Juárez", "Venustiano Carranza", "Villa Comaltitlán", "Villa Corzo",
            "Villaflores", "Yajalón", "Zinacantán"]
    },
    {
        Estado: "Chihuahua",
        Ciudades: ["Ahumada", "Aldama", "Allende", "Aquiles Serdán", "Ascensión", "Bachíniva", "Balleza",
            "Batopilas de Manuel Gómez Morín", "Bocoyna", "Buenaventura", "Camargo", "Carichí", "Casas Grandes",
            "Chihuahua", "Chínipas", "Coronado", "Coyame del Sotol", "Cuauhtémoc", "Cusihuiriachi", "Delicias",
            "Dr. Belisario Domínguez", "El Tule", "Galeana", "Gómez Farías", "Gran Morelos", "Guachochi",
            "Guadalupe", "Guadalupe y Calvo", "Guazapares", "Guerrero", "Hidalgo del Parral", "Huejotitán",
            "Ignacio Zaragoza", "Janos", "Jiménez", "Juárez", "Julimes", "La Cruz", "López", "Madera",
            "Maguarichi", "Manuel Benavides", "Matachí", "Matamoros", "Meoqui", "Morelos", "Moris", "Namiquipa",
            "Nonoava", "Nuevo Casas Grandes", "Ocampo", "Ojinaga", "Praxedis G. Guerrero", "Riva Palacio",
            "Rosales", "Rosario", "San Francisco de Borja", "San Francisco de Conchos", "San Francisco del Oro",
            "Santa Bárbara", "Santa Isabel", "Satevó", "Saucillo", "Temósachic", "Urique", "Uruachi",
            "Valle de Zaragoza"]
    },
    {
        Estado: "Ciudad de México",
        Ciudades: ["Álvaro Obregón", "Azcapotzalco", "Benito Juárez", "Coyoacán", "Cuajimalpa de Morelos", "Cuauhtémoc", "Gustavo A. Madero", "Iztacalco", "Iztapalapa", "La Magdalena Contreras", "Miguel Hidalgo", "Milpa Alta", "Tláhuac", "Tlalpan", "Venustiano Carranza", "Xochimilco"]
    },
    {
        Estado: "Durango",
        Ciudades: ["Canatlán", "Canelas", "Coneto de Comonfort", "Cuencamé", "Durango", "El Oro", "General Simón Bolívar", "Gómez Palacio", "Guadalupe Victoria", "Guanaceví", "Hidalgo", "Indé", "Lerdo", "Mapimí", "Mezquital", "Nazas", "Nombre de Dios", "Nuevo Ideal", "Ocampo", "Otáez", "Pánuco de Coronado", "Peñón Blanco", "Poanas", "Pueblo Nuevo", "Rodeo", "San Bernardo", "San Dimas", "San Juan de Guadalupe", "San Juan del Río", "San Luis del Cordero", "San Pedro del Gallo", "Santa Clara", "Santiago Papasquiaro", "Súchil", "Tamazula", "Tepehuanes", "Tlahualilo", "Topia", "Vicente Guerrero"]
    },
    {
        Estado: "Guanajuato",
        Ciudades: ["Abasolo", "Acámbaro", "Apaseo el Alto", "Apaseo el Grande", "Atarjea", "Celaya", "Comonfort", "Coroneo", "Cortazar", "Cuerámaro", "Doctor Mora", "Dolores Hidalgo Cuna de la Independencia Nacional", "Guanajuato", "Huanímaro", "Irapuato", "Jaral del Progreso", "Jerécuaro", "León", "Manuel Doblado", "Moroleón", "Ocampo", "Pénjamo", "Pueblo Nuevo", "Purísima del Rincón", "Romita", "Salamanca", "Salvatierra", "San Diego de la Unión", "San Felipe", "San Francisco del Rincón", "San José Iturbide", "San Luis de la Paz", "San Miguel de Allende", "Santa Catarina", "Santa Cruz de Juventino Rosas", "Santiago Maravatío", "Silao de la Victoria", "Tarandacuao", "Tarimoro", "Tierra Blanca", "Uriangato", "Valle de Santiago", "Victoria", "Villagrán", "Xichú", "Yuriria"]
    },
    {
        Estado: "Guerrero",
        Ciudades: ["Acapulco de Juárez", "Acatepec", "Ahuacuotzingo", "Ajuchitlán del Progreso",
            "Alcozauca de Guerrero", "Alpoyeca", "Apaxtla", "Arcelia", "Atenango del Río",
            "Atlamajalcingo del Monte", "Atlixtac", "Atoyac de Álvarez", "Ayutla de los Libres",
            "Azoyú", "Benito Juárez", "Buenavista de Cuéllar", "Coahuayutla de José María Izazaga",
            "Cochoapa el Grande", "Cocula", "Copala", "Copalillo", "Copanatoyac", "Coyuca de Benítez",
            "Coyuca de Catalán", "Cuajinicuilapa", "Cualác", "Cuautepec", "Cuetzala del Progreso",
            "Cutzamala de Pinzón", "Chilapa de Álvarez", "Chilpancingo de los Bravo", "Eduardo Neri",
            "Florencio Villarreal", "General Canuto A. Neri", "General Heliodoro Castillo", "Huamuxtitlán",
            "Huitzuco de los Figueroa", "Iguala de la Independencia", "Igualapa", "Iliatenco",
            "Ixcateopan de Cuauhtémoc", "Juchitán", "Juan R. Escudero", "José Joaquín de Herrera",
            "La Unión de Isidoro Montes de Oca", "Leonardo Bravo", "Las Vigas", "Malinaltepec", "Marquelia",
            "Mártir de Cuilapan", "Metlatónoc", "Mochitlán", "Ñuu Savi", "Olinalá", "Ometepec",
            "Pedro Ascencio Alquisiras", "Petatlán", "Pilcaya", "Pungarabato", "Quechultenango",
            "San Luis Acatlán", "San Marcos", "San Miguel Totolapan", "Santa Cruz del Rincón", "San Nicolás",
            "Taxco de Alarcón", "Tecoanapa", "Técpan de Galeana", "Teloloapan", "Tepecoacuilco de Trujano",
            "Tetipac", "Tixtla de Guerrero", "Tlacoachistlahuaca", "Tlacoapa", "Tlalchapa",
            "Tlalixtaquilla de Maldonado", "Tlapa de Comonfort", "Tlapehuala", "Xalpatláhuac", "Xochihuehuetlán",
            "Xochistlahuaca", "Zapotitlán Tablas", "Zihuatanejo de Azueta", "Zirándaro", "Zitlala"]
    },
    {
        Estado: "Hidalgo",
        Ciudades: ["Acatlán", "Acaxochitlán", "Actopan", "Agua Blanca de Iturbide", "Ajacuba", "Alfajayucan",
            "Almoloya", "Apan", "El Arenal", "Atitalaquia", "Atlapexco", "Atotonilco de Tula",
            "Atotonilco el Grande", "Calnali", "Cardonal", "Chapantongo", "Chapulhuacán", "Chilcuautla",
            "Cuautepec de Hinojosa", "Eloxochitlán", "Emiliano Zapata", "Epazoyucan", "Francisco I. Madero",
            "Huasca de Ocampo", "Huautla", "Huazalingo", "Huehuetla", "Huejutla de Reyes", "Huichapan",
            "Ixmiquilpan", "Jacala de Ledezma", "Jaltocán", "Juárez Hidalgo", "La Misión", "Lolotla",
            "Metztitlán", "Metepec", "Mineral de la Reforma", "Mineral del Chico", "Mineral del Monte",
            "Mixquiahuala de Juárez", "Molango de Escamilla", "Nicolás Flores", "Nopala de Villagrán",
            "Omitlán de Juárez", "Pachuca de Soto", "Pacula", "Pisaflores", "Progreso de Obregón",
            "San Agustín Metzquititlán", "San Agustín Tlaxiaca", "San Bartolo Tutotepec", "San Felipe Orizatlán",
            "San Salvador", "Santiago de Anaya", "Santiago Tulantepec de Lugo Guerrero", "Singuilucan",
            "Tasquillo", "Tecozautla", "Tenango de Doria", "Tepeapulco", "Tepehuacán de Guerrero",
            "Tepeji del Río de Ocampo", "Tepetitlán", "Tetepango", "Tizayuca", "Tlahuelilpan", "Tlahuiltepa",
            "Tlanalapa", "Tlanchinol", "Tlaxcoapan", "Tolcayuca", "Tula de Allende", "Tulancingo de Bravo",
            "Villa de Tezontepec", "Xochiatipan", "Xochicoatlán", "Yahualica", "Zacualtipán de Ángeles",
            "Zapotlán de Juárez", "Zempoala", "Zimapán"]
    },
    {
        Estado: "Jalisco",
        Ciudades: ["Acatic", "Acatlán de Juárez", "Ahualulco de Mercado", "Amacueca", "Amatitán", "Ameca",
            "Arandas", "El Arenal", "Atemajac de Brizuela", "Atengo", "Atenguillo", "Atotonilco el Alto",
            "Atoyac", "Autlán de Navarro", "Ayotlán", "Ayutla", "La Barca", "Bolaños", "Cabo Corrientes",
            "Cañadas de Obregón", "Casimiro Castillo", "Chapala", "Chimaltitán", "Chiquilistlán", "Cihuatlán",
            "Cocula", "Colotlán", "Concepción de Buenos Aires", "Cuautitlán de García Barragán", "Cuautla",
            "Cuquío", "Degollado", "Ejutla", "El Grullo", "El Limón", "Encarnación de Díaz", "Etzatlán",
            "Gómez Farías", "Guachinango", "Guadalajara", "Hostotipaquillo", "Huejúcar", "Huejuquilla el Alto",
            "La Huerta", "Ixtlahuacán de los Membrillos", "Ixtlahuacán del Río", "Jalostotitlán", "Jamay",
            "Jesús María", "Jilotlán de los Dolores", "Jocotepec", "Juanacatlán", "Juchitlán", "Lagos de Moreno",
            "La Manzanilla de la Paz", "Magdalena", "Mascota", "Mazamitla", "Mexticacán", "Mezquitic", "Mixtlán",
            "Ocotlán", "Ojuelos de Jalisco", "Pihuamo", "Poncitlán", "Puerto Vallarta", "Villa Purificación",
            "Quitupan", "El Salto", "San Cristóbal de la Barranca", "San Diego de Alejandría", "San Gabriel",
            "San Ignacio Cerro Gordo", "San Juan de los Lagos", "San Juanito de Escobedo", "San Julián",
            "San Marcos", "San Martín de Bolaños", "San Martín Hidalgo", "San Miguel el Alto",
            "San Pedro Tlaquepaque", "San Sebastián del Oeste", "Santa María de los Ángeles",
            "Santa María del Oro", "Sayula", "Tala", "Talpa de Allende", "Tamazula de Gordiano", "Tapalpa",
            "Tecalitlán", "Techaluta de Montenegro", "Tecolotlán", "Tenamaxtlán", "Teocaltiche",
            "Teocuitatlán de Corona", "Tepatitlán de Morelos", "Tequila", "Teuchitlán", "Tizapán el Alto",
            "Tlajomulco de Zúñiga", "Tolimán", "Tomatlán", "Tonalá", "Tonaya", "Tonila", "Totatiche", "Tototlán",
            "Tuxcacuesco", "Tuxcueca", "Tuxpan", "Unión de San Antonio", "Unión de Tula", "Valle de Guadalupe",
            "Valle de Juárez", "Villa Corona", "Villa Guerrero", "Villa Hidalgo", "Yahualica de González Gallo",
            "Zacoalco de Torres", "Zapopan", "Zapotiltic", "Zapotitlán de Vadillo", "Zapotlán del Rey",
            "Zapotlán el Grande", "Zapotlanejo"]
    },
    {
        Estado: "Estado de México",
        Ciudades: ["Acambay de Ruíz Castañeda", "Acolman", "Aculco", "Almoloya de Alquisiras", "Almoloya de Juárez", "Almoloya del Río", "Amanalco", "Amatepec", "Amecameca", "Apaxco", "Atenco", "Atizapán", "Atizapán de Zaragoza", "Atlacomulco", "Atlautla", "Axapusco", "Ayapango", "Calimaya", "Capulhuac", "Chalco", "Chapa de Mota", "Chapultepec", "Chiautla", "Chicoloapan", "Chiconcuac", "Chimalhuacán", "Coacalco de Berriozábal", "Coatepec Harinas", "Cocotitlán", "Coyotepec", "Cuautitlán", "Cuautitlán Izcalli", "Donato Guerra", "Ecatepec de Morelos", "Ecatzingo", "El Oro", "Huehuetoca", "Hueypoxtla", "Huixquilucan", "Isidro Fabela", "Ixtapan de la Sal", "Ixtapan del Oro", "Ixtapaluca", "Ixtlahuaca", "Jaltenco", "Jilotepec", "Jilotzingo", "Jiquipilco", "Jocotitlán", "Joquicingo", "Juchitepec", "La Paz", "Lerma", "Luvianos", "Malinalco", "Melchor Ocampo", "Metepec", "Mexicaltzingo", "Morelos", "Naucalpan de Juárez", "Nezahualcóyotl", "Nextlalpan", "Nicolás Romero", "Nopaltepec", "Ocoyoacac", "Ocuilan", "Otumba", "Otzoloapan", "Otzolotepec", "Ozumba", "Papalotla", "Polotitlán", "Rayón", "San Antonio la Isla", "San Felipe del Progreso", "San José del Rincón", "San Martín de las Pirámides", "San Mateo Atenco", "San Simón de Guerrero", "Santo Tomás", "Soyaniquilpan de Juárez", "Sultepec", "Tecámac", "Tejupilco", "Temamatla", "Temascalapa", "Temascalcingo", "Temascaltepec", "Temoaya", "Tenancingo", "Tenango del Aire", "Tenango del Valle", "Teoloyucan", "Teotihuacán", "Tepetlaoxtoc", "Tepetlixpa", "Tepotzotlán", "Tequixquiac", "Texcaltitlán", "Texcalyacac", "Texcoco", "Tezoyuca", "Tianguistenco", "Timilpan", "Tlalmanalco", "Tlalnepantla de Baz", "Tlatlaya", "Toluca", "Tonanitla", "Tonatico", "Tultepec", "Tultitlán", "Valle de Bravo", "Valle de Chalco Solidaridad", "Villa de Allende", "Villa del Carbón", "Villa Guerrero", "Villa Victoria", "Xalatlaco", "Xonacatlán", "Zacazonapan", "Zacualpan", "Zinacantepec", "Zumpahuacán", "Zumpango"]
    },
    {
        Estado: "Michoacán de Ocampo",
        Ciudades: ["Acuitzio", "Aguililla", "Álvaro Obregón", "Angamacutiro", "Angangueo", "Apatzingán", "Aporo", "Aquila", "Ario", "Arteaga", "Briseñas", "Buenavista", "Carácuaro", "Coahuayana", "Coalcomán de Vázquez Pallares", "Coeneo", "Contepec", "Copándaro", "Cotija", "Cuitzeo", "Charapan", "Charo", "Chavinda", "Cherán", "Chilchota", "Chinicuila", "Chucándiro", "Churintzio", "Churumuco", "Ecuandureo", "Epitacio Huerta", "Erongarícuaro", "Gabriel Zamora", "Hidalgo", "La Huacana", "Huandacareo", "Huaniqueo", "Huetamo", "Huiramba", "Indaparapeo", "Irimbo", "Ixtlán", "Jacona", "Jiménez", "Jiquilpan", "Juárez", "Jungapeo", "Lagunillas", "Madero", "Maravatío", "Marcos Castellanos", "Lázaro Cárdenas", "Morelia", "Morelos", "Múgica", "Nahuatzen", "Nocupétaro", "Nuevo Parangaricutiro", "Nuevo Urecho", "Numarán", "Ocampo", "Pajacuarán", "Panindícuaro", "Parácuaro", "Paracho", "Pátzcuaro", "Penjamillo", "Peribán", "La Piedad", "Purépero", "Puruándiro", "Queréndaro", "Quiroga", "Cojumatlán de Régules", "Los Reyes", "Sahuayo", "San Lucas", "Santa Ana Maya", "Salvador Escalante", "Senguio", "Susupuato", "Tacámbaro", "Tancítaro", "Tangamandapio", "Tangancícuaro", "Tanhuato", "Taretan", "Tarímbaro", "Tepalcatepec", "Tingambato", "Tingüindín", "Tiquicheo de Nicolás Romero", "Tlalpujahua", "Tlazazalca", "Tocumbo", "Tumbiscatío", "Turicato", "Tuxpan", "Tuzantla", "Tzintzuntzan", "Tzitzio", "Uruapan", "Venustiano Carranza", "Villamar", "Vista Hermosa", "Yurécuaro", "Zacapu", "Zamora", "Zináparo", "Zinapécuaro", "Ziracuaretiro", "Zitácuaro", "José Sixto Verduzco"]
    },
    {
        Estado: "Morelos",
        Ciudades: ["Amacuzac", "Atlatlahucan", "Axochiapan", "Ayala", "Coatlán del Río", "Coatetelco", "Cuautla", "Cuernavaca", "Emiliano Zapata", "Hueyapan", "Huitzilac", "Jantetelco", "Jiutepec", "Jojutla", "Jonacatepec de Leandro Valle", "Mazatepec", "Miacatlán", "Ocuituco", "Puente de Ixtla", "Temixco", "Temoac", "Tepalcingo", "Tepoztlán", "Tetecala", "Tetela del Volcán", "Tlalnepantla", "Tlaltizapán de Zapata", "Tlaquiltenango", "Tlayacapan", "Totolapan", "Xochitepec", "Xoxocotla", "Yautepec", "Yecapixtla", "Zacatepec", "Zacualpan de Amilpas"]
    },
    {
        Estado: "Nayarit",
        Ciudades: ["Acaponeta", "Ahuacatlán", "Amatlán de Cañas", "Bahía de Banderas", "Compostela", "Del Nayar", "Huajicori", "Ixtlán del Río", "Jala", "La Yesca", "Rosamorada", "Ruíz", "San Blas", "San Pedro Lagunillas", "Santa María del Oro", "Santiago Ixcuintla", "Tecuala", "Tepic", "Tuxpan", "Xalisco"]
    },
    {
        Estado: "Nuevo Leon",
        Ciudades: ["Abasolo", "Agualeguas", "Allende", "Anáhuac", "Apodaca", "Aramberri", "Bustamante", "Cadereyta Jiménez", "Cerralvo", "Ciénega de Flores", "China", "Doctor Arroyo", "Doctor Coss", "Doctor González", "Galeana", "García", "General Bravo", "General Escobedo", "General Terán", "General Treviño", "General Zaragoza", "General Zuazua", "Guadalupe", "Higueras", "Hualahuises", "Iturbide", "Juárez", "Lampazos de Naranjo", "Linares", "Marín", "Melchor Ocampo", "Mier y Noriega", "Mina", "Montemorelos", "Monterrey", "Parás", "Pesquería", "Los Ramones", "Rayones", "Sabinas Hidalgo", "Salinas Victoria", "San Nicolás de los Garza", "Santa Catarina", "Santiago", "Vallecillo", "Villaldama"]
    },
    {
        Estado: "Oaxaca",
        Ciudades: ["Abejones", "Acatlán de Pérez Figueroa", "Ánimas Trujano", "Asunción Cacalotepec", "Asunción Cuyotepeji", "Asunción Ixtaltepec", "Asunción Nochixtlán", "Asunción Ocotlán", "Asunción Tlacolulita", "Ayotzintepec", "El Barrio de la Soledad", "Calihualá", "Candelaria Loxicha", "Capulálpam de Méndez", "Ciénega de Zimatlán", "Ciudad Ixtepec", "Coatecas Altas", "Coicoyán de las Flores", "La Compañía", "Concepción Buenavista", "Concepción Pápalo", "Constancia del Rosario", "Cosolapa", "Cosoltepec", "Cuilápam de Guerrero", "Cuyamecalco Villa de Zaragoza", "Chahuites", "Chalcatongo de Hidalgo", "Chiquihuitlán de Benito Juárez", "Heroica Ciudad de Ejutla de Crespo", "Eloxochitlán de Flores Magón",
            "El Espinal", "Tamazulápam del Espíritu Santo", "Fresnillo de Trujano", "Guadalupe Etla", "Guadalupe de Ramírez", "Guelatao de Juárez", "Guevea de Humboldt", "Mesones Hidalgo", "Villa Hidalgo", "Heroica Ciudad de Huajuapan de León", "Huautepec", "Huautla de Jiménez", "Ixtlán de Juárez", "Juchitán de Zaragoza", "Loma Bonita", "Magdalena Apasco", "Magdalena Jaltepec", "Santa Magdalena Jicotlán", "Magdalena Mixtepec", "Magdalena Ocotlán", "Magdalena Peñasco", "Magdalena Teitipac", "Magdalena Tequisistlán", "Magdalena Tlacotepec", "Magdalena Zahuatlán", "Mariscala de Juárez", "Mártires de Tacubaya", "Matías Romero Avendaño", "Mazatlán Villa de Flores", "Miahuatlán de Porfirio Díaz", "Mixistlán de la Reforma",
            "Monjas", "Natividad", "Nazareno Etla", "Nejapa de Madero", "Ixpantepec Nieves", "Santiago Niltepec", "Oaxaca de Juárez", "Ocotlán de Morelos", "La Pe", "Pinotepa de Don Luis", "Pluma Hidalgo", "San José del Progreso", "Putla Villa de Guerrero", "Santa Catarina Quioquitani", "Reforma de Pineda", "La Reforma", "Reyes Etla", "Rojas de Cuauhtémoc", "Salina Cruz", "San Agustín Amatengo", "San Agustín Atenango", "San Agustín Chayuco", "San Agustín de las Juntas", "San Agustín Etla", "San Agustín Loxicha", "San Agustín Tlacotepec", "San Agustín Yatareni", "San Andrés Cabecera Nueva", "San Andrés Dinicuiti", "San Andrés Huaxpaltepec", "San Andrés Huayápam", "San Andrés Ixtlahuaca", "San Andrés Lagunas", "San Andrés Nuxiño",
            "San Andrés Paxtlán", "San Andrés Sinaxtla", "San Andrés Solaga", "San Andrés Teotilálpam", "San Andrés Tepetlapa", "San Andrés Yaá", "San Andrés Zabache", "San Andrés Zautla", "San Antonino Castillo Velasco", "San Antonino el Alto", "San Antonino Monte Verde", "San Antonio Acutla", "San Antonio de la Cal", "San Antonio Huitepec", "San Antonio Nanahuatípam", "San Antonio Sinicahua", "San Antonio Tepetlapa", "San Baltazar Chichicápam", "San Baltazar Loxicha", "San Baltazar Yatzachi el Bajo", "San Bartolo Coyotepec", "San Bartolomé Ayautla", "San Bartolomé Loxicha", "San Bartolomé Quialana", "San Bartolomé Yucuañe", "San Bartolomé Zoogocho", "San Bartolo Soyaltepec", "San Bartolo Yautepec", "San Bernardo Mixtepec", "San Blas Atempa",
            "San Carlos Yautepec", "San Cristóbal Amatlán", "San Cristóbal Amoltepec", "San Cristóbal Lachirioag", "San Cristóbal Suchixtlahuaca", "San Dionisio del Mar", "San Dionisio Ocotepec", "San Dionisio Ocotlán", "San Esteban Atatlahuca", "San Felipe Jalapa de Díaz", "San Felipe Tejalápam", "San Felipe Usila", "San Francisco Cahuacuá", "San Francisco Cajonos", "San Francisco Chapulapa", "San Francisco Chindúa", "San Francisco del Mar", "San Francisco Huehuetlán", "San Francisco Ixhuatán", "San Francisco Jaltepetongo", "San Francisco Lachigoló", "San Francisco Logueche", "San Francisco Nuxaño", "San Francisco Ozolotepec", "San Francisco Sola", "San Francisco Telixtlahuaca", "San Francisco Teopan", "San Francisco Tlapancingo", "San Gabriel Mixtepec",
            "San Ildefonso Amatlán", "San Ildefonso Sola", "San Ildefonso Villa Alta", "San Jacinto Amilpas", "San Jacinto Tlacotepec", "San Jerónimo Coatlán", "San Jerónimo Silacayoapilla", "San Jerónimo Sosola", "San Jerónimo Taviche", "San Jerónimo Tecóatl", "San Jorge Nuchita", "San José Ayuquila", "San José Chiltepec", "San José del Peñasco", "San José Estancia Grande", "San José Independencia", "San José Lachiguiri", "San José Tenango", "San Juan Achiutla", "San Juan Atepec", "San Juan Bautista Atatlahuca", "San Juan Bautista Coixtlahuaca", "San Juan Bautista Cuicatlán", "San Juan Bautista Guelache", "San Juan Bautista Jayacatlán", "San Juan Bautista Lo de Soto", "San Juan Bautista Suchitepec", "San Juan Bautista Tlacoatzintepec", "San Juan Bautista Tlachichilco",
            "San Juan Bautista Tuxtepec", "San Juan Cacahuatepec", "San Juan Cieneguilla", "San Juan Coatzóspam", "San Juan Colorado", "San Juan Comaltepec", "San Juan Cotzocón", "San Juan Chicomezúchil", "San Juan Chilateca", "San Juan del Estado", "San Juan del Río", "San Juan Diuxi", "San Juan Evangelista Analco", "San Juan Guelavía", "San Juan Guichicovi", "San Juan Ihualtepec", "San Juan Juquila Mixes", "San Juan Juquila Vijanos", "San Juan Lachao", "San Juan Lachigalla", "San Juan Lajarcia", "San Juan Lalana", "San Juan de los Cués", "San Juan Mazatlán", "San Juan Mixtepec", "San Juan Mixtepec.", "San Juan Ñumí", "San Juan Ozolotepec", "San Juan Petlapa", "San Juan Quiahije", "San Juan Quiotepec", "San Juan Sayultepec", "San Juan Tabaá", "San Juan Tamazola", "San Juan Teita",
            "San Juan Teitipac", "San Juan Tepeuxila", "San Juan Teposcolula", "San Juan Yaeé", "San Juan Yatzona", "San Juan Yucuita", "San Lorenzo", "San Lorenzo Albarradas", "San Lorenzo Cacaotepec", "San Lorenzo Cuaunecuiltitla", "San Lorenzo Texmelúcan", "San Lorenzo Victoria", "San Lucas Camotlán", "San Lucas Ojitlán", "San Lucas Quiaviní", "San Lucas Zoquiápam", "San Luis Amatlán", "San Marcial Ozolotepec", "San Marcos Arteaga", "San Martín de los Cansecos", "San Martín Huamelúlpam", "San Martín Itunyoso", "San Martín Lachilá", "San Martín Peras", "San Martín Tilcajete", "San Martín Toxpalan", "San Martín Zacatepec", "San Mateo Cajonos", "San Mateo del Mar", "San Mateo Yoloxochitlán", "San Mateo Etlatongo", "San Mateo Nejápam", "San Mateo Peñasco", "San Mateo Piñas", "San Mateo Río Hondo",
            "San Mateo Sindihui", "San Mateo Tlapiltepec", "San Melchor Betaza", "San Miguel Achiutla", "San Miguel Ahuehuetitlán", "San Miguel Aloápam", "San Miguel Amatitlán", "San Miguel Amatlán", "San Miguel Coatlán", "San Miguel Chicahua", "San Miguel Chimalapa", "San Miguel del Puerto", "San Miguel del Río", "San Miguel Ejutla", "San Miguel el Grande", "San Miguel Huautla", "San Miguel Mixtepec", "San Miguel Panixtlahuaca", "San Miguel Peras", "San Miguel Piedras", "San Miguel Quetzaltepec", "San Miguel Santa Flor", "Villa Sola de Vega", "San Miguel Soyaltepec", "San Miguel Suchixtepec", "Villa Talea de Castro", "San Miguel Tecomatlán", "San Miguel Tenango", "San Miguel Tequixtepec", "San Miguel Tilquiápam", "San Miguel Tlacamama", "San Miguel Tlacotepec", "San Miguel Tulancingo", "San Miguel Yotao",
            "San Nicolás", "San Nicolás Hidalgo", "San Pablo Coatlán", "San Pablo Cuatro Venados", "San Pablo Etla", "San Pablo Huitzo", "San Pablo Huixtepec", "San Pablo Macuiltianguis", "San Pablo Tijaltepec", "San Pablo Villa de Mitla", "San Pablo Yaganiza", "San Pedro Amuzgos", "San Pedro Apóstol", "San Pedro Atoyac", "San Pedro Cajonos", "San Pedro Comitancillo", "San Pedro Coxcaltepec Cántaros", "San Pedro el Alto", "San Pedro Huamelula", "San Pedro Huilotepec", "San Pedro Ixcatlán", "San Pedro Ixtlahuaca", "San Pedro Jaltepetongo", "San Pedro Jicayán", "San Pedro Jocotipac", "San Pedro Juchatengo", "San Pedro Mártir", "San Pedro Mártir Quiechapa", "San Pedro Mártir Yucuxaco", "San Pedro Mixtepec.", "San Pedro Mixtepec", "San Pedro Molinos", "San Pedro Nopala", "San Pedro Ocopetatillo", "San Pedro Ocotepec",
            "San Pedro Pochutla", "San Pedro Quiatoni", "San Pedro Sochiápam", "San Pedro Tapanatepec", "San Pedro Taviche", "San Pedro Teozacoalco", "San Pedro Teutila", "San Pedro Tidaá", "San Pedro Topiltepec", "San Pedro Totolápam", "Villa de Tututepec de Melchor Ocampo", "San Pedro Yaneri", "San Pedro Yólox", "San Pedro y San Pablo Ayutla", "Villa de Etla", "San Pedro y San Pablo Teposcolula", "San Pedro y San Pablo Tequixtepec", "San Pedro Yucunama", "San Raymundo Jalpan", "San Sebastián Abasolo", "San Sebastián Coatlán", "San Sebastián Ixcapa", "San Sebastián Nicananduta", "San Sebastián Río Hondo", "San Sebastián Tecomaxtlahuaca", "San Sebastián Teitipac", "San Sebastián Tutla", "San Simón Almolongas", "San Simón Zahuatlán", "Santa Ana", "Santa Ana Ateixtlahuaca", "Santa Ana Cuauhtémoc", "Santa Ana del Valle",
            "Santa Ana Tavela", "Santa Ana Tlapacoyan", "Santa Ana Yareni", "Santa Ana Zegache", "Santa Catalina Quierí", "Santa Catarina Cuixtla", "Santa Catarina Ixtepeji", "Santa Catarina Juquila", "Santa Catarina Lachatao", "Santa Catarina Loxicha", "Santa Catarina Mechoacán", "Santa Catarina Minas", "Santa Catarina Quiané", "Santa Catarina Tayata", "Santa Catarina Ticuá", "Santa Catarina Yosonotú", "Santa Catarina Zapoquila", "Santa Cruz Acatepec", "Santa Cruz Amilpas", "Santa Cruz de Bravo", "Santa Cruz Itundujia", "Santa Cruz Mixtepec", "Santa Cruz Nundaco", "Santa Cruz Papalutla", "Santa Cruz Tacache de Mina", "Santa Cruz Tacahua", "Santa Cruz Tayata", "Santa Cruz Xitla", "Santa Cruz Xoxocotlán", "Santa Cruz Zenzontepec", "Santa Gertrudis", "Santa Inés del Monte", "Santa Inés Yatzeche", "Santa Lucía del Camino",
            "Santa Lucía Miahuatlán", "Santa Lucía Monteverde", "Santa Lucía Ocotlán", "Santa Magdalena Tiltepec", "Santa María Alotepec", "Santa María Apazco", "Santa María la Asunción", "Heroica Ciudad de Tlaxiaco", "Ayoquezco de Aldama", "Santa María Atzompa", "Santa María Camotlán", "Santa María Colotepec", "Santa María Cortijo", "Santa María Coyotepec", "Santa María Chachoápam", "Villa de Chilapa de Díaz", "Santa María Chilchotla", "Santa María Chimalapa", "Santa María del Rosario", "Santa María del Tule", "Santa María Ecatepec", "Santa María Guelacé", "Santa María Guienagati", "Santa María Huatulco", "Santa María Huazolotitlán", "Santa María Ipalapa", "Santa María Ixcatlán", "Santa María Jacatepec", "Santa María Jalapa del Marqués", "Santa María Jaltianguis", "Santa María Lachixío", "Santa María Mixtequilla",
            "Santa María Nativitas", "Santa María Nduayaco", "Santa María Ozolotepec", "Santa María Pápalo", "Santa María Peñoles", "Santa María Petapa", "Santa María Quiegolani", "Santa María Sola", "Santa María Tataltepec", "Santa María Tecomavaca", "Santa María Temaxcalapa", "Santa María Temaxcaltepec", "Santa María Teopoxco", "Santa María Tepantlali", "Santa María Texcatitlán", "Santa María Tlahuitoltepec", "Santa María Tlalixtac", "Santa María Tonameca", "Santa María Totolapilla", "Santa María Xadani", "Santa María Yalina", "Santa María Yavesía", "Santa María Yolotepec", "Santa María Yosoyúa", "Santa María Yucuhiti", "Santa María Zacatepec", "Santa María Zaniza", "Santa María Zoquitlán", "Santiago Amoltepec", "Santiago Apoala", "Santiago Apóstol", "Santiago Astata", "Santiago Atitlán", "Santiago Ayuquililla",
            "Santiago Cacaloxtepec", "Santiago Camotlán", "Santiago Comaltepec", "Santiago Chazumba", "Santiago Choápam", "Santiago del Río", "Santiago Huajolotitlán", "Santiago Huauclilla", "Santiago Ihuitlán Plumas", "Santiago Ixcuintepec", "Santiago Ixtayutla", "Santiago Jamiltepec", "Santiago Jocotepec", "Santiago Juxtlahuaca", "Santiago Lachiguiri", "Santiago Lalopa", "Santiago Laollaga", "Santiago Laxopa", "Santiago Llano Grande", "Santiago Matatlán", "Santiago Miltepec", "Santiago Minas", "Santiago Nacaltepec", "Santiago Nejapilla", "Santiago Niltepec", "Santiago Nundiche", "Santiago Nuyoó", "Santiago Pinotepa Nacional", "Santiago Suchilquitongo", "Santiago Tamazola", "Santiago Tapextla", "Villa Tejúpam de la Unión", "Santiago Tenango", "Santiago Tepetlapa", "Santiago Tetepec", "Santiago Texcalcingo",
            "Santiago Textitlán", "Santiago Tilantongo", "Santiago Tillo", "Santiago Tlazoyaltepec", "Santiago Xanica", "Santiago Xiacuí", "Santiago Yaitepec", "Santiago Yaveo", "Santiago Yolomécatl", "Santiago Yosondúa", "Santiago Yucuyachi", "Santiago Zacatepec", "Santiago Zoochila", "Nuevo Zoquiápam", "Santo Domingo Ingenio", "Santo Domingo Albarradas", "Santo Domingo Armenta", "Santo Domingo Chihuitán", "Santo Domingo de Morelos", "Santo Domingo Ixcatlán", "Santo Domingo Nuxaá", "Santo Domingo Ozolotepec", "Santo Domingo Petapa", "Santo Domingo Roayaga", "Santo Domingo Tehuantepec", "Santo Domingo Teojomulco", "Santo Domingo Tepuxtepec", "Santo Domingo Tlatayápam", "Santo Domingo Tomaltepec", "Santo Domingo Tonalá", "Santo Domingo Tonaltepec", "Santo Domingo Xagacía", "Santo Domingo Yanhuitlán", "Santo Domingo Yodohino", "Santo Domingo Zanatepec", "Santos Reyes Nopala", "Santos Reyes Pápalo", "Santos Reyes Tepejillo", "Santos Reyes Yucuná", "Santo Tomás Jalieza", "Santo Tomás Mazaltepec", "Santo Tomás Ocotepec", "Santo Tomás Tamazulapan", "San Vicente Coatlán", "San Vicente Lachixío", "San Vicente Nuñú", "Silacayoápam", "Sitio de Xitlapehua", "Soledad Etla", "Villa de Tamazulápam del Progreso", "Tanetze de Zaragoza", "Taniche", "Tataltepec de Valdés", "Teococuilco de Marcos Pérez", "Teotitlán de Flores Magón", "Teotitlán del Valle", "Teotongo", "Tepelmeme Villa de Morelos", "Heroica Villa Tezoatlán de Segura y Luna, Cuna de la Independencia de Oaxaca", "San Jerónimo Tlacochahuaya", "Tlacolula de Matamoros", "Tlacotepec Plumas", "Tlalixtac de Cabrera", "Totontepec Villa de Morelos", "Trinidad Zaachila", "La Trinidad Vista Hermosa", "Unión Hidalgo", "Valerio Trujano", "San Juan Bautista Valle Nacional", "Villa Díaz Ordaz", "Yaxe", "Magdalena Yodocono de Porfirio Díaz", "Yogana", "Yutanduchi de Guerrero", "Villa de Zaachila", "San Mateo Yucutindoo", "Zapotitlán Lagunas", "Zapotitlán Palmas", "Zimatlán de Álvarez"]
    },
    {
        Estado: "Puebla",
        Ciudades: ["Acajete", "Acateno", "Acatlán", "Acatzingo", "Acteopan", "Ahuacatlán", "Ahuatlán", "Ahuazotepec", "Ahuehuetitla", "Ajalpan", "Albino Zertuche", "Aljojuca", "Altepexi", "Amixtlán", "Amozoc", "Aquixtla", "Atempan", "Atexcal", "Atlixco", "Atoyatempan", "Atzala", "Atzitzihuacán", "Atzitzintla", "Axutla", "Ayotoxco de Guerrero", "Calpan", "Caltepec", "Camocuautla", "Caxhuacan", "Coatepec", "Coatzingo", "Cohetzala", "Cohuecan", "Coronango", "Coxcatlán", "Coyomeapan", "Coyotepec", "Cuapiaxtla de Madero", "Cuautempan", "Cuautinchán", "Cuautlancingo", "Cuayuca de Andrade", "Cuetzalan del Progreso", "Cuyoaco", "Chalchicomula de Sesma", "Chapulco", "Chiautla", "Chiautzingo", "Chiconcuautla", "Chichiquila", "Chietla", "Chigmecatitlán", "Chignahuapan", "Chignautla", "Chila", "Chila de la Sal", "Honey", "Chilchotla", "Chinantla", "Domingo Arenas", "Eloxochitlán", "Epatlán", "Esperanza", "Francisco Z. Mena", "General Felipe Ángeles", "Guadalupe", "Guadalupe Victoria", "Hermenegildo Galeana", "Huaquechula", "Huatlatlauca", "Huauchinango", "Huehuetla", "Huehuetlán el Chico", "Huejotzingo", "Hueyapan", "Hueytamalco", "Hueytlalpan", "Huitzilan de Serdán", "Huitziltepec", "Atlequizayan", "Ixcamilpa de Guerrero", "Ixcaquixtla", "Ixtacamaxtitlán", "Ixtepec", "Izúcar de Matamoros", "Jalpan", "Jolalpan", "Jonotla", "Jopala", "Juan C. Bonilla", "Juan Galindo", "Juan N. Méndez", "Lafragua", "Libres", "La Magdalena Tlatlauquitepec", "Mazapiltepec de Juárez", "Mixtla", "Molcaxac", "Cañada Morelos", "Naupan", "Nauzontla", "Nealtican", "Nicolás Bravo", "Nopalucan", "Ocotepec", "Ocoyucan", "Olintla", "Oriental", "Pahuatlán", "Palmar de Bravo", "Pantepec", "Petlalcingo", "Piaxtla", "Puebla", "Quecholac", "Quimixtlán", "Rafael Lara Grajales", "Los Reyes de Juárez", "San Andrés Cholula", "San Antonio Cañada", "San Diego la Mesa Tochimiltzingo", "San Felipe Teotlalcingo", "San Felipe Tepatlán", "San Gabriel Chilac", "San Gregorio Atzompa",
            "San Jerónimo Tecuanipan", "San Jerónimo Xayacatlán", "San José Chiapa", "San José Miahuatlán", "San Juan Atenco", "San Juan Atzompa", "San Martín Texmelucan", "San Martín Totoltepec", "San Matías Tlalancaleca", "San Miguel Ixitlán", "San Miguel Xoxtla", "San Nicolás Buenos Aires", "San Nicolás de los Ranchos", "San Pablo Anicano", "San Pedro Cholula", "San Pedro Yeloixtlahuaca", "San Salvador el Seco", "San Salvador el Verde", "San Salvador Huixcolotla", "San Sebastián Tlacotepec", "Santa Catarina Tlaltempan", "Santa Inés Ahuatempan", "Santa Isabel Cholula", "Santiago Miahuatlán", "Huehuetlán el Grande", "Santo Tomás Hueyotlipan", "Soltepec", "Tecali de Herrera", "Tecamachalco", "Tecomatlán", "Tehuacán", "Tehuitzingo", "Tenampulco", "Teopantlán", "Teotlalco", "Tepanco de López", "Tepango de Rodríguez", "Tepatlaxco de Hidalgo", "Tepeaca", "Tepemaxalco", "Tepeojuma", "Tepetzintla", "Tepexco", "Tepexi de Rodríguez", "Tepeyahualco", "Tepeyahualco de Cuauhtémoc", "Tetela de Ocampo", "Teteles de Ávila Castillo", "Teziutlán", "Tianguismanalco", "Tilapa", "Tlacotepec de Benito Juárez", "Tlacuilotepec", "Tlachichuca", "Tlahuapan", "Tlaltenango", "Tlanepantla", "Tlaola", "Tlapacoya", "Tlapanalá", "Tlatlauquitepec", "Tlaxco", "Tochimilco", "Tochtepec", "Totoltepec de Guerrero", "Tulcingo", "Tuzamapan de Galeana", "Tzicatlacoyan", "Venustiano Carranza", "Vicente Guerrero", "Xayacatlán de Bravo", "Xicotepec", "Xicotlán", "Xiutetelco", "Xochiapulco", "Xochiltepec", "Xochitlán de Vicente Suárez", "Xochitlán Todos Santos", "Yaonáhuac", "Yehualtepec", "Zacapala", "Zacapoaxtla", "Zacatlán", "Zapotitlán", "Zapotitlán de Méndez", "Zaragoza", "Zautla", "Zihuateutla", "Zinacatepec", "Zongozotla", "Zoquiapan", "Zoquitlán"]
    },
    {
        Estado: "Querétaro",
        Ciudades: ["Amealco de Bonfil", "Arroyo Seco", "Cadereyta de Montes", "Colón", "Corregidora",
            "El Marqués", "Ezequiel Montes", "Huimilpan", "Jalpan de Serra", "Landa de Matamoros",
            "Pedro Escobedo", "Peñamiller", "Pinal de Amoles", "Querétaro", "San Joaquín", "San Juan del Río",
            "Tequisquiapan", "Tolimán"]
    },
    {
        Estado: "Quintana Roo",
        Ciudades: ["Bacalar", "Benito Juárez", "Cozumel", "Felipe Carrillo Puerto", "Isla Mujeres",
            "José María Morelos", "Lázaro Cárdenas", "Othón P. Blanco", "Puerto Morelos", "Solidaridad",
            "Tulum"]
    },
    {
       Estado: "San Luis Potosí",
       Ciudades: ["Ahualulco", "Alaquines", "Aquismón", "Armadillo de los Infante",
            "Axtla de Terrazas", "Cárdenas", "Catorce", "Cedral", "Cerritos", "Cerro de San Pedro",
            "Ciudad del Maíz", "Ciudad Fernández", "Ciudad Valles", "Coxcatlán", "Charcas", "Ebano",
            "El Naranjo", "Guadalcázar", "Huehuetlán", "Lagunillas", "Matehuala", "Mexquitic de Carmona",
            "Moctezuma", "Rayón", "Rioverde", "Salinas", "San Antonio", "San Ciro de Acosta", "San Luis Potosí",
            "San Martín Chalchicuautla", "San Nicolás Tolentino", "Santa Catarina", "Santa María del Río",
            "Santo Domingo", "San Vicente Tancuayalab", "Soledad de Graciano Sánchez", "Tamasopo",
            "Tamazunchale", "Tampacán", "Tampamolón Corona", "Tamuín", "Tanlajás", "Tanquián de Escobedo",
            "Tierra Nueva", "Vanegas", "Venado", "Villa de Arriaga", "Villa de Guadalupe", "Villa de la Paz",
            "Villa de Ramos", "Villa de Reyes", "Villa Hidalgo", "Villa Juárez", "Xilitla", "Zaragoza"]
    },
    {
        Estado: "Sinaloa",
        Ciudades: ["Ahome", "Angostura", "Badiraguato", "Choix", "Culiacán", "Concordia", "Cosalá",
            "El Fuerte", "Elota", "Escuinapa", "Guasave", "Juan José Ríos", "Mazatlán", "Mocorito",
            "Navolato", "Rosario", "Salvador Alvarado", "San Ignacio", "Sinaloa"]
    },
    {
        Estado: "Sonora",
        Ciudades: ["Aconchi", "Agua Prieta", "Álamos", "Altar", "Arivechi", "Arizpe", "Atil",
            "Bacadéhuachi", "Bacanora", "Bacerac", "Bacoachi", "Bácum", "Banámichi", "Baviácora",
            "Bavispe", "Benjamín Hill", "Caborca", "Cajeme", "Cananea", "Carbó", "La Colorada", "Cucurpe",
            "Cumpas", "Divisaderos", "Empalme", "Etchojoa", "Fronteras", "Granados", "Guaymas", "Hermosillo",
            "Huachinera", "Huásabas", "Huatabampo", "Huépac", "Imuris", "Magdalena", "Mazatán", "Moctezuma",
            "Naco", "Nácori Chico", "Nacozari de García", "Navojoa", "Nogales", "Ónavas", "Opodepe", "Oquitoa",
            "Pitiquito", "Puerto Peñasco", "Quiriego", "Rayón", "Rosario", "Sahuaripa", "San Felipe de Jesús",
            "San Javier", "San Luis Río Colorado", "San Miguel de Horcasitas", "San Pedro de la Cueva",
            "Santa Ana", "Santa Cruz", "Sáric", "Soyopa", "Suaqui Grande", "Tepache", "Trincheras", "Tubutama",
            "Ures", "Villa Hidalgo", "Villa Pesqueira", "Yécora", "General Plutarco Elías Calles", "Benito Juárez",
            "San Ignacio Río Muerto"]
    },
    {
        Estado: "Tabasco",
        Ciudades: ["Balancán", "Cárdenas", "Centla", "Centro", "Comalcalco", "Cunduacán", "Emiliano Zapata",
            "Huimanguillo", "Jalapa", "Jalpa de Méndez", "Jonuta", "Macuspana", "Nacajuca", "Paraíso", "Tacotalpa",
            "Teapa", "Tenosique"]
    },
    {
        Estado: "Tamaulipas",
        Ciudades: ["Abasolo", "Aldama", "Altamira", "Antiguo Morelos", "Burgos", "Bustamante", "Camargo",
            "Casas", "Ciudad Madero", "Cruillas", "Gómez Farías", "González", "Güémez", "Guerrero",
            "Gustavo Díaz Ordaz", "Hidalgo", "Jaumave", "Jiménez", "Llera", "Mainero", "El Mante",
            "Matamoros", "Méndez", "Mier", "Miguel Alemán", "Miquihuana", "Nuevo Laredo", "Nuevo Morelos",
            "Ocampo", "Padilla", "Palmillas", "Reynosa", "Río Bravo", "San Carlos", "San Fernando", "San Nicolás",
            "Soto la Marina", "Tampico", "Tula", "Valle Hermoso", "Victoria", "Villagrán", "Xicoténcatl"]
    },
    {
        Estado: "Tlaxcala",
        Ciudades: ["Acuamanala de Miguel Hidalgo", "Amaxac de Guerrero", "Apetatitlán de Antonio Carvajal",
            "Apizaco", "Atlangatepec", "Atltzayanca", "Calpulalpan", "Chiautempan", "Contla de Juan Cuamatzi",
            "Cuapiaxtla", "Cuaxomulco", "Emiliano Zapata", "Españita", "El Carmen Tequexquitla", "Huamantla",
            "Hueyotlipan", "Ixtacuixtla de Mariano Matamoros", "Ixtenco", "Lázaro Cárdenas",
            "Mazatecochco de José María Morelos", "Nanacamilpa de Mariano Arista", "Natívitas", "Panotla",
            "Papalotla de Xicohténcatl", "San Damián Texóloc", "San Francisco Tetlanohcan",
            "San Jerónimo Zacualpan", "San José Teacalco", "San Juan Huactzinco", "San Lorenzo Axocomanitla",
            "San Lucas Tecopilco", "Santa Ana Nopalucan", "Santa Apolonia Teacalco", "Santa Catarina Ayometla",
            "Santa Cruz Quilehtla", "Santa Isabel Xiloxoxtla", "Tepetitla de Lardizábal", "Teolocholco",
            "Tepeyanco", "Terrenate", "Tetla de la Solidaridad", "Tetlatlahuca", "Tlaxcala", "Tlaxco", "Tocatlán",
            "Totolac", "Tzompantepec", "Xaloztoc", "Xaltocan", "Xicohtzinco", "Zacatelco",
            "Ziltlaltépec de Trinidad Sánchez Santos"]
    },
    {
        Estado: "Veracruz Ignacio de la Llave",
        Ciudades: ["Acajete", "Acatlán", "Acayucan", "Actopan", "Acula", "Acultzingo",
            "Alpatláhuac", "Alto Lucero de Gutiérrez Barrios", "Altotonga", "Alvarado", "Amatitlán",
            "Amatlán de los Reyes", "Angel R. Cabada", "Apazapan", "Aquila", "Astacinga", "Atlahuilco",
            "Atoyac", "Atzacan", "Atzalan", "Ayahualulco", "Banderilla", "Benito Juárez", "Boca del Río",
            "Calcahualco", "Camarón de Tejeda", "Camerino Z. Mendoza", "Carrillo Puerto", "Catemaco",
            "Cazones de Herrera", "Cerro Azul", "Citlaltépetl", "Coacoatzintla", "Coahuitlán", "Coatepec",
            "Coatzacoalcos", "Coatzintla", "Coetzala", "Colipa", "Comapa", "Córdoba", "Cosamaloapan de Carpio",
            "Cosautlán de Carvajal", "Coscomatepec", "Cosoleacaque", "Cotaxtla", "Coxquihui", "Coyutla",
            "Cuichapa", "Cuitláhuac", "Chacaltianguis", "Chalma", "Chiconamel", "Chiconquiaco", "Chicontepec",
            "Chinameca", "Chinampa de Gorostiza", "Las Choapas", "Chocamán", "Chontla", "Chumatlán",
            "Emiliano Zapata", "Espinal", "Filomeno Mata", "Fortín", "Gutiérrez Zamora", "Hidalgotitlán",
            "Huatusco", "Huayacocotla", "Hueyapan de Ocampo", "Huiloapan de Cuauhtémoc", "Ignacio de la Llave",
            "Ilamatlán", "Isla", "Ixcatepec", "Ixhuacán de los Reyes", "Ixhuatlán del Café", "Ixhuatlancillo",
            "Ixhuatlán del Sureste", "Ixhuatlán de Madero", "Ixmatlahuacan", "Ixtaczoquitlán", "Jalacingo",
            "Jalcomulco", "Jáltipan", "Jamapa", "Jesús Carranza", "Jilotepec", "Juan Rodríguez Clara",
            "Juchique de Ferrer", "Landero y Coss", "Lerdo de Tejada", "Magdalena", "Maltrata",
            "Manlio Fabio Altamirano", "Mariano Escobedo", "Martínez de la Torre", "Mecatlán", "Mecayapan",
            "Medellín de Bravo", "Miahuatlán", "Las Minas", "Minatitlán", "Misantla", "Mixtla de Altamirano",
            "Moloacán", "Naolinco", "Naranjal", "Nautla", "Nogales", "Oluta", "Omealca", "Orizaba", "Otatitlán",
            "Oteapan", "Ozuluama de Mascareñas", "Pajapan", "Pánuco", "Papantla", "Paso del Macho",
            "Paso de Ovejas", "La Perla", "Perote", "Platón Sánchez", "Playa Vicente", "Poza Rica de Hidalgo",
            "Las Vigas de Ramírez", "Pueblo Viejo", "Puente Nacional", "Rafael Delgado", "Rafael Lucio",
            "Los Reyes", "Río Blanco", "Saltabarranca", "San Andrés Tenejapan", "San Andrés Tuxtla",
            "San Juan Evangelista", "Santiago Tuxtla", "Sayula de Alemán", "Soconusco", "Sochiapa",
            "Soledad Atzompa", "Soledad de Doblado", "Soteapan", "Tamalín", "Tamiahua", "Tampico Alto",
            "Tancoco", "Tantima", "Tantoyuca", "Tatatila", "Castillo de Teayo", "Tecolutla", "Tehuipango",
            "Álamo Temapache", "Tempoal", "Tenampa", "Tenochtitlán", "Teocelo", "Tepatlaxco", "Tepetlán",
            "Tepetzintla", "Tequila", "José Azueta", "Texcatepec", "Texhuacán", "Texistepec", "Tezonapa",
            "Tierra Blanca", "Tihuatlán", "Tlacojalpan", "Tlacolulan", "Tlacotalpan", "Tlacotepec de Mejía",
            "Tlachichilco", "Tlalixcoyan", "Tlalnelhuayocan", "Tlapacoyan", "Tlaquilpa", "Tlilapan",
            "Tomatlán", "Tonayán", "Totutla", "Tuxpan", "Tuxtilla", "Ursulo Galván", "Vega de Alatorre",
            "Veracruz", "Villa Aldama", "Xoxocotla", "Yanga", "Yecuatla", "Zacualpan", "Zaragoza", "Zentla",
            "Zongolica", "Zontecomatlán de López y Fuentes", "Zozocolco de Hidalgo", "Agua Dulce", "El Higo",
            "Nanchital de Lázaro Cárdenas del Río", "Tres Valles", "Carlos A. Carrillo",
            "Tatahuicapan de Juárez", "Uxpanapa", "San Rafael", "Santiago Sochiapan"]
    },
    {
        Estado: "Yucatán",
        Ciudades: ["Abalá", "Acanceh", "Akil", "Baca", "Bokobá", "Buctzotz", "Cacalchén", "Calotmul",
            "Cansahcab", "Cantamayec", "Celestún", "Cenotillo", "Conkal", "Cuncunul", "Cuzamá", "Chacsinkín",
            "Chankom", "Chapab", "Chemax", "Chicxulub Pueblo", "Chichimilá", "Chikindzonot", "Chocholá",
            "Chumayel", "Dzán", "Dzemul", "Dzidzantún", "Dzilam de Bravo", "Dzilam González", "Dzitás",
            "Dzoncauich", "Espita", "Halachó", "Hocabá", "Hoctún", "Homún", "Huhí", "Hunucmá", "Ixil", "Izamal",
            "Kanasín", "Kantunil", "Kaua", "Kinchil", "Kopomá", "Mama", "Maní", "Maxcanú", "Mayapán", "Mérida",
            "Mocochá", "Motul", "Muna", "Muxupip", "Opichén", "Oxkutzcab", "Panabá", "Peto", "Progreso",
            "Quintana Roo", "Río Lagartos", "Sacalum", "Samahil", "Sanahcat", "San Felipe", "Santa Elena",
            "Seyé", "Sinanché", "Sotuta", "Sucilá", "Sudzal", "Suma", "Tahdziú", "Tahmek", "Teabo", "Tecoh",
            "Tekal de Venegas", "Tekantó", "Tekax", "Tekit", "Tekom", "Telchac Pueblo", "Telchac Puerto",
            "Temax", "Temozón", "Tepakán", "Tetiz", "Teya", "Ticul", "Timucuy", "Tinum", "Tixcacalcupul",
            "Tixkokob", "Tixmehuac", "Tixpéhual", "Tizimín", "Tunkás", "Tzucacab", "Uayma", "Ucú", "Umán",
            "Valladolid", "Xocchel", "Yaxcabá", "Yaxkukul", "Yobaín"]
    },
    {
        Estado: "Zacatecas",
        Ciudades: ["Apozol", "Apulco", "Atolinga", "Benito Juárez", "Calera", "Cañitas de Felipe Pescador",
            "Chalchihuites", "Concepción del Oro", "Cuauhtémoc", "Fresnillo", "Genaro Codina",
            "General Enrique Estrada", "General Francisco R. Murguía", "General Pánfilo Natera",
            "Guadalupe", "Huanusco", "Jalpa", "Jerez", "Jiménez del Teul", "Juan Aldama", "Juchipila",
            "Loreto", "Luis Moya", "Mazapil", "Melchor Ocampo", "Mezquital del Oro", "Miguel Auza", "Momax",
            "Monte Escobedo", "Morelos", "Moyahua de Estrada", "Nochistlán de Mejía", "Noria de Ángeles",
            "Ojocaliente", "Pánuco", "Pinos", "Río Grande", "Sain Alto", "Santa María de la Paz", "Sombrerete",
            "Susticacán", "Tabasco", "Tepechitlán", "Tepetongo", "Teúl de González Ortega",
            "Tlaltenango de Sánchez Román", "Valparaíso", "Vetagrande", "Villa de Cos", "Villa García",
            "Villa González Ortega", "Villa Hidalgo", "Villanueva", "Zacatecas", "Trancoso"]
    }
]
export default mex_cities;