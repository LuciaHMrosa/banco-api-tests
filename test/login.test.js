const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config()
const postLogin = require('../fixtures/postLogin.json')

describe('Login', () => {

    describe('POST /login', () => {

        it('CT-LOGIN-001 -Validar geração de token com credenciais válidas', async () => {

            const bodyLogin = postLogin.valido;

            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)


            expect(resposta.status).to.equal(200);
            expect(resposta.body).to.have.property('token');
            expect(resposta.body.token).to.be.a('string');
            expect(resposta.body.token).to.not.be.empty;
        })

        it('CT-LOGIN-002 - Validar usuário vazio', async () => {

            const bodyLogin = postLogin.usuarioVazio;
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)


            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error');
            expect(resposta.body.error).to.equal('Usuário e senha são obrigatórios.');
        })

        it('CT-LOGIN-003 - Validar senha vazia', async () => {

            const bodyLogin = postLogin.senhaVazia;
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)


            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error');
            expect(resposta.body.error).to.equal('Usuário e senha são obrigatórios.');
        })

        it('CT-LOGIN-004 - Validar usuário e senha vazios', async () => {

            const bodyLogin = postLogin.usuarioESenhaVazios;
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)


            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error');
            expect(resposta.body.error).to.equal('Usuário e senha são obrigatórios.');
        })

        it('CT-LOGIN-005 - Validar usuário inválido', async () => {

            const bodyLogin = postLogin.usuarioInvalido;
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)


            expect(resposta.status).to.equal(401);
            expect(resposta.body).to.have.property('error');
            expect(resposta.body.error).to.equal('Usuário ou senha inválidos.');
        })

        it('CT-LOGIN-006 - Validar senha inválida', async () => {

            const bodyLogin = postLogin.senhaInvalida;
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)


            expect(resposta.status).to.equal(401);
            expect(resposta.body).to.have.property('error');
            expect(resposta.body.error).to.equal('Usuário ou senha inválidos.');
        })

        it('CT-LOGIN-007 - Validar usuário e senha inválidos', async () => {

            const bodyLogin = postLogin.credenciaisInvalidas;
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)


            expect(resposta.status).to.equal(401);
            expect(resposta.body).to.have.property('error');
            expect(resposta.body.error).to.equal('Usuário ou senha inválidos.');
        })

        it('CT-LOGIN-008 - Validar username como número', async () => {

            const bodyLogin = postLogin.usernameNumero;
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)


            expect(resposta.status).to.equal(401);
            expect(resposta.body).to.have.property('error');
            expect(resposta.body.error).to.equal('Usuário ou senha inválidos.');
        })

        it('CT-LOGIN-009 - Validar senha como número', async () => {

            const bodyLogin = postLogin.senhaNumero;
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)


            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error');
            expect(resposta.body.error).to.equal('Usuário e senha são obrigatórios.');
            expect(resposta.body).to.not.have.property('token');
        })

        it('CT-LOGIN-010 - Validar ausência do campo username', async () => {

            const bodyLogin = postLogin.usernameAusente;
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)


            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error');
            expect(resposta.body.error).to.equal('Usuário e senha são obrigatórios.');
        })

        it('CT-LOGIN-011 - Validar ausência do campo password', async () => {

            const bodyLogin = postLogin.senhaAusente;
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)


            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error');
            expect(resposta.body.error).to.equal('Usuário e senha são obrigatórios.');
        })

        it('CT-LOGIN-012 - Validar envio de body vazio', async () => {

            const bodyLogin = {};
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)


            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error');
            expect(resposta.body.error).to.equal('Usuário e senha são obrigatórios.');
        })

        it('CT-LOGIN-013 - Validar envio de body nulo', async () => {

            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({})


            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error');
            expect(resposta.body.error).to.equal('Usuário e senha são obrigatórios.');
        })

        it('CT-LOGIN-014 - Validar método HTTP não permitido', async () => {

            const bodyLogin = postLogin.valido;
            const resposta = await request(process.env.BASE_URL)
                .get('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)


            expect(resposta.status).to.equal(405);
            expect(resposta.body).to.have.property('error');
            expect(resposta.body.error).to.equal('Método não permitido.');
        })


    })
})