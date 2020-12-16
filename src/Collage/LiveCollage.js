import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Photo from "./Photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const SortablePhoto = SortableElement((item) => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery
    photos={items}
    renderImage={(props) => <SortablePhoto {...props} />}
  />
));

export default function LiveCollage({
  fbimg1,
  fbimg2,
  fbimg3,
  fbimg4,
  fbimg5,
  fbimg6,
  fbimg7,
  fbimg8,
  fbimg9,
}) {
  const [photos, setPhotos] = useState([
    {
      src: fbimg1,
      width: 4,
      height: 3,
    },
    {
      src: fbimg2,
      width: 1,
      height: 1,
    },
    {
      src: fbimg3,
      width: 3,
      height: 4,
    },
    {
      src: fbimg4,
      width: 3,
      height: 4,
    },
    {
      src: fbimg5,
      width: 3,
      height: 4,
    },
    {
      src: fbimg6,
      width: 4,
      height: 3,
    },
    {
      src: fbimg7,
      width: 3,
      height: 4,
    },
    {
      src: fbimg8,
      width: 4,
      height: 3,
    },
    {
      src: fbimg9,
      width: 4,
      height: 3,
    },
  ]);
  const [items, setItems] = useState(photos);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  // function func() {
  //   return <SortableGallery items={photos} onSortEnd={onSortEnd} axis={"xy"} />;
  // }

  // useEffect(() => {
  //   console.log(fbimg1, "useeffect live");
  //   const sheeps = photos;
  //   sheeps[0] = {
  //     ...sheeps[0],
  //     src: sheeps[0].fbimg1,
  //   };
  // });

  // useEffect(() => {
  //   func();
  // });

  useEffect(() => {
    console.log(fbimg1, "fbimg1 livecollage");
    setPhotos([
      {
        src: fbimg1,
        width: 4,
        height: 3,
      },
      {
        src: fbimg2,
        width: 1,
        height: 1,
      },
      {
        src: fbimg3,
        width: 3,
        height: 4,
      },
      {
        src: fbimg4,
        width: 3,
        height: 4,
      },
      {
        src: fbimg5,
        width: 3,
        height: 4,
      },
      {
        src: fbimg6,
        width: 4,
        height: 3,
      },
      {
        src: fbimg7,
        width: 3,
        height: 4,
      },
      {
        src: fbimg8,
        width: 4,
        height: 3,
      },
      {
        src: fbimg9,
        width: 4,
        height: 3,
      },
    ]);
  }, []);

  return (
    <div>
      {JSON.stringify(photos)}
      <h2>Sortable Gallery</h2>
      <h3>Drag photo to rearrange</h3>
      <SortableGallery items={photos} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
  );
}
