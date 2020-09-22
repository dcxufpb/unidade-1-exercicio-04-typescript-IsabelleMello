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
    cupom.dados.nome_loja;
  } catch (e) {
    expect(e.message).toBe(`O campo nome da loja é obrigatório`);
  }
  cupom.dados.nome_loja = "Arcos Dourados Com. de Alimentos LTDA";
});

test('Logradouro vazio', () => {
  cupom.dados.logradouro = "";
  try {
    cupom.dados.logradouro;
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
    cupom.dados.municipio;
  } catch (e) {
    expect(e.message).toBe(`O campo município do endereço é obrigatório`);
  }
  cupom.dados.municipio = "Campinas";
});

test('Estado vazio', () => {
  cupom.dados.estado = "";
  try {
    cupom.dados.estado;
  } catch (e) {
    expect(e.message).toBe(`O campo estado do endereço é obrigatório`);
  }
  cupom.dados.estado = "SP";
});

test('CNPJ vazio', () => {
  cupom.dados.cnpj = "";
  try {
    cupom.dados.cnpj;
  } catch (e) {
    expect(e.message).toBe(`O campo CNPJ da loja é obrigatório`);
  }
  cupom.dados.cnpj = "42.591.651/0797-34";
});

test('Inscrição estadual vazia', () => {
  cupom.dados.inscricao_estadual = "";
  try {
    cupom.dados.inscricao_estadual;
  } catch (e) {
    expect(e.message).toBe(`O campo inscrição estadual da loja é obrigatório`);
  }
  cupom.dados.inscricao_estadual = "244.898.500.113";
});

test('Exercício 2 - customizado', () => {

  // Defina seus próprios valores para as variáveis a seguir
  cupom.dados.nome_loja = "Boa vista Flores";
  cupom.dados.logradouro = "Rua Jardim Peres";
  cupom.dados.numero = 122;
  cupom.dados.complemento = "EUC F30/31/44";
  cupom.dados.bairro = "Centro";
  cupom.dados.municipio = "Monteiro";
  cupom.dados.estado = "PB";
  cupom.dados.cep = "58500000";
  cupom.dados.telefone = "(99) 9999-9999";
  cupom.dados.observacao = "Loja 122 (PDB)";
  cupom.dados.cnpj = "22.300.551/0110-56";
  cupom.dados.inscricao_estadual = "432.118.667.777";

  //E atualize o texto esperado abaixo
  expect(cupom.dados_loja()).toBe( 
    `Boa vista Flores
Rua Jardim Peres, 122 EUC F30/31/44
Centro - Monteiro - PB
CEP:58500000 Tel (99) 9999-9999
Loja 122 (PDB)
CNPJ: 22.300.551/0110-56
IE: 432.118.667.777
`);
});
