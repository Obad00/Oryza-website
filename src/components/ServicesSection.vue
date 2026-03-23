<template>
  <section id="services" class="relative py-32">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-6">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="card-3d p-8 fade-in-up"
          :class="`delay-${index * 100 + 200}`"
        >
          <div class="relative h-48 mb-6 rounded-xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-amber-primary/20 to-orange-accent/20"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div :class="`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`">
                <component :is="service.icon" class="w-10 h-10 text-white" />
              </div>
            </div>
            <!-- Animated particles in card -->
            <div class="absolute top-4 right-4 w-2 h-2 bg-amber-primary rounded-full animate-pulse"></div>
            <div class="absolute bottom-4 left-4 w-1.5 h-1.5 bg-orange-accent rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
          </div>
          
          <h3 class="text-xl font-bold font-space mb-3">{{ service.title }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const services = [
  {
    title: 'Traitement Sémantique Multimédia',
    description: 'Analyse avancée des médias et compréhension du contenu alimentée par l\'IA pour les applications de nouvelle génération.',
    gradient: 'from-amber-primary to-orange-accent',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': 2, viewBox: '0 0 24 24' }, [
      h('rect', { x: 2, y: 3, width: 20, height: 14, rx: 2 }),
      h('path', { d: 'M8 21h8M12 17v4' })
    ])
  },
  {
    title: 'Détection de Contenu',
    description: 'Systèmes intelligents de modération et de détection de contenu alimentés par l\'apprentissage automatique de pointe.',
    gradient: 'from-orange-accent to-amber-dark',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': 2, viewBox: '0 0 24 24' }, [
      h('path', { d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
    ])
  },
  {
    title: 'Intégration Système',
    description: 'Solutions d\'intégration transparente reliant votre écosystème numérique avec une fiabilité de niveau entreprise.',
    gradient: 'from-amber-dark to-amber-light',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': 2, viewBox: '0 0 24 24' }, [
      h('path', { d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' })
    ])
  },
  {
    title: 'Services de Conseil',
    description: 'Conseil stratégique en transformation numérique d\'experts de l\'industrie pour accélérer votre innovation.',
    gradient: 'from-amber-light to-amber-primary',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': 2, viewBox: '0 0 24 24' }, [
      h('path', { d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' })
    ])
  }
]
</script>
