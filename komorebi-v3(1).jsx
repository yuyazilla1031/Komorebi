import { useState } from "react";

// ─── Icons ───
const Icon = ({ d, size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const Icons = {
  leaf: (p) => <Icon {...p} d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5.5-4 7-9 10Z M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />,
  camera: (p) => <Icon {...p} d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />,
  home: (p) => <Icon {...p} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10" />,
  users: (p) => <Icon {...p} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" />,
  check: (p) => <Icon {...p} d="M20 6L9 17l-5-5" />,
  alert: (p) => <Icon {...p} d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01" />,
  sun: (p) => <Icon {...p} d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42 M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />,
  calendar: (p) => <Icon {...p} d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z M16 2v4M8 2v4M3 10h18" />,
  star: (p) => <Icon {...p} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
  arrow: (p) => <Icon {...p} d="M5 12h14M12 5l7 7-7 7" />,
  back: (p) => <Icon {...p} d="M19 12H5M12 19l-7-7 7-7" />,
  bell: (p) => <Icon {...p} d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0" />,
  settings: (p) => <Icon {...p} d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />,
  upload: (p) => <Icon {...p} d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12" />,
  phone: (p) => <Icon {...p} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
  wrench: (p) => <Icon {...p} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
  zap: (p) => <Icon {...p} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  droplet: (p) => <Icon {...p} d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />,
  shield: (p) => <Icon {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  truck: (p) => <Icon {...p} d="M1 3h15v13H1z M16 8h4l3 3v5h-7V8z M5.5 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z M18.5 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />,
  creditCard: (p) => <Icon {...p} d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z M1 10h22" />,
  wallet: (p) => <Icon {...p} d="M21 12V7H5a2 2 0 0 1 0-4h14v4 M3 5v14a2 2 0 0 0 2 2h16v-5 M18 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />,
  mapPin: (p) => <Icon {...p} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />,
  grid: (p) => <Icon {...p} d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />,
  heart: (p) => <Icon {...p} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
  gift: (p) => <Icon {...p} d="M20 12v10H4V12 M2 7h20v5H2z M12 22V7 M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />,
  award: (p) => <Icon {...p} d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />,
  handshake: (p) => <Icon {...p} d="M11 17a1 1 0 0 1-1 1H6l-4-4 2.5-2.5L7 14 M13 17a1 1 0 0 0 1 1h4l4-4-2.5-2.5L17 14 M7 14l3-3 4 4 3-3 M2 9l4-4 3 3 M22 9l-4-4-3 3" />,
};

// ─── Mock Data ───
const mockCustomers = [
  { id: 1, name: "田中 花子", address: "金沢市野町3丁目", plan: "月額プラン", nextVisit: "2026年4月20日", status: "良好", gardenScore: 82, helpers: ["鈴木 ケアマネ", "中村 よし子"] },
  { id: 2, name: "山本 太郎", address: "金沢市泉野出町", plan: "年間プラン", nextVisit: "2026年4月18日", status: "要対応", gardenScore: 54, helpers: ["高橋 ケアマネ"] },
  { id: 3, name: "佐藤 美恵子", address: "金沢市寺町", plan: "月額プラン", nextVisit: "2026年4月25日", status: "良好", gardenScore: 91, helpers: ["伊藤 恵子"] },
];

const mockReports = [
  { date: "2026年4月5日", score: 82, summary: "雑草が少量確認されました。次回訪問時に除草を推奨します。全体的に良好な状態です。", weeds: "少量", pruning: "不要", leaves: "なし", risk: "低" },
  { date: "2026年3月20日", score: 88, summary: "冬季の雪害なく良好です。春の成長期に向けて準備が整っています。", weeds: "ほぼなし", pruning: "軽度", leaves: "少量", risk: "低" },
  { date: "2026年3月5日", score: 75, summary: "積雪の影響で一部枝が折れています。次回訪問時に剪定対応を行います。", weeds: "なし", pruning: "必要", leaves: "なし", risk: "中" },
];

const aiDiagnosis = {
  weedDensity: 18, weedChange: "+12%", pruningNeed: "低", pestRisk: "なし", overallScore: 82,
  recommendation: "現在の状態は良好です。雑草密度が前回から12%増加していますが、次回定期訪問（4月20日）での対応で問題ありません。剪定の緊急性は低く、5月中旬頃の実施を推奨します。",
  seasonalNote: "春の成長期に入っています。4月後半から雑草の成長が加速する見込みです。",
};

const localBusinesses = [
  { id: 1, name: "金沢水道サービス", category: "水道・水回り", icon: Icons.droplet, color: "#2B7A9E", desc: "水漏れ・排水つまり・蛇口交換", rating: 4.8, reviews: 127, phone: "076-XXX-XXXX", response: "最短30分", price: "¥3,000〜" },
  { id: 2, name: "北陸電気工事", category: "電気工事", icon: Icons.zap, color: "#D4A030", desc: "コンセント修理・照明交換・ブレーカー", rating: 4.7, reviews: 93, phone: "076-XXX-XXXX", response: "当日対応", price: "¥5,000〜" },
  { id: 3, name: "まちの便利屋 金沢", category: "便利屋・軽作業", icon: Icons.wrench, color: "#6B8E6B", desc: "家具移動・不用品処理・簡単な修理", rating: 4.5, reviews: 68, phone: "076-XXX-XXXX", response: "翌日対応", price: "¥3,000〜" },
  { id: 4, name: "加賀ロック", category: "鍵・防犯", icon: Icons.shield, color: "#8B6B8E", desc: "鍵交換・鍵開け・防犯相談", rating: 4.9, reviews: 201, phone: "076-XXX-XXXX", response: "最短20分", price: "¥8,000〜" },
  { id: 5, name: "金沢引越サポート", category: "運搬・引越", icon: Icons.truck, color: "#A06B4B", desc: "小規模引越・大型家具の移動", rating: 4.6, reviews: 45, phone: "076-XXX-XXXX", response: "要予約", price: "¥10,000〜" },
];

const mockHelpers = [
  { id: 1, name: "鈴木 美穂", role: "ケアマネージャー", org: "金沢中央ケアセンター", points: 2450, rank: "ゴールド", clients: ["田中 花子", "山本 太郎"], actions: 34 },
  { id: 2, name: "中村 よし子", role: "ご近所", org: "野町3丁目", points: 890, rank: "シルバー", clients: ["田中 花子"], actions: 12 },
  { id: 3, name: "高橋 健一", role: "ケアマネージャー", org: "泉野ケアプランセンター", points: 1680, rank: "ゴールド", clients: ["山本 太郎"], actions: 23 },
  { id: 4, name: "伊藤 恵子", role: "ご近所", org: "寺町2丁目", points: 340, rank: "ブロンズ", clients: ["佐藤 美恵子"], actions: 5 },
];

const pointActions = [
  { action: "写真アップロード代行", points: 50, icon: "📸" },
  { action: "状態チェック報告", points: 30, icon: "📋" },
  { action: "ご利用者の声を代理入力", points: 40, icon: "💬" },
  { action: "緊急連絡・通報", points: 100, icon: "🚨" },
  { action: "業者手配サポート", points: 60, icon: "🔧" },
];

const rewards = [
  { id: 1, name: "地元和菓子セット", brand: "森八", points: 500, image: "🍡", desc: "金沢の老舗・森八の季節の和菓子詰め合わせ" },
  { id: 2, name: "加賀棒茶ギフト", brand: "丸八製茶場", points: 800, image: "🍵", desc: "香り高い加賀棒茶のプレミアムギフト" },
  { id: 3, name: "金沢カフェチケット", brand: "提携カフェ", points: 300, image: "☕", desc: "市内提携カフェで使えるドリンクチケット" },
  { id: 4, name: "近江町市場お買物券", brand: "近江町市場", points: 1500, image: "🐟", desc: "近江町市場で使える¥1,500分のお買物券" },
  { id: 5, name: "温泉入浴券（ペア）", brand: "湯涌温泉", points: 2000, image: "♨️", desc: "湯涌温泉の日帰り入浴券（2名分）" },
  { id: 6, name: "兼六園年間パスポート", brand: "兼六園", points: 3000, image: "🏯", desc: "兼六園の年間フリーパス" },
];

// ─── Colors ───
const cl = {
  forest: "#1B4332", forestMid: "#2D6A4F", forestLight: "#40916C",
  canopy: "#52B788", canopyLight: "#74C69D", canopyPale: "#B7E4C7",
  light: "#D8F3DC", lightGold: "#F6EFC3", gold: "#E8D44D", goldWarm: "#D4A849",
  bg: "#F7FAF5", card: "#FFFFFF",
  text: "#1B3A26", textMuted: "#5A7A66", textLight: "#8FAE9B",
  border: "#D5E8DA",
  danger: "#C75B3A", dangerLight: "#FFF0EC",
  accent: "#D4A849", accentLight: "#FFF8E7",
  warmPink: "#E07A5F", warmPinkLight: "#FFF0EB",
  purple: "#7B6BA4", purpleLight: "#F0EDF7",
};

const fonts = { display: "'Noto Serif JP', serif", body: "'Noto Sans JP', sans-serif" };

// ─── Shared Components ───
const Badge = ({ children, color = cl.forest, bg = cl.light }) => (
  <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, color, backgroundColor: bg, fontFamily: fonts.body, letterSpacing: 0.5 }}>{children}</span>
);

const Button = ({ children, onClick, variant = "primary", full, style: s, icon, disabled }) => {
  const base = { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: full ? "14px 24px" : "10px 20px", borderRadius: 12, fontSize: 14, fontWeight: 600, fontFamily: fonts.body, cursor: disabled ? "default" : "pointer", border: "none", transition: "all 0.2s", width: full ? "100%" : "auto", opacity: disabled ? 0.5 : 1 };
  const variants = {
    primary: { backgroundColor: cl.forestMid, color: "#fff" },
    outline: { backgroundColor: "transparent", color: cl.forestMid, border: `1.5px solid ${cl.forestMid}` },
    ghost: { backgroundColor: "transparent", color: cl.textMuted },
    soft: { backgroundColor: cl.light, color: cl.forestMid },
    accent: { backgroundColor: cl.goldWarm, color: "#fff" },
    warm: { backgroundColor: cl.warmPink, color: "#fff" },
  };
  return <button onClick={disabled ? undefined : onClick} style={{ ...base, ...variants[variant], ...s }}>{icon}{children}</button>;
};

const Card = ({ children, style: s, onClick }) => (
  <div onClick={onClick} style={{ backgroundColor: cl.card, borderRadius: 16, padding: 20, border: `1px solid ${cl.border}`, transition: "all 0.2s", cursor: onClick ? "pointer" : "default", ...s }}>{children}</div>
);

const ScoreBadge = ({ score }) => {
  const col = score >= 80 ? cl.canopy : score >= 60 ? cl.goldWarm : cl.danger;
  const bg = score >= 80 ? cl.light : score >= 60 ? cl.accentLight : cl.dangerLight;
  return <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: "50%", backgroundColor: bg, border: `2.5px solid ${col}`, fontFamily: fonts.display, fontSize: 18, fontWeight: 700, color: col }}>{score}</div>;
};

const TabBar = ({ tabs, active, onChange }) => (
  <div style={{ display: "flex", backgroundColor: cl.card, borderTop: `1px solid ${cl.border}`, padding: "6px 0 env(safe-area-inset-bottom, 8px)", position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100 }}>
    {tabs.map((t) => (
      <button key={t.id} onClick={() => onChange(t.id)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, padding: "8px 0", border: "none", background: "none", cursor: "pointer", color: active === t.id ? cl.forestMid : cl.textLight, fontSize: 10, fontFamily: fonts.body, fontWeight: active === t.id ? 700 : 400 }}>
        {t.icon({ size: 20, color: active === t.id ? cl.forestMid : cl.textLight })}
        {t.label}
      </button>
    ))}
  </div>
);

const Header = ({ title, subtitle }) => (
  <div style={{ padding: "16px 0 12px" }}>
    <h1 style={{ fontFamily: fonts.display, fontSize: 22, fontWeight: 700, color: cl.text, margin: 0 }}>{title}</h1>
    {subtitle && <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: "2px 0 0" }}>{subtitle}</p>}
  </div>
);

const NavBar = ({ onBack, rightLabel }) => (
  <div style={{ padding: "12px 16px 0", display: "flex", alignItems: "center", gap: 12 }}>
    <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>{Icons.back({ size: 20, color: cl.textMuted })}</button>
    <KomorebiLogo size={28} />
    <span style={{ fontFamily: fonts.display, fontSize: 16, fontWeight: 700, color: cl.text }}>Komorebi</span>
    {rightLabel && <span style={{ fontFamily: fonts.body, fontSize: 11, color: cl.goldWarm, fontWeight: 600, marginLeft: "auto" }}>{rightLabel}</span>}
  </div>
);

const StarRating = ({ rating }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 2 }}>
    {[1,2,3,4,5].map(i => (
      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i <= Math.floor(rating) ? cl.goldWarm : "none"} stroke={cl.goldWarm} strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
    ))}
    <span style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, marginLeft: 4 }}>{rating}</span>
  </span>
);

const KomorebiLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="24" fill={cl.light} />
    <path d="M24 10c-2 6-8 12-8 18a8 8 0 0 0 16 0c0-6-6-12-8-18z" fill={cl.forestMid} opacity="0.85" />
    <path d="M24 10c1 6 6 12 6 18" stroke={cl.forest} strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M24 16v16" stroke="#fff" strokeWidth="1" opacity="0.35" />
    <circle cx="30" cy="14" r="2" fill={cl.gold} opacity="0.7" />
    <circle cx="34" cy="10" r="1.2" fill={cl.gold} opacity="0.5" />
    <circle cx="17" cy="11" r="1.5" fill={cl.gold} opacity="0.6" />
  </svg>
);

const LightRays = () => (
  <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 400 700" preserveAspectRatio="xMidYMin slice">
    <defs>
      <radialGradient id="glow" cx="50%" cy="0%" r="70%"><stop offset="0%" stopColor={cl.lightGold} stopOpacity="0.6" /><stop offset="50%" stopColor={cl.canopyPale} stopOpacity="0.2" /><stop offset="100%" stopColor={cl.bg} stopOpacity="0" /></radialGradient>
      <linearGradient id="ray1" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stopColor={cl.lightGold} stopOpacity="0.5" /><stop offset="100%" stopColor={cl.lightGold} stopOpacity="0" /></linearGradient>
      <linearGradient id="ray2" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stopColor="#fff" stopOpacity="0.3" /><stop offset="100%" stopColor="#fff" stopOpacity="0" /></linearGradient>
      <linearGradient id="canopyG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={cl.forest} stopOpacity="0.9" /><stop offset="50%" stopColor={cl.forestMid} stopOpacity="0.7" /><stop offset="100%" stopColor={cl.canopy} stopOpacity="0.4" /></linearGradient>
    </defs>
    <rect width="400" height="700" fill="url(#glow)" />
    <ellipse cx="200" cy="-30" rx="260" ry="130" fill="url(#canopyG)" />
    <ellipse cx="100" cy="-10" rx="120" ry="90" fill={cl.forest} opacity="0.5" />
    <ellipse cx="300" cy="-20" rx="140" ry="100" fill={cl.forestMid} opacity="0.4" />
    <ellipse cx="200" cy="10" rx="80" ry="50" fill={cl.forestLight} opacity="0.3" />
    <polygon points="160,-10 130,400 170,400" fill="url(#ray1)" opacity="0.4" />
    <polygon points="220,-10 200,450 240,450" fill="url(#ray2)" opacity="0.35" />
    <polygon points="280,-10 310,370 340,370" fill="url(#ray1)" opacity="0.25" />
    <polygon points="120,-10 70,350 100,350" fill="url(#ray2)" opacity="0.2" />
    <polygon points="330,-10 360,320 380,320" fill="url(#ray1)" opacity="0.15" />
    <circle cx="150" cy="140" r="3" fill={cl.lightGold} opacity="0.5" />
    <circle cx="250" cy="200" r="2" fill={cl.gold} opacity="0.4" />
    <circle cx="180" cy="260" r="2.5" fill={cl.lightGold} opacity="0.35" />
    <circle cx="300" cy="180" r="1.8" fill="#fff" opacity="0.3" />
    <circle cx="120" cy="220" r="2" fill={cl.gold} opacity="0.3" />
  </svg>
);

const RankBadge = ({ rank }) => {
  const cfg = { "ゴールド": { bg: "#FFF4D6", color: "#B8860B", border: "#DAA520" }, "シルバー": { bg: "#F0F0F0", color: "#6B6B6B", border: "#A0A0A0" }, "ブロンズ": { bg: "#FDE8D8", color: "#A0522D", border: "#CD853F" } };
  const r = cfg[rank] || cfg["ブロンズ"];
  return <span style={{ display: "inline-block", padding: "2px 10px", borderRadius: 20, fontSize: 10, fontWeight: 700, color: r.color, backgroundColor: r.bg, border: `1px solid ${r.border}`, fontFamily: fonts.body }}>{rank}</span>;
};

