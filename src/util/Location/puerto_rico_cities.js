const puerto_rico_cities = [
    {
      Estado: "Adjuntas",
      Ciudades: ["Adjuntas", "Garzas", "Guayabo Dulce", "Guayo", "Pellejas", "Portillo", "Quemado", "Yayales"],
    },
    {
      Estado: "Aguada",
      Ciudades: ["Aguada", "Aguadilla", "Espinar", "Guánica", "Moca", "Rincón", "San Sebastián"],
    },
    {
      Estado: "Aguadilla",
      Ciudades: ["Aguadilla", "Aguadilla Pueblo", "Borinquen", "Caimital Alto", "Caimital Bajo", "Ceiba", "Corrales", "Crash Boat", "Guánica", "Maloza", "Marías", "Montaña", "Palo Seco", "Pueblo Viejo", "Victoria"],
    },
    {
      Estado: "Aguas Buenas",
      Ciudades: ["Aguas Buenas", "Bairoa", "Cagüitas", "Jagüeyes", "Juan Sánchez", "Mula", "Sonadora"],
    },
    {
      Estado: "Aibonito",
      Ciudades: ["Aibonito", "Algarrobo", "Cuyón", "Pasto", "Plata", "Pueblo", "Robles", "Santiago Vargas"],
    },
    {
      Estado: "Añasco",
      Ciudades: ["Añasco", "Añasco Abajo", "Añasco Arriba", "Carreras", "Casey Arriba", "Casey Abajo", "Corcovada", "Dagüey", "Espino", "Hatillo", "Marías", "Miraflores", "Ovejas", "Piedras Blancas", "Río Arriba", "Río Cañas", "San Antonio"],
    },
    {
      Estado: "Arecibo",
      Ciudades: ["Arecibo", "Arecibo Pueblo", "Arrozal", "Bajadero", "Cambalache", "Carreras", "Domenech", "Domingo Ruíz", "Garrochales", "Hato Abajo", "Hato Arriba", "Hato Bajo", "Hato Viejo", "Islote", "Jarealito", "Miraflores", "Río Arriba", "Río Cañas", "Tanamá"],
    },
    {
      Estado: "Arroyo",
      Ciudades: ["Arroyo", "Arroyo", "Guásimas", "Palmas", "Pitahaya"],
    },
    {
      Estado: "Barceloneta",
      Ciudades: ["Barceloneta", "Barceloneta", "Florida Afuera", "Florida Interior", "Garrochales", "Palmas", "Pueblo"],
    },
    {
      Estado: "Barranquitas",
      Ciudades: ["Barranquitas", "Aibonito", "Barrancas", "Barranquitas", "Helechal", "Palma Sola", "Quebrada Grande", "Quebrada Larga", "Río Largo", "Río Prieto"],
    },
    {
      Estado: "Bayamón",
      Ciudades: ["Bayamón", "Bayamón", "Buena Vista", "Cerro Gordo", "Dajaos", "Guaynabo", "Hato Tejas", "Juan Sánchez", "Minillas", "Municipio", "Pueblo", "Quebrada Seca", "Santa Cruz", "Sonadora", "Tiburones", "Vista Alegre"],
    },
    {
      Estado: "Cabo Rojo",
      Ciudades: ["Cabo Rojo", "Bajura", "Betances", "Cabo Rojo", "Cabo Rojo Pueblo", "Guánica", "Llanos Costa", "Llanos Tuna", "Miradero", "Monte Grande", "Pedro Aceituno", "Poblado de Cabo Rojo", "Pueblo", "Puerto Real", "Quebrada", "Quebrada las Palmas", "Santo Domingo"],
    },
    {
      Estado: "Caguas",
      Ciudades: ["Caguas", "Bairoa", "Beatriz", "Caguas", "Caguas Pueblo", "Cañabón", "Cañaboncito", "Cerro Gordo", "Charco", "Río Cañas", "Río Piedras", "San Antonio", "San Salvador", "Tomás de Castro"],
    },
    {
      Estado: "Camuy",
      Ciudades: ["Camuy", "Camuy", "Camuy Arriba", "Camuy Pueblo", "Cibao", "Membrillo", "Puente", "Puerto", "Quebrada", "Santo Domingo", "Yeguada"],
    },
    {
      Estado: "Canóvanas",
      Ciudades: ["Canóvanas", "Canóvanas", "Canóvanas Pueblo", "Hato Puerco", "Lomas", "Río Frio", "Torrecillas"],
    },
    {
      Estado: "Carolina",
      Ciudades: ["Carolina", "Barrazas", "Caguas", "Carolina", "Carolina Pueblo", "Cedro", "Ciénaga Alta", "Ciénaga Baja", "Martín González", "Sabana Abajo", "Trujillo Bajo"],
    },
    {
      Estado: "Cataño",
      Ciudades: ["Cataño", "Cataño", "Cataño Pueblo", "Palmas", "Pueblo Viejo", "Talante"],
    },
    {
      Estado: "Cayey",
      Ciudades: ["Cayey", "Cayey", "Cayey Pueblo", "Cedro", "Guavate", "Jájome", "Pasto Viejo", "Piedras", "Piedras Blancas", "Río Abajo", "Río Arriba", "Sumidero", "Toita"],
    },
    {
      Estado: "Ceiba",
      Ciudades: ["Ceiba", "Ceiba", "Ceiba Pueblo", "Chupacallos", "Guayacán", "Juncos", "Luis M. Cintrón", "Machos", "Quebrada Seca", "Roosevelt Roads"],
    },
    {
      Estado: "Ciales",
      Ciudades: ["Ciales", "Ciales", "Ciales Pueblo", "Cialitos", "Frontón", "Jorge Luis", "Mamey", "Peñón", "Punta", "Toro Negro"],
    },
    {
      Estado: " Cidra",
      Ciudades: ["Cidra", "Cidra", "Cidra Pueblo", "Cedro", "Cuba", "Marías", "Monte Llano", "Ratones", "Robles", "Santiago", "Santo Domingo", "Toíta"],
    },
    {
      Estado: "Coamo",
      Ciudades: ["Coamo", "Coamo", "Coamo Arriba", "Coamo Pueblo", "Coto", "Hayales", "Las Lomas", "Los Llanos", "Pasto", "Palmarejo", "Remedios", "San Ildefonso", "Santa Catalina"],
    },
    {
      Estado: "Comerío",
      Ciudades: ["Comerío", "Comerío", "Comerío Pueblo", "Cedrito", "Naranjo", "Palomas", "Piñas", "Río Hondo", "Vega Redonda"],
    },
    {
      Estado: "Corozal",
      Ciudades: ["Corozal", "Corozal", "Corozal Pueblo", "Cibuco", "Cuesta Blanca", "Dos Bocas", "Mamey", "Minillas", "Pueblo", "Pueblo Viejo", "Río Lajas", "Santiago", "Toíta"],
    },
    {
      Estado: "Culebra",
      Ciudades: ["Culebra", "Culebra", "Culebra Pueblo", "Flamenco", "Fraile", "Playa Sardinas I", "Playa Sardinas II", "San Isidro", "Tortuga"],
    },
    {
      Estado: "Dorado",
      Ciudades: ["Dorado", "Dorado", "Dorado Pueblo", "Espinal", "Higuillar", "Maguayo", "Mamey", "San Antonio", "Toa Baja"],
    },
    {
      Estado: "Fajardo",
      Ciudades: ["Fajardo", "Fajardo", "Fajardo Pueblo", "Demajagua", "Flores", "Isidra", "Naranjo", "Quebrada Fajardo", "Quebrada Vueltas", "Río Arriba", "Sardinera", "Vista Hermosa"],
    },
    {
      Estado: "Florida",
      Ciudades: ["Florida", "Florida", "Florida Adentro", "Florida Afuera", "La Plata", "Maguayo", "Quebrada Arenas", "Quebrada Grande", "Quebrada Honda", "Sector La Mina"],
    },
    {
      Estado: "Guánica",
      Ciudades: ["Guánica", "Guánica", "Guánica Pueblo", "Amador", "Ciénaga", "Ciénaga Alta", "Ciénaga Baja", "Ensenada", "Guánica Afuera", "Guánica Pueblo", "Malecón", "Marías", "Montaña", "San Antonio", "Santa Rita", "Toro Negro"],
    },
    {
      Estado: "Guayama",
      Ciudades: ["Guayama", "Guayama", "Guayama Pueblo", "Algarrobo", "Caimital", "Carite", "Guamaní", "Jobos", "Machete", "Palmas", "Pozo Hondo", "Quebrada Honda", "Río Abajo", "Río Arriba"],
    },
    {
      Estado: "Guayanilla",
      Ciudades: ["Guayanilla", "Guayanilla", "Guayanilla Pueblo", "Caimital", "Cedrito", "Cerro", "Guayanilla Afuera", "Indios", "Jagüeyes", "Macaná", "Magas Arriba", "Pasto Viejo", "Placetas", "Quebrada Honda", "Quebrada Negra", "San Antonio", "Yaguas"],
    },
    {
      Estado: "Guaynabo",
      Ciudades: ["Guaynabo", "Guaynabo", "Guaynabo Pueblo", "Camino Nuevo", "Cerro Gordo", "Frailes", "Guaraguao", "Hato Nuevo", "Mamey", "Pueblo Viejo", "Río", "Santa Rosa", "Sonadora", "Tortuguero", "Vietnam"],
    },
    {
      Estado: "Hatillo",
      Ciudades: ["Hatillo", "Hatillo", "Hatillo Pueblo", "Arenal", "Bayaney", "Buena Vista", "Carrizales", "Corcovado", "Domingo Ruíz", "Galateo", "La Vega", "Maracón", "Naranjo", "Palo Seco", "Quebrada Grande", "Quebrada Honda", "Rafael González", "Río Abajo", "Río Arriba", "Santiago", "Vega Baja"],
    },
    {
      Estado: "Hormigueros",
      Ciudades: ["Hormigueros", "Hormigueros", "Hormigueros Pueblo", "Guánica", "Hormigueros", "Jagüey", "Lajas", "Monserrate", "Nieves", "Palmarejo", "Paso Carreras", "Pueblo", "Puerto Rico", "Río Arriba"],
    },
    {
      Estado: "Humacao",
      Ciudades: ["Humacao", "Humacao", "Humacao Pueblo", "Antón Ruíz", "Blanco", "Candelero Abajo", "Candelero Arriba", "Cataño", "Cintrón", "Collores", "Iglesias", "Juan Martín", "Mambiche", "Mariano Colón", "Mariana", "Palmarejo", "Plata", "Río Abajo", "Río Arriba", "Tejas"],
    },
    {
      Estado: "Isabela",
      Ciudades: ["Isabela", "Isabela", "Isabela Pueblo", "Arenales", "Bajura", "Bejucos", "Coto", "Galateo", "Guayabos", "Guayanes", "Llanos Costa", "Llanos Tuna", "Montaña", "Planas", "Quebrada", "Río Blanco", "Río Guaynabo", "Vega Alta", "Vega Baja"],
    },
    {
      Estado: "Jayuya",
      Ciudades: ["Jayuya", "Jayuya", "Jayuya Pueblo", "Coabey", "Collores", "Guanajibo", "Jauca", "Mamey", "Pueblito del Río", "Río Grande", "Saliente", "Vegas"],
    },
    {
      Estado: "Juana Díaz",
      Ciudades: ["Juana Díaz", "Juana Díaz ", "Juana Díaz Pueblo", "Amuelas", "Cintrón", "Collores", "Guerrero", "Lomas", "Río Cañas Abajo", "Río Cañas Arriba", "Río Descalabrado", "Tijeras"],
    },
    {
      Estado: "Lajas",
      Ciudades: ["Lajas", "Lajas", "Lajas Pueblo", "Candelaria", "Fajardo", "La Plena", "Lajas Afuera", "Lajas Arriba", "Parguera", "Pueblo", "Quebrada", "Quebrada Honda", "Río Lajas", "Santa María"],
    },
    {
      Estado: "Lares",
      Ciudades: ["Lares", "Lares", "Lares Pueblo", "Bartolo", "Callejones", "Espino", "La Plata", "Mirador", "Peñón", "Pueblo", "Río Prieto", "San Sebastián"],
    },
    {
      Estado: "Las Marías",
      Ciudades: ["Las Marías", "Las Marías", "Las Marías Pueblo", "Fernández", "Las Marías", "Maravilla", "Palma Escrita", "Pueblito del Río", "Río Grande", "Río Prieto", "Sabana Grande", "Tacuabo"],
    },
    {
      Estado: "Las Piedras",
      Ciudades: ["Las Piedras", "Las Piedras", "Las Piedras Pueblo", "Boquerón", "Collores", "El Río", "Monte Sol", "Quebrada Arenas", "Quebrada de las Piedras", "Tejas"],
    },
    {
      Estado: "Luquillo",
      Ciudades: ["Luquillo", "Luquillo", "Luquillo Pueblo", "Fortuna", "Mamey", "Mata de Plátano", "Palo Seco", "Pueblo", "Quebrada Grande", "Quebrada Sonadora", "Río Grande", "San Francisco", "Santiago", "Tortuguero"],
    },
    {
      Estado: "Manatí",
      Ciudades: ["Manatí", "Manatí", "Manatí Pueblo", "Coto Norte", "Coto Sur", "Marías", "Pueblito del Río", "Río Arriba", "Tierras Nuevas Poniente", "Tierras Nuevas Saliente"],
    },
    {
      Estado: "Maricao",
      Ciudades: ["Maricao", "Maricao", "Maricao Pueblo", "Bajadero", "Indios", "Maricao Afuera", "Montoso", "Pueblo", "Rubias"],
    },
    {
      Estado: "Maunabo",
      Ciudades: ["Maunabo", "Maunabo", "Maunabo Pueblo", "Calzada", "Emajagual", "Matón Abajo", "Matón Arriba", "Palo Seco", "Quebrada Arenas", "Quebrada Guayabal", "Talante"],
    },
    {
      Estado: "Mayagüez",
      Ciudades: ["Mayagüez", "Mayagüez", "Mayagüez Arriba", "Mayagüez Pueblo", "Algarrobo", "Bateyes", "Guánica", "Guayabales", "Leguísamo", "Limón", "Malecón", "Mayagüez Abajo", "Montoso", "Palmarejo", "Pueblo", "Quebrada Grande", "Río Cañas Abajo", "Río Cañas Arriba", "Sábalos", "Santo Domingo", "Santo Domingo Arriba"],
    },
    {
      Estado: "Moca",
      Ciudades: ["Moca", "Moca", "Moca Pueblo", "Capá", "Cuchillas", "Naranjo", "Pueblo", "Pueblo Viejo", "Río Grande", "Río Plata"],
    },
    {
      Estado: "Morovis",
      Ciudades: ["Morovis", "Morovis", "Morovis Pueblo", "Cerro Gordo", "Fresnal", "Monte Claro", "Morovis Afuera", "Morovis Arriba", "Pueblo", "Río Grande", "San Lorenzo", "Unibón"],
    },
    {
      Estado: "Naguabo",
      Ciudades: ["Naguabo", "Naguabo", "Naguabo Pueblo", "Duque", "Húcares", "Jagüeyes", "Llanos", "Marías", "Río Blanco", "Río Juncos", "Río Naguabo", "Santiago Yeguas", "Tocones"],
    },
    {
      Estado: "Naranjito",
      Ciudades: ["Naranjito", "Naranjito", "Naranjito Pueblo", "Achiote", "Cedrito", "Guadiana", "Lomas", "San Antonio", "San Luis", "Villa Ivana"],
    },
    {
      Estado: "Orocovis",
      Ciudades: ["Orocovis", "Orocovis", "Orocovis Pueblo", "Bauta Abajo", "Bauta Arriba", "Damián Abajo", "Damián Arriba", "Pellejas", "Pueblo", "Sabana", "Saltos"],
    },
    {
      Estado: "Patillas",
      Ciudades: ["Patillas", "Patillas", "Patillas Pueblo", "Cacao", "El Cinco", "Mamey", "Marín", "Monte Llano", "Palmasola", "Pueblo", "Tallaboa Alta", "Tallaboa Poniente", "Tallaboa Saliente"],
    },
    {
      Estado: "Penuelas",
      Ciudades: ["Penuelas", "Penuelas", "Penuelas Pueblo", "Atalaya", "Coto", "Encarnación", "Maravilla", "Penuelas", "Robles", "Toro Negro", "Vegas"],
    },
    {
      Estado: "Ponce",
      Ciudades: ["Ponce", "Ponce", "Ponce Pueblo", "Anón", "Bucaná", "Canas", "Capitanejo", "Coto Laurel", "Cuebas", "Guaraguao", "Machuelo Abajo", "Machuelo Arriba", "Magueyes", "Maragüez", "Marueño", "Montes Llanos", "Portugués", "Quebrada del Agua", "Quebrada del Llano", "Real", "San Antón", "San Patricio", "Sabanetas", "Tallaboa", "Tib",],
    },
]
export default puerto_rico_cities;