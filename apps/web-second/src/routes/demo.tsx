import type { Route } from './+types/demo';
import { seo } from '@/lib/seo';
import { ProfileDashboard } from '@/components/demo/profile-dashboard';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo({ matches, location }, {
    title: 'დემო სტუდენტის პანელი — student.cu.edu.ge',
    description: 'დემო სტუდენტის პროფილის გვერდი ცარიელი ველებით. რეალური მონაცემები არ ინახება.',
  });
}

export default function DemoPage() {
  return <ProfileDashboard />;
}
