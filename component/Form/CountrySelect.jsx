"use client";

import { ChevronDown } from "lucide-react";
import { COUNTRY_OPTIONS } from "./TermsAgreementCheckbox";

export default function CountrySelect({
  value,
  onChange,
  className,
  chevronClassName = "pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/70 sm:right-4",
}) {
  return (
    <div className="relative">
      <select
        name="country"
        value={value}
        onChange={onChange}
        className={`${className} appearance-none pr-11`}
      >
        {COUNTRY_OPTIONS.map((country) => (
          <option key={country} value={country} className="text-black">
            {country}
          </option>
        ))}
      </select>
      <ChevronDown size={18} className={chevronClassName} />
    </div>
  );
}
