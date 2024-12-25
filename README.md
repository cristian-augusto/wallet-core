# wallet-core

Projeto desenvolvido como parte do treinamento Full Cycle, referente ao módulo EDA (Event-Driven Architeture), o
foco principal deste mini projeto é permitir comunicação entre fluxos distintos através de eventos, utilizando uma
mensageria para que rotinas sejam executadas.

### Fluxograma

1. Cria-se o cliente 1 e uma conta vinculada a ele;

2. Cria-se o cliente 2 e uma conta vinculada a ele;

3. Cria-se uma transação (transferência de valor da conta A para a conta B);

4. O evento TransactionCreated é emitido;

5. O handler do evento publica uma mensagem no tópico transaction-created;

6. O consumidor do tópico é acionado e atualiza o saldo das contas;

### Requisitos funcionais

- Permitir criação de cliente (nome, email);
- Criar uma conta para o cliente;
- Permitir transferir valores entre contas;

### Considerações

Para simplificar o projeto, é permitido que uma conta sem saldo efetue transferências (simulando crédito emergencial).

### Tecnologias

- **Linguagem:** Typescript;
- **Webserver:** express;
- **Banco de dados:** SQLite3 (better-sqlite3);
- **Mensageria:** Kafka;

### Como executar o projeto?

Via npm:

```sh
npm i
npm run dev

```

Via docker:

```sh
docker-compose up --build -d
```

### API (endpoints)

Para verificar os endpoints disponíveis basta verificar o arquivo **.http**