// ═══════════════════════════════════════
// SIGNUP FLOW
// ═══════════════════════════════════════
const SignupFlow = ({ onComplete, onBack }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", address: "", type: "", familyName: "", familyPhone: "" });
  const totalSteps = 3;

  const set = (key, val) => setForm(p => ({ ...p, [key]: val }));

  const ProgressBar = () => (
    <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 24 }}>
      {[1, 2, 3].map(s => (
        <div key={s} style={{ flex: 1, height: 4, borderRadius: 2, backgroundColor: s <= step ? cl.forestMid : cl.border, transition: "all 0.3s" }} />
      ))}
      <span style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, marginLeft: 8 }}>{step}/{totalSteps}</span>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: cl.bg }}>
      <div style={{ padding: "16px 20px 0", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={step === 1 ? onBack : () => setStep(s => s - 1)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
          {Icons.back({ size: 20, color: cl.textMuted })}
        </button>
        <KomorebiLogo size={28} />
        <span style={{ fontFamily: fonts.display, fontSize: 16, fontWeight: 700, color: cl.text }}>新規お申し込み</span>
      </div>

      <div style={{ padding: "16px 24px 40px", maxWidth: 400, margin: "0 auto" }}>
        <ProgressBar />

        {step === 1 && (
          <div>
            <h2 style={{ fontFamily: fonts.display, fontSize: 22, color: cl.text, margin: "0 0 6px" }}>お客様の情報</h2>
            <p style={{ fontFamily: fonts.body, fontSize: 13, color: cl.textMuted, margin: "0 0 24px" }}>サービスをご利用されるご本人の情報をご入力ください</p>

            {[
              { key: "name", label: "お名前", ph: "田中 花子", type: "text" },
              { key: "phone", label: "電話番号", ph: "076-XXX-XXXX", type: "tel" },
              { key: "address", label: "ご住所", ph: "金沢市野町3丁目...", type: "text" },
            ].map(({ key, label, ph, type }) => (
              <div key={key} style={{ marginBottom: 16 }}>
                <label style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: cl.text, display: "block", marginBottom: 6 }}>{label}</label>
                <input value={form[key]} onChange={e => set(key, e.target.value)} placeholder={ph} type={type} style={{
                  width: "100%", padding: "14px 16px", borderRadius: 12, border: `1.5px solid ${cl.border}`,
                  fontFamily: fonts.body, fontSize: 16, color: cl.text, backgroundColor: "#fff",
                  outline: "none", boxSizing: "border-box", transition: "border 0.2s",
                }} onFocus={e => e.target.style.borderColor = cl.forestMid} onBlur={e => e.target.style.borderColor = cl.border} />
              </div>
            ))}

            <Button full onClick={() => setStep(2)} style={{ marginTop: 8, padding: "16px 24px", fontSize: 16 }}>
              次へ進む
            </Button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontFamily: fonts.display, fontSize: 22, color: cl.text, margin: "0 0 6px" }}>サービスの選択</h2>
            <p style={{ fontFamily: fonts.body, fontSize: 13, color: cl.textMuted, margin: "0 0 24px" }}>ご希望のプランをお選びください</p>

            {[
              { id: "monthly", name: "月額プラン", price: "¥8,000/月", desc: "月1回の庭手入れ＋状態レポート＋見守り", badge: "人気", color: cl.forestMid },
              { id: "annual", name: "年間プラン", price: "¥84,000/年", desc: "月額より2ヶ月分お得！春〜秋の庭手入れ＋冬の雪対応＋通年見守り", badge: "おすすめ", color: cl.goldWarm },
              { id: "trial", name: "お試し（初回のみ）", price: "¥3,000", desc: "まずは1回お試し。お庭の診断レポート付き", badge: null, color: cl.canopy },
            ].map(plan => (
              <div key={plan.id} onClick={() => set("type", plan.id)} style={{
                padding: 20, borderRadius: 14, marginBottom: 12, cursor: "pointer",
                border: `2px solid ${form.type === plan.id ? plan.color : cl.border}`,
                backgroundColor: form.type === plan.id ? `${plan.color}08` : "#fff",
                transition: "all 0.2s", position: "relative",
              }}>
                {plan.badge && (
                  <span style={{
                    position: "absolute", top: -8, right: 16, padding: "2px 10px", borderRadius: 10,
                    fontSize: 10, fontWeight: 700, color: "#fff", backgroundColor: plan.color, fontFamily: fonts.body,
                  }}>{plan.badge}</span>
                )}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ fontFamily: fonts.body, fontSize: 15, fontWeight: 700, color: cl.text, margin: 0 }}>{plan.name}</p>
                    <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: "4px 0 0", lineHeight: 1.5 }}>{plan.desc}</p>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 12 }}>
                    <p style={{ fontFamily: fonts.display, fontSize: 18, fontWeight: 700, color: plan.color, margin: 0 }}>{plan.price.split("/")[0]}</p>
                    {plan.price.includes("/") && <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>/{plan.price.split("/")[1]}</p>}
                  </div>
                </div>
                {form.type === plan.id && (
                  <div style={{ position: "absolute", top: 16, left: -1, width: 24, height: 24, borderRadius: "50%", backgroundColor: plan.color, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: -12 }}>
                    {Icons.check({ size: 14, color: "#fff" })}
                  </div>
                )}
              </div>
            ))}

            <Button full onClick={() => setStep(3)} disabled={!form.type} style={{ marginTop: 8, padding: "16px 24px", fontSize: 16 }}>
              次へ進む
            </Button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{ fontFamily: fonts.display, fontSize: 22, color: cl.text, margin: "0 0 6px" }}>ご家族の連絡先（任意）</h2>
            <p style={{ fontFamily: fonts.body, fontSize: 13, color: cl.textMuted, margin: "0 0 20px" }}>離れて暮らすご家族がいる場合、レポートを共有できます</p>

            <Card style={{ marginBottom: 20, background: cl.accentLight, borderColor: cl.goldWarm, padding: 14 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                {Icons.users({ size: 18, color: cl.goldWarm })}
                <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.text, margin: 0, lineHeight: 1.6 }}>
                  ご家族を登録すると、お庭の状態レポートが自動で届き、お支払いの代行もできるようになります
                </p>
              </div>
            </Card>

            {[
              { key: "familyName", label: "ご家族のお名前", ph: "田中 一郎" },
              { key: "familyPhone", label: "ご家族の電話番号 または メール", ph: "090-XXXX-XXXX" },
            ].map(({ key, label, ph }) => (
              <div key={key} style={{ marginBottom: 16 }}>
                <label style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: cl.text, display: "block", marginBottom: 6 }}>{label}</label>
                <input value={form[key]} onChange={e => set(key, e.target.value)} placeholder={ph} style={{
                  width: "100%", padding: "14px 16px", borderRadius: 12, border: `1.5px solid ${cl.border}`,
                  fontFamily: fonts.body, fontSize: 16, color: cl.text, backgroundColor: "#fff",
                  outline: "none", boxSizing: "border-box",
                }} onFocus={e => e.target.style.borderColor = cl.forestMid} onBlur={e => e.target.style.borderColor = cl.border} />
              </div>
            ))}

            {/* Summary */}
            <Card style={{ marginBottom: 20, backgroundColor: cl.bg }}>
              <h4 style={{ fontFamily: fonts.display, fontSize: 14, margin: "0 0 10px", color: cl.text }}>お申し込み内容</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  { label: "お名前", value: form.name || "未入力" },
                  { label: "電話番号", value: form.phone || "未入力" },
                  { label: "ご住所", value: form.address || "未入力" },
                  { label: "プラン", value: form.type === "monthly" ? "月額プラン（¥8,000/月）" : form.type === "annual" ? "年間プラン（¥84,000/年）" : "お試し（¥3,000）" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: `1px solid ${cl.border}` }}>
                    <span style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted }}>{item.label}</span>
                    <span style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: cl.text }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Button full onClick={() => onComplete(form)} style={{ padding: "16px 24px", fontSize: 16, backgroundColor: cl.canopy }}>
              申し込みを完了する
            </Button>
            <button onClick={() => setStep(3)} style={{ display: "block", width: "100%", textAlign: "center", background: "none", border: "none", cursor: "pointer", fontFamily: fonts.body, fontSize: 13, color: cl.textMuted, marginTop: 12, padding: 8 }}>
              ご家族の登録はあとでする
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════
// SIGNUP COMPLETE
// ═══════════════════════════════════════
const SignupComplete = ({ form, onGoHome }) => (
  <div style={{ minHeight: "100vh", backgroundColor: cl.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, position: "relative", overflow: "hidden" }}>
    <LightRays />
    <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 340 }}>
      <div style={{
        width: 80, height: 80, borderRadius: "50%", backgroundColor: cl.light,
        display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
        border: `3px solid ${cl.canopy}`,
      }}>
        {Icons.check({ size: 40, color: cl.canopy })}
      </div>
      <h1 style={{ fontFamily: fonts.display, fontSize: 26, color: cl.forest, margin: "0 0 8px" }}>お申し込み完了！</h1>
      <p style={{ fontFamily: fonts.body, fontSize: 14, color: cl.forestMid, margin: "0 0 24px", lineHeight: 1.6 }}>
        {form.name || "お客"}様、ありがとうございます。<br />担当者より2営業日以内にご連絡いたします。
      </p>

      <Card style={{ marginBottom: 20, textAlign: "left" }}>
        <h4 style={{ fontFamily: fonts.display, fontSize: 14, margin: "0 0 12px", color: cl.text }}>今後の流れ</h4>
        {[
          { step: "1", text: "担当者からお電話でご挨拶", time: "2営業日以内" },
          { step: "2", text: "初回お庭訪問・状態診断", time: "1週間以内" },
          { step: "3", text: "AIレポート配信開始", time: "初回訪問後" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < 2 ? `1px solid ${cl.border}` : "none" }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%", backgroundColor: cl.forestMid,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <span style={{ color: "#fff", fontFamily: fonts.body, fontSize: 12, fontWeight: 700 }}>{item.step}</span>
            </div>
            <div>
              <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text, margin: 0 }}>{item.text}</p>
              <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0 }}>{item.time}</p>
            </div>
          </div>
        ))}
      </Card>

      <Button full onClick={onGoHome} style={{ padding: "16px 24px", fontSize: 15 }}>ホームに戻る</Button>
    </div>
  </div>
);

// ═══════════════════════════════════════
// ROLE SELECT (Landing Page)
// ═══════════════════════════════════════
const RoleSelect = ({ onSelect, onSignup }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: cl.bg, padding: "24px 20px", position: "relative", overflow: "hidden" }}>
    <LightRays />

    {/* Hero */}
    <div style={{ position: "relative", zIndex: 2, textAlign: "center", marginTop: 36, marginBottom: 24 }}>
      <KomorebiLogo size={60} />
      <h1 style={{ fontFamily: fonts.display, fontSize: 32, color: cl.forest, margin: "12px 0 0", fontWeight: 700, textShadow: "0 1px 8px rgba(255,255,255,0.6)" }}>Komorebi</h1>
      <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.forestLight, margin: "4px 0 0", letterSpacing: 3, fontWeight: 500 }}>こもれび</p>
      <p style={{ fontFamily: fonts.body, fontSize: 13, color: cl.forestMid, margin: "6px 0 0", opacity: 0.8 }}>安心の庭 ─ 暮らしサポート</p>
    </div>

    <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 14 }}>

      {/* ===== ① 新規お申し込み ===== */}
      <div onClick={onSignup} style={{
        cursor: "pointer", borderRadius: 18, overflow: "hidden",
        border: `2px solid ${cl.canopy}`, boxShadow: "0 4px 16px rgba(45,106,79,0.12)",
        backgroundColor: "#fff",
      }}>
        <div style={{ background: `linear-gradient(135deg, ${cl.forestMid}, ${cl.canopy})`, padding: "22px 20px", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: 26 }}>🌿</span>
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: fonts.display, fontSize: 20, color: "#fff", margin: 0, fontWeight: 700 }}>新規お申し込み</h2>
            <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.canopyPale, margin: "3px 0 0" }}>お庭の手入れ・見守りサービスを始める</p>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {Icons.arrow({ size: 16, color: "#fff" })}
          </div>
        </div>
        <div style={{ padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
          {[{ icon: "🌿", text: "庭の手入れ" }, { icon: "👁", text: "見守り" }, { icon: "❄️", text: "雪対応" }].map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ fontSize: 13 }}>{f.icon}</span>
              <span style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted }}>{f.text}</span>
            </div>
          ))}
          <span style={{ fontFamily: fonts.body, fontSize: 11, color: cl.forestMid, fontWeight: 600 }}>初回 ¥3,000〜</span>
        </div>
      </div>

      {/* ===== ② ご利用者様 ===== */}
      <div style={{
        borderRadius: 18, overflow: "hidden", border: `1.5px solid ${cl.border}`,
        backgroundColor: "rgba(255,255,255,0.95)",
      }}>
        <div style={{ padding: "14px 20px", borderBottom: `1px solid ${cl.border}`, display: "flex", alignItems: "center", gap: 10 }}>
          {Icons.home({ size: 18, color: cl.forestMid })}
          <h3 style={{ fontFamily: fonts.display, fontSize: 16, color: cl.text, margin: 0, fontWeight: 700 }}>ご利用者様</h3>
          <span style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, marginLeft: "auto" }}>会員の方</span>
        </div>
        <div style={{ display: "flex" }}>
          {[
            { role: "customer", icon: Icons.home, color: cl.forestMid, label: "ご本人様", desc: "お庭の管理" },
            { role: "family", icon: Icons.users, color: cl.canopy, label: "ご家族様", desc: "レポート確認" },
          ].map(({ role, icon, color, label, desc }, i) => (
            <div key={role} onClick={() => onSelect(role)} style={{
              flex: 1, cursor: "pointer", padding: "18px 14px", textAlign: "center",
              borderRight: i === 0 ? `1px solid ${cl.border}` : "none",
              transition: "background 0.2s",
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: `${color}12`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
                {icon({ size: 20, color })}
              </div>
              <p style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: cl.text, margin: 0 }}>{label}</p>
              <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: "3px 0 0" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== ③ ワーカー ===== */}
      <div style={{
        borderRadius: 18, overflow: "hidden", border: `1.5px solid ${cl.border}`,
        backgroundColor: "rgba(255,255,255,0.95)",
      }}>
        <div style={{ padding: "14px 20px", borderBottom: `1px solid ${cl.border}`, display: "flex", alignItems: "center", gap: 10 }}>
          {Icons.heart({ size: 18, color: cl.warmPink })}
          <h3 style={{ fontFamily: fonts.display, fontSize: 16, color: cl.text, margin: 0, fontWeight: 700 }}>ワーカー</h3>
          <span style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, marginLeft: "auto" }}>働く・手伝う方</span>
        </div>
        <div style={{ display: "flex" }}>
          {[
            { role: "helper", emoji: "🤝", color: cl.warmPink, label: "お手伝い", desc: "ケアマネ・ご近所" },
            { role: "proworker", emoji: "💼", color: "#E67E22", label: "副業ワーカー", desc: "ギグワーカー" },
            { role: "student", emoji: "⛄", color: "#5B9BD5", label: "高校生", desc: "ちょこっとバイト" },
          ].map(({ role, emoji, color, label, desc }, i) => (
            <div key={role} onClick={() => onSelect(role)} style={{
              flex: 1, cursor: "pointer", padding: "16px 8px", textAlign: "center",
              borderRight: i < 2 ? `1px solid ${cl.border}` : "none",
            }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, backgroundColor: `${color}12`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 6px" }}>
                <span style={{ fontSize: 18 }}>{emoji}</span>
              </div>
              <p style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: cl.text, margin: 0 }}>{label}</p>
              <p style={{ fontFamily: fonts.body, fontSize: 9, color: cl.textMuted, margin: "2px 0 0" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Admin - small link */}
      <div onClick={() => onSelect("admin")} style={{
        cursor: "pointer", textAlign: "center", padding: "10px 0",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
      }}>
        {Icons.settings({ size: 14, color: cl.textLight })}
        <span style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textLight }}>管理者ログイン</span>
      </div>
    </div>

    <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textLight, marginTop: 16, position: "relative", zIndex: 2 }}>※ デモ用プロトタイプ ─ 金沢市</p>
  </div>
);

// ═══════════════════════════════════════
// CUSTOMER VIEW
// ═══════════════════════════════════════

// Emergency AI analysis mock
const emergencyCategories = [
  { id: "water", keyword: ["水漏れ", "水", "蛇口", "トイレ", "排水"], icon: Icons.droplet, color: "#2B7A9E", label: "水道トラブル", bizId: 1 },
  { id: "elec", keyword: ["電気", "停電", "ブレーカー", "コンセント", "照明"], icon: Icons.zap, color: "#D4A030", label: "電気トラブル", bizId: 2 },
  { id: "key", keyword: ["鍵", "ロック", "閉じ込め", "防犯"], icon: Icons.shield, color: "#8B6B8E", label: "鍵・防犯トラブル", bizId: 4 },
  { id: "repair", keyword: ["壊れ", "修理", "ドア", "窓", "家具"], icon: Icons.wrench, color: "#6B8E6B", label: "修理・軽作業", bizId: 3 },
  { id: "garden", keyword: ["庭", "木", "倒れ", "虫", "蜂", "枝"], icon: Icons.leaf, color: cl.forestMid, label: "お庭の緊急", bizId: null },
];

