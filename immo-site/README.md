# Guide d'utilisation — SARL Bonestroo Immo

Ce guide explique comment maintenir et mettre à jour le site immobilier de SARL Bonestroo sans connaissance technique avancée.

---

## Structure des fichiers

```
immo-site/
├── index.html            ← Page d'accueil
├── bien.html             ← Fiche détail d'un bien
├── mentions-legales.html ← Mentions légales / CGU / RGPD
├── data.js               ← Toutes les données des biens (à modifier)
├── i18n.js               ← Traductions FR / EN / NL
├── transitions.js        ← Animations de navigation
├── main.js               ← Logique page d'accueil
├── bien.js               ← Logique fiche détail
├── style.css             ← Feuille de style principale
├── photos/               ← Vos photos de biens et de fond
├── videos/               ← Vos vidéos (mp4 uniquement)
└── README.md             ← Ce guide
```

---

## 1. Ajouter un bien dans `data.js`

Ouvrez le fichier `data.js` avec un éditeur de texte (Notepad++, VS Code, ou même le Bloc-Notes).

Copiez un bloc `{ ... }` existant dans le tableau `BIENS`, collez-le à la fin (avant le `]` final) et modifiez tous les champs.

**Structure minimale à renseigner :**

```js
{
  id: 7,                          // Numéro unique — toujours plus grand que le dernier
  type: 'appartement',            // 'appartement' ou 'maison-villa'
  badge: {
    fr: 'Nouveau',
    en: 'New',
    nl: 'Nieuw'
  },
  badgeClass: '',                 // '' pour badge terre-cuite, 'exclu' pour badge bleu
  prix: '350 000 €',             // Texte affiché
  prixNum: 350000,               // Nombre pur pour le filtre budget
  localisation: {
    fr: 'Menton — Garavan',
    en: 'Menton — Garavan',
    nl: 'Menton — Garavan'
  },
  adresseComplete: '12 Avenue de la Gare, 06500 Menton',
  lat: 43.7750,                  // Coordonnées GPS (voir section 4)
  lng: 7.5010,
  tags: {
    fr: ['65 m²', '2 pièces', 'Balcon'],
    en: ['65 m²', '2 rooms', 'Balcony'],
    nl: ['65 m²', '2 kamers', 'Balkon']
  },
  photos: [
    'photos/bien7_1.jpg',        // Chemins vers vos photos (voir section 2)
    'photos/bien7_2.jpg'
  ],
  video: null,                   // null si pas de vidéo, sinon 'videos/bien7.mp4'
  stats: {
    'm²': 65,
    fr: { 'Pièces': 2, 'Étage': 1, 'DPE': 'C' },
    en: { 'Rooms': 2, 'Floor': 1, 'EPC': 'C' },
    nl: { 'Kamers': 2, 'Verdieping': 1, 'EPC': 'C' }
  },
  caracteristiques: {
    fr: ['Double vitrage', 'Cave privative', 'Parking en sous-sol'],
    en: ['Double glazing', 'Private cellar', 'Underground parking'],
    nl: ['Dubbele beglazing', 'Privékelder', 'Ondergrondse parkeerplaats']
  },
  distances: {
    fr: [
      { lieu: 'Plage', distance: '5 min à pied' },
      { lieu: 'Gare SNCF', distance: '10 min à pied' }
    ],
    en: [
      { lieu: 'Beach', distance: '5 min walk' },
      { lieu: 'Train station', distance: '10 min walk' }
    ],
    nl: [
      { lieu: 'Strand', distance: '5 min te voet' },
      { lieu: 'Treinstation', distance: '10 min te voet' }
    ]
  },
  description: {
    fr: [
      'Premier paragraphe de description en français...',
      'Deuxième paragraphe...',
      'Troisième paragraphe...'
    ],
    en: [
      'First paragraph in English...',
      'Second paragraph...',
      'Third paragraph...'
    ],
    nl: [
      'Eerste alinea in het Nederlands...',
      'Tweede alinea...',
      'Derde alinea...'
    ]
  }
}
```

> **Important :** ne pas oublier la virgule `,` après l'accolade fermante `}` du bien précédent avant de coller le nouveau bloc.

---

## 2. Nommer et placer les photos

Placez toutes les photos dans le dossier **`photos/`**.

Convention de nommage obligatoire :

```
photos/bien1_1.jpg    ← 1ère photo du bien n°1
photos/bien1_2.jpg    ← 2ème photo du bien n°1
photos/bien1_3.jpg    ← 3ème photo du bien n°1
photos/bien2_1.jpg    ← 1ère photo du bien n°2
```

**Format recommandé :** JPEG ou WebP, largeur minimale 1400 px, poids maximum 400 Ko par image.

Pour les photos de fond de la page d'accueil :

```
photos/hero1.jpg      ← 1ère photo de fond du hero
photos/hero2.jpg      ← 2ème photo de fond du hero
```

