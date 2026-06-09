interface Props {
  techLogo: string;
  children: string;
  subtitle?: string;
}

function TechNameTag({ techLogo, subtitle = "", children }: Props) {
  return (
    <div className="flex items-center border-2 border-white rounded shadow-[0_0_10px_rgba(101,255,177,0.6)] text-white overflow-hidden">
      <img
        src={techLogo}
        alt={`${children} logo`}
        className="w-9 h-9 object-contain border-r-2 border-white/80 p-1"
      />
      <div className="pr-3 pl-2 py-1 leading-none">
        <div className="text-base">{children}</div>
        {subtitle && <div className="text-xs text-white/80">{subtitle}</div>}
      </div>
    </div>
  );
}

export default TechNameTag;