const CustomerView = ({ onBack }) => {
  const [tab, setTab] = useState("home");
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [selectedBiz, setSelectedBiz] = useState(null);
  const [requested, setRequested] = useState({});

  // Emergency states
  const [emergencyStep, setEmergencyStep] = useState(0); // 0=hidden, 1=input, 2=analyzing, 3=result, 4=dispatched
  const [emergencyText, setEmergencyText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [emergencyPhoto, setEmergencyPhoto] = useState(false);
  const [emergencyResult, setEmergencyResult] = useState(null);

  const analyzeEmergency = () => {
    setEmergencyStep(2);
    setTimeout(() => {
      const text = emergencyText.toLowerCase();
      let matched = emergencyCategories.find(c => c.keyword.some(k => text.includes(k)));
      if (!matched) matched = emergencyCategories[3]; // default to repair
      const biz = localBusinesses.find(b => b.id === matched.bizId) || localBusinesses[2];
      setEmergencyResult({
        category: matched,
        business: biz,
        severity: text.includes("緊急") || text.includes("すぐ") || text.includes("水漏れ") ? "緊急" : "通常",
        aiAdvice: matched.id === "water"
          ? "水漏れの場合、まず元栓を閉めてください。被害の拡大を防げます。業者が到着するまで、タオルで応急処置をお願いします。"
          : matched.id === "elec"
          ? "感電の危険があります。濡れた手で触らないでください。ブレーカーが落ちている場合は、まず電化製品のプラグを抜いてからブレーカーを上げてください。"
          : matched.id === "key"
          ? "慌てずにお待ちください。窓やバックドアが開いていないか確認してください。業者が最短20分で到着します。"
          : matched.id === "garden"
          ? "危険な場合は近づかないでください。Komorebiの担当が優先対応いたします。"
          : "安全を確保してください。詳しい状況は業者が確認いたします。",
      });
      setEmergencyStep(3);
    }, 2500);
  };

  const handleVoice = () => {
    setIsRecording(true);
    // Simulate voice recording
    setTimeout(() => {
      setIsRecording(false);
      setEmergencyText("台所の蛇口から水漏れしています。床が濡れてきました。すぐに来てほしいです。");
    }, 3000);
  };

  const handleDispatch = () => {
    setEmergencyStep(4);
  };

  const resetEmergency = () => {
    setEmergencyStep(0);
    setEmergencyText("");
    setEmergencyPhoto(false);
    setEmergencyResult(null);
  };

  return (
    <div style={{ backgroundColor: cl.bg, minHeight: "100vh", paddingBottom: 80 }}>
      <NavBar onBack={onBack} />

      {/* ─── EMERGENCY OVERLAY ─── */}
      {emergencyStep > 0 && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 200, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "flex-end" }}>
          <div style={{
            width: "100%", backgroundColor: cl.card, borderRadius: "24px 24px 0 0",
            maxHeight: "92vh", overflowY: "auto", padding: "8px 0 0",
          }}>
            {/* Drag handle */}
            <div style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: cl.border, margin: "0 auto 12px" }} />

            <div style={{ padding: "0 24px 32px" }}>

              {/* Step 1: Input */}
              {emergencyStep === 1 && (
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                    <h2 style={{ fontFamily: fonts.display, fontSize: 22, color: cl.danger, margin: 0 }}>緊急サポート</h2>
                    <button onClick={resetEmergency} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: fonts.body, fontSize: 13, color: cl.textMuted }}>✕ 閉じる</button>
                  </div>

                  <p style={{ fontFamily: fonts.body, fontSize: 14, color: cl.text, margin: "0 0 20px", lineHeight: 1.7 }}>
                    お困りの状況を教えてください。<br />AIが最適な対応方法と業者をご案内します。
                  </p>

                  {/* Voice Input - Big Button */}
                  <div onClick={!isRecording ? handleVoice : undefined} style={{
                    padding: 28, borderRadius: 20, textAlign: "center", cursor: "pointer",
                    background: isRecording
                      ? `linear-gradient(135deg, ${cl.danger}, #E07A5F)`
                      : `linear-gradient(135deg, ${cl.dangerLight}, #fff)`,
                    border: `2px solid ${isRecording ? cl.danger : cl.border}`,
                    marginBottom: 16, transition: "all 0.3s",
                  }}>
                    <div style={{
                      width: 64, height: 64, borderRadius: "50%", margin: "0 auto 12px",
                      backgroundColor: isRecording ? "#fff" : cl.danger,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: isRecording ? "0 0 0 8px rgba(199,91,58,0.2), 0 0 0 16px rgba(199,91,58,0.1)" : "none",
                      transition: "all 0.3s",
                    }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={isRecording ? cl.danger : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" y1="19" x2="12" y2="23" />
                        <line x1="8" y1="23" x2="16" y2="23" />
                      </svg>
                    </div>
                    <p style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 700, color: isRecording ? "#fff" : cl.danger, margin: "0 0 4px" }}>
                      {isRecording ? "聞いています..." : "話して伝える"}
                    </p>
                    <p style={{ fontFamily: fonts.body, fontSize: 12, color: isRecording ? "rgba(255,255,255,0.8)" : cl.textMuted, margin: 0 }}>
                      {isRecording ? "お話しください" : "ボタンを押して、状況をお話しください"}
                    </p>
                  </div>

                  {/* Or divider */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "4px 0 16px" }}>
                    <div style={{ flex: 1, height: 1, backgroundColor: cl.border }} />
                    <span style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted }}>または</span>
                    <div style={{ flex: 1, height: 1, backgroundColor: cl.border }} />
                  </div>

                  {/* Text Input */}
                  <textarea
                    value={emergencyText}
                    onChange={e => setEmergencyText(e.target.value)}
                    placeholder="例：台所の水が止まらない、鍵をなくした..."
                    rows={3}
                    style={{
                      width: "100%", padding: 16, borderRadius: 14, border: `1.5px solid ${cl.border}`,
                      fontFamily: fonts.body, fontSize: 15, color: cl.text, backgroundColor: cl.bg,
                      outline: "none", boxSizing: "border-box", resize: "none", lineHeight: 1.6,
                    }}
                    onFocus={e => e.target.style.borderColor = cl.danger}
                    onBlur={e => e.target.style.borderColor = cl.border}
                  />

                  {/* Photo Upload */}
                  <div style={{ display: "flex", gap: 10, marginTop: 14, marginBottom: 20 }}>
                    <div onClick={() => setEmergencyPhoto(true)} style={{
                      flex: 1, padding: 14, borderRadius: 12, border: `1.5px dashed ${emergencyPhoto ? cl.canopy : cl.border}`,
                      backgroundColor: emergencyPhoto ? cl.light : cl.bg, textAlign: "center", cursor: "pointer",
                    }}>
                      {emergencyPhoto ? (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                          {Icons.check({ size: 16, color: cl.canopy })}
                          <span style={{ fontFamily: fonts.body, fontSize: 12, color: cl.canopy, fontWeight: 600 }}>写真添付済み</span>
                        </div>
                      ) : (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                          {Icons.camera({ size: 16, color: cl.textMuted })}
                          <span style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted }}>写真を撮って添付（任意）</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Button full onClick={analyzeEmergency} disabled={!emergencyText.trim()} style={{
                    padding: "16px 24px", fontSize: 16,
                    backgroundColor: emergencyText.trim() ? cl.danger : cl.border,
                  }}>
                    AIに相談する
                  </Button>
                </div>
              )}

              {/* Step 2: Analyzing */}
              {emergencyStep === 2 && (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: "50%", backgroundColor: cl.dangerLight,
                    display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
                    border: `3px solid ${cl.danger}`,
                  }}>
                    {Icons.zap({ size: 32, color: cl.danger })}
                  </div>
                  <h3 style={{ fontFamily: fonts.display, fontSize: 20, color: cl.text, margin: "0 0 16px" }}>AIが分析しています</h3>
                  {[
                    "状況を理解しています...",
                    "最適な対応方法を検索中...",
                    "対応可能な業者を確認中...",
                  ].map((msg, i) => (
                    <p key={i} style={{ fontFamily: fonts.body, fontSize: 13, color: cl.textMuted, margin: "8px 0" }}>{msg}</p>
                  ))}
                </div>
              )}

              {/* Step 3: Result */}
              {emergencyStep === 3 && emergencyResult && (
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <h2 style={{ fontFamily: fonts.display, fontSize: 20, color: cl.text, margin: 0 }}>AI診断結果</h2>
                    <button onClick={resetEmergency} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: fonts.body, fontSize: 13, color: cl.textMuted }}>✕ 閉じる</button>
                  </div>

                  {/* Category & Severity */}
                  <Card style={{
                    marginBottom: 14, padding: 18,
                    background: emergencyResult.severity === "緊急"
                      ? `linear-gradient(135deg, ${cl.dangerLight}, #fff)`
                      : `linear-gradient(135deg, ${cl.accentLight}, #fff)`,
                    borderColor: emergencyResult.severity === "緊急" ? cl.danger : cl.goldWarm,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{
                        width: 52, height: 52, borderRadius: 14,
                        backgroundColor: `${emergencyResult.category.color}18`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {emergencyResult.category.icon({ size: 26, color: emergencyResult.category.color })}
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <p style={{ fontFamily: fonts.display, fontSize: 17, fontWeight: 700, color: cl.text, margin: 0 }}>{emergencyResult.category.label}</p>
                          <Badge
                            color={emergencyResult.severity === "緊急" ? cl.danger : cl.goldWarm}
                            bg={emergencyResult.severity === "緊急" ? cl.dangerLight : cl.accentLight}
                          >{emergencyResult.severity}</Badge>
                        </div>
                        <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: 0 }}>AIが状況を分析しました</p>
                      </div>
                    </div>
                  </Card>

                  {/* Your input */}
                  <Card style={{ marginBottom: 14, backgroundColor: cl.bg, padding: 14 }}>
                    <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "0 0 4px" }}>あなたの相談内容</p>
                    <p style={{ fontFamily: fonts.body, fontSize: 13, color: cl.text, margin: 0, lineHeight: 1.6 }}>「{emergencyText}」</p>
                  </Card>

                  {/* AI Advice */}
                  <Card style={{ marginBottom: 14, borderLeft: `4px solid ${cl.forestMid}`, background: `${cl.forestMid}06` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      {Icons.zap({ size: 16, color: cl.forestMid })}
                      <span style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.forestMid }}>AIからのアドバイス</span>
                    </div>
                    <p style={{ fontFamily: fonts.body, fontSize: 13, color: cl.text, margin: 0, lineHeight: 1.8 }}>
                      {emergencyResult.aiAdvice}
                    </p>
                  </Card>

                  {/* Recommended Business */}
                  <Card style={{ marginBottom: 20, borderColor: emergencyResult.category.color }}>
                    <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "0 0 10px" }}>おすすめの対応業者</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 12,
                        backgroundColor: `${emergencyResult.category.color}12`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {emergencyResult.category.icon({ size: 22, color: emergencyResult.category.color })}
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: fonts.body, fontSize: 15, fontWeight: 700, color: cl.text, margin: 0 }}>{emergencyResult.business.name}</p>
                        <StarRating rating={emergencyResult.business.rating} />
                        <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                          <Badge color={cl.danger} bg={cl.dangerLight}>{emergencyResult.business.response}</Badge>
                          <Badge>{emergencyResult.business.price}</Badge>
                        </div>
                      </div>
                    </div>

                    <Button full onClick={handleDispatch} style={{
                      padding: "16px 24px", fontSize: 16, backgroundColor: cl.danger,
                    }} icon={Icons.phone({ size: 18, color: "#fff" })}>
                      この業者を手配する
                    </Button>
                    <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: "10px 0 0", textAlign: "center" }}>
                      ※ ご家族にも通知が送られます
                    </p>
                  </Card>
                </div>
              )}

              {/* Step 4: Dispatched */}
              {emergencyStep === 4 && emergencyResult && (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: "50%", backgroundColor: cl.light,
                    display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
                    border: `3px solid ${cl.canopy}`,
                  }}>
                    {Icons.check({ size: 40, color: cl.canopy })}
                  </div>
                  <h2 style={{ fontFamily: fonts.display, fontSize: 22, color: cl.canopy, margin: "0 0 8px" }}>手配完了！</h2>
                  <p style={{ fontFamily: fonts.body, fontSize: 14, color: cl.text, margin: "0 0 24px", lineHeight: 1.7 }}>
                    <strong>{emergencyResult.business.name}</strong>に<br />連絡いたしました。
                  </p>

                  <Card style={{ textAlign: "left", marginBottom: 20 }}>
                    {[
                      { label: "業者", value: emergencyResult.business.name },
                      { label: "到着予定", value: emergencyResult.business.response },
                      { label: "ご家族への通知", value: "送信済み ✓" },
                      { label: "Komorebi担当", value: "状況を確認中" },
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 3 ? `1px solid ${cl.border}` : "none" }}>
                        <span style={{ fontFamily: fonts.body, fontSize: 13, color: cl.textMuted }}>{item.label}</span>
                        <span style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text }}>{item.value}</span>
                      </div>
                    ))}
                  </Card>

                  <Card style={{ backgroundColor: cl.accentLight, borderColor: cl.goldWarm, textAlign: "left", padding: 14, marginBottom: 20 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      {Icons.zap({ size: 16, color: cl.goldWarm })}
                      <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.text, margin: 0, lineHeight: 1.6 }}>
                        {emergencyResult.aiAdvice}
                      </p>
                    </div>
                  </Card>

                  <Button full onClick={resetEmergency} variant="soft" style={{ fontSize: 15 }}>ホームに戻る</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {tab === "home" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="こんにちは、花子さん" subtitle="田中邸 ─ 金沢市野町3丁目" />

          {/* Emergency button - compact top-right */}
          <div style={{ position: "fixed", top: 14, right: 16, zIndex: 90 }}>
            <div onClick={() => setEmergencyStep(1)} style={{
              display: "flex", alignItems: "center", gap: 6, padding: "8px 14px",
              borderRadius: 24, cursor: "pointer", transition: "all 0.2s",
              backgroundColor: "#fff", border: `1.5px solid ${cl.danger}40`,
              boxShadow: "0 2px 8px rgba(199,91,58,0.1)",
            }}>
              {Icons.alert({ size: 16, color: cl.danger })}
              <span style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: cl.danger }}>緊急</span>
            </div>
          </div>

          <Card style={{ marginBottom: 16, background: `linear-gradient(135deg, ${cl.light}, #fff)` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <ScoreBadge score={82} />
              <div>
                <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text, margin: "0 0 4px" }}>お庭の状態：良好</p>
                <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0 }}>前回訪問：2026年4月5日</p>
                <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.forestMid, margin: "2px 0 0", fontWeight: 600 }}>次回予定：4月20日（日）</p>
              </div>
            </div>
          </Card>

          {/* Helpers */}
          <Card style={{ marginBottom: 16, background: cl.warmPinkLight, borderColor: cl.warmPink }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              {Icons.heart({ size: 18, color: cl.warmPink })}
              <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text, margin: 0 }}>あなたのお手伝いさん</p>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {["鈴木 美穂（ケアマネ）", "中村 よし子（ご近所）"].map((name, i) => (
                <div key={i} style={{ flex: 1, padding: 10, backgroundColor: "#fff", borderRadius: 10, textAlign: "center" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: cl.warmPink, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 6px" }}>
                    <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>{name[0]}</span>
                  </div>
                  <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.text, margin: 0, fontWeight: 600 }}>{name.split("（")[0]}</p>
                  <p style={{ fontFamily: fonts.body, fontSize: 9, color: cl.textMuted, margin: 0 }}>（{name.split("（")[1]}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: "8px 0 0", textAlign: "center" }}>
              お手伝いさんがあなたに代わって写真送信や状態報告をしてくれます
            </p>
          </Card>

          {/* Photo Upload */}
          <Card style={{ marginBottom: 16, textAlign: "center" }}>
            <h3 style={{ fontFamily: fonts.display, fontSize: 15, margin: "0 0 12px", color: cl.text }}>お庭の写真を送る</h3>
            {!uploaded ? (
              <>
                <div style={{ border: `2px dashed ${cl.border}`, borderRadius: 12, padding: "32px 20px", marginBottom: 12, backgroundColor: cl.bg }}>
                  {Icons.camera({ size: 36, color: cl.textLight })}
                  <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: "8px 0 0" }}>タップして写真を撮影・選択</p>
                </div>
                <Button onClick={() => { setUploading(true); setTimeout(() => { setUploading(false); setUploaded(true); }, 2000); }} full variant={uploading ? "ghost" : "primary"} icon={Icons.upload({ size: 16, color: "#fff" })}>
                  {uploading ? "送信中..." : "写真を送信する"}
                </Button>
              </>
            ) : (
              <div style={{ padding: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: cl.light, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>{Icons.check({ size: 24, color: cl.canopy })}</div>
                <p style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: cl.canopy, margin: "0 0 4px" }}>送信完了！</p>
                <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: 0 }}>AI診断結果は確認後にお知らせします</p>
              </div>
            )}
          </Card>

          <Card style={{ background: cl.accentLight, borderColor: cl.goldWarm }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              {Icons.sun({ size: 20, color: cl.goldWarm })}
              <div>
                <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text, margin: "0 0 4px" }}>春のお知らせ</p>
                <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: 0 }}>4月後半から雑草の成長が早まります。気になる箇所がありましたら、お写真をお送りください。</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {tab === "history" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="レポート履歴" />
          {mockReports.map((r, i) => (
            <Card key={i} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted }}>{r.date}</span>
                <ScoreBadge score={r.score} />
              </div>
              <p style={{ fontFamily: fonts.body, fontSize: 13, color: cl.text, margin: "0 0 10px", lineHeight: 1.6 }}>{r.summary}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Badge>雑草：{r.weeds}</Badge><Badge>剪定：{r.pruning}</Badge>
                <Badge color={r.risk === "中" ? cl.goldWarm : cl.canopy} bg={r.risk === "中" ? cl.accentLight : cl.light}>リスク：{r.risk}</Badge>
              </div>
            </Card>
          ))}
        </div>
      )}

      {tab === "business" && !selectedBiz && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="地域のお助け業者" subtitle="Komorebi 提携パートナー" />
          <Card style={{ marginBottom: 14, background: `linear-gradient(135deg, ${cl.light}, ${cl.accentLight})`, border: "none", padding: 16 }}>
            <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.forestMid, margin: 0, lineHeight: 1.6 }}>お庭以外のお困りごとも、Komorebiが信頼できる地域の業者をご紹介します。</p>
          </Card>
          {localBusinesses.map((biz) => (
            <Card key={biz.id} onClick={() => setSelectedBiz(biz)} style={{ marginBottom: 10, cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: `${biz.color}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{biz.icon({ size: 22, color: biz.color })}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <p style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: cl.text, margin: 0 }}>{biz.name}</p>
                    {Icons.arrow({ size: 14, color: cl.textLight })}
                  </div>
                  <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "2px 0" }}>{biz.category}</p>
                  <StarRating rating={biz.rating} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {tab === "business" && selectedBiz && (
        <div style={{ padding: "8px 20px 20px" }}>
          <button onClick={() => setSelectedBiz(null)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: fonts.body, fontSize: 13, color: cl.forestMid, padding: "8px 0", fontWeight: 600 }}>{Icons.back({ size: 16, color: cl.forestMid })} 一覧に戻る</button>
          <Card style={{ marginBottom: 16, overflow: "hidden" }}>
            <div style={{ background: `linear-gradient(135deg, ${selectedBiz.color}18, ${cl.light})`, margin: -20, marginBottom: 16, padding: 24, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>{selectedBiz.icon({ size: 26, color: selectedBiz.color })}</div>
              <div>
                <h2 style={{ fontFamily: fonts.display, fontSize: 18, margin: 0, color: cl.text }}>{selectedBiz.name}</h2>
                <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: "4px 0" }}>{selectedBiz.category}</p>
                <StarRating rating={selectedBiz.rating} /><span style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, marginLeft: 6 }}>（{selectedBiz.reviews}件）</span>
              </div>
            </div>
            <p style={{ fontFamily: fonts.body, fontSize: 13, color: cl.text, margin: "0 0 16px", lineHeight: 1.6 }}>{selectedBiz.desc}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16 }}>
              {[{ label: "対応時間", value: selectedBiz.response }, { label: "料金目安", value: selectedBiz.price }, { label: "電話番号", value: selectedBiz.phone }].map((item, i) => (
                <div key={i} style={{ padding: 10, backgroundColor: cl.bg, borderRadius: 10, textAlign: "center" }}>
                  <p style={{ fontFamily: fonts.body, fontSize: 9, color: cl.textMuted, margin: 0 }}>{item.label}</p>
                  <p style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 700, color: cl.text, margin: "4px 0 0" }}>{item.value}</p>
                </div>
              ))}
            </div>
            {!requested[selectedBiz.id] ? (
              <Button full onClick={() => setRequested(p => ({ ...p, [selectedBiz.id]: true }))} icon={Icons.phone({ size: 16, color: "#fff" })}>この業者に依頼する</Button>
            ) : (
              <div style={{ textAlign: "center", padding: 16, backgroundColor: cl.light, borderRadius: 12 }}>
                {Icons.check({ size: 20, color: cl.canopy })}
                <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.forestMid, margin: "8px 0 4px" }}>依頼を受け付けました</p>
                <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0 }}>担当者から折り返しご連絡いたします</p>
              </div>
            )}
          </Card>
        </div>
      )}

      {tab === "contact" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="お問い合わせ" />
          <Card style={{ textAlign: "center", padding: 32 }}>
            <KomorebiLogo size={48} />
            <h3 style={{ fontFamily: fonts.display, fontSize: 17, margin: "16px 0 8px", color: cl.text }}>Komorebi サポート</h3>
            <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: "0 0 20px" }}>お気軽にご連絡ください</p>
            <Button full icon={Icons.phone({ size: 16, color: "#fff" })}>電話する</Button>
            <div style={{ marginTop: 12 }}><Button full variant="outline">LINEで相談</Button></div>
          </Card>
        </div>
      )}

      <TabBar active={tab} onChange={(t) => { setTab(t); setSelectedBiz(null); }} tabs={[
        { id: "home", label: "ホーム", icon: Icons.home },
        { id: "history", label: "履歴", icon: Icons.calendar },
        { id: "business", label: "業者紹介", icon: Icons.grid },
        { id: "contact", label: "連絡", icon: Icons.phone },
      ]} />
    </div>
  );
};

// ═══════════════════════════════════════
// HELPER VIEW (ケアマネ・ご近所)
// ═══════════════════════════════════════
const HelperView = ({ onBack }) => {
  const [tab, setTab] = useState("home");
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState({});
  const [selectedReward, setSelectedReward] = useState(null);
  const [redeemed, setRedeemed] = useState({});
  const helper = mockHelpers[0]; // 鈴木 美穂

  const handleUpload = (clientName) => {
    setUploading(clientName);
    setTimeout(() => { setUploading(false); setUploaded(p => ({ ...p, [clientName]: true })); }, 1800);
  };

  return (
    <div style={{ backgroundColor: cl.bg, minHeight: "100vh", paddingBottom: 80 }}>
      <NavBar onBack={onBack} rightLabel="お手伝いさん" />

      {tab === "home" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title={`${helper.name}さん`} subtitle={`${helper.role} ─ ${helper.org}`} />

          {/* Points Card */}
          <Card style={{ marginBottom: 16, background: `linear-gradient(135deg, ${cl.warmPinkLight}, #fff6f0, #fff)`, borderColor: cl.warmPink, overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", backgroundColor: cl.warmPink, opacity: 0.08 }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  {Icons.heart({ size: 18, color: cl.warmPink })}
                  <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: 0 }}>親切ポイント</p>
                </div>
                <p style={{ fontFamily: fonts.display, fontSize: 36, fontWeight: 700, color: cl.warmPink, margin: 0, lineHeight: 1 }}>{helper.points.toLocaleString()}</p>
                <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "4px 0 0" }}>ポイント</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <RankBadge rank={helper.rank} />
                <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "8px 0 0" }}>お手伝い回数</p>
                <p style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: cl.text, margin: 0 }}>{helper.actions}回</p>
              </div>
            </div>
          </Card>

          {/* Point Actions Guide */}
          <Card style={{ marginBottom: 16 }}>
            <h3 style={{ fontFamily: fonts.display, fontSize: 14, margin: "0 0 12px", color: cl.text }}>ポイントの貯め方</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {pointActions.map((a, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", backgroundColor: cl.bg, borderRadius: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 18 }}>{a.icon}</span>
                    <span style={{ fontFamily: fonts.body, fontSize: 13, color: cl.text }}>{a.action}</span>
                  </div>
                  <Badge color={cl.warmPink} bg={cl.warmPinkLight}>+{a.points}pt</Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Assigned Clients */}
          <h3 style={{ fontFamily: fonts.display, fontSize: 15, margin: "0 0 10px", color: cl.text }}>担当ご利用者様</h3>
          {helper.clients.map((clientName, i) => {
            const client = mockCustomers.find(c => c.name === clientName);
            return (
              <Card key={i} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <ScoreBadge score={client?.gardenScore || 0} />
                  <div>
                    <p style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: cl.text, margin: 0 }}>{clientName}</p>
                    <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "2px 0" }}>{client?.address}</p>
                  </div>
                </div>
                {!uploaded[clientName] ? (
                  <Button full variant={uploading === clientName ? "ghost" : "warm"} onClick={() => handleUpload(clientName)} icon={Icons.camera({ size: 16, color: "#fff" })}>
                    {uploading === clientName ? "送信中..." : `${clientName.split(" ")[1]}さんの代わりに写真を送る`}
                  </Button>
                ) : (
                  <div style={{ textAlign: "center", padding: 12, backgroundColor: cl.light, borderRadius: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      {Icons.check({ size: 18, color: cl.canopy })}
                      <span style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.canopy }}>送信完了！</span>
                      <Badge color={cl.warmPink} bg={cl.warmPinkLight}>+50pt 獲得</Badge>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {tab === "activity" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="活動履歴" />
          {[
            { date: "4月12日", action: "写真アップロード代行", client: "田中 花子", pts: 50 },
            { date: "4月10日", action: "状態チェック報告", client: "山本 太郎", pts: 30 },
            { date: "4月8日", action: "写真アップロード代行", client: "田中 花子", pts: 50 },
            { date: "4月5日", action: "業者手配サポート", client: "田中 花子", pts: 60 },
            { date: "4月2日", action: "ご利用者の声を代理入力", client: "山本 太郎", pts: 40 },
            { date: "3月28日", action: "写真アップロード代行", client: "山本 太郎", pts: 50 },
            { date: "3月25日", action: "状態チェック報告", client: "田中 花子", pts: 30 },
            { date: "3月20日", action: "緊急連絡・通報", client: "山本 太郎", pts: 100 },
          ].map((a, i) => (
            <Card key={i} style={{ marginBottom: 8, padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text, margin: 0 }}>{a.action}</p>
                  <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "2px 0 0" }}>{a.date} ─ {a.client}様</p>
                </div>
                <Badge color={cl.warmPink} bg={cl.warmPinkLight}>+{a.pts}pt</Badge>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* ─── REWARDS CATALOG ─── */}
      {tab === "rewards" && !selectedReward && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="親切ポイント交換" subtitle={`現在のポイント：${helper.points.toLocaleString()}pt`} />
          <Card style={{ marginBottom: 14, background: `linear-gradient(135deg, ${cl.warmPinkLight}, ${cl.accentLight})`, border: "none", padding: 16 }}>
            <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.forestMid, margin: 0, lineHeight: 1.6 }}>
              お手伝いで貯めたポイントを、金沢の素敵な特産品やサービスと交換できます。
            </p>
          </Card>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {rewards.map((r) => (
              <Card key={r.id} onClick={() => setSelectedReward(r)} style={{ cursor: "pointer", padding: 16, textAlign: "center" }}>
                <span style={{ fontSize: 36, display: "block", marginBottom: 8 }}>{r.image}</span>
                <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text, margin: "0 0 2px" }}>{r.name}</p>
                <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: "0 0 8px" }}>{r.brand}</p>
                <Badge color={helper.points >= r.points ? cl.warmPink : cl.textLight} bg={helper.points >= r.points ? cl.warmPinkLight : cl.bg}>
                  {r.points.toLocaleString()}pt
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      )}

      {tab === "rewards" && selectedReward && (
        <div style={{ padding: "8px 20px 20px" }}>
          <button onClick={() => { setSelectedReward(null); }} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: fonts.body, fontSize: 13, color: cl.forestMid, padding: "8px 0", fontWeight: 600 }}>{Icons.back({ size: 16, color: cl.forestMid })} 一覧に戻る</button>
          <Card style={{ textAlign: "center", padding: 28 }}>
            <span style={{ fontSize: 56, display: "block", marginBottom: 12 }}>{selectedReward.image}</span>
            <h2 style={{ fontFamily: fonts.display, fontSize: 20, margin: "0 0 4px", color: cl.text }}>{selectedReward.name}</h2>
            <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: "0 0 12px" }}>{selectedReward.brand}</p>
            <p style={{ fontFamily: fonts.body, fontSize: 13, color: cl.text, margin: "0 0 16px", lineHeight: 1.6 }}>{selectedReward.desc}</p>
            <div style={{ padding: 14, backgroundColor: cl.bg, borderRadius: 12, marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: fonts.body, fontSize: 13, color: cl.textMuted }}>必要ポイント</span>
                <span style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: cl.warmPink }}>{selectedReward.points.toLocaleString()}pt</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                <span style={{ fontFamily: fonts.body, fontSize: 13, color: cl.textMuted }}>あなたのポイント</span>
                <span style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: cl.text }}>{helper.points.toLocaleString()}pt</span>
              </div>
              {helper.points >= selectedReward.points && (
                <div style={{ marginTop: 8, padding: "6px 0", borderTop: `1px solid ${cl.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: fonts.body, fontSize: 13, color: cl.textMuted }}>交換後の残高</span>
                  <span style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 700, color: cl.forestMid }}>{(helper.points - selectedReward.points).toLocaleString()}pt</span>
                </div>
              )}
            </div>
            {!redeemed[selectedReward.id] ? (
              <Button full variant={helper.points >= selectedReward.points ? "warm" : "ghost"} disabled={helper.points < selectedReward.points}
                onClick={() => setRedeemed(p => ({ ...p, [selectedReward.id]: true }))}
                icon={Icons.gift({ size: 16, color: helper.points >= selectedReward.points ? "#fff" : cl.textLight })}>
                {helper.points >= selectedReward.points ? "ポイントで交換する" : "ポイントが足りません"}
              </Button>
            ) : (
              <div style={{ padding: 16, backgroundColor: cl.light, borderRadius: 12 }}>
                {Icons.check({ size: 24, color: cl.canopy })}
                <p style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: cl.canopy, margin: "8px 0 4px" }}>交換完了！</p>
                <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: 0 }}>ご登録の住所に1週間以内にお届けします</p>
              </div>
            )}
          </Card>
        </div>
      )}

      <TabBar active={tab} onChange={(t) => { setTab(t); setSelectedReward(null); }} tabs={[
        { id: "home", label: "ホーム", icon: Icons.home },
        { id: "activity", label: "活動履歴", icon: Icons.calendar },
        { id: "rewards", label: "ポイント交換", icon: Icons.gift },
      ]} />
    </div>
  );
};

// ═══════════════════════════════════════
// FAMILY VIEW
// ═══════════════════════════════════════
const FamilyView = ({ onBack }) => {
  const [tab, setTab] = useState("home");
  const [showAddCard, setShowAddCard] = useState(false);
  const [cards, setCards] = useState([{ id: 1, type: "visa", last4: "4242", name: "田中 一郎", expires: "08/28", isDefault: true }]);
  const [cardForm, setCardForm] = useState({ number: "", name: "", expiry: "", cvc: "" });

  const handleAddCard = () => {
    if (cardForm.number && cardForm.name) {
      setCards(prev => [...prev, { id: Date.now(), type: "master", last4: cardForm.number.slice(-4) || "0000", name: cardForm.name, expires: cardForm.expiry || "XX/XX", isDefault: false }]);
      setCardForm({ number: "", name: "", expiry: "", cvc: "" });
      setShowAddCard(false);
    }
  };

  return (
    <div style={{ backgroundColor: cl.bg, minHeight: "100vh", paddingBottom: 80 }}>
      <NavBar onBack={onBack} rightLabel="ご家族様用" />

      {tab === "home" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="お母様のお庭" subtitle="田中 花子 様 ─ 金沢市野町3丁目" />
          <Card style={{ marginBottom: 16, background: `linear-gradient(135deg, ${cl.light}, #fff)`, borderColor: cl.canopy }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center", border: `2px solid ${cl.canopy}` }}>{Icons.check({ size: 26, color: cl.canopy })}</div>
              <div>
                <p style={{ fontFamily: fonts.display, fontSize: 16, fontWeight: 700, color: cl.canopy, margin: "0 0 4px" }}>安心：問題ありません</p>
                <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0 }}>最終確認：2026年4月5日</p>
              </div>
            </div>
          </Card>

          {/* Helpers assigned to mom */}
          <Card style={{ marginBottom: 16, background: cl.warmPinkLight, borderColor: cl.warmPink }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              {Icons.heart({ size: 16, color: cl.warmPink })}
              <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text, margin: 0 }}>お母様のお手伝いさん</p>
            </div>
            <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: "0 0 8px" }}>ケアマネージャーやご近所の方が写真送信などをサポートしてくれています。</p>
            <div style={{ display: "flex", gap: 8 }}>
              {["鈴木 美穂", "中村 よし子"].map((n, i) => (
                <div key={i} style={{ padding: "6px 12px", backgroundColor: "#fff", borderRadius: 8, display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: cl.warmPink, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>{n[0]}</span>
                  </div>
                  <span style={{ fontFamily: fonts.body, fontSize: 11, color: cl.text, fontWeight: 600 }}>{n}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card style={{ marginBottom: 16 }}>
            <h3 style={{ fontFamily: fonts.display, fontSize: 15, margin: "0 0 14px", color: cl.text }}>最新レポート</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
              {[
                { label: "お庭スコア", value: "82/100", icon: Icons.star, col: cl.forestMid },
                { label: "雑草", value: "少量", icon: Icons.leaf, col: cl.canopy },
                { label: "安全リスク", value: "低", icon: Icons.alert, col: cl.canopy },
                { label: "次回訪問", value: "4月20日", icon: Icons.calendar, col: cl.goldWarm },
              ].map((item, i) => (
                <div key={i} style={{ padding: 12, borderRadius: 10, backgroundColor: cl.bg, display: "flex", alignItems: "center", gap: 10 }}>
                  {item.icon({ size: 16, color: item.col })}
                  <div>
                    <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>{item.label}</p>
                    <p style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 700, color: cl.text, margin: 0 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: 14, backgroundColor: cl.bg, borderRadius: 10, borderLeft: `3px solid ${cl.forestMid}` }}>
              <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.text, margin: 0, lineHeight: 1.7 }}>{aiDiagnosis.recommendation}</p>
            </div>
          </Card>
        </div>
      )}

      {tab === "reports" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="レポート一覧" />
          {mockReports.map((r, i) => (
            <Card key={i} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted }}>{r.date}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Badge color={r.risk === "中" ? cl.goldWarm : cl.canopy} bg={r.risk === "中" ? cl.accentLight : cl.light}>リスク：{r.risk}</Badge>
                  <ScoreBadge score={r.score} />
                </div>
              </div>
              <p style={{ fontFamily: fonts.body, fontSize: 13, color: cl.text, margin: 0, lineHeight: 1.6 }}>{r.summary}</p>
            </Card>
          ))}
        </div>
      )}

      {tab === "payment" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="お支払い管理" subtitle="ご家族がお支払いを代行できます" />
          <Card style={{ marginBottom: 16, background: `linear-gradient(135deg, ${cl.light}, ${cl.accentLight})` }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0 }}>現在のプラン</p>
                <p style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: cl.forestMid, margin: "4px 0 2px" }}>月額プラン</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontFamily: fonts.display, fontSize: 24, fontWeight: 700, color: cl.text, margin: 0 }}>¥8,000</p>
                <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0 }}>/月（税込）</p>
              </div>
            </div>
          </Card>

          <h3 style={{ fontFamily: fonts.display, fontSize: 15, margin: "0 0 10px", color: cl.text }}>お支払い方法</h3>
          {cards.map((card) => (
            <Card key={card.id} style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 48, height: 32, borderRadius: 6, backgroundColor: card.type === "visa" ? "#1A1F71" : "#EB001B", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontFamily: fonts.body, fontSize: 10, fontWeight: 700 }}>{card.type === "visa" ? "VISA" : "MC"}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: cl.text, margin: 0 }}>•••• •••• •••• {card.last4}</p>
                  <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "2px 0 0" }}>{card.name} ─ {card.expires}</p>
                </div>
                {card.isDefault && <Badge color={cl.forestMid} bg={cl.light}>メイン</Badge>}
              </div>
            </Card>
          ))}

          {!showAddCard ? (
            <Button full variant="outline" onClick={() => setShowAddCard(true)} style={{ marginTop: 8, marginBottom: 16 }} icon={Icons.creditCard({ size: 16, color: cl.forestMid })}>新しいカードを追加</Button>
          ) : (
            <Card style={{ marginTop: 8, marginBottom: 16, borderColor: cl.forestMid }}>
              <h4 style={{ fontFamily: fonts.display, fontSize: 14, margin: "0 0 14px", color: cl.text }}>カード情報を入力</h4>
              {[{ key: "number", label: "カード番号", ph: "1234 5678 9012 3456" }, { key: "name", label: "カード名義", ph: "田中 一郎" }].map(({ key, label, ph }) => (
                <div key={key} style={{ marginBottom: 12 }}>
                  <label style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, display: "block", marginBottom: 4 }}>{label}</label>
                  <input value={cardForm[key]} onChange={(e) => setCardForm(p => ({ ...p, [key]: e.target.value }))} placeholder={ph} style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: `1px solid ${cl.border}`, fontFamily: fonts.body, fontSize: 14, color: cl.text, backgroundColor: cl.bg, outline: "none", boxSizing: "border-box" }} />
                </div>
              ))}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                {[{ key: "expiry", label: "有効期限", ph: "MM/YY" }, { key: "cvc", label: "CVC", ph: "123" }].map(({ key, label, ph }) => (
                  <div key={key}>
                    <label style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, display: "block", marginBottom: 4 }}>{label}</label>
                    <input value={cardForm[key]} onChange={(e) => setCardForm(p => ({ ...p, [key]: e.target.value }))} placeholder={ph} style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: `1px solid ${cl.border}`, fontFamily: fonts.body, fontSize: 14, color: cl.text, backgroundColor: cl.bg, outline: "none", boxSizing: "border-box" }} />
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <Button full onClick={handleAddCard}>登録する</Button>
                <Button full variant="ghost" onClick={() => setShowAddCard(false)}>キャンセル</Button>
              </div>
              <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textLight, margin: "10px 0 0", textAlign: "center" }}>※ SSL暗号化で安全に保護されます</p>
            </Card>
          )}

          <h3 style={{ fontFamily: fonts.display, fontSize: 15, margin: "0 0 10px", color: cl.text }}>お支払い履歴</h3>
          {[
            { date: "2026年4月1日", amount: "¥8,000", desc: "月額プラン（4月分）" },
            { date: "2026年3月15日", amount: "¥5,000", desc: "雪かき対応（追加）" },
            { date: "2026年3月1日", amount: "¥8,000", desc: "月額プラン（3月分）" },
          ].map((pay, i) => (
            <Card key={i} style={{ marginBottom: 8, padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text, margin: 0 }}>{pay.desc}</p>
                  <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "2px 0 0" }}>{pay.date}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontFamily: fonts.body, fontSize: 15, fontWeight: 700, color: cl.text, margin: 0 }}>{pay.amount}</p>
                  <Badge color={cl.canopy} bg={cl.light}>済</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {tab === "notify" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="お知らせ設定" />
          <Card>
            {[
              { label: "訪問完了通知", desc: "作業完了時にお知らせ", on: true },
              { label: "AI診断レポート", desc: "新しいレポートが届いた時", on: true },
              { label: "異常アラート", desc: "お庭に問題が見つかった時", on: true },
              { label: "お支払い通知", desc: "お支払い完了時にお知らせ", on: true },
              { label: "お手伝い活動通知", desc: "お手伝いさんの活動があった時", on: true },
              { label: "季節のお知らせ", desc: "季節ごとのアドバイス", on: false },
            ].map((item, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: i < arr.length - 1 ? `1px solid ${cl.border}` : "none" }}>
                <div>
                  <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text, margin: 0 }}>{item.label}</p>
                  <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "2px 0 0" }}>{item.desc}</p>
                </div>
                <div style={{ width: 44, height: 24, borderRadius: 12, padding: 2, cursor: "pointer", backgroundColor: item.on ? cl.forestMid : cl.border, display: "flex", alignItems: "center", justifyContent: item.on ? "flex-end" : "flex-start" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: "#fff" }} />
                </div>
              </div>
            ))}
          </Card>
        </div>
      )}

      <TabBar active={tab} onChange={setTab} tabs={[
        { id: "home", label: "状態確認", icon: Icons.home },
        { id: "reports", label: "レポート", icon: Icons.calendar },
        { id: "payment", label: "お支払い", icon: Icons.wallet },
        { id: "notify", label: "通知設定", icon: Icons.bell },
      ]} />
    </div>
  );
};

