interface CalloutProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function Popout({ children, icon }: CalloutProps) {
  return (
    <div className="mb-6 flex items-center gap-4 rounded border border-muted bg-background px-4 py-2 text-sm text-muted-foreground">
      <div className="flex items-center">{icon}</div>
      <div className="w-full antialiased">{children}</div>
    </div>
  );
}
