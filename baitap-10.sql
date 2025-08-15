CREATE DATABASE `yelp-alike` IF NOT EXISTS;

USE DATABASE `yelp-alike`;

-- restaurant
CREATE TABLE `Restaurants` (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255),
  cuisine VARCHAR(100),
  createAt TIMESTAMP
);

-- user
CREATE TABLE `Users` (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP
);

-- comment
CREATE TABLE `Comments` (
  id INT PRIMARY KEY AUTO_INCREMENT,
  content TEXT,
  user_id INT,
  restaurant_id INT,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  FOREIGN KEY (user_id) REFERENCES `Users`(id),
  FOREIGN KEY (restaurant_id) REFERENCES `Restaurants`(id)
);

-- like
CREATE TABLE `Likes` (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  restaurant_id INT,
  FOREIGN KEY (user_id) REFERENCES `Users`(id),
  FOREIGN KEY (restaurant_id) REFERENCES `Restaurants`(id)
);

-- foods
CREATE TABLE `Food` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255),
	price DECIMAL,
	image VARCHAR(255),
	description TEXT,
	restaurant_id INT,
	isAvailable BOOLEAN,
	
	FOREIGN KEY (restaurant_id) REFERENCES `Restaurants`(id)
);

-- orders
CREATE TABLE `Orders` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	orderBy TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	user_id INT,
	
	FOREIGN KEY (user_id) REFERENCES `Users`(id)
);

-- Add data into the table
INSERT INTO `Restaurants` (name, address, cuisine, createAt) VALUES
  ('Phở Thìn', '13 Lò Đúc, Hà Nội', 'Phở', CURRENT_TIMESTAMP),
  ('Bún Chả Hương Liên', '24 Lê Văn Hưu, Hà Nội', 'Bún chả', CURRENT_TIMESTAMP),
  ('Cơm Tấm Cali', '222 Nguyễn Trãi, TP.HCM', 'Cơm tấm', CURRENT_TIMESTAMP),
  ('Bánh Mì Huỳnh Hoa', '26 Lê Thị Riêng, TP.HCM', 'Bánh mì', CURRENT_TIMESTAMP),
  ('Gỏi Cuốn Ngọc', '45 Trần Hưng Đạo, Đà Nẵng', 'Gỏi cuốn', CURRENT_TIMESTAMP),
  ('Bún Riêu Cô Lan', '10 Nguyễn Du, Hà Nội', 'Bún riêu', CURRENT_TIMESTAMP),
  ('Lẩu Cá Đuối 7 Tèo', '50 Trần Phú, TP.HCM', 'Lẩu cá đuối', CURRENT_TIMESTAMP),
  ('Bánh Cuốn Bà Hạnh', '5 Lê Lợi, Huế', 'Bánh cuốn', CURRENT_TIMESTAMP),
  ('Cháo Lòng 123', '123 Phan Đăng Lưu, Đà Nẵng', 'Cháo lòng', CURRENT_TIMESTAMP),
  ('Bún Mắm Dì Năm', '88 Nguyễn Văn Cừ, Cần Thơ', 'Bún mắm', CURRENT_TIMESTAMP),
  ('Bánh Xèo Miền Trung', '77 Lý Thường Kiệt, Quảng Nam', 'Bánh xèo', CURRENT_TIMESTAMP),
  ('Hủ Tiếu Mỹ Tho', '19 Trần Hưng Đạo, Mỹ Tho', 'Hủ tiếu', CURRENT_TIMESTAMP),
  ('Bún Bò Huế O Lý', '21 Nguyễn Huệ, Huế', 'Bún bò Huế', CURRENT_TIMESTAMP),
  ('Cà Phê Vợt Phú Yên', '9 Lê Lợi, Phú Yên', 'Cà phê', CURRENT_TIMESTAMP),
  ('Bánh Đa Cua Hải Phòng', '66 Lê Lai, Hải Phòng', 'Bánh đa cua', CURRENT_TIMESTAMP);


-- Thêm dữ liệu vào bảng Users
INSERT INTO `Users` (username, email, password, createdAt) VALUES
  ('anhnguyen', 'anhnguyen@gmail.com', '123456', '2024-01-01 08:00:00'),
  ('linhtran', 'linhtran@gmail.com', 'abcdef', '2024-01-02 09:00:00'),
  ('quocle', 'quocle@gmail.com', 'qwerty', '2024-01-03 10:00:00'),
  ('thuhoang', 'thuhoang@gmail.com', 'pass123', '2024-01-04 11:00:00'),
  ('khanhpham', 'khanhpham@gmail.com', 'letmein', '2024-01-05 12:00:00'),
  ('minhvu', 'minhvu@gmail.com', 'minh123', '2024-01-06 13:00:00'),
  ('trangnguyen', 'trangnguyen@gmail.com', 'trang789', '2024-01-08 15:00:00'),
  ('tuananh', 'tuananh@gmail.com', 'tuanabc', '2024-01-09 16:00:00'),
  ('ngocmai', 'ngocmai@gmail.com', 'maingoc', '2024-01-10 17:00:00'),
  ('phuongle', 'phuongle@gmail.com', 'lephuong', '2024-01-11 18:00:00'),
  ('hieupham', 'hieupham@gmail.com', 'hieupham', '2024-01-12 19:00:00'),
  ('thanhnguyen', 'thanhnguyen@gmail.com', 'nguyenthanh', '2024-01-13 20:00:00'),
  ('kiettran', 'kiettran@gmail.com', 'trankiet', '2024-01-14 21:00:00'),
  ('mydung', 'mydung@gmail.com', 'dungmy', '2024-01-15 22:00:00'),
  ('hoangnam', 'hoangnam@gmail.com', 'nam456', '2024-01-17 09:00:00'),
  ('trangnguyen2', 'trangnguyen2@gmail.com', 'trang789', '2024-01-18 10:00:00'),
  ('tuananh2', 'tuananh2@gmail.com', 'tuanabc', '2024-01-19 11:00:00'),
  ('ngocmai2', 'ngocmai2@gmail.com', 'maingoc', '2024-01-20 12:00:00'),
  ('phuongle2', 'phuongle2@gmail.com', 'lephuong', '2024-01-21 13:00:00'),
  ('hieupham2', 'hieupham2@gmail.com', 'hieupham', '2024-01-22 14:00:00'),
  ('thanhnguyen2', 'thanhnguyen2@gmail.com', 'nguyenthanh', '2024-01-23 15:00:00'),
  ('kiettran2', 'kiettran2@gmail.com', 'trankiet', '2024-01-24 16:00:00'),
  ('mydung2', 'mydung2@gmail.com', 'dungmy', '2024-01-25 17:00:00');

