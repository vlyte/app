<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import Input from '$lib/components/ui/input/input.svelte';
    import { Label } from '$lib/components/ui/label';
    import { Alert, AlertDescription } from '$lib/components/ui/alert';

    let email = '';
    let password = '';
    let confirmPassword = '';
    let error = '';

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        if (!email || !password || !confirmPassword) {
            error = 'All fields are required';
        } else if (password !== confirmPassword) {
            error = 'Passwords do not match';
        } else {
            error = '';
            // Perform signup logic
        }
    };
</script>

<div class="flex items-center justify-center min-h-screen p-4">
    <div class="w-full sm:w-96">
        <div class="mb-4">
            <h1 class="text-3xl font-bold">Sign Up</h1>
            <p class="text-sm text-muted-foreground">
                Enter your details below to create a new account
            </p>
        </div>
        <form on:submit={handleSubmit} class="space-y-4">
            <div class="space-y-2">
                <Label for="email">Email</Label>
                <Input id="email" type="email" bind:value={email} placeholder="m@example.com" />
                {#if error && !email}
                    <p class="text-xs text-red-500">{error}</p>
                {/if}
            </div>
            <div class="space-y-2">
                <Label for="password">Password</Label>
                <Input id="password" type="password" bind:value={password} />
                {#if error && !password}
                    <p class="text-xs text-red-500">{error}</p>
                {/if}
            </div>
            <div class="space-y-2">
                <Label for="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" bind:value={confirmPassword} />
                {#if error && !confirmPassword}
                    <p class="text-xs text-red-500">{error}</p>
                {/if}
            </div>
            {#if error}
                <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            {/if}
            <Button type="submit" class="w-full">
                Sign Up
            </Button>
        </form>
        <div class="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/login" class="underline">
                Login
            </a>
        </div>
    </div>
</div>