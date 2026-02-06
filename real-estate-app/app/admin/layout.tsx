import { StepBack } from 'lucide-react';
import Link from 'next/link';

import '../globals.css';  // <-- This goes up from [locale] -> app -> globals.css


export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
            <body>

                <div className="min-h-screen  bg-black">
                    {/* You can add a simple Admin Navbar here if you want */}
                    <nav className="bg-black text-white max-w-7xl mx-auto px-6 py-10 cursor-pointer"><Link href="/"><StepBack className="w-6 h-6 hover:scale-110" /></Link></nav>
                    {children}
                </div>

            </body>
        </html>
    );
}