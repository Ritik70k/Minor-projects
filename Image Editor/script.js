let filters = {
  brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  heuRotate: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg",
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px",
  },
  sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  grayscale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  opacity: {
    value: 100,
    min: 0,
    max: 100,
    unit: "%",
  },
  invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
};
const presets = {
  dramatic: {
    brightness: 90,
    contrast: 160,
    saturation: 120,
    heuRotate: 0,
    blur: 0,
    sepia: 10,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  vintage: {
    brightness: 105,
    contrast: 85,
    saturation: 70,
    heuRotate: 345,
    blur: 0.5,
    sepia: 45,
    grayscale: 10,
    opacity: 100,
    invert: 0,
  },

  oldSchool: {
    brightness: 95,
    contrast: 110,
    saturation: 60,
    heuRotate: 350,
    blur: 1,
    sepia: 65,
    grayscale: 20,
    opacity: 100,
    invert: 0,
  },

  noir: {
    brightness: 95,
    contrast: 180,
    saturation: 0,
    heuRotate: 0,
    blur: 0,
    sepia: 0,
    grayscale: 100,
    opacity: 100,
    invert: 0,
  },

  cinematic: {
    brightness: 90,
    contrast: 145,
    saturation: 85,
    heuRotate: 190,
    blur: 0,
    sepia: 8,
    grayscale: 5,
    opacity: 100,
    invert: 0,
  },
  cool: {
    brightness: 100,
    contrast: 110,
    saturation: 115,
    heuRotate: 20,
    blur: 0,
    sepia: 0,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  faded: {
    brightness: 110,
    contrast: 75,
    saturation: 80,
    heuRotate: 0,
    blur: 0.5,
    sepia: 20,
    grayscale: 10,
    opacity: 100,
    invert: 0,
  },

  retro: {
    brightness: 110,
    contrast: 90,
    saturation: 85,
    heuRotate: 340,
    blur: 0.3,
    sepia: 35,
    grayscale: 15,
    opacity: 100,
    invert: 0,
  },
  dreamy: {
    brightness: 115,
    contrast: 85,
    saturation: 115,
    heuRotate: 10,
    blur: 2,
    sepia: 10,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  moody: {
    brightness: 80,
    contrast: 150,
    saturation: 75,
    heuRotate: 200,
    blur: 0,
    sepia: 5,
    grayscale: 20,
    opacity: 100,
    invert: 0,
  },

  vibrant: {
    brightness: 105,
    contrast: 120,
    saturation: 180,
    heuRotate: 0,
    blur: 0,
    sepia: 0,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },
  cyberpunk: {
    brightness: 105,
    contrast: 160,
    saturation: 180,
    heuRotate: 260,
    blur: 0,
    sepia: 0,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  icy: {
    brightness: 110,
    contrast: 125,
    saturation: 90,
    heuRotate: 180,
    blur: 0,
    sepia: 0,
    grayscale: 5,
    opacity: 100,
    invert: 0,
  },
};

const presetContainer = document.querySelector(".presets");
const resetBtn = document.querySelector("#reset-btn");
const imgCanvas = document.querySelector("#image-canvas");
const filtersContainer = document.querySelector(".filters");
const imgInput = document.querySelector("#imgage-input");
const canvasCtx = imgCanvas.getContext("2d");
const downloadBtn = document.querySelector("#download-btn");
let image = null;
let file = null;
function createFilterElement(name, unit = "%", value, min, max) {
  const div = document.createElement("div");
  div.classList.add("filter");

  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;
  input.id = name;

  const p = document.createElement("p");
  p.textContent = name;

  div.appendChild(p);
  div.appendChild(input);
  input.addEventListener("input", (e) => {
    filters[name].value = input.value;
    applyFilters();
  });
  return div;
}

function createFilters() {
  Object.keys(filters).forEach((key) => {
    document
      .querySelector(".filters")
      .appendChild(
        createFilterElement(
          key,
          filters[key].unit,
          filters[key].value,
          filters[key].min,
          filters[key].max,
        ),
      );
  });
}
createFilters();
imgInput.addEventListener("change", (e) => {
  const imgPlaceholder = document.querySelector(".placeholder");
  imgPlaceholder.style.display = "none";

  imgCanvas.style.display = "block";

  const img = new Image();
  file = e.target.files[0];
  img.src = URL.createObjectURL(file);
  image = img;

  img.onload = () => {
    imgCanvas.width = img.width;
    imgCanvas.height = img.height;
    canvasCtx.drawImage(img, 0, 0);
  };
});

function applyFilters() {
  canvasCtx.clearRect(0, 0, imgCanvas.width, imgCanvas.height);
  canvasCtx.filter = `brightness(${filters.brightness.value}${filters.brightness.unit})
  contrast(${filters.contrast.value}${filters.contrast.unit}) 
  saturate(${filters.saturation.value}${filters.saturation.unit}) 
  hue-rotate(${filters.heuRotate.value}${filters.heuRotate.unit}) 
  blur(${filters.blur.value}${filters.blur.unit}) 
  sepia(${filters.sepia.value}${filters.sepia.unit}) 
  grayscale(${filters.grayscale.value}${filters.grayscale.unit})
  opacity(${filters.opacity.value}${filters.opacity.unit})  
  invert(${filters.invert.value}${filters.invert.unit})`;
  canvasCtx.drawImage(image, 0, 0);
}

resetBtn.addEventListener("click", () => {
  if (!file) return;

  filters = {
    brightness: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    contrast: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    saturation: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    heuRotate: {
      value: 0,
      min: 0,
      max: 360,
      unit: "deg",
    },
    blur: {
      value: 0,
      min: 0,
      max: 20,
      unit: "px",
    },
    sepia: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
    grayscale: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
    opacity: {
      value: 100,
      min: 0,
      max: 100,
      unit: "%",
    },
    invert: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
  };
  applyFilters();

  filtersContainer.innerHTML = "";
  createFilters();
});
downloadBtn.addEventListener("click", () => {
  if(!file) return;
  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = imgCanvas.toDataURL();
  link.click();
});

Object.keys(presets).forEach((key) => {
  const presetBtn = document.createElement("button");
  presetBtn.classList.add("btn");
  presetBtn.innerText = key;
  presetBtn.addEventListener("click", () => {

    const preset = presets[key];
    Object.keys(preset).forEach((filter) => {
      filters[filter].value = preset[filter];
    });
    if(!file) return;
    applyFilters();
    
    filtersContainer.innerHTML = "";
    createFilters();
  });
  presetContainer.appendChild(presetBtn);
});