// ═══════════════════════════════════════
// ADMIN VIEW (with AI Daily Planner)
// ═══════════════════════════════════════

const todayPlan = {
  date: "2026年4月18日（金）",
  totalHours: 5.5,
  totalKm: 12.3,
  fuelEst: "¥620",
  revenue: "¥18,500",
  startPoint: { name: "自宅（出発）", lat: 36.5613, lng: 136.6562 },
  stops: [
    {
      order: 1, customer: "山本 太郎", address: "金沢市泉野出町", type: "緊急対応",
      priority: "高", score: 54, tasks: ["除草（広範囲）", "低木剪定", "状態写真撮影"],
      estTime: 120, estTravel: 15, arrival: "9:00", departure: "11:00",
      aiReason: "雑草密度が前回比+68%。放置すると害虫リスク上昇。顧客家族からの問い合わせあり。",
      earnings: "¥10,500", lat: 36.5482, lng: 136.6432,
    },
    {
      order: 2, customer: "田中 花子", address: "金沢市野町3丁目", type: "定期訪問",
      priority: "中", score: 82, tasks: ["軽除草", "落ち葉清掃", "レポート写真"],
      estTime: 60, estTravel: 10, arrival: "11:15", departure: "12:15",
      aiReason: "定期訪問日。雑草密度は軽微だが、春の成長期のため早めの対応が効果的。",
      earnings: "¥5,000", lat: 36.5563, lng: 136.6419,
    },
    {
      order: 3, customer: "佐藤 美恵子", address: "金沢市寺町", type: "状態チェック",
      priority: "低", score: 91, tasks: ["目視確認", "写真撮影", "季節アドバイス"],
      estTime: 30, estTravel: 8, arrival: "12:30", departure: "13:00",
      aiReason: "状態良好。前回訪問から3週間経過。顔出し訪問で信頼維持。所要時間短め。",
      earnings: "¥3,000", lat: 36.5598, lng: 136.6378,
    },
  ],
};

