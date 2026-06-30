# Defeito

## ID
BUG-LOGIN-009

## Título
API de login aceita tipo inválido no campo "senha" sem validação de schema

## Testador
Lucia de Melo

## Data e Hora
29/06/2026 - 18:40

## Resultado Esperado
O sistema deve validar o tipo dos campos enviados no endpoint de login.
O campo "senha" deve aceitar apenas string.
Caso seja enviado um número, a API deve retornar erro 400 informando erro de validação de tipo.

## Resultado Atual
A API aceita o campo "senha" como número e processa a requisição com sucesso.
O sistema retorna status 200 e gera token de autenticação normalmente.

## Evidências
- Caso de teste executado: CT-LOGIN-009
- Payload enviado:
  {
    "username": "julio.lima",
    "senha": 123456
  }

- Resposta da API:
  Status: 200

  Body:
  {
    "token": "eyJhbGciOiJIUzI1NiIs..."
  }

## Prioridade
Alta

## Severidade
Alta - Falha de validação de entrada pode permitir comportamento inconsistente, riscos de segurança e quebra de contrato da API.

## Informações sobre o Software
- API de autenticação local (ambiente de desenvolvimento)
- Base URL: http://localhost:3000
- Endpoint afetado: POST /login
- Versão: não informada

## Rastreabilidade
- CT-LOGIN-009 - Validar password como número

## Status
Aberto