# README pour le Script de Gestion AWS S3

Ce script Node.js offre une interface en ligne de commande (CLI) pour interagir avec Amazon S3. Il permet de créer des buckets, d'obtenir des URLs signées pour les objets, et d'uploader des objets dans un bucket spécifique. Le script utilise le SDK AWS pour JavaScript.

## Prérequis

- Node.js doit être installé sur votre machine.
- Un compte AWS avec les permissions nécessaires pour créer des buckets, uploader des objets, et générer des URLs signées.
- Les clés d'accès AWS (Access Key ID et Secret Access Key) doivent être configurées localement dans le fichier `.env`. Les variables doivent être définies comme suit :
  - `AWS_ACCESS_KEY_ID="VOTRE_ACCESS_KEY"`
  - `AWS_SECRET_ACCESS_KEY="VOTRE_SECRET_ACCESS_KEY"`

## Configuration

1. Clonez ou téléchargez ce dépôt sur votre machine.
2. Dans le dossier du projet, installez les dépendances en exécutant `npm install` ou `yarn install`.
3. Assurez-vous que vos clés d'accès AWS sont correctement configurées.

## Utilisation

Le script prend en charge trois commandes principales :

### 1. Créer un Bucket

Pour créer un bucket, utilisez la commande `createbucket` suivie du nom du bucket à créer.

```bash
node index.js createbucket <NomDuBucket>
```

### 2. Obtenir une URL Signée

Pour obtenir une URL signée pour un objet spécifique dans un bucket, utilisez la commande `geturl` suivie du nom du bucket et du chemin d'accès de l'objet.

```bash
node index.js geturl <NomDuBucket> <CheminDaccesDuFichier>
```

### 3. Uploader un Objet

Pour uploader un objet dans un bucket, utilisez la commande `uploadobject` suivie du nom du bucket, du nom du fichier local, et du chemin/nom de l'objet dans le bucket.

**Le fichier doit se trouver impérativement dans le dossier `uploadDocument`.**

```bash
node index.js uploadobject <NomDuBucket> <NomDuFichier> <Chemin/NomDansS3>
```

## Exemples

- Créer un bucket :

```bash
node index.js createbucket mon-nouveau-bucket
```

- Obtenir une URL signée pour un objet :

```bash
node index.js geturl mon-bucket dossier_S3/image.jpg
```

- Uploader un objet dans un bucket :

```bash
node index.js uploadobject mon-bucket monFichier.jpg dossier_S3/fichier.jpg
```

## Sécurité

- Ne stockez jamais vos clés d'accès AWS directement dans le code source. Utilisez plutôt des variables d'environnement ou le fichier de configuration AWS.
- Assurez-vous de mettre en place des politiques IAM appropriées pour les utilisateurs et les rôles interagissant avec les services AWS.

## Licence

Ce projet est distribué sous la licence MIT. Consultez le fichier `LICENSE` pour plus d'informations. (Veillez à inclure un fichier de licence si cela est votre intention.)

---

Ce README offre les informations essentielles pour débuter l'utilisation du script. N'hésitez pas à l'adapter ou l'étendre en fonction des particularités de votre projet ou de besoins additionnels.
