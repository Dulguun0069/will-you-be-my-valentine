"use client";
import { useState, useMemo } from "react";
import "./App.css";

const HEART_COUNT = 25;

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const hearts = useMemo(() => {
    if (!yesPressed) return [];
    return Array.from({ length: HEART_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 28,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 3,
    }));
  }, [yesPressed]);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Үгүй",
      "Үнэхээр үү ?",
      "Ингэж гоёор хэлж байхад уу ?",
      "Өөлхнөө",
      "Гоё шоколад өгнө шүү",
      "Цэцэг гэвэл ямар сонсогдож байна ?",
      "Гуйж байна",
      "Зозо",
      "Үхийдө",
      "Гуйж байна шдэ ",
      ":(((("
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          {hearts.length > 0 && (
            <div
              className="falling-hearts"
              style={{ pointerEvents: "none" }}
              aria-hidden
            >
              {hearts.map((heart) => (
                <span
                  key={heart.id}
                  className="falling-heart"
                  style={{
                    left: `${heart.left}%`,
                    fontSize: `${heart.size}px`,
                    animationDelay: `${heart.delay}s`,
                    animationDuration: `${heart.duration}s`,
                  }}
                >
                  ❤️
                </span>
              ))}
            </div>
          )}
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold"> Хайртай шүү чамдаа үнсье   ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Чи миний Валентин болох уу ?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Тийм
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Үгүй" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
