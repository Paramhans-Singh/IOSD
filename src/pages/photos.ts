const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashPhotos = [
    { src: "public/codeIT (1).jpeg", width: 1080, height: 1080 },
    { src: "public/codeIT (2).jpeg", width: 1080, height: 1080 },
    { src: "public/codeIT (3).jpeg", width: 1080, height: 1620 },
    { src: "public/codeIT (5).jpeg", width: 1080, height: 1080 },
    { src: "public/codeIT (6).jpeg", width: 1080, height: 1080 },
    { src: "public/codeIT (4).jpeg", width: 1080, height: 384 },
    { src: "public/codeIT (7).jpeg", width: 1080, height: 1680 },
    { src: "public/codeIT (8).jpeg", width: 1080, height: 1080 },
    { src: "public/codeIT (9).jpeg", width: 1080, height: 1080 },
    { src: "public/codeIT (11).jpeg", width: 1080, height: 1080 },
    { src: "public/codeIT (12).jpeg", width: 1080, height: 1080 },
    { src: "public/codeIT (13).jpeg", width: 1080, height: 1080 },
    { src: "public/codeIT (14).jpeg", width: 1080, height: 1080 },
    { src: "public/codeIT (15).jpeg", width: 1080, height: 1080 },
    { src: "public/codeIT (16).jpeg", width: 1080, height: 1080 },
    { src: "public/kickstart22 (1).jpeg", width: 1080, height: 1080 },
    { src: "public/kickstart22 (2).jpeg", width: 1080, height: 1080 },
    { src: "public/kickstart22 (3).jpeg", width: 1080, height: 1080 },
    { src: "public/kickstart22 (4).jpeg", width: 1080, height: 1080 },
];

const photos = unsplashPhotos.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    // srcSet: breakpoints.map((breakpoint) => {
    //     const height = Math.round((photo.height / photo.width) * breakpoint);
    //     return {
    //         src: photo.src,
    //         width: breakpoint,
    //         height,
    //     };
    // }),
}));

export default photos;
