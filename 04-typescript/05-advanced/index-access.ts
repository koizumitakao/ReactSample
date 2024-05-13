const permissions = {
  r: 0b100,
  w: 0b010,
  x: 0b001
};

type PermChar = keyof typeof permissions;
type PermNum = typeof permissions[PermChar];
