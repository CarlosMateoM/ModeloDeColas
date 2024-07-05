<template>
    <div class="bg-tertiary text-primary min-h-screen py-8">

      <div class="bg-tertiary text-primary min-h-screen py-8 relative">
    
    <div class="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <button @click="goBack" class="bg-secondary text-primary rounded-full p-3 shadow-lg hover:bg-opacity-80 transition duration-300">
        <
      </button>
    </div>
      <div class="container mx-auto px-4 max-w-4xl">
        <h1 class="text-4xl font-bold my-6">Quiz de Teoría de Colas</h1>
  
        <div v-if="!quizFinished">
          <div v-for="(question, index) in questions" :key="index" class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">{{ question.text }}</h2>
            <div class="bg-tertiary border-2 border-secondary p-4 rounded-lg">
              <div v-for="(option, optionIndex) in question.options" :key="optionIndex" class="mb-2">
                <label class="flex items-center">
                  <input 
                    type="radio" 
                    :name="'question' + index" 
                    :value="optionIndex"
                    v-model="userAnswers[index]"
                    class="mr-2"
                  >
                  <span>{{ option }}</span>
                </label>
              </div>
            </div>
          </div>
  
          <button @click="finishQuiz" class="bg-secondary text-primary font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300 mt-4">
            Finalizar Quiz
          </button>
        </div>
  
        <div v-else>
          <h2 class="text-2xl font-semibold mb-4 text-quaternary">Resultados del Quiz</h2>
          <p class="mb-4">Tu puntuación: {{ score }} / {{ questions.length }}</p>
  
          <div v-for="(question, index) in questions" :key="index" class="mb-8">
            <h3 class="text-xl font-semibold mb-2">{{ question.text }}</h3>
            <div class="bg-tertiary border-2 border-secondary p-4 rounded-lg">
              <p v-for="(option, optionIndex) in question.options" :key="optionIndex" 
                 :class="{'text-green-500': optionIndex === question.correctAnswer, 'text-red-500': userAnswers[index] === optionIndex && optionIndex !== question.correctAnswer}">
                {{ option }}
                <span v-if="optionIndex === question.correctAnswer"> (Respuesta correcta)</span>
                <span v-if="userAnswers[index] === optionIndex && optionIndex !== question.correctAnswer"> (Tu respuesta)</span>
              </p>
            </div>
          </div>
  
          <button @click="resetQuiz" class="bg-secondary text-primary font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300 mt-4">
            Repetir Quiz
          </button>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const questions = [
    {
      text: "En el modelo de pérdidas M/G/m/m, ¿qué ocurre con las llegadas cuando todos los canales están ocupados?",
      options: [
        "Las llegadas esperan en una cola hasta que un canal esté disponible.",
        "Las llegadas son atendidas inmediatamente por servidores adicionales temporales.",
        "Las llegadas son bloqueadas y eliminadas del sistema.",
        "Las llegadas son redirigidas a otro sistema de colas."
      ],
      correctAnswer: 2
    },
    {
      text: "¿Cuál de las siguientes es una característica del modelo de colas M/M/c?",
      options: [
        "Los tiempos de servicio tienen una distribución general.",
        "Las llegadas de clientes siguen un proceso de Poisson.",
        "La capacidad del sistema es limitada.",
        "Los clientes son atendidos en un orden aleatorio."
      ],
      correctAnswer: 1
    },
    {
      text: "¿Cuál es una diferencia clave entre el modelo M/G/c y el modelo M/M/c?",
      options: [
        "El modelo M/G/c tiene servidores ilimitados.",
        "El modelo M/G/c permite cualquier distribución de tiempo de servicio.",
        "El modelo M/G/c no permite llegadas Poisson.",
        "El modelo M/G/c tiene una capacidad limitada de clientes en espera."
      ],
      correctAnswer: 1
    },
    {
      text: "¿Qué hace que el modelo G/G/c sea más flexible en comparación con otros modelos?",
      options: [
        "Permite tiempos de servicio exponenciales únicamente.",
        "Permite una distribución general para las llegadas y el tiempo de servicio.",
        "Asume una capacidad limitada del sistema.",
        "Solo permite un servidor en el sistema."
      ],
      correctAnswer: 1
    },
    {
      text: "¿Cuál es una característica del modelo M/M/∞?",
      options: [
        "Siempre hay una cola de clientes esperando.",
        "Los tiempos de servicio siguen una distribución general.",
        "Siempre hay un servidor disponible para cada cliente que llega.",
        "El tiempo que un cliente pasa en el sistema depende del número de otros clientes presentes."
      ],
      correctAnswer: 2
    }
  ];
  
  const userAnswers = ref(new Array(questions.length).fill(null));
  const quizFinished = ref(false);
  
  const score = computed(() => {
    return userAnswers.value.reduce((total, answer, index) => {
      return total + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  });
  
  const finishQuiz = () => {
    quizFinished.value = true;
  };

  const goBack = () => {
  window.history.back();
};
  
  const resetQuiz = () => {
    userAnswers.value = new Array(questions.length).fill(null);
    quizFinished.value = false;
  };
  </script>