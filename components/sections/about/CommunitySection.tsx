"use client";
import Image from "next/image";

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
       {/* IMAGE GRID */}
      <section className="relative w-full overflow-hidden bg-[#f7f7f5] py-32">

      {/* BLUEPRINT BG */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[420px]
          w-[420px]
          opacity-[0.07]
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/graphy.png')",
        }}
      />

      <div className="container-primary">

        {/* TOP IMAGE */}
        <div className="relative mb-44">

          <div className="overflow-hidden">

            <Image width={1000} height={1000}               src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2200&auto=format&fit=crop"
              alt="Construction Recovery"
              className="
                h-[820px]
                w-full
                object-cover
              "
            />

          </div>

          {/* CAPTION */}
          <div
            className="
              absolute
              bottom-[-70px]
              right-[120px]
              flex
              items-start
              gap-8
            "
          >

            <div className="h-[180px] w-[1px] bg-[#ed1c24]" />

            <p
              className="
                max-w-[320px]
                font-serif
                text-[1rem]
                font-bold
                uppercase
                leading-[1.3]
                tracking-[0.08em]
                text-[#1f1f1f]
              "
              style={{
                fontFamily: "cursive",
              }}
            >
              “Strong industrial projects are built through disciplined execution, practical engineering and the people who deliver under pressure.”
            </p>

          </div>

        </div>

        {/* BOTTOM GRID */}
        <div className="relative grid grid-cols-12 gap-12">

          {/* LEFT IMAGE */}
          <div className="col-span-12 lg:col-span-7">

            <div className="relative">

              <Image width={1000} height={1000}                 src="/assets/lab1.jpg"
                alt="Community Build"
                className="
                  h-[540px]
                  w-full
                  object-cover
                "
              />

              {/* LEFT CAPTION */}
              <div
                className="
                  absolute
                  bottom-[-95px]
                  left-[55%]
                  flex
                  items-start
                  gap-8
                "
              >

                <div className="h-[170px] w-[1px] bg-[#ed1c24]" />

                <p
                  className="
                    max-w-[290px]
                    font-serif
                    text-[0.95rem]
                    font-bold
                    uppercase
                    leading-[1.3]
                    tracking-[0.08em]
                    text-[#1f1f1f]
                  "
                  style={{
                    fontFamily: "cursive",
                  }}
                >
                 “Behind every successful structure is a workforce that understands responsibility, coordination and real on-site execution.”
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-span-12 flex items-end justify-end lg:col-span-5">

            <div className="relative w-[70%]">

              <Image width={1000} height={1000}                 src="/assets/lab2.jpg"
                alt="Construction Team"
                className="
                  h-[520px]
                  w-full
                  object-cover
                "
              />

              {/* RIGHT CAPTION */}
              <div
                className="
                  absolute
                  bottom-[60px]
                  left-[-220px]
                  flex
                  items-end
                  gap-8
                "
              >

                <p
                  className="
                    max-w-[230px]
                    text-right
                    font-serif
                    text-[0.95rem]
                    font-bold
                    uppercase
                    leading-[1.3]
                    tracking-[0.08em]
                    text-[#1f1f1f]
                  "
                  style={{
                    fontFamily: "cursive",
                  }}
                >
                  “Industrial progress is not created in meetings alone — it is built every day on fabrication floors, project sites and execution teams.”
                </p>

                <div className="h-[1px] w-[180px] bg-[#ed1c24]" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>


      </div>
    </section>
  );
}