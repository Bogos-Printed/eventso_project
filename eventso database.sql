-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 14 juin 2024 à 23:33
-- Version du serveur : 8.0.36-0ubuntu0.22.04.1
-- Version de PHP : 8.1.2-1ubuntu2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `eventso`
--

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

CREATE TABLE `events` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `location` text NOT NULL,
  `date` datetime NOT NULL,
  `category` enum('Celebration','Festivity','Activity','Rite','Entertainment','Other') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `events`
--

INSERT INTO `events` (`id`, `user_id`, `image`, `title`, `description`, `location`, `date`, `category`) VALUES
(1, 1, 'https://images.nightcafe.studio/jobs/naI3MDWkpm81FCknHmeL/naI3MDWkpm81FCknHmeL--1--z56mq.jpg?tr=w-1600,c-at_max', 'Birthday', 'Today we celebrate Bill\'s birthday and the ascension of his kin. There will be plenty of people and a time of prayer to our lord Gl\'r\'Usher', 'mount Glor', '2024-05-23 23:30:00', 'Celebration'),
(3, 2, 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/12735475-72e2-49f1-82c6-8528ad70bd29/94d14545-b03c-442b-8c53-8f07383b3854.png', 'Sacrifice', 'Let us celebrate the ascension of the hiker named \'Dave\'. Praise be O\'lahr !', 'Big avenue', '2024-05-29 22:00:00', 'Festivity'),
(5, 1, 'https://images.nightcafe.studio/jobs/nV7F2yKY02wbuQvbW7ch/nV7F2yKY02wbuQvbW7ch--2--etbl8.jpg?tr=w-1600,c-at_max', 'Painting the gods', 'Come join us on our activity of painting our gods. Prolong the respect of the old code and the worship of the mighty beyonder', 'Frank\'s Street Avenue', '2024-07-07 14:00:00', 'Activity'),
(10, 16, 'https://images.nightcafe.studio/jobs/ChasVBwIpYyt4DUuI54v/ChasVBwIpYyt4DUuI54v--1--zsjng.jpg?tr=w-1600,c-at_max', 'Culture of the gods', 'Come join us culture yourself by reading the text on our gods.', '98 Ooorr Street', '2024-07-28 13:30:00', 'Activity'),
(11, 15, 'https://media.istockphoto.com/id/832991434/photo/charming-young-woman-undergoing-electroencephalography.jpg?s=612x612&w=0&k=20&c=o8AFvXuCBIvNlQgG4xI2hKKDx13rChshoAOykhEVU-8=', 'Digital Acension of Martha', 'We are going to test out our new machine to send Martha to digital ascension. Come see this once in a lifetime event !', 'Sphore Labs, 13 Avenue of M\'Orll', '2024-10-31 22:35:00', 'Other'),
(15, 16, 'https://img.freepik.com/premium-photo/red-angry-monster-generative-ai_91756-2944.jpg', 'DELETE ME', 'DO IT !!!! DELETE ME !!!!! PRESS THE GOD DAMN BUTTON !!!!', 'Here and Now !', '2024-06-03 15:00:00', 'Other'),
(17, 15, 'https://img.freepik.com/premium-photo/slim-grey-alien-with-black-eyes-smiles-while-taking-selfie-front-white-house_846485-39063.jpg', 'Drugs with Aliens', 'I found this stash of fun stuff, wanna try it with a resident of outer space ?', 'Rosevelt Park, bench in the middle of the trees', '2024-06-21 16:19:00', 'Activity'),
(18, 16, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqKvixAyVy3ryt_aNW2MGQjBW8yETcTMc3w1JxZ_n1bP2QTEjpwg1-odoUznY_5vKzyk&usqp=CAU', 'Group search', 'Harvey has been missing for a while day,we believe the Rorg has him.', 'Red wood Forest', '2024-07-03 10:30:00', 'Other'),
(19, 20, 'https://img.freepik.com/premium-photo/red-angry-monster-generative-ai_91756-2944.jpg', 'wwawwawaawwaaawwawwawaw', 'wawawawawawawawawawa', 'wawwawaw', '2024-06-13 20:16:00', 'Other'),
(29, 16, 'https://img.freepik.com/premium-photo/alien-chef-preparing-juicy-burgers-french-fries-hot-grill-created-with-generative-ai_124507-218706.jpg', 'Barbecue with the Gl\'r\'ods', 'Come join us to eat some human and alien food whilst sharing and learning a new culture.', '9852 bepis Av', '2024-06-30 13:00:00', 'Activity'),
(40, 16, 'https://t4.ftcdn.net/jpg/02/51/00/15/360_F_251001540_P8oe2YQ5v5dhZnrN5SFwXgLS0NMZXyNn.jpg', 'I forgot to put an image', 'oops', 'my bad', '5550-07-05 05:55:00', 'Other');

-- --------------------------------------------------------

--
-- Structure de la table `event_group`
--

CREATE TABLE `event_group` (
  `id` int NOT NULL,
  `event_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `event_group`
--

INSERT INTO `event_group` (`id`, `event_id`) VALUES
(1, 1),
(2, 3),
(5, 3),
(4, 5),
(8, 10),
(9, 11),
(20, 15),
(22, 15),
(23, 15),
(24, 15),
(25, 15),
(26, 15),
(27, 15),
(28, 15),
(29, 15),
(30, 15),
(19, 18);

-- --------------------------------------------------------

--
-- Structure de la table `models`
--

CREATE TABLE `models` (
  `id` int NOT NULL,
  `image` text NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `category` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `models`
--

INSERT INTO `models` (`id`, `image`, `title`, `description`, `category`) VALUES
(1, 'https://st5.depositphotos.com/11866110/65380/i/450/depositphotos_653802404-stock-photo-stunning-close-image-wedding-rings.jpg', 'Wedding', 'Come join our wedding', 'Rite'),
(2, 'https://www.shutterstock.com/image-photo/group-nine-scary-figures-hooded-600nw-1834026397.jpg', 'Sacrifice', 'We give to be bliss', 'Rite');

-- --------------------------------------------------------

--
-- Structure de la table `ressources`
--

CREATE TABLE `ressources` (
  `id` int NOT NULL,
  `name` text NOT NULL,
  `type` text NOT NULL,
  `quantity` int NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `id_session` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `id_session`, `username`, `firstname`, `lastname`, `email`, `password`) VALUES
(1, '', 'macha', 'james', 'haul', 'j.haul@mail.com', 'jhaull'),
(2, '', 'pants', 'luke', 'major', 'l.major@mail.com', 'lmajor'),
(3, '', 'godfull', 'Patrick', 'Hueng', 'p.hueng@mail.com', 'phueng'),
(15, '2e5hjgcp6gb3cvo1au905qq18n', 'kingWa', 'wa', 'warwa', 'wa.warwa@mail.com', '$2y$10$.tum9t9Jypptxk2Uwm/Jue5iAXajLYPOFIOKQg7nHHrdODh5KiIZK'),
(16, 'n8oop0domrpf1u3vm0rt4b2td4', 'OnlyMartin', 'Martin', 'Martin', 'm.artin@mail.com', '$2y$10$lNnFV9AID7BkH1PyfPqnQecjG0InwmTKd9/LanfA7FZONpD7x3mZG'),
(20, 'u52tntmnaefmjevu4gqrcqj559', 'MicroWave', 'Micro', 'Wave', 'micro.wavey@mail.com', '$2y$10$/o3WLAWsyMkUw7nYSq0eY.mzrUjX2MJJ8kr8h2q5iXM4JroiT1fm.');

-- --------------------------------------------------------

--
-- Structure de la table `user_group`
--

CREATE TABLE `user_group` (
  `group_id` int NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user_group`
--

INSERT INTO `user_group` (`group_id`, `user_id`) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 1),
(4, 3),
(1, 16);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event_user_id_foreign` (`user_id`);

--
-- Index pour la table `event_group`
--
ALTER TABLE `event_group`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_event_id_foreign` (`event_id`);

--
-- Index pour la table `models`
--
ALTER TABLE `models`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ressources`
--
ALTER TABLE `ressources`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user_group`
--
ALTER TABLE `user_group`
  ADD KEY `group_user_group_id_foreign` (`group_id`),
  ADD KEY `group_user_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `events`
--
ALTER TABLE `events`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT pour la table `event_group`
--
ALTER TABLE `event_group`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `models`
--
ALTER TABLE `models`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `ressources`
--
ALTER TABLE `ressources`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE RESTRICT;

--
-- Contraintes pour la table `event_group`
--
ALTER TABLE `event_group`
  ADD CONSTRAINT `event_group_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- Contraintes pour la table `user_group`
--
ALTER TABLE `user_group`
  ADD CONSTRAINT `user_group_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `event_group` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_group_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
