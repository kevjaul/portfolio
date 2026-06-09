interface Props {
  id?: string;
  cardTitle?: string;
  cardSubTitle?: React.ReactNode;
  cardImage?: string;
  ctaRedirect?: string;
  ctaMessage?: React.ReactNode;
  cardFooter?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
function Card({
  id = "",
  children,
  cardTitle = "",
  cardSubTitle = "",
  cardImage = "",
  ctaRedirect = "",
  ctaMessage = "",
  cardFooter,
  className,
}: Props) {
  return (
    <div
      className={`${className} lg:max-w-[650px] max-h-[450px] flex h-auto flex-col rounded-2xl border border-white/10 bg-white/5`}
      id={id}
    >
      <div className="border-b border-white/50 px-5 py-3">
        {cardImage && (
          <div className="aspect-3/2 overflow-hidden mb-2 relative">
            <img
              src={cardImage}
              alt="logo"
              className="w-full h-full object-cover rounded-lg"
            />
            <a
              className="absolute z-20 top-0 right-0 bg-black/15 w-full h-full px-2 py-1 rounded-lg border-2 border-white text-white font-bold flex justify-end items-end lg:text-3xl md:text-2xl sm:text-3xl text-2xl"
              href={ctaRedirect}
              target="_blank"
            >
              {ctaMessage}
            </a>
          </div>
        )}
        {cardTitle && (
          <h2 className="lg:text-3xl text-xl font-semibold text-white">
            {cardTitle}
            {cardSubTitle && (
              <p className="text-sm text-white/60">{cardSubTitle}</p>
            )}
          </h2>
        )}
      </div>

      <div className="flex-1 px-5 py-3 overflow-auto text-white">
        {children}
      </div>
      {cardFooter && (
        <div className="border-t border-white/10 md:px-5 py-2">
          {cardFooter}
        </div>
      )}
    </div>
  );
}

export default Card;
