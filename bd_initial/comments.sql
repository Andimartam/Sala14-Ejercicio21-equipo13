/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8mb4_general_ci NOT NULL,
  `userId` int DEFAULT NULL,
  `articleId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `articleId` (`articleId`),
  CONSTRAINT `comments_ibfk_7` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_8` FOREIGN KEY (`articleId`) REFERENCES `articles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `comments` (`id`, `content`, `userId`, `articleId`) VALUES
(1, 'Me gusta mucho este post ! ', 1, 1);
INSERT INTO `comments` (`id`, `content`, `userId`, `articleId`) VALUES
(2, 'Muy interesante de verdad ! ', 3, 1);
INSERT INTO `comments` (`id`, `content`, `userId`, `articleId`) VALUES
(3, 'Espero que Uruguay gane el mundial ! ', 2, 2);
INSERT INTO `comments` (`id`, `content`, `userId`, `articleId`) VALUES
(4, 'Muy bien los gurises ! ', 1, 2),
(5, 'Necesito esta nueva linea !!!!', 3, 3),
(6, 'Esperando ya que salga este celular ! necesito uno nuevo ', 1, 4),
(7, 'Cada cuanto se tiene que cambiar el celular ?', 3, 4);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;