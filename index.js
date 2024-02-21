// Import des fonctions des modules
const { createBucket } = require("./fonctions/createBucket");
const { getUrl } = require("./fonctions/getUrl");
const { uploadObject } = require("./fonctions/uploadObject");

// Récupération des arguments de la ligne de commande
const args = process.argv.slice(2); // On enlève les deux premiers arguments ('node' et le chemin du script)

// Vérification et exécution de la commande appropriée
if (args.length > 0) {
  switch (args[0]) {
    case "createbucket":
      if (args[1]) {
        createBucket(args[1])
          .then(() => console.log(`\n\nBucket ${args[1]} créé avec succès.\n\n`))
          .catch((err) =>
            console.error(`\n\nErreur lors de la création du bucket : \n\n${err}\n\n`)
          );
      } else {
        console.log("\nVeuillez spécifier un nom de bucket.\n");
      }
      break;

    case "geturl":
      if (args[1] && args[2]) {
        getUrl(args[1], args[2]) // args[1] est le nom du bucket, args[2] est le nom de l'objet
          .then((url) => console.log(`\n\nURL obtenue : \n\n${url}\n\n`))
          .catch((err) =>
            console.error(`\n\nErreur lors de l'obtention de l'URL : \n\n${err}\n\n`)
          );
      } else {
        console.log("Veuillez spécifier un nom de bucket et un nom d'objet.\n\n");
      }
      break;

    case "uploadobject":
      if (args[1] && args[2] && args[3]) {
        uploadObject(args[1], args[2], args[3]) // args[1] est le nom du bucket, args[2] est le chemin du fichier, args[3] est le nom de l'objet / path dans S3
          .then(() =>
            console.log(`Objet ${args[3]} uploadé avec succès dans ${args[1]}.`)
          )
          .catch((err) =>
            console.error(`Erreur lors de l'upload de l'objet : ${err}`)
          );
      } else {
        console.log(
          "\n\nVeuillez spécifier un nom de bucket, un chemin de fichier et un nom d'objet.\n" +
          "args[1] est le nom du bucket, args[2] est le chemin du fichier dans S3 Ex : FolderTeste/Teste.md, args[3] est le nom local du fichier\n\n"
        );
      }
      break;

    default:
      console.log(
        "Commande non reconnue. Les commandes disponibles sont : createbucket, geturl, uploadobject."
      );
  }
} else {
  console.log("Usage : node index.js <commande> [...args]");
}
