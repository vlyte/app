import { json } from '@sveltejs/kit';
import { signup } from '$lib/auth/signup/route';

export async function POST({ request }) {
    const { email, password } = await request.json();
    const result = await signup(email, password);
    return json(result);
}