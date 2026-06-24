"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { solutionsMegaMenu, getResponsiveSolutionsMenu } from "./solutionsMenuData";

const responsiveSolutionsMenu = getResponsiveSolutionsMenu();

function SectionTitle({ title, underlineWord }) {
  const underlineIndex = title.indexOf(underlineWord);
  const before = title.slice(0, underlineIndex);
  const underlined = title.slice(underlineIndex, underlineIndex + underlineWord.length);
  const after = title.slice(underlineIndex + underlineWord.length);

  return (
    <h3 className="text-[22px] font-bold leading-tight text-[#ef4444]">
      {before}
      <span className="relative inline-block">
        {underlined}
        <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#ef4444]" />
      </span>
      {after}
    </h3>
  );
}

function ProductBlock({ product, onNavigate }) {
  return (
    <Link href={product.href} onClick={onNavigate} className="group block">
      <h4 className="text-[18px] font-bold text-[#ef4444] transition-colors group-hover:text-[#dc2626]">
        {product.title}
      </h4>
      <Description text={product.description} className="mt-1.5 max-w-[300px] text-[14px] leading-relaxed text-[#6b7280]" />
    </Link>
  );
}

function ServicesBlock({ services, onNavigate }) {
  return (
    <div>
      <h4 className="text-[18px] font-bold text-[#ef4444]">{services.title}</h4>
      <ul className="mt-3 space-y-2.5">
        {services.items.map((item, index) => (
          <li key={item.label}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="group flex items-center gap-2 text-[12px] font-medium tracking-[0.12em] text-[#6b7280] uppercase transition-colors hover:text-[#ef4444]"
            >
              {index === 0 && (
                <ChevronRight
                  size={14}
                  strokeWidth={2}
                  className="shrink-0 text-[#9ca3af] transition-colors group-hover:text-[#ef4444]"
                />
              )}
              {index > 0 && <span className="w-[14px] shrink-0" />}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MainSectionBlock({ section, onNavigate }) {
  return (
    <Link href={section.href} onClick={onNavigate} className="group block">
      <SectionTitle title={section.title} underlineWord={section.underlineWord} />
      <Description text={section.description} className="mt-3 max-w-[300px] text-[14px] leading-relaxed text-[#6b7280]" />
    </Link>
  );
}

function SecondaryMainBlock({ block, onNavigate }) {
  return (
    <Link href={block.href} onClick={onNavigate} className="group block">
      <SectionTitle title={block.title} underlineWord={block.underlineWord} />
      <Description text={block.description} className="mt-3 max-w-[300px] text-[14px] leading-relaxed text-[#6b7280]" />
    </Link>
  );
}

function Description({ text, className }) {
  if (typeof text === "string") {
    return <p className={className} dangerouslySetInnerHTML={{ __html: text }} />;
  }

  return <p className={className}>{text}</p>;
}

function SolutionsColumn({ section, onNavigate }) {
  const hasProducts = section.products?.length > 0;
  const hasServices = section.services?.items?.length > 0;
  const hasTrailingProduct = Boolean(section.trailingProduct);

  return (
    <div className="flex min-h-[420px] flex-col px-8 py-7 md:px-9 md:py-8">
      <MainSectionBlock section={section} onNavigate={onNavigate} />

      {hasProducts && (
        <div className="mt-5 space-y-4">
          {section.products.map((product) => (
            <ProductBlock key={product.title} product={product} onNavigate={onNavigate} />
          ))}
        </div>
      )}

      {hasServices && (
        <div className="mt-4">
          <ServicesBlock services={section.services} onNavigate={onNavigate} />
        </div>
      )}

      {section.secondaryMain && (
        <div className="mt-5">
          <SecondaryMainBlock block={section.secondaryMain} onNavigate={onNavigate} />
        </div>
      )}

      {section.trailingProduct && (
        <div className="mt-7">
          <ProductBlock product={section.trailingProduct} onNavigate={onNavigate} />
        </div>
      )}
    </div>
  );
}

export function SolutionsMegaMenuDesktop({ onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const section = responsiveSolutionsMenu[activeIndex];
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < responsiveSolutionsMenu.length - 1;

  return (
    <div className="relative w-[min(92vw,380px)] overflow-hidden rounded-sm border border-[#93c5fd]/80 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
      <SolutionsColumn section={section} onNavigate={onClose} />

      {hasPrev && (
        <button
          type="button"
          onClick={() => setActiveIndex((i) => i - 1)}
          className="absolute top-1/2 left-2 -translate-y-1/2 text-[#9ca3af] transition-colors hover:text-[#ef4444]"
          aria-label="Previous solution category"
        >
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={() => setActiveIndex((i) => i + 1)}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-[#9ca3af] transition-colors hover:text-[#ef4444]"
          aria-label="Next solution category"
        >
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>
      )}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        {responsiveSolutionsMenu.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-5 bg-[#ef4444]" : "w-1.5 bg-[#d1d5db] hover:bg-[#9ca3af]"
            }`}
            aria-label={`View ${item.title}`}
          />
        ))}
      </div>
    </div>
  );
}

export function SolutionsMegaMenuWide({ onClose }) {
  return (
    <div className="w-[min(94vw,820px)] overflow-hidden rounded-sm border border-[#93c5fd]/80 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
      <div className="grid md:grid-cols-2">
        {solutionsMegaMenu.map((section, index) => (
          <div
            key={section.id}
            className={index === 0 ? "border-b border-[#e5e7eb] md:border-r md:border-b-0" : ""}
          >
            <SolutionsColumn section={section} onNavigate={onClose} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SolutionsMegaMenuMobile({ onClose }) {
  const [openSection, setOpenSection] = useState(null);

  return (
    <div className="mt-2 rounded-xl border border-[#93c5fd]/50 bg-white">
      {responsiveSolutionsMenu.map((section) => {
        const isOpen = openSection === section.id;
        const hasProducts = section.products?.length > 0;
        const hasServices = section.services?.items?.length > 0;

        return (
          <div key={section.id} className="border-b border-[#e5e7eb] last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenSection(isOpen ? null : section.id)}
              className="flex w-full items-center justify-between px-4 py-3.5 text-left"
            >
              <span className="text-[15px] font-bold text-[#ef4444]">{section.title}</span>
              <ChevronRight
                size={18}
                className={`text-[#9ca3af] transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
              />
            </button>

            {isOpen && (
              <div className="space-y-4 px-4 pb-6">
                <Description text={section.description} className="text-[13px] leading-relaxed text-[#6b7280]" />

                {hasProducts &&
                  section.products.map((product) => (
                    <Link
                      key={product.title}
                      href={product.href}
                      onClick={onClose}
                      className="block"
                    >
                      <p className="text-[14px] font-bold text-[#ef4444]">{product.title}</p>
                      <Description text={product.description} className="mt-1 text-[13px] text-[#6b7280]" />
                    </Link>
                  ))}

                {hasServices && (
                  <div>
                    <p className="text-[14px] font-bold text-[#ef4444]">{section.services.title}</p>
                    <ul className="mt-2 space-y-2">
                      {section.services.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="text-[11px] font-medium tracking-[0.1em] text-[#6b7280] uppercase hover:text-[#ef4444]"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.trailingProduct && (
                  <Link href={section.trailingProduct.href} onClick={onClose} className="block">
                    <p className="text-[14px] font-bold text-[#ef4444]">{section.trailingProduct.title}</p>
                    <Description text={section.trailingProduct.description} className="mt-1 text-[13px] text-[#6b7280]" />
                  </Link>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
