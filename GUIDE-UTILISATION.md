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

## 🗺️ Comment fonctionne la carte du site

La carte (section "Les biens sur la carte") s'affiche automatiquement à partir des coordonnées GPS que tu mets dans chaque bien.

**Chaque bien a deux lignes dans le fichier :**
```
lat: 43.7754, lng: 7.5019,
```
C'est la latitude et la longitude. La carte place un marqueur à cet endroit avec le prix du bien. Si on clique sur le marqueur, la fiche du bien s'ouvre.

### Trouver les coordonnées d'une adresse en 4 clics

1. Va sur **Google Maps** → [maps.google.com](https://maps.google.com)
2. Cherche l'adresse du bien dans la barre de recherche
3. **Clic droit** sur le point exact sur la carte (pas sur la punaise, sur la rue/bâtiment)
4. Les coordonnées apparaissent tout en haut du menu : ex. **`43.7754, 7.5019`**
5. Clique dessus → elles sont copiées dans le presse-papier
6. Dans `index.html` : colle le premier chiffre après `lat:` et le deuxième après `lng:`

```
lat: 43.7754, lng: 7.5019,
```

> ⚠️ Attention : le premier chiffre = lat, le deuxième = lng. Ne pas les inverser.

---

## 🏠 Ajouter un bien sur le site

Ouvre `index.html` avec VS Code. Fais **Ctrl+F** et cherche `const BIENS = [`.

Tu vois une liste de biens entre `[` et `]`. Chaque bien ressemble à ça :

```js
{
  id: 1,
  type: "appartement",
  badge: { fr: "Nouveau", en: "New", nl: "Nieuw" },
  badgeClass: "",
  prix: "485 000 €",
  localisation: { fr: "Menton — Vieille Ville", en: "Menton — Old Town", nl: "Menton — Oude Stad" },
  lat: 43.7754, lng: 7.5019,
  tags: {
    fr: ["92 m²", "3 pièces", "Vue mer", "Terrasse"],
    en: ["92 m²", "3 rooms", "Sea view", "Terrace"],
    nl: ["92 m²", "3 kamers", "Zeezicht", "Terras"]
  },
  photos: ["photos/bien1_a.jpg", "photos/bien1_b.jpg"],
  video: null,
  stats: {
    "m²": 92,
    fr: { "Pièces": 3, "Étage": 4, "DPE": "B" },
    en: { "Rooms": 3, "Floor": 4, "EPC": "B" },
    nl: { "Kamers": 3, "Verdieping": 4, "EPC": "B" }
  },
  description: {
    fr: "Magnifique appartement...",
    en: "Magnificent apartment...",
    nl: "Prachtig appartement..."
  }
},
```

### Étape par étape pour ajouter un bien

**1. Copie un bloc entier** (de `{` jusqu'au `},` à la fin)

**2. Colle-le juste après le dernier bien** (avant le `]` final)

**3. Modifie chaque champ :**

| Champ | Ce qu'il faut mettre | Exemple |
|---|---|---|
| `id` | Numéro suivant | `5` |
| `type` | `"appartement"` ou `"maison"` | `"maison"` |
| `badge` | Étiquette colorée sur la photo | `"Nouveau"` / `"New"` / `"Nieuw"` |
| `badgeClass` | `""` = rouge terre cuite, `"exclu"` = bleu | `"exclu"` |
| `prix` | Prix affiché | `"750 000 €"` |
| `localisation` | Ville et quartier (en 3 langues) | voir exemple |
| `lat` / `lng` | Coordonnées GPS (voir section carte) | `43.7754` |
| `tags` | Caractéristiques courtes (en 3 langues) | `["145 m²", "4 pièces"]` |
| `photos` | Chemins des photos (voir section photos) | `["photos/bien5_a.jpg"]` |
| `video` | Chemin vidéo ou `null` | `"videos/bien5.mp4"` ou `null` |
| `stats` | Surface + détails | voir exemple |
| `description` | Texte de présentation (en 3 langues) | paragraphe complet |

---

## 📸 Ajouter des photos à un bien

### Préparer les photos

- **Format :** JPG ou WEBP (pas PNG — trop lourd)
- **Taille :** 1200px de large minimum, idéalement 1600px
- **Orientation :** paysage (horizontale) — pas portrait
- **Poids :** moins de 500 Ko par photo (compresse sur [squoosh.app](https://squoosh.app) si besoin)

### Nommer et placer les photos

Nomme tes photos de façon claire et place-les dans le dossier `photos/` :

```
immo-site/
└── photos/
    ├── hero1.jpg         ← fond du site (vue Roquebrune)
    ├── hero2.jpg         ← fond du site (vue Menton)
    ├── bien1_salon.jpg
    ├── bien1_terrasse.jpg
    ├── bien1_chambre.jpg
    ├── bien2_facade.jpg
    └── ...
```

> ⚠️ Pas d'espaces, pas d'accents dans les noms de fichiers !  
> ✅ `bien3_vue-mer.jpg`  
> ❌ `bien 3 vue mer.jpg`  
> ❌ `bien3_vué-mér.jpg`

### Lier les photos au bien dans le code

Dans le JSON du bien, remplace `photos: []` par :

```js
photos: ["photos/bien1_salon.jpg", "photos/bien1_terrasse.jpg", "photos/bien1_chambre.jpg"],
```

Les photos s'affichent dans la galerie du modal avec navigation gauche/droite.

---

## 🗑️ Supprimer un bien

Dans `index.html`, cherche `id: X` (X = le numéro du bien).  
Supprime tout le bloc : depuis `{` jusqu'au `},` (inclus la virgule finale).  
Sauvegarde → redéploie sur Netlify.

---

## ✏️ Modifier un bien existant

Ouvre `index.html`, cherche le texte que tu veux modifier (ex: le prix), modifie-le, sauvegarde, redéploie.

**Astuce VS Code :** Ctrl+H = chercher et remplacer dans tout le fichier.

---

## 🎬 Ajouter une vidéo à un bien

Les clients envoient souvent des `.mov` (iPhone) → **il faut convertir en `.mp4` d'abord.**

**Convertir .mov en .mp4 gratuitement :**
- **Mac :** QuickTime → Fichier → Exporter → "Pour iPhone" → enregistre
- **En ligne :** [cloudconvert.com](https://cloudconvert.com) → MOV → MP4

Ensuite :
1. Place le fichier `.mp4` dans le dossier `videos/`
2. Dans le JSON du bien, remplace `video: null` par :
```js
video: "videos/bien1.mp4",
```

---

## 🔤 Modifier les textes de l'agence

Fais **Ctrl+H** dans VS Code pour chercher et remplacer :

| Ce que tu cherches | Ce que tu mets |
|---|---|
| `+33 4 93 XX XX XX` | Ton vrai numéro |
| `contact@bonestroo-immo.fr` | Ton vrai email |
| `12 Promenade du Soleil, 06500 Menton` | Ta vraie adresse |
| `N° XXXXX` | Ton numéro de carte pro |

---

## 🌍 Changer la langue par défaut

Le site s'ouvre en français par défaut. Pour ouvrir en néerlandais :

Dans `index.html`, cherche `currentLang = 'fr'` et remplace par `currentLang = 'nl'`.

---

## 📱 Générer un QR code pour vitrines / flyers

1. Va sur [qr-code-generator.com](https://www.qr-code-generator.com)
2. Colle l'URL de ton site Netlify
3. Personnalise la couleur (terre cuite = `#C4622D`)
4. Télécharge en PNG haute résolution
5. Glisse-dépose dans Word, Canva, ou ton logiciel de flyers

---

## 🆘 En cas de problème

**Le site ne s'affiche pas après déploiement ?**
→ Vérifie que tu as glissé-déposé le dossier `immo-site/` et pas juste le fichier `index.html`

**La carte ne s'affiche pas ?**
→ Ouvre le site dans Chrome → F12 → onglet "Console" → signale-moi l'erreur en rouge

**Une photo ne s'affiche pas ?**
→ Vérifie le nom exact du fichier (majuscules/minuscules comptent) et qu'il est bien dans `photos/`

**Tu veux changer une couleur ?**
→ En haut de `index.html`, cherche `:root {` — toutes les couleurs du site sont là

---

## 📁 Structure du dossier livré

```
immo-site/
├── index.html              ← le site entier (1 seul fichier)
├── photos/
│   ├── hero1.jpg           ← fond hero (à ajouter)
│   ├── hero2.jpg           ← fond hero (à ajouter)
│   └── (tes photos de biens)
├── videos/
│   └── (tes vidéos .mp4)
├── README.md               ← guide rapide
└── GUIDE-UTILISATION.md   ← ce guide complet
```
