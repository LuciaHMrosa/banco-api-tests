# POST /login

## Informações Gerais

**Endpoint:** `/login`

**Método:** `POST`

## Regras de Negócio

* Usuário é obrigatório.
* Senha é obrigatória.
* O sistema deve validar usuário e senha.
* Credenciais válidas devem gerar token.
* Credenciais inválidas devem retornar erro de autenticação.
* O token possui expiração de 1 hora.

---

# CT-LOGIN-001

## Identificação

| Campo           | Valor                                            |
| --------------- | ------------------------------------------------ |
| ID              | CT-LOGIN-001                                     |
| Título          | Validar geração de token com credenciais válidas |
| Prioridade      | Alta                                             |
| Rastreabilidade | RN-AUT-001, RN-AUT-002, RN-AUT-003               |
| Pré-Condições   | Usuário válido cadastrado                        |

### Dados de Entrada

```json
{
  "username": "julio.lima",
  "senha": "123456"
}
```

### Passos

| Passo | Ação                  | Resultado Esperado    |
| ----- | --------------------- | --------------------- |
| 1     | Enviar POST /login    | Requisição processada |
| 2     | Validar status code   | 200                   |
| 3     | Validar token         | Token retornado       |
| 4     | Validar tipo do token | String                |
| 5     | Validar conteúdo      | Não vazio             |

### Pós-Condições

Token gerado.

---

# CT-LOGIN-002

| Campo           | Valor                 |
| --------------- | --------------------- |
| ID              | CT-LOGIN-002          |
| Título          | Validar usuário vazio |
| Prioridade      | Alta                  |
| Rastreabilidade | RN-AUT-001            |

### Dados de Entrada

```json
{
  "username": "",
  "senha": "123456"
}
```

### Passos

| Passo | Ação                | Resultado Esperado   |
| ----- | ------------------- | -------------------- |
| 1     | Enviar requisição   | Requisição rejeitada |
| 2     | Validar status code | 400                  |
| 3     | Validar mensagem    | Usuário obrigatório  |

---

# CT-LOGIN-003

| Campo           | Valor               |
| --------------- | ------------------- |
| ID              | CT-LOGIN-003        |
| Título          | Validar senha vazia |
| Prioridade      | Alta                |
| Rastreabilidade | RN-AUT-001          |

### Dados de Entrada

```json
{
  "username": "julio.lima",
  "senha": ""
}
```

### Passos

| Passo | Ação                | Resultado Esperado   |
| ----- | ------------------- | -------------------- |
| 1     | Enviar requisição   | Requisição rejeitada |
| 2     | Validar status code | 400                  |
| 3     | Validar mensagem    | Senha obrigatória    |

---

# CT-LOGIN-004

| Campo           | Valor                          |
| --------------- | ------------------------------ |
| ID              | CT-LOGIN-004                   |
| Título          | Validar usuário e senha vazios |
| Prioridade      | Alta                           |
| Rastreabilidade | RN-AUT-001                     |

### Dados de Entrada

```json
{
  "username": "",
  "senha": ""
}
```

### Passos

| Passo | Ação                | Resultado Esperado   |
| ----- | ------------------- | -------------------- |
| 1     | Enviar requisição   | Requisição rejeitada |
| 2     | Validar status code | 400                  |
| 3     | Validar mensagem    | Campos obrigatórios  |

---

# CT-LOGIN-005

| Campo           | Valor                    |
| --------------- | ------------------------ |
| ID              | CT-LOGIN-005             |
| Título          | Validar usuário inválido |
| Prioridade      | Alta                     |
| Rastreabilidade | RN-AUT-002               |

### Dados de Entrada

```json
{
  "username": "usuario.inexistente",
  "senha": "123456"
}
```

### Resultado Esperado

* Status Code 401
* Usuário ou senha inválidos

---

# CT-LOGIN-006

| Campo           | Valor                  |
| --------------- | ---------------------- |
| ID              | CT-LOGIN-006           |
| Título          | Validar senha inválida |
| Prioridade      | Alta                   |
| Rastreabilidade | RN-AUT-002             |

### Dados de Entrada

```json
{
  "username": "julio.lima",
  "senha": "654321"
}
```

### Resultado Esperado

* Status Code 401
* Usuário ou senha inválidos

---

# CT-LOGIN-007

| Campo           | Valor                             |
| --------------- | --------------------------------- |
| ID              | CT-LOGIN-007                      |
| Título          | Validar usuário e senha inválidos |
| Prioridade      | Alta                              |
| Rastreabilidade | RN-AUT-002                        |

### Resultado Esperado

* Status Code 401
* Usuário ou senha inválidos

---

# CT-LOGIN-008

| Campo           | Valor                        |
| --------------- | ---------------------------- |
| ID              | CT-LOGIN-008                 |
| Título          | Validar username como número |
| Prioridade      | Média                        |
| Rastreabilidade | Contrato API                 |

### Dados de Entrada

```json
{
  "username": 123,
  "senha": "123456"
}
```

### Resultado Esperado

* Status Code 401
* Tipo inválido

---

# CT-LOGIN-009

| Campo           | Valor                        |
| --------------- | ---------------------------- |
| ID              | CT-LOGIN-009                 |
| Título          | Validar password como número |
| Prioridade      | Média                        |
| Rastreabilidade | Contrato API                 |

### Dados de Entrada

```json
{
  "username": "julio.lima",
  "senha": 123456
}
```

### Resultado Esperado

* Status Code 400
* Tipo inválido

---

# CT-LOGIN-010

| Campo           | Valor                              |
| --------------- | ---------------------------------- |
| ID              | CT-LOGIN-010                       |
| Título          | Validar ausência do campo username |
| Prioridade      | Média                              |
| Rastreabilidade | Contrato API                       |

### Dados de Entrada

```json
{
  "senha": "123456"
}
```

### Resultado Esperado

* Status Code 400
* Campo obrigatório

---

# CT-LOGIN-011

| Campo           | Valor                              |
| --------------- | ---------------------------------- |
| ID              | CT-LOGIN-011                       |
| Título          | Validar ausência do campo password |
| Prioridade      | Média                              |
| Rastreabilidade | Contrato API                       |

### Dados de Entrada

```json
{
  "username": "julio.lima"
}
```

### Resultado Esperado

* Status Code 400
* Campo obrigatório

---

# CT-LOGIN-012

| Campo           | Valor                       |
| --------------- | --------------------------- |
| ID              | CT-LOGIN-012                |
| Título          | Validar envio de body vazio |
| Prioridade      | Média                       |
| Rastreabilidade | Contrato API                |

### Dados de Entrada

```json
{}
```

### Resultado Esperado

* Status Code 400
* Erro de validação

---

# CT-LOGIN-013

| Campo           | Valor                      |
| --------------- | -------------------------- |
| ID              | CT-LOGIN-013               |
| Título          | Validar envio de body nulo |
| Prioridade      | Baixa                      |
| Rastreabilidade | Contrato API               |

### Dados de Entrada

```json
null
```

### Resultado Esperado

* Status Code 400

---

# CT-LOGIN-014

| Campo           | Valor                             |
| --------------- | --------------------------------- |
| ID              | CT-LOGIN-014                      |
| Título          | Validar método HTTP não permitido |
| Prioridade      | Média                             |
| Rastreabilidade | Segurança API                     |

### Dados de Entrada

```http
GET /login
```

### Resultado Esperado

* Status Code 405
* Method Not Allowed

---



