const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-slate-300 border-t-indigo-600"></div>
        <p className="mt-4 text-slate-600 font-medium">Loading tasks...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
