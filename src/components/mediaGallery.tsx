import React, { useState } from "react";
import { X, Play, Image as ImageIcon } from "lucide-react";

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string; // For videos this is the .mp4 path, for images it's the image path
}

const replaceExt = (path: string, ext: string) => path.replace(/\.[^.]+$/i, ext);

const MediaGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<"image" | "video" | null>(null);

  // Sample media data - mix of images and videos
  const mediaItems: MediaItem[] = [
    { id: 1, type: "video", src: "/gallery/1.mp4" },
    { id: 2, type: "image", src: "/gallery/2.jpeg" },
    { id: 3, type: "image", src: "/gallery/3.jpeg" },
    { id: 4, type: "image", src: "/gallery/4.jpeg" },
    { id: 5, type: "image", src: "/gallery/5.jpeg" },
    { id: 6, type: "image", src: "/gallery/6.jpeg" },
    { id: 7, type: "image", src: "/gallery/7.jpeg" },
    { id: 8, type: "image", src: "/gallery/8.jpeg" },
    { id: 9, type: "video", src: "/gallery/9.mp4" },
  ];

  // Compute an initial thumbnail src for any media item
  const getThumbnail = (item: MediaItem): string => {
    if (item.type === "image") return item.src;
    // Default attempt: same basename as video, with .jpeg
    return replaceExt(item.src, ".jpeg");
  };

  // When a thumbnail fails to load, try alternative extensions before falling back
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    item: MediaItem
  ) => {
    const img = e.currentTarget;
    if (item.type !== "video") return;

    // Track which fallbacks were tried in a data attribute
    const tried = (img.dataset.tried || "").split(",").filter(Boolean);

    const candidates = [".jpg", ".png", ".webp"];
    for (const ext of candidates) {
      if (!tried.includes(ext)) {
        tried.push(ext);
        img.dataset.tried = tried.join(",");
        img.src = replaceExt(item.src, ext);
        return;
      }
    }

    // Last resort: inline SVG placeholder
    img.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNjQwJyBoZWlnaHQ9JzM2MCcgdmlld0JveD0nMCAwIDY0MCAzNjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzY0MCcgaGVpZ2h0PSczNjAnIGZpbGw9JyNFQkVCRUQnLz48Y2lyY2xlIGN4PSczMjAnIGN5PScxODAnIHI9JzYwJyBmaWxsPScjMDBBRUVGJy8+PHBhdGggZD0nTTI4MCAxNDBMNDIwIDE4MEwyODAgMjIwVjE0MCcgc3Ryb2tlPScjMGMyZDU3JyBzdHJva2Utd2lkdGg9JzI0JyBmaWxsPScjZmZmJy8+PC9zdmc+";
  };

  const openMedia = (item: MediaItem) => {
    setSelectedMedia(item.src);
    setMediaType(item.type);
  };

  const closeModal = () => {
    setSelectedMedia(null);
    setMediaType(null);
  };

  const stopClickPropagation: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // Prevent modal inner area from closing when clicked
    e.stopPropagation();
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2D57] mb-4">Gallery & Videos</h2>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto mb-6"></div>
          <p className="text-sm text-gray-600">
            Explore our collection of posters and videos showcasing our educational journey
          </p>
        </div>

        <div className="grid grid-rows-2 grid-flow-col auto-cols-[minmax(12rem,18rem)] gap-4 overflow-x-auto pb-2 pr-4 snap-x snap-mandatory">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openMedia(item)}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 snap-start"
            >
              <div className="aspect-square">
                {/* Use <img> for both types — videos get a derived poster image */}
                <img
                  src={getThumbnail(item)}
                  alt={item.type === "video" ? "Video thumbnail" : "Image thumbnail"}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => handleImageError(e, item)}
                  loading="lazy"
                  data-tried=".jpeg" // mark the initial attempt so handler knows next fallbacks
                />

                {item.type === "video" && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300">
                    <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-[#0C2D57]" />
                    </div>
                  </div>
                )}

                {item.type === "image" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-white/90 rounded-full p-2 inline-flex">
                        <ImageIcon className="w-4 h-4 text-[#0C2D57]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size viewing */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-6xl w-full max-h-[90vh]" onClick={stopClickPropagation}>
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-[#00AEEF] transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Media content */}
            <div className="bg-white rounded-lg overflow-hidden">
              {mediaType === "image" ? (
                <img src={selectedMedia} alt="Full size image" className="w-full h-auto max-h-[80vh] object-contain" />
              ) : (
                <video controls autoPlay className="w-full h-auto max-h-[80vh]">
                  <source src={selectedMedia} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Media info */}
            <div className="text-center mt-4">
              <p className="text-white text-sm">
                {mediaType === "image" ? "Image" : "Video"} • Click outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaGallery;
