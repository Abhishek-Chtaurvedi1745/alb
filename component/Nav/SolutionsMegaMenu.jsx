"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { desktopFlyoutMenu, getResponsiveSolutionsMenu } from "./solutionsMenuData";

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
    <div className="group block">
      <Link href={product.href} onClick={onNavigate}>
        <h4 className="text-[18px] font-bold text-[#ef4444] transition-colors group-hover:text-[#dc2626]">
          {product.title}
        </h4>
      </Link>
      <p className="mt-1.5 max-w-[300px] text-[14px] leading-relaxed text-[#6b7280]">
        {product.description}
        {product.servicesLink && (
          <>
            {" "}
            (+
            <Link
              href={product.servicesLink.href}
              onClick={onNavigate}
              className="text-[#ef4444] transition-colors hover:text-[#dc2626] hover:underline"
            >
              {product.servicesLink.label}
            </Link>
            )
          </>
        )}
      </p>
    </div>
  );
}

function ServicesBlock({ services, onNavigate }) {
  return (
    <div>
      {services.href ? (
        <Link href={services.href} onClick={onNavigate}>
          <h4 className="text-[18px] font-bold text-[#ef4444] transition-colors hover:text-[#dc2626]">
            {services.title}
          </h4>
        </Link>
      ) : (
        <h4 className="text-[18px] font-bold text-[#ef4444]">{services.title}</h4>
      )}
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
    <div className="flex min-h-0 flex-col px-8 py-7 md:px-9 md:py-8">
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
        <div className={hasProducts ? "mt-4" : "mt-5"}>
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

const FLYOUT_COL1_WIDTH = 300;
const FLYOUT_COL2_WIDTH = 280;
const FLYOUT_COL3_WIDTH = 320;

function FlyoutMenuRow({ label, href, isActive, hasChildren, onMouseEnter, onNavigate }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      onMouseEnter={(event) => onMouseEnter?.(event)}
      className={`group flex items-center justify-between gap-4 px-5 py-3 text-[15px] font-semibold transition-all duration-200 ease-out ${
        isActive
          ? "bg-[#fff1f2] text-[#ef4444]"
          : "text-[#374151] hover:bg-[#f9fafb] hover:text-[#ef4444]"
      }`}
    >
      <span className="transition-colors duration-200">{label}</span>
      {hasChildren && (
        <ChevronRight
          size={16}
          strokeWidth={2}
          className={`shrink-0 transition-all duration-200 ease-out ${
            isActive
              ? "translate-x-0.5 text-[#ef4444]"
              : "text-[#9ca3af] group-hover:translate-x-0.5 group-hover:text-[#ef4444]"
          }`}
        />
      )}
    </Link>
  );
}

function FlyoutServiceRow({ label, href, onNavigate }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="block px-5 py-2.5 text-[12px] font-medium tracking-[0.1em] text-[#6b7280] uppercase transition-all duration-200 ease-out hover:bg-[#f9fafb] hover:text-[#ef4444]"
    >
      {label}
    </Link>
  );
}

function FlyoutPanel({ isOpen, left, width, zIndex, top = 0, children, className = "" }) {
  return (
    <div
      className={`absolute border-[#e5e7eb] bg-white py-2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[transform,opacity,top] ${
        isOpen
          ? "pointer-events-auto translate-x-0 opacity-100"
          : "pointer-events-none translate-x-2 opacity-0"
      } ${className}`}
      style={{
        left,
        width,
        zIndex,
        top,
      }}
      aria-hidden={!isOpen}
    >
      {children}
    </div>
  );
}

