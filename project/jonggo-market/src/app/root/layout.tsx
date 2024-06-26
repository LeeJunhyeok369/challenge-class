import Header from "./../_components/Header";

export default function PageLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
