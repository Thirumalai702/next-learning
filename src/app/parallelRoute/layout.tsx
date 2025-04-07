export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notification,
    login,
  }: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notification: React.ReactNode;
    login: React.ReactNode;
  }) {
    const islogin=true;
    return islogin? (
     
      <div>
        <div>{children}</div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div>{notification}</div>
        </div>
      </div>
    ) :( <div>{login}</div>)
  }