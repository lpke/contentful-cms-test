import Link from 'next/link';

type LinkTextProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function LinkText({ href, className, children }: LinkTextProps) {
  return (
    <Link href={href} className={`text-blue-500 underline ${className || ''}`}>
      {children}
    </Link>
  );
}
