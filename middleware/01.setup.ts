export default defineNuxtRouteMiddleware((to, from) => {
  return navigateTo('/middleware/to')
})
