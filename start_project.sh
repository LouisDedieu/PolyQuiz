#!/bin/bash

# Naviguer vers le dossier backend et exécuter npm install et npm start
echo "Lancement des commandes pour le backend..."
cd backend
npm install
npm start &

# Revenir au dossier racine
cd ..

# Naviguer vers le dossier frontend et exécuter npm install et npm start
echo "Lancement des commandes pour le frontend..."
cd front-end
npm install -g @angular/cli
npm start --open &

echo "Les commandes ont été lancées pour les deux dossiers."
