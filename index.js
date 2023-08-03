
let map;
const coordinates = { lat: 20.662529355164256, lng: -103.35292770414168 }
let marker
let autoComplete
let idInput = document.getElementById("search-input")
let office
let address


// Data for states and their municipalities with respective addresses
var stateOffices = {
  "Aguascalientes": [
    { office: "Altaria", address: "Altaria, Carretera Federal 45, Desarrollo Especial Bulevar a Zacatecas, Aguascalientes, Mexico" },
    { office: "Galerías Aguascalientes", address: "20120 Aguascalientes, Ags." }
  ],
  "Baja California": [
    { office: "Pabellón Rosarito", address: "Calle Reforma #300 parcelas, 22710 Rosarito B.C Reforma, Escenica Tijuana-Ensenada 300, 22710 Rosarito, B.C." },
    { office: "Paseo 2000", address: "Blvd. 2000 26135, 22235 Tijuana, B.C." },
    { office: "Plaza La Cachanilla", address: "Blvd. Lopez Mateos s/n, Eguía, 21100 Mexicali, B.C." },
    { office: "Plaza San Pedro", address: "Calzada Cetys 1801, Vista Hermosa, 21259 Mexicali, B.C." },
    { office: "Puerto Paraiso", address: "Boulevard Lázaro Cárdenas 1501, CP. 23410, Cabo San Lucas, Baja California Sur." }
  ],
  "Chiapas": [
    { office: "Galerías Boulevard", address: "Blvd. Belisario Domínguez 1861, Bugambilias, 29058 Tuxtla Gutiérrez, Chis., Mexico" }
  ],
  "Chihuahua": [
    { office: "Galerías Boulevard", address: "Blvd. Belisario Domínguez 1861, Bugambilias, 29058 Tuxtla Gutiérrez, Chis., Mexico" },
    { office: "Distrito Uno (D1)", address: "Periférico de la Juventud 5700, Distrito uno, Chihuahua, Chihuahua." }
  ],
  "Ciudad de México": [
    { office: "Arcos Bosques", address: "Paseo Arcos Bosques, Paseo de los Tamarindos, Bosques de las Lomas, Mexico City, CDMX, Mexico" },
    { office: "ARTZ", address: "Periférico Sur, Jardines del Pedregal, 01900 Ciudad de México, CDMX, Mexico" },
    { office: "Carso Palmas", address: "Av. Paseo de las Palmas 781, Lomas de Chapultepec, Miguel Hidalgo, 11560 Ciudad de México, CDMX" },
    { office: "Centro Citibanamex", address: "Av. del Conscripto 311, Lomas de Sotelo, Hipódromo de las Américas, Miguel Hidalgo, 11619 Ciudad de México, CDMX" },
    { office: "Delta PGJ", address: "C.C. Parque Delta, Cuauhtémoc No. 462, Local L235, Col. Narvarte, Piedad Narvarte, Benito Juárez, 03020 Ciudad de México, CDMX, Mexico" },
    { office: "Encuentro Oceanía", address: "Av. del Peñón 355, Moctezuma 2da Secc, Venustiano Carranza, 15530 Ciudad de México, CDMX" },
    { office: "Fórum Buenavista", address: "Eje 1 Nte. 259, Buenavista, Cuauhtémoc, 06350 Ciudad de México, CDMX, Mexico" },
    { office: "Gran Terraza Coapa", address: "Calz Acoxpa 610, Coapa, Equipamiento Plaza Coapa, Tlalpan, 14390 Ciudad de México, CDMX, Mexico" },
    { office: "La Comer Insurgentes", address: "Av Insurgentes Sur 1517, Col San José Insurgentes, Benito Juárez, CP 03900, CDMX" },
    { office: "La Mexicana", address: "Luis Barragán No. 300, Col. Santa Fe Cuajimalpa, Alcaldía Cuajimalpa, C.P. 05000" },
    { office: "Metropoli Patriotismo", address: "Patriotismo 229 Col. San Pedro de los Pinos Local 2 y 3 México DF, Patriotismo, Benito Juárez, 03800 Metrópoli, CDMX" },
    { office: "Parking Santa Fe", address: "Av. Santa Fe 482, Lomas de Santa Fe, Contadero, Cuajimalpa de Morelos, 05348 Ciudad de México, CDMX" },
    { office: "Parque Delta", address: "C.C. Parque Delta, Cuauhtémoc No. 462, Local L235, Col. Narvarte, Piedad Narvarte, Benito Juárez, 03020 Ciudad de México, CDMX, Mexico" },
    { office: "Parque Duraznos", address: "Bosque de las Lomas, 11700 Mexico City, CDMX, Mexico" },
    { office: "Parque Las Antenas", address: "Periférico #3278, Col. La Esperanza. Del. Iztapalapa. CDMX CP 09910" },
    { office: "Parque Lindavista", address: "Parque Lindavista, Colector 13, Magdalena de las Salinas, Mexico City, CDMX, Mexico" },
    { office: "Parque Tepeyac", address: "Av. Ing. Eduardo Molina, #6730, Colonia Granjas Modernas Alcaldía Gustavo A. Madero, CDMX C.P. 07460." },
    { office: " Parque Tezontle", address: "Parque Tezontle, Avenida Canal de Tezontle, Área Federal Central de Abastos, Mexico City, CDMX, Mexico" },
    { office: "Parque Vía Vallejo", address: "Calz. Vallejo 1090, Sta Cruz de las Salinas, Azcapotzalco, 02300 Ciudad de México, CDMX" },
    { office: "Pasaje Ferreria", address: "Antigua Calz. de Guadalupe 251, Santa Catarina, Azcapotzalco, 02020 Ciudad de México, CDMX" },
    { office: "Patio Santa Fe", address: "Prolongacion Paseo de la Reforma 400, Santa Fe, Zedec Sta Fé, Álvaro Obregón, 01376 Ciudad de México" },
    { office: "Plaza Carso I", address: "C. Lago Zurich 245, Amp Granada, Miguel Hidalgo, 11529 Ciudad de México, CDMX" },
    { office: "Plaza Carso II", address: "C. Lago Zurich 219, Amp Granada, Miguel Hidalgo, 11529 Ciudad de México, CDMX" },
    { office: "Plaza Contreras", address: "Av. Contreras 300, San Jerónimo Lídice, 10200 Ciudad de México, CDMX, Mexico" },
    { office: "Plaza Cuicuilco", address: "Av. Insurgentes Sur 3500, Manantial Peña Pobre, Tlalpan, 14060 Ciudad de México, CDMX" },
    { office: "Plaza Insurgentes", address: "San Luis Potosí 214, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX" },
    { office: "Plaza Loreto", address: "Altamirano 46, Tizapán San Ángel, Jardines del Pedregal, Álvaro Obregón, 01000 Ciudad de México, CDMX" },
    { office: "Plaza Polanco", address: "José Luis Lagrange 11, Polanco, Polanco I Secc, Miguel Hidalgo, 11550 Ciudad de México, CDMX" },
    { office: "Plaza Tlatelolco", address: "Av. Ricardo Flores Magón, Guerrero, Cuauhtémoc, 06300 Ciudad de México, CDMX" },
    { office: "Portal Centenario Cuerpo 2", address: "Prolongación 5 de Mayo # 3021, Mina los Coyotes" },
    { office: "Portal Centenario Cuerpo1", address: "Prolongación 5 de Mayo 3121, Lomas de Tarango, Álvaro Obregón, 01620 Ciudad de México, CDMX" },
    { office: "Puerta Tlatelolco", address: "Norte Manuel González 95, San Simón Tolnáhuac, Cuauhtémoc, C.P. 06920, CDMX" },
    { office: "Reforma 215", address: "Av. Paseo de la Reforma 215, Lomas Virreyes, Lomas de Chapultepec, Miguel Hidalgo, 11000 Ciudad de México, CDMX" },
    { office: "Reforma 222", address: "Av. Paseo de la Reforma 222, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico " },
    { office: "Rio de la plata", address: "Rio de La Plata 6-479, Cuauhtémoc, 06500 Ciudad de México, CDMX" },
    { office: "Terraza Arenal", address: "Arenal 651, Santa María Tepepan, Xochimilco, 16020 Ciudad de México, CDMX" },
    { office: "Toreo Parque Central", address: "Perif. Blvd. Manuel Ávila Camacho 5, Lomas de Sotelo, Residencial Lomas de Sotelo, 53390 Naucalpan de Juárez, Méx." },
    { office: "Torre Aleph", address: "Avenida Insurgentes Sur 2475 Col. Barrio de Loreto C.P. 01090, Álvaro Obregón, CDMX, México." },
    { office: "Torre Manacar", address: "Av. de los Insurgentes Sur 1457, Insurgentes Mixcoac, Benito Juárez, 03920 Ciudad de México, CDMX" },
    { office: "Torre Virreyes", address: "Pedregal 24, Lomas - Virreyes, Molino del Rey, Miguel Hidalgo, 11040 Ciudad de México, CDMX" },
    { office: "Torres Lindavista", address: "Av. Miguel Othon de Mendizabal Ote. 343, Nueva Industrial Vallejo, Gustavo A Madero 07700 CDMX" },
    { office: "Vista Norte CC", address: "Av. Acueducto 650 Residencial Zacatenco Gustavo A. Madero 07369 CDMX" }
  ],
  "Coahuila": [
    { office: "Paseo Villalta", address: "Blvd. Luis Donaldo Colosio esq. Venustiano Carranza 25200 Saltillo, México Coahuila" },
    { office: "Torreon 505", address: "San Pedro de las Colonias - Torreón 505, Santa Bárbara, 27105 Torreón, Coah. Coahuila" }
  ],
  "Colima": [
    { office: "Zentralia", address: "Miguel De la Madrid Hurtado 301, Residencial Valle Dorado, 28018 Colima, Col." }
  ],
  "Estado de México": [
    { office: "Centro San Miguel", address: "Centro San Miguel, Avenida Huehuetoca, Ex Hacienda de San Miguel, Cuautitlán Izcalli, Estado de México, México" },
    { office: "City Shops Valle Dorado", address: "Perif. Blvd. Manuel Ávila Camacho 3130, Valle Dorado, 54020 Tlalnepantla de Baz, Méx." },
    { office: "La Cuspide", address: "Avenida Lomas Verdes 1200, Boulevares, 53126 Naucalpan de Juárez, Méx." },
    { office: "Luna Parc", address: "Av. 1ro de Mayo, C-34, Prima Unidad 7, Centro Urbano, Cuautitlán Izcalli, Edo. De México, C.P 54700" },
    { office: "Parque Interlomas", address: "Av. Jesús del Monte 41, Hacienda de las Palmas, 52764 Méx." },
    { office: "Paseo Interlomas", address: "Paseo interlomas, Vialidad de la Barranca, Interlomas, 52787" },
    { office: "Paseo Ventura", address: "Av Insurgentes 20, Fraccionamiento Las Americas, Las Américas, 55075 Ecatepec de Morelos, Méx." },
    { office: "Plaza Las Américas", address: "Plaza Las Américas, Calle Guadalupe Victoria 916, La Providencia, 52140 Metepec, Méx., Mexico" },
    { office: "Plaza Satélite", address: "Cto Centro Comercial 2251, Cd. Satélite, 53100 Naucalpan de Juárez, Méx." },
    { office: "Plaza Tlalne Fashion Mall", address: "Av Sor Juana Inés de La Cruz 280, San Lorenzo, 54033 Tlalnepantla de Baz, Méx." },
    { office: "Portal Tlalnepantla", address: "Av. Mario Colin #46, Colonia San Javier, 54030 Tlalnepantla de Baz" },
    { office: "Power Center Coacalco", address: "Avenida José López Portillo S/N Santa María Cuautepec, Av. José López Portillo, Calpulli del Valle, 55717 San Francisco Coacalco, Méx." },
    { office: "Premium Outlets Punta Norte", address: "Hacienda de Sierra Vieja lote 2, Fraccionamiento, 54769 Ciudad de México, Méx., Mexico" },
    { office: "Sentura Tlalnepantla", address: "Perif. Blvd. Manuel Ávila Camacho 1434, San Andres Atenco, 54040 Tlalnepantla de Baz, Méx." },
    { office: "Tecamac Power Center", address: "Carr. Federal Pachuca - Mexico 36.5, Hueyotenco, 55740 Tecámac de Felipe Villanueva, Méx." },
    { office: "Town Square Metepec", address: "Av. Ignacio Comonfort 1100, frente Parque Providencia, 52177 Providencia, Méx." },
    { office: "Walmart Alfredo Del Mazo", address: "Via Alfredo del Mazo 503, Jardines de Tlacopa, 50071 Toluca de Lerdo, Méx." },
    { office: "Walmart Tollocan", address: "Av. Paseo Tollocan 600, Sector Progreso, 50150 Toluca de Lerdo, Méx." }
  ],
  "Guanajuato": [
    { office: "CC Explora", address: "Francisco Villa 202, La Martinica, 37500" },
    { office: "Centro Comercial Altacia", address: "Blvd. Aeropuerto No. 104, Cerrito de Jerez, 37530 León, Gto., Mexico" },
    { office: "Centro Comercial Vía Alta", address: "Camino a Mancera 214, Las Glorias, 36766 Salamanca, Gto., Mexico" },
    { office: "Foro 4 Leon", address: "Blvd. Manuel J. Clouthier 304, Col. Foro 4 Leon, C.P. 37128, Leon, Guanajuato" },
    { office: "Plaza Cibeles", address: "Boulevard a Villas de Irapuato 1443, Colonia Ejido de Irapuato, Irapuato, Guanajuato, México." },
    { office: "Plaza Mayor", address: "Plaza Mayor, Centro Comercial, León, Gto., México" },
    { office: "Plaza Murano", address: "Avenida Murano #151 Col. Ejido Irapuato, Irapuato, Mexico" },
    { office: "Poliforum Leon", address: "Blvd. Adolfo López Mateos S/N 1er. Piso Poliforum, Oriental, 37510 León, Gto." }
  ],
  "Guerrero": [
    { office: "Isla Acapulco", address: "Boulevard de las Naciones No. 1813 Lt 17 & 16 Mza 5, Playa Dinamita, 39760 Acapulco de Juárez, Gro." }
  ],
  "Hidalgo": [
    { office: "Explanada Pachuca", address: "Autopista México - Pachuca #6201, San Antonio el Desmonte, 42083 Pachuca de Soto, Hgo." },
    { office: "Galerías Pachuca", address: "Camino Real de La Plata 102, Zona Plateada, 42083 Pachuca de Soto, Hgo." },
    { office: "Via Dorada", address: "Av. Ferrocarril Central #121, Zona Plateada Pachuca de Soto, Hgo. México. 42083" }
  ],
  "Jalisco": [
    { office: "Andares", address: "Blvrd Puerta de Hierro 4965, Puerta de Hierro, 45116 Zapopan, Jal." },
    { office: "Camara de Comercio", address: "Av. Ignacio L. Vallarta 4095, Don Bosco Vallarta, 45000 Zapopan, Jal." },
    { office: "Centro Médico Puerta de Hierro", address: "Av. Empresarios 150, Puerta de Hierro, 45116 Zapopan, Jal., México" },
    { office: "Ciudad Judicial", address: "Anillo Periférico Pte. Manuel Gómez Morin No. 7727, Fracc. Ciudad Judicial Federal, Bajío II, 45010 Zapopan, Jal., México" },
    { office: "Colmillo (Unicenter 3)", address: "Real de Acueducto 125, Puerta de Hierro, 45116 Zapopan, Jal., México" },
    { office: "Concentro", address: "Concentro, 45010 Zapopan, Jal., Mexico" },
    { office: "Corporativo Acueducto/Andares Acueducto", address: "Av. Acueducto 4851, Puerta de Hierro, 45116 Zapopan, Jal., Mexico" },
    { office: "Corporativo Diamante", address: "Av. Acueducto 6075A, Puerta de Hierro, 45116 Zapopan, Jal." },
    { office: "Corporativo Naciones Unidas", address: "Av Naciones Unidas 6780, Loma Real, 45129 Zapopan, Jalisco" },
    { office: "El Manantial", address: "Av. Adolfo López Mateos Sur 5560, El Manantial, 45645 Los Gavilanes, Jal." },
    { office: "Espacio Minerva", address: "Av. Ignacio L. Vallarta 3298, Vallarta Nte., 44690 Guadalajara, Jal., Mexico" },
    { office: "Expo Guadalajara", address: "Av. Mariano Otero #1499 CP.44550, Verde Valle, 44550 Guadalajara, Jal." },
    { office: "Gran Plaza Fashion Mall", address: "Vallarta No. 3959, 45049 ZAPOPAN, JALISCO" },
    { office: "Hospital Country 2000", address: "Av. Cvln. Jorge Álvarez del Castillo 1542, Chapultepec Country, 44620 Guadalajara, Jal., Mexico" },
    { office: "Hospital Puerta de Hierro Sur", address: "Av. Adolfo López Mateos Sur #1401, La Tijera, 45640 San Pedro Tlaquepaque, Jal., Mexico" },
    { office: "Hotel Hard Rock Guadalajara", address: "Lázaro Cárdenas 4474, Guadalajara, Jal" },
    { office: "La Gourmetería", address: "Av. Adolfo López Mateos Sur 1710, Santa Isabel, El Palomar, 45645 Palomar, Jal., México" },
    { office: "La Perla", address: "Av Mariano Otero 3000, Jardines Plaza del Sol, 45050 Guadalajara, Jal." },
    { office: "Lobby33", address: "Av. Patria 1891, Puerta de Hierro, 45116 Zapopan, Jal., Mexico" },
    { office: "Magisterio", address: "C. Magisterio 1155, Observatorio, 44266 Guadalajara, Jal." },
    { office: "Metrocentro", address: "Av. Adolfo López Mateos Sur 3333, Victoria, 45089 Zapopan, Jal., Mexico" },
    { office: "Midtown Jalisco", address: "Av Adolfo López Mateos,Nte 2405, Italia Providencia, 44648, Guadalajara, Jal." },
    { office: "PALCCO", address: "Palcco, Avenida Central Guillermo Gonzalez Camarena, Poniente, Zapopan, Jalisco, México" },
    { office: "Parques Guadalajara Comercial", address: "Av. Dr. Roberto Michel 1003, esquina Salvador López Chávez,Frente al Parque González Gallo, 44790 Guadalajara, Jal., Mexico" },
    { office: "Patria 888 <> Vivo47", address: "Av. Patria 888, 45110 Zapopan, Jal." },
    { office: "Plaza Las Villas", address: "Av. Adolfo López Mateos Sur 1450, El Palomar, 45640 San Agustín, Jal., Mexico" },
    { office: "Plaza Marina", address: "Av. Francisco Medina Ascencio S/N, Marina Vallarta, 48335 Puerto Vallarta, Jal., Mexico" },
    { office: "Punto Patrimonio / Pablo Neruda 2828", address: "Av Pablo Neruda 2828, Providencia 4a. Secc, 44630 Guadalajara, Jal., Mexico" },
    { office: "Punto Sao Paulo", address: "Avenida de las Américas 1545, Providencia, 44630 Guadalajara, Jal., México" },
    { office: "Punto Sur", address: "Av. Punto Sur, 45645 Los Gavilanes, Jal., Mexico" },
    { office: "Real Center", address: "Av Sta Margarita 3600, Poniente, 45136 Zapopan, Jal., Mexico" },
    { office: "Refugio", address: "C. Florida 188, Centro, 45500 San Pedro Tlaquepaque, Jalisco" },
    { office: "Sania", address: "Av. Ignacio L. Vallarta 3300, Vallarta Nte., 44690 Guadalajara, Jal., México" },
    { office: "Tapatio (San Juan de Dios)", address: "Dionisio Rodríguez #121  Colonia San Juan de Dios  Domicilio estacionamiento el tapatio" },
    { office: "TechParc", address: "45080 San Pedro Tlaquepaque, Jal., Mexico" },
    { office: "The Landmark", address: "Av. Patria 188, Puerta de Hierro, 45116 Zapopan, Jal., Mexico" },
    { office: "Torre Mil 500", address: "Av. de las Américas 1500, Country Club, 44610 Guadalajara, Jal., Mexico" },
    { office: "Torre Niba", address: "Av. de las Américas 1462, Country Club, 44610 Guadalajara, Jal." },
    { office: "Unicenter", address: "Real de Acueducto 125, Puerta de Hierro, 45116 Zapopan, Jal., México" },
    { office: "Urban Center GDL", address: "Av. Adolfo López Mateos Sur 7000, La Rioja, Los Gavilanes, 45640 Los Gavilanes, Jal." },
    { office: "Zapopan (Plaza de las Américas Juan Pablo II)", address: "Calle Emiliano Zapata 254 Zapopan Centro 45100 Zapopan, JAL México" }
  ],
  "Michoacán": [
    { office: "Paseo Altozano", address: "Av Montaña Monarca 1000, 58090 Morelia, Mich." },
  ],
  "Morelos": [
    { office: "Atrios", address: "Autopista Cuautla-Oaxtepec Km 31.900 Tierra Larga, 62757 Cuautla, Mor." },
    { office: "Averanda", address: "Km 87.5 Carretera México-Acapulco Col. Flores Magón, Cuernavaca, Morelos." },
    { office: "Forum Cuernavaca", address: "Calle Jacarandas 103, Ricardo Flores Magon, 62370 Cuernavaca, Mor." },
  ],
  "Nuevo León": [
    { office: "Chroma San Pedro", address: "Av. Ricardo Margain Zozaya 315, Santa Engracia, 66267 Monterrey, N.L." },
    { office: "Fashion Drive", address: "Av. Diego Rivera 1000, Zona San Agustín, 66260 San Pedro Garza García, N.L." },
    { office: "Nuevo Sur", address: "Av. Revolución 2703, Ladrillera, 64830 Monterrey, N.L." },
    { office: "Sendero la Fe", address: "Miguel Aleman esq con Av. del Télefono, Av. Miguel Alemán, Kalos, 66603 Cd Apodaca, N.L." }
  ],
  "Puebla": [
    { office: "Explanada Puebla", address: "Explanada Puebla, Calle Ignacio Allende, Santiago Momoxpan, Alvaro Obregón, San Andrés Cholula, Puebla, Mexico" },
    { office: "Parque Puebla", address: "Calz. Ignacio Zaragoza N°410, Corredor Industrial la Ciénega, 72220 Puebla, Pue." },
    { office: "Sam's La Noria", address: "Cto Juan Pablo II 1920, Reserva Territorial Atlixcáyotl, La Noria, 72410 Puebla, Pue." }
  ],
  "Querétaro": [
    { office: "Antea", address: "Carretera San Luis Potosí-Querétaro Ejido El Salitre, San Luis Potosí - Santiago de Querétaro, 76127 Santiago de Querétaro, Qro., Mexico" },
    { office: "Paseo Querétaro", address: "Anillo Vial Fray Junípero Serra 7901, La Purísima, 76146 Santiago de Querétaro, Qro." },
    { office: "Puerta La Victoria", address: "Unnamed Road, zona dos extendida, Mercurio, 76040 Santiago de Querétaro, Qro." },
  ],
  "Quintana Roo": [
    { office: "La Isla Entertainment Village", address: "Punta Nizuc - Cancún 1835, La Isla, Zona Hotelera, 77500 Cancún, Q.R., México" },
    { office: "La Isla Shopping Village", address: "5 Lt 18-10, Blvd. Kukulcan km 12.5, Zona Hotelera, 77500 Cancún, Q.R." },
    { office: "Marina Puerto Cancún", address: "Boulevard Kukulcán Km 1.5, Zona Hotelera, 77500 Cancún, Q.R., Mexico" },
    { office: "Plaza Las Americas Cancun", address: "Av. Tulum Sur, 7, 77500 Cancún, Q.R." }
  ],
  "San Luis Potosí": [
    { office: "Edificio Ipiña", address: "Av Venustiano Carranza 316, Centro histórico, 78000 San Luis Potosí, S.L.P." },
    { office: "El Dorado San Luis", address: "Nereo Rodríguez Barragán 450, Del Valle C.P. 78200 San Luis Potosí" }
  ],
  "El Dorado San Luis": [
    { office: "Ceiba", address: "BOULEVARD PEDRO INFANTE 3000 EDIFICIO B PISO 1, CODIGO POSTAL 80100, CULIACAN,SINALOA, MÉXICO" },
    { office: "Edificio el Dorado", address: "Blvd. Francisco I. Madero 39 poniente, Primer Cuadro, 80000 Culiacán Rosales, Sin." },
    { office: "Fórum Culiacán", address: "Jose, Diego Valadés Ríos 1676, Desarrollo Urbano Tres Ríos, 80000 Culiacán Rosales, Sin." },
    { office: "Paseo San Isidro", address: "Boulevard de los Ganaderos 1787, Fracc, Lomas de San Isidro 80197, 80197 Culiacán Rosales, Sin." },
    { office: "Plaza Congreso", address: "Boulevard Pedro Infante, Jardines 4120-Pte, Desarrollo Urbano Tres Ríos, 80100 Culiacán Rosales, Sin." }
  ],
  "Sonora": [
    { office: "Galerias Mall Sonora", address: "Blvd Cultura 55 Ote, Proyecto Rio Sonora Hermosillo XXI, 83280 Hermosillo, Son." },
    { office: "Torre Medica CIMA", address: "Av. P.º Rio San Miguel No 49, Proyecto Rio Sonora Hermosillo XXI, C.P. 83270, Sonora." },
  ],
  "Tamaulipas": [
    { office: "Altama City Center", address: "Av. Ejército Mexicano 706, Colonias Primavera, 89130 Tampico, Tamps., Mexico" },
  ],
  "Veracruz": [
    { office: "Aquarium Puerto de Veracruz", address: "Blvd. Manuel Ávila Camacho S/n, Ricardo Flores Magón, 91900 Veracruz, Ver., Mexico" },
    { office: "El Dorado Veracruz", address: "Boca del Río, Ver., Mexico" },
    { office: "Forum Coatzacoalcos", address: "Av. Universidad Km 8 y quinta etapa del malecón costero Coatzacoalcos, Veracruz" },
    { office: "Las Américas Centro Comercial", address: "Av Las Américas 3495, Ylang Ylang, 94298 Boca del Río, Ver., Mexico" },
    { office: "Plaza Crystal", address: "Plaza Crystal Xalapa | DAMS Car Audio, Calle Lázaro Cárdenas, Francisco Villa, Xalapa, Ver., Mexico" },
    { office: "Urban Center Boca del Rio", address: "Calzada Juan Pablo II #1728 Esquina, Calz. Lázaro Cárdenas, Galaxia, 94294 Boca del Río, Ver." }
  ]
  // You can add more states and municipalities here
};

