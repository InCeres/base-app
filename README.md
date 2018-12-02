#Base App

Um modelo básico de App AngularJS usado na Plataforma InCeres. 

Vem também com o cliente do <a href="https://github.com/pusher/pusher-angular" target="_blank">Pusher</a> configurado para você receber as notificações que a API vai enviar. Porquê você precisa de notificações? Pense na cereja em cima do bolo!

Esse esqueleto já vem com um Gruntfile construído a duras penas para produzir um código HTML, JS e CSS para ambientes de dev e produção.

##Instalação

Você vai precisar ter o NVM e o RVM instalados. Adicione a versão do NodeJS _(eca!)_ e do Ruby de sua preferência. Eles são usados apenas para tarefas de build do App.

O NodeJS _(calafriiiios)_ vai rodar o Grunt para fazer as tarefas de organização do código e o Ruby para rodar o Compass (que é executado pelo Grunt) para gerar o CSS do SASS.

Após fazer o git clone e uma vez com o NodeJS _(urgh)_ e o Ruby instalados e ativos, instale os pacotes do npm.

Os comandos abaixo devem sempre ser digitados na pasta do app:

    $ npm install
    $ npm install -g bower
    $ npm install -g grunt
    $ npm install -g grunt-cli
    $ bower install

Duas pastas são adicionadas ao projeto e as duas ignoradas pelo git:

    src/lib: pacotes do bower
    node_modules: pacotes do npm

##Desenvolvimento

Ao iniciar o desenvolvimento no App, rode o comando abaixo:

    $ grunt api

O grunt irá fazer o build e ativar um watcher. Assim, qdo você alterar qualquer arquivo debaixo do watcher, o build irá atualizar a parte do tipo do arquivo.

Todo o conteúdo do site a ser servido por um webserver estará na pasta `www`

##Abrindo em um browser

O NodeJS _(bleeargh)_ te oferece a possibilidade de rodar o App em um WebServer e assim te permitir abrir o App em um browser. Não faça isso! Vai por mim, quanto menos NodeJS _(ungh)_ vc usar, melhor! hehehe!

Para abrir seu App de uma maneira profissional, que é a maneira como vc deve fazer em um ambiente de produção, configure o NGINX. É simples, é de graça e extremamente poderoso. A configuração para o seu NGINX servir o App é: 

    server {
            listen 80;
            server_name local-base.inceres.com.br;
    
            root /<caminho>/base-app/www;
            index index.html;
    
            location / {
            }
    
            location /api {
                    proxy_connect_timeout 300s;
                    proxy_read_timeout 300s;
                    proxy_set_header Host $host;
                    proxy_set_header X-Real-IP $remote_addr;
                    proxy_pass http://0.0.0.0:33366;
            }
    
    }
    
Sendo que a parte do `location /api` já é para servir de proxy para sua API. Como rodar essa API está no README.md do projeto API, cAPIsce?

.

.

Sim, é só isso!