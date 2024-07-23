# Projeto-Luiggi

## Parte front-end do projeto

Configuração

Siga os passos abaixo para configurar e executar o projeto.
Pré-requisitos

    Node.js e npm instalados em sua máquina
    Conta AWS com credenciais (access key ID, secret access key)
    AWS CLI instalado (para configurar o DynamoDB e SQS)

Instalação

    Clone o repositório:

    bash

git clone https://github.com/RenatoSouzaAN/Projeto-Luiggi

Acesse o diretório do projeto:

bash

cd seu-projeto

Instale as dependências:

bash

npm install

Dentro do arquivo aws.js, ponha suas credenciais AWS como mostra abaixo:

config =

    region: "sua-regiao-aws"
    accessKeyId: "sua-access-key-id"
    secretAccessKey: "sua-secret-access-key"

    Substitua sua-regiao-aws, sua-access-key-id e sua-secret-access-key por suas credenciais AWS reais.

Executando o Projeto

    Inicie o servidor:

    bash

    npm run dev

    Abra seu navegador e acesse http://localhost:3000 para visualizar a aplicação Next.js.

Estrutura do Projeto

Descreva brevemente a estrutura do seu projeto.

    /src: Contém o código-fonte da aplicação Next.js.
        /app: Contém funções de utilidade e componentes.
            /utils: Contém configuração e utilidades da AWS.
        /pages: Contém páginas do Next.js.

Recursos

Liste os principais recursos do seu projeto.

    Rota de API para enviar transações para AWS SQS
    Função AWS Lambda para processar mensagens SQS e salvar no DynamoDB
    Aplicação Next.js para exibir transações do DynamoDB

Solução de Problemas

Se encontrar problemas, siga estas etapas de solução de problemas:

    Variáveis de Ambiente: Verifique se as variáveis de ambiente no arquivo .env estão formatadas corretamente e foram carregadas.

    Dependências: Confirme se todas as dependências foram instaladas usando o comando npm install.

    Credenciais AWS: Verifique suas credenciais AWS no arquivo .env.

    Ordem de Carregamento: Certifique-se de que o módulo dotenv seja carregado no início do arquivo de ponto de entrada do seu aplicativo.

Informações Adicionais

Por conta de dificuldades em configurar a integração entre ".env" e as credenciais da AWS, a área onde são escritas as credenciais está em branco. Sendo necessário por o valor bruto. Esta área sendo o "config" dentro do arquivo "aws.js", localizado em "projeto-luiggi-front/next-dynamodb/src/app/utils".

#

## Parte backend

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
