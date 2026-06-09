# Guide d'utilisation — Site Bonestroo Immo

> **Pour qui ?** Ce guide est fait pour toi : zéro code, zéro technique. Tu modifies un fichier texte, tu glisses-déposes, c'est en ligne.

---

## 🖥️ Quel outil utiliser pour les modifications ?

### Hébergement recommandé : **Netlify** (gratuit)
**Pourquoi Netlify ?**
- Glisser-déposer = site en ligne en 30 secondes
- Gratuit pour ce type de site
- URL personnalisable (ex: `bonestroo-immo.netlify.app`)
- Zéro configuration serveur

👉 **Site :** [netlify.com](https://www.netlify.com)

### Éditeur de fichiers recommandé : **Visual Studio Code** (gratuit)
**Pourquoi VS Code ?**
- Gratuit, simple, colore le code pour s'y retrouver
- Recherche + remplacement en un clic (Ctrl+H)
- Disponible sur Windows, Mac, Linux

👉 **Télécharger :** [code.visualstudio.com](https://code.visualstudio.com)

**Alternative ultra-simple (Windows) :** Notepad++  
👉 [notepad-plus-plus.org](https://notepad-plus-plus.org)

---

## 🚀 Mettre le site en ligne (première fois)

1. Va sur [netlify.com](https://www.netlify.com) → crée un compte gratuit
2. Depuis le tableau de bord, clique **"Add new site"** → **"Deploy manually"**
3. **Glisse-dépose le dossier `immo-site/` entier** dans la grande zone
4. Netlify te donne une URL du type `random-name-123.netlify.app`
5. Pour renommer l'URL : **Site configuration** → **Change site name** → tape `bonestroo-immo`

---

## 🔄 Mettre à jour le site après une modification

Chaque fois que tu modifies `index.html` ou ajoutes des photos :

1. Ouvre le tableau de bord Netlify
2. Clique sur ton site → onglet **"Deploys"**
3. En bas de la page : **"Drag and drop your site output folder here"**
4. Glisse-dépose à nouveau le dossier `immo-site/` entier
5. C'est en ligne en 30 secondes ✓

---

## 🏠 Ajouter un nouveau bien — Template complète

Ouvre `index.html` avec VS Code.  
Fais **Ctrl+F** et cherche `const BIENS = [`.  
Trouve la ligne `];` qui ferme le tableau. Colle le bloc ci-dessous **juste avant ce `];`**, en ajoutant une virgule `,` après le bien précédent.

### ✂️ TEMPLATE À COPIER-COLLER (maison ou appartement)

```js
  {
    id: 2,                          // ← numéro suivant (2, 3, 4...)
    type: "maison",                 // ← "maison" ou "appartement"
    badge: { fr: "Nouveau", en: "New", nl: "Nieuw" },
    // Autres valeurs de badge : "Exclusivité"/"Exclusive"/"Exclusief"
    //                           "Prix baissé"/"Price drop"/"Prijs verlaagd"
    //                           "Coup de cœur"/"Staff pick"/"Aanrader"
    badgeClass: "",                 // ← "" = badge terre cuite  |  "exclu" = badge bleu
    prix: "000 000 €",              // ← prix affiché sur la carte et la fiche
    prixNum: 000000,                // ← même prix en chiffres (pour le filtre budget)
    localisation: {
      fr: "Ville — Quartier",
      en: "City — District",
      nl: "Stad — Wijk"
    },
    adresseComplete: "N° Rue, Code Ville",   // ← adresse complète pour Google Maps
    lat: 43.0000, lng: 7.0000,     // ← coordonnées GPS (voir section Carte ci-dessous)
    tags: {                        // ← 4 à 5 tags courts affichés sous le prix
      fr: ["XX m²", "X pièces", "Vue mer", "Terrasse"],
      en: ["XX m²", "X rooms", "Sea view", "Terrace"],
      nl: ["XX m²", "X kamers", "Zeezicht", "Terras"]
    },
    photos: [                      // ← chemins des photos (mettre la plus belle en 1er)
      "photos/bien2_photo1.jpg",
      "photos/bien2_photo2.jpg",
      "photos/bien2_photo3.jpg"
    ],
    video: null,                   // ← null si pas de vidéo  |  "videos/bien2.mp4" si vidéo
    stats: {
      "m²": 00,                    // ← surface principale (loi Carrez)
      fr: { "Pièces": 0, "Étage": 0, "DPE": "C", "Chauffage": "Gaz central" },
      en: { "Rooms": 0, "Floor": 0, "EPC": "C", "Heating": "Central gas" },
      nl: { "Kamers": 0, "Verdieping": 0, "EPC": "C", "Verwarming": "Centraal gas" }
      // Pour une maison avec terrain, remplace "Étage"/"Floor"/"Verdieping"
      //   par "Terrain"/"Land"/"Grond" avec valeur "XXX m²"
    },
    caracteristiques: {            // ← liste des équipements et points forts
      fr: ["Terrasse 9 m²", "Vue mer", "Cave", "Parking", "Cuisine équipée"],
      en: ["Terrace 9 m²", "Sea view", "Cellar", "Parking", "Fitted kitchen"],
      nl: ["Terras 9 m²", "Zeezicht", "Kelder", "Parkeerplaats", "Ingerichte keuken"]
    },
    distances: {                   // ← distances utiles depuis le bien
      fr: { "Plage": "5 min à pied", "Centre-ville": "3 min", "Gare": "10 min" },
      en: { "Beach": "5 min walk", "City center": "3 min", "Station": "10 min" },
      nl: { "Strand": "5 min lopen", "Centrum": "3 min", "Station": "10 min" }
    },
    description: {                 // ← texte long de présentation (2-3 paragraphes)
      fr: "Description complète en français...",
      en: "Full description in English...",
      nl: "Volledige beschrijving in het Nederlands..."
    }
  },
```

### Tableau des champs

| Champ | Ce qu'il faut mettre | Exemple |
|---|---|---|
| `id` | Numéro suivant (pas de doublon !) | `2` |
| `type` | `"appartement"` ou `"maison"` | `"maison"` |
| `badge` | Étiquette colorée sur la photo | `"Nouveau"` |
| `badgeClass` | `""` = rouge, `"exclu"` = bleu | `"exclu"` |
| `prix` | Prix affiché (avec €) | `"630 000 €"` |
| `prixNum` | Même prix sans espace ni € | `630000` |
| `localisation` | Ville et quartier (3 langues) | `"Roquebrune — Village"` |
| `lat` / `lng` | Coordonnées GPS | `43.7700` / `7.4650` |
| `tags` | 4–5 mots-clés courts (3 langues) | `["83 m²", "Vue mer"]` |
| `photos` | Chemins depuis le dossier `photos/` | `"photos/bien2_terrasse.jpg"` |
| `video` | `null` ou chemin `.mp4` | `"videos/bien2.mp4"` |
| `stats["m²"]` | Surface Loi Carrez | `83` |
| `DPE` / `EPC` | Lettre A à G | `"C"` |

---

## 🗺️ Trouver les coordonnées GPS d'un bien

1. Va sur **Google Maps** → [maps.google.com](https://maps.google.com)
2. Cherche l'adresse du bien
3. **Clic droit** sur le point exact sur la carte
4. Les coordonnées s'affichent tout en haut du menu : ex. `43.7700, 7.4650`
5. Clique dessus → elles sont copiées
6. Dans le code : premier chiffre → `lat:`, deuxième → `lng:`

> ⚠️ Ne pas inverser lat et lng !

---

## 📸 Ajouter des photos à un bien

### Préparer les photos

- **Format :** JPG ou WEBP (évite PNG — trop lourd)
- **Taille :** 1 200 px de large minimum
- **Orientation :** paysage (horizontale)
- **Poids :** moins de 500 Ko (compresse sur [squoosh.app](https://squoosh.app))

### Nommer et placer les photos

```
immo-site/
└── photos/
    ├── hero1.jpg              ← image de fond du site (à remplacer)
    ├── hero2.jpg              ← image de fond du site (à remplacer)
    ├── bien1_terrace.jpg      ← biens existants
    ├── bien2_facade.jpg       ← nouveau bien
    └── bien2_salon.jpg
```

> ✅ Noms sans espaces, sans accents : `bien2_vue-mer.jpg`  
> ❌ Jamais : `bien 2 vue mer.jpg` ou `bien2_vué.jpg`

---

## 🗑️ Supprimer un bien

Dans `index.html`, cherche `id: X` (X = le numéro du bien).  
Supprime tout le bloc depuis `{` jusqu'au `},` (virgule finale incluse).  
Sauvegarde → redéploie sur Netlify.

---

## ✏️ Modifier un bien existant

Ouvre `index.html`, cherche le texte à modifier (ex: le prix), modifie, sauvegarde, redéploie.

**Astuce VS Code :** Ctrl+H = chercher et remplacer dans tout le fichier.

---

## 🎬 Ajouter une vidéo à un bien

Les fichiers iPhone sont en `.mov` → **convertir en `.mp4` d'abord.**

- **Mac :** QuickTime → Fichier → Exporter → "Pour iPhone"
- **En ligne :** [cloudconvert.com](https://cloudconvert.com) → MOV → MP4

Ensuite :
1. Place le `.mp4` dans `videos/`
2. Dans le bien : remplace `video: null` par `video: "videos/bien2.mp4",`

---

## 🖼️ Changer les images de fond (hero)

Le fond qui reste fixe derrière le site utilise deux photos qui se succèdent en fondu.  
Elles s'appellent `hero1.jpg` et `hero2.jpg` et se trouvent dans le dossier `photos/`.

Pour les remplacer :
1. Prépare ta photo (paysage, au moins 1 920 px de large, moins de 1 Mo)
2. Nomme-la `hero1.jpg` (ou `hero2.jpg`)
3. Glisse-dépose dans `photos/` en écrasant l'ancienne
4. Redéploie sur Netlify

---

## 🌍 Changer la langue par défaut

Le site s'ouvre en français. Pour ouvrir en néerlandais :  
Dans `index.html`, cherche `currentLang = 'fr'` → remplace par `currentLang = 'nl'`.

---

## 📱 Générer un QR code (vitrines / flyers)

1. Va sur [qr-code-generator.com](https://www.qr-code-generator.com)
2. Colle l'URL Netlify de ton site
3. Couleur terre cuite : `#C4622D`
4. Télécharge en PNG haute résolution

---

## 🆘 En cas de problème

| Problème | Solution |
|---|---|
| Site ne s'affiche pas après déploiement | Vérifie que tu as glissé le **dossier** `immo-site/`, pas juste `index.html` |
| La carte ne s'affiche pas | Chrome → F12 → onglet "Console" → note l'erreur rouge |
| Une photo ne s'affiche pas | Vérifie le nom exact du fichier (majuscules comptent) et qu'il est dans `photos/` |
| Changer une couleur | En haut de `index.html`, cherche `:root {` — toutes les couleurs sont là |

---

## 📁 Structure du dossier

```
immo-site/
├── index.html              ← le site entier (1 seul fichier à modifier)
├── photos/
│   ├── hero1.jpg           ← fond fixe du site (à remplacer par une vraie photo)
│   ├── hero2.jpg           ← fond fixe du site (à remplacer par une vraie photo)
│   ├── bien1_terrace.jpg
│   └── ...
├── videos/
│   └── (tes vidéos .mp4)
└── GUIDE-UTILISATION.md   ← ce guide
```
