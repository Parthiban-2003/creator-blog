function BlogCard({ title, excerpt, image, author, date, link }) {
  return (
    <a
      href={link}
      className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-white"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-52 sm:h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-3 line-clamp-3">{excerpt}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </a>
  );
}

export default BlogCard;