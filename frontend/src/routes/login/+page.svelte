<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import Input from '$lib/components/ui/input/input.svelte';
    import { Label } from '$lib/components/ui/label';
    import { Alert, AlertDescription } from '$lib/components/ui/alert';

    let email = '';
    let password = '';
    let error = '';
    let success = '';

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            error = 'Email and password are required';
        } else {
            error = '';
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const result = await response.json();
            if (!result.success) {
                error = result.error;
            } else {
                success = 'Logged in successfully!';
                setTimeout(() => {
                    window.location.href = '/dashboard';
                }, 2000);
            }
        }
    };
</script>

<div class="flex items-center justify-center min-h-screen p-4">
    <div class="w-full sm:w-96">
        <div class="mb-4">
            <h1 class="text-3xl font-bold">Login</h1>
            <p class="text-sm text-muted-foreground">
                Enter your email below to login to your account
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
                <div class="flex items-center justify-between">
                    <Label for="password">Password</Label>
                    <a href="/forgot-password" class="text-xs text-muted-foreground underline">
                        Forgot your password?
                    </a>
                </div>
                <Input id="password" type="password" bind:value={password} />
                {#if error && !password}
                    <p class="text-xs text-red-500">{error}</p>
                {/if}
            </div>
            {#if error}
                <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            {/if}
            {#if success}
                <Alert variant="success">
                    <AlertDescription class="text-green-500">{success}</AlertDescription>
                </Alert>
            {/if}
            <Button type="submit" class="w-full">
                Login
            </Button>
        </form>
        <div class="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="/signup" class="underline">
                Sign up
            </a>
        </div>
    </div>
</div>