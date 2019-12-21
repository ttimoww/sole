CREATE TABLE Item (
    ID int NOT NULL PRIMARY KEY,
    `Name` varchar(255),
    SKU varchar(255),
    COLOR VARCHAR(255)
);

CREATE TABLE `User` (
    ID int NOT NULL AUTO_INCREMENT=1000 PRIMARY KEY ,
    Pass varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    FirstName VARCHAR(255),
    LastName VARCHAR(255)
);

CREATE TABLE Listing (
    ID int NOT NULL PRIMARY KEY,
    ItemID int,
    UserID int,
    Price int,
    FOREIGN KEY (ItemID) REFERENCES Item(ID),
    FOREIGN KEY (UserID) REFERENCES User(ID)
);

CREATE TABLE `Order` (
    ID int NOT NULL PRIMARY KEY,
    ItemID int NOT NULL,
    UserID int NOT NULL,
    Price int,
    FOREIGN KEY (ItemID) REFERENCES Item(ID),
    FOREIGN KEY (UserID) REFERENCES User(ID)
);

INSERT INTO User (ID)