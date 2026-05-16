"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

interface Props {
  lat: number;
  lng: number;
  label: string;
  level?: number;
}

export default function KakaoMap({ lat, lng, label, level = 3 }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;

  useEffect(() => {
    if (!apiKey) return;

    // 이미 로드된 경우 재사용
    if (window.kakao?.maps) {
      setReady(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "kakao-map-sdk";
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    script.onload = () => setReady(true);
    document.head.appendChild(script);
  }, [apiKey]);

  useEffect(() => {
    if (!ready || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const center = new window.kakao.maps.LatLng(lat, lng);
      const map = new window.kakao.maps.Map(mapRef.current, { center, level });

      const marker = new window.kakao.maps.Marker({ position: center, map });

      const infoWindow = new window.kakao.maps.InfoWindow({
        content: `<div style="padding:6px 10px;font-size:12px;font-weight:600;white-space:nowrap;">${label}</div>`,
      });
      infoWindow.open(map, marker);
    });
  }, [ready, lat, lng, label, level]);

  if (!apiKey) {
    return (
      <div className="w-full h-full bg-zinc-200 flex flex-col items-center justify-center gap-2 text-zinc-500">
        <svg viewBox="0 0 24 24" className="w-10 h-10 opacity-40 fill-current">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
        </svg>
        <p className="text-xs text-center leading-relaxed px-4">
          카카오맵 API 키 필요<br />
          <span className="text-zinc-400">.env.local → NEXT_PUBLIC_KAKAO_MAP_KEY</span>
        </p>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-full" />;
}
