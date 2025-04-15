// Định nghĩa màu sắc và biểu tượng cho từng danh mục

// Màu sắc theo chủ đề cho từng danh mục
export const categoryColors = {
  "Golang Core": {
    light: "#5dc9e2", // Màu xanh da trời nhạt
    dark: "#00ADD8", // Màu xanh da trời đậm (màu chính thức của Go)
    gradient: "linear-gradient(90deg, #5dc9e2 0%, #00ADD8 100%)",
    bg: "bg-cyan-100",
    text: "text-cyan-800",
    darkBg: "dark:bg-cyan-900",
    darkText: "dark:text-cyan-200",
    border: "border-cyan-200"
  },
  "Cloud": {
    light: "#93c5fd", // Màu xanh dương nhạt
    dark: "#3b82f6", // Màu xanh dương đậm
    gradient: "linear-gradient(90deg, #93c5fd 0%, #3b82f6 100%)",
    bg: "bg-blue-100",
    text: "text-blue-800",
    darkBg: "dark:bg-blue-900",
    darkText: "dark:text-blue-200",
    border: "border-blue-200"
  },
  "AI/ML": {
    light: "#86efac", // Màu xanh lá nhạt
    dark: "#22c55e", // Màu xanh lá đậm
    gradient: "linear-gradient(90deg, #86efac 0%, #22c55e 100%)",
    bg: "bg-green-100",
    text: "text-green-800",
    darkBg: "dark:bg-green-900",
    darkText: "dark:text-green-200",
    border: "border-green-200"
  },
  "System Design": {
    light: "#fecaca", // Màu đỏ nhạt
    dark: "#ef4444", // Màu đỏ đậm
    gradient: "linear-gradient(90deg, #fecaca 0%, #ef4444 100%)",
    bg: "bg-red-100",
    text: "text-red-800",
    darkBg: "dark:bg-red-900",
    darkText: "dark:text-red-200",
    border: "border-red-200"
  },
  "Data Structures": {
    light: "#c4b5fd", // Màu tím nhạt
    dark: "#8b5cf6", // Màu tím đậm
    gradient: "linear-gradient(90deg, #c4b5fd 0%, #8b5cf6 100%)",
    bg: "bg-purple-100",
    text: "text-purple-800",
    darkBg: "dark:bg-purple-900",
    darkText: "dark:text-purple-200",
    border: "border-purple-200"
  },
  "Algorithms": {
    light: "#a5b4fc", // Màu tím xanh nhạt
    dark: "#6366f1", // Màu tím xanh đậm
    gradient: "linear-gradient(90deg, #a5b4fc 0%, #6366f1 100%)",
    bg: "bg-indigo-100",
    text: "text-indigo-800",
    darkBg: "dark:bg-indigo-900",
    darkText: "dark:text-indigo-200",
    border: "border-indigo-200"
  },
  "Web Development": {
    light: "#fde68a", // Màu vàng nhạt
    dark: "#f59e0b", // Màu vàng đậm
    gradient: "linear-gradient(90deg, #fde68a 0%, #f59e0b 100%)",
    bg: "bg-amber-100",
    text: "text-amber-800",
    darkBg: "dark:bg-amber-900",
    darkText: "dark:text-amber-200",
    border: "border-amber-200"
  },
  "Database": {
    light: "#d8b4fe", // Màu tím hồng nhạt
    dark: "#a855f7", // Màu tím hồng đậm
    gradient: "linear-gradient(90deg, #d8b4fe 0%, #a855f7 100%)",
    bg: "bg-fuchsia-100",
    text: "text-fuchsia-800",
    darkBg: "dark:bg-fuchsia-900",
    darkText: "dark:text-fuchsia-200",
    border: "border-fuchsia-200"
  },
  "Security": {
    light: "#f9a8d4", // Màu hồng nhạt
    dark: "#ec4899", // Màu hồng đậm
    gradient: "linear-gradient(90deg, #f9a8d4 0%, #ec4899 100%)",
    bg: "bg-pink-100",
    text: "text-pink-800",
    darkBg: "dark:bg-pink-900",
    darkText: "dark:text-pink-200",
    border: "border-pink-200"
  },
  "Performance": {
    light: "#fdba74", // Màu cam nhạt
    dark: "#f97316", // Màu cam đậm
    gradient: "linear-gradient(90deg, #fdba74 0%, #f97316 100%)",
    bg: "bg-orange-100",
    text: "text-orange-800",
    darkBg: "dark:bg-orange-900",
    darkText: "dark:text-orange-200",
    border: "border-orange-200"
  },
  "Project": {
    light: "#fcd34d", // Màu vàng nhạt
    dark: "#eab308", // Màu vàng đậm
    gradient: "linear-gradient(90deg, #fcd34d 0%, #eab308 100%)",
    bg: "bg-yellow-100",
    text: "text-yellow-800",
    darkBg: "dark:bg-yellow-900",
    darkText: "dark:text-yellow-200",
    border: "border-yellow-200"
  }
};

// Hàm lấy màu cho danh mục không xác định
export const getDefaultCategoryColor = () => ({
  light: "#e5e7eb", // Màu xám nhạt
  dark: "#6b7280", // Màu xám đậm
  gradient: "linear-gradient(90deg, #e5e7eb 0%, #6b7280 100%)",
  bg: "bg-gray-100",
  text: "text-gray-800",
  darkBg: "dark:bg-gray-800",
  darkText: "dark:text-gray-200",
  border: "border-gray-200"
});

// Hàm lấy màu cho một danh mục
export const getCategoryColor = (category) => {
  return categoryColors[category] || getDefaultCategoryColor();
};

