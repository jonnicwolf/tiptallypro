CREATE TABLE users (
  user_id INT PRIMARY KEY,
  username VARCHAR(50) NOT NULL
);

CREATE TABLE passwords (
  password INT PRIMARY KEY,
  password_hash varchar(255) NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);


INSERT INTO users (user_id, username)
VALUES
  (1, 'admin');

INSERT INTO passwords (user_id,)