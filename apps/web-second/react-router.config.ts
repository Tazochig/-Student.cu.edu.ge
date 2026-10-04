import { vercelPreset } from '@vercel/react-router/vite';
import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: 'src',
	buildDirectory: 'build',
	ssr: true,
	presets: [vercelPreset()],
} satisfies Config;
