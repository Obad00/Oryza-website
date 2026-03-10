# ORYZA - Startup Studio Website

Site vitrine premium pour ORYZA, un startup studio innovant spécialisé dans la transformation digitale.

## 🚀 Caractéristiques

- **Design futuriste et holographique** inspiré de l'innovation tech
- **Animations 3D** avec devices flottants et effets de profondeur
- **Particules animées** créant une ambiance immersive
- **Palette cyan/bleu néon** avec effets de glow
- **Responsive** sur tous les devices
- **Performance optimisée** avec Vue 3 + Vite

## 🎨 Style Visuel

### Palette de Couleurs
- **Dark Blue**: #0A1628 (Background principal)
- **Deep Teal**: #0D1B2A (Background secondaire)
- **Cyan Glow**: #00D9FF (Accent principal)
- **Blue Glow**: #0066FF (Accent secondaire)
- **Pink Accent**: #FF00FF (Accent tertiaire)

### Typographie
- **Space Grotesk**: Titres et headings
- **Inter**: Corps de texte

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Preview du build
npm run preview
```

## 📁 Structure

```
oryza-website/
├── src/
│   ├── components/
│   │   ├── FloatingParticles.vue    # Particules flottantes animées
│   │   ├── Navbar.vue                # Navigation avec logo ORYZA
│   │   ├── HeroSection.vue           # Hero avec device 3D holographique
│   │   ├── ServicesSection.vue       # 4 services en grid
│   │   ├── AboutSection.vue          # Story et team avec devices
│   │   ├── ProductsSection.vue       # KART + autres produits
│   │   ├── ContactSection.vue        # Formulaire de contact
│   │   └── Footer.vue                # Footer avec liens
│   ├── styles/
│   │   └── main.css                  # Styles globaux et animations
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Sections

### 1. Hero Section
- Titre accrocheur avec effet holographique
- Device 3D flottant avec globe animé
- Particules et orbes flottants
- CTAs avec effet shimmer

### 2. Services (4 cartes)
- **Semantic Multi-Media Processing**
- **Content Detection**
- **System Integration**
- **Consultancy Services**

### 3. About
- Histoire d'ORYZA
- Devices 3D en perspective
- Mission et vision

### 4. Products
- **KART** (Featured) - Digital Business Card
- ORYZA AI (Coming Soon)
- ORYZA Cloud (In Development)
- ORYZA Analytics (Beta)

### 5. Contact
- Formulaire élégant avec validation
- Champs: Name, Email, Company, Message

### 6. Footer
- Liens vers produits et pages
- Réseaux sociaux
- Copyright et mentions légales

## ✨ Effets Spéciaux

### Animations
- ✅ Particules flottantes avec mouvement aléatoire
- ✅ Gradient animé en arrière-plan
- ✅ Devices 3D avec rotation et flottement
- ✅ Texte holographique avec dégradé animé
- ✅ Cards 3D avec effet de hover
- ✅ Boutons avec effet shimmer
- ✅ Orbes lumineux flottants
- ✅ Fade-in progressif au scroll

### Effets Visuels
- 🎨 Glows cyan, bleu et rose
- 🎨 Backdrop blur sur les cards
- 🎨 Bordures lumineuses animées
- 🎨 Ombres portées avec glow
- 🎨 Grid pattern subtil
- 🎨 Dégradés holographiques

## 🔧 Technologies

- **Vue 3.4.21** - Framework JavaScript
- **Vite 5.1.4** - Build tool ultra-rapide
- **Tailwind CSS 3.4.1** - Framework CSS utility-first
- **Space Grotesk** - Font moderne et tech
- **Inter** - Font lisible et professionnelle

## 🎨 Personnalisation

### Couleurs
Modifier `tailwind.config.js` :
```js
colors: {
  'dark-blue': '#0A1628',
  'cyan-glow': '#00D9FF',
  // ...
}
```

### Fonts
Modifier `index.html` pour changer les Google Fonts

### Contenu
Modifier les composants Vue pour personnaliser le contenu

## 🚀 Déploiement

```bash
# Build production
npm run build

# Les fichiers seront dans dist/
# Déployer sur Netlify, Vercel, ou votre hébergeur
```

## 📱 Responsive

- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 768px)

## 🔗 Intégration avec KART

Le site ORYZA présente KART comme produit phare dans la section Products. 
Lien direct vers la landing page KART prévu.

## 📝 Notes

- Design inspiré des sites tech futuristes (Apple, Tesla, etc.)
- Optimisé pour les performances avec lazy loading
- Animations GPU-accelerated avec CSS transforms
- Compatible tous navigateurs modernes

## 📄 License

© 2026 ORYZA. All rights reserved.

---

**Built with ❤️ by the ORYZA Team**
