<script lang="ts">
	import { Heading, Card } from "flowbite-svelte";
	import { fade } from "svelte/transition";
	  let scrollY: number;
  </script>
<section class="flex flex-columns items-center justify-center min-h-[2000px] md:min-h-[700px]" id="solutions">
  {#if scrollY > 700}
   <div class="container text-center m-5 md:m-10" transition:fade={{duration: 400}}>
    <Heading tag="h1" class="mb-4">
      Solutions
     </Heading>
     <div class="grid md:grid-cols-5 grid-cols-1 gap-5 mt-10">
        <Card img="https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="md:hover:scale-[1.05] transition-all cursor-pointer">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IT solution</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight leading-snug">We specialize in developing scalable and innovative software solutions tailored to your business needs.</p>
        </Card>

        <Card img="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="md:hover:scale-[1.05] transition-all cursor-pointer">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cyber security</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight leading-snug">Protect your digital assets with our comprehensive cybersecurity services, including threat detection, prevention, and incident response.</p>
        </Card>

        <Card img="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="md:hover:scale-[1.05] transition-all cursor-pointer">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Software development</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight leading-snug">Streamline your IT operations and enhance efficiency with our range of IT solutions, including cloud computing, network infrastructure, and IT support.</p>
        </Card>

        <Card img="https://images.pexels.com/photos/18186227/pexels-photo-18186227/free-photo-of-smart-home-devices.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="md:hover:scale-[1.05] transition-all cursor-pointer">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Internet of Things (IoT)</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight leading-snug">Explore the possibilities of IoT with our expertise in connecting devices, collecting data, and leveraging insights to drive business growth.</p>
        </Card>

        <Card img="https://images.pexels.com/photos/260032/pexels-photo-260032.jpeg?auto=compress&cs=tinysrgb&w=600" class="md:hover:scale-[1.05] transition-all cursor-pointer">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blockchain</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight leading-snug">We specialize in developing scalable and innovative software solutions tailored to your business needs.</p>
        </Card>
      </div>
   </div>
   {/if}
</section>
<svelte:window bind:scrollY />
