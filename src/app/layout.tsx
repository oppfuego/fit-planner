import "./globals.css";
import { authWrapper } from "@/utils/authWrapper";
import { AlertProvider } from "@/context/AlertContext";
import PageWrapper from "@/components/ui/page-wrapper/PageWrapper";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
import ProtectedRoute from "@/components/features/protected-route/ProtectedRoute";
import {currentFont} from "@/resources/styles-config";
import {I18nProvider} from "@/context/i18nContext";
import {AllOrdersProvider} from "@/context/AllOrdersContext";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href={currentFont.url} rel="stylesheet" />
            <style>{`:root { --font-family: ${currentFont.css}; }`}</style>
        </head>
        <body>
        <I18nProvider>
            <AlertProvider>
                <AllOrdersProvider>
                    <ProtectedRoute>
                        <Header />
                        <PageWrapper>
                            {children}
                        </PageWrapper>
                        <Footer />
                    </ProtectedRoute>
                </AllOrdersProvider>
            </AlertProvider>
        </I18nProvider>
        </body>
        </html>
    );
}

export default authWrapper(Layout);