import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  fill: string
}

export default function MenuItems ({ fill }: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div
        onClick={() => {
          navigate("/dashboard/myhealth");
        }}
        className="flex flex-row items-center justify-center md:justify-start gap-2 w-full cursor-pointer px-1 py-2 rounded-lg md:hover:bg-gradientVia1 md:hover:transition-all md:hover:duration-300 transition-all duration-300"
      >
        <svg
          className="h-10 w-10"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9665 7.00504C12.9637 5.34818 14.3047 4.00284 15.9615 4.00013L31.9337 3.97397C33.5906 3.97125 34.9359 5.3122 34.9386 6.96905L34.9943 40.9559C34.997 42.6128 33.6561 43.9581 31.9992 43.9608L16.027 43.987C14.3702 43.9897 13.0248 42.6488 13.0221 40.9919L12.9665 7.00504ZM14.9656 8.00168C14.9638 6.89711 15.8577 6.00021 16.9623 5.9984L30.9395 5.97551C32.0441 5.9737 32.941 6.86766 32.9428 7.97223L32.987 34.9621C32.9888 36.0666 32.0949 36.9635 30.9903 36.9653L17.0131 36.9882C15.9085 36.99 15.0116 36.0961 15.0098 34.9915L14.9656 8.00168ZM24.0099 41.9745C25.1131 41.9727 26.0059 41.0761 26.0041 39.9719C26.0023 38.8677 25.1065 37.974 24.0033 37.9758C22.9002 37.9776 22.0073 38.8742 22.0091 39.9784C22.0109 41.0826 22.9067 41.9763 24.0099 41.9745Z"
          />
          <path d="M23.1923 27.5397L23.1921 27.5395C21.6033 26.2237 20.297 25.1418 19.3858 24.1243C18.4764 23.1088 17.9766 22.1747 17.9758 21.1568C17.9745 19.5006 19.3937 18.2 21.2042 18.1985C22.2283 18.1977 23.2141 18.6337 23.8572 19.3235L23.9744 19.4492L24.0914 19.3233C24.7334 18.6325 25.7184 18.1948 26.7426 18.194C28.553 18.1925 29.9744 19.4907 29.9758 21.147C29.9766 22.1648 29.4785 23.0998 28.5707 24.1175C27.6642 25.1337 26.3654 26.2153 24.7861 27.5305L24.7702 27.5437L24.7699 27.544L23.982 28.1963L23.1923 27.5397Z" />
        </svg>
        <h1 className="hidden md:block">My Health</h1>
      </div>
      <hr className="w-10 border-solid border-1 border-mainFontColor md:hidden" />
      <div
        onClick={() => {
          navigate("/dashboard/medication");
        }}
        className="flex flex-row items-center justify-center md:justify-start  gap-2 w-full cursor-pointer px-1 py-2 rounded-lg md:hover:bg-gradientVia1 md:hover:transition-all md:hover:duration-300 transition-all duration-300"
      >
        <svg
          className="h-10 w-10"
          viewBox="0 0 48 48"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42 14C42 18.4183 38.4183 22 34 22C29.5817 22 26 18.4183 26 14C26 9.58172 29.5817 6 34 6C38.4183 6 42 9.58172 42 14ZM38.2823 14.9847C38.1586 15.523 37.6219 15.859 37.0837 15.7352L30.468 14.2143C29.9298 14.0906 29.5938 13.5539 29.7175 13.0157C29.8413 12.4775 30.3779 12.1414 30.9161 12.2652L37.5318 13.7861C38.07 13.9098 38.4061 14.4465 38.2823 14.9847Z"
          />
          <path d="M16.7782 9.24516C16.1307 7.71335 13.9653 7.55884 13.0955 8.98238L6.29281 20.1148C5.50809 21.399 6.38547 23.0385 7.9159 23.1477L19.7823 23.9944C21.3127 24.1036 22.4261 22.6062 21.842 21.2243L16.7782 9.24516Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.3849 36.3592C38.3881 34.9588 39.6875 31.3889 38.287 28.3856C36.8866 25.3824 33.3167 24.0831 30.3135 25.4835L19.4378 30.5549C16.4345 31.9554 15.1352 35.5252 16.5356 38.5285C17.9361 41.5317 21.5059 42.8311 24.5092 41.4306L35.3849 36.3592ZM29.9426 36.6902L34.5396 34.5466C36.5418 33.613 37.408 31.233 36.4744 29.2309C35.5408 27.2287 33.1609 26.3625 31.1587 27.2961L26.5617 29.4397L29.9426 36.6902Z"
          />
        </svg>
        <h1 className="hidden md:block">My Rx</h1>
      </div>
      <hr className="w-10 border-solid border-1 border-mainFontColor md:hidden" />
      <div
        onClick={() => {
          navigate("/dashboard/results");
        }}
        className="flex flex-row items-center justify-center md:justify-start  gap-2 w-full cursor-pointer px-1 py-2 rounded-lg md:hover:bg-gradientVia1 md:hover:transition-all md:hover:duration-300 transition-all duration-300"
      >
        <svg
          className="h-10 w-10"
          viewBox="0 0 48 48"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26 8C26 6.89543 26.8954 6 28 6H37C38.1046 6 39 6.89543 39 8V12H37.4667V14.1949C37.4667 15.0557 37.8364 15.875 38.4818 16.4444L40.3081 18.0559C41.3838 19.005 42 20.3705 42 21.8051V37C42 39.7614 39.7614 42 37 42H28C25.2386 42 23 39.7614 23 37V21.8051C23 20.3705 23.6162 19.005 24.6919 18.0559L26.5182 16.4444C27.1636 15.875 27.5333 15.0557 27.5333 14.1949V12H26V8ZM29.5333 12H35.4667V14.1949C35.4667 15.6295 36.0829 16.995 37.1586 17.9441L38.9849 19.5556C39.6303 20.125 40 20.9443 40 21.8051V37C40 38.6569 38.6569 40 37 40H28C26.3431 40 25 38.6569 25 37V21.8051C25 20.9443 25.3697 20.125 26.0151 19.5556L27.8414 17.9441C28.9171 16.995 29.5333 15.6295 29.5333 14.1949V12ZM32.5 21C32.7761 21 33 21.2239 33 21.5V24.2276C33.2805 24.492 33.5227 24.9726 33.6985 25.5944L34.5 24.7929V23.5C34.5 23.3674 34.5527 23.2402 34.6464 23.1464L36.1464 21.6464C36.3417 21.4512 36.6583 21.4512 36.8535 21.6464C37.0488 21.8417 37.0488 22.1583 36.8535 22.3536L35.5 23.7071V25C35.5 25.1326 35.4473 25.2598 35.3535 25.3536L33.9287 26.7784C33.9398 26.8707 33.9497 26.9644 33.9583 27.0595L38.7624 27.8571C38.9189 28.5714 38.6686 30 36.4159 30C35.1129 30 34.3752 29.3309 33.9847 28.5732C33.9733 28.7854 33.9556 28.9922 33.9322 29.1922L36.2867 30.8404C36.4769 30.9735 36.5505 31.2201 36.4642 31.4357L36.1473 32.228L37.1923 32.6635C37.4472 32.7697 37.5677 33.0624 37.4615 33.3173C37.3553 33.5722 37.0626 33.6927 36.8077 33.5865L35.3077 32.9615C35.0554 32.8564 34.9342 32.5681 35.0358 32.3143L35.3886 31.4323L33.7341 30.2742C33.6997 30.4066 33.6625 30.5332 33.6225 30.6534L33.9794 31.858C33.9931 31.9041 34 31.9519 34 32V32.9496L35.3904 34.6877C35.5629 34.9033 35.528 35.2179 35.3123 35.3904C35.0967 35.5629 34.7821 35.528 34.6096 35.3123L33.1096 33.4373C33.0386 33.3487 33 33.2385 33 33.125V32.0725L32.9293 31.8338C32.7933 31.9419 32.6492 32 32.5 32C32.367 32 32.238 31.9538 32.1152 31.8672L32 32.3135V33.125C32 33.2385 31.9614 33.3487 31.8904 33.4373L30.3904 35.3123C30.2179 35.528 29.9033 35.5629 29.6877 35.3904C29.472 35.2179 29.4371 34.9033 29.6096 34.6877L31 32.9496V32.25C31 32.2079 31.0053 32.1659 31.0159 32.1251L31.3878 30.6839C31.3355 30.5301 31.2877 30.3655 31.2449 30.1913L29.6066 31.4201L29.9642 32.3143C30.0658 32.5681 29.9446 32.8564 29.6923 32.9615L28.1923 33.5865C27.9374 33.6927 27.6447 33.5722 27.5385 33.3173C27.4323 33.0624 27.5528 32.7697 27.8077 32.6635L28.8527 32.228L28.5358 31.4357C28.4518 31.2258 28.5191 30.9856 28.7 30.85L31.0556 29.0833C31.0239 28.7812 31.005 28.4647 31.0009 28.1382C30.6834 29.0542 29.9332 30 28.3841 30C26.1314 30 25.8811 28.5714 26.0376 27.8571L31.0448 27.0258C31.0526 26.9422 31.0615 26.8597 31.0712 26.7784L29.6464 25.3536C29.5527 25.2598 29.5 25.1326 29.5 25V23.7071L28.1464 22.3536C27.9512 22.1583 27.9512 21.8417 28.1464 21.6464C28.3417 21.4512 28.6583 21.4512 28.8535 21.6464L30.3535 23.1464C30.4473 23.2402 30.5 23.3674 30.5 23.5V24.7929L31.3015 25.5944C31.4772 24.9726 31.7195 24.492 32 24.2276V21.5C32 21.2239 32.2239 21 32.5 21ZM27.1801 28.6811C27.3152 28.8112 27.6338 29 28.3841 29C29.1571 29 29.5596 28.683 29.8083 28.3151C29.8257 28.2893 29.8425 28.263 29.8586 28.2364L27.1801 28.6811ZM36.4159 29C37.1662 29 37.4848 28.8112 37.6199 28.6811L34.9414 28.2364C34.9575 28.263 34.9743 28.2893 34.9917 28.3151C35.2404 28.683 35.6429 29 36.4159 29Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 9.77143H16V10.4667C15.3844 10.8043 15 11.4513 15 12.1558V19.8442C15 20.5487 15.3844 21.1957 16 21.5333V22.2285H10V21.5333C10.6156 21.1957 11 20.5487 11 19.8442V12.1558C11 11.4513 10.6156 10.8043 10 10.4667V9.77143ZM8 21.4891C8 20.7847 8.38438 20.1377 9 19.8001V12.1999C8.38438 11.8623 8 11.2153 8 10.5109V6H18.0571V9.77143H18V10.5109C18 11.2153 17.6156 11.8623 17 12.1999V19.8001C17.6156 20.1377 18 20.7847 18 21.4891V22.2285H18.0571V25.9999H8V21.4891Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 28C6.89543 28 6 28.8954 6 30V40C6 41.1046 6.89543 42 8 42H18C19.1046 42 20 41.1046 20 40V30C20 28.8954 19.1046 28 18 28H8ZM16 30H18V40H16V30ZM14 34H12V40H14V34ZM10 37H8V40H10V37Z"
          />
        </svg>
        <h1 className="hidden md:block">Results</h1>
      </div>
      <hr className="w-10 border-solid border-1 border-mainFontColor md:hidden" />
      <div
        onClick={() => {
          navigate("/dashboard/find");
        }}
        className="flex flex-row items-center justify-center md:justify-start  gap-2 w-full cursor-pointer px-1 py-2 rounded-lg md:hover:bg-gradientVia1 md:hover:transition-all md:hover:duration-300 transition-all duration-300"
      >
        <svg
          className="h-10 w-10"
          viewBox="0 0 48 48"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.2072 31.3786L11.2929 38.2927L9.87865 36.8785L16.793 29.9643L18.2072 31.3786Z"
          />
          <path d="M6 39.1715L12.9266 32.2449L15.5 32.0648L16 32.5648L15.7122 35.1162L8.82843 41.9999L6 39.1715Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 34C34.1797 34 40 28.1797 40 21C40 13.8203 34.1797 8 27 8C19.8203 8 14 13.8203 14 21C14 28.1797 19.8203 34 27 34ZM27 36C35.2843 36 42 29.2843 42 21C42 12.7157 35.2843 6 27 6C18.7157 6 12 12.7157 12 21C12 29.2843 18.7157 36 27 36Z"
          />
        </svg>
        <h1 className="hidden md:block">Find a doctor</h1>
      </div>
      <hr className="w-10 border-solid border-1 border-mainFontColor md:hidden" />
      <div
        onClick={() => {
          navigate("/dashboard/messages");
        }}
        className="flex flex-row items-center justify-center md:justify-start  gap-2 w-full cursor-pointer px-1 py-2 rounded-lg md:hover:bg-gradientVia1 md:hover:transition-all md:hover:duration-300 transition-all duration-300"
      >
        <svg
          fill={fill}
          className="h-10 w-10"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 20.0694C4 14.5082 8.50824 10 14.0694 10H21.9306C27.4918 10 32 14.5082 32 20.0694C32 25.6306 27.4918 30.1389 21.9306 30.1389H16V35C16 35 4 32.5694 4 20.0694Z" />
          <path d="M24.4774 31.867C25.925 33.2569 27.8907 34.1111 30.0559 34.1111H33.0003V38C33.0003 38 44.0003 36.0556 44.0003 26.0556C44.0003 21.6066 40.3937 18 35.9448 18H33.7352C33.9079 18.6562 33.9999 19.3451 33.9999 20.0556C33.9999 25.8503 29.9208 30.6923 24.4774 31.867Z" />
        </svg>
        <h1 className="hidden md:block">Messages</h1>
      </div>
    </div>
  );
}
