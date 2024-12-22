<script lang="ts">
    import { Button } from '$lib/components/ui/button';
</script>

<nav class="shadow-md">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <div class="flex-shrink-0">
                <a href="/">
                    <img class="h-8 w-auto" src="/navbaricon.png" alt="Logo" />
                </a>
            </div>
            <div class="flex items-center space-x-4">
                <Button href="/login" class="w-full sm:w-auto">Login</Button>
                <Button href="/signup" variant="outline" class="w-full sm:w-auto">Sign Up</Button>
            </div>
        </div>
    </div>
</nav>