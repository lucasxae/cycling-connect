# Cycling Connect

O objetivo deste projeto é desenvolver e implementar uma aplicativo móvel dedicado para otimizar o treinamento de ciclistas, visando melhorar o processo de comunicação e acompanhamento entre o treinador e os atletas. A aplicação buscará superar as limitações do atual método manual de envio de planilhas diárias via WhatsApp, proporcionando uma experiência mais eficiente e personalizada para cada ciclista. O foco está na criação de um ambiente virtual que permita a fácil disponibilização das fichas de treino, adaptação dinâmica conforme as necessidades individuais, e a implementação de mecanismos eficazes de acompanhamento do progresso, facilitando a avaliação da aderência ao programa de treinamento.

## Alunos integrantes da equipe

* Ana Luiza Machado Alves
* André Augusto Silva Carvalho
* Guilherme Leroy Teixeira Capanema
* Lucas Henrique Chaves de Barros
* Ryann Victor de Almeida Parreira

## Professores responsáveis

* Eveline Alonso Veloso
* Lucas Henrique Pereira
* Pedro Pongelupe Lopes

## Instruções de utilização

# Windows - Target OS: Android

Este guia tem como objetivo fornecer instruções passo a passo para configurar e executar um projeto React Native CLI em um ambiente Windows para desenvolvimento Android.

### Pré-requisitos
- Chocolatey: para instalar as dependências a seguir.
- Node.js e npm: Certifique-se de ter o Node.js >= 18 e o npm instalados em sua máquina.
- Git: Instale o Git em sua máquina a partir do site oficial do Git.
- JDK (Java Development Kit): Certifique-se de ter o JDK >= 17 instalado em sua máquina. 
- Android Studio: Instale o Android Studio em sua máquina para configurar o ambiente de desenvolvimento Android. Versão utilizada: Android Studio Iguana 2023.2.1
- Configurações utilizadas:
  - SDK Platforms: Android 14.0 (UpsideDownCake)
  - SDK Tools:
    - Android SDK Build-Tools: 33.0.1
    - NDK: 24.0.8215888
    - CMake: 3.22.1
    - Android Emulator
    - Android SDK Platform-Tools
Obs: verificar dependências para processadores AMD no site oficial do React Native.

### Passos para Executar o Projeto React Native CLI
1. Clone o repositório do projeto:

```git clone https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti3-8981100-cycling-connect.git```

2. Instale as dependências do projeto:
Navegue até o diretório do projeto clonado e execute o seguinte comando:

```cd .\Codigo\CyclingConnect && npm install```

3. Configuração do ambiente Android:
- Abra o Android Studio e aguarde até que todas as atualizações e configurações necessárias sejam concluídas.
- Crie um novo dispositivo virtual Android através da opção Virtual Device Manager ou conecte um dispositivo físico ao seu computador.

4. Verifique as variáveis de ambiente:
Certifique-se de que as variáveis de ambiente JAVA_HOME e ANDROID_HOME estão configuradas corretamente em seu sistema. Elas devem apontar para o diretório de instalação do JDK e do SDK do Android, respectivamente.

5. Executando o projeto:
- Abra um terminal na raiz do seu projeto.
- Execute o seguinte comando para iniciar o servidor de desenvolvimento React Native:
```npx react-native start```

Após a inicialização do Metro, abra outra janela do terminal, execute o seguinte comando para iniciar o aplicativo no emulador ou dispositivo Android:
```npx react-native run-android```

6. Acessar o back-end localmente
Volte na raiz do projeto e navegue até o diretório da API:
```cd .\Codigo\Cycling-api\src\main\java\com\CyclingConnect\cyclingconnect```

Instale as dependências do Maven e execute o arquivo CyclingconnectApplication.java pela sua IDE.

7. Visualize o aplicativo:
Após a conclusão do processo de compilação, o aplicativo será instalado e iniciado automaticamente no emulador ou dispositivo Android conectado. Você poderá fazer as requisições locais.

# Gerar APK e AAB
Por padrão existe um APK na pasta "...\android\app\build\outputs\apk\debug" que é gerado para instalar o app no emulador durante o processo de desenvolvimento.

## Atualizar Gradle

1. Confira a versão atual do seu gradle
`./gradle --version`
`./gradlew --version`
2. No site "[gradle.org/releases](http://gradle.org/releases)" confira a versão mais atual e digite o comando
./gradlew wrapper --gradle-version lts
3. Digite novamente o comando "./gradlew --version" para completar o download e verificar a versão atualizada

---

## Geração da build

1. Entre na pasta do aplicativo
2. Rode os comandos abaixo para gerar os arquivo de keystore (chave). Uma linha de comando de cada vez
    
    `keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`
    
    `keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`
    
    2.1   Será necessário inserir uma senha e mais algumas informações 6 digitos (123456).
    2.2   Ao finalizar serão gerados os arquivos das chaves na pasta ao app (my-release-key.keystore  e  my-upload-key.keystore).
    
3. Copie as chaves e cole na pasta app que fica dentro da pasta android do seu projeto
{seuApp}\android\app
4. Agora vamos configurar as váriaveis do Gradle
4.1   Na pasta android do seu projeto ( {seuApp}\android ) no arquivo gradle.properties insira os comandos a seguir:
    
    `MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
     MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
     MYAPP_UPLOAD_STORE_PASSWORD=***Senha que vc digitou antes***
     MYAPP_UPLOAD_KEY_PASSWORD=***Senha que vc digitou antes***`
    
5. Na pasta ( {seuApp}\android\app ) no arquivo build.gradle insira os comandos dentro de android {signingConfigs}
    
    `release {
        if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
           storeFile file(MYAPP_UPLOAD_STORE_FILE)
           storePassword MYAPP_UPLOAD_STORE_PASSWORD
           keyAlias MYAPP_UPLOAD_KEY_ALIAS
           keyPassword MYAPP_UPLOAD_KEY_PASSWORD
        }
    }`
    
    5.1    (e dentro do buildTypes) insira o comando:
    release {
    signingConfig signingConfigs.release
    }
    
6. Gerando o arquivo APK
    
    6.1   No prompt digite o comando dentro da pasta ( Android ) do seu App digite:
    ./gradlew assembleRelease
    6.2   Para gerar o AAB para publicar na google play digite o comando:
    ./gradlew bundleRelease
    
7. O APK se encontrará na pasta
...\android\app\build\outputs\apk\release
8. O AAB se encontrará na pasta
...\android\app\build\outputs\bundle\release

