-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: pintura
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Articles`
--

DROP TABLE IF EXISTS `Articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Articles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author_name` varchar(255) NOT NULL,
  `author_image_url` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `category` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Articles`
--

LOCK TABLES `Articles` WRITE;
/*!40000 ALTER TABLE `Articles` DISABLE KEYS */;
INSERT INTO `Articles` VALUES (1,'How to Create a Winning Resume','John Doe','https://www.hipwee.com/wp-content/uploads/2015/04/business-855-750x565.png','2024-11-21 00:00:00','Resume Writing','Tips and steps to create a resume that catches the recruiter\'s attention.','2024-12-12 01:02:47','2024-12-12 01:02:47'),(2,'Interview Preparation 101','Jane Smith','https://media.licdn.com/dms/image/v2/C4E12AQEmuCIP3RulUg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1560004190905?e=2147483647&v=beta&t=ggdfWVXNL6dFFbmoMWgWDZe8GyqQoZTxWOZUO9YJqWI','2024-11-20 00:00:00','Interview Preparation','Simulations and job interview guides to boost confidence.','2024-12-12 01:02:47','2024-12-12 01:02:47'),(3,'Mastering LinkedIn Optimization','Emily Brown','https://media.licdn.com/dms/image/v2/D4D12AQEXfCs0v3rvjQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1730043613906?e=2147483647&v=beta&t=NUn7FaOYerg1YezczkAM9S1DsgrnpLtXaHlHpz2lp-E','2024-11-19 00:00:00','Personal Branding','Guide to maximizing your LinkedIn profile to be more professional and effective.','2024-12-12 01:02:47','2024-12-12 01:02:47');
/*!40000 ALTER TABLE `Articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `VideoContents`
--

DROP TABLE IF EXISTS `VideoContents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `VideoContents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `url` varchar(255) NOT NULL,
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`tags`)),
  `thumbnail_url` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `duration` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `VideoContents`
--

LOCK TABLES `VideoContents` WRITE;
/*!40000 ALTER TABLE `VideoContents` DISABLE KEYS */;
INSERT INTO `VideoContents` VALUES (1,'Crafting a Resume That Stands Out','Learn how to craft a resume that stands out from the crowd and attracts the attention of recruiters.','https://youtu.be/MqXjqOy-TA8?si=fWR5tr01IJBouZ6Z','[\"resume\",\"career\",\"job search\"]','https://mycvcreator.com/administrator/postimages/66c5c34fa02068.66439125.jpg','2024-12-11 00:00:00','29min','2024-12-12 00:41:50','2024-12-12 00:41:50'),(2,'Digital Portfolio Best Practices','Tips and best practices for creating a digital portfolio that showcases your work effectively.','https://youtu.be/0VGc7jrD9zo?si=t_No1fdcX6r-iIa_','[\"portfolio\",\"UI/UX\",\"design\"]','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhWtiGZz2aW08oqoY7WD7MQC25UKl-sa0VQ&s','2024-12-10 00:00:00','9min','2024-12-12 00:41:50','2024-12-12 00:41:50'),(3,'LinkedIn Profile Hacks','Maximize the potential of your LinkedIn profile to get noticed by recruiters and hiring managers.','https://youtu.be/B4OhuzwLc9o?si=U253PeoAGygUJRZd','[\"linkedin\",\"career\",\"networking\"]','https://www.bleepstatic.com/content/hl-images/2023/08/15/hacker-holding-linkedin.jpg','2024-12-09 00:00:00','8min','2024-12-12 00:41:50','2024-12-12 00:41:50'),(4,'Elevate Your Personal Brand','Learn how to elevate your personal brand to gain more visibility and attract career opportunities.','https://youtu.be/ozMCb0wOnMU?si=ZVgR5Wy4faQvNTJv','[\"branding\",\"career\",\"personal development\"]','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6l74Qeqb4XanhCUndv-dWgCe0JFPd4aQ0Tw&s','2024-12-08 00:00:00','6min','2024-12-12 00:41:50','2024-12-12 00:41:50'),(5,'Acing Behavioral Interviews','Master the art of answering behavioral interview questions to impress employers.','https://youtu.be/gZ2354BH0a0?si=a_nDev-9QGrTCJ1o','[\"interview\",\"career\",\"job tips\"]','https://img.freepik.com/free-photo/man-being-interviewed-indoors-by-journalist_23-2149029359.jpg','2024-12-07 00:00:00','7min','2024-12-12 00:41:50','2024-12-12 00:41:50'),(6,'Ace Your Next Job Interview','Get prepared to ace your next job interview with tips and strategies from industry experts.','https://youtu.be/mmQcX6HpCGs?si=3wGAXGPX-gq984tB','[\"interview\",\"career\",\"job search\"]','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUO7WSJvOIEsFpMrno_JR__Dq3OFIJUzrivQ&s','2024-12-06 00:00:00','10min','2024-12-12 00:41:50','2024-12-12 00:41:50');
/*!40000 ALTER TABLE `VideoContents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_authors`
--

DROP TABLE IF EXISTS `article_authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_authors` (
  `id` int(11) NOT NULL,
  `author_name` varchar(255) NOT NULL,
  `author_image_url` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `article_id` int(11) NOT NULL,
  `description_new` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `article_id` (`article_id`),
  CONSTRAINT `article_authors_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_authors`
--

LOCK TABLES `article_authors` WRITE;
/*!40000 ALTER TABLE `article_authors` DISABLE KEYS */;
INSERT INTO `article_authors` VALUES (1,'John Doe','https://www.hipwee.com/wp-content/uploads/2015/04/business-855-750x565.png','How to Create a Winning Resume',1,'John Doe is a renowned resume writing expert who has helped countless job seekers secure their dream roles. With over 10 years of experience, John specializes in crafting resumes that not only highlight achievements but also resonate with hiring managers. He is known for his attention to detail and his ability to tailor resumes for specific industries and job roles.','2024-12-12 01:02:47','2024-12-12 01:02:47'),(2,'Jane Smith','https://media.licdn.com/dms/image/v2/C4E12AQEmuCIP3RulUg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1560004190905?e=2147483647&v=beta&t=ggdfWVXNL6dFFbmoMWgWDZe8GyqQoZTxWOZUO9YJqWI','Interview Preparation 101',2,'Jane Smith has spent over 15 years helping professionals prepare for job interviews. With a background in human resources, Jane offers insights into common interview questions, tips for answering them confidently, and strategies to help job seekers make a lasting impression. She is passionate about helping people boost their interview skills and secure job offers.','2024-12-12 01:02:47','2024-12-12 01:02:47'),(3,'Emily Brown','https://media.licdn.com/dms/image/v2/D4D12AQEXfCs0v3rvjQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1730043613906?e=2147483647&v=beta&t=NUn7FaOYerg1YezczkAM9S1DsgrnpLtXaHlHpz2lp-E','Mastering LinkedIn Optimization',3,'Emily Brown is a personal branding strategist who specializes in LinkedIn optimization. With a keen understanding of how recruiters search for candidates, Emily helps professionals create LinkedIn profiles that stand out. She advises on profile pictures, headline writing, and crafting compelling summaries to attract the attention of hiring managers and recruiters.','2024-12-12 01:02:47','2024-12-12 01:02:47');
/*!40000 ALTER TABLE `article_authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assignments`
--

DROP TABLE IF EXISTS `assignments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assignments` (
  `assignment_id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `due_date` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`assignment_id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `assignments_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignments`
--

LOCK TABLES `assignments` WRITE;
/*!40000 ALTER TABLE `assignments` DISABLE KEYS */;
INSERT INTO `assignments` VALUES (1,1,'Introduction to JavaScript','Complete the basic JavaScript exercises.','2024-12-10 16:59:59','2024-12-12 00:34:06'),(2,2,'Understanding SQL Joins','Write queries to demonstrate different types of joins.','2024-12-15 16:59:59','2024-12-12 00:34:06'),(3,3,'Building a RESTful API','Create a RESTful API using Node.js and Express.','2024-12-20 16:59:59','2024-12-12 00:34:06'),(4,4,'Data Visualization with Python','Use Matplotlib and Seaborn to create visualizations from data.','2024-12-25 16:59:59','2024-12-12 00:34:06'),(5,5,'Network Security Fundamentals','Learn about common network security threats and defenses.','2024-12-30 16:59:59','2024-12-12 00:34:06');
/*!40000 ALTER TABLE `assignments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assignmentsubmissions`
--

DROP TABLE IF EXISTS `assignmentsubmissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assignmentsubmissions` (
  `submission_id` int(11) NOT NULL AUTO_INCREMENT,
  `assignment_id` int(11) DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL,
  `submission_content` text DEFAULT NULL,
  `status` enum('pending','grading','graded','late','resubmitted') NOT NULL DEFAULT 'pending',
  `grade` decimal(5,2) DEFAULT NULL,
  `feedback` text DEFAULT NULL,
  `submitted_at` datetime DEFAULT current_timestamp(),
  `graded_at` datetime DEFAULT NULL,
  PRIMARY KEY (`submission_id`),
  KEY `assignment_id` (`assignment_id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `assignmentsubmissions_ibfk_1` FOREIGN KEY (`assignment_id`) REFERENCES `assignments` (`assignment_id`),
  CONSTRAINT `assignmentsubmissions_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignmentsubmissions`
--

LOCK TABLES `assignmentsubmissions` WRITE;
/*!40000 ALTER TABLE `assignmentsubmissions` DISABLE KEYS */;
INSERT INTO `assignmentsubmissions` VALUES (1,2,4,'JavaScript exercise solutions.','graded',85.50,'Good job! Improve your variable naming.','2024-12-01 03:00:00','2024-12-02 08:30:00'),(2,2,5,'SQL join examples.','pending',NULL,NULL,'2024-12-03 07:00:00',NULL);
/*!40000 ALTER TABLE `assignmentsubmissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `badges`
--

DROP TABLE IF EXISTS `badges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `badges` (
  `badge_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `requirement` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`badge_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `badges`
--

LOCK TABLES `badges` WRITE;
/*!40000 ALTER TABLE `badges` DISABLE KEYS */;
INSERT INTO `badges` VALUES (1,'Achievement Starter','Awarded for starting your learning journey.','https://example.com/images/badges/starter.png','Sign up and complete your profile.','2024-12-12 00:34:06'),(2,'Knowledge Explorer','Given to those who explore 10 different topics.','https://example.com/images/badges/explorer.png','Explore at least 10 topics on the platform.','2024-12-12 00:34:06'),(3,'Task Master','For completing 50 tasks in any course.','https://example.com/images/badges/taskmaster.png','Complete 50 tasks across any courses.','2024-12-12 00:34:06'),(4,'Collaboration Champion','Awarded for engaging in group discussions.','https://example.com/images/badges/champion.png','Participate in at least 5 group discussions.','2024-12-12 00:34:06'),(5,'Goal Setter','For setting and achieving your first learning goal.','https://example.com/images/badges/goalsetter.png','Set and achieve one learning goal.','2024-12-12 00:34:06');
/*!40000 ALTER TABLE `badges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoriescourses`
--

DROP TABLE IF EXISTS `categoriescourses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriescourses` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriescourses`
--

LOCK TABLES `categoriescourses` WRITE;
/*!40000 ALTER TABLE `categoriescourses` DISABLE KEYS */;
INSERT INTO `categoriescourses` VALUES (1,'Programming','Learn the basics of programming using Python.','2024-12-12 00:34:06','2024-12-12 00:34:06',NULL),(2,'Web Development','Build dynamic and responsive websites with HTML, CSS, and JavaScript.','2024-12-12 00:34:06','2024-12-12 00:34:06',NULL),(3,'Database Management','Understand database systems and learn SQL.','2024-12-12 00:34:06','2024-12-12 00:34:06',NULL),(4,'Data Science','Explore data analysis, visualization, and machine learning.','2024-12-12 00:34:06','2024-12-12 00:34:06',NULL),(5,'Cybersecurity','Learn about network security, cryptography, and ethical hacking.','2024-12-12 00:34:06','2024-12-12 00:34:06',NULL),(6,'Cloud Computing','Understand cloud platforms and services, such as AWS and Azure.','2024-12-12 00:34:06','2024-12-12 00:34:06',NULL);
/*!40000 ALTER TABLE `categoriescourses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `counselingsessions`
--

DROP TABLE IF EXISTS `counselingsessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `counselingsessions` (
  `session_id` int(11) NOT NULL AUTO_INCREMENT,
  `counselor_id` int(11) DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL,
  `session_date` datetime NOT NULL,
  `status` enum('scheduled','completed','cancelled','no-show') NOT NULL,
  `notes` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`session_id`),
  KEY `counselor_id` (`counselor_id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `counselingsessions_ibfk_1` FOREIGN KEY (`counselor_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `counselingsessions_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `counselingsessions`
--

LOCK TABLES `counselingsessions` WRITE;
/*!40000 ALTER TABLE `counselingsessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `counselingsessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courseorders`
--

DROP TABLE IF EXISTS `courseorders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courseorders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `order_number` varchar(50) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `payment_method_id` int(11) DEFAULT NULL,
  `payment_status` enum('pending','completed','failed','refunded','expired') NOT NULL,
  `payment_proof` varchar(255) DEFAULT NULL,
  `payment_date` datetime DEFAULT NULL,
  `expired_at` datetime DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `order_date` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  UNIQUE KEY `order_number` (`order_number`),
  KEY `student_id` (`student_id`),
  KEY `course_id` (`course_id`),
  KEY `payment_method_id` (`payment_method_id`),
  CONSTRAINT `courseorders_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `courseorders_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`),
  CONSTRAINT `courseorders_ibfk_3` FOREIGN KEY (`payment_method_id`) REFERENCES `paymentmethods` (`payment_method_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courseorders`
--

LOCK TABLES `courseorders` WRITE;
/*!40000 ALTER TABLE `courseorders` DISABLE KEYS */;
INSERT INTO `courseorders` VALUES (1,3,1,'ORD123456',500000.00,1,'completed','https://example.com/payment-proof/ORD123456.png','2024-11-28 03:00:00','2024-11-30 16:59:59','First payment for advanced course.','2024-11-28 02:30:00','2024-12-12 00:34:06',NULL),(2,4,2,'ORD123457',300000.00,2,'pending',NULL,NULL,'2024-12-01 16:59:59','Waiting for confirmation.','2024-11-29 01:45:00','2024-12-12 00:34:06',NULL),(3,5,3,'ORD123458',400000.00,3,'failed',NULL,NULL,'2024-11-30 16:59:59','Payment failed due to insufficient funds.','2024-11-28 04:15:00','2024-12-12 00:34:06',NULL);
/*!40000 ALTER TABLE `courseorders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `rating` float DEFAULT 0,
  `price` decimal(10,2) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `institution` varchar(100) DEFAULT NULL,
  `is_trending` enum('0','1') DEFAULT '0',
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`course_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categoriescourses` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'Introduction to Programming','Learn the basics of programming using Python.',1,0,0.00,'https://student-activity.binus.ac.id/bncc/wp-content/uploads/sites/23/2023/06/unnamed-18.png','Binus University','1','2024-12-12 00:34:06','2024-12-12 14:10:59',NULL),(2,'Web Development','Build dynamic and responsive websites with HTML, CSS, and JavaScript.',2,0,0.00,'https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg','nganu university','0','2024-12-12 00:34:06','2024-12-12 00:34:06',NULL),(3,'Database Management','Understand database systems and learn SQL.',3,0,0.00,'https://miro.medium.com/v2/resize:fit:1400/1*szBsfY6lp8A0jb1zOvJ0mw.jpeg','nganu company','0','2024-12-12 00:34:06','2024-12-12 00:34:06',NULL),(4,'Data Analysis with Python','Explore data analysis techniques using Python and popular libraries.',4,0,0.00,'https://miro.medium.com/v2/resize:fit:1024/1*CvcM2chQox1VGJnWQO3acg.png','jagopiton company','0','2024-12-12 00:34:06','2024-12-12 00:34:06',NULL),(5,'Ethical Hacking','Learn about penetration testing, network security, and ethical hacking.',5,0,0.00,'https://i.ytimg.com/vi/4MC6s6wS5CI/hqdefault.jpg','nganu company','1','2024-12-12 00:34:06','2024-12-12 14:12:31',NULL),(6,'AWS Fundamentals','Understand the basics of cloud computing and Amazon Web Services.',6,0,0.00,'https://images.squarespace-cdn.com/content/v1/60cfd646701da4034512a1c5/1654217981309-RTSZMBJWA9YJ5V32UN8R/AWS-Cloud.png','boncos company','1','2024-12-12 00:34:06','2024-12-12 14:12:20',NULL);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enrollments`
--

DROP TABLE IF EXISTS `enrollments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enrollments` (
  `enrollment_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `progress` float DEFAULT 0,
  `completion_date` datetime DEFAULT NULL,
  `enrolled_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`enrollment_id`),
  KEY `student_id` (`student_id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `enrollments_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `enrollments_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enrollments`
--

LOCK TABLES `enrollments` WRITE;
/*!40000 ALTER TABLE `enrollments` DISABLE KEYS */;
INSERT INTO `enrollments` VALUES (1,3,1,25.5,NULL,'2024-11-01 10:00:00'),(2,4,2,75.2,'2024-11-25 15:30:00','2024-11-05 12:00:00'),(3,5,3,100,'2024-11-20 09:00:00','2024-10-15 14:00:00'),(4,3,4,50.75,NULL,'2024-11-10 08:30:00'),(5,4,5,10,NULL,'2024-11-15 11:45:00');
/*!40000 ALTER TABLE `enrollments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forums`
--

DROP TABLE IF EXISTS `forums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forums` (
  `forum_id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`forum_id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `forums_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forums`
--

LOCK TABLES `forums` WRITE;
/*!40000 ALTER TABLE `forums` DISABLE KEYS */;
INSERT INTO `forums` VALUES (1,1,'Introduction to Programming','A forum to discuss the basics of programming, share resources, and ask questions.','2024-11-01 10:00:00','2024-11-01 10:00:00',NULL),(2,1,'Advanced JavaScript','Dive into advanced JavaScript topics, including closures, async/await, and more.','2024-11-05 12:00:00','2024-11-05 12:00:00',NULL),(3,2,'Data Structures and Algorithms','Discuss algorithms, problem-solving strategies, and best practices for competitive programming.','2024-10-15 14:00:00','2024-10-15 14:00:00',NULL),(4,2,'Introduction to Databases','A place to ask questions and share resources related to database management and design.','2024-11-10 08:30:00','2024-11-10 08:30:00',NULL),(5,3,'Web Development Basics','Learn and discuss the fundamentals of building web applications, from HTML to deployment.','2024-11-20 16:00:00','2024-11-20 16:00:00',NULL);
/*!40000 ALTER TABLE `forums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gamifications`
--

DROP TABLE IF EXISTS `gamifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gamifications` (
  `gamification_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `exp_points` int(11) DEFAULT 0,
  `rank_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`gamification_id`),
  KEY `student_id` (`student_id`),
  KEY `rank_id` (`rank_id`),
  CONSTRAINT `gamifications_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `gamifications_ibfk_2` FOREIGN KEY (`rank_id`) REFERENCES `ranks` (`rank_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gamifications`
--

LOCK TABLES `gamifications` WRITE;
/*!40000 ALTER TABLE `gamifications` DISABLE KEYS */;
INSERT INTO `gamifications` VALUES (1,3,2500,3,'2024-11-01 09:30:00','2024-11-01 09:30:00',NULL),(2,4,1200,2,'2024-11-02 14:45:00','2024-11-02 14:45:00',NULL),(3,5,800,1,'2024-11-03 16:20:00','2024-11-03 16:20:00',NULL),(4,4,3400,4,'2024-11-04 11:10:00','2024-11-04 11:10:00',NULL),(5,3,150,1,'2024-11-05 13:50:00','2024-11-05 13:50:00',NULL);
/*!40000 ALTER TABLE `gamifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoices` (
  `invoice_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `invoice_number` varchar(50) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  `discount` decimal(10,2) DEFAULT 0.00,
  `tax` decimal(10,2) DEFAULT 0.00,
  `total` decimal(10,2) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`invoice_id`),
  UNIQUE KEY `invoice_number` (`invoice_number`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `invoices_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `courseorders` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoices`
--

LOCK TABLES `invoices` WRITE;
/*!40000 ALTER TABLE `invoices` DISABLE KEYS */;
INSERT INTO `invoices` VALUES (1,1,'INV-20241101-001',500000.00,50000.00,45000.00,495000.00,'2024-11-01 03:00:00'),(2,2,'INV-20241101-002',300000.00,30000.00,27000.00,297000.00,'2024-11-02 07:30:00'),(3,3,'INV-20241101-003',750000.00,75000.00,67500.00,742500.00,'2024-11-03 02:15:00');
/*!40000 ALTER TABLE `invoices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materials`
--

DROP TABLE IF EXISTS `materials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materials` (
  `material_id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `type` enum('video','text','quiz') NOT NULL,
  `content` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`material_id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `materials_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materials`
--

LOCK TABLES `materials` WRITE;
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` VALUES (1,1,'Course Syllabus','video','https://youtu.be/d6xiqfpXAU8?si=HNXHKRfvqwxxAB42','2024-11-01 08:00:00','2024-12-13 06:28:27',NULL),(2,4,'Course Syllabus','text','https://example.com/docs/course-outline.pdf','2024-11-02 08:00:00','2024-12-13 06:43:35',NULL),(3,3,'Course Syllabus','quiz','https://example.com/articles/getting-started.html','2024-11-03 08:00:00','2024-11-03 08:00:00',NULL),(4,2,'Course Syllabus','video','https://example.com/quizzes/chapter1-quiz.html','2024-11-04 08:00:00','2024-11-04 08:00:00',NULL),(5,3,'Course Syllabus','video','https://example.com/videos/chapter2-overview.mp4','2024-11-05 08:00:00','2024-11-05 08:00:00',NULL);
/*!40000 ALTER TABLE `materials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentorships`
--

DROP TABLE IF EXISTS `mentorships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mentorships` (
  `mentorship_id` int(11) NOT NULL AUTO_INCREMENT,
  `mentor_id` int(11) DEFAULT NULL,
  `mentee_id` int(11) DEFAULT NULL,
  `status` enum('active','pending','completed','cancelled') NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`mentorship_id`),
  KEY `mentor_id` (`mentor_id`),
  KEY `mentee_id` (`mentee_id`),
  CONSTRAINT `mentorships_ibfk_1` FOREIGN KEY (`mentor_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `mentorships_ibfk_2` FOREIGN KEY (`mentee_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentorships`
--

LOCK TABLES `mentorships` WRITE;
/*!40000 ALTER TABLE `mentorships` DISABLE KEYS */;
INSERT INTO `mentorships` VALUES (1,2,5,'active','2024-11-01 02:00:00','2024-11-20 02:00:00',NULL),(2,2,4,'pending','2024-11-15 03:00:00','2024-11-15 03:00:00',NULL),(3,2,3,'completed','2024-10-20 01:30:00','2024-11-18 08:45:00',NULL);
/*!40000 ALTER TABLE `mentorships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `notification_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`notification_id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (1,3,'Welcome to the Course!','Congratulations on enrolling in the JavaScript Basics course!',0,'2024-11-01 10:00:00'),(2,4,'New Assignment Available','A new assignment for Python Advanced is now available. Check it out!',0,'2024-11-02 11:00:00'),(3,3,'Course Progress Update','You’ve completed 50% of the JavaScript Basics course. Keep going!',1,'2024-11-03 12:00:00'),(4,4,'Live Session Reminder','Don’t forget to join the live session for Data Structures at 3 PM today.',0,'2024-11-04 09:00:00'),(5,5,'Certificate Available','Your certificate for Machine Learning Basics is now available for download.',1,'2024-11-05 14:00:00');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentmethods`
--

DROP TABLE IF EXISTS `paymentmethods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentmethods` (
  `payment_method_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`payment_method_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentmethods`
--

LOCK TABLES `paymentmethods` WRITE;
/*!40000 ALTER TABLE `paymentmethods` DISABLE KEYS */;
INSERT INTO `paymentmethods` VALUES (1,'Credit Card','Payment using Visa, MasterCard, or American Express.',1,'2024-11-01 10:00:00'),(2,'Bank Transfer','Direct payment via bank account transfer.',1,'2024-11-02 11:00:00'),(3,'E-Wallet','Use popular e-wallets like PayPal, OVO, or GoPay.',1,'2024-11-03 12:00:00'),(4,'Cash on Delivery','Pay with cash when the product is delivered.',0,'2024-11-04 09:00:00'),(5,'Cryptocurrency','Pay using Bitcoin, Ethereum, or other cryptocurrencies.',1,'2024-11-05 14:00:00');
/*!40000 ALTER TABLE `paymentmethods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `forum_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `content` text NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `forum_id` (`forum_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`forum_id`) REFERENCES `forums` (`forum_id`),
  CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,1,1,'I found this course really helpful, but I am stuck on lesson 3.','2024-11-01 10:30:00','2024-11-01 10:30:00',NULL),(2,2,2,'Have you tried reviewing the supplemental material? It helped me a lot.','2024-11-01 11:00:00','2024-11-01 11:00:00',NULL),(3,3,3,'Can anyone recommend other resources for advanced topics?','2024-11-02 09:45:00','2024-11-02 09:45:00',NULL),(4,2,4,'I suggest checking out the instructor’s blog; it has great content!','2024-11-02 10:15:00','2024-11-02 10:15:00',NULL),(5,3,5,'When will the next module be released?','2024-11-03 14:20:00','2024-11-03 14:20:00',NULL);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ranks`
--

DROP TABLE IF EXISTS `ranks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ranks` (
  `rank_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `min_exp_required` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`rank_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ranks`
--

LOCK TABLES `ranks` WRITE;
/*!40000 ALTER TABLE `ranks` DISABLE KEYS */;
INSERT INTO `ranks` VALUES (1,'Beginner',0,'Level pemula untuk pengguna baru.','2024-11-01 08:00:00'),(2,'Intermediate',1000,'Level menengah untuk pengguna dengan pengalaman sedang.','2024-11-02 08:00:00'),(3,'Advanced',2500,'Level lanjutan untuk pengguna berpengalaman.','2024-11-03 08:00:00'),(4,'Expert',5000,'Level ahli untuk pengguna yang sangat berpengalaman.','2024-11-04 08:00:00'),(5,'Legendary',10000,'Level legendaris untuk pengguna dengan pencapaian luar biasa.','2024-11-05 08:00:00');
/*!40000 ALTER TABLE `ranks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `refunds`
--

DROP TABLE IF EXISTS `refunds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `refunds` (
  `refund_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `reason` text NOT NULL,
  `refund_amount` decimal(10,2) NOT NULL,
  `status` enum('pending','approved','rejected','completed') NOT NULL,
  `processed_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`refund_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `refunds_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `courseorders` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `refunds`
--

LOCK TABLES `refunds` WRITE;
/*!40000 ALTER TABLE `refunds` DISABLE KEYS */;
INSERT INTO `refunds` VALUES (1,3,'Product was defective.',100.00,'completed','2024-11-02 12:00:00','2024-11-01 10:00:00','2024-11-02 12:00:00',NULL),(2,2,'Late delivery.',20.00,'approved','2024-11-05 14:00:00','2024-11-04 16:00:00','2024-11-05 14:00:00',NULL),(3,1,'Duplicate order.',30.00,'completed','2024-11-06 10:00:00','2024-11-05 09:00:00','2024-11-06 10:00:00',NULL);
/*!40000 ALTER TABLE `refunds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stripe_transactions`
--

DROP TABLE IF EXISTS `stripe_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stripe_transactions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `session_id` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `stripe_transactions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stripe_transactions`
--

LOCK TABLES `stripe_transactions` WRITE;
/*!40000 ALTER TABLE `stripe_transactions` DISABLE KEYS */;
INSERT INTO `stripe_transactions` VALUES (1,3,'Sarah Student','+628938938938','cs_test_b1c4f9b5-6e7c-4d2b-8e2d-6b5a3e3f8b8d',500000,2,'Success','2024-11-01 10:00:00','2024-11-01 10:00:00',NULL),(2,4,'Mike Mentor','+628938938938','cs_test_1a2b3c4d-5e6f-7a8b-9c0d1e2f3a4b',300000,1,'Success','2024-11-02 11:00:00','2024-11-02 11:00:00',NULL),(3,5,'Clara Counselor','+628938938938','cs_test_5a6b7c8d-9e0f-1a2b-3c4d5e6f7a8b',400000,1,'Failed','2024-11-03 12:00:00','2024-11-03 12:00:00',NULL);
/*!40000 ALTER TABLE `stripe_transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentbadges`
--

DROP TABLE IF EXISTS `studentbadges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentbadges` (
  `student_badge_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `badge_id` int(11) DEFAULT NULL,
  `earned_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`student_badge_id`),
  KEY `student_id` (`student_id`),
  KEY `badge_id` (`badge_id`),
  CONSTRAINT `studentbadges_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `studentbadges_ibfk_2` FOREIGN KEY (`badge_id`) REFERENCES `badges` (`badge_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentbadges`
--

LOCK TABLES `studentbadges` WRITE;
/*!40000 ALTER TABLE `studentbadges` DISABLE KEYS */;
INSERT INTO `studentbadges` VALUES (1,3,4,'2024-11-15 07:00:00'),(2,4,5,'2024-11-20 03:30:00'),(3,5,3,'2024-11-22 09:45:00'),(4,3,2,'2024-11-28 02:15:00'),(5,4,1,'2024-11-29 01:00:00');
/*!40000 ALTER TABLE `studentbadges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userprofiles`
--

DROP TABLE IF EXISTS `userprofiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userprofiles` (
  `profile_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` enum('Male','Female') DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `allow_phone_notifications` tinyint(1) DEFAULT 0,
  `city` varchar(100) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `linkedin_url` varchar(255) DEFAULT NULL,
  `youtube_url` varchar(255) DEFAULT NULL,
  `instagram_url` varchar(255) DEFAULT NULL,
  `facebook_url` varchar(255) DEFAULT NULL,
  `line_url` varchar(255) DEFAULT NULL,
  `twitter_url` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`profile_id`),
  UNIQUE KEY `username` (`username`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `userprofiles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userprofiles`
--

LOCK TABLES `userprofiles` WRITE;
/*!40000 ALTER TABLE `userprofiles` DISABLE KEYS */;
INSERT INTO `userprofiles` VALUES (1,3,'sarahstudent','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png','2002-09-20','Male','8938938938',0,'Jakarta','S1 Teknik Informatika','PT. ABC','student','A passionate learner with a love for technology and coding.','https://www.linkedin.com/in/sarahstudent','https://www.youtube.com/sarahstudent','https://www.instagram.com/sarahstudent','https://facebook.com/sarahstudent','https://line.me/ti/p/sarahstudent','https://twitter.com/sarahstudent','2024-12-12 00:34:06','2024-12-12 00:34:06'),(2,4,'mikementor','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png','1990-05-15','Male','8938938938',0,'Bandung','S2 Computer Science','PT. XYZ','mentor','An experienced mentor with a passion for guiding aspiring developers.','https://www.linkedin.com/in/mikementor','https://www.youtube.com/mikementor','https://www.instagram.com/mikementor','https://facebook.com/mikementor','https://line.me/ti/p/mikementor','https://twitter.com/mikementor','2024-12-12 00:34:06','2024-12-12 00:34:06');
/*!40000 ALTER TABLE `userprofiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userroles`
--

DROP TABLE IF EXISTS `userroles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userroles` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` enum('admin','instructor','student','counselor','mentor') NOT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userroles`
--

LOCK TABLES `userroles` WRITE;
/*!40000 ALTER TABLE `userroles` DISABLE KEYS */;
INSERT INTO `userroles` VALUES (1,'admin','Responsible for managing the platform and users.'),(2,'instructor','Can create and manage courses and materials.'),(3,'student','Enrolled in courses and can access learning materials.'),(4,'mentor','Monitors forums and ensures community guidelines are followed.'),(5,'counselor','Provides guidance and support to students.'),(6,'admin','Responsible for managing the platform and users.'),(7,'instructor','Can create and manage courses and materials.'),(8,'student','Enrolled in courses and can access learning materials.'),(9,'mentor','Monitors forums and ensures community guidelines are followed.'),(10,'counselor','Provides guidance and support to students.');
/*!40000 ALTER TABLE `userroles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `google_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `email_verified` enum('0','1') DEFAULT '0',
  `email_verification_token` varchar(6) DEFAULT NULL,
  `email_verification_token_expires` datetime DEFAULT NULL,
  `reset_password_token` varchar(6) DEFAULT NULL,
  `reset_password_token_expires` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `google_id` (`google_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `userroles` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'Admin Pintura','admin@pintura.com','password',1,'1',NULL,NULL,NULL,NULL,'2024-12-12 00:34:06','2024-12-12 00:34:06',NULL),(2,NULL,'John Instructor','instructor@pintura.com','password',2,'1',NULL,NULL,NULL,NULL,'2024-12-12 00:34:06','2024-12-12 00:34:06',NULL),(3,NULL,'Sarah Student','yojare3278@pokeline.com','$2b$10$1Vz0oyk3MjyVU9149fBe4.bF21wf8jaAfdQ.C.r/bR7e2C747d37i',3,'1',NULL,NULL,NULL,NULL,'2024-12-12 00:34:06','2024-12-12 02:33:34',NULL),(4,NULL,'Mike Mentor','mentor@pintura.com','password',4,'1',NULL,NULL,NULL,NULL,'2024-12-12 00:34:06','2024-12-12 00:34:06',NULL),(5,NULL,'Clara Counselor','counselor@pintura.com','password',5,'1',NULL,NULL,NULL,NULL,'2024-12-12 00:34:06','2024-12-12 00:34:06',NULL),(6,NULL,'ya jare','kotej48737@iminko.com','$2b$10$PVfhG7hpVD6j8FKa2cQa2.B0SZvANT/uMsm1PL9cskzhpibdeh3Iy',NULL,'1',NULL,NULL,NULL,NULL,'2024-12-12 06:38:30','2024-12-12 06:38:56',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-13 14:21:38
