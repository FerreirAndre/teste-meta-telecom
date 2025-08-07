# 📚 Book Manager

Sistema completo para cadastro, visualização e gerenciamento de livros. Desenvolvido com Java (Spring Boot) no back-end, Angular no front-end e PostgreSQL como banco de dados.

---

## ✨ Tecnologias Utilizadas

- **Back-end:** Java 21 + Spring Boot + JPA + Bean Validation
- **Front-end:** Angular 20
- **Banco de Dados:** PostgreSQL 16 (Docker)
- **Ferramentas adicionais:** Docker, Maven, IntelliJ/VS Code

---

## 📦 Estrutura do Projeto

teste-meta-telecom/

├── telecom-api/ # API Java Spring Boot

├── telecom-ui/ # Aplicação Angular

└── README.md # Você está aqui.

## 🚀 Como Executar

### 📌 Pré-requisitos

- Java 21+
- Node.js + Angular (20) CLI
- Docker e Docker Compose
- Maven

### 🐘 Subir banco de dados

```docker run --name postgres-telecom \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=admin \
  -e POSTGRES_DB=telecomdb \
  -p 5432:5432 \
  -v postgres_telecom_data:/var/lib/postgresql/data \
  -d postgres:16
```

### ⚙️ Configuracao da API Java

No application.properties, os campos são os seguintes

```
spring.application.name=telecom-api
spring.datasource.url=jdbc:postgresql://localhost:5432/telecomdb
spring.datasource.username=postgres
spring.datasource.password=admin

spring.jpa.hibernate.ddl-auto=update
```

### ▶️ Rodar a API

Com banco de dados configurado, execute:
`./mvnw spring-boot:run`

### 🖥️ Rodar o Frontend Angular

Acesse a pasta `telecom-ui` e execute:

```
npm install
ng serve
```

A aplicacao estará disponível em `http://localhost:4200/books`

### 📚 Funcionalidades

- ✅ Cadastro de livros com capa, título, autor e resumo

- 📝 Edição e remoção de livros

- 📖 Visualização detalhada de cada livro

- 🔍 Listagem de todos os livros

- 💡 UI responsiva e simples

### 📂 Endpoints Principais da API

Método Rota Descrição

- `GET /books` Lista todos os livros
- `GET /books/{id}` Retorna um livro detalhado - com summary
- `POST /books` Cria um novo livro
- `PUT /books/{id}` Atualiza um livro
- `DELETE /books/{id}` Remove um livro
