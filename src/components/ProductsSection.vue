<template>
  <section id="products" class="relative py-32">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16 fade-in-up">
        <h2 class="text-5xl font-bold font-space mb-4">
          <span class="holographic-text">Explorez</span> Nos Offres
        </h2>
        <p class="text-gray-300 text-lg">Élevez Votre Expérience, Enrichissez Votre Parcours</p>
      </div>

      <!-- Featured Product - KART -->
      <div class="card-3d p-12 mb-12 fade-in-up delay-200">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-block px-4 py-2 bg-amber-primary/20 border border-amber-primary/40 rounded-full text-amber-primary text-sm font-semibold mb-6">
              Produit Vedette
            </div>
            <h3 class="text-4xl font-bold font-space mb-6">
              KART
              <span class="block text-2xl text-amber-primary mt-2">Plateforme de Cartes de Visite Numériques</span>
            </h3>
            <p class="text-gray-300 leading-relaxed mb-8">
              Transformez votre réseautage professionnel avec KART, la plateforme de cartes de visite numériques de nouvelle génération. 
              Créez des cartes numériques époustouflantes, partagez instantanément via des codes QR, et suivez la croissance de votre réseau avec des analyses puissantes.
            </p>
            <div class="flex flex-wrap gap-3 mb-8">
              <span class="px-4 py-2 bg-orange-accent/20 border border-orange-accent/40 rounded-full text-sm">
                Partage par Code QR
              </span>
              <span class="px-4 py-2 bg-orange-accent/20 border border-orange-accent/40 rounded-full text-sm">
                Tableau de Bord Analytique
              </span>
              <span class="px-4 py-2 bg-orange-accent/20 border border-orange-accent/40 rounded-full text-sm">
                Gestion d'Équipe
              </span>
            </div>
            <div class="flex gap-4">
              <a href="https://kart.business" target="_blank" rel="noopener noreferrer" class="btn-holographic">
                Visiter KART
              </a>
              <!-- <button class="btn-outline">
                En Savoir Plus
              </button> -->
            </div>
          </div>

          <div class="relative">
            <!-- KART Phone Mockup -->
            <div class="phone-frame-holographic mx-auto" style="max-width: 300px;">
              <div class="bg-gradient-to-b from-dark-blue to-deep-teal rounded-3xl overflow-hidden" style="aspect-ratio: 9/19;">
                <div class="p-6 h-full flex flex-col">
                  <!-- KART Logo -->
                  <div class="text-center mb-8">
                    <div class="text-3xl font-bold font-space holographic-text">KART</div>
                  </div>

                  <!-- Digital Card Preview -->
                  <div class="flex-1 flex items-center justify-center">
                    <div class="card-3d p-6 w-full">
                      <div class="w-16 h-16 bg-gradient-to-br from-amber-primary to-orange-accent rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                        JD
                      </div>
                      <div class="text-center">
                        <div class="font-bold text-lg mb-1">Adama Dabo</div>
                        <div class="text-sm text-gray-400">Product Designer</div>
                        <div class="text-xs text-gray-500 mt-1">@ Oryza</div>
                      </div>
                      
                      <!-- QR Code placeholder -->
                      <div class="mt-6 p-4 bg-amber-primary/10 rounded-xl border border-amber-primary/30">
                        <div class="w-20 h-20 mx-auto bg-gradient-to-br from-amber-primary/40 to-orange-accent/40 rounded"></div>
                        <div class="text-center text-xs text-gray-400 mt-2">SCANNER POUR SE CONNECTER</div>
                      </div>
                      
                      <!-- Social links -->
                      <div class="flex justify-center gap-3 mt-6">
                        <div class="w-8 h-8 bg-white/10 rounded-lg"></div>
                        <div class="w-8 h-8 bg-white/10 rounded-lg"></div>
                        <div class="w-8 h-8 bg-white/10 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating stats -->
            <div class="absolute -right-8 card-3d p-4" style="width: 120px;">
              <div class="text-amber-primary text-xs mb-1">Cartes Totales</div>
              <div class="text-2xl font-bold">5K</div>
            </div>
            
            <div class="absolute -left-8 bottom-1/3 card-3d p-4" style="width: 120px;">
              <div class="text-orange-accent text-xs mb-1">Utilisateurs Actifs</div>
              <div class="text-2xl font-bold">2K</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Products Grid -->
      <div class="grid md:grid-cols-3 gap-6">
        <div 
          v-for="(product, index) in otherProducts" 
          :key="index"
          class="card-3d p-8 fade-in-up"
          :class="`delay-${(index + 3) * 100}`"
        >
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-primary/20 to-orange-accent/20 flex items-center justify-center mb-6">
            <div class="text-3xl">{{ product.icon }}</div>
          </div>
          <h3 class="text-2xl font-bold font-space mb-3">{{ product.name }}</h3>
          <p class="text-gray-400 mb-6 text-sm">{{ product.description }}</p>
          <div class="inline-block px-3 py-1 bg-orange-accent/20 border border-orange-accent/40 rounded-full text-xs text-orange-accent">
            {{ product.status }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const otherProducts = [
  {
    name: 'ORYZA IA',
    description: 'Solutions d\'IA d\'entreprise pour l\'automatisation intelligente et la prise de décision.',
    icon: '🤖',
    status: 'Bientôt Disponible'
  },
  {
    name: 'ORYZA Cloud',
    description: 'Infrastructure cloud évolutive pour les applications numériques modernes.',
    icon: '☁️',
    status: 'En Développement'
  },
  {
    name: 'ORYZA Analytics',
    description: 'Plateforme d\'analyse de données avancée pour des insights métier exploitables.',
    icon: '📊',
    status: 'Bêta'
  }
]
</script>
