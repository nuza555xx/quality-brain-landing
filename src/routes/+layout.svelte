<script>
	import MetaTags from 'components/MetaTags.svelte';
	import Navbar from 'components/Navbar.svelte';
	import Footer from 'components/Footer.svelte';
	import Analytics from 'components/Analytics.svelte';
	import '../app.scss';
</script>


<section class="relative">
	<MetaTags/>
	<Analytics />
	<Navbar/>
	<slot />
	<Footer/>
</section>
