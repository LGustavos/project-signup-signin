<template>
 <div id="app">
     <div class="flex p-4 flex-col bg-white w-screen m-5 md:h-5/6 rounded shadow-2xl md:w-96 z-10 animate__animated animate__fadeInDown">
      <h1 class="flex justify-center md:mt-4 text-lg font-bold tracking-wider text-3xl text-blue-500">SignUp</h1>
       <form class="mt-4 md:mt-8">
       <div class="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-2 md:gap-y-6 xl:gap-y-10">
         <input type="text" placeholder="Nome" class="w-full border-0 border-b-2 border-blue-500 rounded">
         <input type="text" placeholder="Sobrenome" class="w-full border-0 border-b-2 border-blue-500 rounded">
         <input type="text" placeholder="Email" class="w-full md:col-span-2 border-0 border-b-2 border-blue-500 rounded">
         <input type="password" placeholder="Crie uma senha" class="w-full border-0 border-b-2 border-blue-500 rounded">
         <input type="password" placeholder="Confirme sua senha" class="w-full border-0 border-b-2 border-blue-500 rounded">
       </div>
     </form>
     <div class="flex justify-center mt-6 md:mt-10">
            <button
              type="submit"
              class="rounded h-10 w-3/4 bg-blue-600 text-white tracking font-bold hover:bg-blue-700 trasition duration-300">
              Cadastrar
            </button>
        </div>
         <div class="flex justify-end items-end mt-4 md:h-full">
            <p class="text-gray-600 font-bold text-sm">
              Já possui uma conta?<a href="/signin" class="ml-1 text-blue-500">Entrar</a>
            </p>
          </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
</style>
