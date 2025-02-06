import { ThemeProvider } from '../theme/theme-provider'
import Navigation from './Navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Jamie I Forrest
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
} 