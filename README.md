# Projeto-AWS (AWS-Lambda + SQS + DynamoDB + NodeJS)

Projeto de aprendizado onde uma API POST em NodeJS recebe um payload de uma transação (idempotencyId, amount, type: credit /debit).

Essa rota executa uma função que coloca a transação em uma AWS SQS (fila), usando SDK da AWS.

Junto, uma função AWS Lambda conectada nessa SQS que pegua cada mensagem e salva num banco de dados AWS DynamoDB.

Foi criado um script de teste para criar 100 transações diferentes e fazer a requisição POST.

Foi feita uma tela simples usando Next.JS que exibe as transações salvas no DynamoDB, a partir de uma rota GET.

Link para o front-end: https://github.com/RenatoSouzaAN/Projeto-Aprendizado-AWS-Frontend

## Parte backend do projeto

Backend do Projeto

Esta parte do projeto consiste em arquivos essenciais para o backend.
Arquivos Principais

    App.js

    Este arquivo contém a lógica principal da aplicação backend, utilizando o framework Express para lidar com solicitações HTTP e a biblioteca AWS SDK para interagir com os serviços da AWS.

        Funcionalidades:
            Implementa uma rota POST ("/transaction") para receber transações e enviá-las para a fila do SQS.
            Configuração do cliente AWS SQS para enviar mensagens.

        Instruções de Uso:
            Certifique-se de ter as dependências instaladas executando npm install.
            Inicie o backend com o comando node App.js.

        Solução de Problemas:
            Se encontrar problemas relacionados à configuração da AWS, verifique se as credenciais estão corretas no arquivo App.js.
            Certifique-se de que o serviço SQS esteja configurado corretamente na AWS.

    testScript.js

    Este script realiza testes de integração, simulando transações enviadas para o backend.

        Objetivo:
            Gera transações aleatórias e as envia para o backend para testar o fluxo.

        Instruções de Execução:
            Antes de executar o script, verifique se o backend está em execução.
            Execute o script com o comando node testScript.js.

        Relatórios de Teste:
            Os resultados dos testes serão exibidos no console.

    index.mjs

    Este arquivo é a entrada principal para a função AWS Lambda. Ele recebe mensagens da fila SQS e as salva no DynamoDB.

        Funcionalidades:
            Conecta-se à fila SQS e salva transações no DynamoDB.
            Utiliza a biblioteca AWS SDK para interagir com o DynamoDB.

        Configuração:
            Certifique-se de que as credenciais AWS e as configurações de região estejam corretas.

        Instruções de Implantação:
            Empacote os arquivos comprimidos no diretório "teste" para implantação no AWS Lambda.
            Configure a função Lambda para ser acionada pela fila SQS.

Testes

O script de teste testScript.js envia transações simuladas para o backend e exibe os resultados no console.
Solução de Problemas

    Credenciais AWS:
        Verifique se as credenciais AWS no arquivo App.js estão corretas.
    Configuração SQS:
        Certifique-se de que a fila SQS esteja configurada corretamente na AWS.

Informações Adicionais

    Estrutura do Projeto:
        Certifique-se de que a estrutura do projeto esteja organizada conforme mencionado no README.
        O diretório "teste" contém os arquivos compactados para implantação no AWS Lambda.
