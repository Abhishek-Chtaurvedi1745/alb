"use client";

import Link from "next/link";

export default function TermsAgreementCheckbox({
  id,
  checked,
  onChange,
  className = "",
}) {
  return (
    <div className={`flex items-start gap-3 pt-1 ${className}`}>
      <input
        type="checkbox"
        id={id}
        required
        className="mt-1 h-4 w-4 cursor-pointer rounded border-gray-700 bg-black accent-[#ff3b30]"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="select-none text-xs leading-normal text-white"
      >
        I agree to the Terms of Service and{" "}
        <Link
          href="/privacy-policy"
          className="text-white underline hover:text-[#ff3b30]"
        >
          Privacy Policy
        </Link>
        .
      </label>
    </div>
  );
}

export const COUNTRY_OPTIONS = ["India", "USA", "UK", "Other"];
