<script>
	import { t } from '$lib/localize/i18n';
    import { Carousel, Heading, P, Span } from 'flowbite-svelte';

    export const images = [
      {
      alt: '1',
      src: 'https://images.pexels.com/photos/18186227/pexels-photo-18186227/free-photo-of-smart-home-devices.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '1',
    },
    {
      alt: '2',
      src: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '2',
    },
    {
      alt: '3',
      src: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '3',
    },
  ];
  </script>
  
  <div class="w-full">
    <Carousel {images} duration={5000} class="rounded-none h-[100dvh] sm:h-[100dvh] xl:h-[100dvh] 2xl:h-[100dvh]">
      <div class="absolute mx-5 top-[50%] md:left-[50%] md:translate-x-[-50%] translate-y-[-50%] md:mx-10 ">
        <Heading tag="h1" class="mb-4 text-white font-semibold" customSize="text-3xl font-extrabold md:text-8xl">
          {$t('homepage.banner.title')}<Span gradient>{$t('homepage.banner.subtitle')}</Span>
        </Heading>
         <P class="mb-3 md:text-4xl" weight="light" color="text-white">
          {$t('homepage.banner.desc')}
        </P>
      </div>
    </Carousel>
  </div>