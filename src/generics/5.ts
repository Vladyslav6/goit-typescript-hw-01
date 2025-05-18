export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}
type UserRoleType = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: UserRoleType = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
