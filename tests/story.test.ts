import { describe, expect, it } from "vitest";
import { fullTestZones } from "@/src/config/fullTestStory";
import { fogMessages, zones } from "@/src/config/story";
import { haversineDistance, projectPositionToMap } from "@/src/lib/geo";

const checkpoints = zones.flatMap((zone) => zone.checkpoints);

describe("formal Shanghai story route", () => {
  it("uses five reveals across four maps and three self-driving transitions", () => {
    expect(zones).toHaveLength(4);
    expect(fogMessages).toHaveLength(3);
    expect(zones.map((zone) => zone.checkpoints.length)).toEqual([1, 1, 2, 1]);
    expect(checkpoints).toHaveLength(5);
    expect(fogMessages).toEqual([
      "你最初的过去",
      "上海最繁华的地方之一；这个地方是上海最大的；藏着你爱的东西",
      "欧洲有很多；古时王室居住的地方；以上描述名词存在于地点名字中，可以使用一切搜索手段，如大众点评",
    ]);
  });

  it("uses the confirmed parking and start labels", () => {
    expect(zones.map((zone) => zone.parkingLabel)).toEqual([
      "东方吉苑北一门 · 板泉路 1201 弄（起点）",
      "新上海城市广场地下停车场 · 河南南路 33 号（以当日导航为准）",
      "上海世茂广场地下停车场 · 南京东路 819 号 B3（以当日开放入口为准）",
      "益丰·外滩源地下停车场 · 北京东路 99 号（以当日开放入口为准）",
    ]);
  });

  it("keeps the user's revised pre-arrival clue copy verbatim", () => {
    expect(checkpoints.map((checkpoint) => checkpoint.clue)).toEqual([
      "是现在我们的家庭成员",
      "你最初的过去",
      "上海最繁华的地方之一；这个地方是上海最大的；藏着你爱的东西",
      "从孩子到大人都喜欢；你不算擅长；我们一起做过；里面有我很喜欢的东西",
      "欧洲有很多；古时王室居住的地方；以上描述名词存在于地点名字中，可以使用一切搜索手段，如大众点评",
    ]);
  });

  it("keeps the five final reveal labels in order", () => {
    expect(checkpoints.map((checkpoint) => checkpoint.revealLabel)).toEqual([
      "关于每个女孩子的梦想",
      "关于我未曾参与的过去",
      "关于我守护的童心",
      "关于我参与的现在",
      "关于我想参与的未来",
    ]);
  });

  it("uses manual start, a manual adjacent-store arrival, and a fifth-floor manual reveal", () => {
    expect(zones[0].checkpoints[0].completionMode).toBe("manual");
    expect(zones.filter((zone) => zone.id !== "shimao-present").every(
      (zone) => zone.checkpoints[0].allowManualArrivalFallback,
    )).toBe(true);
    expect(zones[2].checkpoints[1]).toMatchObject({
      id: "lego-present",
      arrivalMode: "manual",
      completionMode: "manual",
      arriveButtonLabel: "我已走到相邻铺位",
    });
    expect(zones[3].checkpoints[0]).toMatchObject({
      id: "castle-future",
      completionMode: "manual",
      revealButtonLabel: "我已到达 5 层，手动揭晓",
    });
  });

  it("records the restaurant time and address", () => {
    expect(zones[3].subtitle).toContain("北京东路 99 号");
    expect(zones[3].subtitle).toContain("L501B-1");
    expect(zones[3].subtitle).toContain("19:30");
    expect(zones[3].checkpoints[0].unlockCopy).toContain("19:30");
  });

  it("keeps browser positioning, checkpoints and illustrated anchors registered together", () => {
    for (const zone of zones) {
      expect(zone.coordinateSystem).toBe("wgs84");
      expect(zone.mapOrientation).toBe("north-up");
      expect(zone.mapBounds).toBeDefined();
      expect(zone.mapRoutePoints).toHaveLength(zone.routeGeo.length);
      expect(zone.routeGeo.at(-1)).toEqual(zone.checkpoints.at(-1)?.location);
      for (const checkpoint of zone.checkpoints) {
        const anchorIndex = zone.routeGeo.findIndex(
          (anchor) => haversineDistance(anchor, checkpoint.location) < 0.5,
        );
        expect(anchorIndex).toBeGreaterThanOrEqual(0);
        const projected = projectPositionToMap(checkpoint.location, zone, checkpoint);
        expect(projected.x).toBeCloseTo(checkpoint.mapPoint.x, 0);
        expect(projected.y).toBeCloseTo(checkpoint.mapPoint.y, 0);
        expect(checkpoint.mapPoint).toEqual(zone.mapRoutePoints![anchorIndex]);
      }
    }
  });

  it("keeps POP MART and LEGO in one shared map", () => {
    expect(zones[2].checkpoints.map((item) => item.label)).toEqual([
      "POP MART 泡泡玛特上海世茂旗舰店",
      "LEGO 乐高人民广场旗舰店",
    ]);
    expect(zones[2].mysterySubtitle).toContain("同一座建筑");
  });

  it("uses one new illustrated map for each formal area", () => {
    expect(zones.map((zone) => zone.illustratedMapAsset)).toEqual([
      "/assets/maps/shanghai-home-handdrawn-v3.jpg",
      "/assets/maps/shanghai-yuyuan-handdrawn-v3.jpg",
      "/assets/maps/shanghai-shimao-handdrawn-v3.jpg",
      "/assets/maps/shanghai-castle-handdrawn-v3.jpg",
    ]);
  });

  it("locks the public POIs to their converted WGS-84 endpoints", () => {
    expect(zones[1].checkpoints[0].location).toEqual({
      latitude: 31.230586413,
      longitude: 121.483040172,
    });
    expect(zones[2].checkpoints.map(({ id, location }) => ({ id, location }))).toEqual([
      {
        id: "popmart-childhood",
        location: { latitude: 31.23625360496, longitude: 121.47105675633 },
      },
      {
        id: "lego-present",
        location: { latitude: 31.23627499035, longitude: 121.47083703112 },
      },
    ]);
    expect(zones[3].checkpoints[0].location).toEqual({
      latitude: 31.24241705704,
      longitude: 121.48442303755,
    });
  });

  it("keeps every active goal clear of the collapsed left quest panel", () => {
    for (const checkpoint of checkpoints) expect(checkpoint.mapPoint.x).toBeGreaterThanOrEqual(260);
  });
});

describe("isolated full-test story route", () => {
  it("mirrors the formal route without sharing progress identifiers", () => {
    expect(fullTestZones).toHaveLength(4);
    expect(fullTestZones.flatMap((zone) => zone.checkpoints)).toHaveLength(5);
    expect(fullTestZones.every((zone) => zone.id.startsWith("fulltest-"))).toBe(true);
    expect(fullTestZones.flatMap((zone) => zone.checkpoints).every((item) => item.id.startsWith("fulltest-")))
      .toBe(true);
  });
});