const weeklyAnalysis = [
  { day: "月", hours: 0, customers: 0, active: false },
  { day: "火", hours: 4.5, customers: 2, active: true },
  { day: "水", hours: 0, customers: 0, active: false },
  { day: "木", hours: 3.0, customers: 2, active: true },
  { day: "金", hours: 5.5, customers: 3, active: true },
  { day: "土", hours: 6.0, customers: 4, active: true },
  { day: "日", hours: 0, customers: 0, active: false },
];

const performanceStats = {
  avgTimePerCustomer: 52,
  avgTravelBetween: 11,
  completionRate: 97,
  avgScore: 76,
  monthlyVisits: 14,
  monthlyHours: 18.5,
  taskBreakdown: [
    { task: "除草", pct: 35, color: cl.canopy },
    { task: "剪定", pct: 25, color: cl.forestMid },
    { task: "清掃", pct: 20, color: cl.goldWarm },
    { task: "写真・レポート", pct: 15, color: "#7B6BA4" },
    { task: "移動", pct: 5, color: cl.textLight },
  ],
};

// ─── Route Map Component (Google Maps) ───
const RouteMap = ({ plan, activeStop }) => {
  // Build Google Maps Directions URL with waypoints
  const origin = `${plan.startPoint.lat},${plan.startPoint.lng}`;
  const destination = `${plan.stops[plan.stops.length - 1].lat},${plan.stops[plan.stops.length - 1].lng}`;
  const waypoints = plan.stops.slice(0, -1).map(s => `${s.lat},${s.lng}`).join("|");

  // Google Maps Embed with directions
  const mapSrc = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&origin=${origin}&destination=${destination}&waypoints=${waypoints}&mode=driving&language=ja&region=jp&zoom=14`;

  // Static map as fallback with route markers
  const staticMarkers = [
    { label: "S", lat: plan.startPoint.lat, lng: plan.startPoint.lng, color: "0x2D6A4F" },
    ...plan.stops.map(s => ({ label: `${s.order}`, lat: s.lat, lng: s.lng, color: s.priority === "高" ? "0xC75B3A" : s.priority === "中" ? "0xD4A849" : "0x52B788" })),
  ];
  const markersParam = staticMarkers.map(m => `markers=color:${m.color}|label:${m.label}|${m.lat},${m.lng}`).join("&");
  const pathParam = `path=color:0x2D6A4F|weight:4|${plan.startPoint.lat},${plan.startPoint.lng}|${plan.stops.map(s => `${s.lat},${s.lng}`).join("|")}`;
  const staticSrc = `https://maps.googleapis.com/maps/api/staticmap?size=600x300&${markersParam}&${pathParam}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&language=ja`;

  const prioColors = { "高": cl.danger, "中": cl.goldWarm, "低": cl.canopy };

  return (
    <Card style={{ marginBottom: 14, padding: 0, overflow: "hidden" }}>
      {/* Interactive Map */}
      <div style={{ position: "relative", width: "100%", height: 220, backgroundColor: "#e8e5de" }}>
        <iframe
          src={mapSrc}
          style={{ width: "100%", height: "100%", border: "none" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="route-map"
        />
      </div>

      {/* Route Legend */}
      <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${cl.border}` }}>
        <div style={{ display: "flex", gap: 12 }}>
          {plan.stops.map((s, i) => {
            const isActive = activeStop === i;
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{
                  width: isActive ? 22 : 18, height: isActive ? 22 : 18, borderRadius: "50%",
                  backgroundColor: prioColors[s.priority], display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.2s", boxShadow: isActive ? `0 0 0 3px ${prioColors[s.priority]}40` : "none",
                }}>
                  <span style={{ color: "#fff", fontSize: 9, fontWeight: 700 }}>{s.order}</span>
                </div>
                <span style={{ fontFamily: fonts.body, fontSize: 10, color: isActive ? cl.text : cl.textMuted, fontWeight: isActive ? 600 : 400 }}>
                  {s.customer.split(" ")[1]}
                </span>
              </div>
            );
          })}
        </div>
        <a
          href={`https://www.google.com/maps/dir/${plan.startPoint.lat},${plan.startPoint.lng}/${plan.stops.map(s => `${s.lat},${s.lng}`).join("/")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: fonts.body, fontSize: 11, color: cl.forestMid, fontWeight: 600,
            textDecoration: "none", padding: "4px 10px", backgroundColor: cl.light, borderRadius: 8,
            display: "inline-flex", alignItems: "center", gap: 4,
          }}
        >
          {Icons.mapPin({ size: 12, color: cl.forestMid })}
          Mapで開く
        </a>
      </div>
    </Card>
  );
};

