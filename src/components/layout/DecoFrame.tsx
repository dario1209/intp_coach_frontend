import Image from 'next/image';

export default function DecoFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deco-navy via-slate-900 to-deco-teal p-4 md:p-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-deco-cream/90 backdrop-blur-xl shadow-2xl shadow-deco-gold/25 border-4 border-deco-gold/50 animate-deco-fade">
        <div className="p-6 md:p-8 lg:p-12">{children}</div>
      </div>
      <Image
        src="/deco-patterns/frame.svg"
        alt="Art Deco frame"
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        fill
        priority={false}
      />
    </div>
  );
}