Dans `data.js`, renseignez le tableau `photos` du bien ainsi :

```js
photos: [
  'photos/bien7_1.jpg',
  'photos/bien7_2.jpg',
  'photos/bien7_3.jpg'
],
```

---

## 3. Convertir une vidéo .mov en .mp4

Les vidéos iPhone sont au format `.mov`. Le site n'accepte que le format `.mp4`.

**Conversion gratuite en ligne :**

1. Allez sur [cloudconvert.com/mov-to-mp4](https://cloudconvert.com/mov-to-mp4)
2. Déposez votre fichier `.mov`
3. Cliquez **Convert** puis téléchargez le fichier `.mp4`
4. Renommez le fichier : `bien7.mp4`
5. Placez-le dans le dossier `videos/`
6. Dans `data.js`, remplacez `video: null` par `video: 'videos/bien7.mp4'`

---

## 4. Trouver les coordonnées GPS d'un bien

Pour placer un bien correctement sur la carte :

1. Ouvrez **Google Maps** dans votre navigateur
2. Naviguez jusqu'au bien
3. Faites un **clic droit** sur l'emplacement exact
4. Cliquez sur les coordonnées qui apparaissent (ex : `43.7754, 7.5019`) — elles sont copiées automatiquement
5. Collez-les dans `data.js` :
   - La première valeur est `lat`
   - La seconde valeur est `lng`

```js
lat: 43.7754,
lng: 7.5019,
```

---

## 5. Déployer le site sur Netlify (première fois)

1. Allez sur [netlify.com](https://www.netlify.com) et créez un compte gratuit (avec votre email)
2. Sur le tableau de bord, cliquez **Add new site → Deploy manually**
3. **Glissez-déposez le dossier entier `immo-site/`** dans la zone prévue
4. Netlify génère une URL du type `https://random-name.netlify.app`
5. Pour personnaliser l'URL : **Site settings → Change site name** (ex : `bonestroo-immo`)

> Le site sera en ligne en moins d'une minute.

---

## 6. Mettre à jour le site (après modification)

Après avoir modifié des fichiers (ajout de bien, nouvelles photos, etc.) :

1. Retournez sur [app.netlify.com](https://app.netlify.com)
2. Cliquez sur votre site
3. Allez dans l'onglet **Deploys**
4. Glissez-déposez à nouveau le dossier `immo-site/` complet dans la zone de dépôt

Le site se met à jour en quelques secondes.

---

## 7. Numéros de téléphone et CPI à compléter

Les champs suivants contiennent des **valeurs fictives** à remplacer avant la mise en ligne :

| Ce qu'il faut changer | Dans quel fichier | Rechercher |
|---|---|---|
| Numéro de téléphone | `index.html` | `+33 4 93 XX XX XX` |
| Numéro de téléphone | `bien.html` | `+33493XXXXXX` (×2) |
| Numéro de téléphone | `bien.js` | `+33493XXXXXX` (×2) |
| Numéro de carte pro | `index.html`, `bien.html` | `N° XXXXX` |
| Numéro de carte pro | `i18n.js` | `footer_carte` dans les 3 langues |
| CPI / CCI | `mentions-legales.html` | `À COMPLÉTER` (×3) |
| Adresse agence | `index.html` | `12 Promenade du Soleil` (section contact) |

---

## 8. Changer la photo de fond (hero)

Les photos de fond du bandeau principal de la page d'accueil sont :

- `photos/hero1.jpg` (affichée en premier)
- `photos/hero2.jpg` (affichée en second, alternance toutes les 6 s)

Pour les remplacer :

1. Préparez vos nouvelles photos (format paysage, min. 1920 × 1080 px, JPEG)
2. Nommez-les exactement `hero1.jpg` et `hero2.jpg`
3. Placez-les dans le dossier `photos/` (remplacement des anciennes)

Pour ajouter un troisième slide, dans `index.html`, ajoutez avant la balise `</section>` du hero :

```html
<div class="hero-slide" style="background-image:url('photos/hero3.jpg')"></div>
```

Et dans le bloc `<div class="hero-dots">` :

```html
<button class="hero-dot" onclick="goToHeroSlide(2)"></button>
```

---

## 9. Modifier les témoignages

Les témoignages affichés sur la page d'accueil sont définis dans **`main.js`**, dans le tableau `TESTIMONIALS` :

```js
const TESTIMONIALS = [
  {
    text:   'Le texte du témoignage...',
    author: 'Prénom & Prénom N.',
    lieu:   'Ville — Type de bien',
    stars:  5        // de 1 à 5
  },
  // ... autres témoignages
];
```

Pour modifier un témoignage, changez les valeurs `text`, `author`, `lieu` et `stars`.

Pour en ajouter un, copiez un bloc `{ ... }` et collez-le dans le tableau avec une virgule de séparation.

---

*Guide rédigé pour SARL Bonestroo — 1 Avenue Poincarré, 06190 Roquebrune-Cap-Martin*
