<template>
  <div class="particles-container">
    <div 
      v-for="particle in particles" 
      :key="particle.id"
      class="particle"
      :style="{
        left: particle.x + '%',
        top: particle.y + '%',
        width: particle.size + 'px',
        height: particle.size + 'px',
        background: particle.color,
        animationDelay: particle.delay + 's',
        animationDuration: particle.duration + 's'
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const particles = ref([])

const colors = [
  'radial-gradient(circle, rgba(245, 158, 11, 0.8), transparent)',
  'radial-gradient(circle, rgba(251, 146, 60, 0.7), transparent)',
  'radial-gradient(circle, rgba(252, 211, 77, 0.6), transparent)'
]

onMounted(() => {
  for (let i = 0; i < 15; i++) {
    particles.value.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 40,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 8
    })
  }
})
</script>

<style scoped>
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}
</style>
