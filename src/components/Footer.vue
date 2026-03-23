<template>
  <footer class="relative border-t border-amber-primary/20 py-12">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-amber-primary to-orange-accent rounded-lg flex items-center justify-center font-bold text-lg">
              O
            </div>
            <span class="text-2xl font-bold font-space holographic-text">ORYZA</span>
          </div>
          <p class="text-gray-400 text-sm">
            Transformer le paysage numérique grâce à l'innovation et l'excellence.
          </p>
        </div>

        <!-- Products -->
        <div>
          <h3 class="font-bold text-lg mb-4">Produits</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="#" class="hover:text-amber-primary transition-colors">KART</a></li>
            <li><a href="#" class="hover:text-amber-primary transition-colors">ORYZA IA</a></li>
            <li><a href="#" class="hover:text-amber-primary transition-colors">ORYZA Cloud</a></li>
            <li><a href="#" class="hover:text-amber-primary transition-colors">ORYZA Analytics</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="font-bold text-lg mb-4">Entreprise</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="#about" class="hover:text-amber-primary transition-colors">À Propos</a></li>
            <li><a href="#services" class="hover:text-amber-primary transition-colors">Services</a></li>
            <li><a href="#" class="hover:text-amber-primary transition-colors">Carrières</a></li>
            <li><a href="#contact" class="hover:text-amber-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="font-bold text-lg mb-4">Se Connecter</h3>
          <div class="flex gap-3">
            <a href="#" class="w-10 h-10 bg-white/5 hover:bg-amber-primary/20 border border-amber-primary/30 rounded-lg flex items-center justify-center transition-all hover:border-amber-primary">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 bg-white/5 hover:bg-amber-primary/20 border border-amber-primary/30 rounded-lg flex items-center justify-center transition-all hover:border-amber-primary">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 bg-white/5 hover:bg-amber-primary/20 border border-amber-primary/30 rounded-lg flex items-center justify-center transition-all hover:border-amber-primary">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 bg-white/5 hover:bg-amber-primary/20 border border-amber-primary/30 rounded-lg flex items-center justify-center transition-all hover:border-amber-primary">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="pt-8 border-t border-amber-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-400 text-sm">
          © 2026 ORYZA. Tous droits réservés.
        </p>
        <div class="flex gap-6 text-sm text-gray-400">
          <a href="#" class="hover:text-amber-primary transition-colors">Politique de Confidentialité</a>
          <a href="#" class="hover:text-amber-primary transition-colors">Conditions d'Utilisation</a>
          <a href="#" class="hover:text-amber-primary transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
