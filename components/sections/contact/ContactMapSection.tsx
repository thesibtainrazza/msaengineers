import React from "react";

export default function ContactMapSection() {
  return (
    <section className="relative w-full bg-[#f7f7f5] pb-32 overflow-hidden">

      <div
        className="
          relative
          w-full
          h-[420px]
          md:h-[650px]
          overflow-hidden
        "
      >

        <iframe
          src="https://maps.google.com/maps?q=Rajgangpur%20Odisha%20MSA%20Engineers&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full"
        />

      </div>

    </section>
  );
}