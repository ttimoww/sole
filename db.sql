CREATE TABLE item (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255),
    sku varchar(255),
    color VARCHAR(255),
    `image` VARCHAR(255),
    homepage_product int(1)
);
ALTER TABLE item AUTO_INCREMENT=1001;

CREATE TABLE brand(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255)
);
ALTER TABLE brand AUTO_INCREMENT=1001;

CREATE TABLE brand_item(
    brand_id int,
    item_id int,
    FOREIGN KEY (brand_id) REFERENCES brand(id),
    FOREIGN KEY (item_id) REFERENCES item(id)
);

CREATE TABLE `user`(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pass varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);
ALTER TABLE `user` AUTO_INCREMENT=1001;

CREATE TABLE size(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    size varchar(255),
    item_id int,
    FOREIGN KEY (item_id) REFERENCES item(id)
);
ALTER TABLE size AUTO_INCREMENT=1001;

CREATE TABLE listing (
    id int NOT NULL PRIMARY KEY,
    item_id int,
    `user_id` int,
    size_id int,
    price int,
    FOREIGN KEY (item_id) REFERENCES item(id),
    FOREIGN KEY (`user_id`) REFERENCES user(id),
    FOREIGN KEY (size_id) REFERENCES size(id)
);
ALTER TABLE listing AUTO_INCREMENT=1001;

CREATE TABLE `order` (
    id int NOT NULL PRIMARY KEY,
    buyer_id int NOT NULL,
    seller_id int NOT NULL,
    item_id int NOT NULL,
    price int,
    FOREIGN KEY (buyer_id) REFERENCES user(id),
    FOREIGN KEY (seller_id) REFERENCES user(id),
    FOREIGN KEY (item_id) REFERENCES item(id)
);
ALTER TABLE `order` AUTO_INCREMENT=1001;

INSERT INTO brand (name) 
VALUES ('Nike'), ('Off-White'), ('Jordan'), ('Adidas'), ('Yeezy'), ('Supreme');

