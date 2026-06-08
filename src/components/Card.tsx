interface Props {
  cardTitle?: string;
  cardSubTitle?: string;
  cardFooter?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
function Card({
  children,
  cardTitle = "",
  cardSubTitle = "",
  cardFooter,
  className,
}: Props) {
  return (
    <div className={`${className} lg:max-w-[650px] max-h-[450px]`}>
      <div className="flex h-auto flex-col rounded-2xl border border-white/10 bg-white/5">
        {cardTitle && (
          <div className="border-b border-white/50 px-5 py-3">
            <h2 className="lg:text-3xl text-xl font-semibold text-white">
              {cardTitle}
              {cardSubTitle && (
                <p className="text-sm text-gray-400">{cardSubTitle}</p>
              )}
            </h2>
          </div>
        )}
        <div className="flex-1 px-5 py-3 overflow-auto text-white">
          {children}
        </div>
        {cardFooter && (
          <div className="border-t border-white/10 px-5 py-2">{cardFooter}</div>
        )}
      </div>
    </div>
  );
}

export default Card;
