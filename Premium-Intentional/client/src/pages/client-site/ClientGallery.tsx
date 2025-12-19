import { useState } from "react";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

export default function ClientGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Gallery items with categories
  const galleryItems = [
    { id: 1, src: "https://picsum.photos/seed/101/800/1000", category: "Portrait" },
    { id: 2, src: "https://picsum.photos/seed/102/800/1000", category: "Editorial" },
    { id: 3, src: "https://picsum.photos/seed/103/800/1000", category: "Commercial" },
    { id: 4, src: "https://picsum.photos/seed/104/800/1000", category: "Portrait" },
    { id: 5, src: "https://picsum.photos/seed/105/800/1000", category: "Editorial" },
    { id: 6, src: "https://picsum.photos/seed/106/800/1000", category: "Portrait" },
    { id: 7, src: "https://picsum.photos/seed/107/800/1000", category: "Commercial" },
    { id: 8, src: "https://picsum.photos/seed/108/800/1000", category: "Editorial" },
    { id: 9, src: "https://picsum.photos/seed/109/800/1000", category: "Portrait" },
  ];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <ClientLayout>
      <div className="bg-white py-20 text-center border-b border-gray-50">
        <h1 className="text-4xl font-light uppercase tracking-widest mb-4">Selected Works</h1>
        <div className="flex justify-center gap-6 text-xs uppercase tracking-widest text-gray-400 mt-8 flex-wrap px-6">
          {["All", "Portrait", "Editorial", "Commercial"].map((cat) => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cat === selectedCategory 
                ? "text-black border-b border-black pb-1 transition-colors" 
                : "hover:text-black transition-colors"
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-1 min-h-[400px]">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="aspect-[4/5] overflow-hidden group relative cursor-pointer bg-gray-100"
            onClick={() => setSelectedImage(item.src)}
          >
            <img 
              src={item.src} 
              alt={`Gallery ${item.id}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xs uppercase tracking-widest border border-white px-4 py-2">View</span>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 border-none bg-transparent shadow-none [&>button]:hidden">
          <div className="relative">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 z-50"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedImage && (
              <img src={selectedImage} alt="Full view" className="w-full h-auto max-h-[85vh] object-contain" />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </ClientLayout>
  );
}
