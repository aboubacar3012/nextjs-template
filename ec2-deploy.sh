#!/bin/bash

# Mettre à jour les paquets
sudo yum update -y

# Installer Node.js version 20 depuis NodeSource
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs git

# Mettre à jour npm vers la version 11.0.0
sudo npm install -g npm@11.0.0

# Créer le répertoire /var/www s'il n'existe pas
sudo mkdir -p /var/www
sudo chown -R $USER:$USER /var/www

# Cloner le dépôt GitHub
git clone https://github.com/aboubacar3012/nextjs-template.git /var/www/nextjs-template

# Aller dans le répertoire du projet
cd /var/www/nextjs-template

# Installer les dépendances npm
npm install

# Construire l'application Next.js
npm run build

# Installer PM2 pour gérer l'application
sudo npm install -g pm2

# Démarrer l'application avec PM2
pm2 start npm --name "nextjs-app" -- start

# Configurer PM2 pour redémarrer au reboot
pm2 startup
pm2 save

# Configurer le pare-feu pour ouvrir le port 3000
sudo firewall-cmd --add-port=3000/tcp --permanent
sudo firewall-cmd --reload
