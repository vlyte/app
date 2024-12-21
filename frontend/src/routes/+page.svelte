<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Input from '$lib/components/ui/input/input.svelte';
</script>

<div class="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
	<div class="relative z-10">
		<div class="container px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-2xl">
				<div class="mt-5 max-w-2xl">
					<h1
						class="scroll-m-20 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
					>
						<div
							class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
						>
							<span>Developer profiles,</span>
							<Button class="scroll-m-20 w-full font-extrabold tracking-tight sm:w-auto"
								>Login</Button
							>
						</div>
						<span class="text-primary mt-2 block">made simple.</span>
					</h1>
					<br />
					<span class="text-slate-600"
						><span class="text-primary">Vlyte</span> is a platform for developers to create & share their
						profiles.</span
					>
					<div class="mt-8 flex flex-col gap-3 sm:flex-row">
						<Input
							placeholder="Email (e.g. johndoe@example.com)"
							type="email"
							class="w-full sm:max-w-sm"
						/>
						<Button size="lg" variant={'outline'} class="w-full sm:w-auto">Get started</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
