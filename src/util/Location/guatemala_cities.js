const guatemala_cities = [
    {
        Estado: "Alta Verapaz",
        Ciudades: ["Chahal", "Chisec", "Cobán", "Fray Bartolomé de las Casas", "Panzóz", "Raxruhá", "San Agustín Lanquín", "San Cristóbal Verapaz", "San Juan Chamelco", "San Miguel Tucurú", "Santa Catalina La Tinta", "Santa Cruz Verapaz", "Santa María Cahabón", "Tactic", "Tamahu", "Senahú"]
    },
    {
        Estado: "Baja Verapaz",
        Ciudades: ["Cubulco", "Granados", "Purulhá", "Rabinal", "Salamá", "San Jerónimo", "San Miguel Chicaj", "Santa Cruz el Chol"]
    },
    {
        Estado: "Chimaltenango",
        Ciudades: ["Acatenango", "Chimaltenango", "El Tejar", "Patzicía", "Patzún", "Parramos", "San Andrés Itzapa", "San Bartolomé Milpas Altas", "San José Poaquil", "San Martín Jilotepeque", "San Miguel Pochuta", "San Pedro Yepocapa", "Santa Apolonia", "Santa Cruz Balanyá", "Tecpán", "Zaragoza"]
    },
    {
        Estado: "Chiquimula",
        Ciudades: ["Camotán", "Concepción Las Minas", "Esquipulas", "Ipala", "Jocotán", "Olopa", "Quezaltepeque", "San Jacinto", "San Juan Ermita", "San José la Arada", "Chiquimula"]
    },
    {
        Estado: "El Progreso",
        Ciudades: ["Guastatoya", "Morazán", "San Agustín Acasaguastlán", "San Antonio La Paz", "San Cristóbal Acasaguastlán", "Sanarate", "Sansare", "El Jícaro"]
    },
    {
        Estado: "Escuintla",
        Ciudades: ["Escuintla", "Guaganazapa", "Iztapa", "La Democracia", "La Gomera", "Masagua", "Nueva Concepción", "Palín", "San José", "San Vicente Pacaya", "Santa Lucía Cotzumalguapa", "Siquinalá", "Tiquisate"]
    },
    {
        Estado: "Departamento de Guatemala",
        Ciudades: ["Amatitlán", "Chinautla", "Chuarrancho", "Fraijanes", "Guatemala", "Mixco", "Palencia", "San José del Golfo", "San José Pinula", "San Miguel Petapa", "San Pedro Ayampuc", "San Pedro Sacatapéquez", "San Juan Sacatepéquez", "San Raymundo", "Santa Catarina Pinula", "Villa Canales", "Villa Nueva"]
    },
    {
        Estado: "Huehuetenango",
        Ciudades: ["Aguacatán", "Chiantla", "Colotenango", "Concepción Huista", "Cuilco", "Huehuetenango", "Ixtahuacán", "Jacaltenango", "La Democracia", "La Libertad", "Malacatancito", "Nentón", "San Antonio Huista", "San Gaspar Ixchil", "San Juan Atitlán", "San Juan Ixcoy", "San Mateo Ixtatán", "San Miguel Acatán", "San Pedro Necta", "San Rafael La Independencia", "San Rafael Petzal", "San Sebastián Coatán", "San Sebastián Huehuetenango", "Santa Ana Huista", "Santa Bárbara", "Santa Cruz Barillas", "Soloma", "Tectitán", "Todos Santos Cuchumatán"]
    },
    {
        Estado: "Izabal",
        Ciudades: ["El Estor", "Livingston", "Los Amates", "Morales", "Puerto Barrios"]
    },
    {
        Estado: "Jalapa",
        Ciudades: ["Jalapa", "Mataquescuintla", "Monjas", "San Carlos Alzatate", "San Luis Jilotepeque", "San Manuel Chaparrón", "San Pedro Pinula"]
    },
    {
        Estado: "Jutiapa",
        Ciudades: ["Agua Blanca", "Asunción Mita", "Atescatempa", "Comapa", "Conguaco", "El Adelanto", "El Progreso", "Jalpatagua", "Jutiapa", "Jerez", "Moyuta", "Pasaco", "Quesada", "Santa Catarina Mita", "Yupiltepeque", "Zapotitlán"]
    },
    {
        Estado: "Petén",
        Ciudades: ["Dolores", "Flores", "La Libertad", "Melchor de Mencos", "Poptún", "San Andrés", "San Benito", "San Francisco", "San José", "San Luis", "Sayaxché"]
    },
    {
        Estado: "Quetzaltenango",
        Ciudades: ["Almolonga", "Cantel", "Cabricán", "Cajolá", "Colomba Costa Cuca", "Concepción Chiquirichapa", "Coatepeque", "El Palmar", "Flores Costa Cuca", "Génova", "Huitán", "La Esperanza", "Palestina de Los Altos", "Salcajá", "San Carlos Sija", "San Francisco La Unión", "San Juan Olintepeque", "San Juan Ostuncalco", "San Martín Sacatepéquez", "San Mateo", "San Miguel Siguilá", "Sibilia", "Zunil"]
    },
    {
        Estado: "Quiché",
        Ciudades: ["Canillá", "Chajul", "Chiché", "Chinique", "Chicamán", "Cunén", "Ixcán", "Pachalum", "Patzité", "Sacapulas", "San Andrés Sajcabajá", "San Antonio Ilotenango", "San Bartolomé Jocotenango", "San Juan Cotzal", "San Pedro Jocopilas", "Santa María Joyabaj", "Santa María Nebaj", "Santa Cruz del Quiché", "Uspantán", "Zacualpa"]
    },
    {
        Estado: "Retalhuleu",
        Ciudades: ["Champerico", "El Asintal", "Nuevo San Carlos", "Retalhuleu", "San Andrés Villa Seca", "San Felipe", "San Martín Zapotitlán", "San Sebastián", "Santa Cruz Muluá"]
    },
    {
        Estado: "Sacatepéquez",
        Ciudades: ["Antigua Guatemala", "Ciudad Vieja", "Jocotenango", "Magdalena Milpas Altas", "Pastores", "San Antonio Aguas Calientes", "San Bartolomé Milpas Altas", "San Juan Alotenango", "San Lucas Sacatepéquez", "San Miguel Dueñas", "Santa Catarina Barahona", "Santa Lucía Milpas Altas", "Santa María de Jesús", "Santo Domingo Xenacoj", "Sumpango", "Santiago Sacatepéquez"]
    },
    {
        Estado: "San Marcos",
        Ciudades: ["Ayutla", "Catarina", "Comitancillo", "Concepción Tutuapa", "El Quetzal", "El Rodeo", "El Tumblador", "Esquipulas Palo Gordo", "Ixchiguán", "La Blanca", "La Reforma", "Malacatán", "Nuevo Progreso", "Ocós", "Pajapita", "San Antonio Sacatepéquez", "San Cristóbal Cucho", "San José Ojetenam", "San Lorenzo", "San Miguel Ixtahuacán", "San Pablo", "San Pedro Sacatepéquez", "San Rafael Pie de la Cuesta", "Sibinal", "Sipacapa", "Tacaná", "Tajumulco", "Tejutla", "Río Blanco"]
    },
    {
        Estado: "Santa Rosa",
        Ciudades: ["Barberena", "Casillas Santa Rosa", "Chiquimulilla", "Guazacapán", "Nueva Santa Rosa", "Oratorio", "Pueblo Nuevo Viñas", "San Juan Tecuaco", "San Rafael Las Flores", "Santa Cruz Naranjo", "Santa María Ixhuatán", "Santa Rosa de Lima", "Taxisco", "Cuilapa"]
    },
    {
        Estado: "Sololá",
        Ciudades: ["Concepción", "Nahualá", "Panajachel", "San Andrés Semetabaj", "San Antonio Palopó", "San José Chacayá", "San Juan La Laguna", "San Lucas Tolimán", "San Marcos La Laguna", "San Pablo La Laguna", "San Pedro La Laguna", "Santa Catarina Ixtahuacán", "Santa Catarina Palopó", "Santa Clara La Laguna", "Santa Cruz La Laguna", "Santa Lucía Utatlán", "Santa María Visitación", "Santiago Atitlán"]
    },
    {
        Estado: "Suchitepéquez",
        Ciudades: ["Chicacao", "Cuyotenango", "Mazatenango", "Patulul", "Pueblo Nuevo", "Río Bravo", "San Antonio Suchitépequez", "San Bernardino", "San Francisco Zapotitlán", "San Gabriel", "San José El Ídolo", "San Juan Bautista", "San Lorenzo", "San Miguel Panán", "San Pablo Jocopilas", "Santa Bárbara", "Santo Domingo Suchitépequez", "Santo Tomás La Unión", "Samayac", "Zunilito"]
    },
    {
        Estado: "Totonicapán",
        Ciudades: ["Momostenango", "San Andrés Xecul", "San Bartolo", "San Cristóbal Totonicapán", "San Francisco El Alto", "Santa Lucía La Reforma", "Santa María Chiquimula"]
    },
    {
        Estado: "Zacapa",
        Ciudades: ["Cabañas", "Estanzuela", "Gualán", "Huité", "La Unión", "Río Hondo", "San Diego", "San Jorge", "Teculután", "Usumatlán", "Zacapa"]
    }
]
export default guatemala_cities;