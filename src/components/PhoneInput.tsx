"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputField = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (mobile: string, country: string) => void;
}) => {
  return (
    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#083B73] focus:border-[#083B73]  w-full p-2.5">
      <PhoneInput
        country={"in"}
        value={value}
        onChange={(mobile, country) => onChange(mobile, country as string)}
        placeholder="Phone Number*"
        onBlur={(input, country) => {
          if (value.length < 5) {
            onChange("", country as string);
          }
        }}
        enableSearch={true}
        countryCodeEditable
        inputProps={{
          name: "phone",
          required: true,
        }}
        containerClass="!w-full"
        inputClass="!w-full" // This ensures the input itself also takes full width
      />
    </div>
  );
};

export default PhoneInputField;