-- Thêm dữ liệu vào bảng Comments
INSERT INTO `Comments` (content, user_id, restaurant_id, rating) VALUES
  ('Phở rất ngon, nước dùng đậm đà!', 1, 1, 5),
  ('Bún chả thơm, thịt nướng mềm.', 2, 2, 4),
  ('Cơm tấm sườn cực kỳ hấp dẫn.', 3, 3, 5),
  ('Bánh mì giòn, nhân đầy đủ.', 4, 4, 5),
  ('Gỏi cuốn tươi, nước chấm tuyệt vời.', 5, 5, 4),
  ('Bún riêu đậm vị, rau sống tươi ngon.', 6, 6, 5),
  ('Lẩu cá đuối cay nồng, phục vụ nhiệt tình.', 7, 7, 4),
  ('Bánh cuốn mềm, nước chấm vừa miệng.', 8, 8, 5),
  ('Cháo lòng thơm, lòng giòn ngon.', 9, 9, 5),
  ('Bún mắm đặc trưng miền Tây, rất ngon.', 10, 10, 4),
  ('Bánh xèo giòn, nhân nhiều thịt.', 11, 11, 5),
  ('Hủ tiếu nước ngọt, sợi dai.', 12, 12, 4),
  ('Bún bò Huế chuẩn vị, nước lèo thơm.', 13, 13, 5),
  ('Cà phê vợt đậm đà, không gian hoài cổ.', 14, 14, 5),
  ('Bánh đa cua Hải Phòng ngon tuyệt.', 15, 15, 4);

-- Thêm dữ liệu vào bảng Likes
INSERT INTO `Likes` (user_id, restaurant_id) VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (1, 2),
  (2, 3),
  (6, 6), (7, 7), (8, 8), (9, 9), (10, 10),
  (6, 7), (7, 8), (8, 9), (9, 10), (10, 6),
  (6, 8), (7, 9), (8, 10), (9, 6), (10, 7);

INSERT INTO `Food` (name, price, image, description, restaurant_id, isAvailable)
VALUES
  ('Phở bò', 45000, 'pho_bo.jpg', 'Phở bò truyền thống với nước dùng đậm đà.', 1, TRUE),
  ('Bún chả', 40000, 'bun_cha.jpg', 'Bún chả Hà Nội, thịt nướng thơm ngon.', 2, TRUE),
  ('Cơm tấm sườn', 50000, 'com_tam_suon.jpg', 'Cơm tấm sườn bì chả đặc sản Sài Gòn.', 3, TRUE),
  ('Bánh mì thịt', 25000, 'banh_mi_thit.jpg', 'Bánh mì thịt nguội, pate béo ngậy.', 4, TRUE),
  ('Gỏi cuốn', 30000, 'goi_cuon.jpg', 'Gỏi cuốn tôm thịt, nước chấm đặc biệt.', 5, TRUE),
  ('Bún riêu cua', 35000, 'bun_rieu_cua.jpg', 'Bún riêu cua đồng, rau sống tươi ngon.', 6, TRUE),
  ('Lẩu cá đuối', 120000, 'lau_ca_duoi.jpg', 'Lẩu cá đuối cay nồng, rau xanh.', 7, TRUE),
  ('Bánh cuốn', 30000, 'banh_cuon.jpg', 'Bánh cuốn nóng, nước mắm chua ngọt.', 8, TRUE),
  ('Cháo lòng', 35000, 'chao_long.jpg', 'Cháo lòng thơm ngon, lòng giòn.', 9, TRUE),
  ('Bún mắm', 40000, 'bun_mam.jpg', 'Bún mắm miền Tây, hải sản tươi.', 10, TRUE);

INSERT INTO `Orders` (user_id, orderBy)
VALUES
  (1, '2024-02-01 08:15:00'),
  (3, '2024-02-02 12:30:00'),
  (5, '2024-02-03 18:45:00'),
  (2, '2024-02-04 09:20:00'),
  (7, '2024-02-05 14:10:00'),
  (4, '2024-02-06 19:55:00'),
  (6, '2024-02-07 11:05:00'),
  (8, '2024-02-08 16:40:00'),
  (9, '2024-02-09 07:50:00'),
  (10, '2024-02-10 13:25:00');