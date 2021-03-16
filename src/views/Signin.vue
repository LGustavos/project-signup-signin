<template>
  <div class="flex justify-center items-center">
    <div
      class="flex p-4 flex-col bg-white h-96 rounded shadow-2xl md:w-96 z-10 animate__animated animate__fadeInDown"
    >
      <h1
        class="flex justify-center mt-4 text-lg font-bold tracking-wider text-3xl text-blue-500"
      >
        SignIn
      </h1>
      <form class="mt-6">
        <div class="grid grid-cols-1 space-y-6">
          <input
            type="text"
            placeholder="Digite seu email"
            class="w-full border-0 border-b-2 border-blue-500 rounded"
            v-model="email"
          />

          <input
            type="password"
            placeholder="Digite sua senha"
            class="w-full border-0 border-b-2 border-blue-500 rounded"
            v-model="password"
          />
        </div>
      </form>
      <div class="mt-8">
        <input type="checkbox" name="Agree" class="mr-2 focus:ring-0 rounded" />
        <label class="text-gray-600 text-sm font-bold"
          >Me manter conectado
        </label>
      </div>
      <div class="flex justify-center mt-6">
        <button
          type="submit"
          class="rounded h-10 w-3/4 bg-blue-600 text-white tracking font-bold hover:bg-blue-700 trasition duration-300"
        >
          Entrar
        </button>
      </div>
      <div class="flex justify-end items-end h-full">
        <p class="text-gray-600 font-bold text-sm">
          Não possui uma conta?<a href="/signup" class="ml-1 text-blue-500"
            >Registrar-se</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "signin",
  data() {
    return {
    };
  }
};
</script>
<style scoped>
</style>
