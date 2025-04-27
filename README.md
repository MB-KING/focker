# Focker

Focker is a service for accessing Docker images without restrictions or sanctions. It provides a proxy mirror for Docker Hub that is optimized for Iran and nearby regions.

## Features

- Fast downloads through optimized servers
- Reliable access to Docker Hub images
- Cost-effective solution for international bandwidth
- Support for both English and Persian languages
- Dark/Light theme support
- Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/focker.git
cd focker
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### Direct Pull Command

Simply prefix your image name with `focker.ir/` when pulling images:

```bash
docker pull focker.ir/nginx
```

### Configure Docker Daemon

For permanent configuration, add Focker.ir as a registry mirror in your Docker daemon configuration:

```bash
sudo tee /etc/docker/daemon.json <<EOF
{
  "registry-mirrors": ["https://focker.ir"]
}
EOF

sudo systemctl restart docker
```

### Docker Compose

You can quickly modify existing docker-compose files to use Focker.ir mirror:

```bash
# Linux:
sed -i 's/^\\s*image:\\s*/&focker.ir\\//g' docker-compose.yml

# macOS:
sed -i '' 's/^[[:space:]]*image:[[:space:]]*/image: focker.ir\\//g' docker-compose.yml
```

### Kubernetes

Similar to docker-compose, you can modify Kubernetes deployment files:

```bash
# Linux:
sed -i 's/^\\s*image:\\s*/&focker.ir\\//g' deployment.yml

# macOS:
sed -i '' 's/^[[:space:]]*image:[[:space:]]*/image: focker.ir\\//g' deployment.yml
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Vazirmatn Font](https://github.com/rastikerdar/vazirmatn)
- [Inter Font](https://rsms.me/inter/)

## Project Structure

- `src/app`: Contains the main Next.js app files
  - `layout.js`: The root layout component
  - `page.js`: The home page component
  - `globals.css`: Global styles
- `src/components`: Reusable components
  - `Header`: The header component
- `src/assets`: Static assets
  - `fonts`: Font files
  - `images`: Image files

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