export function SolutionsMegaMenuWide({ onClose }) {
  const [activeMainId, setActiveMainId] = useState(null);
  const [activeSubKey, setActiveSubKey] = useState(null);
  const [col3Top, setCol3Top] = useState(0);
  const containerRef = useRef(null);

  const activeMain = desktopFlyoutMenu.find((item) => item.id === activeMainId);
  const activeSub = activeMain?.children?.find(
    (child, index) => activeSubKey === `${activeMainId}-sub-${index}`,
  );

  const showCol2 = Boolean(activeMain?.children?.length);
  const showCol3 = Boolean(activeSub?.children?.length);

  const hoverAreaWidth =
    FLYOUT_COL1_WIDTH +
    (showCol2 ? FLYOUT_COL2_WIDTH : 0) +
    (showCol3 ? FLYOUT_COL3_WIDTH : 0);

  const resetPanels = () => {
    setActiveMainId(null);
    setActiveSubKey(null);
    setCol3Top(0);
  };

  const handleMainEnter = (item) => {
    setActiveMainId(item.id);
    setActiveSubKey(null);
    setCol3Top(0);
  };

  const handleSubEnter = (mainId, index, child, event) => {
    setActiveMainId(mainId);
    setActiveSubKey(child.children?.length ? `${mainId}-sub-${index}` : null);

    if (child.children?.length && event?.currentTarget && containerRef.current) {
      const rowRect = event.currentTarget.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setCol3Top(rowRect.top - containerRect.top);
    } else {
      setCol3Top(0);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-visible transition-[width] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{ width: hoverAreaWidth, minWidth: FLYOUT_COL1_WIDTH }}
      onMouseLeave={resetPanels}
    >
      <div className="relative z-30 w-[300px] overflow-hidden rounded-sm border border-[#93c5fd]/80 bg-white py-2 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
        {desktopFlyoutMenu.map((item) => (
          <FlyoutMenuRow
            key={item.id}
            label={item.title}
            href={item.href}
            isActive={activeMainId === item.id}
            hasChildren={Boolean(item.children?.length)}
            onMouseEnter={() => handleMainEnter(item)}
            onNavigate={onClose}
          />
        ))}
      </div>

      <FlyoutPanel
        isOpen={showCol2}
        left={FLYOUT_COL1_WIDTH}
        width={FLYOUT_COL2_WIDTH}
        zIndex={20}
        className="top-0 rounded-r-sm border border-l-0 border-[#93c5fd]/80 shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
      >
        {activeMain?.children?.map((child, index) => (
          <FlyoutMenuRow
            key={child.title}
            label={child.title}
            href={child.href}
            isActive={activeSubKey === `${activeMain.id}-sub-${index}`}
            hasChildren={Boolean(child.children?.length)}
            onMouseEnter={(event) =>
              handleSubEnter(activeMain.id, index, child, event)
            }
            onNavigate={onClose}
          />
        ))}
      </FlyoutPanel>

      <FlyoutPanel
        isOpen={showCol3}
        left={FLYOUT_COL1_WIDTH + FLYOUT_COL2_WIDTH}
        width={FLYOUT_COL3_WIDTH}
        zIndex={10}
        top={col3Top}
        className="max-h-[440px] overflow-y-auto rounded-r-sm border border-l-0 border-[#93c5fd]/80 shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
      >
        {activeSub?.children?.map((service) => (
          <FlyoutServiceRow
            key={service.label}
            label={service.label}
            href={service.href}
            onNavigate={onClose}
          />
        ))}
      </FlyoutPanel>
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
                    <div key={product.title}>
                      <Link href={product.href} onClick={onClose} className="block">
                        <p className="text-[14px] font-bold text-[#ef4444]">{product.title}</p>
                      </Link>
                      <p className="mt-1 text-[13px] text-[#6b7280]">
                        {product.description}
                        {product.servicesLink && (
                          <>
                            {" "}
                            (+
                            <Link
                              href={product.servicesLink.href}
                              onClick={onClose}
                              className="text-[#ef4444] hover:underline"
                            >
                              {product.servicesLink.label}
                            </Link>
                            )
                          </>
                        )}
                      </p>
                    </div>
                  ))}

                {hasServices && (
                  <div>
                    {section.services.href ? (
                      <Link href={section.services.href} onClick={onClose}>
                        <p className="text-[14px] font-bold text-[#ef4444]">{section.services.title}</p>
                      </Link>
                    ) : (
                      <p className="text-[14px] font-bold text-[#ef4444]">{section.services.title}</p>
                    )}
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
                  <div>
                    <Link href={section.trailingProduct.href} onClick={onClose} className="block">
                      <p className="text-[14px] font-bold text-[#ef4444]">{section.trailingProduct.title}</p>
                    </Link>
                    <p className="mt-1 text-[13px] text-[#6b7280]">
                      {section.trailingProduct.description}
                      {section.trailingProduct.servicesLink && (
                        <>
                          {" "}
                          (+
                          <Link
                            href={section.trailingProduct.servicesLink.href}
                            onClick={onClose}
                            className="text-[#ef4444] hover:underline"
                          >
                            {section.trailingProduct.servicesLink.label}
                          </Link>
                          )
                        </>
                      )}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
