<template>
  <div>
    <TheHeader></TheHeader>
    <SidebarLinks></SidebarLinks>
    <WelcomeCard></WelcomeCard>
    <Nuxt />
  </div>
</template>

<script>
 import TheHeader from '~/components/TheHeader/TheHeader'
 import WelcomeCard from '~/components/WelcomeCard/WelcomeCard'
 import SideBar from '~/components/SidebarLinks/SidebarLinks'
import SidebarLinks from '~/components/SidebarLinks/SidebarLinks.vue'
export default {
  components: {
    TheHeader,
    WelcomeCard,
    SidebarLinks
  }
}
</script>

    SidebarLinks