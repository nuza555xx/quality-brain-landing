<script lang="ts">
	import { t } from '$lib/localize/i18n';
    import { Input, Label, Button, Heading, P } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { fade } from 'svelte/transition';
    let scrollY: number;
  </script>
<section class="flex flex-columns items-center justify-center min-h-[700px]" id="contact">
  {#if scrollY > 1200}
   <div class="container m-5 md:m-10" transition:fade={{duration: 400}}>
   <div class="text-center">
    <Heading tag="h1" class="mb-4 font-normal">
      {$t("homepage.contact")}
     </Heading>
   </div>
   
   <div class="grid grid-cols-1 md:grid-cols-2">
  <div>
      <P class="mb-3 md:text-xl font-extralight" weight="light"><a href="mailto:tawan.naw@qualitybrain.tech">tawan.naw@qualitybrain.tech</a></P>
      <P class="mb-3 md:text-xl font-extralight" weight="light">{$t("homepage.contact.address")}</P>
      <P class="mb-3 md:text-xl font-extralight" weight="light">{$t("homepage.contact.open")}</P>
  </div>
    <div>
      <iframe
        title="Wikipedia English language homepage"
        width="100%"
        height="300"
        style="border:0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=
          &q=Space+Needle,Seattle+WA">
      </iframe>
    </div>
  </div>
  
      <form class="mt-10">
        <div class="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
          <div>
            <Label for="first_name" class="mb-2 font-extralight">{$t("homepage.contact.firstname")}</Label>
            <Input type="text" id="first_name" placeholder="" required />
          </div>
          <div>
            <Label for="last_name" class="mb-2 font-extralight">{$t("homepage.contact.lastname")}</Label>
            <Input type="text" id="last_name" placeholder="" required />
          </div>
          <div>
            <Label for="phone" class="mb-2 font-extralight">{$t("homepage.contact.phone")}</Label>
            <Input type="tel" id="phone" placeholder="" required />
          </div>
          <div class="mb-6">
            <Label for="email" class="mb-2 font-extralight">{$t("homepage.contact.email")}</Label>
            <Input type="email" id="email" placeholder="" required />
          </div>
        </div>
       
        <div class="text-center">
        <Button size="xl" href="mailto:admin@qualtitybrain?subject=Hello">{$t("homepage.contact.submit")} <ArrowRightOutline class="w-7 h-7 ms-2" /></Button>
        </div>
      </form>
   </div>
   {/if}
</section>
<svelte:window bind:scrollY />
