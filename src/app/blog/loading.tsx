export default function BlogLoading() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="animate-pulse">
        <div className="h-12 bg-primary/10 rounded-lg w-3/4 mb-6"></div>
        <div className="space-y-4">
          <div className="h-4 bg-primary/10 rounded w-full"></div>
          <div className="h-4 bg-primary/10 rounded w-5/6"></div>
          <div className="h-4 bg-primary/10 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
} 