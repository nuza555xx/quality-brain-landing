<script>
	import { t } from '$lib/localize/i18n';
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon, P, Hr } from 'flowbite-svelte';
    import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
  </script>
  
  <Footer footerType="socialmedia" class="bg-primary-800">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <FooterBrand href="/" src="https://cdn-icons-png.flaticon.com/64/3618/3618051.png" spanClass="text-white text-2xl" alt="Logo" name="Quality Brain" />
       <div class="my-5">
      <P class="mb-3" weight="light" color="text-white"><a href="mailto:tawan.naw@qualitybrain.tech">tawan.naw@qualitybrain.tech</a></P>
      <P class="mb-3" weight="light" color="text-white">{$t("homepage.contact.address")}</P>
      <P class="mb-3" weight="light" color="text-white">{$t("homepage.contact.open")}</P>
       </div>
      </div>
      <div class="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2">
        <div>
          <h2 class="mb-3 md:mb-6 text-xl font-semibold text-gray-900 text-white">{$t("homepage.solutions")}</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-2 md:mb-4 text-white" href="/">{$t("homepage.solutions.it")}</FooterLink>
            <FooterLink liClass="mb-2 md:mb-4 text-white" href="/">{$t("homepage.solutions.security")}</FooterLink>
            <FooterLink liClass="mb-2 md:mb-4 text-white" href="/">{$t("homepage.solutions.develop")}</FooterLink>
            <FooterLink liClass="mb-2 md:mb-4 text-white" href="/">{$t("homepage.solutions.iot")}</FooterLink>
            <FooterLink liClass="mb-2 md:mb-4 text-white" href="/">{$t("homepage.solutions.blockchain")}</FooterLink>

          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <Hr classHr="my-2 md:my-8" />

    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterCopyright href="/" by="Quality Brain™" spanClass="text-white" />
      <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
        <FooterIcon href="/">
          <FacebookSolid class="w-6 h-6 text-gray-500 text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <DiscordSolid class="w-6 h-6 text-gray-500 text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <TwitterSolid class="w-6 h-6 text-gray-500 text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <GithubSolid class="w-6 h-6 text-gray-500 text-white" />
        </FooterIcon>
      </div>
    </div>
  </Footer>