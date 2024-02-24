<script>
	import { setContext } from 'svelte';
	import { FirebaseAuthService } from '$lib/services/FirebaseAuthService';

	const authService = new FirebaseAuthService();
	setContext('auth', authService);
</script>

<!-- Your layout HTML here -->
<slot />
