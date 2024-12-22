<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import { Avatar, AvatarFallback } from '$lib/components/ui/avatar';
	/* [TODO] Add profile picture using AvatarImage component Implement profile picture upload
	and fetching from the API logic.*/

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
				{greeting()} <span class="text-primary" id="username_placeholder">(username)</span>!
			</h1>
			<br />
			<div class="flex items-center space-x-4">
				<Tooltip>
					<TooltipTrigger>
						<Avatar>
							<AvatarFallback>
								<Skeleton class="h-12 w-12 rounded-full" id="avatar_placeholder" />
							</AvatarFallback>
						</Avatar>
					</TooltipTrigger>
					<TooltipContent>
						<Button variant={'ghost'} class="flex gap-6">
							Edit profile picture
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6.525q.5 0 .75.313t.25.687t-.262.688T11.5 5H5v14h14v-6.525q0-.5.313-.75t.687-.25t.688.25t.312.75V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"
								></path></svg
							>
						</Button>
					</TooltipContent>
				</Tooltip>
				<div class="space-y-2">
					<div>
						<Tooltip>
							<TooltipTrigger>
								<Skeleton class="h-4 w-[200px]" id="username_placeholder" />
							</TooltipTrigger>
							<TooltipContent>
								<Button variant={'ghost'} class="flex gap-6">
									Edit display name
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
										><path
											fill="currentColor"
											d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6.525q.5 0 .75.313t.25.687t-.262.688T11.5 5H5v14h14v-6.525q0-.5.313-.75t.687-.25t.688.25t.312.75V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"
										></path></svg
									>
								</Button>
							</TooltipContent>
						</Tooltip>
					</div>
					<Skeleton class="h-4 w-[100px]" id="handle_placeholder" />
				</div>
			</div>
		</div>
	</div>
</div>
