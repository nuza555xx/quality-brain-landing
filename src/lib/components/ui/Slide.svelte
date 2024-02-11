<script>
	import { t } from '$lib/localize/i18n';
  import { Carousel, Heading, P, Span } from 'flowbite-svelte';
  import image1 from '$lib/assets/hd/pexels-christina-morillo-1181359.webp';
  import image2 from '$lib/assets/hd/pexels-christina-morillo-1181712.webp';
  import image3 from '$lib/assets/hd/pexels-pixabay-60504.webp';


    export const images = [
      {
      alt: '1',
      src: image1,
      title: '1',
    },
    {
      alt: '2',
      src: image2,
      title: '2',
    },
    {
      alt: '3',
      src: image3,
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
         <p class="mb-3 md:text-4xl text-white">
          {$t('homepage.banner.desc')}
         </p>
      </div>
    </Carousel>
  </div>