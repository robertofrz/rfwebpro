import Image from "next/image";

export default function FeatureCard({ title, description, image }) {
  return (
    <div className="bg-neutral-50 p-10 rounded-lg shadow-md flex flex-col items-start justify-start gap-3 relative border border-neutral-200">
      <div className="absolute bg-blue p-1 rounded-lg -top-12 shadow-lg">
        <Image
          src={image}
          width={70}
          height={70}
          alt={`An icon representing the feature ${title}`}
        />
      </div>
      <h4 className="oswald uppercase leading-[1] tracking-[-0.0625rem] text-neutral-800 font-semibold text-2xl lg:text-xl text-left mt-4">
        {title}
      </h4>
      <p className="text-left text-neutral-600 text-lg lg:text-base">
        {description}
      </p>
    </div>
  );
}