INSERT INTO item (image, name, sku, color, homepage_product) 
VALUES ('https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-UNC-Leather/Images/Air-Jordan-1-Retro-High-UNC-Leather/Lv2/img01.jpg', 'Jordan 1 Retro High Obsidian UNC', '555088-140', 'Sail/Obsidian-University Blue', '1'),
('https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Fearless-UNC-Chicago/Images/Air-Jordan-1-Retro-High-Fearless-UNC-Chicago/Lv2/img01.jpg', 'Jordan 1 Retro High Fearless UNC Chicago', 'CK5666-100', 'White/University Blue-Varsity Red', '0'),
('https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil/Images/adidas-Yeezy-Boost-350-V2-Yecheil/Lv2/img01.jpg', 'Adidas Yeezy Boost 350 V2 Yecheil (Non-Reflective)', 'FW5190', 'Yecheil/Yecheil/Yecheil', '0'),
('https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Static/Images/Adidas-Yeezy-Boost-350-V2-Static/Lv2/img01.jpg', 'Adidas Yeezy Boost 350 V2 Static (Non-Reflective)', 'EF2905', 'STATIC/STATIC/STATIC', '1'),
('https://stockx-360.imgix.net/Air-Jordan-1-Mid-SE-Fearless-Maison-Chateau-Rouge/Images/Air-Jordan-1-Mid-SE-Fearless-Maison-Chateau-Rouge/Lv2/img01.jpg?', 'Jordan 1 Mid SE Fearless Maison Chateau Rouge', 'CU2803-200', 'Pale Vanilla/Cinnamon', '0'),
('https://stockx-360.imgix.net/Nike-Blazer-Mid-Off-White-Grim-Reaper/Images/Nike-Blazer-Mid-Off-White-Grim-Reaper/Lv2/img01.jpg', 'Nike Blazer Mid Off-White Grim Reaper', 'AA3832-001', 'Black/White-Cone-Black', '0'),
('https://stockx-360.imgix.net/Nike-Blazer-Mid-Off-White-All-Hallows-Eve/Images/Nike-Blazer-Mid-Off-White-All-Hallows-Eve/Lv2/img01.jpg', "Nike Blazer Mid Off-White All Hallow's Eve", 'AA3832-700', 'Canvas/Total Orange-Pale Vanilla', '0'),
('https://stockx-360.imgix.net/Nike-Blazer-Mid-Off-White/Images/Nike-Blazer-Mid-Off-White/Lv2/img01.jpg?', 'Nike Blazer Mid Off-White', 'AA3832-100', 'White/Black-Muslin', '1'),
('https://stockx-360.imgix.net/air-jordan-1-retro-high-off-white-white_TruView/Images/air-jordan-1-retro-high-off-white-white_TruView/Lv2/img01.jpg', 'Jordan 1 Retro High Off-White White', 'AQ0818-100', 'White/White', '0'),
('https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Off-White-University-Blue/Images/Air-Jordan-1-Retro-High-Off-White-University-Blue/Lv2/img01.jpg', 'Jordan 1 Retro High Off-White University Blue', 'AQ0818-148', 'White/Dark Powder Blue-Cone', '0'),
('https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Off-White-Chicago/Images/Air-Jordan-1-Retro-High-Off-White-Chicago/Lv2/img01.jpg', 'Jordan 1 Retro High Off-White Chicago', 'AA3834-101', 'White/Black-Varsity Red', '0'),
('https://stockx-360.imgix.net/Adidas-Yeezy-Wave-Runner-700-Solid-Grey/Images/Adidas-Yeezy-Wave-Runner-700-Solid-Grey/Lv2/img01.jpg?', 'Adidas Yeezy Boost 700 Wave Runner Solid Grey', 'B75571', 'Solid Grey/Chalk White/Core Blue/Black', '1'),
('https://stockx-360.imgix.net/Nike-Blazer-Mid-Sacai-White-Grey/Images/Nike-Blazer-Mid-Sacai-White-Grey/Lv2/img01.jpg', 'Nike Blazer Mid sacai White Grey', 'BV0072-100', 'Summit White/White-Wolf Grey', '0'),
('https://stockx-360.imgix.net/Nike-Blazer-Mid-sacai-Black-Grey/Images/Nike-Blazer-Mid-sacai-Black-Grey/Lv2/img01.jpg', 'Nike Blazer Mid sacai Black Grey', 'BV0072-002', 'Black/White-Wolf Grey-Black', '0'),
('https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-University-Red/Images/Nike-Dunk-Low-Off-White-University-Red/Lv2/img01.jpg', 'Nike Dunk Low Off-White University Red', 'CT0856-600', 'White/University Red-White', '0'),
('https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-Pine-Green/Images/Nike-Dunk-Low-Off-White-Pine-Green/Lv2/img01.jpg', 'Nike Dunk Low Off-White Pine Green', 'CT0856-100', 'White/Pine Green-White', '0'),
('https://stockx.imgix.net/Nike-Dunk-Low-Off-White-Michigan-1.jpg?', 'Nike Dunk Low Off-White University Gold Midnight Navy', 'CT0856-700', 'Midnight Navy/Varsity Maize', '0'),
('https://stockx-360.imgix.net/Nike-Air-Force-1-Low-Supreme-X-Comme-Des-Garcons-2018/Images/Nike-Air-Force-1-Low-Supreme-X-Comme-Des-Garcons-2018/Lv2/img01.jpg', 'Air Force 1 Low Supreme x Comme des Garcons (2018)', 'AR7623-001', 'Black/White', '0'),
('https://stockx-360.imgix.net/nike-air-force-1-low-supreme-comme-des-garcons-shirt_TruView/Images/nike-air-force-1-low-supreme-comme-des-garcons-shirt_TruView/Lv2/img01.jpg', 'Air Force 1 Low Supreme Comme des Garcons Shirt', '923044-100', 'White/White-White', '1'),
('https://stockx-360.imgix.net/Nike-Air-Max-1-97-Sean-Wotherspoon-NA/Images/Nike-Air-Max-1-97-Sean-Wotherspoon-NA/Lv2/img01.jpg', 'Air Max 1/97 Sean Wotherspoon', 'AJ4219-400', 'Light Blue Fury/Lemon Wash', '1');

INSERT INTO brand_item (brand_id, item_id)
VALUES (1001, 1007), (1001, 1008), (1001, 1011), (1001, 1012), (1001, 1013), (1001, 1014), (1001, 1015), (1001, 1016), (1001, 1017), (1001, 1019), (1001, 1020), (1001, 1021), (1001, 1022), (1001, 1023), (1001, 1024), (1001, 1025), (1001, 1026), (1002, 1012), (1002, 1013), (1002, 1014), (1002, 1015), (1002, 1016), (1002, 1017), (1002, 1021), (1002, 1022), (1002, 1023), (1003, 1007), (1003, 1008), (1003, 1015), (1003, 1016), (1003, 1017), (1004, 1009), (1004, 1010), (1005, 1018), (1005, 1009), (1005, 1010), (1005, 1018), (1006, 1025), (1006, 1026), (1007, 1019), (1007, 1020);

