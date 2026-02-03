# AI Questions Flow Animation

Animation SVG illustrant le flux de questions dynamiques alimenté par l'IA. Ce composant visualise comment l'IA analyse les réponses et propose des questions de suivi pertinentes.

## Aperçu

L'animation représente :
- **Bloc gauche** : Question initiale avec options de réponse
- **Bloc central** : Traitement par l'IA (avec logo OpenAI/ChatGPT)
- **Blocs droite** : Questions de suivi possibles (une sélectionnée, les autres rejetées)

## Animations incluses

1. **Points de chargement clignotants** : Effet de clignotement séquentiel au-dessus du bloc IA pour symboliser le traitement
2. **Flux d'entrée** : Animation de flux sur la ligne verte reliant le bloc gauche au bloc central
3. **Flux de sortie** : Animation de flux sur la ligne verte reliant le bloc central à la question sélectionnée (2b)
4. **Effet de pulsation** : Légère pulsation sur la carte sélectionnée (question 2b)

## Fichiers disponibles

| Fichier | Description |
|---------|-------------|
| `ai-questions-flow.html` | Version HTML standalone (ouvrir directement dans un navigateur) |
| `AIQuestionsFlow.jsx` | Composant React (JavaScript) |
| `AIQuestionsFlow.tsx` | Composant React (TypeScript) |
| `AIQuestionsFlow.vue` | Composant Vue.js |
| `AIQuestionsFlow.css` | Styles CSS (pour React) |

## Utilisation

### HTML Standalone

Ouvrez simplement `ai-questions-flow.html` dans un navigateur ou intégrez-le via une iframe :

```html
<iframe src="ai-questions-flow.html" width="100%" height="500" frameborder="0"></iframe>
```

### React / Next.js

```jsx
import AIQuestionsFlow from './AIQuestionsFlow';
import './AIQuestionsFlow.css';

function App() {
  return (
    <div className="container">
      <AIQuestionsFlow />
    </div>
  );
}
```

### React avec TypeScript

```tsx
import AIQuestionsFlow from './AIQuestionsFlow';
import './AIQuestionsFlow.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <AIQuestionsFlow className="my-custom-class" />
    </div>
  );
};
```

### Vue.js

```vue
<template>
  <div>
    <AIQuestionsFlow />
  </div>
</template>

<script>
import AIQuestionsFlow from './AIQuestionsFlow.vue';

export default {
  components: {
    AIQuestionsFlow
  }
}
</script>
```

### Intégration directe SVG

Vous pouvez également copier le SVG directement depuis `ai-questions-flow.html` et l'intégrer dans votre HTML avec les styles CSS de `AIQuestionsFlow.css`.

## Personnalisation

### Modifier les couleurs

Les couleurs principales utilisées :
- Vert (sélectionné) : `#22c55e`
- Rouge (rejeté) : `#ef4444`
- Gris (fond) : `#f3f4f6`, `#e5e7eb`
- Noir (bloc IA) : `#1a1a1a`

### Modifier la vitesse des animations

Dans le CSS, ajustez les durées :
```css
/* Points de chargement */
.loading-dot {
  animation: blink 1.4s infinite ease-in-out; /* Modifier 1.4s */
}

/* Flux d'entrée */
.flow-line-input {
  animation: flowToCenter 0.8s linear infinite; /* Modifier 0.8s */
}

/* Flux de sortie */
.flow-line-output {
  animation: flowFromCenter 1s linear infinite; /* Modifier 1s */
}
```

### Accessibilité

L'animation respecte automatiquement la préférence `prefers-reduced-motion` de l'utilisateur. Les animations sont désactivées pour les utilisateurs qui ont activé cette option dans leur système.

## Support navigateurs

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Licence

MIT
