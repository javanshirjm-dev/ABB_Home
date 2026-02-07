import { StepBack } from 'lucide-react';
import Link from 'next/link';

import '../globals.css';


export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
            <body>

                <div className="min-h-screen  bg-black">

                    <nav className="bg-black text-white max-w-7xl mx-auto px-6 py-10 cursor-pointer"><Link href="/"><StepBack className="w-6 h-6 hover:scale-110" /></Link></nav>
                    {children}
                </div>

            </body>
        </html>
    );
}