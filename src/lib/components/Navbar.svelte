<script lang="ts">
    import { page } from '$app/stores';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    $: activeUrl = $page.url.pathname;

    function scrollIntoView({ target }: any) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth',
      block: "start"
    });
  }
  </script>
  
  <div class="absolute top-0 left-0 right-0 z-10">
    <Navbar class="bg-transparent">
      <NavBrand href="/">
        <img src="https://cdn-icons-png.flaticon.com/512/3618/3618051.png" class="me-3 h-7 sm:h-9" alt="QB Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold text-white dark:text-white hidden md:block">Quality Brain</span>
      </NavBrand>
      <NavHamburger class="text-white rounded-md p-1.5 focus:ring-gray-800 hover:bg-gray-500" />
      <NavUl ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium rounded-sm border-transparent bg-[#49494992] md:bg-transparent" slideParams={{ duration: 200 }}>
        <NavLi nonActiveClass="text-white" href="#why" on:click={scrollIntoView}>Why Quality Brain</NavLi>
        <NavLi nonActiveClass="text-white" href="#solutions" on:click={scrollIntoView}>Solutions</NavLi>
        <NavLi nonActiveClass="text-white" href="#contact" on:click={scrollIntoView}>Contact</NavLi>
      </NavUl>
    </Navbar>
  </div>
 