"use client";
import { ProductTypes } from "@/app/lib/types/productTypes";

// This will be a placeholder for product variance options when it is later added to database model
const options = [
  { name: "Sandstone", color: "#d9c8ae", tone: "sand" },
  { name: "Midnight", color: "#25272b", tone: "midnight" },
  { name: "Sage", color: "#aab7a1", tone: "sage" },
];

const VariantSelector = ({ product }: { product: ProductTypes }) => {
  return (
    <div>
      {/* Options heading */}
      <div className="flex justify-between text-eyebrow text-[#51564d]">
        <span>Choose a color</span>
        <span>{options[0].name}</span>
      </div>

      {/* radio buttons, should allow user to change product variant to display different information 
      across this page and change eyebrow color text on right side */}
      <div
        className="flex gap-3 mt-3.75 mb-6.25"
        role="radiogroup"
        aria-label="Choose a color"
      >
        {options.map((item) => (
          <button
            key={item.name}
            type="button"
            //  role="radio"
            title={item.name}
            style={{ backgroundColor: item.color }}
            className="w-6 h-6 rounded-[50%] border-2 border-[#fbfaf7] outline-1 outline-solid outline-grey"
          />
        ))}
      </div>
    </div>
  );
};

export default VariantSelector;
