import { AuthProvider } from "@/contexts/auth.context/auth.context";

function ProviderLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ProviderLayout;
