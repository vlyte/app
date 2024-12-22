<script lang="ts">
    import Navbar from '$lib/components/layout/navbar.svelte';
    import { Button } from '$lib/components/ui/button';
</script>

<Navbar />

<div class="flex items-center justify-center min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 text-center">
    <div class="relative z-10">
        <div class="container px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl">
                <div class="mt-5 max-w-2xl">
                    <h1
                        class="scroll-m-20 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                    >
                        <span>Developer profiles</span>
                        <span class="text-primary block">made simple.</span>
                    </h1>
                    <div class="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
                        <Button size="lg" class="w-full sm:w-auto">Learn more</Button>
                        <Button size="lg" variant='outline' class="w-full sm:w-auto">Get started</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>