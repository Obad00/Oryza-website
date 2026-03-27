<template>
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-dark-blue/80 border-b border-amber-primary/20">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-amber-primary to-orange-accent rounded-lg flex items-center justify-center font-bold text-lg">
            O
          </div>
          <span class="text-2xl font-bold font-space holographic-text">ORYZA</span>
        </div>

        <div class="hidden md:flex items-center gap-8">
          <a href="#home" class="text-gray-300 hover:text-amber-primary transition-colors">Accueil</a>
          <a href="#about" class="text-gray-300 hover:text-amber-primary transition-colors">À Propos</a>
          <a href="#services" class="text-gray-300 hover:text-amber-primary transition-colors">Services</a>
          <a href="#products" class="text-gray-300 hover:text-amber-primary transition-colors">Produits</a>
        </div>

        <a href="#contact" class="btn-holographic">
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>
