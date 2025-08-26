<template>
  <form class="max-w-lg px-4 mx-auto mt-8 space-y-6" action="#" method="POST">
    <div>
      <label for="name" class="block text-lg font-semibold text-gray-700">Ваше имя</label>
      <input type="text" id="name" name="name" required
        class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Введите ваше имя" />
    </div>

    <div>
      <label for="email" class="block text-lg font-semibold text-gray-700">Электронная почта</label>
      <input type="email" id="email" name="email" required
        class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Введите вашу почту" />
    </div>

    <div>
      <label for="subject" class="block text-lg font-semibold text-gray-700">Тема сообщения</label>
      <input type="text" id="subject" name="subject" required
        class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Тема сообщения" />
    </div>

    <div>
      <label for="message" class="block text-lg font-semibold text-gray-700">Сообщение</label>
      <textarea id="message" name="message" required
        class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="6" placeholder="Ваше сообщение"></textarea>
    </div>

    <div>
      <button type="submit"
        class="w-full px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Отправить сообщение
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
// Этот компонент будет обрабатывать форму связи (по желанию, можно подключить валидацию, обработку данных, отправку на сервер)
</script>

<style scoped>
/* Стиль для формы */
</style>
