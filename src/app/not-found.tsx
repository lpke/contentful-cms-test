import LinkText from '@/components/LinkText';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold">404 | Page Not Found</h1>
      <LinkText href="/">{'< Return Home'}</LinkText>
    </div>
  );
}
