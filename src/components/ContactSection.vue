<template>
  <section id="contact" class="relative py-32">
    <div class="max-w-4xl mx-auto px-6">
      <div class="card-3d p-12 fade-in-up">
        <div class="text-center mb-12">
          <h2 class="text-5xl font-bold font-space mb-4">
            Let's Build the <span class="holographic-text">Future</span> Together
          </h2>
          <p class="text-gray-300 text-lg">Ready to transform your digital presence? Get in touch with us.</p>
        </div>

        <form class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold mb-2 text-gray-300">Name</label>
              <input 
                type="text" 
                class="w-full px-4 py-3 bg-white/5 border border-amber-primary/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2 text-gray-300">Email</label>
              <input 
                type="email" 
                class="w-full px-4 py-3 bg-white/5 border border-amber-primary/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-primary transition-colors"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold mb-2 text-gray-300">Company</label>
            <input 
              type="text" 
              class="w-full px-4 py-3 bg-white/5 border border-amber-primary/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-primary transition-colors"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold mb-2 text-gray-300">Message</label>
            <textarea 
              rows="5"
              class="w-full px-4 py-3 bg-white/5 border border-amber-primary/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-primary transition-colors resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <div class="text-center">
            <button type="submit" class="btn-holographic text-lg px-12">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
