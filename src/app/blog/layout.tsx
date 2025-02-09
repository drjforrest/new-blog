export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 md:px-8 max-w-4xl py-8 md:py-10">
      {children}
    </div>
  )
}