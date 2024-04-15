<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import LayoutUnrestricted from '$lib/components/LayoutUnrestricted.svelte';
	import { base } from '$app/paths';

	export let title = 'GDPR';
</script>

<LayoutUnrestricted {title}>
	<h2>1. Introduction</h2>
	<p>
		Polarchan.com respects your privacy and is committed to protecting your personal data. This
		privacy policy will inform you as to how we look after your personal data when you visit our
		website (regardless of where you visit it from) and tell you about your privacy rights and how
		the law protects you.
	</p>
	<h2>2. Important information and who we are</h2>
	<p>
		Polarchan.com is the controller and responsible for your personal data (collectively referred to
		as "polarchan.com", "we", "us", or "our" in this privacy policy).
	</p>
	<p>Contact details:</p>
	<ul>
		<li>Full name of legal entity: Martin Kubeš</li>
		<li>Email address: kontakt@kubesmartin.cz</li>
	</ul>
	<h2>3. The data we collect about you</h2>
	<p>
		Personal data, or personal information, means any information about an individual from which
		that person can be identified. We may collect, use, store, and transfer different kinds of
		personal data about you which we have grouped together as follows:
	</p>
	<ul>
		<li>Identity Data includes first name, last name, username or similar identifier.</li>
		<li>Contact Data includes email address.</li>
		<li>
			Technical Data includes internet protocol (IP) address, your login data, browser type and
			version, time zone setting and location, browser plug-in types and versions, operating system
			and platform, and other technology on the devices you use to access this website.
		</li>
		<li>Usage Data includes information about how you use our website.</li>
	</ul>
	<h2>4. How We Use Your Personal Data</h2>
	<p>
		We will only use your personal data when the law allows us to. Most commonly, we will use your
		personal data in the following circumstances:
	</p>
	<ul>
		<li>To register you as a new user. (Identity and Contact Data)</li>
		<li>
			To manage our relationship with you which will include notifying you about changes to our
			terms or privacy policy. (Identity and Contact Data)
		</li>
		<li>
			To administer and protect our business and this website (including troubleshooting, data
			analysis, testing, system maintenance, support, reporting, and hosting of data). (Identity,
			Contact, and Technical Data)
		</li>
	</ul>
	<h2>5. Data Retention</h2>
	<p>
		We will only retain your personal data for as long as necessary to fulfill the purposes we
		collected it for, including for the purposes of satisfying any legal, accounting, or reporting
		requirements. You can ask us to delete your data at any time.
	</p>
	<h2>6. Data Security</h2>
	<p>
		We have put in place appropriate security measures to prevent your personal data from being
		accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition,
		we limit access to your personal data to those employees, agents, contractors, and other third
		parties who have a business need to know. They will only process your personal data on our
		instructions and they are subject to a duty of confidentiality.
	</p>
	<h2>7. Your Legal Rights</h2>
	<p>
		Under certain circumstances, you have rights under data protection laws in relation to your
		personal data, including the right to request access, request correction, erasure of your
		personal data, object to processing of your personal data, request restriction of processing,
		request the transfer of your personal data, and the right to withdraw consent. If you wish to
		exercise any of the rights set out above, please contact us.
	</p>
	<h2>8. Third-party links</h2>
	<p>
		This website may include links to third-party websites, plug-ins, and applications. Clicking on
		those links or enabling those connections may allow third parties to collect or share data about
		you. We do not control these third-party websites and are not responsible for their privacy
		statements. This policy is effective as of 2024-04-15. We reserve the right to change this
		Privacy Policy at any time, and you should check this Privacy Policy periodically.
	</p>
	<br />
	<ButtonLink href={base + '/terms'}>More about PolARCHAN Terms</ButtonLink>
</LayoutUnrestricted>

<style>
	p {
		max-width: 720px;
	}
</style>
