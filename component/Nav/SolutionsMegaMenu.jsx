"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { desktopFlyoutMenu, getResponsiveSolutionsMenu } from "./solutionsMenuData";

function MobileNavLink({ href, onClose, className = "", style, children }) {
  const router = useRouter();

  return (
    <Link
      href={href}
      style={style}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onClose();
        router.push(href);
      }}
      className={className}
    >
      {children}
    </Link>
  );
}

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
      <p className="mt-1.5 max-w-[300px] text-[13px] leading-relaxed text-[#6b7280]">
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
              className="group flex items-center gap-2 text-[12px] font-medium tracking-[0.02em] text-[#6b7280] transition-colors hover:text-[#ef4444]"
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
// Keep the hover shell at full width so opening Clarity/etc. does not resize
// the menu and shift it out from under the cursor (which closes the dropdown).
const FLYOUT_MAX_WIDTH =
  FLYOUT_COL1_WIDTH + FLYOUT_COL2_WIDTH + FLYOUT_COL3_WIDTH;
// Matches the py-1.5 on each flyout panel, so a panel's first row can be lined
// up with the row that opened it.
const FLYOUT_PANEL_PADDING_Y = 6;

function FlyoutMenuRow({
  label,
  href,
  isActive,
  hasChildren,
  onMouseEnter,
  onNavigate,
  highlightRed = false,
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      onMouseEnter={(event) => onMouseEnter?.(event)}
      className={`group flex items-center justify-between gap-4 px-5 py-3 text-[15px] font-semibold transition-all duration-200 ease-out ${
        isActive
          ? "bg-[#fff1f2] text-[#ef4444]"
          : highlightRed
            ? "text-[#ef4444] hover:bg-[#fff1f2] hover:text-[#dc2626]"
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

function FlyoutServiceRow({ label, href, onNavigate, isSectionTitle = false }) {
  if (isSectionTitle) {
    return (
      <Link
        href={href}
        onClick={onNavigate}
        className="flex items-center gap-4 px-5 py-3 text-[15px] font-semibold text-[#ef4444] transition-all duration-200 ease-out hover:bg-[#fff1f2]"
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="block px-5 py-2.5 text-[12px] font-medium tracking-[0.02em] text-[#6b7280] transition-all duration-200 ease-out hover:bg-[#f9fafb] hover:text-[#ef4444]"
    >
      {label}
    </Link>
  );
}

function FlyoutPanel({ isOpen, left, width, zIndex, top = 0, children, className = "" }) {
  return (
    <div
      className={`absolute h-fit border-[#e5e7eb] bg-white transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isOpen
          ? "pointer-events-auto translate-x-0 opacity-100"
          : "pointer-events-none translate-x-2 opacity-0"
      } ${className}`}
      style={{
        left,
        width,
        zIndex,
        top,
        height: "fit-content",
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

  const activeMain = desktopFlyoutMenu.find((item) => item.id === activeMainId);
  const activeSub = activeMain?.children?.find(
    (child, index) => activeSubKey === `${activeMainId}-sub-${index}`,
  );

  const showCol2 = Boolean(activeMain?.children?.length);
  const showCol3 = Boolean(activeSub?.children?.length);

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
    if (child.children?.length) {
      setActiveSubKey(`${mainId}-sub-${index}`);
      // Keep 3rd panel beside the hovered row (Clarity / Rally / ConnectALL)
      setCol3Top((event?.currentTarget?.offsetTop ?? 0) - FLYOUT_PANEL_PADDING_Y);
    } else {
      setActiveSubKey(null);
      setCol3Top(0);
    }
  };

  return (
    <div
      className="relative overflow-visible"
      style={{ width: FLYOUT_MAX_WIDTH, minWidth: FLYOUT_COL1_WIDTH }}
      onMouseLeave={resetPanels}
    >
      <div className="relative z-30 h-fit w-[300px] overflow-hidden rounded-sm border border-[#93c5fd]/80 bg-white py-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
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
        top={0}
        className="rounded-r-sm border border-l-0 border-[#93c5fd]/80 py-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
      >
        {activeMain?.children?.map((child, index) => (
          <FlyoutMenuRow
            key={child.title}
            label={child.title}
            href={child.href}
            isActive={activeSubKey === `${activeMain.id}-sub-${index}`}
            hasChildren={Boolean(child.children?.length)}
            highlightRed={Boolean(child.highlightRed)}
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
        className="rounded-r-sm border border-l-0 border-[#93c5fd]/80 py-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
      >
        {activeSub?.children?.map((service) => (
          <FlyoutServiceRow
            key={service.label}
            label={service.label}
            href={service.href}
            isSectionTitle={Boolean(service.isSectionTitle)}
            onNavigate={onClose}
          />
        ))}
      </FlyoutPanel>
    </div>
  );
}

const MOBILE_FLYOUT_MENU = desktopFlyoutMenu;

function MobileFlyoutSubRow({ item, depth, onClose }) {
  const paddingLeft = 16 + depth * 14;
  const isRed = Boolean(item.highlightRed);

  return (
  <MobileNavLink
    href={item.href}
    onClose={onClose}
    className={`flex min-h-[44px] items-center py-2.5 text-[13px] font-semibold transition-colors hover:text-[#ef4444] ${
      isRed ? "text-[#ef4444]" : "text-[#374151]"
    }`}
    style={{ paddingLeft }}
  >
    {item.title || item.label}
  </MobileNavLink>
  );
}

function MobileFlyoutBranch({ item, depth, openKey, setOpenKey, onClose, keyPrefix }) {
  const branchKey = `${keyPrefix}-${item.title || item.label}`;
  const isOpen = openKey === branchKey;
  const hasChildren = item.children?.length > 0;
  const paddingLeft = 16 + depth * 14;
  const isRed = Boolean(item.highlightRed) || hasChildren;

  if (!hasChildren) {
    return (
      <MobileFlyoutSubRow
        item={item}
        depth={depth}
        onClose={onClose}
      />
    );
  }

  return (
    <div className="border-t border-[#f3f4f6] first:border-t-0">
      <div className="flex min-h-[44px] items-stretch">
        <MobileNavLink
          href={item.href}
          onClose={onClose}
          className={`flex flex-1 items-center py-2.5 pr-2 text-[13px] font-semibold ${
            isRed ? "text-[#ef4444]" : "text-[#374151]"
          }`}
          style={{ paddingLeft }}
        >
          {item.title || item.label}
        </MobileNavLink>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={`Expand ${item.title || item.label}`}
          onClick={(event) => {
            event.stopPropagation();
            setOpenKey(isOpen ? null : branchKey);
          }}
          className="flex w-12 shrink-0 items-center justify-center text-[#9ca3af]"
        >
          <ChevronRight
            size={16}
            className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="pb-2">
          {item.children.map((child, index) => {
            if (child.children?.length) {
              return (
                <MobileFlyoutBranch
                  key={`${branchKey}-${child.title || child.label}-${index}`}
                  item={child}
                  depth={depth + 1}
                  openKey={openKey}
                  setOpenKey={setOpenKey}
                  onClose={onClose}
                  keyPrefix={branchKey}
                />
              );
            }

            const childPadding = 16 + (depth + 1) * 14;

            return (
              <MobileNavLink
                key={`${branchKey}-${child.label || child.title}-${index}`}
                href={child.href}
                onClose={onClose}
                className={`flex min-h-[40px] items-center py-2 text-[12px] transition-colors hover:text-[#ef4444] ${
                  child.isSectionTitle
                    ? "font-bold tracking-[0.02em] text-[#ef4444]"
                    : "font-medium tracking-[0.02em] text-[#6b7280]"
                }`}
                style={{ paddingLeft: childPadding }}
              >
                {child.label || child.title}
              </MobileNavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function SolutionsMegaMenuMobile({ onClose }) {
  const [openSection, setOpenSection] = useState(null);
  const [openBranch, setOpenBranch] = useState(null);

  return (
    <div className="relative z-[1] mt-2 rounded-xl border border-[#93c5fd]/50 bg-white">
      {MOBILE_FLYOUT_MENU.map((section) => {
        const isOpen = openSection === section.id;
        const hasChildren = section.children?.length > 0;

        return (
          <div key={section.id} className="border-b border-[#e5e7eb] last:border-b-0">
            <div className="flex min-h-[48px] items-stretch">
              <MobileNavLink
                href={section.href}
                onClose={onClose}
                className="flex flex-1 items-center px-4 py-3.5 text-left text-[15px] font-bold text-[#ef4444]"
              >
                {section.title}
              </MobileNavLink>

              {hasChildren && (
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-label={`Expand ${section.title}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    setOpenSection(isOpen ? null : section.id);
                    setOpenBranch(null);
                  }}
                  className="flex w-12 shrink-0 items-center justify-center text-[#9ca3af]"
                >
                  <ChevronRight
                    size={18}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                  />
                </button>
              )}
            </div>

            {isOpen && hasChildren && (
              <div className="border-t border-[#f3f4f6] bg-[#fafafa] pb-2">
                {section.children.map((child, index) => (
                  <MobileFlyoutBranch
                    key={`${section.id}-${child.title}-${index}`}
                    item={child}
                    depth={0}
                    openKey={openBranch}
                    setOpenKey={setOpenBranch}
                    onClose={onClose}
                    keyPrefix={section.id}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
