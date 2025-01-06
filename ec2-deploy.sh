#!/bin/bash

# Mettre à jour les paquets
sudo apt-get update -y
sudo apt-get upgrade -y

# Installer Node.js (version 20 recommandée pour Next.js 14)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Installer Git
sudo apt-get install -y git

# Cloner le dépôt GitHub
git clone https://github.com/aboubacar3012/nextjs-template.git /var/www/nextjs-template

# Aller dans le répertoire du projet
cd /var/www/nextjs-template

# Installer les dépendances npm
npm install

# Construire l'application Next.js
npm run build

# Lancer l'application (en arrière-plan avec pm2)
sudo npm install -g pm2
pm2 start npm --name "nextjs-app" -- start

# Activer pm2 pour redémarrer au reboot
pm2 startup
eval $(pm2 startup)
pm2 save
