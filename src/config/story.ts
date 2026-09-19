import type { ExplorationZone, StoryProgress } from "@/src/types";

// Browser Geolocation returns WGS-84. Public POI coordinates originating from
// Chinese map providers were converted before being entered here; runtime code
// never mixes WGS-84 and GCJ-02.
const homeZone: ExplorationZone = {
  id: "home-start",
  order: 1,
  title: "东方吉苑北一门 · 起点",
  subtitle: "板泉路 1201 弄 · 第一站",
  mysteryTitle: "THE FIRST PAGE · HOME",
  mysterySubtitle: "第一站 · 从我们现在拥有的生活出发",
  parkingLabel: "东方吉苑北一门 · 板泉路 1201 弄（起点）",
  parkingMapPoint: { x: 121.7, y: 237.5 },
  center: { latitude: 31.16635, longitude: 121.50015 },
  coordinateSystem: "wgs84",
  routeGeo: [
    { latitude: 31.16635, longitude: 121.49975 },
    // The user confirmed this entrance. The public map POI is approximate, so
    // the first-stop radius intentionally tolerates a street-side GPS fix.
    { latitude: 31.16635, longitude: 121.50055 },
  ],
  mapRoutePoints: [
    { x: 121.7, y: 237.5 },
    { x: 400, y: 237.5 },
  ],
  svgPath: "M121.7 237.5 L400 237.5",
  maxLocationAccuracyM: 160,
  accent: "#7b4d5d",
  mapKind: "garden",
  mapOrientation: "north-up",
  mapBounds: {
    north: 31.1673,
    south: 31.1653,
    west: 121.4994,
    east: 121.5017,
  },
  illustratedMapAsset: "/assets/maps/shanghai-home-aerial-v2.svg",
  checkpoints: [
    {
      id: "home-dream",
      label: "东方吉苑北一门",
      mysteryTitle: "第一枚未知坐标",
      mysteryLabel: "从今天的家出发",
      revealLabel: "关于每个女孩子的梦想",
      giftType: "sparkle",
      location: { latitude: 31.16635, longitude: 121.50055 },
      unlockRadiusM: 80,
      completionMode: "manual",
      allowManualArrivalFallback: true,
      arriveButtonLabel: "定位不准？我已在北一门外",
      revealButtonLabel: "揭晓第一份礼物",
      referenceImage: "/references/sparkle.svg",
      matchMode: "scene-only",
      passScore: 55,
      clue: "是现在我们的家庭成员",
      unlockCopy:
        "第一站揭晓：关于每个女孩子的梦想。故事从我们此刻共同拥有的生活出发。",
      photoPrompt: "这一站使用手动揭晓，不需要照片复刻。",
      mapPoint: { x: 400, y: 237.5 },
    },
  ],
};

const yuyuanZone: ExplorationZone = {
  id: "yuyuan-past",
  order: 2,
  title: "豫园地铁站 · 1 号口",
  subtitle: "河南南路与人民路附近 · 第二站",
  mysteryTitle: "THE SECOND PAGE · PAST",
  mysterySubtitle: "第二站 · 一段我未曾参与的时间",
  parkingLabel: "新上海城市广场地下停车场 · 河南南路 33 号（以当日导航为准）",
  parkingMapPoint: { x: 208, y: 191.3 },
  center: { latitude: 31.23095, longitude: 121.4827 },
  coordinateSystem: "wgs84",
  routeGeo: [
    { latitude: 31.23132, longitude: 121.48235 },
    { latitude: 31.231, longitude: 121.4827 },
    { latitude: 31.230586413, longitude: 121.483040172 },
  ],
  mapRoutePoints: [
    { x: 208, y: 191.3 },
    { x: 320, y: 260.9 },
    { x: 428.9, y: 350.8 },
  ],
  svgPath: "M208 191.3 L320 260.9 L428.9 350.8",
  maxLocationAccuracyM: 140,
  accent: "#425b66",
  mapKind: "vinyl",
  mapOrientation: "north-up",
  mapBounds: {
    north: 31.2322,
    south: 31.2299,
    west: 121.4817,
    east: 121.4842,
  },
  illustratedMapAsset: "/assets/maps/shanghai-yuyuan-aerial-v2.svg",
  checkpoints: [
    {
      id: "yuyuan-past",
      label: "豫园地铁站 1 号口",
      mysteryTitle: "第二枚未知坐标",
      mysteryLabel: "答案藏在你最初的时间里",
      revealLabel: "关于我未曾参与的过去",
      giftType: "sound",
      location: { latitude: 31.230586413, longitude: 121.483040172 },
      unlockRadiusM: 45,
      completionMode: "manual",
      allowManualArrivalFallback: true,
      arriveButtonLabel: "定位不准？我已在豫园站 1 号口",
      revealButtonLabel: "揭晓第二份礼物",
      referenceImage: "/references/sound.svg",
      matchMode: "scene-only",
      passScore: 55,
      clue: "你最初的过去",
      unlockCopy:
        "第二站揭晓：关于我未曾参与的过去。那些我没能见证的岁月，也构成了今天的你。",
      photoPrompt: "这一站使用手动揭晓，不需要照片复刻。",
      mapPoint: { x: 428.9, y: 350.8 },
    },
  ],
};

