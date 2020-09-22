const cupom = require('./cupom');

test('Loja Completa', () => {
  expect(cupom.dados_loja()).toBe(
    `Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, 500 EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
});

test('Nome vazio', () => {
  cupom.dados.nome_loja = "";
  try {
    cupom.dados_loja();
  } catch (e) {
    expect(e.message).toBe(`O campo nome da loja é obrigatório`);
  }
  cupom.dados.nome_loja = "Arcos Dourados Com. de Alimentos LTDA";
});

test('Logradouro vazio', () => {
  cupom.dados.logradouro = "";
  try {
    cupom.dados_loja();
  } catch (e) {
    expect(e.message).toBe(`O campo logradouro do endereço é obrigatório`);
  }
  cupom.dados.logradouro = "Av. Projetada Leste";
});

test('Número zero', () => {
  cupom.dados.numero = 0;
  expect(cupom.dados_loja()).toBe(
    `Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, s/n EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
  cupom.dados.numero = 500;
});

test('Município vazio', () => {
  cupom.dados.municipio = "";
  try {
    cupom.dados_loja();
  } catch (e) {
    expect(e.message).toBe(`O campo município do endereço é obrigatório`);
  }
  cupom.dados.municipio = "Campinas";
});

test('Estado vazio', () => {
  cupom.dados.estado = "";
  try {
    cupom.dados_loja();
  } catch (e) {
    expect(e.message).toBe(`O campo estado do endereço é obrigatório`);
  }
  cupom.dados.estado = "SP";
});

test('CNPJ vazio', () => {
  cupom.dados.cnpj = "";
  try {
    cupom.dados_loja();
  } catch (e) {
    expect(e.message).toBe(`O campo CNPJ da loja é obrigatório`);
  }
  cupom.dados.cnpj = "42.591.651/0797-34";
});

test('Inscrição estadual vazia', () => {
  cupom.dados.inscricao_estadual = "";
  try {
    cupom.dados_loja();
  } catch (e) {
    expect(e.message).toBe(`O campo inscrição estadual da loja é obrigatório`);
  }
  cupom.dados.inscricao_estadual = "244.898.500.113";
});

test('Exercício 2 - customizado', () => {

  // Defina seus próprios valores para as variáveis a seguir
  cupom.dados.nome_loja = "";
  cupom.dados.logradouro = "";
  cupom.dados.numero = 0;
  cupom.dados.complemento = "";
  cupom.dados.bairro = "";
  cupom.dados.municipio = "";
  cupom.dados.estado = "";
  cupom.dados.cep = "";
  cupom.dados.telefone = "";
  cupom.dados.observacao = "";
  cupom.dados.cnpj = "";
  cupom.dados.inscricao_estadual = "";

  //E atualize o texto esperado abaixo
  expect(cupom.dados_loja()).toBe(
    `
`);
});
