# Backend

Architecture du backend

## Créer le projet
initialiser le projet avec npm init -y
ensuite télécharger les dépendances suivants en tapant npm i :
expess cors body-parser dotenv mysql2;

Télécharger pour les dépendances pour le les devDependencies en tapant npm i --save-dev : morgan nodemon supertest jest;

Dans le package.json, ajouter le script suivant :
"dev": "nodemon server.js"

## Créer le dossier 
Ouvrir le terminal en tapant CTRL ù. Ensuite taper la commande suivante :

1. mkdir backend celà créé le dossier backend et faite la même chose pour le dossier src à mettre dans le dossier backend et le dossier test.

2. Cliquez sur le dossier src et créer les dossier suivant comme précédemment:

- controllers
- models
- routes
- services 
- middleware

Ensuite créer un fichier app.js dans le dossier src en tapant touch app.js dans le terminal

## Créer le fichier app.js
Importer avec require les modules suivant :
express cors body-parser dotenv et morgan.

## Créer le serveur 
Dans le dossier backend tapez créer le fichier server.js en tapant dans le terminal : touch server.js.

Créer le serveur avec express et le lancer avec le module nodemon. 
Dans la console taper npm run dev et regarder si le serveur ne renvoie pas d'erreurs.

Ensuite créer le fichier .env pour mettre les variables d'environnement et le fichier.gitignore pour ne pas le mettre sur github. 
Ce fichier sert à mettre vos clès secrets dans le code.

Dans le fichier .gitignore ajouter le dossier node_modules et .env;

## Créer le fichier migrate.js pour la connexion à la base de données
Dans le dossier backend tapez créer le fichier migrate.js en tapant dans le terminal : touch migrate.js.

Créer le script de migration avec mysql2 et le lancer avec le module nodemon.

Dans le fichier migrate.js créer la connexion à la base de données avec mysql2 et lancer la migration avec la commande suivante : npm run migrate;

