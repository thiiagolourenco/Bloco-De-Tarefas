<h1 align="center">
    <img alt="Angular" title="Angular" src="./favicon.ico" width="50px" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Como rodar o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar-o-projeto">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-agradecimentos">Agradecimentos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
  
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/thiiagolourenco/Proffy?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/thiiagolourenco/Proffy">

</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/) (Back-end),
- [Angular CLI](https://github.com/angular/angular-cli) version 8.3.10.
- TypeScript, HTML e CSS (Front-end).

## 💻 Projeto

**Bloco de Tarefas** - Bloco de tarefas que permita o usuário controlar suas tarefas pessoais.

## 🚀 Como rodar o projeto

Podemos considerar este projeto como sendo divido em duas parte:

1. Front-End,
2. Back-end. (Ler as observações)

💡 É necessário que o Back-end esteja rodando para que o Front-end seja executado.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Angular CLI](https://github.com/angular/angular-cli).
Além disto é bom ter um editor para trabalhar com o código como _VSCode_

## Clonando o projeto

Comece realizando um clone deste projeto, se preferir você também pode baixar como um .zip acessando o site do GitHub

```bash
# Clone este repositório
$ git clone https://github.com/thiiagolourenco/Proffy

# Acesse a pasta do projeto no seu terminal/cmd
$ cd proffy
```

### Rodando a aplicação

1. Server de desenvolvimento: Execute `ng serve` para usar o server de desenvolvimetno. Navegue para `http://localhost:4200/`. As mudanças são aplicadas automaticamente.
<br>
2. Build: Execute `ng build` para buildar o projeto. Os artefatos da build estarão na pasta `dist/`. Você pode usar a flag `--prod` para realizar a build de produção.
<br>
3. Rodar testes unitários: Execute `ng test` para executar os testes via [Karma](https://karma-runner.github.io).
<br>
4. Rodar testes ponta a ponta: Execute `ng e2e` para executar os testes via [Protractor](http://www.protractortest.org/).

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

## 🙌 Agradecimentos

- [Time da Udemy](https://www.udemy.com/)

---

Feito por Thiago Lourenço

<a href="https://www.linkedin.com/in/thiago-lourenço-201053173/">
  <img alt="Feito por thiiagolourenco" src="https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiago-lourenço-201053173/">
</a>

<a href="https://github.com/thiiagolourenco" style="margin-left: 8px;">
  <img alt="Feito por thiiagolourenco" src="https://img.shields.io/badge/-GitHub-grey?style=flat&logo=GitHub&logoColor=white&link=https://github.com/thiiagolourenco">
</a>


# Observações

Obs.: Como não existia um Back-end dedicado as tarefas são guardadas no localstorage.

Obs².: Para ter acessos a mais ajuda no Angular CLI acesse [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Obs³.: 2. Gerar arquivos no Angular CLI: Execute `ng generate component component-name` para gerar um novo componente. VocÊ também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

