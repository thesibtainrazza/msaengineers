"use client";

export default function CommunitySection() {
  return (
    <section className="w-full bg-[#f5f5f3] px-6 md:px-12 lg:px-20 py-28 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ed1c24] mb-6">
              COMMUNITY
            </p>

            <h2 className="text-5xl md:text-7xl leading-[0.95] tracking-tight text-[#3f3f46] max-w-[700px] mb-10">
              Building industries while staying connected to the
              <span className="bg-[#ed1c24] text-white px-3 ml-2">
                people around us.
              </span>
            </h2>

            <div className="max-w-[580px] space-y-6 text-[#52525b] text-xl leading-[1.8]">
              <p>
                MSA believes strong companies are built the same way strong
                structures are built — with trust, long-term relationships,
                and responsibility toward the communities that support them.
              </p>

              <p>
                From hiring local manpower and supporting skilled workers to
                creating opportunities around industrial projects, we believe
                growth should benefit more than just the project site.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-[700px]">
            <h3 className="text-5xl md:text-6xl leading-[1.05] tracking-tight text-[#3f3f46] mb-8">
              We don’t believe in working
              <span className="bg-[#ed1c24] text-white px-3 mx-2">
                around communities
              </span>
              — we believe in growing with them.
            </h3>

            <p className="text-[#52525b] text-xl leading-[1.8]">
              Every project brings coordination with local vendors, workers,
              transport teams, fabricators, and businesses. That ecosystem
              matters to us. We value practical relationships, honest
              communication, and leaving behind work people can genuinely
              be proud of.
            </p>
          </div>
        </div>

        {/* Bottom Social Section */}
        <div className="mt-24">
          <p className="text-[#52525b] text-xl mb-10">
            Stay connected with MSA Engineers & Contractors.
          </p>

          <div className="flex flex-wrap gap-6">

            {/* Facebook */}
            <a
              href="#"
              className="border border-[#ed1c24] rounded-full px-10 py-5 flex items-center gap-4 hover:bg-[#ed1c24] hover:text-white transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center text-xl">
                f
              </div>

              <span className="text-2xl font-medium">
                Facebook
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="border border-[#ed1c24] rounded-full px-10 py-5 flex items-center gap-4 hover:bg-[#ed1c24] hover:text-white transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center text-xl">
                in
              </div>

              <span className="text-2xl font-medium">
                LinkedIn
              </span>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="border border-[#ed1c24] rounded-full px-10 py-5 flex items-center gap-4 hover:bg-[#ed1c24] hover:text-white transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center text-xl">
                ◎
              </div>

              <span className="text-2xl font-medium">
                Instagram
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}