const shimaoZone: ExplorationZone = {
  id: "shimao-present",
  order: 3,
  title: "上海世茂广场 · 童心与现在",
  subtitle: "南京东路 829 号 · 同一商场相邻铺位",
  mysteryTitle: "THE THIRD PAGE · CHILDHOOD",
  mysterySubtitle: "第三站与第四站 · 两页故事在同一座建筑里",
  parkingLabel: "上海世茂广场地下停车场 · 南京东路 819 号 B3（以当日开放入口为准）",
  parkingMapPoint: { x: 126.3, y: 185.7 },
  center: { latitude: 31.23635, longitude: 121.4707 },
  coordinateSystem: "wgs84",
  routeGeo: [
    { latitude: 31.23655, longitude: 121.4702 },
    { latitude: 31.23625360496, longitude: 121.47105675633 },
    { latitude: 31.23627499035, longitude: 121.47083703112 },
  ],
  mapRoutePoints: [
    { x: 126.3, y: 185.7 },
    { x: 487.1, y: 270.4 },
    { x: 394.5, y: 264.3 },
  ],
  svgPath: "M126.3 185.7 L487.1 270.4 L394.5 264.3",
  maxLocationAccuracyM: 140,
  accent: "#76553b",
  mapKind: "arcade",
  mapOrientation: "north-up",
  mapBounds: {
    north: 31.2372,
    south: 31.23545,
    west: 121.4699,
    east: 121.4718,
  },
  illustratedMapAsset: "/assets/maps/shanghai-shimao-aerial-v2.svg",
  checkpoints: [
    {
      id: "popmart-childhood",
      label: "POP MART 泡泡玛特上海世茂旗舰店",
      mysteryTitle: "第三枚未知坐标",
      mysteryLabel: "在最繁华的地方寻找童心",
      revealLabel: "关于我守护的童心",
      giftType: "sparkle",
      location: { latitude: 31.23625360496, longitude: 121.47105675633 },
      unlockRadiusM: 45,
      completionMode: "manual",
      allowManualArrivalFallback: true,
      arriveButtonLabel: "定位不准？我已在南京东路临街门店外",
      revealButtonLabel: "揭晓第三份礼物",
      referenceImage: "/references/sparkle.svg",
      matchMode: "scene-only",
      passScore: 55,
      clue: "上海最繁华的地方之一；这个地方是上海最大的；藏着你爱的东西",
      unlockCopy:
        "第三站揭晓：关于我守护的童心。愿你喜欢的事物一直被认真珍藏。",
      photoPrompt: "这一站使用手动揭晓，不需要照片复刻。",
      mapPoint: { x: 487.1, y: 270.4 },
    },
    {
      id: "lego-present",
      label: "LEGO 乐高人民广场旗舰店",
      mysteryTitle: "第四枚未知坐标",
      mysteryLabel: "相邻铺位 · 不再使用 GPS",
      revealLabel: "关于我参与的现在",
      giftType: "motion",
      location: { latitude: 31.23627499035, longitude: 121.47083703112 },
      unlockRadiusM: 30,
      arrivalMode: "manual",
      completionMode: "manual",
      arriveButtonLabel: "我已走到相邻铺位",
      revealButtonLabel: "手动揭晓第四份礼物",
      referenceImage: "/references/motion.svg",
      matchMode: "scene-only",
      passScore: 55,
      clue: "从孩子到大人都喜欢；你不算擅长；我们一起做过；里面有我很喜欢的东西",
      unlockCopy:
        "第四站揭晓：关于我参与的现在。我们一起做过的事情，已经成为现在的一部分。",
      photoPrompt: "这一站使用按钮确认与手动揭晓，不需要照片复刻。",
      mapPoint: { x: 394.5, y: 264.3 },
    },
  ],
};

