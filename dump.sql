CREATE TABLE empresa (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  logo VARCHAR(100),
  cnpj VARCHAR(18) NOT NULL,
  cep VARCHAR(10) NOT NULL
);

CREATE TABLE endereco (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cep VARCHAR(10) NOT NULL,
  rua VARCHAR(100),
  numero INT,
  complemento VARCHAR(50),
  bairro VARCHAR(100),
  cidade VARCHAR(100),
  estado VARCHAR(100),
  UNIQUE (cep)
);

ALTER TABLE empresa
ADD FOREIGN KEY (cep) REFERENCES endereco(cep);


CREATE TABLE horario_atendimento (
  id INT PRIMARY KEY AUTO_INCREMENT,
  empresa_id INT,
  dia_semana VARCHAR(20) NOT NULL,
  horario_abertura TIME NOT NULL,
  horario_fechamento TIME NOT NULL
);

ALTER TABLE horario_atendimento
ADD FOREIGN KEY (empresa_id) REFERENCES empresa(id);


CREATE TABLE forma_pagamento (
  id INT PRIMARY KEY AUTO_INCREMENT,
  forma VARCHAR(100)
);

CREATE TABLE empresa_forma_pagamento (
  id INT PRIMARY KEY AUTO_INCREMENT,
  empresa_id INT,
  forma_pagamento_id INT,
  FOREIGN KEY (empresa_id) REFERENCES empresa(id),
  FOREIGN KEY (forma_pagamento_id) REFERENCES forma_pagamento(id)
);

CREATE TABLE empresa_categoria(
	id INT PRIMARY KEY AUTO_INCREMENT,
	empresa_id INT
	categoria_id INT
	FOREIGN KEY (empresa_id) REFERENCES empresa(id)
	FOREIGN KEY (categoria_id) REFERENCES categoria(id)
)

CREATE TABLE produto (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  descricao TEXT,
);

CREATE TABLE categoria (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE produto_categoria (
  produto_id INT,
  categoria_id INT,
  FOREIGN KEY (produto_id) REFERENCES produto(id),
  FOREIGN KEY (categoria_id) REFERENCES categoria(id),
  PRIMARY KEY (produto_id, categoria_id)
);

CREATE TABLE promocao (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  desconto DECIMAL(5,2) NOT NULL
);

CREATE TABLE promocao_produto (
  promocao_id INT,
  produto_id INT,
  PRIMARY KEY (promocao_id, produto_id),
  FOREIGN KEY (promocao_id) REFERENCES promocao(id),
  FOREIGN KEY (produto_id) REFERENCES produto(id)
);

CREATE TABLE cliente (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  endereco_id INT,
);
ALTER TABLE cliente
ADD FOREIGN KEY (endereco_id) REFERENCES endereco(id)


CREATE TABLE compra (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cliente_id INT,
  produto_id INT,
  forma_pagamento_id INT,
  empresa_id INT,
  FOREIGN KEY (cliente_id) REFERENCES cliente(id),
  FOREIGN KEY (produto_id) REFERENCES produto(id),
  FOREIGN KEY (forma_pagamento_id) REFERENCES forma_pagamento(id),
  FOREIGN KEY (empresa_id) REFERENCES empresa(id)
);
