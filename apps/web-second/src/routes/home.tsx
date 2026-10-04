import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { LoginPanel } from '@/components/home/login-panel';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'student.cu.edu.ge',
		description: 'კავკასიის უნივერსიტეტის სტუდენტური პორტალი — ავტორიზაცია.',
	});
}

export default function HomePage() {
	return <LoginPanel />;
}
