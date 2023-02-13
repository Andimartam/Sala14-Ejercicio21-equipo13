/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `content` text COLLATE utf8mb4_general_ci NOT NULL,
  `image` blob,
  `createdAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `articles` (`id`, `title`, `content`, `image`, `createdAt`, `userId`) VALUES
(1, 'Grúa cayó sobre una mujer y causó su muerte en zona del Nuevocentro; hay dos heridos', '          Una mujer de 49 años falleció en la mañana de este lunes tras caerle encima una grúa en la esquina de Luis Alberto de Herrera y bulevar Artigas, frente al shopping Nuevocentro, informaron fuentes de Ministerio del Interior a Montevideo Portal. \r\n\r\nEl colapso se produjo desde aproximadamente 20 metros. La mujer quedó atrapada debajo de la máquina, mientras que los dos operarios que trabajaban en el canasto de la grúa, un hombre de 45 y un joven de 19 años, resultaron con politraumatismos varios, sin pérdida de conocimiento, y fueron asistidos en el lugar por personal médico de Bomberos y trasladados al Sanatorio del Banco de Seguros del Estado.', '7ef9f6e13a8c0ae778a570300.jpg', '2023-02-13 17:38:10', 1);
INSERT INTO `articles` (`id`, `title`, `content`, `image`, `createdAt`, `userId`) VALUES
(2, '¿Cuáles son las selecciones clasificadas al Mundial sub-20 y cuándo es el sorteo?', 'Por la Concacaf clasificaron Estados Unidos como campeón, Guatemala, Honduras y República Dominicana, que llegó a la final y por primera vez en su historia disputará un certamen organizado por la FIFA en cualquier categoría.\r\n\r\nIndonesia ya tiene la clasificación por ser el país anfitrión, y por Oceanía clasificaron Nueva Zelanda como campeón y Fiyi en segundo lugar.\r\n\r\nLos que faltan: 28 países para ocho cupos\r\n\r\nLos países africanos que están en carrera y que a partir del domingo que viene disputarán la etapa final, para la que hubo una eliminatoria sub-19 el año pasado, son Egipto (anfitrión), Uganda, Gambia, Túnez, República Centroafricana, Mozambique, Nigeria, Zambia, Senegal, Benín, Congo y Sudán del Sur. Quedaron afuera Ghana y Camerún, entre otros.', 'cdb421014cca81c615696e000.jpg', '2023-02-13 17:40:39', 2);
INSERT INTO `articles` (`id`, `title`, `content`, `image`, `createdAt`, `userId`) VALUES
(3, 'PARA MÁS TRANQUILIDAD', '          El reemplazo frecuente de electrodomésticos no solo cuesta tiempo y energía, sino que también produce gran cantidad de desechos electrónicos. Samsung se ha propuesto combatir estos problemas ambientales con soluciones sostenibles basadas en la durabilidad. Por ello, ofrece soporte técnico por 20 años en piezas claves como el compresor de las refrigeradoras y el motor de las lavadoras que cuentan con tecnología Digital Inverter.\r\n\r\n“Todas las personas que hayan adquirido alguno de los modelos seleccionados con posterioridad al 1 de noviembre pueden gozar de dicho beneficio; y de la misma manera que aplicaba la garantía de 10 años en el motor o compresor, según el caso, la nueva garantía de 20 años aplica únicamente a dicha pieza y la misma no cubre mano de obra, desinstalación, transporte, instalación, materiales extra ni piezas ni partes adicionales”, aclaró Javier Sanchez, director comercial de Línea Blanca de Samsung Electronics para la región. “Adicionalmente, es fundamental presentar la factura original y ser atendido por uno de nuestros centros de servicio autorizados”, puntualizó.\r\n\r\nPara más información y validación de la garantía, las personas pueden consultar en el sitio web de la compañía. ', 'cdb421014cca81c615696e001.jpg', '2023-02-13 17:41:29', 3);
INSERT INTO `articles` (`id`, `title`, `content`, `image`, `createdAt`, `userId`) VALUES
(4, 'YENDO A LA PREVENTA', '          Samsung Electronics Co Ltd. ha presentado el 1 de febrero el Galaxy S23 Ultra, el Galaxy S23+ y el Galaxy S23, que marcan una nueva era en la experiencia de los mejores teléfonos Samsung Galaxy.\r\n\r\nLa destacada cámara de Samsung Galaxy ofrece a los usuarios más libertad para explorar su creatividad, como capturar videos Nightography realmente cinematográficos con una IA transformadora.\r\n\r\nLa “Plataforma móvil Snapdragon® 8 Gen 2 para Galaxy” da rienda suelta a una experiencia premium, que incluye una IA revolucionaria, una experiencia de juego móvil preparada para el futuro y un juego potente y sostenido con los gráficos móviles que prometen ser los más rápidos del mundo.\r\n\r\nEn el modelo Galaxy S23 Ultra, el S Pen integrado que muchos usuarios de Samsung Galaxy conocen y adoran desde hace tiempo ofrece más posibilidades para la productividad, la toma de notas, los pasatiempos y mucho más.\r\n\r\n“La tecnología más impactante se mide no solo por lo que permite a la gente hoy, sino también por cómo contribuye a un futuro mejor”, dijo TM Roh, presidente y director de Mobile eXperience Business en Samsung Electronics. “Galaxy S23 Ultra y toda la gama de la serie Galaxy S son los nuevos abanderados de una experiencia de smartphone premium de confianza. Estamos redefiniendo el máximo rendimiento fusionando potencia e innovación duradera en dispositivos que tienen un menor impacto medioambiental”, agregó.\r\n\r\nUna cámara con la mayor cantidad de megapíxeles y amplios controles creativos, del día a la noche\r\n\r\nGalaxy S23 Ultra tiene como objetivo ser más fácil para cualquier nivel de fotógrafo capturar contenido fenomenal. La compañía sostuvo que ofrece el sistema de cámara más avanzado de Samsung Galaxy, adaptado a casi cualquier condición de iluminación y diseñado para ofrecer los mejores detalles.', 'cdb421014cca81c615696e002.jpeg', '2023-02-13 17:42:01', 1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;