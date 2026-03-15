const request = require('supertest');
const { expect } = require('chai');
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json')
require('dotenv').config()

describe('Transferencias', () => {

    let token
    beforeEach(async () => {
        //capturar o token
        token = await obterToken('julio.lima', 123456)
    })

    describe('POST /transferencias', () => {

        it('Deve retornar sucesso com 201, quando o valor da transferencias for igual ou acima de R$10,00', async () => {

            const bodyTransferencias = { ...postTransferencias }
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)
            expect(resposta.status).to.equal(201);

        })
        it('Deve retornar falha com 422, quando a transferencias for abaixo de R$ 10,00', async () => {

            const bodyTransferencias = { ...postTransferencias }
            bodyTransferencias.valor = 7
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)
            expect(resposta.status).to.equal(422);
        })

    })
    describe('GET /transferencias/{id}', () => {
        it('Deve retornar sucesso com 200 e dados iguais ao registro de transferencias contido no banco de dados, quando o ID for valido', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/4')
                .set('Authorization', `Bearer ${token}`)

            expect(resposta.status).to.equal(200);
            expect(resposta.body.id).to.be.equal(4);
            expect(resposta.body.id).to.be.a('number');
            expect(resposta.body.conta_origem_id).to.equal(1);
            expect(resposta.body.conta_destino_id).to.equal(2);
            expect(resposta.body.valor).to.equal(11.00);
            expect(resposta.body.conta_origem_id).to.be.a('number');


        })
    })
    describe('GET /transferencias', () => {
        it('Deve retornar 4 elementos na paginação quando informar limite de 4 registros', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=4') // isso pegamos do postman porem la tava 10, mas ja sei que meu bd tem só 4
                .set('Authorization', `Bearer ${token}`)

            expect(resposta.status).to.equal(200)
            expect(resposta.body.limit).to.equal(4)
            expect(resposta.body.transferencias).to.have.length(4)
        })
    })
})