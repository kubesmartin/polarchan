<script>
	import { setContext } from 'svelte';
	import { FirebaseAuthService } from '$lib/services/FirebaseAuthService';
	import { FirebaseQueryService } from '$lib/services/FirebaseQueryService';

	const authService = new FirebaseAuthService();
	const queryService = new FirebaseQueryService();
	setContext('auth', authService);
	setContext('queries', queryService);
</script>

<!-- Your layout HTML here -->
<slot />
