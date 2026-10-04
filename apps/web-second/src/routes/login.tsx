import type { Route } from './+types/login';
import { seo } from '@/lib/seo';
import { LoginPanel } from '@/components/home/login-panel';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo({ matches, location }, {
    title: 'student.cu.edu.ge — ავტორიზაცია',
    description: 'კავკასიის უნივერსიტეტის სტუდენტური პორტალის ავტორიზაციის გვერდი.',
  });
}

export default function LoginPage() {
  return <LoginPanel />;
}
