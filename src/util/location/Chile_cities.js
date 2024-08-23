const Chile_cities = [
    {
        Estado: "Antofagasta",
        Ciudades: ["Antofagasta", "Calama", "María Elena", "Mejillones", "Ollagüe", "San Pedro de Atacama", 
            "Sierra Gorda", "Taltal", "Tocopilla"]
    },
    {
        Estado: "Arica y Parinacota",
        Ciudades: ["Arica", "Camarones", "General Lagos", "Putre"]
    },
    {
        Estado: "Atacama",
        Ciudades: ["Alto del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego de Almagro", "Freirina", "Huasco", 
            "Tierra Amarilla", "Vallenar"]
    },
    {
        Estado: "Aysén",
        Ciudades: ["Aysén", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", 
            "O'Higgins", "Río Ibáñez", "Tortel"]
    },
    {
        Estado: "Biobío",
        Ciudades: ["Alto Biobío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", "Contulmo", "Coronel", 
            "Curanilahue", "Florida", "Hualpén", "Hualqui", "Laja", "Lebu", "Los Álamos", "Los Ángeles", "Lota", 
            "Mulchén", "Nacimiento", "Negrete", "Penco", "Quilaco", "Quilleco", "San Pedro de la Paz", "San Rosendo", 
            "Santa Bárbara", "Santa Juana", "Talcahuano", "Tirúa", "Tomé", "Tucapel", "Yumbel"]
    },
    {
        Estado: "Coquimbo",
        Ciudades: ["Andacollo", "Canela", "Combarbalá", "Coquimbo", "Illapel", "La Higuera", "La Serena", 
            "Los Vilos", "Monte Patria", "Ovalle", "Paihuano", "Punitaqui", "Río Hurtado", "Salamanca", "Vicuña"]
    },
    {
        Estado: "La Araucanía",
        Ciudades: ["Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curacautín", "Curarrehue", "Ercilla", 
            "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Lonquimay", "Los Sauces", "Lumaco", 
            "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Purén", 
            "Renaico", "Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Traiguén", "Victoria", "Vilcún", 
            "Villarrica"]
    },
    {
        Estado: "Los Lagos",
        Ciudades: ["Ancud", "Calbuco", "Castro", "Chaitén", "Chonchi", "Cochamó", "Curaco de Vélez", "Dalcahue", 
            "Fresia", "Frutillar", "Futaleufú", "Hualaihué", "Llanquihue", "Los Muermos", "Maullín", "Osorno", 
            "Palena", "Puerto Montt", "Puerto Octay", "Puerto Varas", "Puqueldón", "Purranque", "Puyehue", 
            "Queilén", "Quellón", "Quemchi", "Quinchao", "Río Negro", "San Juan de la Costa", "San Pablo"]
    },
    {
        Estado: "Los Ríos",
        Ciudades: ["Los Lagos", "Los Muermos", "Llanquihue", "Maullín", "Osorno", "Palena", "Puerto Montt", 
            "Puerto Varas", "Puyehue", "Queilén", "San Juan de la Costa", "San Pablo"]
    },
    {
        Estado: "Magallanes",
        Ciudades: ["Chile Chico", "Cerro Sombrero", "Natales", "Porvenir", "Punta Arenas", "Río Verde", 
            "San Gregorio", "San Juan de la Costa", "Tierra del Fuego", "Torres del Paine", "Villa Tehuelches"]
    },
    {
        Estado: "Maule",
        Ciudades: ["Achá", "Cauquenes", "Chanco", "Colbún", "Constitución", "Curicó", "Empedrado", "Hualañé", 
            "Hualqui", "Iloca", "Linares", "Longaví", "Linares", "Maule", "Matanzas", "Nancagua", "Ñuble", 
            "Pelarco", "Pelluhue", "Pencahue", "Rauco", "Rauco", "Retiro", "San Clemente", "San Javier", 
            "San Rafael", "Talca", "Teno", "Vichuquén", "Villa Alegre", "Villa San Antonio"]
    },
    {
        Estado: "Metropolitana",
        Ciudades: ["Alhué", "Buín", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", "El Bosque", "El Monte", 
            "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", 
            "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", 
            "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Pinto", "Providencia", "Pudahuel", "Puente Alto", 
            "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquín", "San José de Maipo", 
            "San Miguel", "San Pablo", "San Pedro", "San Ramón", "Santiago", "Vitacura", "El Monte", "Cerrillos", 
            "Colina", "Conchalí", "Huechuraba", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", 
            "Lo Barnechea", "Lo Espejo"]
    },
    {
        Estado: "O'Higgins",
        Ciudades: ["Apalta", "Cachapoal", "Cartagena", "Codegua", "Coínco", "Coltauco", "Colbún", "Doñihue", 
            "Graneros", "Las Cabras", "Lihueimo", "Machalí", "Malloa", "Marchigüe", "Mostazal", "Olivar", "Peumo", 
            "Pichidegua", "Pichilemu", "Playa Ancha", "Rancagua", "Rengo", "Requínoa", "San Francisco de Mostazal", 
            "San Fernando", "San Vicente", "Santa Cruz", "Sagrada Familia", "Teno", "Tinguiririca", "Tobalaba", 
            "Vichuquén", "Villa Alegre", "Zúñiga"]
    },
    {
        Estado: "Tarapacá",
        Ciudades: ["Alto Hospicio", "Iquique", "Pica", "Pozo Almonte", "Huara", "Colchane", "Camiña"]
    },
    {
        Estado: "Valparaíso",
        Ciudades: ["Algarrobo", "Cabildo", "Calera", "Calderón", "Calle Larga", "Catemu", "Concón", "El Melón", 
            "El Quisco", "El Tabo", "Hanga Roa", "Limache", "Llaillay", "Los Andes", "Nogales", "Olmué", 
            "Puchuncaví", "Putaendo", "Quillota", "Quilpué", "Quintero", "Rinconada", "San Antonio", 
            "San Esteban", "San Felipe", "San Javier", "San Nicolás", "Santa María", "Santo Domingo", 
            "Valparaíso", "Vina del Mar", "Valparaíso", "Zaragoza", "Casablanca", "Las Ventanas", "Valparaíso", 
            "Viña del Mar"]
    },
    {
        Estado: "Ñuble",
        Ciudades: ["Bulnes", "Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", 
            "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", 
            "San Ignacio", "San Nicolás", "San Pedro", "Yungay", "Río Bueno"]
    },
]
export default Chile_cities;