<script lang="ts">
    import { Heading, P, Span } from 'flowbite-svelte';
	import { fade } from 'svelte/transition';
	let scrollY: number;
  </script>
<section class="flex flex-columns items-center justify-center min-h-[500px]" id="why">
  {#if scrollY > 300}
   <div class="container text-center m-5 md:m-10" transition:fade={{duration: 400}}>
    <Heading tag="h1" class="mb-4">
        Why <Span underline decorationClass="decoration-8 decoration-primary-700 dark:decoration-primary-600">Quality Brain</Span> ?
       </Heading>
     <P class="my-10 md:text-2xl" weight="light">
      <!-- <h2>Empowering Your Business Through Technology</h2> -->
      At Quality brain Solutions, we are committed to driving your business forward through cutting-edge technology solutions. With expertise in software development, cybersecurity, IT solutions, IoT, and infrastructure, we provide comprehensive services tailored to meet your unique needs.
      From crafting innovative software solutions to protect your digital assets with robust cybersecurity measures, and streamlining your IT operations to optimizing processes with IoT, we have the knowledge and experience to empower your business for success.
      Choose Quality brain Solutions as your trusted partner and embark on a journey of technological advancement and business growth.
      </P>
   </div>
   {/if}
</section>
<svelte:window bind:scrollY />
