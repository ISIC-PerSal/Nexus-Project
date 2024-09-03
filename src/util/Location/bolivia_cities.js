const bolivia_cities = [
    {
        Estado: "Beni",
        Ciudades: ["Baures", "Bella Flor", "Exaltación", "Guayaramerín", "Huacaraje", "Loreto", "Magdalena", 
            "Puerto Gonzalo Moreno", "Reyes", "Riberalta", "Rurrenabaque", "San Andrés", "San Borja", 
            "San Ignacio de Moxos", "San Javier", "San Joaquín", "San Ramón", "Santa Ana del Yacuma", 
            "Santos Mercado"]
    },
    {
        Estado: "Chuquisaca",
        Ciudades: ["", "Alcalá", "Azurduy", "Camargo", "Culpina", "El Villar", "Gamoneda", "Huacareta", "Icla", 
            "Incahuasi", "Mojocoya", "Monteagudo", "Muñoz", "Nájera", "Oropesa", "Padilla", "Piedra Negra", 
            "Presto", "Quiile", "Relleno", "San Lucas", "San Miguel", "San Salvador", "Sucre", "Tarabuco", 
            "Tarvita", "Villa Abecia", "Villa Charcas", "Villa Serrano", "Villa Vaca Guzmán"]
    },
    {
        Estado: "Cochabamba",
        Ciudades: ["Aiquile", "Arani", "Arque", "Bela Vista", "Bolívar", "Campero", "Capinota", "Cercado", 
            "Chapare", "Cliza", "Cochabamba", "Colomi", "Colcapirhua", "Cuchumuela", "El Paso", "Germán Busch", 
            "Mizque", "Monte Belo", "Mojos", "Morochata", "Omereque", "Punata", "Quillacollo", "Rural", 
            "Santo Domingo", "Sica Sica", "Tacopaya", "Tiquipaya", "Tiraque", "Vacas", "Vinto", "Villa Albina", 
            "Villa Rivero", "Villa Tunari", "Vinto", "Vinto", "Vinto", "Wila Tambo", "Yura", "Zudáñez", 
            "Samaipata", "Tambo Quemado", "Cascada", "Potrero", "Pucarani", "Cochabamba"]
    },
    {
        Estado: "La Paz",
        Ciudades: ["Achacachi", "Acoma", "Ayo Ayo", "Batallas", "Caranavi", "Chacaltaya", "Challapata", "Chano", 
            "Charaña", "Chimoré", "Chulumani", "Colquiri", "Coripata", "Curva", "El Alto", "El Choro",
            "El Encuentro", "El Puma", "Escoma", "Guaqui", "Guarani", "Huarina", "Huaripata", "Hito", 
            "Inquisivi", "Irupana", "Jesús de Machaca", "Kantuta", "Khegoloma", "La Asunta", "La Paz", "Laja", 
            "Larecaja", "Lupa", "Malla", "Manco Kapac", "Mina", "Moyobamba", "Nina", "Paco", "Pando", "Pangota", 
            "Patacamaya", "Pataya", "Pazña", "Peñas", "Puerto Acosta", "Puerto Carabuco", "Puerto Murillo", 
            "Quime", "Ribera", "San Andrés", "San Benito", "San Borja", "San Carlos", "San Domingo", 
            "San Francisco", "San Ignacio", "San Javier", "San Juan de Dios", "San José de Chiquitos", 
            "San Pedro", "San Pedro de Totora", "Santa Ana", "Santa Rosa", "Santiago de Callapa", 
            "Santiago de Machaca", "Sica Sica", "Sorata", "Tambo Quemado", "Tina", "Tiquina", "Uru Chipaya", 
            "Vila Vila", "Yungas", "Zongo"]
    },
    {
        Estado: "Oruro",
        Ciudades: ["Andamarca", "Andres Ibáñez", "Coro Cora", "Curahuara de Carangas", "El Choro", "El Salado", 
            "Huanuni", "Machacamarca", "Machaca", "Mantecani", "Oruro", "Poopó", "Potosí", "Quillacas", "Sabaya", 
            "San Pedro de Totora", "San Rafael", "Santiago de Huari", "Santiago de Machaca", "Santuario", "Saucari", 
            "Tambo Quemado", "Tierra", "Turco", "Vinto", "Villa Coque", "Villa de Ayllu", "Villa Huanuni", 
            "Villa Machaca", "Villa Montes", "Villa San Francisco", "Villa San Juan", "Yungas", "Zongo"]
    },
    {
        Estado: "Pando",
        Ciudades: ["Bolívar", "El Alto", "Filadelfia", "Ingavi", "Mazón", "Manuripi", "Pando", "Puerto Gonzalo", 
            "Puerto Rico", "Riberalta", "Rurrenabaque", "San Lorenzo", "San Pedro", "Trinidad", "Villazón"]
    },
    {
        Estado: "Potosí",
        Ciudades: ["Atocha", "Betanzos", "Chuquihuta", "Colcha K", "Culpina", "Dulce Nombre de María", 
            "Eulogio Mamani", "Guaqui", "Icla", "Llica", "Macha", "Mizque", "Nación C", "Oruro", "Paucar del Río", 
            "Potosí", "Río Blanco", "San Andrés de Machaca", "San Pedro de Quemes", "San Simón", "San Vicente", 
            "Salar de Uyuni", "Siete Suyos", "Sucre", "Tinguipaya", "Tuma-La Dignidad", "Uncía", "Villazón", 
            "Villamontes", "Villa Candelaria", "Villa Fátima", "Villa Pabón", "Villa Serafina", "Villa Vaca Guzmán", 
            "Wila Tambo", "Yura", "Zudáñez"]
    },
    {
        Estado: "Santa Cruz",
        Ciudades: ["Ángeles", "Ascensión de Guarayos", "Barraquilla", "Bañados de Izozog", "Cabezas", "Camiri", 
            "Carmen Rivero Torrez", "Coroico", "Cotoca", "El Puente", "El Torno", "Guarayos", "Itinga", 
            "La Guardia", "Lagunillas", "Mairana", "Mojocoya", "Montero", "Muñecas", "Ñembi", "Pailón", 
            "Palmasola", "Pampa Grande", "Puerto Suárez", "Puerto Quijarro", "San Ignacio de Velasco", 
            "San José de Chiquitos", "San Julián", "San Matías", "San Miguel", "San Rafael", "San Vicente", 
            "Santa Ana del Yacuma", "Santa Cruz de la Sierra", "Santa Rosa del Sara", "Santiago de Chiquitos", 
            "Santos Mercado", "Saucara", "Urubichá", "Vallegrande", "Vaca Díez", "Villa Grande", "Yacuiba", 
            "Yapacaní"]
    },
    {
        Estado: "Tarija",
        Ciudades: ["Bermejo", "El Valle", "Entre Ríos", "Mojonado", "Padcaya", "San Andrés", "San Lorenzo", 
            "San Miguel", "Tarija", "Yacuiba", "Villamontes"]
    },
]
export default bolivia_cities;