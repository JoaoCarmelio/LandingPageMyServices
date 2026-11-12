
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
