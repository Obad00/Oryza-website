<template>
  <section id="about" class="relative py-32">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <!-- Left - 3D Devices -->
        <div class="relative fade-in-up" style="perspective: 1000px;">
          <!-- Main device -->
          <div class="relative phone-frame-holographic" style="max-width: 300px; margin-left: auto; transform: rotateY(-10deg);">
            <div class="bg-gradient-to-br from-dark-blue via-deep-teal to-dark-blue rounded-3xl overflow-hidden" style="aspect-ratio: 9/19;">
              <div class="p-6 h-full">
                <div class="h-full bg-gradient-to-b from-amber-primary/10 to-orange-accent/10 rounded-2xl border border-amber-primary/30 p-4">
                  <div class="space-y-3">
                    <div class="h-4 bg-amber-primary/30 rounded"></div>
                    <div class="h-4 bg-orange-accent/30 rounded w-3/4"></div>
                    <div class="h-20 bg-gradient-to-br from-amber-primary/20 to-orange-accent/20 rounded-lg mt-6"></div>
                    <div class="space-y-2 mt-4">
                      <div class="h-3 bg-white/10 rounded"></div>
                      <div class="h-3 bg-white/10 rounded w-5/6"></div>
                      <div class="h-3 bg-white/10 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Secondary device -->
          <div class="absolute top-1/4 -left-16 phone-frame-holographic" style="width: 200px; transform: rotateY(10deg); animation-delay: 0.5s;">
            <div class="bg-gradient-to-br from-deep-teal to-dark-blue rounded-2xl overflow-hidden" style="aspect-ratio: 9/16;">
              <div class="p-4 h-full">
                <div class="h-full bg-gradient-to-b from-orange-accent/10 to-amber-dark/10 rounded-xl border border-orange-accent/30 p-3">
                  <div class="space-y-2">
                    <div class="h-3 bg-orange-accent/40 rounded"></div>
                    <div class="h-3 bg-orange-accent/30 rounded w-2/3"></div>
                    <div class="h-16 bg-gradient-to-br from-orange-accent/20 to-amber-dark/20 rounded mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating orbs -->
          <div class="absolute -top-10 left-1/2 w-20 h-20 bg-amber-primary/30 rounded-full blur-2xl animate-pulse"></div>
          <div class="absolute bottom-10 -right-10 w-24 h-24 bg-orange-accent/30 rounded-full blur-2xl animate-pulse" style="animation-delay: 1s;"></div>
          
          <!-- Floating particles -->
          <div class="absolute top-20 right-10 w-3 h-3 bg-amber-primary rounded-full glow-amber"></div>
          <div class="absolute bottom-32 left-0 w-2 h-2 bg-orange-accent rounded-full glow-orange"></div>
        </div>

        <!-- Right Content -->
        <div class="fade-in-up delay-300">
          <h2 class="text-5xl font-bold font-space mb-6">
            Découvrez <span class="holographic-text">Notre Histoire</span><br>
            et Équipe
          </h2>
          
          <div class="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Découvrez l'avant-garde de l'innovation numérique avec ORYZA, une puissance de développement logiciel, d'intégration système et de conseil axée sur la recherche dans le domaine du multimédia numérique.
            </p>
            
            <p>
              Notre histoire commence par une vision de redéfinir la façon dont les entreprises interagissent avec la technologie.
            </p>
            
            <p>
              Chez ORYZA, nous allons au-delà de l'ordinaire, en créant des produits basés sur le cloud et en adaptant des solutions sur mesure pour répondre aux besoins nuancés de nos clients. Avec une équipe de chercheurs, d'ingénieurs et de consultants de premier plan, nous sommes en mission pour propulser l'industrie des médias numériques dans l'ère de l'informatique perceptive.
            </p>
          </div>

          <!-- <button class="btn-holographic mt-8">
            Explorer
          </button> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
