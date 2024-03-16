import { _center } from '../.nuxt/types/tailwind.config';
<script setup lang="ts">

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6'
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>

<template>
  <div>

    <ULandingHero :title="page.hero.title" :description="page.hero.description">
      <template #headline>

        <!-- <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />c
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none" />
        </UBadge> -->
      </template>



      <!-- <Placeholder /> -->
      <!-- 
      <ULandingLogos :title="page.logos.title" align="center">
        <UIcon v-for="icon in page.logos.icons" :key="icon" :name="icon" class="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white" />
      </ULandingLogos> -->
      <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden" indicators>
        <img :src="item" class="w-full h-15" draggable="false" center>
      </UCarousel>
    </ULandingHero>

    <ULandingCTA title="Join us"
      description="Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip"
      align="left" card>
      <img src="https://picsum.photos/640/360" width="1000px" height="20vh"
        class=" rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700">
    </ULandingCTA>
    <!-- 
    <ULandingSection :title="page.pricing.title" :description="page.pricing.description" :headline="page.pricing.headline">
      <UPricingGrid id="pricing" compact class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <UPricingCard v-for="(plan, index) in page.pricing.plans" :key="index" v-bind="plan" />
      </UPricingGrid>
    </ULandingSection> -->

    <ULandingSection :headline="page.testimonials.headline" :title="page.testimonials.title"
      :description="page.testimonials.description">
      <UPageColumns id="testimonials" class="xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <div v-for="(testimonial, index) in page.testimonials.items" :key="index" class="break-inside-avoid">
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
    </ULandingSection>

    <ULandingSection class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10">
      <ULandingCTA v-bind="page.cta" :card="false" />
    </ULandingSection>
    <ULandingSection id="faq" :title="page.faq.title" :description="page.faq.description"
      class="scroll-mt-[var(--header-height)]"> -->
      <ULandingFAQ multiple :items="page.faq.items" :ui="{
      button: {
        label: 'font-semibold',
        trailingIcon: {
          base: 'w-6 h-6'
        }
      }
    }" class="max-w-4xl mx-auto" />
    </ULandingSection>
  </div>
</template>


<style>
#main_screen {
  background-color: blue;
}
</style>