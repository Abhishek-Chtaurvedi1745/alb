export default function BlogContent({ html }) {
  return (
    <div
      className="blog-content space-y-5 text-base leading-relaxed text-white/85 [&_a]:text-[#FF403A] [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-[#FF403A]/50 [&_blockquote]:pl-4 [&_blockquote]:italic [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_img]:my-6 [&_img]:h-auto [&_img]:max-w-full [&_img]:w-full [&_img]:rounded-xl [&_img]:object-contain [&_li]:mb-2 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_p]:leading-8 [&_strong]:font-semibold [&_strong]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
      dangerouslySetInnerHTML={{ __html: html }}
      suppressHydrationWarning
    />
  );
}
