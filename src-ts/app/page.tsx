import createLogger from '../lib/logger';
import { Button } from '../components/ui/button';

const logger = createLogger('HomePage');

export default function Home() {
  // Example logging usage
  // Note: In Server Components, Tauri IPC won't work directly. 
  // This log will print to server console during build, or browser console if client-side.
  // For Tauri interaction, ensure usage is in Client Components ("use client").
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Next.js + Tauri v2 initialized.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center">Ready to Build</h1>
        <Button onClick={() => console.log('Click')}>Get Started</Button>
      </div>
    </main>
  );
}
