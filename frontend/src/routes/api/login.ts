import { json } from '@sveltejs/kit';
import { login } from '$lib/auth/login/route';

export async function POST({ request }) {
    const { email, password } = await request.json();
    const result = await login(email, password);
    return json(result);
}