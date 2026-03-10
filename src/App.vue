<template>
  <div class="gradient-bg">
    <FloatingParticles />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ProductsSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup>
import FloatingParticles from './components/FloatingParticles.vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>