const AdminView = ({ onBack }) => {
  const [tab, setTab] = useState("plan");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [planGenerated, setPlanGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [expandedStop, setExpandedStop] = useState(null);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => { setGenerating(false); setPlanGenerated(true); }, 2200);
  };

  return (
    <div style={{ backgroundColor: cl.bg, minHeight: "100vh", paddingBottom: 80 }}>
      <NavBar onBack={onBack} />

      {/* ─── AI DAILY PLAN ─── */}
      {tab === "plan" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="今日のAIプラン" subtitle={todayPlan.date} />

          {!planGenerated ? (
            <div>
              {/* Generate Button */}
              <Card style={{
                marginBottom: 16, textAlign: "center", padding: 32,
                background: `linear-gradient(135deg, ${cl.light}, ${cl.accentLight})`,
                border: `2px dashed ${cl.forestMid}`,
              }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: cl.forestMid, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  {Icons.zap({ size: 28, color: "#fff" })}
                </div>
                <h3 style={{ fontFamily: fonts.display, fontSize: 18, color: cl.text, margin: "0 0 8px" }}>AIが最適プランを作成</h3>
                <p style={{ fontFamily: fonts.body, fontSize: 13, color: cl.textMuted, margin: "0 0 20px", lineHeight: 1.6 }}>
                  庭の状態・優先度・移動距離・作業実績から<br />最も効率的な1日のルートと時間割を自動生成
                </p>
                <Button full onClick={handleGenerate} style={{ padding: "16px 24px", fontSize: 15 }}
                  icon={generating ? null : Icons.zap({ size: 18, color: "#fff" })}>
                  {generating ? "AI分析中..." : "今日のプランを生成"}
                </Button>
                {generating && (
                  <div style={{ marginTop: 16 }}>
                    {["顧客データを分析中...", "庭の状態をAI診断中...", "最適ルートを計算中..."].map((msg, i) => (
                      <p key={i} style={{ fontFamily: fonts.body, fontSize: 11, color: cl.forestMid, margin: "6px 0", opacity: 0.7 }}>{msg}</p>
                    ))}
                  </div>
                )}
              </Card>

              {/* Weekly Overview */}
              <h3 style={{ fontFamily: fonts.display, fontSize: 15, margin: "0 0 12px", color: cl.text }}>今週の予定</h3>
              <Card style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 4 }}>
                  {weeklyAnalysis.map((d, i) => (
                    <div key={i} style={{ flex: 1, textAlign: "center" }}>
                      <p style={{ fontFamily: fonts.body, fontSize: 10, color: d.day === "金" ? cl.forestMid : cl.textMuted, margin: "0 0 6px", fontWeight: d.day === "金" ? 700 : 400 }}>{d.day}</p>
                      <div style={{
                        height: 60, borderRadius: 6, display: "flex", flexDirection: "column", justifyContent: "flex-end",
                        backgroundColor: d.active ? `${cl.forestMid}12` : cl.bg, position: "relative", overflow: "hidden",
                      }}>
                        {d.active && (
                          <div style={{
                            height: `${(d.hours / 6) * 100}%`, backgroundColor: d.day === "金" ? cl.forestMid : cl.canopyLight,
                            borderRadius: 6, transition: "all 0.3s",
                          }} />
                        )}
                      </div>
                      <p style={{ fontFamily: fonts.body, fontSize: 9, color: cl.textMuted, margin: "4px 0 0" }}>{d.active ? `${d.hours}h` : "−"}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ) : (
            <div>
              {/* Plan Summary KPIs */}
              <Card style={{ marginBottom: 14, background: `linear-gradient(135deg, ${cl.light}, ${cl.accentLight})` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  {Icons.zap({ size: 16, color: cl.forestMid })}
                  <span style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: cl.forestMid }}>AIが最適プランを生成しました</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 6 }}>
                  {[
                    { label: "訪問数", value: "3件" },
                    { label: "作業時間", value: `${todayPlan.totalHours}h` },
                    { label: "移動距離", value: `${todayPlan.totalKm}km` },
                    { label: "売上見込", value: todayPlan.revenue },
                  ].map((k, i) => (
                    <div key={i} style={{ textAlign: "center", padding: 8, backgroundColor: "#fff", borderRadius: 8 }}>
                      <p style={{ fontFamily: fonts.body, fontSize: 9, color: cl.textMuted, margin: 0 }}>{k.label}</p>
                      <p style={{ fontFamily: fonts.display, fontSize: 15, fontWeight: 700, color: cl.text, margin: "2px 0 0" }}>{k.value}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Route Map */}
              <RouteMap plan={todayPlan} activeStop={expandedStop} />

              {/* Route Timeline */}
              <h3 style={{ fontFamily: fonts.display, fontSize: 15, margin: "0 0 12px", color: cl.text }}>最適ルート・タイムライン</h3>

              {todayPlan.stops.map((stop, i) => {
                const isExpanded = expandedStop === i;
                const prioColor = stop.priority === "高" ? cl.danger : stop.priority === "中" ? cl.goldWarm : cl.canopy;
                const prioBg = stop.priority === "高" ? cl.dangerLight : stop.priority === "中" ? cl.accentLight : cl.light;
                return (
                  <div key={i} style={{ position: "relative", paddingLeft: 28, marginBottom: i < todayPlan.stops.length - 1 ? 0 : 0 }}>
                    {/* Timeline connector */}
                    <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, backgroundColor: i < todayPlan.stops.length - 1 ? cl.border : "transparent" }} />
                    <div style={{
                      position: "absolute", left: 2, top: 16, width: 18, height: 18, borderRadius: "50%",
                      backgroundColor: prioColor, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2,
                    }}>
                      <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>{stop.order}</span>
                    </div>

                    {/* Travel time indicator */}
                    {i > 0 && (
                      <div style={{ padding: "4px 0 4px 8px", marginBottom: 4 }}>
                        <span style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textLight }}>🚗 移動 約{stop.estTravel}分</span>
                      </div>
                    )}

                    <Card onClick={() => setExpandedStop(isExpanded ? null : i)} style={{ marginBottom: 12, cursor: "pointer", borderLeft: `4px solid ${prioColor}` }}>
                      {/* Header */}
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: isExpanded ? 14 : 0 }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                            <p style={{ fontFamily: fonts.body, fontSize: 15, fontWeight: 700, color: cl.text, margin: 0 }}>{stop.customer}</p>
                            <Badge color={prioColor} bg={prioBg}>{stop.type}</Badge>
                          </div>
                          <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0 }}>{stop.address}</p>
                          <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
                            <span style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: cl.forestMid }}>{stop.arrival}〜{stop.departure}</span>
                            <span style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted }}>作業{stop.estTime}分</span>
                          </div>
                        </div>
                        <div style={{ textAlign: "right", flexShrink: 0 }}>
                          <ScoreBadge score={stop.score} />
                        </div>
                      </div>

                      {/* Expanded Detail */}
                      {isExpanded && (
                        <div>
                          {/* Tasks */}
                          <div style={{ padding: 14, backgroundColor: cl.bg, borderRadius: 10, marginBottom: 12 }}>
                            <p style={{ fontFamily: fonts.body, fontSize: 11, fontWeight: 600, color: cl.text, margin: "0 0 8px" }}>作業内容</p>
                            {stop.tasks.map((t, ti) => (
                              <div key={ti} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 0" }}>
                                <div style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: cl.canopy }} />
                                <span style={{ fontFamily: fonts.body, fontSize: 13, color: cl.text }}>{t}</span>
                              </div>
                            ))}
                          </div>

                          {/* AI Reasoning */}
                          <div style={{ padding: 14, backgroundColor: `${cl.forestMid}08`, borderRadius: 10, borderLeft: `3px solid ${cl.forestMid}`, marginBottom: 12 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                              {Icons.zap({ size: 14, color: cl.forestMid })}
                              <span style={{ fontFamily: fonts.body, fontSize: 11, fontWeight: 600, color: cl.forestMid }}>AI分析・判断理由</span>
                            </div>
                            <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.text, margin: 0, lineHeight: 1.7 }}>{stop.aiReason}</p>
                          </div>

                          {/* Revenue */}
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", backgroundColor: cl.accentLight, borderRadius: 10 }}>
                            <span style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted }}>売上見込</span>
                            <span style={{ fontFamily: fonts.display, fontSize: 18, fontWeight: 700, color: cl.goldWarm }}>{stop.earnings}</span>
                          </div>
                        </div>
                      )}
                    </Card>
                  </div>
                );
              })}

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                <Button full icon={Icons.check({ size: 16, color: "#fff" })}>このプランで開始</Button>
                <Button full variant="outline" onClick={() => setPlanGenerated(false)} icon={Icons.zap({ size: 16, color: cl.forestMid })}>再生成</Button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ─── PERFORMANCE ANALYTICS ─── */}
      {tab === "analytics" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="AI分析・実績" subtitle="作業データに基づく最適化" />

          {/* Key Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
            {[
              { label: "平均作業時間/件", value: `${performanceStats.avgTimePerCustomer}分`, icon: Icons.calendar, color: cl.forestMid },
              { label: "平均移動時間", value: `${performanceStats.avgTravelBetween}分`, icon: Icons.mapPin, color: cl.goldWarm },
              { label: "完了率", value: `${performanceStats.completionRate}%`, icon: Icons.check, color: cl.canopy },
              { label: "平均庭スコア", value: `${performanceStats.avgScore}点`, icon: Icons.star, color: cl.goldWarm },
            ].map((m, i) => (
              <Card key={i} style={{ padding: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  {m.icon({ size: 14, color: m.color })}
                  <span style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted }}>{m.label}</span>
                </div>
                <p style={{ fontFamily: fonts.display, fontSize: 22, fontWeight: 700, color: cl.text, margin: 0 }}>{m.value}</p>
              </Card>
            ))}
          </div>

          {/* Time Breakdown */}
          <Card style={{ marginBottom: 16 }}>
            <h4 style={{ fontFamily: fonts.display, fontSize: 14, margin: "0 0 14px", color: cl.text }}>作業時間の内訳（今月）</h4>
            {/* Bar */}
            <div style={{ display: "flex", borderRadius: 8, overflow: "hidden", height: 28, marginBottom: 14 }}>
              {performanceStats.taskBreakdown.map((t, i) => (
                <div key={i} style={{ width: `${t.pct}%`, backgroundColor: t.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {t.pct >= 15 && <span style={{ fontFamily: fonts.body, fontSize: 9, color: "#fff", fontWeight: 700 }}>{t.pct}%</span>}
                </div>
              ))}
            </div>
            {/* Legend */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {performanceStats.taskBreakdown.map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 3, backgroundColor: t.color }} />
                  <span style={{ fontFamily: fonts.body, fontSize: 11, color: cl.text }}>{t.task}</span>
                  <span style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted }}>{t.pct}%</span>
                </div>
              ))}
            </div>
          </Card>

          {/* AI Insights */}
          <Card style={{ marginBottom: 16, background: `linear-gradient(135deg, ${cl.light}, #fff)`, borderLeft: `4px solid ${cl.forestMid}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              {Icons.zap({ size: 16, color: cl.forestMid })}
              <span style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.forestMid }}>AIからの改善提案</span>
            </div>
            {[
              { text: "火曜と木曜にエリアを分けて訪問すると移動時間が23%削減できます", tag: "ルート最適化" },
              { text: "山本様邸は2週間に1回の頻度に変更すると、雑草密度を60%以下に維持できます", tag: "訪問頻度" },
              { text: "剪定作業は4月下旬にまとめて実施すると効率が最大化されます", tag: "作業計画" },
            ].map((insight, i) => (
              <div key={i} style={{ padding: "10px 0", borderBottom: i < 2 ? `1px solid ${cl.border}` : "none" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <Badge color={cl.forestMid} bg={cl.light}>{insight.tag}</Badge>
                </div>
                <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.text, margin: "6px 0 0", lineHeight: 1.6 }}>{insight.text}</p>
              </div>
            ))}
          </Card>

          {/* Monthly Summary */}
          <Card>
            <h4 style={{ fontFamily: fonts.display, fontSize: 14, margin: "0 0 12px", color: cl.text }}>今月のサマリー</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {[
                { label: "訪問回数", value: `${performanceStats.monthlyVisits}回` },
                { label: "稼働時間", value: `${performanceStats.monthlyHours}h` },
                { label: "効率スコア", value: "A+" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center", padding: 12, backgroundColor: cl.bg, borderRadius: 10 }}>
                  <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>{s.label}</p>
                  <p style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: cl.text, margin: "4px 0 0" }}>{s.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* ─── DASHBOARD ─── */}
      {tab === "dash" && !selectedCustomer && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="ダッシュボード" subtitle="2026年4月13日" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
            {[{ label: "顧客数", value: "3", sub: "+1 今月" }, { label: "月間売上", value: "¥21K", sub: "予定" }, { label: "要対応", value: "1", sub: "件" }].map((kpi, i) => (
              <Card key={i} style={{ textAlign: "center", padding: 14 }}>
                <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>{kpi.label}</p>
                <p style={{ fontFamily: fonts.display, fontSize: 22, fontWeight: 700, color: cl.text, margin: "4px 0 2px" }}>{kpi.value}</p>
                <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.forestMid, margin: 0 }}>{kpi.sub}</p>
              </Card>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
            <Card style={{ background: `linear-gradient(135deg, ${cl.accentLight}, #fff)`, borderColor: cl.goldWarm, padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>{Icons.grid({ size: 16, color: cl.goldWarm })}<span style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted }}>業者紹介手数料</span></div>
              <p style={{ fontFamily: fonts.display, fontSize: 18, fontWeight: 700, color: cl.goldWarm, margin: 0 }}>¥12,000</p>
              <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>4件 今月</p>
            </Card>
            <Card style={{ background: `linear-gradient(135deg, ${cl.warmPinkLight}, #fff)`, borderColor: cl.warmPink, padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>{Icons.heart({ size: 16, color: cl.warmPink })}<span style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted }}>お手伝いさん</span></div>
              <p style={{ fontFamily: fonts.display, fontSize: 18, fontWeight: 700, color: cl.warmPink, margin: 0 }}>4名</p>
              <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>活動 74回</p>
            </Card>
          </div>

          <Card style={{ marginBottom: 16, background: cl.dangerLight, borderColor: cl.danger, borderLeftWidth: 4, borderLeftStyle: "solid" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {Icons.alert({ size: 18, color: cl.danger })}
              <div>
                <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.danger, margin: 0 }}>対応が必要です</p>
                <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: "2px 0 0" }}>山本太郎様 ─ 雑草密度が高く、早期対応を推奨</p>
              </div>
            </div>
          </Card>

          <h3 style={{ fontFamily: fonts.display, fontSize: 15, margin: "0 0 10px", color: cl.text }}>顧客一覧</h3>
          {mockCustomers.map((cust) => (
            <Card key={cust.id} onClick={() => setSelectedCustomer(cust)} style={{ marginBottom: 10, cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <ScoreBadge score={cust.gardenScore} />
                  <div>
                    <p style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: cl.text, margin: 0 }}>{cust.name}</p>
                    <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "2px 0" }}>{cust.address}</p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      <Badge>{cust.plan}</Badge>
                      <Badge color={cust.status === "要対応" ? cl.danger : cl.canopy} bg={cust.status === "要対応" ? cl.dangerLight : cl.light}>{cust.status}</Badge>
                    </div>
                  </div>
                </div>
                {Icons.arrow({ size: 16, color: cl.textLight })}
              </div>
            </Card>
          ))}
        </div>
      )}

      {tab === "dash" && selectedCustomer && (
        <div style={{ padding: "8px 20px 20px" }}>
          <button onClick={() => setSelectedCustomer(null)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: fonts.body, fontSize: 13, color: cl.forestMid, padding: "8px 0", fontWeight: 600 }}>{Icons.back({ size: 16, color: cl.forestMid })} 一覧に戻る</button>
          <Header title={selectedCustomer.name} subtitle={selectedCustomer.address} />
          <Card style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <ScoreBadge score={selectedCustomer.gardenScore} />
              <div><Badge>{selectedCustomer.plan}</Badge><p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: "6px 0 0" }}>次回訪問：{selectedCustomer.nextVisit}</p></div>
            </div>
            <div style={{ padding: 16, backgroundColor: cl.bg, borderRadius: 12, marginBottom: 14 }}>
              <h4 style={{ fontFamily: fonts.display, fontSize: 14, margin: "0 0 10px", color: cl.text }}>AI診断結果</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {[{ label: "雑草密度", value: `${aiDiagnosis.weedDensity}%`, change: aiDiagnosis.weedChange }, { label: "剪定必要度", value: aiDiagnosis.pruningNeed }, { label: "病害虫リスク", value: aiDiagnosis.pestRisk }, { label: "総合スコア", value: `${aiDiagnosis.overallScore}/100` }].map((d, i) => (
                  <div key={i} style={{ padding: 10, backgroundColor: "#fff", borderRadius: 8 }}>
                    <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>{d.label}</p>
                    <p style={{ fontFamily: fonts.body, fontSize: 15, fontWeight: 700, color: cl.text, margin: "2px 0 0" }}>{d.value} {d.change && <span style={{ fontSize: 10, color: cl.goldWarm }}>{d.change}</span>}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: 14, backgroundColor: cl.light, borderRadius: 10, borderLeft: `3px solid ${cl.forestMid}` }}>
              <p style={{ fontFamily: fonts.body, fontSize: 11, fontWeight: 600, color: cl.forestMid, margin: "0 0 4px" }}>AIからの推奨</p>
              <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.text, margin: 0, lineHeight: 1.6 }}>{aiDiagnosis.recommendation}</p>
            </div>
          </Card>
          <div style={{ display: "flex", gap: 10 }}>
            <Button full icon={Icons.camera({ size: 16, color: "#fff" })}>写真を確認</Button>
            <Button full variant="outline" icon={Icons.calendar({ size: 16, color: cl.forestMid })}>訪問予約</Button>
          </div>
        </div>
      )}

      {/* ─── HELPERS ─── */}
      {tab === "helpers" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="お手伝いさん管理" subtitle="親切ポイント運営" />
          <Card style={{ marginBottom: 16, background: `linear-gradient(135deg, ${cl.warmPinkLight}, #fff)` }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, textAlign: "center" }}>
              <div><p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>登録者</p><p style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: cl.warmPink, margin: "2px 0" }}>4名</p></div>
              <div><p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>総活動数</p><p style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: cl.text, margin: "2px 0" }}>74回</p></div>
              <div><p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>発行ポイント</p><p style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: cl.goldWarm, margin: "2px 0" }}>5,360</p></div>
            </div>
          </Card>
          {mockHelpers.map((h) => (
            <Card key={h.id} style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: cl.warmPink, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>{h.name[0]}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <p style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: cl.text, margin: 0 }}>{h.name}</p>
                    <RankBadge rank={h.rank} />
                  </div>
                  <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "2px 0" }}>{h.role} ─ {h.org}</p>
                  <div style={{ display: "flex", gap: 8 }}>
                    <Badge color={cl.warmPink} bg={cl.warmPinkLight}>{h.points.toLocaleString()}pt</Badge>
                    <Badge>{h.actions}回活動</Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <TabBar active={tab} onChange={(t) => { setTab(t); setSelectedCustomer(null); }} tabs={[
        { id: "plan", label: "AIプラン", icon: Icons.zap },
        { id: "analytics", label: "分析", icon: Icons.star },
        { id: "dash", label: "管理", icon: Icons.home },
        { id: "helpers", label: "お手伝い", icon: Icons.heart },
      ]} />
    </div>
  );
};

// ═══════════════════════════════════════
// PRO WORKER VIEW (副業ギグワーカー)
// ═══════════════════════════════════════
const proColor = "#E67E22";
const proLight = "#FFF5EB";
const proDark = "#C0611A";

