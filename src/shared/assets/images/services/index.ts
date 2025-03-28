// Динамически импортируем все изображения
const iconModules = import.meta.glob("./icons/*.svg", { eager: true, as: "url" });
const bgModules = import.meta.glob("./bgs/*.jpg", { eager: true, as: "url" });

export const serviceIcons = Object.fromEntries(
  Object.entries(iconModules).map(([path, module]) => {
    const id = path.match(/\.\/icons\/(\d+)\.svg$/)?.[1];
    return [id, module];
  })
);

export const serviceBackgrounds = Object.fromEntries(
  Object.entries(bgModules).map(([path, module]) => {
    const id = path.match(/\.\/bgs\/(\d+)\.jpg$/)?.[1];
    return [id, module];
  })
);