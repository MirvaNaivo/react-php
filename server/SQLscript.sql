CREATE TABLE `dogs` (
  `id` SERIAL PRIMARY KEY,
  `name` varchar(32) NOT NULL,
  `breed` varchar(32) NOT NULL,
  `age` INT,
  `image_id` INT
);

INSERT INTO dogs (name, breed, age, image_id) 
VALUES ('Waka', 'labrabull', 3, 1),('Ellis', 'mixed', 7, 2), ('Keri', 'mixed', 5, 3);


CREATE TABLE `info` (
	`info_id` SERIAL PRIMARY KEY,
    `info` varchar(400) NOT NULL,
    `dog_id` INT
);

INSERT INTO info (info, dog_id) 
VALUES ('Waka is energetic and extremely smart girl. She opens every door and gate if she wants to.', 1), 
('Ellis is sweet old lady, who loves her person. With other people she is cautious', 2),
('Keri is a lovely girl from Russia. She was saved in 2020 and has been living with a loving family since', 3);
