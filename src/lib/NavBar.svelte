<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  // TODO: May have to export this value
  let y;
  $: initial = y == 0 ? 'shadow-none' : 'shadow';
</script>

<Navbar let:hidden let:toggle class="sticky top-0 transition-shadow bg-black {initial} z-50">
  <NavBrand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold text-white">
      Portfolio
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>

<svelte:window bind:scrollY={y} />