<script lang="ts">
	import { locale, t } from '$lib/localize/i18n';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Dropdown, DropdownItem, Label } from 'flowbite-svelte';
	import { ChevronDownSolid } from 'flowbite-svelte-icons';
    $: activeLanguage = 'en';

    function scrollIntoView({ target }: any) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth',
      block: "start"
    });
  }

  function selectedLanguage(lang: string) {
    activeLanguage = lang;
    $locale = activeLanguage
  }

  </script>
  
  <div class="absolute top-0 left-0 right-0 z-10">
    <Navbar class="bg-transparent">
      <NavBrand href="/">
        <img src="https://cdn-icons-png.flaticon.com/512/3618/3618051.png" class="me-3 h-7 sm:h-9" alt="QB Logo" />
        <span class="self-center whitespace-nowrap text-xl font-normal text-white dark:text-white hidden md:block">Quality Brain</span>
      </NavBrand>
      <NavHamburger class="text-white rounded-md p-1.5 focus:ring-gray-800 hover:bg-gray-500" />
      <NavUl ulClass="flex flex-col items-center p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium rounded-sm border-transparent bg-[#49494992] md:bg-transparent" slideParams={{ duration: 200 }}>
        <NavLi nonActiveClass="text-white font-extralight" href="#why" on:click={scrollIntoView}>{$t("navbar.why")}</NavLi>
        <NavLi nonActiveClass="text-white font-extralight" href="#solutions" on:click={scrollIntoView}>{$t("navbar.solutions")}</NavLi>
        <NavLi nonActiveClass="text-white font-extralight" href="#contact" on:click={scrollIntoView}>{$t("navbar.contact")}</NavLi>
        <NavLi nonActiveClass="text-white font-extralight">
          <Button class="min-w-[115px]">
            <span class="w-[50px]">
              {activeLanguage == 'th' ? 'ไทย': 'English'}
            </span>
            <ChevronDownSolid class="w-4 h-4 ms-2 text-white dark:text-white" />
          </Button>
            <Dropdown containerClass='min-w-[115px]'>
              <DropdownItem on:click={() => selectedLanguage('th')}>ไทย</DropdownItem>
              <DropdownItem on:click={() => selectedLanguage('en')}>English</DropdownItem>
            </Dropdown>
        </NavLi>

      </NavUl>
    </Navbar>
  </div>
 