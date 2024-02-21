# Projet de Gestion AWS S3

Ce projet Node.js met à disposition un outil CLI (Interface de Ligne de Commande) pour faciliter les interactions avec le service Amazon S3. Conçu pour permettre la création de buckets, l'obtention d'URLs signées, et l'upload de fichiers dans des buckets S3 de manière simple et directe, cet outil exploite le SDK AWS pour JavaScript. Idéal pour les développeurs et administrateurs système, il optimise la gestion des ressources S3 sans nécessiter la console AWS ou des scripts complexes.

## Prérequis

- Node.js installé sur votre système.
- Un compte AWS avec les permissions adéquates.
- Les clés d'accès AWS configurées dans le fichier `.env` comme suit :
  - `AWS_ACCESS_KEY_ID="VOTRE_ACCESS_KEY"`
  - `AWS_SECRET_ACCESS_KEY="VOTRE_SECRET_ACCESS_KEY"`

## Configuration

1. Clonez ou téléchargez le dépôt.
2. Installez les dépendances avec `npm install` ou `yarn install`.
3. Vérifiez la configuration de vos clés d'accès AWS.

## Fonctionnalités

- **Création de Buckets :** `node index.js createbucket <NomDuBucket>`
- **Obtention d'URLs Signées :** `node index.js geturl <NomDuBucket> <CheminDaccesDuFichier>`
- **Upload de Fichiers :** Les fichiers doivent se trouver dans `uploadDocument`. 
  - `node index.js uploadobject <NomDuBucket> <NomDuFichier> <Chemin/NomDansS3>`

## Utilisation

Cet outil est parfait pour une gestion rapide et efficace des ressources S3, simplifiant des opérations telles que le déploiement, la maintenance, ou la gestion quotidienne des données.

## Sécurité

- Utilisez des variables d'environnement pour vos clés d'accès AWS.
- Mettez en place des politiques IAM adéquates pour minimiser les risques.

## Contribution

Les contributions sont encouragées et appréciées. N'hésitez pas à soumettre des pull requests ou ouvrir des issues pour toute suggestion d'amélioration.

## Licence

Ce projet est sous licence MIT, permettant une utilisation et modification libres selon les termes de cette licence.

---

L'intégration de ces deux documents fournit une vue d'ensemble concise et informative du projet, soulignant son utilité, sa facilité d'utilisation, et comment démarrer rapidement pour les nouveaux utilisateurs.
