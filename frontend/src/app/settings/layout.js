export default function SettingsLayout({ children, user, subscription }) {
  return (
    <div>
      <div>Menu</div>
      {children}
      {user}
      {subscription}
    </div>
  );
}