const ProWorkerView = ({ onBack }) => {
  const [tab, setTab] = useState("home");
  const [planGenerated, setPlanGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => { setGenerating(true); setTimeout(() => { setGenerating(false); setPlanGenerated(true); }, 2000); };

  const worker = { name: "渡辺 健太", rating: 4.9, reviews: 47, jobs: 156, since: "2025年8月", monthEarnings: 187500, yearEarnings: 1842000, rank: "プラチナ" };

  const proStops = [
    { order: 1, customer: "山本 太郎", address: "金沢市泉野出町", tasks: ["除草（広範囲）","低木剪定"], time: "9:00〜11:00", pay: "¥8,500", priority: "高", lat: 36.5482, lng: 136.6432 },
    { order: 2, customer: "田中 花子", address: "金沢市野町3丁目", tasks: ["軽除草","落ち葉清掃"], time: "11:20〜12:20", pay: "¥5,000", priority: "中", lat: 36.5563, lng: 136.6419 },
    { order: 3, customer: "佐藤 美恵子", address: "金沢市寺町", tasks: ["目視確認","写真撮影"], time: "12:35〜13:00", pay: "¥3,000", priority: "低", lat: 36.5598, lng: 136.6378 },
    { order: 4, customer: "小林 正男", address: "金沢市長町", tasks: ["雪かき","玄関周り清掃"], time: "13:30〜14:30", pay: "¥4,000", priority: "中", lat: 36.5612, lng: 136.6545 },
  ];

  const mapSrc = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&origin=36.5613,136.6562&destination=${proStops[proStops.length-1].lat},${proStops[proStops.length-1].lng}&waypoints=${proStops.slice(0,-1).map(s=>`${s.lat},${s.lng}`).join("|")}&mode=driving&language=ja&zoom=14`;

  const prioC = { "高": cl.danger, "中": cl.goldWarm, "低": cl.canopy };

  return (
    <div style={{ backgroundColor: cl.bg, minHeight: "100vh", paddingBottom: 80 }}>
      <NavBar onBack={onBack} rightLabel="副業ワーカー" />

      {/* ─── HOME: Profile + Today ─── */}
      {tab === "home" && (
        <div style={{ padding: "8px 20px 20px" }}>
          {/* Profile Card */}
          <Card style={{ marginBottom: 16, background: `linear-gradient(135deg, ${proLight}, #fff)`, borderColor: proColor }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: proColor, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#fff", fontSize: 22, fontWeight: 700 }}>渡</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                  <p style={{ fontFamily: fonts.display, fontSize: 18, fontWeight: 700, color: cl.text, margin: 0 }}>{worker.name}</p>
                  <span style={{ padding: "2px 8px", borderRadius: 8, fontSize: 9, fontWeight: 700, color: "#fff", backgroundColor: proColor, fontFamily: fonts.body }}>{worker.rank}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <StarRating rating={worker.rating} />
                  <span style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted }}>（{worker.reviews}件）</span>
                </div>
                <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: "2px 0 0" }}>{worker.jobs}件完了 ─ {worker.since}〜</p>
              </div>
            </div>
          </Card>

          {/* Earnings KPI */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
            <Card style={{ padding: 14, textAlign: "center" }}>
              <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>今月の報酬</p>
              <p style={{ fontFamily: fonts.display, fontSize: 24, fontWeight: 700, color: proColor, margin: "4px 0 0" }}>¥{worker.monthEarnings.toLocaleString()}</p>
            </Card>
            <Card style={{ padding: 14, textAlign: "center" }}>
              <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>今日の案件</p>
              <p style={{ fontFamily: fonts.display, fontSize: 24, fontWeight: 700, color: cl.text, margin: "4px 0 0" }}>4件</p>
              <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.canopy, margin: 0 }}>¥20,500</p>
            </Card>
          </div>

          {/* AI Plan */}
          {!planGenerated ? (
            <Card style={{ marginBottom: 16, textAlign: "center", padding: 28, border: `2px dashed ${proColor}40`, background: proLight }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: proColor, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                {Icons.zap({ size: 24, color: "#fff" })}
              </div>
              <h3 style={{ fontFamily: fonts.display, fontSize: 16, color: cl.text, margin: "0 0 6px" }}>今日のAIプランを生成</h3>
              <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: "0 0 16px" }}>案件・ルート・時間を最適化</p>
              <Button full onClick={handleGenerate} style={{ backgroundColor: proColor, fontSize: 15 }}
                icon={generating ? null : Icons.zap({ size: 16, color: "#fff" })}>
                {generating ? "最適ルートを計算中..." : "プランを生成"}
              </Button>
            </Card>
          ) : (
            <div>
              {/* Map */}
              <Card style={{ marginBottom: 14, padding: 0, overflow: "hidden" }}>
                <div style={{ width: "100%", height: 200, backgroundColor: "#e8e5de" }}>
                  <iframe src={mapSrc} style={{ width: "100%", height: "100%", border: "none" }} allowFullScreen loading="lazy" title="pro-route" />
                </div>
                <div style={{ padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    {proStops.map((s, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 3 }}>
                        <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: prioC[s.priority], display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ color: "#fff", fontSize: 8, fontWeight: 700 }}>{s.order}</span>
                        </div>
                        <span style={{ fontFamily: fonts.body, fontSize: 9, color: cl.textMuted }}>{s.customer.split(" ")[1]}</span>
                      </div>
                    ))}
                  </div>
                  <a href={`https://www.google.com/maps/dir/36.5613,136.6562/${proStops.map(s=>`${s.lat},${s.lng}`).join("/")}`} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: fonts.body, fontSize: 10, color: cl.forestMid, fontWeight: 600, textDecoration: "none", padding: "3px 8px", backgroundColor: cl.light, borderRadius: 6 }}>
                    ナビ開始
                  </a>
                </div>
              </Card>

              {/* Timeline */}
              {proStops.map((s, i) => (
                <Card key={i} style={{ marginBottom: 8, borderLeft: `4px solid ${prioC[s.priority]}`, padding: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontFamily: fonts.display, fontSize: 14, fontWeight: 700, color: cl.text }}>{s.order}. {s.customer}</span>
                      <Badge color={prioC[s.priority]} bg={s.priority === "高" ? cl.dangerLight : s.priority === "中" ? cl.accentLight : cl.light}>{s.priority}</Badge>
                    </div>
                    <span style={{ fontFamily: fonts.display, fontSize: 15, fontWeight: 700, color: proColor }}>{s.pay}</span>
                  </div>
                  <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "0 0 4px" }}>{s.address} ─ {s.time}</p>
                  <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.text, margin: 0 }}>{s.tasks.join("・")}</p>
                </Card>
              ))}
              <Button full onClick={() => setPlanGenerated(false)} variant="outline" style={{ marginTop: 8 }} icon={Icons.zap({ size: 14, color: cl.forestMid })}>プラン再生成</Button>
            </div>
          )}
        </div>
      )}

      {/* ─── EARNINGS & TAX ─── */}
      {tab === "earnings" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="収益管理" subtitle="確定申告・税務管理" />

          <Card style={{ marginBottom: 16, background: `linear-gradient(135deg, ${proLight}, #fff)`, borderColor: proColor }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>年間累計収益</p>
                <p style={{ fontFamily: fonts.display, fontSize: 26, fontWeight: 700, color: proColor, margin: "4px 0 0" }}>¥{worker.yearEarnings.toLocaleString()}</p>
              </div>
              <div>
                <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>年間経費</p>
                <p style={{ fontFamily: fonts.display, fontSize: 26, fontWeight: 700, color: cl.text, margin: "4px 0 0" }}>¥128,400</p>
              </div>
            </div>
          </Card>

          {/* Tax Alert */}
          <Card style={{ marginBottom: 16, backgroundColor: cl.accentLight, borderColor: cl.goldWarm, padding: 14 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              {Icons.alert({ size: 16, color: cl.goldWarm })}
              <div>
                <p style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: cl.text, margin: "0 0 4px" }}>確定申告の目安</p>
                <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0, lineHeight: 1.6 }}>
                  副業所得が年間20万円を超えています。確定申告が必要です。収支レポートを下記からダウンロードできます。
                </p>
              </div>
            </div>
          </Card>

          {/* Monthly Breakdown */}
          <h3 style={{ fontFamily: fonts.display, fontSize: 15, margin: "0 0 10px", color: cl.text }}>月別収益</h3>
          {[
            { month: "4月（今月）", amount: "¥187,500", jobs: 24, partial: true },
            { month: "3月", amount: "¥204,000", jobs: 28 },
            { month: "2月", amount: "¥198,500", jobs: 26 },
            { month: "1月", amount: "¥223,000", jobs: 31 },
          ].map((m, i) => (
            <Card key={i} style={{ marginBottom: 8, padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: cl.text, margin: 0 }}>
                    {m.month} {m.partial && <span style={{ fontSize: 10, color: cl.goldWarm }}>（途中）</span>}
                  </p>
                  <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "2px 0 0" }}>{m.jobs}件完了</p>
                </div>
                <p style={{ fontFamily: fonts.display, fontSize: 18, fontWeight: 700, color: proColor, margin: 0 }}>{m.amount}</p>
              </div>
            </Card>
          ))}

          <Button full variant="outline" style={{ marginTop: 8 }}>確定申告用レポートを出力</Button>
        </div>
      )}

      {/* ─── REVIEWS ─── */}
      {tab === "reviews" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="レビュー・評価" subtitle={`平均 ${worker.rating} ─ ${worker.reviews}件のレビュー`} />

          {/* Rating Summary */}
          <Card style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: fonts.display, fontSize: 42, fontWeight: 700, color: proColor, margin: 0, lineHeight: 1 }}>{worker.rating}</p>
                <StarRating rating={worker.rating} />
              </div>
              <div style={{ flex: 1 }}>
                {[5,4,3,2,1].map(star => {
                  const pct = star === 5 ? 82 : star === 4 ? 14 : star === 3 ? 4 : 0;
                  return (
                    <div key={star} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                      <span style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, width: 12 }}>{star}</span>
                      <div style={{ flex: 1, height: 6, borderRadius: 3, backgroundColor: cl.bg }}>
                        <div style={{ width: `${pct}%`, height: "100%", borderRadius: 3, backgroundColor: proColor }} />
                      </div>
                      <span style={{ fontFamily: fonts.body, fontSize: 9, color: cl.textMuted, width: 24 }}>{pct}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Review List */}
          {[
            { name: "田中 花子", date: "4月10日", stars: 5, text: "とても丁寧にお庭を手入れしていただきました。写真レポートも分かりやすく、家族も安心しています。" },
            { name: "佐藤 美恵子", date: "4月5日", stars: 5, text: "雪かきを素早く対応していただき助かりました。朝早い時間に来てくれて本当にありがたいです。" },
            { name: "山本 太郎", date: "3月28日", stars: 4, text: "作業は丁寧でした。次回は剪定もお願いしたいです。" },
            { name: "小林 正男", date: "3月20日", stars: 5, text: "近所で評判が良いと聞いて頼みました。期待通りの仕事ぶりです。定期でお願いすることにしました。" },
          ].map((r, i) => (
            <Card key={i} style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: cl.light, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 700, color: cl.forestMid }}>{r.name[0]}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text, margin: 0 }}>{r.name}</p>
                    <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: 0 }}>{r.date}</p>
                  </div>
                </div>
                <StarRating rating={r.stars} />
              </div>
              <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.text, margin: 0, lineHeight: 1.7 }}>{r.text}</p>
            </Card>
          ))}
        </div>
      )}

      {/* ─── ACTIVITY LOG ─── */}
      {tab === "log" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="活動履歴" subtitle="全案件の記録" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16 }}>
            {[{ label: "今月", value: "24件" }, { label: "完了率", value: "98%" }, { label: "稼働時間", value: "62h" }].map((k, i) => (
              <Card key={i} style={{ textAlign: "center", padding: 12 }}>
                <p style={{ fontFamily: fonts.body, fontSize: 9, color: cl.textMuted, margin: 0 }}>{k.label}</p>
                <p style={{ fontFamily: fonts.display, fontSize: 18, fontWeight: 700, color: cl.text, margin: "2px 0" }}>{k.value}</p>
              </Card>
            ))}
          </div>
          {[
            { date: "4月13日", job: "除草＋剪定", customer: "山本邸", hours: "2.0h", pay: "¥8,500", status: "完了" },
            { date: "4月13日", job: "軽除草＋清掃", customer: "田中邸", hours: "1.0h", pay: "¥5,000", status: "完了" },
            { date: "4月12日", job: "雪かき", customer: "小林邸", hours: "1.0h", pay: "¥4,000", status: "完了" },
            { date: "4月12日", job: "目視確認", customer: "佐藤邸", hours: "0.5h", pay: "¥3,000", status: "完了" },
            { date: "4月11日", job: "除草（大規模）", customer: "中村邸", hours: "3.0h", pay: "¥12,000", status: "完了" },
            { date: "4月10日", job: "剪定＋清掃", customer: "田中邸", hours: "1.5h", pay: "¥6,500", status: "完了" },
          ].map((log, i) => (
            <Card key={i} style={{ marginBottom: 6, padding: 12 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text, margin: 0 }}>{log.job}</p>
                  <p style={{ fontFamily: fonts.body, fontSize: 10, color: cl.textMuted, margin: "2px 0 0" }}>{log.date} ─ {log.customer} ─ {log.hours}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontFamily: fonts.display, fontSize: 15, fontWeight: 700, color: proColor, margin: 0 }}>{log.pay}</p>
                  <Badge color={cl.canopy} bg={cl.light}>{log.status}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <TabBar active={tab} onChange={setTab} tabs={[
        { id: "home", label: "今日のプラン", icon: Icons.zap },
        { id: "earnings", label: "収益", icon: Icons.wallet },
        { id: "reviews", label: "レビュー", icon: Icons.star },
        { id: "log", label: "活動履歴", icon: Icons.calendar },
      ]} />
    </div>
  );
};

// ═══════════════════════════════════════
// STUDENT VIEW (ちょこっとバイト)
// ═══════════════════════════════════════
const studentColor = "#5B9BD5";
const studentLight = "#EBF3FB";
const studentDark = "#3A7BBF";

