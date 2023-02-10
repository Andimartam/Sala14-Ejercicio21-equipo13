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
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` blob,
  `create_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `articles` (`id`, `title`, `content`, `image`, `create_date`) VALUES
(1, 'Nombre articulo 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam dolor, sit consequuntur temporibus eaque corrupti debitis maxime obcaecati molestiae. Nemo nihil doloribus, in nesciunt, explicabo sunt officia natus beatae dolor voluptatibus vero perferendis vel numquam fugiat, reprehenderit esse. Quia earum qui mollitia, aliquid obcaecati vitae praesentium in sunt nihil reprehenderit inventore repellendus consequatur magnam distinctio ipsam. Atque molestiae culpa deserunt voluptate. Non ex explicabo aliquid obcaecati quod deserunt ab exercitationem inventore, accusamus nulla placeat ipsam cumque sint dignissimos odio libero necessitatibus eius voluptatum iure culpa praesentium doloremque facere. Nulla perferendis minus nam illum corporis ut soluta similique, fugit quae!', NULL, NULL);
INSERT INTO `articles` (`id`, `title`, `content`, `image`, `create_date`) VALUES
(2, 'Nombre articulo 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam dolor, sit consequuntur temporibus eaque corrupti debitis maxime obcaecati molestiae. Nemo nihil doloribus, in nesciunt, explicabo sunt officia natus beatae dolor voluptatibus vero perferendis vel numquam fugiat, reprehenderit esse. Quia earum qui mollitia, aliquid obcaecati vitae praesentium in sunt nihil reprehenderit inventore repellendus consequatur magnam distinctio ipsam. Atque molestiae culpa deserunt voluptate. Non ex explicabo aliquid obcaecati quod deserunt ab exercitationem inventore, accusamus nulla placeat ipsam cumque sint dignissimos odio libero necessitatibus eius voluptatum iure culpa praesentium doloremque facere. Nulla perferendis minus nam illum corporis ut soluta similique, fugit quae!', NULL, NULL);
INSERT INTO `articles` (`id`, `title`, `content`, `image`, `create_date`) VALUES
(3, 'Nombre articulo 3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam dolor, sit consequuntur temporibus eaque corrupti debitis maxime obcaecati molestiae. Nemo nihil doloribus, in nesciunt, explicabo sunt officia natus beatae dolor voluptatibus vero perferendis vel numquam fugiat, reprehenderit esse. Quia earum qui mollitia, aliquid obcaecati vitae praesentium in sunt nihil reprehenderit inventore repellendus consequatur magnam distinctio ipsam. Atque molestiae culpa deserunt voluptate. Non ex explicabo aliquid obcaecati quod deserunt ab exercitationem inventore, accusamus nulla placeat ipsam cumque sint dignissimos odio libero necessitatibus eius voluptatum iure culpa praesentium doloremque facere. Nulla perferendis minus nam illum corporis ut soluta similique, fugit quae!', NULL, NULL);
INSERT INTO `articles` (`id`, `title`, `content`, `image`, `create_date`) VALUES
(4, 'Nombre articulo 4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam dolor, sit consequuntur temporibus eaque corrupti debitis maxime obcaecati molestiae. Nemo nihil doloribus, in nesciunt, explicabo sunt officia natus beatae dolor voluptatibus vero perferendis vel numquam fugiat, reprehenderit esse. Quia earum qui mollitia, aliquid obcaecati vitae praesentium in sunt nihil reprehenderit inventore repellendus consequatur magnam distinctio ipsam. Atque molestiae culpa deserunt voluptate. Non ex explicabo aliquid obcaecati quod deserunt ab exercitationem inventore, accusamus nulla placeat ipsam cumque sint dignissimos odio libero necessitatibus eius voluptatum iure culpa praesentium doloremque facere. Nulla perferendis minus nam illum corporis ut soluta similique, fugit quae!', NULL, NULL),
(5, 'Nombre articulo 5', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam dolor, sit consequuntur temporibus eaque corrupti debitis maxime obcaecati molestiae. Nemo nihil doloribus, in nesciunt, explicabo sunt officia natus beatae dolor voluptatibus vero perferendis vel numquam fugiat, reprehenderit esse. Quia earum qui mollitia, aliquid obcaecati vitae praesentium in sunt nihil reprehenderit inventore repellendus consequatur magnam distinctio ipsam. Atque molestiae culpa deserunt voluptate. Non ex explicabo aliquid obcaecati quod deserunt ab exercitationem inventore, accusamus nulla placeat ipsam cumque sint dignissimos odio libero necessitatibus eius voluptatum iure culpa praesentium doloremque facere. Nulla perferendis minus nam illum corporis ut soluta similique, fugit quae!', NULL, NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;