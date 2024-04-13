import React, { useState, useEffect } from 'react';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data.slice(0, 9)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Photos</h1>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} className="w-full h-auto" />
            <p className="text-center">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
