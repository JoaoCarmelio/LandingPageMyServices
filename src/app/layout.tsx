// @ts-expect-error TypeScript has no declaration for the CSS side-effect import.
import "./globals.css";


export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="pt-Br">
            <body>
                <main>
                    {children}
                </main>
                
            </body>

        </html>
    )
}
