<script>
    import { page } from '$app/stores';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    $: activeUrl = $page.url.pathname;
  </script>
  
  <div class="absolute top-0 left-0 right-0 z-10">
    <Navbar class="bg-transparent">
      <NavBrand href="/">
        <img src="https://cdn-icons-png.flaticon.com/512/3618/3618051.png" class="me-3 h-6 sm:h-9" alt="QB Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold text-white dark:text-white">Quality Brain</span>
      </NavBrand>
      <NavHamburger class="text-white focus:outline-none rounded-md focus:ring-0 p-1.5 focus:ring-gray-800 hover:bg-gray-500" />
      <NavUl ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium text-white rounded-none border-transparent">
        <NavLi nonActiveClass="text-white hover:text-primary-700" href="/">Why Quality Brain</NavLi>
        <NavLi nonActiveClass="text-white hover:text-primary-700" href="/">About</NavLi>
        <NavLi nonActiveClass="text-white hover:text-primary-700" href="/">Solutions</NavLi>
        <NavLi nonActiveClass="text-white hover:text-primary-700" href="/">Contact</NavLi>
      </NavUl>
    </Navbar>
  </div>
 