
import "./globals.css";


export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="pt-Br">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <main>
                    {children}
                </main>

                
            </body>

        </html>
    )
}
