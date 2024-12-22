import { json } from '@sveltejs/kit';

export async function GET({ locals }) {
    // Assuming user data is stored in locals after login
    if (locals.user) {
        return json({ success: true, user: locals.user });
    } else {
        return json({ success: false, error: 'User not logged in' });
    }
}