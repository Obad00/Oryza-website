<template>
  <section id="contact" class="relative py-32">
    <div class="max-w-4xl mx-auto px-6">
      <div class="card-3d p-12 fade-in-up">
        <div class="text-center mb-12">
          <h2 class="text-5xl font-bold font-space mb-4">
            Construisons l'<span class="holographic-text">Avenir</span> Ensemble
          </h2>
          <p class="text-gray-300 text-lg">Prêt à transformer votre présence numérique ? Contactez-nous.</p>
        </div>

        <form class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold mb-2 text-gray-300">Nom</label>
              <input 
                type="text" 
                class="w-full px-4 py-3 bg-white/5 border border-amber-primary/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-primary transition-colors"
                placeholder="Jean Dupont"
              />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2 text-gray-300">Email</label>
              <input 
                type="email" 
                class="w-full px-4 py-3 bg-white/5 border border-amber-primary/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-primary transition-colors"
                placeholder="jean@entreprise.com"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold mb-2 text-gray-300">Entreprise</label>
            <input 
              type="text" 
              class="w-full px-4 py-3 bg-white/5 border border-amber-primary/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-primary transition-colors"
              placeholder="Votre Entreprise"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold mb-2 text-gray-300">Message</label>
            <textarea 
              rows="5"
              class="w-full px-4 py-3 bg-white/5 border border-amber-primary/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-primary transition-colors resize-none"
              placeholder="Parlez-nous de votre projet..."
            ></textarea>
          </div>

          <div class="text-center">
            <button type="submit" class="btn-holographic text-lg px-12">
              Envoyer le Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
