--sql to create the Product table
CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sku VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    type ENUM('Dvd','Book','Furniture') NOT NULL,
    attribute_type_name ENUM('size','weight','dimensions') NOT NULL,
    attribute_type_value VARCHAR(255) NOT NULL,
    attribute_unit_name varchar(10)
);
