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
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` blob,
  `create_date` datetime DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `articles` (`id`, `title`, `content`, `image`, `create_date`, `userId`) VALUES
(1, 'Los beneficios de la MALA alimentacion', '          Prueba luego de modularizar !! La buena alimentacion se basa en comer fruttas y verdudas .....Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam dolor, sit consequuntur temporibus eaque corrupti debitis maxime obcaecati molestiae. Nemo nihil doloribus, in nesciunt, explicabo sunt officia natus beatae dolor voluptatibus vero perferendis vel numquam fugiat, reprehenderit esse. Quia earum qui mollitia, aliquid obcaecati vitae praesentium in sunt nihil reprehenderit inventore repellendus consequatur magnam distinctio ipsam. Atque molestiae culpa deserunt voluptate. Non ex explicabo aliquid obcaecati quod deserunt ab exercitationem inventore, accusamus nulla placeat ipsam cumque sint dignissimos odio libero necessitatibus eius voluptatum iure culpa praesentium doloremque facere. Nulla perferendis minus nam illum corporis ut soluta similique, fugit quae!\r\n          ', '../img/homePhoto.jpg', NULL, 1);
INSERT INTO `articles` (`id`, `title`, `content`, `image`, `create_date`, `userId`) VALUES
(2, 'El ejercicio para mejorar la salud', 'Mejorar la salud en base al ejercicio, lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam dolor, sit consequuntur temporibus eaque corrupti debitis maxime obcaecati molestiae. Nemo nihil doloribus, in nesciunt, explicabo sunt officia natus beatae dolor voluptatibus vero perferendis vel numquam fugiat, reprehenderit esse. Quia earum qui mollitia, aliquid obcaecati vitae praesentium in sunt nihil reprehenderit inventore repellendus consequatur magnam distinctio ipsam. Atque molestiae culpa deserunt voluptate. Non ex explicabo aliquid obcaecati quod deserunt ab exercitationem inventore, accusamus nulla placeat ipsam cumque sint dignissimos odio libero necessitatibus eius voluptatum iure culpa praesentium doloremque facere. Nulla perferendis minus nam illum corporis ut soluta similique, fugit quae!', '../img/homePhoto.jpg', NULL, 2);
INSERT INTO `articles` (`id`, `title`, `content`, `image`, `create_date`, `userId`) VALUES
(3, 'Resultados del fin de semana', 'Este fin de semana jugaron todos los equipos de la liga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam dolor, sit consequuntur temporibus eaque corrupti debitis maxime obcaecati molestiae. Nemo nihil doloribus, in nesciunt, explicabo sunt officia natus beatae dolor voluptatibus vero perferendis vel numquam fugiat, reprehenderit esse. Quia earum qui mollitia, aliquid obcaecati vitae praesentium in sunt nihil reprehenderit inventore repellendus consequatur magnam distinctio ipsam. Atque molestiae culpa deserunt voluptate. Non ex explicabo aliquid obcaecati quod deserunt ab exercitationem inventore, accusamus nulla placeat ipsam cumque sint dignissimos odio libero necessitatibus eius voluptatum iure culpa praesentium doloremque facere. Nulla perferendis minus nam illum corporis ut soluta similique, fugit quae!', '../img/homePhoto.jpg', NULL, 1);
INSERT INTO `articles` (`id`, `title`, `content`, `image`, `create_date`, `userId`) VALUES
(5, 'Es posible comprar la luna ?', 'De momento no lo es, pero tal ves en un futuro si.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam dolor, sit consequuntur temporibus eaque corrupti debitis maxime obcaecati molestiae. Nemo nihil doloribus, in nesciunt, explicabo sunt officia natus beatae dolor voluptatibus vero perferendis vel numquam fugiat, reprehenderit esse. Quia earum qui mollitia, aliquid obcaecati vitae praesentium in sunt nihil reprehenderit inventore repellendus consequatur magnam distinctio ipsam. Atque molestiae culpa deserunt voluptate. Non ex explicabo aliquid obcaecati quod deserunt ab exercitationem inventore, accusamus nulla placeat ipsam cumque sint dignissimos odio libero necessitatibus eius voluptatum iure culpa praesentium doloremque facere. Nulla perferendis minus nam illum corporis ut soluta similique, fugit quae!', '../img/homePhoto.jpg', NULL, 3),
(7, 'Probando por tercera vez', 'Bla bla bla           ', '../img/homePhoto.jpg', NULL, 1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;