// Biểu tượng SVG trực quan cho từng danh mục
export const categoryIcons = {
  "Golang Core": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M13.5,3c-0.8,0-1.5,0.7-1.5,1.5S12.7,6,13.5,6S15,5.3,15,4.5S14.3,3,13.5,3z M10.5,3C9.7,3,9,3.7,9,4.5S9.7,6,10.5,6 S12,5.3,12,4.5S11.3,3,10.5,3z M12,14c-3.9,0-7-3.1-7-7h2c0,2.8,2.2,5,5,5s5-2.2,5-5h2C19,10.9,15.9,14,12,14z M20,20h-2v-7h2V20z M4,20h2v-7H4V20z M17,20h-2v-7h2V20z M7,20h2v-7H7V20z M12,20h-2v-7h2V20z"/>
  </svg>`,
  "Cloud": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M19.35,10.04C18.67,6.59,15.64,4,12,4C9.11,4,6.6,5.64,5.35,8.04C2.34,8.36,0,10.91,0,14c0,3.31,2.69,6,6,6h13 c2.76,0,5-2.24,5-5C24,12.36,21.95,10.22,19.35,10.04z M19,18H6c-2.21,0-4-1.79-4-4c0-2.05,1.53-3.76,3.56-3.97l1.07-0.11 l0.5-0.95C8.08,7.14,9.94,6,12,6c2.62,0,4.88,1.86,5.39,4.43l0.3,1.5l1.53,0.11c1.56,0.1,2.78,1.41,2.78,2.96 C22,16.21,20.21,18,19,18z"/>
  </svg>`,
  "AI/ML": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9S16.97,3,12,3z M12,19c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7 S15.86,19,12,19z"/>
    <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7z M12,15c-1.65,0-3-1.35-3-3s1.35-3,3-3s3,1.35,3,3 S13.65,15,12,15z"/>
    <path d="M12,11c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S12.55,11,12,11z"/>
  </svg>`,
  "System Design": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M22,9V7h-2V5c0-1.1-0.9-2-2-2H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-2h2v-2h-2v-2h2v-2h-2V9H22z M18,19H4V5h14V19z"/>
    <path d="M6,13h5v4H6V13z M12,7h4v3h-4V7z M6,7h5v5H6V7z M12,11h4v6h-4V11z"/>
  </svg>`,
  "Data Structures": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z"/>
    <path d="M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6S15.31,6,12,6z M12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4 S14.21,16,12,16z"/>
    <path d="M12,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,10,12,10z"/>
  </svg>`,
  "Algorithms": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/>
    <path d="M7,12h2v5H7V12z M15,7h2v10h-2V7z M11,14h2v3h-2V14z M11,10h2v3h-2V10z"/>
  </svg>`,
  "Web Development": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V8h16V18z"/>
    <path d="M11,10H9v2H7v-2H5v6h2v-2h2v2h2V10z M15,14h2v-4h-2V14z M19,14V10h-2v4H19z"/>
  </svg>`,
  "Database": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M12,3C7.58,3,4,4.79,4,7v10c0,2.21,3.58,4,8,4s8-1.79,8-4V7C20,4.79,16.42,3,12,3z M12,5c3.87,0,6,1.5,6,2 s-2.13,2-6,2S6,7.5,6,7S8.13,5,12,5z M18,17c0,0.5-2.13,2-6,2s-6-1.5-6-2v-2.23c1.61,1.07,3.95,1.23,6,1.23s4.39-0.16,6-1.23 V17z M18,13c0,0.5-2.13,2-6,2s-6-1.5-6-2v-2.23c1.61,1.07,3.95,1.23,6,1.23s4.39-0.16,6-1.23V13z M18,9c0,0.5-2.13,2-6,2 S6,9.5,6,9V7.23c1.61,1.07,3.95,1.23,6,1.23s4.39-0.16,6-1.23V9z"/>
  </svg>`,
  "Security": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M12,11.99h7c-0.53,4.12-3.28,7.79-7,8.94V12H5V6.3 l7-3.11v8.8z"/>
  </svg>`,
  "Performance": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M19.77,7.23l0.01-0.01l-3.72-3.72L15,4.56l2.11,2.11c-0.94,0.36-1.61,1.26-1.61,2.33c0,1.38,1.12,2.5,2.5,2.5 s2.5-1.12,2.5-2.5C20.5,8.25,20.23,7.59,19.77,7.23z M3.5,18.5c0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5S7.38,16,6,16 S3.5,17.12,3.5,18.5z M20,13h-5c-0.55,0-1,0.45-1,1v4H4V8h6c0.55,0,1-0.45,1-1V3h9V13z"/>
  </svg>`,
  "Project": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M20,6h-8l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18H4V6h5.17l2,2 H20V18z"/>
    <path d="M8,14h4v3h-4V14z M14,14h2v3h-2V14z M8,11h2v2H8V11z M11,11h5v2h-5V11z"/>
  </svg>`
};

// Hàm lấy biểu tượng cho một danh mục
export const getCategoryIcon = (category) => {
  return categoryIcons[category] || `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z"/>
    <path d="M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6S15.31,6,12,6z M12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4 S14.21,16,12,16z"/>
  </svg>`;
};

// Hàm lấy màu gradient cho thanh tiến độ
export const getProgressGradient = (progress) => {
  if (progress < 33) {
    return "linear-gradient(90deg, #ef4444 0%, #f87171 100%)"; // Đỏ
  } else if (progress < 66) {
    return "linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)"; // Vàng
  } else {
    return "linear-gradient(90deg, #22c55e 0%, #4ade80 100%)"; // Xanh lá
  }
};