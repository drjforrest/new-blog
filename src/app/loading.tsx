export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="animate-pulse space-y-8 w-full max-w-7xl px-4">
        <div className="h-32 bg-foreground/5 rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-foreground/5 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  )
}