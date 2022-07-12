
function StarOffIcon({ color = "currentColor", size = "24", fill = "none" }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"></path>
    <path d="M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"></path>
    <line x1="2" y1="2" x2="22" y2="22"></line>
  </svg>;
}

export default StarOffIcon;