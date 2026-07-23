const EventBanner = ({ image, title }) => (
  <div className="relative w-full h-72 sm:h-96 lg:h-[480px] overflow-hidden rounded-2xl">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
    <h1 className="absolute bottom-6 left-6 right-6 text-white text-2xl sm:text-4xl font-bold leading-tight drop-shadow-lg">
      {title}
    </h1>
  </div>
);

export default EventBanner;
