import { Inter, Lusitana } from 'next/font/google';

// NOTE3: subsetについて説明
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
