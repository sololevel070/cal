export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
                404
            </h1>
            <p className="text-slate-500 mb-8">
                Page not found
            </p>
            <a
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
                Go back home
            </a>
        </div>
    )
}
