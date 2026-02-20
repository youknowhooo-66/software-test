CREATE DATABASE api_produtos;
USE api_produtos;

CREATE TABLE produtos (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45),
valor DECIMAL(7,2),
descricao VARCHAR(255),
ativo INT
);

INSERT INTO produtos (nome, valor, descricao, ativo) VALUES 
('Notebook Gamer', 4599.99, 'Notebook i7 RTX 3060 16GB RAM', 1),
('Batom Matte', 29.90, 'Batom de longa duração 12 cores', 1),
('Arroz 5kg', 19.90, 'Arroz branco tipo 1 agulhinha', 1),
('Tesoura de Podar', 49.90, 'Tesoura profissional para jardim', 1),
('Tapete Automotivo', 89.90, 'Tapete borracha para 4 portas', 1),
('Mouse Gamer', 129.90, 'Mouse 16000 DPI RGB 7 botões', 1),
('Shampoo Antiqueda', 39.90, 'Shampoo fortalece raiz 400ml', 1),
('Feijão 1kg', 9.90, 'Feijão carioca premium', 1),
('Pá de Jardim', 35.90, 'Pá cabo madeira aço carbono', 1),
('Carregador Turbo', 79.90, 'Carregador 65W PD QC 3.0', 1),
('Tablet 10.1"', 899.90, 'Tablet Android 64GB 4GB RAM', 1),
('Perfume 100ml', 199.90, 'Perfume importado notas amadeiradas', 1),
('Macarrão Espaguete', 4.90, 'Macarrão italiano 500g', 1),
('Regador 10L', 29.90, 'Regador plástico capacidade 10L', 1),
('Câmera Re Automotiva', 299.90, 'Câmera ré visão noturna HD', 1),
('Headset Gamer', 199.90, 'Headset surround 7.1 microfone', 1),
('Creme Hidratante', 24.90, 'Creme facial hidratação 24h', 1),
('Azeite ExtraVirgem', 29.90, 'Azeite de oliva português 500ml', 1),
('Martelo Profissional', 59.90, 'Martelo cabo fibra aço forjado', 1),
('Suporte Celular Carro', 39.90, 'Suporte ventosa 360° ajuste', 1);