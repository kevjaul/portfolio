interface Props {
  techLogo: string;
  children: string;
  subtitle?: string;
}

function TechNameTag({ techLogo, subtitle = "", children }: Props) {
  return (
    <div className="flex items-center border-2 border-white rounded shadow-[0_0_10px_rgba(101,255,177,0.6)] text-white overflow-hidden min-w-fit max-w-fit">
      <img
        src={techLogo}
        alt={`${children} logo`}
        className="w-9 h-9 object-contain border-r-2 border-white/80 p-1"
      />
      <div className="md:pr-3 pr-2 pl-2 md:py-1 leading-none">
        <div className="md:text-base text-sm">{children}</div>
        {subtitle && <div className="text-xs text-white/80">{subtitle}</div>}
      </div>
    </div>
  );
}

export default TechNameTag;