const castleZone: ExplorationZone = {
  id: "castle-future",
  order: 4,
  title: "益丰·外滩源 · THE CASTLE",
  subtitle: "北京东路 99 号 5 层 L501B-1 · 19:30",
  mysteryTitle: "THE FIFTH PAGE · FUTURE",
  mysterySubtitle: "第五站 · 今晚 19:30 前抵达",
  parkingLabel: "益丰·外滩源地下停车场 · 北京东路 99 号（以当日开放入口为准）",
  parkingMapPoint: { x: 147.4, y: 333.3 },
  center: { latitude: 31.24228, longitude: 121.4841 },
  coordinateSystem: "wgs84",
  routeGeo: [
    { latitude: 31.24215, longitude: 121.48375 },
    { latitude: 31.24241705704, longitude: 121.48442303755 },
  ],
  mapRoutePoints: [
    { x: 147.4, y: 333.3 },
    { x: 430.8, y: 252.4 },
  ],
  svgPath: "M147.4 333.3 L430.8 252.4",
  maxLocationAccuracyM: 160,
  accent: "#523e55",
  mapKind: "city",
  mapOrientation: "north-up",
  mapBounds: {
    north: 31.24325,
    south: 31.2416,
    west: 121.4834,
    east: 121.4853,
  },
  illustratedMapAsset: "/assets/maps/shanghai-castle-aerial-v2.svg",
  checkpoints: [
    {
      id: "castle-future",
      label: "THE CASTLE 古堡餐厅",
      mysteryTitle: "第五枚未知坐标",
      mysteryLabel: "答案写在地点的名字里",
      revealLabel: "关于我想参与的未来",
      giftType: "taste",
      location: { latitude: 31.24241705704, longitude: 121.48442303755 },
      unlockRadiusM: 55,
      completionMode: "manual",
      allowManualArrivalFallback: true,
      arriveButtonLabel: "定位不准？我已在益丰·外滩源入口",
      revealButtonLabel: "我已到达 5 层，手动揭晓",
      referenceImage: "/references/taste.svg",
      matchMode: "scene-only",
      passScore: 55,
      clue: "欧洲有很多；古时王室居住的地方；以上描述名词存在于地点名字中，可以使用一切搜索手段，如大众点评",
      unlockCopy:
        "第五站揭晓：关于我想参与的未来。今晚 19:30 的预约，是下一段共同经历的开场。",
      photoPrompt: "在街面入口完成定位，到达 5 层后手动揭晓。",
      mapPoint: { x: 430.8, y: 252.4 },
    },
  ],
};

export const zones: ExplorationZone[] = [homeZone, yuyuanZone, shimaoZone, castleZone];

export const initialProgress: StoryProgress = {
  activeZoneId: zones[0].id,
  activeCheckpointId: zones[0].checkpoints[0].id,
  completedCheckpointIds: [],
  photoAttempts: {},
  capturedPhotoIds: [],
  phase: "intro",
  zoneStarted: false,
  arrivedCheckpointIds: [],
};

export const fogMessages = [
  "你最初的过去",
  "上海最繁华的地方之一；这个地方是上海最大的；藏着你爱的东西",
  "欧洲有很多；古时王室居住的地方；以上描述名词存在于地点名字中，可以使用一切搜索手段，如大众点评",
];

export function findZone(id: string) {
  return zones.find((zone) => zone.id === id) ?? zones[0];
}

export function findCheckpoint(id: string) {
  for (const zone of zones) {
    const checkpoint = zone.checkpoints.find((item) => item.id === id);
    if (checkpoint) return { checkpoint, zone };
  }
  return { checkpoint: zones[0].checkpoints[0], zone: zones[0] };
}
