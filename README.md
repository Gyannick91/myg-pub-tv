# MYG Connect — Écran publicitaire TV

Petite page web plein écran (format **portrait 9:16**) pour afficher une publicité
qui défile en boucle sur une TV utilisée comme panneau.

## 📂 Les fichiers

| Fichier | À quoi ça sert | Tu y touches ? |
|---|---|---|
| `index.html` | La structure des 5 slides | Rarement |
| `css/style.css` | Les **couleurs** et la mise en page (bloc `:root` en haut) | Pour changer les couleurs |
| `js/config.js` | ⭐ Les **textes** : promo, téléphone, durée… | **Oui, le plus souvent** |
| `js/app.js` | Le moteur (défilement) | Non |
| `images/` | Pour tes futures photos / logo | — |

## ▶️ Ouvrir le projet

1. Ouvre le dossier `myg-pub-tv` dans **VS Code** (Fichier → Ouvrir le dossier).
2. Clic droit sur `index.html` → **Open with Live Server** (extension *Go Live*).
3. La page s'ouvre dans le navigateur et défile toute seule.

## 📺 Afficher sur la TV 55″

1. Branche l'ordi (ou une clé type Chromecast / mini-PC) sur la TV en **portrait**.
2. Ouvre `index.html` dans le navigateur.
3. Mets en **plein écran** : touche **F11** (Windows) ou bouton plein écran.
4. L'annonce tourne en boucle, sans rien toucher.

## ✏️ Modifier la pub (le plus simple)

Ouvre **`js/config.js`** et change le texte entre guillemets. Exemples :

```js
dureeParSlideSecondes: 8,              // slides plus lents
promoPourcent: "−30%",                 // change la remise
promoTexte: "sur tous les<br>chargeurs",
telephone: "+32&nbsp;492&nbsp;85&nbsp;00&nbsp;18",
```

Puis **Cmd+S** (sauvegarder) et rafraîchis la page.

> Petits codes utiles : `<br>` = saut de ligne · `&amp;` = le symbole & · `&nbsp;` = espace insécable

## 🎨 Changer les couleurs

Dans `css/style.css`, tout en haut, le bloc `:root` liste les couleurs
(`--cyan`, `--amber`, `--ink`…). Change la valeur, sauvegarde, c'est tout.

---
MYG Connect SNC — Téléphonie & Services — Gosselies
