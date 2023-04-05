<script>

</script>
<template>
  <div>
    <router-view v-slot="{ Component }">
      <div>
        <transition >
          <div>
            <component :is="Component" />
          </div>
        </transition>
      </div>

    </router-view>
  </div>
</template>
<style>
* {
  font-family: poppins;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>