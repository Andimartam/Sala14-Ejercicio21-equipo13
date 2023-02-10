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
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `comments` (`id`, `content`) VALUES
(1, 'Comment 1:  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sequi nulla necessitatibus qui! Quasi tenetur officiis aliquid dolorem delectus eveniet? Quis ipsa est qui voluptate dolor enim facilis iusto itaque in alias aut perspiciatis pariatur assumenda quod at magni ut nam error autem soluta deserunt, vel animi eius! Harum, error!');
INSERT INTO `comments` (`id`, `content`) VALUES
(2, 'Comment 2: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sequi nulla necessitatibus qui! Quasi tenetur officiis aliquid dolorem delectus eveniet? Quis ipsa est qui voluptate dolor enim facilis iusto itaque in alias aut perspiciatis pariatur assumenda quod at magni ut nam error autem soluta deserunt, vel animi eius! Harum, error!');
INSERT INTO `comments` (`id`, `content`) VALUES
(3, 'Comment 3: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sequi nulla necessitatibus qui! Quasi tenetur officiis aliquid dolorem delectus eveniet? Quis ipsa est qui voluptate dolor enim facilis iusto itaque in alias aut perspiciatis pariatur assumenda quod at magni ut nam error autem soluta deserunt, vel animi eius! Harum, error!');
INSERT INTO `comments` (`id`, `content`) VALUES
(4, 'Comment 4:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sequi nulla necessitatibus qui! Quasi tenetur officiis aliquid dolorem delectus eveniet? Quis ipsa est qui voluptate dolor enim facilis iusto itaque in alias aut perspiciatis pariatur assumenda quod at magni ut nam error autem soluta deserunt, vel animi eius! Harum, error!'),
(5, 'Comment 5:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sequi nulla necessitatibus qui! Quasi tenetur officiis aliquid dolorem delectus eveniet? Quis ipsa est qui voluptate dolor enim facilis iusto itaque in alias aut perspiciatis pariatur assumenda quod at magni ut nam error autem soluta deserunt, vel animi eius! Harum, error!'),
(6, 'Comment 6:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sequi nulla necessitatibus qui! Quasi tenetur officiis aliquid dolorem delectus eveniet? Quis ipsa est qui voluptate dolor enim facilis iusto itaque in alias aut perspiciatis pariatur assumenda quod at magni ut nam error autem soluta deserunt, vel animi eius! Harum, error!'),
(7, 'Comment 7:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sequi nulla necessitatibus qui! Quasi tenetur officiis aliquid dolorem delectus eveniet? Quis ipsa est qui voluptate dolor enim facilis iusto itaque in alias aut perspiciatis pariatur assumenda quod at magni ut nam error autem soluta deserunt, vel animi eius! Harum, error!');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;