#!/bin/bash
#Script pour convertir la base de données en un format utilisable par l'interpréteur (supprime le dernier ; de chaque ligne)
InputDBPath="database_miniOK.csv"
OutputDBPath="database_miniOK-transformed.csv"
rm -f "./$OutputDBPath"
#écriture de la ligne des headers
head -n 1 "$InputDBPath" > "$OutputDBPath"
while IFS= read -r line
do
  echo "$line" | rev | cut -c 2- | rev >> "$OutputDBPath"
done < <(tail -n +2 "$InputDBPath")
echo "Conversion terminée, fichier converti: $OutputDBPath"