const StudentView = ({ onBack }) => {
  const [screen, setScreen] = useState("intro"); // intro, register, step2, step3, step4, complete, dashboard
  const [form, setForm] = useState({ name: "", school: "", grade: "", phone: "", area: "", parentName: "", parentPhone: "", parentEmail: "" });
  const [checks, setChecks] = useState({ schoolRules: false, parentConsent: false, laborLaw: false, privacy: false });
  const [tab, setTab] = useState("home");
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const toggleCheck = (k) => setChecks(p => ({ ...p, [k]: !p[k] }));
  const allChecked = Object.values(checks).every(Boolean);

  const inputStyle = {
    width: "100%", padding: "12px 14px", borderRadius: 12, border: `1.5px solid ${cl.border}`,
    fontFamily: fonts.body, fontSize: 15, color: cl.text, backgroundColor: "#fff",
    outline: "none", boxSizing: "border-box",
  };

  // Intro screen
  if (screen === "intro") return (
    <div style={{ backgroundColor: cl.bg, minHeight: "100vh" }}>
      <NavBar onBack={onBack} rightLabel="高校生向け" />
      <div style={{ padding: "8px 24px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 24, marginTop: 8 }}>
          <span style={{ fontSize: 56, display: "block", marginBottom: 8 }}>⛄</span>
          <h1 style={{ fontFamily: fonts.display, fontSize: 26, color: cl.text, margin: "0 0 6px" }}>ちょこっとバイト</h1>
          <p style={{ fontFamily: fonts.body, fontSize: 14, color: studentColor, margin: 0, fontWeight: 600 }}>近所のお手伝いでお小遣い稼ぎ</p>
        </div>

        <Card style={{ marginBottom: 16 }}>
          <h3 style={{ fontFamily: fonts.display, fontSize: 15, margin: "0 0 12px", color: cl.text }}>どんなお仕事？</h3>
          {[
            { emoji: "❄️", title: "雪かきサポート", desc: "冬の朝、近所の高齢者宅の雪かき", pay: "¥1,500〜/回" },
            { emoji: "🌿", title: "庭のお手伝い", desc: "草むしり・落ち葉掃除・水やり", pay: "¥1,200〜/時" },
            { emoji: "📦", title: "軽作業サポート", desc: "ゴミ出し・買い物のお手伝い", pay: "¥1,000〜/時" },
          ].map((job, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: i < 2 ? `1px solid ${cl.border}` : "none" }}>
              <span style={{ fontSize: 28 }}>{job.emoji}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: cl.text, margin: 0 }}>{job.title}</p>
                <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "2px 0" }}>{job.desc}</p>
              </div>
              <Badge color={studentDark} bg={studentLight}>{job.pay}</Badge>
            </div>
          ))}
        </Card>

        <Card style={{ marginBottom: 16, background: studentLight, borderColor: studentColor }}>
          <h3 style={{ fontFamily: fonts.display, fontSize: 14, margin: "0 0 10px", color: cl.text }}>安心の仕組み</h3>
          {[
            "保護者の同意が必須です",
            "労働時間はアプリで自動記録・保護者に共有",
            "18時以降・試験期間中のお仕事はありません",
            "学校の校則に沿って運営します",
            "保険加入済み・Komorebiスタッフがサポート",
          ].map((text, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "4px 0" }}>
              {Icons.check({ size: 14, color: studentColor })}
              <span style={{ fontFamily: fonts.body, fontSize: 12, color: cl.text, lineHeight: 1.5 }}>{text}</span>
            </div>
          ))}
        </Card>

        <Button full onClick={() => setScreen("register")} style={{ padding: "16px 24px", fontSize: 16, backgroundColor: studentColor }}>
          登録をはじめる（約5分）
        </Button>
      </div>
    </div>
  );

  // Registration Step 1: Basic info
  if (screen === "register") return (
    <div style={{ backgroundColor: cl.bg, minHeight: "100vh" }}>
      <div style={{ padding: "16px 20px 0", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={() => setScreen("intro")} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>{Icons.back({ size: 20, color: cl.textMuted })}</button>
        <span style={{ fontFamily: fonts.display, fontSize: 16, fontWeight: 700, color: cl.text }}>ちょこっとバイト登録</span>
      </div>
      <div style={{ padding: "16px 24px 40px" }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
          {[1,2,3,4].map(s => <div key={s} style={{ flex: 1, height: 4, borderRadius: 2, backgroundColor: s <= 1 ? studentColor : cl.border }} />)}
          <span style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, marginLeft: 8 }}>1/4</span>
        </div>
        <h2 style={{ fontFamily: fonts.display, fontSize: 20, color: cl.text, margin: "0 0 4px" }}>あなたの情報</h2>
        <p style={{ fontFamily: fonts.body, fontSize: 13, color: cl.textMuted, margin: "0 0 20px" }}>基本情報をご入力ください</p>

        {[
          { key: "name", label: "お名前", ph: "山田 太郎" },
          { key: "school", label: "学校名", ph: "石川県立金沢泉丘高等学校" },
          { key: "grade", label: "学年", ph: "高校2年" },
          { key: "phone", label: "電話番号", ph: "090-XXXX-XXXX" },
          { key: "area", label: "お住まいのエリア", ph: "金沢市泉野出町" },
        ].map(({ key, label, ph }) => (
          <div key={key} style={{ marginBottom: 14 }}>
            <label style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: cl.text, display: "block", marginBottom: 5 }}>{label}</label>
            <input value={form[key]} onChange={e => set(key, e.target.value)} placeholder={ph} style={inputStyle} />
          </div>
        ))}
        <Button full onClick={() => setScreen("step2")} style={{ marginTop: 8, padding: "15px 24px", fontSize: 15, backgroundColor: studentColor }}>次へ</Button>
      </div>
    </div>
  );

  // Step 2: Parent info
  if (screen === "step2") return (
    <div style={{ backgroundColor: cl.bg, minHeight: "100vh" }}>
      <div style={{ padding: "16px 20px 0", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={() => setScreen("register")} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>{Icons.back({ size: 20, color: cl.textMuted })}</button>
        <span style={{ fontFamily: fonts.display, fontSize: 16, fontWeight: 700, color: cl.text }}>ちょこっとバイト登録</span>
      </div>
      <div style={{ padding: "16px 24px 40px" }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
          {[1,2,3,4].map(s => <div key={s} style={{ flex: 1, height: 4, borderRadius: 2, backgroundColor: s <= 2 ? studentColor : cl.border }} />)}
          <span style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, marginLeft: 8 }}>2/4</span>
        </div>
        <h2 style={{ fontFamily: fonts.display, fontSize: 20, color: cl.text, margin: "0 0 4px" }}>保護者の情報</h2>
        <p style={{ fontFamily: fonts.body, fontSize: 13, color: cl.textMuted, margin: "0 0 6px" }}>保護者の同意が必要です</p>

        <Card style={{ marginBottom: 16, backgroundColor: cl.accentLight, borderColor: cl.goldWarm, padding: 14 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            {Icons.shield({ size: 16, color: cl.goldWarm })}
            <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.text, margin: 0, lineHeight: 1.6 }}>
              保護者の方に確認メールが届きます。同意を得られるまでお仕事は開始できません。
            </p>
          </div>
        </Card>

        {[
          { key: "parentName", label: "保護者のお名前", ph: "山田 花子" },
          { key: "parentPhone", label: "保護者の電話番号", ph: "090-XXXX-XXXX" },
          { key: "parentEmail", label: "保護者のメールアドレス", ph: "parent@example.com" },
        ].map(({ key, label, ph }) => (
          <div key={key} style={{ marginBottom: 14 }}>
            <label style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: cl.text, display: "block", marginBottom: 5 }}>{label}</label>
            <input value={form[key]} onChange={e => set(key, e.target.value)} placeholder={ph} style={inputStyle} />
          </div>
        ))}
        <Button full onClick={() => setScreen("step3")} style={{ marginTop: 8, padding: "15px 24px", fontSize: 15, backgroundColor: studentColor }}>次へ</Button>
      </div>
    </div>
  );

  // Step 3: Compliance checkboxes
  if (screen === "step3") return (
    <div style={{ backgroundColor: cl.bg, minHeight: "100vh" }}>
      <div style={{ padding: "16px 20px 0", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={() => setScreen("step2")} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>{Icons.back({ size: 20, color: cl.textMuted })}</button>
        <span style={{ fontFamily: fonts.display, fontSize: 16, fontWeight: 700, color: cl.text }}>ちょこっとバイト登録</span>
      </div>
      <div style={{ padding: "16px 24px 40px" }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
          {[1,2,3,4].map(s => <div key={s} style={{ flex: 1, height: 4, borderRadius: 2, backgroundColor: s <= 3 ? studentColor : cl.border }} />)}
          <span style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, marginLeft: 8 }}>3/4</span>
        </div>
        <h2 style={{ fontFamily: fonts.display, fontSize: 20, color: cl.text, margin: "0 0 4px" }}>確認事項</h2>
        <p style={{ fontFamily: fonts.body, fontSize: 13, color: cl.textMuted, margin: "0 0 20px" }}>すべての項目を確認してください</p>

        {[
          { key: "schoolRules", title: "学校の校則を確認しました", desc: "アルバイトが校則で禁止されていないこと、または許可を得ていることを確認しました" },
          { key: "parentConsent", title: "保護者の同意を得ます", desc: "保護者の方に確認メールが届き、同意なしではお仕事は開始できません" },
          { key: "laborLaw", title: "労働条件に同意します", desc: "1日4時間以内・18時まで・試験1週間前は休止・週3日以内の条件で働きます" },
          { key: "privacy", title: "個人情報の取り扱いに同意します", desc: "労働時間の記録が保護者・Komorebiに共有されることに同意します" },
        ].map(({ key, title, desc }) => (
          <div key={key} onClick={() => toggleCheck(key)} style={{
            display: "flex", gap: 14, padding: 16, marginBottom: 10, borderRadius: 14, cursor: "pointer",
            backgroundColor: checks[key] ? studentLight : "#fff",
            border: `1.5px solid ${checks[key] ? studentColor : cl.border}`, transition: "all 0.2s",
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: 8, flexShrink: 0, marginTop: 2,
              backgroundColor: checks[key] ? studentColor : "#fff",
              border: `2px solid ${checks[key] ? studentColor : cl.border}`,
              display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s",
            }}>
              {checks[key] && Icons.check({ size: 14, color: "#fff" })}
            </div>
            <div>
              <p style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: cl.text, margin: "0 0 4px" }}>{title}</p>
              <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0, lineHeight: 1.5 }}>{desc}</p>
            </div>
          </div>
        ))}

        <Button full onClick={() => setScreen("step4")} disabled={!allChecked} style={{
          marginTop: 12, padding: "15px 24px", fontSize: 15,
          backgroundColor: allChecked ? studentColor : cl.border,
        }}>次へ</Button>
      </div>
    </div>
  );

  // Step 4: Confirmation
  if (screen === "step4") return (
    <div style={{ backgroundColor: cl.bg, minHeight: "100vh" }}>
      <div style={{ padding: "16px 20px 0", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={() => setScreen("step3")} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>{Icons.back({ size: 20, color: cl.textMuted })}</button>
        <span style={{ fontFamily: fonts.display, fontSize: 16, fontWeight: 700, color: cl.text }}>ちょこっとバイト登録</span>
      </div>
      <div style={{ padding: "16px 24px 40px" }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
          {[1,2,3,4].map(s => <div key={s} style={{ flex: 1, height: 4, borderRadius: 2, backgroundColor: studentColor }} />)}
          <span style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, marginLeft: 8 }}>4/4</span>
        </div>
        <h2 style={{ fontFamily: fonts.display, fontSize: 20, color: cl.text, margin: "0 0 20px" }}>登録内容の確認</h2>

        <Card style={{ marginBottom: 16, backgroundColor: cl.bg }}>
          {[
            { label: "お名前", value: form.name || "未入力" },
            { label: "学校名", value: form.school || "未入力" },
            { label: "学年", value: form.grade || "未入力" },
            { label: "エリア", value: form.area || "未入力" },
            { label: "保護者", value: form.parentName || "未入力" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${cl.border}` }}>
              <span style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted }}>{item.label}</span>
              <span style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: cl.text }}>{item.value}</span>
            </div>
          ))}
        </Card>

        <Card style={{ marginBottom: 20, backgroundColor: studentLight, borderColor: studentColor, padding: 14 }}>
          <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.text, margin: 0, lineHeight: 1.7 }}>
            登録後、保護者の方（{form.parentEmail || "メール"}）に同意確認メールが届きます。同意が完了するとお仕事を受けられるようになります。
          </p>
        </Card>

        <Button full onClick={() => setScreen("complete")} style={{ padding: "16px 24px", fontSize: 16, backgroundColor: studentColor }}>
          登録を完了する
        </Button>
      </div>
    </div>
  );

  // Complete
  if (screen === "complete") return (
    <div style={{ minHeight: "100vh", backgroundColor: cl.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ textAlign: "center", maxWidth: 340 }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", backgroundColor: studentLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", border: `3px solid ${studentColor}` }}>
          {Icons.check({ size: 40, color: studentColor })}
        </div>
        <h1 style={{ fontFamily: fonts.display, fontSize: 24, color: cl.text, margin: "0 0 8px" }}>登録完了！</h1>
        <p style={{ fontFamily: fonts.body, fontSize: 14, color: cl.textMuted, margin: "0 0 24px", lineHeight: 1.6 }}>
          {form.name || ""}さん、ようこそ！<br />保護者の同意確認後にお仕事が始められます。
        </p>
        <Card style={{ marginBottom: 20, textAlign: "left" }}>
          {[
            { step: "1", text: "保護者にメールが届きます", time: "すぐ" },
            { step: "2", text: "保護者が同意ボタンを押す", time: "保護者次第" },
            { step: "3", text: "近所のお仕事が届き始めます", time: "同意後すぐ" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < 2 ? `1px solid ${cl.border}` : "none" }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", backgroundColor: studentColor, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#fff", fontFamily: fonts.body, fontSize: 11, fontWeight: 700 }}>{item.step}</span>
              </div>
              <div>
                <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text, margin: 0 }}>{item.text}</p>
                <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0 }}>{item.time}</p>
              </div>
            </div>
          ))}
        </Card>
        <Button full onClick={() => setScreen("dashboard")} style={{ backgroundColor: studentColor, fontSize: 15 }}>ダッシュボードを見る</Button>
      </div>
    </div>
  );

  // Dashboard
  return (
    <div style={{ backgroundColor: cl.bg, minHeight: "100vh", paddingBottom: 80 }}>
      <NavBar onBack={onBack} rightLabel="ちょこっとバイト" />

      {tab === "home" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title={`${form.name || "太郎"}さん`} subtitle={`${form.school || "金沢泉丘高校"} ─ ${form.area || "泉野出町エリア"}`} />

          {/* Earnings Card */}
          <Card style={{ marginBottom: 16, background: `linear-gradient(135deg, ${studentLight}, #fff)`, borderColor: studentColor }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0 }}>今月の報酬</p>
                <p style={{ fontFamily: fonts.display, fontSize: 32, fontWeight: 700, color: studentDark, margin: "4px 0 0" }}>¥8,400</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0 }}>今月の稼働</p>
                <p style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: cl.text, margin: "4px 0 0" }}>6回</p>
                <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0 }}>合計 8.5時間</p>
              </div>
            </div>
          </Card>

          {/* Compliance Status */}
          <Card style={{ marginBottom: 16, padding: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              {Icons.shield({ size: 16, color: cl.canopy })}
              <span style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text }}>コンプライアンス状況</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                { label: "保護者同意", value: "✓ 承認済", ok: true },
                { label: "今週の稼働", value: "2回/3回上限", ok: true },
                { label: "今日の残り", value: "2時間", ok: true },
                { label: "試験期間", value: "対象外", ok: true },
              ].map((s, i) => (
                <div key={i} style={{ padding: 8, backgroundColor: s.ok ? cl.light : cl.dangerLight, borderRadius: 8 }}>
                  <p style={{ fontFamily: fonts.body, fontSize: 9, color: cl.textMuted, margin: 0 }}>{s.label}</p>
                  <p style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, color: s.ok ? cl.canopy : cl.danger, margin: "2px 0 0" }}>{s.value}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Available Jobs */}
          <h3 style={{ fontFamily: fonts.display, fontSize: 15, margin: "0 0 10px", color: cl.text }}>近くのお仕事</h3>
          {[
            { type: "❄️ 雪かき", customer: "田中邸", area: "野町3丁目", dist: "300m", pay: "¥1,500", time: "朝7:30〜8:30", urgent: true },
            { type: "🌿 草むしり", customer: "佐藤邸", area: "寺町2丁目", dist: "500m", pay: "¥1,200/h", time: "土曜 10:00〜", urgent: false },
            { type: "📦 ゴミ出し", customer: "山本邸", area: "泉野出町", dist: "200m", pay: "¥500/回", time: "水・土 朝", urgent: false },
          ].map((job, i) => (
            <Card key={i} style={{ marginBottom: 10, borderLeft: job.urgent ? `4px solid ${cl.danger}` : `4px solid ${studentColor}` }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <p style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: cl.text, margin: 0 }}>{job.type}</p>
                    {job.urgent && <Badge color={cl.danger} bg={cl.dangerLight}>急募</Badge>}
                  </div>
                  <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "0 0 2px" }}>{job.customer} ─ {job.area}（{job.dist}）</p>
                  <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0 }}>{job.time}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontFamily: fonts.display, fontSize: 16, fontWeight: 700, color: studentDark, margin: 0 }}>{job.pay}</p>
                  <Button variant="soft" onClick={() => {}} style={{ marginTop: 6, padding: "6px 14px", fontSize: 11, backgroundColor: studentLight, color: studentDark }}>応募する</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {tab === "log" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="活動ログ" subtitle="保護者・Komorebiに共有されます" />
          <Card style={{ marginBottom: 14, backgroundColor: studentLight, borderColor: studentColor, padding: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {Icons.shield({ size: 14, color: studentColor })}
              <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.text, margin: 0 }}>
                すべての記録は保護者の方にリアルタイムで共有されています
              </p>
            </div>
          </Card>
          {[
            { date: "4月12日（土）", job: "🌿 草むしり", customer: "佐藤邸", hours: "2.0h", pay: "¥2,400", start: "10:00", end: "12:00" },
            { date: "4月11日（金）", job: "❄️ 雪かき", customer: "田中邸", hours: "1.0h", pay: "¥1,500", start: "7:30", end: "8:30" },
            { date: "4月9日（水）", job: "📦 ゴミ出し", customer: "山本邸", hours: "0.5h", pay: "¥500", start: "7:00", end: "7:30" },
            { date: "4月5日（土）", job: "🌿 草むしり", customer: "田中邸", hours: "1.5h", pay: "¥1,800", start: "10:00", end: "11:30" },
            { date: "4月4日（金）", job: "❄️ 雪かき", customer: "田中邸", hours: "1.0h", pay: "¥1,500", start: "7:30", end: "8:30" },
          ].map((log, i) => (
            <Card key={i} style={{ marginBottom: 8, padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: cl.text, margin: 0 }}>{log.job}</p>
                  <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: "2px 0" }}>{log.date} ─ {log.customer}</p>
                  <p style={{ fontFamily: fonts.body, fontSize: 11, color: cl.textMuted, margin: 0 }}>{log.start}〜{log.end}（{log.hours}）</p>
                </div>
                <p style={{ fontFamily: fonts.display, fontSize: 16, fontWeight: 700, color: studentDark, margin: 0 }}>{log.pay}</p>
              </div>
            </Card>
          ))}
        </div>
      )}

      {tab === "rules" && (
        <div style={{ padding: "8px 20px 20px" }}>
          <Header title="ルール・安全" />
          <Card style={{ marginBottom: 16 }}>
            <h3 style={{ fontFamily: fonts.display, fontSize: 15, margin: "0 0 14px", color: cl.text }}>労働ルール</h3>
            {[
              { rule: "1日の作業上限", value: "4時間まで", icon: "⏰" },
              { rule: "作業終了時刻", value: "18:00まで", icon: "🌅" },
              { rule: "週の作業上限", value: "3日まで", icon: "📅" },
              { rule: "試験期間", value: "1週間前から休止", icon: "📝" },
              { rule: "危険作業", value: "禁止（高所・重機など）", icon: "⚠️" },
              { rule: "悪天候時", value: "Komorebiが中止判断", icon: "🌧" },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 5 ? `1px solid ${cl.border}` : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 16 }}>{r.icon}</span>
                  <span style={{ fontFamily: fonts.body, fontSize: 13, color: cl.text }}>{r.rule}</span>
                </div>
                <span style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: studentDark }}>{r.value}</span>
              </div>
            ))}
          </Card>

          <Card style={{ backgroundColor: cl.accentLight, borderColor: cl.goldWarm }}>
            <h4 style={{ fontFamily: fonts.display, fontSize: 14, margin: "0 0 8px", color: cl.text }}>困ったときは</h4>
            <p style={{ fontFamily: fonts.body, fontSize: 12, color: cl.textMuted, margin: "0 0 12px", lineHeight: 1.6 }}>
              お仕事中に困ったこと・危険を感じたことがあれば、すぐにKomorebiに連絡してください。
            </p>
            <Button full icon={Icons.phone({ size: 16, color: "#fff" })} style={{ backgroundColor: studentColor }}>Komorebiに連絡する</Button>
          </Card>
        </div>
      )}

      <TabBar active={tab} onChange={setTab} tabs={[
        { id: "home", label: "ホーム", icon: Icons.home },
        { id: "log", label: "活動ログ", icon: Icons.calendar },
        { id: "rules", label: "ルール", icon: Icons.shield },
      ]} />
    </div>
  );
};

// ═══════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════
export default function App() {
  const [role, setRole] = useState(null);
  const [screen, setScreen] = useState("landing");
  const [signupForm, setSignupForm] = useState(null);

  if (screen === "signup") return <SignupFlow onBack={() => setScreen("landing")} onComplete={(form) => { setSignupForm(form); setScreen("complete"); }} />;
  if (screen === "complete") return <SignupComplete form={signupForm} onGoHome={() => { setScreen("landing"); setRole(null); }} />;
  if (!role) return <RoleSelect onSelect={setRole} onSignup={() => setScreen("signup")} />;
  if (role === "customer") return <CustomerView onBack={() => setRole(null)} />;
  if (role === "student") return <StudentView onBack={() => setRole(null)} />;
  if (role === "proworker") return <ProWorkerView onBack={() => setRole(null)} />;
  if (role === "helper") return <HelperView onBack={() => setRole(null)} />;
  if (role === "family") return <FamilyView onBack={() => setRole(null)} />;
  if (role === "admin") return <AdminView onBack={() => setRole(null)} />;
}
