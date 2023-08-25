<template>
  <div class="h-full">
    <div class="flex min-h-full flex-1 flex-col justify-center items-center py-10 sm:px-6 lg:px-8">
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[620px]">
        <div class="bg-white px-12 py-20 shadow sm:rounded-lg sm:px-20">

          <h1 class="text-3xl text-secondary-900 font-bold">Crie sua conta</h1>

          <p class="text-gray-500 mt-2">Olá, bem-vindo! Selecione o método cadastro:</p>

          <div class="flex gap-20 my-10">
            <cardSocialLogin name="Google" logo="google-logo.png" />
            <cardSocialLogin name="Facebook" logo="facebook-logo.png" />
          </div>

          <dividerText name="Ou continue com email" />

          <form class="space-y-7" action="#" method="POST">
            <inputForm name="name" type="email" placeholder="Nome completo" :icon="UserIcon" />
            <inputForm name="email" type="email" placeholder="Email" :icon="EnvelopeIcon" />
            <inputForm name="password" type="password" placeholder="Senha" :icon="LockClosedIcon" />
            <inputForm name="password" type="password" placeholder="Confirmar senha" :icon="LockClosedIcon" />

            <div>
              <primaryButton name="Criar conta" />
            </div>
          </form>

          <p class="flex justify-center gap-1.5 mt-10 text-center text-sm text-gray-500">
            Já tem uma conta?
            {{ ' ' }}
            <textLink name="Entrar na minha conta" path="login" />
          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { inputForm, textLink, primaryButton, dividerText, cardSocialLogin } from '@/components'
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/vue/20/solid'
</script>
