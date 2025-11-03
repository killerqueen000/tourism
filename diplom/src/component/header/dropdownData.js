export const getEatnDrink = (t) => [
  { text: t("dropdown.eat.dishes"), pathdropdown: "/food" },
  { text: t("dropdown.eat.street"), pathdropdown: "/food" },
  { text: t("dropdown.eat.desserts"), pathdropdown: "/food" },
  { text: t("dropdown.eat.regional"), pathdropdown: "/food" },
  { text: t("dropdown.eat.michelin"), pathdropdown: "/food" }
];

export const getBeachesnIsland = (t) => [
  { text: t("dropdown.islands.beaches"), pathdropdown: "/island" },
  { text: t("dropdown.islands.culture"), pathdropdown: "/culture" },
  { text: t("dropdown.islands.family"), pathdropdown: "/family" },
  { text: t("dropdown.islands.nature"), pathdropdown: "/nature" }
];

export const getTravelTips = (t) => [
  { text: t("dropdown.tips.transport"), pathdropdown: "/transport" },
  { text: t("dropdown.tips.apps"), pathdropdown: "/recommApp" }
];

export const getPlanTrip = (t) => [
  { text: t("dropdown.plan.healthcare"), pathdropdown: "https://malaysia.gov.my/portal/category/340" },
  { text: t("dropdown.plan.visa"), pathdropdown: "https://malaysia.gov.my/portal/content/28905" }
];

export const trans = [
  { text: "English", pathdropdown: "en" },
  { text: "Русский", pathdropdown: "ru" },
];
