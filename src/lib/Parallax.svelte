<script>
    import { Parallax, ParallaxLayer } from 'svelte-parallax';

    let parallax;
</script>

<Parallax sections={3} bind:this={parallax}>
    <ParallaxLayer offset={1} rate={-2.5} style="display: flex; justify-content: flex-end;">
		<div style="background-color: lightblue; opacity: 0.5; width: 50%; height: 100%;"/>
	</ParallaxLayer>
	
	<ParallaxLayer offset={1} rate={2.5} style="display: flex; justify-content: flex-start;">
		<div style="background-color: yellow; opacity: 0.5; width: 50%; height: 100%;"/>
	</ParallaxLayer>
</Parallax>