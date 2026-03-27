<template>
  <section id="contact" class="relative py-32">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Contact Info -->
        <div class="card-3d p-8 fade-in-up">
          <h3 class="text-2xl font-bold font-space mb-6 text-amber-primary">Contactez-nous</h3>
          <div class="space-y-6">
            <div>
              <p class="text-gray-400 text-sm mb-2">Téléphone 1</p>
              <a href="tel:+221771425249" class="text-xl font-semibold text-white hover:text-amber-primary transition-colors">
                +221 77 142 52 49
              </a>
            </div>
            <div>
              <p class="text-gray-400 text-sm mb-2">Téléphone 2</p>
              <a href="tel:+221772889673" class="text-xl font-semibold text-white hover:text-amber-primary transition-colors">
                +221 77 288 96 73
              </a>
            </div>
            <div>
              <p class="text-gray-400 text-sm mb-2">Téléphone 3</p>
              <a href="tel:+221784319595" class="text-xl font-semibold text-white hover:text-amber-primary transition-colors">
                +221 78 431 95 95
              </a>
            </div>
            <div class="pt-4 border-t border-amber-primary/20">
              <p class="text-gray-300 text-sm">
                Appelez-nous pendant nos heures de bureau ou remplissez le formulaire pour que nous vous recontactions.
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="col-span-2 card-3d p-12 fade-in-up">
          <div class="mb-8">
            <h2 class="text-4xl font-bold font-space mb-2">
              Construisons l'<span class="holographic-text">Avenir</span> Ensemble
            </h2>
            <p class="text-gray-300">Prêt à transformer votre présence numérique ? Contactez-nous.</p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div v-if="successMessage" class="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300">
              {{ successMessage }}
            </div>
            
            <div v-if="errorMessage" class="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
              {{ errorMessage }}
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-300">Nom</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  class="w-full px-4 py-3 bg-white/10 border border-amber-primary/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-primary transition-colors"
                  placeholder="Nom Complet"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  class="w-full px-4 py-3 bg-white/10 border border-amber-primary/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-primary transition-colors"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2 text-gray-300">Entreprise</label>
              <input 
                v-model="form.company"
                type="text" 
                class="w-full px-4 py-3 bg-white/10 border border-amber-primary/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-primary transition-colors"
                placeholder="Votre Entreprise"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2 text-gray-300">Téléphone</label>
              <input 
                v-model="form.phone"
                type="tel" 
                class="w-full px-4 py-3 bg-white/10 border border-amber-primary/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-primary transition-colors"
                placeholder="Votre numéro de téléphone"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2 text-gray-300">Message</label>
              <textarea 
                v-model="form.message"
                rows="5"
                class="w-full px-4 py-3 bg-white/10 border border-amber-primary/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-primary transition-colors resize-none"
                placeholder="Parlez-nous de votre projet..."
                required
              ></textarea>
            </div>

            <div class="text-center">
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="btn-holographic text-lg px-12 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  // Validation simple
  if (!form.value.name || !form.value.email || !form.value.message) {
    errorMessage.value = 'Veuillez remplir tous les champs obligatoires.'
    return
  }

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    errorMessage.value = 'Veuillez entrer une adresse email valide.'
    return
  }

  isSubmitting.value = true

  try {
    // Simuler l'envoi - À remplacer par votre service d'email réel
    // Vous pouvez utiliser EmailJS, Formspree, ou votre propre backend
    const response = await fetch('https://formspree.io/f/xjgpkedn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        company: form.value.company,
        phone: form.value.phone,
        message: form.value.message
      })
    })

    if (response.ok) {
      successMessage.value = '✓ Merci ! Votre message a été envoyé avec succès. Nous vous recontacterons bientôt.'
      form.value = {
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      }
      setTimeout(() => {
        successMessage.value = ''
      }, 5000)
    } else {
      throw new Error('Erreur lors de l\'envoi')
    }
  } catch (error) {
    errorMessage.value = 'Une erreur est survenue. Veuillez réessayer ou nous appeler directement.'
    console.error('Erreur:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