// Function to generate and display office options for the selected state
// function showOptions(blockId, selectedState) {
//   var officeList = document.getElementById(blockId).querySelector(".ctn_ul");
//   var isDisplaying = officeList.style.display === "block";

//   // Hide all dropdowns first
//   var allLists = document.querySelectorAll(".ctn_ul");
//   for (var i = 0; i < allLists.length; i++) {
//     allLists[i].style.display = "none";
//   }

//   // Toggle the visibility of office options when clicking the button
//   if (!isDisplaying) {
//     officeList.innerHTML = ""; // Clear the list to avoid duplicates

//     // Generate office options for the selected state
//     var offices = stateOffices[selectedState];
//     for (var i = 0; i < offices.length; i++) {
//       var office = offices[i].office;
//       var address = offices[i].address;
//       var li = document.createElement("li");
//       li.textContent = office;
//       // Use a closure to maintain the correct value of 'address' for each office
//       li.onclick = (function (address) {
//         return function () {
//           getAddress(this, address);
//         };
//       })(address);
//       officeList.appendChild(li);
//     }

//     // Show the dropdown
//     officeList.style.display = "block";
//   }
// }

function showOptions(blockId, selectedState) {
    var officeList = document.getElementById(blockId).querySelector(".ctn_ul");
    var isDisplaying = officeList.style.display === "block";
  
    // Hide all dropdowns first
    var allLists = document.querySelectorAll(".ctn_ul");
    var allListsH3 = document.querySelectorAll("h3");
    for (var i = 0; i < allLists.length; i++) {
      allLists[i].style.display = "none";
      allListsH3[i].style.color = "black";

    }
  
    // Toggle the visibility of office options when clicking the button
    if (!isDisplaying) {
      officeList.innerHTML = ""; // Clear the list to avoid duplicates
      //change select color
      const divElement = document.getElementById(blockId);
      const h3Element = divElement.querySelector("h3");
      h3Element.style.color = "#00AEB4"
      console.log("h3Element",h3Element.textContent);
      // Generate office options for the selected state
      var offices = stateOffices[selectedState];
      for (var i = 0; i < offices.length; i++) {
        var office = offices[i].office;
        var address = offices[i].address;
        var li = document.createElement("li");
        li.textContent = office;
        // Use a closure to maintain the correct value of 'address' for each office
        li.onclick = (function (address) {
          return function () {
            getAddress(this, address);
          };
        })(address);
        officeList.appendChild(li);
      }
  
      // Show the dropdown
      officeList.style.display = "block";
    }
    
  }
  

  function getAddress(liElement, address) {
    
    office = liElement.innerHTML
    idInput.value = address;
    updateMapWithAddress(address);
    

  }
  

  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let labelIndex = 0;
  

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps"); 
  map = new Map(document.getElementById("map"), {
    center: coordinates,
    zoom: 17,
  });

  const placeTag = document.createElement("div");
  placeTag.className = "price-tag";
  const markerOptions = {
      position: coordinates,
      // icon: "./assets/marker.png",
      icon: {
        url: "./assets/marker.png", // Ruta a la imagen personalizada
        labelOrigin: new google.maps.Point(10, -10), // Ajustar la posición del texto (horizontal, vertical)
      },
      content: placeTag,
     
    //   animation: google.maps.Animation.BOUNCE
  }

  marker = new google.maps.Marker(markerOptions);

  marker.setMap(map)
  

 
  initAutoCompleted()

}

function updateMapWithAddress(address) {
    if (typeof google === "undefined" || typeof google.maps === "undefined") {
      return;
    }
  
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: address }, function (results, status) {
      if (status === "OK") {
        var location = results[0].geometry.location;
        map.setCenter(location);
        marker.setPosition(location);
        marker.setLabel(office)
      } else {
        console.error("Geocode was not successful for the following reason:", status);
      }
    });
  }
  

  function initAutoCompleted() {
    autoComplete = new google.maps.places.Autocomplete(idInput);
    marker.setLabel(null)
    autoComplete.addListener("place_changed", function () {
      const place = autoComplete.getPlace();
      if (place && place.geometry) {
        updateMapWithAddress(place.formatted_address);
      }
    });
  }
  


// function initAutoCompleted(){

//     autoComplete = new google.maps.places.Autocomplete(idInput)
      
//     autoComplete.addListener("place_changed", function(){
//         const place = autoComplete.getPlace()
//         map.setCenter(place.geometry.location)
//         marker.setPosition(place.geometry.location)
//         // marker.title = office
//     })
// }



initMap();