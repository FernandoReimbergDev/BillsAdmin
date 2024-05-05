//exemplo para criar tabela: //Nota IF NOT EXISTS eu adicionei para nao criar a tabela caso ela ja exista.

CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY AUTOINCREMENT, 
  name VARCHAR, 
  email VARCHAR, 
  password VARCHAR,
  avatar VARCHAR NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

//exemplo de insert de dados

INSERT INTO users
(name, email, password)
VALUES 
('Luiz Fernando Reimberg', 'fernandoreimberg14@hotmail.com', '12341234')

//exemplo de alterar usuario 
UPDATE users SET 
avatar = 'fernando.png' 
WHERE id = 1;

//exemplo de deletar usuario
DELETE FROM users WHERE id = 1

//exemplo mudar nome da tabela

ALTER TABLE users RENAME TO clients

//exemplo de adicionar uma coluna na tabela

ALTER TABLE users ADD status VARCHAR 

//exemplo para renomear uma coluna

ALTER TABLE users RENAME COLUMN status TO active


//exemplo para deletar uma coluna 

ALTER TABLE users DROP COLUMN status

SQL - COMANDOS DML = data manupulation language

C - created - INSERT 
R - read - SELECT 
U - update - UPDATE
D - delete - DELETE