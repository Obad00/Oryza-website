<template>
  <section id="home" class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <!-- Grid background -->
    <div class="grid-bg"></div>

    <!-- Floating orbs -->
    <div class="floating-orb" style="width: 300px; height: 300px; top: 10%; left: 70%; animation-delay: 0s;"></div>
    <div class="floating-orb" style="width: 200px; height: 200px; top: 60%; left: 10%; animation-delay: 2s;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <!-- Left Content -->
      <div class="fade-in-up">
        <h1 class="text-5xl md:text-7xl font-bold font-space mb-6 leading-tight">
          Enter the World of<br>
          <span class="holographic-text">Infinite Innovation</span><br>
          with ORYZA
        </h1>
        <p class="text-gray-300 text-lg mb-8 max-w-xl">
          Transforming Perceptions, Redefining Digital Excellence
        </p>
        <button class="btn-holographic">
          Explore
        </button>
      </div>

      <!-- Right - 3D Holographic Device -->
      <div class="relative fade-in-up delay-300">
        <div class="relative" style="perspective: 1000px;">
          <!-- Main device frame -->
          <div class="phone-frame-holographic mx-auto" style="max-width: 400px; transform-style: preserve-3d;">
            <div class="bg-gradient-to-b from-dark-blue to-deep-teal rounded-3xl overflow-hidden" style="aspect-ratio: 9/19;">
              <!-- Screen content -->
              <div class="p-6 h-full flex flex-col">
                <!-- Header -->
                <div class="flex justify-between items-center mb-8">
                  <div class="text-xs text-cyan-glow">9:41</div>
                  <div class="flex gap-1">
                    <div class="w-1 h-1 bg-cyan-glow rounded-full"></div>
                    <div class="w-1 h-1 bg-cyan-glow rounded-full"></div>
                    <div class="w-1 h-1 bg-cyan-glow rounded-full"></div>
                  </div>
                </div>

                <!-- Globe hologram -->
                <div class="flex-1 flex items-center justify-center">
                  <div class="relative w-48 h-48">
                    <!-- Rotating globe effect -->
                    <div class="absolute inset-0 rounded-full bg-gradient-to-br from-amber-primary/30 to-orange-accent/30 animate-spin" style="animation-duration: 20s;"></div>
                    <div class="absolute inset-4 rounded-full bg-gradient-to-tr from-orange-accent/40 to-amber-light/40 blur-xl"></div>
                    <div class="absolute inset-8 rounded-full bg-dark-blue border-2 border-amber-primary/50"></div>
                    
                    <!-- Orbiting elements -->
                    <div class="absolute inset-0 animate-spin" style="animation-duration: 10s;">
                      <div class="absolute top-0 left-1/2 w-3 h-3 bg-amber-primary rounded-full -translate-x-1/2 glow-amber"></div>
                    </div>
                    <div class="absolute inset-0 animate-spin" style="animation-duration: 15s; animation-direction: reverse;">
                      <div class="absolute top-1/2 right-0 w-2 h-2 bg-orange-accent rounded-full -translate-y-1/2 glow-orange"></div>
                    </div>
                  </div>
                </div>

                <!-- Bottom indicators -->
                <div class="flex justify-center gap-2 mb-4">
                  <div class="w-16 h-1 bg-amber-primary/50 rounded-full"></div>
                  <div class="w-16 h-1 bg-white/20 rounded-full"></div>
                  <div class="w-16 h-1 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating UI elements around the device -->
          <div class="absolute -right-8 top-1/4 card-3d p-4 fade-in delay-500" style="width: 100px; animation-delay: 0.8s;">
            <div class="text-amber-primary text-xs mb-1">Active</div>
            <div class="text-2xl font-bold">2.4K</div>
          </div>

          <div class="absolute -left-8 top-1/2 card-3d p-4 fade-in delay-600" style="width: 100px; animation-delay: 1s;">
            <div class="text-orange-accent text-xs mb-1">Users</div>
            <div class="text-2xl font-bold">12K</div>
          </div>

          <div class="absolute -right-12 bottom-1/4 card-3d p-4 fade-in delay-700" style="width: 100px; animation-delay: 1.2s;">
            <div class="text-amber-light text-xs mb-1">Growth</div>
            <div class="text-2xl font-bold">+156%</div>
          </div>
        </div>

        <!-- Additional floating particles -->
        <div class="absolute top-10 right-20 w-4 h-4 bg-amber-primary rounded-full glow-amber animate-pulse"></div>
        <div class="absolute bottom-20 left-10 w-3 h-3 bg-orange-accent rounded-full glow-orange animate-pulse" style="animation-delay: 0.5s;"></div>
        <div class="absolute top-1/2 right-10 w-2 h-2 bg-amber-light rounded-full glow-gold animate-pulse" style="animation-delay: 1s;"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
