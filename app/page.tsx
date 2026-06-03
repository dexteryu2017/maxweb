import VantaBackground from "@/components/VantaBackground";
import Image from "next/image";

const games = [
  {
    title: "星际先锋",
    desc: "太空射击，驾驶飞船消灭外星入侵者",
    url: "https://fire.victoryu.xyz/",
    emoji: "🚀",
  },
  {
    title: "卡牌游戏",
    desc: "策略卡牌对战，组建最强牌组",
    url: "https://card.victoryu.xyz/",
    emoji: "🃏",
  },
  {
    title: "数块消除",
    desc: "数字益智消除，挑战你的运算极限",
    url: "https://sum.victoryu.xyz/",
    emoji: "🔢",
  },
  {
    title: "地球防御",
    desc: "守护地球，抵御来自宇宙的威胁",
    url: "https://defense.victoryu.xyz/",
    emoji: "🌍",
  },
  {
    title: "色彩敏感度",
    desc: "测试你的色彩感知极限",
    url: "https://color.victoryu.xyz/",
    emoji: "🎨",
  },
  {
    title: "MBTI 人格测试",
    desc: "探索你的人格类型与特质",
    url: "https://gitd2p7yoixz4.ok.kimi.link/",
    emoji: "🧠",
  },
];

const apps = [
  {
    title: "在线抽奖",
    desc: "公平透明的在线抽奖工具",
    url: "https://www.doubao.com/share/code/201655d002efc315",
    emoji: "🎰",
  },
  {
    title: "一次函数可视化",
    desc: "直观展示一次函数图像与变换",
    url: "https://www.doubao.com/share/code/a0b1fb925ce2f00c",
    emoji: "📈",
  },
  {
    title: "方程 3D 可视化",
    desc: "三维空间中的方程图形探索",
    url: "https://www.doubao.com/share/code/4f920f548a279f42",
    emoji: "🧮",
  },
  {
    title: "色彩敏感度测试",
    desc: "精准检测色彩辨别能力",
    url: "https://www.doubao.com/share/code/cb6e6a8030739bad",
    emoji: "🌈",
  },
  {
    title: "单位换算工具",
    desc: "支持多类型单位的快速换算",
    url: "https://www.doubao.com/share/code/172c2ec0a68789b7",
    emoji: "⚖️",
  },
  {
    title: "单词听写助手",
    desc: "智能辅助英语单词听写练习",
    url: "https://www.doubao.com/share/code/1e2e90bb7283591e",
    emoji: "📝",
  },
];

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        padding: "0 0 80px",
      }}
    >
      <VantaBackground />

      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "60px 24px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            marginBottom: "32px",
            position: "relative",
            display: "inline-block",
          }}
        >
          <div
            className="avatar-glow"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #00f5ff 0%, #bf00ff 50%, #ff006e 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3.2rem",
            }}
          >
            🐟
          </div>
        </div>

        <h1
          className="neon-title glitch fade-in-up"
          data-text="MaxYu's AI 作品集"
          style={{
            fontSize: "clamp(2rem, 8vw, 4.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          MaxYu&#39;s AI 作品集
        </h1>

        <p
          className="fade-in-up delay-1"
          style={{
            fontSize: "clamp(1rem, 3vw, 1.3rem)",
            color: "rgba(226, 232, 240, 0.75)",
            marginBottom: "36px",
            maxWidth: "480px",
          }}
        >
          欢迎和我一起玩 AI ~~
        </p>

        <div
          className="fade-in-up delay-2"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          <span className="social-link">
            <span>📕</span>
            <span>小红书：@不讲理的鱼</span>
          </span>
          <a href="mailto:dexter.yu2017@gmail.com" className="social-link">
            <span>✉️</span>
            <span>dexter.yu2017@gmail.com</span>
          </a>
        </div>

        <div
          className="fade-in-up delay-3"
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.75rem",
            animation: "bounce 2s ease-in-out infinite",
          }}
        >
          <span>↓</span>
          <span>向下滚动</span>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Games */}
        <section style={{ marginBottom: "80px" }}>
          <h2 className="section-title">
            <span style={{ fontSize: "1.6rem" }}>🎮</span>
            我的 AI 游戏
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {games.map((game, i) => (
              <a
                key={game.title}
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
                className={`fade-in-up delay-${Math.min(i + 1, 6)}`}
              >
                <div className="card" style={{ padding: "28px 24px", height: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "16px",
                    }}
                  >
                    <span style={{ fontSize: "2.4rem" }}>{game.emoji}</span>
                    <span className="tag tag-game">游戏</span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "8px",
                    }}
                  >
                    {game.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(226,232,240,0.6)",
                      lineHeight: 1.6,
                      marginBottom: "20px",
                    }}
                  >
                    {game.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--neon-cyan)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    <span>开始游戏</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Apps */}
        <section style={{ marginBottom: "80px" }}>
          <h2 className="section-title">
            <span style={{ fontSize: "1.6rem" }}>⚡</span>
            我的 AI 应用
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {apps.map((app, i) => (
              <a
                key={app.title}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
                className={`fade-in-up delay-${Math.min(i + 1, 6)}`}
              >
                <div className="card" style={{ padding: "28px 24px", height: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "16px",
                    }}
                  >
                    <span style={{ fontSize: "2.4rem" }}>{app.emoji}</span>
                    <span className="tag tag-app">应用</span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "8px",
                    }}
                  >
                    {app.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(226,232,240,0.6)",
                      lineHeight: 1.6,
                      marginBottom: "20px",
                    }}
                  >
                    {app.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#d966ff",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    <span>立即使用</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Video */}
        <section style={{ marginBottom: "80px" }}>
          <h2 className="section-title">
            <span style={{ fontSize: "1.6rem" }}>🎬</span>
            和儿子 101 件疯狂的小事
          </h2>
          <div className="card fade-in-up" style={{ padding: "24px", maxWidth: "400px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <p style={{ color: "rgba(226,232,240,0.7)", fontSize: "0.9rem" }}>
                父子之间的疯狂冒险时光 ✨
              </p>
              <span className="tag tag-video">视频</span>
            </div>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "177.78%",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#0a0a1a",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/5beXWsGab0E"
                title="和儿子101件疯狂的小事"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "32px 24px",
          color: "rgba(226,232,240,0.3)",
          fontSize: "0.85rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p>© 2025 MaxYu · Built with AI ✨</p>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
      `}</style>
    </main>
  );
}
