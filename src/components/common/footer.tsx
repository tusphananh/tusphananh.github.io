import { CommonInfo } from '@/constants';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      id='contact'
      className='flex w-full shrink-0 flex-col items-center justify-center gap-8 border-t px-4 py-6 sm:flex-row md:px-6'
    >
      <Link
        className='text-xs text-gray-500 underline-offset-4 hover:underline'
        href='#'
      >
        <Phone className='mr-1 inline-block h-4 w-4' />
        {CommonInfo.phone}
      </Link>
      <Link
        className='text-xs text-gray-500 underline-offset-4 hover:underline'
        href='m,'
      >
        <Mail className='mr-1 inline-block h-4 w-4' />
        {CommonInfo.email}
      </Link>
      <Link
        className='text-xs text-gray-500 underline-offset-4 hover:underline'
        href='#'
      >
        <MapPin className='mr-1 inline-block h-4 w-4' />
        {CommonInfo.location}
      </Link>
    </footer>
  );
}
