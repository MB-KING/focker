"use client";

import Header from "@/components/Header/Header";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("pull");

  const tabContent = {
    pull: {
      title: "Direct Pull Command",
      description: "Simply prefix your image name with `focker.ir/` when pulling images:",
      code: "docker pull focker.ir/nginx",
      explanation: "This will pull the nginx image through our proxy mirror, which is typically much faster in Iran and nearby regions."
    },
    daemon: {
      title: "Configure Docker Daemon",
      description: "For permanent configuration, add Focker.ir as a registry mirror in your Docker daemon configuration:",
      code: `sudo tee /etc/docker/daemon.json <<EOF
{
  "registry-mirrors": ["https://focker.ir"]
}
EOF

sudo systemctl restart docker`,
      explanation: "After applying this configuration, all your Docker pulls will automatically use Focker.ir mirror."
    },
    compose: {
      title: "Modify Docker Compose Files",
      description: "You can quickly modify existing docker-compose files to use Focker.ir mirror:",
      code: `# Linux:
sed -i 's/^\\s*image:\\s*/&focker.ir\\//g' docker-compose.yml

# macOS:
sed -i '' 's/^[[:space:]]*image:[[:space:]]*/image: focker.ir\\//g' docker-compose.yml`,
      explanation: "This will automatically add the Focker.ir prefix to all image references in your docker-compose file."
    },
    kubernetes: {
      title: "Modify Kubernetes Deployment Files",
      description: "Similar to docker-compose, you can modify Kubernetes deployment files:",
      code: `# Linux:
sed -i 's/^\\s*image:\\s*/&focker.ir\\//g' deployment.yml

# macOS:
sed -i '' 's/^[[:space:]]*image:[[:space:]]*/image: focker.ir\\//g' deployment.yml`,
      explanation: "This will automatically add the Focker.ir prefix to all image references in your Kubernetes deployment files."
    }
  };

  return (
    <main>
      <Header />
      <div className="container">
        <section className="hero">
          <h1>Docker Proxy Mirror</h1>
          <p>Accelerate your Docker pulls with Focker.ir proxy mirror in Iran and nearby regions</p>
          <div className="cta-buttons">
            <a href="#usage" className="primary-button">Get Started</a>
            <a href="#benefits" className="secondary-button">Learn More</a>
          </div>
        </section>

        <section id="usage" className="usage-section">
          <h2>How to Use Focker.ir</h2>
          <div className="tabs">
            <button 
              className={`tab-button ${activeTab === "pull" ? "active" : ""}`}
              onClick={() => setActiveTab("pull")}
            >
              Pull Command
            </button>
            <button 
              className={`tab-button ${activeTab === "daemon" ? "active" : ""}`}
              onClick={() => setActiveTab("daemon")}
            >
              Daemon Config
            </button>
            <button 
              className={`tab-button ${activeTab === "compose" ? "active" : ""}`}
              onClick={() => setActiveTab("compose")}
            >
              Docker Compose
            </button>
            <button 
              className={`tab-button ${activeTab === "kubernetes" ? "active" : ""}`}
              onClick={() => setActiveTab("kubernetes")}
            >
              Kubernetes
            </button>
          </div>
          
          <div className="tab-content">
            <h3>{tabContent[activeTab].title}</h3>
            <p>{tabContent[activeTab].description}</p>
            <div className="code-block">
              <pre><code>{tabContent[activeTab].code}</code></pre>
              <button 
                className="copy-button" 
                onClick={() => navigator.clipboard.writeText(tabContent[activeTab].code)}
              >
                Copy
              </button>
            </div>
            <p>{tabContent[activeTab].explanation}</p>
          </div>
        </section>

        <section id="benefits" className="benefits-section">
          <h2>Why Use Focker.ir?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Faster Downloads</h3>
              <p>Our servers are optimized for the region, providing significantly faster download speeds compared to pulling directly from Docker Hub.</p>
            </div>
            <div className="benefit-card">
              <h3>Reliable Access</h3>
              <p>Avoid connectivity issues with Docker Hub by using our reliable mirror that's always available in the region.</p>
            </div>
            <div className="benefit-card">
              <h3>Cost Effective</h3>
              <p>Reduce your international bandwidth usage and save on networking costs by using our local mirror.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is Focker.ir free to use?</h3>
              <p>Yes, Focker.ir is completely free to use for all Docker users in the region. We aim to support the developer community by providing faster access to Docker images.</p>
            </div>
            <div className="faq-item">
              <h3>How often are images updated?</h3>
              <p>Our mirror updates images from Docker Hub every 6 hours. If you need the absolute latest version of an image, you can force a pull with the `--no-cache` flag.</p>
            </div>
            <div className="faq-item">
              <h3>Are all Docker Hub images available?</h3>
              <p>We mirror all public images from Docker Hub. If you find an image that's not available through our mirror, please contact us and we'll ensure it's added to our cache.</p>
            </div>
            <div className="faq-item">
              <h3>Is my data secure when using Focker.ir?</h3>
              <p>We only cache public Docker images and don't store any personal data. All image checksums are verified against Docker Hub to ensure integrity. For private images, you should continue to use Docker Hub directly.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
