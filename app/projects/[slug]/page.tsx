import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/content/projects';
import FadeIn from '@/components/ui/FadeIn';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg-light">
      {/* HERO SECTION */}
      <section className="relative w-full pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="container-primary">
          <div className="grid grid-cols-1 items-end gap-20 lg:grid-cols-2">
            <div>
              <h4 className="mb-8 text-[13px] font-semibold uppercase tracking-[0.28em] text-primary">
                {project.category}
              </h4>
              <h1 className="text-[4.5rem] md:text-[6rem] lg:text-[7rem] font-[420] leading-[0.92] tracking-[-0.06em] text-text-dark">
                {project.title}
              </h1>
            </div>

            <div className="max-w-[700px] lg:ml-auto">
              <p className="text-[1.55rem] font-light leading-[1.7] tracking-[-0.03em] text-text-dark">
                {project.shortDescription}
              </p>
              
              <div className="mt-8 flex items-center gap-12 border-t border-[#d9d9d9] pt-8">
                <div>
                  <span className="block text-[1rem] font-bold uppercase tracking-[0.1em] text-[#8c8c8c]">Client</span>
                  <span className="mt-1 block text-[1.4rem] font-[420] text-text-dark">{project.client || 'Internal'}</span>
                </div>
                <div>
                  <span className="block text-[1rem] font-bold uppercase tracking-[0.1em] text-[#8c8c8c]">Location</span>
                  <span className="mt-1 block text-[1.4rem] font-[420] text-text-dark">{project.location}</span>
                </div>
                <div>
                  <span className="block text-[1rem] font-bold uppercase tracking-[0.1em] text-[#8c8c8c]">Year</span>
                  <span className="mt-1 block text-[1.4rem] font-[420] text-text-dark">{project.year || '2024'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <FadeIn fullWidth>
        <section className="w-full">
          <div className="h-[60vh] md:h-[80vh] w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={2000}
              height={1200}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </section>
      </FadeIn>

      {/* PROJECT DETAILS & STATS */}
      <section className="py-32">
        <div className="container-primary">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* FULL DESCRIPTION */}
            <div className="lg:col-span-8">
              <h3 className="mb-10 text-[3rem] font-[350] tracking-[-0.04em] text-text-dark">Project Overview</h3>
              <p className="text-[1.6rem] font-light leading-[1.8] text-[#4d4d4d]">
                {project.fullDescription || project.shortDescription}
              </p>
            </div>

            {/* STATS */}
            <div className="lg:col-span-4">
              <div className="bg-white p-12 border border-[#eaeaea]">
                <h4 className="mb-8 text-[1.2rem] font-bold uppercase tracking-[0.1em] text-primary">Key Metrics</h4>
                <ul className="space-y-8">
                  {project.stats?.map((stat, i) => (
                    <li key={i} className="border-b border-[#eaeaea] pb-6 last:border-0 last:pb-0">
                      <span className="block text-[2.4rem] font-[350] text-text-dark">{stat.value}</span>
                      <span className="mt-2 block text-[1.2rem] text-[#8c8c8c]">{stat.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-primary">
            <h3 className="mb-16 text-[3rem] font-[350] tracking-[-0.04em] text-text-dark text-center">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="relative h-[400px] overflow-hidden bg-gray-100">
                  <Image
                    src={img}
                    alt={`${project.title} Gallery ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
