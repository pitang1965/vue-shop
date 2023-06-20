import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default function useIsHome() {
  const route = useRoute()
  const isHome = computed(() => route.name === 'home')

  return { isHome }
}
