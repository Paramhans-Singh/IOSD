import React, { useState, useCallback, useRef } from "react";
import { PhotoAlbum } from "react-photo-album";
import clsx from "clsx";
import {
  closestCenter,
  DndContext,
//   DragEndEvent,
  DragOverlay,
//   DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";

import "../styles/Gallery.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashPhotos = [
  { src: "public/codeIT1.jpeg", width: 1080, height: 1080 },
  { src: "public/codeIT2.jpeg", width: 1080, height: 1080 },
  { src: "public/codeIT3.jpeg", width: 1080, height: 1620 },
  { src: "public/codeIT5.jpeg", width: 1080, height: 1080 },
  { src: "public/codeIT6.jpeg", width: 1080, height: 1080 },
  { src: "public/codeIT4.jpeg", width: 1080, height: 384 },
  { src: "public/codeIT7.jpeg", width: 1080, height: 1680 },
  { src: "public/codeIT8.jpeg", width: 1080, height: 1080 },
  { src: "public/codeIT9.jpeg", width: 1080, height: 1080 },
  { src: "public/codeIT10.jpeg", width: 1080, height: 1080 },
  { src: "public/codeIT11.jpeg", width: 1080, height: 1080 },
  { src: "public/codeIT12.jpeg", width: 1080, height: 1080 },
  { src: "public/codeIT13.jpeg", width: 1080, height: 1080 },
  { src: "public/codeIT14.jpeg", width: 1080, height: 1080 },
  { src: "public/codeIT15.jpeg", width: 1080, height: 1080 },
  { src: "public/codeIT16.jpeg", width: 1080, height: 1080 },
  { src: "public/kickstart221.jpeg", width: 1080, height: 1080 },
  { src: "public/kickstart222.jpeg", width: 1080, height: 1080 },
  { src: "public/kickstart223.jpeg", width: 1080, height: 1080 },
  { src: "public/kickstart224.jpeg", width: 1080, height: 1080 },
];

const photoSet = unsplashPhotos.map((photo) => ({
  src: photo.src,
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: photo.src,
      width: breakpoint,
      height,
    };
  }),
}));

const PhotoFrame = React.memo(
  React.forwardRef((props, ref) => {
    const { layoutOptions, imageProps, overlay, active, insertPosition, attributes, listeners } = props;
    const { alt, style, src, ...restImageProps } = imageProps;
    return (
      <div
        ref={ref}
        style={{
          width: overlay ? `calc(100% - ${2 * layoutOptions.padding}px)` : style.width,
          padding: style.padding,
          marginBottom: style.marginBottom,
        }}
        className={clsx("photo-frame", {
          overlay: overlay,
          active: active,
          insertBefore: insertPosition === "before",
          insertAfter: insertPosition === "after",
        })}
        {...attributes}
        {...listeners}
      >
        <img
          src={src}
          alt={alt}
          style={{
            ...style,
            width: "100%",
            height: "auto",
            padding: 0,
            marginBottom: 0,
          }}
          {...restImageProps}
        />
      </div>
    );
  })
);
PhotoFrame.displayName = "PhotoFrame";

function SortablePhotoFrame(props) {
  const { photo, activeIndex } = props;
  const { attributes, listeners, isDragging, index, over, setNodeRef } = useSortable({ id: photo.id });

  return (
    <PhotoFrame
      ref={setNodeRef}
      active={isDragging}
      insertPosition={
        activeIndex !== undefined && over?.id === photo.id && !isDragging
          ? index > activeIndex
            ? "after"
            : "before"
          : undefined
      }
      aria-label="sortable image"
      attributes={attributes}
      listeners={listeners}
      {...props}
    />
  );
}

export default function Gallery() {
  const [photos, setPhotos] = useState(
    photoSet.map((photo) => ({
      ...photo,
      id: photo.src,
    }))
  );
  const renderedPhotos = useRef({});
  const [activeId, setActiveId] = useState(null);
  const activeIndex = activeId ? photos.findIndex((photo) => photo.id === activeId) : undefined;

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 50, tolerance: 10 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragStart = useCallback(({ active }) => setActiveId(active.id), []);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setPhotos((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }, []);

  const renderPhoto = useCallback(
    (props) => {
      // capture rendered photos for future use in DragOverlay
      renderedPhotos.current[props.photo.id] = props;
      return <SortablePhotoFrame activeIndex={activeIndex} {...props} />;
    },
    [activeIndex]
  );
  const [index, setIndex] = useState(-1);
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={photos}>
        <div style={{ padding: 20, paddingLeft: 40, paddingRight: 40, paddingBottom: 80, backgroundColor: "#000" }}>
          <div className="galleryHead">IOSD Memories</div>
          <PhotoAlbum photos={photos} layout="rows" spacing={30} padding={20} renderPhoto={renderPhoto} onClick={({ index }) => setIndex(index)} />
          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        </div>
      </SortableContext>
      <DragOverlay>{activeId && <PhotoFrame overlay {...renderedPhotos.current[activeId]} />}</DragOverlay>
    </DndContext>
  );
}
