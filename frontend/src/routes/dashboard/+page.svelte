<script lang="ts">
    import Button from '$lib/components/ui/button/button.svelte';
    import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte';
    import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
    import { Avatar, AvatarFallback } from '$lib/components/ui/avatar';

    let username = '';

    // Fetch user data from the backend
    const fetchUserData = async () => {
        const response = await fetch('/api/user');
        const result = await response.json();
        if (result.success) {
            username = result.user.email; // Assuming email is used as username
        }
    };

    fetchUserData();

    const greeting = () => {
        const greetings = ['Hi there,', 'Hello,', 'Welcome,', 'Welcome back,', 'Good to see you,'];
        return greetings[Math.floor(Math.random() * greetings.length)];
    };
</script>

<div class="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
    <div class="relative z-10">
        <div class="container px-4 sm:px-6 lg:px-8">
            <h1
                class="scroll-m-20 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
            >
                {greeting()} <span class="text-primary" id="username_placeholder">{username}</span>!
            </h1>
            <!-- Rest of the component remains the same -->
        </div>
    </div>
</div>