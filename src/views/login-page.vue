<template>
  <div class="h-full">
    <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">

          <h1 class="text-3xl text-secondary-900 font-bold">Entre em sua conta</h1>

          <p class="text-gray-500 mt-2">Bem-vindo de volta! Selecione o método entrada:</p>

          <div class="flex gap-7 my-10">
            <cardSocialLogin name="Google" logo="google-logo.png" />
            <cardSocialLogin name="Facebook" logo="facebook-logo.png" />
          </div>

          <dividerText name="Ou continue com email" />

          <form class="space-y-7" action="#" method="POST">
            <inputForm name="email" type="email" placeholder="Email" :icon="EnvelopeIcon" />

            <inputForm name="password" type="password" placeholder="Senha" :icon="LockClosedIcon" />

            <div class="flex items-center justify-between">
              <checkboxDescription description="Lembrar de mim" />

              <textLink name="Esqueceu a senha?" link="" />
            </div>

            <div>
              <primaryButton name="Entrar" />
            </div>
          </form>

          <p class="flex justify-center gap-1.5 mt-10 text-center text-sm text-gray-500">
            Não tem uma conta?
            {{ ' ' }}
            <textLink name="Não tenho conta" link="" />
          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { inputForm, checkboxDescription, textLink, primaryButton, dividerText, cardSocialLogin } from '@/components'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/vue/20/solid'
</script>
