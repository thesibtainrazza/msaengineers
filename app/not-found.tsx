import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#f7f7f5] px-6 text-center">
      <h1 className="text-[8rem] md:text-[12rem] font-[450] leading-none tracking-tighter text-[#4b4b4b]">
        404
      </h1>
      
      <div className="h-[3px] w-24 bg-[#ed1c24] my-8" />
      
      <h2 className="text-[2.5rem] md:text-[3.5rem] font-light text-[#4b4b4b] mb-6 tracking-tight">
        Page Not Found
      </h2>
      
      <p className="text-[1.6rem] font-light text-[#5f5f5f] max-w-[600px] mb-12">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <Link 
        href="/"
        className="group inline-flex items-center rounded-full border-2 border-[#ed1c24] bg-transparent px-10 py-5 text-[1.3rem] font-medium text-[#4b4b4b] transition-all duration-300 hover:bg-[#ed1c24] hover:text-white"
      >
        <span>Return Home</span>
        <svg
          className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
  );
}
