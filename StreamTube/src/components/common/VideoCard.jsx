function VideoCard({ title, thumbnail, duration, views, link }) {
  return (
    <a
      href={link}
      className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-white"
    >
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-52 sm:h-64 object-cover"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600">{views} views</p>
      </div>
    </a>
  );
}

export default VideoCard;