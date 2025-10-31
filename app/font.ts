// app/fonts.ts
import { Bricolage_Grotesque, Alata, Anaheim } from 'next/font/google';

// Bricolage Grotesque — variable geometric grotesque
export const bric = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // common weights
  display: 'swap',
});

// Alata — clean geometric sans-serif
export const ala = Alata({
  subsets: ['latin'],
  weight: ['400'], // only one weight available
  display: 'swap',
});

// Anaheim — simple sans-serif for body text
export const ana = Anaheim({
  subsets: ['latin'],
  weight: ['400'], // single weight available
  display: 'swap',
});
