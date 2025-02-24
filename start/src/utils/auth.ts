import { useUser } from "@clerk/nextjs";

export const useIsAdmin = () => {
  const { user, isLoaded } = useUser();
  return {
    isAdmin: user?.publicMetadata?.role === "admin",
    isLoaded
  };
};