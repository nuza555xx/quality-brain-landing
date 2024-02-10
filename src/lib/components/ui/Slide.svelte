<script>
    import { Carousel, Heading, P, Span } from 'flowbite-svelte';
    export const images = [
    {
      alt: '1',
      src: 'https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '1',
    },
    {
      alt: '1',
      src: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '1',
    },
  ];
  </script>
  
  <div class="w-full">
    <Carousel {images} let:Indicators duration={5000} class="rounded-none h-[100dvh] sm:h-[100dvh] xl:h-[100dvh] 2xl:h-[100dvh]">
      <Indicators/>
      <div class="absolute top-[25%] mx-5 md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] md:mx-10 ">
        <Heading tag="h1" class="mb-4 text-white" customSize="text-3xl font-extrabold md:text-7xl">
          <Span gradient>WHY !!</Span> must to Quality brain.
        </Heading>
         <P class="mb-3 md:text-xl" weight="light" color="text-white">
            Track work across the enterprise through an open, collaborative platform. <strong class="font-bold text-primary-900 dark:text-white"> Link issues across Jira </strong>
            and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
          </P>
      </div>
    </Carousel>
  </div>