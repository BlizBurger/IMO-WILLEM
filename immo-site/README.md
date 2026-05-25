# Van der Immo — Guide d'utilisation

## Déployer le site sur Netlify

1. Va sur [netlify.com](https://www.netlify.com) et connecte-toi (ou crée un compte gratuit)
2. Depuis le tableau de bord, clique sur **"Add new site" → "Deploy manually"**
3. Glisse-dépose le dossier `immo-site/` entier dans la zone prévue
4. C'est tout ! Netlify te donne une URL en quelques secondes

Pour mettre à jour le site : fais la même opération, Netlify remplace l'ancienne version.

---

## Modifier un bien (dans index.html)

Ouvre `index.html` avec un éditeur de texte (Notepad, TextEdit, VS Code...).

Cherche la section `const BIENS = [` — c'est là que sont toutes les propriétés.

Chaque bien ressemble à ça :

```js
{
  id: 1,
  type: "appartement",          // "appartement" ou "maison"
  badge: { fr: "Nouveau", en: "New", nl: "Nieuw" },
  badgeClass: "",               // "" = terre cuite, "exclu" = bleu
  prix: "485 000 €",
  localisation: { fr: "Menton — Vieille Ville", en: "Menton — Old Town", nl: "Menton — Oude Stad" },
  lat: 43.7754, lng: 7.5019,    // coordonnées GPS (voir ci-dessous)
  tags: {
    fr: ["92 m²", "3 pièces", "Vue mer", "Terrasse"],
    en: ["92 m²", "3 rooms", "Sea view", "Terrace"],
    nl: ["92 m²", "3 kamers", "Zeezicht", "Terras"]
  },
  photos: [],                   // chemins des photos, ex: ["photos/bien1_a.jpg", "photos/bien1_b.jpg"]
  video: null,                  // chemin vidéo, ex: "videos/bien1.mp4"  — ou null si pas de vidéo
  stats: {
    "m²": 92,
    fr: { "Pièces": 3, "Étage": 4, "DPE": "B" },
    en: { "Rooms": 3, "Floor": 4, "EPC": "B" },
    nl: { "Kamers": 3, "Verdieping": 4, "EPC": "B" }
  },
  description: {
    fr: "Description en français...",
    en: "Description in English...",
    nl: "Beschrijving in het Nederlands..."
  }
}
```

Pour **ajouter** un bien : copie-colle un bloc entier entre `{` et `}`, change l'`id` (mets le suivant), et mets à jour les infos.

Pour **supprimer** un bien : supprime tout le bloc de `{` jusqu'au `}` correspondant (et la virgule avant ou après).

---

## Ajouter des photos

1. Place tes photos dans le dossier `photos/`
2. Nomme-les clairement : `bien1_salon.jpg`, `bien1_chambre.jpg`, etc.
3. Dans le JSON du bien, mets les chemins dans le tableau `photos` :

```js
photos: ["photos/bien1_salon.jpg", "photos/bien1_chambre.jpg", "photos/bien1_terrasse.jpg"]
```

Les photos s'affichent en galerie dans le modal (navigation avec les flèches).

**Format recommandé :** JPG ou WebP, largeur 1200px minimum, ratio 16/9 ou 3/2.

---

## Ajouter une vidéo

1. **Convertis les fichiers .mov en .mp4** avant de les utiliser (le navigateur ne lit pas .mov)
   - Sur Mac : ouvre le fichier .mov dans QuickTime → Fichier → Exporter → iPhone/iPad → enregistre en .mp4
   - En ligne : [cloudconvert.com](https://cloudconvert.com) (MOV → MP4)
2. Place le fichier .mp4 dans le dossier `videos/`
3. Dans le JSON du bien, change `video: null` par le chemin :

```js
video: "videos/bien1.mp4"
```

---

## Trouver les coordonnées GPS d'une adresse

1. Va sur [maps.google.com](https://maps.google.com)
2. Cherche l'adresse du bien
3. **Clic droit** sur le point exact sur la carte
4. Les coordonnées apparaissent tout en haut du menu contextuel (ex: `43.7754, 7.5019`)
5. Clique dessus pour les copier
6. Dans le JSON : `lat: 43.7754, lng: 7.5019`

---

## Remplacer les infos de l'agence

Dans `index.html`, cherche `XXX` — il y a 3 endroits à changer :

| Ce qu'il faut changer | Où chercher |
|---|---|
| Numéro de téléphone | Cherche `+33 4 93 XX XX XX` |
| Email | Cherche `contact@vanderimmo.fr` |
| Adresse | Cherche `12 Promenade du Soleil` |
| Numéro carte pro | Cherche `N° XXXXX` |

---

## Générer un QR code (pour les vitrines, flyers...)

1. Va sur [qr-code-generator.com](https://www.qr-code-generator.com) (gratuit)
2. Colle l'URL de ton site Netlify
3. Télécharge en PNG ou SVG
4. C'est prêt à imprimer

---

## Structure des fichiers

```
immo-site/
├── index.html      ← le site entier
├── photos/         ← tes photos de biens (jpg, webp)
├── videos/         ← tes vidéos (mp4 uniquement)
└── README.md       ← ce guide
```
