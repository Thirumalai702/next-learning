export const Card = ({ children }: { children: React.ReactNode }) => {
    const cardStyle = {
        padding: "100px",
        margin: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    };
  
    return <div style={cardStyle}>{children}</div>;
  };