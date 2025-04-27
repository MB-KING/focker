"use client";

import Header from "@/components/Header/Header";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("pull");

  const tabContent = {
    pull: {
      title: "دستور Pull مستقیم",
      description: "کافیست نام ایمیج را با پیشوند `focker.ir/` هنگام pull کردن اضافه کنید:",
      code: "docker pull focker.ir/nginx",
      explanation: "این دستور ایمیج nginx را از طریق پروکسی ما دریافت می‌کند که معمولاً در ایران و مناطق اطراف بسیار سریع‌تر است."
    },
    daemon: {
      title: "پیکربندی Docker Daemon",
      description: "برای پیکربندی دائمی، Focker.ir را به عنوان registry mirror در تنظیمات Docker daemon اضافه کنید:",
      code: `sudo tee /etc/docker/daemon.json <<EOF
{
  "registry-mirrors": ["https://focker.ir"]
}
EOF

sudo systemctl restart docker`,
      explanation: "پس از اعمال این پیکربندی، تمام pull های Docker شما به طور خودکار از mirror ما استفاده خواهند کرد."
    },
    compose: {
      title: "تغییر فایل‌های Docker Compose",
      description: "می‌توانید به سرعت فایل‌های docker-compose موجود را برای استفاده از mirror ما تغییر دهید:",
      code: `# Linux:
sed -i 's/^\\s*image:\\s*/&focker.ir\\//g' docker-compose.yml

# macOS:
sed -i '' 's/^[[:space:]]*image:[[:space:]]*/image: focker.ir\\//g' docker-compose.yml`,
      explanation: "این دستور به طور خودکار پیشوند Focker.ir را به تمام مراجع ایمیج در فایل docker-compose شما اضافه می‌کند."
    },
    kubernetes: {
      title: "تغییر فایل‌های Kubernetes Deployment",
      description: "مشابه docker-compose، می‌توانید فایل‌های deployment کوبرنتیز را تغییر دهید:",
      code: `# Linux:
sed -i 's/^\\s*image:\\s*/&focker.ir\\//g' deployment.yml

# macOS:
sed -i '' 's/^[[:space:]]*image:[[:space:]]*/image: focker.ir\\//g' deployment.yml`,
      explanation: "این دستور به طور خودکار پیشوند Focker.ir را به تمام مراجع ایمیج در فایل‌های deployment کوبرنتیز شما اضافه می‌کند."
    }
  };

  return (
    <main>
      <Header />
      <div className="container">
        <section className="hero">
          <h1>پروکسی میرو Docker</h1>
          <p>با استفاده از پروکسی میرو Focker.ir در ایران و مناطق اطراف، سرعت pull ایمیج‌های Docker خود را افزایش دهید</p>
          <div className="cta-buttons">
            <a href="#usage" className="primary-button">شروع کنید</a>
            <a href="#benefits" className="secondary-button">بیشتر بدانید</a>
          </div>
        </section>

        <section id="usage" className="usage-section">
          <h2>نحوه استفاده از Focker.ir</h2>
          <div className="tabs">
            <button 
              className={`tab-button ${activeTab === "pull" ? "active" : ""}`}
              onClick={() => setActiveTab("pull")}
            >
              دستور Pull
            </button>
            <button 
              className={`tab-button ${activeTab === "daemon" ? "active" : ""}`}
              onClick={() => setActiveTab("daemon")}
            >
              پیکربندی Daemon
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
                کپی
              </button>
            </div>
            <p>{tabContent[activeTab].explanation}</p>
          </div>
        </section>

        <section id="benefits" className="benefits-section">
          <h2>چرا از Focker.ir استفاده کنیم؟</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>دانلود سریع‌تر</h3>
              <p>سرورهای ما برای منطقه بهینه‌سازی شده‌اند و سرعت دانلود بسیار بالاتری نسبت به pull مستقیم از Docker Hub ارائه می‌دهند.</p>
            </div>
            <div className="benefit-card">
              <h3>دسترسی مطمئن</h3>
              <p>با استفاده از mirror مطمئن ما که همیشه در منطقه در دسترس است، از مشکلات اتصال به Docker Hub جلوگیری کنید.</p>
            </div>
            <div className="benefit-card">
              <h3>مقرون به صرفه</h3>
              <p>با استفاده از mirror محلی ما، مصرف پهنای باند بین‌المللی خود را کاهش دهید و در هزینه‌های شبکه صرفه‌جویی کنید.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <h2>سوالات متداول</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>آیا استفاده از Focker.ir رایگان است؟</h3>
              <p>بله، Focker.ir برای تمام کاربران Docker در منطقه کاملاً رایگان است. هدف ما پشتیبانی از جامعه توسعه‌دهندگان با ارائه دسترسی سریع‌تر به ایمیج‌های Docker است.</p>
            </div>
            <div className="faq-item">
              <h3>ایمیج‌ها هر چند وقت یکبار به‌روز می‌شوند؟</h3>
              <p>mirror ما هر 6 ساعت ایمیج‌ها را از Docker Hub به‌روز می‌کند. اگر به آخرین نسخه یک ایمیج نیاز دارید، می‌توانید با استفاده از پرچم `--no-cache` یک pull اجباری انجام دهید.</p>
            </div>
            <div className="faq-item">
              <h3>آیا همه ایمیج‌های Docker Hub در دسترس هستند؟</h3>
              <p>ما تمام ایمیج‌های عمومی Docker Hub را mirror می‌کنیم. اگر ایمیجی را پیدا کردید که از طریق mirror ما در دسترس نیست، لطفاً با ما تماس بگیرید تا آن را به کش خود اضافه کنیم.</p>
            </div>
            <div className="faq-item">
              <h3>آیا داده‌های من هنگام استفاده از Focker.ir امن هستند؟</h3>
              <p>ما فقط ایمیج‌های عمومی Docker را کش می‌کنیم و هیچ داده شخصی را ذخیره نمی‌کنیم. تمام checksum های ایمیج برای اطمینان از یکپارچگی با Docker Hub تأیید می‌شوند. برای ایمیج‌های خصوصی، باید همچنان مستقیماً از Docker Hub استفاده کنید.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 