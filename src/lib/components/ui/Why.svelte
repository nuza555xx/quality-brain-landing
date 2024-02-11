<script lang="ts">
	import { t } from '$lib/localize/i18n';
    import { Heading, P, Span } from 'flowbite-svelte';
	import { fade } from 'svelte/transition';
	let scrollY: number;
  </script>
<section class="flex flex-columns items-center justify-center min-h-[500px]" id="why">
  {#if scrollY > 300}
   <div class="container text-center m-5 md:m-10" transition:fade={{duration: 400}}>
    <Heading tag="h1" class="mb-4 font-normal">
        {$t("homepage.why")} <Span underline decorationClass="decoration-8 decoration-primary-700 dark:decoration-primary-600">Quality Brain</Span> ?
       </Heading>
     <P class="my-10 md:text-2xl text-gray-500 font-extralight" weight="light">
      <!-- <h2>Empowering Your Business Through Technology</h2> -->
      {$t('homepage.why.desc')}
      </P>
   </div>
   {/if}
</section>
<svelte:window bind:scrollY />
